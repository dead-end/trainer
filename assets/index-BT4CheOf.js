var Te=Object.defineProperty;var Re=(n,t,e)=>t in n?Te(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var l=(n,t,e)=>Re(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const Ie=`/* 1. Use a more-intuitive box-sizing model */
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
`,Me=`:root {
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
`,ce=new CSSStyleSheet;ce.replace(Ie);const le=new CSSStyleSheet;le.replace(Me);const k=[ce,le],C=n=>{const t=new CustomEvent("error-msg",{detail:n});document.dispatchEvent(t)};class d extends Error{constructor(t){super(t),C(t)}}const ae=2,De=n=>{n.objectStoreNames.contains("cache")||n.createObjectStore("cache",{keyPath:"path"}),n.objectStoreNames.contains("search")||n.createObjectStore("search",{keyPath:"path"}),n.objectStoreNames.contains("admin")||n.createObjectStore("admin",{keyPath:"id"})},qe=()=>new Promise((n,t)=>{const e=indexedDB.open("trainer",ae);e.onupgradeneeded=o=>{const s=e.result;o.oldVersion<ae&&De(s),console.log("db upgrade success!")},e.onerror=o=>{console.error(o.type),t()},e.onsuccess=()=>{const o=e.result;o.onerror=s=>{console.log(s.type)},console.log("db init success!"),n(o)}}),P=qe(),wt=async(n,t)=>(await P).transaction([n],t).objectStore(n),bt=(n,t)=>new Promise((e,o)=>{const s=n.get(t);s.onsuccess=()=>{console.log("Store:",n.name,"id:",t,"get:",s.result?s.result:"NOT-FOUND"),e(s.result)},s.onerror=a=>{C(`Store: ${n.name} id: ${t} storeGet error: ${a}`),o()}}),Et=(n,t)=>new Promise((e,o)=>{const s=n.put(t);s.onsuccess=()=>{console.log("Store:",n.name,"put:",t),e(t)},s.onerror=a=>{C(`Store: ${n.name} put: ${t} error: ${a}`),o()}}),Ct=(n,t)=>new Promise((e,o)=>{const s=n.delete(t);s.onsuccess=()=>{console.log("Store:",n.name,"delete:",t),e(s.result)},s.onerror=a=>{C(`Store: ${n.name} delete: ${t} error: ${a}`),o()}}),de=n=>new Promise((t,e)=>{const o=n.getAll();o.onsuccess=()=>{console.log("Store:",n.name,"get all"),t(o.result)},o.onerror=s=>{C(`Store: ${n.name} get all: ${s}`),e()}}),yt="admin",g=async()=>{const n=await wt(yt,"readonly"),t=await bt(n,"github");if(t===void 0)throw new Error("Unable to get github config.");return t},Pe=async()=>{const n=await wt(yt,"readonly");return bt(n,"github")},Oe=async n=>{const t=await wt(yt,"readwrite");return Et(t,n)},He=async n=>{const t=await wt(yt,"readwrite");return Ct(t,n)},he="github";let W=Pe();const Ne=async()=>{document.dispatchEvent(await W?new Event("login"):new Event("logout"))},je=async()=>await W!==void 0,ze=async(n,t,e)=>{W=Oe({id:he,user:n,repo:t,token:e}),document.dispatchEvent(new Event("login"))},Ae=async()=>{await W&&(W=He(he),document.dispatchEvent(new Event("logout")))},r=(n,t)=>{t||(t=document);const e=t.querySelector(n);if(!e)throw new Error(`Unable to find: ${n}`);return e},Xt=(n,t)=>{t||(t=document);const e=[...t.querySelectorAll(n)];if(e.length===0)throw new Error(`Unable to find: ${n}`);return e},ue=[];let V,pe,St,fe;const x=n=>{if(!V||!V.groups){const t=`Route parameter: ${n} - No parameters found: ${window.location.hash}`;throw new Error(t)}return V.groups[n]},q=(...n)=>n.map(t=>x(t)),re=async()=>{let n=window.location.hash||pe;if(!await je()&&n!==St){window.location.hash=St;return}const t=ue.find(s=>s.regex.test(n));t&&(V=t.regex.exec(window.location.hash));const e=t?t.page:fe,o=document.createElement(e);r("main").replaceChildren(o)},w=(n,t)=>{ue.push({regex:n,page:t})},Ue=(n,t,e)=>{pe=n,St=t,fe=e,window.addEventListener("hashchange",re),window.addEventListener("DOMContentLoaded",re)},u=n=>n.content.cloneNode(!0),O=class O extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.getAttribute("data-icon")||"login",e=u(O.TMPL),o=u(O.ICONS[t]);e.appendChild(o);const s=this.attachShadow({mode:"open"});s.adoptedStyleSheets=k,s.appendChild(e)}}};l(O,"ICONS",{logout:r("#tmpl-icon-logout"),home:r("#tmpl-icon-home"),admin:r("#tmpl-icon-admin"),book:r("#tmpl-icon-book"),delete:r("#tmpl-icon-delete"),update:r("#tmpl-icon-update"),list:r("#tmpl-icon-list"),start:r("#tmpl-icon-start"),cache:r("#tmpl-icon-cache"),search:r("#tmpl-icon-search")}),l(O,"TMPL",r("#tmpl-icon"));let Lt=O;const K=class K extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=u(K.TMPL);r("#logout",t).onclick=this.doLogout;const e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=k,e.appendChild(t),document.addEventListener("login",this.onLogin.bind(this)),document.addEventListener("logout",this.onLogout.bind(this))}}onLogin(){this.shadowRoot&&(r("#nav-items",this.shadowRoot).style.visibility="visible")}onLogout(){this.shadowRoot&&(r("#nav-items",this.shadowRoot).style.visibility="hidden")}doLogout(){Ae()}};l(K,"TMPL",r("#tmpl-navigation"));let $t=K;const Z=class Z extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=u(Z.TMPL);r("#error-btn",t).onclick=this.onOk.bind(this);const e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=k,e.appendChild(t),document.addEventListener("error-msg",this.onError.bind(this)),this.style.display="none"}}onError(t){if(this.shadowRoot){const e=t.detail;r("#error-msg",this.shadowRoot).textContent=e,this.style.display="block"}}onOk(){this.shadowRoot&&(r("#error-msg",this.shadowRoot).textContent="",this.style.display="none")}};l(Z,"TMPL",r("#tmpl-error"));let Tt=Z;const Ge=new RegExp(/[<>]/,"g"),Fe=[{pattern:new RegExp(/^- (.+)=#/,"g"),replace:'<span class="md-right">&bull;</span><span class="md-it">$1</span>'},{pattern:new RegExp(/^(.+)=#/,"g"),replace:'<span class="md-it">$1</span>'},{pattern:new RegExp(/#=(.+)$/,"g"),replace:'<span class="md-it">$1</span>'},{pattern:new RegExp(/^- /,"g"),replace:'<span class="md-right">&bull;</span>'}],We=[{pattern:new RegExp(/#([^#]+)#/,"g"),replace:'<span class="md-it">$1</span>'},{pattern:new RegExp(/\*\*(.)/,"g"),replace:'<span class="md-em">$1</span>'},{pattern:new RegExp(/\*([^*]+)\*/,"g"),replace:'<span class="md-em">$1</span>'}],ie=(n,t)=>(n.forEach(e=>{t=t.replaceAll(e.pattern,e.replace)}),t),Y=n=>{const t=n.replace(Ge,"").split(`
`);let e=[];for(const o of t)e.push(ie(Fe,o.trim()));return ie(We,e.join(`
`))},X=class X extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=u(X.TMPL),e=this.getAttribute("data-id")||"no-id",o=r(`#${e}`),s=r("#preview",t);o.oninput=()=>{console.log("input"),s.innerHTML=Y(o.value)};const a=this.attachShadow({mode:"open"});a.adoptedStyleSheets=k,a.appendChild(t)}}};l(X,"TMPL",r("#tmpl-preview-field"));let Rt=X;const me=()=>"#/books",Be=n=>`#/books/update/${n}`,A=n=>`#/book/${n}/chapters`,Je=n=>`#/book/${n}/chapters/create`,Qe=(n,t)=>`#/book/${n}/chapter/${t}/update`,B=(n,t)=>`#/book/${n}/chapter/${t}/questions`,Ve=(n,t)=>`#/book/${n}/chapter/${t}/questions/create`,Ye=(n,t,e)=>`#/book/${n}/chapter/${t}/question/${e}/update`,Ke=(n,t)=>`#/book/${n}/chapter/${t}/lession-prepare`,ge=()=>"#/lession-process",Ze=()=>"#",Xe=n=>n?`#/search/${n}`:"#/search",we=n=>`#/cache/raw/${n}`,_=class _ extends HTMLElement{constructor(){super(...arguments);l(this,"questionId");l(this,"question");l(this,"doDelete")}static instance(e,o,s){const a=document.createElement("question-show");return a.questionId=e,a.question=o,a.doDelete=s,a}connectedCallback(){if(!this.shadowRoot){const e=u(_.TMPL),o=this.attachShadow({mode:"open"});o.adoptedStyleSheets=k,o.appendChild(e),this.questionId&&this.question&&this.render(this.questionId,this.question)}}render(e,o,s){if(this.shadowRoot){r("#label",this.shadowRoot).textContent=`Question: ${e.idx}`,s&&(r("#progress",this.shadowRoot).textContent=`Progress: ${s.progress} / 3`),r("#quest",this.shadowRoot).innerHTML=Y(o.quest),r("#answer",this.shadowRoot).innerHTML=Y(o.answer);const a=r("#details",this.shadowRoot);!o.details&&a.parentElement&&(a.parentElement.style.display="none"),a.innerHTML=o.details?Y(o.details):"",r('[data-icon="update"]',this.shadowRoot).onclick=()=>{window.location.hash=Ye(e.bookId,e.chapterId,e.idx)};const i=r('[data-icon="delete"]',this.shadowRoot);this.doDelete?i.onclick=()=>{this.doDelete&&this.doDelete(e)}:i.style.display="none"}}show(e){if(this.shadowRoot){const o=e?"flex":"none",s=r("#answer",this.shadowRoot);s.parentElement&&(s.parentElement.style.display=o);const a=r("#details",this.shadowRoot);a.parentElement&&(a.parentElement.style.display=a.innerHTML?o:"none")}}};l(_,"TMPL",r("#tmpl-question-show"));let J=_;const tt=class tt extends HTMLElement{constructor(){super(...arguments);l(this,"fct")}connectedCallback(){if(!this.shadowRoot){const e=u(tt.TMPL),o=this.attachShadow({mode:"open"});o.adoptedStyleSheets=k,o.appendChild(e),r("#btn-cancel",o).onclick=this.onCancel.bind(this),r("#btn-ok",o).onclick=this.onOk.bind(this),this.style.display="none"}}onCancel(){this.shadowRoot&&(this.style.display="none")}async onOk(){if(this.shadowRoot&&this.fct){const e=r("#btn-ok",this.shadowRoot);e.disabled=!0,this.fct().finally(()=>{this.style.display="none",e.disabled=!1})}}activate(e,o,s){this.shadowRoot&&(r("#dialog-title",this.shadowRoot).textContent=e,r("#dialog-msg",this.shadowRoot).textContent=o,this.style.display="block",this.fct=s)}};l(tt,"TMPL",r("#tmpl-confirm-dialog"));let It=tt;const F=class F extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.getAttribute("data-id")||"no-id",e=u(F.TMPL),o=r("label",e);o.htmlFor=t,o.textContent=this.getAttribute("data-label")||"no-label";const s=this.attachShadow({mode:"open"});s.adoptedStyleSheets=k,s.appendChild(e)}}attributeChangedCallback(t,e,o){this.shadowRoot&&t==="data-error"&&(r("#error",this.shadowRoot).textContent=o)}};l(F,"observedAttributes",["data-error"]),l(F,"TMPL",r("#tmpl-ui-field"));let Mt=F;const _e=()=>"books",L=()=>"books/books.json",R=n=>`books/${n}/chapters.json`,I=(n,t)=>`books/${n}/questions.${t}.json`,$=n=>/^books\/[^\/]+\/questions.[^\/]+.json$/.test(n),be=n=>/^books\/[^\/]+\/chapters.json$/.test(n),tn=n=>n==="books/books.json",en=n=>tn(n)||be(n)||$(n),nn=n=>{const t=/^books\/([^\/]+)\/chapters.json$/,e=n.match(t);if(!e)throw new d(`No matches for ${n}`);return e[1]},on=n=>{const t=/^books\/([^\/]+)\/questions.([^\/]+).json$/,e=n.match(t);if(!e)throw new d(`No matches for ${n}`);return[e[1],e[2]]},E="cache",T="search",ye=async()=>{const n=(await P).transaction([E],"readonly").objectStore(E);return await de(n)},sn=async()=>{const n=(await P).transaction([T],"readonly").objectStore(T);return await de(n)},ve=async n=>{const t=(await P).transaction([E],"readonly").objectStore(E);return await bt(t,n)},ke=async n=>{const t=(await P).transaction([T],"readonly").objectStore(T);return await bt(t,n)},_t=async(n,t)=>{const e=t?[E,T]:[E],o=(await P).transaction(e,"readwrite");await Ct(o.objectStore(E),n),t&&await Ct(o.objectStore(T),n)},xe=async(n,t)=>{const e=t?[E,T]:[E],o=(await P).transaction(e,"readwrite");await Et(o.objectStore(E),{path:n.path,data:n.data,hash:n.hash}),t&&await Et(o.objectStore(T),t)};class S{constructor(){l(this,"status",2);l(this,"_message");l(this,"wrapper")}get isOk(){if(this.status===2)throw new Error("Status not set!");return this.status===0}get hasError(){if(this.status===2)throw new Error("Status not set!");return this.status===1}get message(){if(this.status!==1)throw new Error("Status is not ERROR!");if(!this._message)throw new Error("Status is ERROR but no message is set!");return this._message}get value(){if(this.status!==0)throw new Error("Status is not OK!");if(!this.wrapper)throw new Error("Value not set!");return this.wrapper.value}setOk(t){return this.status=0,this.wrapper={value:t},this}setError(t){if(t instanceof S){if(!t.hasError)throw new Error("Result has not an error!");this._message=t._message}else this._message=t;return this.status=1,this}}const vt=async n=>{const t=await g(),e=R(n),o=await b(t,e);if(o.hasError)throw new d(o.message);return o.value.data},te=async(n,t)=>{const e=await g(),o=R(n),s=await b(e,o);if(s.hasError)throw new d(s.message);const a=s.value.data.find(i=>i.id===t);if(!a)throw new d(`Not found: ${t}`);return a},an=async(n,t)=>{const e=await g(),o=R(n),s=await b(e,o);if(s.hasError)throw new d(s.message);const a=s.value.data,i=a.findIndex(h=>h.id===t.id);if(i<0)throw new d(`Chapter not found: ${t.id}`);return a[i]=t,(await v(e,o,a,s.value.hash,`Updating chapter: ${t.id}`)).value},rn=async(n,t)=>{const e=await g(),o=R(n),s=await b(e,o);if(s.hasError)throw new d(s.message);let a=s.value.data;const i=a.length;if(a=a.filter(f=>f.id!==t),i===a.length)throw new d(`Not found: ${t}`);const c=await v(e,o,a,s.value.hash,`Deleting chapter ${t}`);if(c.hasError)throw new d(c.message);const h=await Se(e,I(n,t),"Deleting file.");if(h.hasError)throw new d(h.message);return a},cn=async(n,t)=>{const e=await g(),o=R(n),s=await b(e,o);if(s.hasError)throw new d(s.message);const a=s.value.data;if(a.find(f=>f.id===t.id))throw new d(`Id already exists: ${t.id}`);a.push(t);const i=await v(e,o,a,s.value.hash,`Adding chapter: ${t.id}`);if(i.hasError)throw new d(i.message);const c=I(n,t.id),h=await v(e,c,[],void 0,"Creating chapters!");if(h.hasError)throw new d(h.message);return a},Q=async(n,t)=>{const e=await g(),o=I(n,t),s=await b(e,o);if(s.hasError)throw new d(s.message);return s.value.data},ee=async(n,t,e)=>(await Q(n,t))[e],ln=async(n,t,e,o)=>{const s=await g(),a=I(n,t),i=await b(s,a);if(i.hasError)throw new d(i.message);const c=i.value.data;c[e]=o;const h=await v(s,a,c,i.value.hash,"Updating question!");if(h.hasError)throw new d(h.message)},dn=async(n,t,e)=>{const o=await g(),s=I(n,t),a=await b(o,s);if(a.hasError)throw new d(a.message);const i=a.value.data;i.push(e);const c=await v(o,s,i,a.value.hash,"Adding question!");if(c.hasError)throw new d(c.message)},hn=async(n,t,e)=>{const o=await g(),s=I(n,t),a=await b(o,s);if(a.hasError)throw new d(a.message);const i=a.value.data.filter((h,f)=>e!==f),c=await v(o,s,i,a.value.hash,"Deleting question!");if(c.hasError)throw new d(c.message);return i},Ee=(n,t,e)=>{const o={quest:n,answer:t};return e&&(o.details=e),o},un=new RegExp(/[.,;!?()'"/&+-]/,"g"),pn=new RegExp(/[\*#=~]/,"g"),fn=new Set(["der","die","das","ein","sich","etwas","etw","hier","instr","nom","она","оно","они"]),mn=(n,t,e)=>{let o=n+" "+t;e&&(o=o+" "+e),o=o.replaceAll(un," "),o=o.replaceAll(pn,"");let s=o.split(/\s+/);const a=new Set;return s.forEach(i=>{i.length>2&&!fn.has(i)&&a.add(i.toLowerCase())}),Array.from(a).sort().join(" ")},Ce=(n,t,e)=>{const o=t.map(a=>mn(a.quest,a.answer,a.details));return{path:n,strs:o,hash:e}},gn=n=>n.length>=10,wn=async n=>{const t=[],e=await ne();for(const o of e){const s=await vt(o.id);for(const a of s){const i=I(o.id,a.id),c=await ke(i);if(!c){C(`No search index for: ${i}`);continue}for(let h=0;h<c.strs.length;h++){const f=c.strs[h];if(f.indexOf(n)>=0){const y={bookId:o.id,chapterId:a.id,idx:h},G=await ee(y.bookId,y.chapterId,y.idx);if(t.push({questId:y,quest:G,strIdx:f}),gn(t))return t}}}}return t},bn=async n=>{const t=await ke(n);if(!t)throw new d(`Unable to get from cache: ${n}`);return JSON.stringify(t.strs,null,2)},yn=n=>window.btoa(unescape(encodeURIComponent(n))),vn=n=>decodeURIComponent(escape(window.atob(n))),kt=async n=>n.statusText?n.statusText:n.text(),xt=(n,t,e)=>`https://api.github.com/repos/${n}/${t}/contents/${e}`,kn=async(n,t,e,o,s)=>{const a=new S;try{const i={content:yn(t),message:o};e&&(i.sha=e);const c={method:"PUT",headers:{Accept:"application/vnd.github.v3+json",authorization:`token ${s}`},body:JSON.stringify(i)},h=await fetch(n,c);if(!h.ok){const y=await kt(h);return a.setError(`githubWriteContent - Url: ${n} Error: ${y}`)}const f=await h.json();return console.log(f),a.setOk(f.content.sha)}catch(i){return a.setError(`githubWriteContent - Url: ${n} Error: ${i}`)}},xn=async(n,t)=>{const e=new S;try{const o={Accept:"application/vnd.github.v3+json"};t&&(o.authorization=`token ${t}`);const s=await fetch(n,o);if(!s.ok){const c=await kt(s);return e.setError(`githubReadContent - Url: ${n} Read error: ${c}`)}const a=await s.json(),i=vn(a.content);return e.setOk({content:i,hash:a.sha})}catch(o){return e.setError(`githubReadContent - Url: ${n} Error: ${o}`)}},En=async(n,t,e,o)=>{const s=new S;try{const a={message:e,sha:t},i={method:"DELETE",headers:{Accept:"application/vnd.github.v3+json",authorization:`token ${o}`},body:JSON.stringify(a)},c=await fetch(n,i);if(!c.ok){const h=await kt(c);return s.setError(`githubDelete - Url: ${n} Error: ${h}`)}return console.log(`githubDelete - Url: ${n}`),s.setOk()}catch(a){return s.setError(`githubDelete - Url: ${n} Error: ${a}`)}},Cn=async(n,t)=>{const e=new S;try{const o={Accept:"application/vnd.github.v3+json"};t&&(o.authorization=`token ${t}`);const s=await fetch(n,o);if(!s.ok){const a=await kt(s);return e.setError(`githubListing - Url: ${n} Read error: ${a}`)}return e.setOk(await s.json())}catch(o){return e.setError(`githubListing - Url: ${n} Error: ${o}`)}},b=async(n,t)=>{const e=new S,o=await ve(t);if(o)return e.setOk(o);const s=await xn(xt(n.user,n.repo,t),n.token);if(s.hasError)return e.setError(`jsonGet - ${s.message}`);const a={path:t,data:JSON.parse(s.value.content),hash:s.value.hash},i=$(t)?Ce(t,a.data,a.hash):void 0;return xe(a,i),e.setOk(a)},v=async(n,t,e,o,s)=>{const a=new S,i=await kn(xt(n.user,n.repo,t),JSON.stringify(e),o,s,n.token);if(i.hasError)return a.setError(i);const c={path:t,data:e,hash:i.value},h=$(t)?Ce(t,c.data,c.hash):void 0;return xe(c,h),a.setOk(e)},Se=async(n,t,e)=>{const o=new S,s=await b(n,t);if(s.hasError)return o.setError(s.message);const a=await En(xt(n.user,n.repo,t),s.value.hash,e,n.token);return a.hasError?o.setError(a):(await _t(t,$(t)),o.setOk())},ne=async()=>{const n=await g(),t=await b(n,L());if(t.hasError)throw new d(t.message);return t.value.data},oe=async n=>{const t=await g(),e=await b(t,L());if(e.hasError)throw new d(e.message);const o=e.value.data.find(s=>s.id===n);if(!o)throw new d(`Book not found: ${n}`);return o},Sn=async n=>{const t=await g(),e=await b(t,L());if(e.hasError)throw new d(e.message);const o=e.value.data;if(o.find(c=>c.id===n.id))throw new d(`Id already exists: ${n.id}`);o.push(n);const s=await v(t,L(),o,e.value.hash,`Adding book: ${n.id}`);if(s.hasError)throw new d(s.message);const a=R(n.id),i=await v(t,a,[],void 0,"Creating chapters!");if(i.hasError)throw new d(i.message);return s.value},Ln=async n=>{const t=await g(),e=await b(t,L());if(e.hasError)throw new d(e.message);const o=e.value.data,s=o.findIndex(i=>i.id===n.id);if(s<0)throw new d(`Book not found: ${n.id}`);o[s]=n;const a=await v(t,L(),o,e.value.hash,`Updating book: ${n.id}`);if(a.hasError)throw new d(a.message);return a.value},$n=async n=>{const t=await vt(n);if(t.length>0)throw new d(`Book: ${n} has chapters: ${t.length}`);const e=await g(),o=await b(e,L());if(o.hasError)throw new d(o.message);let s=o.value.data;const a=s.length;if(s=s.filter(h=>h.id!==n),a===s.length)throw new d(`Book not found: ${n}`);const i=await v(e,L(),s,o.value.hash,`Deleting book ${n}`);if(i.hasError)throw new d(i.message);const c=await Se(e,R(n),`Deleting file for: ${n}`);if(c.hasError)throw new d(c.message);return s},p=(n,t)=>{const e=n.get(t);if(typeof e=="string")return{id:t,value:e.trim()};throw new Error(`Unknown value: ${e} for key: ${t}`)},M=n=>{Xt("ui-field",n).forEach(t=>{t.removeAttribute("data-error")})},se=(n,t,e)=>{r(`ui-field[data-id="${t}"]`,n).setAttribute("data-error",e)},D=n=>Xt("ui-field",n).find(t=>t.hasAttribute("data-error")),m=(n,t)=>t.value?!0:(se(n,t.id,"Please enter a value!"),!1),Le=(n,t)=>/^[-_a-zA-Z0-9]+$/.test(t.value)?!0:(se(n,t.id,"Please enter an id value!"),!1),Tn=(n,t,e)=>t.value.length<e?(se(n,t.id,`Input has to be at least ${e} characters!`),!1):!0,et=class et extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(et.TMPL);r("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}async render(){const t=x("bookId");r("#location-info").show(t);const e=await oe(t);r("#id").value=e.id,r("#title").value=e.title,r("#desc").value=e.description}async handleSubmit(t){t.preventDefault();const e=t.target,o=new FormData(e),s=p(o,"id"),a=p(o,"title"),i=p(o,"desc");M(e),m(e,a),m(e,i);const c=r("button",e);D(e)||(c.disabled=!0,Ln({id:s.value,title:a.value,description:i.value}).then(()=>{window.location.hash=me()}).finally(()=>{c.disabled=!1}))}};l(et,"TMPL",r("#book-update-page"));let Dt=et;const Rn=(n,t)=>Math.floor(Math.random()*(t-n+1)+n),In=n=>{for(let t=0;t<n.length;t++){const e=Rn(0,n.length-1);if(t===e)continue;const o=n[t];n[t]=n[e],n[e]=o}},U="lession",Mn=(n,t,e)=>{if(n.length==0)return;const o=n.map(a=>({questionId:a,progress:t}));In(o);const s={learning:o,learned:[],reverse:e};localStorage.setItem(U,JSON.stringify(s))},Dn=()=>localStorage.getItem(U)!=null,qn=()=>{const n=localStorage.getItem(U);if(n)return JSON.parse(n)},Pn=n=>n.learning.length>0?(localStorage.setItem(U,JSON.stringify(n)),!0):(localStorage.removeItem(U),!1),On=()=>{localStorage.removeItem(U)},Hn=n=>{const t=[0,0,0,n.learned.length];return n.learning.forEach(e=>{if(e.progress>2)throw Error(`Invalid progress ${e.progress}`);t[e.progress]++}),t},Nn=n=>{let t=0;return t+=n[0]*3,t+=n[1]*2,t+=n[2]*1,t},nt=class nt extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(nt.TMPL);Dn()?(r("#btn-continue",t).onclick=this.onContinue.bind(this),r("#btn-end",t).onclick=this.onEnd.bind(this)):r("#lession",t).style.display="none",this.appendChild(t)}}onContinue(){window.location.hash=ge()}onEnd(){On(),r("#lession").style.display="none"}};l(nt,"TMPL",r("#index-page"));let qt=nt;const ot=class ot extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(ot.TMPL);this.appendChild(t)}}};l(ot,"TMPL",r("#not-found-page"));let Pt=ot;const st=class st extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(st.TMPL);r("form",t).onsubmit=this.handleSubmit.bind(this),r("#admin-edit",t).onclick=this.onEdit.bind(this),this.appendChild(t),document.addEventListener("logout",this.onLogout.bind(this))}this.getAdmin(),this.setEdit(!1)}handleSubmit(t){t.preventDefault();const e=t.target,o=new FormData(e),s=p(o,"user"),a=p(o,"repo"),i=p(o,"token");M(e),m(e,s),m(e,a),m(e,i);const c=r("button",e);D(e)||(c.disabled=!0,ze(s.value,a.value,i.value).finally(()=>{this.setEdit(!1),c.disabled=!1}))}async getAdmin(){const t=await g();r("#user").value=t.user,r("#repo").value=t.repo,r("#token").value=t.token}onEdit(){this.setEdit(!0)}setEdit(t){r("#user").disabled=!t,r("#repo").disabled=!t,r("#token").disabled=!t,r("#admin-edit").disabled=t,r("#admin-save").disabled=!t}onLogout(){this.getAdmin()}};l(st,"TMPL",r("#admin-page"));let Ot=st;const H=class H extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(H.TMPL);this.appendChild(t)}this.render()}async render(){const t=[],e=r("#confirm-dialog"),o=await ne();o.forEach(s=>{const a=u(H.TMPL_ROW);r('[data-id="id"]',a).textContent=s.id,r('[data-id="title"]',a).textContent=s.title,r('[data-id="desc"]',a).textContent=s.description,r('[data-icon="delete"]',a).onclick=this.onDelete(e,s.id).bind(this),r('[data-icon="update"]',a).onclick=()=>{window.location.hash=Be(s.id)},r('[data-icon="list"]',a).onclick=()=>{window.location.hash=A(s.id)},t.push(a)}),r("tbody").replaceChildren(...t),console.log(o)}onDelete(t,e){return()=>{t.activate("Delete Book",`Do you realy want to delete the book: ${e}?`,this.getDeleteFct(e))}}getDeleteFct(t){return async()=>{await $n(t),this.render()}}};l(H,"TMPL",r("#book-list-page")),l(H,"TMPL_ROW",r("#tmpl-book-list"));let Ht=H;const at=class at extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(at.TMPL);r("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}}async handleSubmit(t){t.preventDefault();const e=t.target,o=new FormData(e),s=p(o,"id"),a=p(o,"title"),i=p(o,"desc");M(e),m(e,s)&&Le(e,s),m(e,a),m(e,i);const c=r("button",e);D(e)||(console.log("id",s,"title",a,"desc",i),c.disabled=!0,Sn({id:s.value,title:a.value,description:i.value}).then(()=>{window.location.hash=me()}).finally(()=>{c.disabled=!1}))}};l(at,"TMPL",r("#book-create-page"));let Nt=at;const N=class N extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(N.TMPL);this.appendChild(t)}this.render()}async render(){const t=x("bookId"),e=r("#confirm-dialog");r("#location-info").show(t),this.addLinks(t);const o=[];(await vt(t)).forEach(a=>{const i=u(N.TMPL_ROW);r('[data-id="id"]',i).textContent=a.id,r('[data-id="title"]',i).textContent=a.title,r('[data-icon="delete"]',i).onclick=this.onDelete(e,t,a.id).bind(this),r('[data-icon="update"]',i).onclick=()=>{window.location.hash=Qe(t,a.id)},r('[data-icon="list"]',i).onclick=()=>{window.location.hash=B(t,a.id)},r('[data-icon="start"]',i).onclick=()=>{window.location.hash=Ke(t,a.id)},o.push(i)}),r("tbody").replaceChildren(...o)}addLinks(t){r("#chapter-create-link").href=Je(t),r("#chapter-cache-link").href=we(R(t))}onDelete(t,e,o){return()=>{t.activate("Delete Chapter",`Do you realy want to delete the chapter: ${o}?`,this.getDeleteFct(e,o))}}getDeleteFct(t,e){return async()=>{rn(t,e).then(()=>{this.render()})}}};l(N,"TMPL",r("#chapter-list-page")),l(N,"TMPL_ROW",r("#tmpl-chapter-list"));let jt=N;const rt=class rt extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(rt.TMPL);r("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}render(){const t=x("bookId");r("#location-info").show(t);const e=A(t);r("#chapter-list-link",this).href=e}async handleSubmit(t){t.preventDefault();const e=x("bookId"),o=t.target,s=new FormData(o),a=p(s,"id"),i=p(s,"title");if(M(o),m(o,a)&&Le(o,a),m(o,i),!D(o)){const c=r("#btn-submit",o);c.disabled=!0,cn(e,{id:a.value,title:i.value}).then(()=>{window.location.hash=A(e)}).finally(()=>{c.disabled=!1})}}};l(rt,"TMPL",r("#chapter-create-page"));let zt=rt;const it=class it extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(it.TMPL);r("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}async render(){const t=x("bookId"),e=x("chapterId");r("#location-info").show(t,e);const o=A(t);r("#chapter-list-link",this).href=o;const s=await te(t,e);r("#id").value=s.id,r("#title").value=s.title}async handleSubmit(t){t.preventDefault();const e=x("bookId"),o=t.target,s=new FormData(o),a=p(s,"id"),i=p(s,"title");if(M(o),m(o,i),!D(o)){const c=r("#btn-submit",o);c.disabled=!0,an(e,{id:a.value,title:i.value}).then(()=>{window.location.hash=A(e)}).finally(()=>{c.disabled=!1})}}};l(it,"TMPL",r("#chapter-update-page"));let At=it;const ct=class ct extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(ct.TMPL);this.appendChild(t)}this.render()}async render(){const[t,e]=q("bookId","chapterId");r("#location-info").show(t,e),this.addLinks(t,e);const o=await Q(t,e),s=[];o.forEach((a,i)=>{s.push(J.instance({bookId:t,chapterId:e,idx:i},a,this.doDelete.bind(this)))}),r('[data-id="questions"]').replaceChildren(...s)}addLinks(t,e){r("#question-create-link").href=Ve(t,e),r("#question-cache-link").href=we(I(t,e)),r("#chapter-list-link").href=A(t)}doDelete(t){r("#confirm-dialog").activate("Delete Question",`Do you realy want to delete the question: ${t.idx}?`,this.getDeleteFct(t))}getDeleteFct(t){return async()=>{hn(t.bookId,t.chapterId,t.idx).then(()=>{this.render()})}}};l(ct,"TMPL",r("#question-list-page"));let Ut=ct;const lt=class lt extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(lt.TMPL);r("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}render(){const[t,e]=q("bookId","chapterId");r("#location-info").show(t,e),r("#question-list-link",this).href=B(t,e)}async handleSubmit(t){t.preventDefault();const[e,o]=q("bookId","chapterId"),s=t.target,a=new FormData(s),i=p(a,"quest"),c=p(a,"answer"),h=p(a,"details");if(M(s),m(s,i),m(s,c),!D(s)){const f=r("#btn-submit",s);f.disabled=!0;const y=Ee(i.value,c.value,h.value);dn(e,o,y).then(()=>{window.location.hash=B(e,o)}).finally(()=>{f.disabled=!1})}}};l(lt,"TMPL",r("#question-create-page"));let Gt=lt;const dt=class dt extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(dt.TMPL);r("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}async render(){const[t,e,o]=q("bookId","chapterId","idx");r("#location-info").show(t,e,o),r("#question-list-link",this).href=B(t,e);const s=await ee(t,e,parseInt(o));this.setValue("#quest",s.quest),this.setValue("#answer",s.answer),this.setValue("#details",s.details||"")}setValue(t,e){const o=r(t);o.value=e,o.dispatchEvent(new Event("input"))}async handleSubmit(t){t.preventDefault();const[e,o,s]=q("bookId","chapterId","idx"),a=t.target,i=new FormData(a),c=p(i,"quest"),h=p(i,"answer"),f=p(i,"details");if(M(a),m(a,c),m(a,h),!D(a)){const y=r("#btn-submit",a);y.disabled=!0;const G=Ee(c.value,h.value,f.value);ln(e,o,parseInt(s),G).then(()=>{window.location.hash=B(e,o)}).finally(()=>{y.disabled=!1})}}};l(dt,"TMPL",r("#question-update-page"));let Ft=dt;const ht=class ht extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(ht.TMPL);r("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}async render(){const[t,e]=q("bookId","chapterId"),o=await Q(t,e);o.length===0&&(C("The chapter has no questions!"),r("#btn-start").disabled=!0),this.addLessionInfo(t,e,o)}async handleSubmit(t){t.preventDefault();const e=t.target,o=new FormData(e),s=p(o,"correct"),a=p(o,"reverse"),[i,c]=q("bookId","chapterId"),f=(await Q(i,c)).map((y,G)=>({bookId:i,chapterId:c,idx:G}));Mn(f,parseInt(s.value),a.value==="true"),window.location.hash=ge()}async addLessionInfo(t,e,o){const s=await oe(t),a=await te(t,e);r("#lession-info").update([{key:"Book",value:s.title},{key:"Chapter",value:a.title},{key:"Length",value:o.length.toString()}])}};l(ht,"TMPL",r("#lession-prepare-page"));let Wt=ht;const ut=class ut extends HTMLElement{constructor(){super(...arguments);l(this,"lession");l(this,"questionProgress");l(this,"onCorrect",()=>{this.update(this.questionProgress.progress+1)})}connectedCallback(){if(!this.hasChildNodes()){const e=u(ut.TMPL);[{id:"#btn-show",fct:this.onShow},{id:"#btn-correct",fct:this.onCorrect},{id:"#btn-wrong",fct:this.onWrong},{id:"#btn-skip",fct:this.onSkip},{id:"#btn-learned",fct:this.onLearned},{id:"#btn-stop",fct:this.onStop}].forEach(o=>{r(o.id,e).onclick=o.fct.bind(this)}),this.appendChild(e),this.load()}}load(){if(this.lession=qn(),!this.lession){this.setStateRunning(!1),C("No lession found!");return}this.setStateRunning(!0),this.next()}next(){if(this.lession){this.addProgressInfo(Hn(this.lession));const e=this.lession.learning.shift();if(e)this.questionProgress=e,this.setQuestion(this.questionProgress.questionId,this.questionProgress),this.setStateQuestion(!0);else{this.setStateRunning(!1);return}this.questionProgress&&r("location-info").show(this.questionProgress.questionId.bookId,this.questionProgress.questionId.chapterId,this.questionProgress.questionId.idx.toString())}}async update(e){this.questionProgress&&this.lession&&(this.questionProgress.progress=e,this.questionProgress.progress<3?this.lession.learning.push(this.questionProgress):this.lession.learned.push(this.questionProgress),Pn(this.lession),this.next())}onShow(){this.setStateQuestion(!1)}onWrong(){this.update(0)}onLearned(){this.update(3)}onSkip(){this.update(this.questionProgress.progress)}onStop(){window.location.hash=Ze()}setStateQuestion(e){this.doShow('[data-show="ask"]',e),this.doShow('[data-show="show"]',!e),r("#question-show").show(!e)}setStateRunning(e){this.doShow('[data-show="running"]',e),e||(this.doShow('[data-show="ask"]',!1),this.doShow('[data-show="show"]',!1))}doShow(e,o){Xt(e).forEach(s=>{const a=s.dataset.display||"block";s.style.display=o?a:"none"})}async setQuestion(e,o){const s=await ee(e.bookId,e.chapterId,e.idx);r("#question-show").render(e,s,o)}addProgressInfo(e){r("#progress-info").update([{key:"Unlearned",value:e[0].toString()},{key:"One correct",value:e[1].toString()},{key:"Two correct",value:e[2].toString()},{key:"Learned",value:e[3].toString()},{key:"Total",value:Nn(e).toString()}])}};l(ut,"TMPL",r("#lession-process-page"));let Bt=ut;const jn=async()=>{const n=[],t=await ne();for(const e of t){const o=await vt(e.id);for(const s of o)n.push(Q(e.id,s.id))}await Promise.all(n)},zn=async n=>{const t=await ve(n);if(!t)throw new d(`Unable to get from cache: ${n}`);return JSON.stringify(t.data,null,2)},$e=async(n,t,e)=>{const o=await Cn(xt(t.user,t.repo,e),t.token);if(o.hasError){n.error=`cacheListing - ${o.message}`;return}n.listing.push(...o.value);const s=[];for(const a of o.value)a.type==="dir"&&s.push($e(n,t,a.path));await Promise.all(s)},An=async()=>{const n=await g(),t={error:void 0,listing:[]};if(await $e(t,n,_e()),t.error){C(t.error);return}const e=await ye();for(const o of e){const s=t.listing.find(a=>a.path===o.path);(!s||o.hash!==s.sha)&&await _t(o.path,!0)}},j=class j extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(j.TMPL);r("#cache-load",t).onclick=this.onCacheLoad.bind(this),r("#cache-check",t).onclick=this.onCacheCheck.bind(this),this.appendChild(t)}this.render()}onCacheLoad(){r("#confirm-dialog").activate("Load Cache","Do you realy want to load all files?",async()=>{await jn(),this.render()})}onCacheCheck(){r("#confirm-dialog").activate("Check Cache","Do you realy want to check all files?",async()=>{await An(),this.render()})}getHash(t){return t.substring(0,6)}getSearchHash(t,e){return $(t)?e?this.getHash(e.hash):"missing":""}async render(){const t=r("#confirm-dialog"),e=[],o=await ye(),s=await sn();o.forEach(a=>{const i=u(j.TMPL_ROW),c=s.find(h=>h.path===a.path);r('[data-id="path"]',i).textContent=a.path,r('[data-id="cache-hash"]',i).textContent=this.getHash(a.hash),r('[data-id="search-hash"]',i).textContent=this.getSearchHash(a.path,c),r('[data-icon="delete"]',i).onclick=this.onDelete(t,a.path).bind(this),e.push(i)}),r("tbody").replaceChildren(...e)}onDelete(t,e){return()=>{t.activate("Delete Cache Entry",`Do you realy want to delete the cache entry: ${e}?`,async()=>{await _t(e,$(e)),this.render()})}}};l(j,"TMPL",r("#cache-page")),l(j,"TMPL_ROW",r("#tmpl-cache-list"));let Jt=j;const pt=class pt extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(pt.TMPL);r("#btn-cancel",t).onclick=()=>{history.back()},this.appendChild(t)}this.render()}async render(){const t=x("path");if(!en(t)){C(`Path is not valid ${t}`);return}this.doCache(t),this.doSearch(t)}async doCache(t){const e=r("#location-info");if($(t)){const[o,s]=on(t);e.show(o,s)}else if(be(t)){const o=nn(t);e.show(o)}else e.hide();r("#cache").show("Cache",t,await zn(t))}async doSearch(t){const e=r("#search");if($(t)){e.show("Search",t,await bn(t));return}e.hide()}};l(pt,"TMPL",r("#cache-raw-page"));let Qt=pt;const ft=class ft extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(ft.TMPL);r("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}async render(){const t=x("searchStr");if(!t)return;const e=decodeURI(t);if(e.length<3)return;r("#search").value=e;const o=[],s=await wn(e.toLowerCase());r('[data-id="num"]').innerText=s.length===0?"Nothing found!":`Numer of results: ${s.length}`,s.forEach(a=>{o.push(J.instance(a.questId,a.quest))}),r('[data-id="questions"]').replaceChildren(...o)}async handleSubmit(t){t.preventDefault();const e=t.target,o=new FormData(e),s=p(o,"search");M(e),m(e,s)&&Tn(e,s,3),D(e)||(window.location.hash=Xe(encodeURI(s.value)))}};l(ft,"TMPL",r("#search-page"));let Vt=ft;const mt=class mt extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=u(mt.TMPL),e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=k,e.appendChild(t)}}show(t,e,o){this.shadowRoot&&(r("#wrapper",this.shadowRoot).style.display="flex",r("#title",this.shadowRoot).innerText=t,r("#path",this.shadowRoot).innerText=e,r("#content",this.shadowRoot).innerText=o)}hide(){this.style.display="none"}};l(mt,"TMPL",r("#tmpl-json-show"));let Yt=mt;const z=class z extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=u(z.TMPL),e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=k,e.appendChild(t)}}update(t){if(this.shadowRoot){const e=[];t.forEach(o=>{const s=u(z.TMPL_ENTRY);r('[data-id="key"]',s).textContent=o.key,r('[data-id="value"]',s).textContent=o.value,e.push(s)}),r("#wrapper",this.shadowRoot).replaceChildren(...e)}}};l(z,"TMPL",r("#tmpl-key-values")),l(z,"TMPL_ENTRY",r("#tmpl-key-values-entry"));let Kt=z;const gt=class gt extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=u(gt.TMPL),e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=k,e.appendChild(t)}}async show(t,e,o){if(this.shadowRoot){const s=[],a=await oe(t);if(s.push({key:"Book",value:a.title}),e){const i=await te(t,e);s.push({key:"Chapter",value:i.title})}o&&s.push({key:"Question",value:o}),r("#info",this.shadowRoot).update(s)}}hide(){this.style.display="none"}};l(gt,"TMPL",r("#tmpl-location-info"));let Zt=gt;document.adoptedStyleSheets=k;w(/^#\/$/,"index-page");w(/^#\/admin$/,"admin-page");w(/^#\/books$/,"book-list-page");w(/^#\/books\/create$/,"book-create-page");w(/^#\/books\/update\/(?<bookId>[^\/]+)$/,"book-update-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapters$/,"chapter-list-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapters\/create$/,"chapter-create-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/update$/,"chapter-update-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/questions$/,"question-list-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/questions\/create$/,"question-create-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/question\/(?<idx>[^\/]+)\/update$/,"question-update-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/lession-prepare$/,"lession-prepare-page");w(/^#\/lession-process$/,"lession-process-page");w(/^#\/cache\/list$/,"cache-list-page");w(/^#\/cache\/raw\/(?<path>.*)$/,"cache-raw-page");w(/^#\/search(\/(?<searchStr>[^\/]+))?$/,"search-page");customElements.define("navi-gation",$t);customElements.define("error-msg",Tt);customElements.define("confirm-dialog",It);customElements.define("question-show",J);customElements.define("key-values",Kt);customElements.define("location-info",Zt);customElements.define("json-show",Yt);customElements.define("ui-field",Mt);customElements.define("preview-field",Rt);customElements.define("ui-icons",Lt);customElements.define("not-found-page",Pt);customElements.define("index-page",qt);customElements.define("admin-page",Ot);customElements.define("cache-list-page",Jt);customElements.define("cache-raw-page",Qt);customElements.define("search-page",Vt);customElements.define("book-list-page",Ht);customElements.define("book-create-page",Nt);customElements.define("book-update-page",Dt);customElements.define("chapter-list-page",jt);customElements.define("chapter-create-page",zt);customElements.define("chapter-update-page",At);customElements.define("question-list-page",Ut);customElements.define("question-create-page",Gt);customElements.define("question-update-page",Ft);customElements.define("lession-prepare-page",Wt);customElements.define("lession-process-page",Bt);Ue("#/","#/admin","not-found-page");Ne();
