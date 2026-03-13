<script lang="ts">
  import { profile } from '$lib/data/site';
</script>

<svelte:head>
  <title>Research | Laasya Priya Vemuri</title>
  <meta
    name="description"
    content="Work and projects by Laasya Priya Vemuri, focused on applied AI systems and machine learning."
  />
</svelte:head>

<section id="research" class="content-section research-hero">
  <div>
    <p class="eyebrow eyebrow-full">Research</p>
    <h1>Work & Projects</h1>
    <p>
      My work focuses on building practical AI systems that translate machine learning models into
      usable tools. I am particularly interested in explainable forecasting, AI-driven analytics,
      and systems that help users better understand model predictions.
    </p>
    <p>Below are selected projects that reflect this work.</p>
  </div>
  <div class="research-visual-card" aria-hidden="true">
    <svg class="research-visual-svg" viewBox="0 0 320 220" role="img" aria-label="Forecasting visual">
      <defs>
        <linearGradient id="forecastStroke" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stop-color="#4a4ff3" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#4a4ff3" stop-opacity="0.95" />
        </linearGradient>
      </defs>
      <rect x="16" y="16" width="288" height="188" rx="14" fill="#f7f9ff" stroke="#cfd7eb" />
      <path d="M42 165 L102 126 L150 140 L198 92 L258 70" fill="none" stroke="url(#forecastStroke)" stroke-width="4" />
      <circle cx="102" cy="126" r="6.5" fill="#4a4ff3" fill-opacity="0.75" />
      <circle cx="198" cy="92" r="7.5" fill="#4a4ff3" fill-opacity="0.9" />
      <circle cx="258" cy="70" r="8.5" fill="#4a4ff3" />
      <rect x="52" y="92" width="18" height="73" rx="4" fill="#4a4ff3" fill-opacity="0.16" />
      <rect x="78" y="108" width="18" height="57" rx="4" fill="#4a4ff3" fill-opacity="0.24" />
      <rect x="104" y="83" width="18" height="82" rx="4" fill="#4a4ff3" fill-opacity="0.3" />
      <rect x="130" y="116" width="18" height="49" rx="4" fill="#4a4ff3" fill-opacity="0.22" />
      <rect x="156" y="104" width="18" height="61" rx="4" fill="#4a4ff3" fill-opacity="0.35" />
      <rect x="182" y="84" width="18" height="81" rx="4" fill="#4a4ff3" fill-opacity="0.28" />
      <line x1="42" y1="165" x2="272" y2="165" stroke="#b8c4e5" stroke-dasharray="5 4" />
      <line x1="42" y1="132" x2="272" y2="132" stroke="#d3dbf0" stroke-dasharray="4 5" />
      <line x1="42" y1="98" x2="272" y2="98" stroke="#d3dbf0" stroke-dasharray="4 5" />
    </svg>
  </div>
</section>

<section id="papers" class="content-section">
  <p class="eyebrow eyebrow-full">Projects</p>

  <ol class="project-stream">
    <li>
      <article class="project-entry">
        <div class="project-entry-head">
          <span class="project-number">1.</span>
          <span class="project-state">Live</span>
          <span class="project-kind">Applied AI Platform</span>
        </div>
        <h3>ForecastLens AI - Explainable Time Series Forecasting Platform</h3>
        <p>
          An AI-powered forecasting platform that transforms raw time-series data into
          interpretable predictions. The system integrates automated pattern detection, anomaly
          identification, and model comparison to generate reliable forecasts and explain trends
          clearly for users.
        </p>
        <p>
          Built with a multi-model evaluation pipeline that compares forecasting approaches using
          metrics such as MAPE and RMSE, ensuring transparent and robust model selection. The
          platform also includes LLM-driven narrative insights that translate statistical outputs
          into human-readable explanations.
        </p>
        <p class="project-link-row">
          <span>Live Tool:</span>
          <a href="https://forecaststudio.lovable.app/" target="_blank" rel="noreferrer">
            ForecastLens AI &rarr;
          </a>
        </p>
      </article>
    </li>
    <li>
      <article class="project-entry">
        <div class="project-entry-head">
          <span class="project-number">2.</span>
          <span class="project-state">Research</span>
          <span class="project-kind">Build Fellowship Project</span>
        </div>
        <h3>Bioinformatics & Machine Learning: Biomarkers of Aging</h3>
        <p>
          Developed machine learning workflows as part of the Build Fellowship program, focusing on
          practical applications of data-driven modeling and experimentation. The project involved
          designing data analysis pipelines, experimenting with predictive models, and translating
          model outputs into interpretable insights.
        </p>
        <p>
          The work emphasized bridging theoretical machine learning concepts with real-world
          analytical problems while collaborating with mentors and peers in a research-driven
          environment.
        </p>
      </article>
    </li>
  </ol>
</section>

<section class="content-section home-contact">
  <p class="talk-inline">
    Let's
    <a href={profile.linkedin} target="_blank" rel="noreferrer">Talk AI</a>
  </p>
</section>
