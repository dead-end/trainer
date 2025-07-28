var me=Object.defineProperty;var we=(n,t,e)=>t in n?me(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var h=(n,t,e)=>we(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();const be=`/* 1. Use a more-intuitive box-sizing model */
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
`,ve=`:root {
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
`,Kt=new CSSStyleSheet;Kt.replace(be);const Zt=new CSSStyleSheet;Zt.replace(ve);const y=[Kt,Zt],L=n=>{const t=new CustomEvent("error-msg",{detail:n});document.dispatchEvent(t)};class d extends Error{constructor(t){super(t),L(t)}}const Qt=2,ye=n=>{n.objectStoreNames.contains("cache")||n.createObjectStore("cache",{keyPath:"path"}),n.objectStoreNames.contains("search")||n.createObjectStore("search",{keyPath:"path"}),n.objectStoreNames.contains("admin")||n.createObjectStore("admin",{keyPath:"id"})},ke=()=>new Promise((n,t)=>{const e=indexedDB.open("trainer",Qt);e.onupgradeneeded=s=>{const o=e.result;s.oldVersion<Qt&&ye(o),console.log("db upgrade success!")},e.onerror=s=>{console.error(s.type),t()},e.onsuccess=()=>{const s=e.result;s.onerror=o=>{console.log(o.type)},console.log("db init success!"),n(s)}}),H=ke(),ut=async(n,t)=>(await H).transaction([n],t).objectStore(n),pt=(n,t)=>new Promise((e,s)=>{const o=n.get(t);o.onsuccess=()=>{console.log("Store:",n.name,"id:",t,"get:",o.result?o.result:"NOT-FOUND"),e(o.result)},o.onerror=a=>{L(`Store: ${n.name} id: ${t} storeGet error: ${a}`),s()}}),bt=(n,t)=>new Promise((e,s)=>{const o=n.put(t);o.onsuccess=()=>{console.log("Store:",n.name,"put:",t),e(t)},o.onerror=a=>{L(`Store: ${n.name} put: ${t} error: ${a}`),s()}}),vt=(n,t)=>new Promise((e,s)=>{const o=n.delete(t);o.onsuccess=()=>{console.log("Store:",n.name,"delete:",t),e(o.result)},o.onerror=a=>{L(`Store: ${n.name} delete: ${t} error: ${a}`),s()}}),Xt=n=>new Promise((t,e)=>{const s=n.getAll();s.onsuccess=()=>{console.log("Store:",n.name,"get all"),t(s.result)},s.onerror=o=>{L(`Store: ${n.name} get all: ${o}`),e()}}),gt="admin",m=async()=>{const n=await ut(gt,"readonly"),t=await pt(n,"github");if(t===void 0)throw new Error("Unable to get github config.");return t},xe=async()=>{const n=await ut(gt,"readonly");return pt(n,"github")},Ee=async n=>{const t=await ut(gt,"readwrite");return bt(t,n)},Ce=async n=>{const t=await ut(gt,"readwrite");return vt(t,n)},_t="github";let F=xe();const Se=async()=>{document.dispatchEvent(await F?new Event("login"):new Event("logout"))},Le=async()=>await F!==void 0,$e=async(n,t,e)=>{F=Ee({id:_t,user:n,repo:t,token:e}),document.dispatchEvent(new Event("login"))},Re=async()=>{await F&&(F=Ce(_t),document.dispatchEvent(new Event("logout")))},i=(n,t)=>{t||(t=document);const e=t.querySelector(n);if(!e)throw new Error(`Unable to find: ${n}`);return e},Ut=(n,t)=>{t||(t=document);const e=[...t.querySelectorAll(n)];if(e.length===0)throw new Error(`Unable to find: ${n}`);return e},te=[];let V,ee,yt,ne;const x=n=>{if(!V||!V.groups){const t=`Route parameter: ${n} - No parameters found: ${window.location.hash}`;throw new Error(t)}return V.groups[n]},O=(...n)=>n.map(t=>x(t)),Vt=async()=>{let n=window.location.hash||ee;if(!await Le()&&n!==yt){window.location.hash=yt;return}const t=te.find(o=>o.regex.test(n));t&&(V=t.regex.exec(window.location.hash));const e=t?t.page:ne,s=document.createElement(e);i("main").replaceChildren(s)},w=(n,t)=>{te.push({regex:n,page:t})},Pe=(n,t,e)=>{ee=n,yt=t,ne=e,window.addEventListener("hashchange",Vt),window.addEventListener("DOMContentLoaded",Vt)},u=n=>n.content.cloneNode(!0),j=class j extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.getAttribute("data-icon")||"login",e=u(j.TMPL),s=u(j.ICONS[t]);e.appendChild(s);const o=this.attachShadow({mode:"open"});o.adoptedStyleSheets=y,o.appendChild(e)}}};h(j,"ICONS",{logout:i("#tmpl-icon-logout"),home:i("#tmpl-icon-home"),admin:i("#tmpl-icon-admin"),book:i("#tmpl-icon-book"),delete:i("#tmpl-icon-delete"),update:i("#tmpl-icon-update"),list:i("#tmpl-icon-list"),start:i("#tmpl-icon-start"),cache:i("#tmpl-icon-cache"),search:i("#tmpl-icon-search"),info:i("#tmpl-icon-info")}),h(j,"TMPL",i("#tmpl-icon"));let kt=j;const K=class K extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=u(K.TMPL);i("#logout",t).onclick=this.doLogout;const e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=y,e.appendChild(t),document.addEventListener("login",this.onLogin.bind(this)),document.addEventListener("logout",this.onLogout.bind(this))}}onLogin(){this.shadowRoot&&(i("#nav-items",this.shadowRoot).style.visibility="visible")}onLogout(){this.shadowRoot&&(i("#nav-items",this.shadowRoot).style.visibility="hidden")}doLogout(){Re()}};h(K,"TMPL",i("#tmpl-navigation"));let xt=K;const Z=class Z extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=u(Z.TMPL);i("#error-btn",t).onclick=this.onOk.bind(this);const e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=y,e.appendChild(t),document.addEventListener("error-msg",this.onError.bind(this)),this.style.display="none"}}onError(t){if(this.shadowRoot){const e=t.detail;i("#error-msg",this.shadowRoot).textContent=e,this.style.display="block"}}onOk(){this.shadowRoot&&(i("#error-msg",this.shadowRoot).textContent="",this.style.display="none")}};h(Z,"TMPL",i("#tmpl-error"));let Et=Z;const Te=new RegExp(/[<>]/,"g"),Ie=[{pattern:new RegExp(/^- (.+)=#/,"g"),replace:'<span class="md-right">&bull;</span><span class="md-it">$1</span>'},{pattern:new RegExp(/^(.+)=#/,"g"),replace:'<span class="md-it">$1</span>'},{pattern:new RegExp(/#=(.+)$/,"g"),replace:'<span class="md-it">$1</span>'},{pattern:new RegExp(/^- /,"g"),replace:'<span class="md-right">&bull;</span>'}],De=[{pattern:new RegExp(/#([^#]+)#/,"g"),replace:'<span class="md-it">$1</span>'},{pattern:new RegExp(/\*\*(.)/,"g"),replace:'<span class="md-em">$1</span>'},{pattern:new RegExp(/\*([^*]+)\*/,"g"),replace:'<span class="md-em">$1</span>'}],Yt=(n,t)=>(n.forEach(e=>{t=t.replaceAll(e.pattern,e.replace)}),t),Y=n=>{const t=n.replace(Te,"").split(`
`);let e=[];for(const s of t)e.push(Yt(Ie,s.trim()));return Yt(De,e.join(`
`))},X=class X extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=u(X.TMPL),e=this.getAttribute("data-id")||"no-id",s=i(`#${e}`),o=i("#preview",t);s.oninput=()=>{console.log("input"),o.innerHTML=Y(s.value)};const a=this.attachShadow({mode:"open"});a.adoptedStyleSheets=y,a.appendChild(t)}}};h(X,"TMPL",i("#tmpl-preview-field"));let Ct=X;const se=()=>"#/books",qe=n=>`#/books/update/${n}`,U=n=>`#/book/${n}/chapters`,Me=n=>`#/book/${n}/chapters/create`,Oe=(n,t)=>`#/book/${n}/chapter/${t}/update`,W=(n,t)=>`#/book/${n}/chapter/${t}/questions`,He=(n,t)=>`#/book/${n}/chapter/${t}/questions/create`,je=(n,t,e)=>`#/book/${n}/chapter/${t}/question/${e}/update`,Ne=(n,t)=>`#/book/${n}/chapter/${t}/lession-prepare`,oe=()=>"#/lession-process",Ae=()=>"#",Ue=n=>n?`#/search/${n}`:"#/search",ae=n=>`#/cache/raw/${n}`,_=class _ extends HTMLElement{constructor(){super(...arguments);h(this,"questionId");h(this,"question");h(this,"doDelete")}static instance(e,s,o){const a=document.createElement("question-show");return a.questionId=e,a.question=s,a.doDelete=o,a}connectedCallback(){if(!this.shadowRoot){const e=u(_.TMPL),s=this.attachShadow({mode:"open"});s.adoptedStyleSheets=y,s.appendChild(e),this.questionId&&this.question&&this.render(this.questionId,this.question)}}render(e,s,o){this.shadowRoot&&(i("#label",this.shadowRoot).textContent=`Question: ${e.idx}`,i("#quest",this.shadowRoot).innerHTML=Y(s.quest),i("#answer",this.shadowRoot).innerHTML=Y(s.answer),this.renderProgress(this.shadowRoot,o),this.renderDetails(this.shadowRoot,s),this.renderUpdateBtn(this.shadowRoot,e),this.renderDeleteBtn(this.shadowRoot,e),this.renderLocationBtn(this.shadowRoot,e))}show(e){if(this.shadowRoot){const s=e?"flex":"none",o=i("#answer",this.shadowRoot);o.parentElement&&(o.parentElement.style.display=s);const a=i("#details",this.shadowRoot);a.parentElement&&(a.parentElement.style.display=a.innerHTML?s:"none")}}renderProgress(e,s){const o=i("#progress",e);s?o.textContent=`Progress: ${s.progress} / 3`:o.style.display="none"}renderDetails(e,s){const o=i("#details",e);!s.details&&o.parentElement&&(o.parentElement.style.display="none"),o.innerHTML=s.details?Y(s.details):""}renderUpdateBtn(e,s){i('[data-icon="update"]',e).onclick=()=>{window.location.hash=je(s.bookId,s.chapterId,s.idx)}}renderDeleteBtn(e,s){const o=i('[data-icon="delete"]',e);this.doDelete?o.onclick=()=>{this.doDelete&&this.doDelete(s)}:o.style.display="none"}renderLocationBtn(e,s){i('[data-icon="info"]',e).onclick=()=>{const o=i("#location-info",e);o.style.display==="none"?(o.style.display="block",i("#location-info",e).show(s.bookId,s.chapterId,s.idx.toString())):o.style.display="none"}}};h(_,"TMPL",i("#tmpl-question-show"));let J=_;const tt=class tt extends HTMLElement{constructor(){super(...arguments);h(this,"fct")}connectedCallback(){if(!this.shadowRoot){const e=u(tt.TMPL),s=this.attachShadow({mode:"open"});s.adoptedStyleSheets=y,s.appendChild(e),i("#btn-cancel",s).onclick=this.onCancel.bind(this),i("#btn-ok",s).onclick=this.onOk.bind(this),this.style.display="none"}}onCancel(){this.shadowRoot&&(this.style.display="none")}async onOk(){if(this.shadowRoot&&this.fct){const e=i("#btn-ok",this.shadowRoot);e.disabled=!0,this.fct().finally(()=>{this.style.display="none",e.disabled=!1})}}activate(e,s,o){this.shadowRoot&&(i("#dialog-title",this.shadowRoot).textContent=e,i("#dialog-msg",this.shadowRoot).textContent=s,this.style.display="block",this.fct=o)}};h(tt,"TMPL",i("#tmpl-confirm-dialog"));let St=tt;const G=class G extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.getAttribute("data-id")||"no-id",e=u(G.TMPL),s=i("label",e);s.htmlFor=t,s.textContent=this.getAttribute("data-label")||"no-label";const o=this.attachShadow({mode:"open"});o.adoptedStyleSheets=y,o.appendChild(e)}}attributeChangedCallback(t,e,s){this.shadowRoot&&t==="data-error"&&(i("#error",this.shadowRoot).textContent=s)}};h(G,"observedAttributes",["data-error"]),h(G,"TMPL",i("#tmpl-ui-field"));let Lt=G;const ze=()=>"books",R=()=>"books/books.json",I=n=>`books/${n}/chapters.json`,D=(n,t)=>`books/${n}/questions.${t}.json`,P=n=>/^books\/[^\/]+\/questions.[^\/]+.json$/.test(n),ie=n=>/^books\/[^\/]+\/chapters.json$/.test(n),Be=n=>n==="books/books.json",Ge=n=>Be(n)||ie(n)||P(n),Fe=n=>{const t=/^books\/([^\/]+)\/chapters.json$/,e=n.match(t);if(!e)throw new d(`No matches for ${n}`);return e[1]},We=n=>{const t=/^books\/([^\/]+)\/questions.([^\/]+).json$/,e=n.match(t);if(!e)throw new d(`No matches for ${n}`);return[e[1],e[2]]},E="cache",T="search",re=async()=>{const n=(await H).transaction([E],"readonly").objectStore(E);return await Xt(n)},Je=async()=>{const n=(await H).transaction([T],"readonly").objectStore(T);return await Xt(n)},ce=async n=>{const t=(await H).transaction([E],"readonly").objectStore(E);return await pt(t,n)},de=async n=>{const t=(await H).transaction([T],"readonly").objectStore(T);return await pt(t,n)},zt=async(n,t)=>{const e=t?[E,T]:[E],s=(await H).transaction(e,"readwrite");await vt(s.objectStore(E),n),t&&await vt(s.objectStore(T),n)},le=async(n,t)=>{const e=t?[E,T]:[E],s=(await H).transaction(e,"readwrite");await bt(s.objectStore(E),{path:n.path,data:n.data,hash:n.hash}),t&&await bt(s.objectStore(T),t)};class ${constructor(){h(this,"status",2);h(this,"_message");h(this,"wrapper")}get isOk(){if(this.status===2)throw new Error("Status not set!");return this.status===0}get hasError(){if(this.status===2)throw new Error("Status not set!");return this.status===1}get message(){if(this.status!==1)throw new Error("Status is not ERROR!");if(!this._message)throw new Error("Status is ERROR but no message is set!");return this._message}get value(){if(this.status!==0)throw new Error("Status is not OK!");if(!this.wrapper)throw new Error("Value not set!");return this.wrapper.value}setOk(t){return this.status=0,this.wrapper={value:t},this}setError(t){if(t instanceof $){if(!t.hasError)throw new Error("Result has not an error!");this._message=t._message}else this._message=t;return this.status=1,this}}const ft=async n=>{const t=await m(),e=I(n),s=await b(t,e);if(s.hasError)throw new d(s.message);return s.value.data},Bt=async(n,t)=>{const e=await m(),s=I(n),o=await b(e,s);if(o.hasError)throw new d(o.message);const a=o.value.data.find(r=>r.id===t);if(!a)throw new d(`Not found: ${t}`);return a},Qe=async(n,t)=>{const e=await m(),s=I(n),o=await b(e,s);if(o.hasError)throw new d(o.message);const a=o.value.data,r=a.findIndex(l=>l.id===t.id);if(r<0)throw new d(`Chapter not found: ${t.id}`);return a[r]=t,(await k(e,s,a,o.value.hash,`Updating chapter: ${t.id}`)).value},Ve=async(n,t)=>{const e=await m(),s=I(n),o=await b(e,s);if(o.hasError)throw new d(o.message);let a=o.value.data;const r=a.length;if(a=a.filter(g=>g.id!==t),r===a.length)throw new d(`Not found: ${t}`);const c=await k(e,s,a,o.value.hash,`Deleting chapter ${t}`);if(c.hasError)throw new d(c.message);const l=await pe(e,D(n,t),"Deleting file.");if(l.hasError)throw new d(l.message);return a},Ye=async(n,t)=>{const e=await m(),s=I(n),o=await b(e,s);if(o.hasError)throw new d(o.message);const a=o.value.data;if(a.find(g=>g.id===t.id))throw new d(`Id already exists: ${t.id}`);a.push(t);const r=await k(e,s,a,o.value.hash,`Adding chapter: ${t.id}`);if(r.hasError)throw new d(r.message);const c=D(n,t.id),l=await k(e,c,[],void 0,"Creating chapters!");if(l.hasError)throw new d(l.message);return a},Q=async(n,t)=>{const e=await m(),s=D(n,t),o=await b(e,s);if(o.hasError)throw new d(o.message);return o.value.data},Gt=async(n,t,e)=>(await Q(n,t))[e],Ke=async(n,t,e,s)=>{const o=await m(),a=D(n,t),r=await b(o,a);if(r.hasError)throw new d(r.message);const c=r.value.data;c[e]=s;const l=await k(o,a,c,r.value.hash,"Updating question!");if(l.hasError)throw new d(l.message)},Ze=async(n,t,e)=>{const s=await m(),o=D(n,t),a=await b(s,o);if(a.hasError)throw new d(a.message);const r=a.value.data;r.push(e);const c=await k(s,o,r,a.value.hash,"Adding question!");if(c.hasError)throw new d(c.message)},Xe=async(n,t,e)=>{const s=await m(),o=D(n,t),a=await b(s,o);if(a.hasError)throw new d(a.message);const r=a.value.data.filter((l,g)=>e!==g),c=await k(s,o,r,a.value.hash,"Deleting question!");if(c.hasError)throw new d(c.message);return r},he=(n,t,e)=>{const s={quest:n,answer:t};return e&&(s.details=e),s},_e=new RegExp(/[.,;!?()'"/&+-]/,"g"),tn=new RegExp(/[\*#=~]/,"g"),en=new Set(["der","die","das","ein","sich","etwas","etw","hier","instr","nom","она","оно","они"]),nn=(n,t,e)=>{let s=n+" "+t;e&&(s=s+" "+e),s=s.replaceAll(_e," "),s=s.replaceAll(tn,"");let o=s.split(/\s+/);const a=new Set;return o.forEach(r=>{r.length>2&&!en.has(r)&&a.add(r.toLowerCase())}),Array.from(a).sort().join(" ")},ue=(n,t,e)=>{const s=t.map(a=>nn(a.quest,a.answer,a.details));return{path:n,strs:s,hash:e}},sn=n=>n.length>=10,on=async n=>{const t=[],e=await Ft();for(const s of e){const o=await ft(s.id);for(const a of o){const r=D(s.id,a.id),c=await de(r);if(!c){L(`No search index for: ${r}`);continue}for(let l=0;l<c.strs.length;l++){const g=c.strs[l];if(g.indexOf(n)>=0){const v={bookId:s.id,chapterId:a.id,idx:l},B=await Gt(v.bookId,v.chapterId,v.idx);if(t.push({questId:v,quest:B,strIdx:g}),sn(t))return t}}}}return t},an=async n=>{const t=await de(n);if(!t)throw new d(`Unable to get from cache: ${n}`);return JSON.stringify(t.strs,null,2)},rn=n=>window.btoa(unescape(encodeURIComponent(n))),cn=n=>decodeURIComponent(escape(window.atob(n))),mt=async n=>n.statusText?n.statusText:n.text(),wt=(n,t,e)=>`https://api.github.com/repos/${n}/${t}/contents/${e}`,dn=async(n,t,e,s,o)=>{const a=new $;try{const r={content:rn(t),message:s};e&&(r.sha=e);const c={method:"PUT",headers:{Accept:"application/vnd.github.v3+json",authorization:`token ${o}`},body:JSON.stringify(r)},l=await fetch(n,c);if(!l.ok){const v=await mt(l);return a.setError(`githubWriteContent - Url: ${n} Error: ${v}`)}const g=await l.json();return console.log(g),a.setOk(g.content.sha)}catch(r){return a.setError(`githubWriteContent - Url: ${n} Error: ${r}`)}},ln=async(n,t)=>{const e=new $;try{const s={Accept:"application/vnd.github.v3+json"};t&&(s.authorization=`token ${t}`);const o=await fetch(n,s);if(!o.ok){const c=await mt(o);return e.setError(`githubReadContent - Url: ${n} Read error: ${c}`)}const a=await o.json(),r=cn(a.content);return e.setOk({content:r,hash:a.sha})}catch(s){return e.setError(`githubReadContent - Url: ${n} Error: ${s}`)}},hn=async(n,t,e,s)=>{const o=new $;try{const a={message:e,sha:t},r={method:"DELETE",headers:{Accept:"application/vnd.github.v3+json",authorization:`token ${s}`},body:JSON.stringify(a)},c=await fetch(n,r);if(!c.ok){const l=await mt(c);return o.setError(`githubDelete - Url: ${n} Error: ${l}`)}return console.log(`githubDelete - Url: ${n}`),o.setOk()}catch(a){return o.setError(`githubDelete - Url: ${n} Error: ${a}`)}},un=async(n,t)=>{const e=new $;try{const s={Accept:"application/vnd.github.v3+json"};t&&(s.authorization=`token ${t}`);const o=await fetch(n,s);if(!o.ok){const a=await mt(o);return e.setError(`githubListing - Url: ${n} Read error: ${a}`)}return e.setOk(await o.json())}catch(s){return e.setError(`githubListing - Url: ${n} Error: ${s}`)}},b=async(n,t)=>{const e=new $,s=await ce(t);if(s)return e.setOk(s);const o=await ln(wt(n.user,n.repo,t),n.token);if(o.hasError)return e.setError(`jsonGet - ${o.message}`);const a={path:t,data:JSON.parse(o.value.content),hash:o.value.hash},r=P(t)?ue(t,a.data,a.hash):void 0;return le(a,r),e.setOk(a)},k=async(n,t,e,s,o)=>{const a=new $,r=await dn(wt(n.user,n.repo,t),JSON.stringify(e),s,o,n.token);if(r.hasError)return a.setError(r);const c={path:t,data:e,hash:r.value},l=P(t)?ue(t,c.data,c.hash):void 0;return le(c,l),a.setOk(e)},pe=async(n,t,e)=>{const s=new $,o=await b(n,t);if(o.hasError)return s.setError(o.message);const a=await hn(wt(n.user,n.repo,t),o.value.hash,e,n.token);return a.hasError?s.setError(a):(await zt(t,P(t)),s.setOk())},Ft=async()=>{const n=await m(),t=await b(n,R());if(t.hasError)throw new d(t.message);return t.value.data},Wt=async n=>{const t=await m(),e=await b(t,R());if(e.hasError)throw new d(e.message);const s=e.value.data.find(o=>o.id===n);if(!s)throw new d(`Book not found: ${n}`);return s},pn=async n=>{const t=await m(),e=await b(t,R());if(e.hasError)throw new d(e.message);const s=e.value.data;if(s.find(c=>c.id===n.id))throw new d(`Id already exists: ${n.id}`);s.push(n);const o=await k(t,R(),s,e.value.hash,`Adding book: ${n.id}`);if(o.hasError)throw new d(o.message);const a=I(n.id),r=await k(t,a,[],void 0,"Creating chapters!");if(r.hasError)throw new d(r.message);return o.value},gn=async n=>{const t=await m(),e=await b(t,R());if(e.hasError)throw new d(e.message);const s=e.value.data,o=s.findIndex(r=>r.id===n.id);if(o<0)throw new d(`Book not found: ${n.id}`);s[o]=n;const a=await k(t,R(),s,e.value.hash,`Updating book: ${n.id}`);if(a.hasError)throw new d(a.message);return a.value},fn=async n=>{const t=await ft(n);if(t.length>0)throw new d(`Book: ${n} has chapters: ${t.length}`);const e=await m(),s=await b(e,R());if(s.hasError)throw new d(s.message);let o=s.value.data;const a=o.length;if(o=o.filter(l=>l.id!==n),a===o.length)throw new d(`Book not found: ${n}`);const r=await k(e,R(),o,s.value.hash,`Deleting book ${n}`);if(r.hasError)throw new d(r.message);const c=await pe(e,I(n),`Deleting file for: ${n}`);if(c.hasError)throw new d(c.message);return o},p=(n,t)=>{const e=n.get(t);if(typeof e=="string")return{id:t,value:e.trim()};throw new Error(`Unknown value: ${e} for key: ${t}`)},q=n=>{Ut("ui-field",n).forEach(t=>{t.removeAttribute("data-error")})},Jt=(n,t,e)=>{i(`ui-field[data-id="${t}"]`,n).setAttribute("data-error",e)},M=n=>Ut("ui-field",n).find(t=>t.hasAttribute("data-error")),f=(n,t)=>t.value?!0:(Jt(n,t.id,"Please enter a value!"),!1),ge=(n,t)=>/^[-_a-zA-Z0-9]+$/.test(t.value)?!0:(Jt(n,t.id,"Please enter an id value!"),!1),mn=(n,t,e)=>t.value.length<e?(Jt(n,t.id,`Input has to be at least ${e} characters!`),!1):!0,wn=n=>n.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;"),C=(n,...t)=>{const e=[n[0]];for(let s=1;s<n.length;s++){let o=t[s-1];typeof o!="string"&&(o=o.toString()),e.push(wn(o)),e.push(n[s])}return e.join("")},S=n=>{var t=document.createElement("template");return t.innerHTML=n,t.content};class bn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const t=x("bookId");i("#location-info").show(t);const e=await Wt(t);i("#id").value=e.id,i("#title").value=e.title,i("#desc").value=e.description}async handleSubmit(t){t.preventDefault();const e=t.target,s=new FormData(e),o=p(s,"id"),a=p(s,"title"),r=p(s,"desc");q(e),f(e,a),f(e,r);const c=i("button",e);M(e)||(c.disabled=!0,gn({id:o.value,title:a.value,description:r.value}).then(()=>{window.location.hash=se()}).finally(()=>{c.disabled=!1}))}renderPage(){const t=C`
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
    `,e=S(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}const et=class et extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(et.TMPL);this.appendChild(t)}}};h(et,"TMPL",i("#index-page"));let $t=et;const nt=class nt extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(nt.TMPL);this.appendChild(t)}}};h(nt,"TMPL",i("#not-found-page"));let Rt=nt;class vn extends HTMLElement{connectedCallback(){this.hasChildNodes()||(this.appendChild(this.renderPage()),document.addEventListener("logout",this.onLogout.bind(this))),this.getAdmin(),this.setEdit(!1)}handleSubmit(t){t.preventDefault();const e=t.target,s=new FormData(e),o=p(s,"user"),a=p(s,"repo"),r=p(s,"token");q(e),f(e,o),f(e,a),f(e,r);const c=i("button",e);M(e)||(c.disabled=!0,$e(o.value,a.value,r.value).finally(()=>{this.setEdit(!1),c.disabled=!1}))}async getAdmin(){const t=await m();i("#user").value=t.user,i("#repo").value=t.repo,i("#token").value=t.token}onEdit(){this.setEdit(!0)}setEdit(t){i("#user").disabled=!t,i("#repo").disabled=!t,i("#token").disabled=!t,i("#admin-edit").disabled=t,i("#admin-save").disabled=!t}onLogout(){this.getAdmin()}renderPage(){const t=C`
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
    `,e=S(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),i("#admin-edit",e).onclick=this.onEdit.bind(this),e}}class yn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const t=i("#confirm-dialog"),e=(await Ft()).map(s=>this.renderBook(s,t));i("tbody").replaceChildren(...e)}onDelete(t,e){return()=>{t.activate("Delete Book",`Do you realy want to delete the book: ${e}?`,this.getDeleteFct(e))}}getDeleteFct(t){return async()=>{await fn(t),this.render()}}renderPage(){const t=C`
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
    `;return S(t)}renderBook(t,e){const s=C`
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
    `,o=S(s);return i('[data-icon="delete"]',o).onclick=this.onDelete(e,t.id).bind(this),i('[data-icon="update"]',o).onclick=()=>{window.location.hash=qe(t.id)},i('[data-icon="list"]',o).onclick=()=>{window.location.hash=U(t.id)},o}}class kn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage())}async handleSubmit(t){t.preventDefault();const e=t.target,s=new FormData(e),o=p(s,"id"),a=p(s,"title"),r=p(s,"desc");q(e),f(e,o)&&ge(e,o),f(e,a),f(e,r);const c=i("button",e);M(e)||(console.log("id",o,"title",a,"desc",r),c.disabled=!0,pn({id:o.value,title:a.value,description:r.value}).then(()=>{window.location.hash=se()}).finally(()=>{c.disabled=!1}))}renderPage(){const t=C`
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
    `,e=S(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}const N=class N extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(N.TMPL);this.appendChild(t)}this.render()}async render(){const t=x("bookId"),e=i("#confirm-dialog");i("#location-info").show(t),this.addLinks(t);const s=[];(await ft(t)).forEach(a=>{const r=u(N.TMPL_ROW);i('[data-id="id"]',r).textContent=a.id,i('[data-id="title"]',r).textContent=a.title,i('[data-icon="delete"]',r).onclick=this.onDelete(e,t,a.id).bind(this),i('[data-icon="update"]',r).onclick=()=>{window.location.hash=Oe(t,a.id)},i('[data-icon="list"]',r).onclick=()=>{window.location.hash=W(t,a.id)},i('[data-icon="start"]',r).onclick=()=>{window.location.hash=Ne(t,a.id)},s.push(r)}),i("tbody").replaceChildren(...s)}addLinks(t){i("#chapter-create-link").href=Me(t),i("#chapter-cache-link").href=ae(I(t))}onDelete(t,e,s){return()=>{t.activate("Delete Chapter",`Do you realy want to delete the chapter: ${s}?`,this.getDeleteFct(e,s))}}getDeleteFct(t,e){return async()=>{Ve(t,e).then(()=>{this.render()})}}};h(N,"TMPL",i("#chapter-list-page")),h(N,"TMPL_ROW",i("#tmpl-chapter-list"));let Pt=N;const st=class st extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(st.TMPL);i("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}render(){const t=x("bookId");i("#location-info").show(t);const e=U(t);i("#chapter-list-link",this).href=e}async handleSubmit(t){t.preventDefault();const e=x("bookId"),s=t.target,o=new FormData(s),a=p(o,"id"),r=p(o,"title");if(q(s),f(s,a)&&ge(s,a),f(s,r),!M(s)){const c=i("#btn-submit",s);c.disabled=!0,Ye(e,{id:a.value,title:r.value}).then(()=>{window.location.hash=U(e)}).finally(()=>{c.disabled=!1})}}};h(st,"TMPL",i("#chapter-create-page"));let Tt=st;const ot=class ot extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(ot.TMPL);i("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}async render(){const t=x("bookId"),e=x("chapterId");i("#location-info").show(t,e);const s=U(t);i("#chapter-list-link",this).href=s;const o=await Bt(t,e);i("#id").value=o.id,i("#title").value=o.title}async handleSubmit(t){t.preventDefault();const e=x("bookId"),s=t.target,o=new FormData(s),a=p(o,"id"),r=p(o,"title");if(q(s),f(s,r),!M(s)){const c=i("#btn-submit",s);c.disabled=!0,Qe(e,{id:a.value,title:r.value}).then(()=>{window.location.hash=U(e)}).finally(()=>{c.disabled=!1})}}};h(ot,"TMPL",i("#chapter-update-page"));let It=ot;const at=class at extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(at.TMPL);this.appendChild(t)}this.render()}async render(){const[t,e]=O("bookId","chapterId");i("#location-info").show(t,e),this.addLinks(t,e);const s=await Q(t,e),o=[];s.forEach((a,r)=>{o.push(J.instance({bookId:t,chapterId:e,idx:r},a,this.doDelete.bind(this)))}),i('[data-id="questions"]').replaceChildren(...o)}addLinks(t,e){i("#question-create-link").href=He(t,e),i("#question-cache-link").href=ae(D(t,e)),i("#chapter-list-link").href=U(t)}doDelete(t){i("#confirm-dialog").activate("Delete Question",`Do you realy want to delete the question: ${t.idx}?`,this.getDeleteFct(t))}getDeleteFct(t){return async()=>{Xe(t.bookId,t.chapterId,t.idx).then(()=>{this.render()})}}};h(at,"TMPL",i("#question-list-page"));let Dt=at;const it=class it extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(it.TMPL);i("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}render(){const[t,e]=O("bookId","chapterId");i("#location-info").show(t,e),i("#question-list-link",this).href=W(t,e)}async handleSubmit(t){t.preventDefault();const[e,s]=O("bookId","chapterId"),o=t.target,a=new FormData(o),r=p(a,"quest"),c=p(a,"answer"),l=p(a,"details");if(q(o),f(o,r),f(o,c),!M(o)){const g=i("#btn-submit",o);g.disabled=!0;const v=he(r.value,c.value,l.value);Ze(e,s,v).then(()=>{window.location.hash=W(e,s)}).finally(()=>{g.disabled=!1})}}};h(it,"TMPL",i("#question-create-page"));let qt=it;const rt=class rt extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(rt.TMPL);i("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}async render(){const[t,e,s]=O("bookId","chapterId","idx");i("#location-info").show(t,e,s),i("#question-list-link",this).href=W(t,e);const o=await Gt(t,e,parseInt(s));this.setValue("#quest",o.quest),this.setValue("#answer",o.answer),this.setValue("#details",o.details||"")}setValue(t,e){const s=i(t);s.value=e,s.dispatchEvent(new Event("input"))}async handleSubmit(t){t.preventDefault();const[e,s,o]=O("bookId","chapterId","idx"),a=t.target,r=new FormData(a),c=p(r,"quest"),l=p(r,"answer"),g=p(r,"details");if(q(a),f(a,c),f(a,l),!M(a)){const v=i("#btn-submit",a);v.disabled=!0;const B=he(c.value,l.value,g.value);Ke(e,s,parseInt(o),B).then(()=>{window.location.hash=W(e,s)}).finally(()=>{v.disabled=!1})}}};h(rt,"TMPL",i("#question-update-page"));let Mt=rt;const xn=(n,t)=>Math.floor(Math.random()*(t-n+1)+n),En=n=>{for(let t=0;t<n.length;t++){const e=xn(0,n.length-1);if(t===e)continue;const s=n[t];n[t]=n[e],n[e]=s}},z="lession",Cn=(n,t,e)=>{if(n.length==0)return;const s=n.map(a=>({questionId:a,progress:t}));En(s);const o={learning:s,learned:[],reverse:e};localStorage.setItem(z,JSON.stringify(o))},Sn=()=>localStorage.getItem(z)!=null,Ln=()=>{const n=localStorage.getItem(z);if(n)return JSON.parse(n)},$n=n=>n.learning.length>0?(localStorage.setItem(z,JSON.stringify(n)),!0):(localStorage.removeItem(z),!1),Rn=()=>{localStorage.removeItem(z)},Pn=n=>{const t=[0,0,0,n.learned.length];return n.learning.forEach(e=>{if(e.progress>2)throw Error(`Invalid progress ${e.progress}`);t[e.progress]++}),t},Tn=n=>{let t=0;return t+=n[0]*3,t+=n[1]*2,t+=n[2]*1,t};class In extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const[t,e]=O("bookId","chapterId"),s=await Q(t,e);s.length===0&&(L("The chapter has no questions!"),i("#btn-start").disabled=!0),this.addLessionInfo(t,e,s)}async handleSubmit(t){t.preventDefault();const e=t.target,s=new FormData(e),o=p(s,"correct"),a=p(s,"reverse"),[r,c]=O("bookId","chapterId"),g=(await Q(r,c)).map((v,B)=>({bookId:r,chapterId:c,idx:B}));Cn(g,parseInt(o.value),a.value==="true"),window.location.hash=oe()}async addLessionInfo(t,e,s){const o=await Wt(t),a=await Bt(t,e);i("#lession-info").update([{key:"Book",value:o.title},{key:"Chapter",value:a.title},{key:"Length",value:s.length.toString()}])}renderPage(){const t=C`
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
    `,e=S(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}class Dn extends HTMLElement{constructor(){super(...arguments);h(this,"lession");h(this,"questionProgress");h(this,"onCorrect",()=>{this.update(this.questionProgress.progress+1)})}connectedCallback(){this.hasChildNodes()||(this.appendChild(this.renderPage()),this.load())}load(){if(this.lession=Ln(),!this.lession){this.setStateRunning(!1),L("No lession found!");return}this.setStateRunning(!0),this.next()}next(){if(this.lession){this.addProgressInfo(Pn(this.lession));const e=this.lession.learning.shift();if(e)this.questionProgress=e,this.setQuestion(this.questionProgress.questionId,this.questionProgress),this.setStateQuestion(!0);else{this.setStateRunning(!1);return}this.questionProgress&&i("location-info").show(this.questionProgress.questionId.bookId,this.questionProgress.questionId.chapterId,this.questionProgress.questionId.idx.toString())}}async update(e){this.questionProgress&&this.lession&&(this.questionProgress.progress=e,this.questionProgress.progress<3?this.lession.learning.push(this.questionProgress):this.lession.learned.push(this.questionProgress),$n(this.lession),this.next())}onShow(){this.setStateQuestion(!1)}onWrong(){this.update(0)}onLearned(){this.update(3)}onSkip(){this.update(this.questionProgress.progress)}onStop(){window.location.hash=Ae()}setStateQuestion(e){this.doShow('[data-show="ask"]',e),this.doShow('[data-show="show"]',!e),i("#question-show").show(!e)}setStateRunning(e){this.doShow('[data-show="running"]',e),e||(this.doShow('[data-show="ask"]',!1),this.doShow('[data-show="show"]',!1))}doShow(e,s){Ut(e).forEach(o=>{const a=o.dataset.display||"block";o.style.display=s?a:"none"})}async setQuestion(e,s){const o=await Gt(e.bookId,e.chapterId,e.idx);i("#question-show").render(e,o,s)}addProgressInfo(e){i("#progress-info").update([{key:"Unlearned",value:e[0].toString()},{key:"One correct",value:e[1].toString()},{key:"Two correct",value:e[2].toString()},{key:"Learned",value:e[3].toString()},{key:"Total",value:Tn(e).toString()}])}renderPage(){const e=C`
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
    `,s=S(e);return[{id:"#btn-show",fct:this.onShow},{id:"#btn-correct",fct:this.onCorrect},{id:"#btn-wrong",fct:this.onWrong},{id:"#btn-skip",fct:this.onSkip},{id:"#btn-learned",fct:this.onLearned},{id:"#btn-stop",fct:this.onStop}].forEach(o=>{i(o.id,s).onclick=o.fct.bind(this)}),s}}const qn=async()=>{const n=[],t=await Ft();for(const e of t){const s=await ft(e.id);for(const o of s)n.push(Q(e.id,o.id))}await Promise.all(n)},Mn=async n=>{const t=await ce(n);if(!t)throw new d(`Unable to get from cache: ${n}`);return JSON.stringify(t.data,null,2)},fe=async(n,t,e)=>{const s=await un(wt(t.user,t.repo,e),t.token);if(s.hasError){n.error=`cacheListing - ${s.message}`;return}n.listing.push(...s.value);const o=[];for(const a of s.value)a.type==="dir"&&o.push(fe(n,t,a.path));await Promise.all(o)},On=async()=>{const n=await m(),t={error:void 0,listing:[]};if(await fe(t,n,ze()),t.error){L(t.error);return}const e=await re();for(const s of e){const o=t.listing.find(a=>a.path===s.path);(!o||s.hash!==o.sha)&&await zt(s.path,!0)}};class Hn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}onCacheLoad(){i("#confirm-dialog").activate("Load Cache","Do you realy want to load all files?",async()=>{await qn(),this.render()})}onCacheCheck(){i("#confirm-dialog").activate("Check Cache","Do you realy want to check all files?",async()=>{await On(),this.render()})}getHash(t){return t.substring(0,6)}getSearchHash(t,e){return P(t)?e?this.getHash(e.hash):"missing":""}async render(){const t=i("#confirm-dialog"),e=await re(),s=await Je(),o=e.map(a=>this.renderEntry(a,s,t));i("tbody").replaceChildren(...o)}onDelete(t,e){return()=>{t.activate("Delete Cache Entry",`Do you realy want to delete the cache entry: ${e}?`,async()=>{await zt(e,P(e)),this.render()})}}renderPage(){const t=C`
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
    `,e=S(t);return i("#cache-load",e).onclick=this.onCacheLoad.bind(this),i("#cache-check",e).onclick=this.onCacheCheck.bind(this),e}renderEntry(t,e,s){const o=this.getHash(t.hash),a=e.find(g=>g.path===t.path),r=this.getSearchHash(t.path,a),c=C`
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
    `,l=S(c);return i('[data-icon="delete"]',l).onclick=this.onDelete(s,t.path).bind(this),l}}class jn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const t=x("path");if(!Ge(t)){L(`Path is not valid ${t}`);return}this.doCache(t),this.doSearch(t)}async doCache(t){const e=i("#location-info");if(P(t)){const[s,o]=We(t);e.show(s,o)}else if(ie(t)){const s=Fe(t);e.show(s)}else e.hide();i("#cache").show("Cache",t,await Mn(t))}async doSearch(t){const e=i("#search");if(P(t)){e.show("Search",t,await an(t));return}e.hide()}renderPage(){const t=C`
      <div class="is-column is-gap">
        <div class="page-title">Cache Raw</div>
        <location-info id="location-info"></location-info>

        <json-show id="cache"></json-show>
        <json-show id="search"></json-show>

        <div class="is-row is-gap">
          <button class="btn" id="btn-cancel">Back</button>
        </div>
      </div>
    `,e=S(t);return i("#btn-cancel",e).onclick=()=>{history.back()},e}}const ct=class ct extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(ct.TMPL);i("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}async render(){const t=x("searchStr");if(!t)return;const e=decodeURI(t);if(e.length<3)return;i("#search").value=e;const s=[],o=await on(e.toLowerCase());i('[data-id="num"]').innerText=o.length===0?"Nothing found!":`Numebr of results: ${o.length}`,o.forEach(a=>{s.push(J.instance(a.questId,a.quest))}),i('[data-id="questions"]').replaceChildren(...s)}async handleSubmit(t){t.preventDefault();const e=t.target,s=new FormData(e),o=p(s,"search");q(e),f(e,o)&&mn(e,o,3),M(e)||(window.location.hash=Ue(encodeURI(o.value)))}};h(ct,"TMPL",i("#search-page"));let Ot=ct;const dt=class dt extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=u(dt.TMPL),e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=y,e.appendChild(t)}}show(t,e,s){this.shadowRoot&&(i("#wrapper",this.shadowRoot).style.display="flex",i("#title",this.shadowRoot).innerText=t,i("#path",this.shadowRoot).innerText=e,i("#content",this.shadowRoot).innerText=s)}hide(){this.style.display="none"}};h(dt,"TMPL",i("#tmpl-json-show"));let Ht=dt;const A=class A extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=u(A.TMPL),e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=y,e.appendChild(t)}}update(t){if(this.shadowRoot){const e=[];t.forEach(s=>{const o=u(A.TMPL_ENTRY);i('[data-id="key"]',o).textContent=s.key,i('[data-id="value"]',o).textContent=s.value,e.push(o)}),i("#wrapper",this.shadowRoot).replaceChildren(...e)}}};h(A,"TMPL",i("#tmpl-key-values")),h(A,"TMPL_ENTRY",i("#tmpl-key-values-entry"));let jt=A;const lt=class lt extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=u(lt.TMPL),e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=y,e.appendChild(t)}}async show(t,e,s){if(this.shadowRoot){const o=[],a=await Wt(t);if(o.push({key:"Book",value:a.title}),e){const r=await Bt(t,e);o.push({key:"Chapter",value:r.title})}s&&o.push({key:"Question",value:s}),i("#info",this.shadowRoot).update(o)}}hide(){this.style.display="none"}};h(lt,"TMPL",i("#tmpl-location-info"));let Nt=lt;const ht=class ht extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=u(ht.TMPL);i("#btn-continue",t).onclick=this.onContinue.bind(this),i("#btn-end",t).onclick=this.onEnd.bind(this);const e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=y,e.appendChild(t)}this.render()}render(){Sn()?this.style.display="block":this.style.display="none"}onContinue(){window.location.hash=oe()}onEnd(){Rn(),this.style.display="none"}};h(ht,"TMPL",i("#tmpl-lession-continue"));let At=ht;document.adoptedStyleSheets=y;w(/^#\/$/,"index-page");w(/^#\/admin$/,"admin-page");w(/^#\/books$/,"book-list-page");w(/^#\/books\/create$/,"book-create-page");w(/^#\/books\/update\/(?<bookId>[^\/]+)$/,"book-update-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapters$/,"chapter-list-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapters\/create$/,"chapter-create-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/update$/,"chapter-update-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/questions$/,"question-list-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/questions\/create$/,"question-create-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/question\/(?<idx>[^\/]+)\/update$/,"question-update-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/lession-prepare$/,"lession-prepare-page");w(/^#\/lession-process$/,"lession-process-page");w(/^#\/cache\/list$/,"cache-list-page");w(/^#\/cache\/raw\/(?<path>.*)$/,"cache-raw-page");w(/^#\/search(\/(?<searchStr>[^\/]+))?$/,"search-page");customElements.define("navi-gation",xt);customElements.define("error-msg",Et);customElements.define("confirm-dialog",St);customElements.define("question-show",J);customElements.define("key-values",jt);customElements.define("location-info",Nt);customElements.define("json-show",Ht);customElements.define("lession-continue",At);customElements.define("ui-field",Lt);customElements.define("preview-field",Ct);customElements.define("ui-icons",kt);customElements.define("not-found-page",Rt);customElements.define("index-page",$t);customElements.define("admin-page",vn);customElements.define("cache-list-page",Hn);customElements.define("cache-raw-page",jn);customElements.define("search-page",Ot);customElements.define("book-list-page",yn);customElements.define("book-create-page",kn);customElements.define("book-update-page",bn);customElements.define("chapter-list-page",Pt);customElements.define("chapter-create-page",Tt);customElements.define("chapter-update-page",It);customElements.define("question-list-page",Dt);customElements.define("question-create-page",qt);customElements.define("question-update-page",Mt);customElements.define("lession-prepare-page",In);customElements.define("lession-process-page",Dn);Pe("#/","#/admin","not-found-page");Se();
