/* =========================================================================
   Site engine — injects nav/footer, renders content from data.js,
   handles theme toggle, mobile menu, and scroll reveals. No dependencies.
   ========================================================================= */
(function () {
  "use strict";

  /* ---------- inline SVG icons ---------- */
  const ICONS = {
    github:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>',
    mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.5 7 8.5 6 8.5-6"/></svg>',
    scholar:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 1 9l11 7 9-5.7V16h2V9zM5 13.2v3.3C5 18.4 8.1 20 12 20s7-1.6 7-3.5v-3.3l-7 4.5z"/></svg>',
    linkedin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H22h-3.6v-5.4c0-1.3 0-2.95-1.8-2.95s-2.07 1.4-2.07 2.85V21H10z"/></svg>',
    orcid:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zM7.4 17.7H5.6V8.2h1.8zM6.5 6.9a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1zm11.3 6.3c0 2.8-1.8 4.5-4.6 4.5H9.6V8.2h3.6c2.8 0 4.6 1.8 4.6 4.5v.5zm-1.9-.2c0-1.9-1.2-3-3-3h-1.4v6h1.4c1.7 0 3-1 3-3z"/></svg>',
    twitter:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7 8 8.3 11H17l-5-6.6L6.2 21H3l7.5-8.6L2.5 2H9l4.6 6.1zm-1.1 17h1.7L7.3 3.8H5.5z"/></svg>',
    external:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 17 17 7M9 7h8v8"/></svg>',
    arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"/></svg>',
    sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19"/></svg>',
    moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
    menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    link:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/></svg>',
  };
  const icon = (k) => ICONS[k] || ICONS.link;

  const NAV = [
    { href: "index.html",        label: "Home" },
    { href: "research.html",     label: "Research" },
    { href: "projects.html",     label: "Projects" },
    { href: "updates.html",      label: "Updates" },
    { href: "collaboration.html",label: "Collaborate" },
  ];

  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  const activeLinks = (arr) => (arr || []).filter((l) => l.url && l.url.trim() && l.url !== "#");

  /* ---------- theme ---------- */
  const THEME_KEY = "ql-theme";
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    const btn = document.getElementById("themeBtn");
    if (btn) btn.innerHTML = t === "light" ? icon("moon") : icon("sun");
  }
  function initTheme() {
    let t = null;
    try { t = localStorage.getItem(THEME_KEY); } catch (e) {}
    // Dark is the intended default; only honor a previously chosen preference.
    if (t !== "light" && t !== "dark") t = "dark";
    applyTheme(t);
  }
  function toggleTheme() {
    const cur = document.documentElement.getAttribute("data-theme");
    const next = cur === "light" ? "dark" : "light";
    applyTheme(next);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
  }

  /* ---------- nav + footer ---------- */
  function buildNav() {
    const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    const links = NAV.map((n) =>
      `<a href="${n.href}"${here === n.href.toLowerCase() ? ' class="is-active"' : ""}>${n.label}</a>`
    ).join("");
    const el = document.createElement("header");
    el.className = "nav";
    el.innerHTML = `
      <div class="nav__inner">
        <a class="brand" href="index.html">
          <span class="dot"></span>Quan&nbsp;Liu
        </a>
        <button class="icon-btn nav__toggle" id="navToggle" aria-label="Menu" aria-expanded="false">${icon("menu")}</button>
        <nav class="nav__links" id="navLinks">
          ${links}
          <span class="nav__theme-wrap"><button class="icon-btn" id="themeBtn" aria-label="Toggle theme" style="margin-left:.4rem">${icon("sun")}</button></span>
        </nav>
        <button class="icon-btn" id="themeBtnTop" aria-label="Toggle theme" style="display:none">${icon("sun")}</button>
      </div>`;
    document.body.prepend(el);

    const toggle = el.querySelector("#navToggle");
    const menu = el.querySelector("#navLinks");
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.innerHTML = open ? icon("close") : icon("menu");
      toggle.setAttribute("aria-expanded", String(open));
    });
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => { menu.classList.remove("open"); toggle.innerHTML = icon("menu"); })
    );
    const tbtn = el.querySelector("#themeBtn");
    if (tbtn) tbtn.addEventListener("click", toggleTheme);

    const onScroll = () => el.classList.toggle("scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function buildFooter() {
    const socials = activeLinks(SITE.links)
      .map((l) => `<a href="${esc(l.url)}" aria-label="${esc(l.label)}" title="${esc(l.label)}" ${l.url.startsWith("mailto") ? "" : 'target="_blank" rel="noopener"'}>${icon(l.icon)}</a>`)
      .join("");
    const el = document.createElement("footer");
    el.className = "footer";
    el.innerHTML = `
      <div class="wrap footer__inner">
        <div>
          <div class="footer__brand">Quan Liu</div>
          <small>&copy; <span id="yr"></span> ${esc(SITE.profile.name)}</small>
        </div>
        <div class="socials">${socials}</div>
      </div>`;
    document.body.appendChild(el);
    const yr = el.querySelector("#yr"); if (yr) yr.textContent = new Date().getFullYear();
  }

  /* ---------- scroll reveals ---------- */
  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || !els.length) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((e) => io.observe(e));
  }

  /* ---------- render helpers ---------- */
  function linkRow(links) {
    const ls = activeLinks(links);
    if (!ls.length) return "";
    return `<div class="inline-links">` + ls.map((l) =>
      `<a href="${esc(l.url)}" target="_blank" rel="noopener">${icon(l.icon || "external")}${esc(l.label)}</a>`
    ).join("") + `</div>`;
  }

  function authorsHTML(authors, me) {
    return (authors || []).map((a) =>
      a === me ? `<span class="me">${esc(a)}</span>` : esc(a)
    ).join(", ");
  }

  function pubCard(p, meName) {
    const links = activeLinks(p.links).map((l) =>
      `<a href="${esc(l.url)}" target="_blank" rel="noopener">${icon(l.icon || "external")}${esc(l.label)}</a>`).join("");
    return `
      <article class="pub reveal">
        <div class="pub__year">${esc(p.year || "")}</div>
        <div>
          <div class="pub__venue">${esc(p.type || "")}${p.venue ? " · " + esc(p.venue) : ""}</div>
          <h3>${esc(p.title)}</h3>
          <div class="pub__authors">${authorsHTML(p.authors, meName)}</div>
          ${p.abstract ? `<p class="card__p" style="color:var(--text-soft);margin-top:.6rem;font-size:.95rem">${esc(p.abstract)}</p>` : ""}
          ${links ? `<div class="inline-links">${links}</div>` : ""}
        </div>
      </article>`;
  }

  function projectCard(p) {
    const tech = (p.tech || []).map((t) => `<span class="pill">${esc(t)}</span>`).join("");
    const links = activeLinks(p.links).map((l) =>
      `<a href="${esc(l.url)}" target="_blank" rel="noopener">${icon(l.icon || "external")}${esc(l.label)}</a>`).join("");
    return `
      <article class="card reveal">
        <span class="card__tag">${esc(p.tag || "Project")}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.blurb)}</p>
        ${tech ? `<div class="tags">${tech}</div>` : ""}
        ${links ? `<div class="inline-links">${links}</div>` : ""}
      </article>`;
  }

  function updateItem(u) {
    return `
      <article class="update reveal">
        <div class="update__date">${esc(u.date)}</div>
        <div class="update__body">
          ${u.badge ? `<span class="badge">${esc(u.badge)}</span>` : ""}
          <h3>${esc(u.title)}</h3>
          <p>${esc(u.body)}</p>
        </div>
      </article>`;
  }

  const $ = (id) => document.getElementById(id);
  const fill = (id, html) => { const n = $(id); if (n) n.innerHTML = html; };

  /* ---------- page renderers ---------- */
  function renderHero() {
    const p = SITE.profile;
    fill("heroRole", p.role);
    fill("heroDesc", esc(p.intro));
    const port = $("heroPortrait");
    if (port) {
      port.innerHTML = p.photo
        ? `<img src="${esc(p.photo)}" alt="${esc(p.name)}" onerror="this.parentNode.innerHTML='<div class=\\'portrait-fallback\\'>${esc(p.initials)}</div>'">`
        : `<div class="portrait-fallback">${esc(p.initials)}</div>`;
    }
    // CV button: hide if file not present
    const cvBtn = $("cvBtn");
    if (cvBtn && p.cv) {
      cvBtn.href = p.cv;
      fetch(p.cv, { method: "HEAD" }).then((r) => { if (!r.ok) cvBtn.style.display = "none"; }).catch(() => { cvBtn.style.display = "none"; });
    } else if (cvBtn) { cvBtn.style.display = "none"; }
  }

  function renderHome() {
    renderHero();
    // selected publications (top 3)
    const pubs = (SITE.publications || []).slice(0, 3).map((p) => pubCard(p, SITE.profile.name)).join("");
    fill("homePubs", pubs || `<p class="empty-note">// publications coming soon</p>`);
    // featured projects
    const feat = (SITE.projects || []).filter((p) => p.featured);
    const list = (feat.length ? feat : (SITE.projects || []).slice(0, 3)).map(projectCard).join("");
    fill("homeProjects", list || `<p class="empty-note">// projects coming soon</p>`);
    // recent updates (top 3)
    const ups = (SITE.updates || []).slice(0, 3).map(updateItem).join("");
    fill("homeUpdates", ups || `<p class="empty-note">// no updates yet</p>`);
    // collaboration teaser
    fill("homeCollabText", esc(SITE.collaboration.intro));
  }

  function careerItem(c) {
    const bullets = (c.bullets || []).length
      ? `<ul class="career__bullets">${c.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : "";
    return `
      <article class="career reveal">
        <div class="career__period mono">${esc(c.period || "")}</div>
        <div class="career__body">
          <h3>${esc(c.role || "")}</h3>
          <div class="career__org">${esc(c.org || "")}${c.place ? ` <span class="muted">· ${esc(c.place)}</span>` : ""}</div>
          ${bullets}
        </div>
      </article>`;
  }

  function renderResearch() {
    fill("interests", (SITE.interests || []).map((i) => `<span class="pill pill--accent">${esc(i)}</span>`).join(""));
    const pubs = (SITE.publications || []).map((p) => pubCard(p, SITE.profile.name)).join("");
    fill("pubList", pubs || `<p class="empty-note">// publications coming soon</p>`);
    fill("experienceList", (SITE.experience || []).map(careerItem).join(""));
    fill("educationList", (SITE.education || []).map(careerItem).join(""));
  }

  function renderProjects() {
    const list = (SITE.projects || []).map(projectCard).join("");
    fill("projectList", list || `<p class="empty-note">// projects coming soon</p>`);
  }

  function renderUpdates() {
    const ups = (SITE.updates || []).map(updateItem).join("");
    fill("updateList", ups || `<p class="empty-note">// no updates yet</p>`);
  }

  function renderCollab() {
    fill("collabIntro", esc(SITE.collaboration.intro));
    const areas = (SITE.collaboration.areas || []).map((a, i) => `
      <div class="collab-item reveal">
        <span class="num">0${i + 1}</span>
        <h3>${esc(a.title)}</h3>
        <p>${esc(a.body)}</p>
      </div>`).join("");
    fill("collabAreas", areas);
    fill("collabEmail", esc(SITE.profile.email));
    const cb = $("collabEmailBtn"); if (cb) cb.href = "mailto:" + SITE.profile.email;
  }

  function renderAbout() {
    fill("aboutName", esc(SITE.profile.name));
    const facts = (SITE.profile.facts || []).map((f) =>
      `<dt>${esc(f.label)}</dt><dd>${f.value}</dd>`).join("");
    fill("aboutFacts", facts);
    fill("aboutInterests", (SITE.interests || []).map((i) => `<span class="pill pill--accent">${esc(i)}</span>`).join(""));
  }

  /* ---------- boot ---------- */
  function boot() {
    initTheme();
    buildNav();
    const page = document.body.getAttribute("data-page");
    const map = { home: renderHome, research: renderResearch, projects: renderProjects, updates: renderUpdates, collab: renderCollab };
    try { (map[page] || function () {})(); } catch (e) { console.error("render error:", e); }
    if (document.getElementById("aboutFacts")) { try { renderAbout(); } catch (e) {} }
    buildFooter();
    initReveal();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
