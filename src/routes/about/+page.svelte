<script lang="ts">
  import ContactInvitation from '$lib/components/ContactInvitation.svelte';
  import { profile, skillGroups, soremoArticleUrl } from '$lib/data/site';

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
    content="About Laasya Priya Vemuri, an Illinois Tech Computer Science & Mathematics graduate working in AI/ML engineering, native iOS development, and research."
  />
</svelte:head>

<section id="about-overview" class="content-section about-section">
  <h1>Laasya Priya Vemuri</h1>
  <p class="about-subtitle">AI/ML Engineering • Native iOS Development • Research</p>

  <p>
    I hold a Master's in Computer Science & Mathematics from
    <a href={profile.schoolUrl} target="_blank" rel="noreferrer">Illinois Institute of Technology</a>
    and a B.Tech in Computer Science. I enjoy the engineering work behind useful applications:
    choosing an approach, working through its constraints, and making the result dependable
    for the person using it.
  </p>
  <p>
    My AI/ML experience includes machine learning, generative AI applications, and LLM evaluation.
    At Springer Capital, I worked as an LLM Analyst Intern on evaluation pipelines and
    experimentation frameworks. I care about how data is prepared and integrated, how model
    behavior is assessed, and how results are presented.
  </p>
  <p>
    In native iOS development, I build interfaces with SwiftUI and UIKit and structure
    applications around clear responsibilities. My development practices cover navigation
    and state management, API networking, concurrency, persistence, and testing. I use Swift
    and Combine to manage data flow while keeping application code understandable and maintainable.
  </p>
  <p>
    As a Research Assistant at Illinois Tech, I contribute to QMCPy, with seven merged
    open-source contributions covering probability modeling and numerical integration.
    My completed SoReMo fellowship examined environmental and community impacts of AI
    infrastructure, with findings published in the SoReMo journal. Teaching data science
    and algorithms has also strengthened how I communicate technical ideas.
  </p>
  <p>
    <em>I believe the best technology is technology people can understand, trust, and confidently use.</em>
  </p>
</section>

<section id="research-interests" class="content-section about-section">
  <p class="eyebrow eyebrow-full">Technical Interests</p>
  <div class="about-chip-row">
    <span class="about-chip">AI/ML Engineering</span>
    <span class="about-chip">Native iOS Development</span>
    <span class="about-chip">Generative AI</span>
    <span class="about-chip">AI Systems</span>
    <span class="about-chip">AI Evaluation</span>
    <span class="about-chip">Forecasting Systems</span>
    <span class="about-chip">Open Source</span>
    <span class="about-chip">Scientific Computing</span>


  </div>
</section>

<section id="technical-skills" class="content-section about-section">
  <p class="eyebrow eyebrow-full">Technical Skills</p>
  <div class="skills-grid">
    {#each skillGroups as group}
      <article class="tool-card">
        <h3>{group.title}</h3>
        <div class="about-chip-row">
          {#each group.skills as skill}
            <span class="about-chip">{skill}</span>
          {/each}
        </div>
      </article>
    {/each}
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
  <p class="eyebrow eyebrow-full">Research & Work Experience</p>
  <div class="about-list">
    <article class="about-item about-work-item">
      <p class="about-work-line">
        <strong>Research Assistant</strong>
        <a href={profile.schoolUrl} target="_blank" rel="noreferrer">Illinois Institute of Technology</a>
        <span class="about-year">August 2026 - Present</span>
      </p>
    </article>

    <article class="about-item about-work-item">
      <p class="about-work-line">
        <strong>Graduate Teaching Assistant</strong>
        <a href="https://www.iit.edu/" target="_blank" rel="noreferrer">Illinois Institute of Technology</a>
        <span class="about-year">May 2025 - May 2026</span>
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
  <div class="about-list">
    <article class="about-item about-award">
      <div class="about-item-head">
        <h3>Upsilon Pi Epsilon (UPE)</h3>
        <span class="about-year">2026</span>
      </div>
      <p class="about-award-org">Illinois Institute of Technology Chapter</p>
      <p class="about-award-text">
        Inducted into the international honor society for Computing and Information Disciplines.
      </p>
    </article>
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
        Completed research on the societal and environmental implications of AI infrastructure.
        The published article, <span class="about-project-title">"The People v. Hasty AI,"</span>
        examines data center expansion, resource demand, and community impacts.
      </p>
      <p class="tool-cta-row">
        <a href={soremoArticleUrl} target="_blank" rel="noreferrer">Read Published Research ↗</a>
      </p>
    </article>
  </div>
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

<ContactInvitation />
