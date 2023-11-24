"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[6467],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4870:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return l}});var a=n(3117),o=(n(7294),n(3905));const r={id:"gesture-composition",title:"Composing gestures",sidebar_label:"Composing gestures",sidebar_position:4},s=void 0,i={unversionedId:"fundamentals/gesture-composition",id:"fundamentals/gesture-composition",title:"Composing gestures",description:"Composing gestures is much simpler in RNGH2, you don't need to create a ref for every gesture that depends on another one. Instead you can use Race, Simultaneous and Exclusive methods provided by the Gesture object.",source:"@site/docs/fundamentals/gesture-composition.md",sourceDirName:"fundamentals",slug:"/fundamentals/gesture-composition",permalink:"/react-native-gesture-handler/docs/fundamentals/gesture-composition",draft:!1,editUrl:"https://github.com/software-mansion/react-native-gesture-handler/edit/main/docs/docs/fundamentals/gesture-composition.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"gesture-composition",title:"Composing gestures",sidebar_label:"Composing gestures",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Quick start",permalink:"/react-native-gesture-handler/docs/fundamentals/quickstart/"},next:{title:"Manual gestures",permalink:"/react-native-gesture-handler/docs/fundamentals/manual-gestures/"}},u={},l=[{value:"Race",id:"race",level:2},{value:"Simultaneous",id:"simultaneous",level:2},{value:"Exclusive",id:"exclusive",level:2},{value:"Composition vs <code>simultaneousWithExternalGesture</code> and <code>requireExternalGestureToFail</code>",id:"composition-vs-simultaneouswithexternalgesture-and-requireexternalgesturetofail",level:2}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Composing gestures is much simpler in RNGH2, you don't need to create a ref for every gesture that depends on another one. Instead you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"Race"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Simultaneous")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Exclusive")," methods provided by the ",(0,o.kt)("inlineCode",{parentName:"p"},"Gesture")," object."),(0,o.kt)("h2",{id:"race"},"Race"),(0,o.kt)("p",null,"Only one of the provided gestures can become active at the same time. The first gesture to become active will cancel the rest of the gestures. It accepts variable number of arguments.\nIt is the equivalent to having more than one gesture handler without defining ",(0,o.kt)("inlineCode",{parentName:"p"},"simultaneousHandlers")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"waitFor")," props."),(0,o.kt)("p",null,"For example, lets say that you have a component that you want to make draggable but you also want to show additional options on long press. Presumably you would not want the component to move after the long press activates. You can accomplish this using ",(0,o.kt)("inlineCode",{parentName:"p"},"Race"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: the ",(0,o.kt)("inlineCode",{parentName:"p"},"useSharedValue")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," are part of ",(0,o.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/"},(0,o.kt)("inlineCode",{parentName:"a"},"react-native-reanimated")),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { GestureDetector, Gesture } from 'react-native-gesture-handler';\nimport Animated, {\n  useSharedValue,\n  useAnimatedStyle,\n  withTiming,\n} from 'react-native-reanimated';\n\nfunction App() {\n  const offset = useSharedValue({ x: 0, y: 0 });\n  const start = useSharedValue({ x: 0, y: 0 });\n  const popupPosition = useSharedValue({ x: 0, y: 0 });\n  const popupAlpha = useSharedValue(0);\n\n  const animatedStyles = useAnimatedStyle(() => {\n    return {\n      transform: [\n        { translateX: offset.value.x },\n        { translateY: offset.value.y },\n      ],\n    };\n  });\n\n  const animatedPopupStyles = useAnimatedStyle(() => {\n    return {\n      transform: [\n        { translateX: popupPosition.value.x },\n        { translateY: popupPosition.value.y },\n      ],\n      opacity: popupAlpha.value,\n    };\n  });\n\n  const dragGesture = Gesture.Pan()\n    .onStart((_e) => {\n      popupAlpha.value = withTiming(0);\n    })\n    .onUpdate((e) => {\n      offset.value = {\n        x: e.translationX + start.value.x,\n        y: e.translationY + start.value.y,\n      };\n    })\n    .onEnd(() => {\n      start.value = {\n        x: offset.value.x,\n        y: offset.value.y,\n      };\n    });\n\n  const longPressGesture = Gesture.LongPress().onStart((_event) => {\n    popupPosition.value = { x: offset.value.x, y: offset.value.y };\n    popupAlpha.value = withTiming(1);\n  });\n\n  const composed = Gesture.Race(dragGesture, longPressGesture);\n\n  return (\n    <Animated.View>\n      <Popup style={animatedPopupStyles} />\n      <GestureDetector gesture={composed}>\n        <Component style={animatedStyles} />\n      </GestureDetector>\n    </Animated.View>\n  );\n}\n")),(0,o.kt)("h2",{id:"simultaneous"},"Simultaneous"),(0,o.kt)("p",null,"All of the provided gestures can activate at the same time. Activation of one will not cancel the other.\nIt is the equivalent to having some gesture handlers, each with ",(0,o.kt)("inlineCode",{parentName:"p"},"simultaneousHandlers")," prop set to the other handlers."),(0,o.kt)("p",null,"For example, if you want to make a gallery app, you might want user to be able to zoom, rotate and pan around photos. You can do it with ",(0,o.kt)("inlineCode",{parentName:"p"},"Simultaneous"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: the ",(0,o.kt)("inlineCode",{parentName:"p"},"useSharedValue")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," are part of ",(0,o.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/"},(0,o.kt)("inlineCode",{parentName:"a"},"react-native-reanimated")),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { GestureDetector, Gesture } from 'react-native-gesture-handler';\nimport Animated, {\n  useSharedValue,\n  useAnimatedStyle,\n} from 'react-native-reanimated';\n\nfunction App() {\n  const offset = useSharedValue({ x: 0, y: 0 });\n  const start = useSharedValue({ x: 0, y: 0 });\n  const scale = useSharedValue(1);\n  const savedScale = useSharedValue(1);\n  const rotation = useSharedValue(0);\n  const savedRotation = useSharedValue(0);\n  const animatedStyles = useAnimatedStyle(() => {\n    return {\n      transform: [\n        { translateX: offset.value.x },\n        { translateY: offset.value.y },\n        { scale: scale.value },\n        { rotateZ: `${rotation.value}rad` },\n      ],\n    };\n  });\n\n  const dragGesture = Gesture.Pan()\n    .averageTouches(true)\n    .onUpdate((e) => {\n      offset.value = {\n        x: e.translationX + start.value.x,\n        y: e.translationY + start.value.y,\n      };\n    })\n    .onEnd(() => {\n      start.value = {\n        x: offset.value.x,\n        y: offset.value.y,\n      };\n    });\n\n  const zoomGesture = Gesture.Pinch()\n    .onUpdate((event) => {\n      scale.value = savedScale.value * event.scale;\n    })\n    .onEnd(() => {\n      savedScale.value = scale.value;\n    });\n\n  const rotateGesture = Gesture.Rotation()\n    .onUpdate((event) => {\n      rotation.value = savedRotation.value + event.rotation;\n    })\n    .onEnd(() => {\n      savedRotation.value = rotation.value;\n    });\n\n  const composed = Gesture.Simultaneous(\n    dragGesture,\n    Gesture.Simultaneous(zoomGesture, rotateGesture)\n  );\n\n  return (\n    <Animated.View>\n      <GestureDetector gesture={composed}>\n        <Photo style={animatedStyles} />\n      </GestureDetector>\n    </Animated.View>\n  );\n}\n")),(0,o.kt)("h2",{id:"exclusive"},"Exclusive"),(0,o.kt)("p",null,"Only one of the provided gestures can become active, with the first one having a higher priority than the second one (if both gestures are still possible, the second one will wait for the first one to fail before it activates), second one having a higher priority than the third one, and so on.\nIt is equivalent to having some gesture handlers where the second one has the ",(0,o.kt)("inlineCode",{parentName:"p"},"waitFor")," prop set to the first handler, third one has the ",(0,o.kt)("inlineCode",{parentName:"p"},"waitFor")," prop set to the first and the second one, and so on."),(0,o.kt)("p",null,"For example, if you want to make a component that responds to single tap as well as to a double tap, you can accomplish that using ",(0,o.kt)("inlineCode",{parentName:"p"},"Exclusive"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: the ",(0,o.kt)("inlineCode",{parentName:"p"},"useSharedValue")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," are part of ",(0,o.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/"},(0,o.kt)("inlineCode",{parentName:"a"},"react-native-reanimated")),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { GestureDetector, Gesture } from 'react-native-gesture-handler';\n\nfunction App() {\n  const singleTap = Gesture.Tap().onEnd((_event, success) => {\n    if (success) {\n      console.log('single tap!');\n    }\n  });\n  const doubleTap = Gesture.Tap()\n    .numberOfTaps(2)\n    .onEnd((_event, success) => {\n      if (success) {\n        console.log('double tap!');\n      }\n    });\n\n  const taps = Gesture.Exclusive(doubleTap, singleTap);\n\n  return (\n    <GestureDetector gesture={taps}>\n      <Component />\n    </GestureDetector>\n  );\n}\n")),(0,o.kt)("h2",{id:"composition-vs-simultaneouswithexternalgesture-and-requireexternalgesturetofail"},"Composition vs ",(0,o.kt)("inlineCode",{parentName:"h2"},"simultaneousWithExternalGesture")," and ",(0,o.kt)("inlineCode",{parentName:"h2"},"requireExternalGestureToFail")),(0,o.kt)("p",null,"You may have noticed that gesture composition described above requires you to mount all of the composed gestures under a single ",(0,o.kt)("inlineCode",{parentName:"p"},"GestureDetector"),", effectively attaching them to the same underlying component. If you want to make a relation between gestures that are attached to separate ",(0,o.kt)("inlineCode",{parentName:"p"},"GestureDetectors"),", we have a separate mechanism for that: ",(0,o.kt)("inlineCode",{parentName:"p"},"simultaneousWithExternalGesture")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"requireExternalGestureToFail")," methods that are available on every base gesture. They work exactly the same way as ",(0,o.kt)("inlineCode",{parentName:"p"},"simultaneousHandlers")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"waitFor")," on gesture handlers, that is they just mark the relation between the gestures without joining them into single object."))}c.isMDXComponent=!0}}]);