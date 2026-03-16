<script lang="ts">
  import { page } from '$app/stores';
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import '$lib/styles/app.css';
  import 'maplibre-gl/dist/maplibre-gl.css';

  const faviconForPath = (pathname: string) => {
    if (pathname.startsWith('/about')) return '/favicon-about.svg';
    if (pathname.startsWith('/research')) return '/favicon-research.svg';
    if (pathname.startsWith('/teaching')) return '/favicon-teaching.svg';
    if (pathname.startsWith('/projects')) return '/favicon-projects.svg';
    return '/favicon-home.svg';
  };

  $: faviconHref = faviconForPath($page.url.pathname);
</script>

<svelte:head>
  <link rel="icon" type="image/svg+xml" href={faviconHref} />
  <link rel="alternate icon" href={faviconHref} />
</svelte:head>

<div class="page-shell">
  <Navbar />
  <div class="layout">
    <Sidebar />
    <main class="content">
      <slot />
    </main>
  </div>
  <Footer />
</div>
