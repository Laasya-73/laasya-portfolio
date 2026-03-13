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
  href?: string;
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

export const profile = {
  name: 'Laasya Priya Vemuri',
  location: 'Chicago, IL',
  school: 'Illinois Institute of Technology',
  schoolUrl: 'https://www.iit.edu/',
  universityEmail: 'lvemuri1@hawk.illinoistech.edu',
  email: 'laasyasrinivas2001@gmail.com',
  github: 'https://github.com/Laasya-73',
  linkedin: 'https://www.linkedin.com/in/laasya-priya-vemuri',
  photo: '/images/laasya-profile.jpg',
  bio: [
    'I am a graduate student at Illinois Institute of Technology working across machine learning engineering, applied research, forecasting systems, and practical AI deployment. My work spans large language models, explainable forecasting, evaluation frameworks, and tools designed to make advanced systems more interpretable and dependable.',
    'I am especially interested in the space where technical depth meets real-world usefulness. That means building systems that not only perform well, but also communicate clearly, behave robustly, and support better decisions for the people using them.',
  ]
};

export const toolCards: ToolItem[] = [
  {
    title: 'AI Infrastructure Impact Dashboard',
    subtitle: '',
    description:
      'Interactive geospatial dashboard analyzing the environmental and community impact of AI data centers. Combines environmental indicators, infrastructure datasets, and regional context to explore how large-scale computing infrastructure affects surrounding communities.',
    status: 'ONGOING RESEARCH'
  }
];

export const papers: PaperItem[] = [
  {
    status: 'Published',
    title: 'Coloring of Graphs Avoiding Bicolored Paths of a Fixed Length',
    authors: 'Kirtisoglu, A. and Ozkahya, L.',
    venue: 'Graphs and Combinatorics, 40(1), 2024',
    summary:
      'Studies proper vertex colorings that avoid bicolored paths of fixed length and establishes sharp bounds in multiple graph regimes.',
    links: [
      {
        label: 'Journal',
        href: 'https://link.springer.com/article/10.1007/s00373-023-02759-8'
      }
    ]
  },
  {
    status: 'In Progress',
    title: 'Optimization-Based Decision Support for Equitable Healthcare Access',
    authors: 'Kaul, H. and Vemuri, L.P.',
    venue: 'Research manuscript in preparation',
    summary:
      'Designing an optimization-oriented healthcare accessibility framework with interactive mapping for Chicago communities.',
    links: [
      {
        label: 'Project Tool',
        href: 'https://forecaststudio.lovable.app/'
      }
    ]
  },
  {
    status: 'In Progress',
    title: 'A Sampling Method for Districting and Hierarchical Facility Location',
    authors: 'Kaul, H. and research collaborators',
    venue: 'Methodological research in progress',
    summary:
      'Developing scalable sampling methods for districting and hierarchical facility location under structural constraints.',
    links: []
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
      { label: 'Email for Collaboration', href: 'mailto:laasyasrinivas2001@gmail.com' }
    ]
  }
];

export const experience: ExperienceItem[] = [
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
    period: '2025',
    description:
      'Extended true-measure support by improving SciPy wrapper pathways for dependent distributions.',
    link: 'https://github.com/QMCSoftware/QMCSoftware'
  }
];

export const fellowships: FellowshipItem[] = [
  {
    title: 'SoReMo Research Fellowship',
    year: '2026',
    organization: 'Society for Research on Mathematics Optimization (SoReMo)',
    description:
      'Researching environmental, economic, and social consequences of AI infrastructure expansion with focus on responsible modeling and community impact.'
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
    course: 'Computer Science Course Support at Illinois Tech',
    role: 'Teaching Assistant',
    period: 'Previous Role',
    description:
      'Helped students strengthen conceptual understanding, problem solving, and implementation skills through course support.'
  }
];

export const timeline: TimelineItem[] = [
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
    text: 'Contributed to QMCPy by extending true-measure functionality to support dependent distributions.',
    link: 'https://github.com/QMCSoftware/QMCSoftware',
    linkLabel: 'QMCPy Repository'
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
    href: 'mailto:laasyasrinivas2001@gmail.com',
    display: 'laasyasrinivas2001@gmail.com'
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
