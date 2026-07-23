<script lang="ts">
  import { profile } from '$lib/data/site';

  let copied = false;
  let copiedTimer: ReturnType<typeof setTimeout> | undefined;

  const copyEmail = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(profile.email);
      } else if (typeof document !== 'undefined') {
        const textarea = document.createElement('textarea');
        textarea.value = profile.email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      copied = true;
      if (copiedTimer) clearTimeout(copiedTimer);
      copiedTimer = setTimeout(() => {
        copied = false;
      }, 1400);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };
</script>

<svelte:head>
  <title>About | Laasya Priya Vemuri</title>
  <meta
    name="description"
    content="About Laasya Priya Vemuri - graduate student in Computer Science and Mathematics at Illinois Institute of Technology."
  />
</svelte:head>

<section id="about-overview" class="content-section about-section">
  <h1>Laasya Priya Vemuri</h1>
  <p class="about-subtitle">Machine Learning • Generative AI • Applied Research</p>

  <p>
    I recently graduated with a Master's in Data Science from the
    <a href="https://www.iit.edu/" target="_blank" rel="noreferrer">Illinois Institute of Technology.</a> My work combines machine learning, generative AI, forecasting, and software engineering to build systems that solve practical problems. 
    I enjoy taking ideas from research and turning them into applications that people can understand, trust, and use. Building a strong model is only one part of the process. I care just as much about designing systems that are reliable, interpretable, maintainable, and capable of supporting real decisions.
  </p>

  <p>
    Over the past few years, I've worked across industry, academic research, teaching, and open source. I've built internal AI applications, contributed to research software, developed machine learning systems, and worked on projects spanning large language models, forecasting, geospatial analytics, AI evaluation, and computational mathematics. 
    Those experiences have shaped how I approach engineering, from writing maintainable software and validating model behavior to communicating technical ideas clearly.
  </p>

  <p>
    I'm drawn to work at the intersection of machine learning, software engineering, and real-world impact. I enjoy building intelligent applications, designing evaluation frameworks, and creating tools that transform complex data into meaningful insights. 
    My goal is to develop AI systems that are technically sound, practical, transparent, and valuable to the people who use them.
  </p>

  <p>
    Outside of work, I enjoy contributing to open-source projects, experimenting with new ideas, and collaborating across research and engineering. 
    I'm always looking for opportunities to build technology that solves meaningful problems while continuing to grow as an engineer.
  </p>

  <p>
    <em>I believe the best AI systems are not the ones that make the boldest predictions, but the ones people can understand, trust, and confidently use.</em>
  </p>
</section>

<section id="research-interests" class="content-section about-section">
  <p class="eyebrow eyebrow-full">Research Interests</p>
  <div class="about-chip-row">
    <span class="about-chip">Machine Learning</span>
    <span class="about-chip">Generative AI</span>
    <span class="about-chip">AI Systems</span>
    <span class="about-chip">AI Evaluation</span>
    <span class="about-chip">Forecasting Systems</span>
    <span class="about-chip">Open Source</span>


  </div>
</section>

<section id="education" class="content-section about-section">
  <p class="eyebrow eyebrow-full">Education</p>
  <div class="about-list">
    <article class="about-item">
      <div class="about-item-head">
        <h3>M.S. in Computer Science & Mathematics</h3>
        <span class="about-year">2024 - 2026</span>
      </div>
      <p>
        <a href="https://www.iit.edu/" class="about-highlight-link" target="_blank" rel="noreferrer">
          Illinois Institute of Technology, Chicago, IL
        </a>
      </p>
    </article>

    <article class="about-item">
      <div class="about-item-head">
        <h3>B.Tech in Computer Science</h3>
        <span class="about-year">2019 - 2023</span>
      </div>
      <p>
        <a href="https://jntuhceh.ac.in/" class="about-highlight-link" target="_blank" rel="noreferrer">
          Jawaharlal Nehru Technological University, Hyderabad, India
        </a>
      </p>
    </article>
  </div>
</section>

<section id="experience" class="content-section about-section">
  <p class="eyebrow eyebrow-full">Work Experience</p>
  <div class="about-list">
    <article class="about-item about-work-item">
      <p class="about-work-line">
        <strong>Graduate Teaching Assistant</strong>
        <a href="https://www.iit.edu/" target="_blank" rel="noreferrer">Illinois Institute of Technology</a>
        <span class="about-year">2025-2026</span>
      </p>
    </article>

    <article class="about-item about-work-item">
      <p class="about-work-line">
        <strong>LLM Analyst Intern</strong>
        <span class="about-company-highlight">Springer Capital</span>
        <span class="about-year">2025</span>
      </p>
    </article>
  </div>
</section>

<section id="awards" class="content-section about-section">
  <p class="eyebrow eyebrow-full">Fellowships & Awards</p>
  <article class="about-item about-award">
    <div class="about-item-head">
      <h3>SoReMo Research Fellowship</h3>
      <span class="about-year">2026</span>
    </div>
    <p class="about-award-org">
      <a href="https://www.soremo.org/" class="about-highlight-link" target="_blank" rel="noreferrer">
        Society for Research on Mathematics Optimization (SoReMo)
      </a>
    </p>
    <p class="about-award-text">
      Awarded to support research on the societal and environmental implications of large-scale AI
      infrastructure. My project,
      <span class="about-project-title">"The People v. Hasty AI Development,"</span>
      examines the environmental justice dimensions of data center expansion, including energy
      demand, land use, and regional community impacts.
    </p>
  </article>
</section>

<section id="contact" class="content-section about-section">
  <p class="eyebrow eyebrow-full">Contact</p>
  <div class="about-contact-grid">
    <span>Email</span>
    <div class="about-email-row">
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
      <button class="about-copy-btn" type="button" on:click={copyEmail} aria-label="Copy email">
        <svg viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.8"/><rect x="5" y="5" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.8"/></svg>
      </button>
      {#if copied}
        <span class="about-copied">Copied</span>
      {/if}
    </div>

    <span>LinkedIn</span>
    <a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/laasya-priya-vemuri</a>

    <span>GitHub</span>
    <a href={profile.github} target="_blank" rel="noreferrer">github.com/Laasya-73</a>
  </div>
</section>

<section class="content-section home-contact">
  <p class="talk-inline">
    Let's
    <a href={profile.linkedin} target="_blank" rel="noreferrer">Talk AI</a>
  </p>
</section>
