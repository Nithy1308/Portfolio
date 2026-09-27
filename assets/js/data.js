/* ==========================================================================
   data.js — Single source of truth for every piece of site content.
   Edit this file to update the portfolio. No build step required.
   ========================================================================== */
window.PORTFOLIO = (function () {
  "use strict";

  /* ---------------------------------------------------------------------- */
  /* 1. PROFILE / IDENTITY                                                  */
  /* ---------------------------------------------------------------------- */
  const profile = {
    firstName: "Nithyasree",
    fullName: "Nithyasree K",
    initials: "NK",
    headline: "Data Analyst",
    // Rotating roles for the hero typewriter effect
    roles: [
      "Data Analyst",
      "Power BI Developer",
      "SQL & Python Analyst",
      "Dashboard Storyteller",
      "Data Visualisation Specialist"
    ],
    tagline: "I turn raw, messy data into dashboards and decisions people actually act on.",
    availability: "Open to Data Analyst roles",
    location: "Bangalore, India",
    // Set this to your address and the email chips/buttons appear automatically.
    email: "",
    summary:
      "I'm a data analyst with 2+ years of experience across analytics and low-code engineering. " +
      "At Bosch I built the Power BI reporting layer that teams used to run their day — pipelines, " +
      "data models, DAX measures and dashboards — and today at Smartlink I work on device data and " +
      "embedded systems. I like the whole journey: collecting and cleaning the data, exploring it with " +
      "SQL and Python, modelling it properly, then designing a visual story that makes the insight " +
      "obvious in five seconds.",
    links: {
      linkedin: "https://www.linkedin.com/in/nithyasree-k-a199021a9",
      github: "https://github.com/Nithy1308",
      resume: "https://drive.google.com/file/d/15iAryMZyqNFBmX8OT2-fBMUb8tbAdZDn"
    },
    // Contact form endpoint (FormSubmit) — already wired to the address the
    // previous site used. Replace the hash to point at a different inbox.
    formEndpoint: "https://formsubmit.co/88f0f00c7dd71e567851c088eb6c0b4f"
  };

  /* ---------------------------------------------------------------------- */
  /* 2. HERO METRICS (animated counters)                                     */
  /* ---------------------------------------------------------------------- */
  const stats = [
    { value: 2, suffix: "+", label: "Years experience", icon: "clock" },
    { value: 2, suffix: "", label: "Companies", icon: "building" },
    { value: 14, suffix: "", label: "Projects delivered", icon: "layers" },
    { value: 23, suffix: "", label: "Certifications & awards", icon: "award" }
  ];

  /* ---------------------------------------------------------------------- */
  /* 3. TOOL MARQUEE                                                         */
  /* ---------------------------------------------------------------------- */
  const marquee = [
    "Power BI", "SQL", "Python", "Data Visualisation", "Exploratory Data Analysis",
    "Machine Learning", "Power Apps", "Power Automate", "Power Virtual Agents",
    "SharePoint", "Microsoft Copilot", "Generative AI", "Big Data", "C", "LUA",
    "Linux", "Network Protocols", "OpenWrt", "IPtables", "MIB Tables", "Problem Solving"
  ];

  /* ---------------------------------------------------------------------- */
  /* 4. "WHAT I BRING" HIGHLIGHTS (About section)                            */
  /* ---------------------------------------------------------------------- */
  const highlights = [
    {
      title: "Analytics that answers questions",
      icon: "chart",
      text: "Requirement first, chart second. I start from the business question, define the metric, then design the model so the answer is unambiguous."
    },
    {
      title: "Power BI end to end",
      icon: "dashboard",
      text: "Power Query ETL, star-schema data models, DAX measures, drill-through and row-level security — published and refreshed on a schedule."
    },
    {
      title: "SQL & Python fluency",
      icon: "code",
      text: "Joins, window functions and CTEs in SQL; Pandas, NumPy, Matplotlib and scikit-learn in Python for EDA and models."
    },
    {
      title: "Data storytelling",
      icon: "sparkle",
      text: "Layout, colour and hierarchy used with intent, so an executive sees the headline number before they read a single label."
    }
  ];

  /* ---------------------------------------------------------------------- */
  /* 5. EXPERIENCE TIMELINE                                                  */
  /* ---------------------------------------------------------------------- */
  const experience = [
    {
      company: "Smartlink Holdings",
      role: "Embedded Software Developer (ONU & AP)",
      location: "Bangalore, India",
      period: "Oct 2024 — Present",
      current: true,
      type: "Full-time",
      summary:
        "Feature development and diagnostics for ONU / access-point devices — the same discipline of tracing signals, reading logs and proving root cause that data work needs.",
      points: [
        "Develop and ship multiple ONU features that extend device functionality for operators.",
        "Debug live device behaviour through log and packet analysis on Linux, isolating faults fast.",
        "Work across OpenWrt firmware, web-UI configuration flows, IPtables and MIB table management.",
        "Document findings so hardware, firmware and QA teams share one version of the truth."
      ],
      stack: ["Linux", "OpenWrt", "LUA", "C", "Networking", "IPtables", "MIB"],
      link: "https://drive.google.com/file/d/1DFg1NWiXRPq2IMYzKfwUGcRfunQmJvaH",
      linkLabel: "View work samples"
    },
    {
      company: "BOSCH Limited",
      role: "Graduate Apprentice — Power Platform Developer",
      location: "Chennai, India",
      period: "Oct 2023 — Oct 2024",
      current: false,
      type: "Apprenticeship",
      summary:
        "Built the reporting and automation layer for internal operations: dashboards, data models and workflows that replaced manual spreadsheet reporting.",
      points: [
        "Created interactive Power BI dashboards and reports that visualised operational data for business decisions.",
        "Modelled and prepared source data so KPIs stayed consistent across every report and refresh cycle.",
        "Automated recurring reporting and approval workflows with Power Automate, removing manual rework.",
        "Built custom Power Apps and SharePoint sites/lists to capture clean data at source.",
        "Applied Microsoft Copilot to generate insights and speed up internal solution delivery."
      ],
      stack: ["Power BI", "DAX", "Power Query", "Power Apps", "Power Automate", "SharePoint", "Copilot"],
      link: "https://drive.google.com/file/d/1DyqOpkyHZzQPXxXQ5YYNH7bx3sj9Gg0B",
      linkLabel: "View work samples"
    }
  ];

  const internships = [
    {
      company: "Reliance — Jio",
      role: "Intern — Generative AI",
      period: "6 months · Apr 2023 — Sep 2023",
      points: ["Worked on Generative AI use cases and model-assisted content generation."],
      stack: ["Generative AI", "Python"],
      link: "https://drive.google.com/file/d/1J4YrBO_jwkf3mKctNp8dZm2q7lFlmHO"
    },
    {
      company: "Accent Techno Soft",
      role: "Intern — Data Science",
      period: "90 days · Jan 2023 — Apr 2023",
      points: ["Data wrangling, exploratory analysis and visualisation on real datasets."],
      stack: ["Python", "EDA", "Visualisation"],
      link: "https://drive.google.com/file/d/1dVuWeEuwAGSAK6bn42OrjUIpAijtHffw"
    },
    {
      company: "AdroIT Technologies",
      role: "Intern — Big Data",
      period: "15 days · May 2021 — Jun 2021",
      points: ["Foundations of distributed data processing and the big-data toolchain."],
      stack: ["Big Data"],
      link: "https://drive.google.com/file/d/1LE_262cuHhGtlBa3RbGvkJfgP_mHYqGH"
    }
  ];

  /* ---------------------------------------------------------------------- */
  /* 6. SKILLS                                                               */
  /* ---------------------------------------------------------------------- */
  // `level` drives the animated proficiency bars (edit freely, 0-100).
  const coreSkills = [
    { name: "Power BI & DAX", level: 92, note: "Data models, measures, drill-through, refresh" },
    { name: "SQL", level: 88, note: "Joins, CTEs, window functions, reporting queries" },
    { name: "Data Visualisation", level: 90, note: "Chart choice, layout, colour, storytelling" },
    { name: "Python for Data", level: 84, note: "Pandas, NumPy, Matplotlib, scikit-learn" },
    { name: "Microsoft Power Platform", level: 88, note: "Apps, Automate, Virtual Agents, SharePoint" },
    { name: "Machine Learning", level: 78, note: "EDA, feature prep, classification models" }
  ];

  const skillGroups = [
    {
      name: "Data & Analytics",
      icon: "chart",
      items: ["SQL", "Power BI", "Data Visualisation", "Exploratory Data Analysis", "Data Collection", "Data Cleaning", "Dashboard & Report Design", "KPI Definition", "Storytelling with Data"]
    },
    {
      name: "Programming & Tools",
      icon: "code",
      items: ["Python", "SQL", "C", "LUA", "Linux"]
    },
    {
      name: "AI & Machine Learning",
      icon: "chip",
      items: ["Machine Learning", "Data Science", "Classification Models", "Natural Language Processing", "Generative AI", "ChatGPT Models", "Bot Development"]
    },
    {
      name: "Microsoft Power Platform",
      icon: "dashboard",
      items: ["Power Apps", "Power Automate", "Power Virtual Agents", "Power BI", "SharePoint", "Microsoft Copilot"]
    },
    {
      name: "Networking & Embedded",
      icon: "network",
      items: ["ONU Configurations", "OpenWrt Firmware Development", "Network Protocols", "Web UI for Network Config", "IPtables", "MIB Table Management"]
    },
    {
      name: "Soft Skills",
      icon: "users",
      items: ["Problem Solving", "Teamwork", "Time Management", "Fast Learner"]
    }
  ];

  /* ---------------------------------------------------------------------- */
  /* 7. PROJECTS                                                             */
  /* ---------------------------------------------------------------------- */
  const projectFilters = [
    { key: "all", label: "All work" },
    { key: "analytics", label: "Data Analytics" },
    { key: "ai", label: "AI & ML" },
    { key: "power", label: "Power Platform" },
    { key: "other", label: "Other builds" }
  ];

  const projects = [
    {
      title: "Interactive Power BI reporting suite",
      category: "analytics",
      group: "Data Analytics",
      featured: true,
      period: "Oct 2023 — Oct 2024",
      role: "Power BI Developer",
      domain: "Power Platform",
      icon: "dashboard",
      summary:
        "Interactive dashboards and reports that visualised operational data and gave decision-makers a single, trustworthy view of performance.",
      detail:
        "I owned the reporting layer end to end: shaping source data in Power Query, building the semantic model, " +
        "writing the DAX measures behind each KPI, then designing the report pages for the people who read them daily. " +
        "Bookmarks, slicers and drill-through replaced a stack of manual spreadsheets, and scheduled refresh kept the " +
        "numbers current without anyone touching them.",
      tags: ["Power BI", "DAX", "Power Query", "Data Modelling"],
      link: "https://drive.google.com/file/d/1DyqOpkyHZzQPXxXQ5YYNH7bx3sj9Gg0B"
    },
    {
      title: "Exploratory analysis & classification in Python",
      category: "analytics",
      group: "Data Science",
      period: "1 month",
      role: "Individual project",
      domain: "Data Science",
      icon: "flask",
      summary:
        "Collected and explored a raw dataset with SQL and visualisation tools, then built classification models in Python.",
      detail:
        "The project covered the full analyst loop: data collection, cleaning, exploratory data analysis to find the " +
        "drivers, then classification models in Python to test whether the patterns held up. Findings were written up " +
        "with the charts that supported each conclusion.",
      tags: ["SQL", "Python", "EDA", "Classification"],
      link: ""
    },
    {
      title: "Skin cancer classification model",
      category: "ai",
      group: "Machine Learning",
      period: "3 months",
      role: "Team leader",
      domain: "ML",
      icon: "pulse",
      summary:
        "A model that classifies skin lesions as benign or malignant, trained on the Harvard Dataverse dataset.",
      detail:
        "Led the team through dataset preparation, feature handling and model training, then evaluated performance " +
        "carefully — because in a medical classifier, a missed positive costs far more than a false alarm.",
      tags: ["Machine Learning", "Python", "Healthcare", "Harvard Dataverse"],
      link: ""
    },
    {
      title: "Banking assistant chatbot",
      category: "ai",
      group: "Artificial Intelligence",
      period: "3 months",
      role: "Team leader",
      domain: "AI",
      icon: "bot",
      summary: "A conversational banking assistant built in IBM Watson Studio for common customer queries.",
      detail:
        "Designed the intents, entities and dialogue flow, then implemented the assistant in IBM Watson Studio and " +
        "tested it against realistic customer questions.",
      tags: ["IBM Watson", "NLP", "Chatbot"],
      link: ""
    },
    {
      title: "Air-quality monitoring & alerting",
      category: "other",
      group: "Internet of Things",
      period: "3 months",
      role: "Team leader",
      domain: "IoT",
      icon: "waves",
      summary:
        "A system that measures PM2.5 levels, alerts users when air quality degrades, and streams readings to the ThingSpeak cloud.",
      detail:
        "Sensor readings were captured and pushed to ThingSpeak, where the data was visualised over time so patterns " +
        "and threshold breaches became visible rather than buried in raw logs.",
      tags: ["IoT", "ThingSpeak", "Sensors", "Data Visualisation"],
      link: ""
    },
    {
      title: "Device data & ONU feature development",
      category: "other",
      group: "Networking",
      period: "Oct 2024 — Present",
      role: "Embedded software developer",
      domain: "ONU",
      icon: "network",
      summary:
        "Developing multiple features for ONU devices, working close to the hardware where telemetry and logs are the only evidence.",
      detail:
        "Feature work on ONU / access-point platforms: implementing functionality, tracing behaviour through device " +
        "logs and packet captures on Linux, and managing configuration through IPtables and MIB tables.",
      tags: ["Linux", "OpenWrt", "IPtables", "MIB", "Networking"],
      link: ""
    },
    {
      title: "Custom Power Apps for operations",
      category: "power",
      group: "Power Platform",
      period: "Oct 2023 — Oct 2024",
      role: "Developer",
      domain: "Power Platform",
      icon: "app",
      summary: "Custom Power Apps that automated workflows and improved operational efficiency inside the organisation.",
      detail:
        "Replaced paper and spreadsheet processes with apps that validate data at entry, so downstream reporting " +
        "started from clean input instead of needing repair.",
      tags: ["Power Apps", "Workflow", "Operations"],
      link: ""
    },
    {
      title: "Automated reporting workflows",
      category: "power",
      group: "Power Platform",
      period: "Oct 2023 — Oct 2024",
      role: "Developer",
      domain: "Power Platform",
      icon: "bolt",
      summary: "An automated workflow built to integrate with internal applications and remove manual report handling.",
      detail:
        "Connected the applications the team already used, triggered flows on real events, and removed the manual " +
        "copy-paste step that reporting had depended on.",
      tags: ["Power Automate", "Integration", "Automation"],
      link: ""
    },
    {
      title: "SharePoint site & list architecture",
      category: "power",
      group: "Power Platform",
      period: "Oct 2023 — Oct 2024",
      role: "Developer",
      domain: "Power Platform",
      icon: "folder",
      summary: "Developed and managed SharePoint sites and lists as the structured data store behind internal solutions.",
      detail:
        "Structured lists so the data underneath reports stayed consistent, with views and permissions matched to how " +
        "each team actually worked.",
      tags: ["SharePoint", "Data Structure", "Governance"],
      link: ""
    },
    {
      title: "Copilot-assisted insight generation",
      category: "power",
      group: "Power Platform",
      period: "Oct 2023 — Oct 2024",
      role: "Developer",
      domain: "Power Platform",
      icon: "sparkle",
      summary: "Used Copilot AI to automate workflows, generate insights and lift productivity across Power Platform solutions.",
      detail:
        "Applied generative assistance to summarise data, draft narrative commentary and shorten the path from raw " +
        "tables to something a stakeholder could read.",
      tags: ["Copilot", "Generative AI", "Productivity"],
      link: ""
    },
    {
      title: "Project planning & launch findings",
      category: "other",
      group: "Project Management",
      period: "1 month",
      role: "Individual project",
      domain: "Project Management",
      icon: "clipboard",
      summary:
        "A full project plan, charter, presentation and report, plus the real-time study 'Sauce-Spoon-Test-Launch-Findings'.",
      detail:
        "Produced the governance documents a project needs to survive contact with reality — scope, charter, plan and " +
        "the reporting pack that tracked it.",
      tags: ["Planning", "Reporting", "Documentation"],
      link: ""
    },
    {
      title: "School activity management app",
      category: "other",
      group: "Mobile Application",
      period: "3 months",
      role: "Team leader",
      domain: "Mobile Application",
      icon: "phone",
      summary: "A mobile application that let a school manage all of its day-to-day activities in one place.",
      detail: "Led the team from requirement gathering through to delivery of the mobile application.",
      tags: ["Mobile", "Team Lead"],
      link: ""
    },
    {
      title: "Bookstore management web app",
      category: "other",
      group: "Web Application",
      period: "3 months",
      role: "Team leader",
      domain: "Web Application",
      icon: "globe",
      summary: "A web application built for a bookstore to manage inventory, sales and daily operations.",
      detail: "Led delivery of the web application, covering the workflows a bookstore runs on every day.",
      tags: ["Web", "Team Lead"],
      link: ""
    },
    {
      title: "Photography portfolio UI/UX",
      category: "other",
      group: "UI/UX",
      period: "2 months",
      role: "Team leader",
      domain: "UI/UX",
      icon: "pen",
      summary: "A responsive, intuitive interface for a photography website built with HTML, CSS and JavaScript.",
      detail:
        "The design work I still use today: hierarchy, spacing and motion in service of the content rather than " +
        "decoration for its own sake.",
      tags: ["UI/UX", "HTML", "CSS", "JavaScript"],
      link: ""
    }
  ];

  /* ---------------------------------------------------------------------- */
  /* 8. ACHIEVEMENTS (filterable gallery + lightbox)                         */
  /* ---------------------------------------------------------------------- */
  const achievementFilters = [
    { key: "all", label: "All" },
    { key: "professional certificate", label: "Professional certificates" },
    { key: "guided project", label: "Guided project" },
    { key: "virtual experience", label: "Virtual experience" },
    { key: "hackathon", label: "Hackathon" },
    { key: "conference", label: "Conference" },
    { key: "badges", label: "Badges" },
    { key: "webinars", label: "Webinars" },
    { key: "workshop", label: "Workshop" },
    { key: "courses", label: "Courses" }
  ];

  const achievements = [
    { title: "IBM Data Science Professional Certificate", category: "professional certificate", issuer: "IBM / Coursera", icon: "award", accent: "cyan", link: "https://drive.google.com/drive/folders/1LYmtkRmq5xz3ErDwK9d67Aew0ArvxeaE" },
    { title: "Google Project Management Certificate", category: "professional certificate", issuer: "Google / Coursera", icon: "clipboard", accent: "amber", link: "https://drive.google.com/file/d/1o4ihWbrEQqMHAHIvS5_OYbK0QaPI8pvj" },
    { title: "Natural Language Processing", category: "guided project", issuer: "Guided project", icon: "chat", accent: "violet", link: "https://drive.google.com/file/d/1WQwU9UPGT7tCRRfbfrG3eWxkmaR6xwvh" },
    { title: "Data Analytics and Visualization", category: "virtual experience", issuer: "Forage virtual experience", icon: "chart", accent: "teal", link: "https://drive.google.com/file/d/12sW-tbFF_kZI-faCvYnct6dowa0B5Ti9" },
    { title: "Hackathon", category: "hackathon", issuer: "Hackathon participation", icon: "bolt", accent: "rose", link: "https://drive.google.com/file/d/10mHAbm8Nfen881iFOnE6cN5T1A73y3Qk" },
    { title: "ICCIS", category: "conference", issuer: "Conference", icon: "mic", accent: "violet", link: "https://drive.google.com/file/d/1DArNAb3nVdzZ2VMt0C8uiB9HfWQhBHT2" },
    { title: "ICCET", category: "conference", issuer: "Conference", icon: "mic", accent: "indigo", link: "https://drive.google.com/file/d/1yIdRAgknrRfckyDoJTQUYCZu3eAcX3Ej" },
    { title: "Microsoft Copilot", category: "badges", issuer: "Microsoft badge", icon: "sparkle", accent: "cyan", link: "https://drive.google.com/drive/folders/1UvcN7WSVUZfs3e-sG6XH998Al3Pwv3m9" },
    { title: "Regression Analysis", category: "webinars", issuer: "Webinar", icon: "trend", accent: "teal", link: "https://drive.google.com/file/d/1yfKhxBzJv3lstI6PnuGwTEXR8uFA4zIz" },
    { title: "Data Analysis", category: "webinars", issuer: "Webinar", icon: "chart", accent: "cyan", link: "https://drive.google.com/file/d/1CU-s8lHsXwjPftsU-wTuFyKp8XHl6OOS" },
    { title: "Cloud Computing", category: "webinars", issuer: "Webinar", icon: "cloud", accent: "indigo", link: "https://drive.google.com/file/d/1Rlu56OUVteNzBvXqCpvfTG-YzA0l4XsI" },
    { title: "Artificial Intelligence", category: "webinars", issuer: "Webinar", icon: "chip", accent: "violet", link: "https://drive.google.com/file/d/1A_EKfDyJ8-GONbD5nvyow0vkkW_UYIY9" },
    { title: "Power BI", category: "workshop", issuer: "Workshop", icon: "dashboard", accent: "amber", link: "https://drive.google.com/file/d/1aTZPoxQ3c_5ZDembW5dL3MQqPhaopwet" },
    { title: "Practical Teaching", category: "courses", issuer: "Course", icon: "users", accent: "teal", link: "https://drive.google.com/file/d/1JreGRoRxLHhSkIz9h0aQ5aXB6ppcuyA1" },
    { title: "Machine Learning", category: "courses", issuer: "Course", icon: "chip", accent: "violet", link: "https://drive.google.com/file/d/1-yX53ZSd-_X2JO2OstAM6Nkd-iauOe7y" },
    { title: "Machine Learning with Python & R", category: "courses", issuer: "Course", icon: "code", accent: "cyan", link: "https://drive.google.com/file/d/12ToPiY4t40Wp7SZ0uFwX0KbFmiFUOCHt" },
    { title: "Artificial Neural Networks", category: "courses", issuer: "Course", icon: "network", accent: "indigo", link: "https://drive.google.com/file/d/1iv1UCUc2hmmoq4Bg94nUNnJT-kT_Dzbn" },
    { title: "Data Science for Engineers", category: "courses", issuer: "Course", icon: "flask", accent: "teal", link: "https://drive.google.com/file/d/1betG1VNP6O_zDd3VziYdJCe7l0AHDmPq" },
    { title: "Data Analysis with Python", category: "courses", issuer: "Course", icon: "code", accent: "cyan", link: "https://drive.google.com/file/d/1YpxoZL85fHoYI1KtApuHbxsKNR0OHI2r" },
    { title: "Data Analysis", category: "courses", issuer: "Course", icon: "chart", accent: "teal", link: "https://drive.google.com/file/d/11AEK_Z4rUNEbWtjgmKnkHkk-jgeRb3HZ" },
    { title: "AWS — Machine Learning", category: "courses", issuer: "Course", icon: "cloud", accent: "amber", link: "https://drive.google.com/file/d/1rO-YAH94-HAfj3ChZ-_-udTcIbUKj3fH" },
    { title: "Arduino", category: "courses", issuer: "Course", icon: "chip", accent: "rose", link: "https://drive.google.com/file/d/1VG7bAdRnYzScx1_caqhQjxT9mp2z0XPQ" },
    { title: "Android App Development", category: "courses", issuer: "Course", icon: "phone", accent: "teal", link: "https://drive.google.com/file/d/13bMAW57YpYBeh2jTKiY906iPF-L50wb0" }
  ];

  /* ---------------------------------------------------------------------- */
  /* 9. EDUCATION                                                            */
  /* ---------------------------------------------------------------------- */
  const education = [
    {
      qualification: "B.E — Computer Science and Engineering",
      institution: "Dr. Mahalingam College of Engineering and Technology",
      location: "Pollachi, Coimbatore",
      period: "2019 — 2023",
      result: "CGPA 9.2 / 10",
      score: 92,
      icon: "cap"
    },
    {
      qualification: "HSC",
      institution: "Nirmala Matha Convent Matric Hr. Sec. School",
      location: "Coimbatore",
      period: "2019",
      result: "85.0%",
      score: 85,
      icon: "book"
    },
    {
      qualification: "SSLC",
      institution: "Vidyaa Vikas Matric Hr. Sec. School",
      location: "Pudukkottai",
      period: "2017",
      result: "97.6%",
      score: 97.6,
      icon: "book"
    }
  ];

  /* ---------------------------------------------------------------------- */
  /* 10. PERSONAL INFO                                                       */
  /* ---------------------------------------------------------------------- */
  const languages = [
    { name: "English", level: 92, note: "Fluent in reading, writing and speaking" },
    { name: "Tamil", level: 100, note: "Native language — fluent in reading, writing and speaking" }
  ];

  const interests = [
    { title: "Reading", icon: "book", text: "Novels, tech blogs and long-form articles." },
    { title: "Travelling", icon: "globe", text: "New places, new cultures, new ideas." },
    { title: "UI/UX Design", icon: "pen", text: "Designing interfaces that feel obvious." },
    { title: "Gardening", icon: "leaf", text: "Growing plants and green spaces." },
    { title: "Music", icon: "music", text: "Exploring genres for focus and inspiration." }
  ];

  /* ---------------------------------------------------------------------- */
  return {
    profile: profile,
    stats: stats,
    marquee: marquee,
    highlights: highlights,
    experience: experience,
    internships: internships,
    coreSkills: coreSkills,
    skillGroups: skillGroups,
    projectFilters: projectFilters,
    projects: projects,
    achievementFilters: achievementFilters,
    achievements: achievements,
    education: education,
    languages: languages,
    interests: interests
  };
})();
