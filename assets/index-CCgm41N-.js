var Se=Object.defineProperty;var Le=(n,t,e)=>t in n?Se(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var l=(n,t,e)=>Le(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const Te=`/* 1. Use a more-intuitive box-sizing model */
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
`,$e=`:root {
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
  --font-size-medium: 0.9rem;
  --font-size-small: 0.8rem;

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
  font-family: Verdana, sans-serif;
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
}

#app {
  background-color: var(--color-bg);
  border-radius: var(--border-radius);
  margin-top: 4rem;
  margin-bottom: 4rem;
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
  box-shadow: var(--shadow-xs);
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
  box-shadow: var(--shadow-xs);
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
  padding: 1rem var(--table-padding-x);
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
    max-width: 960px;
  }
}

/* medium: md */
@media (max-width: 960px) {
  .container {
    width: 100%;
  }

  #app {
    margin: 0rem;
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

  #app {
    margin: 0rem;
  }

  :root {
    --table-padding-x: 0rem;
    --padding-x: 0.4rem;
    --padding-y: 0.4rem;

    --font-size-larger: 1.2rem;
    --font-size-large: 1.1rem;

    --gap-action: 0.4rem;
  }
}
`,ie=new CSSStyleSheet;ie.replace(Te);const ce=new CSSStyleSheet;ce.replace($e);const C=[ie,ce],S=n=>{const t=new CustomEvent("error-msg",{detail:n});document.dispatchEvent(t)};class d extends Error{constructor(t){super(t),S(t)}}const oe=2,Ie=n=>{n.objectStoreNames.contains("cache")||n.createObjectStore("cache",{keyPath:"path"}),n.objectStoreNames.contains("search")||n.createObjectStore("search",{keyPath:"path"}),n.objectStoreNames.contains("admin")||n.createObjectStore("admin",{keyPath:"id"})},Re=()=>new Promise((n,t)=>{const e=indexedDB.open("trainer",oe);e.onupgradeneeded=o=>{const s=e.result;o.oldVersion<oe&&Ie(s),console.log("db upgrade success!")},e.onerror=o=>{console.error(o.type),t()},e.onsuccess=()=>{const o=e.result;o.onerror=s=>{console.log(s.type)},console.log("db init success!"),n(o)}}),O=Re(),wt=async(n,t)=>(await O).transaction([n],t).objectStore(n),bt=(n,t)=>new Promise((e,o)=>{const s=n.get(t);s.onsuccess=()=>{console.log("Store:",n.name,"id:",t,"get:",s.result?s.result:"NOT-FOUND"),e(s.result)},s.onerror=a=>{S(`Store: ${n.name} id: ${t} storeGet error: ${a}`),o()}}),Ct=(n,t)=>new Promise((e,o)=>{const s=n.put(t);s.onsuccess=()=>{console.log("Store:",n.name,"put:",t),e(t)},s.onerror=a=>{S(`Store: ${n.name} put: ${t} error: ${a}`),o()}}),St=(n,t)=>new Promise((e,o)=>{const s=n.delete(t);s.onsuccess=()=>{console.log("Store:",n.name,"delete:",t),e(s.result)},s.onerror=a=>{S(`Store: ${n.name} delete: ${t} error: ${a}`),o()}}),le=n=>new Promise((t,e)=>{const o=n.getAll();o.onsuccess=()=>{console.log("Store:",n.name,"get all"),t(o.result)},o.onerror=s=>{S(`Store: ${n.name} get all: ${s}`),e()}}),yt="admin",m=async()=>{const n=await wt(yt,"readonly"),t=await bt(n,"github");if(t===void 0)throw new Error("Unable to get github config.");return t},Me=async()=>{const n=await wt(yt,"readonly");return bt(n,"github")},De=async n=>{const t=await wt(yt,"readwrite");return Ct(t,n)},Pe=async n=>{const t=await wt(yt,"readwrite");return St(t,n)},de="github";let B=Me();const qe=async()=>{document.dispatchEvent(await B?new Event("login"):new Event("logout"))},Oe=async()=>await B!==void 0,He=async(n,t,e)=>{B=De({id:de,user:n,repo:t,token:e}),document.dispatchEvent(new Event("login"))},Ne=async()=>{await B&&(B=Pe(de),document.dispatchEvent(new Event("logout")))},r=(n,t)=>{t||(t=document);const e=t.querySelector(n);if(!e)throw new Error(`Unable to find: ${n}`);return e},Kt=(n,t)=>{t||(t=document);const e=[...t.querySelectorAll(n)];if(e.length===0)throw new Error(`Unable to find: ${n}`);return e},he=[];let Y,ue,Lt,pe;const x=n=>{if(!Y||!Y.groups){const t=`Route parameter: ${n} - No parameters found: ${window.location.hash}`;throw new Error(t)}return Y.groups[n]},P=(...n)=>n.map(t=>x(t)),se=async()=>{let n=window.location.hash||ue;if(!await Oe()&&n!==Lt){window.location.hash=Lt;return}const t=he.find(s=>s.regex.test(n));t&&(Y=t.regex.exec(window.location.hash));const e=t?t.page:pe,o=document.createElement(e);r("main").replaceChildren(o)},w=(n,t)=>{he.push({regex:n,page:t})},je=(n,t,e)=>{ue=n,Lt=t,pe=e,window.addEventListener("hashchange",se),window.addEventListener("DOMContentLoaded",se)},u=n=>n.content.cloneNode(!0),H=class H extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.getAttribute("data-icon")||"login",e=u(H.TMPL),o=u(H.ICONS[t]);e.appendChild(o);const s=this.attachShadow({mode:"open"});s.adoptedStyleSheets=C,s.appendChild(e)}}};l(H,"ICONS",{logout:r("#tmpl-icon-logout"),home:r("#tmpl-icon-home"),admin:r("#tmpl-icon-admin"),book:r("#tmpl-icon-book"),delete:r("#tmpl-icon-delete"),update:r("#tmpl-icon-update"),list:r("#tmpl-icon-list"),start:r("#tmpl-icon-start"),cache:r("#tmpl-icon-cache"),search:r("#tmpl-icon-search")}),l(H,"TMPL",r("#tmpl-icon"));let Tt=H;const X=class X extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=u(X.TMPL);r("#logout",t).onclick=this.doLogout;const e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=C,e.appendChild(t),document.addEventListener("login",this.onLogin.bind(this)),document.addEventListener("logout",this.onLogout.bind(this))}}onLogin(){this.shadowRoot&&(r("#nav-items",this.shadowRoot).style.visibility="visible")}onLogout(){this.shadowRoot&&(r("#nav-items",this.shadowRoot).style.visibility="hidden")}doLogout(){Ne()}};l(X,"TMPL",r("#tmpl-navigation"));let $t=X;const K=class K extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=u(K.TMPL);r("#error-btn",t).onclick=this.onOk.bind(this);const e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=C,e.appendChild(t),document.addEventListener("error-msg",this.onError.bind(this)),this.style.display="none"}}onError(t){if(this.shadowRoot){const e=t.detail;r("#error-msg",this.shadowRoot).textContent=e,this.style.display="block"}}onOk(){this.shadowRoot&&(r("#error-msg",this.shadowRoot).textContent="",this.style.display="none")}};l(K,"TMPL",r("#tmpl-error"));let It=K;const Ae=new RegExp(/[<>]/,"g"),ze=[{pattern:new RegExp(/^- (.+)=#/,"g"),replace:'<span class="md-right">&bull;</span><span class="md-it">$1</span>'},{pattern:new RegExp(/^(.+)=#/,"g"),replace:'<span class="md-it">$1</span>'},{pattern:new RegExp(/#=(.+)$/,"g"),replace:'<span class="md-it">$1</span>'},{pattern:new RegExp(/^- /,"g"),replace:'<span class="md-right">&bull;</span>'}],Ue=[{pattern:new RegExp(/#([^#]+)#/,"g"),replace:'<span class="md-it">$1</span>'},{pattern:new RegExp(/\*\*(.)/,"g"),replace:'<span class="md-em">$1</span>'},{pattern:new RegExp(/\*([^*]+)\*/,"g"),replace:'<span class="md-em">$1</span>'}],ae=(n,t)=>(n.forEach(e=>{t=t.replaceAll(e.pattern,e.replace)}),t),Z=n=>{const t=n.replace(Ae,"").split(`
`);let e=[];for(const o of t)e.push(ae(ze,o.trim()));return ae(Ue,e.join(`
`))},_=class _ extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=u(_.TMPL),e=this.getAttribute("data-id")||"no-id",o=r(`#${e}`),s=r("#preview",t);o.oninput=()=>{console.log("input"),s.innerHTML=Z(o.value)};const a=this.attachShadow({mode:"open"});a.adoptedStyleSheets=C,a.appendChild(t)}}};l(_,"TMPL",r("#tmpl-preview-field"));let Rt=_;const ge=()=>"#/books",Ge=n=>`#/books/update/${n}`,z=n=>`#/book/${n}/chapters`,We=n=>`#/book/${n}/chapters/create`,Be=(n,t)=>`#/book/${n}/chapter/${t}/update`,F=(n,t)=>`#/book/${n}/chapter/${t}/questions`,Fe=(n,t)=>`#/book/${n}/chapter/${t}/questions/create`,Qe=(n,t,e)=>`#/book/${n}/chapter/${t}/question/${e}/update`,Je=(n,t)=>`#/book/${n}/chapter/${t}/lession-prepare`,fe=()=>"#/lession-process",Ve=()=>"#",Ye=n=>n?`#/search/${n}`:"#/search",me=n=>`#/cache/raw/${n}`,tt=class tt extends HTMLElement{constructor(){super(...arguments);l(this,"questionId");l(this,"question");l(this,"doDelete")}static instance(e,o,s){const a=document.createElement("question-show");return a.questionId=e,a.question=o,a.doDelete=s,a}connectedCallback(){if(!this.shadowRoot){const e=u(tt.TMPL),o=this.attachShadow({mode:"open"});o.adoptedStyleSheets=C,o.appendChild(e),this.questionId&&this.question&&this.render(this.questionId,this.question)}}render(e,o){if(this.shadowRoot){r("#label",this.shadowRoot).textContent=`Question: ${e.idx}`,r("#quest",this.shadowRoot).innerHTML=Z(o.quest),r("#answer",this.shadowRoot).innerHTML=Z(o.answer),r("#details",this.shadowRoot).innerHTML=o.details?Z(o.details):"",r('[data-icon="update"]',this.shadowRoot).onclick=()=>{window.location.hash=Qe(e.bookId,e.chapterId,e.idx)};const s=r('[data-icon="delete"]',this.shadowRoot);this.doDelete?s.onclick=()=>{this.doDelete&&this.doDelete(e)}:s.style.display="none"}}show(e){if(this.shadowRoot){const o=e?"flex":"none",s=r("#answer",this.shadowRoot);s.parentElement&&(s.parentElement.style.display=o);const a=r("#details",this.shadowRoot);a.parentElement&&(a.parentElement.style.display=a.innerHTML?o:"none")}}};l(tt,"TMPL",r("#tmpl-question-show"));let Q=tt;const et=class et extends HTMLElement{constructor(){super(...arguments);l(this,"fct")}connectedCallback(){if(!this.shadowRoot){const e=u(et.TMPL),o=this.attachShadow({mode:"open"});o.adoptedStyleSheets=C,o.appendChild(e),r("#btn-cancel",o).onclick=this.onCancel.bind(this),r("#btn-ok",o).onclick=this.onOk.bind(this),this.style.display="none"}}onCancel(){this.shadowRoot&&(this.style.display="none")}async onOk(){if(this.shadowRoot&&this.fct){const e=r("#btn-ok",this.shadowRoot);e.disabled=!0,this.fct().finally(()=>{this.style.display="none",e.disabled=!1})}}activate(e,o,s){this.shadowRoot&&(r("#dialog-title",this.shadowRoot).textContent=e,r("#dialog-msg",this.shadowRoot).textContent=o,this.style.display="block",this.fct=s)}};l(et,"TMPL",r("#tmpl-confirm-dialog"));let Mt=et;const W=class W extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.getAttribute("data-id")||"no-id",e=u(W.TMPL),o=r("label",e);o.htmlFor=t,o.textContent=this.getAttribute("data-label")||"no-label";const s=this.attachShadow({mode:"open"});s.adoptedStyleSheets=C,s.appendChild(e)}}attributeChangedCallback(t,e,o){this.shadowRoot&&t==="data-error"&&(r("#error",this.shadowRoot).textContent=o)}};l(W,"observedAttributes",["data-error"]),l(W,"TMPL",r("#tmpl-ui-field"));let Dt=W;const Ze=()=>"books",T=()=>"books/books.json",I=n=>`books/${n}/chapters.json`,R=(n,t)=>`books/${n}/questions.${t}.json`,q=n=>/^books\/[^\/]+\/questions.[^\/]+.json$/.test(n),Xe=n=>/^books\/[^\/]+\/chapters.json$/.test(n),Ke=n=>n==="books/books.json",_e=n=>Ke(n)||Xe(n)||q(n),E="cache",$="search",we=async()=>{const n=(await O).transaction([E],"readonly").objectStore(E);return await le(n)},tn=async()=>{const n=(await O).transaction([$],"readonly").objectStore($);return await le(n)},be=async n=>{const t=(await O).transaction([E],"readonly").objectStore(E);return await bt(t,n)},en=async n=>{const t=(await O).transaction([$],"readonly").objectStore($);return await bt(t,n)},_t=async(n,t)=>{const e=t?[E,$]:[E],o=(await O).transaction(e,"readwrite");await St(o.objectStore(E),n),t&&await St(o.objectStore($),n)},ye=async(n,t)=>{const e=t?[E,$]:[E],o=(await O).transaction(e,"readwrite");await Ct(o.objectStore(E),{path:n.path,data:n.data,hash:n.hash}),t&&await Ct(o.objectStore($),t)};class L{constructor(){l(this,"status",2);l(this,"_message");l(this,"wrapper")}get isOk(){if(this.status===2)throw new Error("Status not set!");return this.status===0}get hasError(){if(this.status===2)throw new Error("Status not set!");return this.status===1}get message(){if(this.status!==1)throw new Error("Status is not ERROR!");if(!this._message)throw new Error("Status is ERROR but no message is set!");return this._message}get value(){if(this.status!==0)throw new Error("Status is not OK!");if(!this.wrapper)throw new Error("Value not set!");return this.wrapper.value}setOk(t){return this.status=0,this.wrapper={value:t},this}setError(t){if(t instanceof L){if(!t.hasError)throw new Error("Result has not an error!");this._message=t._message}else this._message=t;return this.status=1,this}}const vt=async n=>{const t=await m(),e=I(n),o=await b(t,e);if(o.hasError)throw new d(o.message);return o.value.data},kt=async(n,t)=>{const e=await m(),o=I(n),s=await b(e,o);if(s.hasError)throw new d(s.message);const a=s.value.data.find(i=>i.id===t);if(!a)throw new d(`Not found: ${t}`);return a},nn=async(n,t)=>{const e=await m(),o=I(n),s=await b(e,o);if(s.hasError)throw new d(s.message);const a=s.value.data,i=a.findIndex(h=>h.id===t.id);if(i<0)throw new d(`Chapter not found: ${t.id}`);return a[i]=t,(await v(e,o,a,s.value.hash,`Updating chapter: ${t.id}`)).value},on=async(n,t)=>{const e=await m(),o=I(n),s=await b(e,o);if(s.hasError)throw new d(s.message);let a=s.value.data;const i=a.length;if(a=a.filter(g=>g.id!==t),i===a.length)throw new d(`Not found: ${t}`);const c=await v(e,o,a,s.value.hash,`Deleting chapter ${t}`);if(c.hasError)throw new d(c.message);const h=await xe(e,R(n,t),"Deleting file.");if(h.hasError)throw new d(h.message);return a},sn=async(n,t)=>{const e=await m(),o=I(n),s=await b(e,o);if(s.hasError)throw new d(s.message);const a=s.value.data;if(a.find(g=>g.id===t.id))throw new d(`Id already exists: ${t.id}`);a.push(t);const i=await v(e,o,a,s.value.hash,`Adding chapter: ${t.id}`);if(i.hasError)throw new d(i.message);const c=R(n,t.id),h=await v(e,c,[],void 0,"Creating chapters!");if(h.hasError)throw new d(h.message);return a},J=async(n,t)=>{const e=await m(),o=R(n,t),s=await b(e,o);if(s.hasError)throw new d(s.message);return s.value.data},te=async(n,t,e)=>(await J(n,t))[e],an=async(n,t,e,o)=>{const s=await m(),a=R(n,t),i=await b(s,a);if(i.hasError)throw new d(i.message);const c=i.value.data;c[e]=o;const h=await v(s,a,c,i.value.hash,"Updating question!");if(h.hasError)throw new d(h.message)},rn=async(n,t,e)=>{const o=await m(),s=R(n,t),a=await b(o,s);if(a.hasError)throw new d(a.message);const i=a.value.data;i.push(e);const c=await v(o,s,i,a.value.hash,"Adding question!");if(c.hasError)throw new d(c.message)},cn=async(n,t,e)=>{const o=await m(),s=R(n,t),a=await b(o,s);if(a.hasError)throw new d(a.message);const i=a.value.data.filter((h,g)=>e!==g),c=await v(o,s,i,a.value.hash,"Deleting question!");if(c.hasError)throw new d(c.message);return i},ve=(n,t,e)=>{const o={quest:n,answer:t};return e&&(o.details=e),o},ln=new RegExp(/[.,;!?()'"/&+-]/,"g"),dn=new RegExp(/[\*#=~]/,"g"),hn=new Set(["der","die","das","ein","sich","etwas","etw","hier","instr","nom","она","оно","они"]),un=(n,t,e)=>{let o=n+" "+t;e&&(o=o+" "+e),o=o.replaceAll(ln," "),o=o.replaceAll(dn,"");let s=o.split(/\s+/);const a=new Set;return s.forEach(i=>{i.length>2&&!hn.has(i)&&a.add(i.toLowerCase())}),Array.from(a).sort().join(" ")},ke=(n,t,e)=>{const o=t.map(a=>un(a.quest,a.answer,a.details));return{path:n,strs:o,hash:e}},pn=n=>n.length>=10,gn=async n=>{const t=[],e=await ee();for(const o of e){const s=await vt(o.id);for(const a of s){const i=R(o.id,a.id),c=await en(i);if(!c){S(`No search index for: ${i}`);continue}for(let h=0;h<c.strs.length;h++){const g=c.strs[h];if(g.indexOf(n)>=0){const y={bookId:o.id,chapterId:a.id,idx:h},G=await te(y.bookId,y.chapterId,y.idx);if(t.push({questId:y,quest:G,strIdx:g}),pn(t))return t}}}}return t},fn=n=>window.btoa(unescape(encodeURIComponent(n))),mn=n=>decodeURIComponent(escape(window.atob(n))),xt=async n=>n.statusText?n.statusText:n.text(),Et=(n,t,e)=>`https://api.github.com/repos/${n}/${t}/contents/${e}`,wn=async(n,t,e,o,s)=>{const a=new L;try{const i={content:fn(t),message:o};e&&(i.sha=e);const c={method:"PUT",headers:{Accept:"application/vnd.github.v3+json",authorization:`token ${s}`},body:JSON.stringify(i)},h=await fetch(n,c);if(!h.ok){const y=await xt(h);return a.setError(`githubWriteContent - Url: ${n} Error: ${y}`)}const g=await h.json();return console.log(g),a.setOk(g.content.sha)}catch(i){return a.setError(`githubWriteContent - Url: ${n} Error: ${i}`)}},bn=async(n,t)=>{const e=new L;try{const o={Accept:"application/vnd.github.v3+json"};t&&(o.authorization=`token ${t}`);const s=await fetch(n,o);if(!s.ok){const c=await xt(s);return e.setError(`githubReadContent - Url: ${n} Read error: ${c}`)}const a=await s.json(),i=mn(a.content);return e.setOk({content:i,hash:a.sha})}catch(o){return e.setError(`githubReadContent - Url: ${n} Error: ${o}`)}},yn=async(n,t,e,o)=>{const s=new L;try{const a={message:e,sha:t},i={method:"DELETE",headers:{Accept:"application/vnd.github.v3+json",authorization:`token ${o}`},body:JSON.stringify(a)},c=await fetch(n,i);if(!c.ok){const h=await xt(c);return s.setError(`githubDelete - Url: ${n} Error: ${h}`)}return console.log(`githubDelete - Url: ${n}`),s.setOk()}catch(a){return s.setError(`githubDelete - Url: ${n} Error: ${a}`)}},vn=async(n,t)=>{const e=new L;try{const o={Accept:"application/vnd.github.v3+json"};t&&(o.authorization=`token ${t}`);const s=await fetch(n,o);if(!s.ok){const a=await xt(s);return e.setError(`githubListing - Url: ${n} Read error: ${a}`)}return e.setOk(await s.json())}catch(o){return e.setError(`githubListing - Url: ${n} Error: ${o}`)}},b=async(n,t)=>{const e=new L,o=await be(t);if(o)return e.setOk(o);const s=await bn(Et(n.user,n.repo,t),n.token);if(s.hasError)return e.setError(`jsonGet - ${s.message}`);const a={path:t,data:JSON.parse(s.value.content),hash:s.value.hash},i=q(t)?ke(t,a.data,a.hash):void 0;return ye(a,i),e.setOk(a)},v=async(n,t,e,o,s)=>{const a=new L,i=await wn(Et(n.user,n.repo,t),JSON.stringify(e),o,s,n.token);if(i.hasError)return a.setError(i);const c={path:t,data:e,hash:i.value},h=q(t)?ke(t,c.data,c.hash):void 0;return ye(c,h),a.setOk(e)},xe=async(n,t,e)=>{const o=new L,s=await b(n,t);if(s.hasError)return o.setError(s.message);const a=await yn(Et(n.user,n.repo,t),s.value.hash,e,n.token);return a.hasError?o.setError(a):(await _t(t,q(t)),o.setOk())},ee=async()=>{const n=await m(),t=await b(n,T());if(t.hasError)throw new d(t.message);return t.value.data},V=async n=>{const t=await m(),e=await b(t,T());if(e.hasError)throw new d(e.message);const o=e.value.data.find(s=>s.id===n);if(!o)throw new d(`Book not found: ${n}`);return o},kn=async n=>{const t=await m(),e=await b(t,T());if(e.hasError)throw new d(e.message);const o=e.value.data;if(o.find(c=>c.id===n.id))throw new d(`Id already exists: ${n.id}`);o.push(n);const s=await v(t,T(),o,e.value.hash,`Adding book: ${n.id}`);if(s.hasError)throw new d(s.message);const a=I(n.id),i=await v(t,a,[],void 0,"Creating chapters!");if(i.hasError)throw new d(i.message);return s.value},xn=async n=>{const t=await m(),e=await b(t,T());if(e.hasError)throw new d(e.message);const o=e.value.data,s=o.findIndex(i=>i.id===n.id);if(s<0)throw new d(`Book not found: ${n.id}`);o[s]=n;const a=await v(t,T(),o,e.value.hash,`Updating book: ${n.id}`);if(a.hasError)throw new d(a.message);return a.value},En=async n=>{const t=await vt(n);if(t.length>0)throw new d(`Book: ${n} has chapters: ${t.length}`);const e=await m(),o=await b(e,T());if(o.hasError)throw new d(o.message);let s=o.value.data;const a=s.length;if(s=s.filter(h=>h.id!==n),a===s.length)throw new d(`Book not found: ${n}`);const i=await v(e,T(),s,o.value.hash,`Deleting book ${n}`);if(i.hasError)throw new d(i.message);const c=await xe(e,I(n),`Deleting file for: ${n}`);if(c.hasError)throw new d(c.message);return s},p=(n,t)=>{const e=n.get(t);if(typeof e=="string")return{id:t,value:e.trim()};throw new Error(`Unknown value: ${e} for key: ${t}`)},M=n=>{Kt("ui-field",n).forEach(t=>{t.removeAttribute("data-error")})},ne=(n,t,e)=>{r(`ui-field[data-id="${t}"]`,n).setAttribute("data-error",e)},D=n=>Kt("ui-field",n).find(t=>t.hasAttribute("data-error")),f=(n,t)=>t.value?!0:(ne(n,t.id,"Please enter a value!"),!1),Ee=(n,t)=>/^[-_a-zA-Z0-9]+$/.test(t.value)?!0:(ne(n,t.id,"Please enter an id value!"),!1),Cn=(n,t,e)=>t.value.length<e?(ne(n,t.id,`Input has to be at least ${e} characters!`),!1):!0,nt=class nt extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(nt.TMPL);r("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}async render(){const t=x("bookId"),e=await V(t);r("#id").value=e.id,r("#title").value=e.title,r("#desc").value=e.description}async handleSubmit(t){t.preventDefault();const e=t.target,o=new FormData(e),s=p(o,"id"),a=p(o,"title"),i=p(o,"desc");M(e),f(e,a),f(e,i);const c=r("button",e);D(e)||(c.disabled=!0,xn({id:s.value,title:a.value,description:i.value}).then(()=>{window.location.hash=ge()}).finally(()=>{c.disabled=!1}))}};l(nt,"TMPL",r("#book-update-page"));let Pt=nt;const Sn=(n,t)=>Math.floor(Math.random()*(t-n+1)+n),Ln=n=>{for(let t=0;t<n.length;t++){const e=Sn(0,n.length-1);if(t===e)continue;const o=n[t];n[t]=n[e],n[e]=o}},U="lession",Tn=(n,t,e)=>{if(n.length==0)return;const o=n.map(a=>({questionId:a,progress:t}));Ln(o);const s={learning:o,learned:[],reverse:e};localStorage.setItem(U,JSON.stringify(s))},$n=()=>localStorage.getItem(U)!=null,In=()=>{const n=localStorage.getItem(U);if(n)return JSON.parse(n)},Rn=n=>n.learning.length>0?(localStorage.setItem(U,JSON.stringify(n)),!0):(localStorage.removeItem(U),!1),Mn=()=>{localStorage.removeItem(U)},Dn=n=>{const t=[0,0,0,n.learned.length];return n.learning.forEach(e=>{if(e.progress>2)throw Error(`Invalid progress ${e.progress}`);t[e.progress]++}),t},Pn=n=>{let t=0;return t+=n[0]*3,t+=n[1]*2,t+=n[2]*1,t},ot=class ot extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(ot.TMPL);$n()?(r("#btn-continue",t).onclick=this.onContinue.bind(this),r("#btn-end",t).onclick=this.onEnd.bind(this)):r("#lession",t).style.display="none",this.appendChild(t)}}onContinue(){window.location.hash=fe()}onEnd(){Mn(),r("#lession").style.display="none"}};l(ot,"TMPL",r("#index-page"));let qt=ot;const st=class st extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(st.TMPL);this.appendChild(t)}}};l(st,"TMPL",r("#not-found-page"));let Ot=st;const at=class at extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(at.TMPL);r("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t),document.addEventListener("logout",this.onLogout.bind(this))}this.getAdmin()}handleSubmit(t){t.preventDefault();const e=t.target,o=new FormData(e),s=p(o,"user"),a=p(o,"repo"),i=p(o,"token");M(e),f(e,s),f(e,a),f(e,i);const c=r("button",e);D(e)||(c.disabled=!0,He(s.value,a.value,i.value).finally(()=>{c.disabled=!1}))}async getAdmin(){const t=await m();r("#user").value=t.user,r("#repo").value=t.repo,r("#token").value=t.token}onLogout(){this.getAdmin()}};l(at,"TMPL",r("#admin-page"));let Ht=at;const N=class N extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(N.TMPL);this.appendChild(t)}this.render()}async render(){const t=[],e=r("#confirm-dialog"),o=await ee();o.forEach(s=>{const a=u(N.TMPL_ROW);r('[data-id="id"]',a).textContent=s.id,r('[data-id="title"]',a).textContent=s.title,r('[data-id="desc"]',a).textContent=s.description,r('[data-icon="delete"]',a).onclick=this.onDelete(e,s.id).bind(this),r('[data-icon="update"]',a).onclick=()=>{window.location.hash=Ge(s.id)},r('[data-icon="list"]',a).onclick=()=>{window.location.hash=z(s.id)},t.push(a)}),r("tbody").replaceChildren(...t),console.log(o)}onDelete(t,e){return()=>{t.activate("Delete Book",`Do you realy want to delete the book: ${e}?`,this.getDeleteFct(e))}}getDeleteFct(t){return async()=>{await En(t),this.render()}}};l(N,"TMPL",r("#book-list-page")),l(N,"TMPL_ROW",r("#tmpl-book-list"));let Nt=N;const rt=class rt extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(rt.TMPL);r("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}}async handleSubmit(t){t.preventDefault();const e=t.target,o=new FormData(e),s=p(o,"id"),a=p(o,"title"),i=p(o,"desc");M(e),f(e,s)&&Ee(e,s),f(e,a),f(e,i);const c=r("button",e);D(e)||(console.log("id",s,"title",a,"desc",i),c.disabled=!0,kn({id:s.value,title:a.value,description:i.value}).then(()=>{window.location.hash=ge()}).finally(()=>{c.disabled=!1}))}};l(rt,"TMPL",r("#book-create-page"));let jt=rt;const j=class j extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(j.TMPL);this.appendChild(t)}this.render()}async render(){const t=x("bookId"),e=r("#confirm-dialog");this.addBookInfo(t),this.addLinks(t);const o=[];(await vt(t)).forEach(a=>{const i=u(j.TMPL_ROW);r('[data-id="id"]',i).textContent=a.id,r('[data-id="title"]',i).textContent=a.title,r('[data-icon="delete"]',i).onclick=this.onDelete(e,t,a.id).bind(this),r('[data-icon="update"]',i).onclick=()=>{window.location.hash=Be(t,a.id)},r('[data-icon="list"]',i).onclick=()=>{window.location.hash=F(t,a.id)},r('[data-icon="start"]',i).onclick=()=>{window.location.hash=Je(t,a.id)},o.push(i)}),r("tbody").replaceChildren(...o)}async addBookInfo(t){const e=await V(t);r("#book-info").update([{key:"Book",value:e.title}])}addLinks(t){r("#chapter-create-link").href=We(t),r("#chapter-cache-link").href=me(I(t))}onDelete(t,e,o){return()=>{t.activate("Delete Chapter",`Do you realy want to delete the chapter: ${o}?`,this.getDeleteFct(e,o))}}getDeleteFct(t,e){return async()=>{on(t,e).then(()=>{this.render()})}}};l(j,"TMPL",r("#chapter-list-page")),l(j,"TMPL_ROW",r("#tmpl-chapter-list"));let At=j;const it=class it extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(it.TMPL);r("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}render(){const t=x("bookId"),e=z(t);r("#chapter-list-link",this).href=e}async handleSubmit(t){t.preventDefault();const e=x("bookId"),o=t.target,s=new FormData(o),a=p(s,"id"),i=p(s,"title");if(M(o),f(o,a)&&Ee(o,a),f(o,i),!D(o)){const c=r("#btn-submit",o);c.disabled=!0,sn(e,{id:a.value,title:i.value}).then(()=>{window.location.hash=z(e)}).finally(()=>{c.disabled=!1})}}};l(it,"TMPL",r("#chapter-create-page"));let zt=it;const ct=class ct extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(ct.TMPL);r("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}async render(){const t=x("bookId"),e=x("chapterId"),o=z(t);r("#chapter-list-link",this).href=o;const s=await kt(t,e);r("#id").value=s.id,r("#title").value=s.title}async handleSubmit(t){t.preventDefault();const e=x("bookId"),o=t.target,s=new FormData(o),a=p(s,"id"),i=p(s,"title");if(M(o),f(o,i),!D(o)){const c=r("#btn-submit",o);c.disabled=!0,nn(e,{id:a.value,title:i.value}).then(()=>{window.location.hash=z(e)}).finally(()=>{c.disabled=!1})}}};l(ct,"TMPL",r("#chapter-update-page"));let Ut=ct;const lt=class lt extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(lt.TMPL);this.appendChild(t)}this.render()}async render(){const[t,e]=P("bookId","chapterId");this.addChapterInfo(t,e),this.addLinks(t,e);const o=await J(t,e),s=[];o.forEach((a,i)=>{s.push(Q.instance({bookId:t,chapterId:e,idx:i},a,this.doDelete.bind(this)))}),r('[data-id="questions"]').replaceChildren(...s)}async addChapterInfo(t,e){const o=await V(t),s=await kt(t,e);r("#chapter-info").update([{key:"Book",value:o.title},{key:"Chapter",value:s.title}])}addLinks(t,e){r("#question-create-link").href=Fe(t,e),r("#question-cache-link").href=me(R(t,e)),r("#chapter-list-link").href=z(t)}doDelete(t){r("#confirm-dialog").activate("Delete Question",`Do you realy want to delete the question: ${t.idx}?`,this.getDeleteFct(t))}getDeleteFct(t){return async()=>{cn(t.bookId,t.chapterId,t.idx).then(()=>{this.render()})}}};l(lt,"TMPL",r("#question-list-page"));let Gt=lt;const dt=class dt extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(dt.TMPL);r("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}render(){const[t,e]=P("bookId","chapterId");r("#question-list-link",this).href=F(t,e)}async handleSubmit(t){t.preventDefault();const[e,o]=P("bookId","chapterId"),s=t.target,a=new FormData(s),i=p(a,"quest"),c=p(a,"answer"),h=p(a,"details");if(M(s),f(s,i),f(s,c),!D(s)){const g=r("#btn-submit",s);g.disabled=!0;const y=ve(i.value,c.value,h.value);rn(e,o,y).then(()=>{window.location.hash=F(e,o)}).finally(()=>{g.disabled=!1})}}};l(dt,"TMPL",r("#question-create-page"));let Wt=dt;const ht=class ht extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(ht.TMPL);r("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}async render(){const[t,e,o]=P("bookId","chapterId","idx");r("#question-list-link",this).href=F(t,e);const s=await te(t,e,parseInt(o));this.setValue("#quest",s.quest),this.setValue("#answer",s.answer),this.setValue("#details",s.details||"")}setValue(t,e){const o=r(t);o.value=e,o.dispatchEvent(new Event("input"))}async handleSubmit(t){t.preventDefault();const[e,o,s]=P("bookId","chapterId","idx"),a=t.target,i=new FormData(a),c=p(i,"quest"),h=p(i,"answer"),g=p(i,"details");if(M(a),f(a,c),f(a,h),!D(a)){const y=r("#btn-submit",a);y.disabled=!0;const G=ve(c.value,h.value,g.value);an(e,o,parseInt(s),G).then(()=>{window.location.hash=F(e,o)}).finally(()=>{y.disabled=!1})}}};l(ht,"TMPL",r("#question-update-page"));let Bt=ht;const ut=class ut extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(ut.TMPL);r("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}async render(){const[t,e]=P("bookId","chapterId"),o=await J(t,e);o.length===0&&(S("The chapter has no questions!"),r("#btn-start").disabled=!0),this.addLessionInfo(t,e,o)}async handleSubmit(t){t.preventDefault();const e=t.target,o=new FormData(e),s=p(o,"correct"),a=p(o,"reverse"),[i,c]=P("bookId","chapterId"),g=(await J(i,c)).map((y,G)=>({bookId:i,chapterId:c,idx:G}));Tn(g,parseInt(s.value),a.value==="true"),window.location.hash=fe()}async addLessionInfo(t,e,o){const s=await V(t),a=await kt(t,e);r("#lession-info").update([{key:"Book",value:s.title},{key:"Chapter",value:a.title},{key:"Length",value:o.length.toString()}])}};l(ut,"TMPL",r("#lession-prepare-page"));let Ft=ut;const pt=class pt extends HTMLElement{constructor(){super(...arguments);l(this,"lession");l(this,"questionProgress");l(this,"onCorrect",()=>{this.update(this.questionProgress.progress+1)})}connectedCallback(){if(!this.hasChildNodes()){const e=u(pt.TMPL);[{id:"#btn-show",fct:this.onShow},{id:"#btn-correct",fct:this.onCorrect},{id:"#btn-wrong",fct:this.onWrong},{id:"#btn-skip",fct:this.onSkip},{id:"#btn-learned",fct:this.onLearned},{id:"#btn-stop",fct:this.onStop}].forEach(o=>{r(o.id,e).onclick=o.fct.bind(this)}),this.appendChild(e),this.load()}}load(){if(this.lession=In(),!this.lession){this.setStateRunning(!1),S("No lession found!");return}this.setStateRunning(!0),this.next()}next(){if(this.lession){this.addProgressInfo(Dn(this.lession));const e=this.lession.learning.shift();if(e)this.questionProgress=e,this.setQuestion(this.questionProgress.questionId),this.setStateQuestion(!0);else{this.setStateRunning(!1);return}this.questionProgress&&this.addQuestionInfo(this.questionProgress.questionId,this.questionProgress.progress)}}async update(e){this.questionProgress&&this.lession&&(this.questionProgress.progress=e,this.questionProgress.progress<3?this.lession.learning.push(this.questionProgress):this.lession.learned.push(this.questionProgress),Rn(this.lession),this.next())}onShow(){this.setStateQuestion(!1)}onWrong(){this.update(0)}onLearned(){this.update(3)}onSkip(){this.update(this.questionProgress.progress)}onStop(){window.location.hash=Ve()}setStateQuestion(e){this.doShow('[data-show="ask"]',e),this.doShow('[data-show="show"]',!e),r("#question-show").show(!e)}setStateRunning(e){this.doShow('[data-show="running"]',e),e||(this.doShow('[data-show="ask"]',!1),this.doShow('[data-show="show"]',!1))}doShow(e,o){Kt(e).forEach(s=>{const a=s.dataset.display||"block";s.style.display=o?a:"none"})}async setQuestion(e){const o=await te(e.bookId,e.chapterId,e.idx);r("#question-show").render(e,o)}addProgressInfo(e){r("#progress-info").update([{key:"No correct answers",value:e[0].toString()},{key:"One correct answer",value:e[1].toString()},{key:"Two correct answers",value:e[2].toString()},{key:"Learned",value:e[3].toString()},{key:"Total",value:Pn(e).toString()}])}async addQuestionInfo(e,o){const s=await V(e.bookId),a=await kt(e.bookId,e.chapterId);r("#question-info").update([{key:"Books",value:s.title},{key:"Chapter",value:a.title},{key:"Index",value:e.idx.toString()},{key:"Progress",value:`${o} / 3`}])}};l(pt,"TMPL",r("#lession-process-page"));let Qt=pt;const qn=async()=>{const n=[],t=await ee();for(const e of t){const o=await vt(e.id);for(const s of o)n.push(J(e.id,s.id))}await Promise.all(n)},re=async n=>{const t=await be(n);if(!t)throw new d(`Unable to get from cache: ${n}`);return JSON.stringify(t.data,null,2)},Ce=async(n,t,e)=>{const o=await vn(Et(t.user,t.repo,e),t.token);if(o.hasError){n.error=`cacheListing - ${o.message}`;return}n.listing.push(...o.value);const s=[];for(const a of o.value)a.type==="dir"&&s.push(Ce(n,t,a.path));await Promise.all(s)},On=async()=>{const n=await m(),t={error:void 0,listing:[]};if(await Ce(t,n,Ze()),t.error){S(t.error);return}const e=await we();for(const o of e){const s=t.listing.find(a=>a.path===o.path);(!s||o.hash!==s.sha)&&await _t(o.path,!0)}},A=class A extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(A.TMPL);r("#cache-load",t).onclick=this.cacheLoad.bind(this),r("#cache-check",t).onclick=this.cacheCheck.bind(this),this.appendChild(t)}this.render()}async cacheLoad(){await qn(),this.render()}async cacheCheck(){await On(),this.render()}getHash(t){return t.substring(0,6)}getSearchHash(t,e){return q(t)?e?this.getHash(e.hash):"missing":""}async render(){const t=r("#confirm-dialog"),e=[],o=await we(),s=await tn();o.forEach(a=>{const i=u(A.TMPL_ROW),c=s.find(h=>h.path===a.path);r('[data-id="path"]',i).textContent=a.path,r('[data-id="cache-hash"]',i).textContent=this.getHash(a.hash),r('[data-id="search-hash"]',i).textContent=this.getSearchHash(a.path,c),r('[data-icon="delete"]',i).onclick=this.onDelete(t,a.path).bind(this),e.push(i)}),r("tbody").replaceChildren(...e)}onDelete(t,e){return()=>{t.activate("Delete Cache Entry",`Do you realy want to delete the cache entry: ${e}?`,async()=>{await _t(e,q(e)),this.render()})}}};l(A,"TMPL",r("#cache-page")),l(A,"TMPL_ROW",r("#tmpl-cache-list"));let Jt=A;const gt=class gt extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(gt.TMPL);r("#btn-cancel",t).onclick=()=>{history.back()},this.appendChild(t)}this.render()}async render(){const t=x("path");if(!_e(t)){S(`Path is not valid ${t}`);return}r("#cache").show(t,await re(t)),q(t)&&r("#search").show(t,await re(t))}};l(gt,"TMPL",r("#cache-raw-page"));let Vt=gt;const ft=class ft extends HTMLElement{connectedCallback(){if(!this.hasChildNodes()){const t=u(ft.TMPL);r("form",t).onsubmit=this.handleSubmit.bind(this),this.appendChild(t)}this.render()}async render(){const t=x("searchStr");if(!t)return;const e=decodeURI(t);if(e.length<3)return;r("#search").value=e;const o=[];(await gn(e)).forEach(a=>{o.push(Q.instance(a.questId,a.quest))}),r('[data-id="questions"]').replaceChildren(...o)}async handleSubmit(t){t.preventDefault();const e=t.target,o=new FormData(e),s=p(o,"search");M(e),f(e,s)&&Cn(e,s,3),D(e)||(window.location.hash=Ye(encodeURI(s.value)))}};l(ft,"TMPL",r("#search-page"));let Yt=ft;const mt=class mt extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=u(mt.TMPL),e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=C,e.appendChild(t)}}show(t,e){this.shadowRoot&&(r("#wrapper",this.shadowRoot).style.display="flex",r("#path",this.shadowRoot).innerText=`Path: ${t}`,r("#content",this.shadowRoot).innerText=e)}};l(mt,"TMPL",r("#tmpl-json-show"));let Zt=mt;const k=class k extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.getWrapperTmpl(),e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=C,e.appendChild(t)}}update(t){if(this.shadowRoot){const e=[];t.forEach(o=>{const s=this.getDataTmpl();r('[data-id="key"]',s).textContent=`${o.key}:`,r('[data-id="value"]',s).textContent=o.value,e.push(s)}),r("#wrapper",this.shadowRoot).replaceChildren(...e)}}getWrapperTmpl(){return this.getAttribute("type")==="line"?u(k.TMPL_LINE):u(k.TMPL_TABLE)}getDataTmpl(){return this.getAttribute("type")==="line"?u(k.TMPL_ENTRY):u(k.TMPL_ROW)}};l(k,"TMPL_LINE",r("#tmpl-key-values-line")),l(k,"TMPL_ENTRY",r("#tmpl-key-values-entry")),l(k,"TMPL_TABLE",r("#tmpl-key-values-table")),l(k,"TMPL_ROW",r("#tmpl-key-values-row"));let Xt=k;document.adoptedStyleSheets=C;w(/^#\/$/,"index-page");w(/^#\/admin$/,"admin-page");w(/^#\/books$/,"book-list-page");w(/^#\/books\/create$/,"book-create-page");w(/^#\/books\/update\/(?<bookId>[^\/]+)$/,"book-update-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapters$/,"chapter-list-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapters\/create$/,"chapter-create-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/update$/,"chapter-update-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/questions$/,"question-list-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/questions\/create$/,"question-create-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/question\/(?<idx>[^\/]+)\/update$/,"question-update-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/lession-prepare$/,"lession-prepare-page");w(/^#\/lession-process$/,"lession-process-page");w(/^#\/cache\/list$/,"cache-list-page");w(/^#\/cache\/raw\/(?<path>.*)$/,"cache-raw-page");w(/^#\/search(\/(?<searchStr>[^\/]+))?$/,"search-page");customElements.define("navi-gation",$t);customElements.define("error-msg",It);customElements.define("confirm-dialog",Mt);customElements.define("question-show",Q);customElements.define("key-values",Xt);customElements.define("json-show",Zt);customElements.define("ui-field",Dt);customElements.define("preview-field",Rt);customElements.define("ui-icons",Tt);customElements.define("not-found-page",Ot);customElements.define("index-page",qt);customElements.define("admin-page",Ht);customElements.define("cache-list-page",Jt);customElements.define("cache-raw-page",Vt);customElements.define("search-page",Yt);customElements.define("book-list-page",Nt);customElements.define("book-create-page",jt);customElements.define("book-update-page",Pt);customElements.define("chapter-list-page",At);customElements.define("chapter-create-page",zt);customElements.define("chapter-update-page",Ut);customElements.define("question-list-page",Gt);customElements.define("question-create-page",Wt);customElements.define("question-update-page",Bt);customElements.define("lession-prepare-page",Ft);customElements.define("lession-process-page",Qt);je("#/","#/admin","not-found-page");qe();
