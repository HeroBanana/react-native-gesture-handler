"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[6503],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(r),d=o,m=h["".concat(u,".").concat(d)]||h[d]||c[d]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8935:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var n=r(3117),o=(r(7294),r(3905));const i={id:"troubleshooting",title:"Troubleshooting"},a=void 0,s={unversionedId:"troubleshooting",id:"version-1.x/troubleshooting",title:"Troubleshooting",description:"Troubleshooting",source:"@site/versioned_docs/version-1.x/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/react-native-gesture-handler/docs/1.x/troubleshooting",draft:!1,editUrl:"https://github.com/software-mansion/react-native-gesture-handler/edit/main/docs/versioned_docs/version-1.x/troubleshooting.md",tags:[],version:"1.x",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"version-1.x/docs",previous:{title:"Contributing",permalink:"/react-native-gesture-handler/docs/1.x/contributing"},next:{title:"Learning Resources",permalink:"/react-native-gesture-handler/docs/1.x/resources"}},u={},l=[{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Reporting issues",id:"reporting-issues",level:2}],p={toc:l};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"Thanks for giving this library a try! We are sorry that you might have encountered issues though. Here is how you can seek help:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Search over the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler/issues"},"issues on Github"),". There is a chance someone had this problem in the past and it has been resolved!")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When sure your problem hasn't been reported or was reported but the proposed solution doesn't work for you please follow ",(0,o.kt)("a",{parentName:"p",href:"#reporting-issues"},"our issue reporting guidelines"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can try seeking help on ",(0,o.kt)("a",{parentName:"p",href:"https://slack.expo.io/"},"Expo Developers Slack channel")," where we often hang out.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you feel like reading the source code I highly recommend it, as this is by far the best resource and gives you the most up to date insights into how the library works and what might be causing the bug.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you managed to find the solution consider ",(0,o.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/1.x/contributing"},"contributing")," a fix or update our documentation to make this information easier to find for the others in the future."))),(0,o.kt)("h2",{id:"reporting-issues"},"Reporting issues"),(0,o.kt)("p",null,"This library is maintained by a very small team.\nPlease be mindful of that when reporting issue and when it happens that we can't get back to you as soon as you might expect.\nWe would love to fix all the problems as soon as possible, but often our time is constraint with other issues/features or projects.\nTo make it easier for us to understand your issue and to be able to approach it sooner you can help by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Making sure the issue description is complete. Please include all the details about your environment (library version, RN version, device OS etc)."),(0,o.kt)("li",{parentName:"ul"},"It is the best to provide an example app that reproduces the issue you are having. Put it up on ",(0,o.kt)("a",{parentName:"li",href:"https://gist.github.com/"},"gist"),", ",(0,o.kt)("a",{parentName:"li",href:"https://snack.expo.io"},"snack")," or create a repo on Github \u2013\xa0it doesn't matter as long as we can easily pull it in, run and see the issue."),(0,o.kt)("li",{parentName:"ul"},"Explain how you run your repro app and what steps to take to reproduce the issue."),(0,o.kt)("li",{parentName:"ul"},"Isolate your issue from other dependencies you might be using and make the repro app as minimal as possible."),(0,o.kt)("li",{parentName:"ul"},"If you have spent some time figuring out the root cause of the problem you can leave a note about your findings so far."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Do not comment on closed issues"),". It is very unlikely that we are going to notice your comment in such a case. If the issue has been closed, but the proposed solution doesn't work for you, please open a new one providing all the information necessary and linking to the solution you have tried.")))}c.isMDXComponent=!0}}]);