"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43346],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(a),m=i,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||o;return a?n.createElement(d,r(r({ref:t},c),{},{components:a})):n.createElement(d,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9086:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return p},toc:function(){return c},default:function(){return h}});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),r={title:"xRPC Will Be Released, Get More Details About APISIX Ecosystem",authors:[{name:"Jinchao Shuai",title:"Author",url:"https://github.com/shuaijinchao",image_url:"https://avatars.githubusercontent.com/u/8529452?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Multiple protocols","Apache APISIX","Java","Multilingual","Ecology"],description:"This article brings you Apache APISIX's upcoming xRPC framework and related details, as well as a detailed presentation of Apache APISIX in multi-language development support.",tags:["Technology","Ecosystem"]},l=void 0,s={permalink:"/blog/2022/01/21/apisix-xrpc-details-and-miltilingual",source:"@site/blog/2022/01/21/apisix-xrpc-details-and-miltilingual.md",title:"xRPC Will Be Released, Get More Details About APISIX Ecosystem",description:"This article brings you Apache APISIX's upcoming xRPC framework and related details, as well as a detailed presentation of Apache APISIX in multi-language development support.",date:"2022-01-21T00:00:00.000Z",formattedDate:"January 21, 2022",tags:[{label:"Technology",permalink:"/blog/tags/technology"},{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:7.36,truncated:!0,authors:[{name:"Jinchao Shuai",title:"Author",url:"https://github.com/shuaijinchao",image_url:"https://avatars.githubusercontent.com/u/8529452?v=4",imageURL:"https://avatars.githubusercontent.com/u/8529452?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"HashiCorp Vault Secure Storage Backend in Apache APISIX Ecosystem",permalink:"/blog/2022/01/21/apisix-hashicorp-vault-integration"},nextItem:{title:"The Practice of Public Gateway in CDN Scenario from UPYUN",permalink:"/blog/2022/01/20/upyun-public-gateway-usecase"}},p={authorsImageUrls:[void 0,void 0]},c=[{value:"Multiprotocol Proxy",id:"multiprotocol-proxy",children:[{value:"Why xRPC",id:"why-xrpc",children:[]},{value:"What is xRPC",id:"what-is-xrpc",children:[]}]},{value:"Multilingual Ecology",id:"multilingual-ecology",children:[{value:"xPluginRunner",id:"xpluginrunner",children:[]},{value:"Java Plugin Runner Example",id:"java-plugin-runner-example",children:[]}]},{value:"Summary",id:"summary",children:[]}],u={toc:c};function h(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article brings you Apache APISIX's upcoming xRPC framework and related details, as well as a detailed presentation of Apache APISIX in multi-language development support.")),(0,o.kt)("p",null,"As business scenarios and requirements become more complex and diverse, more and more standards and protocols are emerging, and Apache APISIX, as a top open source project of the Apache Foundation, has been actively participating in and promoting the expansion of related ecological aspects."),(0,o.kt)("p",null,"In this article, we will bring you examples of Apache APISIX's upcoming xRPC framework and multilingual plug-ins from two perspectives: ",(0,o.kt)("strong",{parentName:"p"},"multi-protocol proxy and multilingual support"),"."),(0,o.kt)("h2",{id:"multiprotocol-proxy"},"Multiprotocol Proxy"),(0,o.kt)("p",null,"In Apache APISIX, each request corresponds to a Route object. There are currently two main proxy scenarios for Apache APISIX."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1642732975469-74071c65-e869-4133-857f-822b58d6b86e.png",alt:"Two proxy scenarios"})),(0,o.kt)("p",null,"The first is the HTTP protocol proxy, which is currently the most commonly used request proxy in APISIX. Based on the HTTP protocol proxy, Apache APISIX currently implements dozens of traffic governance capabilities, such as fine-grained flow control, security, and observability."),(0,o.kt)("p",null,"The second is a TCP and UDP-based dynamic protocol proxy and load balancing, which provides the most basic traffic admission capabilities and link-level logging capabilities. This proxy model can proxy any TCP/UDP protocol-based requests such as MySQL, Redis, Mongo or DNS. However, since it is a TCP/UDP based proxy without upper application layer protocols, it can only get some basic information about the quaternion, so it is a little bit weaker in terms of scalability."),(0,o.kt)("h3",{id:"why-xrpc"},"Why xRPC"),(0,o.kt)("p",null,"Due to the limitations of Stream Route in terms of protocol proxies, and our desire to support more application layer protocols on APISIX to serve more users and application scenarios, the xRPC framework was born."),(0,o.kt)("p",null,"The xRPC framework makes it very easy to extend protocol capabilities, both specific and private data protocols, ",(0,o.kt)("strong",{parentName:"p"},"with precise granularity and higher-level 7-level control similar to HTTP protocol proxies"),", such as request-level observability, advanced access control, and proxy policies."),(0,o.kt)("h3",{id:"what-is-xrpc"},"What is xRPC"),(0,o.kt)("p",null,"xRPC literally means that X is an abstract representation of a protocol resource. And RPC is what we consider all resources passing through the gateway as a process dispatch, i.e. it is a protocol extension framework. So in terms of positioning, xRPC is a base framework rather than an implementation of a specific protocol."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1642733068660-f479ffcc-5bda-49de-bbd9-0d04d7259450.png",alt:"xRPC architecture"})),(0,o.kt)("p",null,"As you can see from the above architecture, xRPC is a framework based on APISIX Core extensions. On top of this framework, users can implement different application layer protocols, such as Redis, MySQL, Mongo and Postgres. On top of the different protocols, you can abstract some common factors and implement related plug-in capabilities so that different protocols can share these capabilities."),(0,o.kt)("p",null,"So the main role of xRPC can be summarized as: ",(0,o.kt)("strong",{parentName:"p"},"providing access to standardized application layer protocols, supporting cross-protocol capability sharing, and allowing users to get the ability to extend custom protocols.")),(0,o.kt)("h4",{id:"sample-application-scenarios"},"Sample Application Scenarios"),(0,o.kt)("p",null,"With the xRPC protocol framework in place, what scenarios can it address? Here are a few examples."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example 1: Redis does not support TLS in earlier versions. If there are multiple versions of Redis in our system, and we cannot upgrade Redis in production for some reasons, but we need to add TLS capability. In this case, we can use the xPRC-based Redis Protocol to solve the above situation."),(0,o.kt)("li",{parentName:"ul"},"Example 2: When we want to limit the frequency of certain IPs or callers and want to visualize the frequency of each call source, which Redis does not support. This is perfectly solved by using the Redis Protocol, which is extended by xRPC."),(0,o.kt)("li",{parentName:"ul"},"Example 3: If you want to use MySQL to temporarily enable the slow query function, you just need to access MySQL Protocol and configure the relevant policy in APISIX, which saves you from the tedious step of logging into the instance machine by machine.")),(0,o.kt)("p",null,"Of course, there are many similar application scenarios, and we hope that after the release of the feature, you can experience and practice more in the actual application. The process of invoking xPRC is shown in the following diagram."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1643103835579-d215a120-f62e-4ba5-aa14-59ea3d38a429.png",alt:"Invoke process"})),(0,o.kt)("p",null,"Once the upstream services are taken over by Apache APISIX, the different upstream application services can be managed in a unified manner. Functions such as logging, monitoring, security, and troubleshooting can all be accomplished through a standardized set of policies."),(0,o.kt)("h4",{id:"planned-implementation-phases"},"Planned Implementation Phases"),(0,o.kt)("p",null,"The current design of the Apache APISIX xRPC framework is initially divided into 5 phases."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1643103835583-40afb0a0-ec20-40e8-84de-b34afee2724c.png",alt:"5 phases about xRPC"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Phase 1: Read Read data and protocol decoding."),(0,o.kt)("li",{parentName:"ul"},"Phase 2: Access Phase Access phase. Provide plug-in access function, which can realize the demand scenarios of security, flow control and access."),(0,o.kt)("li",{parentName:"ul"},"Phase 3: Proxy data forwarding and load balancing. Provides access support for custom load balancing policies and algorithms."),(0,o.kt)("li",{parentName:"ul"},"Phase 4: Send Sending data and protocol encoding."),(0,o.kt)("li",{parentName:"ul"},"Phase 5: Log Phase Logging phase. Provide plug-in access to realize the logging and logging requirements scenarios.")),(0,o.kt)("h2",{id:"multilingual-ecology"},"Multilingual Ecology"),(0,o.kt)("p",null,"In order to meet the increasingly rich and large computing language base, creating code support for multi-language environment has become the first threshold to cope with future technology development. Apache APISIX has also done a lot of exploration and practice on the road of multi-language development."),(0,o.kt)("p",null,'For example, it has recently implemented support for WebAssembly. For details and features, please refer to the article "',(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/11/19/apisix-supports-wasm"},"Apache APISIX Embraces WASM Ecology"),'". Of course, the support for WASM in Apache APISIX is still experimental, and we will continue to improve the support for WASM in the future. If you are interested in this project, please feel free to contribute to the ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/api7/wasm-nginx-module"},"wasm-nginx-module")," project."),(0,o.kt)("p",null,'In the meantime, Apache APISIX already supports multiple development languages through the "xPluginRunner Multilanguage Plugin Runtime" before WASM support is implemented. That is, when developing APISIX plug-ins, users can write and extend APISIX plug-ins not only with Lua code, which is natively supported by APISIX, but also with their own familiar languages, such as Go, Java and Python.'),(0,o.kt)("h3",{id:"xpluginrunner"},"xPluginRunner"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1642733411405-19b13181-0f5e-46af-837b-66e485f2e0b0.png",alt:"Implementation of xPluginRunner"})),(0,o.kt)("p",null,'The implementation of xPluginRunner is shown in the figure above. The whole communication process is "before" and "after" the execution of the built-in plug-ins, APISIX will initiate local RPC requests to the plug-in runtime of each language. In the plug-in runner, the computation and policy processing within each plug-in is implemented, and the result is finally responded to APISIX for subsequent decision making based on the response result.'),(0,o.kt)("p",null,"The xPluginRunner serves as a bridge for communication with Apache APISIX, and mainly implements the parsing of private data protocols and the encapsulation and unencapsulation of RPC messages."),(0,o.kt)("p",null,"Currently, the Apache APISIX xPluginRunner solution is in a relatively stable stage, and we know from the community feedback that some enterprises have started to try it in production environments. If you are interested in this project, you are also welcome to participate in various development language plug-in projects."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-go-plugin-runner"},"apisix-go-plugin-runner")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-java-plugin-runner"},"apisix-java-plugin-runner")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-python-plugin-runner"},"apache-apisix-python-runner"))),(0,o.kt)("p",null,"Finally, we will show you how to develop APISIX plugins based on Java Plugin Runner with a simple Java example."),(0,o.kt)("h3",{id:"java-plugin-runner-example"},"Java Plugin Runner Example"),(0,o.kt)("p",null,"First of all, when developing the plugin, we need to implement the Interface of PluginFilter. ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," method in the Interface is mainly used to identify and extract the plugin name, and ",(0,o.kt)("inlineCode",{parentName:"p"},"filter")," method is used to filter the request (i.e., execute the plugin body logic)."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1642733591297-642091b2-d4c7-4098-b7ff-41ffa5a2e00a.png",alt:"Plugin"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1642733657248-5b7db563-f95f-4683-997e-47e76eeda4d9.png",alt:"Interface"})),(0,o.kt)("p",null,"One additional point to note is that the ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"response")," parameters appearing in the above code have fixed logic in the Runner (all Runners apply):"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If you want the request to continue to be forwarded and only do some policy settings (such as rewriting the request parameters, headers, etc.), you can simply manipulate the ",(0,o.kt)("inlineCode",{parentName:"li"},"request")," object."),(0,o.kt)("li",{parentName:"ol"},"If you want to terminate the request, you can do it with the ",(0,o.kt)("inlineCode",{parentName:"li"},"response")," object (e.g. set the response body, response headers, status codes, etc.).")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"APISIX will terminate the current request as soon as it senses that the ",(0,o.kt)("inlineCode",{parentName:"p"},"response")," object in the Runner has been manipulated."))),(0,o.kt)("p",null,"Once the plug-in development is completed, it is time to practice the application in APISIX."),(0,o.kt)("p",null,"First, compile Runner and the plug-ins in the project into jar packages and configure the absolute path of the jar packages into the main APISIX configuration file in the following way."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1642733807923-9e3ad231-0094-4e37-a830-29973b43e495.png",alt:"Put jar packages into the main APISIX configuration"})),(0,o.kt)("p",null,"Finally, restart Apache APISIX and you are ready for the routing and plugin configuration and request validation sessions."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1642733908224-64f3ec2c-6d33-4130-b8b6-0fe10e00c48e.png",alt:"Route setting"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1642733944940-69b06c71-22f7-45e4-9b6d-7f1b62167180.png",alt:"Request validation"})),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This article brings you the upcoming release of the xRPC framework for Apache APISIX and related details, as well as a detailed demonstration of Apache APISIX in multi-language development support."),(0,o.kt)("p",null,"The article also shows the details of Apache APISIX's multilanguage development support. It shows the ecology-oriented efforts of Apache APISIX from both the multiprotocol proxy and multilanguage support perspectives."),(0,o.kt)("p",null,"Feel free to start a discussion in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/discussions"},"GitHub Discussions")," or communicate via the ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/general/subscribe-guide"},"mailing list"),"."))}h.isMDXComponent=!0}}]);