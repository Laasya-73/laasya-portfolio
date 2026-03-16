<script lang="ts">
  import { profile } from '$lib/data/site';
</script>

<svelte:head>
  <title>Teaching | Laasya Priya Vemuri</title>
  <link rel="icon" type="image/svg+xml" href="/favicon-teaching.svg" />
  <meta
    name="description"
    content="Teaching and mentoring work of Laasya Priya Vemuri at Illinois Institute of Technology."
  />
</svelte:head>

<section id="teaching" class="content-section teaching-hero">
  <div>
    <p class="eyebrow eyebrow-full">Teaching</p>
    <h1>Teaching & Mentoring</h1>
    <p>
      I have worked as a Teaching Assistant at the Illinois Institute of Technology, supporting
      courses in data science and computer science. In these roles, I assist students in
      understanding concepts related to data preparation, analysis, and algorithmic thinking while
      guiding them through practical programming and problem-solving tasks.
    </p>
    <p>
      Teaching has been an important part of my academic journey, helping me develop the ability to
      communicate complex technical ideas clearly and support students as they build their
      computational skills.
    </p>
  </div>
  <div class="teaching-visual-card" aria-hidden="true">
    <svg class="teaching-visual-svg" viewBox="0 0 320 220" role="img" aria-label="Teaching illustration">
      <rect x="14" y="16" width="292" height="188" rx="14" fill="#f7f9ff" stroke="#cfd7eb" />
      <rect x="42" y="42" width="236" height="102" rx="10" fill="#eef2ff" stroke="#b9c6ea" />
      <line x1="60" y1="72" x2="178" y2="72" stroke="#6a74ef" stroke-width="5" stroke-linecap="round" />
      <line x1="60" y1="92" x2="156" y2="92" stroke="#94a1f7" stroke-width="5" stroke-linecap="round" />
      <line x1="60" y1="112" x2="192" y2="112" stroke="#c0c8fb" stroke-width="5" stroke-linecap="round" />
      <circle cx="228" cy="90" r="20" fill="#4a4ff3" fill-opacity="0.15" />
      <path d="M220 90h16M228 82v16" stroke="#4a4ff3" stroke-width="3" stroke-linecap="round" />
      <circle cx="98" cy="168" r="11" fill="#4a4ff3" fill-opacity="0.2" />
      <circle cx="158" cy="168" r="11" fill="#4a4ff3" fill-opacity="0.27" />
      <circle cx="218" cy="168" r="11" fill="#4a4ff3" fill-opacity="0.36" />
      <rect x="88" y="182" width="20" height="8" rx="4" fill="#a8b4fa" />
      <rect x="148" y="182" width="20" height="8" rx="4" fill="#8e9cf7" />
      <rect x="208" y="182" width="20" height="8" rx="4" fill="#7585f2" />
    </svg>
  </div>
</section>

<section id="teaching-experience" class="content-section">
  <p class="eyebrow eyebrow-full">Timeline</p>
  <p class="teaching-org-top">
    <a href={profile.schoolUrl} target="_blank" rel="noreferrer">Illinois Institute of Technology</a>
  </p>
  <ul class="timeline teaching-role-timeline">
    <li>
      <p class="timeline-period"><span class="teaching-role-label">Teaching Assistant</span> - CS-331-03 | Data Structures and Algorithms</p>
      <p class="item-meta">Jan 2026 - May 2026</p>
    </li>
    <li>
      <p class="timeline-period"><span class="teaching-role-label">Teaching Assistant</span> - CSP-571-01/02 | Data Preparation and Analysis</p>
      <p class="item-meta">May 2025 - Dec 2025</p>
    </li>
  </ul>
</section>

<section class="content-section home-contact">
  <p class="talk-inline">
    Let's
    <a href={profile.linkedin} target="_blank" rel="noreferrer">Talk AI</a>
  </p>
</section>
