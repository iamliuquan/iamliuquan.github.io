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
      "I'm an LLM and agent research scientist at Accenture's Center for Advanced AI. " +
      "As a founding member, I lead a team building a coding agent and an automated " +
      "agent-generation pipeline, and I've contributed core features to AIRefinery, " +
      "Accenture's enterprise agent platform. My work spans agent orchestration, tool " +
      "use, RAG, and post-training alignment — this site collects my research, the " +
      "systems I build, and what I'm exploring now.",
    photo: "assets/img/profile.jpg", // square image; falls back to "QL" monogram if missing
    // About-section bio (homepage) — one string per paragraph. Personable, first-person.
    bio: [
      "I'm an LLM and agent researcher, and an engineer at heart. I like turning open research questions into systems that actually run — and I care as much about whether something holds up in production as whether it works in a paper.",
      "Today I'm at <strong>Accenture's Center for Advanced AI</strong>, where, as a founding member of our agentic systems team, I lead a team building a <strong>coding agent</strong> and an <strong>automated agent-generation pipeline</strong>, and contribute core features to <strong>AIRefinery</strong>. I earned my <strong>Ph.D. in Computer Science at Vanderbilt</strong>, working across medical imaging, computational vision, and machine learning.",
      "My research spans <strong>LLM agents, tool use, retrieval, and post-training alignment</strong>, with recent work at ICLR and NeurIPS. Off the clock, I'm happiest on a basketball court or somewhere along the California coast.",
    ],
    location: "San Francisco Bay Area",
    affiliation: "Accenture — Center for Advanced AI",
    email: "iamliuquan@gmail.com",
    cv: "", // CV intentionally not published for download
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
      title: "MCP-Bench: Benchmarking Tool-Using LLM Agents with Complex Real-World Tasks via MCP Servers",
      authors: ["Zhenting Wang", "Qi Chang", "Hemani Patel", "Shashank Biju", "Cheng-En Wu", "Quan Liu", "Aolin Ding", "Alireza Rezazadeh", "Ankit Shah", "Yujia Bao", "Eugene Siow"],
      venue: "ICLR 2026 · NeurIPS 2025",
      year: "2026",
      type: "conference",
      abstract: "A benchmark evaluating tool-using LLM agents on complex, multi-step tasks over 28 live MCP servers spanning 250+ tools.",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2508.20453" },
        { label: "Code", url: "https://github.com/Accenture/mcp-bench", icon: "github" },
      ],
    },
    {
      title: "DRAGON: Guard LLM Unlearning in Context via Negative Detection and Reasoning",
      authors: ["Yaxuan Wang", "Chris Yuhao Liu", "Quan Liu", "Jinglong Pang", "Wei Wei", "Yujia Bao", "Yang Liu"],
      venue: "ICLR 2026",
      year: "2026",
      type: "conference",
      abstract: "",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2511.05784" },
      ],
    },
    {
      title: "PromptBridge: Cross-Model Prompt Transfer for Large Language Models",
      authors: ["Yaxuan Wang", "Quan Liu", "Zhenting Wang", "Zichao Li", "Wei Wei", "Yang Liu", "Yujia Bao"],
      venue: "arXiv preprint",
      year: "2025",
      type: "preprint",
      abstract: "",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2512.01420" },
      ],
    },
    {
      title: "LLM Unlearning via Loss Adjustment with Only Forget Data",
      authors: ["Yaxuan Wang", "Jiaheng Wei", "Chris Yuhao Liu", "Jinlong Pang", "Quan Liu", "Ankit Parag Shah", "Yujia Bao", "Yang Liu", "Wei Wei"],
      venue: "ICLR 2025",
      year: "2025",
      type: "conference",
      abstract: "",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2410.11143" },
        { label: "Code", url: "https://github.com/UCSC-REAL/FLAT", icon: "github" },
      ],
    },

    /* --- Medical imaging, vision & ML (PhD + collaborations) --- */
    {
      title: "Glo-VLMs: Leveraging Vision-Language Models for Fine-Grained Diseased Glomerulus Classification",
      authors: "Z Guo, R Saluja, H Fang, T Yao, Q Liu, Y Huo, B Liechty, DJ Pisapia",
      venue: "SPIE Medical Imaging 2026", year: "2026", links: [],
    },
    {
      title: "Evaluating Cell AI Foundation Models in Kidney Pathology with Human-in-the-Loop Enrichment",
      authors: "J Guo, S Lu, C Cui, R Deng, T Yao, Z Tao, Y Lin, M Lionts, Q Liu, et al.",
      venue: "Communications Medicine", year: "2025", links: [],
    },
    {
      title: "From Classification to Cross-Modal Understanding: Leveraging Vision-Language Models for Fine-Grained Renal Pathology",
      authors: "Z Guo, R Saluja, T Yao, Q Liu, J Zhu, H Wang, D Reisenbichler, Y Huo",
      venue: "arXiv preprint", year: "2025",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2511.11984" }],
    },
    {
      title: "Glo-In-One-v2: Holistic Identification of Glomerular Cells, Tissues, and Lesions in Human and Mouse Histopathology",
      authors: "L Yu, M Yin, R Deng, Q Liu, T Yao, C Cui, J Guo, Y Wang, et al.",
      venue: "Journal of Medical Imaging", year: "2025", links: [],
    },
    {
      title: "DeepAndes: A Self-Supervised Vision Foundation Model for Multi-Spectral Remote Sensing Imagery of the Andes",
      authors: "J Guo, JR Zimmer-Dauphinee, JM Nieusma, S Lu, Q Liu, R Deng, C Cui, et al.",
      venue: "IEEE JSTARS", year: "2025", links: [],
    },
    {
      title: "Rep3D: Re-parameterize Large 3D Kernels with Low-Rank Receptive Modeling for Medical Imaging",
      authors: "HH Lee, Q Liu, S Bao, Y Huo, BA Landman",
      venue: "arXiv preprint", year: "2025",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2505.19603" }],
    },
    {
      title: "Write Sentence with Images: Revisit the Large Vision Model with Visual Sentence",
      authors: "Q Liu, C Cui, R Deng, T Yao, Y Yang, Y Tang, Y Huo",
      venue: "IS&T Electronic Imaging 2025", year: "2025", links: [],
    },
    {
      title: "mTree: Multi-level Text-guided Representation End-to-End Learning for Whole Slide Image Analysis",
      authors: "Q Liu, R Deng, C Cui, T Yao, Y Yang, V Nath, B Li, Y Chen, Y Tang, Y Huo",
      venue: "IS&T Electronic Imaging 2025", year: "2025", links: [],
    },
    {
      title: "Quantitative Benchmarking of Anomaly Detection Methods in Digital Pathology Images",
      authors: "C Cui, X Zheng, R Deng, Q Liu, T Yao, KT Wilson, LA Coburn, et al.",
      venue: "Machine Learning: Health", year: "2025", links: [],
    },
    {
      title: "Multichannel Meta-imagers for Accelerating Machine Vision",
      authors: "H Zheng, Q Liu, II Kravchenko, X Zhang, Y Huo, JG Valentine",
      venue: "Nature Nanotechnology", year: "2024", links: [],
    },
    {
      title: "PrPSeg: Universal Proposition Learning for Panoramic Renal Pathology Segmentation",
      authors: "R Deng, Q Liu, C Cui, T Yao, J Yue, J Xiong, L Yu, Y Wu, M Yin, Y Wang, et al.",
      venue: "CVPR 2024", year: "2024", links: [],
    },
    {
      title: "HATS: Hierarchical Adaptive Taxonomy Segmentation for Panoramic Pathology Image Analysis",
      authors: "R Deng, Q Liu, C Cui, T Yao, J Xiong, S Bao, H Li, M Yin, Y Wang, et al.",
      venue: "MICCAI 2024", year: "2024", links: [],
    },
    {
      title: "HoloHisto: End-to-End Gigapixel WSI Segmentation with 4K Resolution Sequential Tokenization",
      authors: "Y Tang, Y He, V Nath, P Guo, R Deng, T Yao, Q Liu, C Cui, M Yin, et al.",
      venue: "MICCAI 2024", year: "2024", links: [],
    },
    {
      title: "ExtremeMETA: High-speed Lightweight Image Segmentation by Remodeling Multi-channel Metamaterial Imagers",
      authors: "Q Liu, BT Swartz, I Kravchenko, JG Valentine, Y Huo",
      venue: "arXiv preprint", year: "2024",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2405.17568" }],
    },
    {
      title: "All-in-SAM: From Weak Annotation to Pixel-wise Nuclei Segmentation with Prompt-based Finetuning",
      authors: "C Cui, R Deng, Q Liu, T Yao, S Bao, LW Remedios, BA Landman, Y Tang, et al.",
      venue: "Journal of Physics: Conf. Series", year: "2024", links: [],
    },
    {
      title: "Fusion: Bayesian-Based Multimodal Multi-level Fusion on Colorectal Cancer Microsatellite Instability Prediction",
      authors: "Q Liu, J Yao, L Yao, X Chen, J Zhou, L Lu, L Zhang, Z Liu, Y Huo",
      venue: "MICCAI 2023", year: "2023", links: [],
    },
    {
      title: "Digital Modeling on Large Kernel Metamaterial Neural Network",
      authors: "Q Liu, H Zheng, BT Swartz, H Lee, Z Asad, I Kravchenko, JG Valentine, et al.",
      venue: "Journal of Imaging Science and Technology", year: "2023", links: [],
    },
    {
      title: "Scaling Up 3D Kernels with Bayesian Frequency Re-parameterization for Medical Image Segmentation",
      authors: "HH Lee, Q Liu, S Bao, Q Yang, X Yu, LY Cai, TZ Li, Y Huo, X Koutsoukos, et al.",
      venue: "MICCAI 2023", year: "2023", links: [],
    },
    {
      title: "DeformUX-Net: Exploring a 3D Foundation Backbone for Medical Image Segmentation with Depthwise Deformable Convolution",
      authors: "HH Lee, Q Liu, Q Yang, X Yu, S Bao, Y Huo, BA Landman",
      venue: "arXiv preprint", year: "2023",
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2310.00199" }],
    },
    {
      title: "Omni-Seg: A Scale-aware Dynamic Network for Renal Pathological Image Segmentation",
      authors: "R Deng, Q Liu, C Cui, T Yao, J Long, Z Asad, RM Womick, Z Zhu, AB Fogo, et al.",
      venue: "IEEE Transactions on Biomedical Engineering", year: "2023", links: [],
    },
    {
      title: "Democratizing Pathological Image Segmentation with Lay Annotators via Molecular-Empowered Learning",
      authors: "R Deng, Y Li, P Li, J Wang, LW Remedios, S Agzamkhodjaev, Z Asad, et al.",
      venue: "MICCAI 2023", year: "2023", links: [],
    },
  ],

  /* ---- projects / systems (featured ones show on the homepage) ----- */
  projects: [
    {
      title: "Coding agent & agent auto-generation",
      tag: "Lead project",
      blurb: "As a founding member, I lead a team building a coding agent and an automated pipeline that generates task-specific agents — taking a spec to a working, tool-grounded agent with minimal manual wiring.",
      tech: ["Agents", "Code generation", "Orchestration", "Tool use"],
      links: [],
      featured: true,
    },
    {
      title: "AIRefinery",
      tag: "Enterprise platform",
      blurb: "Accenture's enterprise multi-agent platform. I contributed core feature implementation across the agent stack. Featured at NVIDIA GTC.",
      tech: ["Multi-agent", "Orchestration", "RAG"],
      links: [],
      featured: true,
    },
    {
      title: "MCP-Bench",
      tag: "Benchmark",
      blurb: "An open benchmark for tool-using LLM agents on complex, multi-step tasks over live MCP servers. ICLR 2026 / NeurIPS 2025.",
      tech: ["Agents", "Tool use", "Evaluation"],
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2508.20453" },
        { label: "Code", url: "https://github.com/Accenture/mcp-bench", icon: "github" },
      ],
      featured: true,
    },
    {
      title: "Distiller",
      tag: "Agent framework",
      blurb: "The core agent-orchestration framework behind AIRefinery — orchestrator, planning agents, dynamic tool chaining, and multi-level memory for long-horizon reasoning and coordination.",
      tech: ["Planning", "Tool use", "Memory"],
      links: [],
      featured: false,
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
        "Founding member of the agentic systems team; lead a team building a coding agent and an automated agent-generation pipeline.",
        "Contributed core feature implementation to AIRefinery, Accenture's enterprise multi-agent platform (featured at NVIDIA GTC).",
        "Built schema-constrained tool execution (MCP-style grounding, validation, and tracing) and a hybrid RAG system (E5 + BM25 + FAISS).",
        "Worked on post-training alignment — SFT, PPO, and GRPO — for reasoning, tool planning, and multi-agent coordination.",
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
      body: "Accenture's enterprise agent platform — which I contributed core features to — was showcased at NVIDIA GTC.",
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
