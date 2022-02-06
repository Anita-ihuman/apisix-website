"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32540],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53239:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i={title:"DNS"},s=void 0,c={unversionedId:"dns",id:"version-2.6/dns",isDocsHomePage:!1,title:"DNS",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.6/dns.md",sourceDirName:".",slug:"/dns",permalink:"/docs/apisix/2.6/dns",editUrl:"https://github.com/apache/apisix/edit/release/2.6/docs/en/latest/dns.md",tags:[],version:"2.6",frontMatter:{title:"DNS"}},l=[{value:"service discovery via DNS",id:"service-discovery-via-dns",children:[{value:"SRV record",id:"srv-record",children:[]}]}],p={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#service-discovery-via-dns"},"service discovery via DNS"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#src-record"},"SRV record"))))),(0,a.kt)("h2",{id:"service-discovery-via-dns"},"service discovery via DNS"),(0,a.kt)("p",null,"Some service discovery system, like Consul, support exposing service information\nvia DNS. Therefore we can use this way to discover service directly."),(0,a.kt)("p",null,"First of all, we need to configure the address of DNS servers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# add this to config.yaml\ndiscovery:\n   dns:\n     servers:\n       - "127.0.0.1:8600"          # use the real address of your dns server\n')),(0,a.kt)("p",null,"Unlike configurating domain in the Upstream's ",(0,a.kt)("inlineCode",{parentName:"p"},"nodes")," field, service discovery via\nDNS will return all records. For example, with upstream configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "discovery_type": "dns",\n    "service_name": "test.consul.service",\n    "type": "roundrobin"\n}\n')),(0,a.kt)("p",null,"and ",(0,a.kt)("inlineCode",{parentName:"p"},"test.consul.service")," be resolved as ",(0,a.kt)("inlineCode",{parentName:"p"},"1.1.1.1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"1.1.1.2"),", this result will be the same as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "type": "roundrobin",\n    "nodes": [\n        {"host": "1.1.1.1", "weight": 1},\n        {"host": "1.1.1.2", "weight": 1}\n    ]\n}\n')),(0,a.kt)("p",null,"Note that all the IPs from ",(0,a.kt)("inlineCode",{parentName:"p"},"test.consul.service")," share the same weight."),(0,a.kt)("p",null,"If a service has both A and AAAA records, A record is preferred."),(0,a.kt)("p",null,"If you want to specify the port for the upstream server, you can add it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"service_name"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "discovery_type": "dns",\n    "service_name": "test.consul.service:1980",\n    "type": "roundrobin"\n}\n')),(0,a.kt)("p",null,"Another way to do it is via the SRV record, see below."),(0,a.kt)("h3",{id:"srv-record"},"SRV record"),(0,a.kt)("p",null,"By using SRV record you can specify the port and the weight of a service."),(0,a.kt)("p",null,"Assumed you have the SRV record like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"; under the section of blah.service\nA       300 IN      A     1.1.1.1\nB       300 IN      A     1.1.1.2\nB       300 IN      A     1.1.1.3\nsrv   86400 IN    SRV 10       60     1980 A\nsrv   86400 IN    SRV 10       20     1981 B\n")),(0,a.kt)("p",null,"Upstream configuration like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "discovery_type": "dns",\n    "service_name": "srv.blah.service",\n    "type": "roundrobin"\n}\n')),(0,a.kt)("p",null,"is the same as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "type": "roundrobin",\n    "nodes": [\n        {"host": "1.1.1.1", "port": 1980, "weight": 60},\n        {"host": "1.1.1.2", "port": 1981, "weight": 10},\n        {"host": "1.1.1.3", "port": 1981, "weight": 10}\n    ]\n}\n')),(0,a.kt)("p",null,"Note that two records of domain B split the weight evenly."),(0,a.kt)("p",null,"As for 0 weight SRV record, the ",(0,a.kt)("a",{parentName:"p",href:"https://www.ietf.org/rfc/rfc2782.txt"},"RFC 2782")," says:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Domain administrators SHOULD use Weight 0 when there isn't any server\nselection to do, to make the RR easier to read for humans (less\nnoisy).  In the presence of records containing weights greater\nthan 0, records with weight 0 should have a very small chance of\nbeing selected.")),(0,a.kt)("p",null,'We treat weight 0 record has a weight of 1 so the node "have a very small chance of\nbeing selected", which is also the common way to treat this type of record.'),(0,a.kt)("p",null,"TODO: support priority."))}u.isMDXComponent=!0}}]);