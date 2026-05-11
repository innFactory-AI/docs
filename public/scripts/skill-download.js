(function () {
	var path = window.location.pathname;
	if (!path.includes('/tutorials/skills/')) return;

	document.addEventListener('DOMContentLoaded', function () {
		var skillHeading = document.getElementById('skill');
		if (!skillHeading) return;

		// Starlight wraps headings in <div class="sl-heading-wrapper">, navigate up
		var wrapper = skillHeading.closest('.sl-heading-wrapper') || skillHeading;

		// Find the next expressive-code block after the heading wrapper
		var el = wrapper.nextElementSibling;
		var codeContainer = null;
		while (el) {
			if (el.classList && el.classList.contains('expressive-code')) {
				codeContainer = el;
				break;
			}
			// Also check for a plain pre>code
			if (el.querySelector && el.querySelector('pre code')) {
				codeContainer = el;
				break;
			}
			// Stop if we hit another heading
			if (el.tagName && /^H[1-6]$/.test(el.tagName)) break;
			if (el.classList && el.classList.contains('sl-heading-wrapper')) break;
			el = el.nextElementSibling;
		}

		if (!codeContainer) return;

		var codeEl = codeContainer.querySelector('pre code');
		if (!codeEl) return;

		// Extract text content line-by-line from Expressive Code's .ec-line divs
		var lines = codeEl.querySelectorAll('.ec-line');
		var content;
		if (lines.length > 0) {
			var parts = [];
			for (var i = 0; i < lines.length; i++) {
				parts.push(lines[i].textContent);
			}
			content = parts.join('\n');
		} else {
			content = codeEl.textContent || codeEl.innerText;
		}
		if (!content || !content.trim()) return;

		// Determine language and filename
		var isGerman = path.includes('/de/');
		var slug = path.replace(/\/+$/, '').split('/').pop();
		var filename = (slug || 'skill') + '.md';
		var buttonText = isGerman ? 'Skill herunterladen' : 'Download Skill';

		// Create button
		var btn = document.createElement('button');
		btn.type = 'button';
		btn.className = 'skill-download-btn';
		btn.innerHTML =
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> ' +
			buttonText;

		btn.addEventListener('click', function () {
			var blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
			var url = URL.createObjectURL(blob);
			var a = document.createElement('a');
			a.href = url;
			a.download = filename;
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			URL.revokeObjectURL(url);
		});

		// Insert button after the heading wrapper, before the code block
		wrapper.insertAdjacentElement('afterend', btn);
	});
})();
