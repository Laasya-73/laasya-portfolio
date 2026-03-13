const navItems = [
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Teaching", href: "/teaching" }
];
const profile = {
  name: "Laasya Priya Vemuri",
  location: "Chicago, IL",
  schoolUrl: "https://www.iit.edu/",
  universityEmail: "lvemuri1@hawk.illinoistech.edu",
  email: "laasyasrinivas2001@gmail.com",
  github: "https://github.com/Laasya-73",
  linkedin: "https://www.linkedin.com/in/laasya-priya-vemuri",
  photo: "/images/laasya-profile.jpg"
};
const toolCards = [
  {
    title: "AI Infrastructure Impact Dashboard",
    subtitle: "",
    description: "Interactive geospatial dashboard analyzing the environmental and community impact of AI data centers. Combines environmental indicators, infrastructure datasets, and regional context to explore how large-scale computing infrastructure affects surrounding communities.",
    status: "ONGOING RESEARCH"
  }
];
const projects = [
  {
    title: "ForecastLens AI - Explainable Time Series Forecasting Platform",
    link: "https://forecaststudio.lovable.app/",
    tag: "Live Project",
    subtitle: "A full-stack forecasting platform that turns raw time series data into interpretable predictions and business-facing explanations.",
    bullets: [
      "Transforms raw time series data into interpretable forecasts with confidence-aware outputs.",
      "Includes anomaly detection, seasonality analysis, and model comparison for reliability.",
      "Generates stakeholder-facing summaries using LLM-assisted narrative synthesis."
    ],
    links: [
      { label: "Open ForecastLens", href: "https://forecaststudio.lovable.app/" },
      { label: "LinkedIn Profile", href: "https://www.linkedin.com/in/laasya-priya-vemuri" }
    ]
  },
  {
    title: "Build Fellowship - Biomarkers of Aging Challenge",
    link: "/research#papers",
    tag: "Research Project",
    subtitle: "Applied machine learning to age-related biomarker prediction through structured experimentation and evaluation.",
    bullets: [
      "Built age and mortality prediction workflows on epigenetic and health-related data.",
      "Compared model families across predictive quality and interpretability tradeoffs.",
      "Prepared reproducible notebooks and research presentation outputs."
    ],
    links: [
      { label: "Open Research Page", href: "/research#papers" },
      { label: "Email for Collaboration", href: "mailto:laasyasrinivas2001@gmail.com" }
    ]
  }
];
const timeline = [
  {
    period: "March 2026",
    text: "Expanded ForecastLens AI with explainability-oriented model comparison and interactive decision-support outputs.",
    link: "https://forecaststudio.lovable.app/",
    linkLabel: "View ForecastLens"
  },
  {
    period: "Spring 2026",
    text: "Teaching Assistant for CS 331 Data Structures, supporting asynchronous learners through grading and technical guidance."
  },
  {
    period: "2025",
    text: "Contributed to QMCPy by extending true-measure functionality to support dependent distributions.",
    link: "https://github.com/QMCSoftware/QMCSoftware",
    linkLabel: "QMCPy Repository"
  }
];
export {
  timeline as a,
  projects as b,
  navItems as n,
  profile as p,
  toolCards as t
};
