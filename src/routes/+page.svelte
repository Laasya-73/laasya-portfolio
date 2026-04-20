<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { profile, toolCards } from '$lib/data/site';

  const opensInNewTab = (href: string) => href.startsWith('http') || href.endsWith('.pdf');

  const typewriterLines = [
    'I build machine learning systems',
    'Developing practical AI tools',
    'Working with large language models',
    'Exploring forecasting systems'
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
  <p class="eyebrow eyebrow-full eyebrow-single-line">APPLIED AI | MACHINE LEARNING | COMPUTATIONAL MATHEMATICS | ILLINOIS TECH CHICAGO</p>
  <h1>Hi, I'm Laasya Priya.</h1>
  <p class="typewriter-line" aria-live="polite">
    <span>{typedLine}</span><span class="typewriter-caret" aria-hidden="true"></span>
  </p>

  <p>
    I am a graduate student at <a href={profile.schoolUrl} target="_blank" rel="noreferrer">Illinois Institute of Technology</a> working across machine learning
    engineering, applied research, forecasting systems, and practical AI deployment. My work spans
    large language models, explainable forecasting, evaluation frameworks, and tools designed to
    make advanced systems more interpretable and dependable.
  </p>

  <p>
    I am especially interested in the space where technical depth meets real-world usefulness. That
    means building systems that not only perform well, but also communicate clearly, behave robustly,
    and support better decisions for the people using them.
  </p>

  <p class="status-row">
    <span class="status-dot" aria-hidden="true"></span>
    <span class="status-copy">
      Currently seeking full-time roles in AI Engineering or Machine Learning and open to research
      collaborations.
    </span>
  </p>
</section>

<section id="tools" class="content-section">
  <p class="eyebrow eyebrow-full">Interactive Tools</p>
  <h2 class="section-title-compact">Current Work</h2>
  <div class="tool-grid">
    {#each toolCards as tool}
      <article class="tool-card">
        <h3>{tool.title}</h3>
        {#if tool.subtitle}
          <p class="item-meta">{tool.subtitle}</p>
        {/if}
        <p>{tool.description}</p>
        {#if tool.href}
          <a href={tool.href} target={opensInNewTab(tool.href) ? '_blank' : undefined} rel="noreferrer">
            {tool.status}
          </a>
        {:else}
          <span class="status-pill">{tool.status}</span>
        {/if}
      </article>
    {/each}
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
          <a href="https://qmcpy.org/author/lvemuri1hawk-illinoistech-edu/" target="_blank" rel="noreferrer">QMCPy</a>
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


