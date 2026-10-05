# Bazaarwise

A merchant growth and decision-support platform for small shops in India.

**Data -> Insight -> Prediction -> Recommendation -> Action -> Measured value.**

Most merchant software answers "what happened?". Bazaarwise answers "what is likely
to happen, why, and what should I do today?", delivered as a short WhatsApp voice
brief every morning.

## Site files

| File | Purpose |
| --- | --- |
| `index.html` | Marketing page: problem, how it works, capabilities, local signals, positioning, KPIs, roadmap, early access form |
| `privacy.html` | Privacy policy, including rules for aggregated neighbourhood insights |
| `terms.html` | Terms and conditions |
| `styles.css` | Editorial, restrained design system. No gradients, no pill buttons, no scroll animation |
| `script.js` | Mobile navigation toggle and early access form validation |
| `favicon.svg` | Favicon (SVG) |

## Design rules this site follows

- No purple gradients, no pill-shaped buttons
- No em dashes, no emoji icons, no vague hero copy
- No fake reviews, fake metrics, or fake customer counters
- No stock or AI-generated photos: the product sample is hand-built HTML
- No scroll animation theatre or cursor effects
- Privacy policy and terms pages ship with the site

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Before launch checklist

- [ ] Connect the custom domain and update `<title>`/canonical URLs
- [ ] Point the early access form at a real endpoint (currently client-side only)
- [ ] Replace `privacy@bazaarwise.in` and `legal@bazaarwise.in` with monitored addresses
- [ ] Add Open Graph tags once the domain is final
