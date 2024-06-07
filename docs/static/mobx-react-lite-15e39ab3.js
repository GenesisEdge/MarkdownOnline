import{makeObservable as h,configure as m,getDependencyTree as g,Reaction as R}from"https://cdn.jsdmirror.com/npm/mobx@6.12.0/+esm";import{s as S}from"./use-sync-external-store-b84fba6b.js";const T=window.React.useState;if(!T)throw new Error("mobx-react-lite requires React with Hooks support");if(!h)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");const O=window.ReactDOM.unstable_batchedUpdates;function E(e){e()}function P(e){e||(e=E),m({reactionScheduler:e})}function j(e){return g(e)}var x=1e4,z=1e4,F=function(){function e(t){var r=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(i){i===void 0&&(i=x),clearTimeout(r.sweepTimeout),r.sweepTimeout=void 0;var o=Date.now();r.registrations.forEach(function(a,n){o-a.registeredAt>=i&&(r.finalize(a.value),r.registrations.delete(n))}),r.registrations.size>0&&r.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){r.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(t,r,i){this.registrations.set(i,{value:r,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(t){this.registrations.delete(t)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.sweepTimeout===void 0&&(this.sweepTimeout=setTimeout(this.sweep,z))}}),e}(),$=typeof FinalizationRegistry<"u"?FinalizationRegistry:F,s=new $(function(e){var t;(t=e.reaction)===null||t===void 0||t.dispose(),e.reaction=null});const p=window.React;var D=function(){};function v(e){e.reaction=new R("observer".concat(e.name),function(){var t;e.stateVersion=Symbol(),(t=e.onStoreChange)===null||t===void 0||t.call(e)})}function I(e,t){t===void 0&&(t="observed");var r=p.useRef(null);if(!r.current){var i={reaction:null,onStoreChange:null,stateVersion:Symbol(),name:t,subscribe:function(u){return s.unregister(i),i.onStoreChange=u,i.reaction||(v(i),i.stateVersion=Symbol()),function(){var l;i.onStoreChange=null,(l=i.reaction)===null||l===void 0||l.dispose(),i.reaction=null}},getSnapshot:function(){return i.stateVersion}};r.current=i}var o=r.current;o.reaction||(v(o),s.register(r,o,o)),p.useDebugValue(o.reaction,j),S.useSyncExternalStore(o.subscribe,o.getSnapshot,D);var a,n;if(o.reaction.track(function(){try{a=e()}catch(u){n=u}}),n)throw n;return a}const f=window.React.forwardRef,b=window.React.memo;var y=typeof Symbol=="function"&&Symbol.for,d=y?Symbol.for("react.forward_ref"):typeof f=="function"&&f(function(e){return null}).$$typeof,w=y?Symbol.for("react.memo"):typeof b=="function"&&b(function(e){return null}).$$typeof;function B(e,t){var r;if(w&&e.$$typeof===w)throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");var i=(r=t==null?void 0:t.forwardRef)!==null&&r!==void 0?r:!1,o=e,a=e.displayName||e.name;if(d&&e.$$typeof===d&&(i=!0,o=e.render,typeof o!="function"))throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var n=function(u,l){return I(function(){return o(u,l)},a)};return n.displayName=e.displayName,Object.defineProperty(n,"name",{value:e.name,writable:!0,configurable:!0}),e.contextTypes&&(n.contextTypes=e.contextTypes),i&&(n=f(n)),n=b(n),N(e,n),n}var V={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};function N(e,t){Object.keys(e).forEach(function(r){V[r]||Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}window.React.useState;globalThis&&globalThis.__read;window.React.useState;window.React.useState;var c;P(O);c=s.finalizeAllImmediately;export{s as a,B as o};
