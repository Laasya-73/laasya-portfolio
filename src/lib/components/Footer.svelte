<script lang="ts">
  import { profile } from '$lib/data/site';
</script>

<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-meta">
      <p class="footer-copy"><span class="credit-icon" aria-hidden="true">&copy;</span> 2026 | Laasya Priya Vemuri</p>
      <p class="footer-updated">Last updated March 12, '26</p>
    </div>

    <div class="footer-actions" aria-label="Footer social links">
      <a class="icon-action" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9V21H9z"/></svg>
      </a>
      <span class="footer-divider" aria-hidden="true">|</span>
      <a class="icon-action" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.6v-2.2c-3.4.8-4.1-1.5-4.1-1.5a3.2 3.2 0 00-1.3-1.8c-1.1-.7 0-.7 0-.7a2.5 2.5 0 011.8 1.2 2.5 2.5 0 003.4 1 2.5 2.5 0 01.7-1.6c-2.7-.3-5.6-1.3-5.6-6a4.7 4.7 0 011.2-3.2 4.3 4.3 0 01.1-3.2s1-.3 3.3 1.2a11.3 11.3 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2a4.3 4.3 0 01.1 3.2 4.7 4.7 0 011.2 3.2c0 4.7-2.9 5.7-5.6 6a2.8 2.8 0 01.8 2.2v3.2c0 .4.2.7.8.6A12 12 0 0012 .5z"/></svg>
      </a>
    </div>
  </div>
</footer>
