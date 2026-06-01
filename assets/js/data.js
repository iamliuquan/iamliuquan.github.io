/* =========================================================================
   SITE CONTENT  —  edit everything here. No build step needed.
   Sections: profile, links, interests, publications, projects,
             experience, education, updates, collaboration.
   ========================================================================= */

const SITE = {
  /* ---- identity ---------------------------------------------------- */
  profile: {
    name: "Quan Liu",
    initials: "QL",
    role: 'LLM &amp; Agent Research Scientist <b>·</b> Tech Lead <b>@</b> Accenture',
    tagline: "Building production-grade multi-agent systems at scale.",
    intro:
      "I'm an LLM and agent research scientist building production multi-agent " +
      "systems at scale. At Accenture's Center for Advanced AI, I lead the team " +
      "behind AIRefinery — an enterprise agent platform now powering 30+ real-world " +
      "use cases. My work spans agent orchestration, tool use, RAG, and post-training " +
      "alignment. This site collects my research, the systems I build, and what I'm exploring now.",
    photo: "assets/img/profile.jpg", // square image; falls back to "QL" monogram if missing
    location: "San Francisco Bay Area",
    affiliation: "Accenture — Center for Advanced AI",
    email: "iamliuquan@gmail.com",
    cv: "files/quan-liu-cv.pdf",
    facts: [
      { label: "Role",     value: "Sr. Research Scientist &amp; Tech Lead" },
      { label: "Lab",      value: "Accenture · Center for Advanced AI" },
      { label: "Focus",    value: "LLM agents · alignment · RAG" },
      { label: "Ph.D.",    value: "Computer Science, Vanderbilt (2024)" },
      { label: "Based in", value: "San Francisco Bay Area" },
      { label: "Email",    value: '<a href="mailto:iamliuquan@gmail.com">iamliuquan@gmail.com</a>' },
    ],
  },

  /* ---- social / external links ------------------------------------- */
  // Add a URL to surface a link in the footer & contact. Empty ones are hidden.
  links: [
    { icon: "github",   label: "GitHub",         url: "https://github.com/iamliuquan" },
    { icon: "scholar",  label: "Google Scholar", url: "https://scholar.google.com/citations?user=moBC7TkAAAAJ&hl=en" },
    { icon: "linkedin", label: "LinkedIn",       url: "https://www.linkedin.com/in/quan-l/" },
    { icon: "mail",     label: "Email",          url: "mailto:iamliuquan@gmail.com" },
  ],

  /* ---- research interests (chips) ---------------------------------- */
  interests: [
    "LLM agents", "Multi-agent systems", "Agent orchestration", "Tool use & MCP",
    "RAG & retrieval", "Post-training alignment", "RLHF · PPO · GRPO",
    "LLM unlearning", "Multimodal learning", "Agent evaluation",
  ],

  /* ---- publications (newest first) --------------------------------- */
  // "Quan Liu" in authors is bolded automatically. Add links when you have URLs.
  publications: [
    {
      title: "MCP-Bench: Benchmarking Tool-Using LLM Agents with Real-World Tasks",
      authors: ["Quan Liu", "et al."],
      venue: "ICLR 2026 · NeurIPS 2025",
      year: "2026",
      type: "conference",
      abstract: "A benchmark evaluating tool-using LLM agents on realistic, multi-step tasks over MCP-style tool servers.",
      links: [ /* { label: "arXiv", url: "" }, { label: "Code", url: "" } */ ], // TODO: add links
    },
    {
      title: "DRAGON: Guard LLM Unlearning via Negative Detection and Reasoning",
      authors: ["Quan Liu", "et al."],
      venue: "ICLR 2026",
      year: "2026",
      type: "conference",
      abstract: "",
      links: [],
    },
    {
      title: "PromptBridge: Cross-Model Prompt Transfer for Large Language Models",
      authors: ["Quan Liu", "et al."],
      venue: "arXiv preprint",
      year: "2025",
      type: "preprint",
      abstract: "",
      links: [],
    },
    {
      title: "LLM Unlearning via Loss Adjustment with Only Forget Data",
      authors: ["Quan Liu", "et al."],
      venue: "ICLR 2025",
      year: "2025",
      type: "conference",
      abstract: "",
      links: [],
    },
  ],

  /* ---- projects / systems (featured ones show on the homepage) ----- */
  projects: [
    {
      title: "AIRefinery",
      tag: "Enterprise platform",
      blurb: "Accenture's production multi-agent platform — agent-as-a-service across enterprise workflows, serving 1K+ concurrent users and 30+ use cases, including Fortune 500 deployments. Featured at NVIDIA GTC.",
      tech: ["Multi-agent", "Orchestration", "RAG", "Enterprise"],
      links: [],
      featured: true,
    },
    {
      title: "Distiller",
      tag: "Agent framework",
      blurb: "The core agent orchestration framework powering AIRefinery — orchestrator, planning agents, dynamic tool chaining, and multi-level memory for long-horizon reasoning and coordination.",
      tech: ["Planning", "Tool use", "Memory"],
      links: [],
      featured: true,
    },
    {
      title: "MCP-Bench",
      tag: "Benchmark",
      blurb: "An open benchmark for tool-using LLM agents on realistic, multi-step tasks over MCP-style tool servers. ICLR 2026 / NeurIPS 2025.",
      tech: ["Agents", "Tool use", "Evaluation"],
      links: [], // TODO: add GitHub/arXiv
      featured: true,
    },
    {
      title: "Hybrid retrieval system",
      tag: "RAG / retrieval",
      blurb: "A hybrid retrieval stack (E5 + BM25 + FAISS) over 50M+ documents — improving precision by 12% and reducing hallucination by 18% in production agents.",
      tech: ["RAG", "FAISS", "E5", "BM25"],
      links: [],
      featured: false,
    },
    {
      title: "Alignment & post-training pipeline",
      tag: "Post-training",
      blurb: "End-to-end LLM alignment pipeline (SFT, PPO, GRPO) over 30B+ tokens — improving reasoning, tool planning, and multi-agent coordination via failure-driven data.",
      tech: ["SFT", "PPO", "GRPO", "RLHF"],
      links: [],
      featured: false,
    },
  ],

  /* ---- experience -------------------------------------------------- */
  experience: [
    {
      org: "Accenture — Center for Advanced AI",
      role: "Sr. Research Scientist / Tech Lead",
      place: "Mountain View, CA",
      period: "2024 — Present",
      bullets: [
        "Architected and deployed AIRefinery, a production multi-agent platform (1K+ concurrent users, 30+ enterprise use cases).",
        "Led the core agent framework (Distiller): orchestration, planning, tool chaining, and multi-level memory.",
        "Built schema-constrained tool execution (MCP-style grounding, validation, tracing) and a hybrid RAG system over 50M+ docs.",
        "Designed end-to-end alignment (SFT/PPO/GRPO over 30B+ tokens) and led a team of 6 engineers.",
      ],
    },
    {
      org: "Merck — Image Data Analytics",
      role: "Research Intern",
      place: "West Point, PA",
      period: "2023",
      bullets: [
        "Built a multimodal fusion pipeline integrating imaging and structured data for robust prediction.",
        "Cut inference cost by 40% via anomaly-guided patch selection and efficient visual encoding.",
      ],
    },
    {
      org: "Alibaba — DAMO Academy",
      role: "Research Intern",
      place: "New York, NY",
      period: "2022",
      bullets: [
        "Built a CLIP-based vision-language framework for mutation classification (+9 F1).",
        "Designed missing-modality retrieval and alignment for real-world multimodal deployment.",
      ],
    },
  ],

  /* ---- education --------------------------------------------------- */
  education: [
    { org: "Vanderbilt University", role: "Ph.D., Computer Science", period: "2024" },
    { org: "Huazhong University of Science and Technology (HUST)", role: "B.S., Electrical Engineering", period: "2018" },
  ],

  /* ---- updates / news (newest first) ------------------------------- */
  updates: [
    {
      date: "June 2026",
      badge: "Site",
      title: "New personal site is live",
      body: "Rebuilt my homepage from scratch — a place to share research, the systems I build, and updates as they happen.",
    },
    {
      date: "2026",
      badge: "Paper",
      title: "Two papers accepted to ICLR 2026",
      body: "MCP-Bench (benchmarking tool-using LLM agents) and DRAGON (guarding LLM unlearning) were both accepted to ICLR 2026.",
    },
    {
      date: "2025",
      badge: "Paper",
      title: "MCP-Bench at NeurIPS 2025",
      body: "Our benchmark for tool-using agents on real-world, multi-step tasks appeared at NeurIPS 2025.",
    },
    {
      date: "2025",
      badge: "Talk",
      title: "AIRefinery featured at NVIDIA GTC",
      body: "Accenture's enterprise agent platform — which I helped architect — was showcased at NVIDIA GTC.",
    },
    {
      date: "2024",
      badge: "Milestone",
      title: "Joined Accenture's Center for Advanced AI",
      body: "Started as Sr. Research Scientist / Tech Lead after completing my Ph.D. at Vanderbilt University.",
    },
  ],

  /* ---- collaboration ----------------------------------------------- */
  collaboration: {
    intro:
      "I'm always glad to talk with people building reliable LLM agents — whether " +
      "that's a research collaboration, an open benchmark, or just comparing notes " +
      "on what actually holds up in production.",
    areas: [
      { title: "Agent systems & orchestration", body: "Designing multi-agent systems, planning, memory, and tool-use pipelines that survive real enterprise constraints." },
      { title: "Alignment & post-training",      body: "SFT, RLHF, PPO/GRPO, evaluation, and failure-driven data for models that are more reliable and reason better." },
      { title: "Research & open benchmarks",     body: "Co-authoring on LLM agents, RAG, and unlearning — and building open benchmarks like MCP-Bench." },
    ],
  },
};
