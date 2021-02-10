/*! For license information please see 1a808db5.475d9549.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{165:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(1),r=a(9),i=(a(0),a(336)),o=a(338),s={last_modified_on:"2021-02-10",title:"Redis",description:"How to set up and use a Redis database"},c={id:"using-qovery/configuration/databases/redis",title:"Redis",description:"How to set up and use a Redis database",source:"@site/docs/using-qovery/configuration/databases/redis.md",permalink:"/docs/using-qovery/configuration/databases/redis",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/databases/redis.md",sidebar:"docs",previous:{title:"MongoDB",permalink:"/docs/using-qovery/configuration/databases/mongodb"},next:{title:"Environment Variables",permalink:"/docs/using-qovery/configuration/environment-variables"}},l=[{value:"Add a Redis database to your application",id:"add-a-redis-database-to-your-application",children:[]},{value:"Supported versions",id:"supported-versions",children:[]},{value:"Get access to your Redis database",id:"get-access-to-your-redis-database",children:[]},{value:"Show Redis database status",id:"show-redis-database-status",children:[]},{value:"Delete your Redis database",id:"delete-your-redis-database",children:[]},{value:"Redis backup",id:"redis-backup",children:[]}],d={rightToc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes with radius queries and streams."),Object(i.b)("h2",{id:"add-a-redis-database-to-your-application"},"Add a Redis database to your application"),Object(i.b)("p",null,"To add a dedicated Redis instance to your existing application, simply add these lines to your configuration file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml",metastring:'title=".qovery.yml" {4-6}',title:'".qovery.yml"',"{4-6}":!0}),"application:\n...\ndatabases:\n- type: redis\n  version: 6\n  name: my-redis\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"name: select a name for your database"),Object(i.b)("li",{parentName:"ul"},"version: choose the version of the database"),Object(i.b)("li",{parentName:"ul"},"type: the database engine (redis in this case)")),Object(i.b)("h2",{id:"supported-versions"},"Supported versions"),Object(i.b)("p",null,"Here are the Redis versions supported by Qovery."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Version"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"6"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(i.b)("p",null,"Qovery does not support a new version of Redis yet? ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://discord.qovery.com"}),"Contact us")),Object(i.b)("h2",{id:"get-access-to-your-redis-database"},"Get access to your Redis database"),Object(i.b)("p",null,"To get the connection information of your database, you can use the CLI:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"qovery application env list -c\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-plain",metastring:'title="OUTPUT"',title:'"OUTPUT"'}),"$ qovery application env list -c\n  SCOPE       | KEY                                                           | VALUE\n--------------+---------------------------------------------------------------+-----------\n  BUILT_IN    | QOVERY_BRANCH_NAME                                            | master\n  BUILT_IN    | QOVERY_IS_PRODUCTION                                          | true\n  BUILT_IN    | QOVERY_DATABASE_MY_REDIS_NAME                               | my-redis\n  BUILT_IN    | QOVERY_DATABASE_MY_REDIS_TYPE                               | redis\n  BUILT_IN    | QOVERY_DATABASE_MY_REDIS_VERSION                            | 6\n  BUILT_IN    | QOVERY_DATABASE_MY_REDIS_CONNECTION_URI                     | <hidden>\n  BUILT_IN    | QOVERY_DATABASE_MY_REDIS_CONNECTION_URI_WITHOUT_CREDENTIALS | <hidden>\n  BUILT_IN    | QOVERY_DATABASE_MY_REDIS_HOST                               | <hidden>\n  BUILT_IN    | QOVERY_DATABASE_MY_REDIS_FQDN                               | <hidden>\n  BUILT_IN    | QOVERY_DATABASE_MY_REDIS_PORT                               | <hidden>\n  BUILT_IN    | QOVERY_DATABASE_MY_REDIS_USERNAME                           | <hidden>\n  BUILT_IN    | QOVERY_DATABASE_MY_REDIS_PASSWORD                           | <hidden>\n  BUILT_IN    | QOVERY_DATABASE_MY_REDIS_DATABASE                           | redis\n")),Object(i.b)("p",null,"In the output, you get all data you need to use the database. Those environment variables are available in the runtime of your application."),Object(i.b)("h2",{id:"show-redis-database-status"},"Show Redis database status"),Object(i.b)("p",null,"To know more about your database status, run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"qovery status -c\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-plain",metastring:'title="OUTPUT"',title:'"OUTPUT"'}),"DATABASE NAME | STATUS  | TYPE    | VERSION | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS\n----------------+---------+---------+---------+----------+----------+----------+----------+-----------------\n  my-mongo      | running | redis | 6     | <hidden> | <hidden> | <hidden> | <hidden> | simple-example\n")),Object(i.b)("h2",{id:"delete-your-redis-database"},"Delete your Redis database"),Object(i.b)("p",null,"To delete a database, you have to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Remove it from the configuration file, commit and push."),Object(i.b)("li",{parentName:"ul"},"Delete it manually (for security purpose) through the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://start.qovery.com"}),"Qovery web interface"),".")),Object(i.b)(o.a,{type:"danger",mdxType:"Alert"},Object(i.b)("p",null,"Delete action drops the service and its data!")),Object(i.b)(o.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"Backups from production environments are kept for 1 month if you need to recover.")),Object(i.b)("h2",{id:"redis-backup"},"Redis backup"),Object(i.b)("p",null,"Daily backups for your Redis database are automatically done for ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/business/policy/#environment-mode"}),"Production environments"),"."))}u.isMDXComponent=!0},335:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===i)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},336:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(a),p=n,O=u["".concat(o,".").concat(p)]||u[p]||b[p]||i;return a?r.a.createElement(O,s({ref:t},l,{components:a})):r.a.createElement(O,s({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},338:function(e,t,a){"use strict";a(342);var n=a(0),r=a.n(n),i=a(335),o=a.n(i);a(133);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,i=e.icon,s=e.type,c=null;switch(s){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return r.a.createElement("div",{className:o()(a,"alert","alert--"+s,{"alert--fill":n,"alert--icon":!1!==i}),role:"alert"},!1!==i&&r.a.createElement("i",{className:o()("feather","icon-"+(i||c))}),t)}},342:function(e,t,a){var n=a(12);n(n.P,"Array",{fill:a(345)}),a(75)("fill")},345:function(e,t,a){"use strict";var n=a(27),r=a(76),i=a(26);e.exports=function(e){for(var t=n(this),a=i(t.length),o=arguments.length,s=r(o>1?arguments[1]:void 0,a),c=o>2?arguments[2]:void 0,l=void 0===c?a:r(c,a);l>s;)t[s++]=e;return t}}}]);