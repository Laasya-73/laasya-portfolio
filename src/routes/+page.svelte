<script lang="ts">
  import ContactInvitation from '$lib/components/ContactInvitation.svelte';
  import { onDestroy, onMount } from 'svelte';
  import { profile, toolCards, qmcpyArticleUrl, soremoArticleUrl } from '$lib/data/site';

  const opensInNewTab = (href: string) => href.startsWith('http') || href.endsWith('.pdf');
  const featuredStoryUrl =
    'https://www.iit.edu/student-experience/student-and-alumni-stories/building-practical-skills';

  const typewriterLines = [
    'Building Intelligent Applications',
    'Engineering AI & ML Solutions',
    'Developing Native iOS Experiences',
    'Creating Reliable Software Systems'
  ];

  let typedLine = '';
  let activeLineIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let typeTimer: ReturnType<typeof setTimeout> | undefined;

  const runTypewriter = () => {
    const line = typewriterLines[activeLineIndex] ?? '';

    if (!deleting) {
      charIndex += 1;
      typedLine = line.slice(0, charIndex);

      if (charIndex >= line.length) {
        deleting = true;
        typeTimer = setTimeout(runTypewriter, 1350);
        return;
      }

      typeTimer = setTimeout(runTypewriter, 72);
      return;
    }

    charIndex -= 1;
    typedLine = line.slice(0, Math.max(0, charIndex));

    if (charIndex <= 0) {
      deleting = false;
      activeLineIndex = (activeLineIndex + 1) % typewriterLines.length;
      typeTimer = setTimeout(runTypewriter, 300);
      return;
    }

    typeTimer = setTimeout(runTypewriter, 40);
  };

  onMount(() => {
    runTypewriter();
  });

  onDestroy(() => {
    if (typeTimer) clearTimeout(typeTimer);
  });
</script>

<svelte:head>
  <title>{profile.name}</title>
  <meta
    name="description"
    content="Portfolio of Laasya Priya Vemuri: AI, native iOS development, scientific computing, research, and teaching."
  />
</svelte:head>

<section id="about" class="content-section intro-block">
  <p class="eyebrow eyebrow-full eyebrow-single-line">AI & MACHINE LEARNING • NATIVE iOS DEVELOPMENT • RESEARCH</p>
  <h1>Hi, I'm Laasya Priya.</h1>
  <p class="typewriter-line" aria-live="polite">
    <span>{typedLine}</span><span class="typewriter-caret" aria-hidden="true"></span>
  </p>

  <p>
    I hold a Master's in Computer Science & Mathematics from
    <a href={profile.schoolUrl} target="_blank" rel="noreferrer">Illinois Institute of Technology</a>,
    with experience in AI, machine learning, and native iOS development.
  </p>
  <p>
    I build intelligent applications and well-structured mobile experiences, with attention to
    reliability, performance, and usability. I also contribute to open-source research software
    and scientific computing.
  </p>

  <p class="status-row">
    <span class="status-dot" aria-hidden="true"></span>
    <span class="status-copy">
      Open to full-time AI/ML Engineering and iOS Development opportunities, and research collaborations.
    </span>
  </p>
</section>

<section id="engineering" class="content-section">
  <p class="eyebrow eyebrow-full">Engineering Capabilities</p>
  <div class="capability-grid">
    <article class="tool-card">
      <h3>AI & Machine Learning Engineering</h3>
      <p>
        I develop machine learning and LLM-powered applications, connecting data processing
        and integration with model evaluation and clear, usable outputs.
      </p>
      <div class="about-chip-row">
        <span class="about-chip">Machine Learning & Generative AI</span>
        <span class="about-chip">Data & Integration</span>
        <span class="about-chip">Evaluation & Reliability</span>
      </div>
    </article>
    <article class="tool-card">
      <h3>Native iOS Engineering</h3>
      <p>
        I develop native applications with Swift, SwiftUI, and UIKit, organizing navigation,
        asynchronous work, and persistent data through maintainable application architecture.
      </p>
      <div class="about-chip-row">
        <span class="about-chip">SwiftUI & UIKit</span>
        <span class="about-chip">Architecture & State Management</span>
        <span class="about-chip">Networking & Persistence</span>
      </div>
    </article>
  </div>
</section>

<section id="tools" class="content-section">
  <p class="eyebrow eyebrow-full">Research Spotlight</p>
  <div class="tool-grid">
    {#each toolCards as tool}
      <article class="tool-card">
        <h3>{tool.title}</h3>
        {#if tool.subtitle}
          <p class="item-meta">{tool.subtitle}</p>
        {/if}
        <p>{tool.description}</p>

        {#if tool.tags?.length}
          <div class="about-chip-row">
            {#each tool.tags as tag}
              <span class="about-chip">{tag}</span>
            {/each}
          </div>
        {/if}

        <div class="tool-cta-row research-actions">
          {#if tool.href && tool.ctaLabel}
            <a href={tool.href} target={opensInNewTab(tool.href) ? '_blank' : undefined} rel="noreferrer">
              {tool.ctaLabel} ↗
            </a>
          {/if}
          {#each tool.links ?? [] as link}
            <a href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>
          {/each}
        </div>

        <div class="tool-status-row">
          <span class="status-pill">{tool.status}</span>
          {#if tool.statusNote}
            <span class="tool-status-note">{tool.statusNote}</span>
          {/if}
        </div>
        {#if tool.href && !tool.ctaLabel}
          <a href={tool.href} target={opensInNewTab(tool.href) ? '_blank' : undefined} rel="noreferrer">
            Explore &rarr;
          </a>
        {/if}
      </article>
    {/each}
  </div>

  <hr class="featured-divider" />

  <div class="featured-block">
    <p class="eyebrow eyebrow-full featured-eyebrow">Featured</p>
    <article class="tool-card featured-story-card">
      <h3>Building Practical Skills</h3>
      <p class="featured-subtitle">Featured in Illinois Tech Student & Alumni Stories</p>
      <p>
      This feature highlights my journey through graduate school, research, teaching, and industry, and how those experiences shaped my approach to building practical AI systems.      
      </p>
      <div class="featured-chip-row">
        <span class="featured-chip">University Spotlight</span>
      </div>
      <p class="featured-story-link">
        <a href={featuredStoryUrl} target="_blank" rel="noreferrer">READ THE FEATURE ↗</a>
      </p>
    </article>
  </div>
</section>

<section id="updates" class="content-section">
  <p class="eyebrow eyebrow-full">Milestones & Experiences</p>

  <ul class="timeline">
    <li class="timeline-group">
      <p class="timeline-period">August 2026 - Present</p>
      <ul class="timeline-points">
        <li>
          Research Assistant at Illinois Institute of Technology, contributing to QMCPy through
          open-source research in probability modeling, numerical integration, and scientific computing.
        </li>
      </ul>
    </li>
    <li class="timeline-group">
      <p class="timeline-period">January 2026</p>
      <ul class="timeline-points">
        <li>
          Joined as a Teaching Assistant for CS 331: Data Structures & Algorithms at Illinois
          Institute of Technology, assisting students with algorithm design, data structures, and
          core problem-solving concepts.
        </li>
        <li>
          Awarded the
          <a href="https://www.soremo.org/" target="_blank" rel="noreferrer">SoReMo Research Fellowship</a>
          at Illinois Institute of Technology to conduct research on the environmental, economic, and
          community-level implications of large-scale AI infrastructure and data center development.
          The research is complete, with findings published in the SoReMo journal in June 2026.
          <a href={soremoArticleUrl} target="_blank" rel="noreferrer">Read Published Research ↗</a>
        </li>
      </ul>
    </li>
    <li class="timeline-group">
      <p class="timeline-period">Fall 2025</p>
      <ul class="timeline-points">
        <li>
          Began contributing to the
          <a href={qmcpyArticleUrl} target="_blank" rel="noreferrer">QMCPy</a>
          open-source library through work on dependent and custom distributions in SciPyWrapper,
          later merged in January 2026.
        </li>
        <li>
          Served as a Teaching Assistant for CSP 571: Data Preparation & Analysis at Illinois
          Institute of Technology, supporting coursework focused on data processing, statistical
          analysis, and practical data science workflows.
        </li>
      </ul>
    </li>
    <li class="timeline-group">
      <p class="timeline-period">Summer 2025</p>
      <ul class="timeline-points">
        <li>
          Joined Springer Capital as an LLM Analyst Intern, working on evaluation pipelines and
          experimentation frameworks to analyze and improve the reliability and behavior of large
          language models in applied environments.
        </li>
      </ul>
    </li>
  </ul>
</section>

<ContactInvitation />
