# CyberCrime Encyclopedia

A comprehensive, client-side reference database covering cybercrime categories, threat actor profiles, attack techniques, dark web intelligence, security terminology, and free learning resources — built as a single-page application with no backend or dependencies.

---

## Overview

The CyberCrime Encyclopedia is a structured knowledge base designed for security professionals, students, researchers, and anyone looking to understand the cybersecurity threat landscape. Every entry is detailed, sourced from real-world incidents, and written to be useful at both introductory and professional levels.

The application runs entirely in the browser — open `index.html` and it works. No server, no build tools, no npm.

---

## Features

- **Full-text search** across all sections simultaneously
- **Filter system** — filter by severity, type, category, or cost
- **Detail modals** — click any entry for the full in-depth writeup
- **Interactive timeline** — chronological history from 1971 to 2026
- **Responsive layout** — works on desktop and mobile
- **Matrix rain background** — subtle animated canvas effect
- **Zero dependencies** — pure HTML, CSS, and vanilla JavaScript

---

## Database Contents

| Section | Entries | Description |
|---|---|---|
| Cybercrimes | 12 | Phishing, ransomware, identity theft, DDoS, data breaches, cyber espionage, and more |
| History | 25 | Timeline from the 1971 Creeper worm through 2026 |
| Hackers & Groups | 11 | Individual hackers, hacktivist collectives, state-sponsored APTs |
| Terminology | 32 | Zero-days, CVEs, APTs, TTPs, OSINT, CTFs, and more |
| Attack Techniques | 14 | SQLi, XSS, MITM, ransomware chains, supply chain, OWASP Top 10, and more |
| Dark / Deep Web | 5 | Tor, dark web markets, OPSEC, I2P, law enforcement takedowns |
| YouTube Channels | 14 | Top cybersecurity channels for learning and research |
| Free Training | 15 | Free and freemium platforms from beginner to expert level |

---

## History Timeline Coverage

The history section spans over 50 years of cybersecurity events:

**1970s–1990s** — Creeper worm, Morris Worm, first CFAA conviction, early phishing
**2000s** — ILOVEYOU virus, Anonymous origins, Estonia cyberattacks, Stuxnet
**2010s** — LulzSec, Snowden revelations, WannaCry, NotPetya, SolarWinds
**2020–2022** — Colonial Pipeline, Lapsus$, Log4Shell
**2023** — MOVEit, AI-powered attacks, MGM/Caesars breaches, Operation Cookie Monster
**2024** — XZ Utils backdoor, Change Healthcare ($1.5B breach), Salt Typhoon telecom espionage, National Public Data (2.9B records), LockBit takedown
**2025** — Bybit hack ($1.5B crypto theft by Lazarus Group), Volt Typhoon critical infrastructure pre-positioning, agentic AI attacks
**2026** — Global telecom infrastructure campaigns, Ransomware 3.0 with quadruple extortion and AI orchestration

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom properties, CSS Grid, Flexbox) |
| Logic | Vanilla JavaScript (ES6+) |
| Icons | Inline SVG (Heroicons outline) |
| Fonts | Segoe UI / system-ui (UI); Consolas / Courier New (code elements) |
| Animation | HTML5 Canvas (matrix rain) |

No frameworks. No build steps. No external requests at runtime.

---

## Project Structure

```
CyberSec/
├── index.html      # App shell, layout, SVG icons, modal structure
├── style.css       # Complete design system — dark professional theme
├── app.js          # Routing, rendering, search, filters, modal logic
└── data.js         # Full encyclopedia database (~1,900 lines)
```

---

## Getting Started

**Option 1 — Open directly:**
```
Double-click index.html
```

**Option 2 — Local server (recommended for some browsers):**
```bash
# Python
python -m http.server 8000

# Node
npx serve .
```
Then open `http://localhost:8000`

---

## Screenshots

### Home
Clean stats dashboard with clickable category cards and a subtle animated background.

### History Timeline
Chronological timeline with severity badges, expandable detail modals, and entries spanning 1971–2026.

### Hacker Profiles
Filterable cards for individuals, groups, criminal organisations, and state-sponsored APTs — with full operation histories in modals.

### Terminology Glossary
32 terms organised by category (attack, defense, malware, threat intel, privacy) with full definitions on click.

### Dark / Deep Web
Internet layer visualisation (Surface / Deep / Dark), Tor network breakdown, marketplace history, and law enforcement operations.

---

## Design

- **Theme:** Professional dark navy — aligned with the visual language of the cybersecurity industry (CrowdStrike, Palo Alto Networks, Recorded Future)
- **Primary accent:** `#3b82f6` (blue)
- **Severity colours:** Red (critical) · Amber (high) · Blue (medium) · Green (low)
- **Typography:** System sans-serif for UI; monospace for technical identifiers, years, and code elements
- **No emojis** in the interface — clean SVG icons throughout

---

## Sections Detail

### Cybercrimes
Each entry covers: description, variants, how it works, notable real-world cases, legal classification, and key statistics.

### Hackers & Groups
Profiles include: aliases, nationality, era, type (individual / group / criminal-group / state-sponsored), operational history, techniques used, legal outcome or current status, and key metadata.

### Attack Techniques
Entries cover: attack mechanics, variants, tools used, example payloads or indicators, notable cases, and defensive mitigations.

### Free Training Platforms
Each platform is tagged as **Free** or **Freemium**, with a description of content, topic tags, and a direct link. Covers TryHackMe, Hack The Box, PortSwigger Web Security Academy, PicoCTF, OverTheWire, MITRE ATT&CK, and more.

---

## Contributing

Entries can be added directly to `data.js` following the existing object structure for each section. Each entry requires at minimum: `id`, `name`, `tags`, `shortDesc`, and `content`.

Pull requests for new entries, corrections, or updated statistics are welcome.

---

## Disclaimer

This project is intended for **educational and research purposes only**. All information is sourced from publicly available reports, academic research, news coverage, and official government disclosures. Nothing in this database constitutes instructions for illegal activity.

---

## Author

**Teodor Kostov**

---

## License

MIT License — free to use, modify, and distribute with attribution.
