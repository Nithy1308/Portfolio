/* ==========================================================================
   main.js — renders the portfolio from data.js and wires up the interactions.
   Vanilla JS, no dependencies. Loaded with `defer`.
   ========================================================================== */
(function () {
  "use strict";

  var D = window.PORTFOLIO;
  if (!D) { return; }

  /* ---------------------------------------------------------------------- */
  /* ICON SET — inline stroke icons (feather-style, 24x24 grid)              */
  /* ---------------------------------------------------------------------- */
  var ICONS = {
    app: '<rect x="3" y="3" width="7" height="7" rx="1.6"/><rect x="14" y="3" width="7" height="7" rx="1.6"/><rect x="14" y="14" width="7" height="7" rx="1.6"/><rect x="3" y="14" width="7" height="7" rx="1.6"/>',
    award: '<circle cx="12" cy="8" r="6.5"/><polyline points="8.2 13.9 7 23 12 20 17 23 15.8 13.9"/>',
    bolt: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    bot: '<rect x="3.5" y="8" width="17" height="12" rx="3"/><circle cx="9" cy="14" r="1.4"/><circle cx="15" cy="14" r="1.4"/><path d="M12 8V4.5"/><circle cx="12" cy="3" r="1.4"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
    cap: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12.5V17c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5"/>',
    chart: '<line x1="4" y1="20" x2="20" y2="20"/><line x1="7" y1="20" x2="7" y2="13"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="17" y1="20" x2="17" y2="9"/>',
    chat: '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1.2"/><path d="M9 12h6M9 16h4"/>',
    clock: '<circle cx="12" cy="12" r="9.5"/><polyline points="12 6.5 12 12 16 14"/>',
    close: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    cloud: '<path d="M18 10h-1.3A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    dashboard: '<rect x="3" y="3" width="7.5" height="9" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="5.5" rx="1.5"/><rect x="13.5" y="12" width="7.5" height="9" rx="1.5"/><rect x="3" y="15.5" width="7.5" height="5.5" rx="1.5"/>',
    database: '<ellipse cx="12" cy="5.5" rx="8" ry="3.2"/><path d="M4 5.5v6c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2v-6"/><path d="M4 11.5v6c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2v-6"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
    flask: '<path d="M9.5 2.5h5"/><path d="M10.5 2.5v6.8L4.9 19A2 2 0 0 0 6.6 22h10.8a2 2 0 0 0 1.7-3l-5.6-9.7V2.5"/><path d="M7.3 15.5h9.4"/>',
    folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.4 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5.1 5.1 0 0 0 19.9 1S18.7.7 16 2.5a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A5.1 5.1 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.4 7A3.4 3.4 0 0 0 9 18.1V22"/>',
    globe: '<circle cx="12" cy="12" r="9.5"/><line x1="2.5" y1="12" x2="21.5" y2="12"/><path d="M12 2.5a15 15 0 0 1 4 9.5 15 15 0 0 1-4 9.5 15 15 0 0 1-4-9.5 15 15 0 0 1 4-9.5z"/>',
    layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 4 13c0-6 8-11 16-11 0 8-5 16-11 16z"/><path d="M4.5 21c3-6 7-9 12-11"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.5A6 6 0 0 1 16 8z"/><rect x="2" y="9" width="4" height="12" rx="1"/><circle cx="4" cy="4" r="2.2"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2.5"/><path d="M22 7.5l-10 6-10-6"/>',
    mapPin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    menu: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
    mic: '<path d="M12 1.5a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0v-7a3 3 0 0 0-3-3z"/><path d="M19 10.5v1.5a7 7 0 0 1-14 0v-1.5"/><line x1="12" y1="19" x2="12" y2="22.5"/>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
    music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    network: '<circle cx="18" cy="5" r="2.8"/><circle cx="6" cy="12" r="2.8"/><circle cx="18" cy="19" r="2.8"/><line x1="8.5" y1="10.6" x2="15.5" y2="6.4"/><line x1="8.5" y1="13.4" x2="15.5" y2="17.6"/>',
    pen: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',
    phone: '<rect x="5" y="2" width="14" height="20" rx="2.5"/><line x1="12" y1="18" x2="12.01" y2="18"/>',
    pulse: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
    send: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
    sparkle: '<path d="M11 3l1.7 5 5 1.7-5 1.7L11 16.4l-1.7-5-5-1.7 5-1.7z"/><path d="M18.5 14.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/>',
    sun: '<circle cx="12" cy="12" r="4.2"/><path d="M12 1.5v2.5M12 20v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M1.5 12H4M20 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8"/>',
    target: '<circle cx="12" cy="12" r="9.5"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/>',
    trend: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16.5 7 22 7 22 12.5"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5.5a4 4 0 0 0-4 4v2"/><circle cx="9.2" cy="7" r="4"/><path d="M22.5 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.2a4 4 0 0 1 0 7.7"/>',
    waves: '<path d="M2 7c2 0 3-1.6 5-1.6S10 7 12 7s3-1.6 5-1.6S20 7 22 7"/><path d="M2 12.5c2 0 3-1.6 5-1.6s3 1.6 5 1.6 3-1.6 5-1.6 3 1.6 5 1.6"/><path d="M2 18c2 0 3-1.6 5-1.6s3 1.6 5 1.6 3-1.6 5-1.6 3 1.6 5 1.6"/>',
    arrowRight: '<line x1="4" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/>',
    arrowUp: '<line x1="12" y1="20" x2="12" y2="5"/><polyline points="5.5 11.5 12 5 18.5 11.5"/>'
  };

  /* ---------------------------------------------------------------------- */
  /* SMALL HELPERS                                                           */
  /* ---------------------------------------------------------------------- */
  function svg(name, cls) {
    var body = ICONS[name] || ICONS.sparkle;
    return '<svg class="icon ' + (cls || "") + '" viewBox="0 0 24 24" fill="none" ' +
      'stroke="currentColor" stroke-width="1.7" stroke-linecap="round" ' +
      'stroke-linejoin="round" aria-hidden="true" focusable="false">' + body + "</svg>";
  }

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function el(selector, root) { return (root || document).querySelector(selector); }
  function all(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }
  function reduceMotion() {
    return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  /* ---------------------------------------------------------------------- */
  /* RENDERERS                                                               */
  /* ---------------------------------------------------------------------- */
  var P = D.profile;

  function renderIdentity() {
    function fill(attr, value) {
      all("[" + attr + "]").forEach(function (node) { node.textContent = value; });
    }

    fill("data-avail", P.availability);
    fill("data-location", P.location);
    fill("data-tagline", P.tagline);
    fill("data-summary", P.summary);
    fill("data-year", String(new Date().getFullYear()));
    fill("data-fullname", P.fullName);
    fill("data-headline", P.headline);

    // External links declared in data.js
    var linkMap = {
      "[data-link='resume']": P.links.resume,
      "[data-link='linkedin']": P.links.linkedin,
      "[data-link='github']": P.links.github
    };
    Object.keys(linkMap).forEach(function (sel) {
      all(sel).forEach(function (node) { node.setAttribute("href", linkMap[sel]); });
    });

    // Email-dependent UI only appears when an address is configured.
    all("[data-email-slot]").forEach(function (slot) {
      if (P.email) {
        slot.hidden = false;
        all("[data-email-text]", slot).forEach(function (n) { n.textContent = P.email; });
        all("[data-email-href]", slot).forEach(function (n) { n.setAttribute("href", "mailto:" + P.email); });
      } else {
        slot.hidden = true;
      }
    });

    var form = el("#contactForm");
    if (form) { form.setAttribute("action", P.formEndpoint); }

    document.title = P.fullName + " — " + P.headline + " | Power BI, SQL & Python";
  }

  function renderStats() {
    var host = el("#statGrid");
    if (!host) { return; }
    host.innerHTML = D.stats.map(function (s) {
      return '<div class="stat card reveal">' +
        '<span class="stat__icon">' + svg(s.icon) + "</span>" +
        '<span class="stat__value"><span data-count="' + s.value + '">0</span>' + esc(s.suffix) + "</span>" +
        '<span class="stat__label">' + esc(s.label) + "</span>" +
        "</div>";
    }).join("");
  }

  function renderMarquee() {
    var host = el("#marqueeTrack");
    if (!host) { return; }
    var items = D.marquee.map(function (t) {
      return "<span class=\"marquee__item\">" + esc(t) + '<i aria-hidden="true"></i></span>';
    }).join("");
    // Duplicated once so the loop is seamless; the copy is hidden from AT.
    host.innerHTML = items + '<span class="marquee__item marquee__item--dup" aria-hidden="true"></span>' + items;
  }

  function renderHighlights() {
    var host = el("#highlightGrid");
    if (!host) { return; }
    host.innerHTML = D.highlights.map(function (h, i) {
      return '<article class="highlight card reveal" style="--d:' + (i * 70) + 'ms">' +
        '<span class="highlight__icon">' + svg(h.icon) + "</span>" +
        "<h3>" + esc(h.title) + "</h3>" +
        "<p>" + esc(h.text) + "</p>" +
        "</article>";
    }).join("");
  }

  function renderExperience() {
    var host = el("#timeline");
    if (!host) { return; }

    var jobs = D.experience.map(function (job) {
      return '<li class="timeline__item reveal">' +
        '<span class="timeline__dot' + (job.current ? " is-current" : "") + '" aria-hidden="true"></span>' +
        '<div class="timeline__card card">' +
          '<div class="timeline__head">' +
            "<h3>" + esc(job.company) + "</h3>" +
            '<span class="pill' + (job.current ? " pill--live" : "") + '">' + esc(job.type) + "</span>" +
          "</div>" +
          '<p class="timeline__role">' + esc(job.role) + "</p>" +
          '<p class="timeline__meta">' +
            "<span>" + svg("mapPin") + esc(job.location) + "</span>" +
            "<span>" + svg("clock") + esc(job.period) + "</span>" +
          "</p>" +
          '<p class="timeline__summary">' + esc(job.summary) + "</p>" +
          '<ul class="bullet-list">' + job.points.map(function (p) {
            return "<li>" + esc(p) + "</li>";
          }).join("") + "</ul>" +
          '<ul class="tag-list">' + job.stack.map(function (t) {
            return "<li>" + esc(t) + "</li>";
          }).join("") + "</ul>" +
          (job.link ? '<a class="link-btn" href="' + esc(job.link) + '" target="_blank" rel="noopener">' +
            esc(job.linkLabel || "View") + svg("arrowRight") + "</a>" : "") +
        "</div></li>";
    }).join("");

    var interns = D.internships.map(function (job) {
      return '<article class="intern card reveal">' +
        '<div class="intern__head"><h4>' + esc(job.company) + "</h4>" +
          "<span>" + svg("clock") + esc(job.period) + "</span></div>" +
        '<p class="intern__role">' + esc(job.role) + "</p>" +
        '<ul class="bullet-list bullet-list--tight">' + job.points.map(function (p) {
          return "<li>" + esc(p) + "</li>";
        }).join("") + "</ul>" +
        '<ul class="tag-list">' + job.stack.map(function (t) {
          return "<li>" + esc(t) + "</li>";
        }).join("") + "</ul>" +
        (job.link ? '<a class="link-btn link-btn--sm" href="' + esc(job.link) + '" target="_blank" rel="noopener">' +
          "Certificate" + svg("external") + "</a>" : "") +
        "</article>";
    }).join("");

    host.innerHTML = jobs;

    var internHost = el("#internGrid");
    if (internHost) { internHost.innerHTML = interns; }
  }

  function renderSkills() {
    var bars = el("#coreSkills");
    if (bars) {
      bars.innerHTML = D.coreSkills.map(function (s) {
        return '<li class="skill-bar reveal">' +
          '<div class="skill-bar__head"><span class="skill-bar__name">' + esc(s.name) + "</span>" +
          '<span class="skill-bar__pct"><span data-count="' + s.level + '">0</span>%</span></div>' +
          '<div class="skill-bar__track" role="progressbar" aria-label="' + esc(s.name) +
            '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + s.level + '">' +
            '<span class="skill-bar__fill" style="--level:' + s.level + '%"></span></div>' +
          '<p class="skill-bar__note">' + esc(s.note) + "</p>" +
          "</li>";
      }).join("");
    }

    var groups = el("#skillGroups");
    if (groups) {
      groups.innerHTML = D.skillGroups.map(function (g, i) {
        return '<article class="skill-group card reveal" style="--d:' + (i * 60) + 'ms">' +
          '<div class="skill-group__head"><span class="skill-group__icon">' + svg(g.icon) + "</span>" +
          "<h3>" + esc(g.name) + '</h3><span class="skill-group__count">' + g.items.length + "</span></div>" +
          '<ul class="chip-list">' + g.items.map(function (it) {
            return "<li>" + esc(it) + "</li>";
          }).join("") + "</ul>" +
          "</article>";
      }).join("");
    }

    // Compact "core stack" chips inside the About fact panel
    var toolChips = el("#toolChips");
    if (toolChips) {
      toolChips.innerHTML = D.coreSkills.map(function (s) {
        return "<li>" + esc(s.name) + "</li>";
      }).join("");
    }
  }

  function renderProjects() {
    var filters = el("#projectFilters");
    if (filters) {
      filters.innerHTML = D.projectFilters.map(function (f, i) {
        return '<button type="button" class="filter-chip' + (i === 0 ? " is-active" : "") +
          '" data-filter="' + esc(f.key) + '" aria-pressed="' + (i === 0) + '">' + esc(f.label) + "</button>";
      }).join("");
    }

    var grid = el("#projectGrid");
    if (!grid) { return; }

    grid.innerHTML = D.projects.map(function (p, i) {
      var index = (i + 1 < 10 ? "0" : "") + (i + 1);
      return '<article class="project card reveal' + (p.featured ? " project--featured" : "") +
        '" data-category="' + esc(p.category) + '" style="--d:' + (i * 45) + 'ms">' +
        '<div class="project__visual accent-' + esc(p.accent || "cyan") + '">' +
          (p.featured ? '<span class="project__flag">' + svg("sparkle") + "Featured</span>" : "") +
          '<span class="project__glyph">' + svg(p.icon) + "</span>" +
          '<span class="project__index">' + index + "</span>" +
          '<span class="project__group">' + esc(p.group) + "</span>" +
        "</div>" +
        '<div class="project__body">' +
          "<h3>" + esc(p.title) + "</h3>" +
          '<p class="project__summary">' + esc(p.summary) + "</p>" +
          '<ul class="tag-list tag-list--compact">' + p.tags.map(function (t) {
            return "<li>" + esc(t) + "</li>";
          }).join("") + "</ul>" +
          '<div class="project__foot">' +
            '<span class="project__meta">' + esc(p.period) + "</span>" +
            '<button type="button" class="link-btn link-btn--sm" data-project="' + i + '">' +
              "Details" + svg("arrowRight") + "</button>" +
          "</div>" +
        "</div></article>";
    }).join("");
  }

  function renderAchievements() {
    var filters = el("#achievementFilters");
    if (filters) {
      filters.innerHTML = D.achievementFilters.map(function (f, i) {
        var count = f.key === "all"
          ? D.achievements.length
          : D.achievements.filter(function (a) { return a.category === f.key; }).length;
        return '<button type="button" class="filter-chip' + (i === 0 ? " is-active" : "") +
          '" data-filter="' + esc(f.key) + '" aria-pressed="' + (i === 0) + '">' +
          esc(f.label) + '<span class="filter-chip__count">' + count + "</span></button>";
      }).join("");
    }

    var grid = el("#achievementGrid");
    if (!grid) { return; }

    grid.innerHTML = D.achievements.map(function (a, i) {
      return '<button type="button" class="ach card reveal accent-' + esc(a.accent || "cyan") +
        '" data-category="' + esc(a.category) + '" data-achievement="' + i + '"' +
        ' style="--d:' + (i % 8) * 45 + 'ms">' +
        '<span class="ach__glow" aria-hidden="true"></span>' +
        '<span class="ach__icon">' + svg(a.icon) + "</span>" +
        '<span class="ach__body">' +
          '<span class="ach__title">' + esc(a.title) + "</span>" +
          '<span class="ach__issuer">' + esc(a.issuer || a.category) + "</span>" +
        "</span>" +
        '<span class="ach__cta">' + svg("external") + "</span>" +
        "</button>";
    }).join("");
  }

  function renderEducation() {
    var grid = el("#educationGrid");
    if (!grid) { return; }
    grid.innerHTML = D.education.map(function (e, i) {
      return '<article class="edu card reveal" style="--d:' + (i * 80) + 'ms">' +
        '<div class="edu__top"><span class="edu__icon">' + svg(e.icon) + "</span>" +
        "<span class=\"edu__period\">" + esc(e.period) + "</span></div>" +
        "<h3>" + esc(e.qualification) + "</h3>" +
        '<p class="edu__school">' + esc(e.institution) + "</p>" +
        '<p class="edu__meta">' + svg("mapPin") + esc(e.location) + "</p>" +
        '<div class="edu__score"><span class="edu__result">' + esc(e.result) + "</span>" +
          '<span class="edu__meter"><span style="--level:' + e.score + '%"></span></span></div>' +
        "</article>";
    }).join("");
  }

  function renderPersonal() {
    var langs = el("#languageList");
    if (langs) {
      var R = 18;
      var C = (2 * Math.PI * R).toFixed(2); // circumference used for the ring
      langs.innerHTML = D.languages.map(function (l) {
        var offset = (C * (1 - l.level / 100)).toFixed(2);
        return '<li class="lang reveal">' +
          '<div class="lang__ring">' +
            '<svg viewBox="0 0 44 44" class="ring" aria-hidden="true">' +
              '<circle class="ring__bg" cx="22" cy="22" r="' + R + '" />' +
              '<circle class="ring__fg" cx="22" cy="22" r="' + R + '" ' +
                'stroke-dasharray="' + C + '" style="--offset:' + offset + '" />' +
            "</svg>" +
            '<span class="lang__value"><span data-count="' + l.level + '">0</span>%</span>' +
          "</div>" +
          '<div class="lang__body"><h4>' + esc(l.name) + "</h4><p>" + esc(l.note) + "</p></div>" +
          "</li>";
      }).join("");
    }

    var interests = el("#interestGrid");
    if (interests) {
      interests.innerHTML = D.interests.map(function (it, i) {
        return '<article class="interest card reveal" style="--d:' + (i * 60) + 'ms">' +
          '<span class="interest__icon">' + svg(it.icon) + "</span>" +
          "<h4>" + esc(it.title) + "</h4>" +
          "<p>" + esc(it.text) + "</p></article>";
      }).join("");
    }
  }

  /* Modal bodies ---------------------------------------------------------- */
  function projectModal(index) {
    var p = D.projects[index];
    if (!p) { return null; }
    return {
      label: p.group,
      title: p.title,
      body:
        '<p class="modal__lede">' + esc(p.summary) + "</p>" +
        '<p>' + esc(p.detail || "") + "</p>" +
        '<dl class="modal__facts">' +
          "<div><dt>Domain</dt><dd>" + esc(p.domain) + "</dd></div>" +
          "<div><dt>Role</dt><dd>" + esc(p.role) + "</dd></div>" +
          "<div><dt>Timeline</dt><dd>" + esc(p.period) + "</dd></div>" +
        "</dl>" +
        '<ul class="tag-list">' + p.tags.map(function (t) {
          return "<li>" + esc(t) + "</li>";
        }).join("") + "</ul>",
      link: p.link,
      linkLabel: "Open supporting material"
    };
  }

  function achievementModal(index) {
    var a = D.achievements[index];
    if (!a) { return null; }
    return {
      label: a.category.replace(/\b\w/g, function (c) { return c.toUpperCase(); }),
      title: a.title,
      body:
        '<p class="modal__lede">' + esc(a.title) + " — " + esc(a.issuer || "") + "</p>" +
        '<p>Certificate and supporting evidence are stored in the linked drive. ' +
        "The credential covers the topics listed below.</p>" +
        '<dl class="modal__facts"><div><dt>Category</dt><dd>' +
          esc(a.category.replace(/\b\w/g, function (c) { return c.toUpperCase(); })) +
          "</dd></div></dl>",
      link: a.link,
      linkLabel: "View credential"
    };
  }



  /* ---------------------------------------------------------------------- */
  /* BEHAVIOURS                                                              */
  /* ---------------------------------------------------------------------- */

  /* Theme toggle (the initial value is set by a tiny inline script in <head>) */
  function initTheme() {
    var buttons = all("[data-theme-toggle]");
    if (!buttons.length) { return; }

    function paint(theme) {
      document.documentElement.setAttribute("data-theme", theme);
      buttons.forEach(function (b) {
        b.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
        b.innerHTML = svg(theme === "dark" ? "sun" : "moon");
      });
    }

    paint(document.documentElement.getAttribute("data-theme") || "dark");
    buttons.forEach(function (b) {
      b.addEventListener("click", function () {
        var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        try { localStorage.setItem("portfolio-theme", next); } catch (e) { /* private mode */ }
        paint(next);
      });
    });
  }

  /* Sticky header state + reading progress bar */
  function initScrollChrome() {
    var header = el("#siteHeader");
    var bar = el("#scrollProgress");
    var toTop = el("#toTop");

    function onScroll() {
      var y = window.pageYOffset || document.documentElement.scrollTop;
      if (header) { header.classList.toggle("is-stuck", y > 24); }
      if (bar) {
        var max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = "scaleX(" + (max > 0 ? Math.min(y / max, 1) : 0) + ")";
      }
      if (toTop) { toTop.classList.toggle("is-visible", y > 600); }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (toTop) {
      toTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: reduceMotion() ? "auto" : "smooth" });
      });
    }
  }

  /* Mobile navigation */
  function initNav() {
    var toggle = el("#navToggle");
    var list = el("#navList");
    if (!toggle || !list) { return; }
    toggle.innerHTML = svg("menu");

    function close() {
      list.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.innerHTML = svg("menu");
      document.body.classList.remove("nav-open");
    }

    toggle.addEventListener("click", function () {
      var open = list.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.innerHTML = svg(open ? "close" : "menu");
      document.body.classList.toggle("nav-open", open);
    });

    all("a", list).forEach(function (a) { a.addEventListener("click", close); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { close(); } });
    window.addEventListener("resize", function () { if (window.innerWidth > 1240) { close(); } });
  }

  /* Highlight the nav link of the section currently in view */
  function initScrollSpy() {
    var links = all("#navList a[href^='#']");
    if (!links.length || !("IntersectionObserver" in window)) { return; }

    var map = {};
    links.forEach(function (link) {
      var id = link.getAttribute("href").slice(1);
      map[id] = link;
    });

    var observer = new IntersectionObserver(function (entries) {
      var entering = null;
      entries.forEach(function (entry) {
        if (entry.isIntersecting && map[entry.target.id]) { entering = entry.target.id; }
      });
      if (entering) {
        links.forEach(function (l) { l.classList.remove("is-active"); });
        map[entering].classList.add("is-active");
        return;
      }
      // Nothing new entered: if a tracked section just left the band, clear the
      // highlight so the hero/footer never show a stale active link.
      var exited = entries.some(function (entry) { return !entry.isIntersecting && map[entry.target.id]; });
      if (exited) { links.forEach(function (l) { l.classList.remove("is-active"); }); }
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    Object.keys(map).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) { observer.observe(section); }
    });
  }

  /* Typewriter for the rotating job titles */
  function initTyping() {
    var target = el("#roleText");
    var roles = P.roles || [];
    if (!target || !roles.length) { return; }

    if (reduceMotion()) { target.textContent = roles[0]; return; }

    var roleIndex = 0;
    var charIndex = 0;
    var deleting = false;

    (function tick() {
      var current = roles[roleIndex];
      charIndex += deleting ? -1 : 1;
      target.textContent = current.slice(0, charIndex);

      var delay = deleting ? 45 : 85;
      if (!deleting && charIndex === current.length) {
        delay = 2200;
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 380;
      }
      setTimeout(tick, delay);
    })();
  }

  /* Scroll-reveal + number counters + proficiency meters */
  function initReveal() {
    var targets = all(".reveal, .skill-bar, .lang, .ring");
    if (!("IntersectionObserver" in window) || reduceMotion()) {
      targets.forEach(function (t) { t.classList.add("is-visible"); });
      all("[data-count]").forEach(function (n) {
        n.textContent = n.getAttribute("data-count");
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        var node = entry.target;
        node.classList.add("is-visible");
        all("[data-count]", node).forEach(function (counter) { countUp(counter); });
        observer.unobserve(node);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.15 });

    targets.forEach(function (t) { observer.observe(t); });

    // Counters that live outside a .reveal wrapper (hero stats, for example)
    all("[data-count]").forEach(function (counter) {
      if (!counter.closest(".reveal, .lang, .stat")) { countUp(counter); }
    });
  }

  function countUp(node) {
    if (node.dataset.done === "1") { return; }
    node.dataset.done = "1";

    var target = parseFloat(node.getAttribute("data-count"));
    var decimals = (String(target).split(".")[1] || "").length;
    var duration = 1300;
    var start = null;

    if (reduceMotion()) {
      node.textContent = target.toFixed(decimals);
      return;
    }

    function step(timestamp) {
      if (start === null) { start = timestamp; }
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      node.textContent = (target * eased).toFixed(decimals);
      if (progress < 1) { window.requestAnimationFrame(step); }
      else { node.textContent = target.toFixed(decimals); }
    }
    window.requestAnimationFrame(step);
  }

  /* Card tilt + pointer spotlight (skipped for touch / reduced motion) */
  function initPointerFx() {
    var fine = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine || reduceMotion()) { return; }

    var glow = el("#cursorGlow");
    if (glow) {
      window.addEventListener("pointermove", function (e) {
        glow.style.transform = "translate3d(" + e.clientX + "px," + e.clientY + "px,0)";
        glow.classList.add("is-on");
      }, { passive: true });
      document.addEventListener("mouseleave", function () { glow.classList.remove("is-on"); });
    }

    all("[data-tilt]").forEach(function (card) {
      card.addEventListener("pointermove", function (e) {
        var rect = card.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width;
        var py = (e.clientY - rect.top) / rect.height;
        card.style.setProperty("--mx", (px * 100).toFixed(1) + "%");
        card.style.setProperty("--my", (py * 100).toFixed(1) + "%");
        card.style.transform = "perspective(900px) rotateX(" + ((0.5 - py) * 3.6).toFixed(2) +
          "deg) rotateY(" + ((px - 0.5) * 3.6).toFixed(2) + "deg)";
      });
      card.addEventListener("pointerleave", function () {
        card.style.transform = "";
      });
    });
  }

  /* Generic filter chips for the project + achievement grids */
  function initFilters() {
    function wire(chipHostId, gridId) {
      var chipHost = el("#" + chipHostId);
      var grid = el("#" + gridId);
      if (!chipHost || !grid) { return; }

      chipHost.addEventListener("click", function (e) {
        var chip = e.target.closest(".filter-chip");
        if (!chip) { return; }
        var key = chip.getAttribute("data-filter");

        all(".filter-chip", chipHost).forEach(function (c) {
          var active = c === chip;
          c.classList.toggle("is-active", active);
          c.setAttribute("aria-pressed", String(active));
        });

        all("[data-category]", grid).forEach(function (item) {
          var show = key === "all" || item.getAttribute("data-category") === key;
          item.classList.toggle("is-hidden", !show);
          item.setAttribute("aria-hidden", String(!show));
        });
      });
    }

    wire("projectFilters", "projectGrid");
    wire("achievementFilters", "achievementGrid");
  }

  /* Accessible lightbox used by projects + achievements */
  function initModal() {
    var modal = el("#modal");
    if (!modal) { return; }

    var label = el("#modalLabel");
    var title = el("#modalTitle");
    var body = el("#modalBody");
    var link = el("#modalLink");
    var lastFocused = null;

    function open(data) {
      if (!data) { return; }
      lastFocused = document.activeElement;
      label.textContent = data.label || "";
      title.textContent = data.title || "";
      body.innerHTML = data.body || "";
      if (data.link) {
        link.href = data.link;
        link.hidden = false;
      } else {
        link.hidden = true;
        link.removeAttribute("href");
      }
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
      function focusClose() {
        var closeBtn = el(".modal__close", modal);
        if (closeBtn) { closeBtn.focus({ preventScroll: true }); }
      }
      focusClose();
      requestAnimationFrame(focusClose);
    }

    function close() {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
      if (lastFocused && lastFocused.focus) { lastFocused.focus(); }
    }

    document.addEventListener("click", function (e) {
      var trigger = e.target.closest("[data-project]");
      if (trigger) { open(projectModal(parseInt(trigger.getAttribute("data-project"), 10))); return; }

      var ach = e.target.closest("[data-achievement]");
      if (ach) {
        open(achievementModal(parseInt(ach.getAttribute("data-achievement"), 10)));
        return;
      }

      if (e.target.closest("[data-modal-close]") || e.target === modal) { close(); }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("is-open")) { close(); }
    });
  }

  /* Contact form — progressive enhancement over the FormSubmit endpoint */
  function initForm() {
    var form = el("#contactForm");
    if (!form) { return; }
    var status = el("#formStatus");
    var button = el("button[type='submit']", form);

    form.addEventListener("submit", function (e) {
      if (!window.fetch) { return; } // let the browser post natively
      e.preventDefault();

      var original = button ? button.innerHTML : "";
      if (button) { button.disabled = true; button.innerHTML = "Sending…"; }
      if (status) { status.textContent = ""; status.className = "form__status"; }

      fetch(form.action, {
        method: form.method || "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      }).then(function (res) {
        if (!res.ok) { throw new Error("Request failed"); }
        if (status) {
          status.textContent = "Thanks — your message is on its way. I'll reply shortly.";
          status.className = "form__status is-success";
        }
        form.reset();
      }).catch(function () {
        if (status) {
          status.textContent = "Something went wrong. Please try again, or reach me on LinkedIn.";
          status.className = "form__status is-error";
        }
      }).then(function () {
        if (button) { button.disabled = false; button.innerHTML = original; }
      });
    });
  }

  /* Copy-to-clipboard for the email chip */
  function initCopyEmail() {
    all("[data-copy-email]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var value = P.email;
        if (!value) { return; }
        var done = function () {
          var original = btn.textContent;
          btn.textContent = "Copied";
          setTimeout(function () { btn.textContent = original; }, 1600);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(value).then(done, done);
        } else {
          done();
        }
      });
    });
  }

  /* Preloader */
  function hidePreloader() {
    var pre = el("#preloader");
    if (!pre) { return; }
    pre.classList.add("is-done");
    setTimeout(function () { pre.hidden = true; }, 600);
  }

  /* ---------------------------------------------------------------------- */
  /* BOOT                                                                    */
  /* ---------------------------------------------------------------------- */
  function boot() {
    renderIdentity();
    renderStats();
    renderMarquee();
    renderHighlights();
    renderExperience();
    renderSkills();
    renderProjects();
    renderAchievements();
    renderEducation();
    renderPersonal();

    initTheme();
    initNav();
    initScrollChrome();
    initScrollSpy();
    initTyping();
    initFilters();
    initModal();
    initForm();
    initCopyEmail();
    initReveal();
    initPointerFx();

    document.documentElement.classList.add("is-ready");
    hidePreloader();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

})();
