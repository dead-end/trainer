var qt=Object.defineProperty;var Mt=(n,e,t)=>e in n?qt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var p=(n,e,t)=>Mt(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const Tt=`/* 1. Use a more-intuitive box-sizing model */
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
`,ht=new CSSStyleSheet;ht.replace(Tt);const ut=new CSSStyleSheet;ut.replace(Ot);const k=[ht,ut],S=n=>{const e=new CustomEvent("error-msg",{detail:n});document.dispatchEvent(e)};class h extends Error{constructor(e){super(e),S(e)}}const lt=2,Nt=n=>{n.objectStoreNames.contains("cache")||n.createObjectStore("cache",{keyPath:"path"}),n.objectStoreNames.contains("search")||n.createObjectStore("search",{keyPath:"path"}),n.objectStoreNames.contains("admin")||n.createObjectStore("admin",{keyPath:"id"})},Ht=()=>new Promise((n,e)=>{const t=indexedDB.open("trainer",lt);t.onupgradeneeded=s=>{const o=t.result;s.oldVersion<lt&&Nt(o),console.log("db upgrade success!")},t.onerror=s=>{console.error(s.type),e()},t.onsuccess=()=>{const s=t.result;s.onerror=o=>{console.log(o.type)},console.log("db init success!"),n(s)}}),O=Ht(),B=async(n,e)=>(await O).transaction([n],e).objectStore(n),z=(n,e)=>new Promise((t,s)=>{const o=n.get(e);o.onsuccess=()=>{console.log("Store:",n.name,"id:",e,"get:",o.result?o.result:"NOT-FOUND"),t(o.result)},o.onerror=a=>{S(`Store: ${n.name} id: ${e} storeGet error: ${a}`),s()}}),K=(n,e)=>new Promise((t,s)=>{const o=n.put(e);o.onsuccess=()=>{console.log("Store:",n.name,"put:",e),t(e)},o.onerror=a=>{S(`Store: ${n.name} put: ${e} error: ${a}`),s()}}),Y=(n,e)=>new Promise((t,s)=>{const o=n.delete(e);o.onsuccess=()=>{console.log("Store:",n.name,"delete:",e),t(o.result)},o.onerror=a=>{S(`Store: ${n.name} delete: ${e} error: ${a}`),s()}}),pt=n=>new Promise((e,t)=>{const s=n.getAll();s.onsuccess=()=>{console.log("Store:",n.name,"get all"),e(s.result)},s.onerror=o=>{S(`Store: ${n.name} get all: ${o}`),t()}}),Q="admin",m=async()=>{const n=await B(Q,"readonly"),e=await z(n,"github");if(e===void 0)throw new Error("Unable to get github config.");return e},Gt=async()=>{const n=await B(Q,"readonly");return z(n,"github")},Ft=async n=>{const e=await B(Q,"readwrite");return K(e,n)},Ut=async n=>{const e=await B(Q,"readwrite");return Y(e,n)},gt="github";let G=Gt();const _t=async()=>{document.dispatchEvent(await G?new Event("login"):new Event("logout"))},jt=async()=>await G!==void 0,Bt=async(n,e,t)=>{G=Ft({id:gt,user:n,repo:e,token:t}),document.dispatchEvent(new Event("login"))},zt=async()=>{await G&&(G=Ut(gt),document.dispatchEvent(new Event("logout")))},i=(n,e)=>{e||(e=document);const t=e.querySelector(n);if(!t)throw new Error(`Unable to find: ${n}`);return t},tt=(n,e)=>{e||(e=document);const t=[...e.querySelectorAll(n)];if(t.length===0)throw new Error(`Unable to find: ${n}`);return t},ft=[];let _,wt,X,mt;const C=n=>{if(!_||!_.groups){const e=`Route parameter: ${n} - No parameters found: ${window.location.hash}`;throw new Error(e)}return _.groups[n]},T=(...n)=>n.map(e=>C(e)),ct=async()=>{let n=window.location.hash||wt;if(!await jt()&&n!==X){window.location.hash=X;return}const e=ft.find(o=>o.regex.test(n));e&&(_=e.regex.exec(window.location.hash));const t=e?e.page:mt,s=document.createElement(t);i("main").replaceChildren(s)},b=(n,e)=>{const t=new RegExp(n);ft.push({regex:t,page:e})},Qt=(n,e,t)=>{wt=n,X=e,mt=t,window.addEventListener("hashchange",ct),window.addEventListener("DOMContentLoaded",ct)},c=n=>{var e=document.createElement("template");return e.innerHTML=n,e.content},Zt=(()=>{const n=document.createElement("div");return e=>{n.textContent=e;const t=n.innerHTML;return n.textContent="",t}})(),d=(n,...e)=>{const t=[n[0]];for(let s=1;s<n.length;s++){let o=e[s-1];typeof o!="string"&&(o=o.toString()),t.push(Zt(o)),t.push(n[s])}return t.join("")},Vt=c(d`
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
`),Jt=c(d`
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
`),Wt=c(d`
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
`),Kt=c(d`
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
`),Yt=c(d`
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
`),Xt=c(d`
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
`),te=c(d`
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
`),ee=c(d`
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
`),ne=c(d`
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
`),se=c(d`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="icon"
  >
    <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
    <path
      fill-rule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z"
      clip-rule="evenodd"
    />
  </svg>
`),oe=c(d`
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
`),ae={logout:Vt,home:Jt,admin:Wt,book:Kt,delete:Yt,update:Xt,list:te,start:ee,cache:ne,search:se,info:oe},ie=c(d`
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
`);class re extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=k;const t=this.getAttribute("data-icon")||"login";e.appendChild(ie.cloneNode(!0)),e.appendChild(ae[t].cloneNode(!0))}}const bt=()=>"#/books",le=n=>`#/books/update/${n}`,N=n=>`#/book/${n}/chapters`,ce=n=>`#/book/${n}/chapters/create`,de=(n,e)=>`#/book/${n}/chapter/${e}/update`,F=(n,e)=>`#/book/${n}/chapter/${e}/questions`,he=(n,e)=>`#/book/${n}/chapter/${e}/questions/create`,ue=(n,e,t)=>`#/book/${n}/chapter/${e}/question/${t}/update`,pe=(n,e)=>`#/book/${n}/chapter/${e}/lession-prepare`,vt=()=>"#/lession-process",yt=()=>"#",ge=n=>n?`#/search/${n}`:"#/search",kt=n=>`#/cache/raw/${n}`,fe=c(d`
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
`);class we extends HTMLElement{constructor(){super();p(this,"onLogin",()=>{this.shadowRoot&&(i("#nav-items",this.shadowRoot).style.visibility="visible")});p(this,"onLogout",()=>{this.shadowRoot&&(i("#nav-items",this.shadowRoot).style.visibility="hidden",window.location.hash=yt())});const t=this.attachShadow({mode:"open"});t.adoptedStyleSheets=k,t.appendChild(fe.cloneNode(!0))}connectedCallback(){this.shadowRoot!==null&&(i("#logout",this.shadowRoot).onclick=this.doLogout,document.addEventListener("login",this.onLogin),document.addEventListener("logout",this.onLogout))}disconnectedCallback(){this.shadowRoot!==null&&(i("#logout",this.shadowRoot).onclick=null,document.removeEventListener("login",this.onLogin),document.removeEventListener("logout",this.onLogout))}doLogout(){zt()}}const me=c(d`
  <div class="is-column is-gap is-border is-padding">
    <div class="is-error is-text-bold is-text-larg">Error</div>
    <p id="error-msg"></p>
    <div class="is-row is-gap">
      <button id="error-btn" class="btn" type="button">Ok</button>
    </div>
  </div>
`);class be extends HTMLElement{constructor(){super();p(this,"onError",t=>{if(this.shadowRoot){const s=t.detail;i("#error-msg",this.shadowRoot).textContent=s,this.style.display="block"}});p(this,"onOk",()=>{this.shadowRoot&&(i("#error-msg",this.shadowRoot).textContent="",this.style.display="none")});const t=this.attachShadow({mode:"open"});t.adoptedStyleSheets=k,t.appendChild(me.cloneNode(!0)),this.style.display="none"}connectedCallback(){this.shadowRoot!==null&&(i("#error-btn",this.shadowRoot).onclick=this.onOk,document.addEventListener("error-msg",this.onError))}disconnectedCallback(){this.shadowRoot!==null&&(i("#error-btn",this.shadowRoot).onclick=null,document.removeEventListener("error-msg",this.onError))}}const ve=new RegExp(/[<>]/,"g"),ye=[{pattern:new RegExp(/^- (.+)=#/,"g"),replace:'<span class="md-right">&bull;</span><span class="md-it">$1</span>'},{pattern:new RegExp(/^(.+)=#/,"g"),replace:'<span class="md-it">$1</span>'},{pattern:new RegExp(/#=(.+)$/,"g"),replace:'<span class="md-it">$1</span>'},{pattern:new RegExp(/^- /,"g"),replace:'<span class="md-right">&bull;</span>'}],ke=[{pattern:new RegExp(/#([^#]+)#/,"g"),replace:'<span class="md-it">$1</span>'},{pattern:new RegExp(/\*\*(.)/,"g"),replace:'<span class="md-em">$1</span>'},{pattern:new RegExp(/\*([^*]+)\*/,"g"),replace:'<span class="md-em">$1</span>'}],dt=(n,e)=>(n.forEach(t=>{e=e.replaceAll(t.pattern,t.replace)}),e),j=n=>{const e=n.replace(ve,"").split(`
`);let t=[];for(const s of e)t.push(dt(ye,s.trim()));return dt(ke,t.join(`
`))},xe=c(d`
  <div class="is-grid-2">
    <slot></slot>
    <div
      id="preview"
      class="is-border is-shadow is-padding-input is-multiline"
    ></div>
  </div>
`);class Ce extends HTMLElement{constructor(){super();p(this,"id");const t=this.attachShadow({mode:"open"});t.adoptedStyleSheets=k,t.appendChild(xe.cloneNode(!0)),this.id=this.getAttribute("data-id")||"no-id"}connectedCallback(){if(this.shadowRoot!==null){const t=i(`#${this.id}`),s=i("#preview",this.shadowRoot);t.oninput=()=>{console.log("input"),s.innerHTML=j(t.value)}}}disconnectedCallback(){this.shadowRoot!==null&&(i(`#${this.id}`).oninput=null)}}const Ee=c(d`
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
`);class et extends HTMLElement{constructor(){super();p(this,"questionId");p(this,"question");p(this,"doDelete");const t=this.attachShadow({mode:"open"});t.adoptedStyleSheets=k,t.appendChild(Ee.cloneNode(!0))}connectedCallback(){this.shadowRoot!==null&&this.questionId&&this.question&&this.renderQuestion(this.questionId,this.question)}init(t,s,o){return this.questionId=t,this.question=s,this.doDelete=o,this}renderQuestion(t,s,o){this.shadowRoot&&(i("#label",this.shadowRoot).textContent=`Question: ${t.idx}`,i("#quest",this.shadowRoot).innerHTML=j(s.quest),i("#answer",this.shadowRoot).innerHTML=j(s.answer),this.renderProgress(this.shadowRoot,o),this.renderDetails(this.shadowRoot,s),this.renderUpdateBtn(this.shadowRoot,t),this.renderDeleteBtn(this.shadowRoot,t),this.renderLocationBtn(this.shadowRoot,t))}show(t){if(this.shadowRoot){const s=t?"flex":"none",o=i("#answer",this.shadowRoot);o.parentElement&&(o.parentElement.style.display=s);const a=i("#details",this.shadowRoot);a.parentElement&&(a.parentElement.style.display=a.innerHTML?s:"none")}}renderProgress(t,s){const o=i("#progress",t);s?o.textContent=`Progress: ${s.progress} / 3`:o.style.display="none"}renderDetails(t,s){const o=i("#details",t);!s.details&&o.parentElement&&(o.parentElement.style.display="none"),o.innerHTML=s.details?j(s.details):""}renderUpdateBtn(t,s){i('[data-icon="update"]',t).onclick=()=>{window.location.hash=ue(s.bookId,s.chapterId,s.idx)}}renderDeleteBtn(t,s){const o=i('[data-icon="delete"]',t);this.doDelete?o.onclick=()=>{this.doDelete&&this.doDelete(s)}:o.style.display="none"}renderLocationBtn(t,s){i('[data-icon="info"]',t).onclick=()=>{const o=i("#location-info",t);o.style.display==="none"?(o.style.display="block",i("#location-info",t).show(s.bookId,s.chapterId,s.idx.toString())):o.style.display="none"}}}const Se=c(d`
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
`);class Re extends HTMLElement{constructor(){super();p(this,"fct");p(this,"onCancel",()=>{this.shadowRoot&&(this.style.display="none")});p(this,"onOk",async()=>{if(this.shadowRoot!==null&&this.fct){const t=i("#btn-ok",this.shadowRoot);t.disabled=!0,this.fct().finally(()=>{this.style.display="none",t.disabled=!1})}});const t=this.attachShadow({mode:"open"});t.adoptedStyleSheets=k,t.appendChild(Se.cloneNode(!0)),this.style.display="none"}connectedCallback(){this.shadowRoot!==null&&(i("#btn-cancel",this.shadowRoot).onclick=this.onCancel,i("#btn-ok",this.shadowRoot).onclick=this.onOk)}disconnectedCallback(){this.shadowRoot!==null&&(i("#btn-cancel",this.shadowRoot).onclick=null,i("#btn-ok",this.shadowRoot).onclick=null)}activate(t,s,o){this.shadowRoot&&(i("#dialog-title",this.shadowRoot).textContent=t,i("#dialog-msg",this.shadowRoot).textContent=s,this.style.display="block",this.fct=o)}}const $e=c(d`
  <div class="is-column is-gap-small">
    <label class="is-small is-text-bold" for="default-id">Default Label</label>
    <slot></slot>
    <p class="is-error is-small" id="error"></p>
  </div>
`);class xt extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=k,e.appendChild($e.cloneNode(!0))}connectedCallback(){if(this.shadowRoot!==null){const e=this.getAttribute("data-id")||"no-id",t=i("label",this.shadowRoot);t.htmlFor=e,t.textContent=this.getAttribute("data-label")||"no-label"}}attributeChangedCallback(e,t,s){this.shadowRoot&&e==="data-error"&&(i("#error",this.shadowRoot).textContent=s)}}p(xt,"observedAttributes",["data-error"]);const Le=()=>"books",$=()=>"books/books.json",I=n=>`books/${n}/chapters.json`,D=(n,e)=>`books/${n}/questions.${e}.json`,L=n=>/^books\/[^\/]+\/questions.[^\/]+.json$/.test(n),Ct=n=>/^books\/[^\/]+\/chapters.json$/.test(n),Pe=n=>n==="books/books.json",Ie=n=>Pe(n)||Ct(n)||L(n),De=n=>{const e=/^books\/([^\/]+)\/chapters.json$/,t=n.match(e);if(!t)throw new h(`No matches for ${n}`);return t[1]},Ae=n=>{const e=/^books\/([^\/]+)\/questions.([^\/]+).json$/,t=n.match(e);if(!t)throw new h(`No matches for ${n}`);return[t[1],t[2]]},E="cache",P="search",Et=async()=>{const n=(await O).transaction([E],"readonly").objectStore(E);return await pt(n)},qe=async()=>{const n=(await O).transaction([P],"readonly").objectStore(P);return await pt(n)},St=async n=>{const e=(await O).transaction([E],"readonly").objectStore(E);return await z(e,n)},Rt=async n=>{const e=(await O).transaction([P],"readonly").objectStore(P);return await z(e,n)},nt=async(n,e)=>{const t=e?[E,P]:[E],s=(await O).transaction(t,"readwrite");await Y(s.objectStore(E),n),e&&await Y(s.objectStore(P),n)},$t=async(n,e)=>{const t=e?[E,P]:[E],s=(await O).transaction(t,"readwrite");await K(s.objectStore(E),{path:n.path,data:n.data,hash:n.hash}),e&&await K(s.objectStore(P),e)};class R{constructor(){p(this,"status",2);p(this,"_message");p(this,"wrapper")}get isOk(){if(this.status===2)throw new Error("Status not set!");return this.status===0}get hasError(){if(this.status===2)throw new Error("Status not set!");return this.status===1}get message(){if(this.status!==1)throw new Error("Status is not ERROR!");if(!this._message)throw new Error("Status is ERROR but no message is set!");return this._message}get value(){if(this.status!==0)throw new Error("Status is not OK!");if(!this.wrapper)throw new Error("Value not set!");return this.wrapper.value}setOk(e){return this.status=0,this.wrapper={value:e},this}setError(e){if(e instanceof R){if(!e.hasError)throw new Error("Result has not an error!");this._message=e._message}else this._message=e;return this.status=1,this}}const Z=async n=>{const e=await m(),t=I(n),s=await v(e,t);if(s.hasError)throw new h(s.message);return s.value.data},st=async(n,e)=>{const t=await m(),s=I(n),o=await v(t,s);if(o.hasError)throw new h(o.message);const a=o.value.data.find(r=>r.id===e);if(!a)throw new h(`Not found: ${e}`);return a},Me=async(n,e)=>{const t=await m(),s=I(n),o=await v(t,s);if(o.hasError)throw new h(o.message);const a=o.value.data,r=a.findIndex(u=>u.id===e.id);if(r<0)throw new h(`Chapter not found: ${e.id}`);return a[r]=e,(await x(t,s,a,o.value.hash,`Updating chapter: ${e.id}`)).value},Te=async(n,e)=>{const t=await m(),s=I(n),o=await v(t,s);if(o.hasError)throw new h(o.message);let a=o.value.data;const r=a.length;if(a=a.filter(f=>f.id!==e),r===a.length)throw new h(`Not found: ${e}`);const l=await x(t,s,a,o.value.hash,`Deleting chapter ${e}`);if(l.hasError)throw new h(l.message);const u=await It(t,D(n,e),"Deleting file.");if(u.hasError)throw new h(u.message);return a},Oe=async(n,e)=>{const t=await m(),s=I(n),o=await v(t,s);if(o.hasError)throw new h(o.message);const a=o.value.data;if(a.find(f=>f.id===e.id))throw new h(`Id already exists: ${e.id}`);a.push(e);const r=await x(t,s,a,o.value.hash,`Adding chapter: ${e.id}`);if(r.hasError)throw new h(r.message);const l=D(n,e.id),u=await x(t,l,[],void 0,"Creating chapters!");if(u.hasError)throw new h(u.message);return a},U=async(n,e)=>{const t=await m(),s=D(n,e),o=await v(t,s);if(o.hasError)throw new h(o.message);return o.value.data},ot=async(n,e,t)=>(await U(n,e))[t],Ne=async(n,e,t,s)=>{const o=await m(),a=D(n,e),r=await v(o,a);if(r.hasError)throw new h(r.message);const l=r.value.data;l[t]=s;const u=await x(o,a,l,r.value.hash,"Updating question!");if(u.hasError)throw new h(u.message)},He=async(n,e,t)=>{const s=await m(),o=D(n,e),a=await v(s,o);if(a.hasError)throw new h(a.message);const r=a.value.data;r.push(t);const l=await x(s,o,r,a.value.hash,"Adding question!");if(l.hasError)throw new h(l.message)},Ge=async(n,e,t)=>{const s=await m(),o=D(n,e),a=await v(s,o);if(a.hasError)throw new h(a.message);const r=a.value.data.filter((u,f)=>t!==f),l=await x(s,o,r,a.value.hash,"Deleting question!");if(l.hasError)throw new h(l.message);return r},Lt=(n,e,t)=>{const s={quest:n,answer:e};return t&&(s.details=t),s},Fe=new RegExp(/[.,;!?()'"/&+-]/,"g"),Ue=new RegExp(/[\*#=~]/,"g"),_e=new Set(["der","die","das","ein","sich","etwas","etw","hier","instr","nom","она","оно","они"]),je=(n,e,t)=>{let s=n+" "+e;t&&(s=s+" "+t),s=s.replaceAll(Fe," "),s=s.replaceAll(Ue,"");let o=s.split(/\s+/);const a=new Set;return o.forEach(r=>{r.length>2&&!_e.has(r)&&a.add(r.toLowerCase())}),Array.from(a).sort().join(" ")},Pt=(n,e,t)=>{const s=e.map(a=>je(a.quest,a.answer,a.details));return{path:n,strs:s,hash:t}},Be=n=>n.length>=10,ze=async n=>{const e=[],t=await at();for(const s of t){const o=await Z(s.id);for(const a of o){const r=D(s.id,a.id),l=await Rt(r);if(!l){S(`No search index for: ${r}`);continue}for(let u=0;u<l.strs.length;u++){const f=l.strs[u];if(f.indexOf(n)>=0){const y={bookId:s.id,chapterId:a.id,idx:u},M=await ot(y.bookId,y.chapterId,y.idx);if(e.push({questId:y,quest:M,strIdx:f}),Be(e))return e}}}}return e},Qe=async n=>{const e=await Rt(n);if(!e)throw new h(`Unable to get from cache: ${n}`);return JSON.stringify(e.strs,null,2)},Ze=n=>window.btoa(unescape(encodeURIComponent(n))),Ve=n=>decodeURIComponent(escape(window.atob(n))),V=async n=>n.statusText?n.statusText:n.text(),J=(n,e,t)=>`https://api.github.com/repos/${n}/${e}/contents/${t}`,Je=async(n,e,t,s,o)=>{const a=new R;try{const r={content:Ze(e),message:s};t&&(r.sha=t);const l={method:"PUT",headers:{Accept:"application/vnd.github.v3+json",authorization:`token ${o}`},body:JSON.stringify(r)},u=await fetch(n,l);if(!u.ok){const y=await V(u);return a.setError(`githubWriteContent - Url: ${n} Error: ${y}`)}const f=await u.json();return console.log(f),a.setOk(f.content.sha)}catch(r){return a.setError(`githubWriteContent - Url: ${n} Error: ${r}`)}},We=async(n,e)=>{const t=new R;try{const s={Accept:"application/vnd.github.v3+json"};e&&(s.authorization=`token ${e}`);const o=await fetch(n,s);if(!o.ok){const l=await V(o);return t.setError(`githubReadContent - Url: ${n} Read error: ${l}`)}const a=await o.json(),r=Ve(a.content);return t.setOk({content:r,hash:a.sha})}catch(s){return t.setError(`githubReadContent - Url: ${n} Error: ${s}`)}},Ke=async(n,e,t,s)=>{const o=new R;try{const a={message:t,sha:e},r={method:"DELETE",headers:{Accept:"application/vnd.github.v3+json",authorization:`token ${s}`},body:JSON.stringify(a)},l=await fetch(n,r);if(!l.ok){const u=await V(l);return o.setError(`githubDelete - Url: ${n} Error: ${u}`)}return console.log(`githubDelete - Url: ${n}`),o.setOk()}catch(a){return o.setError(`githubDelete - Url: ${n} Error: ${a}`)}},Ye=async(n,e)=>{const t=new R;try{const s={Accept:"application/vnd.github.v3+json"};e&&(s.authorization=`token ${e}`);const o=await fetch(n,s);if(!o.ok){const a=await V(o);return t.setError(`githubListing - Url: ${n} Read error: ${a}`)}return t.setOk(await o.json())}catch(s){return t.setError(`githubListing - Url: ${n} Error: ${s}`)}},v=async(n,e)=>{const t=new R,s=await St(e);if(s)return t.setOk(s);const o=await We(J(n.user,n.repo,e),n.token);if(o.hasError)return t.setError(`jsonGet - ${o.message}`);const a={path:e,data:JSON.parse(o.value.content),hash:o.value.hash},r=L(e)?Pt(e,a.data,a.hash):void 0;return $t(a,r),t.setOk(a)},x=async(n,e,t,s,o)=>{const a=new R,r=await Je(J(n.user,n.repo,e),JSON.stringify(t),s,o,n.token);if(r.hasError)return a.setError(r);const l={path:e,data:t,hash:r.value},u=L(e)?Pt(e,l.data,l.hash):void 0;return $t(l,u),a.setOk(t)},It=async(n,e,t)=>{const s=new R,o=await v(n,e);if(o.hasError)return s.setError(o.message);const a=await Ke(J(n.user,n.repo,e),o.value.hash,t,n.token);return a.hasError?s.setError(a):(await nt(e,L(e)),s.setOk())},at=async()=>{const n=await m(),e=await v(n,$());if(e.hasError)throw new h(e.message);return e.value.data},it=async n=>{const e=await m(),t=await v(e,$());if(t.hasError)throw new h(t.message);const s=t.value.data.find(o=>o.id===n);if(!s)throw new h(`Book not found: ${n}`);return s},Xe=async n=>{const e=await m(),t=await v(e,$());if(t.hasError)throw new h(t.message);const s=t.value.data;if(s.find(l=>l.id===n.id))throw new h(`Id already exists: ${n.id}`);s.push(n);const o=await x(e,$(),s,t.value.hash,`Adding book: ${n.id}`);if(o.hasError)throw new h(o.message);const a=I(n.id),r=await x(e,a,[],void 0,"Creating chapters!");if(r.hasError)throw new h(r.message);return o.value},tn=async n=>{const e=await m(),t=await v(e,$());if(t.hasError)throw new h(t.message);const s=t.value.data,o=s.findIndex(r=>r.id===n.id);if(o<0)throw new h(`Book not found: ${n.id}`);s[o]=n;const a=await x(e,$(),s,t.value.hash,`Updating book: ${n.id}`);if(a.hasError)throw new h(a.message);return a.value},en=async n=>{const e=await Z(n);if(e.length>0)throw new h(`Book: ${n} has chapters: ${e.length}`);const t=await m(),s=await v(t,$());if(s.hasError)throw new h(s.message);let o=s.value.data;const a=o.length;if(o=o.filter(u=>u.id!==n),a===o.length)throw new h(`Book not found: ${n}`);const r=await x(t,$(),o,s.value.hash,`Deleting book ${n}`);if(r.hasError)throw new h(r.message);const l=await It(t,I(n),`Deleting file for: ${n}`);if(l.hasError)throw new h(l.message);return o},g=(n,e)=>{const t=n.get(e);if(typeof t=="string")return{id:e,value:t.trim()};throw new Error(`Unknown value: ${t} for key: ${e}`)},A=n=>{tt("ui-field",n).forEach(e=>{e.removeAttribute("data-error")})},rt=(n,e,t)=>{i(`ui-field[data-id="${e}"]`,n).setAttribute("data-error",t)},q=n=>tt("ui-field",n).find(e=>e.hasAttribute("data-error")),w=(n,e)=>e.value?!0:(rt(n,e.id,"Please enter a value!"),!1),Dt=(n,e)=>/^[-_a-zA-Z0-9.]+$/.test(e.value)?!0:(rt(n,e.id,"Please enter an id value!"),!1),nn=(n,e,t)=>e.value.length<t?(rt(n,e.id,`Input has to be at least ${t} characters!`),!1):!0;class sn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const e=C("bookId");i("#location-info").show(e);const t=await it(e);i("#id").value=t.id,i("#title").value=t.title,i("#desc").value=t.description}async handleSubmit(e){e.preventDefault();const t=e.target,s=new FormData(t),o=g(s,"id"),a=g(s,"title"),r=g(s,"desc");A(t),w(t,a),w(t,r);const l=i("button",t);q(t)||(l.disabled=!0,tn({id:o.value,title:a.value,description:r.value}).then(()=>{window.location.hash=bt()}).finally(()=>{l.disabled=!1}))}renderPage(){const e=d`
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
    `,t=c(e);return i("form",t).onsubmit=this.handleSubmit.bind(this),t}}const on=c(d`
  <div class="is-column is-gap">
    <div class="page-title">Welcome to Vanilla Trainer</div>
    <lession-continue></lession-continue>
  </div>
`);class an extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(on.cloneNode(!0))}}const rn=c(d`
  <div class="page-title">Page not found</div>
  <p class="is-error">Sorry, the page was not found!</p>
`);class ln extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(rn.cloneNode(!0))}}class cn extends HTMLElement{connectedCallback(){this.hasChildNodes()||(this.appendChild(this.renderPage()),document.addEventListener("logout",this.onLogout.bind(this))),this.getAdmin(),this.setEdit(!1)}handleSubmit(e){e.preventDefault();const t=e.target,s=new FormData(t),o=g(s,"user"),a=g(s,"repo"),r=g(s,"token");A(t),w(t,o),w(t,a),w(t,r);const l=i("button",t);q(t)||(l.disabled=!0,Bt(o.value,a.value,r.value).finally(()=>{this.setEdit(!1),l.disabled=!1}))}async getAdmin(){const e=await m();i("#user").value=e.user,i("#repo").value=e.repo,i("#token").value=e.token}onEdit(){this.setEdit(!0)}setEdit(e){i("#user").disabled=!e,i("#repo").disabled=!e,i("#token").disabled=!e,i("#admin-edit").disabled=e,i("#admin-save").disabled=!e}onLogout(){this.getAdmin()}renderPage(){const e=d`
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
    `,t=c(e);return i("form",t).onsubmit=this.handleSubmit.bind(this),i("#admin-edit",t).onclick=this.onEdit.bind(this),t}}class dn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const e=i("#confirm-dialog"),t=(await at()).map(s=>this.renderBook(s,e));i("tbody").replaceChildren(...t)}onDelete(e,t){return()=>{e.activate("Delete Book",`Do you realy want to delete the book: ${t}?`,this.getDeleteFct(t))}}getDeleteFct(e){return async()=>{await en(e),this.render()}}renderPage(){const e=d`
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
    `;return c(e)}renderBook(e,t){const s=d`
      <tr>
        <td class="is-larger-sm">${e.id}</td>
        <td>${e.title}</td>
        <td class="is-larger-sm">${e.description}</td>
        <td data-id="actions">
          <div class="is-row is-gap-action">
            <ui-icons data-icon="delete"></ui-icons>
            <ui-icons data-icon="update"></ui-icons>
            <ui-icons data-icon="list"></ui-icons>
          </div>
        </td>
      </tr>
    `,o=c(s);return i('[data-icon="delete"]',o).onclick=this.onDelete(t,e.id).bind(this),i('[data-icon="update"]',o).onclick=()=>{window.location.hash=le(e.id)},i('[data-icon="list"]',o).onclick=()=>{window.location.hash=N(e.id)},o}}class hn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage())}async handleSubmit(e){e.preventDefault();const t=e.target,s=new FormData(t),o=g(s,"id"),a=g(s,"title"),r=g(s,"desc");A(t),w(t,o)&&Dt(t,o),w(t,a),w(t,r);const l=i("button",t);q(t)||(console.log("id",o,"title",a,"desc",r),l.disabled=!0,Xe({id:o.value,title:a.value,description:r.value}).then(()=>{window.location.hash=bt()}).finally(()=>{l.disabled=!1}))}renderPage(){const e=d`
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
    `,t=c(e);return i("form",t).onsubmit=this.handleSubmit.bind(this),t}}class un extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const e=C("bookId"),t=i("#confirm-dialog");i("#location-info").show(e),this.addLinks(e);const s=[];(await Z(e)).forEach(a=>{s.push(this.renderEntry(e,a,t))}),i("tbody").replaceChildren(...s)}addLinks(e){i("#chapter-create-link").href=ce(e),i("#chapter-cache-link").href=kt(I(e))}onDelete(e,t,s){return()=>{e.activate("Delete Chapter",`Do you realy want to delete the chapter: ${s}?`,this.getDeleteFct(t,s))}}getDeleteFct(e,t){return async()=>{Te(e,t).then(()=>{this.render()})}}renderPage(){const e=d`
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
    `;return c(e)}renderEntry(e,t,s){const o=d`
      <tr>
        <td class="is-larger-sm">${t.id}</td>
        <td>${t.title}</td>
        <td data-id="actions">
          <div class="is-row is-gap-action">
            <ui-icons data-icon="delete"></ui-icons>
            <ui-icons data-icon="update"></ui-icons>
            <ui-icons data-icon="list"></ui-icons>
            <ui-icons data-icon="start"></ui-icons>
          </div>
        </td>
      </tr>
    `,a=c(o);return i('[data-icon="delete"]',a).onclick=this.onDelete(s,e,t.id).bind(this),i('[data-icon="update"]',a).onclick=()=>{window.location.hash=de(e,t.id)},i('[data-icon="list"]',a).onclick=()=>{window.location.hash=F(e,t.id)},i('[data-icon="start"]',a).onclick=()=>{window.location.hash=pe(e,t.id)},a}}class pn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}render(){const e=C("bookId");i("#location-info").show(e);const t=N(e);i("#chapter-list-link",this).href=t}async handleSubmit(e){e.preventDefault();const t=C("bookId"),s=e.target,o=new FormData(s),a=g(o,"id"),r=g(o,"title");if(A(s),w(s,a)&&Dt(s,a),w(s,r),!q(s)){const l=i("#btn-submit",s);l.disabled=!0,Oe(t,{id:a.value,title:r.value}).then(()=>{window.location.hash=N(t)}).finally(()=>{l.disabled=!1})}}renderPage(){const e=d`
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
    `,t=c(e);return i("form",t).onsubmit=this.handleSubmit.bind(this),t}}class gn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const e=C("bookId"),t=C("chapterId");i("#location-info").show(e,t);const s=N(e);i("#chapter-list-link",this).href=s;const o=await st(e,t);i("#id").value=o.id,i("#title").value=o.title}async handleSubmit(e){e.preventDefault();const t=C("bookId"),s=e.target,o=new FormData(s),a=g(o,"id"),r=g(o,"title");if(A(s),w(s,r),!q(s)){const l=i("#btn-submit",s);l.disabled=!0,Me(t,{id:a.value,title:r.value}).then(()=>{window.location.hash=N(t)}).finally(()=>{l.disabled=!1})}}renderPage(){const e=d`
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
    `,t=c(e);return i("form",t).onsubmit=this.handleSubmit.bind(this),t}}const fn=c(d`
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
`);class wn extends HTMLElement{constructor(){super(...arguments);p(this,"doDelete",t=>{i("#confirm-dialog").activate("Delete Question",`Do you really want to delete the question: ${t.idx}?`,this.getDeleteFct(t))})}connectedCallback(){this.hasChildNodes()||this.appendChild(fn.cloneNode(!0)),this.render()}async render(){const[t,s]=T("bookId","chapterId");i("#location-info").show(t,s),this.addLinks(t,s);const o=await U(t,s),a=[];o.forEach((r,l)=>{a.push(new et().init({bookId:t,chapterId:s,idx:l},r,this.doDelete))}),i('[data-id="questions"]').replaceChildren(...a)}addLinks(t,s){i("#question-create-link").href=he(t,s),i("#question-cache-link").href=kt(D(t,s)),i("#chapter-list-link").href=N(t)}getDeleteFct(t){return async()=>{Ge(t.bookId,t.chapterId,t.idx).then(()=>{this.render()})}}}const mn=c(d`
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
`);class bn extends HTMLElement{constructor(){super(...arguments);p(this,"handleSubmit",async t=>{t.preventDefault();const[s,o]=T("bookId","chapterId"),a=t.target,r=new FormData(a),l=g(r,"quest"),u=g(r,"answer"),f=g(r,"details");if(A(a),w(a,l),w(a,u),!q(a)){const y=i("#btn-submit",a);y.disabled=!0;const M=Lt(l.value,u.value,f.value);He(s,o,M).then(()=>{window.location.hash=F(s,o)}).finally(()=>{y.disabled=!1})}})}connectedCallback(){if(!this.hasChildNodes()){const t=mn.cloneNode(!0);i("form",t).onsubmit=this.handleSubmit,this.appendChild(t)}this.render()}render(){const[t,s]=T("bookId","chapterId");i("#location-info").show(t,s),i("#question-list-link",this).href=F(t,s)}}const vn=c(d`
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
`);class yn extends HTMLElement{constructor(){super(...arguments);p(this,"handleSubmit",async t=>{t.preventDefault();const[s,o,a]=T("bookId","chapterId","idx"),r=t.target,l=new FormData(r),u=g(l,"quest"),f=g(l,"answer"),y=g(l,"details");if(A(r),w(r,u),w(r,f),!q(r)){const M=i("#btn-submit",r);M.disabled=!0;const W=Lt(u.value,f.value,y.value);Ne(s,o,parseInt(a),W).then(()=>{window.location.hash=F(s,o)}).finally(()=>{M.disabled=!1})}})}connectedCallback(){if(!this.hasChildNodes()){const t=vn.cloneNode(!0);i("form",t).onsubmit=this.handleSubmit,this.appendChild(t)}this.render()}async render(){const[t,s,o]=T("bookId","chapterId","idx");i("#location-info").show(t,s,o),i("#question-list-link",this).href=F(t,s);const a=await ot(t,s,parseInt(o));this.setValue("#quest",a.quest),this.setValue("#answer",a.answer),this.setValue("#details",a.details||"")}setValue(t,s){const o=i(t);o.value=s,o.dispatchEvent(new Event("input"))}}const kn=(n,e)=>Math.floor(Math.random()*(e-n+1)+n),xn=n=>{for(let e=0;e<n.length;e++){const t=kn(0,n.length-1);if(e===t)continue;const s=n[e];n[e]=n[t],n[t]=s}},H="lession",Cn=(n,e,t)=>{if(n.length==0)return;const s=n.map(a=>({questionId:a,progress:e}));xn(s);const o={learning:s,learned:[],reverse:t};localStorage.setItem(H,JSON.stringify(o))},En=()=>localStorage.getItem(H)!=null,Sn=()=>{const n=localStorage.getItem(H);if(n)return JSON.parse(n)},Rn=n=>n.learning.length>0?(localStorage.setItem(H,JSON.stringify(n)),!0):(localStorage.removeItem(H),!1),$n=()=>{localStorage.removeItem(H)},Ln=n=>{const e=[0,0,0,n.learned.length];return n.learning.forEach(t=>{if(t.progress>2)throw Error(`Invalid progress ${t.progress}`);e[t.progress]++}),e},Pn=n=>{let e=0;return e+=n[0]*3,e+=n[1]*2,e+=n[2]*1,e},In=c(d`
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
`);class Dn extends HTMLElement{constructor(){super(...arguments);p(this,"handleSubmit",async t=>{t.preventDefault();const s=t.target,o=new FormData(s),a=g(o,"correct"),r=g(o,"reverse"),[l,u]=T("bookId","chapterId"),y=(await U(l,u)).map((M,W)=>({bookId:l,chapterId:u,idx:W}));Cn(y,parseInt(a.value),r.value==="true"),window.location.hash=vt()})}connectedCallback(){if(!this.hasChildNodes()){const t=In.cloneNode(!0);i("form",t).onsubmit=this.handleSubmit,this.appendChild(t)}this.render()}async render(){const[t,s]=T("bookId","chapterId"),o=await U(t,s);o.length===0&&(S("The chapter has no questions!"),i("#btn-start").disabled=!0),this.addLessionInfo(t,s,o)}async addLessionInfo(t,s,o){const a=await it(t),r=await st(t,s);i("#lession-info").update([{key:"Book",value:a.title},{key:"Chapter",value:r.title},{key:"Length",value:o.length.toString()}])}}const An=c(d`
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
`);class qn extends HTMLElement{constructor(){super(...arguments);p(this,"lession");p(this,"questionProgress");p(this,"onShow",()=>{this.setStateQuestion(!1)});p(this,"onCorrect",()=>{this.update(this.questionProgress.progress+1)});p(this,"onWrong",()=>{this.update(0)});p(this,"onLearned",()=>{this.update(3)});p(this,"onSkip",()=>{this.update(this.questionProgress.progress)});p(this,"onStop",()=>{window.location.hash=yt()})}connectedCallback(){if(!this.hasChildNodes()){const t=An.cloneNode(!0);[{id:"#btn-show",fct:this.onShow},{id:"#btn-correct",fct:this.onCorrect},{id:"#btn-wrong",fct:this.onWrong},{id:"#btn-skip",fct:this.onSkip},{id:"#btn-learned",fct:this.onLearned},{id:"#btn-stop",fct:this.onStop}].forEach(s=>{i(s.id,t).onclick=s.fct}),this.appendChild(t),this.load()}}load(){if(this.lession=Sn(),!this.lession){this.setStateRunning(!1),S("No lession found!");return}this.setStateRunning(!0),this.next()}next(){if(this.lession){this.addProgressInfo(Ln(this.lession));const t=this.lession.learning.shift();if(t)this.questionProgress=t,this.setQuestion(this.questionProgress.questionId,this.questionProgress),this.setStateQuestion(!0);else{this.setStateRunning(!1);return}this.questionProgress&&i("location-info").show(this.questionProgress.questionId.bookId,this.questionProgress.questionId.chapterId,this.questionProgress.questionId.idx.toString())}}async update(t){this.questionProgress&&this.lession&&(this.questionProgress.progress=t,this.questionProgress.progress<3?this.lession.learning.push(this.questionProgress):this.lession.learned.push(this.questionProgress),Rn(this.lession),this.next())}setStateQuestion(t){this.doShow('[data-show="ask"]',t),this.doShow('[data-show="show"]',!t),i("#question-show").show(!t)}setStateRunning(t){this.doShow('[data-show="running"]',t),t||(this.doShow('[data-show="ask"]',!1),this.doShow('[data-show="show"]',!1))}doShow(t,s){tt(t).forEach(o=>{const a=o.dataset.display||"block";o.style.display=s?a:"none"})}async setQuestion(t,s){const o=await ot(t.bookId,t.chapterId,t.idx);i("#question-show").renderQuestion(t,o,s)}addProgressInfo(t){i("#progress-info").update([{key:"Unlearned",value:t[0].toString()},{key:"One correct",value:t[1].toString()},{key:"Two correct",value:t[2].toString()},{key:"Learned",value:t[3].toString()},{key:"Total",value:Pn(t).toString()}])}}const Mn=async()=>{const n=[],e=await at();for(const t of e){const s=await Z(t.id);for(const o of s)n.push(U(t.id,o.id))}await Promise.all(n)},Tn=async n=>{const e=await St(n);if(!e)throw new h(`Unable to get from cache: ${n}`);return JSON.stringify(e.data,null,2)},At=async(n,e,t)=>{const s=await Ye(J(e.user,e.repo,t),e.token);if(s.hasError){n.error=`cacheListing - ${s.message}`;return}n.listing.push(...s.value);const o=[];for(const a of s.value)a.type==="dir"&&o.push(At(n,e,a.path));await Promise.all(o)},On=async()=>{const n=await m(),e={error:void 0,listing:[]};if(await At(e,n,Le()),e.error){S(e.error);return}const t=await Et();for(const s of t){const o=e.listing.find(a=>a.path===s.path);(!o||s.hash!==o.sha)&&await nt(s.path,!0)}};class Nn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}onCacheLoad(){i("#confirm-dialog").activate("Load Cache","Do you realy want to load all files?",async()=>{await Mn(),this.render()})}onCacheCheck(){i("#confirm-dialog").activate("Check Cache","Do you realy want to check all files?",async()=>{await On(),this.render()})}getHash(e){return e.substring(0,6)}getSearchHash(e,t){return L(e)?t?this.getHash(t.hash):"missing":""}async render(){const e=i("#confirm-dialog"),t=await Et(),s=await qe(),o=t.map(a=>this.renderEntry(a,s,e));i("tbody").replaceChildren(...o)}onDelete(e,t){return()=>{e.activate("Delete Cache Entry",`Do you realy want to delete the cache entry: ${t}?`,async()=>{await nt(t,L(t)),this.render()})}}renderPage(){const e=d`
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
    `,t=c(e);return i("#cache-load",t).onclick=this.onCacheLoad.bind(this),i("#cache-check",t).onclick=this.onCacheCheck.bind(this),t}renderEntry(e,t,s){const o=this.getHash(e.hash),a=t.find(f=>f.path===e.path),r=this.getSearchHash(e.path,a),l=d`
      <tr>
        <td>${e.path}</td>
        <td>${o}</td>
        <td>${r}</td>
        <td>
          <div class="is-row is-gap-action">
            <ui-icons data-icon="delete"></ui-icons>
          </div>
        </td>
      </tr>
    `,u=c(l);return i('[data-icon="delete"]',u).onclick=this.onDelete(s,e.path).bind(this),u}}class Hn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const e=C("path");if(!Ie(e)){S(`Path is not valid ${e}`);return}this.doCache(e),this.doSearch(e)}async doCache(e){const t=i("#location-info");if(L(e)){const[s,o]=Ae(e);t.show(s,o)}else if(Ct(e)){const s=De(e);t.show(s)}else t.hide();i("#cache").show("Cache",e,await Tn(e))}async doSearch(e){const t=i("#search");L(e)&&t.show("Search",e,await Qe(e))}renderPage(){const e=d`
      <div class="is-column is-gap">
        <div class="page-title">Cache Raw</div>
        <location-info id="location-info"></location-info>

        <json-show id="cache"></json-show>
        <json-show id="search"></json-show>

        <div class="is-row is-gap">
          <button class="btn" id="btn-cancel">Back</button>
        </div>
      </div>
    `,t=c(e);return i("#btn-cancel",t).onclick=()=>{history.back()},t}}const Gn=c(d`
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
    <div data-id="num" class="is-text-bold is-text-right is-text-small"></div>
    <div data-id="questions"></div>
  </div>
`);class Fn extends HTMLElement{constructor(){super(...arguments);p(this,"handleSubmit",async t=>{t.preventDefault();const s=t.target,o=new FormData(s),a=g(o,"search");A(s),w(s,a)&&nn(s,a,3),q(s)||(window.location.hash=ge(encodeURI(a.value)))})}connectedCallback(){if(!this.hasChildNodes()){const t=Gn.cloneNode(!0);i("form",t).onsubmit=this.handleSubmit,this.appendChild(t)}this.search()}async search(){const t=C("searchStr");if(!t)return;const s=decodeURI(t);if(s.length<3)return;i("#search").value=s;const o=[],a=await ze(s.toLowerCase());i('[data-id="num"]').textContent=a.length===0?"Nothing found!":`Number of results: ${a.length}`,a.forEach(r=>{o.push(new et().init(r.questId,r.quest))}),i('[data-id="questions"]').replaceChildren(...o)}}const Un=c(d`
  <style>
    code {
      white-space: pre;
    }
  </style>

  <div class="is-column is-gap-small" id="wrapper">
    <div class="is-text-bold" id="title"></div>
    <div>
      <span class="is-key">Path</span>
      <span class="is-value" id="path"></span>
    </div>
    <code class="is-border is-shadow is-padding-input" id="content"></code>
  </div>
`);class _n extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=k,e.appendChild(Un.cloneNode(!0)),this.style.display="none"}show(e,t,s){this.shadowRoot&&(this.style.display="block",i("#title",this.shadowRoot).textContent=e,i("#path",this.shadowRoot).textContent=t,i("#content",this.shadowRoot).textContent=s)}}const jn=c(d`
  <style>
    .wrapper {
      display: grid;
      grid-gap: var(--gap-small);
      grid-template-columns: 1fr 1fr 1fr;
    }
  </style>
  <div id="wrapper" class="wrapper"></div>
`),Bn=c(d`
  <div class="is-row is-gap-small">
    <div class="is-key"></div>
    <div class="is-value"></div>
  </div>
`);class zn extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=k,e.appendChild(jn.cloneNode(!0))}update(e){if(this.shadowRoot){const t=e.map(s=>this.renderData(s));i("#wrapper",this.shadowRoot).replaceChildren(...t)}}renderData(e){const t=Bn.cloneNode(!0);return i(".is-key",t).innerText=e.key,i(".is-value",t).innerText=e.value,t}}const Qn=c(d`
  <key-values id="info"></key-values>
`);class Zn extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=k,e.appendChild(Qn.cloneNode(!0))}async show(e,t,s){if(this.shadowRoot){const o=[],a=await it(e);if(o.push({key:"Book",value:a.title}),t){const r=await st(e,t);o.push({key:"Chapter",value:r.title})}s&&o.push({key:"Question",value:s}),i("#info",this.shadowRoot).update(o)}}hide(){this.style.display="none"}}const Vn=c(d`
  <div class="is-row is-gap">
    <button class="btn" id="btn-continue">Continue</button>
    <button class="btn" id="btn-end">End</button>
  </div>
`);class Jn extends HTMLElement{constructor(){super();p(this,"onContinue",()=>{window.location.hash=vt()});p(this,"onEnd",()=>{$n(),this.style.display="none"});const t=this.attachShadow({mode:"open"});t.adoptedStyleSheets=k,t.appendChild(Vn.cloneNode(!0))}connectedCallback(){this.shadowRoot!==null&&(i("#btn-continue",this.shadowRoot).onclick=this.onContinue,i("#btn-end",this.shadowRoot).onclick=this.onEnd),this.checkLessons()}disconnectedCallback(){this.shadowRoot!==null&&(i("#btn-continue",this.shadowRoot).onclick=null,i("#btn-end",this.shadowRoot).onclick=null)}checkLessons(){En()?this.style.display="block":this.style.display="none"}}document.adoptedStyleSheets=k;b("^#/$","index-page");b("^#/admin$","admin-page");b("^#/books$","book-list-page");b("^#/books/create$","book-create-page");b("^#/books/update/(?<bookId>[^/]+)$","book-update-page");b("^#/book/(?<bookId>[^/]+)/chapters$","chapter-list-page");b("^#/book/(?<bookId>[^/]+)/chapters/create$","chapter-create-page");b("^#/book/(?<bookId>[^/]+)/chapter/(?<chapterId>[^/]+)/update$","chapter-update-page");b("^#/book/(?<bookId>[^/]+)/chapter/(?<chapterId>[^/]+)/questions$","question-list-page");b("^#/book/(?<bookId>[^/]+)/chapter/(?<chapterId>[^/]+)/questions/create$","question-create-page");b("^#/book/(?<bookId>[^/]+)/chapter/(?<chapterId>[^/]+)/question/(?<idx>[^/]+)/update$","question-update-page");b("^#/book/(?<bookId>[^/]+)/chapter/(?<chapterId>[^/]+)/lession-prepare$","lession-prepare-page");b("^#/lession-process$","lession-process-page");b("^#/cache/list$","cache-list-page");b("^#/cache/raw/(?<path>.*)$","cache-raw-page");b("^#/search(/(?<searchStr>[^/]+))?$","search-page");customElements.define("navi-gation",we);customElements.define("error-msg",be);customElements.define("confirm-dialog",Re);customElements.define("question-show",et);customElements.define("key-values",zn);customElements.define("location-info",Zn);customElements.define("json-show",_n);customElements.define("lession-continue",Jn);customElements.define("ui-field",xt);customElements.define("preview-field",Ce);customElements.define("ui-icons",re);customElements.define("not-found-page",ln);customElements.define("index-page",an);customElements.define("admin-page",cn);customElements.define("cache-list-page",Nn);customElements.define("cache-raw-page",Hn);customElements.define("search-page",Fn);customElements.define("book-list-page",dn);customElements.define("book-create-page",hn);customElements.define("book-update-page",sn);customElements.define("chapter-list-page",un);customElements.define("chapter-create-page",pn);customElements.define("chapter-update-page",gn);customElements.define("question-list-page",wn);customElements.define("question-create-page",bn);customElements.define("question-update-page",yn);customElements.define("lession-prepare-page",Dn);customElements.define("lession-process-page",qn);Qt("#/","#/admin","not-found-page");_t();
