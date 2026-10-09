import { ad as ssr_context, h as head, e as escape_html, a as attr, b as ensure_array_like } from "../../chunks/index2.js";
import { C as ContactInvitation } from "../../chunks/ContactInvitation.js";
import "clsx";
import { p as profile, t as toolCards, s as soremoArticleUrl, q as qmcpyArticleUrl } from "../../chunks/site.js";
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const opensInNewTab = (href) => href.startsWith("http") || href.endsWith(".pdf");
    const featuredStoryUrl = "https://www.iit.edu/student-experience/student-and-alumni-stories/building-practical-skills";
    let typedLine = "";
    onDestroy(() => {
    });
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(profile.name)}</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Portfolio of Laasya Priya Vemuri: AI, native iOS development, scientific computing, research, and teaching."/>`);
    });
    $$renderer2.push(`<section id="about" class="content-section intro-block"><p class="eyebrow eyebrow-full eyebrow-single-line">AI &amp; MACHINE LEARNING • NATIVE iOS DEVELOPMENT • RESEARCH</p> <h1>Hi, I'm Laasya Priya.</h1> <p class="typewriter-line" aria-live="polite"><span>${escape_html(typedLine)}</span><span class="typewriter-caret" aria-hidden="true"></span></p> <p>I hold a Master's in Computer Science &amp; Mathematics from <a${attr("href", profile.schoolUrl)} target="_blank" rel="noreferrer">Illinois Institute of Technology</a>,
    with experience in AI, machine learning, and native iOS development.</p> <p>I build intelligent applications and well-structured mobile experiences, with attention to
    reliability, performance, and usability. I also contribute to open-source research software
    and scientific computing.</p> <p class="status-row"><span class="status-dot" aria-hidden="true"></span> <span class="status-copy">Open to full-time AI/ML Engineering and iOS Development opportunities, and research collaborations.</span></p></section> <section id="engineering" class="content-section"><p class="eyebrow eyebrow-full">Engineering Capabilities</p> <div class="capability-grid"><article class="tool-card"><h3>AI &amp; Machine Learning Engineering</h3> <p>I develop machine learning and LLM-powered applications, connecting data processing
        and integration with model evaluation and clear, usable outputs.</p> <div class="about-chip-row"><span class="about-chip">Machine Learning &amp; Generative AI</span> <span class="about-chip">Data &amp; Integration</span> <span class="about-chip">Evaluation &amp; Reliability</span></div></article> <article class="tool-card"><h3>Native iOS Engineering</h3> <p>I develop native applications with Swift, SwiftUI, and UIKit, organizing navigation,
        asynchronous work, and persistent data through maintainable application architecture.</p> <div class="about-chip-row"><span class="about-chip">SwiftUI &amp; UIKit</span> <span class="about-chip">Architecture &amp; State Management</span> <span class="about-chip">Networking &amp; Persistence</span></div></article></div></section> <section id="tools" class="content-section"><p class="eyebrow eyebrow-full">Research Spotlight</p> <div class="tool-grid"><!--[-->`);
    const each_array = ensure_array_like(toolCards);
    for (let $$index_2 = 0, $$length = each_array.length; $$index_2 < $$length; $$index_2++) {
      let tool = each_array[$$index_2];
      $$renderer2.push(`<article class="tool-card"><h3>${escape_html(tool.title)}</h3> `);
      if (tool.subtitle) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<p class="item-meta">${escape_html(tool.subtitle)}</p>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <p>${escape_html(tool.description)}</p> `);
      if (tool.tags?.length) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="about-chip-row"><!--[-->`);
        const each_array_1 = ensure_array_like(tool.tags);
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let tag = each_array_1[$$index];
          $$renderer2.push(`<span class="about-chip">${escape_html(tag)}</span>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <div class="tool-cta-row research-actions">`);
      if (tool.href && tool.ctaLabel) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<a${attr("href", tool.href)}${attr("target", opensInNewTab(tool.href) ? "_blank" : void 0)} rel="noreferrer">${escape_html(tool.ctaLabel)} ↗</a>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <!--[-->`);
      const each_array_2 = ensure_array_like(tool.links ?? []);
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let link = each_array_2[$$index_1];
        $$renderer2.push(`<a${attr("href", link.href)} target="_blank" rel="noreferrer">${escape_html(link.label)} ↗</a>`);
      }
      $$renderer2.push(`<!--]--></div> <div class="tool-status-row"><span class="status-pill">${escape_html(tool.status)}</span> `);
      if (tool.statusNote) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<span class="tool-status-note">${escape_html(tool.statusNote)}</span>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div> `);
      if (tool.href && !tool.ctaLabel) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<a${attr("href", tool.href)}${attr("target", opensInNewTab(tool.href) ? "_blank" : void 0)} rel="noreferrer">Explore →</a>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></article>`);
    }
    $$renderer2.push(`<!--]--></div> <hr class="featured-divider"/> <div class="featured-block"><p class="eyebrow eyebrow-full featured-eyebrow">Featured</p> <article class="tool-card featured-story-card"><h3>Building Practical Skills</h3> <p class="featured-subtitle">Featured in Illinois Tech Student &amp; Alumni Stories</p> <p>This feature highlights my journey through graduate school, research, teaching, and industry, and how those experiences shaped my approach to building practical AI systems.</p> <div class="featured-chip-row"><span class="featured-chip">University Spotlight</span></div> <p class="featured-story-link"><a${attr("href", featuredStoryUrl)} target="_blank" rel="noreferrer">READ THE FEATURE ↗</a></p></article></div></section> <section id="updates" class="content-section"><p class="eyebrow eyebrow-full">Milestones &amp; Experiences</p> <ul class="timeline"><li class="timeline-group"><p class="timeline-period">August 2026 - Present</p> <p>Research Assistant at Illinois Institute of Technology, contributing to QMCPy through
        open-source research in probability modeling, numerical integration, and scientific computing.</p></li> <li class="timeline-group"><p class="timeline-period">January 2026</p> <ul class="timeline-points"><li>Joined as a Teaching Assistant for CS 331: Data Structures &amp; Algorithms at Illinois
          Institute of Technology, assisting students with algorithm design, data structures, and
          core problem-solving concepts.</li> <li>My SciPyWrapper contribution to QMCPy was merged, adding dependent and custom
          distribution support with tests and demonstration notebooks.</li> <li>Awarded the <a href="https://www.soremo.org/" target="_blank" rel="noreferrer">SoReMo Research Fellowship</a> at Illinois Institute of Technology to conduct research on the environmental, economic, and
          community-level implications of large-scale AI infrastructure and data center development.
          The research is complete, with findings published in the SoReMo journal in June 2026. <a${attr("href", soremoArticleUrl)} target="_blank" rel="noreferrer">Read Published Research ↗</a></li></ul></li> <li class="timeline-group"><p class="timeline-period">Fall 2025</p> <ul class="timeline-points"><li>Began contributing to the <a${attr("href", qmcpyArticleUrl)} target="_blank" rel="noreferrer">QMCPy</a> open-source library through work on dependent and custom distributions in SciPyWrapper,
          later merged in January 2026.</li> <li>Served as a Teaching Assistant for CSP 571: Data Preparation &amp; Analysis at Illinois
          Institute of Technology, supporting coursework focused on data processing, statistical
          analysis, and practical data science workflows.</li></ul></li> <li class="timeline-group"><p class="timeline-period">Summer 2025</p> <ul class="timeline-points"><li>Joined Springer Capital as an LLM Analyst Intern, working on evaluation pipelines and
          experimentation frameworks to analyze and improve the reliability and behavior of large
          language models in applied environments.</li></ul></li></ul></section> `);
    ContactInvitation($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
