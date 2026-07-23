<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { profile, toolCards } from '$lib/data/site';

  const opensInNewTab = (href: string) => href.startsWith('http') || href.endsWith('.pdf');
  const featuredStoryUrl =
    'https://www.iit.edu/student-experience/student-and-alumni-stories/building-practical-skills';

  const typewriterLines = [
  'Building practical AI systems',
  'Engineering GenAI applications',
  'Designing machine learning solutions',
  'Turning data into intelligent decisions'
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
    content="Portfolio of Laasya Priya Vemuri: applied AI systems, research, and teaching."
  />
</svelte:head>

<section id="about" class="content-section intro-block">
  <p class="eyebrow eyebrow-full eyebrow-single-line">MACHINE LEARNING • AI SYSTEMS • COMPUTATIONAL MATHEMATICS • ILLINOIS TECH</p>
  <h1>Hi, I'm Laasya Priya.</h1>
  <p class="typewriter-line" aria-live="polite">
    <span>{typedLine}</span><span class="typewriter-caret" aria-hidden="true"></span>
  </p>

  <p>
    I recently graduated with a Master's in Data Science from the <a href={profile.schoolUrl} target="_blank" rel="noreferrer">Illinois Institute of Technology.</a> 
    I build machine learning and generative AI applications that combine research, software engineering, and data-driven decision making.  </p>

  <p>
    My interests span AI systems, forecasting, evaluation frameworks, and intelligent software designed to solve real-world problems with reliability and clarity.
  </p>

  <p class="status-row">
    <span class="status-dot" aria-hidden="true"></span>
    <span class="status-copy">
      Seeking full-time roles in AI Engineering or Machine Learning and open to research
      collaborations.
    </span>
  </p>
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

        {#if tool.href && tool.ctaLabel}
          <p class="tool-cta-row">
            <a href={tool.href} target={opensInNewTab(tool.href) ? '_blank' : undefined} rel="noreferrer">
              {tool.ctaLabel} ↗
            </a>
          </p>
        {/if}

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
        </li>
      </ul>
    </li>
    <li class="timeline-group">
      <p class="timeline-period">Fall 2025</p>
      <ul class="timeline-points">
        <li>
          Contributed to the
          <a href="https://qmcpy.org/2026/04/18/extending-scipywrapper-of-qmcpy-to-support-dependent-and-custom-distributions/" target="_blank" rel="noreferrer">QMCPy</a>
          open-source library, extending the True Measure class to support dependent distributions
          through improvements to the SciPy wrapper integration.
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

<section id="contact-home" class="content-section home-contact">
  <p class="talk-inline">
    Let's
    <a href={profile.linkedin} target="_blank" rel="noreferrer">Talk AI</a>
  </p>
</section>
