const navItems = [
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Teaching", href: "/teaching" }
];
const qmcpyArticleUrl = "https://qmcsoftware.org/blogs/scipywrapper/";
const soremoArticleUrl = "https://journals.library.iit.edu/index.php/Soremo/article/view/314";
const profile = {
  name: "Laasya Priya Vemuri",
  location: "Chicago, IL",
  schoolUrl: "https://www.iit.edu/",
  universityEmail: "lvemuri1@illinoistech.edu",
  email: "vlaasyapriya77@gmail.com",
  github: "https://github.com/Laasya-73",
  linkedin: "https://www.linkedin.com/in/laasya-priya-vemuri",
  photo: "/images/laasya-profile.jpg"
};
const toolCards = [
  {
    title: "AI Infrastructure Impact Dashboard",
    subtitle: "",
    description: "Interactive geospatial platform exploring the environmental and community impact of large-scale AI infrastructure and data center development across Illinois.",
    status: "COMPLETED RESEARCH",
    statusNote: "SoReMo Research Fellowship",
    tags: ["AI Infrastructure", "Geospatial Analysis", "Infrastructure Mapping"],
    ctaLabel: "View Platform",
    href: "https://people-v-ai.vercel.app/",
    links: [{ label: "Read Published Research", href: soremoArticleUrl }]
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
      { label: "Email for Collaboration", href: "mailto:vlaasyapriya77@gmail.com" }
    ]
  }
];
const timeline = [
  {
    period: "August 2026 - Present",
    text: "Research Assistant at Illinois Institute of Technology, contributing to QMCPy through open-source research in probability modeling, numerical integration, and scientific computing."
  },
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
    text: "Began QMCPy open-source work on dependent and custom distributions, leading to a SciPyWrapper contribution merged in January 2026.",
    link: qmcpyArticleUrl,
    linkLabel: "Read the Research Article"
  }
];
const skillGroups = [
  { title: "AI & Machine Learning", skills: ["Python", "Machine Learning", "LLMs", "Generative AI", "Model Evaluation", "Data Processing", "Data Analysis", "Explainable Forecasting", "Geospatial Analytics"] },
  { title: "iOS Development", skills: ["Swift", "SwiftUI", "UIKit", "Combine", "Core Data", "URLSession", "XCTest"] },
  { title: "Software Engineering", skills: ["MVVM / MVVM-C", "Coordinator Pattern", "REST APIs", "Dependency Injection", "Protocol-Oriented Programming", "Swift Concurrency (async/await)", "Testing", "Git"] },
  { title: "Research & Scientific Computing", skills: ["SciPy", "Numerical Methods", "Probability Distributions", "Copulas", "Quasi-Monte Carlo", "Computational Experiments"] }
];
export {
  skillGroups as a,
  timeline as b,
  projects as c,
  navItems as n,
  profile as p,
  qmcpyArticleUrl as q,
  soremoArticleUrl as s,
  toolCards as t
};
