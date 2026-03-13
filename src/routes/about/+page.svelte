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
  <p class="about-subtitle">Master's Student in Computer Science & Mathematics - Illinois Institute of Technology</p>

  <p>
    I am a graduate student at the
    <a href="https://www.iit.edu/" target="_blank" rel="noreferrer">Illinois Institute of Technology</a>,
    studying Computer Science and Mathematics with a focus on applied artificial intelligence and
    machine learning systems. My interests lie in building practical AI tools that connect strong
    technical foundations with real-world applications.
  </p>

  <p>
    Much of my work centers around large language models, forecasting systems, and AI evaluation
    frameworks. I enjoy exploring how machine learning systems behave in real environments and
    designing tools that improve their reliability, interpretability, and practical usefulness.
  </p>

  <p>
    Alongside development work, I have been involved in teaching, research collaborations, and
    open-source contributions, experiences that have helped shape how I approach technical
    problems. I am particularly interested in projects where AI systems must balance performance,
    transparency, and meaningful impact.
  </p>

  <p>
    Outside of research and engineering work, I enjoy experimenting with new ideas, building small
    systems that test concepts quickly, and learning from interdisciplinary perspectives across data
    science, systems design, and applied mathematics.
  </p>
</section>

<section id="research-interests" class="content-section about-section">
  <p class="eyebrow eyebrow-full">Research Interests</p>
  <div class="about-chip-row">
    <span class="about-chip">Applied AI</span>
    <span class="about-chip">Machine Learning</span>
    <span class="about-chip">Large Language Models</span>
    <span class="about-chip">Forecasting Systems</span>
    <span class="about-chip">AI Evaluation</span>
    <span class="about-chip">Data Science</span>
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
