import { a as attr, g as getContext, e as ensure_array_like, b as attr_class, s as store_get, c as escape_html, u as unsubscribe_stores, d as slot } from "../../chunks/index2.js";
import { p as profile, n as navItems } from "../../chunks/site.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import "../../chunks/state.svelte.js";
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<footer class="site-footer"><div class="footer-inner"><div class="footer-meta"><p class="footer-copy"><span class="credit-icon" aria-hidden="true">©</span> 2026 | Laasya Priya Vemuri</p> <p class="footer-updated">Last updated March 12, '26</p></div> <div class="footer-actions" aria-label="Footer social links"><a class="icon-action"${attr("href", profile.linkedin)} target="_blank" rel="noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9V21H9z"></path></svg></a> <span class="footer-divider" aria-hidden="true">|</span> <a class="icon-action"${attr("href", profile.github)} target="_blank" rel="noreferrer" aria-label="GitHub"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.6v-2.2c-3.4.8-4.1-1.5-4.1-1.5a3.2 3.2 0 00-1.3-1.8c-1.1-.7 0-.7 0-.7a2.5 2.5 0 011.8 1.2 2.5 2.5 0 003.4 1 2.5 2.5 0 01.7-1.6c-2.7-.3-5.6-1.3-5.6-6a4.7 4.7 0 011.2-3.2 4.3 4.3 0 01.1-3.2s1-.3 3.3 1.2a11.3 11.3 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2a4.3 4.3 0 01.1 3.2 4.7 4.7 0 011.2 3.2c0 4.7-2.9 5.7-5.6 6a2.8 2.8 0 01.8 2.2v3.2c0 .4.2.7.8.6A12 12 0 0012 .5z"></path></svg></a></div></div></footer>`);
  });
}
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Navbar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<header class="topbar"><div class="topbar-inner"><a href="/" class="brand">Laasya Priya's Homepage</a> <nav class="desktop-nav" aria-label="Primary navigation"><!--[-->`);
    const each_array = ensure_array_like(navItems);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<a${attr("href", item.href)}${attr_class("", void 0, {
        "active": store_get($$store_subs ??= {}, "$page", page).url.pathname === item.href
      })}>${escape_html(item.label)}</a>`);
    }
    $$renderer2.push(`<!--]--></nav> <div class="top-actions" aria-label="Social links"><a class="icon-action"${attr("href", profile.linkedin)} target="_blank" rel="noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9V21H9z"></path></svg></a> <a class="icon-action"${attr("href", profile.github)} target="_blank" rel="noreferrer" aria-label="GitHub"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.6v-2.2c-3.4.8-4.1-1.5-4.1-1.5a3.2 3.2 0 00-1.3-1.8c-1.1-.7 0-.7 0-.7a2.5 2.5 0 011.8 1.2 2.5 2.5 0 003.4 1 2.5 2.5 0 01.7-1.6c-2.7-.3-5.6-1.3-5.6-6a4.7 4.7 0 011.2-3.2 4.3 4.3 0 01.1-3.2s1-.3 3.3 1.2a11.3 11.3 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2a4.3 4.3 0 01.1 3.2 4.7 4.7 0 011.2 3.2c0 4.7-2.9 5.7-5.6 6a2.8 2.8 0 01.8 2.2v3.2c0 .4.2.7.8.6A12 12 0 0012 .5z"></path></svg></a> <button class="icon-action moon" type="button"${attr("aria-label", "Switch to dark mode")}${attr("data-tooltip", "Switch to dark mode")}><span aria-hidden="true">${escape_html("☽")}</span></button></div></div></header>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Sidebar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<aside class="profile-card"><div class="photo-wrap"><img class="profile-image"${attr("src", profile.photo)}${attr("alt", `Portrait of ${profile.name}`)}/></div> <div class="profile-content"><h2>${escape_html(profile.name)}</h2> <div class="divider"></div> <ul class="meta-list icon-list" aria-label="Profile details"><li><span class="meta-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M12 21s7-5.3 7-11a7 7 0 10-14 0c0 5.7 7 11 7 11z" stroke="currentColor" stroke-width="1.8"></path><circle cx="12" cy="10" r="2.6" stroke="currentColor" stroke-width="1.8"></circle></svg></span> <span>${escape_html(profile.location)}</span></li> <li><span class="meta-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M3 9l9-5 9 5-9 5-9-5z" stroke="currentColor" stroke-width="1.8"></path><path d="M6 11.4V16c0 1.7 3 3 6 3s6-1.3 6-3v-4.6" stroke="currentColor" stroke-width="1.8"></path></svg></span> <a${attr("href", profile.schoolUrl)} target="_blank" rel="noreferrer">Illinois Tech</a></li> <li class="email-row"><span class="meta-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.8"></rect><path d="M4 7l8 6 8-6" stroke="currentColor" stroke-width="1.8"></path></svg></span> <div class="email-wrap"><span class="email-kind">University</span> <a${attr("href", `mailto:${profile.universityEmail}`)}>${escape_html(profile.universityEmail)}</a></div> <button class="copy-btn" type="button" aria-label="Copy university email"><span class="copy-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.8"></rect><rect x="5" y="5" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.8"></rect></svg></span></button> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></li> <li class="email-row"><span class="meta-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.8"></rect><path d="M4 7l8 6 8-6" stroke="currentColor" stroke-width="1.8"></path></svg></span> <div class="email-wrap"><span class="email-kind">Personal</span> <a${attr("href", `mailto:${profile.email}`)}>${escape_html(profile.email)}</a></div> <button class="copy-btn" type="button" aria-label="Copy personal email"><span class="copy-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.8"></rect><rect x="5" y="5" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.8"></rect></svg></span></button> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></li> <li><span class="meta-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.6v-2.2c-3.4.8-4.1-1.5-4.1-1.5a3.2 3.2 0 00-1.3-1.8c-1.1-.7 0-.7 0-.7a2.5 2.5 0 011.8 1.2 2.5 2.5 0 003.4 1 2.5 2.5 0 01.7-1.6c-2.7-.3-5.6-1.3-5.6-6a4.7 4.7 0 011.2-3.2 4.3 4.3 0 01.1-3.2s1-.3 3.3 1.2a11.3 11.3 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2a4.3 4.3 0 01.1 3.2 4.7 4.7 0 011.2 3.2c0 4.7-2.9 5.7-5.6 6a2.8 2.8 0 01.8 2.2v3.2c0 .4.2.7.8.6A12 12 0 0012 .5z"></path></svg></span> <a${attr("href", profile.github)} target="_blank" rel="noreferrer">github.com/Laasya-73</a></li></ul></div></aside>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.push(`<div class="page-shell">`);
  Navbar($$renderer);
  $$renderer.push(`<!----> <div class="layout">`);
  Sidebar($$renderer);
  $$renderer.push(`<!----> <main class="content"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></main></div> `);
  Footer($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _layout as default
};
