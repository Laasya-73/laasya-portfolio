<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import '$lib/styles/app.css';
  import 'maplibre-gl/dist/maplibre-gl.css';
</script>

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
