(()=>{var e={327:(e,t,n)=>{const{makeUrlAbsolute:r,parseUrl:o}=n(898);function i(e){return e.replace(/www[a-zA-Z0-9]*\./,"").replace(".co.",".").split(".").slice(0,-1).join(" ")}function l(e){return(t,n)=>{let r,o=0;for(let n=0;n<e.rules.length;n++){const[i,l]=e.rules[n],a=Array.from(t.querySelectorAll(i));if(a.length)for(const t of a){let i=e.rules.length-n;if(e.scorers)for(const n of e.scorers){const e=n(t,i);e&&(i=e)}i>o&&(o=i,r=l(t))}}if(!r&&e.defaultValue&&(r=e.defaultValue(n)),r){if(e.processors)for(const t of e.processors)r=t(r,n);return r.trim&&(r=r.trim()),r}}}const a={description:{rules:[['meta[property="og:description"]',e=>e.getAttribute("content")],['meta[name="description" i]',e=>e.getAttribute("content")]]},icon:{rules:[['link[rel="apple-touch-icon"]',e=>e.getAttribute("href")],['link[rel="apple-touch-icon-precomposed"]',e=>e.getAttribute("href")],['link[rel="icon" i]',e=>e.getAttribute("href")],['link[rel="fluid-icon"]',e=>e.getAttribute("href")],['link[rel="shortcut icon"]',e=>e.getAttribute("href")],['link[rel="Shortcut Icon"]',e=>e.getAttribute("href")],['link[rel="mask-icon"]',e=>e.getAttribute("href")]],scorers:[(e,t)=>{const n=e.getAttribute("sizes");if(n){const e=n.match(/\d+/g);if(e)return e[0]}}],defaultValue:e=>"favicon.ico",processors:[(e,t)=>r(t.url,e)]},image:{rules:[['meta[property="og:image:secure_url"]',e=>e.getAttribute("content")],['meta[property="og:image:url"]',e=>e.getAttribute("content")],['meta[property="og:image"]',e=>e.getAttribute("content")],['meta[name="twitter:image"]',e=>e.getAttribute("content")],['meta[property="twitter:image"]',e=>e.getAttribute("content")],['meta[name="thumbnail"]',e=>e.getAttribute("content")]],processors:[(e,t)=>r(t.url,e)]},keywords:{rules:[['meta[name="keywords" i]',e=>e.getAttribute("content")]],processors:[(e,t)=>e.split(",").map((e=>e.trim()))]},title:{rules:[['meta[property="og:title"]',e=>e.getAttribute("content")],['meta[name="twitter:title"]',e=>e.getAttribute("content")],['meta[property="twitter:title"]',e=>e.getAttribute("content")],['meta[name="hdl"]',e=>e.getAttribute("content")],["title",e=>e.text]]},language:{rules:[["html[lang]",e=>e.getAttribute("lang")],['meta[name="language" i]',e=>e.getAttribute("content")]],processors:[(e,t)=>e.split("-")[0]]},type:{rules:[['meta[property="og:type"]',e=>e.getAttribute("content")]]},url:{rules:[["a.amp-canurl",e=>e.getAttribute("href")],['link[rel="canonical"]',e=>e.getAttribute("href")],['meta[property="og:url"]',e=>e.getAttribute("content")]],defaultValue:e=>e.url,processors:[(e,t)=>r(t.url,e)]},provider:{rules:[['meta[property="og:site_name"]',e=>e.getAttribute("content")]],defaultValue:e=>i(o(e.url))}};e.exports={buildRuleSet:l,getMetadata:function(e,t,n){const r={},o={url:t},i=n||a;return Object.keys(i).map((t=>{const n=l(i[t]);r[t]=n(e,o)})),r},getProvider:i,metadataRuleSets:a}},898:(e,t,n)=>{if(void 0!==n.g.URL)e.exports={makeUrlAbsolute:(e,t)=>new URL(t,e).href,parseUrl:e=>new URL(e).host};else{const t=n(327);e.exports={makeUrlAbsolute:(e,n)=>null===t.parse(n).host?t.resolve(e,n):n,parseUrl:e=>t.parse(e).hostname}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{"use strict";Object.defineProperty(window.__firefox__,"searchQueryForField",{enumerable:!1,configurable:!1,writable:!1,value:function(){var e=document.activeElement;if("input"!==e.tagName.toLowerCase())return null;var t=e.form;if(!t||"get"!=t.method.toLowerCase())return null;var n=t.getElementsByTagName("input"),r=(n=Array.prototype.slice.call(n,0)).map((function(t){return t.name==e.name?[t.name,"{searchTerms}"].join("="):[t.name,t.value].map(encodeURIComponent).join("=")})),o=t.getElementsByTagName("select"),i=(o=Array.prototype.slice.call(o,0)).map((function(e){return[e.name,e.options[e.selectedIndex].value].map(encodeURIComponent).join("=")}));return r=r.concat(i),t.action?[t.action,r.join("&")].join("?"):null}})})(),(()=>{"use strict";const e=document.getElementById(APP_ID_TOKEN+"__firefox__visitOnce");null!=e&&e.addEventListener("click",(function(e){e.preventDefault(),webkit.messageHandlers.errorPageHelperMessageManager.postMessage({type:"certVisitOnce"})}))})(),(()=>{"use strict";const e="__firefox__find-highlight",t="__firefox__find-highlight-active",n=`.${e} {\n  color: #000;\n  background-color: #ffde49;\n  border-radius: 1px;\n  box-shadow: 0 0 0 2px #ffde49;\n  transition: all 100ms ease 100ms;\n}\n.${e}.${t} {\n  background-color: #f19750;\n  box-shadow: 0 0 0 4px #f19750,0 1px 3px 3px rgba(0,0,0,.75);\n}`;var r="",o=null,i=null,l=-1,a=document.createElement("span");a.className=e;var c=document.createElement("style");function u(){i&&(l=(l+i.length+1)%i.length,f())}function s(){if(!i)return;let e,t=i;for(let n=0,r=t.length;n<r;n++)e=t[n],d(e);i=null,l=-1}function f(){c.parentNode||document.body.appendChild(c);let n=document.querySelector("."+t);if(n&&(n.className=e),!i)return;let r=i[l];r?(r.className=e+" "+t,function(e,t){let n,r=e.getBoundingClientRect(),o=m(r.left+window.scrollX-window.innerWidth/2,0,document.body.scrollWidth),i=m(40+r.top+window.scrollY-window.innerHeight/2,0,document.body.scrollHeight),l=window.scrollX,a=window.scrollY,c=o-l,u=i-a;requestAnimationFrame((function e(t){n||(n=t);let r=t-n,o=Math.min(r/100,1),i=l+c*o,s=a+u*o;window.scrollTo(i,s),r<100&&requestAnimationFrame(e)}))}(r),webkit.messageHandlers.findInPageHandler.postMessage({currentResult:l+1})):webkit.messageHandlers.findInPageHandler.postMessage({currentResult:0})}function d(e){let t=e.parentNode;if(t){for(;e.firstChild;)t.insertBefore(e.firstChild,e);e.remove(),t.normalize()}}function m(e,t,n){return Math.max(t,Math.min(e,n))}function p(){this.cancelled=!1,this.completed=!1}c.innerHTML=n,p.prototype.constructor=p,p.prototype.cancel=function(){this.cancelled=!0,"function"==typeof this.oncancelled&&this.oncancelled()},p.prototype.complete=function(){this.completed=!0,"function"==typeof this.oncompleted&&(this.cancelled||this.oncompleted())},Object.defineProperty(window.__firefox__,"find",{enumerable:!1,configurable:!1,writable:!1,value:function(e){let t=e.trim(),n=t?e.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1"):t;if(n===r)return;if(o&&o.cancel(),s(),r=n,!n)return void webkit.messageHandlers.findInPageHandler.postMessage({currentResult:0,totalResults:0});let c=new RegExp("("+n+")","gi");o=function(e,t){let n=[],r=[],o=!1,i=function(e){let t=new p,n=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null,!1),r=setTimeout((function(){(function(e,t,r){return new Promise((function(e,r){setTimeout((function r(){let o;for(let r=0;r<100;r++)if(o=n.nextNode(),!o||!1===t(o))return void e();setTimeout(r,0)}),0)}))})(0,(function(n){return!t.cancelled&&(e(n),!0)})).then((function(){t.complete()}))}),50);return t.oncancelled=function(){clearTimeout(r)},t}((function(l){if(!function(e){let t=e.parentElement;return!!t&&!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)}(l)||"IFRAME"===l.parentElement.nodeName)return;let c,u=l.textContent,s=0,f=document.createDocumentFragment(),d=!1;for(;c=e.exec(u);){let t=c[0];if(c.index>0){let e=u.substring(s,c.index);f.appendChild(document.createTextNode(e))}let n=a.cloneNode(!1);if(n.textContent=t,f.appendChild(n),r.push(n),s=e.lastIndex,d=!0,r.length>500){o=!0;break}}if(d){if(s<u.length){let e=u.substring(s,u.length);f.appendChild(document.createTextNode(e))}n.push({originalNode:l,replacementFragment:f})}o&&(i.cancel(),t(n,r))}));return i.oncompleted=function(){t(n,r)},i}(c,(function(e,t){let n;for(let t=0,r=e.length;t<r;t++)n=e[t],n.originalNode.replaceWith(n.replacementFragment);o=null,i=t,l=-1;let r=t.length;webkit.messageHandlers.findInPageHandler.postMessage({totalResults:r}),u()}))}}),Object.defineProperty(window.__firefox__,"findNext",{enumerable:!1,configurable:!1,writable:!1,value:u}),Object.defineProperty(window.__firefox__,"findPrevious",{enumerable:!1,configurable:!1,writable:!1,value:function(){i&&(l=(l+i.length-1)%i.length,f())}}),Object.defineProperty(window.__firefox__,"findDone",{enumerable:!1,configurable:!1,writable:!1,value:function(){c.remove(),s(),r=""}})})(),(()=>{"use strict";const e=n(327);Object.defineProperty(window.__firefox__,"metadata",{enumerable:!1,configurable:!1,writable:!1,value:Object.freeze(new function(){this.getMetadata=function(){let t=e.getMetadata(document,document.URL);if(t.url=document.URL,!location.pathname.startsWith("/amp/"))return t;const n=document.querySelector("link[rel='canonical']");if(!n?.href)return t;try{new URL(n.href,location).protocol.match(/^https?:$/)&&(t.url=n.href)}catch(e){}return t}})})})()})();