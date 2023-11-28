"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[9443],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4682:function(e,t,n){n.d(t,{ZP:function(){return r}});var a=n(3117),i=(n(7294),n(3905));const o={toc:[{value:"Callbacks common to all continuous gestures:",id:"callbacks-common-to-all-continuous-gestures",level:3},{value:"<code>onUpdate(callback)</code>",id:"onupdatecallback",level:3},{value:"<code>onChange(callback)</code>",id:"onchangecallback",level:3}]};function r(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"callbacks-common-to-all-continuous-gestures"},"Callbacks common to all continuous gestures:"),(0,i.kt)("h3",{id:"onupdatecallback"},(0,i.kt)("inlineCode",{parentName:"h3"},"onUpdate(callback)")),(0,i.kt)("p",null,"Set the callback that is being called every time the gesture receives an update while it's active."),(0,i.kt)("h3",{id:"onchangecallback"},(0,i.kt)("inlineCode",{parentName:"h3"},"onChange(callback)")),(0,i.kt)("p",null,"Set the callback that is being called every time the gesture receives an update while it's active. This callback will receive information about change in value in relation to the last received event."))}r.isMDXComponent=!0},6689:function(e,t,n){n.d(t,{ZP:function(){return r}});var a=n(3117),i=(n(7294),n(3905));const o={toc:[{value:"Properties common to all continuous gestures:",id:"properties-common-to-all-continuous-gestures",level:3},{value:"<code>manualActivation(value: boolead)</code>",id:"manualactivationvalue-boolead",level:3}]};function r(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"properties-common-to-all-continuous-gestures"},"Properties common to all continuous gestures:"),(0,i.kt)("h3",{id:"manualactivationvalue-boolead"},(0,i.kt)("inlineCode",{parentName:"h3"},"manualActivation(value: boolead)")),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," the handler will not activate by itself even if its activation criteria are met. Instead you can manipulate its state using ",(0,i.kt)("a",{parentName:"p",href:"/docs/gestures/state-manager/"},"state manager"),"."))}r.isMDXComponent=!0},1675:function(e,t,n){n.d(t,{ZP:function(){return r}});var a=n(3117),i=(n(7294),n(3905));const o={toc:[{value:"Callbacks common to all gestures:",id:"callbacks-common-to-all-gestures",level:3},{value:"<code>onBegin(callback)</code>",id:"onbegincallback",level:3},{value:"<code>onStart(callback)</code>",id:"onstartcallback",level:3},{value:"<code>onEnd(callback)</code>",id:"onendcallback",level:3},{value:"<code>onFinalize(callback)</code>",id:"onfinalizecallback",level:3},{value:"<code>onTouchesDown(callback)</code>",id:"ontouchesdowncallback",level:3},{value:"<code>onTouchesMove(callback)</code>",id:"ontouchesmovecallback",level:3},{value:"<code>onTouchesUp(callback)</code>",id:"ontouchesupcallback",level:3},{value:"<code>onTouchesCancelled(callback)</code>",id:"ontouchescancelledcallback",level:3}]};function r(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"callbacks-common-to-all-gestures"},"Callbacks common to all gestures:"),(0,i.kt)("h3",{id:"onbegincallback"},(0,i.kt)("inlineCode",{parentName:"h3"},"onBegin(callback)")),(0,i.kt)("p",null,"Set the callback that is being called when given gesture handler starts receiving touches. At the moment of this callback the handler is not yet in an active state and we don't know yet if it will recognize the gesture at all."),(0,i.kt)("h3",{id:"onstartcallback"},(0,i.kt)("inlineCode",{parentName:"h3"},"onStart(callback)")),(0,i.kt)("p",null,"Set the callback that is being called when the gesture is recognized by the handler and it transitions to the active state."),(0,i.kt)("h3",{id:"onendcallback"},(0,i.kt)("inlineCode",{parentName:"h3"},"onEnd(callback)")),(0,i.kt)("p",null,"Set the callback that is being called when the gesture that was recognized by the handler finishes. It will be called only if the handler was previously in the active state."),(0,i.kt)("h3",{id:"onfinalizecallback"},(0,i.kt)("inlineCode",{parentName:"h3"},"onFinalize(callback)")),(0,i.kt)("p",null,"Set the callback that is being called when the handler finalizes handling gesture - the gesture was recognized and has finished or it failed to recognize."),(0,i.kt)("h3",{id:"ontouchesdowncallback"},(0,i.kt)("inlineCode",{parentName:"h3"},"onTouchesDown(callback)")),(0,i.kt)("p",null,"Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"onTouchesDown")," callback which is called every time a finger is placed on the screen."),(0,i.kt)("h3",{id:"ontouchesmovecallback"},(0,i.kt)("inlineCode",{parentName:"h3"},"onTouchesMove(callback)")),(0,i.kt)("p",null,"Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"onTouchesMove")," callback which is called every time a finger is moved on the screen."),(0,i.kt)("h3",{id:"ontouchesupcallback"},(0,i.kt)("inlineCode",{parentName:"h3"},"onTouchesUp(callback)")),(0,i.kt)("p",null,"Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"onTouchesUp")," callback which is called every time a finger is lifted from the screen."),(0,i.kt)("h3",{id:"ontouchescancelledcallback"},(0,i.kt)("inlineCode",{parentName:"h3"},"onTouchesCancelled(callback)")),(0,i.kt)("p",null,"Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"onTouchesCancelled")," callback which is called every time a finger stops being tracked, for example when the gesture finishes."))}r.isMDXComponent=!0},7516:function(e,t,n){n.d(t,{ZP:function(){return r}});var a=n(3117),i=(n(7294),n(3905));const o={toc:[{value:"Properties common to all gestures:",id:"properties-common-to-all-gestures",level:3},{value:"<code>enabled(value: boolean)</code>",id:"enabledvalue-boolean",level:3},{value:"<code>shouldCancelWhenOutside(value: boolean)</code>",id:"shouldcancelwhenoutsidevalue-boolean",level:3},{value:"<code>hitSlop(settings)</code>",id:"hitslopsettings",level:3},{value:"<code>withRef(ref)</code>",id:"withrefref",level:3},{value:"<code>withTestId(testID)</code>",id:"withtestidtestid",level:3},{value:"<code>cancelsTouchesInView(value)</code> (<strong>iOS only</strong>)",id:"cancelstouchesinviewvalue-ios-only",level:3},{value:"<code>runOnJS(value: boolean)</code>",id:"runonjsvalue-boolean",level:3},{value:"<code>simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)</code>",id:"simultaneouswithexternalgestureothergesture1-othergesture2-",level:3},{value:"<code>requireExternalGestureToFail(otherGesture1, otherGesture2, ...)</code>",id:"requireexternalgesturetofailothergesture1-othergesture2-",level:3},{value:"<code>blocksExternalGesture(otherGesture1, otherGesture2, ...)</code>",id:"blocksexternalgestureothergesture1-othergesture2-",level:3},{value:"<code>activeCursor(value)</code> (<strong>web only</strong>)",id:"activecursorvalue-web-only",level:3}]};function r(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"properties-common-to-all-gestures"},"Properties common to all gestures:"),(0,i.kt)("h3",{id:"enabledvalue-boolean"},(0,i.kt)("inlineCode",{parentName:"h3"},"enabled(value: boolean)")),(0,i.kt)("p",null,"Indicates whether the given handler should be analyzing stream of touch events or not.\nWhen set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," we can be sure that the handler's state will ",(0,i.kt)("strong",{parentName:"p"},"never")," become ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/states-events#active"},(0,i.kt)("inlineCode",{parentName:"a"},"ACTIVE")),".\nIf the value gets updated while the handler already started recognizing a gesture, then the handler's state it will immediately change to ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/states-events#failed"},(0,i.kt)("inlineCode",{parentName:"a"},"FAILED"))," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/states-events#cancelled"},(0,i.kt)("inlineCode",{parentName:"a"},"CANCELLED"))," (depending on its current state).\nDefault value is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("h3",{id:"shouldcancelwhenoutsidevalue-boolean"},(0,i.kt)("inlineCode",{parentName:"h3"},"shouldCancelWhenOutside(value: boolean)")),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," the handler will ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/states-events#cancelled"},"cancel")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/states-events#failed"},"fail")," recognition (depending on its current state) whenever the finger leaves the area of the connected view.\nDefault value of this property is different depending on the handler type.\nMost handlers' ",(0,i.kt)("inlineCode",{parentName:"p"},"shouldCancelWhenOutside")," property defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," except for the ",(0,i.kt)("a",{parentName:"p",href:"/docs/gestures/long-press-gesture"},(0,i.kt)("inlineCode",{parentName:"a"},"LongPressGesture"))," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/gestures/tap-gesture"},(0,i.kt)("inlineCode",{parentName:"a"},"TapGesture"))," which default to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("h3",{id:"hitslopsettings"},(0,i.kt)("inlineCode",{parentName:"h3"},"hitSlop(settings)")),(0,i.kt)("p",null,"This parameter enables control over what part of the connected view area can be used to ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/states-events#began"},"begin")," recognizing the gesture.\nWhen a negative number is provided the bounds of the view will reduce the area by the given number of points in each of the sides evenly."),(0,i.kt)("p",null,"Instead you can pass an object to specify how each boundary side should be reduced by providing different number of points for ",(0,i.kt)("inlineCode",{parentName:"p"},"left"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"right"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"top")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"bottom")," sides.\nYou can alternatively provide ",(0,i.kt)("inlineCode",{parentName:"p"},"horizontal")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"vertical")," instead of specifying directly ",(0,i.kt)("inlineCode",{parentName:"p"},"left"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"right")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"top")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"bottom"),".\nFinally, the object can also take ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," attributes.\nWhen ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," is set it is only allow to specify one of the sides ",(0,i.kt)("inlineCode",{parentName:"p"},"right")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"left"),".\nSimilarly when ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," is provided only ",(0,i.kt)("inlineCode",{parentName:"p"},"top")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"bottom")," can be set.\nSpecifying ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," is useful if we only want the gesture to activate on the edge of the view. In which case for example we can set ",(0,i.kt)("inlineCode",{parentName:"p"},"left: 0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"width: 20")," which would make it possible for the gesture to be recognize when started no more than 20 points from the left edge."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT:")," Note that this parameter is primarily designed to reduce the area where gesture can activate. Hence it is only supported for all the values (except ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"height"),") to be non positive (0 or lower). Although on Android it is supported for the values to also be positive and therefore allow to expand beyond view bounds but not further than the parent view bounds. To achieve this effect on both platforms you can use React Native's View ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view.html#hitslop"},"hitSlop")," property."),(0,i.kt)("h3",{id:"withrefref"},(0,i.kt)("inlineCode",{parentName:"h3"},"withRef(ref)")),(0,i.kt)("p",null,"Sets a ref to the gesture object, allowing for interoperability with the old\nAPI."),(0,i.kt)("h3",{id:"withtestidtestid"},(0,i.kt)("inlineCode",{parentName:"h3"},"withTestId(testID)")),(0,i.kt)("p",null,"Sets a ",(0,i.kt)("inlineCode",{parentName:"p"},"testID")," property for gesture object, allowing for querying for it in tests."),(0,i.kt)("h3",{id:"cancelstouchesinviewvalue-ios-only"},(0,i.kt)("inlineCode",{parentName:"h3"},"cancelsTouchesInView(value)")," (",(0,i.kt)("strong",{parentName:"h3"},"iOS only"),")"),(0,i.kt)("p",null,"Accepts a boolean value.\nWhen ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the gesture will cancel touches for native UI components (",(0,i.kt)("inlineCode",{parentName:"p"},"UIButton"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"UISwitch"),", etc) it's attached to when it becomes ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/states-events#active"},(0,i.kt)("inlineCode",{parentName:"a"},"ACTIVE")),".\nDefault value is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("h3",{id:"runonjsvalue-boolean"},(0,i.kt)("inlineCode",{parentName:"h3"},"runOnJS(value: boolean)")),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," is installed, the callbacks passed to the gestures are automatically workletized and run on the UI thread when called. This option allows for changing this behavior: when ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", all the callbacks will be run on the JS thread instead of the UI thread, regardless of whether they are worklets or not.\nDefaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("h3",{id:"simultaneouswithexternalgestureothergesture1-othergesture2-"},(0,i.kt)("inlineCode",{parentName:"h3"},"simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)")),(0,i.kt)("p",null,"Adds a gesture that should be recognized simultaneously with this one."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/gesture-composition"},"composing them"),". ",(0,i.kt)("a",{parentName:"p",href:"/docs/gestures/gesture-detector"},(0,i.kt)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",(0,i.kt)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."),(0,i.kt)("h3",{id:"requireexternalgesturetofailothergesture1-othergesture2-"},(0,i.kt)("inlineCode",{parentName:"h3"},"requireExternalGestureToFail(otherGesture1, otherGesture2, ...)")),(0,i.kt)("p",null,"Adds a relation requiring another gesture to fail, before this one can activate."),(0,i.kt)("h3",{id:"blocksexternalgestureothergesture1-othergesture2-"},(0,i.kt)("inlineCode",{parentName:"h3"},"blocksExternalGesture(otherGesture1, otherGesture2, ...)")),(0,i.kt)("p",null,"Adds a relation that makes other gestures wait with activation until this gesture fails (or doesn't start at all)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/gesture-composition"},"composing them"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/gestures/gesture-detector"},(0,i.kt)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",(0,i.kt)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."),(0,i.kt)("h3",{id:"activecursorvalue-web-only"},(0,i.kt)("inlineCode",{parentName:"h3"},"activeCursor(value)")," (",(0,i.kt)("strong",{parentName:"h3"},"web only"),")"),(0,i.kt)("p",null,"This parameter allows to specify which cursor should be used when gesture activates. Supports all CSS cursor values (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},'"grab"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"zoom-in"'),"). Default value is set to ",(0,i.kt)("inlineCode",{parentName:"p"},'"auto"'),"."))}r.isMDXComponent=!0},825:function(e,t,n){n.d(t,{ZP:function(){return r}});var a=n(3117),i=(n(7294),n(3905));const o={toc:[{value:"Event attributes common to all gestures:",id:"event-attributes-common-to-all-gestures",level:3},{value:"<code>state</code>",id:"state",level:3},{value:"<code>numberOfPointers</code>",id:"numberofpointers",level:3}]};function r(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"event-attributes-common-to-all-gestures"},"Event attributes common to all gestures:"),(0,i.kt)("h3",{id:"state"},(0,i.kt)("inlineCode",{parentName:"h3"},"state")),(0,i.kt)("p",null,"Current ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/states-events"},"state")," of the handler. Expressed as one of the constants exported under ",(0,i.kt)("inlineCode",{parentName:"p"},"State")," object by the library."),(0,i.kt)("h3",{id:"numberofpointers"},(0,i.kt)("inlineCode",{parentName:"h3"},"numberOfPointers")),(0,i.kt)("p",null,"Represents the number of pointers (fingers) currently placed on the screen."))}r.isMDXComponent=!0},8850:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return c},metadata:function(){return h},toc:function(){return f}});var a=n(3117),i=(n(7294),n(3905)),o=n(4996),r=n(825),l=n(7516),s=n(6689),u=n(1675),d=n(4682);const c={id:"pan-gesture",title:"Pan gesture",sidebar_label:"Pan gesture",sidebar_position:3},p=void 0,h={unversionedId:"gestures/pan-gesture",id:"gestures/pan-gesture",title:"Pan gesture",description:"A continuous gesture that can recognize a panning (dragging) gesture and track its movement.",source:"@site/docs/gestures/pan-gesture.md",sourceDirName:"gestures",slug:"/gestures/pan-gesture",permalink:"/react-native-gesture-handler/docs/gestures/pan-gesture",draft:!1,editUrl:"https://github.com/software-mansion/react-native-gesture-handler/edit/main/docs/docs/gestures/pan-gesture.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"pan-gesture",title:"Pan gesture",sidebar_label:"Pan gesture",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Gesture",permalink:"/react-native-gesture-handler/docs/gestures/gesture"},next:{title:"Tap gesture",permalink:"/react-native-gesture-handler/docs/gestures/tap-gesture"}},m={},f=[{value:"Reference",id:"reference",level:2},{value:"Multi touch pan handling",id:"multi-touch-pan-handling",level:2},{value:"Config",id:"config",level:2},{value:"Properties specific to <code>PanGesture</code>:",id:"properties-specific-to-pangesture",level:3},{value:"<code>minDistance(value: number)</code>",id:"mindistancevalue-number",level:3},{value:"<code>minPointers(value: number)</code>",id:"minpointersvalue-number",level:3},{value:"<code>maxPointers(value: number)</code>",id:"maxpointersvalue-number",level:3},{value:"<code>activateAfterLongPress(duration: number)</code>",id:"activateafterlongpressduration-number",level:3},{value:"<code>activeOffsetX(value: number | number[])</code>",id:"activeoffsetxvalue-number--number",level:3},{value:"<code>activeOffsetY(value: number | number[])</code>",id:"activeoffsetyvalue-number--number",level:3},{value:"<code>failOffsetY(value: number | number[])</code>",id:"failoffsetyvalue-number--number",level:3},{value:"<code>failOffsetX(value: number | number[])</code>",id:"failoffsetxvalue-number--number",level:3},{value:"<code>averageTouches(value: boolean)</code> (Android only)",id:"averagetouchesvalue-boolean-android-only",level:3},{value:"<code>enableTrackpadTwoFingerGesture(value: boolean)</code> (iOS only)",id:"enabletrackpadtwofingergesturevalue-boolean-ios-only",level:3},{value:"Callbacks",id:"callbacks",level:2},{value:"Event data",id:"event-data",level:2},{value:"Event attributes specific to <code>PanGesture</code>:",id:"event-attributes-specific-to-pangesture",level:3},{value:"<code>translationX</code>",id:"translationx",level:3},{value:"<code>translationY</code>",id:"translationy",level:3},{value:"<code>velocityX</code>",id:"velocityx",level:3},{value:"<code>velocityY</code>",id:"velocityy",level:3},{value:"<code>x</code>",id:"x",level:3},{value:"<code>y</code>",id:"y",level:3},{value:"<code>absoluteX</code>",id:"absolutex",level:3},{value:"<code>absoluteY</code>",id:"absolutey",level:3},{value:"Example",id:"example",level:2}],v={toc:f};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{style:{display:"flex",margin:"16px 0",justifyContent:"center"}},(0,i.kt)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,style:{maxWidth:360}},(0,i.kt)("source",{src:(0,o.Z)("/video/pan.mp4"),type:"video/mp4"}))),(0,i.kt)("p",null,"A continuous gesture that can recognize a panning (dragging) gesture and track its movement."),(0,i.kt)("p",null,"The gesture ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/states-events#active"},"activates")," when a finger is placed on the screen and moved some initial distance."),(0,i.kt)("p",null,"Configurations such as a minimum initial distance, specific vertical or horizontal pan detection and ",(0,i.kt)("a",{parentName:"p",href:"/docs/gestures/pan-gesture#minpointersvalue-number"},"number of fingers")," required for activation (allowing for multifinger swipes) may be specified."),(0,i.kt)("p",null,"Gesture callback can be used for continuous tracking of the pan gesture. It provides information about the gesture such as its XY translation from the starting point as well as its instantaneous velocity."),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { GestureDetector, Gesture } from 'react-native-gesture-handler';\n\nfunction App() {\n  // highlight-next-line\n  const pan = Gesture.Pan();\n\n  return (\n    <GestureDetector gesture={pan}>\n      <Animated.View />\n    </GestureDetector>\n  );\n}\n")),(0,i.kt)("h2",{id:"multi-touch-pan-handling"},"Multi touch pan handling"),(0,i.kt)("p",null,"If your app relies on multi touch pan handling this section provides some information how the default behavior differs between the platform and how (if necessary) it can be unified."),(0,i.kt)("p",null,"The difference in multi touch pan handling lies in the way how translation properties during the event are being calculated.\nOn iOS the default behavior when more than one finger is placed on the screen is to treat this situation as if only one pointer was placed in the center of mass (average position of all the pointers).\nThis applies also to many platform native components that handle touch even if not primarily interested in multi touch interactions like for example UIScrollView component."),(0,i.kt)("p",null,"On Android, the default behavior for native components like scroll view, pager views or drawers is different and hence gesture defaults to that when it comes to pan handling.\nThe difference is that instead of treating the center of mass of all the fingers placed as a leading pointer it takes the latest placed finger as such.\nThis behavior can be changed on Android using ",(0,i.kt)("a",{parentName:"p",href:"#averagetouchesvalue-boolean-android-only"},(0,i.kt)("inlineCode",{parentName:"a"},"averageTouches"))," flag."),(0,i.kt)("p",null,'Note that on both Android and iOS when the additional finger is placed on the screen that translation prop is not affected even though the position of the pointer being tracked might have changed.\nTherefore it is safe to rely on translation most of the time as it only reflects the movement that happens regardless of how many fingers are placed on the screen and if that number changes over time.\nIf you wish to track the "center of mass" virtual pointer and account for its changes when the number of finger changes you can use relative or absolute position provided in the event (',(0,i.kt)("a",{parentName:"p",href:"#x"},(0,i.kt)("inlineCode",{parentName:"a"},"x"))," and ",(0,i.kt)("a",{parentName:"p",href:"#y"},(0,i.kt)("inlineCode",{parentName:"a"},"y"))," or ",(0,i.kt)("a",{parentName:"p",href:"#absolutex"},(0,i.kt)("inlineCode",{parentName:"a"},"absoluteX"))," and ",(0,i.kt)("a",{parentName:"p",href:"#absolutey"},(0,i.kt)("inlineCode",{parentName:"a"},"absoluteY")),")."),(0,i.kt)("h2",{id:"config"},"Config"),(0,i.kt)("h3",{id:"properties-specific-to-pangesture"},"Properties specific to ",(0,i.kt)("inlineCode",{parentName:"h3"},"PanGesture"),":"),(0,i.kt)("h3",{id:"mindistancevalue-number"},(0,i.kt)("inlineCode",{parentName:"h3"},"minDistance(value: number)")),(0,i.kt)("p",null,"Minimum distance the finger (or multiple finger) need to travel before the gesture ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/states-events#active"},"activates"),". Expressed in points."),(0,i.kt)("h3",{id:"minpointersvalue-number"},(0,i.kt)("inlineCode",{parentName:"h3"},"minPointers(value: number)")),(0,i.kt)("p",null,"A number of fingers that is required to be placed before gesture can ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/states-events#active"},"activate"),". Should be a higher or equal to 0 integer."),(0,i.kt)("h3",{id:"maxpointersvalue-number"},(0,i.kt)("inlineCode",{parentName:"h3"},"maxPointers(value: number)")),(0,i.kt)("p",null,"When the given number of fingers is placed on the screen and gesture hasn't yet ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/states-events#active"},"activated")," it will fail recognizing the gesture. Should be a higher or equal to 0 integer."),(0,i.kt)("h3",{id:"activateafterlongpressduration-number"},(0,i.kt)("inlineCode",{parentName:"h3"},"activateAfterLongPress(duration: number)")),(0,i.kt)("p",null,"Duration in milliseconds of the ",(0,i.kt)("inlineCode",{parentName:"p"},"LongPress")," gesture before ",(0,i.kt)("inlineCode",{parentName:"p"},"Pan")," is allowed to ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/states-events#active"},"activate"),". If the finger is moved during that period, the gesture will ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/states-events#failed"},"fail"),". Should be a higher or equal to 0 integer. Default value is 0, meaning no ",(0,i.kt)("inlineCode",{parentName:"p"},"LongPress")," is required to ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/states-events#active"},"activate")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"Pan"),"."),(0,i.kt)("h3",{id:"activeoffsetxvalue-number--number"},(0,i.kt)("inlineCode",{parentName:"h3"},"activeOffsetX(value: number | number[])")),(0,i.kt)("p",null,"Range along X axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number.\nIf range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0.\nIf only one number ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," is given a range of ",(0,i.kt)("inlineCode",{parentName:"p"},"(-inf, p)")," will be used if ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," is higher or equal to 0 and ",(0,i.kt)("inlineCode",{parentName:"p"},"(-p, inf)")," otherwise."),(0,i.kt)("h3",{id:"activeoffsetyvalue-number--number"},(0,i.kt)("inlineCode",{parentName:"h3"},"activeOffsetY(value: number | number[])")),(0,i.kt)("p",null,"Range along Y axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number.\nIf range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0.\nIf only one number ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," is given a range of ",(0,i.kt)("inlineCode",{parentName:"p"},"(-inf, p)")," will be used if ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," is higher or equal to 0 and ",(0,i.kt)("inlineCode",{parentName:"p"},"(-p, inf)")," otherwise."),(0,i.kt)("h3",{id:"failoffsetyvalue-number--number"},(0,i.kt)("inlineCode",{parentName:"h3"},"failOffsetY(value: number | number[])")),(0,i.kt)("p",null,"When the finger moves outside this range (in points) along Y axis and gesture hasn't yet activated it will fail recognizing the gesture. Range can be given as an array or a single number.\nIf range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0.\nIf only one number ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," is given a range of ",(0,i.kt)("inlineCode",{parentName:"p"},"(-inf, p)")," will be used if ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," is higher or equal to 0 and ",(0,i.kt)("inlineCode",{parentName:"p"},"(-p, inf)")," otherwise."),(0,i.kt)("h3",{id:"failoffsetxvalue-number--number"},(0,i.kt)("inlineCode",{parentName:"h3"},"failOffsetX(value: number | number[])")),(0,i.kt)("p",null,"When the finger moves outside this range (in points) along X axis and gesture hasn't yet activated it will fail recognizing the gesture. Range can be given as an array or a single number.\nIf range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0.\nIf only one number ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," is given a range of ",(0,i.kt)("inlineCode",{parentName:"p"},"(-inf, p)")," will be used if ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," is higher or equal to 0 and ",(0,i.kt)("inlineCode",{parentName:"p"},"(-p, inf)")," otherwise."),(0,i.kt)("h3",{id:"averagetouchesvalue-boolean-android-only"},(0,i.kt)("inlineCode",{parentName:"h3"},"averageTouches(value: boolean)")," (Android only)"),(0,i.kt)("p",null,"Android, by default, will calculate translation values based on the position of the leading pointer (the first one that was placed on the screen). This modifier allows that behavior to be changed to the one that is default on iOS - the averaged position of all active pointers will be used to calculate the translation values."),(0,i.kt)("h3",{id:"enabletrackpadtwofingergesturevalue-boolean-ios-only"},(0,i.kt)("inlineCode",{parentName:"h3"},"enableTrackpadTwoFingerGesture(value: boolean)")," (iOS only)"),(0,i.kt)("p",null,"Enables two-finger gestures on supported devices, for example iPads with trackpads. If not enabled the gesture will require click + drag, with enableTrackpadTwoFingerGesture swiping with two fingers will also trigger the gesture."),(0,i.kt)(l.ZP,{mdxType:"BaseEventConfig"}),(0,i.kt)(s.ZP,{mdxType:"BaseContinousEventConfig"}),(0,i.kt)("h2",{id:"callbacks"},"Callbacks"),(0,i.kt)(u.ZP,{mdxType:"BaseEventCallbacks"}),(0,i.kt)(d.ZP,{mdxType:"BaseContinousEventCallbacks"}),(0,i.kt)("h2",{id:"event-data"},"Event data"),(0,i.kt)("h3",{id:"event-attributes-specific-to-pangesture"},"Event attributes specific to ",(0,i.kt)("inlineCode",{parentName:"h3"},"PanGesture"),":"),(0,i.kt)("h3",{id:"translationx"},(0,i.kt)("inlineCode",{parentName:"h3"},"translationX")),(0,i.kt)("p",null,"Translation of the pan gesture along X axis accumulated over the time of the gesture. The value is expressed in the point units."),(0,i.kt)("h3",{id:"translationy"},(0,i.kt)("inlineCode",{parentName:"h3"},"translationY")),(0,i.kt)("p",null,"Translation of the pan gesture along Y axis accumulated over the time of the gesture. The value is expressed in the point units."),(0,i.kt)("h3",{id:"velocityx"},(0,i.kt)("inlineCode",{parentName:"h3"},"velocityX")),(0,i.kt)("p",null,"Velocity of the pan gesture along the X axis in the current moment. The value is expressed in point units per second."),(0,i.kt)("h3",{id:"velocityy"},(0,i.kt)("inlineCode",{parentName:"h3"},"velocityY")),(0,i.kt)("p",null,"Velocity of the pan gesture along the Y axis in the current moment. The value is expressed in point units per second."),(0,i.kt)("h3",{id:"x"},(0,i.kt)("inlineCode",{parentName:"h3"},"x")),(0,i.kt)("p",null,"X coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/gestures/gesture-detector"},(0,i.kt)("inlineCode",{parentName:"a"},"GestureDetector")),". Expressed in point units."),(0,i.kt)("h3",{id:"y"},(0,i.kt)("inlineCode",{parentName:"h3"},"y")),(0,i.kt)("p",null,"Y coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/gestures/gesture-detector"},(0,i.kt)("inlineCode",{parentName:"a"},"GestureDetector")),". Expressed in point units."),(0,i.kt)("h3",{id:"absolutex"},(0,i.kt)("inlineCode",{parentName:"h3"},"absoluteX")),(0,i.kt)("p",null,"X coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the window. The value is expressed in point units. It is recommended to use it instead of ",(0,i.kt)("a",{parentName:"p",href:"#x"},(0,i.kt)("inlineCode",{parentName:"a"},"x"))," in cases when the original view can be transformed as an effect of the gesture."),(0,i.kt)("h3",{id:"absolutey"},(0,i.kt)("inlineCode",{parentName:"h3"},"absoluteY")),(0,i.kt)("p",null,"Y coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the window. The value is expressed in point units. It is recommended to use it instead of ",(0,i.kt)("a",{parentName:"p",href:"#y"},(0,i.kt)("inlineCode",{parentName:"a"},"y"))," in cases when the original view can be transformed as an effect of the gesture."),(0,i.kt)(r.ZP,{mdxType:"BaseEventData"}),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet } from 'react-native';\nimport { Gesture, GestureDetector } from 'react-native-gesture-handler';\nimport Animated, {\n  useSharedValue,\n  withTiming,\n  useAnimatedStyle,\n} from 'react-native-reanimated';\n\nconst END_POSITION = 200;\n\nexport default function App() {\n  const onLeft = useSharedValue(true);\n  const position = useSharedValue(0);\n\n  // highlight-next-line\n  const panGesture = Gesture.Pan()\n    .onUpdate((e) => {\n      if (onLeft.value) {\n        position.value = e.translationX;\n      } else {\n        position.value = END_POSITION + e.translationX;\n      }\n    })\n    .onEnd((e) => {\n      if (position.value > END_POSITION / 2) {\n        position.value = withTiming(END_POSITION, { duration: 100 });\n        onLeft.value = false;\n      } else {\n        position.value = withTiming(0, { duration: 100 });\n        onLeft.value = true;\n      }\n    });\n\n  const animatedStyle = useAnimatedStyle(() => ({\n    transform: [{ translateX: position.value }],\n  }));\n\n  return (\n    // highlight-next-line\n    <GestureDetector gesture={panGesture}>\n      <Animated.View style={[styles.box, animatedStyle]} />\n    </GestureDetector>\n  );\n}\n\nconst styles = StyleSheet.create({\n  box: {\n    height: 120,\n    width: 120,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n    marginBottom: 30,\n  },\n});\n")))}g.isMDXComponent=!0}}]);