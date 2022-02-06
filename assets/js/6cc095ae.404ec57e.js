"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87894],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=i,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5455:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o={title:"Router"},l=void 0,u={unversionedId:"architecture-design/router",id:"version-2.6/architecture-design/router",isDocsHomePage:!1,title:"Router",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.6/architecture-design/router.md",sourceDirName:"architecture-design",slug:"/architecture-design/router",permalink:"/docs/apisix/2.6/architecture-design/router",editUrl:"https://github.com/apache/apisix/edit/release/2.6/docs/en/latest/architecture-design/router.md",tags:[],version:"2.6",frontMatter:{title:"Router"},sidebar:"version-2.6/docs",previous:{title:"Plugin Config",permalink:"/docs/apisix/2.6/architecture-design/plugin-config"},next:{title:"Debug Mode",permalink:"/docs/apisix/2.6/architecture-design/debug-mode"}},p=[],c={toc:p};function s(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A distinguishing feature of APISIX from other API gateways is that it allows users to choose different routers to better match free services, making the best choice between performance and freedom."),(0,a.kt)("p",null,"Set the route that best suits your business needs in the local configuration ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"apisix.router.http"),": HTTP Request Route\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"radixtree_uri"),": (Default) only use ",(0,a.kt)("inlineCode",{parentName:"li"},"uri")," as the primary index. Support for full and deep prefix matching based on the ",(0,a.kt)("inlineCode",{parentName:"li"},"radixtree")," engine, see ",(0,a.kt)("a",{parentName:"li",href:"/docs/apisix/2.6/router-radixtree"},"How to use router-radixtree"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Absolute match"),": Complete match for the given ",(0,a.kt)("inlineCode",{parentName:"li"},"uri"),", such as ",(0,a.kt)("inlineCode",{parentName:"li"},"/foo/bar"),",",(0,a.kt)("inlineCode",{parentName:"li"},"/foo/glo"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Prefix match"),": Use ",(0,a.kt)("inlineCode",{parentName:"li"},"*")," at the end to represent the given ",(0,a.kt)("inlineCode",{parentName:"li"},"uri")," as a prefix match. For example, ",(0,a.kt)("inlineCode",{parentName:"li"},"/foo*")," allows matching ",(0,a.kt)("inlineCode",{parentName:"li"},"/foo/"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"/foo/a")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"/foo/b"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"match priority"),": first try absolute match, if you can't hit absolute match, try prefix match."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Any filter attribute"),": Allows you to specify any Nginx built-in variable as a filter, such as URL request parameters, request headers, cookies, and so on."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"radixtree_uri_with_parameter"),": Like ",(0,a.kt)("inlineCode",{parentName:"li"},"radixtree_uri")," but also support parameter match."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"radixtree_host_uri"),": Use ",(0,a.kt)("inlineCode",{parentName:"li"},"host + uri")," as the primary index (based on the ",(0,a.kt)("inlineCode",{parentName:"li"},"radixtree")," engine), matching both host and URL for the current request."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"apisix.router.ssl"),": SSL loads the matching route."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"radixtree_sni"),": (Default) Use ",(0,a.kt)("inlineCode",{parentName:"li"},"SNI")," (Server Name Indication) as the primary index (based on the radixtree engine).")))))}s.isMDXComponent=!0}}]);