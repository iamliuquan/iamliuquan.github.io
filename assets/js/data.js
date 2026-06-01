/* =========================================================================
   SITE CONTENT  —  edit everything here. No build step needed.
   Sections: profile, links, navigation, research, projects, updates, collab.
   NOTE: Items marked  // TODO  are placeholders to replace with CV content.
   ========================================================================= */

const SITE = {
  /* ---- identity ---------------------------------------------------- */
  profile: {
    name: "Quan Liu",
    initials: "QL",
    // short role line shown under the name in the hero (supports <b> for accent)
    role: 'Researcher <b>·</b> Engineer <b>·</b> Cleveland, OH',
    tagline: "A basketball athlete distracted by research.", // TODO: refine from CV
    // hero paragraph — the elevator pitch
    intro:
      "I work at the intersection of research and engineering, turning open " + // TODO
      "questions into things that run. This site collects my research, the " +
      "projects I build, and short updates on what I'm currently exploring.",
    // path to a square profile photo; leave empty ("") to show the QL monogram
    photo: "", // e.g. "assets/img/profile.jpg"
    location: "Cleveland, Ohio",
    affiliation: "Case Western Reserve University", // TODO: confirm current role/affiliation
    email: "qxl268@case.edu",
    cv: "files/quan-liu-cv.pdf", // drop your CV here; link auto-hides if missing on click
    // sidebar facts on the About page
    facts: [
      { label: "Role",     value: "Researcher" },              // TODO
      { label: "Focus",    value: "TBD — fill from CV" },       // TODO
      { label: "Based in", value: "Cleveland, OH" },
      { label: "Email",    value: '<a href="mailto:qxl268@case.edu">qxl268@case.edu</a>' },
    ],
  },

  /* ---- social / external links ------------------------------------- */
  // icon keys are defined in site.js (ICONS). Add only the ones you use.
  links: [
    { icon: "github",   label: "GitHub",        url: "https://github.com/iamliuquan" },
    { icon: "mail",     label: "Email",         url: "mailto:qxl268@case.edu" },
    { icon: "scholar",  label: "Google Scholar",url: "" }, // TODO
    { icon: "linkedin", label: "LinkedIn",      url: "" }, // TODO
    { icon: "orcid",    label: "ORCID",         url: "" }, // TODO
    { icon: "twitter",  label: "X / Twitter",   url: "" }, // TODO
  ],

  /* ---- research interests (about page chips) ----------------------- */
  interests: ["Add", "your", "research", "areas", "from", "CV"], // TODO

  /* ---- publications ------------------------------------------------ */
  // newest first. type: "journal" | "conference" | "preprint" | "workshop"
  publications: [
    {
      title: "Replace with your first publication title",       // TODO
      authors: ["Quan Liu", "Co-author A", "Co-author B"],       // use exact "Quan Liu" to bold your name
      venue: "Venue / Journal",
      year: "2024",
      type: "preprint",
      abstract: "",
      links: [
        // { label: "PDF",  url: "#" },
        // { label: "Code", url: "#" },
        // { label: "arXiv",url: "#" },
      ],
    },
  ],

  /* ---- projects ---------------------------------------------------- */
  projects: [
    {
      title: "Project name",                                     // TODO
      tag: "Open source",
      blurb: "One or two sentences on what it does and why it matters.",
      tech: ["Python", "..."],
      links: [
        // { label: "GitHub", url: "https://github.com/iamliuquan/...", icon: "github" },
        // { label: "Demo",   url: "#", icon: "external" },
      ],
      featured: true, // show on homepage highlights
    },
  ],

  /* ---- updates / news --------------------------------------------- */
  // newest first. date is free-form text (e.g. "May 2026").
  updates: [
    {
      date: "June 2026",
      badge: "Site",
      title: "New personal site is live",
      body: "Rebuilt my homepage from scratch — a place to share research, projects, and updates as they happen.",
    },
    {
      date: "—",
      badge: "Coming soon",
      title: "More updates on the way",
      body: "Send me your CV and recent news and I'll fill this feed with the real story.", // TODO
    },
  ],

  /* ---- collaboration ----------------------------------------------- */
  collaboration: {
    intro:
      "I like working with people who are curious and rigorous. If any of " +
      "the directions below resonate, or you just want to compare notes, reach out.",
    areas: [
      { title: "Research collaborations", body: "Co-authoring papers, joint experiments, or exploring a shared question." }, // TODO
      { title: "Open-source & tooling",   body: "Building or contributing to tools that make research faster and more reproducible." },
      { title: "Talks & mentoring",       body: "Guest lectures, reading groups, and mentoring students newer to the field." },
    ],
  },
};
