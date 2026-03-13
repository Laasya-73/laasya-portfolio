<script lang="ts">
  import type { ProjectItem } from '$lib/data/site';

  export let project: ProjectItem;

  const opensInNewTab = (href: string) => href.startsWith('http') || href.endsWith('.pdf');
</script>

<article class="project-card">
  <div class="project-heading">
    <span class="project-tag">{project.tag}</span>
  </div>

  <h3>
    <a href={project.link} target={opensInNewTab(project.link) ? '_blank' : undefined} rel="noreferrer">
      {project.title}
    </a>
  </h3>

  <p class="project-subtitle">{project.subtitle}</p>

  <ul class="bullet-list">
    {#each project.bullets as bullet}
      <li>{bullet}</li>
    {/each}
  </ul>

  <div class="project-links">
    <a href={project.link} target={opensInNewTab(project.link) ? '_blank' : undefined} rel="noreferrer">
      Open project
    </a>
    {#each project.links as link}
      <a href={link.href} target={opensInNewTab(link.href) ? '_blank' : undefined} rel="noreferrer">
        {link.label}
      </a>
    {/each}
  </div>
</article>