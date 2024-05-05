import{r as m}from"./react-dom-983c8056.js";import{makeObservable as w,configure as h,getDependencyTree as g,Reaction as R}from"https://jsd.onmicrosoft.cn/npm/mobx@6.12.0/+esm";import{r as l,R as p}from"./react-28cb0b77.js";import{s as S}from"./use-sync-external-store-d57a27c6.js";if(!l.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!w)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");function T(e){e()}function E(e){e||(e=T),h({reactionScheduler:e})}function O(e){return g(e)}var x=1e4,P=1e4,j=function(){function e(t){var r=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(i){i===void 0&&(i=x),clearTimeout(r.sweepTimeout),r.sweepTimeout=void 0;var o=Date.now();r.registrations.forEach(function(a,n){o-a.registeredAt>=i&&(r.finalize(a.value),r.registrations.delete(n))}),r.registrations.size>0&&r.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){r.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(t,r,i){this.registrations.set(i,{value:r,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(t){this.registrations.delete(t)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.sweepTimeout===void 0&&(this.sweepTimeout=setTimeout(this.sweep,P))}}),e}(),z=typeof FinalizationRegistry<"u"?FinalizationRegistry:j,c=new z(function(e){var t;(t=e.reaction)===null||t===void 0||t.dispose(),e.reaction=null}),F=function(){};function v(e){e.reaction=new R("observer".concat(e.name),function(){var t;e.stateVersion=Symbol(),(t=e.onStoreChange)===null||t===void 0||t.call(e)})}function $(e,t){t===void 0&&(t="observed");var r=p.useRef(null);if(!r.current){var i={reaction:null,onStoreChange:null,stateVersion:Symbol(),name:t,subscribe:function(u){return c.unregister(i),i.onStoreChange=u,i.reaction||(v(i),i.stateVersion=Symbol()),function(){var f;i.onStoreChange=null,(f=i.reaction)===null||f===void 0||f.dispose(),i.reaction=null}},getSnapshot:function(){return i.stateVersion}};r.current=i}var o=r.current;o.reaction||(v(o),c.register(r,o,o)),p.useDebugValue(o.reaction,O),S.useSyncExternalStore(o.subscribe,o.getSnapshot,F);var a,n;if(o.reaction.track(function(){try{a=e()}catch(u){n=u}}),n)throw n;return a}var d=typeof Symbol=="function"&&Symbol.for,b=d?Symbol.for("react.forward_ref"):typeof l.forwardRef=="function"&&l.forwardRef(function(e){return null}).$$typeof,y=d?Symbol.for("react.memo"):typeof l.memo=="function"&&l.memo(function(e){return null}).$$typeof;function _(e,t){var r;if(y&&e.$$typeof===y)throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");var i=(r=t==null?void 0:t.forwardRef)!==null&&r!==void 0?r:!1,o=e,a=e.displayName||e.name;if(b&&e.$$typeof===b&&(i=!0,o=e.render,typeof o!="function"))throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var n=function(u,f){return $(function(){return o(u,f)},a)};return n.displayName=e.displayName,Object.defineProperty(n,"name",{value:e.name,writable:!0,configurable:!0}),e.contextTypes&&(n.contextTypes=e.contextTypes),i&&(n=l.forwardRef(n)),n=l.memo(n),I(e,n),n}var D={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};function I(e,t){Object.keys(e).forEach(function(r){D[r]||Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}globalThis&&globalThis.__read;var s;E(m.unstable_batchedUpdates);s=c.finalizeAllImmediately;export{c as a,_ as o};
