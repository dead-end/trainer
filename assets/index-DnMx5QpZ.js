var Xt=Object.defineProperty;var _t=(n,t,e)=>t in n?Xt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var h=(n,t,e)=>_t(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();const te=`/* 1. Use a more-intuitive box-sizing model */
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
`,ee=`:root {
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
`,qt=new CSSStyleSheet;qt.replace(te);const Tt=new CSSStyleSheet;Tt.replace(ee);const x=[qt,Tt],P=n=>{const t=new CustomEvent("error-msg",{detail:n});document.dispatchEvent(t)};class d extends Error{constructor(t){super(t),P(t)}}const Rt=2,ne=n=>{n.objectStoreNames.contains("cache")||n.createObjectStore("cache",{keyPath:"path"}),n.objectStoreNames.contains("search")||n.createObjectStore("search",{keyPath:"path"}),n.objectStoreNames.contains("admin")||n.createObjectStore("admin",{keyPath:"id"})},se=()=>new Promise((n,t)=>{const e=indexedDB.open("trainer",Rt);e.onupgradeneeded=s=>{const o=e.result;s.oldVersion<Rt&&ne(o),console.log("db upgrade success!")},e.onerror=s=>{console.error(s.type),t()},e.onsuccess=()=>{const s=e.result;s.onerror=o=>{console.log(o.type)},console.log("db init success!"),n(s)}}),H=se(),st=async(n,t)=>(await H).transaction([n],t).objectStore(n),ot=(n,t)=>new Promise((e,s)=>{const o=n.get(t);o.onsuccess=()=>{console.log("Store:",n.name,"id:",t,"get:",o.result?o.result:"NOT-FOUND"),e(o.result)},o.onerror=a=>{P(`Store: ${n.name} id: ${t} storeGet error: ${a}`),s()}}),dt=(n,t)=>new Promise((e,s)=>{const o=n.put(t);o.onsuccess=()=>{console.log("Store:",n.name,"put:",t),e(t)},o.onerror=a=>{P(`Store: ${n.name} put: ${t} error: ${a}`),s()}}),lt=(n,t)=>new Promise((e,s)=>{const o=n.delete(t);o.onsuccess=()=>{console.log("Store:",n.name,"delete:",t),e(o.result)},o.onerror=a=>{P(`Store: ${n.name} delete: ${t} error: ${a}`),s()}}),Mt=n=>new Promise((t,e)=>{const s=n.getAll();s.onsuccess=()=>{console.log("Store:",n.name,"get all"),t(s.result)},s.onerror=o=>{P(`Store: ${n.name} get all: ${o}`),e()}}),at="admin",w=async()=>{const n=await st(at,"readonly"),t=await ot(n,"github");if(t===void 0)throw new Error("Unable to get github config.");return t},oe=async()=>{const n=await st(at,"readonly");return ot(n,"github")},ae=async n=>{const t=await st(at,"readwrite");return dt(t,n)},ie=async n=>{const t=await st(at,"readwrite");return lt(t,n)},Ot="github";let G=oe();const re=async()=>{document.dispatchEvent(await G?new Event("login"):new Event("logout"))},ce=async()=>await G!==void 0,de=async(n,t,e)=>{G=ae({id:Ot,user:n,repo:t,token:e}),document.dispatchEvent(new Event("login"))},le=async()=>{await G&&(G=ie(Ot),document.dispatchEvent(new Event("logout")))},i=(n,t)=>{t||(t=document);const e=t.querySelector(n);if(!e)throw new Error(`Unable to find: ${n}`);return e},xt=(n,t)=>{t||(t=document);const e=[...t.querySelectorAll(n)];if(e.length===0)throw new Error(`Unable to find: ${n}`);return e},Ht=[];let W,Nt,ht,At;const E=n=>{if(!W||!W.groups){const t=`Route parameter: ${n} - No parameters found: ${window.location.hash}`;throw new Error(t)}return W.groups[n]},O=(...n)=>n.map(t=>E(t)),It=async()=>{let n=window.location.hash||Nt;if(!await ce()&&n!==ht){window.location.hash=ht;return}const t=Ht.find(o=>o.regex.test(n));t&&(W=t.regex.exec(window.location.hash));const e=t?t.page:At,s=document.createElement(e);i("main").replaceChildren(s)},b=(n,t)=>{Ht.push({regex:n,page:t})},he=(n,t,e)=>{Nt=n,ht=t,At=e,window.addEventListener("hashchange",It),window.addEventListener("DOMContentLoaded",It)},y=n=>n.content.cloneNode(!0),N=class N extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.getAttribute("data-icon")||"login",e=y(N.TMPL),s=y(N.ICONS[t]);e.appendChild(s);const o=this.attachShadow({mode:"open"});o.adoptedStyleSheets=x,o.appendChild(e)}}};h(N,"ICONS",{logout:i("#tmpl-icon-logout"),home:i("#tmpl-icon-home"),admin:i("#tmpl-icon-admin"),book:i("#tmpl-icon-book"),delete:i("#tmpl-icon-delete"),update:i("#tmpl-icon-update"),list:i("#tmpl-icon-list"),start:i("#tmpl-icon-start"),cache:i("#tmpl-icon-cache"),search:i("#tmpl-icon-search"),info:i("#tmpl-icon-info")}),h(N,"TMPL",i("#tmpl-icon"));let ut=N;const Y=class Y extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=y(Y.TMPL);i("#logout",t).onclick=this.doLogout;const e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=x,e.appendChild(t),document.addEventListener("login",this.onLogin.bind(this)),document.addEventListener("logout",this.onLogout.bind(this))}}onLogin(){this.shadowRoot&&(i("#nav-items",this.shadowRoot).style.visibility="visible")}onLogout(){this.shadowRoot&&(i("#nav-items",this.shadowRoot).style.visibility="hidden")}doLogout(){le()}};h(Y,"TMPL",i("#tmpl-navigation"));let pt=Y;const K=class K extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=y(K.TMPL);i("#error-btn",t).onclick=this.onOk.bind(this);const e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=x,e.appendChild(t),document.addEventListener("error-msg",this.onError.bind(this)),this.style.display="none"}}onError(t){if(this.shadowRoot){const e=t.detail;i("#error-msg",this.shadowRoot).textContent=e,this.style.display="block"}}onOk(){this.shadowRoot&&(i("#error-msg",this.shadowRoot).textContent="",this.style.display="none")}};h(K,"TMPL",i("#tmpl-error"));let gt=K;const ue=new RegExp(/[<>]/,"g"),pe=[{pattern:new RegExp(/^- (.+)=#/,"g"),replace:'<span class="md-right">&bull;</span><span class="md-it">$1</span>'},{pattern:new RegExp(/^(.+)=#/,"g"),replace:'<span class="md-it">$1</span>'},{pattern:new RegExp(/#=(.+)$/,"g"),replace:'<span class="md-it">$1</span>'},{pattern:new RegExp(/^- /,"g"),replace:'<span class="md-right">&bull;</span>'}],ge=[{pattern:new RegExp(/#([^#]+)#/,"g"),replace:'<span class="md-it">$1</span>'},{pattern:new RegExp(/\*\*(.)/,"g"),replace:'<span class="md-em">$1</span>'},{pattern:new RegExp(/\*([^*]+)\*/,"g"),replace:'<span class="md-em">$1</span>'}],Dt=(n,t)=>(n.forEach(e=>{t=t.replaceAll(e.pattern,e.replace)}),t),V=n=>{const t=n.replace(ue,"").split(`
`);let e=[];for(const s of t)e.push(Dt(pe,s.trim()));return Dt(ge,e.join(`
`))},Z=class Z extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=y(Z.TMPL),e=this.getAttribute("data-id")||"no-id",s=i(`#${e}`),o=i("#preview",t);s.oninput=()=>{console.log("input"),o.innerHTML=V(s.value)};const a=this.attachShadow({mode:"open"});a.adoptedStyleSheets=x,a.appendChild(t)}}};h(Z,"TMPL",i("#tmpl-preview-field"));let ft=Z;const jt=()=>"#/books",fe=n=>`#/books/update/${n}`,j=n=>`#/book/${n}/chapters`,me=n=>`#/book/${n}/chapters/create`,we=(n,t)=>`#/book/${n}/chapter/${t}/update`,Q=(n,t)=>`#/book/${n}/chapter/${t}/questions`,be=(n,t)=>`#/book/${n}/chapter/${t}/questions/create`,ve=(n,t,e)=>`#/book/${n}/chapter/${t}/question/${e}/update`,ye=(n,t)=>`#/book/${n}/chapter/${t}/lession-prepare`,Ut=()=>"#/lession-process",ke=()=>"#",xe=n=>n?`#/search/${n}`:"#/search",zt=n=>`#/cache/raw/${n}`,X=class X extends HTMLElement{constructor(){super(...arguments);h(this,"questionId");h(this,"question");h(this,"doDelete")}static instance(e,s,o){const a=document.createElement("question-show");return a.questionId=e,a.question=s,a.doDelete=o,a}connectedCallback(){if(!this.shadowRoot){const e=y(X.TMPL),s=this.attachShadow({mode:"open"});s.adoptedStyleSheets=x,s.appendChild(e),this.questionId&&this.question&&this.render(this.questionId,this.question)}}render(e,s,o){this.shadowRoot&&(i("#label",this.shadowRoot).textContent=`Question: ${e.idx}`,i("#quest",this.shadowRoot).innerHTML=V(s.quest),i("#answer",this.shadowRoot).innerHTML=V(s.answer),this.renderProgress(this.shadowRoot,o),this.renderDetails(this.shadowRoot,s),this.renderUpdateBtn(this.shadowRoot,e),this.renderDeleteBtn(this.shadowRoot,e),this.renderLocationBtn(this.shadowRoot,e))}show(e){if(this.shadowRoot){const s=e?"flex":"none",o=i("#answer",this.shadowRoot);o.parentElement&&(o.parentElement.style.display=s);const a=i("#details",this.shadowRoot);a.parentElement&&(a.parentElement.style.display=a.innerHTML?s:"none")}}renderProgress(e,s){const o=i("#progress",e);s?o.textContent=`Progress: ${s.progress} / 3`:o.style.display="none"}renderDetails(e,s){const o=i("#details",e);!s.details&&o.parentElement&&(o.parentElement.style.display="none"),o.innerHTML=s.details?V(s.details):""}renderUpdateBtn(e,s){i('[data-icon="update"]',e).onclick=()=>{window.location.hash=ve(s.bookId,s.chapterId,s.idx)}}renderDeleteBtn(e,s){const o=i('[data-icon="delete"]',e);this.doDelete?o.onclick=()=>{this.doDelete&&this.doDelete(s)}:o.style.display="none"}renderLocationBtn(e,s){i('[data-icon="info"]',e).onclick=()=>{const o=i("#location-info",e);o.style.display==="none"?(o.style.display="block",i("#location-info",e).show(s.bookId,s.chapterId,s.idx.toString())):o.style.display="none"}}};h(X,"TMPL",i("#tmpl-question-show"));let F=X;const _=class _ extends HTMLElement{constructor(){super(...arguments);h(this,"fct")}connectedCallback(){if(!this.shadowRoot){const e=y(_.TMPL),s=this.attachShadow({mode:"open"});s.adoptedStyleSheets=x,s.appendChild(e),i("#btn-cancel",s).onclick=this.onCancel.bind(this),i("#btn-ok",s).onclick=this.onOk.bind(this),this.style.display="none"}}onCancel(){this.shadowRoot&&(this.style.display="none")}async onOk(){if(this.shadowRoot&&this.fct){const e=i("#btn-ok",this.shadowRoot);e.disabled=!0,this.fct().finally(()=>{this.style.display="none",e.disabled=!1})}}activate(e,s,o){this.shadowRoot&&(i("#dialog-title",this.shadowRoot).textContent=e,i("#dialog-msg",this.shadowRoot).textContent=s,this.style.display="block",this.fct=o)}};h(_,"TMPL",i("#tmpl-confirm-dialog"));let mt=_;const B=class B extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.getAttribute("data-id")||"no-id",e=y(B.TMPL),s=i("label",e);s.htmlFor=t,s.textContent=this.getAttribute("data-label")||"no-label";const o=this.attachShadow({mode:"open"});o.adoptedStyleSheets=x,o.appendChild(e)}}attributeChangedCallback(t,e,s){this.shadowRoot&&t==="data-error"&&(i("#error",this.shadowRoot).textContent=s)}};h(B,"observedAttributes",["data-error"]),h(B,"TMPL",i("#tmpl-ui-field"));let wt=B;const Ce=()=>"books",L=()=>"books/books.json",D=n=>`books/${n}/chapters.json`,q=(n,t)=>`books/${n}/questions.${t}.json`,R=n=>/^books\/[^\/]+\/questions.[^\/]+.json$/.test(n),Bt=n=>/^books\/[^\/]+\/chapters.json$/.test(n),Ee=n=>n==="books/books.json",Se=n=>Ee(n)||Bt(n)||R(n),Pe=n=>{const t=/^books\/([^\/]+)\/chapters.json$/,e=n.match(t);if(!e)throw new d(`No matches for ${n}`);return e[1]},$e=n=>{const t=/^books\/([^\/]+)\/questions.([^\/]+).json$/,e=n.match(t);if(!e)throw new d(`No matches for ${n}`);return[e[1],e[2]]},S="cache",I="search",Gt=async()=>{const n=(await H).transaction([S],"readonly").objectStore(S);return await Mt(n)},Le=async()=>{const n=(await H).transaction([I],"readonly").objectStore(I);return await Mt(n)},Qt=async n=>{const t=(await H).transaction([S],"readonly").objectStore(S);return await ot(t,n)},Ft=async n=>{const t=(await H).transaction([I],"readonly").objectStore(I);return await ot(t,n)},Ct=async(n,t)=>{const e=t?[S,I]:[S],s=(await H).transaction(e,"readwrite");await lt(s.objectStore(S),n),t&&await lt(s.objectStore(I),n)},Jt=async(n,t)=>{const e=t?[S,I]:[S],s=(await H).transaction(e,"readwrite");await dt(s.objectStore(S),{path:n.path,data:n.data,hash:n.hash}),t&&await dt(s.objectStore(I),t)};class ${constructor(){h(this,"status",2);h(this,"_message");h(this,"wrapper")}get isOk(){if(this.status===2)throw new Error("Status not set!");return this.status===0}get hasError(){if(this.status===2)throw new Error("Status not set!");return this.status===1}get message(){if(this.status!==1)throw new Error("Status is not ERROR!");if(!this._message)throw new Error("Status is ERROR but no message is set!");return this._message}get value(){if(this.status!==0)throw new Error("Status is not OK!");if(!this.wrapper)throw new Error("Value not set!");return this.wrapper.value}setOk(t){return this.status=0,this.wrapper={value:t},this}setError(t){if(t instanceof $){if(!t.hasError)throw new Error("Result has not an error!");this._message=t._message}else this._message=t;return this.status=1,this}}const it=async n=>{const t=await w(),e=D(n),s=await v(t,e);if(s.hasError)throw new d(s.message);return s.value.data},Et=async(n,t)=>{const e=await w(),s=D(n),o=await v(e,s);if(o.hasError)throw new d(o.message);const a=o.value.data.find(r=>r.id===t);if(!a)throw new d(`Not found: ${t}`);return a},Re=async(n,t)=>{const e=await w(),s=D(n),o=await v(e,s);if(o.hasError)throw new d(o.message);const a=o.value.data,r=a.findIndex(l=>l.id===t.id);if(r<0)throw new d(`Chapter not found: ${t.id}`);return a[r]=t,(await C(e,s,a,o.value.hash,`Updating chapter: ${t.id}`)).value},Ie=async(n,t)=>{const e=await w(),s=D(n),o=await v(e,s);if(o.hasError)throw new d(o.message);let a=o.value.data;const r=a.length;if(a=a.filter(p=>p.id!==t),r===a.length)throw new d(`Not found: ${t}`);const c=await C(e,s,a,o.value.hash,`Deleting chapter ${t}`);if(c.hasError)throw new d(c.message);const l=await Yt(e,q(n,t),"Deleting file.");if(l.hasError)throw new d(l.message);return a},De=async(n,t)=>{const e=await w(),s=D(n),o=await v(e,s);if(o.hasError)throw new d(o.message);const a=o.value.data;if(a.find(p=>p.id===t.id))throw new d(`Id already exists: ${t.id}`);a.push(t);const r=await C(e,s,a,o.value.hash,`Adding chapter: ${t.id}`);if(r.hasError)throw new d(r.message);const c=q(n,t.id),l=await C(e,c,[],void 0,"Creating chapters!");if(l.hasError)throw new d(l.message);return a},J=async(n,t)=>{const e=await w(),s=q(n,t),o=await v(e,s);if(o.hasError)throw new d(o.message);return o.value.data},St=async(n,t,e)=>(await J(n,t))[e],qe=async(n,t,e,s)=>{const o=await w(),a=q(n,t),r=await v(o,a);if(r.hasError)throw new d(r.message);const c=r.value.data;c[e]=s;const l=await C(o,a,c,r.value.hash,"Updating question!");if(l.hasError)throw new d(l.message)},Te=async(n,t,e)=>{const s=await w(),o=q(n,t),a=await v(s,o);if(a.hasError)throw new d(a.message);const r=a.value.data;r.push(e);const c=await C(s,o,r,a.value.hash,"Adding question!");if(c.hasError)throw new d(c.message)},Me=async(n,t,e)=>{const s=await w(),o=q(n,t),a=await v(s,o);if(a.hasError)throw new d(a.message);const r=a.value.data.filter((l,p)=>e!==p),c=await C(s,o,r,a.value.hash,"Deleting question!");if(c.hasError)throw new d(c.message);return r},Wt=(n,t,e)=>{const s={quest:n,answer:t};return e&&(s.details=e),s},Oe=new RegExp(/[.,;!?()'"/&+-]/,"g"),He=new RegExp(/[\*#=~]/,"g"),Ne=new Set(["der","die","das","ein","sich","etwas","etw","hier","instr","nom","она","оно","они"]),Ae=(n,t,e)=>{let s=n+" "+t;e&&(s=s+" "+e),s=s.replaceAll(Oe," "),s=s.replaceAll(He,"");let o=s.split(/\s+/);const a=new Set;return o.forEach(r=>{r.length>2&&!Ne.has(r)&&a.add(r.toLowerCase())}),Array.from(a).sort().join(" ")},Vt=(n,t,e)=>{const s=t.map(a=>Ae(a.quest,a.answer,a.details));return{path:n,strs:s,hash:e}},je=n=>n.length>=10,Ue=async n=>{const t=[],e=await Pt();for(const s of e){const o=await it(s.id);for(const a of o){const r=q(s.id,a.id),c=await Ft(r);if(!c){P(`No search index for: ${r}`);continue}for(let l=0;l<c.strs.length;l++){const p=c.strs[l];if(p.indexOf(n)>=0){const k={bookId:s.id,chapterId:a.id,idx:l},z=await St(k.bookId,k.chapterId,k.idx);if(t.push({questId:k,quest:z,strIdx:p}),je(t))return t}}}}return t},ze=async n=>{const t=await Ft(n);if(!t)throw new d(`Unable to get from cache: ${n}`);return JSON.stringify(t.strs,null,2)},Be=n=>window.btoa(unescape(encodeURIComponent(n))),Ge=n=>decodeURIComponent(escape(window.atob(n))),rt=async n=>n.statusText?n.statusText:n.text(),ct=(n,t,e)=>`https://api.github.com/repos/${n}/${t}/contents/${e}`,Qe=async(n,t,e,s,o)=>{const a=new $;try{const r={content:Be(t),message:s};e&&(r.sha=e);const c={method:"PUT",headers:{Accept:"application/vnd.github.v3+json",authorization:`token ${o}`},body:JSON.stringify(r)},l=await fetch(n,c);if(!l.ok){const k=await rt(l);return a.setError(`githubWriteContent - Url: ${n} Error: ${k}`)}const p=await l.json();return console.log(p),a.setOk(p.content.sha)}catch(r){return a.setError(`githubWriteContent - Url: ${n} Error: ${r}`)}},Fe=async(n,t)=>{const e=new $;try{const s={Accept:"application/vnd.github.v3+json"};t&&(s.authorization=`token ${t}`);const o=await fetch(n,s);if(!o.ok){const c=await rt(o);return e.setError(`githubReadContent - Url: ${n} Read error: ${c}`)}const a=await o.json(),r=Ge(a.content);return e.setOk({content:r,hash:a.sha})}catch(s){return e.setError(`githubReadContent - Url: ${n} Error: ${s}`)}},Je=async(n,t,e,s)=>{const o=new $;try{const a={message:e,sha:t},r={method:"DELETE",headers:{Accept:"application/vnd.github.v3+json",authorization:`token ${s}`},body:JSON.stringify(a)},c=await fetch(n,r);if(!c.ok){const l=await rt(c);return o.setError(`githubDelete - Url: ${n} Error: ${l}`)}return console.log(`githubDelete - Url: ${n}`),o.setOk()}catch(a){return o.setError(`githubDelete - Url: ${n} Error: ${a}`)}},We=async(n,t)=>{const e=new $;try{const s={Accept:"application/vnd.github.v3+json"};t&&(s.authorization=`token ${t}`);const o=await fetch(n,s);if(!o.ok){const a=await rt(o);return e.setError(`githubListing - Url: ${n} Read error: ${a}`)}return e.setOk(await o.json())}catch(s){return e.setError(`githubListing - Url: ${n} Error: ${s}`)}},v=async(n,t)=>{const e=new $,s=await Qt(t);if(s)return e.setOk(s);const o=await Fe(ct(n.user,n.repo,t),n.token);if(o.hasError)return e.setError(`jsonGet - ${o.message}`);const a={path:t,data:JSON.parse(o.value.content),hash:o.value.hash},r=R(t)?Vt(t,a.data,a.hash):void 0;return Jt(a,r),e.setOk(a)},C=async(n,t,e,s,o)=>{const a=new $,r=await Qe(ct(n.user,n.repo,t),JSON.stringify(e),s,o,n.token);if(r.hasError)return a.setError(r);const c={path:t,data:e,hash:r.value},l=R(t)?Vt(t,c.data,c.hash):void 0;return Jt(c,l),a.setOk(e)},Yt=async(n,t,e)=>{const s=new $,o=await v(n,t);if(o.hasError)return s.setError(o.message);const a=await Je(ct(n.user,n.repo,t),o.value.hash,e,n.token);return a.hasError?s.setError(a):(await Ct(t,R(t)),s.setOk())},Pt=async()=>{const n=await w(),t=await v(n,L());if(t.hasError)throw new d(t.message);return t.value.data},$t=async n=>{const t=await w(),e=await v(t,L());if(e.hasError)throw new d(e.message);const s=e.value.data.find(o=>o.id===n);if(!s)throw new d(`Book not found: ${n}`);return s},Ve=async n=>{const t=await w(),e=await v(t,L());if(e.hasError)throw new d(e.message);const s=e.value.data;if(s.find(c=>c.id===n.id))throw new d(`Id already exists: ${n.id}`);s.push(n);const o=await C(t,L(),s,e.value.hash,`Adding book: ${n.id}`);if(o.hasError)throw new d(o.message);const a=D(n.id),r=await C(t,a,[],void 0,"Creating chapters!");if(r.hasError)throw new d(r.message);return o.value},Ye=async n=>{const t=await w(),e=await v(t,L());if(e.hasError)throw new d(e.message);const s=e.value.data,o=s.findIndex(r=>r.id===n.id);if(o<0)throw new d(`Book not found: ${n.id}`);s[o]=n;const a=await C(t,L(),s,e.value.hash,`Updating book: ${n.id}`);if(a.hasError)throw new d(a.message);return a.value},Ke=async n=>{const t=await it(n);if(t.length>0)throw new d(`Book: ${n} has chapters: ${t.length}`);const e=await w(),s=await v(e,L());if(s.hasError)throw new d(s.message);let o=s.value.data;const a=o.length;if(o=o.filter(l=>l.id!==n),a===o.length)throw new d(`Book not found: ${n}`);const r=await C(e,L(),o,s.value.hash,`Deleting book ${n}`);if(r.hasError)throw new d(r.message);const c=await Yt(e,D(n),`Deleting file for: ${n}`);if(c.hasError)throw new d(c.message);return o},u=(n,t)=>{const e=n.get(t);if(typeof e=="string")return{id:t,value:e.trim()};throw new Error(`Unknown value: ${e} for key: ${t}`)},T=n=>{xt("ui-field",n).forEach(t=>{t.removeAttribute("data-error")})},Lt=(n,t,e)=>{i(`ui-field[data-id="${t}"]`,n).setAttribute("data-error",e)},M=n=>xt("ui-field",n).find(t=>t.hasAttribute("data-error")),m=(n,t)=>t.value?!0:(Lt(n,t.id,"Please enter a value!"),!1),Kt=(n,t)=>/^[-_a-zA-Z0-9]+$/.test(t.value)?!0:(Lt(n,t.id,"Please enter an id value!"),!1),Ze=(n,t,e)=>t.value.length<e?(Lt(n,t.id,`Input has to be at least ${e} characters!`),!1):!0,Xe=n=>n.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;"),g=(n,...t)=>{const e=[n[0]];for(let s=1;s<n.length;s++){let o=t[s-1];typeof o!="string"&&(o=o.toString()),e.push(Xe(o)),e.push(n[s])}return e.join("")},f=n=>{var t=document.createElement("template");return t.innerHTML=n,t.content};class _e extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const t=E("bookId");i("#location-info").show(t);const e=await $t(t);i("#id").value=e.id,i("#title").value=e.title,i("#desc").value=e.description}async handleSubmit(t){t.preventDefault();const e=t.target,s=new FormData(e),o=u(s,"id"),a=u(s,"title"),r=u(s,"desc");T(e),m(e,a),m(e,r);const c=i("button",e);M(e)||(c.disabled=!0,Ye({id:o.value,title:a.value,description:r.value}).then(()=>{window.location.hash=jt()}).finally(()=>{c.disabled=!1}))}renderPage(){const t=g`
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
    `,e=f(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}class tn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage())}renderPage(){const t=g`
      <div class="is-column is-gap">
        <div class="page-title">Welcome to Vanilla Trainer</div>
        <lession-continue></lession-continue>
      </div>
    `;return f(t)}}class en extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage())}renderPage(){const t=g`
      <div class="page-title">Page not found</div>
      <p class="is-error">Sorry, the page was not found!</p>
    `;return f(t)}}class nn extends HTMLElement{connectedCallback(){this.hasChildNodes()||(this.appendChild(this.renderPage()),document.addEventListener("logout",this.onLogout.bind(this))),this.getAdmin(),this.setEdit(!1)}handleSubmit(t){t.preventDefault();const e=t.target,s=new FormData(e),o=u(s,"user"),a=u(s,"repo"),r=u(s,"token");T(e),m(e,o),m(e,a),m(e,r);const c=i("button",e);M(e)||(c.disabled=!0,de(o.value,a.value,r.value).finally(()=>{this.setEdit(!1),c.disabled=!1}))}async getAdmin(){const t=await w();i("#user").value=t.user,i("#repo").value=t.repo,i("#token").value=t.token}onEdit(){this.setEdit(!0)}setEdit(t){i("#user").disabled=!t,i("#repo").disabled=!t,i("#token").disabled=!t,i("#admin-edit").disabled=t,i("#admin-save").disabled=!t}onLogout(){this.getAdmin()}renderPage(){const t=g`
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
    `,e=f(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),i("#admin-edit",e).onclick=this.onEdit.bind(this),e}}class sn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const t=i("#confirm-dialog"),e=(await Pt()).map(s=>this.renderBook(s,t));i("tbody").replaceChildren(...e)}onDelete(t,e){return()=>{t.activate("Delete Book",`Do you realy want to delete the book: ${e}?`,this.getDeleteFct(e))}}getDeleteFct(t){return async()=>{await Ke(t),this.render()}}renderPage(){const t=g`
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
    `;return f(t)}renderBook(t,e){const s=g`
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
    `,o=f(s);return i('[data-icon="delete"]',o).onclick=this.onDelete(e,t.id).bind(this),i('[data-icon="update"]',o).onclick=()=>{window.location.hash=fe(t.id)},i('[data-icon="list"]',o).onclick=()=>{window.location.hash=j(t.id)},o}}class on extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage())}async handleSubmit(t){t.preventDefault();const e=t.target,s=new FormData(e),o=u(s,"id"),a=u(s,"title"),r=u(s,"desc");T(e),m(e,o)&&Kt(e,o),m(e,a),m(e,r);const c=i("button",e);M(e)||(console.log("id",o,"title",a,"desc",r),c.disabled=!0,Ve({id:o.value,title:a.value,description:r.value}).then(()=>{window.location.hash=jt()}).finally(()=>{c.disabled=!1}))}renderPage(){const t=g`
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
    `,e=f(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}class an extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const t=E("bookId"),e=i("#confirm-dialog");i("#location-info").show(t),this.addLinks(t);const s=[];(await it(t)).forEach(a=>{s.push(this.renderEntry(t,a,e))}),i("tbody").replaceChildren(...s)}addLinks(t){i("#chapter-create-link").href=me(t),i("#chapter-cache-link").href=zt(D(t))}onDelete(t,e,s){return()=>{t.activate("Delete Chapter",`Do you realy want to delete the chapter: ${s}?`,this.getDeleteFct(e,s))}}getDeleteFct(t,e){return async()=>{Ie(t,e).then(()=>{this.render()})}}renderPage(){const t=g`
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
    `;return f(t)}renderEntry(t,e,s){const o=g`
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
    `,a=f(o);return i('[data-icon="delete"]',a).onclick=this.onDelete(s,t,e.id).bind(this),i('[data-icon="update"]',a).onclick=()=>{window.location.hash=we(t,e.id)},i('[data-icon="list"]',a).onclick=()=>{window.location.hash=Q(t,e.id)},i('[data-icon="start"]',a).onclick=()=>{window.location.hash=ye(t,e.id)},a}}class rn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}render(){const t=E("bookId");i("#location-info").show(t);const e=j(t);i("#chapter-list-link",this).href=e}async handleSubmit(t){t.preventDefault();const e=E("bookId"),s=t.target,o=new FormData(s),a=u(o,"id"),r=u(o,"title");if(T(s),m(s,a)&&Kt(s,a),m(s,r),!M(s)){const c=i("#btn-submit",s);c.disabled=!0,De(e,{id:a.value,title:r.value}).then(()=>{window.location.hash=j(e)}).finally(()=>{c.disabled=!1})}}renderPage(){const t=g`
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
    `,e=f(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}class cn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const t=E("bookId"),e=E("chapterId");i("#location-info").show(t,e);const s=j(t);i("#chapter-list-link",this).href=s;const o=await Et(t,e);i("#id").value=o.id,i("#title").value=o.title}async handleSubmit(t){t.preventDefault();const e=E("bookId"),s=t.target,o=new FormData(s),a=u(o,"id"),r=u(o,"title");if(T(s),m(s,r),!M(s)){const c=i("#btn-submit",s);c.disabled=!0,Re(e,{id:a.value,title:r.value}).then(()=>{window.location.hash=j(e)}).finally(()=>{c.disabled=!1})}}renderPage(){const t=g`
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
    `,e=f(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}class dn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const[t,e]=O("bookId","chapterId");i("#location-info").show(t,e),this.addLinks(t,e);const s=await J(t,e),o=[];s.forEach((a,r)=>{o.push(F.instance({bookId:t,chapterId:e,idx:r},a,this.doDelete.bind(this)))}),i('[data-id="questions"]').replaceChildren(...o)}addLinks(t,e){i("#question-create-link").href=be(t,e),i("#question-cache-link").href=zt(q(t,e)),i("#chapter-list-link").href=j(t)}doDelete(t){i("#confirm-dialog").activate("Delete Question",`Do you realy want to delete the question: ${t.idx}?`,this.getDeleteFct(t))}getDeleteFct(t){return async()=>{Me(t.bookId,t.chapterId,t.idx).then(()=>{this.render()})}}renderPage(){const t=g`
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
    `;return f(t)}}class ln extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}render(){const[t,e]=O("bookId","chapterId");i("#location-info").show(t,e),i("#question-list-link",this).href=Q(t,e)}async handleSubmit(t){t.preventDefault();const[e,s]=O("bookId","chapterId"),o=t.target,a=new FormData(o),r=u(a,"quest"),c=u(a,"answer"),l=u(a,"details");if(T(o),m(o,r),m(o,c),!M(o)){const p=i("#btn-submit",o);p.disabled=!0;const k=Wt(r.value,c.value,l.value);Te(e,s,k).then(()=>{window.location.hash=Q(e,s)}).finally(()=>{p.disabled=!1})}}renderPage(){const t=g`
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
    `,e=f(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}class hn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const[t,e,s]=O("bookId","chapterId","idx");i("#location-info").show(t,e,s),i("#question-list-link",this).href=Q(t,e);const o=await St(t,e,parseInt(s));this.setValue("#quest",o.quest),this.setValue("#answer",o.answer),this.setValue("#details",o.details||"")}setValue(t,e){const s=i(t);s.value=e,s.dispatchEvent(new Event("input"))}async handleSubmit(t){t.preventDefault();const[e,s,o]=O("bookId","chapterId","idx"),a=t.target,r=new FormData(a),c=u(r,"quest"),l=u(r,"answer"),p=u(r,"details");if(T(a),m(a,c),m(a,l),!M(a)){const k=i("#btn-submit",a);k.disabled=!0;const z=Wt(c.value,l.value,p.value);qe(e,s,parseInt(o),z).then(()=>{window.location.hash=Q(e,s)}).finally(()=>{k.disabled=!1})}}renderPage(){const t=g`
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
    `,e=f(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}const un=(n,t)=>Math.floor(Math.random()*(t-n+1)+n),pn=n=>{for(let t=0;t<n.length;t++){const e=un(0,n.length-1);if(t===e)continue;const s=n[t];n[t]=n[e],n[e]=s}},U="lession",gn=(n,t,e)=>{if(n.length==0)return;const s=n.map(a=>({questionId:a,progress:t}));pn(s);const o={learning:s,learned:[],reverse:e};localStorage.setItem(U,JSON.stringify(o))},fn=()=>localStorage.getItem(U)!=null,mn=()=>{const n=localStorage.getItem(U);if(n)return JSON.parse(n)},wn=n=>n.learning.length>0?(localStorage.setItem(U,JSON.stringify(n)),!0):(localStorage.removeItem(U),!1),bn=()=>{localStorage.removeItem(U)},vn=n=>{const t=[0,0,0,n.learned.length];return n.learning.forEach(e=>{if(e.progress>2)throw Error(`Invalid progress ${e.progress}`);t[e.progress]++}),t},yn=n=>{let t=0;return t+=n[0]*3,t+=n[1]*2,t+=n[2]*1,t};class kn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const[t,e]=O("bookId","chapterId"),s=await J(t,e);s.length===0&&(P("The chapter has no questions!"),i("#btn-start").disabled=!0),this.addLessionInfo(t,e,s)}async handleSubmit(t){t.preventDefault();const e=t.target,s=new FormData(e),o=u(s,"correct"),a=u(s,"reverse"),[r,c]=O("bookId","chapterId"),p=(await J(r,c)).map((k,z)=>({bookId:r,chapterId:c,idx:z}));gn(p,parseInt(o.value),a.value==="true"),window.location.hash=Ut()}async addLessionInfo(t,e,s){const o=await $t(t),a=await Et(t,e);i("#lession-info").update([{key:"Book",value:o.title},{key:"Chapter",value:a.title},{key:"Length",value:s.length.toString()}])}renderPage(){const t=g`
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
    `,e=f(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}class xn extends HTMLElement{constructor(){super(...arguments);h(this,"lession");h(this,"questionProgress");h(this,"onCorrect",()=>{this.update(this.questionProgress.progress+1)})}connectedCallback(){this.hasChildNodes()||(this.appendChild(this.renderPage()),this.load())}load(){if(this.lession=mn(),!this.lession){this.setStateRunning(!1),P("No lession found!");return}this.setStateRunning(!0),this.next()}next(){if(this.lession){this.addProgressInfo(vn(this.lession));const e=this.lession.learning.shift();if(e)this.questionProgress=e,this.setQuestion(this.questionProgress.questionId,this.questionProgress),this.setStateQuestion(!0);else{this.setStateRunning(!1);return}this.questionProgress&&i("location-info").show(this.questionProgress.questionId.bookId,this.questionProgress.questionId.chapterId,this.questionProgress.questionId.idx.toString())}}async update(e){this.questionProgress&&this.lession&&(this.questionProgress.progress=e,this.questionProgress.progress<3?this.lession.learning.push(this.questionProgress):this.lession.learned.push(this.questionProgress),wn(this.lession),this.next())}onShow(){this.setStateQuestion(!1)}onWrong(){this.update(0)}onLearned(){this.update(3)}onSkip(){this.update(this.questionProgress.progress)}onStop(){window.location.hash=ke()}setStateQuestion(e){this.doShow('[data-show="ask"]',e),this.doShow('[data-show="show"]',!e),i("#question-show").show(!e)}setStateRunning(e){this.doShow('[data-show="running"]',e),e||(this.doShow('[data-show="ask"]',!1),this.doShow('[data-show="show"]',!1))}doShow(e,s){xt(e).forEach(o=>{const a=o.dataset.display||"block";o.style.display=s?a:"none"})}async setQuestion(e,s){const o=await St(e.bookId,e.chapterId,e.idx);i("#question-show").render(e,o,s)}addProgressInfo(e){i("#progress-info").update([{key:"Unlearned",value:e[0].toString()},{key:"One correct",value:e[1].toString()},{key:"Two correct",value:e[2].toString()},{key:"Learned",value:e[3].toString()},{key:"Total",value:yn(e).toString()}])}renderPage(){const e=g`
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
    `,s=f(e);return[{id:"#btn-show",fct:this.onShow},{id:"#btn-correct",fct:this.onCorrect},{id:"#btn-wrong",fct:this.onWrong},{id:"#btn-skip",fct:this.onSkip},{id:"#btn-learned",fct:this.onLearned},{id:"#btn-stop",fct:this.onStop}].forEach(o=>{i(o.id,s).onclick=o.fct.bind(this)}),s}}const Cn=async()=>{const n=[],t=await Pt();for(const e of t){const s=await it(e.id);for(const o of s)n.push(J(e.id,o.id))}await Promise.all(n)},En=async n=>{const t=await Qt(n);if(!t)throw new d(`Unable to get from cache: ${n}`);return JSON.stringify(t.data,null,2)},Zt=async(n,t,e)=>{const s=await We(ct(t.user,t.repo,e),t.token);if(s.hasError){n.error=`cacheListing - ${s.message}`;return}n.listing.push(...s.value);const o=[];for(const a of s.value)a.type==="dir"&&o.push(Zt(n,t,a.path));await Promise.all(o)},Sn=async()=>{const n=await w(),t={error:void 0,listing:[]};if(await Zt(t,n,Ce()),t.error){P(t.error);return}const e=await Gt();for(const s of e){const o=t.listing.find(a=>a.path===s.path);(!o||s.hash!==o.sha)&&await Ct(s.path,!0)}};class Pn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}onCacheLoad(){i("#confirm-dialog").activate("Load Cache","Do you realy want to load all files?",async()=>{await Cn(),this.render()})}onCacheCheck(){i("#confirm-dialog").activate("Check Cache","Do you realy want to check all files?",async()=>{await Sn(),this.render()})}getHash(t){return t.substring(0,6)}getSearchHash(t,e){return R(t)?e?this.getHash(e.hash):"missing":""}async render(){const t=i("#confirm-dialog"),e=await Gt(),s=await Le(),o=e.map(a=>this.renderEntry(a,s,t));i("tbody").replaceChildren(...o)}onDelete(t,e){return()=>{t.activate("Delete Cache Entry",`Do you realy want to delete the cache entry: ${e}?`,async()=>{await Ct(e,R(e)),this.render()})}}renderPage(){const t=g`
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
    `,e=f(t);return i("#cache-load",e).onclick=this.onCacheLoad.bind(this),i("#cache-check",e).onclick=this.onCacheCheck.bind(this),e}renderEntry(t,e,s){const o=this.getHash(t.hash),a=e.find(p=>p.path===t.path),r=this.getSearchHash(t.path,a),c=g`
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
    `,l=f(c);return i('[data-icon="delete"]',l).onclick=this.onDelete(s,t.path).bind(this),l}}class $n extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const t=E("path");if(!Se(t)){P(`Path is not valid ${t}`);return}this.doCache(t),this.doSearch(t)}async doCache(t){const e=i("#location-info");if(R(t)){const[s,o]=$e(t);e.show(s,o)}else if(Bt(t)){const s=Pe(t);e.show(s)}else e.hide();i("#cache").show("Cache",t,await En(t))}async doSearch(t){const e=i("#search");if(R(t)){e.show("Search",t,await ze(t));return}e.hide()}renderPage(){const t=g`
      <div class="is-column is-gap">
        <div class="page-title">Cache Raw</div>
        <location-info id="location-info"></location-info>

        <json-show id="cache"></json-show>
        <json-show id="search"></json-show>

        <div class="is-row is-gap">
          <button class="btn" id="btn-cancel">Back</button>
        </div>
      </div>
    `,e=f(t);return i("#btn-cancel",e).onclick=()=>{history.back()},e}}class Ln extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const t=E("searchStr");if(!t)return;const e=decodeURI(t);if(e.length<3)return;i("#search").value=e;const s=[],o=await Ue(e.toLowerCase());i('[data-id="num"]').innerText=o.length===0?"Nothing found!":`Numebr of results: ${o.length}`,o.forEach(a=>{s.push(F.instance(a.questId,a.quest))}),i('[data-id="questions"]').replaceChildren(...s)}async handleSubmit(t){t.preventDefault();const e=t.target,s=new FormData(e),o=u(s,"search");T(e),m(e,o)&&Ze(e,o,3),M(e)||(window.location.hash=xe(encodeURI(o.value)))}renderPage(){const t=g`
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
    `,e=f(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}const tt=class tt extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=y(tt.TMPL),e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=x,e.appendChild(t)}}show(t,e,s){this.shadowRoot&&(i("#wrapper",this.shadowRoot).style.display="flex",i("#title",this.shadowRoot).innerText=t,i("#path",this.shadowRoot).innerText=e,i("#content",this.shadowRoot).innerText=s)}hide(){this.style.display="none"}};h(tt,"TMPL",i("#tmpl-json-show"));let bt=tt;const A=class A extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=y(A.TMPL),e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=x,e.appendChild(t)}}update(t){if(this.shadowRoot){const e=[];t.forEach(s=>{const o=y(A.TMPL_ENTRY);i('[data-id="key"]',o).textContent=s.key,i('[data-id="value"]',o).textContent=s.value,e.push(o)}),i("#wrapper",this.shadowRoot).replaceChildren(...e)}}};h(A,"TMPL",i("#tmpl-key-values")),h(A,"TMPL_ENTRY",i("#tmpl-key-values-entry"));let vt=A;const et=class et extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=y(et.TMPL),e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=x,e.appendChild(t)}}async show(t,e,s){if(this.shadowRoot){const o=[],a=await $t(t);if(o.push({key:"Book",value:a.title}),e){const r=await Et(t,e);o.push({key:"Chapter",value:r.title})}s&&o.push({key:"Question",value:s}),i("#info",this.shadowRoot).update(o)}}hide(){this.style.display="none"}};h(et,"TMPL",i("#tmpl-location-info"));let yt=et;const nt=class nt extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=y(nt.TMPL);i("#btn-continue",t).onclick=this.onContinue.bind(this),i("#btn-end",t).onclick=this.onEnd.bind(this);const e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=x,e.appendChild(t)}this.render()}render(){fn()?this.style.display="block":this.style.display="none"}onContinue(){window.location.hash=Ut()}onEnd(){bn(),this.style.display="none"}};h(nt,"TMPL",i("#tmpl-lession-continue"));let kt=nt;document.adoptedStyleSheets=x;b(/^#\/$/,"index-page");b(/^#\/admin$/,"admin-page");b(/^#\/books$/,"book-list-page");b(/^#\/books\/create$/,"book-create-page");b(/^#\/books\/update\/(?<bookId>[^\/]+)$/,"book-update-page");b(/^#\/book\/(?<bookId>[^\/]+)\/chapters$/,"chapter-list-page");b(/^#\/book\/(?<bookId>[^\/]+)\/chapters\/create$/,"chapter-create-page");b(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/update$/,"chapter-update-page");b(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/questions$/,"question-list-page");b(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/questions\/create$/,"question-create-page");b(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/question\/(?<idx>[^\/]+)\/update$/,"question-update-page");b(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/lession-prepare$/,"lession-prepare-page");b(/^#\/lession-process$/,"lession-process-page");b(/^#\/cache\/list$/,"cache-list-page");b(/^#\/cache\/raw\/(?<path>.*)$/,"cache-raw-page");b(/^#\/search(\/(?<searchStr>[^\/]+))?$/,"search-page");customElements.define("navi-gation",pt);customElements.define("error-msg",gt);customElements.define("confirm-dialog",mt);customElements.define("question-show",F);customElements.define("key-values",vt);customElements.define("location-info",yt);customElements.define("json-show",bt);customElements.define("lession-continue",kt);customElements.define("ui-field",wt);customElements.define("preview-field",ft);customElements.define("ui-icons",ut);customElements.define("not-found-page",en);customElements.define("index-page",tn);customElements.define("admin-page",nn);customElements.define("cache-list-page",Pn);customElements.define("cache-raw-page",$n);customElements.define("search-page",Ln);customElements.define("book-list-page",sn);customElements.define("book-create-page",on);customElements.define("book-update-page",_e);customElements.define("chapter-list-page",an);customElements.define("chapter-create-page",rn);customElements.define("chapter-update-page",cn);customElements.define("question-list-page",dn);customElements.define("question-create-page",ln);customElements.define("question-update-page",hn);customElements.define("lession-prepare-page",kn);customElements.define("lession-process-page",xn);he("#/","#/admin","not-found-page");re();
