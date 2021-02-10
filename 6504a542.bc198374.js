/*! For license information please see 6504a542.bc198374.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{217:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),o=(n(0),n(336)),i=(n(350),n(343)),l=n(338),c={last_modified_on:"2021-01-09",$schema:"/.meta/.schemas/guides.json",title:"Debugging",description:"How to debug your application with Qovery",series_position:5,author_github:"https://github.com/evoxmusic",tags:["type: guide"]},s={categories:[{name:"getting-started",title:"Getting Started",description:"Take Qovery from zero to production in under 10 minutes.",permalink:"/guides/getting-started"}],coverLabel:"Debugging",description:"How to debug your application with Qovery",permalink:"/guides/getting-started/debugging",readingTime:"6 min read",seriesPosition:5,source:"@site/guides/getting-started/debugging.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"}],title:"Debugging",truncated:!1,prevItem:{title:"Environment variables",permalink:"/guides/getting-started/managing-environment-variables"},nextItem:{title:"Create a blazingly fast REST API in Rust (Part 1/2)",permalink:"/guides/tutorial/create-a-blazingly-fast-api-in-rust-part-1"}},u=[{value:"Debugging an application build",id:"debugging-an-application-build",children:[{value:"Qovery status",id:"qovery-status",children:[]},{value:"Qovery run",id:"qovery-run",children:[]}]},{value:"Debugging a running application",id:"debugging-a-running-application",children:[{value:"Qovery status",id:"qovery-status-1",children:[]},{value:"Qovery log",id:"qovery-log",children:[]},{value:"Rollback",id:"rollback",children:[]}]},{value:"Monitoring and alerting",id:"monitoring-and-alerting",children:[]},{value:"Third-party integration",id:"third-party-integration",children:[]}],p={rightToc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Your application is running, but something goes wrong? In this guide, you'll learn how to debug your application and solve your problem to make it running smoothly."),Object(o.b)(i.a,{mdxType:"Assumptions"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You have installed the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/guides/getting-started/deploy-your-first-application/"}),"Qovery CLI")),Object(o.b)("li",{parentName:"ul"},"You have already deployed an application with Qovery"))),Object(o.b)("h2",{id:"debugging-an-application-build"},"Debugging an application build"),Object(o.b)("p",null,"You have deployed your application with Qovery, and the status of your application is ",Object(o.b)("inlineCode",{parentName:"p"},"build error"),". Meaning, your application has failed to build correctly.\nThere are two commands for getting a closer look at what's going on."),Object(o.b)("h3",{id:"qovery-status"},"Qovery status"),Object(o.b)("p",null,"The command ",Object(o.b)("inlineCode",{parentName:"p"},"qovery status")," give the status of our application. In the case of a build error, the reason is displayed into the console as well"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery status\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Build error output" {10-23}',title:'"Build',error:!0,'output"':!0,"{10-23}":!0}),"BRANCH NAME | STATUS      | ENDPOINTS                                   | APPLICATIONS                        | DATABASES\nmaster      | build error | https://main-yenr7erjbs87dk4m-gtw.qovery.io | simple-example-node-with-postgresql | my-postgresql-3498225\n\nAPPLICATION NAME                    | STATUS      | DATABASES\nsimple-example-node-with-postgresql | build error | my-postgresql-3498225\n\nDATABASE NAME         | STATUS  | TYPE       | VERSION | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS\nmy-postgresql-3498225 | running | POSTGRESQL | 11.5    | <hidden> | <hidden> | <hidden> | <hidden> | simple-example-node-with-postgresql\n\nSomething goes wrong:\n\n---------- Start of error message ----------\nSending build context to Docker daemon  244.7kB\nStep 1/8 : FROM node:13-alpine\n---\x3e bcfeabd22749\nStep 2/8 : RUN mkdir -p /usr/src/app\n---\x3e Using cache\n---\x3e 104f4613b141\nStep 3/8 : RUN toto\n---\x3e Running in 52fa3e66f0c4\n/bin/sh: toto: not found\nThe command '/bin/sh -c toto' returned a non-zero code: 127\n----------- End of error message -----------\n\nHINT: Ensure your Dockerfile is correct. Run and test your container locally with 'qovery run'\n")),Object(o.b)("p",null,"Here we can see that the build error comes from our Dockerfile. We also have a hint affirming this problem."),Object(o.b)("h3",{id:"qovery-run"},"Qovery run"),Object(o.b)(l.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"You must have the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.docker.com/"}),"docker")," runtime installed and running")),Object(o.b)("p",null,"The command ",Object(o.b)("inlineCode",{parentName:"p"},"qovery run")," is a wrapper around the commands ",Object(o.b)("inlineCode",{parentName:"p"},"docker build")," and ",Object(o.b)("inlineCode",{parentName:"p"},"docker run"),". It's the best way to test your container locally. Our motto is, if your application is running locally with ",Object(o.b)("inlineCode",{parentName:"p"},"qovery run")," then it will work on Qovery.\nIn the case of a bad Dockerfile, by running ",Object(o.b)("inlineCode",{parentName:"p"},"qovery run")," we directly see the error"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery run\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Build error output"',title:'"Build',error:!0,'output"':!0}),"2020/04/22 10:12:37 reload master environment: DONE\nStep 1/8 : FROM node:13-alpine\n ---\x3e e1495e4ac50d\nStep 2/8 : RUN mkdir -p /usr/src/app\n ---\x3e Using cache\n ---\x3e 3afe9d6678e0\nStep 3/8 : RUN toto\n ---\x3e Running in fadf25b6fc5e\n/bin/sh: toto: not found\n")),Object(o.b)("h2",{id:"debugging-a-running-application"},"Debugging a running application"),Object(o.b)("p",null,"Your application is running, but for some reason, it is not working as expected. Here are a few tips to find out what's going on."),Object(o.b)("h3",{id:"qovery-status-1"},"Qovery status"),Object(o.b)("p",null,"First, check that all your applications and services are up and running correctly with ",Object(o.b)("inlineCode",{parentName:"p"},"qovery status")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery status\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Check application status"',title:'"Check',application:!0,'status"':!0}),"BRANCH NAME | STATUS  | ENDPOINTS                                   | APPLICATIONS                        | DATABASES\nmaster      | running | https://main-yenr7erjbs87dk4m-gtw.qovery.io | simple-example-node-with-postgresql | my-postgresql-3498225\n\nAPPLICATION NAME                    | STATUS  | DATABASES\nsimple-example-node-with-postgresql | running | my-postgresql-3498225\n\nDATABASE NAME         | STATUS  | TYPE       | VERSION | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS\nmy-postgresql-3498225 | running | POSTGRESQL | 11.5    | <hidden> | <hidden> | <hidden> | <hidden> | simple-example-node-with-postgresql\n")),Object(o.b)("p",null,"Everything is fine here, meaning the problem is on our side as developer."),Object(o.b)("h3",{id:"qovery-log"},"Qovery log"),Object(o.b)("p",null,"Your application is running, and logs are debug/info/warning/error messages can be thrown upon the standard output. To show them it's as easy as typing one command"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery log\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Log output"',title:'"Log','output"':!0}),"GET / 200 7.707 ms - 170\nGET / 200 5.572 ms - 170\nGET / 200 5.296 ms - 170\nGET /stylesheets/style.css 200 2.812 ms - 117\nGET /favicon.ico 404 8.127 ms - 913\nGET /stylesheets/style.css 304 0.861 ms - -\nGET / 304 5.100 ms - -\nGET /stylesheets/style.css 304 0.361 ms - -\nGET / 200 5.055 ms - 170\n")),Object(o.b)(l.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"See all log options with ",Object(o.b)("inlineCode",{parentName:"p"},"qovery log -h"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Pro tip"),": you can even follow the output with the ",Object(o.b)("inlineCode",{parentName:"p"},"-f")," option"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery log -f\n")),Object(o.b)("p",null,"If you want to display logs of all applications in a given environment, use ",Object(o.b)("inlineCode",{parentName:"p"},"qovery log --environment")," instead:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery log --environment\nlog-printer-gitlab | 2020-11-24T12:00:24.826Z\nlog-printer-gitlab-v2 | 2020-11-24T12:00:25.027Z\nlog-printer-gitlab    | 2020-11-24T12:00:25.827Z\nlog-printer-gitlab-v2 | 2020-11-24T12:00:26.027Z\nlog-printer-gitlab    | 2020-11-24T12:00:26.828Z\nlog-printer-gitlab-v2 | 2020-11-24T12:00:27.028Z\nlog-printer-gitlab    | 2020-11-24T12:00:27.830Z\nlog-printer-gitlab-v2 | 2020-11-24T12:00:28.029Z\nlog-printer-gitlab    | 2020-11-24T12:00:28.831Z\nlog-printer-gitlab-v2 | 2020-11-24T12:00:29.030Z\nlog-printer-gitlab    | 2020-11-24T12:00:29.832Z\nlog-printer-gitlab-v2 | 2020-11-24T12:00:30.031Z\nlog-printer-gitlab    | 2020-11-24T12:00:30.833Z\nlog-printer-gitlab-v2 | 2020-11-24T12:00:31.031Z\nlog-printer-gitlab    | 2020-11-24T12:00:31.834Z\nlog-printer-gitlab-v2 | 2020-11-24T12:00:32.032Z\n")),Object(o.b)("h3",{id:"rollback"},"Rollback"),Object(o.b)("p",null,"You need more time to fix a bug? No worries, you can rollback at any time by using ",Object(o.b)("inlineCode",{parentName:"p"},"qovery deploy <commit id>")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery deploy list\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Last deployed commits"',title:'"Last',deployed:!0,'commits"':!0}),"BRANCH | COMMIT DATE                     | COMMIT ID                                | COMMIT AUTHOR     | DEPLOYED\nmaster | 2020-04-22 10:34:11 +0200 +0200 | c4f5ab0396ab025a115f96c50c71e63ccf0aceae | Romaric Philogene | \u2713\nmaster | 2020-04-22 09:55:25 +0200 +0200 | bafbc5501f016b6c906f373022ed3a40f4ecdf4b | Romaric Philogene |\nmaster | 2020-04-22 09:39:42 +0200 +0200 | 5fe83fed61b7c6933c015d73e2588d20ba9856d1 | Romaric Philogene |\nmaster | 2020-04-21 21:10:03 +0200 +0200 | f4b9bd4c8cc043e6a65e6a84db825d5897cbc30d | Romaric Philogene |\nmaster | 2020-04-21 20:59:24 +0200 +0200 | 8cf3e8aec44b2468e59eca59defe164eea10c63f | Romaric Philogene |\nmaster | 2020-04-20 22:20:04 +0200 +0200 | 5f9fd42f979f89bc20349cb89978bda139c3eca1 | Romaric Philogene |\nmaster | 2020-04-10 20:12:22 +0200 +0200 | efbbeecaacdb5acc5f3175bd83fa39536f0ed395 | Romaric Philogene |\nmaster | 2020-04-10 15:44:05 +0200 +0200 | ccfa5fad64dbb85d279c07f256101fd234e6624a | Romaric Philogene |\nmaster | 2020-04-10 15:26:57 +0200 +0200 | 27df877c83ca979f026f6eb4fbba73692293da87 | Romaric Philogene |\nmaster | 2020-04-08 20:03:29 +0200 +0200 | fa8aa4f12e80ae64b3ef8d217df1ecaccc576708 | Romaric Philogene |\n")),Object(o.b)("p",null,"To rollback on the commit ",Object(o.b)("inlineCode",{parentName:"p"},"8cf3e8aec44b2468e59eca59defe164eea10c63f")," it's as easy as executing the command"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery deploy 8cf3e8aec44b2468e59eca59defe164eea10c63f\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Rollback output"',title:'"Rollback','output"':!0}),'deployment in progress...\nHint: type "qovery status --watch" to track the progression of this deployment\n')),Object(o.b)("p",null,"Then, we can watch the progress of the rollback with"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery status --watch\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Deployment progression"',title:'"Deployment','progression"':!0})," 100% |\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588|  [0s:0s]\n\nYour environment is ready!\n\n-- status output --\n\nBRANCH NAME | STATUS  | ENDPOINTS                                   | APPLICATIONS                        | DATABASES\nmaster      | running | https://main-yenr7erjbs87dk4m-gtw.qovery.io | simple-example-node-with-postgresql | my-postgresql-3498225\n\nAPPLICATION NAME                    | STATUS  | DATABASES\nsimple-example-node-with-postgresql | running | my-postgresql-3498225\n\nDATABASE NAME         | STATUS  | TYPE       | VERSION | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS\nmy-postgresql-3498225 | running | POSTGRESQL | 11.5    | <hidden> | <hidden> | <hidden> | <hidden> | simple-example-node-with-postgresql\n")),Object(o.b)("p",null,"Well done! You have rollback to a previous working version."),Object(o.b)("h2",{id:"monitoring-and-alerting"},"Monitoring and alerting"),Object(o.b)("p",null,"Qovery will provide ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://roadmap.qovery.com/"}),"very soon")," monitoring and alerting. In the meantime, we highly recommend using tools like ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.datadoghq.com"}),"Datadog"),"."),Object(o.b)("h2",{id:"third-party-integration"},"Third-party integration"),Object(o.b)("p",null,"Qovery integrates third-party services like Datadog, NewRelic, and others. You can use any third service that you want if they support containers (which is the case of most of them)."),Object(o.b)("p",null,"Do you need any help? ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://discord.qovery.com"}),"Reach us on Discord")))}b.isMDXComponent=!0},335:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},336:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,g=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(g,l({ref:t},s,{components:n})):a.a.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},338:function(e,t,n){"use strict";n(342);var r=n(0),a=n.n(r),o=n(335),i=n.n(o);n(133);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,o=e.icon,l=e.type,c=null;switch(l){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return a.a.createElement("div",{className:i()(n,"alert","alert--"+l,{"alert--fill":r,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:i()("feather","icon-"+(o||c))}),t)}},341:function(e,t,n){var r=n(25).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(10)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},342:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(345)}),n(75)("fill")},343:function(e,t,n){"use strict";n(341);var r=n(0),a=n.n(r),o=n(338);t.a=function(e){var t=e.children,n=e.name;return a.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},345:function(e,t,n){"use strict";var r=n(27),a=n(76),o=n(26);e.exports=function(e){for(var t=r(this),n=o(t.length),i=arguments.length,l=a(i>1?arguments[1]:void 0,n),c=i>2?arguments[2]:void 0,s=void 0===c?n:a(c,n);s>l;)t[l++]=e;return t}},346:function(e,t,n){"use strict";var r=n(351),a=n(53);function o(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=a({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),a=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),n(decodeURIComponent(a),o,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[o(t,e),"[",r,"]"].join(""):[o(t,e),"[",o(r,e),"]=",o(n,e)].join("")};case"bracket":return function(t,n){return null===n?o(t,e):[o(t,e),"[]=",o(n,e)].join("")};default:return function(t,n){return null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}}(t=a({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var a=e[r];if(void 0===a)return"";if(null===a)return o(r,t);if(Array.isArray(a)){var i=[];return a.slice().forEach((function(e){void 0!==e&&i.push(n(r,e,i.length))})),i.join("&")}return o(r,t)+"="+o(a,t)})).filter((function(e){return e.length>0})).join("&"):""}},350:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=(n(335),n(346)),i=n.n(o);n(134);t.a=function(e){var t=e.children,n=e.headingDepth,o=e.hideFeedbackQuestion,l="undefined"!=typeof window?window.location:null,c={title:"Tutorial on "+l+" failed",body:"The tutorial on:\n\n"+l+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(c),u=Object(r.useState)(null),p=u[0],b=u[1];return a.a.createElement("div",{className:"steps steps--h"+n},t,!o&&!p&&a.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",a.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return b("yes")}},"Yes"),"\xa0\xa0",a.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&a.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",a.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},351:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);