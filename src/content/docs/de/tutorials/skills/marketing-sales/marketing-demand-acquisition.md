---
title: Demand Generation & Akquisition
description: Erstelle Nachfragekampagnen, optimiere Paid-Ads-Ausgaben über LinkedIn, Google und Meta und entwickle SEO- sowie Partnerschaftsstrategien für wachsende Unternehmen.
---

Verwende diesen Skill für die Planung von Marketingstrategien, Wachstumsmarketing, Werbekampagnen, PPC-Optimierung, Lead-Generierung und Pipeline-Aufbau über mehrere Kanäle hinweg.

## Skill

````markdown
---
name: "marketing-demand-acquisition"
description: Creates demand generation campaigns, optimizes paid ad spend across LinkedIn, Google, and Meta, develops SEO strategies, and structures partnership programs for Series A+ startups scaling internationally. Use when planning marketing strategy, growth marketing, advertising campaigns, PPC optimization, lead generation, pipeline generation, or startup marketing budgets. Covers multi-channel acquisition (Google Ads, LinkedIn Ads, Meta Ads), CAC analysis, MQL/SQL workflows, attribution modeling, technical SEO, and co-marketing partnerships for hybrid PLG/Sales-Led motions in EU/US/Canada markets.
---

# Marketing Demand & Acquisition

Acquisition playbook for Series A+ startups scaling internationally (EU/US/Canada) with hybrid PLG/Sales-Led motion.

## Core KPIs

**Demand Gen:** MQL/SQL volume, cost per opportunity, marketing-sourced pipeline $, MQL→SQL rate

**Paid Media:** CAC, ROAS, CPL, CPA, channel efficiency ratio

**SEO:** Organic sessions, non-brand traffic %, keyword rankings, technical health score

**Partnerships:** Partner-sourced pipeline $, partner CAC, co-marketing ROI

---

## Demand Generation Framework

### Funnel Stages

| Stage | Tactics | Target |
|-------|---------|--------|
| TOFU | Paid social, display, content syndication, SEO | Brand awareness, traffic |
| MOFU | Paid search, retargeting, gated content, email nurture | MQLs, demo requests |
| BOFU | Brand search, direct outreach, case studies, trials | SQLs, pipeline $ |

### Campaign Planning Workflow

1. Define objective, budget, duration, audience
2. Select channels based on funnel stage
3. Create campaign in HubSpot with proper UTM structure
4. Configure lead scoring and assignment rules
5. Launch with test budget, validate tracking
6. **Validation:** UTM parameters appear in HubSpot contact records

### UTM Structure

```
utm_source={channel}       // linkedin, google, meta
utm_medium={type}          // cpc, display, email
utm_campaign={campaign-id} // q1-2025-linkedin-enterprise
utm_content={variant}      // ad-a, email-1
utm_term={keyword}         // [paid search only]
```

---

## Paid Media Channels

### Channel Selection Matrix

| Channel | Best For | CAC Range | Series A Priority |
|---------|----------|-----------|-------------------|
| LinkedIn Ads | B2B, Enterprise, ABM | $150-400 | High |
| Google Search | High-intent, BOFU | $80-250 | High |
| Google Display | Retargeting | $50-150 | Medium |
| Meta Ads | SMB, visual products | $60-200 | Medium |

### LinkedIn Ads Setup

1. Create campaign group for initiative
2. Structure: Awareness → Consideration → Conversion campaigns
3. Target: Director+, 50-5000 employees, relevant industries
4. Start $50/day per campaign
5. Scale 20% weekly if CAC < target

### Google Ads Setup

1. Prioritize: Brand → Competitor → Solution → Category keywords
2. Structure ad groups with 5-10 tightly themed keywords
3. Create 3 responsive search ads per ad group
4. Maintain negative keyword list (100+)
5. Start Manual CPC, switch to Target CPA after 50+ conversions

### Budget Allocation (Series A, $40k/month)

| Channel | Budget | Expected SQLs |
|---------|--------|---------------|
| LinkedIn | $15k | 10 |
| Google Search | $12k | 20 |
| Google Display | $5k | 5 |
| Meta | $5k | 8 |
| Partnerships | $3k | 5 |

---

## SEO Strategy

### Technical Foundation Checklist

- [ ] XML sitemap submitted to Search Console
- [ ] Robots.txt configured correctly
- [ ] HTTPS enabled
- [ ] Page speed >90 mobile
- [ ] Core Web Vitals passing
- [ ] Structured data implemented
- [ ] Canonical tags on all pages
- [ ] Hreflang tags for international

### Keyword Strategy

| Tier | Type | Volume | Priority |
|------|------|--------|----------|
| 1 | High-intent BOFU | 100-1k | First |
| 2 | Solution-aware MOFU | 500-5k | Second |
| 3 | Problem-aware TOFU | 1k-10k | Third |

---

## Partnerships

### Partnership Tiers

| Tier | Type | Effort | ROI |
|------|------|--------|-----|
| 1 | Strategic integrations | High | Very high |
| 2 | Affiliate partners | Medium | Medium-high |
| 3 | Customer referrals | Low | Medium |
| 4 | Marketplace listings | Medium | Low-medium |

---

## Attribution

### Model Selection

| Model | Use Case |
|-------|----------|
| First-Touch | Awareness campaigns |
| Last-Touch | Direct response |
| W-Shaped (40-20-40) | Hybrid PLG/Sales (recommended) |

### Weekly Metrics Dashboard

| Metric | Target |
|--------|--------|
| MQLs | Weekly target |
| SQLs | Weekly target |
| MQL→SQL Rate | >15% |
| Blended CAC | <$300 |
| Pipeline Velocity | <60 days |

---

## MQL→SQL Handoff

### SQL Criteria

```
Required:
✅ Job title: Director+ or budget authority
✅ Company size: 50-5000 employees
✅ Budget: $10k+ annual
✅ Timeline: Buying within 90 days
✅ Engagement: Demo requested or high-intent action
```

### SLA

| Handoff | Target |
|---------|--------|
| SDR responds to MQL | 4 hours |
| AE books demo with SQL | 24 hours |
| First demo scheduled | 3 business days |

## Proactive Triggers

- **Over-relying on one channel** → Single-channel dependency is a business risk. Diversify.
- **No lead scoring** → Not all leads are equal. Route to revenue-operations for scoring.
- **CAC exceeding LTV** → Demand gen is unprofitable. Optimize or cut channels.
- **No nurture for non-ready leads** → 80% of leads aren't ready to buy. Nurture converts them later.

## Channel Benchmarks (B2B SaaS Series A)

| Metric | LinkedIn | Google Search | SEO | Email |
|--------|----------|---------------|-----|-------|
| CTR | 0.4-0.9% | 2-5% | 1-3% | 15-25% |
| CVR | 1-3% | 3-7% | 2-5% | 2-5% |
| CAC | $150-400 | $80-250 | $50-150 | $20-80 |
| MQL→SQL | 10-20% | 15-25% | 12-22% | 8-15% |
````

Quelle: [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) — MIT License
