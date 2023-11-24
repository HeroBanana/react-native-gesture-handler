"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[7344],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||i;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3946:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return d}});var a=n(3117),r=(n(7294),n(3905));const i={id:"about-handlers",title:"About Gesture Handlers",sidebar_label:"About Gesture Handlers",sidebar_position:1},s=void 0,o={unversionedId:"gesture-handlers/about-handlers",id:"gesture-handlers/about-handlers",title:"About Gesture Handlers",description:"Consider using the new gestures API instead. The old API is not actively supported and is not receiving the new features. Check out RNGH 2.0 section in Introduction for more information.",source:"@site/docs/gesture-handlers/about-handlers.md",sourceDirName:"gesture-handlers",slug:"/gesture-handlers/about-handlers",permalink:"/react-native-gesture-handler/docs/gesture-handlers/about-handlers",draft:!1,editUrl:"https://github.com/software-mansion/react-native-gesture-handler/edit/main/docs/docs/gesture-handlers/about-handlers.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"about-handlers",title:"About Gesture Handlers",sidebar_label:"About Gesture Handlers",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Gesture handlers (legacy)",permalink:"/react-native-gesture-handler/docs/category/gesture-handlers-legacy"},next:{title:"Cross handler interactions",permalink:"/react-native-gesture-handler/docs/gesture-handlers/interactions"}},l={},d=[{value:"Available gesture handlers",id:"available-gesture-handlers",level:3},{value:"Discrete vs continuous",id:"discrete-vs-continuous",level:3},{value:"Nesting handlers",id:"nesting-handlers",level:3},{value:"Using native components",id:"using-native-components",level:3},{value:"Events with <code>useNativeDriver</code>",id:"events-with-usenativedriver",level:3}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Consider using the new ",(0,r.kt)("a",{parentName:"p",href:"/docs/gestures/gesture"},"gestures API")," instead. The old API is not actively supported and is not receiving the new features. Check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/#rngh-20"},"RNGH 2.0 section in Introduction")," for more information.")),(0,r.kt)("p",null,"Gesture handlers are the core building blocks of this library.\nWe use this term to describe elements of the native touch system that the library allows us to instantiate and control from Javascript using ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-component.html"},"React's Component")," interface."),(0,r.kt)("p",null,"Each handler type is capable of recognizing one type of gesture (pan, pinch, etc.) and provides gesture-specific information via events (translation, scale, etc.)."),(0,r.kt)("p",null,"Handlers analyze touch stream synchronously in the UI thread. This allows for uninterrupted interactions even when the Javascript thread is blocked."),(0,r.kt)("p",null,"Each handler works as an isolated state machine. It takes touch stream as an input and based on it, it can flip between ",(0,r.kt)("a",{parentName:"p",href:"/docs/under-the-hood/state"},"states"),".\nWhen a gesture starts, based on the position where the finger was placed, a set of handlers that may be interested in recognizing the gesture is selected.\nAll the touch events (touch down, move, up, or when other fingers are placed or lifted) are delivered to all of the handlers selected initially.\nWhen one gesture becomes ",(0,r.kt)("a",{parentName:"p",href:"/docs/under-the-hood/state#active"},"active"),", it cancels all the other gestures (read more about how to influence this process in ",(0,r.kt)("a",{parentName:"p",href:"/docs/gesture-handlers/interactions"},'"Cross handler interactions"')," section)."),(0,r.kt)("p",null,"Gesture handler components do not instantiate a native view in the view hierarchy. Instead, they are kept in library's own registry and are only connected to native views. When using any of the gesture handler components, it is important for it to have a native view rendered as a child.\nSince handler components don't have corresponding views in the hierarchy, the events registered with them are actually hooked into the underlying view."),(0,r.kt)("h3",{id:"available-gesture-handlers"},"Available gesture handlers"),(0,r.kt)("p",null,"Currently, the library provides the following list of gestures. Their parameters and attributes they provide to gesture events are documented under each gesture page:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/gesture-handlers/pan-gh"},(0,r.kt)("inlineCode",{parentName:"a"},"PanGestureHandler"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/gesture-handlers/tap-gh"},(0,r.kt)("inlineCode",{parentName:"a"},"TapGestureHandler"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/gesture-handlers/longpress-gh"},(0,r.kt)("inlineCode",{parentName:"a"},"LongPressGestureHandler"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/gesture-handlers/rotation-gh"},(0,r.kt)("inlineCode",{parentName:"a"},"RotationGestureHandler"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/gesture-handlers/fling-gh"},(0,r.kt)("inlineCode",{parentName:"a"},"FlingGestureHandler"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/gesture-handlers/pinch-gh"},(0,r.kt)("inlineCode",{parentName:"a"},"PinchGestureHandler"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/gesture-handlers/force-gh"},(0,r.kt)("inlineCode",{parentName:"a"},"ForceTouchGestureHandler")))),(0,r.kt)("h3",{id:"discrete-vs-continuous"},"Discrete vs continuous"),(0,r.kt)("p",null,"We distinguish between two types of gestures: discrete and continuous."),(0,r.kt)("p",null,"Continuous gesture handlers can be ",(0,r.kt)("a",{parentName:"p",href:"/docs/under-the-hood/state#active"},"active")," for a long period of time and will generate a stream of ",(0,r.kt)("a",{parentName:"p",href:"/docs/gesture-handlers/common-gh#ongestureevent"},"gesture events")," until the gesture is ",(0,r.kt)("a",{parentName:"p",href:"/docs/under-the-hood/state#ended"},"over"),".\nAn example of a continuous handler is ",(0,r.kt)("a",{parentName:"p",href:"/docs/gesture-handlers/pan-gh"},(0,r.kt)("inlineCode",{parentName:"a"},"PanGestureHandler"))," that once ",(0,r.kt)("a",{parentName:"p",href:"/docs/under-the-hood/state#active"},"activated"),", will start providing updates about ",(0,r.kt)("a",{parentName:"p",href:"/docs/gesture-handlers/pan-gh#translationx"},"translation")," and other properties."),(0,r.kt)("p",null,"On the other hand, discrete gesture handlers once ",(0,r.kt)("a",{parentName:"p",href:"/docs/under-the-hood/state#active"},"activated")," will not stay in the active state but will ",(0,r.kt)("a",{parentName:"p",href:"/docs/under-the-hood/state#ended"},"end")," immediately.\n",(0,r.kt)("a",{parentName:"p",href:"/docs/gesture-handlers/longpress-gh"},(0,r.kt)("inlineCode",{parentName:"a"},"LongPressGestureHandler"))," is a discrete handler, as it only detects if the finger is placed for a sufficiently long period of time, it does not track finger movements (as that's the responsibility of ",(0,r.kt)("a",{parentName:"p",href:"/docs/gesture-handlers/pan-gh"},(0,r.kt)("inlineCode",{parentName:"a"},"PanGestureHandler")),")."),(0,r.kt)("p",null,"Keep in mind that ",(0,r.kt)("inlineCode",{parentName:"p"},"onGestureEvent")," is only generated in continuous gesture handlers and shouldn't be used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"TapGestureHandler")," and other discrete handlers."),(0,r.kt)("h3",{id:"nesting-handlers"},"Nesting handlers"),(0,r.kt)("p",null,"Handler components can be nested. In any case it is recommended that the innermost handler renders a native view component. There are some limitations that apply when ",(0,r.kt)("a",{parentName:"p",href:"#events-with-usenativedriver"},"using ",(0,r.kt)("inlineCode",{parentName:"a"},"useNativeDriver")," flag"),". An example of nested handlers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class Multitap extends Component {\n  render() {\n    return (\n      <LongPressGestureHandler\n        onHandlerStateChange={this._onLongpress}\n        minDurationMs={800}>\n        <TapGestureHandler\n          onHandlerStateChange={this._onSingleTap}\n          waitFor={this.doubleTapRef}>\n          <TapGestureHandler\n            ref={this.doubleTapRef}\n            onHandlerStateChange={this._onDoubleTap}\n            numberOfTaps={2}>\n            <View style={styles.box} />\n          </TapGestureHandler>\n        </TapGestureHandler>\n      </LongPressGestureHandler>\n    );\n  }\n}\n")),(0,r.kt)("h3",{id:"using-native-components"},"Using native components"),(0,r.kt)("p",null,"Gesture handler library exposes a set of components normally available in React Native that are wrapped in ",(0,r.kt)("a",{parentName:"p",href:"/docs/gesture-handlers/nativeview-gh"},(0,r.kt)("inlineCode",{parentName:"a"},"NativeViewGestureHandler")),".\nHere is a list of exposed components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ScrollView")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FlatList")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Switch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TextInput")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DrawerLayoutAndroid")," (",(0,r.kt)("strong",{parentName:"li"},"Android only"),")")),(0,r.kt)("p",null,"If you want to use other handlers or ",(0,r.kt)("a",{parentName:"p",href:"/docs/components/buttons"},"buttons")," nested in a ",(0,r.kt)("inlineCode",{parentName:"p"},"ScrollView"),", use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/gesture-handlers/common-gh#waitfor"},(0,r.kt)("inlineCode",{parentName:"a"},"waitFor"))," property to define interaction between a handler and ",(0,r.kt)("inlineCode",{parentName:"p"},"ScrollView")),(0,r.kt)("h3",{id:"events-with-usenativedriver"},"Events with ",(0,r.kt)("inlineCode",{parentName:"h3"},"useNativeDriver")),(0,r.kt)("p",null,"Because handlers do not instantiate native views but instead hook up to their child views, directly nesting two gesture handlers using ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated.event")," is not currently supported.\nTo workaround this limitation we recommend placing an ",(0,r.kt)("inlineCode",{parentName:"p"},"<Animated.View>")," component in between the handlers."),(0,r.kt)("p",null,"Instead of doing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const PanAndRotate = () => (\n  <PanGestureHandler onGestureEvent={Animated.event({ ... }, { useNativeDriver: true })}>\n    <RotationGestureHandler onGestureEvent={Animated.event({ ... }, { useNativeDriver: true })}>\n      <Animated.View style={animatedStyles}/>\n    </RotationGestureHandler>\n  </PanGestureHandler>\n);\n")),(0,r.kt)("p",null,"Place an ",(0,r.kt)("inlineCode",{parentName:"p"},"<Animated.View>")," in between the handlers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const PanAndRotate = () => (\n  <PanGestureHandler onGestureEvent={Animated.event({ ... }, { useNativeDriver: true })}>\n    <Animated.View>\n      <RotationGestureHandler onGestureEvent={Animated.event({ ... }, { useNativeDriver: true })}>\n        <Animated.View style={animatedStyles}/>\n      </RotationGestureHandler>\n    </Animated.View>\n  </PanGestureHandler>\n);\n")),(0,r.kt)("p",null,"Another consequence of handlers depending on their native child components is that when using a ",(0,r.kt)("inlineCode",{parentName:"p"},"useNativeDriver")," flag with an ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated.event"),", the child component must be wrapped by an ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated.API")," e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"<Animated.View>")," instead of just a ",(0,r.kt)("inlineCode",{parentName:"p"},"<View>"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class Draggable extends Component {\n  render() {\n    return (\n      <PanGestureHandler onGestureEvent={Animated.event({ ... }, { useNativeDriver: true })}>\n        <Animated.View style={animatedStyles} /> {/* <-- NEEDS TO BE Animated.View */}\n      </PanGestureHandler>\n    );\n  }\n};\n")))}p.isMDXComponent=!0}}]);