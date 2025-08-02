var At=Object.defineProperty;var jt=(n,t,e)=>t in n?At(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var f=(n,t,e)=>jt(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();const Ut=`/* 1. Use a more-intuitive box-sizing model */
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
`,zt=`:root {
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
`,wt=new CSSStyleSheet;wt.replace(Ut);const vt=new CSSStyleSheet;vt.replace(zt);const k=[wt,vt],S=n=>{const t=new CustomEvent("error-msg",{detail:n});document.dispatchEvent(t)};class c extends Error{constructor(t){super(t),S(t)}}const ft=2,Bt=n=>{n.objectStoreNames.contains("cache")||n.createObjectStore("cache",{keyPath:"path"}),n.objectStoreNames.contains("search")||n.createObjectStore("search",{keyPath:"path"}),n.objectStoreNames.contains("admin")||n.createObjectStore("admin",{keyPath:"id"})},Gt=()=>new Promise((n,t)=>{const e=indexedDB.open("trainer",ft);e.onupgradeneeded=s=>{const o=e.result;s.oldVersion<ft&&Bt(o),console.log("db upgrade success!")},e.onerror=s=>{console.error(s.type),t()},e.onsuccess=()=>{const s=e.result;s.onerror=o=>{console.log(o.type)},console.log("db init success!"),n(s)}}),H=Gt(),K=async(n,t)=>(await H).transaction([n],t).objectStore(n),Y=(n,t)=>new Promise((e,s)=>{const o=n.get(t);o.onsuccess=()=>{console.log("Store:",n.name,"id:",t,"get:",o.result?o.result:"NOT-FOUND"),e(o.result)},o.onerror=a=>{S(`Store: ${n.name} id: ${t} storeGet error: ${a}`),s()}}),nt=(n,t)=>new Promise((e,s)=>{const o=n.put(t);o.onsuccess=()=>{console.log("Store:",n.name,"put:",t),e(t)},o.onerror=a=>{S(`Store: ${n.name} put: ${t} error: ${a}`),s()}}),st=(n,t)=>new Promise((e,s)=>{const o=n.delete(t);o.onsuccess=()=>{console.log("Store:",n.name,"delete:",t),e(o.result)},o.onerror=a=>{S(`Store: ${n.name} delete: ${t} error: ${a}`),s()}}),yt=n=>new Promise((t,e)=>{const s=n.getAll();s.onsuccess=()=>{console.log("Store:",n.name,"get all"),t(s.result)},s.onerror=o=>{S(`Store: ${n.name} get all: ${o}`),e()}}),Z="admin",b=async()=>{const n=await K(Z,"readonly"),t=await Y(n,"github");if(t===void 0)throw new Error("Unable to get github config.");return t},Qt=async()=>{const n=await K(Z,"readonly");return Y(n,"github")},Ft=async n=>{const t=await K(Z,"readwrite");return nt(t,n)},Vt=async n=>{const t=await K(Z,"readwrite");return st(t,n)},kt="github";let z=Qt();const Jt=async()=>{document.dispatchEvent(await z?new Event("login"):new Event("logout"))},Wt=async()=>await z!==void 0,_t=async(n,t,e)=>{z=Ft({id:kt,user:n,repo:t,token:e}),document.dispatchEvent(new Event("login"))},Kt=async()=>{await z&&(z=Vt(kt),document.dispatchEvent(new Event("logout")))},i=(n,t)=>{t||(t=document);const e=t.querySelector(n);if(!e)throw new Error(`Unable to find: ${n}`);return e},dt=(n,t)=>{t||(t=document);const e=[...t.querySelectorAll(n)];if(e.length===0)throw new Error(`Unable to find: ${n}`);return e},xt=[];let V,Ct,ot,Et;const C=n=>{if(!V||!V.groups){const t=`Route parameter: ${n} - No parameters found: ${window.location.hash}`;throw new Error(t)}return V.groups[n]},O=(...n)=>n.map(t=>C(t)),mt=async()=>{let n=window.location.hash||Ct;if(!await Wt()&&n!==ot){window.location.hash=ot;return}const t=xt.find(o=>o.regex.test(n));t&&(V=t.regex.exec(window.location.hash));const e=t?t.page:Et,s=document.createElement(e);i("main").replaceChildren(s)},w=(n,t)=>{xt.push({regex:n,page:t})},Yt=(n,t,e)=>{Ct=n,ot=t,Et=e,window.addEventListener("hashchange",mt),window.addEventListener("DOMContentLoaded",mt)},B=n=>n.content.cloneNode(!0),M=class M extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.getAttribute("data-icon")||"login",e=B(M.TMPL),s=B(M.ICONS[t]);e.appendChild(s);const o=this.attachShadow({mode:"open"});o.adoptedStyleSheets=k,o.appendChild(e)}}};f(M,"ICONS",{logout:i("#tmpl-icon-logout"),home:i("#tmpl-icon-home"),admin:i("#tmpl-icon-admin"),book:i("#tmpl-icon-book"),delete:i("#tmpl-icon-delete"),update:i("#tmpl-icon-update"),list:i("#tmpl-icon-list"),start:i("#tmpl-icon-start"),cache:i("#tmpl-icon-cache"),search:i("#tmpl-icon-search"),info:i("#tmpl-icon-info")}),f(M,"TMPL",i("#tmpl-icon"));let at=M;const h=n=>{var t=document.createElement("template");return t.innerHTML=n,t.content},Zt=n=>n.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;"),u=(n,...t)=>{const e=[n[0]];for(let s=1;s<n.length;s++){let o=t[s-1];typeof o!="string"&&(o=o.toString()),e.push(Zt(o)),e.push(n[s])}return e.join("")};class Xt extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.attachShadow({mode:"open"});t.adoptedStyleSheets=k,t.appendChild(this.renderComponent()),document.addEventListener("login",this.onLogin.bind(this)),document.addEventListener("logout",this.onLogout.bind(this))}}onLogin(){this.shadowRoot&&(i("#nav-items",this.shadowRoot).style.visibility="visible")}onLogout(){this.shadowRoot&&(i("#nav-items",this.shadowRoot).style.visibility="hidden")}doLogout(){Kt()}renderComponent(){const t=u`
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
    `,e=h(t);return i("#logout",e).onclick=this.doLogout,e}}class te extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.attachShadow({mode:"open"});t.adoptedStyleSheets=k,t.appendChild(this.renderComponent()),document.addEventListener("error-msg",this.onError.bind(this)),this.style.display="none"}}onError(t){if(this.shadowRoot){const e=t.detail;i("#error-msg",this.shadowRoot).textContent=e,this.style.display="block"}}onOk(){this.shadowRoot&&(i("#error-msg",this.shadowRoot).textContent="",this.style.display="none")}renderComponent(){const t=u`
      <div class="is-column is-gap is-border is-padding">
        <div class="is-error is-text-bold is-text-larg">Error</div>
        <p id="error-msg"></p>
        <div class="is-row is-gap">
          <button id="error-btn" class="btn" type="button">Ok</button>
        </div>
      </div>
    `,e=h(t);return i("#error-btn",e).onclick=this.onOk.bind(this),e}}const ee=new RegExp(/[<>]/,"g"),ne=[{pattern:new RegExp(/^- (.+)=#/,"g"),replace:'<span class="md-right">&bull;</span><span class="md-it">$1</span>'},{pattern:new RegExp(/^(.+)=#/,"g"),replace:'<span class="md-it">$1</span>'},{pattern:new RegExp(/#=(.+)$/,"g"),replace:'<span class="md-it">$1</span>'},{pattern:new RegExp(/^- /,"g"),replace:'<span class="md-right">&bull;</span>'}],se=[{pattern:new RegExp(/#([^#]+)#/,"g"),replace:'<span class="md-it">$1</span>'},{pattern:new RegExp(/\*\*(.)/,"g"),replace:'<span class="md-em">$1</span>'},{pattern:new RegExp(/\*([^*]+)\*/,"g"),replace:'<span class="md-em">$1</span>'}],bt=(n,t)=>(n.forEach(e=>{t=t.replaceAll(e.pattern,e.replace)}),t),J=n=>{const t=n.replace(ee,"").split(`
`);let e=[];for(const s of t)e.push(bt(ne,s.trim()));return bt(se,e.join(`
`))},W=class W extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=B(W.TMPL),e=this.getAttribute("data-id")||"no-id",s=i(`#${e}`),o=i("#preview",t);s.oninput=()=>{console.log("input"),o.innerHTML=J(s.value)};const a=this.attachShadow({mode:"open"});a.adoptedStyleSheets=k,a.appendChild(t)}}};f(W,"TMPL",i("#tmpl-preview-field"));let it=W;const St=()=>"#/books",oe=n=>`#/books/update/${n}`,N=n=>`#/book/${n}/chapters`,ae=n=>`#/book/${n}/chapters/create`,ie=(n,t)=>`#/book/${n}/chapter/${t}/update`,G=(n,t)=>`#/book/${n}/chapter/${t}/questions`,re=(n,t)=>`#/book/${n}/chapter/${t}/questions/create`,de=(n,t,e)=>`#/book/${n}/chapter/${t}/question/${e}/update`,ce=(n,t)=>`#/book/${n}/chapter/${t}/lession-prepare`,$t=()=>"#/lession-process",le=()=>"#",he=n=>n?`#/search/${n}`:"#/search",Pt=n=>`#/cache/raw/${n}`,_=class _ extends HTMLElement{constructor(){super(...arguments);f(this,"questionId");f(this,"question");f(this,"doDelete")}static instance(e,s,o){const a=document.createElement("question-show");return a.questionId=e,a.question=s,a.doDelete=o,a}connectedCallback(){if(!this.shadowRoot){const e=B(_.TMPL),s=this.attachShadow({mode:"open"});s.adoptedStyleSheets=k,s.appendChild(e),this.questionId&&this.question&&this.render(this.questionId,this.question)}}render(e,s,o){this.shadowRoot&&(i("#label",this.shadowRoot).textContent=`Question: ${e.idx}`,i("#quest",this.shadowRoot).innerHTML=J(s.quest),i("#answer",this.shadowRoot).innerHTML=J(s.answer),this.renderProgress(this.shadowRoot,o),this.renderDetails(this.shadowRoot,s),this.renderUpdateBtn(this.shadowRoot,e),this.renderDeleteBtn(this.shadowRoot,e),this.renderLocationBtn(this.shadowRoot,e))}show(e){if(this.shadowRoot){const s=e?"flex":"none",o=i("#answer",this.shadowRoot);o.parentElement&&(o.parentElement.style.display=s);const a=i("#details",this.shadowRoot);a.parentElement&&(a.parentElement.style.display=a.innerHTML?s:"none")}}renderProgress(e,s){const o=i("#progress",e);s?o.textContent=`Progress: ${s.progress} / 3`:o.style.display="none"}renderDetails(e,s){const o=i("#details",e);!s.details&&o.parentElement&&(o.parentElement.style.display="none"),o.innerHTML=s.details?J(s.details):""}renderUpdateBtn(e,s){i('[data-icon="update"]',e).onclick=()=>{window.location.hash=de(s.bookId,s.chapterId,s.idx)}}renderDeleteBtn(e,s){const o=i('[data-icon="delete"]',e);this.doDelete?o.onclick=()=>{this.doDelete&&this.doDelete(s)}:o.style.display="none"}renderLocationBtn(e,s){i('[data-icon="info"]',e).onclick=()=>{const o=i("#location-info",e);o.style.display==="none"?(o.style.display="block",i("#location-info",e).show(s.bookId,s.chapterId,s.idx.toString())):o.style.display="none"}}};f(_,"TMPL",i("#tmpl-question-show"));let Q=_;class ue extends HTMLElement{constructor(){super(...arguments);f(this,"fct")}connectedCallback(){if(!this.shadowRoot){const e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=k,e.appendChild(this.renderComponent()),this.style.display="none"}}onCancel(){this.shadowRoot&&(this.style.display="none")}async onOk(){if(this.shadowRoot&&this.fct){const e=i("#btn-ok",this.shadowRoot);e.disabled=!0,this.fct().finally(()=>{this.style.display="none",e.disabled=!1})}}activate(e,s,o){this.shadowRoot&&(i("#dialog-title",this.shadowRoot).textContent=e,i("#dialog-msg",this.shadowRoot).textContent=s,this.style.display="block",this.fct=o)}renderComponent(){const e=u`
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
    `,s=h(e);return i("#btn-cancel",s).onclick=this.onCancel.bind(this),i("#btn-ok",s).onclick=this.onOk.bind(this),s}}const U=class U extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.getAttribute("data-id")||"no-id",e=B(U.TMPL),s=i("label",e);s.htmlFor=t,s.textContent=this.getAttribute("data-label")||"no-label";const o=this.attachShadow({mode:"open"});o.adoptedStyleSheets=k,o.appendChild(e)}}attributeChangedCallback(t,e,s){this.shadowRoot&&t==="data-error"&&(i("#error",this.shadowRoot).textContent=s)}};f(U,"observedAttributes",["data-error"]),f(U,"TMPL",i("#tmpl-ui-field"));let rt=U;const pe=()=>"books",P=()=>"books/books.json",R=n=>`books/${n}/chapters.json`,D=(n,t)=>`books/${n}/questions.${t}.json`,L=n=>/^books\/[^\/]+\/questions.[^\/]+.json$/.test(n),Lt=n=>/^books\/[^\/]+\/chapters.json$/.test(n),ge=n=>n==="books/books.json",fe=n=>ge(n)||Lt(n)||L(n),me=n=>{const t=/^books\/([^\/]+)\/chapters.json$/,e=n.match(t);if(!e)throw new c(`No matches for ${n}`);return e[1]},be=n=>{const t=/^books\/([^\/]+)\/questions.([^\/]+).json$/,e=n.match(t);if(!e)throw new c(`No matches for ${n}`);return[e[1],e[2]]},E="cache",I="search",It=async()=>{const n=(await H).transaction([E],"readonly").objectStore(E);return await yt(n)},we=async()=>{const n=(await H).transaction([I],"readonly").objectStore(I);return await yt(n)},Rt=async n=>{const t=(await H).transaction([E],"readonly").objectStore(E);return await Y(t,n)},Dt=async n=>{const t=(await H).transaction([I],"readonly").objectStore(I);return await Y(t,n)},ct=async(n,t)=>{const e=t?[E,I]:[E],s=(await H).transaction(e,"readwrite");await st(s.objectStore(E),n),t&&await st(s.objectStore(I),n)},qt=async(n,t)=>{const e=t?[E,I]:[E],s=(await H).transaction(e,"readwrite");await nt(s.objectStore(E),{path:n.path,data:n.data,hash:n.hash}),t&&await nt(s.objectStore(I),t)};class ${constructor(){f(this,"status",2);f(this,"_message");f(this,"wrapper")}get isOk(){if(this.status===2)throw new Error("Status not set!");return this.status===0}get hasError(){if(this.status===2)throw new Error("Status not set!");return this.status===1}get message(){if(this.status!==1)throw new Error("Status is not ERROR!");if(!this._message)throw new Error("Status is ERROR but no message is set!");return this._message}get value(){if(this.status!==0)throw new Error("Status is not OK!");if(!this.wrapper)throw new Error("Value not set!");return this.wrapper.value}setOk(t){return this.status=0,this.wrapper={value:t},this}setError(t){if(t instanceof $){if(!t.hasError)throw new Error("Result has not an error!");this._message=t._message}else this._message=t;return this.status=1,this}}const X=async n=>{const t=await b(),e=R(n),s=await v(t,e);if(s.hasError)throw new c(s.message);return s.value.data},lt=async(n,t)=>{const e=await b(),s=R(n),o=await v(e,s);if(o.hasError)throw new c(o.message);const a=o.value.data.find(r=>r.id===t);if(!a)throw new c(`Not found: ${t}`);return a},ve=async(n,t)=>{const e=await b(),s=R(n),o=await v(e,s);if(o.hasError)throw new c(o.message);const a=o.value.data,r=a.findIndex(l=>l.id===t.id);if(r<0)throw new c(`Chapter not found: ${t.id}`);return a[r]=t,(await x(e,s,a,o.value.hash,`Updating chapter: ${t.id}`)).value},ye=async(n,t)=>{const e=await b(),s=R(n),o=await v(e,s);if(o.hasError)throw new c(o.message);let a=o.value.data;const r=a.length;if(a=a.filter(g=>g.id!==t),r===a.length)throw new c(`Not found: ${t}`);const d=await x(e,s,a,o.value.hash,`Deleting chapter ${t}`);if(d.hasError)throw new c(d.message);const l=await Ht(e,D(n,t),"Deleting file.");if(l.hasError)throw new c(l.message);return a},ke=async(n,t)=>{const e=await b(),s=R(n),o=await v(e,s);if(o.hasError)throw new c(o.message);const a=o.value.data;if(a.find(g=>g.id===t.id))throw new c(`Id already exists: ${t.id}`);a.push(t);const r=await x(e,s,a,o.value.hash,`Adding chapter: ${t.id}`);if(r.hasError)throw new c(r.message);const d=D(n,t.id),l=await x(e,d,[],void 0,"Creating chapters!");if(l.hasError)throw new c(l.message);return a},F=async(n,t)=>{const e=await b(),s=D(n,t),o=await v(e,s);if(o.hasError)throw new c(o.message);return o.value.data},ht=async(n,t,e)=>(await F(n,t))[e],xe=async(n,t,e,s)=>{const o=await b(),a=D(n,t),r=await v(o,a);if(r.hasError)throw new c(r.message);const d=r.value.data;d[e]=s;const l=await x(o,a,d,r.value.hash,"Updating question!");if(l.hasError)throw new c(l.message)},Ce=async(n,t,e)=>{const s=await b(),o=D(n,t),a=await v(s,o);if(a.hasError)throw new c(a.message);const r=a.value.data;r.push(e);const d=await x(s,o,r,a.value.hash,"Adding question!");if(d.hasError)throw new c(d.message)},Ee=async(n,t,e)=>{const s=await b(),o=D(n,t),a=await v(s,o);if(a.hasError)throw new c(a.message);const r=a.value.data.filter((l,g)=>e!==g),d=await x(s,o,r,a.value.hash,"Deleting question!");if(d.hasError)throw new c(d.message);return r},Tt=(n,t,e)=>{const s={quest:n,answer:t};return e&&(s.details=e),s},Se=new RegExp(/[.,;!?()'"/&+-]/,"g"),$e=new RegExp(/[\*#=~]/,"g"),Pe=new Set(["der","die","das","ein","sich","etwas","etw","hier","instr","nom","она","оно","они"]),Le=(n,t,e)=>{let s=n+" "+t;e&&(s=s+" "+e),s=s.replaceAll(Se," "),s=s.replaceAll($e,"");let o=s.split(/\s+/);const a=new Set;return o.forEach(r=>{r.length>2&&!Pe.has(r)&&a.add(r.toLowerCase())}),Array.from(a).sort().join(" ")},Ot=(n,t,e)=>{const s=t.map(a=>Le(a.quest,a.answer,a.details));return{path:n,strs:s,hash:e}},Ie=n=>n.length>=10,Re=async n=>{const t=[],e=await ut();for(const s of e){const o=await X(s.id);for(const a of o){const r=D(s.id,a.id),d=await Dt(r);if(!d){S(`No search index for: ${r}`);continue}for(let l=0;l<d.strs.length;l++){const g=d.strs[l];if(g.indexOf(n)>=0){const y={bookId:s.id,chapterId:a.id,idx:l},j=await ht(y.bookId,y.chapterId,y.idx);if(t.push({questId:y,quest:j,strIdx:g}),Ie(t))return t}}}}return t},De=async n=>{const t=await Dt(n);if(!t)throw new c(`Unable to get from cache: ${n}`);return JSON.stringify(t.strs,null,2)},qe=n=>window.btoa(unescape(encodeURIComponent(n))),Te=n=>decodeURIComponent(escape(window.atob(n))),tt=async n=>n.statusText?n.statusText:n.text(),et=(n,t,e)=>`https://api.github.com/repos/${n}/${t}/contents/${e}`,Oe=async(n,t,e,s,o)=>{const a=new $;try{const r={content:qe(t),message:s};e&&(r.sha=e);const d={method:"PUT",headers:{Accept:"application/vnd.github.v3+json",authorization:`token ${o}`},body:JSON.stringify(r)},l=await fetch(n,d);if(!l.ok){const y=await tt(l);return a.setError(`githubWriteContent - Url: ${n} Error: ${y}`)}const g=await l.json();return console.log(g),a.setOk(g.content.sha)}catch(r){return a.setError(`githubWriteContent - Url: ${n} Error: ${r}`)}},He=async(n,t)=>{const e=new $;try{const s={Accept:"application/vnd.github.v3+json"};t&&(s.authorization=`token ${t}`);const o=await fetch(n,s);if(!o.ok){const d=await tt(o);return e.setError(`githubReadContent - Url: ${n} Read error: ${d}`)}const a=await o.json(),r=Te(a.content);return e.setOk({content:r,hash:a.sha})}catch(s){return e.setError(`githubReadContent - Url: ${n} Error: ${s}`)}},Me=async(n,t,e,s)=>{const o=new $;try{const a={message:e,sha:t},r={method:"DELETE",headers:{Accept:"application/vnd.github.v3+json",authorization:`token ${s}`},body:JSON.stringify(a)},d=await fetch(n,r);if(!d.ok){const l=await tt(d);return o.setError(`githubDelete - Url: ${n} Error: ${l}`)}return console.log(`githubDelete - Url: ${n}`),o.setOk()}catch(a){return o.setError(`githubDelete - Url: ${n} Error: ${a}`)}},Ne=async(n,t)=>{const e=new $;try{const s={Accept:"application/vnd.github.v3+json"};t&&(s.authorization=`token ${t}`);const o=await fetch(n,s);if(!o.ok){const a=await tt(o);return e.setError(`githubListing - Url: ${n} Read error: ${a}`)}return e.setOk(await o.json())}catch(s){return e.setError(`githubListing - Url: ${n} Error: ${s}`)}},v=async(n,t)=>{const e=new $,s=await Rt(t);if(s)return e.setOk(s);const o=await He(et(n.user,n.repo,t),n.token);if(o.hasError)return e.setError(`jsonGet - ${o.message}`);const a={path:t,data:JSON.parse(o.value.content),hash:o.value.hash},r=L(t)?Ot(t,a.data,a.hash):void 0;return qt(a,r),e.setOk(a)},x=async(n,t,e,s,o)=>{const a=new $,r=await Oe(et(n.user,n.repo,t),JSON.stringify(e),s,o,n.token);if(r.hasError)return a.setError(r);const d={path:t,data:e,hash:r.value},l=L(t)?Ot(t,d.data,d.hash):void 0;return qt(d,l),a.setOk(e)},Ht=async(n,t,e)=>{const s=new $,o=await v(n,t);if(o.hasError)return s.setError(o.message);const a=await Me(et(n.user,n.repo,t),o.value.hash,e,n.token);return a.hasError?s.setError(a):(await ct(t,L(t)),s.setOk())},ut=async()=>{const n=await b(),t=await v(n,P());if(t.hasError)throw new c(t.message);return t.value.data},pt=async n=>{const t=await b(),e=await v(t,P());if(e.hasError)throw new c(e.message);const s=e.value.data.find(o=>o.id===n);if(!s)throw new c(`Book not found: ${n}`);return s},Ae=async n=>{const t=await b(),e=await v(t,P());if(e.hasError)throw new c(e.message);const s=e.value.data;if(s.find(d=>d.id===n.id))throw new c(`Id already exists: ${n.id}`);s.push(n);const o=await x(t,P(),s,e.value.hash,`Adding book: ${n.id}`);if(o.hasError)throw new c(o.message);const a=R(n.id),r=await x(t,a,[],void 0,"Creating chapters!");if(r.hasError)throw new c(r.message);return o.value},je=async n=>{const t=await b(),e=await v(t,P());if(e.hasError)throw new c(e.message);const s=e.value.data,o=s.findIndex(r=>r.id===n.id);if(o<0)throw new c(`Book not found: ${n.id}`);s[o]=n;const a=await x(t,P(),s,e.value.hash,`Updating book: ${n.id}`);if(a.hasError)throw new c(a.message);return a.value},Ue=async n=>{const t=await X(n);if(t.length>0)throw new c(`Book: ${n} has chapters: ${t.length}`);const e=await b(),s=await v(e,P());if(s.hasError)throw new c(s.message);let o=s.value.data;const a=o.length;if(o=o.filter(l=>l.id!==n),a===o.length)throw new c(`Book not found: ${n}`);const r=await x(e,P(),o,s.value.hash,`Deleting book ${n}`);if(r.hasError)throw new c(r.message);const d=await Ht(e,R(n),`Deleting file for: ${n}`);if(d.hasError)throw new c(d.message);return o},p=(n,t)=>{const e=n.get(t);if(typeof e=="string")return{id:t,value:e.trim()};throw new Error(`Unknown value: ${e} for key: ${t}`)},q=n=>{dt("ui-field",n).forEach(t=>{t.removeAttribute("data-error")})},gt=(n,t,e)=>{i(`ui-field[data-id="${t}"]`,n).setAttribute("data-error",e)},T=n=>dt("ui-field",n).find(t=>t.hasAttribute("data-error")),m=(n,t)=>t.value?!0:(gt(n,t.id,"Please enter a value!"),!1),Mt=(n,t)=>/^[-_a-zA-Z0-9.]+$/.test(t.value)?!0:(gt(n,t.id,"Please enter an id value!"),!1),ze=(n,t,e)=>t.value.length<e?(gt(n,t.id,`Input has to be at least ${e} characters!`),!1):!0;class Be extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const t=C("bookId");i("#location-info").show(t);const e=await pt(t);i("#id").value=e.id,i("#title").value=e.title,i("#desc").value=e.description}async handleSubmit(t){t.preventDefault();const e=t.target,s=new FormData(e),o=p(s,"id"),a=p(s,"title"),r=p(s,"desc");q(e),m(e,a),m(e,r);const d=i("button",e);T(e)||(d.disabled=!0,je({id:o.value,title:a.value,description:r.value}).then(()=>{window.location.hash=St()}).finally(()=>{d.disabled=!1}))}renderPage(){const t=u`
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
    `,e=h(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}class Ge extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage())}renderPage(){const t=u`
      <div class="is-column is-gap">
        <div class="page-title">Welcome to Vanilla Trainer</div>
        <lession-continue></lession-continue>
      </div>
    `;return h(t)}}class Qe extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage())}renderPage(){const t=u`
      <div class="page-title">Page not found</div>
      <p class="is-error">Sorry, the page was not found!</p>
    `;return h(t)}}class Fe extends HTMLElement{connectedCallback(){this.hasChildNodes()||(this.appendChild(this.renderPage()),document.addEventListener("logout",this.onLogout.bind(this))),this.getAdmin(),this.setEdit(!1)}handleSubmit(t){t.preventDefault();const e=t.target,s=new FormData(e),o=p(s,"user"),a=p(s,"repo"),r=p(s,"token");q(e),m(e,o),m(e,a),m(e,r);const d=i("button",e);T(e)||(d.disabled=!0,_t(o.value,a.value,r.value).finally(()=>{this.setEdit(!1),d.disabled=!1}))}async getAdmin(){const t=await b();i("#user").value=t.user,i("#repo").value=t.repo,i("#token").value=t.token}onEdit(){this.setEdit(!0)}setEdit(t){i("#user").disabled=!t,i("#repo").disabled=!t,i("#token").disabled=!t,i("#admin-edit").disabled=t,i("#admin-save").disabled=!t}onLogout(){this.getAdmin()}renderPage(){const t=u`
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
    `,e=h(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),i("#admin-edit",e).onclick=this.onEdit.bind(this),e}}class Ve extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const t=i("#confirm-dialog"),e=(await ut()).map(s=>this.renderBook(s,t));i("tbody").replaceChildren(...e)}onDelete(t,e){return()=>{t.activate("Delete Book",`Do you realy want to delete the book: ${e}?`,this.getDeleteFct(e))}}getDeleteFct(t){return async()=>{await Ue(t),this.render()}}renderPage(){const t=u`
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
    `;return h(t)}renderBook(t,e){const s=u`
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
    `,o=h(s);return i('[data-icon="delete"]',o).onclick=this.onDelete(e,t.id).bind(this),i('[data-icon="update"]',o).onclick=()=>{window.location.hash=oe(t.id)},i('[data-icon="list"]',o).onclick=()=>{window.location.hash=N(t.id)},o}}class Je extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage())}async handleSubmit(t){t.preventDefault();const e=t.target,s=new FormData(e),o=p(s,"id"),a=p(s,"title"),r=p(s,"desc");q(e),m(e,o)&&Mt(e,o),m(e,a),m(e,r);const d=i("button",e);T(e)||(console.log("id",o,"title",a,"desc",r),d.disabled=!0,Ae({id:o.value,title:a.value,description:r.value}).then(()=>{window.location.hash=St()}).finally(()=>{d.disabled=!1}))}renderPage(){const t=u`
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
    `,e=h(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}class We extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const t=C("bookId"),e=i("#confirm-dialog");i("#location-info").show(t),this.addLinks(t);const s=[];(await X(t)).forEach(a=>{s.push(this.renderEntry(t,a,e))}),i("tbody").replaceChildren(...s)}addLinks(t){i("#chapter-create-link").href=ae(t),i("#chapter-cache-link").href=Pt(R(t))}onDelete(t,e,s){return()=>{t.activate("Delete Chapter",`Do you realy want to delete the chapter: ${s}?`,this.getDeleteFct(e,s))}}getDeleteFct(t,e){return async()=>{ye(t,e).then(()=>{this.render()})}}renderPage(){const t=u`
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
    `;return h(t)}renderEntry(t,e,s){const o=u`
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
    `,a=h(o);return i('[data-icon="delete"]',a).onclick=this.onDelete(s,t,e.id).bind(this),i('[data-icon="update"]',a).onclick=()=>{window.location.hash=ie(t,e.id)},i('[data-icon="list"]',a).onclick=()=>{window.location.hash=G(t,e.id)},i('[data-icon="start"]',a).onclick=()=>{window.location.hash=ce(t,e.id)},a}}class _e extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}render(){const t=C("bookId");i("#location-info").show(t);const e=N(t);i("#chapter-list-link",this).href=e}async handleSubmit(t){t.preventDefault();const e=C("bookId"),s=t.target,o=new FormData(s),a=p(o,"id"),r=p(o,"title");if(q(s),m(s,a)&&Mt(s,a),m(s,r),!T(s)){const d=i("#btn-submit",s);d.disabled=!0,ke(e,{id:a.value,title:r.value}).then(()=>{window.location.hash=N(e)}).finally(()=>{d.disabled=!1})}}renderPage(){const t=u`
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
    `,e=h(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}class Ke extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const t=C("bookId"),e=C("chapterId");i("#location-info").show(t,e);const s=N(t);i("#chapter-list-link",this).href=s;const o=await lt(t,e);i("#id").value=o.id,i("#title").value=o.title}async handleSubmit(t){t.preventDefault();const e=C("bookId"),s=t.target,o=new FormData(s),a=p(o,"id"),r=p(o,"title");if(q(s),m(s,r),!T(s)){const d=i("#btn-submit",s);d.disabled=!0,ve(e,{id:a.value,title:r.value}).then(()=>{window.location.hash=N(e)}).finally(()=>{d.disabled=!1})}}renderPage(){const t=u`
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
    `,e=h(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}class Ye extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const[t,e]=O("bookId","chapterId");i("#location-info").show(t,e),this.addLinks(t,e);const s=await F(t,e),o=[];s.forEach((a,r)=>{o.push(Q.instance({bookId:t,chapterId:e,idx:r},a,this.doDelete.bind(this)))}),i('[data-id="questions"]').replaceChildren(...o)}addLinks(t,e){i("#question-create-link").href=re(t,e),i("#question-cache-link").href=Pt(D(t,e)),i("#chapter-list-link").href=N(t)}doDelete(t){i("#confirm-dialog").activate("Delete Question",`Do you realy want to delete the question: ${t.idx}?`,this.getDeleteFct(t))}getDeleteFct(t){return async()=>{Ee(t.bookId,t.chapterId,t.idx).then(()=>{this.render()})}}renderPage(){const t=u`
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
    `;return h(t)}}class Ze extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}render(){const[t,e]=O("bookId","chapterId");i("#location-info").show(t,e),i("#question-list-link",this).href=G(t,e)}async handleSubmit(t){t.preventDefault();const[e,s]=O("bookId","chapterId"),o=t.target,a=new FormData(o),r=p(a,"quest"),d=p(a,"answer"),l=p(a,"details");if(q(o),m(o,r),m(o,d),!T(o)){const g=i("#btn-submit",o);g.disabled=!0;const y=Tt(r.value,d.value,l.value);Ce(e,s,y).then(()=>{window.location.hash=G(e,s)}).finally(()=>{g.disabled=!1})}}renderPage(){const t=u`
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
    `,e=h(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}class Xe extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const[t,e,s]=O("bookId","chapterId","idx");i("#location-info").show(t,e,s),i("#question-list-link",this).href=G(t,e);const o=await ht(t,e,parseInt(s));this.setValue("#quest",o.quest),this.setValue("#answer",o.answer),this.setValue("#details",o.details||"")}setValue(t,e){const s=i(t);s.value=e,s.dispatchEvent(new Event("input"))}async handleSubmit(t){t.preventDefault();const[e,s,o]=O("bookId","chapterId","idx"),a=t.target,r=new FormData(a),d=p(r,"quest"),l=p(r,"answer"),g=p(r,"details");if(q(a),m(a,d),m(a,l),!T(a)){const y=i("#btn-submit",a);y.disabled=!0;const j=Tt(d.value,l.value,g.value);xe(e,s,parseInt(o),j).then(()=>{window.location.hash=G(e,s)}).finally(()=>{y.disabled=!1})}}renderPage(){const t=u`
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
    `,e=h(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}const tn=(n,t)=>Math.floor(Math.random()*(t-n+1)+n),en=n=>{for(let t=0;t<n.length;t++){const e=tn(0,n.length-1);if(t===e)continue;const s=n[t];n[t]=n[e],n[e]=s}},A="lession",nn=(n,t,e)=>{if(n.length==0)return;const s=n.map(a=>({questionId:a,progress:t}));en(s);const o={learning:s,learned:[],reverse:e};localStorage.setItem(A,JSON.stringify(o))},sn=()=>localStorage.getItem(A)!=null,on=()=>{const n=localStorage.getItem(A);if(n)return JSON.parse(n)},an=n=>n.learning.length>0?(localStorage.setItem(A,JSON.stringify(n)),!0):(localStorage.removeItem(A),!1),rn=()=>{localStorage.removeItem(A)},dn=n=>{const t=[0,0,0,n.learned.length];return n.learning.forEach(e=>{if(e.progress>2)throw Error(`Invalid progress ${e.progress}`);t[e.progress]++}),t},cn=n=>{let t=0;return t+=n[0]*3,t+=n[1]*2,t+=n[2]*1,t};class ln extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const[t,e]=O("bookId","chapterId"),s=await F(t,e);s.length===0&&(S("The chapter has no questions!"),i("#btn-start").disabled=!0),this.addLessionInfo(t,e,s)}async handleSubmit(t){t.preventDefault();const e=t.target,s=new FormData(e),o=p(s,"correct"),a=p(s,"reverse"),[r,d]=O("bookId","chapterId"),g=(await F(r,d)).map((y,j)=>({bookId:r,chapterId:d,idx:j}));nn(g,parseInt(o.value),a.value==="true"),window.location.hash=$t()}async addLessionInfo(t,e,s){const o=await pt(t),a=await lt(t,e);i("#lession-info").update([{key:"Book",value:o.title},{key:"Chapter",value:a.title},{key:"Length",value:s.length.toString()}])}renderPage(){const t=u`
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
    `,e=h(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}class hn extends HTMLElement{constructor(){super(...arguments);f(this,"lession");f(this,"questionProgress");f(this,"onCorrect",()=>{this.update(this.questionProgress.progress+1)})}connectedCallback(){this.hasChildNodes()||(this.appendChild(this.renderPage()),this.load())}load(){if(this.lession=on(),!this.lession){this.setStateRunning(!1),S("No lession found!");return}this.setStateRunning(!0),this.next()}next(){if(this.lession){this.addProgressInfo(dn(this.lession));const e=this.lession.learning.shift();if(e)this.questionProgress=e,this.setQuestion(this.questionProgress.questionId,this.questionProgress),this.setStateQuestion(!0);else{this.setStateRunning(!1);return}this.questionProgress&&i("location-info").show(this.questionProgress.questionId.bookId,this.questionProgress.questionId.chapterId,this.questionProgress.questionId.idx.toString())}}async update(e){this.questionProgress&&this.lession&&(this.questionProgress.progress=e,this.questionProgress.progress<3?this.lession.learning.push(this.questionProgress):this.lession.learned.push(this.questionProgress),an(this.lession),this.next())}onShow(){this.setStateQuestion(!1)}onWrong(){this.update(0)}onLearned(){this.update(3)}onSkip(){this.update(this.questionProgress.progress)}onStop(){window.location.hash=le()}setStateQuestion(e){this.doShow('[data-show="ask"]',e),this.doShow('[data-show="show"]',!e),i("#question-show").show(!e)}setStateRunning(e){this.doShow('[data-show="running"]',e),e||(this.doShow('[data-show="ask"]',!1),this.doShow('[data-show="show"]',!1))}doShow(e,s){dt(e).forEach(o=>{const a=o.dataset.display||"block";o.style.display=s?a:"none"})}async setQuestion(e,s){const o=await ht(e.bookId,e.chapterId,e.idx);i("#question-show").render(e,o,s)}addProgressInfo(e){i("#progress-info").update([{key:"Unlearned",value:e[0].toString()},{key:"One correct",value:e[1].toString()},{key:"Two correct",value:e[2].toString()},{key:"Learned",value:e[3].toString()},{key:"Total",value:cn(e).toString()}])}renderPage(){const e=u`
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
    `,s=h(e);return[{id:"#btn-show",fct:this.onShow},{id:"#btn-correct",fct:this.onCorrect},{id:"#btn-wrong",fct:this.onWrong},{id:"#btn-skip",fct:this.onSkip},{id:"#btn-learned",fct:this.onLearned},{id:"#btn-stop",fct:this.onStop}].forEach(o=>{i(o.id,s).onclick=o.fct.bind(this)}),s}}const un=async()=>{const n=[],t=await ut();for(const e of t){const s=await X(e.id);for(const o of s)n.push(F(e.id,o.id))}await Promise.all(n)},pn=async n=>{const t=await Rt(n);if(!t)throw new c(`Unable to get from cache: ${n}`);return JSON.stringify(t.data,null,2)},Nt=async(n,t,e)=>{const s=await Ne(et(t.user,t.repo,e),t.token);if(s.hasError){n.error=`cacheListing - ${s.message}`;return}n.listing.push(...s.value);const o=[];for(const a of s.value)a.type==="dir"&&o.push(Nt(n,t,a.path));await Promise.all(o)},gn=async()=>{const n=await b(),t={error:void 0,listing:[]};if(await Nt(t,n,pe()),t.error){S(t.error);return}const e=await It();for(const s of e){const o=t.listing.find(a=>a.path===s.path);(!o||s.hash!==o.sha)&&await ct(s.path,!0)}};class fn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}onCacheLoad(){i("#confirm-dialog").activate("Load Cache","Do you realy want to load all files?",async()=>{await un(),this.render()})}onCacheCheck(){i("#confirm-dialog").activate("Check Cache","Do you realy want to check all files?",async()=>{await gn(),this.render()})}getHash(t){return t.substring(0,6)}getSearchHash(t,e){return L(t)?e?this.getHash(e.hash):"missing":""}async render(){const t=i("#confirm-dialog"),e=await It(),s=await we(),o=e.map(a=>this.renderEntry(a,s,t));i("tbody").replaceChildren(...o)}onDelete(t,e){return()=>{t.activate("Delete Cache Entry",`Do you realy want to delete the cache entry: ${e}?`,async()=>{await ct(e,L(e)),this.render()})}}renderPage(){const t=u`
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
    `,e=h(t);return i("#cache-load",e).onclick=this.onCacheLoad.bind(this),i("#cache-check",e).onclick=this.onCacheCheck.bind(this),e}renderEntry(t,e,s){const o=this.getHash(t.hash),a=e.find(g=>g.path===t.path),r=this.getSearchHash(t.path,a),d=u`
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
    `,l=h(d);return i('[data-icon="delete"]',l).onclick=this.onDelete(s,t.path).bind(this),l}}class mn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const t=C("path");if(!fe(t)){S(`Path is not valid ${t}`);return}this.doCache(t),this.doSearch(t)}async doCache(t){const e=i("#location-info");if(L(t)){const[s,o]=be(t);e.show(s,o)}else if(Lt(t)){const s=me(t);e.show(s)}else e.hide();i("#cache").show("Cache",t,await pn(t))}async doSearch(t){const e=i("#search");if(L(t)){e.show("Search",t,await De(t));return}e.hide()}renderPage(){const t=u`
      <div class="is-column is-gap">
        <div class="page-title">Cache Raw</div>
        <location-info id="location-info"></location-info>

        <json-show id="cache"></json-show>
        <json-show id="search"></json-show>

        <div class="is-row is-gap">
          <button class="btn" id="btn-cancel">Back</button>
        </div>
      </div>
    `,e=h(t);return i("#btn-cancel",e).onclick=()=>{history.back()},e}}class bn extends HTMLElement{connectedCallback(){this.hasChildNodes()||this.appendChild(this.renderPage()),this.render()}async render(){const t=C("searchStr");if(!t)return;const e=decodeURI(t);if(e.length<3)return;i("#search").value=e;const s=[],o=await Re(e.toLowerCase());i('[data-id="num"]').innerText=o.length===0?"Nothing found!":`Numebr of results: ${o.length}`,o.forEach(a=>{s.push(Q.instance(a.questId,a.quest))}),i('[data-id="questions"]').replaceChildren(...s)}async handleSubmit(t){t.preventDefault();const e=t.target,s=new FormData(e),o=p(s,"search");q(e),m(e,o)&&ze(e,o,3),T(e)||(window.location.hash=he(encodeURI(o.value)))}renderPage(){const t=u`
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
    `,e=h(t);return i("form",e).onsubmit=this.handleSubmit.bind(this),e}}class wn extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.attachShadow({mode:"open"});t.adoptedStyleSheets=k,t.appendChild(this.renderComponent())}}show(t,e,s){this.shadowRoot&&(i("#wrapper",this.shadowRoot).style.display="flex",i("#title",this.shadowRoot).innerText=t,i("#path",this.shadowRoot).innerText=e,i("#content",this.shadowRoot).innerText=s)}hide(){this.style.display="none"}renderComponent(){const t=u`
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
    `;return h(t)}}class vn extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.attachShadow({mode:"open"});t.adoptedStyleSheets=k,t.appendChild(this.renderComponent())}}update(t){if(this.shadowRoot){const e=t.map(s=>this.renderData(s));i("#wrapper",this.shadowRoot).replaceChildren(...e)}}renderComponent(){const t=u`
      <style>
        .wrapper {
          display: grid;
          grid-gap: var(--gap-small);
          grid-template-columns: 1fr 1fr 1fr;
        }
      </style>
      <div id="wrapper" class="wrapper"></div>
    `;return h(t)}renderData(t){const e=u`
      <div class="is-row is-gap-small">
        <div class="is-key">${t.key}</div>
        <div class="is-value">${t.value}</div>
      </div>
    `;return h(e)}}class yn extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.attachShadow({mode:"open"});t.adoptedStyleSheets=k,t.appendChild(this.renderComponent())}}async show(t,e,s){if(this.shadowRoot){const o=[],a=await pt(t);if(o.push({key:"Book",value:a.title}),e){const r=await lt(t,e);o.push({key:"Chapter",value:r.title})}s&&o.push({key:"Question",value:s}),i("#info",this.shadowRoot).update(o)}}hide(){this.style.display="none"}renderComponent(){const t=u` <key-values id="info"></key-values> `;return h(t)}}class kn extends HTMLElement{connectedCallback(){if(!this.shadowRoot){const t=this.attachShadow({mode:"open"});t.adoptedStyleSheets=k,t.appendChild(this.renderComponent())}this.render()}render(){sn()?this.style.display="block":this.style.display="none"}onContinue(){window.location.hash=$t()}onEnd(){rn(),this.style.display="none"}renderComponent(){const t=u`
      <div class="is-row is-gap">
        <button class="btn" id="btn-continue">Continue</button>
        <button class="btn" id="btn-end">End</button>
      </div>
    `,e=h(t);return i("#btn-continue",e).onclick=this.onContinue.bind(this),i("#btn-end",e).onclick=this.onEnd.bind(this),e}}document.adoptedStyleSheets=k;w(/^#\/$/,"index-page");w(/^#\/admin$/,"admin-page");w(/^#\/books$/,"book-list-page");w(/^#\/books\/create$/,"book-create-page");w(/^#\/books\/update\/(?<bookId>[^\/]+)$/,"book-update-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapters$/,"chapter-list-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapters\/create$/,"chapter-create-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/update$/,"chapter-update-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/questions$/,"question-list-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/questions\/create$/,"question-create-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/question\/(?<idx>[^\/]+)\/update$/,"question-update-page");w(/^#\/book\/(?<bookId>[^\/]+)\/chapter\/(?<chapterId>[^\/]+)\/lession-prepare$/,"lession-prepare-page");w(/^#\/lession-process$/,"lession-process-page");w(/^#\/cache\/list$/,"cache-list-page");w(/^#\/cache\/raw\/(?<path>.*)$/,"cache-raw-page");w(/^#\/search(\/(?<searchStr>[^\/]+))?$/,"search-page");customElements.define("navi-gation",Xt);customElements.define("error-msg",te);customElements.define("confirm-dialog",ue);customElements.define("question-show",Q);customElements.define("key-values",vn);customElements.define("location-info",yn);customElements.define("json-show",wn);customElements.define("lession-continue",kn);customElements.define("ui-field",rt);customElements.define("preview-field",it);customElements.define("ui-icons",at);customElements.define("not-found-page",Qe);customElements.define("index-page",Ge);customElements.define("admin-page",Fe);customElements.define("cache-list-page",fn);customElements.define("cache-raw-page",mn);customElements.define("search-page",bn);customElements.define("book-list-page",Ve);customElements.define("book-create-page",Je);customElements.define("book-update-page",Be);customElements.define("chapter-list-page",We);customElements.define("chapter-create-page",_e);customElements.define("chapter-update-page",Ke);customElements.define("question-list-page",Ye);customElements.define("question-create-page",Ze);customElements.define("question-update-page",Xe);customElements.define("lession-prepare-page",ln);customElements.define("lession-process-page",hn);Yt("#/","#/admin","not-found-page");Jt();
