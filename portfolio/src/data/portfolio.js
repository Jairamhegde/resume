// ─────────────────────────────────────────────────────────────
//  All portfolio content lives in this file.
//  Edit the objects below and the site updates — no component
//  changes needed. Arrays render in the order written.
// ─────────────────────────────────────────────────────────────

export const profile = {
  firstName: "Jairam",
  lastName: "Hegde",
  role: "Backend developer",
  location: "Bengaluru, India",
};

export const contact = {
  email: "jairamhegde002@gmail.com",
  linkedin: "https://www.linkedin.com/in/jairam-hegde-2508a4214/",
  github: "https://github.com/Jairamhegde",
};

// Sections, in page order. `id` must match a section's id.
// Headings render as a light word followed by a bold word: "Selected work."
export const sections = [
  { id: "about", label: "About", heading: "About", emphasis: "me." },
  { id: "work", label: "Work", heading: "Selected", emphasis: "work." },
  { id: "stack", label: "Stack", heading: "Tech", emphasis: "stack." },
  { id: "education", label: "Education", heading: "My", emphasis: "education." },
  { id: "contact", label: "Contact", heading: "Get in", emphasis: "touch." },
];

export const about = {
  // Words wrapped in *asterisks* are highlighted.
  statement:
    "I like the part of software nobody sees — the *APIs*, the *pipelines* and the *data* underneath — and making it quietly reliable.",
  // Shown first, slightly emphasised.
  intro:
    "Backend developer focused on building scalable systems with AI/ML integrations, with hands-on experience in REST API design, schema design and webhooks.",
  paragraphs: [
    "I'm an MCA student at R V College of Engineering and a backend developer working with Python, FastAPI and PostgreSQL. I integrate LLMs and AI APIs into real workflows, wire up webhooks, and ship with CI/CD on GitHub Actions.",
    "I care about clean, maintainable code and a strong foundation in data structures, algorithms and object-oriented design.",
  ],
  // Small facts shown beside the paragraphs.
  facts: [
    { label: "Focus", value: "REST APIs, ETL, AI workflows" },
    { label: "Studying", value: "MCA · RVCE · 8.68 CGPA" },
    { label: "Based in", value: "Bengaluru" },
  ],
};

export const experience = [
  {
    role: "Intern",
    organization: "WiC Centre of Excellence, RVCE",
    team: "Identity Security Posture Management (Vigil)",
    period: "Oct 2026 — Present",
    summary:
      "Contributing to a project that unifies AWS IAM, Okta and Active Directory identity data to surface identity risk.",
  },
];

export const projects = [
  {
    slug: "interniq",
    name: "InternIQ",
    category: "Data platform",
    tagline: "Job market intelligence platform",
    period: "Jan 2026",
    brief:
      "Scrapes Internshala daily and turns postings into role demand, skill trends, salary ranges and resume skill-gap analysis on a React dashboard. A GitHub Actions ETL pipeline stages 1,000+ postings in PostgreSQL, a TF-IDF classifier sorts them into 7 domains at 96% accuracy, and OpenTelemetry tracing cut API p95 latency by 53%.",
    stack: ["Python", "FastAPI", "PostgreSQL", "React", "GitHub Actions", "OpenTelemetry", "Grafana"],
    github: "https://github.com/Jairamhegde/InternIQ",
  },
  {
    slug: "resolveops",
    name: "ResolveOps",
    category: "AI automation",
    tagline: "AI-powered Slack IT helpdesk",
    period: "Jul 2026",
    brief:
      "Employees raise IT tickets with Slack slash commands; Gemini 2.5 Flash assigns each a category, a P1–P5 priority and a suggested fix, deflecting low-priority issues and routing the rest to 5 admin queues. APScheduler auto-escalates SLA breaches, webhooks are verified with HMAC-SHA256, and a React dashboard tracks the deflection rate.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Gemini API", "APScheduler", "React", "pytest"],
    github: "https://github.com/Jairamhegde/ResolveOps",
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "Java", "JavaScript"] },
  { group: "Frameworks", items: ["FastAPI", "SQLAlchemy", "React", "APScheduler"] },
  { group: "Databases", items: ["PostgreSQL", "SQL"] },
  { group: "AI", items: ["Gemini API", "Prompt Engineering", "LLM Integration"] },
  { group: "Cloud & DevOps", items: ["AWS", "GitHub Actions (CI/CD)", "Git / GitHub"] },
  {
    group: "Core Concepts",
    items: ["Data Structures & Algorithms", "OOP", "Operating Systems", "Multithreading & Concurrency"],
  },
];

export const education = [
  {
    institution: "R V College of Engineering",
    degree: "Master of Computer Applications",
    period: "2025 — 2027",
    note: "Expected Nov 2027",
    place: "Bengaluru",
    score: "8.68",
    scale: "CGPA / 10",
  },
  {
    institution: "KLE Society's College of Computer Applications",
    degree: "Bachelor of Computer Applications",
    period: "2021 — 2024",
    place: "Dharwad",
    score: "7.83",
    scale: "CGPA / 10",
  },
];

export const coursework = [
  { name: "Generative AI & NLP", detail: "LLM architectures, prompt engineering, GenAI security" },
  { name: "Cloud Computing", detail: "AWS EC2, S3, CloudFront, RDS, VPC subnets" },
];

export const certifications = [
  { name: "AWS Fundamentals", issuer: "Infosys Springboard" },
  { name: "Python Essentials 1", issuer: "Cisco" },
];
