var Ie=Object.defineProperty;var Me=(n,t,e)=>t in n?Ie(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var l=(n,t,e)=>Me(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const De=`/* 1. Use a more-intuitive box-sizing model */
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
`,Pe=`:root {
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

  -webkit-appearance: initial;
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
`,de=new CSSStyleSheet;de.replace(De);const he=new CSSStyleSheet;he.replace(Pe);const v=[de,he],C=n=>{const t=new CustomEvent("error-msg",{detail:n});document.dispatchEvent(t)};class d extends Error{constructor(t){super(t),C(t)}}const ae=2,qe=n=>{n.objectStoreNames.contains("cache")||n.createObjectStore("cache",{keyPath:"path"}),n.objectStoreNames.contains("search")||n.createObjectStore("search",{keyPath:"path"}),n.objectStoreNames.contains("admin")||n.createObjectStore("admin",{keyPath:"id"})},Oe=()=>new Promise((n,t)=>{const e=indexedDB.open("trainer",ae);e.onupgradeneeded=o=>{const s=e.result;o.oldVersion<ae&&qe(s),console.log("db upgrade success!")},e.onerror=o=>{console.error(o.type),t()},e.onsuccess=()=>{const o=e.result;o.onerror=s=>{console.log(s.type)},console.log("db init success!"),n(o)}}),q=Oe(),wt=async(n,t)=>(await q).transaction([n],t).objectStore(n),bt=(n,t)=>new Promise((e,o)=>{const s=n.get(t);s.onsuccess=()=>{console.log("Store:",n.name,"id:",t,"get:",s.result?s.result:"NOT-FOUND"),e(s.result)},s.onerror=r=>{C(`Store: ${n.name} id: ${t} storeGet error: ${r}`),o()}}),Et=(n,t)=>new Promise((e,o)=>{const s=n.put(t);s.onsuccess=()=>{console.log("Store:",n.name,"put:",t),e(t)},s.onerror=r=>{C(`Store: ${n.name} put: ${t} error: ${r}`),o()}}),Ct=(n,t)=>new Promise((e,o)=>{const s=n.delete(t);s.onsuccess=()=>{console.log("Store:",n.name,"delete:",t),e(s.result)},s.onerror=r=>{C(`Store: ${n.name} delete: ${t} error: ${r}`),o()}}),ue=n=>new Promise((t,e)=>{const o=n.getAll();o.onsuccess=()=>{console.log("Store:",n.name,"get all"),t(o.result)},o.onerror=s=>{C(`Store: ${n.name} get all: ${s}`),e()}}),yt="admin",g=async()=>{const n=await wt(yt,"readonly"),t=await bt(n,"github");if(t===void 0)throw new Error("Unable to get github config.");return t},He=async()=>{const n=await wt(yt,"readonly");return bt(n,"github")},Ne=async n=>{const t=await wt(yt,"readwrite");return Et(t,n)},je=async n=>{const t=await wt(yt,"readwrite");return Ct(t,n)},pe="github";let B=He();const Ae=async()=>{document.dispatchEvent(await B?new Event("login"):new Event("logout"))},ze=async()=>await B!==void 0,Ue=async(n,t,e)=>{B=Ne({id:pe,user:n,repo:t,token:e}),document.dispatchEvent(new Event("login"))},Ge=async()=>{await B&&(B=je(pe),document.dispatchEvent(new Event("logout")))},a=(n,t)=>{t||(t=document);const e=t.querySelector(n);if(!e)throw new Error(`Unable to find: ${n}`);return e},Xt=(n,t)=>{t||(t=document);const e=[...t.querySelectorAll(n)];if(e.length===0)throw new Error(`Unable to find: ${n}`);return e},me=[];let Q,fe,St,ge;const x=n=>{if(!Q||!Q.groups){const t=`Route parameter: ${n} - No parameters found: ${window.location.hash}`;throw new Error(t)}return Q.groups[n]},P=(...n)=>n.map(t=>x(t)),re=async()=>{let n=window.location.hash||fe;if(!await ze()&&n!==St){window.location.hash=St;return}const t=me.find(s=>s.regex.test(n));t&&(Q=t.regex.exec(window.location.hash));const e=t?t.page:ge,o=document.createElement(e);a("main").replaceChildren(o)},w=(n,t)=>{me.push({regex:n,page:t})},Be=(n,t,e)=>{fe=n,St=t,ge=e,window.addEventListener("hashchange",re),window.addEventListener("DOMContentLoaded",re)},u=n=>n.content.cloneNode(!0),O=class O extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.getAttribute("data-icon")||"login",e=u(O.TMPL),o=u(O.ICONS[t]);e.appendChild(o);const s=this.attachShadow({mode:"open"});s.adoptedStyleSheets=v,s.appendChild(e)}}};l(O,"ICONS",{logout:a("#tmpl-icon-logout"),home:a("#tmpl-icon-home"),admin:a("#tmpl-icon-admin"),book:a("#tmpl-icon-book"),delete:a("#tmpl-icon-delete"),update:a("#tmpl-icon-update"),list:a("#tmpl-icon-list"),start:a("#tmpl-icon-start"),cache:a("#tmpl-icon-cache"),search:a("#tmpl-icon-search"),info:a("#tmpl-icon-info")}),l(O,"TMPL",a("#tmpl-icon"));let Lt=O;const Y=class Y extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=u(Y.TMPL);a("#logout",t).onclick=this.doLogout;const e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=v,e.appendChild(t),document.addEventListener("login",this.onLogin.bind(this)),document.addEventListener("logout",this.onLogout.bind(this))}}onLogin(){this.shadowRoot&&(a("#nav-items",this.shadowRoot).style.visibility="visible")}onLogout(){this.shadowRoot&&(a("#nav-items",this.shadowRoot).style.visibility="hidden")}doLogout(){Ge()}};l(Y,"TMPL",a("#tmpl-navigation"));let $t=Y;const K=class K extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=u(K.TMPL);a("#error-btn",t).onclick=this.onOk.bind(this);const e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=v,e.appendChild(t),document.addEventListener("error-msg",this.onError.bind(this)),this.style.display="none"}}onError(t){if(this.shadowRoot){const e=t.detail;a("#error-msg",this.shadowRoot).textContent=e,this.style.display="block"}}onOk(){this.shadowRoot&&(a("#error-msg",this.shadowRoot).textContent="",this.style.display="none")}};l(K,"TMPL",a("#tmpl-error"));let Tt=K;const Fe=new RegExp(/[<>]/,"g"),We=[{pattern:new RegExp(/^- (.+)=#/,"g"),replace:'<span class="md-right">&bull;</span><span class="md-it">$1</span>'},{pattern:new RegExp(/^(.+)=#/,"g"),replace:'<span class="md-it">$1</span>'},{pattern:new RegExp(/#=(.+)$/,"g"),replace:'<span class="md-it">$1</span>'},{pattern:new RegExp(/^- /,"g"),replace:'<span class="md-right">&bull;</span>'}],Je=[{pattern:new RegExp(/#([^#]+)#/,"g"),replace:'<span class="md-it">$1</span>'},{pattern:new RegExp(/\*\*(.)/,"g"),replace:'<span class="md-em">$1</span>'},{pattern:new RegExp(/\*([^*]+)\*/,"g"),replace:'<span class="md-em">$1</span>'}],ie=(n,t)=>(n.forEach(e=>{t=t.replaceAll(e.pattern,e.replace)}),t),V=n=>{const t=n.replace(Fe,"").split(`
`);let e=[];for(const o of t)e.push(ie(We,o.trim()));return ie(Je,e.join(`
`))},Z=class Z extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=u(Z.TMPL),e=this.getAttribute("data-id")||"no-id",o=a(`#${e}`),s=a("#preview",t);o.oninput=()=>{console.log("input"),s.innerHTML=V(o.value)};const r=this.attachShadow({mode:"open"});r.adoptedStyleSheets=v,r.appendChild(t)}}};l(Z,"TMPL",a("#tmpl-preview-field"));let Rt=Z;const we=()=>"#/books",Qe=n=>`#/books/update/${n}`,A=n=>`#/book/${n}/chapters`,Ve=n=>`#/book/${n}/chapters/create`,Ye=(n,t)=>`#/book/${n}/chapter/${t}/update`,F=(n,t)=>`#/book/${n}/chapter/${t}/questions`,Ke=(n,t)=>`#/book/${n}/chapter/${t}/questions/create`,Ze=(n,t,e)=>`#/book/${n}/chapter/${t}/question/${e}/update`,Xe=(n,t)=>`#/book/${n}/chapter/${t}/lession-prepare`,be=()=>"#/lession-process",_e=()=>"#",tn=n=>n?`#/search/${n}`:"#/search",ye=n=>`#/cache/raw/${n}`,X=class X extends HTMLElement{constructor(){super(...arguments);l(this,"questionId");l(this,"question");l(this,"doDelete")}static instance(e,o,s){const r=document.createElement("question-show");return r.questionId=e,r.question=o,r.doDelete=s,r}connectedCallback(){if(!this.shadowRoot){const e=u(X.TMPL),o=this.attachShadow({mode:"open"});o.adoptedStyleSheets=v,o.appendChild(e),this.questionId&&this.question&&this.render(this.questionId,this.question)}}render(e,o,s){this.shadowRoot&&(a("#label",this.shadowRoot).textContent=`Question: ${e.idx}`,a("#quest",this.shadowRoot).innerHTML=V(o.quest),a("#answer",this.shadowRoot).innerHTML=V(o.answer),this.renderProgress(this.shadowRoot,s),this.renderDetails(this.shadowRoot,o),this.renderUpdateBtn(this.shadowRoot,e),this.renderDeleteBtn(this.shadowRoot,e),this.renderLocationBtn(this.shadowRoot,e))}show(e){if(this.shadowRoot){const o=e?"flex":"none",s=a("#answer",this.shadowRoot);s.parentElement&&(s.parentElement.style.display=o);const r=a("#details",this.shadowRoot);r.parentElement&&(r.parentElement.style.display=r.innerHTML?o:"none")}}renderProgress(e,o){const s=a("#progress",e);o?s.textContent=`Progress: ${o.progress} / 3`:s.style.display="none"}renderDetails(e,o){const s=a("#details",e);!o.details&&s.parentElement&&(s.parentElement.style.display="none"),s.innerHTML=o.details?V(o.details):""}renderUpdateBtn(e,o){a('[data-icon="update"]',e).onclick=()=>{window.location.hash=Ze(o.bookId,o.chapterId,o.idx)}}renderDeleteBtn(e,o){const s=a('[data-icon="delete"]',e);this.doDelete?s.onclick=()=>{this.doDelete&&this.doDelete(o)}:s.style.display="none"}renderLocationBtn(e,o){a('[data-icon="info"]',e).onclick=()=>{const s=a("#location-info",e);s.style.display==="none"?(s.style.display="block",a("#location-info",e).show(o.bookId,o.chapterId,o.idx.toString())):s.style.display="none"}}};l(X,"TMPL",a("#tmpl-question-show"));let W=X;const _=class _ extends HTMLElement{constructor(){super(...arguments);l(this,"fct")}connectedCallback(){if(!this.shadowRoot){const e=u(_.TMPL),o=this.attachShadow({mode:"open"});o.adoptedStyleSheets=v,o.appendChild(e),a("#btn-cancel",o).onclick=this.onCancel.bind(this),a("#btn-ok",o).onclick=this.onOk.bind(this),this.style.display="none"}}onCancel(){this.shadowRoot&&(this.style.display="none")}async onOk(){if(this.shadowRoot&&this.fct){const e=a("#btn-ok",this.shadowRoot);e.disabled=!0,this.fct().finally(()=>{this.style.display="none",e.disabled=!1})}}activate(e,o,s){this.shadowRoot&&(a("#dialog-title",this.shadowRoot).textContent=e,a("#dialog-msg",this.shadowRoot).textContent=o,this.style.display="block",this.fct=s)}};l(_,"TMPL",a("#tmpl-confirm-dialog"));let It=_;const G=class G extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.getAttribute("data-id")||"no-id",e=u(G.TMPL),o=a("label",e);o.htmlFor=t,o.textContent=this.getAttribute("data-label")||"no-label";const s=this.attachShadow({mode:"open"});s.adoptedStyleSheets=v,s.appendChild(e)}}attributeChangedCallback(t,e,o){this.shadowRoot&&t==="data-error"&&(a("#error",this.shadowRoot).textContent=o)}};l(G,"observedAttributes",["data-error"]),l(G,"TMPL",a("#tmpl-ui-field"));let Mt=G;const en=()=>"books",L=()=>"books/books.json",R=n=>`books/${n}/chapters.json`,I=(n,t)=>`books/${n}/questions.${t}.json`,$=n=>/^books\/[^\/]+\/questions.[^\/]+.json$/.test(n),ve=n=>/^books\/[^\/]+\/chapters.json$/.test(n),nn=n=>n==="books/books.json",on=n=>nn(n)||ve(n)||$(n),sn=n=>{const t=/^books\/([^\/]+)\/chapters.json$/,e=n.match(t);if(!e)throw new d(`No matches for ${n}`);return e[1]},an=n=>{const t=/^books\/([^\/]+)\/questions.([^\/]+).json$/,e=n.match(t);if(!e)throw new d(`No matches for ${n}`);return[e[1],e[2]]},E="cache",T="search",ke=async()=>{const n=(await q).transaction([E],"readonly").objectStore(E);return await ue(n)},rn=async()=>{const n=(await q).transaction([T],"readonly").objectStore(T);return await ue(n)},xe=async n=>{const t=(await q).transaction([E],"readonly").objectStore(E);return await bt(t,n)},Ee=async n=>{const t=(await q).transaction([T],"readonly").objectStore(T);return await bt(t,n)},_t=async(n,t)=>{const e=t?[E,T]:[E],o=(await q).transaction(e,"readwrite");await Ct(o.objectStore(E),n),t&&await Ct(o.objectStore(T),n)},Ce=async(n,t)=>{const e=t?[E,T]:[E],o=(await q).transaction(e,"readwrite");await Et(o.objectStore(E),{path:n.path,data:n.data,hash:n.hash}),t&&await Et(o.objectStore(T),t)};class S{constructor(){l(this,"status",2);l(this,"_message");l(this,"wrapper")}get isOk(){if(this.status===2)throw new Error("Status not set!");return this.status===0}get hasError(){if(this.status===2)throw new Error("Status not set!");return this.status===1}get message(){if(this.status!==1)throw new Error("Status is not ERROR!");if(!this._message)throw new Error("Status is ERROR but no message is set!");return this._message}get value(){if(this.status!==0)throw new Error("Status is not OK!");if(!this.wrapper)throw new Error("Value not set!");return this.wrapper.value}setOk(t){return this.status=0,this.wrapper={value:t},this}setError(t){if(t instanceof S){if(!t.hasError)throw new Error("Result has not an error!");this._message=t._message}else this._message=t;return this.status=1,this}}const vt=async n=>{const t=await g(),e=R(n),o=await b(t,e);if(o.hasError)throw new d(o.message);return o.value.data},te=async(n,t)=>{const e=await g(),o=R(n),s=await b(e,o);if(s.hasError)throw new d(s.message);const r=s.value.data.find(i=>i.id===t);if(!r)throw new d(`Not found: ${t}`);return r},cn=async(n,t)=>{const e=await g(),o=R(n),s=await b(e,o);if(s.hasError)throw new d(s.message);const r=s.value.data,i=r.findIndex(h=>h.id===t.id);if(i<0)throw new d(`Chapter not found: ${t.id}`);return r[i]=t,(await k(e,o,r,s.value.hash,`Updating chapter: ${t.id}`)).value},ln=async(n,t)=>{const e=await g(),o=R(n),s=await b(e,o);if(s.hasError)throw new d(s.message);let r=s.value.data;const i=r.length;if(r=r.filter(m=>m.id!==t),i===r.length)throw new d(`Not found: ${t}`);const c=await k(e,o,r,s.value.hash,`Deleting chapter ${t}`);if(c.hasError)throw new d(c.message);const h=await $e(e,I(n,t),"Deleting file.");if(h.hasError)throw new d(h.message);return r},dn=async(n,t)=>{const e=await g(),o=R(n),s=await b(e,o);if(s.hasError)throw new d(s.message);const r=s.value.data;if(r.find(m=>m.id===t.id))throw new d(`Id already exists: ${t.id}`);r.push(t);const i=await k(e,o,r,s.value.hash,`Adding chapter: ${t.id}`);if(i.hasError)throw new d(i.message);const c=I(n,t.id),h=await k(e,c,[],void 0,"Creating chapters!");if(h.hasError)throw new d(h.message);return r},J=async(n,t)=>{const e=await g(),o=I(n,t),s=await b(e,o);if(s.hasError)throw new d(s.message);return s.value.data},ee=async(n,t,e)=>(await J(n,t))[e],hn=async(n,t,e,o)=>{const s=await g(),r=I(n,t),i=await b(s,r);if(i.hasError)throw new d(i.message);const c=i.value.data;c[e]=o;const h=await k(s,r,c,i.value.hash,"Updating question!");if(h.hasError)throw new d(h.message)},un=async(n,t,e)=>{const o=await g(),s=I(n,t),r=await b(o,s);if(r.hasError)throw new d(r.message);const i=r.value.data;i.push(e);const c=await k(o,s,i,r.value.hash,"Adding question!");if(c.hasError)throw new d(c.message)},pn=async(n,t,e)=>{const o=await g(),s=I(n,t),r=await b(o,s);if(r.hasError)throw new d(r.message);const i=r.value.data.filter((h,m)=>e!==m),c=await k(o,s,i,r.value.hash,"Deleting question!");if(c.hasError)throw new d(c.message);return i},Se=(n,t,e)=>{const o={quest:n,answer:t};return e&&(o.details=e),o},mn=new RegExp(/[.,;!?()'"/&+-]/,"g"),fn=new RegExp(/[\*#=~]/,"g"),gn=new Set(["der","die","das","ein","sich","etwas","etw","hier","instr","nom","она","оно","они"]),wn=(n,t,e)=>{let o=n+" "+t;e&&(o=o+" "+e),o=o.replaceAll(mn," "),o=o.replaceAll(fn,"");let s=o.split(/\s+/);const r=new Set;return s.forEach(i=>{i.length>2&&!gn.has(i)&&r.add(i.toLowerCase())}),Array.from(r).sort().join(" ")},Le=(n,t,e)=>{const o=t.map(r=>wn(r.quest,r.answer,r.details));return{path:n,strs:o,hash:e}},bn=n=>n.length>=10,yn=async n=>{const t=[],e=await ne();for(const o of e){const s=await vt(o.id);for(const r of s){const i=I(o.id,r.id),c=await Ee(i);if(!c){C(`No search index for: ${i}`);continue}for(let h=0;h<c.strs.length;h++){const m=c.strs[h];if(m.indexOf(n)>=0){const y={bookId:o.id,chapterId:r.id,idx:h},U=await ee(y.bookId,y.chapterId,y.idx);if(t.push({questId:y,quest:U,strIdx:m}),bn(t))return t}}}}return t},vn=async n=>{const t=await Ee(n);if(!t)throw new d(`Unable to get from cache: ${n}`);return JSON.stringify(t.strs,null,2)},kn=n=>window.btoa(unescape(encodeURIComponent(n))),xn=n=>decodeURIComponent(escape(window.atob(n))),kt=async n=>n.statusText?n.statusText:n.text(),xt=(n,t,e)=>`https://api.github.com/repos/${n}/${t}/contents/${e}`,En=async(n,t,e,o,s)=>{const r=new S;try{const i={content:kn(t),message:o};e&&(i.sha=e);const c={method:"PUT",headers:{Accept:"application/vnd.github.v3+json",authorization:`token ${s}`},body:JSON.stringify(i)},h=await fetch(n,c);if(!h.ok){const y=await kt(h);return r.setError(`githubWriteContent - Url: ${n} Error: ${y}`)}const m=await h.json();return console.log(m),r.setOk(m.content.sha)}catch(i){return r.setError(`githubWriteContent - Url: ${n} Error: ${i}`)}},Cn=async(n,t)=>{const e=new S;try{const o={Accept:"application/vnd.github.v3+json"};t&&(o.authorization=`token ${t}`);const s=await fetch(n,o);if(!s.ok){const c=await kt(s);return e.setError(`githubReadContent - Url: ${n} Read error: ${c}`)}const r=await s.json(),i=xn(r.content);return e.setOk({content:i,hash:r.sha})}catch(o){return e.setError(`githubReadContent - Url: ${n} Error: ${o}`)}},Sn=async(n,t,e,o)=>{const s=new S;try{const r={message:e,sha:t},i={method:"DELETE",headers:{Accept:"application/vnd.github.v3+json",authorization:`token ${o}`},body:JSON.stringify(r)},c=await fetch(n,i);if(!c.ok){const h=await kt(c);return s.setError(`githubDelete - Url: ${n} Error: ${h}`)}return console.log(`githubDelete - Url: ${n}`),s.setOk()}catch(r){return s.setError(`githubDelete - Url: ${n} Error: ${r}`)}},Ln=async(n,t)=>{const e=new S;try{const o={Accept:"application/vnd.github.v3+json"};t&&(o.authorization=`token ${t}`);const s=await fetch(n,o);if(!s.ok){const r=await kt(s);return e.setError(`githubListing - Url: ${n} Read error: ${r}`)}return e.setOk(await s.json())}catch(o){return e.setError(`githubListing - Url: ${n} Error: ${o}`)}},b=async(n,t)=>{const e=new S,o=await xe(t);if(o)return e.setOk(o);const s=await Cn(xt(n.user,n.repo,t),n.token);if(s.hasError)return e.setError(`jsonGet - ${s.message}`);const r={path:t,data:JSON.parse(s.value.content),hash:s.value.hash},i=$(t)?Le(t,r.data,r.hash):void 0;return Ce(r,i),e.setOk(r)},k=async(n,t,e,o,s)=>{const r=new S,i=await En(xt(n.user,n.repo,t),JSON.stringify(e),o,s,n.token);if(i.hasError)return r.setError(i);const c={path:t,data:e,hash:i.value},h=$(t)?Le(t,c.data,c.hash):void 0;return Ce(c,h),r.setOk(e)},$e=async(n,t,e)=>{const o=new S,s=await b(n,t);if(s.hasError)return o.setError(s.message);const r=await Sn(xt(n.user,n.repo,t),s.value.hash,e,n.token);return r.hasError?o.setError(r):(await _t(t,$(t)),o.setOk())},ne=async()=>{const n=await g(),t=await b(n,L());if(t.hasError)throw new d(t.message);return t.value.data},oe=async n=>{const t=await g(),e=await b(t,L());if(e.hasError)throw new d(e.message);const o=e.value.data.find(s=>s.id===n);if(!o)throw new d(`Book not found: ${n}`);return o},$n=async n=>{const t=await g(),e=await b(t,L());if(e.hasError)throw new d(e.message);const o=e.value.data;if(o.find(c=>c.id===n.id))throw new d(`Id already exists: ${n.id}`);o.push(n);const s=await k(t,L(),o,e.value.hash,`Adding book: ${n.id}`);if(s.hasError)throw new d(s.message);const r=R(n.id),i=await k(t,r,[],void 0,"Creating chapters!");if(i.hasError)throw new d(i.message);return s.value},Tn=async n=>{const t=await g(),e=await b(t,L());if(e.hasError)throw new d(e.message);const o=e.value.data,s=o.findIndex(i=>i.id===n.id);if(s<0)throw new d(`Book not found: ${n.id}`);o[s]=n;const r=await k(t,L(),o,e.value.hash,`Updating book: ${n.id}`);if(r.hasError)throw new d(r.message);return r.value},Rn=async n=>{const t=await vt(n);if(t.length>0)throw new d(`Book: ${n} has chapters: ${t.length}`);const e=await g(),o=await b(e,L());if(o.hasError)throw new d(o.message);let s=o.value.data;const r=s.length;if(s=s.filter(h=>h.id!==n),r===s.length)throw new d(`Book not found: ${n}`);const i=await k(e,L(),s,o.value.hash,`Deleting book ${n}`);if(i.hasError)throw new d(i.message);const c=await $e(e,R(n),`Deleting file for: ${n}`);if(c.hasError)throw new d(c.message);return s},p=(n,t)=>{const e=n.get(t);if(typeof e=="string")return{id:t,value:e.trim()};throw new Error(`Unknown value: ${e} for key: ${t}`)},M=n=>{Xt("ui-field",n).forEach(t=>{t.removeAttribute("data-error")})},se=(n,t,e)=>{a(`ui-field[data-id="${t}"]`,n).setAttribute("data-error",e)},D=n=>Xt("ui-field",n).find(t=>t.hasAttribute("data-error")),f=(n,t)=>t.value?!0:(se(n,t.id,"Please enter a value!"),!1),Te=(n,t)=>/^[-_a-zA-Z0-9]+$/.test(t.value)?!0:(se(n,t.id,"Please enter an id value!"),!1),In=(n,t,e)=>t.value.length<e?(se(n,t.id,`Input has to be at least ${e} characters!`),!1):!0,tt=class tt extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(tt.TMPL);a("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}async render(){const t=x("bookId");a("#location-info").show(t);const e=await oe(t);a("#id").value=e.id,a("#title").value=e.title,a("#desc").value=e.description}async handleSubmit(t){t.preventDefault();const e=t.target,o=new FormData(e),s=p(o,"id"),r=p(o,"title"),i=p(o,"desc");M(e),f(e,r),f(e,i);const c=a("button",e);D(e)||(c.disabled=!0,Tn({id:s.value,title:r.value,description:i.value}).then(()=>{window.location.hash=we()}).finally(()=>{c.disabled=!1}))}};l(tt,"TMPL",a("#book-update-page"));let Dt=tt;const et=class et extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(et.TMPL);this.appendChild(t)}}};l(et,"TMPL",a("#index-page"));let Pt=et;const nt=class nt extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(nt.TMPL);this.appendChild(t)}}};l(nt,"TMPL",a("#not-found-page"));let qt=nt;const ot=class ot extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(ot.TMPL);a("form",t).onsubmit=this.handleSubmit.bind(this),a("#admin-edit",t).onclick=this.onEdit.bind(this),this.appendChild(t),document.addEventListener("logout",this.onLogout.bind(this))}this.getAdmin(),this.setEdit(!1)}handleSubmit(t){t.preventDefault();const e=t.target,o=new FormData(e),s=p(o,"user"),r=p(o,"repo"),i=p(o,"token");M(e),f(e,s),f(e,r),f(e,i);const c=a("button",e);D(e)||(c.disabled=!0,Ue(s.value,r.value,i.value).finally(()=>{this.setEdit(!1),c.disabled=!1}))}async getAdmin(){const t=await g();a("#user").value=t.user,a("#repo").value=t.repo,a("#token").value=t.token}onEdit(){this.setEdit(!0)}setEdit(t){a("#user").disabled=!t,a("#repo").disabled=!t,a("#token").disabled=!t,a("#admin-edit").disabled=t,a("#admin-save").disabled=!t}onLogout(){this.getAdmin()}};l(ot,"TMPL",a("#admin-page"));let Ot=ot;const Mn=n=>n.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;"),ce=(n,...t)=>{const e=[n[0]];for(let o=1;o<n.length;o++){let s=t[o-1];typeof s!="string"&&(s=s.toString()),e.push(Mn(s)),e.push(n[o])}return e.join("")},le=n=>{var t=document.createElement("template");return t.innerHTML=n,t.content};class Dn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const t=a("#confirm-dialog"),e=(await ne()).map(o=>this.renderBook(o,t));a("tbody").replaceChildren(...e)}onDelete(t,e){return()=>{t.activate("Delete Book",`Do you realy want to delete the book: ${e}?`,this.getDeleteFct(e))}}getDeleteFct(t){return async()=>{await Rn(t),this.render()}}renderPage(){const t=ce`
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
    `;return le(t)}renderBook(t,e){const o=ce`
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
    `,s=le(o);return a('[data-icon="delete"]',s).onclick=this.onDelete(e,t.id).bind(this),a('[data-icon="update"]',s).onclick=()=>{window.location.hash=Qe(t.id)},a('[data-icon="list"]',s).onclick=()=>{window.location.hash=A(t.id)},s}}const st=class st extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(st.TMPL);a("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}}async handleSubmit(t){t.preventDefault();const e=t.target,o=new FormData(e),s=p(o,"id"),r=p(o,"title"),i=p(o,"desc");M(e),f(e,s)&&Te(e,s),f(e,r),f(e,i);const c=a("button",e);D(e)||(console.log("id",s,"title",r,"desc",i),c.disabled=!0,$n({id:s.value,title:r.value,description:i.value}).then(()=>{window.location.hash=we()}).finally(()=>{c.disabled=!1}))}};l(st,"TMPL",a("#book-create-page"));let Ht=st;const H=class H extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(H.TMPL);this.appendChild(t)}this.render()}async render(){const t=x("bookId"),e=a("#confirm-dialog");a("#location-info").show(t),this.addLinks(t);const o=[];(await vt(t)).forEach(r=>{const i=u(H.TMPL_ROW);a('[data-id="id"]',i).textContent=r.id,a('[data-id="title"]',i).textContent=r.title,a('[data-icon="delete"]',i).onclick=this.onDelete(e,t,r.id).bind(this),a('[data-icon="update"]',i).onclick=()=>{window.location.hash=Ye(t,r.id)},a('[data-icon="list"]',i).onclick=()=>{window.location.hash=F(t,r.id)},a('[data-icon="start"]',i).onclick=()=>{window.location.hash=Xe(t,r.id)},o.push(i)}),a("tbody").replaceChildren(...o)}addLinks(t){a("#chapter-create-link").href=Ve(t),a("#chapter-cache-link").href=ye(R(t))}onDelete(t,e,o){return()=>{t.activate("Delete Chapter",`Do you realy want to delete the chapter: ${o}?`,this.getDeleteFct(e,o))}}getDeleteFct(t,e){return async()=>{ln(t,e).then(()=>{this.render()})}}};l(H,"TMPL",a("#chapter-list-page")),l(H,"TMPL_ROW",a("#tmpl-chapter-list"));let Nt=H;const at=class at extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(at.TMPL);a("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}render(){const t=x("bookId");a("#location-info").show(t);const e=A(t);a("#chapter-list-link",this).href=e}async handleSubmit(t){t.preventDefault();const e=x("bookId"),o=t.target,s=new FormData(o),r=p(s,"id"),i=p(s,"title");if(M(o),f(o,r)&&Te(o,r),f(o,i),!D(o)){const c=a("#btn-submit",o);c.disabled=!0,dn(e,{id:r.value,title:i.value}).then(()=>{window.location.hash=A(e)}).finally(()=>{c.disabled=!1})}}};l(at,"TMPL",a("#chapter-create-page"));let jt=at;const rt=class rt extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(rt.TMPL);a("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}async render(){const t=x("bookId"),e=x("chapterId");a("#location-info").show(t,e);const o=A(t);a("#chapter-list-link",this).href=o;const s=await te(t,e);a("#id").value=s.id,a("#title").value=s.title}async handleSubmit(t){t.preventDefault();const e=x("bookId"),o=t.target,s=new FormData(o),r=p(s,"id"),i=p(s,"title");if(M(o),f(o,i),!D(o)){const c=a("#btn-submit",o);c.disabled=!0,cn(e,{id:r.value,title:i.value}).then(()=>{window.location.hash=A(e)}).finally(()=>{c.disabled=!1})}}};l(rt,"TMPL",a("#chapter-update-page"));let At=rt;const it=class it extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(it.TMPL);this.appendChild(t)}this.render()}async render(){const[t,e]=P("bookId","chapterId");a("#location-info").show(t,e),this.addLinks(t,e);const o=await J(t,e),s=[];o.forEach((r,i)=>{s.push(W.instance({bookId:t,chapterId:e,idx:i},r,this.doDelete.bind(this)))}),a('[data-id="questions"]').replaceChildren(...s)}addLinks(t,e){a("#question-create-link").href=Ke(t,e),a("#question-cache-link").href=ye(I(t,e)),a("#chapter-list-link").href=A(t)}doDelete(t){a("#confirm-dialog").activate("Delete Question",`Do you realy want to delete the question: ${t.idx}?`,this.getDeleteFct(t))}getDeleteFct(t){return async()=>{pn(t.bookId,t.chapterId,t.idx).then(()=>{this.render()})}}};l(it,"TMPL",a("#question-list-page"));let zt=it;const ct=class ct extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(ct.TMPL);a("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}render(){const[t,e]=P("bookId","chapterId");a("#location-info").show(t,e),a("#question-list-link",this).href=F(t,e)}async handleSubmit(t){t.preventDefault();const[e,o]=P("bookId","chapterId"),s=t.target,r=new FormData(s),i=p(r,"quest"),c=p(r,"answer"),h=p(r,"details");if(M(s),f(s,i),f(s,c),!D(s)){const m=a("#btn-submit",s);m.disabled=!0;const y=Se(i.value,c.value,h.value);un(e,o,y).then(()=>{window.location.hash=F(e,o)}).finally(()=>{m.disabled=!1})}}};l(ct,"TMPL",a("#question-create-page"));let Ut=ct;const lt=class lt extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(lt.TMPL);a("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}async render(){const[t,e,o]=P("bookId","chapterId","idx");a("#location-info").show(t,e,o),a("#question-list-link",this).href=F(t,e);const s=await ee(t,e,parseInt(o));this.setValue("#quest",s.quest),this.setValue("#answer",s.answer),this.setValue("#details",s.details||"")}setValue(t,e){const o=a(t);o.value=e,o.dispatchEvent(new Event("input"))}async handleSubmit(t){t.preventDefault();const[e,o,s]=P("bookId","chapterId","idx"),r=t.target,i=new FormData(r),c=p(i,"quest"),h=p(i,"answer"),m=p(i,"details");if(M(r),f(r,c),f(r,h),!D(r)){const y=a("#btn-submit",r);y.disabled=!0;const U=Se(c.value,h.value,m.value);hn(e,o,parseInt(s),U).then(()=>{window.location.hash=F(e,o)}).finally(()=>{y.disabled=!1})}}};l(lt,"TMPL",a("#question-update-page"));let Gt=lt;const Pn=(n,t)=>Math.floor(Math.random()*(t-n+1)+n),qn=n=>{for(let t=0;t<n.length;t++){const e=Pn(0,n.length-1);if(t===e)continue;const o=n[t];n[t]=n[e],n[e]=o}},z="lession",On=(n,t,e)=>{if(n.length==0)return;const o=n.map(r=>({questionId:r,progress:t}));qn(o);const s={learning:o,learned:[],reverse:e};localStorage.setItem(z,JSON.stringify(s))},Hn=()=>localStorage.getItem(z)!=null,Nn=()=>{const n=localStorage.getItem(z);if(n)return JSON.parse(n)},jn=n=>n.learning.length>0?(localStorage.setItem(z,JSON.stringify(n)),!0):(localStorage.removeItem(z),!1),An=()=>{localStorage.removeItem(z)},zn=n=>{const t=[0,0,0,n.learned.length];return n.learning.forEach(e=>{if(e.progress>2)throw Error(`Invalid progress ${e.progress}`);t[e.progress]++}),t},Un=n=>{let t=0;return t+=n[0]*3,t+=n[1]*2,t+=n[2]*1,t},dt=class dt extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(dt.TMPL);a("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}async render(){const[t,e]=P("bookId","chapterId"),o=await J(t,e);o.length===0&&(C("The chapter has no questions!"),a("#btn-start").disabled=!0),this.addLessionInfo(t,e,o)}async handleSubmit(t){t.preventDefault();const e=t.target,o=new FormData(e),s=p(o,"correct"),r=p(o,"reverse"),[i,c]=P("bookId","chapterId"),m=(await J(i,c)).map((y,U)=>({bookId:i,chapterId:c,idx:U}));On(m,parseInt(s.value),r.value==="true"),window.location.hash=be()}async addLessionInfo(t,e,o){const s=await oe(t),r=await te(t,e);a("#lession-info").update([{key:"Book",value:s.title},{key:"Chapter",value:r.title},{key:"Length",value:o.length.toString()}])}};l(dt,"TMPL",a("#lession-prepare-page"));let Bt=dt;const ht=class ht extends HTMLElement{constructor(){super(...arguments);l(this,"lession");l(this,"questionProgress");l(this,"onCorrect",()=>{this.update(this.questionProgress.progress+1)})}connectedCallback(){if(!this.hasChildNodes()){const e=u(ht.TMPL);[{id:"#btn-show",fct:this.onShow},{id:"#btn-correct",fct:this.onCorrect},{id:"#btn-wrong",fct:this.onWrong},{id:"#btn-skip",fct:this.onSkip},{id:"#btn-learned",fct:this.onLearned},{id:"#btn-stop",fct:this.onStop}].forEach(o=>{a(o.id,e).onclick=o.fct.bind(this)}),this.appendChild(e),this.load()}}load(){if(this.lession=Nn(),!this.lession){this.setStateRunning(!1),C("No lession found!");return}this.setStateRunning(!0),this.next()}next(){if(this.lession){this.addProgressInfo(zn(this.lession));const e=this.lession.learning.shift();if(e)this.questionProgress=e,this.setQuestion(this.questionProgress.questionId,this.questionProgress),this.setStateQuestion(!0);else{this.setStateRunning(!1);return}this.questionProgress&&a("location-info").show(this.questionProgress.questionId.bookId,this.questionProgress.questionId.chapterId,this.questionProgress.questionId.idx.toString())}}async update(e){this.questionProgress&&this.lession&&(this.questionProgress.progress=e,this.questionProgress.progress<3?this.lession.learning.push(this.questionProgress):this.lession.learned.push(this.questionProgress),jn(this.lession),this.next())}onShow(){this.setStateQuestion(!1)}onWrong(){this.update(0)}onLearned(){this.update(3)}onSkip(){this.update(this.questionProgress.progress)}onStop(){window.location.hash=_e()}setStateQuestion(e){this.doShow('[data-show="ask"]',e),this.doShow('[data-show="show"]',!e),a("#question-show").show(!e)}setStateRunning(e){this.doShow('[data-show="running"]',e),e||(this.doShow('[data-show="ask"]',!1),this.doShow('[data-show="show"]',!1))}doShow(e,o){Xt(e).forEach(s=>{const r=s.dataset.display||"block";s.style.display=o?r:"none"})}async setQuestion(e,o){const s=await ee(e.bookId,e.chapterId,e.idx);a("#question-show").render(e,s,o)}addProgressInfo(e){a("#progress-info").update([{key:"Unlearned",value:e[0].toString()},{key:"One correct",value:e[1].toString()},{key:"Two correct",value:e[2].toString()},{key:"Learned",value:e[3].toString()},{key:"Total",value:Un(e).toString()}])}};l(ht,"TMPL",a("#lession-process-page"));let Ft=ht;const Gn=async()=>{const n=[],t=await ne();for(const e of t){const o=await vt(e.id);for(const s of o)n.push(J(e.id,s.id))}await Promise.all(n)},Bn=async n=>{const t=await xe(n);if(!t)throw new d(`Unable to get from cache: ${n}`);return JSON.stringify(t.data,null,2)},Re=async(n,t,e)=>{const o=await Ln(xt(t.user,t.repo,e),t.token);if(o.hasError){n.error=`cacheListing - ${o.message}`;return}n.listing.push(...o.value);const s=[];for(const r of o.value)r.type==="dir"&&s.push(Re(n,t,r.path));await Promise.all(s)},Fn=async()=>{const n=await g(),t={error:void 0,listing:[]};if(await Re(t,n,en()),t.error){C(t.error);return}const e=await ke();for(const o of e){const s=t.listing.find(r=>r.path===o.path);(!s||o.hash!==s.sha)&&await _t(o.path,!0)}},N=class N extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(N.TMPL);a("#cache-load",t).onclick=this.onCacheLoad.bind(this),a("#cache-check",t).onclick=this.onCacheCheck.bind(this),this.appendChild(t)}this.render()}onCacheLoad(){a("#confirm-dialog").activate("Load Cache","Do you realy want to load all files?",async()=>{await Gn(),this.render()})}onCacheCheck(){a("#confirm-dialog").activate("Check Cache","Do you realy want to check all files?",async()=>{await Fn(),this.render()})}getHash(t){return t.substring(0,6)}getSearchHash(t,e){return $(t)?e?this.getHash(e.hash):"missing":""}async render(){const t=a("#confirm-dialog"),e=[],o=await ke(),s=await rn();o.forEach(r=>{const i=u(N.TMPL_ROW),c=s.find(h=>h.path===r.path);a('[data-id="path"]',i).textContent=r.path,a('[data-id="cache-hash"]',i).textContent=this.getHash(r.hash),a('[data-id="search-hash"]',i).textContent=this.getSearchHash(r.path,c),a('[data-icon="delete"]',i).onclick=this.onDelete(t,r.path).bind(this),e.push(i)}),a("tbody").replaceChildren(...e)}onDelete(t,e){return()=>{t.activate("Delete Cache Entry",`Do you realy want to delete the cache entry: ${e}?`,async()=>{await _t(e,$(e)),this.render()})}}};l(N,"TMPL",a("#cache-page")),l(N,"TMPL_ROW",a("#tmpl-cache-list"));let Wt=N;const ut=class ut extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(ut.TMPL);a("#btn-cancel",t).onclick=()=>{history.back()},this.appendChild(t)}this.render()}async render(){const t=x("path");if(!on(t)){C(`Path is not valid ${t}`);return}this.doCache(t),this.doSearch(t)}async doCache(t){const e=a("#location-info");if($(t)){const[o,s]=an(t);e.show(o,s)}else if(ve(t)){const o=sn(t);e.show(o)}else e.hide();a("#cache").show("Cache",t,await Bn(t))}async doSearch(t){const e=a("#search");if($(t)){e.show("Search",t,await vn(t));return}e.hide()}};l(ut,"TMPL",a("#cache-raw-page"));let Jt=ut;const pt=class pt extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(pt.TMPL);a("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}async render(){const t=x("searchStr");if(!t)return;const e=decodeURI(t);if(e.length<3)return;a("#search").value=e;const o=[],s=await yn(e.toLowerCase());a('[data-id="num"]').innerText=s.length===0?"Nothing found!":`Numebr of results: ${s.length}`,s.forEach(r=>{o.push(W.instance(r.questId,r.quest))}),a('[data-id="questions"]').replaceChildren(...o)}async handleSubmit(t){t.preventDefault();const e=t.target,o=new FormData(e),s=p(o,"search");M(e),f(e,s)&&In(e,s,3),D(e)||(window.location.hash=tn(encodeURI(s.value)))}};l(pt,"TMPL",a("#search-page"));let Qt=pt;const mt=class mt extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=u(mt.TMPL),e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=v,e.appendChild(t)}}show(t,e,o){this.shadowRoot&&(a("#wrapper",this.shadowRoot).style.display="flex",a("#title",this.shadowRoot).innerText=t,a("#path",this.shadowRoot).innerText=e,a("#content",this.shadowRoot).innerText=o)}hide(){this.style.display="none"}};l(mt,"TMPL",a("#tmpl-json-show"));let Vt=mt;const j=class j extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=u(j.TMPL),e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=v,e.appendChild(t)}}update(t){if(this.shadowRoot){const e=[];t.forEach(o=>{const s=u(j.TMPL_ENTRY);a('[data-id="key"]',s).textContent=o.key,a('[data-id="value"]',s).textContent=o.value,e.push(s)}),a("#wrapper",this.shadowRoot).replaceChildren(...e)}}};l(j,"TMPL",a("#tmpl-key-values")),l(j,"TMPL_ENTRY",a("#tmpl-key-values-entry"));let Yt=j;const ft=class ft extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=u(ft.TMPL),e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=v,e.appendChild(t)}}async show(t,e,o){if(this.shadowRoot){const s=[],r=await oe(t);if(s.push({key:"Book",value:r.title}),e){const i=await te(t,e);s.push({key:"Chapter",value:i.title})}o&&s.push({key:"Question",value:o}),a("#info",this.shadowRoot).update(s)}}hide(){this.style.display="none"}};l(ft,"TMPL",a("#tmpl-location-info"));let Kt=ft;const gt=class gt extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=u(gt.TMPL);a("#btn-continue",t).onclick=this.onContinue.bind(this),a("#btn-end",t).onclick=this.onEnd.bind(this);const e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=v,e.appendChild(t)}this.render()}render(){Hn()?this.style.display="block":this.style.display="none"}onContinue(){window.location.hash=be()}onEnd(){An(),this.style.display="none"}};l(gt,"TMPL",a("#tmpl-lession-continue"));let Zt=gt;document.adoptedStyleSheets=v;w(/^#\/$/,"index-page");w(/^#\/admin$/,"admin-page");w(/^#\/books$/,"book-list-page");w(/^#\/books\/create$/,"book-create-page");w(/^#\/books\/update\/(?<bookId>[^\/]+)$/,"book-update-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapters$/,"chapter-list-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapters\/create$/,"chapter-create-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/update$/,"chapter-update-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/questions$/,"question-list-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/questions\/create$/,"question-create-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/question\/(?<idx>[^\/]+)\/update$/,"question-update-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/lession-prepare$/,"lession-prepare-page");w(/^#\/lession-process$/,"lession-process-page");w(/^#\/cache\/list$/,"cache-list-page");w(/^#\/cache\/raw\/(?<path>.*)$/,"cache-raw-page");w(/^#\/search(\/(?<searchStr>[^\/]+))?$/,"search-page");customElements.define("navi-gation",$t);customElements.define("error-msg",Tt);customElements.define("confirm-dialog",It);customElements.define("question-show",W);customElements.define("key-values",Yt);customElements.define("location-info",Kt);customElements.define("json-show",Vt);customElements.define("lession-continue",Zt);customElements.define("ui-field",Mt);customElements.define("preview-field",Rt);customElements.define("ui-icons",Lt);customElements.define("not-found-page",qt);customElements.define("index-page",Pt);customElements.define("admin-page",Ot);customElements.define("cache-list-page",Wt);customElements.define("cache-raw-page",Jt);customElements.define("search-page",Qt);customElements.define("book-list-page",Dn);customElements.define("book-create-page",Ht);customElements.define("book-update-page",Dt);customElements.define("chapter-list-page",Nt);customElements.define("chapter-create-page",jt);customElements.define("chapter-update-page",At);customElements.define("question-list-page",zt);customElements.define("question-create-page",Ut);customElements.define("question-update-page",Gt);customElements.define("lession-prepare-page",Bt);customElements.define("lession-process-page",Ft);Be("#/","#/admin","not-found-page");Ae();
