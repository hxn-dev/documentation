/*! For license information please see b0c42eac.f264b43d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{217:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),a=(n(0),n(255)),i=(n(269),n(263)),s=(n(258),{last_modified_on:"2020-04-23",$schema:"/.meta/.schemas/guides.json",title:"Using multiple Environments",description:"How to make use of Environments on Qovery",author_github:"https://github.com/pjeziorowski",tags:["type: guide"]}),c={categories:[{name:"advanced",title:"Advanced",description:"Go beyond the basics, become a Qovery pro, and extract the full potential of Qovery.",permalink:"/guides/advanced"}],coverLabel:"Using multiple Environments",description:"How to make use of Environments on Qovery",permalink:"/guides/advanced/using-multiple-environments",readingTime:"5 min read",source:"@site/guides/advanced/using-multiple-environments.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"}],title:"Using multiple Environments",truncated:!1,prevItem:{title:"URL Shortener API with Kotlin (Part 1/2)",permalink:"/guides/tutorial/url-shortener-api-with-kotlin"}},l=[{value:"Your application",id:"your-application",children:[]},{value:"Adding new features",id:"adding-new-features",children:[]},{value:"Testing in deployed environments",id:"testing-in-deployed-environments",children:[{value:"The problem",id:"the-problem",children:[]},{value:"Qovery Environments to the rescue",id:"qovery-environments-to-the-rescue",children:[]}]},{value:"Test it yourself",id:"test-it-yourself",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Before you release new features, you always want to test them in a working, remote environment that closely resembles your production to make sure everything works as expected (not only on your machine).\nWorking in teams makes this task a bit more complicated - if you have just one testing environment, sometimes you have to wait until your colleagues finish testing their features before you can test yours."),Object(a.b)("p",null,"In this guide, you will learn how to make a full use of Qovery ",Object(a.b)("inlineCode",{parentName:"p"},"Environments")," to speed up your development cycle and make your life as a developer more pleasurable and simple."),Object(a.b)(i.a,{mdxType:"Assumptions"},Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You have installed the ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/guides/getting-started/deploy-your-first-application/"}),"Qovery CLI")),Object(a.b)("li",{parentName:"ul"},"You have already deployed an application with Qovery"))),Object(a.b)("h2",{id:"your-application"},"Your application"),Object(a.b)("p",null,"Let's suppose you're working in a team. You and your colleagues are adding new features to one of your applications.\nFor simplicity of the guide, let's suppose that this is your application:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="app.js"',title:'"app.js"'}),"const http = require('http');\n\nconst hostname = '0.0.0.0';\nconst port = 3333;\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end(`Hello from ${process.env.QOVERY_BRANCH_NAME} environment!`);\n});\n\nserver.listen(port, hostname, () => {\n  console.log(`Server running at http://${hostname}:${port}/`);\n});\n")),Object(a.b)("p",null,"It's a simple Node.js server that returns text in HTTP body response."),Object(a.b)("h2",{id:"adding-new-features"},"Adding new features"),Object(a.b)("p",null,"Your colleague had a task - adding jokes about Chuck Norris to server responses.\nHe is a great programmer - he created a new branch and developed a new feature:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="app.js - Your colleague\'s feature" {15-29}',title:'"app.js',"-":!0,Your:!0,"colleague's":!0,'feature"':!0,"{15-29}":!0}),"const http = require('http');\nconst https = require('https');\n\nconst hostname = '0.0.0.0';\nconst port = 3333;\n\nconst server = http.createServer((req, res) => {\n    myColleaguesFeature(res)\n});\n\nserver.listen(port, hostname, () => {\n    console.log(`Server running at http://${hostname}:${port}/`);\n});\n\nconst myColleaguesFeature = (r) => {\n    https.get('https://api.chucknorris.io/jokes/random', (resp) => {\n        let data = ''\n\n        resp.on('data', (chunk) => {\n            data += chunk\n        })\n\n        resp.on('end', () => {\n            r.end(`Hello from ${process.env.QOVERY_BRANCH_NAME} environment!\\n\\nEnjoy a high quality joke: ${JSON.parse(data).value}`)\n        })\n    }).on('error', (err) => {\n        r.statusCode = 500\n        r.end(`Something has gone wrong in ${process.env.QOVERY_BRANCH_NAME} environment!`)\n    })\n}\n")),Object(a.b)("p",null,"He tested his code locally:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ curl http://localhost:3333\nHello from undefined environment!\n\nEnjoy a high quality joke: Chuck Norris can unscramble an egg\u23ce    \n")),Object(a.b)("p",null,"It works! A great joke appears in the response. Great! But your colleague is a smart guy - he wanted to make sure that his feature also\nworks well in the deployed, testing environment. He wants to avoid saying ",Object(a.b)("inlineCode",{parentName:"p"},"IT WORKS - on my machine")," later on (if for some reason his feature didn't work in production)."),Object(a.b)("h2",{id:"testing-in-deployed-environments"},"Testing in deployed environments"),Object(a.b)("p",null,"Typically, software teams have a few environments. A common pattern is having something close to ",Object(a.b)("inlineCode",{parentName:"p"},"production"),", ",Object(a.b)("inlineCode",{parentName:"p"},"staging")," and ",Object(a.b)("inlineCode",{parentName:"p"},"testing")," environment."),Object(a.b)("p",null,"So, your colleague has deployed his app to the ",Object(a.b)("inlineCode",{parentName:"p"},"testing")," environment."),Object(a.b)("h3",{id:"the-problem"},"The problem"),Object(a.b)("p",null,"Unluckily, at the same time, you have finished your own important feature (adding the current Bitcoin price to the response!), and you also want to test it in a remote environment."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="app.js - Your own feature" {15-30}',title:'"app.js',"-":!0,Your:!0,own:!0,'feature"':!0,"{15-30}":!0}),"const http = require('http');\nconst https = require('https');\n\nconst hostname = '0.0.0.0';\nconst port = 3333;\n\nconst server = http.createServer((req, res) => {\n    myFeature(res)\n});\n\nserver.listen(port, hostname, () => {\n    console.log(`Server running at http://${hostname}:${port}/`);\n});\n\nconst myFeature = (r) => {\n    https.get('https://api.coindesk.com/v1/bpi/currentprice/btc.json', (resp) => {\n        let data = ''\n\n        resp.on('data', (chunk) => {\n            data += chunk\n        })\n\n        resp.on('end', () => {\n            r.end(`Hello from ${process.env.QOVERY_BRANCH_NAME} environment!\\n\\nCurrent Bitcoin price: $${JSON.parse(data).bpi.USD.rate}`.split(\".\")[0])\n        })\n    }).on('error', (err) => {\n        r.statusCode = 500\n        r.end(`Something has gone wrong in ${process.env.QOVERY_BRANCH_NAME} environment!`)\n    })\n}\n")),Object(a.b)("p",null,"You have your own separate Git branch, so your changes are not a part of your friend's version of the application. "),Object(a.b)("p",null,"You can't test your changes at the same time with your colleague in one environment!\nDuring the time your friend tests his code, your feature can not be finished and delivered to the production."),Object(a.b)("h3",{id:"qovery-environments-to-the-rescue"},"Qovery Environments to the rescue"),Object(a.b)("p",null,"To solve this issue and enable software developers to work independently, Qovery introduces the concept of ",Object(a.b)("inlineCode",{parentName:"p"},"Environments"),".\nOn Qovery, after you create a new branch for your new feature, you automatically get a completely separated, exact copy of your production environment (including all applications, databases, data, storage, and brokers)."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/multiple-environments-demo.png",alt:"Deploying multiple Environments"})),Object(a.b)("p",null,"As you see, you also get separate URLs to your versions of applications, so you can test your apps freely and independently.\nNow, you can test your features in parallel. No more time wasted!"),Object(a.b)("h2",{id:"test-it-yourself"},"Test it yourself"),Object(a.b)("p",null,"To see how it works, simply fork ",Object(a.b)("a",{href:"https://github.com/pjeziorowski/qovery-environments-demo"},"this repository"),"\nby clicking the ",Object(a.b)("inlineCode",{parentName:"p"},"Fork")," button:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/fork_button.jpg",alt:"Fork Button"})),Object(a.b)("p",null,"and then, clone the repository:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Clone forked project"',title:'"Clone',forked:!0,'project"':!0}),"$ git clone git@github.com:$YOUR_USERNAME/qovery-environments-demo.git\n$ cd qovery-environments-demo\n")),Object(a.b)("p",null,"Now, you can use ",Object(a.b)("inlineCode",{parentName:"p"},"qovery environment list")," command to see the status of all environments (for each branch of Git repository, Qovery created a separate environment):"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/multiple-environments-demo.png",alt:"Deploying multiple Environments"})),Object(a.b)("p",null,"You can now test different versions of the application using your endpoints and ",Object(a.b)("inlineCode",{parentName:"p"},"curl")," or a web browser:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Response from my colleagues version of the application"',title:'"Response',from:!0,my:!0,colleagues:!0,version:!0,of:!0,the:!0,'application"':!0}),"$ curl https://main-rsgnoj93ssqdyohq-gtw.qovery.io/\nHello from my-colleagues-feature environment!\n\nEnjoy a high quality joke: Chuck Norris never had a condom, thus the glad force flex bag was invented.\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Response from my version of the application"',title:'"Response',from:!0,my:!0,version:!0,of:!0,the:!0,'application"':!0}),"$ curl https://main-p5jtnf0sphc3frsb-gtw.qovery.io/\nHello from my-new-feature environment!\n\nCurrent Bitcoin price: $7,107\n")),Object(a.b)("p",null,"and finally:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Response from production environment"',title:'"Response',from:!0,production:!0,'environment"':!0}),"$ curl https://main-gezg7nlejmutwjsn-gtw.qovery.io/\nHello from master environment!    \n")),Object(a.b)("p",null,"Now, you can play a bit and make some changes. After you commit and push, your application is automatically updated in the appropriate environment, depending on which branch you are working in."))}p.isMDXComponent=!0},254:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return n?o.a.createElement(b,s({ref:t},l,{components:n})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},258:function(e,t,n){"use strict";n(259);var r=n(0),o=n.n(r),a=n(254),i=n.n(a);n(131);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,a=e.icon,s=e.type,c=null;switch(s){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return o.a.createElement("div",{className:i()(n,"alert","alert--"+s,{"alert--fill":r,"alert--icon":!1!==a}),role:"alert"},!1!==a&&o.a.createElement("i",{className:i()("feather","icon-"+(a||c))}),t)}},259:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(264)}),n(75)("fill")},260:function(e,t,n){var r=n(27).f,o=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in o||n(10)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},263:function(e,t,n){"use strict";n(260);var r=n(0),o=n.n(r),a=n(258);t.a=function(e){var t=e.children,n=e.name;return o.a.createElement(a.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},264:function(e,t,n){"use strict";var r=n(25),o=n(76),a=n(24);e.exports=function(e){for(var t=r(this),n=a(t.length),i=arguments.length,s=o(i>1?arguments[1]:void 0,n),c=i>2?arguments[2]:void 0,l=void 0===c?n:o(c,n);l>s;)t[s++]=e;return t}},265:function(e,t,n){"use strict";var r=n(272),o=n(53);function a(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=o({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),o=t.shift(),a=t.length>0?t.join("="):void 0;a=void 0===a?null:decodeURIComponent(a),n(decodeURIComponent(o),a,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[a(t,e),"[",r,"]"].join(""):[a(t,e),"[",a(r,e),"]=",a(n,e)].join("")};case"bracket":return function(t,n){return null===n?a(t,e):[a(t,e),"[]=",a(n,e)].join("")};default:return function(t,n){return null===n?a(t,e):[a(t,e),"=",a(n,e)].join("")}}}(t=o({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var o=e[r];if(void 0===o)return"";if(null===o)return a(r,t);if(Array.isArray(o)){var i=[];return o.slice().forEach((function(e){void 0!==e&&i.push(n(r,e,i.length))})),i.join("&")}return a(r,t)+"="+a(o,t)})).filter((function(e){return e.length>0})).join("&"):""}},269:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=(n(254),n(265)),i=n.n(a);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,a=e.hideFeedbackQuestion,s="undefined"!=typeof window?window.location:null,c={title:"Tutorial on "+s+" failed",body:"The tutorial on:\n\n"+s+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},l="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(c),u=Object(r.useState)(null),p=u[0],m=u[1];return o.a.createElement("div",{className:"steps steps--h"+n},t,!a&&!p&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return m("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:l,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",o.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},272:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);