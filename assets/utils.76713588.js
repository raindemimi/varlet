import{ar as h,o as d,u as c,g as s,c as i}from"./vue-router.esm-bundler.42d3c0c2.js";function m(e){return Object.entries(e!=null?e:{}).reduce((t,[n,a])=>{const o=n.startsWith("--")?n:`--${h(n)}`;return t[o]=a,t},{})}const r=[];function u(e={}){r.forEach(n=>document.documentElement.style.removeProperty(n)),r.length=0;const t=m(e);Object.entries(t).forEach(([n,a])=>{document.documentElement.style.setProperty(n,a),r.push(n)})}function g(){const[,e,t]=window.location.hash.split("/");return{language:e,menuName:t}}function w(){const{href:e}=window.location,t=e.slice(e.indexOf("?"));return new URLSearchParams(t)}function v(e,t="mobile"){const n=()=>{var o;const a=t==="mobile"?(o=w().get("language"))!=null?o:"zh-CN":g().language;e(a)};l(n),n()}function f(e,t=!0){const n=a=>{const{data:o}=a;o.action==="theme-change"&&e(o.data,o.from)};window.addEventListener("message",n),t&&c(()=>{window.removeEventListener("message",n)}),e(p(),"default")}function l(e){d(()=>{window.addEventListener("hashchange",e),window.addEventListener("popstate",e)}),c(()=>{window.removeEventListener("hashchange",e),window.removeEventListener("popstate",e)})}function p(){var a;const e=s(i,"themeKey");if(!s(i,"darkTheme"))return"lightTheme";const n=window.localStorage.getItem(e);if(!n){const o=(a=window.matchMedia)!=null&&a.call(window,"(prefers-color-scheme: dark)").matches?"darkTheme":"lightTheme";return window.localStorage.setItem(e,o),o}return n}function E(e,t){f(n=>{u(n==="darkTheme"?e:null),t==null||t(n)})}export{v as a,E as b,p as c,g,f as w};
