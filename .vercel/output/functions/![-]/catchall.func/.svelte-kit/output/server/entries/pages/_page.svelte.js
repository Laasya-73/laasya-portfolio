import { ac as ssr_context, ad as head, c as escape_html, a as attr, e as ensure_array_like } from "../../chunks/index2.js";
import "clsx";
import { p as profile, t as toolCards } from "../../chunks/site.js";
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const opensInNewTab = (href) => href.startsWith("http") || href.endsWith(".pdf");
    let typedLine = "";
    onDestroy(() => {
    });
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(`${profile.name} ✨`)}</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Portfolio of Laasya Priya Vemuri: applied AI systems, research, and teaching."/>`);
    });
    $$renderer2.push(`<section id="about" class="content-section intro-block"><p class="eyebrow eyebrow-full eyebrow-single-line">APPLIED AI | MACHINE LEARNING | COMPUTATIONAL MATHEMATICS | ILLINOIS TECH CHICAGO</p> <h1>Hi, I'm Laasya Priya.</h1> <p class="typewriter-line" aria-live="polite"><span>${escape_html(typedLine)}</span><span class="typewriter-caret" aria-hidden="true"></span></p> <p>I am a graduate student at <a${attr("href", profile.schoolUrl)} target="_blank" rel="noreferrer">Illinois Institute of Technology</a> working across machine learning
    engineering, applied research, forecasting systems, and practical AI deployment. My work spans
    large language models, explainable forecasting, evaluation frameworks, and tools designed to
    make advanced systems more interpretable and dependable.</p> <p>I am especially interested in the space where technical depth meets real-world usefulness. That
    means building systems that not only perform well, but also communicate clearly, behave robustly,
    and support better decisions for the people using them.</p> <p class="status-row"><span class="status-dot" aria-hidden="true"></span> <span class="status-copy">Currently seeking full-time roles in AI Engineering or Machine Learning and open to research
      collaborations.</span></p></section> <section id="tools" class="content-section"><p class="eyebrow eyebrow-full">Interactive Tools</p> <h2 class="section-title-compact">Current Work</h2> <div class="tool-grid"><!--[-->`);
    const each_array = ensure_array_like(toolCards);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let tool = each_array[$$index];
      $$renderer2.push(`<article class="tool-card"><h3>${escape_html(tool.title)}</h3> `);
      if (tool.subtitle) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<p class="item-meta">${escape_html(tool.subtitle)}</p>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <p>${escape_html(tool.description)}</p> `);
      if (tool.href) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<a${attr("href", tool.href)}${attr("target", opensInNewTab(tool.href) ? "_blank" : void 0)} rel="noreferrer">${escape_html(tool.status)}</a>`);
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<span class="status-pill">${escape_html(tool.status)}</span>`);
      }
      $$renderer2.push(`<!--]--></article>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section id="updates" class="content-section"><p class="eyebrow eyebrow-full">Milestones &amp; Experiences</p> <ul class="timeline"><li class="timeline-group"><p class="timeline-period">January 2026</p> <ul class="timeline-points"><li>Joined as a Teaching Assistant for CS 331: Data Structures &amp; Algorithms at Illinois
          Institute of Technology, assisting students with algorithm design, data structures, and
          core problem-solving concepts.</li> <li>Awarded the <a href="https://www.soremo.org/" target="_blank" rel="noreferrer">SoReMo Research Fellowship</a> at Illinois Institute of Technology to conduct research on the environmental, economic, and
          community-level implications of large-scale AI infrastructure and data center development.</li></ul></li> <li class="timeline-group"><p class="timeline-period">Fall 2025</p> <ul class="timeline-points"><li>Contributed to the <a href="https://qmcpy.org/" target="_blank" rel="noreferrer">QMCPy</a> open-source library, extending the True Measure class to support dependent distributions
          through improvements to the SciPy wrapper integration.</li> <li>Served as a Teaching Assistant for CSP 571: Data Preparation &amp; Analysis at Illinois
          Institute of Technology, supporting coursework focused on data processing, statistical
          analysis, and practical data science workflows.</li></ul></li> <li class="timeline-group"><p class="timeline-period">Summer 2025</p> <ul class="timeline-points"><li>Joined Springer Capital as an LLM Analyst Intern, working on evaluation pipelines and
          experimentation frameworks to analyze and improve the reliability and behavior of large
          language models in applied environments.</li></ul></li></ul></section> <section id="contact-home" class="content-section home-contact"><p class="talk-inline">Let's <a${attr("href", profile.linkedin)} target="_blank" rel="noreferrer">Talk AI</a></p></section>`);
  });
}
export {
  _page as default
};
