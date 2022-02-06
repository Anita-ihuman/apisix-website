"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35809],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),h=l(n),m=i,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||r;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},99112:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return l},toc:function(){return u},default:function(){return h}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o={title:"Biweekly Report\uff5c12.16-12.31 Feature Highlights Update in Progress",keywords:["Apache APISIX","Weekly Report","Contributor","APISIX","API Gateway","Apache"],description:"The Apache APISIX Community Weekly Report hopes to help community members better understand the weekly progress of the Apache APISIX community and and facilitate everyone to participate in the Apache APISIX community.",tags:["Events"]},p=void 0,s={permalink:"/blog/2022/01/05/weekly-report-1231",source:"@site/blog/2022/01/05/weekly-report-1231.md",title:"Biweekly Report\uff5c12.16-12.31 Feature Highlights Update in Progress",description:"The Apache APISIX Community Weekly Report hopes to help community members better understand the weekly progress of the Apache APISIX community and and facilitate everyone to participate in the Apache APISIX community.",date:"2022-01-05T00:00:00.000Z",formattedDate:"January 5, 2022",tags:[{label:"Events",permalink:"/blog/tags/events"}],readingTime:2.86,truncated:!0,authors:[],prevItem:{title:"How to build Apache APISIX in ARM Ubuntu",permalink:"/blog/2022/01/11/building-apisix-in-ubuntu-for-arm"},nextItem:{title:"Using Apache APISIX and Authing to implement Centralized Authentication Management",permalink:"/blog/2022/01/04/authing"}},l={authorsImageUrls:[]},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Contributor Statistics",id:"contributor-statistics",children:[]},{value:"Good first issue",id:"good-first-issue",children:[{value:"Issue #5861",id:"issue-5861",children:[]},{value:"Issue #5900",id:"issue-5900",children:[]}]},{value:"Highlights of Recent Features",id:"highlights-of-recent-features",children:[]},{value:"Recent Blog Recommendations",id:"recent-blog-recommendations",children:[]}],c={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"From 12.16 to 12.31, 33 contributors submitted 90 commits for Apache APISIX. Thank you all for your contributions to Apache APISIX. It is your selfless contribution to make the Apache APISIX project better!")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Apache APISIX has grown as a community from the first day of open source and has quickly become the most active open source API gateway project in the world. These achievements cannot be achieved without the joint efforts of our community partners."),(0,r.kt)("p",null,'"If you want to go fast, go alone.If you want to go far, go together." The Apache APISIX Community Weekly Report hopes to help community members better understand the weekly progress of the Apache APISIX community and and facilitate everyone to participate in the Apache APISIX community.'),(0,r.kt)("p",null,"We have also compiled some issues suitable for newcomers to the community to participate in! If you are interested, don't miss it!"),(0,r.kt)("h2",{id:"contributor-statistics"},"Contributor Statistics"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1641356905327-5adada08-1312-4cbd-962b-00d1fcf9ab96.png",alt:"Contributors List"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1641363865356-97a6e876-97b9-4bda-a0bd-570c4d953faa.png",alt:"New Contributors"})),(0,r.kt)("h2",{id:"good-first-issue"},"Good first issue"),(0,r.kt)("h3",{id:"issue-5861"},"Issue #5861"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Link"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/5861"},"https://github.com/apache/apisix/issues/5861")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Issue description"),":"),(0,r.kt)("p",null,'Sometimes the full CI "linux_openresty"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YAML"},"- linux_openresty\n")),(0,r.kt)("p",null,"takes 50 minutes to complete."),(0,r.kt)("p",null,"Let's split it into multiple parts so the max single job time can be reduced."),(0,r.kt)("p",null,"We can pass an environment variable as the test file range in"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"}," FLUSH_ETCD=1 PERL5LIB=.:$PERL5LIB prove -Itest-nginx/lib -r t\n")),(0,r.kt)("h3",{id:"issue-5900"},"Issue #5900"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Link"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/5900"},"https://github.com/apache/apisix/issues/5900")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Issue description"),":"),(0,r.kt)("p",null,"When using ",(0,r.kt)("inlineCode",{parentName:"p"},"base-auth")," plugins, I don't want to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authentication")," header to upstream.\nIMO, there is no need for upstream to perceive these authentication headers."),(0,r.kt)("p",null,"Now, I use proxy-rewrite plugin to rewrite the Authentication head like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Bash"},' "plugins": {\n        "basic-auth": {},\n        "proxy-rewrite": {\n            "headers": {\n                "Authorization": ""\n            }\n        }\n    },\n')),(0,r.kt)("p",null,"I think we can add a config in the ",(0,r.kt)("inlineCode",{parentName:"p"},"basic-auth")," plugin to hide the auth head."),(0,r.kt)("p",null,"That will be more convenient in using these plugins. So do ",(0,r.kt)("inlineCode",{parentName:"p"},"key-auth")," plugin."),(0,r.kt)("h2",{id:"highlights-of-recent-features"},"Highlights of Recent Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/pull/815"},"Completed the controller loop and related logic for the ApisixPluginConfig custom resource. Released in APISIX Ingress controller v1.4"),"\uff08Contributor: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/neverCase"},"neverCase"),"\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5881"},"The limit-count plugin supports shared counters"),"\uff08Contributor: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"spacewander"),"\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5897"},"Add degradation switch for ext-plugin"),"\uff08Contributor: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/arabot777"},"arabot777"),"\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5934"},"Support to use path parameter with plugin's control api"),"\uff08Contributor: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/The-White-Lion"},"The-White-Lion"),"\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5874"},"Support send APISIX data to assist decision in OPA plugin"),"\uff08Contributor: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bzp2010"},"bzp2010"),"\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5943"},"Allow setting proxy_request_buffering without disabling proxy-mirror"),"\uff08Contributor: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"spacewander"),"\uff09"))),(0,r.kt)("p",null,"The Apache APISIX project website and the Github issue have accumulated a wealth of documentation and experience, so if you encounter problems, you can read the documentation, search the issue with keywords, or participate in the discussion on the issue to put forward your own ideas and practical experience."),(0,r.kt)("h2",{id:"recent-blog-recommendations"},"Recent Blog Recommendations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/12/22/google-logging"},"Apache APISIX Integrates with Google Cloud Logging to Improve Log Processing"),"\uff1a"),(0,r.kt)("p",{parentName:"li"},"This article will explain how to configure and use the Google Cloud Logging service in Apache APISIX.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/12/24/open-policy-agent"},"Apache APISIX integrates with Open Policy Agent to enrich its ecosystem"),"\uff1a"),(0,r.kt)("p",{parentName:"li"},"This article introduces the opa plug-in as an example of HTTP API and details how to integrate Apache APISIX with OPA to decouple the authentication authorization of back-end services.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/12/24/apisix-integrate-openwhisk-plugin"},"Coming soon! Apache APISIX Integrate with Apache OpenWhisk"),"\uff1a"),(0,r.kt)("p",{parentName:"li"},"This article introduces the feature prospect and usage steps of the openwhisk plug-in, which is combined with a variety of identity authentication plug-ins provided by Apache APISIX to achieve authentication and authorization and other functions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/12/30/apisix-proxy-grpc-service"},"Using the Apache APISIX proxy gRPC service"),"\uff1a"),(0,r.kt)("p",{parentName:"li"},"This article shows you how to proxy client HTTP traffic to the back-end gRPC service via the grpc-transcode plugin in Apache APISIX."))))}h.isMDXComponent=!0}}]);