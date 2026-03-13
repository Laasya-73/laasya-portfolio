<script lang="ts">
  import { profile } from '$lib/data/site';

  let copiedEmail: 'personal' | 'university' | null = null;
  let copiedTimer: ReturnType<typeof setTimeout> | undefined;

  const copyEmail = async (email: string, kind: 'personal' | 'university') => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else if (typeof document !== 'undefined') {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      copiedEmail = kind;
      if (copiedTimer) clearTimeout(copiedTimer);
      copiedTimer = setTimeout(() => {
        copiedEmail = null;
      }, 1400);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };
</script>

<aside class="profile-card">
  <div class="photo-wrap">
    <img class="profile-image" src={profile.photo} alt={`Portrait of ${profile.name}`} />
  </div>

  <div class="profile-content">
    <h2>{profile.name}</h2>
    <div class="divider"></div>

    <ul class="meta-list icon-list" aria-label="Profile details">
      <li>
        <span class="meta-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none"><path d="M12 21s7-5.3 7-11a7 7 0 10-14 0c0 5.7 7 11 7 11z" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="10" r="2.6" stroke="currentColor" stroke-width="1.8"/></svg>
        </span>
        <span>{profile.location}</span>
      </li>
      <li>
        <span class="meta-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none"><path d="M3 9l9-5 9 5-9 5-9-5z" stroke="currentColor" stroke-width="1.8"/><path d="M6 11.4V16c0 1.7 3 3 6 3s6-1.3 6-3v-4.6" stroke="currentColor" stroke-width="1.8"/></svg>
        </span>
        <a href={profile.schoolUrl} target="_blank" rel="noreferrer">Illinois Tech</a>
      </li>
      <li class="email-row">
        <span class="meta-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M4 7l8 6 8-6" stroke="currentColor" stroke-width="1.8"/></svg>
        </span>
        <div class="email-wrap">
          <span class="email-kind">University</span>
          <a href={`mailto:${profile.universityEmail}`}>{profile.universityEmail}</a>
        </div>
        <button
          class="copy-btn"
          type="button"
          on:click={() => copyEmail(profile.universityEmail, 'university')}
          aria-label="Copy university email"
        >
          <span class="copy-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.8"/><rect x="5" y="5" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.8"/></svg>
          </span>
        </button>
        {#if copiedEmail === 'university'}
          <span class="copied-note">Copied</span>
        {/if}
      </li>
      <li class="email-row">
        <span class="meta-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M4 7l8 6 8-6" stroke="currentColor" stroke-width="1.8"/></svg>
        </span>
        <div class="email-wrap">
          <span class="email-kind">Personal</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <button
          class="copy-btn"
          type="button"
          on:click={() => copyEmail(profile.email, 'personal')}
          aria-label="Copy personal email"
        >
          <span class="copy-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.8"/><rect x="5" y="5" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.8"/></svg>
          </span>
        </button>
        {#if copiedEmail === 'personal'}
          <span class="copied-note">Copied</span>
        {/if}
      </li>
      <li>
        <span class="meta-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.6v-2.2c-3.4.8-4.1-1.5-4.1-1.5a3.2 3.2 0 00-1.3-1.8c-1.1-.7 0-.7 0-.7a2.5 2.5 0 011.8 1.2 2.5 2.5 0 003.4 1 2.5 2.5 0 01.7-1.6c-2.7-.3-5.6-1.3-5.6-6a4.7 4.7 0 011.2-3.2 4.3 4.3 0 01.1-3.2s1-.3 3.3 1.2a11.3 11.3 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2a4.3 4.3 0 01.1 3.2 4.7 4.7 0 011.2 3.2c0 4.7-2.9 5.7-5.6 6a2.8 2.8 0 01.8 2.2v3.2c0 .4.2.7.8.6A12 12 0 0012 .5z"/></svg>
        </span>
        <a href={profile.github} target="_blank" rel="noreferrer">github.com/Laasya-73</a>
      </li>
    </ul>
  </div>
</aside>
