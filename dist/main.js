(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),c=n(667),d=n.n(c),s=new URL(n(40),n.b),l=i()(o()),u=d()(s);l.push([e.id,'body {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n}\n\n.header > h1 {\n    margin: 0;\n    padding: 0;\n    font-size: 35px;\n    color: black;\n}\n\n\n.header {\n    background-color: #F5F6FA;\n    height: 130px;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n}\n\n.body {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n}\n\n.sidebar {\n    grid-column: 1 / 2;\n    background-color: #EFEFEF;\n    min-height: 100vh;\n}\n\n.nav {\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n    align-items: center;\n    gap: 20px;\n    font-size: 20px;\n    padding: 20px;\n}\n\n.projects {\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n    align-items: center;\n    gap: 10px;\n    font-size: 16px;\n    text-align: center;\n}\n\n.nav > li, .projects > li {\n    background-color:#F5F6FA;\n    padding: 10px;\n    width: 200px;\n    border-radius: 1rem;\n}\n\n.nav > li:hover, .all-tasks.current-page, .todays-tasks.current-page, .upcoming-tasks.current-page, #add-project:hover, .add-button:hover, .cancel-button:hover, .project.current-page, .projects > li:hover {\n    background-color: #FF3B3F;\n    color: white;\n    cursor: pointer;\n}\n\n.sidebar > h3 {\n    text-align: center;\n    font-size: 25px;\n}\n\n.todo-list > ul {\n    font-size: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    list-style-type: none;\n    padding: 0px;\n}\n\n.task-template, .task {\n    background-color:#F5F6FA;\n    padding: 10px;\n    border-radius: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.todo-list > ul > li:hover {\n    cursor: pointer;\n}\n\n.todo-list {\n    padding: 40px;\n    padding-top: 19px;\n    display: flex;\n    flex-direction: column;\n}\n\n.complete-button {\n    height: 20px;\n    width: 20px;\n    margin-right: 5px;\n    border-radius: 50%;\n    border: 1px solid #EFEFEF;\n    background-color: white;\n}\n\n.add-task {\n    text-align: center;\n    color:rgba(0, 0, 0, 0.8);\n}\n\n.add-task:hover {\n    cursor: pointer;\n}\n\n.add-task-form {\n    height: 380px;\n    width: 500px;\n    background-color:#EFEFEF;\n    position: fixed;\n    left: 50%;\n    transform: translate(-50%, 0);\n    top: 220px;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    z-index: 1;\n    border-radius: 5px;\n    display: none;\n    padding: 15px;\n}\n\n.opacity-cover {\n    height: 100vh;\n    width: 100vw;\n    background-color: rgba(0,0,0,0.3);\n    position: fixed;\n    display: none;\n    backdrop-filter: blur(3px);\n}\n\n.add-task-form-data {\n    display: flex;\n    flex-direction: column;\n    width: 400px;\n    gap: 18px;\n}\n\n#description {\n    width: 493px; \n    height: 88px;\n    resize: none;\n}\n\n.add-task-button, .edit-task-button {\n    width: 100px;\n    height: 40px;\n    margin-left: 50%;\n    margin-top: 10px;\n    border-radius: 1rem;\n    background-color:#ddd;\n    border: none;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n}\n\n.add-task-button:hover {\n    cursor: pointer;\n}\n\n.select-priority {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n}\n\n#title, #description {\n    background-color: transparent;\n    border: none;\n    font-size: 20px;\n    outline: none;\n}\n\n#date {\n    border-radius: 1rem;\n    padding: 5px;\n    border: none;\n    margin-left: 10px;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n\n.select-priority input[type="radio"] {\n    opacity: 0;\n    width: 0;\n    position: fixed;\n}\n\n.select-priority label, .task-priority {\n    display: inline-block;\n    background-color: #ddd;\n    padding: 5px 15px;\n    font-family: sans-serif, Arial;\n    font-size: 14px;\n    border-radius: 4px;\n}\n\n.select-priority #Low-priority:checked + label {\n    background-color: #59981A;\n    color: white;\n}\n\n.select-priority #Medium-priority:checked + label {\n    background-color: #FFAC1C;\n    color: white;\n}\n\n.select-priority #High-priority:checked + label {\n    background-color: #FC0E0E;\n    color: white;\n}\n\n.select-priority input[type="radio"]:focus + label {\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.select-priority input[type="radio"]:hover + label {\n    cursor: pointer;\n}\n\n.task-description {\n    font-size: smaller;\n    margin-top: 5px;\n}\n\n#delete-button, #edit-button, #info-button {\n    fill: gray;\n    margin-left: 5px;\n}\n\n.task-complete-button {\n    height: 25px;\n    width: 25px;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n    border-radius: 50%;\n    border: none;\n    margin-right: 15px;\n    margin-left: 10px;\n}\n\n.checked {\n    background-image: url('+u+");\n    background-position: 1px 1px;\n    background-color: gray;\n}\n\n.complete {\n    text-decoration: line-through;\n    opacity: 50%;\n}\n\n.information-left, .information-right {\n    display: flex;\n    align-items: center;\n}\n\n.task-dueDate {\n    font-size: 15px;\n    color:#FC0E0E;  \n    margin-right: 15px; \n}\n\n.task-priority {\n    margin-right: 15px;\n    color: white;\n}\n\n#add-project {\n    margin-left: 12%;\n    padding: 10px;\n    border-radius: 5px;\n    border: none;\n    background-color:#ddd;\n    width: 200px;\n    margin-bottom: 10px;\n}\n\n.projectInput {\n    padding: 7px;\n    margin-left: 40px;\n    border-radius: 5px;\n    border: none;\n}\n\n.add-button {\n    padding: 10px;\n    margin-left: 63px;\n    margin-top: 20px;\n    background-color:#ddd;\n    border: none;\n    width: 60px;\n}\n\n.cancel-button {\n    margin-left: 20px;\n    padding: 10px;\n    background-color:#ddd;\n    border: none;\n    width: 60px;\n}",""]);const p=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var d=r(e,o),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},40:(e,t,n)=>{e.exports=n.p+"5b7392e07d13c0094e7b.svg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var r={};(()=>{n.d(r,{HS:()=>G,Nc:()=>B,j4:()=>V,i1:()=>K,MR:()=>Q});var e=n(379),t=n.n(e),o=n(795),a=n.n(o),i=n(569),c=n.n(i),d=n(565),s=n.n(d),l=n(216),u=n.n(l),p=n(589),m=n.n(p),f=n(28),g={};function y(e,t,n,r,o,a){this.title=e,this.description=t,this.dueDate=n,this.priority=r,this.status=o,this.project=a}function h(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function x(e){h(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===b(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function v(e){h(1,arguments);var t=x(e);return t.setHours(0,0,0,0),t}function k(e,t){h(2,arguments);var n=v(e),r=v(t);return n.getTime()===r.getTime()}g.styleTagTransform=m(),g.setAttributes=s(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=u(),t()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals,Math.pow(10,8);var S=36e5;function w(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function E(e,t){var n;h(1,arguments);var r=w(null!==(n=null==t?void 0:t.additionalDigits)&&void 0!==n?n:2);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var o,a=T(e);if(a.date){var i=j(a.date,r);o=L(i.restDateString,i.year)}if(!o||isNaN(o.getTime()))return new Date(NaN);var c,d=o.getTime(),s=0;if(a.time&&(s=A(a.time),isNaN(s)))return new Date(NaN);if(!a.timezone){var l=new Date(d+s),u=new Date(0);return u.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),u.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),u}return c=M(a.timezone),isNaN(c)?new Date(NaN):new Date(d+s+c)}var N={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},C=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,q=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,D=/^([+-])(\d{2})(?::?(\d{2}))?$/;function T(e){var t,n={},r=e.split(N.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?t=r[0]:(n.date=r[0],t=r[1],N.timeZoneDelimiter.test(n.date)&&(n.date=e.split(N.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var o=N.timezone.exec(t);o?(n.time=t.replace(o[1],""),n.timezone=o[1]):n.time=t}return n}function j(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};var o=r[1]?parseInt(r[1]):null,a=r[2]?parseInt(r[2]):null;return{year:null===a?o:100*a,restDateString:e.slice((r[1]||r[2]).length)}}function L(e,t){if(null===t)return new Date(NaN);var n=e.match(C);if(!n)return new Date(NaN);var r=!!n[4],o=F(n[1]),a=F(n[2])-1,i=F(n[3]),c=F(n[4]),d=F(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,c,d)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var o=7*(t-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+o),r}(t,c,d):new Date(NaN);var s=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(z[t]||(U(e)?29:28))}(t,a,i)&&function(e,t){return t>=1&&t<=(U(e)?366:365)}(t,o)?(s.setUTCFullYear(t,a,Math.max(o,i)),s):new Date(NaN)}function F(e){return e?parseInt(e):1}function A(e){var t=e.match(q);if(!t)return NaN;var n=I(t[1]),r=I(t[2]),o=I(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,o)?n*S+6e4*r+1e3*o:NaN}function I(e){return e&&parseFloat(e.replace(",","."))||0}function M(e){if("Z"===e)return 0;var t=e.match(D);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),o=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,o)?n*(r*S+6e4*o):NaN}var z=[31,null,31,30,31,30,31,31,30,31,30,31];function U(e){return e%400==0||e%4==0&&e%100!=0}function O(){const e=B[this.parentNode.parentNode.getAttribute("data-index")],t=this.parentNode.parentNode;"incomplete"==e.status?(e.status="complete",this.classList.add("checked"),t.classList.add("complete")):(e.status="incomplete",this.classList.remove("checked"),t.classList.remove("complete")),localStorage.setItem("defaultTasks",JSON.stringify(B))}const Z=JSON.parse(localStorage.getItem("projects"))||[];function $(e){e.innerHTML="";const t=document.createElement("button");t.setAttribute("type","button"),t.setAttribute("id","add-project"),t.textContent="Add Project",t.addEventListener("click",P),e.appendChild(t)}function H(e){G(),B.forEach(((t,n)=>{t.project==e.target.innerText&&_(t,n)}))}function J(){const e=document.querySelector("#projects"),t=document.createElement("option");t.value="Default",t.textContent="Default",e.innerHTML="",e.appendChild(t),Z.forEach((t=>{const n=document.createElement("option");n.value=t,n.innerText=t,e.appendChild(n)}))}function P(e){const t=e.target.parentElement,n=document.querySelector(".projects");e.target.remove();const r=document.createElement("input");r.classList.add("projectInput"),r.placeholder="Project Name";const o=document.createElement("button");o.setAttribute("type","button"),o.textContent="Add",o.classList.add("add-button"),o.addEventListener("click",(()=>{const e=document.createElement("li");e.classList.add("project"),""==!r.value&&(e.textContent=r.value,Z.push(r.value),localStorage.setItem("projects",JSON.stringify(Z)),n.appendChild(e),e.addEventListener("click",H),e.addEventListener("click",Q),r.value="",$(t))}));const a=document.createElement("button");a.setAttribute("type","button"),a.textContent="Cancel",a.classList.add("cancel-button"),a.addEventListener("click",(()=>{$(t)})),t.appendChild(r),t.appendChild(o),t.appendChild(a)}function R(){const e=B[this.parentNode.parentNode.getAttribute("data-index")],t=document.querySelector(".add-task-form"),n=document.querySelector(".opacity-cover"),r=document.querySelector("form");t.style.display="block",n.style.display="block",document.querySelector("#title").value=e.title,document.querySelector("#description").value=e.description,document.querySelector("#date").value=e.dueDate,document.querySelector(`#${e.priority}-priority`).checked=!0,J(),document.querySelector("#projects").value=e.project;const o=document.querySelector(".add-task-button");o&&o.remove();const a=document.createElement("button");a.classList.add("edit-task-button"),a.setAttribute("type","button"),a.textContent="Edit",r.appendChild(a),a.addEventListener("click",(()=>{e.title=document.querySelector("#title").value,e.description=document.querySelector("#description").value,e.dueDate=document.querySelector("#date").value,e.priority=document.querySelector("input[name=priority]:checked").value,e.project=document.querySelector("#projects").value,localStorage.setItem("defaultTasks",JSON.stringify(B)),t.style.display="none",n.style.display="none",a.remove(),r.reset(),V()}))}function Y(){B.splice(this.parentNode.parentNode.getAttribute("data-index"),1),localStorage.setItem("defaultTasks",JSON.stringify(B)),V()}function _(e,t){const n=document.querySelector(".todo-items"),r=document.querySelector(".task-template").cloneNode(!0),o=document.createDocumentFragment();r.querySelector(".task-title").textContent=e.title,r.querySelector(".task-description").textContent=e.description,r.querySelector(".task-dueDate").textContent=e.dueDate,r.querySelector(".task-priority").textContent=e.priority,r.querySelector(".task-priority").style.backgroundColor=K(e.priority),r.querySelector(".task-complete-button").addEventListener("click",O),r.querySelector("#edit-button").addEventListener("click",R),r.querySelector("#delete-button").addEventListener("click",Y),r.style.display="flex",r.className="task","complete"==e.status&&(r.classList.add("complete"),r.querySelector(".task-complete-button").classList.add("checked")),r.dataset.index=t,o.appendChild(r),n.appendChild(o)}const B=JSON.parse(localStorage.getItem("defaultTasks"))||[];function G(){document.querySelectorAll(".task").forEach((e=>{e.remove()}))}function Q(e){document.querySelectorAll(".projects li").forEach((e=>{e.classList.remove("current-page")})),W.forEach((e=>{e.classList.remove("current-page")})),e.target.classList.add("current-page")}console.log(B),V(),function(){const e=document.querySelector(".projects");Z.forEach((t=>{const n=document.createElement("li");n.classList.add("project"),n.textContent=t,n.addEventListener("click",H),n.addEventListener("click",Q),e.appendChild(n)}))}(),document.querySelector(".all-tasks").classList.add("current-page");const W=document.querySelectorAll(".nav li");function K(e){return"Low"==e?"#59981A":"Medium"==e?"#FFAC1C":"#FC0E0E"}function V(){G(),B.forEach(((e,t)=>{_(e,t)}))}W.forEach((e=>{e.addEventListener("click",(e=>{Q(e)}))}));const X=document.querySelector(".add-task"),ee=document.querySelector(".add-task-form"),te=document.querySelector(".opacity-cover"),ne=document.querySelector("form");X.addEventListener("click",(()=>{const e=document.createElement("button");J(),e.classList.add("add-task-button"),e.textContent="Add Task",e.setAttribute("type","button"),e.addEventListener("click",(()=>{const t=new y(document.querySelector("#title").value,document.querySelector("#description").value,document.querySelector("#date").value,document.querySelector("input[name=priority]:checked").value,"incomplete",document.querySelector("#projects").value);B.push(t),localStorage.setItem("defaultTasks",JSON.stringify(B)),ee.style.display="none",te.style.display="none",V(),ne.reset(),e.remove()})),ne.appendChild(e),ee.style.display="block",te.style.display="block"})),document.querySelector(".all-tasks").addEventListener("click",(()=>{V()})),document.querySelector(".todays-tasks").addEventListener("click",(function(){G(),B.forEach(((e,t)=>{(function(e){return h(1,arguments),k(e,Date.now())})(E(e.dueDate))&&_(e,t)}))})),document.querySelector(".upcoming-tasks").addEventListener("click",(function(){G(),B.forEach(((e,t)=>{(function(e){return h(1,arguments),x(e).getTime()>Date.now()})(E(e.dueDate))&&_(e,t)}))})),document.querySelector("#add-project").addEventListener("click",P)})()})();