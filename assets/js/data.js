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
    headline: "Power BI Developer | BI Reporting Analyst",
    // Rotating roles for the hero typewriter effect
    roles: [
      "Power BI Developer",
      "BI Reporting Analyst",
      "Power BI & DAX Developer",
      "SQL & Python Analyst",
      "Dashboard Storyteller"
    ],
    tagline: "I turn raw, messy data into dashboards and decisions people actually act on.",
    availability: "Open to Power BI Developer / BI Reporting Analyst roles",
    location: "Bangalore, India",
    preferredLocations: "Bangalore, Coimbatore, Chennai, Hyderabad, Kochi",
    workMode: "Hybrid, Remote, Flexible",
    // Set this to your address and the email chips/buttons appear automatically.
    email: "",
    summary:
      "I'm a Power BI Developer with 3 years of professional experience across BI reporting, " +
      "dashboard development and embedded software development. At Bosch I built and deployed 7 " +
      "Power BI dashboards, automated the Daily Production Report using Power BI and SQL, and " +
      "reduced reporting time by 60%. Today at Digisol I work on embedded firmware for ONU devices " +
      "and access points — OpenWrt, Lua and full-stack frontend/backend development. I like the " +
      "whole journey: collecting and cleaning the data, exploring it with SQL and Python, modelling " +
      "it properly with star-schema designs, then designing a visual story that makes the insight " +
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
    { value: 3, suffix: "", label: "Years experience", icon: "clock" },
    { value: 2, suffix: "", label: "Companies", icon: "building" },
    { value: 16, suffix: "", label: "Projects delivered", icon: "layers" },
    { value: 23, suffix: "", label: "Certifications & awards", icon: "award" }
  ];

  /* ---------------------------------------------------------------------- */
  /* 3. TOOL MARQUEE                                                         */
  /* ---------------------------------------------------------------------- */
  const marquee = [
    "Power BI", "DAX", "Power Query/M", "SQL", "Python", "Pandas", "NumPy",
    "Star Schema Data Modelling", "KPI Dashboards", "ETL", "Excel", "Power Apps",
    "Power Automate", "Power Pages", "SharePoint", "Microsoft Copilot", "MySQL",
    "PostgreSQL", "C", "Lua", "OpenWrt", "Linux", "Git", "Problem Solving"
  ];

  /* ---------------------------------------------------------------------- */
  /* 4. "WHAT I BRING" HIGHLIGHTS (About section)                            */
  /* ---------------------------------------------------------------------- */
  const highlights = [
    {
      title: "Power BI end to end",
      icon: "dashboard",
      text: "Built and deployed 7 production dashboards with Power Query ETL, star-schema data models, DAX measures, drill-through and scheduled refresh."
    },
    {
      title: "60% faster reporting",
      icon: "chart",
      text: "Automated the Daily Production Report using Power BI and SQL pipelines, eliminating manual compilation and reducing reporting time by 60%."
    },
    {
      title: "SQL & Python fluency",
      icon: "code",
      text: "Joins, window functions and CTEs in SQL; Pandas, NumPy and statistical analysis in Python for EDA, cleaning and validation."
    },
    {
      title: "Full-stack embedded background",
      icon: "sparkle",
      text: "From C/Lua daemons on OpenWrt to LuCI web UI — a debugging discipline that makes me methodical about data quality too."
    }
  ];

  /* ---------------------------------------------------------------------- */
  /* 5. EXPERIENCE TIMELINE                                                  */
  /* ---------------------------------------------------------------------- */
  const experience = [
    {
      company: "Digisol",
      role: "Embedded Developer",
      location: "Bangalore, India",
      period: "Oct 2024 — Present",
      current: true,
      type: "Full-time",
      summary:
        "Embedded firmware development for ONU devices and access points on the OpenWrt platform — full-stack frontend and backend work with a strong debugging discipline.",
      points: [
        "Develop and maintain embedded firmware for Optical Network Units (ONU) and access points using structured debugging and code optimization.",
        "Worked on ONU feature development including provisioning, OMCI management and PON interface configurations for GPON/EPON deployments.",
        "On Access Points: Learned Lua scripting and developed both frontend (LuCI/web UI) and backend components for Wi-Fi management and configuration.",
        "Currently working on OpenWrt platform with full-stack development across frontend (LuCI interface and custom web modules) and backend (C/Lua daemons, UCI configuration, netifd and procd).",
        "Analyze device-performance and network-diagnostic logs to identify recurring fault patterns using root-cause analysis and data-driven troubleshooting."
      ],
      stack: ["OpenWrt", "Lua", "C", "Linux", "LuCI", "UCI", "netifd", "procd", "GPON/EPON"],
      link: "https://drive.google.com/file/d/1DFg1NWiXRPq2IMYzKfwUGcRfunQmJvaH",
      linkLabel: "View work samples"
    },
    {
      company: "Bosch Power Tools",
      role: "Power BI Developer / BI Reporting Analyst",
      location: "Chennai, India",
      period: "Oct 2023 — Oct 2024",
      current: false,
      type: "Full-time",
      summary:
        "Built and deployed 7 production Power BI dashboards, automated the Daily Production Report and reduced reporting time by 60% for cross-functional stakeholders.",
      points: [
        "Developed and deployed 7 production Power BI dashboards covering production, logistics, inventory, HR and tool-life monitoring for cross-functional stakeholders.",
        "Automated the Daily Production Report using Power BI and SQL pipelines which eliminated manual compilation and reduced reporting time by 60%.",
        "Built Spares Stock Accuracy and Tool Life Monitoring dashboards using advanced DAX measures to analyze discrepancies and support replacement planning.",
        "Designed star-schema data models with fact and dimension tables and transformed raw data using Power Query/M for clean scalable BI solutions.",
        "Optimized DAX measures and Power BI report performance using query folding, aggregation tables and incremental refresh strategies.",
        "Collaborated with 5+ department heads to translate business requirements into KPI frameworks and interactive Power BI dashboards.",
        "Built 4 Power Apps and automated multi-step approval workflows with Power Automate and deployed 2 Power Pages portals and 1 Power Virtual Agents chatbot.",
        "Conducted data cleaning, EDA and statistical analysis in Excel and Python (Pandas, NumPy) to validate dashboard accuracy."
      ],
      stack: ["Power BI", "DAX", "Power Query", "SQL", "Python", "Power Apps", "Power Automate", "SharePoint", "Excel"],
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
    { name: "Power BI & DAX", level: 92, note: "Star schema models, measures, drill-through, query folding, refresh" },
    { name: "SQL", level: 88, note: "Joins, CTEs, window functions, reporting queries, PostgreSQL, MySQL" },
    { name: "Power Query/M", level: 90, note: "ETL pipelines, data transformation, incremental refresh" },
    { name: "Python for Data", level: 84, note: "Pandas, NumPy, EDA, data cleaning, statistical analysis" },
    { name: "Microsoft Power Platform", level: 88, note: "Apps, Automate, Pages, Virtual Agents, SharePoint, Copilot" },
    { name: "Excel", level: 90, note: "VLOOKUP, Pivot Tables, Power Pivot, formulas and functions" }
  ];

  const skillGroups = [
    {
      name: "BI & Reporting",
      icon: "dashboard",
      items: ["Power BI Desktop", "Power BI Service", "DAX", "Power Query/M", "Star Schema Data Modelling", "KPI Dashboards", "ETL", "Report Design", "Paginated Reports"]
    },
    {
      name: "Data & Analytics",
      icon: "chart",
      items: ["SQL", "Python", "Pandas", "NumPy", "EDA", "Data Cleaning", "Data Transformation", "Statistical Analysis", "Excel (VLOOKUP, Pivot Tables, Power Pivot)"]
    },
    {
      name: "Automation & Power Platform",
      icon: "bolt",
      items: ["Power Apps", "Power Automate", "Power Pages", "SharePoint", "Microsoft Copilot"]
    },
    {
      name: "Databases",
      icon: "chip",
      items: ["MySQL", "PostgreSQL", "SQL Server"]
    },
    {
      name: "Engineering & Embedded",
      icon: "network",
      items: ["C", "Lua", "OpenWrt", "Linux", "Networking", "Git"]
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
      title: "IoT-Based Air Pollution Monitoring for COPD Patients",
      category: "other",
      group: "Internet of Things",
      period: "Published at ICCET 2023",
      role: "Team leader",
      domain: "IoT",
      icon: "waves",
      summary:
        "A PM2.5 sensor-data pipeline with real-time trend visualization — published research at ICCET 2023.",
      detail:
        "Built a Python-based PM2.5 sensor-data pipeline that streamed readings to ThingSpeak cloud and " +
        "visualised air-quality trends in real time so threshold breaches became visible rather than buried " +
        "in raw logs. The research was published at ICCET 2023.",
      tags: ["IoT", "Python", "ThingSpeak", "PM2.5 Sensors", "ICCET 2023"],
      link: ""
    },
    {
      title: "ONU & Access Point firmware development",
      category: "other",
      group: "Networking",
      period: "Oct 2024 — Present",
      role: "Embedded developer",
      domain: "ONU / OpenWrt",
      icon: "network",
      summary:
        "Full-stack OpenWrt development for ONU devices and access points — C/Lua daemons on the backend and LuCI web UI on the frontend.",
      detail:
        "Feature development on ONU / access-point platforms: provisioning, OMCI management and PON interface " +
        "configurations for GPON/EPON deployments. On access points I learned Lua and built both frontend " +
        "(LuCI web UI, custom web modules) and backend (C/Lua daemons, UCI configuration, netifd, procd) " +
        "components. I also analyze device-performance and network-diagnostic logs to identify recurring fault " +
        "patterns using root-cause analysis.",
      tags: ["OpenWrt", "Lua", "C", "LuCI", "UCI", "netifd", "procd", "GPON/EPON"],
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
