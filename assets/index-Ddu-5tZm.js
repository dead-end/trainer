var qt=Object.defineProperty;var Mt=(n,t,e)=>t in n?qt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var g=(n,t,e)=>Mt(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();const Ht=`/* 1. Use a more-intuitive box-sizing model */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* 2. Remove default margin */
* {
  margin: 0;
}

/* 3. Enable keyword animations */
@media (prefers-reduced-motion: no-preference) {
  html {
    interpolate-size: allow-keywords;
  }
}

body {
  /* 4. Add accessible line-height */
  line-height: 1.5;
  /* 5. Improve text rendering */
  -webkit-font-smoothing: antialiased;
}

/* 6. Improve media defaults */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

/* 7. Inherit fonts for form controls */
input,
button,
textarea,
select {
  font: inherit;
}

/* 8. Avoid text overflows */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

/* 9. Improve line wrapping */
p {
  text-wrap: pretty;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  text-wrap: balance;
}

/*
    10. Create a root stacking context
  */
#root,
#__next {
  isolation: isolate;
}
`,Ot=`:root {
  /* Tailwind blue */
  --color-blue-50: oklch(0.97 0.014 254.604);
  --color-blue-100: oklch(0.932 0.032 255.585);
  --color-blue-200: oklch(0.882 0.059 254.128);
  --color-blue-300: oklch(0.809 0.105 251.813);
  --color-blue-400: oklch(0.707 0.165 254.624);
  --color-blue-500: oklch(0.623 0.214 259.815);
  --color-blue-600: oklch(0.546 0.245 262.881);
  --color-blue-700: oklch(0.488 0.243 264.376);
  --color-blue-800: oklch(0.424 0.199 265.638);
  --color-blue-900: oklch(0.379 0.146 265.522);
  --color-blue-950: oklch(0.282 0.091 267.935);

  --color-gray-50: oklch(0.985 0.002 247.839);
  --color-gray-100: oklch(0.967 0.003 264.542);
  --color-gray-200: oklch(0.928 0.006 264.531);
  --color-gray-300: oklch(0.872 0.01 258.338);
  --color-gray-400: oklch(0.707 0.022 261.325);
  --color-gray-500: oklch(0.551 0.027 264.364);
  --color-gray-600: oklch(0.446 0.03 256.802);
  --color-gray-700: oklch(0.373 0.034 259.733);
  --color-gray-800: oklch(0.278 0.033 256.848);
  --color-gray-900: oklch(0.21 0.034 264.665);
  --color-gray-950: oklch(0.13 0.028 261.692);

  --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  /* ------------------------- */

  /*
   * Effects
   */
  --transition: 300ms;
  --shadow: var(--shadow-lg);
  --shadow-small: var(--shadow-sm);

  /*
   * Colors
   */
  --color-fg: var(--color-gray-700);
  --color-bg: #ffffff;

  --color-primary: var(--color-blue-700);
  --color-primary-hl: var(--color-blue-800);

  --color-reverse: #ffffff;
  --color-error: #700000;

  --color-table-header: var(--color-gray-600);
  --color-table-hl: var(--color-gray-50);
  --color-table-icon: var(--color-gray-200);

  /*
   * Border
   */
  --border-color: var(--color-gray-300);
  --border-color-focus: var(--color-blue-500);
  --border-color-hover: var(--color-blue-500);

  --border-radius: 0.3rem;
  --border-size: 1px;
  --border: var(--border-size) solid var(--border-color);

  /*
   * Background color
   */
  --bg-gradient-from: var(--color-gray-50);
  --bg-gradient-to: var(--color-gray-300);

  /*
   * Font sizes anfd decorations
   */
  --font-size-larger: 1.8rem;
  --font-size-large: 1.4rem;
  --font-size-medium: 1rem;
  --font-size-small: 0.9rem;

  --font-weight-bold: 600;

  /*
  * Paddings
  */
  --padding-x: 1.8rem;
  --padding-y: 1.8rem;

  --padding-input: 0.8rem;

  --table-padding-x: 1rem;

  /*
   * Gaps
   */
  --gap: 1rem;
  --gap-action: 1rem;
}

* {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: var(--font-size-medium);
}

html {
  height: 100%;
  color: var(--color-fg);
}

body {
  margin: auto;
  background-image: linear-gradient(
    var(--bg-gradient-from),
    var(--bg-gradient-to)
  );
  background-attachment: fixed;

  padding-top: 4rem;
  padding-bottom: 4rem;
}

#app {
  background-color: var(--color-bg);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}

/******************************************************************************
 * Simple classes without components
 *****************************************************************************/

.page-title {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-large);
}

footer {
  text-align: right;
  font-size: var(--font-size-small);

  border-top: var(--border);

  padding: 1.5rem 0rem;

  margin-left: var(--padding-x);
  margin-right: var(--padding-x);
}

/* --------------------- */

a {
  text-decoration: none;
}

.btn {
  color: white;
  background-color: var(--color-primary);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-small);
  transition: var(--transition);
  border: none;
  border-radius: var(--border-radius);
  padding: 0.6rem 1rem;
  box-shadow: var(--shadow);
  cursor: pointer;
}

.btn:hover {
  background-color: var(--color-primary-hl);
}

.btn:disabled {
  opacity: 0.6;
}

input,
textarea,
select {
  color: inherit;
  background-color: var(--color-bg);

  min-width: 20rem;
  padding: var(--padding-input);
  border: var(--border);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-small);
  transition: var(--transition);

  outline: none;
}

/*
TODO: style select box - padding is ignored
select {
  -webkit-appearance: initial;
}
  */

input:focus,
textarea:focus,
select:focus {
  border: var(--border-size) solid var(--border-color-focus);
  /* outline: 0px;*/
}

input:hover,
textarea:hover,
select:hover {
  border: var(--border-size) solid var(--border-color-hover);
  /*  outline: 0px;*/
}

input[disabled],
input:read-only,
textarea[disabled],
textarea:read-only,
.disabled {
  opacity: 0.6;
  background-color: var(--color-gray-50);
}

/* -------------------- */

/* ------------------------------- */

.is-border {
  border: var(--border-size) solid var(--border-color);
  border-radius: var(--border-radius);
}

.is-shadow {
  box-shadow: var(--shadow-small);
}

.is-multiline {
  white-space: pre-wrap;
}

.is-padding-input {
  padding: var(--padding-input);
}

/* TODO: padding*/

.is-padding {
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
  padding-top: var(--padding-y);
  padding-bottom: var(--padding-y);
}

.is-padding-x {
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}

/*
.is-padding-y {
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
*/
/******************************************************************************
 * 
 *****************************************************************************/

.is-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.is-column {
  display: flex;
  flex-direction: column;
}

.is-gap {
  gap: var(--gap);
}

.is-gap-small {
  gap: calc(var(--gap) / 2);
}

.is-gap-action {
  gap: var(--gap-action);
}

.is-space-between {
  justify-content: space-between;
}

.is-row-center {
  justify-content: center;
  align-items: center;
}

.is-end {
  justify-content: flex-end;
}

.is-grow {
  flex-grow: 1;
}

/*
.is-flex-wrap {
  flex-wrap: wrap;
}*/

/******************************************************************************
 * Basic text styling.
 *****************************************************************************/

.is-error {
  color: var(--color-error);
}

.is-text-bold {
  font-weight: var(--font-weight-bold);
}

.is-text-right {
  text-align: right;
}

.is-text-reverse {
  color: var(--color-reverse);
}

.is-text-larger {
  font-size: var(--font-size-larger);
}

.is-text-large {
  font-size: var(--font-size-large);
}

.is-text-medium {
  font-size: var(--font-size-medium);
}

.is-text-small {
  font-size: var(--font-size-small);
}

/******************************************************************************
 * Key value.
 *****************************************************************************/
/* TODO: as part of text ? light bold?*/
.is-key {
  font-weight: 500;
}
.is-value {
  font-style: italic;
  color: var(--color-primary);
}

/******************************************************************************
 * Grid.
 *****************************************************************************/

.is-grid-2 {
  display: grid;
  grid-gap: var(--gap);
  grid-template-columns: 1fr 1fr;
}

.is-grid-3 {
  display: grid;
  grid-gap: var(--gap);
  grid-template-columns: 1fr 1fr 1fr;
}

@media (max-width: 960px) {
  .is-grid-2,
  .is-grid-3 {
    grid-template-columns: 1fr;
  }
}

/******************************************************************************
 * Styling of markdown.
 *****************************************************************************/

.md-em {
  color: var(--color-error);
}

.md-it {
  color: var(--color-primary);
  font-style: italic;
}

.md-right {
  padding-right: 0.5rem;
}

/******************************************************************************
 * Styling of tables.
 *****************************************************************************/

table {
  border-collapse: collapse;
}

th,
td {
  padding: 0.6rem var(--table-padding-x);
  text-align: left;
}

tr {
  border-bottom: var(--border);
  transition: var(--transition);
}

tr:hover {
  background-color: var(--color-table-hl);
}

.dense td,
.dense th {
  padding: 0.4rem var(--table-padding-x);
}

/******************************************************************************
 * Definition of the container and the grid.
 * 
 * The definition contains hide-xx classes. The component is shown if the 
 * display is lager. Example:
 *
 * hide-md - hide: sm,md show: lg,xl
 *****************************************************************************/

.container {
  max-width: 1280px;
  margin: 0 auto;
}

/* large: lg */
@media (max-width: 1280px) {
  .container {
    /*
    max-width: 960px;
    // TODO: correct values ???
    */
    max-width: 1024px;
  }

  body {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}

/* medium: md */
@media (max-width: 960px) {
  .container {
    width: 100%;
  }

  body {
    padding: 0rem;
  }

  :root {
    --table-padding-x: 0.4rem;
    --padding-x: 1rem;
    --padding-y: 1rem;
  }
}

/* small: sl */
@media (max-width: 640px) {
  .container {
    width: 100%;
  }

  :root {
    --table-padding-x: 0rem;

    --padding-x: 0.4rem;
    --padding-y: 0.4rem;

    --gap-action: 0.4rem;
  }

  .is-larger-sm {
    display: none;
  }
}

@media (min-width: 641px) {
  .is-smaller-sm {
    display: none;
  }
}
`,ut=new CSSStyleSheet;ut.replace(Ht);const pt=new CSSStyleSheet;pt.replace(Ot);const x=[ut,pt],L=n=>{const t=new CustomEvent("error-msg",{detail:n});document.dispatchEvent(t)};class c extends Error{constructor(t){super(t),L(t)}}const lt=2,At=n=>{n.objectStoreNames.contains("cache")||n.createObjectStore("cache",{keyPath:"path"}),n.objectStoreNames.contains("search")||n.createObjectStore("search",{keyPath:"path"}),n.objectStoreNames.contains("admin")||n.createObjectStore("admin",{keyPath:"id"})},Ut=()=>new Promise((n,t)=>{const e=indexedDB.open("trainer",lt);e.onupgradeneeded=s=>{const o=e.result;s.oldVersion<lt&&At(o),console.log("db upgrade success!")},e.onerror=s=>{console.error(s.type),t()},e.onsuccess=()=>{const s=e.result;s.onerror=o=>{console.log(o.type)},console.log("db init success!"),n(s)}}),O=Ut(),F=async(n,t)=>(await O).transaction([n],t).objectStore(n),G=(n,t)=>new Promise((e,s)=>{const o=n.get(t);o.onsuccess=()=>{console.log("Store:",n.name,"id:",t,"get:",o.result?o.result:"NOT-FOUND"),e(o.result)},o.onerror=a=>{L(`Store: ${n.name} id: ${t} storeGet error: ${a}`),s()}}),K=(n,t)=>new Promise((e,s)=>{const o=n.put(t);o.onsuccess=()=>{console.log("Store:",n.name,"put:",t),e(t)},o.onerror=a=>{L(`Store: ${n.name} put: ${t} error: ${a}`),s()}}),X=(n,t)=>new Promise((e,s)=>{const o=n.delete(t);o.onsuccess=()=>{console.log("Store:",n.name,"delete:",t),e(o.result)},o.onerror=a=>{L(`Store: ${n.name} delete: ${t} error: ${a}`),s()}}),gt=n=>new Promise((t,e)=>{const s=n.getAll();s.onsuccess=()=>{console.log("Store:",n.name,"get all"),t(s.result)},s.onerror=o=>{L(`Store: ${n.name} get all: ${o}`),e()}}),V="admin",b=async()=>{const n=await F(V,"readonly"),t=await G(n,"github");if(t===void 0)throw new Error("Unable to get github config.");return t},Nt=async()=>{const n=await F(V,"readonly");return G(n,"github")},jt=async n=>{const t=await F(V,"readwrite");return K(t,n)},Bt=async n=>{const t=await F(V,"readwrite");return X(t,n)},ft="github";let j=Nt();const zt=async()=>{document.dispatchEvent(await j?new Event("login"):new Event("logout"))},Qt=async()=>await j!==void 0,Zt=async(n,t,e)=>{j=jt({id:ft,user:n,repo:t,token:e}),document.dispatchEvent(new Event("login"))},Ft=async()=>{await j&&(j=Bt(ft),document.dispatchEvent(new Event("logout")))},i=(n,t)=>{t||(t=document);const e=t.querySelector(n);if(!e)throw new Error(`Unable to find: ${n}`);return e},et=(n,t)=>{t||(t=document);const e=[...t.querySelectorAll(n)];if(e.length===0)throw new Error(`Unable to find: ${n}`);return e},wt=[];let Q,mt,Y,bt;const E=n=>{if(!Q||!Q.groups){const t=`Route parameter: ${n} - No parameters found: ${window.location.hash}`;throw new Error(t)}return Q.groups[n]},H=(...n)=>n.map(t=>E(t)),ct=async()=>{let n=window.location.hash||mt;if(!await Qt()&&n!==Y){window.location.hash=Y;return}const t=wt.find(o=>o.regex.test(n));t&&(Q=t.regex.exec(window.location.hash));const e=t?t.page:bt,s=document.createElement(e);i("main").replaceChildren(s)},v=(n,t)=>{wt.push({regex:n,page:t})},Gt=(n,t,e)=>{mt=n,Y=t,bt=e,window.addEventListener("hashchange",ct),window.addEventListener("DOMContentLoaded",ct)},u=n=>{var t=document.createElement("template");return t.innerHTML=n,t.content},Vt=n=>n.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;"),l=(n,...t)=>{const e=[n[0]];for(let s=1;s<n.length;s++){let o=t[s-1];typeof o!="string"&&(o=o.toString()),e.push(Vt(o)),e.push(n[s])}return e.join("")},p=class p extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.attachShadow({mode:"open"});t.adoptedStyleSheets=x,t.appendChild(this.renderComponent())}}renderComponent(){const t=l`
      <style>
        .icon {
          height: 2.5rem;
          padding: 0.3rem;
          transition: var(--transition);
          color: var(--color-primary);
          border-radius: var(--border-radius);
        }

        .icon:hover {
          color: var(--color-primary-hl);
          background-color: var(--color-table-icon);
        }

        :host(.reverse) > .icon {
          color: var(--color-reverse);
        }

        :host(.reverse) > .icon:hover {
          background-color: var(--color-primary-hl);
        }
      </style>
    `,e=u(t),s=this.getAttribute("data-icon")||"login",o=u(p.ICONX[s]);return e.appendChild(o),e}};g(p,"TMPL_LOGOUT",l`
    <svg
      class="icon"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z"
        fill-rule="evenodd"
      ></path>
    </svg>
  `),g(p,"TMPL_HOME",l`
    <svg
      class="icon"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"
      ></path>
      <path
        d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"
      ></path>
    </svg>
  `),g(p,"TMPL_ADMIN",l`
    <svg
      class="icon"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
        fill-rule="evenodd"
      ></path>
    </svg>
  `),g(p,"TMPL_BOOK",l`
    <svg
      class="icon"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z"
      ></path>
    </svg>
  `),g(p,"TMPL_DELETE",l`
    <svg
      class="icon"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
        clip-rule="evenodd"
      />
    </svg>
  `),g(p,"TMPL_UPDATE",l`
    <svg
      class="icon"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z"
      />
      <path
        d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z"
      />
    </svg>
  `),g(p,"TMPL_LIST",l`
    <svg
      class="icon"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25H5.625ZM3.75 11.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 18.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z"
      />
    </svg>
  `),g(p,"TMPL_START",l`
    <svg
      class="icon"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
        clip-rule="evenodd"
      />
    </svg>
  `),g(p,"TMPL_CACHE",l`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="icon"
    >
      <path
        d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z"
      />
    </svg>
  `),g(p,"TMPL_SEARCH",l`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="icon"
    >
      <path
        d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z"
      />
      <path
        fill-rule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z"
        clip-rule="evenodd"
      />
    </svg>
  `),g(p,"TMPL_INFO",l`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="icon"
    >
      <path
        fill-rule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
        clip-rule="evenodd"
      />
    </svg>
  `),g(p,"ICONX",{logout:p.TMPL_LOGOUT,home:p.TMPL_HOME,admin:p.TMPL_ADMIN,book:p.TMPL_BOOK,delete:p.TMPL_DELETE,update:p.TMPL_UPDATE,list:p.TMPL_LIST,start:p.TMPL_START,cache:p.TMPL_CACHE,search:p.TMPL_SEARCH,info:p.TMPL_INFO});let tt=p;class _t extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.attachShadow({mode:"open"});t.adoptedStyleSheets=x,t.appendChild(this.renderComponent()),document.addEventListener("login",this.onLogin.bind(this)),document.addEventListener("logout",this.onLogout.bind(this))}}onLogin(){this.shadowRoot&&(i("#nav-items",this.shadowRoot).style.visibility="visible")}onLogout(){this.shadowRoot&&(i("#nav-items",this.shadowRoot).style.visibility="hidden")}doLogout(){Ft()}renderComponent(){const t=l`
      <style>
        nav {
          box-shadow: var(--shadow);
        }

        .nav {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          background-color: var(--color-primary);

          border-top-left-radius: var(--border-radius);
          border-top-right-radius: var(--border-radius);

          padding-top: 1rem;
          padding-bottom: 1rem;

          margin-bottom: var(--gap);
        }
      </style>

      <nav>
        <div class="nav is-padding-x">
          <div class="is-text-reverse">
            <span class="is-larger-sm is-text-bold is-text-larger"
              >Vanilla Trainer</span
            >
            <span class="is-smaller-sm is-text-bold is-text-larger">VT</span>
          </div>
          <div id="nav-items" class="is-row is-gap-action">
            <a href="#/">
              <ui-icons class="reverse" data-icon="home"></ui-icons>
            </a>
            <a href="#/books">
              <ui-icons class="reverse" data-icon="book"></ui-icons>
            </a>
            <a href="#/cache/list">
              <ui-icons class="reverse" data-icon="cache"></ui-icons>
            </a>
            <a href="#/search">
              <ui-icons class="reverse" data-icon="search"></ui-icons>
            </a>
            <a href="#/admin">
              <ui-icons class="reverse" data-icon="admin"></ui-icons>
            </a>
            <a href="#/admin" id="logout">
              <ui-icons class="reverse" data-icon="logout"></ui-icons>
            </a>
          </div>
        </div>
      </nav>
    `,e=u(t);return i("#logout",e).onclick=this.doLogout,e}}class Jt extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.attachShadow({mode:"open"});t.adoptedStyleSheets=x,t.appendChild(this.renderComponent()),document.addEventListener("error-msg",this.onError.bind(this)),this.style.display="none"}}onError(t){if(this.shadowRoot){const e=t.detail;i("#error-msg",this.shadowRoot).textContent=e,this.style.display="block"}}onOk(){this.shadowRoot&&(i("#error-msg",this.shadowRoot).textContent="",this.style.display="none")}renderComponent(){const t=l`
      <div class="is-column is-gap is-border is-padding">
        <div class="is-error is-text-bold is-text-larg">Error</div>
        <p id="error-msg"></p>
        <div class="is-row is-gap">
          <button id="error-btn" class="btn" type="button">Ok</button>
        </div>
      </div>
    `,e=u(t);return i("#error-btn",e).onclick=this.onOk.bind(this),e}}const Wt=new RegExp(/[<>]/,"g"),Kt=[{pattern:new RegExp(/^- (.+)=#/,"g"),replace:'<span class="md-right">&bull;</span><span class="md-it">$1</span>'},{pattern:new RegExp(/^(.+)=#/,"g"),replace:'<span class="md-it">$1</span>'},{pattern:new RegExp(/#=(.+)$/,"g"),replace:'<span class="md-it">$1</span>'},{pattern:new RegExp(/^- /,"g"),replace:'<span class="md-right">&bull;</span>'}],Xt=[{pattern:new RegExp(/#([^#]+)#/,"g"),replace:'<span class="md-it">$1</span>'},{pattern:new RegExp(/\*\*(.)/,"g"),replace:'<span class="md-em">$1</span>'},{pattern:new RegExp(/\*([^*]+)\*/,"g"),replace:'<span class="md-em">$1</span>'}],ht=(n,t)=>(n.forEach(e=>{t=t.replaceAll(e.pattern,e.replace)}),t),Z=n=>{const t=n.replace(Wt,"").split(`
`);let e=[];for(const s of t)e.push(ht(Kt,s.trim()));return ht(Xt,e.join(`
`))};class Yt extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.attachShadow({mode:"open"});t.adoptedStyleSheets=x,t.appendChild(this.renderComponent())}}renderComponent(){const t=l`
      <div class="is-grid-2">
        <slot></slot>
        <div
          id="preview"
          class="is-border is-shadow is-padding-input is-multiline"
        ></div>
      </div>
    `,e=u(t),s=this.getAttribute("data-id")||"no-id",o=i(`#${s}`),a=i("#preview",e);return o.oninput=()=>{console.log("input"),a.innerHTML=Z(o.value)},e}}const vt=()=>"#/books",te=n=>`#/books/update/${n}`,A=n=>`#/book/${n}/chapters`,ee=n=>`#/book/${n}/chapters/create`,ne=(n,t)=>`#/book/${n}/chapter/${t}/update`,B=(n,t)=>`#/book/${n}/chapter/${t}/questions`,se=(n,t)=>`#/book/${n}/chapter/${t}/questions/create`,oe=(n,t,e)=>`#/book/${n}/chapter/${t}/question/${e}/update`,ae=(n,t)=>`#/book/${n}/chapter/${t}/lession-prepare`,yt=()=>"#/lession-process",ie=()=>"#",re=n=>n?`#/search/${n}`:"#/search",kt=n=>`#/cache/raw/${n}`;class nt extends HTMLElement{constructor(){super(...arguments);g(this,"questionId");g(this,"question");g(this,"doDelete")}static instance(e,s,o){const a=document.createElement("question-show");return a.questionId=e,a.question=s,a.doDelete=o,a}connectedCallback(){if(!this.shadowRoot){const e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=x,e.appendChild(this.renderComponent()),this.questionId&&this.question&&this.renderQuestion(this.questionId,this.question)}}renderQuestion(e,s,o){this.shadowRoot&&(i("#label",this.shadowRoot).textContent=`Question: ${e.idx}`,i("#quest",this.shadowRoot).innerHTML=Z(s.quest),i("#answer",this.shadowRoot).innerHTML=Z(s.answer),this.renderProgress(this.shadowRoot,o),this.renderDetails(this.shadowRoot,s),this.renderUpdateBtn(this.shadowRoot,e),this.renderDeleteBtn(this.shadowRoot,e),this.renderLocationBtn(this.shadowRoot,e))}show(e){if(this.shadowRoot){const s=e?"flex":"none",o=i("#answer",this.shadowRoot);o.parentElement&&(o.parentElement.style.display=s);const a=i("#details",this.shadowRoot);a.parentElement&&(a.parentElement.style.display=a.innerHTML?s:"none")}}renderProgress(e,s){const o=i("#progress",e);s?o.textContent=`Progress: ${s.progress} / 3`:o.style.display="none"}renderDetails(e,s){const o=i("#details",e);!s.details&&o.parentElement&&(o.parentElement.style.display="none"),o.innerHTML=s.details?Z(s.details):""}renderUpdateBtn(e,s){i('[data-icon="update"]',e).onclick=()=>{window.location.hash=oe(s.bookId,s.chapterId,s.idx)}}renderDeleteBtn(e,s){const o=i('[data-icon="delete"]',e);this.doDelete?o.onclick=()=>{this.doDelete&&this.doDelete(s)}:o.style.display="none"}renderLocationBtn(e,s){i('[data-icon="info"]',e).onclick=()=>{const o=i("#location-info",e);o.style.display==="none"?(o.style.display="block",i("#location-info",e).show(s.bookId,s.chapterId,s.idx.toString())):o.style.display="none"}}renderComponent(){const e=l`
      <style>
        .label {
          font-weight: bold;
          padding-bottom: 0.5rem;
        }
      </style>
      <div class="is-column is-gap-small">
        <location-info id="location-info" style="display: none"></location-info>
        <div class="is-grid-3">
          <div class="is-column">
            <div class="is-row is-space-between">
              <div class="label" id="label">Question</div>
              <div id="progress"></div>
            </div>
            <div
              id="quest"
              class="is-border is-shadow is-padding-input is-multiline is-grow"
            ></div>
          </div>
          <div class="is-column">
            <div class="label">Answer</div>
            <div
              id="answer"
              class="is-border is-shadow is-padding-input is-multiline is-grow"
            ></div>
          </div>
          <div class="is-column">
            <div class="label">Details</div>
            <div
              id="details"
              class="is-border is-shadow is-padding-input is-multiline is-grow"
            ></div>
          </div>
        </div>

        <div class="is-row is-end is-gap-small">
          <ui-icons data-icon="delete"></ui-icons>
          <ui-icons data-icon="update"></ui-icons>
          <ui-icons data-icon="info"></ui-icons>
        </div>
      </div>
    `;return u(e)}}class de extends HTMLElement{constructor(){super(...arguments);g(this,"fct")}connectedCallback(){if(!this.shadowRoot){const e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=x,e.appendChild(this.renderComponent()),this.style.display="none"}}onCancel(){this.shadowRoot&&(this.style.display="none")}async onOk(){if(this.shadowRoot&&this.fct){const e=i("#btn-ok",this.shadowRoot);e.disabled=!0,this.fct().finally(()=>{this.style.display="none",e.disabled=!1})}}activate(e,s,o){this.shadowRoot&&(i("#dialog-title",this.shadowRoot).textContent=e,i("#dialog-msg",this.shadowRoot).textContent=s,this.style.display="block",this.fct=o)}renderComponent(){const e=l`
      <style>
        .popup {
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
        }

        .popup-content {
          margin: auto;
          max-width: 25rem;
          background: var(--color-bg);
          color: var(--color-fg);
          margin-top: 10%;
          padding: 1.8rem;
        }

        .title {
          border-bottom: var(--border-size) solid var(--border-color);
          padding-bottom: 0.8rem;
        }
      </style>

      <div class="popup">
        <div class="popup-content is-column is-gap is-border">
          <div id="dialog-title" class="title is-text-bold is-text-large">
            title
          </div>
          <p id="dialog-msg">Message</p>
          <div class="is-row is-gap">
            <button id="btn-cancel" class="btn" type="button">Cancel</button>
            <button id="btn-ok" class="btn" type="button">Ok</button>
          </div>
        </div>
      </div>
    `,s=u(e);return i("#btn-cancel",s).onclick=this.onCancel.bind(this),i("#btn-ok",s).onclick=this.onOk.bind(this),s}}class xt extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.attachShadow({mode:"open"});t.adoptedStyleSheets=x,t.appendChild(this.renderComponent())}}attributeChangedCallback(t,e,s){this.shadowRoot&&t==="data-error"&&(i("#error",this.shadowRoot).textContent=s)}renderComponent(){const t=l`
      <div class="is-column is-gap-small">
        <label class="is-small is-text-bold" for="default-id"
          >Default Label</label
        >
        <slot></slot>
        <p class="is-error is-small" id="error"></p>
      </div>
    `,e=u(t),s=this.getAttribute("data-id")||"no-id",o=i("label",e);return o.htmlFor=s,o.textContent=this.getAttribute("data-label")||"no-label",e}}g(xt,"observedAttributes",["data-error"]);const le=()=>"books",$=()=>"books/books.json",T=n=>`books/${n}/chapters.json`,I=(n,t)=>`books/${n}/questions.${t}.json`,R=n=>/^books\/[^\/]+\/questions.[^\/]+.json$/.test(n),Ct=n=>/^books\/[^\/]+\/chapters.json$/.test(n),ce=n=>n==="books/books.json",he=n=>ce(n)||Ct(n)||R(n),ue=n=>{const t=/^books\/([^\/]+)\/chapters.json$/,e=n.match(t);if(!e)throw new c(`No matches for ${n}`);return e[1]},pe=n=>{const t=/^books\/([^\/]+)\/questions.([^\/]+).json$/,e=n.match(t);if(!e)throw new c(`No matches for ${n}`);return[e[1],e[2]]},S="cache",D="search",Et=async()=>{const n=(await O).transaction([S],"readonly").objectStore(S);return await gt(n)},ge=async()=>{const n=(await O).transaction([D],"readonly").objectStore(D);return await gt(n)},St=async n=>{const t=(await O).transaction([S],"readonly").objectStore(S);return await G(t,n)},Lt=async n=>{const t=(await O).transaction([D],"readonly").objectStore(D);return await G(t,n)},st=async(n,t)=>{const e=t?[S,D]:[S],s=(await O).transaction(e,"readwrite");await X(s.objectStore(S),n),t&&await X(s.objectStore(D),n)},Pt=async(n,t)=>{const e=t?[S,D]:[S],s=(await O).transaction(e,"readwrite");await K(s.objectStore(S),{path:n.path,data:n.data,hash:n.hash}),t&&await K(s.objectStore(D),t)};class P{constructor(){g(this,"status",2);g(this,"_message");g(this,"wrapper")}get isOk(){if(this.status===2)throw new Error("Status not set!");return this.status===0}get hasError(){if(this.status===2)throw new Error("Status not set!");return this.status===1}get message(){if(this.status!==1)throw new Error("Status is not ERROR!");if(!this._message)throw new Error("Status is ERROR but no message is set!");return this._message}get value(){if(this.status!==0)throw new Error("Status is not OK!");if(!this.wrapper)throw new Error("Value not set!");return this.wrapper.value}setOk(t){return this.status=0,this.wrapper={value:t},this}setError(t){if(t instanceof P){if(!t.hasError)throw new Error("Result has not an error!");this._message=t._message}else this._message=t;return this.status=1,this}}const _=async n=>{const t=await b(),e=T(n),s=await y(t,e);if(s.hasError)throw new c(s.message);return s.value.data},ot=async(n,t)=>{const e=await b(),s=T(n),o=await y(e,s);if(o.hasError)throw new c(o.message);const a=o.value.data.find(r=>r.id===t);if(!a)throw new c(`Not found: ${t}`);return a},fe=async(n,t)=>{const e=await b(),s=T(n),o=await y(e,s);if(o.hasError)throw new c(o.message);const a=o.value.data,r=a.findIndex(h=>h.id===t.id);if(r<0)throw new c(`Chapter not found: ${t.id}`);return a[r]=t,(await C(e,s,a,o.value.hash,`Updating chapter: ${t.id}`)).value},we=async(n,t)=>{const e=await b(),s=T(n),o=await y(e,s);if(o.hasError)throw new c(o.message);let a=o.value.data;const r=a.length;if(a=a.filter(w=>w.id!==t),r===a.length)throw new c(`Not found: ${t}`);const d=await C(e,s,a,o.value.hash,`Deleting chapter ${t}`);if(d.hasError)throw new c(d.message);const h=await Dt(e,I(n,t),"Deleting file.");if(h.hasError)throw new c(h.message);return a},me=async(n,t)=>{const e=await b(),s=T(n),o=await y(e,s);if(o.hasError)throw new c(o.message);const a=o.value.data;if(a.find(w=>w.id===t.id))throw new c(`Id already exists: ${t.id}`);a.push(t);const r=await C(e,s,a,o.value.hash,`Adding chapter: ${t.id}`);if(r.hasError)throw new c(r.message);const d=I(n,t.id),h=await C(e,d,[],void 0,"Creating chapters!");if(h.hasError)throw new c(h.message);return a},z=async(n,t)=>{const e=await b(),s=I(n,t),o=await y(e,s);if(o.hasError)throw new c(o.message);return o.value.data},at=async(n,t,e)=>(await z(n,t))[e],be=async(n,t,e,s)=>{const o=await b(),a=I(n,t),r=await y(o,a);if(r.hasError)throw new c(r.message);const d=r.value.data;d[e]=s;const h=await C(o,a,d,r.value.hash,"Updating question!");if(h.hasError)throw new c(h.message)},ve=async(n,t,e)=>{const s=await b(),o=I(n,t),a=await y(s,o);if(a.hasError)throw new c(a.message);const r=a.value.data;r.push(e);const d=await C(s,o,r,a.value.hash,"Adding question!");if(d.hasError)throw new c(d.message)},ye=async(n,t,e)=>{const s=await b(),o=I(n,t),a=await y(s,o);if(a.hasError)throw new c(a.message);const r=a.value.data.filter((h,w)=>e!==w),d=await C(s,o,r,a.value.hash,"Deleting question!");if(d.hasError)throw new c(d.message);return r},$t=(n,t,e)=>{const s={quest:n,answer:t};return e&&(s.details=e),s},ke=new RegExp(/[.,;!?()'"/&+-]/,"g"),xe=new RegExp(/[\*#=~]/,"g"),Ce=new Set(["der","die","das","ein","sich","etwas","etw","hier","instr","nom","она","оно","они"]),Ee=(n,t,e)=>{let s=n+" "+t;e&&(s=s+" "+e),s=s.replaceAll(ke," "),s=s.replaceAll(xe,"");let o=s.split(/\s+/);const a=new Set;return o.forEach(r=>{r.length>2&&!Ce.has(r)&&a.add(r.toLowerCase())}),Array.from(a).sort().join(" ")},Rt=(n,t,e)=>{const s=t.map(a=>Ee(a.quest,a.answer,a.details));return{path:n,strs:s,hash:e}},Se=n=>n.length>=10,Le=async n=>{const t=[],e=await it();for(const s of e){const o=await _(s.id);for(const a of o){const r=I(s.id,a.id),d=await Lt(r);if(!d){L(`No search index for: ${r}`);continue}for(let h=0;h<d.strs.length;h++){const w=d.strs[h];if(w.indexOf(n)>=0){const k={bookId:s.id,chapterId:a.id,idx:h},N=await at(k.bookId,k.chapterId,k.idx);if(t.push({questId:k,quest:N,strIdx:w}),Se(t))return t}}}}return t},Pe=async n=>{const t=await Lt(n);if(!t)throw new c(`Unable to get from cache: ${n}`);return JSON.stringify(t.strs,null,2)},$e=n=>window.btoa(unescape(encodeURIComponent(n))),Re=n=>decodeURIComponent(escape(window.atob(n))),J=async n=>n.statusText?n.statusText:n.text(),W=(n,t,e)=>`https://api.github.com/repos/${n}/${t}/contents/${e}`,De=async(n,t,e,s,o)=>{const a=new P;try{const r={content:$e(t),message:s};e&&(r.sha=e);const d={method:"PUT",headers:{Accept:"application/vnd.github.v3+json",authorization:`token ${o}`},body:JSON.stringify(r)},h=await fetch(n,d);if(!h.ok){const k=await J(h);return a.setError(`githubWriteContent - Url: ${n} Error: ${k}`)}const w=await h.json();return console.log(w),a.setOk(w.content.sha)}catch(r){return a.setError(`githubWriteContent - Url: ${n} Error: ${r}`)}},Te=async(n,t)=>{const e=new P;try{const s={Accept:"application/vnd.github.v3+json"};t&&(s.authorization=`token ${t}`);const o=await fetch(n,s);if(!o.ok){const d=await J(o);return e.setError(`githubReadContent - Url: ${n} Read error: ${d}`)}const a=await o.json(),r=Re(a.content);return e.setOk({content:r,hash:a.sha})}catch(s){return e.setError(`githubReadContent - Url: ${n} Error: ${s}`)}},Ie=async(n,t,e,s)=>{const o=new P;try{const a={message:e,sha:t},r={method:"DELETE",headers:{Accept:"application/vnd.github.v3+json",authorization:`token ${s}`},body:JSON.stringify(a)},d=await fetch(n,r);if(!d.ok){const h=await J(d);return o.setError(`githubDelete - Url: ${n} Error: ${h}`)}return console.log(`githubDelete - Url: ${n}`),o.setOk()}catch(a){return o.setError(`githubDelete - Url: ${n} Error: ${a}`)}},qe=async(n,t)=>{const e=new P;try{const s={Accept:"application/vnd.github.v3+json"};t&&(s.authorization=`token ${t}`);const o=await fetch(n,s);if(!o.ok){const a=await J(o);return e.setError(`githubListing - Url: ${n} Read error: ${a}`)}return e.setOk(await o.json())}catch(s){return e.setError(`githubListing - Url: ${n} Error: ${s}`)}},y=async(n,t)=>{const e=new P,s=await St(t);if(s)return e.setOk(s);const o=await Te(W(n.user,n.repo,t),n.token);if(o.hasError)return e.setError(`jsonGet - ${o.message}`);const a={path:t,data:JSON.parse(o.value.content),hash:o.value.hash},r=R(t)?Rt(t,a.data,a.hash):void 0;return Pt(a,r),e.setOk(a)},C=async(n,t,e,s,o)=>{const a=new P,r=await De(W(n.user,n.repo,t),JSON.stringify(e),s,o,n.token);if(r.hasError)return a.setError(r);const d={path:t,data:e,hash:r.value},h=R(t)?Rt(t,d.data,d.hash):void 0;return Pt(d,h),a.setOk(e)},Dt=async(n,t,e)=>{const s=new P,o=await y(n,t);if(o.hasError)return s.setError(o.message);const a=await Ie(W(n.user,n.repo,t),o.value.hash,e,n.token);return a.hasError?s.setError(a):(await st(t,R(t)),s.setOk())},it=async()=>{const n=await b(),t=await y(n,$());if(t.hasError)throw new c(t.message);return t.value.data},rt=async n=>{const t=await b(),e=await y(t,$());if(e.hasError)throw new c(e.message);const s=e.value.data.find(o=>o.id===n);if(!s)throw new c(`Book not found: ${n}`);return s},Me=async n=>{const t=await b(),e=await y(t,$());if(e.hasError)throw new c(e.message);const s=e.value.data;if(s.find(d=>d.id===n.id))throw new c(`Id already exists: ${n.id}`);s.push(n);const o=await C(t,$(),s,e.value.hash,`Adding book: ${n.id}`);if(o.hasError)throw new c(o.message);const a=T(n.id),r=await C(t,a,[],void 0,"Creating chapters!");if(r.hasError)throw new c(r.message);return o.value},He=async n=>{const t=await b(),e=await y(t,$());if(e.hasError)throw new c(e.message);const s=e.value.data,o=s.findIndex(r=>r.id===n.id);if(o<0)throw new c(`Book not found: ${n.id}`);s[o]=n;const a=await C(t,$(),s,e.value.hash,`Updating book: ${n.id}`);if(a.hasError)throw new c(a.message);return a.value},Oe=async n=>{const t=await _(n);if(t.length>0)throw new c(`Book: ${n} has chapters: ${t.length}`);const e=await b(),s=await y(e,$());if(s.hasError)throw new c(s.message);let o=s.value.data;const a=o.length;if(o=o.filter(h=>h.id!==n),a===o.length)throw new c(`Book not found: ${n}`);const r=await C(e,$(),o,s.value.hash,`Deleting book ${n}`);if(r.hasError)throw new c(r.message);const d=await Dt(e,T(n),`Deleting file for: ${n}`);if(d.hasError)throw new c(d.message);return o},f=(n,t)=>{const e=n.get(t);if(typeof e=="string")return{id:t,value:e.trim()};throw new Error(`Unknown value: ${e} for key: ${t}`)},q=n=>{et("ui-field",n).forEach(t=>{t.removeAttribute("data-error")})},dt=(n,t,e)=>{i(`ui-field[data-id="${t}"]`,n).setAttribute("data-error",e)},M=n=>et("ui-field",n).find(t=>t.hasAttribute("data-error")),m=(n,t)=>t.value?!0:(dt(n,t.id,"Please enter a value!"),!1),Tt=(n,t)=>/^[-_a-zA-Z0-9.]+$/.test(t.value)?!0:(dt(n,t.id,"Please enter an id value!"),!1),Ae=(n,t,e)=>t.value.length<e?(dt(n,t.id,`Input has to be at least ${e} characters!`),!1):!0;class Ue extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const t=E("bookId");i("#location-info").show(t);const e=await rt(t);i("#id").value=e.id,i("#title").value=e.title,i("#desc").value=e.description}async handleSubmit(t){t.preventDefault();const e=t.target,s=new FormData(e),o=f(s,"id"),a=f(s,"title"),r=f(s,"desc");q(e),m(e,a),m(e,r);const d=i("button",e);M(e)||(d.disabled=!0,He({id:o.value,title:a.value,description:r.value}).then(()=>{window.location.hash=vt()}).finally(()=>{d.disabled=!1}))}renderPage(){const t=l`
      <div class="is-column is-gap">
        <div class="page-title">Update Book</div>
        <location-info id="location-info"></location-info>
        <form class="is-column is-gap">
          <ui-field data-id="id" data-label="Id">
            <input id="id" name="id" type="text" readonly />
          </ui-field>
          <ui-field data-id="title" data-label="Title">
            <input id="title" name="title" type="text" />
          </ui-field>
          <ui-field data-id="desc" data-label="Description">
            <textarea id="desc" name="desc" rows="4"></textarea>
          </ui-field>
          <div class="is-row is-gap">
            <a href="#/books" class="btn">Cancel</a>
            <button class="btn" type="submit">Update</button>
          </div>
        </form>
      </div>
    `,e=u(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}class Ne extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage())}renderPage(){const t=l`
      <div class="is-column is-gap">
        <div class="page-title">Welcome to Vanilla Trainer</div>
        <lession-continue></lession-continue>
      </div>
    `;return u(t)}}class je extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage())}renderPage(){const t=l`
      <div class="page-title">Page not found</div>
      <p class="is-error">Sorry, the page was not found!</p>
    `;return u(t)}}class Be extends HTMLElement{connectedCallback(){this.hasChildNodes()||(this.appendChild(this.renderPage()),document.addEventListener("logout",this.onLogout.bind(this))),this.getAdmin(),this.setEdit(!1)}handleSubmit(t){t.preventDefault();const e=t.target,s=new FormData(e),o=f(s,"user"),a=f(s,"repo"),r=f(s,"token");q(e),m(e,o),m(e,a),m(e,r);const d=i("button",e);M(e)||(d.disabled=!0,Zt(o.value,a.value,r.value).finally(()=>{this.setEdit(!1),d.disabled=!1}))}async getAdmin(){const t=await b();i("#user").value=t.user,i("#repo").value=t.repo,i("#token").value=t.token}onEdit(){this.setEdit(!0)}setEdit(t){i("#user").disabled=!t,i("#repo").disabled=!t,i("#token").disabled=!t,i("#admin-edit").disabled=t,i("#admin-save").disabled=!t}onLogout(){this.getAdmin()}renderPage(){const t=l`
      <div class="is-column is-gap">
        <div class="page-title">Administration</div>
        <form class="is-column is-gap">
          <ui-field data-id="user" data-label="Github User">
            <input id="user" name="user" type="text" />
          </ui-field>

          <ui-field data-id="repo" data-label="Github Repository">
            <input id="repo" name="repo" type="text" />
          </ui-field>

          <ui-field data-id="token" data-label="Token">
            <input id="token" name="token" type="password" />
          </ui-field>
          <div class="is-row is-gap">
            <button id="admin-edit" class="btn" type="button">Edit</button>
            <button id="admin-save" class="btn" type="submit">Save</button>
          </div>
        </form>
      </div>
    `,e=u(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),i("#admin-edit",e).onclick=this.onEdit.bind(this),e}}class ze extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const t=i("#confirm-dialog"),e=(await it()).map(s=>this.renderBook(s,t));i("tbody").replaceChildren(...e)}onDelete(t,e){return()=>{t.activate("Delete Book",`Do you realy want to delete the book: ${e}?`,this.getDeleteFct(e))}}getDeleteFct(t){return async()=>{await Oe(t),this.render()}}renderPage(){const t=l`
      <div class="is-column is-gap">
        <div class="page-title">Book List</div>
        <table>
          <thead>
            <tr>
              <th class="is-larger-sm">Id</th>
              <th>Title</th>
              <th class="is-larger-sm">Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div class="is-row is-gap">
          <a href="#/books/create" class="btn">Create</a>
          <a href="#/cache/raw/books/books.json" class="btn">Cache</a>
        </div>
      </div>
    `;return u(t)}renderBook(t,e){const s=l`
      <tr>
        <td class="is-larger-sm">${t.id}</td>
        <td>${t.title}</td>
        <td class="is-larger-sm">${t.description}</td>
        <td data-id="actions">
          <div class="is-row is-gap-action">
            <ui-icons data-icon="delete"></ui-icons>
            <ui-icons data-icon="update"></ui-icons>
            <ui-icons data-icon="list"></ui-icons>
          </div>
        </td>
      </tr>
    `,o=u(s);return i('[data-icon="delete"]',o).onclick=this.onDelete(e,t.id).bind(this),i('[data-icon="update"]',o).onclick=()=>{window.location.hash=te(t.id)},i('[data-icon="list"]',o).onclick=()=>{window.location.hash=A(t.id)},o}}class Qe extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage())}async handleSubmit(t){t.preventDefault();const e=t.target,s=new FormData(e),o=f(s,"id"),a=f(s,"title"),r=f(s,"desc");q(e),m(e,o)&&Tt(e,o),m(e,a),m(e,r);const d=i("button",e);M(e)||(console.log("id",o,"title",a,"desc",r),d.disabled=!0,Me({id:o.value,title:a.value,description:r.value}).then(()=>{window.location.hash=vt()}).finally(()=>{d.disabled=!1}))}renderPage(){const t=l`
      <div class="is-column is-gap">
        <div class="page-title">Create Book</div>
        <form class="is-column is-gap">
          <ui-field data-id="id" data-label="Id">
            <input id="id" name="id" type="text" />
          </ui-field>
          <ui-field data-id="title" data-label="Title">
            <input id="title" name="title" type="text" />
          </ui-field>
          <ui-field data-id="desc" data-label="Description">
            <textarea id="desc" name="desc" rows="4"></textarea>
          </ui-field>
          <div class="is-row is-gap">
            <a href="#/books" class="btn">Cancel</a>
            <button class="btn" type="submit">Create</button>
          </div>
        </form>
      </div>
    `,e=u(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}class Ze extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const t=E("bookId"),e=i("#confirm-dialog");i("#location-info").show(t),this.addLinks(t);const s=[];(await _(t)).forEach(a=>{s.push(this.renderEntry(t,a,e))}),i("tbody").replaceChildren(...s)}addLinks(t){i("#chapter-create-link").href=ee(t),i("#chapter-cache-link").href=kt(T(t))}onDelete(t,e,s){return()=>{t.activate("Delete Chapter",`Do you realy want to delete the chapter: ${s}?`,this.getDeleteFct(e,s))}}getDeleteFct(t,e){return async()=>{we(t,e).then(()=>{this.render()})}}renderPage(){const t=l`
      <div class="is-column is-gap">
        <div class="page-title">Chapter List</div>
        <location-info id="location-info"></location-info>
        <table>
          <thead>
            <tr>
              <th class="is-larger-sm">Id</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div class="is-row is-gap">
          <a href="#/books" class="btn">Books</a>
          <a href="#" class="btn" id="chapter-create-link">Create</a>
          <a href="#/" class="btn" id="chapter-cache-link">Cache</a>
        </div>
      </div>
    `;return u(t)}renderEntry(t,e,s){const o=l`
      <tr>
        <td class="is-larger-sm">${e.id}</td>
        <td>${e.title}</td>
        <td data-id="actions">
          <div class="is-row is-gap-action">
            <ui-icons data-icon="delete"></ui-icons>
            <ui-icons data-icon="update"></ui-icons>
            <ui-icons data-icon="list"></ui-icons>
            <ui-icons data-icon="start"></ui-icons>
          </div>
        </td>
      </tr>
    `,a=u(o);return i('[data-icon="delete"]',a).onclick=this.onDelete(s,t,e.id).bind(this),i('[data-icon="update"]',a).onclick=()=>{window.location.hash=ne(t,e.id)},i('[data-icon="list"]',a).onclick=()=>{window.location.hash=B(t,e.id)},i('[data-icon="start"]',a).onclick=()=>{window.location.hash=ae(t,e.id)},a}}class Fe extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}render(){const t=E("bookId");i("#location-info").show(t);const e=A(t);i("#chapter-list-link",this).href=e}async handleSubmit(t){t.preventDefault();const e=E("bookId"),s=t.target,o=new FormData(s),a=f(o,"id"),r=f(o,"title");if(q(s),m(s,a)&&Tt(s,a),m(s,r),!M(s)){const d=i("#btn-submit",s);d.disabled=!0,me(e,{id:a.value,title:r.value}).then(()=>{window.location.hash=A(e)}).finally(()=>{d.disabled=!1})}}renderPage(){const t=l`
      <div class="is-column is-gap">
        <div class="page-title">Create Chapter</div>
        <location-info id="location-info"></location-info>
        <form class="is-column is-gap">
          <ui-field data-id="id" data-label="Id">
            <input id="id" name="id" type="text" />
          </ui-field>
          <ui-field data-id="title" data-label="Title">
            <input id="title" name="title" type="text" />
          </ui-field>
          <div class="is-row is-gap">
            <a href="#" class="btn" id="chapter-list-link">Cancel</a>
            <button class="btn" type="submit" id="btn-submit">Create</button>
          </div>
        </form>
      </div>
    `,e=u(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}class Ge extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const t=E("bookId"),e=E("chapterId");i("#location-info").show(t,e);const s=A(t);i("#chapter-list-link",this).href=s;const o=await ot(t,e);i("#id").value=o.id,i("#title").value=o.title}async handleSubmit(t){t.preventDefault();const e=E("bookId"),s=t.target,o=new FormData(s),a=f(o,"id"),r=f(o,"title");if(q(s),m(s,r),!M(s)){const d=i("#btn-submit",s);d.disabled=!0,fe(e,{id:a.value,title:r.value}).then(()=>{window.location.hash=A(e)}).finally(()=>{d.disabled=!1})}}renderPage(){const t=l`
      <div class="is-column is-gap">
        <div class="page-title">Update Chapter</div>
        <location-info id="location-info"></location-info>
        <form class="is-column is-gap">
          <ui-field data-id="id" data-label="Id">
            <input id="id" name="id" type="text" readonly />
          </ui-field>
          <ui-field data-id="title" data-label="Title">
            <input id="title" name="title" type="text" />
          </ui-field>
          <div class="is-row is-gap">
            <a href="#/books" class="btn" id="chapter-list-link">Cancel</a>
            <button class="btn" type="submit" id="btn-submit">Update</button>
          </div>
        </form>
      </div>
    `,e=u(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}class Ve extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const[t,e]=H("bookId","chapterId");i("#location-info").show(t,e),this.addLinks(t,e);const s=await z(t,e),o=[];s.forEach((a,r)=>{o.push(nt.instance({bookId:t,chapterId:e,idx:r},a,this.doDelete.bind(this)))}),i('[data-id="questions"]').replaceChildren(...o)}addLinks(t,e){i("#question-create-link").href=se(t,e),i("#question-cache-link").href=kt(I(t,e)),i("#chapter-list-link").href=A(t)}doDelete(t){i("#confirm-dialog").activate("Delete Question",`Do you realy want to delete the question: ${t.idx}?`,this.getDeleteFct(t))}getDeleteFct(t){return async()=>{ye(t.bookId,t.chapterId,t.idx).then(()=>{this.render()})}}renderPage(){const t=l`
      <div class="is-column is-gap">
        <div class="page-title">Question List</div>
        <location-info id="location-info"></location-info>
        <div data-id="questions"></div>
        <div class="is-row is-gap-action">
          <a href="#" class="btn" id="chapter-list-link">Chapters</a>
          <a href="#" class="btn" id="question-create-link">Create</a>
          <a href="#" class="btn" id="question-cache-link">Cache</a>
        </div>
      </div>
    `;return u(t)}}class _e extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}render(){const[t,e]=H("bookId","chapterId");i("#location-info").show(t,e),i("#question-list-link",this).href=B(t,e)}async handleSubmit(t){t.preventDefault();const[e,s]=H("bookId","chapterId"),o=t.target,a=new FormData(o),r=f(a,"quest"),d=f(a,"answer"),h=f(a,"details");if(q(o),m(o,r),m(o,d),!M(o)){const w=i("#btn-submit",o);w.disabled=!0;const k=$t(r.value,d.value,h.value);ve(e,s,k).then(()=>{window.location.hash=B(e,s)}).finally(()=>{w.disabled=!1})}}renderPage(){const t=l`
      <div class="is-column is-gap">
        <div class="page-title">Create Question</div>
        <location-info id="location-info"></location-info>
        <form class="is-column is-gap">
          <ui-field data-id="quest" data-label="Question">
            <preview-field data-id="quest">
              <textarea id="quest" name="quest" rows="4"></textarea>
            </preview-field>
          </ui-field>

          <ui-field data-id="answer" data-label="Answer">
            <preview-field data-id="answer">
              <textarea id="answer" name="answer" rows="4"></textarea>
            </preview-field>
          </ui-field>

          <ui-field data-id="details" data-label="Details">
            <preview-field data-id="details">
              <textarea id="details" name="details" rows="4"></textarea>
            </preview-field>
          </ui-field>

          <div class="is-row is-gap">
            <a href="#" class="btn" id="question-list-link">Cancel</a>
            <button class="btn" type="submit" id="btn-submit">Create</button>
          </div>
        </form>
      </div>
    `,e=u(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}class Je extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const[t,e,s]=H("bookId","chapterId","idx");i("#location-info").show(t,e,s),i("#question-list-link",this).href=B(t,e);const o=await at(t,e,parseInt(s));this.setValue("#quest",o.quest),this.setValue("#answer",o.answer),this.setValue("#details",o.details||"")}setValue(t,e){const s=i(t);s.value=e,s.dispatchEvent(new Event("input"))}async handleSubmit(t){t.preventDefault();const[e,s,o]=H("bookId","chapterId","idx"),a=t.target,r=new FormData(a),d=f(r,"quest"),h=f(r,"answer"),w=f(r,"details");if(q(a),m(a,d),m(a,h),!M(a)){const k=i("#btn-submit",a);k.disabled=!0;const N=$t(d.value,h.value,w.value);be(e,s,parseInt(o),N).then(()=>{window.location.hash=B(e,s)}).finally(()=>{k.disabled=!1})}}renderPage(){const t=l`
      <div class="is-column is-gap">
        <div class="page-title">Update Question</div>
        <location-info id="location-info"></location-info>
        <form class="is-column is-gap">
          <ui-field data-id="quest" data-label="Question">
            <preview-field data-id="quest">
              <textarea id="quest" name="quest" rows="4"></textarea>
            </preview-field>
          </ui-field>

          <ui-field data-id="answer" data-label="Answer">
            <preview-field data-id="answer">
              <textarea id="answer" name="answer" rows="4"></textarea>
            </preview-field>
          </ui-field>

          <ui-field data-id="details" data-label="Details">
            <preview-field data-id="details">
              <textarea id="details" name="details" rows="4"></textarea>
            </preview-field>
          </ui-field>

          <div class="is-row is-gap">
            <a href="#" class="btn" id="question-list-link">Cancel</a>
            <button class="btn" type="submit" id="btn-submit">Update</button>
          </div>
        </form>
      </div>
    `,e=u(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}const We=(n,t)=>Math.floor(Math.random()*(t-n+1)+n),Ke=n=>{for(let t=0;t<n.length;t++){const e=We(0,n.length-1);if(t===e)continue;const s=n[t];n[t]=n[e],n[e]=s}},U="lession",Xe=(n,t,e)=>{if(n.length==0)return;const s=n.map(a=>({questionId:a,progress:t}));Ke(s);const o={learning:s,learned:[],reverse:e};localStorage.setItem(U,JSON.stringify(o))},Ye=()=>localStorage.getItem(U)!=null,tn=()=>{const n=localStorage.getItem(U);if(n)return JSON.parse(n)},en=n=>n.learning.length>0?(localStorage.setItem(U,JSON.stringify(n)),!0):(localStorage.removeItem(U),!1),nn=()=>{localStorage.removeItem(U)},sn=n=>{const t=[0,0,0,n.learned.length];return n.learning.forEach(e=>{if(e.progress>2)throw Error(`Invalid progress ${e.progress}`);t[e.progress]++}),t},on=n=>{let t=0;return t+=n[0]*3,t+=n[1]*2,t+=n[2]*1,t};class an extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const[t,e]=H("bookId","chapterId"),s=await z(t,e);s.length===0&&(L("The chapter has no questions!"),i("#btn-start").disabled=!0),this.addLessionInfo(t,e,s)}async handleSubmit(t){t.preventDefault();const e=t.target,s=new FormData(e),o=f(s,"correct"),a=f(s,"reverse"),[r,d]=H("bookId","chapterId"),w=(await z(r,d)).map((k,N)=>({bookId:r,chapterId:d,idx:N}));Xe(w,parseInt(o.value),a.value==="true"),window.location.hash=yt()}async addLessionInfo(t,e,s){const o=await rt(t),a=await ot(t,e);i("#lession-info").update([{key:"Book",value:o.title},{key:"Chapter",value:a.title},{key:"Length",value:s.length.toString()}])}renderPage(){const t=l`
      <div class="is-column is-gap">
        <div class="page-title">Lession prepare</div>

        <key-values id="lession-info"></key-values>

        <form class="is-column is-gap">
          <ui-field data-id="correct" data-label="Correct Answers">
            <select name="correct" id="correct">
              <option value="0">0</option>
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </ui-field>
          <ui-field data-id="reverse" data-label="Reverse Answers">
            <select name="reverse" id="reverse">
              <option value="true">True</option>
              <option value="false" selected>False</option>
            </select>
          </ui-field>

          <div class="is-row is-gap">
            <a href="#" class="btn" id="chapter-list-link">Cancel</a>
            <button class="btn" type="submit" id="btn-start">Start</button>
          </div>
        </form>
      </div>
    `,e=u(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}class rn extends HTMLElement{constructor(){super(...arguments);g(this,"lession");g(this,"questionProgress");g(this,"onCorrect",()=>{this.update(this.questionProgress.progress+1)})}connectedCallback(){this.hasChildNodes()||(this.appendChild(this.renderPage()),this.load())}load(){if(this.lession=tn(),!this.lession){this.setStateRunning(!1),L("No lession found!");return}this.setStateRunning(!0),this.next()}next(){if(this.lession){this.addProgressInfo(sn(this.lession));const e=this.lession.learning.shift();if(e)this.questionProgress=e,this.setQuestion(this.questionProgress.questionId,this.questionProgress),this.setStateQuestion(!0);else{this.setStateRunning(!1);return}this.questionProgress&&i("location-info").show(this.questionProgress.questionId.bookId,this.questionProgress.questionId.chapterId,this.questionProgress.questionId.idx.toString())}}async update(e){this.questionProgress&&this.lession&&(this.questionProgress.progress=e,this.questionProgress.progress<3?this.lession.learning.push(this.questionProgress):this.lession.learned.push(this.questionProgress),en(this.lession),this.next())}onShow(){this.setStateQuestion(!1)}onWrong(){this.update(0)}onLearned(){this.update(3)}onSkip(){this.update(this.questionProgress.progress)}onStop(){window.location.hash=ie()}setStateQuestion(e){this.doShow('[data-show="ask"]',e),this.doShow('[data-show="show"]',!e),i("#question-show").show(!e)}setStateRunning(e){this.doShow('[data-show="running"]',e),e||(this.doShow('[data-show="ask"]',!1),this.doShow('[data-show="show"]',!1))}doShow(e,s){et(e).forEach(o=>{const a=o.dataset.display||"block";o.style.display=s?a:"none"})}async setQuestion(e,s){const o=await at(e.bookId,e.chapterId,e.idx);i("#question-show").renderQuestion(e,o,s)}addProgressInfo(e){i("#progress-info").update([{key:"Unlearned",value:e[0].toString()},{key:"One correct",value:e[1].toString()},{key:"Two correct",value:e[2].toString()},{key:"Learned",value:e[3].toString()},{key:"Total",value:on(e).toString()}])}renderPage(){const e=l`
      <div class="is-column is-gap">
        <div class="page-title">Lession Process</div>

        <location-info id="location-info"></location-info>
        <key-values id="progress-info"></key-values>

        <question-show id="question-show" data-show="running"></question-show>

        <div class="is-row is-gap">
          <button class="btn" id="btn-correct" data-show="show">Correct</button>
          <button class="btn" id="btn-wrong" data-show="show">Wrong</button>
          <button class="btn" id="btn-skip" data-show="show">Skip</button>
          <button class="btn" id="btn-learned" data-show="show">Learned</button>
          <button class="btn" id="btn-show" data-show="ask">Show</button>
          <button class="btn" id="btn-stop">End</button>
        </div>
      </div>
    `,s=u(e);return[{id:"#btn-show",fct:this.onShow},{id:"#btn-correct",fct:this.onCorrect},{id:"#btn-wrong",fct:this.onWrong},{id:"#btn-skip",fct:this.onSkip},{id:"#btn-learned",fct:this.onLearned},{id:"#btn-stop",fct:this.onStop}].forEach(o=>{i(o.id,s).onclick=o.fct.bind(this)}),s}}const dn=async()=>{const n=[],t=await it();for(const e of t){const s=await _(e.id);for(const o of s)n.push(z(e.id,o.id))}await Promise.all(n)},ln=async n=>{const t=await St(n);if(!t)throw new c(`Unable to get from cache: ${n}`);return JSON.stringify(t.data,null,2)},It=async(n,t,e)=>{const s=await qe(W(t.user,t.repo,e),t.token);if(s.hasError){n.error=`cacheListing - ${s.message}`;return}n.listing.push(...s.value);const o=[];for(const a of s.value)a.type==="dir"&&o.push(It(n,t,a.path));await Promise.all(o)},cn=async()=>{const n=await b(),t={error:void 0,listing:[]};if(await It(t,n,le()),t.error){L(t.error);return}const e=await Et();for(const s of e){const o=t.listing.find(a=>a.path===s.path);(!o||s.hash!==o.sha)&&await st(s.path,!0)}};class hn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}onCacheLoad(){i("#confirm-dialog").activate("Load Cache","Do you realy want to load all files?",async()=>{await dn(),this.render()})}onCacheCheck(){i("#confirm-dialog").activate("Check Cache","Do you realy want to check all files?",async()=>{await cn(),this.render()})}getHash(t){return t.substring(0,6)}getSearchHash(t,e){return R(t)?e?this.getHash(e.hash):"missing":""}async render(){const t=i("#confirm-dialog"),e=await Et(),s=await ge(),o=e.map(a=>this.renderEntry(a,s,t));i("tbody").replaceChildren(...o)}onDelete(t,e){return()=>{t.activate("Delete Cache Entry",`Do you realy want to delete the cache entry: ${e}?`,async()=>{await st(e,R(e)),this.render()})}}renderPage(){const t=l`
      <div class="is-column is-gap">
        <div class="page-title">Cache Entries</div>
        <table>
          <thead>
            <tr>
              <th>Path</th>
              <th>Cache Hash</th>
              <th>Search Hash</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div class="is-row is-gap">
          <a href="#/books" class="btn">Books</a>
          <button id="cache-load" class="btn">Load</button>
          <button id="cache-check" class="btn">Check</button>
        </div>
      </div>
    `,e=u(t);return i("#cache-load",e).onclick=this.onCacheLoad.bind(this),i("#cache-check",e).onclick=this.onCacheCheck.bind(this),e}renderEntry(t,e,s){const o=this.getHash(t.hash),a=e.find(w=>w.path===t.path),r=this.getSearchHash(t.path,a),d=l`
      <tr>
        <td>${t.path}</td>
        <td>${o}</td>
        <td>${r}</td>
        <td>
          <div class="is-row is-gap-action">
            <ui-icons data-icon="delete"></ui-icons>
          </div>
        </td>
      </tr>
    `,h=u(d);return i('[data-icon="delete"]',h).onclick=this.onDelete(s,t.path).bind(this),h}}class un extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const t=E("path");if(!he(t)){L(`Path is not valid ${t}`);return}this.doCache(t),this.doSearch(t)}async doCache(t){const e=i("#location-info");if(R(t)){const[s,o]=pe(t);e.show(s,o)}else if(Ct(t)){const s=ue(t);e.show(s)}else e.hide();i("#cache").show("Cache",t,await ln(t))}async doSearch(t){const e=i("#search");if(R(t)){e.show("Search",t,await Pe(t));return}e.hide()}renderPage(){const t=l`
      <div class="is-column is-gap">
        <div class="page-title">Cache Raw</div>
        <location-info id="location-info"></location-info>

        <json-show id="cache"></json-show>
        <json-show id="search"></json-show>

        <div class="is-row is-gap">
          <button class="btn" id="btn-cancel">Back</button>
        </div>
      </div>
    `,e=u(t);return i("#btn-cancel",e).onclick=()=>{history.back()},e}}class pn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const t=E("searchStr");if(!t)return;const e=decodeURI(t);if(e.length<3)return;i("#search").value=e;const s=[],o=await Le(e.toLowerCase());i('[data-id="num"]').innerText=o.length===0?"Nothing found!":`Numebr of results: ${o.length}`,o.forEach(a=>{s.push(nt.instance(a.questId,a.quest))}),i('[data-id="questions"]').replaceChildren(...s)}async handleSubmit(t){t.preventDefault();const e=t.target,s=new FormData(e),o=f(s,"search");q(e),m(e,o)&&Ae(e,o,3),M(e)||(window.location.hash=re(encodeURI(o.value)))}renderPage(){const t=l`
      <div class="is-column is-gap">
        <div class="page-title">Search</div>
        <form class="is-column is-gap">
          <ui-field data-id="search" data-label="Search text">
            <input id="search" name="search" type="text" />
          </ui-field>

          <div class="is-row is-gap">
            <button class="btn" type="submit">Search</button>
          </div>
        </form>
        <div
          data-id="num"
          class="is-text-bold is-text-right is-text-small"
        ></div>
        <div data-id="questions"></div>
      </div>
    `,e=u(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}class gn extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.attachShadow({mode:"open"});t.adoptedStyleSheets=x,t.appendChild(this.renderComponent())}}show(t,e,s){this.shadowRoot&&(i("#wrapper",this.shadowRoot).style.display="flex",i("#title",this.shadowRoot).innerText=t,i("#path",this.shadowRoot).innerText=e,i("#content",this.shadowRoot).innerText=s)}hide(){this.style.display="none"}renderComponent(){const t=l`
      <style>
        code {
          white-space: pre;
        }
      </style>

      <div class="is-column is-gap-small" id="wrapper" style="display: none">
        <div class="is-text-bold" id="title"></div>
        <div>
          <span class="is-key">Path</span>
          <span class="is-value" id="path"></span>
        </div>
        <code class="is-border is-shadow is-padding-input" id="content"></code>
      </div>
    `;return u(t)}}class fn extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.attachShadow({mode:"open"});t.adoptedStyleSheets=x,t.appendChild(this.renderComponent())}}update(t){if(this.shadowRoot){const e=t.map(s=>this.renderData(s));i("#wrapper",this.shadowRoot).replaceChildren(...e)}}renderComponent(){const t=l`
      <style>
        .wrapper {
          display: grid;
          grid-gap: var(--gap-small);
          grid-template-columns: 1fr 1fr 1fr;
        }
      </style>
      <div id="wrapper" class="wrapper"></div>
    `;return u(t)}renderData(t){const e=l`
      <div class="is-row is-gap-small">
        <div class="is-key">${t.key}</div>
        <div class="is-value">${t.value}</div>
      </div>
    `;return u(e)}}class wn extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.attachShadow({mode:"open"});t.adoptedStyleSheets=x,t.appendChild(this.renderComponent())}}async show(t,e,s){if(this.shadowRoot){const o=[],a=await rt(t);if(o.push({key:"Book",value:a.title}),e){const r=await ot(t,e);o.push({key:"Chapter",value:r.title})}s&&o.push({key:"Question",value:s}),i("#info",this.shadowRoot).update(o)}}hide(){this.style.display="none"}renderComponent(){const t=l` <key-values id="info"></key-values> `;return u(t)}}class mn extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.attachShadow({mode:"open"});t.adoptedStyleSheets=x,t.appendChild(this.renderComponent())}this.render()}render(){Ye()?this.style.display="block":this.style.display="none"}onContinue(){window.location.hash=yt()}onEnd(){nn(),this.style.display="none"}renderComponent(){const t=l`
      <div class="is-row is-gap">
        <button class="btn" id="btn-continue">Continue</button>
        <button class="btn" id="btn-end">End</button>
      </div>
    `,e=u(t);return i("#btn-continue",e).onclick=this.onContinue.bind(this),i("#btn-end",e).onclick=this.onEnd.bind(this),e}}document.adoptedStyleSheets=x;v(/^#\/$/,"index-page");v(/^#\/admin$/,"admin-page");v(/^#\/books$/,"book-list-page");v(/^#\/books\/create$/,"book-create-page");v(/^#\/books\/update\/(?<bookId>[^\/]+)$/,"book-update-page");v(/^#\/book\/(?<bookId>[^\/]+)\/chapters$/,"chapter-list-page");v(/^#\/book\/(?<bookId>[^\/]+)\/chapters\/create$/,"chapter-create-page");v(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/update$/,"chapter-update-page");v(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/questions$/,"question-list-page");v(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/questions\/create$/,"question-create-page");v(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/question\/(?<idx>[^\/]+)\/update$/,"question-update-page");v(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/lession-prepare$/,"lession-prepare-page");v(/^#\/lession-process$/,"lession-process-page");v(/^#\/cache\/list$/,"cache-list-page");v(/^#\/cache\/raw\/(?<path>.*)$/,"cache-raw-page");v(/^#\/search(\/(?<searchStr>[^\/]+))?$/,"search-page");customElements.define("navi-gation",_t);customElements.define("error-msg",Jt);customElements.define("confirm-dialog",de);customElements.define("question-show",nt);customElements.define("key-values",fn);customElements.define("location-info",wn);customElements.define("json-show",gn);customElements.define("lession-continue",mn);customElements.define("ui-field",xt);customElements.define("preview-field",Yt);customElements.define("ui-icons",tt);customElements.define("not-found-page",je);customElements.define("index-page",Ne);customElements.define("admin-page",Be);customElements.define("cache-list-page",hn);customElements.define("cache-raw-page",un);customElements.define("search-page",pn);customElements.define("book-list-page",ze);customElements.define("book-create-page",Qe);customElements.define("book-update-page",Ue);customElements.define("chapter-list-page",Ze);customElements.define("chapter-create-page",Fe);customElements.define("chapter-update-page",Ge);customElements.define("question-list-page",Ve);customElements.define("question-create-page",_e);customElements.define("question-update-page",Je);customElements.define("lession-prepare-page",an);customElements.define("lession-process-page",rn);Gt("#/","#/admin","not-found-page");zt();
