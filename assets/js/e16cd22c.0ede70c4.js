"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[6120],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=o,f=h["".concat(u,".").concat(p)]||h[p]||d[p]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1388:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var r=n(3117),o=(n(7294),n(3905));const a={id:"touch-events",title:"Touch events",sidebar_label:"Touch events",sidebar_position:14},i=void 0,s={unversionedId:"gestures/touch-events",id:"gestures/touch-events",title:"Touch events",description:"Touch event attributes:",source:"@site/docs/gestures/touch-events.md",sourceDirName:"gestures",slug:"/gestures/touch-events",permalink:"/react-native-gesture-handler/docs/gestures/touch-events",draft:!1,editUrl:"https://github.com/software-mansion/react-native-gesture-handler/edit/main/docs/docs/gestures/touch-events.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{id:"touch-events",title:"Touch events",sidebar_label:"Touch events",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Composed gestures",permalink:"/react-native-gesture-handler/docs/gestures/composed-gestures"},next:{title:"Gesture state manager",permalink:"/react-native-gesture-handler/docs/gestures/state-manager"}},u={},c=[{value:"Touch event attributes:",id:"touch-event-attributes",level:3},{value:"<code>eventType</code>",id:"eventtype",level:3},{value:"<code>changedTouches</code>",id:"changedtouches",level:3},{value:"<code>allTouches</code>",id:"alltouches",level:3},{value:"<code>numberOfTouches</code>",id:"numberoftouches",level:3},{value:"PointerData attributes:",id:"pointerdata-attributes",level:3},{value:"<code>id</code>",id:"id",level:3},{value:"<code>x</code>",id:"x",level:3},{value:"<code>y</code>",id:"y",level:3},{value:"<code>absoluteX</code>",id:"absolutex",level:3},{value:"<code>absoluteY</code>",id:"absolutey",level:3}],l={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"touch-event-attributes"},"Touch event attributes:"),(0,o.kt)("h3",{id:"eventtype"},(0,o.kt)("inlineCode",{parentName:"h3"},"eventType")),(0,o.kt)("p",null,"Type of the current event - whether the finger was placed on the screen, moved, lifted or cancelled."),(0,o.kt)("h3",{id:"changedtouches"},(0,o.kt)("inlineCode",{parentName:"h3"},"changedTouches")),(0,o.kt)("p",null,"An array of objects where every object represents a single touch. Contains information only about the touches that were affected by the event i.e. those that were placed down, moved, lifted or cancelled."),(0,o.kt)("h3",{id:"alltouches"},(0,o.kt)("inlineCode",{parentName:"h3"},"allTouches")),(0,o.kt)("p",null,"An array of objects where every object represents a single touch. Contains information about all active touches."),(0,o.kt)("h3",{id:"numberoftouches"},(0,o.kt)("inlineCode",{parentName:"h3"},"numberOfTouches")),(0,o.kt)("p",null,"Number representing the count of currently active touches."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Don't rely on the order of items in the ",(0,o.kt)("inlineCode",{parentName:"p"},"touches")," as it may change during the gesture, instead use the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," attribute to track individual touches across events.")),(0,o.kt)("h3",{id:"pointerdata-attributes"},"PointerData attributes:"),(0,o.kt)("h3",{id:"id"},(0,o.kt)("inlineCode",{parentName:"h3"},"id")),(0,o.kt)("p",null,"A number representing id of the touch. It may be used to track the touch between events as the id will not change while it is being tracked."),(0,o.kt)("h3",{id:"x"},(0,o.kt)("inlineCode",{parentName:"h3"},"x")),(0,o.kt)("p",null,"X coordinate of the current position of the touch relative to the view attached to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/gestures/gesture-detector"},(0,o.kt)("inlineCode",{parentName:"a"},"GestureDetector")),". Expressed in point units."),(0,o.kt)("h3",{id:"y"},(0,o.kt)("inlineCode",{parentName:"h3"},"y")),(0,o.kt)("p",null,"Y coordinate of the current position of the touch relative to the view attached to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/gestures/gesture-detector"},(0,o.kt)("inlineCode",{parentName:"a"},"GestureDetector")),". Expressed in point units."),(0,o.kt)("h3",{id:"absolutex"},(0,o.kt)("inlineCode",{parentName:"h3"},"absoluteX")),(0,o.kt)("p",null,"X coordinate of the current position of the touch relative to the window. The value is expressed in point units. It is recommended to use it instead of ",(0,o.kt)("a",{parentName:"p",href:"#x"},(0,o.kt)("inlineCode",{parentName:"a"},"x"))," in cases when the original view can be transformed as an effect of the gesture."),(0,o.kt)("h3",{id:"absolutey"},(0,o.kt)("inlineCode",{parentName:"h3"},"absoluteY")),(0,o.kt)("p",null,"Y coordinate of the current position of the touch relative to the window. The value is expressed in point units. It is recommended to use it instead of ",(0,o.kt)("a",{parentName:"p",href:"#y"},(0,o.kt)("inlineCode",{parentName:"a"},"y"))," in cases when the original view can be transformed as an effect of the gesture."))}d.isMDXComponent=!0}}]);