<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { projects, timeline } from '$lib/data/site';

  const projectTimeline = timeline.filter(
    (item) =>
      item.text.toLowerCase().includes('forecast') ||
      item.text.toLowerCase().includes('research') ||
      item.text.toLowerCase().includes('qmcpy')
  );

  const opensInNewTab = (href: string) => href.startsWith('http') || href.endsWith('.pdf');
</script>

<svelte:head>
  <title>Projects | Laasya Priya Vemuri</title>
  <link rel="icon" type="image/svg+xml" href="/favicon-projects.svg" />
  <meta
    name="description"
    content="Projects by Laasya Priya Vemuri, including ForecastLens AI and applied machine learning research work."
  />
</svelte:head>

<section id="projects" class="content-section">
  <p class="eyebrow">Projects</p>
  <h1>Work & Interactive Tools</h1>
  <p>
    These are selected projects focused on explainability, reliable model behavior, and clear
    decision support for real users.
  </p>

  <div class="project-list">
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</section>

<section class="content-section">
  <p class="eyebrow">Updates</p>
  <h2>Project Milestones</h2>

  <ul class="timeline">
    {#if projectTimeline.length === 0}
      <li>
        <p class="timeline-period">Current</p>
        <p>More project updates coming soon.</p>
      </li>
    {:else}
      {#each projectTimeline as item}
        <li>
          <p class="timeline-period">{item.period}</p>
          <p>{item.text}</p>
          {#if item.link && item.linkLabel}
            <a href={item.link} target={opensInNewTab(item.link) ? '_blank' : undefined} rel="noreferrer">
              {item.linkLabel}
            </a>
          {/if}
        </li>
      {/each}
    {/if}
  </ul>
</section>
