/*! For license information please see c6f5b0ea.56634623.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{219:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return f}));var r=n(1),a=n(9),o=(n(0),n(247)),i=n(250),c=n(254),s=n.n(c),u={last_modified_on:"2020-04-21",$schema:"/.meta/.schemas/guides.json",title:"Adding a database",description:"How to add a database to your application",series_position:2,author_github:"https://github.com/pjeziorowski",tags:["type: guide"]},p={categories:[{name:"getting-started",title:"Getting Started",description:"Take Qovery from zero to production in under 10 minutes.",permalink:"/guides/getting-started"}],coverLabel:"Adding a database",description:"How to add a database to your application",permalink:"/guides/getting-started/adding-a-database",readingTime:"1 min read",seriesPosition:2,source:"@site/guides/getting-started/adding-a-database.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"}],title:"Adding a database",truncated:!1,prevItem:{title:"Hello World. Deploy your first application.",permalink:"/guides/getting-started/deploy-your-first-application"},nextItem:{title:"Setting custom domain",permalink:"/guides/getting-started/setting-custom-domain"}},l=[],d={rightToc:l};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(s.a,{src:"/img/components.svg",mdxType:"SVG"}),"Bla bla TODO",Object(o.b)(i.a,{to:"/guides/getting-started/",mdxType:"Jump"},"Get started"))}f.isMDXComponent=!0},246:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},247:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),f=r,m=l["".concat(i,".").concat(f)]||l[f]||d[f]||o;return n?a.a.createElement(m,c({ref:t},u,{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},249:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),i=n(39),c=n(251),s=n(28),u=n.n(s);t.a=function(e){var t,n=e.to,s=e.href,p=n||s,l=Object(c.a)(p),d=Object(a.useRef)(!1),f=u.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!f&&l&&window.docusaurus.prefetch(p),function(){f&&t&&t.disconnect()}}),[p,f,l]),p&&l?o.a.createElement(i.b,Object(r.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(p),d.current=!0)},innerRef:function(e){var n,r;f&&e&&l&&(n=e,r=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:p})):o.a.createElement("a",Object(r.a)({},e,{href:p}))}},250:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(249),i=n(246),c=n.n(i);n(131);t.a=function(e){var t=e.children,n=e.className,r=e.badge,i=e.leftIcon,s=e.rightIcon,u=e.size,p=e.target,l=e.to,d=c()("jump-to","jump-to--"+u,n),f=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},i&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+i})),a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return p?a.a.createElement("a",{href:l,target:p,className:d},f):a.a.createElement(o.a,{to:l,className:d},f)}},251:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))}}]);