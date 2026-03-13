import { c as escape_html, a as attr, e as ensure_array_like, ae as bind_props, ad as head } from "../../../chunks/index2.js";
import { a as timeline, b as projects } from "../../../chunks/site.js";
function ProjectCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let project = $$props["project"];
    const opensInNewTab = (href) => href.startsWith("http") || href.endsWith(".pdf");
    $$renderer2.push(`<article class="project-card"><div class="project-heading"><span class="project-tag">${escape_html(project.tag)}</span></div> <h3><a${attr("href", project.link)}${attr("target", opensInNewTab(project.link) ? "_blank" : void 0)} rel="noreferrer">${escape_html(project.title)}</a></h3> <p class="project-subtitle">${escape_html(project.subtitle)}</p> <ul class="bullet-list"><!--[-->`);
    const each_array = ensure_array_like(project.bullets);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let bullet = each_array[$$index];
      $$renderer2.push(`<li>${escape_html(bullet)}</li>`);
    }
    $$renderer2.push(`<!--]--></ul> <div class="project-links"><a${attr("href", project.link)}${attr("target", opensInNewTab(project.link) ? "_blank" : void 0)} rel="noreferrer">Open project</a> <!--[-->`);
    const each_array_1 = ensure_array_like(project.links);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let link = each_array_1[$$index_1];
      $$renderer2.push(`<a${attr("href", link.href)}${attr("target", opensInNewTab(link.href) ? "_blank" : void 0)} rel="noreferrer">${escape_html(link.label)}</a>`);
    }
    $$renderer2.push(`<!--]--></div></article>`);
    bind_props($$props, { project });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const projectTimeline = timeline.filter((item) => item.text.toLowerCase().includes("forecast") || item.text.toLowerCase().includes("research") || item.text.toLowerCase().includes("qmcpy"));
    const opensInNewTab = (href) => href.startsWith("http") || href.endsWith(".pdf");
    head("rqn88j", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Projects | Laasya Priya Vemuri</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Projects by Laasya Priya Vemuri, including ForecastLens AI and applied machine learning research work."/>`);
    });
    $$renderer2.push(`<section id="projects" class="content-section"><p class="eyebrow">Projects</p> <h1>Work &amp; Interactive Tools</h1> <p>These are selected projects focused on explainability, reliable model behavior, and clear
    decision support for real users.</p> <div class="project-list"><!--[-->`);
    const each_array = ensure_array_like(projects);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let project = each_array[$$index];
      ProjectCard($$renderer2, { project });
    }
    $$renderer2.push(`<!--]--></div></section> <section class="content-section"><p class="eyebrow">Updates</p> <h2>Project Milestones</h2> <ul class="timeline">`);
    if (projectTimeline.length === 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<li><p class="timeline-period">Current</p> <p>More project updates coming soon.</p></li>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(projectTimeline);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let item = each_array_1[$$index_1];
        $$renderer2.push(`<li><p class="timeline-period">${escape_html(item.period)}</p> <p>${escape_html(item.text)}</p> `);
        if (item.link && item.linkLabel) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<a${attr("href", item.link)}${attr("target", opensInNewTab(item.link) ? "_blank" : void 0)} rel="noreferrer">${escape_html(item.linkLabel)}</a>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></li>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></ul></section>`);
  });
}
export {
  _page as default
};
