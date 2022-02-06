"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58359],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(a),m=r,k=h["".concat(o,".").concat(m)]||h[m]||s[m]||p;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,i=new Array(p);i[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<p;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},29217:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return o},assets:function(){return u},toc:function(){return c},default:function(){return h}});var n=a(87462),r=a(63366),p=(a(67294),a(3905)),i={title:"\u793e\u533a\u53cc\u5468\u62a5\uff5c12.16-12.31 \u529f\u80fd\u4eae\u70b9\u66f4\u65b0\u8fdb\u884c\u4e2d",keywords:["Apache APISIX","\u793e\u533a\u5468\u62a5","APISIX","API Gateway","\u8d21\u732e\u8005"],description:"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u6bcf\u5468\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002",tags:["Events"]},l=void 0,o={permalink:"/zh/blog/2022/01/05/weekly-report-1231",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022/01/05/weekly-report-1231.md",title:"\u793e\u533a\u53cc\u5468\u62a5\uff5c12.16-12.31 \u529f\u80fd\u4eae\u70b9\u66f4\u65b0\u8fdb\u884c\u4e2d",description:"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u6bcf\u5468\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002",date:"2022-01-05T00:00:00.000Z",formattedDate:"2022\u5e741\u67085\u65e5",tags:[{label:"Events",permalink:"/zh/blog/tags/events"}],readingTime:1.07,truncated:!0,authors:[],prevItem:{title:"\u5982\u4f55\u5728 ARM Ubuntu \u4e2d\u6784\u5efa Apache APISIX",permalink:"/zh/blog/2022/01/11/building-apisix-in-ubuntu-for-arm"},nextItem:{title:"Apache APISIX \u7ed3\u5408 Authing \u5b9e\u73b0\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u7ba1\u7406",permalink:"/zh/blog/2022/01/04/authing"}},u={authorsImageUrls:[]},c=[{value:"\u5bfc\u8bed",id:"\u5bfc\u8bed",children:[]},{value:"\u8d21\u732e\u8005\u7edf\u8ba1",id:"\u8d21\u732e\u8005\u7edf\u8ba1",children:[]},{value:"Good first issue",id:"good-first-issue",children:[{value:"Issue #5861",id:"issue-5861",children:[]},{value:"Issue #5900",id:"issue-5900",children:[]}]},{value:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9",id:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9",children:[]},{value:"\u8fd1\u671f\u535a\u6587\u63a8\u8350",id:"\u8fd1\u671f\u535a\u6587\u63a8\u8350",children:[]}],s={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u4ece 12.16 \u5230 12.31, \u6709 33 \u4f4d\u5f00\u53d1\u8005\u4e3a Apache APISIX \u63d0\u4ea4\u4e86 90 \u4e2a commits\u3002\u611f\u8c22\u8fd9\u4e9b\u5c0f\u4f19\u4f34\u4e3a Apache APISIX \u6dfb\u7816\u52a0\u74e6\uff0c\u662f\u4f60\u4eec\u7684\u65e0\u79c1\u4ed8\u51fa\uff0c\u8ba9 Apache APISIX \u9879\u76ee\u53d8\u5f97\u66f4\u597d\uff01")),(0,p.kt)("h2",{id:"\u5bfc\u8bed"},"\u5bfc\u8bed"),(0,p.kt)("p",null,"Apache APISIX \u4ece\u5f00\u6e90\u7b2c\u4e00\u5929\u5c31\u4ee5\u793e\u533a\u65b9\u5f0f\u6210\u957f\uff0c\u8fc5\u901f\u6210\u4e3a\u5168\u4e16\u754c\u6700\u6d3b\u8dc3\u7684\u5f00\u6e90 API \u7f51\u5173\u9879\u76ee\u3002\u8fd9\u4e9b\u6210\u5c31\uff0c\u79bb\u4e0d\u5f00\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u7684\u5171\u540c\u594b\u6597\u3002"),(0,p.kt)("p",null,"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002"),(0,p.kt)("p",null,"\u6211\u4eec\u8fd8\u6574\u7406\u4e86\u4e00\u4e9b\u9002\u5408\u65b0\u6765\u793e\u533a\u7684\u5c0f\u4f19\u4f34\u4eec\u53c2\u52a0\u7684 issue\uff01\u611f\u5174\u8da3\u7684\u540c\u5b66\u4eec\uff0c\u8d70\u8fc7\u8def\u8fc7\u4e0d\u8981\u9519\u8fc7\uff01"),(0,p.kt)("h2",{id:"\u8d21\u732e\u8005\u7edf\u8ba1"},"\u8d21\u732e\u8005\u7edf\u8ba1"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1641356905322-c0fdef6a-370f-4369-b4b8-3e296cdfeb7f.png",alt:"\u672c\u5468\u8d21\u732e\u8005\u540d\u5355"})),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1641363865367-2500996c-30e9-465e-9a52-2c2981b9b8b2.png",alt:"\u672c\u5468\u65b0\u664b\u8d21\u732e\u8005"})),(0,p.kt)("h2",{id:"good-first-issue"},"Good first issue"),(0,p.kt)("h3",{id:"issue-5861"},"Issue #5861"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u94fe\u63a5"),": ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/5861"},"https://github.com/apache/apisix/issues/5861")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u95ee\u9898\u63cf\u8ff0"),'\uff1a\u6709\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5b8c\u6574\u7684 CI "linux_openresty" \u9700\u8981 50 \u5206\u949f\u624d\u80fd\u5b8c\u6210\u3002'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-YAML"}," - linux_openresty\n")),(0,p.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u628a\u5b83\u5206\u6210\u591a\u4e2a\u90e8\u5206\uff0c\u8fd9\u6837\u53ef\u4ee5\u51cf\u5c11\u6700\u5927\u7684\u5355\u9879\u5de5\u4f5c\u65f6\u95f4\u3002"),(0,p.kt)("p",null,"\u53ef\u4ee5\u5728\u4e0b\u65b9\u4e2d\u901a\u8fc7\u4e00\u4e2a\u73af\u5883\u53d8\u91cf\u4f5c\u4e3a\u6d4b\u8bd5\u6587\u4ef6\u7684\u8303\u56f4\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Shell"}," FLUSH_ETCD=1 PERL5LIB=.:$PERL5LIB prove -Itest-nginx/lib -r t\n")),(0,p.kt)("h3",{id:"issue-5900"},"Issue #5900"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u94fe\u63a5"),": ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/5900"},"https://github.com/apache/apisix/issues/5900")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u95ee\u9898\u63cf\u8ff0"),"\uff1a\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"base-auth")," \u63d2\u4ef6\u65f6\uff0c\u4e0d\u60f3\u5c06 ",(0,p.kt)("inlineCode",{parentName:"p"},"Authentication")," \u5934\u4f20\u9012\u7ed9\u4e0a\u6e38\u3002"),(0,p.kt)("p",null,"\u4e0a\u6e38\u4e0d\u9700\u8981\u611f\u77e5\u8fd9\u4e9b\u8eab\u4efd\u9a8c\u8bc1\u6807\u5934\u3002"),(0,p.kt)("p",null,"\u5982\u4e0b\u6240\u793a\uff0c\u4f7f\u7528 proxy-rewrite \u63d2\u4ef6\u91cd\u5199 Authentication \u5934\u90e8\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Bash"},' "plugins": {\n        "basic-auth": {},\n        "proxy-rewrite": {\n            "headers": {\n                "Authorization": ""\n            }\n        }\n    },\n')),(0,p.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"basic-auth")," \u63d2\u4ef6\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u914d\u7f6e\u6765\u9690\u85cf\u8eab\u4efd\u9a8c\u8bc1\u5934\u3002\u8fd9\u6837\u7684\u8bdd\uff0c\u4f7f\u7528\u8fd9\u4e9b\u63d2\u4ef6\u4f1a\u66f4\u65b9\u4fbf\u3002\u540c\u7406\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"key-auth")," \u63d2\u4ef6\u4e5f\u662f\u3002"),(0,p.kt)("h2",{id:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9"},"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/pull/815"},"\u5b8c\u6210\u4e86 ApisixPluginConfig \u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u63a7\u5236\u5668\u5faa\u73af\u548c\u76f8\u5173\u903b\u8f91\u3002\u5df2\u4e8e APISIX Ingress controller v1.4 \u4e2d\u53d1\u5e03"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/neverCase"},"neverCase"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5881"},"limit-count \u63d2\u4ef6\u652f\u6301\u5171\u4eab\u8ba1\u6570\u5668"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"spacewander"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5897"},"ext-plugin \u63d2\u4ef6\u652f\u6301\u964d\u7ea7\u7b56\u7565"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/arabot777"},"arabot777"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5934"},"control api \u652f\u6301 RESTful \u98ce\u683c\u8def\u5f84\u53c2\u6570\u5339\u914d"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/The-White-Lion"},"The-White-Lion"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5874"},"\u652f\u6301\u53d1\u9001 APISIX \u6570\u636e\u4ee5\u534f\u52a9 OPA \u63d2\u4ef6\u7684\u51b3\u7b56"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/bzp2010"},"bzp2010"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5943"},"\u5141\u8bb8\u8bbe\u7f6e proxy_request_buffering \u800c\u4e0d\u7981\u7528 proxy-mirror"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"spacewander"),"\uff09"))),(0,p.kt)("p",null,"Apache APISIX \u7684\u9879\u76ee\u5b98\u7f51\u548c Github \u4e0a\u7684 issue \u4e0a\u5df2\u7ecf\u79ef\u7d2f\u4e86\u6bd4\u8f83\u4e30\u5bcc\u7684\u6587\u6863\u6559\u7a0b\u548c\u4f7f\u7528\u7ecf\u9a8c\uff0c\u5982\u679c\u60a8\u9047\u5230\u95ee\u9898\u53ef\u4ee5\u7ffb\u9605\u6587\u6863\uff0c\u7528\u5173\u952e\u8bcd\u5728 issue \u4e2d\u641c\u7d22\uff0c\u4e5f\u53ef\u4ee5\u53c2\u4e0e issue \u4e0a\u7684\u8ba8\u8bba\uff0c\u63d0\u51fa\u81ea\u5df1\u7684\u60f3\u6cd5\u548c\u5b9e\u8df5\u7ecf\u9a8c\u3002"),(0,p.kt)("h2",{id:"\u8fd1\u671f\u535a\u6587\u63a8\u8350"},"\u8fd1\u671f\u535a\u6587\u63a8\u8350"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2021/12/22/google-logging"},"\u6377\u62a5\u9891\u4f20\uff01Apache APISIX \u73b0\u5df2\u652f\u6301\u5bf9\u63a5 Google Cloud Logging"),"\uff1a"),(0,p.kt)("p",{parentName:"li"},"\u672c\u6587\u5c06\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u5982\u4f55\u5728 Apache APISIX \u4e2d\u914d\u7f6e\u548c\u4f7f\u7528 Google Cloud Logging \u670d\u52a1\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2021/12/24/open-policy-agent"},"\u518d\u63a5\u518d\u5389\uff01Apache APISIX \u96c6\u6210 Open Policy Agent"),"\uff1a"),(0,p.kt)("p",{parentName:"li"},"\u672c\u6587\u4ee5 HTTP API \u4e3a\u4f8b\u4e3a\u5927\u5bb6\u4ecb\u7ecd ",(0,p.kt)("inlineCode",{parentName:"p"},"OPA")," \u63d2\u4ef6\uff0c\u5e76\u8be6\u7ec6\u8bf4\u660e\u5982\u4f55\u5c06 Apache APISIX \u4e0e OPA \u8fdb\u884c\u96c6\u6210\uff0c\u5b9e\u73b0\u540e\u7aef\u670d\u52a1\u7684\u8ba4\u8bc1\u6388\u6743\u89e3\u8026\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2021/12/24/apisix-integrate-openwhisk-plugin"},"\u751f\u6001\u4e30\u5bcc\u6301\u7eed\u8fdb\u884c\u4e2d\uff0cApache OpenWhisk \u96c6\u6210\u95ea\u4eae\u767b\u573a"),"\uff1a"),(0,p.kt)("p",{parentName:"li"},"\u672c\u6587\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u4e86\u5173\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"openwhisk")," \u63d2\u4ef6\u7684\u529f\u80fd\u524d\u77bb\u4e0e\u4f7f\u7528\u6b65\u9aa4\uff0c\u7ed3\u5408 Apache APISIX \u63d0\u4f9b\u7684\u591a\u79cd\u8eab\u4efd\u8ba4\u8bc1\u63d2\u4ef6\u6765\u5b9e\u73b0\u8ba4\u8bc1\u4e0e\u6388\u6743\u7b49\u529f\u80fd\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2021/12/30/apisix-proxy-grpc-service"},"\u4f7f\u7528 Apache APISIX \u4ee3\u7406 gRPC \u670d\u52a1"),"\uff1a"),(0,p.kt)("p",{parentName:"li"},"\u672c\u6587\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u5982\u4f55\u5728 Apache APISIX \u4e2d\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"grpc-transcode")," \u63d2\u4ef6\u6765\u5c06\u5ba2\u6237\u7aef\u7684 HTTP \u6d41\u91cf\u4ee3\u7406\u5230\u540e\u7aef gRPC \u670d\u52a1\u4e0a\u3002"))))}h.isMDXComponent=!0}}]);