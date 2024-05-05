import{i as fe}from"./state-local-dd516420.js";import{r as c,R as L}from"./react-28cb0b77.js";function de(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function X(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function Z(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?X(Object(t),!0).forEach(function(n){de(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function ge(e,r){if(e==null)return{};var t={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(r.indexOf(o)>=0)&&(t[o]=e[o]);return t}function pe(e,r){if(e==null)return{};var t=ge(e,r),n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function ve(e,r){return he(e)||me(e,r)||we(e,r)||be()}function he(e){if(Array.isArray(e))return e}function me(e,r){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var t=[],n=!0,o=!1,a=void 0;try{for(var d=e[Symbol.iterator](),m;!(n=(m=d.next()).done)&&(t.push(m.value),!(r&&t.length===r));n=!0);}catch(y){o=!0,a=y}finally{try{!n&&d.return!=null&&d.return()}finally{if(o)throw a}}return t}}function we(e,r){if(e){if(typeof e=="string")return ee(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ee(e,r)}}function ee(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function be(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Me={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}};function ye(e){return function r(){for(var t=this,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return o.length>=e.length?e.apply(this,o):function(){for(var d=arguments.length,m=new Array(d),y=0;y<d;y++)m[y]=arguments[y];return r.apply(t,[].concat(o,m))}}}function Oe(e){return{}.toString.call(e).includes("Object")}function je(e){return e||re("configIsRequired"),Oe(e)||re("configType"),e.urls?(Ee(),{paths:{vs:e.urls.monacoBase}}):e}function Ee(){console.warn(te.deprecation)}function Se(e,r){throw new Error(e[r]||e.default)}var te={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},re=ye(Se)(te),Pe={config:je},Re=function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return function(o){return t.reduceRight(function(a,d){return d(a)},o)}};function ne(e,r){return Object.keys(r).forEach(function(t){r[t]instanceof Object&&e[t]&&Object.assign(r[t],ne(e[t],r[t]))}),Z(Z({},e),r)}var Ie={type:"cancelation",msg:"operation is manually canceled"};function J(e){var r=!1,t=new Promise(function(n,o){e.then(function(a){return r?o(Ie):n(a)}),e.catch(o)});return t.cancel=function(){return r=!0},t}var Ce=fe.create({config:Me,isInitialized:!1,resolve:null,reject:null,monaco:null}),oe=ve(Ce,2),T=oe[0],q=oe[1];function Le(e){var r=Pe.config(e),t=r.monaco,n=pe(r,["monaco"]);q(function(o){return{config:ne(o.config,n),monaco:t}})}function Ae(){var e=T(function(r){var t=r.monaco,n=r.isInitialized,o=r.resolve;return{monaco:t,isInitialized:n,resolve:o}});if(!e.isInitialized){if(q({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),J(K);if(window.monaco&&window.monaco.editor)return ie(window.monaco),e.resolve(window.monaco),J(K);Re(Ve,De)(ze)}return J(K)}function Ve(e){return document.body.appendChild(e)}function xe(e){var r=document.createElement("script");return e&&(r.src=e),r}function De(e){var r=T(function(n){var o=n.config,a=n.reject;return{config:o,reject:a}}),t=xe("".concat(r.config.paths.vs,"/loader.js"));return t.onload=function(){return e()},t.onerror=r.reject,t}function ze(){var e=T(function(t){var n=t.config,o=t.resolve,a=t.reject;return{config:n,resolve:o,reject:a}}),r=window.require;r.config(e.config),r(["vs/editor/editor.main"],function(t){ie(t),e.resolve(t)},function(t){e.reject(t)})}function ie(e){T().monaco||q({monaco:e})}function Ne(){return T(function(e){var r=e.monaco;return r})}var K=new Promise(function(e,r){return q({resolve:e,reject:r})}),ae={config:Le,init:Ae,__getMonacoInstance:Ne},Te={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Q=Te,_e={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},ke=_e;function Ue({children:e}){return L.createElement("div",{style:ke.container},e)}var $e=Ue,qe=$e;function Fe({width:e,height:r,isEditorReady:t,loading:n,_ref:o,className:a,wrapperProps:d}){return L.createElement("section",{style:{...Q.wrapper,width:e,height:r},...d},!t&&L.createElement(qe,null,n),L.createElement("div",{ref:o,style:{...Q.fullWidth,...!t&&Q.hide},className:a}))}var We=Fe,ce=c.memo(We);function He(e){c.useEffect(e,[])}var ue=He;function Be(e,r,t=!0){let n=c.useRef(!0);c.useEffect(n.current||!t?()=>{n.current=!1}:e,r)}var M=Be;function N(){}function C(e,r,t,n){return Ge(e,n)||Ye(e,r,t,n)}function Ge(e,r){return e.editor.getModel(le(e,r))}function Ye(e,r,t,n){return e.editor.createModel(r,t,n?le(e,n):void 0)}function le(e,r){return e.Uri.parse(r)}function Je({original:e,modified:r,language:t,originalLanguage:n,modifiedLanguage:o,originalModelPath:a,modifiedModelPath:d,keepCurrentOriginalModel:m=!1,keepCurrentModifiedModel:y=!1,theme:j="light",loading:_="Loading...",options:O={},height:F="100%",width:W="100%",className:H,wrapperProps:B={},beforeMount:G=N,onMount:Y=N}){let[w,A]=c.useState(!1),[S,p]=c.useState(!0),v=c.useRef(null),g=c.useRef(null),V=c.useRef(null),h=c.useRef(Y),l=c.useRef(G),P=c.useRef(!1);ue(()=>{let i=ae.init();return i.then(s=>(g.current=s)&&p(!1)).catch(s=>(s==null?void 0:s.type)!=="cancelation"&&console.error("Monaco initialization: error:",s)),()=>v.current?x():i.cancel()}),M(()=>{if(v.current&&g.current){let i=v.current.getOriginalEditor(),s=C(g.current,e||"",n||t||"text",a||"");s!==i.getModel()&&i.setModel(s)}},[a],w),M(()=>{if(v.current&&g.current){let i=v.current.getModifiedEditor(),s=C(g.current,r||"",o||t||"text",d||"");s!==i.getModel()&&i.setModel(s)}},[d],w),M(()=>{let i=v.current.getModifiedEditor();i.getOption(g.current.editor.EditorOption.readOnly)?i.setValue(r||""):r!==i.getValue()&&(i.executeEdits("",[{range:i.getModel().getFullModelRange(),text:r||"",forceMoveMarkers:!0}]),i.pushUndoStop())},[r],w),M(()=>{var i,s;(s=(i=v.current)==null?void 0:i.getModel())==null||s.original.setValue(e||"")},[e],w),M(()=>{let{original:i,modified:s}=v.current.getModel();g.current.editor.setModelLanguage(i,n||t||"text"),g.current.editor.setModelLanguage(s,o||t||"text")},[t,n,o],w),M(()=>{var i;(i=g.current)==null||i.editor.setTheme(j)},[j],w),M(()=>{var i;(i=v.current)==null||i.updateOptions(O)},[O],w);let k=c.useCallback(()=>{var E;if(!g.current)return;l.current(g.current);let i=C(g.current,e||"",n||t||"text",a||""),s=C(g.current,r||"",o||t||"text",d||"");(E=v.current)==null||E.setModel({original:i,modified:s})},[t,r,o,e,n,a,d]),U=c.useCallback(()=>{var i;!P.current&&V.current&&(v.current=g.current.editor.createDiffEditor(V.current,{automaticLayout:!0,...O}),k(),(i=g.current)==null||i.editor.setTheme(j),A(!0),P.current=!0)},[O,j,k]);c.useEffect(()=>{w&&h.current(v.current,g.current)},[w]),c.useEffect(()=>{!S&&!w&&U()},[S,w,U]);function x(){var s,E,R,D;let i=(s=v.current)==null?void 0:s.getModel();m||((E=i==null?void 0:i.original)==null||E.dispose()),y||((R=i==null?void 0:i.modified)==null||R.dispose()),(D=v.current)==null||D.dispose()}return L.createElement(ce,{width:W,height:F,isEditorReady:w,loading:_,_ref:V,className:H,wrapperProps:B})}var Ke=Je;c.memo(Ke);function Qe(e){let r=c.useRef();return c.useEffect(()=>{r.current=e},[e]),r.current}var Xe=Qe,$=new Map;function Ze({defaultValue:e,defaultLanguage:r,defaultPath:t,value:n,language:o,path:a,theme:d="light",line:m,loading:y="Loading...",options:j={},overrideServices:_={},saveViewState:O=!0,keepCurrentModel:F=!1,width:W="100%",height:H="100%",className:B,wrapperProps:G={},beforeMount:Y=N,onMount:w=N,onChange:A,onValidate:S=N}){let[p,v]=c.useState(!1),[g,V]=c.useState(!0),h=c.useRef(null),l=c.useRef(null),P=c.useRef(null),k=c.useRef(w),U=c.useRef(Y),x=c.useRef(),i=c.useRef(n),s=Xe(a),E=c.useRef(!1),R=c.useRef(!1);ue(()=>{let u=ae.init();return u.then(f=>(h.current=f)&&V(!1)).catch(f=>(f==null?void 0:f.type)!=="cancelation"&&console.error("Monaco initialization: error:",f)),()=>l.current?se():u.cancel()}),M(()=>{var f,b,z,I;let u=C(h.current,e||n||"",r||o||"",a||t||"");u!==((f=l.current)==null?void 0:f.getModel())&&(O&&$.set(s,(b=l.current)==null?void 0:b.saveViewState()),(z=l.current)==null||z.setModel(u),O&&((I=l.current)==null||I.restoreViewState($.get(a))))},[a],p),M(()=>{var u;(u=l.current)==null||u.updateOptions(j)},[j],p),M(()=>{!l.current||n===void 0||(l.current.getOption(h.current.editor.EditorOption.readOnly)?l.current.setValue(n):n!==l.current.getValue()&&(R.current=!0,l.current.executeEdits("",[{range:l.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),l.current.pushUndoStop(),R.current=!1))},[n],p),M(()=>{var f,b;let u=(f=l.current)==null?void 0:f.getModel();u&&o&&((b=h.current)==null||b.editor.setModelLanguage(u,o))},[o],p),M(()=>{var u;m!==void 0&&((u=l.current)==null||u.revealLine(m))},[m],p),M(()=>{var u;(u=h.current)==null||u.editor.setTheme(d)},[d],p);let D=c.useCallback(()=>{var u;if(!(!P.current||!h.current)&&!E.current){U.current(h.current);let f=a||t,b=C(h.current,n||e||"",r||o||"",f||"");l.current=(u=h.current)==null?void 0:u.editor.create(P.current,{model:b,automaticLayout:!0,...j},_),O&&l.current.restoreViewState($.get(f)),h.current.editor.setTheme(d),m!==void 0&&l.current.revealLine(m),v(!0),E.current=!0}},[e,r,t,n,o,a,j,_,O,d,m]);c.useEffect(()=>{p&&k.current(l.current,h.current)},[p]),c.useEffect(()=>{!g&&!p&&D()},[g,p,D]),i.current=n,c.useEffect(()=>{var u,f;p&&A&&((u=x.current)==null||u.dispose(),x.current=(f=l.current)==null?void 0:f.onDidChangeModelContent(b=>{R.current||A(l.current.getValue(),b)}))},[p,A]),c.useEffect(()=>{if(p){let u=h.current.editor.onDidChangeMarkers(f=>{var z;let b=(z=l.current.getModel())==null?void 0:z.uri;if(b&&f.find(I=>I.path===b.path)){let I=h.current.editor.getModelMarkers({resource:b});S==null||S(I)}});return()=>{u==null||u.dispose()}}return()=>{}},[p,S]);function se(){var u,f;(u=x.current)==null||u.dispose(),F?O&&$.set(a,l.current.saveViewState()):(f=l.current.getModel())==null||f.dispose(),l.current.dispose()}return L.createElement(ce,{width:W,height:H,isEditorReady:p,loading:y,_ref:P,className:B,wrapperProps:G})}var er=Ze,rr=c.memo(er),or=rr;export{or as F,ae as l};
