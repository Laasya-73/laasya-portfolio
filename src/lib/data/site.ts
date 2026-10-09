export type NavItem = {
  label: string;
  href: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type ContactLink = {
  label: string;
  href: string;
  display: string;
};

export type ToolItem = {
  title: string;
  subtitle: string;
  description: string;
  status: string;
  statusNote?: string;
  tags?: string[];
  ctaLabel?: string;
  href?: string;
  links?: LinkItem[];
};

export type NewsItem = {
  period: string;
  text: string;
  href?: string;
  hrefLabel?: string;
};

export type PaperItem = {
  status: string;
  title: string;
  authors: string;
  venue: string;
  summary: string;
  links: LinkItem[];
};

export type ProjectItem = {
  title: string;
  link: string;
  tag: string;
  subtitle: string;
  bullets: string[];
  links: LinkItem[];
};

export type ExperienceItem = {
  organization: string;
  role: string;
  period: string;
  description: string;
  link?: string;
};

export type FellowshipItem = {
  title: string;
  year: string;
  organization: string;
  description: string;
  link?: string;
};

export type TeachingItem = {
  course: string;
  role: string;
  period: string;
  description: string;
};

export type TimelineItem = {
  period: string;
  text: string;
  link?: string;
  linkLabel?: string;
};

export type ResearchInterestItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Research', href: '/research' },
  { label: 'Teaching', href: '/teaching' }
];

export const qmcpyArticleUrl = 'https://qmcsoftware.org/blogs/scipywrapper/';
export const soremoArticleUrl = 'https://journals.library.iit.edu/index.php/Soremo/article/view/314';

export const profile = {
  name: 'Laasya Priya Vemuri',
  location: 'Chicago, IL',
  school: 'Illinois Institute of Technology',
  schoolUrl: 'https://www.iit.edu/',
  universityEmail: 'lvemuri1@illinoistech.edu',
  email: 'vlaasyapriya77@gmail.com',
  github: 'https://github.com/Laasya-73',
  linkedin: 'https://www.linkedin.com/in/laasya-priya-vemuri',
  photo: '/images/laasya-profile.jpg',
  bio: [
    'I hold a Master’s in Computer Science & Mathematics from Illinois Institute of Technology, with experience in AI/ML engineering and native iOS development. I also contribute to open-source research software and scientific computing.',
    'I am especially interested in the space where technical depth meets real-world usefulness. That means building systems that not only perform well, but also communicate clearly, behave robustly, and support better decisions for the people using them.',
  ]
};

export const toolCards: ToolItem[] = [
  {
    title: 'AI Infrastructure Impact Dashboard',
    subtitle: '',
    description:
      'Interactive geospatial platform exploring the environmental and community impact of large-scale AI infrastructure and data center development across Illinois.',
    status: 'COMPLETED RESEARCH',
    statusNote: 'SoReMo Research Fellowship',
    tags: ['AI Infrastructure', 'Geospatial Analysis', 'Infrastructure Mapping'],
    ctaLabel: 'View Platform',
    href: 'https://people-v-ai.vercel.app/',
    links: [{ label: 'Read Published Research', href: soremoArticleUrl }]
  }
];

export const projects: ProjectItem[] = [
  {
    title: 'ForecastLens AI - Explainable Time Series Forecasting Platform',
    link: 'https://forecaststudio.lovable.app/',
    tag: 'Live Project',
    subtitle:
      'A full-stack forecasting platform that turns raw time series data into interpretable predictions and business-facing explanations.',
    bullets: [
      'Transforms raw time series data into interpretable forecasts with confidence-aware outputs.',
      'Includes anomaly detection, seasonality analysis, and model comparison for reliability.',
      'Generates stakeholder-facing summaries using LLM-assisted narrative synthesis.'
    ],
    links: [
      { label: 'Open ForecastLens', href: 'https://forecaststudio.lovable.app/' },
      { label: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/laasya-priya-vemuri' }
    ]
  },
  {
    title: 'Build Fellowship - Biomarkers of Aging Challenge',
    link: '/research#papers',
    tag: 'Research Project',
    subtitle:
      'Applied machine learning to age-related biomarker prediction through structured experimentation and evaluation.',
    bullets: [
      'Built age and mortality prediction workflows on epigenetic and health-related data.',
      'Compared model families across predictive quality and interpretability tradeoffs.',
      'Prepared reproducible notebooks and research presentation outputs.'
    ],
    links: [
      { label: 'Open Research Page', href: '/research#papers' },
      { label: 'Email for Collaboration', href: 'mailto:vlaasyapriya77@gmail.com' }
    ]
  }
];

export const experience: ExperienceItem[] = [
  {
    organization: 'Illinois Institute of Technology',
    role: 'Research Assistant',
    period: 'August 2026 - Present',
    description:
      'Research software engineering for QMCPy, building on earlier open-source work. Seven merged contributions in 2026 cover distributions, copulas, independent composition, mixtures, chained transformations, numerical validation, tests, and documentation.',
    link: '/research#qmcpy'
  },
  {
    organization: 'Springer Capital',
    role: 'LLM Analyst Intern',
    period: '2025',
    description:
      'Worked on applied LLM workflows, evaluation logic, experimentation pipelines, and system-level analysis focused on prompt behavior and reliability.'
  },
  {
    organization: 'QMCPy',
    role: 'Open-Source Contributor',
    period: '2025 - 2026',
    description:
      'Developed dependent and custom distribution support for SciPyWrapper, merged in January 2026 with validation, tests, and demonstration notebooks.',
    link: 'https://github.com/QMCSoftware/QMCSoftware'
  }
];

export const fellowships: FellowshipItem[] = [
  {
    title: 'SoReMo Research Fellowship',
    year: '2026',
    organization: 'Society for Research on Mathematics Optimization (SoReMo)',
    description:
      'Completed research on environmental and community impacts of AI infrastructure, with a published SoReMo article.'
  },
  {
    title: 'Build Fellowship',
    year: '2025',
    organization: 'Build Fellowship Program',
    description:
      'Worked on the Biomarkers of Aging Challenge using machine learning methods tied to age and mortality outcomes.'
  }
];

export const teaching: TeachingItem[] = [
  {
    course: 'CS 331 - Data Structures',
    role: 'Teaching Assistant',
    period: 'Spring 2026',
    description:
      'Supported students through grading, office hours, and technical explanations for asynchronous learners.'
  },
  {
    course: 'CSP 571 - Data Preparation and Analysis',
    role: 'Teaching Assistant',
    period: 'May 2025 - December 2025',
    description:
      'Helped students strengthen conceptual understanding, problem solving, and implementation skills through course support.'
  }
];

export const timeline: TimelineItem[] = [
  {
    period: 'August 2026 - Present',
    text: 'Research Assistant at Illinois Institute of Technology, contributing to QMCPy through open-source research in probability modeling, numerical integration, and scientific computing.'
  },
  {
    period: 'March 2026',
    text: 'Expanded ForecastLens AI with explainability-oriented model comparison and interactive decision-support outputs.',
    link: 'https://forecaststudio.lovable.app/',
    linkLabel: 'View ForecastLens'
  },
  {
    period: 'Spring 2026',
    text: 'Teaching Assistant for CS 331 Data Structures, supporting asynchronous learners through grading and technical guidance.'
  },
  {
    period: '2025',
    text: 'Began QMCPy open-source work on dependent and custom distributions, leading to a SciPyWrapper contribution merged in January 2026.',
    link: qmcpyArticleUrl,
    linkLabel: 'Read the Research Article'
  }
];

export const researchInterests: ResearchInterestItem[] = [
  { label: 'LLM Systems', href: '/research#research' },
  { label: 'Explainable Forecasting', href: '/research#papers' },
  { label: 'Prompt Evaluation', href: '/research#papers' },
  { label: 'AI Reliability', href: '/research#papers' },
  { label: 'Responsible AI', href: '/research#papers' }
];

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    href: 'mailto:vlaasyapriya77@gmail.com',
    display: 'vlaasyapriya77@gmail.com'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/laasya-priya-vemuri',
    display: 'linkedin.com/in/laasya-priya-vemuri'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Laasya-73',
    display: 'github.com/Laasya-73'
  }
];

export const skillGroups = [
  { title: 'AI & Machine Learning', skills: ['Python', 'Machine Learning', 'LLMs', 'Generative AI', 'Model Evaluation', 'Data Processing', 'Data Analysis', 'Explainable Forecasting', 'Geospatial Analytics'] },
  { title: 'iOS Development', skills: ['Swift', 'SwiftUI', 'UIKit', 'Combine', 'Core Data', 'URLSession', 'XCTest'] },
  { title: 'Software Engineering', skills: ['MVVM / MVVM-C', 'Coordinator Pattern', 'REST APIs', 'Dependency Injection', 'Protocol-Oriented Programming', 'Swift Concurrency (async/await)', 'Testing', 'Git'] },
  { title: 'Research & Scientific Computing', skills: ['SciPy', 'Numerical Methods', 'Probability Distributions', 'Copulas', 'Quasi-Monte Carlo', 'Computational Experiments'] }
];
