// ═══════════════════════════════════════════════
//  CYBERCRIME ENCYCLOPEDIA  ·  App Logic
// ═══════════════════════════════════════════════

'use strict';

// ── STATE ──────────────────────────────────────
let currentView = 'home';
let searchQuery = '';

// ── INIT ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initMatrix();
  initNav();
  initSearch();
  initModal();
  initHamburger();
  renderView('home');
});

// ── MATRIX RAIN ────────────────────────────────
function initMatrix() {
  const canvas = document.getElementById('matrix-canvas');
  const ctx    = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const chars  = '0123456789ABCDEF><{}[]|/\\01アイウエオカキクケコ';
  const fs     = 13;
  let cols     = Math.floor(canvas.width / fs);
  let drops    = Array(cols).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(7,9,15,0.06)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#3b82f6';
    ctx.font = `${fs}px monospace`;
    for (let i = 0; i < drops.length; i++) {
      ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fs, drops[i] * fs);
      if (drops[i] * fs > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }

  setInterval(draw, 55);
  window.addEventListener('resize', () => {
    cols  = Math.floor(canvas.width / fs);
    drops = Array(cols).fill(1);
  });
}

// ── NAVIGATION ─────────────────────────────────
function initNav() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      setActiveNav(item.dataset.view);
      renderView(item.dataset.view);
      closeSidebar();
    });
  });
}

function setActiveNav(view) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const el = document.querySelector(`.nav-item[data-view="${view}"]`);
  if (el) el.classList.add('active');
  currentView = view;
}

// ── SEARCH ─────────────────────────────────────
function initSearch() {
  const input = document.getElementById('search-input');
  let timer;

  input.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      searchQuery = input.value.trim();
      if (searchQuery.length >= 2) renderSearch(searchQuery);
      else if (searchQuery.length === 0) renderView(currentView);
    }, 260);
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') { input.value = ''; searchQuery = ''; renderView(currentView); }
  });
}

function renderSearch(query) {
  const q = query.toLowerCase();
  const results = [];

  DB.cybercrimes.forEach(e => { if (matches(e, q))      results.push({ ...e, _section: 'cybercrimes', _label: 'Cybercrime'   }); });
  DB.history.forEach(e =>     { if (matches(e, q))      results.push({ ...e, _section: 'history',     _label: 'History'      }); });
  DB.hackers.forEach(e =>     { if (matches(e, q))      results.push({ ...e, _section: 'hackers',     _label: 'Hacker'       }); });
  DB.terminology.forEach(e => { if (matchesTerm(e, q))  results.push({ ...e, _section: 'terminology', _label: 'Term'         }); });
  DB.attacks.forEach(e =>     { if (matches(e, q))      results.push({ ...e, _section: 'attacks',     _label: 'Attack Type'  }); });
  DB.darkweb.entries.forEach(e => { if (matches(e, q))  results.push({ ...e, _section: 'darkweb',     _label: 'Dark Web'     }); });
  DB.channels.forEach(e =>   { if (matchesChannel(e, q)) results.push({ ...e, _section: 'channels',  _label: 'Channel'      }); });
  DB.training.forEach(e =>   { if (matchesChannel(e, q)) results.push({ ...e, _section: 'training',  _label: 'Training'     }); });

  const root = document.getElementById('view-root');

  if (results.length === 0) {
    root.innerHTML = `
      <div class="no-results fade-in">
        <svg class="no-results-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
          <circle cx="11" cy="11" r="8"/><path stroke-linecap="round" d="m21 21-4.35-4.35"/>
        </svg>
        <p>No results for <strong>"${escHtml(query)}"</strong></p>
        <p style="font-size:.75rem;margin-top:4px;color:var(--txt3)">Try a different keyword</p>
      </div>`;
    return;
  }

  const cards = results.map(r => {
    if (r._section === 'terminology') return renderGlossaryCard(r, true);
    if (r._section === 'channels')    return renderChannelCardHtml(r);
    if (r._section === 'training')    return renderTrainingCardHtml(r);
    if (r._section === 'history')     return renderTimelineItem(r, true);
    return renderCard(r, r._section);
  }).join('');

  root.innerHTML = `
    <div class="fade-in">
      <p class="search-results-label">
        <span>${results.length}</span> result${results.length !== 1 ? 's' : ''}
        for <span>"${escHtml(query)}"</span>
      </p>
      <div class="card-grid">${cards}</div>
    </div>`;
  bindCards(root);
}

function matches(e, q) {
  return (e.name      || '').toLowerCase().includes(q)
      || (e.aka       || '').toLowerCase().includes(q)
      || (e.shortDesc || e.desc || '').toLowerCase().includes(q)
      || (e.tags      || []).some(t => t.toLowerCase().includes(q))
      || (e.content   || '').toLowerCase().includes(q);
}
function matchesTerm(e, q) {
  return e.term.toLowerCase().includes(q)
      || (e.abbr || '').toLowerCase().includes(q)
      || e.def.toLowerCase().includes(q);
}
function matchesChannel(e, q) {
  return e.name.toLowerCase().includes(q)
      || (e.desc || '').toLowerCase().includes(q)
      || (e.topics || []).some(t => t.toLowerCase().includes(q));
}

// ── HAMBURGER ──────────────────────────────────
function initHamburger() {
  const btn  = document.getElementById('hamburger');
  const side = document.getElementById('sidebar');
  btn.addEventListener('click', () => side.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!side.contains(e.target) && !btn.contains(e.target)) side.classList.remove('open');
  });
}
function closeSidebar() { document.getElementById('sidebar').classList.remove('open'); }

// ── MODAL ──────────────────────────────────────
function initModal() {
  const overlay = document.getElementById('modal-overlay');
  document.getElementById('modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function openModal(html) {
  document.getElementById('modal-body').innerHTML = html;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ── ROUTER ─────────────────────────────────────
function renderView(view) {
  const root = document.getElementById('view-root');
  document.getElementById('search-input').value = '';
  searchQuery = '';

  const map = {
    home:        renderHome,
    cybercrimes: renderCybercrimes,
    history:     renderHistory,
    hackers:     renderHackers,
    terminology: renderTerminology,
    attacks:     renderAttacks,
    darkweb:     renderDarkWeb,
    channels:    renderChannels,
    training:    renderTraining,
  };

  const fn = map[view];
  if (!fn) return;
  root.innerHTML = fn();
  root.firstElementChild?.classList.add('fade-in');
  bindCards(root);
}

// ── BIND CARD CLICKS ───────────────────────────
function bindCards(root) {
  root.querySelectorAll('[data-modal]').forEach(el => {
    el.addEventListener('click', () => {
      const html = buildModalHtml(el.dataset.modal, el.dataset.id);
      if (html) openModal(html);
    });
  });
}

// ── MODAL CONTENT BUILDER ──────────────────────
function buildModalHtml(section, id) {
  const find = {
    cybercrimes: () => DB.cybercrimes.find(e => e.id === id),
    history:     () => DB.history.find(e => e.id === id),
    hackers:     () => DB.hackers.find(e => e.id === id),
    attacks:     () => DB.attacks.find(e => e.id === id),
    terminology: () => DB.terminology.find(e => e.id === id),
    darkweb:     () => DB.darkweb.entries.find(e => e.id === id),
    channels:    () => DB.channels.find(e => e.id === id),
    training:    () => DB.training.find(e => e.id === id),
  };

  const entry = find[section]?.();
  if (!entry) return null;

  // ── Terminology ──
  if (section === 'terminology') {
    return `
      <div class="modal-title">${escHtml(entry.term)}</div>
      ${entry.abbr ? `<div class="modal-aka">${escHtml(entry.abbr)}</div>` : ''}
      <div class="modal-badges">
        <span class="badge badge-purple">${escHtml(entry.category)}</span>
      </div>
      <div class="modal-section-title">Definition</div>
      <div class="modal-text">${escHtml(entry.def)}</div>`;
  }

  // ── Channel ──
  if (section === 'channels') {
    return `
      <div class="modal-title">${escHtml(entry.name)}</div>
      <div class="modal-aka">${escHtml(entry.handle)} &middot; ${escHtml(entry.subs)} subscribers</div>
      <div class="modal-badges">
        <span class="badge badge-critical">YouTube</span>
        <span class="badge badge-info">${escHtml(entry.type)}</span>
      </div>
      <div class="modal-section-title">About</div>
      <div class="modal-text">${escHtml(entry.desc)}</div>
      <div class="modal-section-title">Topics Covered</div>
      <div class="modal-tags">${entry.topics.map(t => `<span class="tag">${escHtml(t)}</span>`).join('')}</div>
      <div style="margin-top:20px">
        <a class="ch-link" href="${entry.url}" target="_blank" rel="noopener noreferrer">Open Channel</a>
      </div>`;
  }

  // ── Training ──
  if (section === 'training') {
    return `
      <div class="modal-title">${escHtml(entry.name)}</div>
      <div class="modal-aka">${escHtml(entry.handle)}</div>
      <div class="modal-badges">
        <span class="platform-badge ${entry.cost === 'free' ? 'platform-free' : 'platform-freemium'}">
          ${entry.cost === 'free' ? 'Free' : 'Freemium'}
        </span>
      </div>
      <div class="modal-section-title">About</div>
      <div class="modal-text">${escHtml(entry.desc)}</div>
      <div class="modal-section-title">Topics &amp; Skills</div>
      <div class="modal-tags">${entry.topics.map(t => `<span class="tag">${escHtml(t)}</span>`).join('')}</div>
      <div class="modal-section-title">Best For</div>
      <div class="modal-text">${escHtml(entry.bestFor)}</div>
      <div style="margin-top:20px">
        <a class="ch-link training-link" href="${entry.url}" target="_blank" rel="noopener noreferrer">Visit Platform</a>
      </div>`;
  }

  // ── History ──
  if (section === 'history') {
    return `
      <div class="tl-year" style="font-size:.9rem;margin-bottom:6px">${entry.year}</div>
      <div class="modal-title">${escHtml(entry.name)}</div>
      <div class="modal-badges">
        <span class="badge ${severityBadge(entry.severity)}">${entry.severity.toUpperCase()}</span>
        ${entry.tags.map(t => `<span class="badge badge-grey">${escHtml(t)}</span>`).join('')}
      </div>
      <div class="modal-section-title">Details</div>
      <div class="modal-text">${escHtml(entry.content)}</div>`;
  }

  // ── Hackers ──
  if (section === 'hackers') {
    const tb = entry.type === 'state-sponsored' ? 'badge-state'
             : (entry.type === 'group' || entry.type === 'criminal-group') ? 'badge-group'
             : 'badge-blue';
    return `
      <div class="modal-title">${escHtml(entry.name)}</div>
      ${entry.aka ? `<div class="modal-aka">AKA: ${escHtml(entry.aka)}</div>` : ''}
      <div class="modal-badges">
        <span class="badge ${tb}">${escHtml(entry.type.replace('-', ' '))}</span>
        <span class="badge badge-grey">${escHtml(entry.nationality)}</span>
        <span class="badge badge-grey">${escHtml(entry.era)}</span>
      </div>
      <div class="modal-meta">
        ${Object.entries(entry.meta || {}).map(([k, v]) => `
          <div class="meta-item">
            <div class="meta-label">${escHtml(k)}</div>
            <div class="meta-value">${escHtml(v)}</div>
          </div>`).join('')}
        <div class="meta-item">
          <div class="meta-label">Status</div>
          <div class="meta-value">${escHtml(entry.status)}</div>
        </div>
      </div>
      <div class="modal-section-title">Profile</div>
      <div class="modal-text">${escHtml(entry.content)}</div>
      <div class="modal-tags">${(entry.tags || []).map(t => `<span class="tag">${escHtml(t)}</span>`).join('')}</div>`;
  }

  // ── Generic (cybercrimes, attacks, darkweb) ──
  const sev       = entry.severity;
  const metaHtml  = entry.meta
    ? `<div class="modal-meta">${Object.entries(entry.meta).map(([k, v]) => `
        <div class="meta-item">
          <div class="meta-label">${escHtml(k)}</div>
          <div class="meta-value">${escHtml(v)}</div>
        </div>`).join('')}</div>` : '';

  return `
    <div class="modal-title">${escHtml(entry.name)}</div>
    ${entry.aka ? `<div class="modal-aka">AKA: ${escHtml(entry.aka)}</div>` : ''}
    <div class="modal-badges">
      ${sev ? `<span class="badge ${severityBadge(sev)}">${sev.toUpperCase()}</span>` : ''}
      ${entry.category ? `<span class="badge badge-grey">${escHtml(entry.category)}</span>` : ''}
    </div>
    ${metaHtml}
    <div class="modal-section-title">Details</div>
    <div class="modal-text">${escHtml(entry.content || entry.shortDesc)}</div>
    <div class="modal-tags">${(entry.tags || []).map(t => `<span class="tag">${escHtml(t)}</span>`).join('')}</div>`;
}

// ══════════════════════════════════════════════
//  VIEW RENDERERS
// ══════════════════════════════════════════════

// ── HOME ───────────────────────────────────────
function renderHome() {
  const stats = [
    { label: 'Cybercrimes',       count: DB.cybercrimes.length, view: 'cybercrimes', color: 'var(--red)'    },
    { label: 'History Events',    count: DB.history.length,     view: 'history',     color: 'var(--blue)'   },
    { label: 'Hacker Profiles',   count: DB.hackers.length,     view: 'hackers',     color: 'var(--purple)' },
    { label: 'Terms & Jargon',    count: DB.terminology.length, view: 'terminology', color: 'var(--green)'  },
    { label: 'Attack Techniques', count: DB.attacks.length,     view: 'attacks',     color: 'var(--orange)' },
    { label: 'YT Channels',       count: DB.channels.length,    view: 'channels',    color: 'var(--red)'    },
    { label: 'Training Platforms',count: DB.training.length,    view: 'training',    color: 'var(--cyan)'   },
  ];

  const statCards = stats.map(s => `
    <div class="stat-card" style="--stat-color:${s.color}" data-view="${s.view}">
      <div class="stat-number">${s.count}</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join('');

  const features = [
    { label: 'Threat Intelligence', title: 'Cybercrimes',       desc: 'Profiles of major cybercrime categories — methods, impact, legal consequences, and real-world cases.',   view: 'cybercrimes' },
    { label: 'Threat Actors',       title: 'Hackers & Groups',  desc: 'Individual hackers, hacktivist collectives, and state-sponsored APT groups with full operational profiles.', view: 'hackers'     },
    { label: 'Timeline',            title: 'History',           desc: 'Chronological record of defining cybersecurity events from 1971 to present day.',                         view: 'history'     },
    { label: 'Offensive Security',  title: 'Attack Techniques', desc: 'Technical breakdown of attack vectors — SQLi, ransomware chains, supply chain, MITM, and more.',         view: 'attacks'     },
    { label: 'Infrastructure',      title: 'Dark & Deep Web',   desc: 'Layers of the internet, anonymity networks, dark web markets, and law enforcement takedowns.',            view: 'darkweb'     },
    { label: 'Learning Resources',  title: 'Free Training',     desc: '15+ free and freemium platforms to build cybersecurity skills from beginner to expert level.',           view: 'training'    },
  ];

  const featureCards = features.map(f => `
    <div class="feature-card" data-view="${f.view}">
      <div class="fc-label">${f.label}</div>
      <div class="fc-title">${f.title}</div>
      <div class="fc-desc">${f.desc}</div>
    </div>`).join('');

  setTimeout(() => {
    document.querySelectorAll('.stat-card[data-view], .feature-card[data-view]').forEach(el => {
      el.addEventListener('click', () => { setActiveNav(el.dataset.view); renderView(el.dataset.view); });
    });
  }, 0);

  return `
    <div>
      <div class="home-hero">
        <div class="hero-tag">// cybercrime · threat intelligence · security research</div>
        <h1 class="hero-title">CyberCrime <span>Encyclopedia</span></h1>
        <p class="hero-sub">
          A structured reference database covering cybercrime categories, threat actor profiles,
          attack techniques, dark web intelligence, security terminology, and learning resources.
        </p>
        <div class="hero-creator">Created by <span>Teodor Kostov</span></div>
      </div>

      <div class="stat-grid">${statCards}</div>

      <div class="section-hdr">
        <div class="section-hdr-top">
          <div class="section-title">Categories</div>
        </div>
        <div class="section-desc">Select a category to explore the database</div>
      </div>

      <div class="feature-grid">${featureCards}</div>
    </div>`;
}

// ── CYBERCRIMES ────────────────────────────────
function renderCybercrimes() {
  const filters = ['all', 'critical', 'high', 'medium'].map(t => `
    <button class="filter-tag ${t === 'all' ? 'active' : ''}" data-filter="${t}">
      ${t === 'all' ? 'All' : t.charAt(0).toUpperCase() + t.slice(1)}
    </button>`).join('');

  return `
    <div>
      <div class="section-hdr">
        <div class="section-hdr-top">
          <div class="section-title">
            ${sectionSvg('shield')} Cybercrimes
          </div>
          <span class="section-count">${DB.cybercrimes.length} entries</span>
        </div>
        <div class="section-desc">
          Major categories of criminal activity conducted through digital means —
          motivations, methods, impact, and legal consequences.
        </div>
      </div>
      <div class="filter-bar" id="severity-filter">${filters}</div>
      <div class="card-grid" id="crime-grid">
        ${DB.cybercrimes.map(e => renderCard(e, 'cybercrimes')).join('')}
      </div>
    </div>`;
}

// ── HISTORY ────────────────────────────────────
function renderHistory() {
  return `
    <div>
      <div class="section-hdr">
        <div class="section-hdr-top">
          <div class="section-title">
            ${sectionSvg('clock')} History of Cybercrime
          </div>
          <span class="section-count">${DB.history.length} events</span>
        </div>
        <div class="section-desc">
          Key events that shaped the cybersecurity landscape —
          from the first self-replicating program in 1971 to AI-powered attacks today.
        </div>
      </div>
      <div class="timeline">
        ${DB.history.map(e => renderTimelineItem(e, false)).join('')}
      </div>
    </div>`;
}

function renderTimelineItem(e, asCard) {
  if (asCard) {
    return `
      <div class="card" data-modal="history" data-id="${e.id}">
        <div class="card-top">
          <div class="card-badges">
            <span class="badge ${severityBadge(e.severity)}">${e.severity.toUpperCase()}</span>
          </div>
        </div>
        <div class="tl-year">${e.year}</div>
        <div class="card-name">${escHtml(e.name)}</div>
        <div class="card-desc">${escHtml(e.shortDesc)}</div>
        <div class="card-tags">${(e.tags || []).map(t => `<span class="tag">${escHtml(t)}</span>`).join('')}</div>
      </div>`;
  }

  return `
    <div class="tl-item" data-modal="history" data-id="${e.id}">
      <div class="tl-card">
        <div class="tl-year">${e.year}</div>
        <div class="tl-title">${escHtml(e.name)}</div>
        <div class="tl-desc">${escHtml(e.shortDesc)}</div>
        <div class="tl-badges">
          <span class="badge ${severityBadge(e.severity)}">${e.severity.toUpperCase()}</span>
          ${(e.tags || []).map(t => `<span class="tag">${escHtml(t)}</span>`).join('')}
        </div>
      </div>
    </div>`;
}

// ── HACKERS ────────────────────────────────────
function renderHackers() {
  const filters = ['all', 'individual', 'group', 'criminal-group', 'state-sponsored', 'unknown'].map(t => `
    <button class="filter-tag ${t === 'all' ? 'active' : ''}" data-filter="${t}">
      ${t === 'all' ? 'All' : t.replace('-', ' ')}
    </button>`).join('');

  const cards = DB.hackers.map(e => {
    const tb = e.type === 'state-sponsored' ? 'badge-state'
             : (e.type === 'group' || e.type === 'criminal-group') ? 'badge-group'
             : 'badge-blue';
    return `
      <div class="card" data-modal="hackers" data-id="${e.id}" data-type="${e.type}">
        <div class="card-top">
          <div class="card-badges">
            <span class="badge ${tb}">${e.type.replace('-', ' ')}</span>
          </div>
        </div>
        <div class="card-name">${escHtml(e.name)}</div>
        ${e.aka ? `<div class="card-aka">aka: ${escHtml(e.aka)}</div>` : ''}
        <div class="card-desc">${escHtml(e.shortDesc)}</div>
        <div class="card-tags">
          <span class="tag">${escHtml(e.nationality)}</span>
          <span class="tag">${escHtml(e.era)}</span>
          ${e.tags.slice(0, 2).map(t => `<span class="tag">${escHtml(t)}</span>`).join('')}
        </div>
        <div class="card-footer">
          <span>${escHtml(e.status)}</span>
          <span class="card-more">View profile</span>
        </div>
      </div>`;
  }).join('');

  return `
    <div>
      <div class="section-hdr">
        <div class="section-hdr-top">
          <div class="section-title">
            ${sectionSvg('person')} Hackers &amp; Groups
          </div>
          <span class="section-count">${DB.hackers.length} profiles</span>
        </div>
        <div class="section-desc">
          Individual hackers, hacktivist collectives, and state-sponsored APT groups —
          full profiles with methods, operations, and consequences.
        </div>
      </div>
      <div class="filter-bar" id="hacker-filter">${filters}</div>
      <div class="card-grid" id="hacker-grid">${cards}</div>
    </div>`;
}

// ── TERMINOLOGY ────────────────────────────────
function renderTerminology() {
  const categories = ['all', ...new Set(DB.terminology.map(t => t.category))];
  const filters = categories.map(c => `
    <button class="filter-tag ${c === 'all' ? 'active' : ''}" data-filter="${c}">
      ${c === 'all' ? 'All' : c}
    </button>`).join('');

  return `
    <div>
      <div class="section-hdr">
        <div class="section-hdr-top">
          <div class="section-title">
            ${sectionSvg('book')} Terminology &amp; Jargon
          </div>
          <span class="section-count">${DB.terminology.length} terms</span>
        </div>
        <div class="section-desc">
          Essential cybersecurity terms, acronyms, and concepts —
          from zero-days and APTs to CTFs and OSINT.
        </div>
      </div>
      <div class="filter-bar" id="term-filter">${filters}</div>
      <div class="glossary-grid" id="term-grid">
        ${DB.terminology.map(e => renderGlossaryCard(e, false)).join('')}
      </div>
    </div>`;
}

function renderGlossaryCard(e, asGenericCard) {
  if (asGenericCard) {
    return `
      <div class="card" data-modal="terminology" data-id="${e.id}">
        <div class="card-name">${escHtml(e.term)}</div>
        ${e.abbr ? `<div class="card-aka">${escHtml(e.abbr)}</div>` : ''}
        <div class="card-desc">${escHtml(e.def.substring(0, 120))}…</div>
        <div class="card-tags"><span class="badge badge-purple">${escHtml(e.category)}</span></div>
      </div>`;
  }
  return `
    <div class="glossary-card" data-modal="terminology" data-id="${e.id}" data-cat="${e.category}">
      <div class="glossary-term">${escHtml(e.term)}</div>
      ${e.abbr ? `<div class="glossary-abbr">${escHtml(e.abbr)}</div>` : ''}
      <div class="glossary-def">${escHtml(e.def.substring(0, 160))}${e.def.length > 160 ? '…' : ''}</div>
    </div>`;
}

// ── ATTACKS ────────────────────────────────────
function renderAttacks() {
  const categories = ['all', ...new Set(DB.attacks.map(a => a.category))];
  const filters = categories.map(c => `
    <button class="filter-tag ${c === 'all' ? 'active' : ''}" data-filter="${c}">
      ${c === 'all' ? 'All' : c}
    </button>`).join('');

  return `
    <div>
      <div class="section-hdr">
        <div class="section-hdr-top">
          <div class="section-title">
            ${sectionSvg('bolt')} Attack Techniques
          </div>
          <span class="section-count">${DB.attacks.length} techniques</span>
        </div>
        <div class="section-desc">
          Technical breakdown of offensive security techniques —
          how they work, tools used, real-world examples, and mitigations.
        </div>
      </div>
      <div class="filter-bar" id="attack-filter">${filters}</div>
      <div class="card-grid" id="attack-grid">
        ${DB.attacks.map(e => renderCard(e, 'attacks')).join('')}
      </div>
    </div>`;
}

// ── DARK WEB ───────────────────────────────────
function renderDarkWeb() {
  const layers = DB.darkweb.layers.map(l => `
    <div class="layer-card" style="--layer-color:${l.color}">
      <div class="layer-name">${l.name}</div>
      <div class="layer-size">Estimated size: ${l.size}</div>
      <div class="layer-desc">${l.desc}</div>
    </div>`).join('');

  return `
    <div>
      <div class="section-hdr">
        <div class="section-hdr-top">
          <div class="section-title">
            ${sectionSvg('eye')} Dark &amp; Deep Web
          </div>
          <span class="section-count">${DB.darkweb.entries.length} topics</span>
        </div>
        <div class="section-desc">
          Layers of the internet, anonymity networks, dark web marketplace history,
          and law enforcement operations.
        </div>
      </div>

      <div class="dw-notice">
        <svg class="dw-notice-icon" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71
               c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378
               c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
        </svg>
        <span>
          <strong>Legal Notice:</strong> Accessing illegal content on the dark web is a criminal offence.
          This information is provided for educational and security research purposes only.
        </span>
      </div>

      <div class="section-hdr" style="margin-top:4px">
        <div class="section-title" style="font-size:1rem">Internet Layers</div>
      </div>
      <div class="internet-layers">${layers}</div>

      <div class="section-hdr">
        <div class="section-title" style="font-size:1rem">Topics</div>
      </div>
      <div class="card-grid">
        ${DB.darkweb.entries.map(e => renderCard(e, 'darkweb')).join('')}
      </div>
    </div>`;
}

// ── CHANNELS ───────────────────────────────────
function renderChannels() {
  return `
    <div>
      <div class="section-hdr">
        <div class="section-hdr-top">
          <div class="section-title">
            ${sectionSvg('play')} YouTube Channels
          </div>
          <span class="section-count">${DB.channels.length} channels</span>
        </div>
        <div class="section-desc">
          Top YouTube channels covering cybersecurity —
          ethical hacking, CTF, malware analysis, bug bounty, career guidance, and more.
        </div>
      </div>
      <div class="channel-grid">
        ${DB.channels.map(e => renderChannelCardHtml(e)).join('')}
      </div>
    </div>`;
}

function renderChannelCardHtml(e) {
  return `
    <div class="channel-card" data-modal="channels" data-id="${e.id}">
      <div class="ch-top">
        <div class="ch-name">${escHtml(e.name)}</div>
        <div class="ch-handle">${escHtml(e.handle)}</div>
      </div>
      <div class="ch-desc">${escHtml(e.desc.substring(0, 180))}${e.desc.length > 180 ? '…' : ''}</div>
      <div class="ch-tags">${(e.topics || []).map(t => `<span class="tag">${escHtml(t)}</span>`).join('')}</div>
      <a class="ch-link" href="${e.url}" target="_blank" rel="noopener noreferrer"
         onclick="event.stopPropagation()">Open Channel</a>
    </div>`;
}

// ── TRAINING ───────────────────────────────────
function renderTraining() {
  const filters = ['all', 'free', 'freemium'].map(f => `
    <button class="filter-tag ${f === 'all' ? 'active' : ''}" data-filter="${f}">
      ${f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
    </button>`).join('');

  return `
    <div>
      <div class="section-hdr">
        <div class="section-hdr-top">
          <div class="section-title">
            ${sectionSvg('graduation')} Free Training Platforms
          </div>
          <span class="section-count">${DB.training.length} platforms</span>
        </div>
        <div class="section-desc">
          The best free and freemium platforms to develop cybersecurity skills —
          from absolute beginner to advanced penetration tester.
        </div>
      </div>
      <div class="filter-bar" id="training-filter">${filters}</div>
      <div class="channel-grid" id="training-grid">
        ${DB.training.map(e => renderTrainingCardHtml(e)).join('')}
      </div>
    </div>`;
}

function renderTrainingCardHtml(e) {
  return `
    <div class="channel-card" data-modal="training" data-id="${e.id}" data-cost="${e.cost}">
      <div class="ch-top">
        <div class="ch-name">${escHtml(e.name)}</div>
        <div class="ch-handle">${escHtml(e.handle)}</div>
      </div>
      <div style="margin-bottom:2px">
        <span class="platform-badge ${e.cost === 'free' ? 'platform-free' : 'platform-freemium'}">
          ${e.cost === 'free' ? 'Free' : 'Freemium'}
        </span>
      </div>
      <div class="ch-desc">${escHtml(e.desc.substring(0, 180))}${e.desc.length > 180 ? '…' : ''}</div>
      <div class="ch-tags">${(e.topics || []).slice(0, 4).map(t => `<span class="tag">${escHtml(t)}</span>`).join('')}</div>
      <a class="ch-link training-link" href="${e.url}" target="_blank" rel="noopener noreferrer"
         onclick="event.stopPropagation()">Visit Platform</a>
    </div>`;
}

// ── GENERIC CARD ───────────────────────────────
function renderCard(e, section) {
  const sev = e.severity;
  return `
    <div class="card" data-modal="${section}" data-id="${e.id}">
      <div class="card-top">
        <div class="card-badges">
          ${sev ? `<span class="badge ${severityBadge(sev)}">${sev.toUpperCase()}</span>` : ''}
          ${e.category ? `<span class="badge badge-grey">${escHtml(e.category)}</span>` : ''}
        </div>
      </div>
      <div class="card-name">${escHtml(e.name)}</div>
      <div class="card-desc">${escHtml(e.shortDesc || '')}</div>
      <div class="card-tags">
        ${(e.tags || []).slice(0, 4).map(t => `<span class="tag">${escHtml(t)}</span>`).join('')}
      </div>
      <div class="card-footer">
        ${e.meta ? `<span>${escHtml(Object.values(e.meta)[0] || '')}</span>` : '<span></span>'}
        <span class="card-more">View details</span>
      </div>
    </div>`;
}

// ── SECTION SVG ICONS ──────────────────────────
function sectionSvg(name) {
  const icons = {
    shield: `<svg class="section-title-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75
           c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622
           0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286zm0 13.036h.008v.008H12v-.008z"/>
    </svg>`,
    clock: `<svg class="section-title-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>`,
    person: `<svg class="section-title-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z
           M4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75
           c-2.676 0-5.216-.584-7.499-1.632z"/>
    </svg>`,
    book: `<svg class="section-title-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25
           A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25
           a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25
           A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>
    </svg>`,
    bolt: `<svg class="section-title-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
    </svg>`,
    eye: `<svg class="section-title-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5
           c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639
           C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>`,
    play: `<svg class="section-title-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347
           a1.125 1.125 0 010 1.972l-11.54 6.347
           a1.125 1.125 0 01-1.667-.986V5.653z"/>
    </svg>`,
    graduation: `<svg class="section-title-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904
           a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347
           m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493
           a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814
           m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342
           M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675
           A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
    </svg>`,
  };
  return icons[name] || '';
}

// ── FILTER DELEGATION ──────────────────────────
document.addEventListener('click', e => {
  const btn = e.target.closest('.filter-tag');
  if (!btn) return;

  const bar    = btn.closest('.filter-bar');
  const filter = btn.dataset.filter;
  bar.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const id = bar.id;
  if (id === 'severity-filter') {
    filterGrid('crime-grid', '.card', filter === 'all' ? null
      : el => el.querySelector('.badge')?.textContent.trim().toLowerCase() === filter);
  }
  if (id === 'hacker-filter') {
    filterGrid('hacker-grid', '.card', filter === 'all' ? null
      : el => el.dataset.type === filter);
  }
  if (id === 'term-filter') {
    filterGrid('term-grid', '.glossary-card', filter === 'all' ? null
      : el => el.dataset.cat === filter);
  }
  if (id === 'attack-filter') {
    filterGrid('attack-grid', '.card', filter === 'all' ? null : el => {
      const b = el.querySelectorAll('.badge')[1];
      return b && b.textContent.trim() === filter;
    });
  }
  if (id === 'training-filter') {
    filterGrid('training-grid', '.channel-card', filter === 'all' ? null
      : el => el.dataset.cost === filter);
  }
});

function filterGrid(gridId, selector, testFn) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.querySelectorAll(selector).forEach(el => {
    el.style.display = (!testFn || testFn(el)) ? '' : 'none';
  });
}

// ── HELPERS ────────────────────────────────────
function severityBadge(sev) {
  return { critical: 'badge-critical', high: 'badge-high', medium: 'badge-medium',
           low: 'badge-low', info: 'badge-info' }[sev] || 'badge-grey';
}

function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
