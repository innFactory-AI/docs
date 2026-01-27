/**
 * innFactory Privacy-First Analytics
 * 
 * Server-side analytics proxy for GDPR-compliant tracking.
 * Events are sent to our API which forwards them to GA4 via Measurement Protocol.
 * No third-party cookies, no external scripts loaded.
 * 
 * Storage keys use minimal naming for technical optimization:
 * - _c: Device identifier for session continuity
 * - _s: Current session identifier  
 * - _t: Session activity timestamp
 * 
 * @version 2.0.0
 */
(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    endpoint: '/api/v1/analytics',
    debug: false,
    scrollThresholds: [25, 50, 75, 90, 100],
    engagementInterval: 15000, // 15 seconds
    batchSize: 10,
    batchTimeout: 2000 // 2 seconds
  };

  // State
  const state = {
    clientId: null,
    sessionId: null,
    pageLoadTime: Date.now(),
    scrolledThresholds: new Set(),
    engagementTime: 0,
    isEngaged: false,
    eventQueue: [],
    batchTimer: null,
    lastActivity: Date.now()
  };

  // =====================================================================
  // Utility Functions
  // =====================================================================

  /**
   * Generate a UUID v4
   */
  function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  /**
   * Get or create client ID (persistent across sessions)
   */
  function getClientId() {
    if (state.clientId) return state.clientId;
    
    try {
      let clientId = localStorage.getItem('_c');
      if (!clientId) {
        clientId = generateUUID();
        localStorage.setItem('_c', clientId);
      }
      state.clientId = clientId;
      return clientId;
    } catch (e) {
      // localStorage blocked, use session-only ID
      state.clientId = generateUUID();
      return state.clientId;
    }
  }

  /**
   * Get or create session ID (refreshed after 30min inactivity)
   */
  function getSessionId() {
    if (state.sessionId) return state.sessionId;
    
    try {
      const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
      const stored = sessionStorage.getItem('_s');
      const lastActivity = parseInt(sessionStorage.getItem('_t') || '0', 10);
      
      if (stored && (Date.now() - lastActivity) < SESSION_TIMEOUT) {
        state.sessionId = stored;
      } else {
        state.sessionId = generateUUID();
        sessionStorage.setItem('_s', state.sessionId);
      }
      sessionStorage.setItem('_t', Date.now().toString());
      return state.sessionId;
    } catch (e) {
      state.sessionId = generateUUID();
      return state.sessionId;
    }
  }

  /**
   * Get scroll percentage
   */
  function getScrollPercent() {
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
    const winHeight = window.innerHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    if (docHeight <= winHeight) return 100;
    return Math.round((scrollTop / (docHeight - winHeight)) * 100);
  }

  /**
   * Check if element is a valid tracking target
   */
  function isTrackableElement(el) {
    if (!el || !el.tagName) return false;
    const tag = el.tagName.toLowerCase();
    return ['a', 'button', 'input', 'select', 'textarea'].includes(tag) ||
           el.hasAttribute('data-track') ||
           el.classList.contains('btn') ||
           el.closest('[data-track]');
  }

  /**
   * Get element identifier for tracking
   */
  function getElementId(el) {
    if (el.id) return el.id;
    if (el.name) return el.name;
    if (el.dataset.track) return el.dataset.track;
    if (el.classList.length) return '.' + Array.from(el.classList).slice(0, 2).join('.');
    return el.tagName.toLowerCase();
  }

  /**
   * Get link domain
   */
  function getLinkDomain(url) {
    try {
      return new URL(url).hostname;
    } catch (e) {
      return '';
    }
  }

  /**
   * Check if link is external
   */
  function isExternalLink(url) {
    try {
      const linkHost = new URL(url, window.location.origin).hostname;
      return linkHost !== window.location.hostname;
    } catch (e) {
      return false;
    }
  }

  /**
   * Check if link is a download
   */
  function isDownloadLink(url) {
    const downloadExtensions = [
      '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx',
      '.zip', '.rar', '.7z', '.tar', '.gz',
      '.mp3', '.mp4', '.avi', '.mov', '.wmv',
      '.exe', '.dmg', '.apk'
    ];
    const lowercaseUrl = url.toLowerCase();
    return downloadExtensions.some(ext => lowercaseUrl.includes(ext));
  }

  /**
   * Get file extension from URL
   */
  function getFileExtension(url) {
    const match = url.match(/\.([a-zA-Z0-9]+)(?:\?|#|$)/);
    return match ? match[1].toLowerCase() : '';
  }

  /**
   * Get device category based on screen size and touch capability
   */
  function getDeviceCategory() {
    const width = window.innerWidth;
    const hasTouch = navigator.maxTouchPoints > 0;
    
    if (width <= 480 || (hasTouch && width <= 768)) {
      return 'mobile';
    } else if (width <= 1024 && hasTouch) {
      return 'tablet';
    }
    return 'desktop';
  }

  /**
   * Get timezone
   */
  function getTimezone() {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    } catch (e) {
      return '';
    }
  }

  /**
   * Get connection type (if available)
   */
  function getConnectionType() {
    try {
      const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      return conn ? (conn.effectiveType || '') : '';
    } catch (e) {
      return '';
    }
  }

  // =====================================================================
  // Event Queue & Sending
  // =====================================================================

  /**
   * Queue an event for sending
   * Uses obfuscated field names for privacy
   */
  function queueEvent(eventName, eventParams) {
    // Build event with obfuscated field names
    const event = {
      c: getClientId(),           // client_id
      s: getSessionId(),          // session_id
      e: eventName,               // event_name
      x: eventParams || {},       // event_params (x for "extra")
      u: window.location.href,    // page_url
      p: window.location.pathname, // page_path
      t: document.title,          // page_title
      r: document.referrer,       // page_referrer
      sr: window.screen.width + 'x' + window.screen.height, // screen_resolution
      vp: window.innerWidth + 'x' + window.innerHeight,     // viewport_size
      ua: navigator.userAgent,    // user_agent
      l: navigator.language,      // language
      ts: Date.now(),             // timestamp
      // Enhanced client signals
      dc: getDeviceCategory(),    // device_category
      cp: navigator.hardwareConcurrency || 0, // cpu_cores
      tp: navigator.maxTouchPoints || 0,      // touch_points
      tz: getTimezone(),          // timezone
      cn: getConnectionType()     // connection_type
    };

    state.eventQueue.push(event);
    
    if (CONFIG.debug) {
      console.log('[Analytics] Queued:', eventName, eventParams);
    }

    // Send immediately if queue is full
    if (state.eventQueue.length >= CONFIG.batchSize) {
      sendEvents();
    } else {
      // Schedule batch send
      if (state.batchTimer) clearTimeout(state.batchTimer);
      state.batchTimer = setTimeout(sendEvents, CONFIG.batchTimeout);
    }
  }

  /**
   * Send queued events to server
   */
  function sendEvents() {
    if (state.eventQueue.length === 0) return;

    const events = state.eventQueue.splice(0, CONFIG.batchSize);
    
    if (CONFIG.debug) {
      console.log('[Analytics] Sending', events.length, 'events');
    }

    // Use sendBeacon for reliability (works even when page is closing)
    const data = JSON.stringify({ events: events });
    
    if (navigator.sendBeacon) {
      navigator.sendBeacon(CONFIG.endpoint, data);
    } else {
      // Fallback to fetch
      fetch(CONFIG.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data,
        keepalive: true
      }).catch(function(err) {
        if (CONFIG.debug) console.error('[Analytics] Send failed:', err);
      });
    }
  }

  // =====================================================================
  // Event Tracking
  // =====================================================================

  /**
   * Track page view
   */
  function trackPageView() {
    queueEvent('page_view', {
      page_location: window.location.href,
      page_title: document.title,
      page_referrer: document.referrer
    });
  }

  /**
   * Track click events
   */
  function trackClick(event) {
    const target = event.target.closest('a, button, [data-track]');
    if (!target) return;

    const params = {
      element_id: getElementId(target),
      element_text: (target.textContent || '').trim().substring(0, 100),
      element_tag: target.tagName.toLowerCase()
    };

    // Handle links
    if (target.tagName.toLowerCase() === 'a' && target.href) {
      params.link_url = target.href;
      params.link_domain = getLinkDomain(target.href);

      // Check for download
      if (isDownloadLink(target.href)) {
        queueEvent('file_download', {
          file_name: target.href.split('/').pop().split('?')[0],
          file_extension: getFileExtension(target.href),
          link_url: target.href
        });
        return;
      }

      // Check for outbound link
      if (isExternalLink(target.href)) {
        queueEvent('outbound_click', {
          link_url: target.href,
          link_domain: params.link_domain,
          link_text: params.element_text
        });
        return;
      }
    }

    // CTA buttons get special tracking
    if (target.classList.contains('btn') || 
        target.classList.contains('nav-cta') ||
        target.dataset.track === 'cta') {
      queueEvent('cta_click', params);
      return;
    }

    // Regular click
    queueEvent('click', params);
  }

  /**
   * Track scroll depth
   */
  function trackScroll() {
    const percent = getScrollPercent();
    
    CONFIG.scrollThresholds.forEach(function(threshold) {
      if (percent >= threshold && !state.scrolledThresholds.has(threshold)) {
        state.scrolledThresholds.add(threshold);
        queueEvent('scroll', {
          percent_scrolled: threshold
        });
      }
    });
  }

  /**
   * Track engagement time
   */
  function trackEngagement() {
    if (!state.isEngaged) return;
    
    state.engagementTime += CONFIG.engagementInterval;
    
    queueEvent('user_engagement', {
      engagement_time_msec: state.engagementTime
    });
  }

  /**
   * Track form interactions
   */
  function trackFormStart(event) {
    const form = event.target.closest('form');
    if (!form || form.dataset.tracked) return;
    
    form.dataset.tracked = 'true';
    
    queueEvent('form_start', {
      form_id: form.id || 'unknown',
      form_name: form.name || form.id || 'unknown',
      form_destination: form.action || ''
    });
  }

  function trackFormSubmit(event) {
    const form = event.target;
    
    queueEvent('form_submit', {
      form_id: form.id || 'unknown',
      form_name: form.name || form.id || 'unknown',
      form_destination: form.action || ''
    });
  }

  /**
   * Track video interactions (YouTube embeds)
   */
  function trackVideoPlay(videoElement) {
    const iframe = videoElement.closest('iframe');
    let videoTitle = 'unknown';
    let videoProvider = 'unknown';
    
    if (iframe && iframe.src) {
      if (iframe.src.includes('youtube')) {
        videoProvider = 'youtube';
        videoTitle = iframe.title || 'YouTube Video';
      } else if (iframe.src.includes('vimeo')) {
        videoProvider = 'vimeo';
        videoTitle = iframe.title || 'Vimeo Video';
      }
    }
    
    queueEvent('video_start', {
      video_title: videoTitle,
      video_provider: videoProvider,
      video_url: iframe ? iframe.src : ''
    });
  }

  // =====================================================================
  // Event Listeners
  // =====================================================================

  /**
   * Set up all event listeners
   */
  function setupListeners() {
    // Click tracking
    document.addEventListener('click', trackClick, { passive: true });

    // Scroll tracking (throttled)
    let scrollTimer;
    document.addEventListener('scroll', function() {
      if (scrollTimer) return;
      scrollTimer = setTimeout(function() {
        scrollTimer = null;
        trackScroll();
      }, 100);
    }, { passive: true });

    // Form tracking
    document.addEventListener('focusin', trackFormStart, { passive: true });
    document.addEventListener('submit', trackFormSubmit);

    // Engagement tracking
    const engagementEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    engagementEvents.forEach(function(eventType) {
      document.addEventListener(eventType, function() {
        state.isEngaged = true;
        state.lastActivity = Date.now();
      }, { passive: true });
    });

    // Check engagement every interval
    setInterval(function() {
      // Reset engagement if inactive for 30 seconds
      if (Date.now() - state.lastActivity > 30000) {
        state.isEngaged = false;
      }
      trackEngagement();
    }, CONFIG.engagementInterval);

    // Track time on page when leaving
    document.addEventListener('visibilitychange', function() {
      if (document.visibilityState === 'hidden') {
        const timeOnPage = Date.now() - state.pageLoadTime;
        queueEvent('page_exit', {
          time_on_page_msec: timeOnPage,
          engagement_time_msec: state.engagementTime,
          max_scroll_percent: Math.max(...state.scrolledThresholds, 0)
        });
        sendEvents();
      }
    });

    // Also track on beforeunload for browsers that don't support visibilitychange well
    window.addEventListener('beforeunload', function() {
      sendEvents();
    });

    // History API tracking for SPA-like navigation
    const originalPushState = history.pushState;
    history.pushState = function() {
      originalPushState.apply(history, arguments);
      // Reset scroll tracking for new page
      state.scrolledThresholds.clear();
      state.pageLoadTime = Date.now();
      trackPageView();
    };

    window.addEventListener('popstate', function() {
      state.scrolledThresholds.clear();
      state.pageLoadTime = Date.now();
      trackPageView();
    });
  }

  // =====================================================================
  // Initialization
  // =====================================================================

  /**
   * Initialize analytics
   */
  function init() {
    // Check for Do Not Track (respect user preference)
    if (navigator.doNotTrack === '1') {
      if (CONFIG.debug) console.log('[Analytics] Do Not Track enabled, tracking disabled');
      return;
    }

    // Initialize IDs
    getClientId();
    getSessionId();

    // Set up listeners
    setupListeners();

    // Track initial page view
    if (document.readyState === 'complete') {
      trackPageView();
    } else {
      window.addEventListener('load', trackPageView);
    }

    if (CONFIG.debug) {
      console.log('[Analytics] Initialized', {
        clientId: state.clientId,
        sessionId: state.sessionId
      });
    }
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose public API for custom event tracking
  window.ifAnalytics = {
    track: function(eventName, params) {
      queueEvent(eventName, params);
    },
    flush: sendEvents
  };

})();