/*! For license information please see fcb698a1.fd5854ef.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{240:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(9),c=(n(0),n(247)),o=n(250),i={last_modified_on:"2020-04-21",title:"Security and Compliance",description:"Learn more about Security and Compliance in Qovery",sidebar_label:"hidden",hide_pagination:!0},u={id:"security-and-compliance",title:"Security and Compliance",description:"Learn more about Security and Compliance in Qovery",source:"@site/docs/security-and-compliance.md",permalink:"/docs/security-and-compliance",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/security-and-compliance.md",sidebar_label:"hidden",sidebar:"docs",previous:{title:"Environment",permalink:"/docs/main-concepts/Environment"},next:{title:"GDPR",permalink:"/docs/security-and-compliance/gdpr"}},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This section will cover the main Security and Compliance topics:"),Object(c.b)(o.a,{to:"/docs/security-and-compliance/backup-and-restore/",mdxType:"Jump"},"Backup and restore"),Object(c.b)(o.a,{to:"/docs/security-and-compliance/data/",mdxType:"Jump"},"Data"),Object(c.b)(o.a,{to:"/docs/security-and-compliance/encryption/",mdxType:"Jump"},"Encryption"),Object(c.b)(o.a,{to:"/docs/security-and-compliance/gdpr/",mdxType:"Jump"},"Gdpr"))}l.isMDXComponent=!0},246:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===c)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},247:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},l=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,f=l["".concat(o,".").concat(m)]||l[m]||d[m]||c;return n?a.a.createElement(f,i({ref:t},s,{components:n})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},249:function(e,t,n){"use strict";var r=n(1),a=n(0),c=n.n(a),o=n(39),i=n(251),u=n(28),s=n.n(u);t.a=function(e){var t,n=e.to,u=e.href,p=n||u,l=Object(i.a)(p),d=Object(a.useRef)(!1),m=s.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!m&&l&&window.docusaurus.prefetch(p),function(){m&&t&&t.disconnect()}}),[p,m,l]),p&&l?c.a.createElement(o.b,Object(r.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(p),d.current=!0)},innerRef:function(e){var n,r;m&&e&&l&&(n=e,r=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:p})):c.a.createElement("a",Object(r.a)({},e,{href:p}))}},250:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(249),o=n(246),i=n.n(o);n(131);t.a=function(e){var t=e.children,n=e.className,r=e.badge,o=e.leftIcon,u=e.rightIcon,s=e.size,p=e.target,l=e.to,d=i()("jump-to","jump-to--"+s,n),m=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},o&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+o})),a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(u||"chevron-right")+" arrow"}))));return p?a.a.createElement("a",{href:l,target:p,className:d},m):a.a.createElement(c.a,{to:l,className:d},m)}},251:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))}}]);