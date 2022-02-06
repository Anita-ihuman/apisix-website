"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86233],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=p(n),f=a,d=h["".concat(u,".").concat(f)]||h[f]||s[f]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},13681:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return p},toc:function(){return l},default:function(){return h}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i={title:"Applying Plugin Orchestration in Apache APISIX",author:"Zhiyuan Ju",authorURL:"https://github.com/juzhiyuan",authorImageURL:"https://avatars.githubusercontent.com/u/2106987?v=4",keywords:["Apache APISIX","Plugin Orchestration","Apache APISIX Dashboard","API Gateway"],description:'Read this article to learn about Apache APISIX and basic usage scenarios, and how Apache APISIX integrates "drag and drop" plugin orchestration capabilities in a low-code trend.',tags:["Practical Case"]},c=void 0,u={permalink:"/blog/2021/07/27/use-of-plugin-orchestration-in-Apache-APISIX",source:"@site/blog/2021/07/27/use-of-plugin-orchestration-in-Apache-APISIX.md",title:"Applying Plugin Orchestration in Apache APISIX",description:'Read this article to learn about Apache APISIX and basic usage scenarios, and how Apache APISIX integrates "drag and drop" plugin orchestration capabilities in a low-code trend.',date:"2021-07-27T00:00:00.000Z",formattedDate:"July 27, 2021",tags:[{label:"Practical Case",permalink:"/blog/tags/practical-case"}],readingTime:7.59,truncated:!0,authors:[{name:"Zhiyuan Ju",url:"https://github.com/juzhiyuan",imageURL:"https://avatars.githubusercontent.com/u/2106987?v=4"}],prevItem:{title:"Release Apache APISIX 2.8.0",permalink:"/blog/2021/07/28/release-apache-apisix-2.8"},nextItem:{title:"ApacheCon Asia 2021: Apache APISIX Technical Topics",permalink:"/blog/2021/07/25/apachecon-asia"}},p={authorsImageUrls:[void 0]},l=[],s={toc:l};function h(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Read this article to learn about Apache APISIX and basic usage scenarios, and how Apache APISIX integrates "drag and drop" plugin orchestration capabilities in a low-code trend.')))}h.isMDXComponent=!0}}]);