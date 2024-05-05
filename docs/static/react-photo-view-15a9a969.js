const d=window.React,W=window.React.useRef,On=window.React.useReducer,jn=window.React.createContext,He=window.React.useEffect,qn=window.React.useLayoutEffect,kn=window.React.useMemo,Un=window.React.useCallback,Nn=window.React.useState,Kn=window.React.useContext,Gn=window.React.useImperativeHandle,Jn=window.React.Children,Qn=window.React.cloneElement,Zn=window.ReactDOM.createPortal;function M(){return M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},M.apply(this,arguments)}function Mn(e,t){if(e==null)return{};var o,i,r={},c=Object.keys(e);for(i=0;i<c.length;i++)t.indexOf(o=c[i])>=0||(r[o]=e[o]);return r}function Ae(e){var t=W({fn:e,curr:void 0}).current;if(t.fn=e,!t.curr){var o=Object.create(null);Object.keys(e).forEach(function(i){o[i]=function(){var r;return(r=t.fn[i]).call.apply(r,[t.fn].concat([].slice.call(arguments)))}}),t.curr=o}return t.curr}function Pn(e){return On(function(t,o){return M({},t,typeof o=="function"?o(t):o)},e)}var Fn=jn(void 0),me=typeof window<"u"&&"ontouchstart"in window,Wn=function(e,t,o){return Math.max(Math.min(e,o),t)},bn=function(e,t,o){return t===void 0&&(t=0),o===void 0&&(o=0),Wn(e,1*(1-o),Math.max(6,t)*(1+o))},Sn=typeof window>"u"||/ServerSideRendering/.test(navigator&&navigator.userAgent)?He:qn;function Je(e,t,o){var i=W(t);i.current=t,He(function(){function r(c){i.current(c)}return e&&window.addEventListener(e,r,o),function(){e&&window.removeEventListener(e,r)}},[e])}var $n=["container"];function et(e){var t=e.container,o=t===void 0?document.body:t,i=Mn(e,$n);return Zn(d.createElement("div",M({},i)),o)}function nt(e){return d.createElement("svg",M({width:"44",height:"44",viewBox:"0 0 768 768"},e),d.createElement("path",{d:"M607.5 205.5l-178.5 178.5 178.5 178.5-45 45-178.5-178.5-178.5 178.5-45-45 178.5-178.5-178.5-178.5 45-45 178.5 178.5 178.5-178.5z"}))}function tt(e){return d.createElement("svg",M({width:"44",height:"44",viewBox:"0 0 768 768"},e),d.createElement("path",{d:"M640.5 352.5v63h-390l178.5 180-45 45-256.5-256.5 256.5-256.5 45 45-178.5 180h390z"}))}function ot(e){return d.createElement("svg",M({width:"44",height:"44",viewBox:"0 0 768 768"},e),d.createElement("path",{d:"M384 127.5l256.5 256.5-256.5 256.5-45-45 178.5-180h-390v-63h390l-178.5-180z"}))}function it(){return He(function(){var e=document.body.style,t=e.overflow;return e.overflow="hidden",function(){e.overflow=t}},[]),null}function Hn(e){var t=e.touches[0],o=t.clientX,i=t.clientY;if(e.touches.length>=2){var r=e.touches[1],c=r.clientX,u=r.clientY;return[(o+c)/2,(i+u)/2,Math.sqrt(Math.pow(c-o,2)+Math.pow(u-i,2))]}return[o,i,0]}var Pe=function(e,t,o,i){var r=o*t,c=(r-i)/2,u=void 0,l=e;return r<=i?(u=1,l=0):e>0&&c-e<=0?(u=2,l=c):e<0&&c+e<=0&&(u=3,l=-c),[u,l]};function Yn(e,t,o,i,r,c,u,l,h,v){u===void 0&&(u=innerWidth/2),l===void 0&&(l=innerHeight/2),h===void 0&&(h=0),v===void 0&&(v=0);var f=Pe(e,c,o,innerWidth)[0],w=Pe(t,c,i,innerHeight),_=innerWidth/2,k=innerHeight/2;return{x:u-c/r*(u-(_+e))-_+(i/o>=3&&o*c===innerWidth?0:f?h/2:h),y:l-c/r*(l-(k+t))-k+(w[0]?v/2:v),lastCX:u,lastCY:l}}function Tn(e,t,o){var i=e%180!=0;return i?[o,t,i]:[t,o,i]}function Xn(e,t,o){var i=Tn(o,innerWidth,innerHeight),r=i[0],c=i[1],u=0,l=r,h=c,v=e/t*c,f=t/e*r;return e<r&&t<c?(l=e,h=t):e<r&&t>=c?l=v:e>=r&&t<c||e/t>r/c?h=f:t/e>=3&&!i[2]?u=((h=f)-c)/2:l=v,{width:l,height:h,x:0,y:u,pause:!0}}function En(e,t){var o=t.leading,i=o!==void 0&&o,r=t.maxWait,c=t.wait,u=c===void 0?r||0:c,l=W(e);l.current=e;var h=W(0),v=W(),f=function(){return v.current&&clearTimeout(v.current)},w=Un(function(){var _=[].slice.call(arguments),k=Date.now();function I(){h.current=k,f(),l.current.apply(null,_)}var b=h.current,x=k-b;if(b===0&&(i&&I(),h.current=k),r!==void 0){if(x>r)return void I()}else x<u&&(h.current=k);f(),v.current=setTimeout(function(){I(),h.current=0},u)},[u,r,i]);return w.cancel=f,w}var Ln=function(e,t,o){return Ie(e,t,o,100,function(i){return i},function(){return Ie(t,e,o)})},rt=function(e){return 1-Math.pow(1-e,4)};function Ie(e,t,o,i,r,c){i===void 0&&(i=400),r===void 0&&(r=rt);var u=t-e;if(u!==0){var l=Date.now(),h=0,v=function(){var w=Math.min(1,(Date.now()-l)/i);o(e+r(w)*u)&&w<1?f():(cancelAnimationFrame(h),w>=1&&c&&c())};f()}function f(){h=requestAnimationFrame(v)}}var at={T:0,L:0,W:0,H:0,FIT:void 0},Bn=function(){var e=W(!1);return He(function(){return e.current=!0,function(){e.current=!1}},[]),e},ct=["className"];function ut(e){var t=e.className,o=Mn(e,ct);return d.createElement("div",M({className:"PhotoView__Spinner "+t},o),d.createElement("svg",{viewBox:"0 0 32 32",width:"36",height:"36",fill:"white"},d.createElement("path",{opacity:".25",d:"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"}),d.createElement("path",{d:"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"})))}var lt=["src","loaded","broken","className","onPhotoLoad","loadingElement","brokenElement"];function st(e){var t=e.src,o=e.loaded,i=e.broken,r=e.className,c=e.onPhotoLoad,u=e.loadingElement,l=e.brokenElement,h=Mn(e,lt),v=Bn();return t&&!i?d.createElement(d.Fragment,null,d.createElement("img",M({className:"PhotoView__Photo"+(r?" "+r:""),src:t,onLoad:function(f){var w=f.target;v.current&&c({loaded:!0,naturalWidth:w.naturalWidth,naturalHeight:w.naturalHeight})},onError:function(){v.current&&c({broken:!0})},alt:""},h)),!o&&(d.createElement("span",{className:"PhotoView__icon"},u)||d.createElement(ut,{className:"PhotoView__icon"}))):l?d.createElement("span",{className:"PhotoView__icon"},typeof l=="function"?l({src:t}):l):null}var dt={naturalWidth:void 0,naturalHeight:void 0,width:void 0,height:void 0,loaded:void 0,broken:!1,x:0,y:0,touched:!1,maskTouched:!1,rotate:0,scale:1,CX:0,CY:0,lastX:0,lastY:0,lastCX:0,lastCY:0,lastScale:1,touchTime:0,touchLength:0,pause:!0,stopRaf:!0,reach:void 0};function vt(e){var t=e.item,o=t.src,i=t.render,r=t.width,c=r===void 0?0:r,u=t.height,l=u===void 0?0:u,h=t.originRef,v=e.visible,f=e.speed,w=e.easing,_=e.wrapClassName,k=e.className,I=e.style,b=e.loadingElement,x=e.brokenElement,R=e.onPhotoTap,z=e.onMaskTap,Qe=e.onReachMove,Le=e.onReachUp,_n=e.onPhotoResize,L=e.isActive,ge=e.expose,ln=Pn(dt),g=ln[0],C=ln[1],De=W(0),Oe=Bn(),sn=g.naturalWidth,ie=sn===void 0?c:sn,N=g.naturalHeight,S=N===void 0?l:N,Ze=g.width,j=Ze===void 0?c:Ze,dn=g.height,we=dn===void 0?l:dn,$e=g.loaded,en=$e===void 0?!o:$e,Me=g.broken,D=g.x,re=g.y,q=g.touched,Rn=g.stopRaf,pe=g.maskTouched,U=g.rotate,Y=g.scale,vn=g.CX,Fe=g.CY,_e=g.lastX,nn=g.lastY,y=g.lastCX,fn=g.lastCY,$=g.lastScale,Re=g.touchTime,hn=g.touchLength,K=g.pause,Ye=g.reach,tn=Ae({onScale:function(n){return ae(bn(n))},onRotate:function(n){U!==n&&(ge({rotate:n}),C(M({rotate:n},Xn(ie,S,n))))}});function ae(n,a,m){Y!==n&&(ge({scale:n}),C(M({scale:n},Yn(D,re,j,we,Y,n,a,m),n<=1&&{x:0,y:0})))}var mn=En(function(n,a,m){if(m===void 0&&(m=0),(q||pe)&&L){var Xe=Tn(U,j,we),ce=Xe[0],G=Xe[1];if(m===0&&De.current===0){var X=Math.abs(n-vn)<=20,H=Math.abs(a-Fe)<=20;if(X&&H)return void C({lastCX:n,lastCY:a});De.current=X?a>Fe?3:2:1}var Ne=n-y,We=a-fn,J=void 0;if(m===0){var Se=Pe(Ne+_e,Y,ce,innerWidth)[0],je=Pe(We+nn,Y,G,innerHeight);J=function(Ce,le,se,te){return le&&Ce===1||te==="x"?"x":se&&Ce>1||te==="y"?"y":void 0}(De.current,Se,je[0],Ye),J!==void 0&&Qe(J,n,a,Y)}if(J==="x"||pe)return void C({reach:"x"});var ue=bn(Y+(m-hn)/100/2*Y,ie/j,.2);ge({scale:ue}),C(M({touchLength:m,reach:J,scale:ue},Yn(D,re,j,we,Y,ue,n,a,Ne,We)))}},{maxWait:8});function on(n){return!Rn&&!q&&(Oe.current&&C(M({},n,{pause:v})),Oe.current)}var ye,ee,xe,rn,gn,wn,pn,A,yn=(gn=function(n){return on({x:n})},wn=function(n){return on({y:n})},pn=function(n){return Oe.current&&(ge({scale:n}),C({scale:n})),!q&&Oe.current},A=Ae({X:function(n){return gn(n)},Y:function(n){return wn(n)},S:function(n){return pn(n)}}),function(n,a,m,Xe,ce,G,X,H,Ne,We,J){var Se=Tn(We,ce,G),je=Se[0],ue=Se[1],Ce=Pe(n,H,je,innerWidth),le=Ce[0],se=Ce[1],te=Pe(a,H,ue,innerHeight),qe=te[0],Cn=te[1],Ue=Date.now()-J;if(Ue>=200||H!=X||Math.abs(Ne-X)>1){var be=Yn(n,a,ce,G,X,H),de=be.x,Te=be.y,O=le?se:de!==n?de:null,Ke=qe?Cn:Te!==a?Te:null;return O!==null&&Ie(n,O,A.X),Ke!==null&&Ie(a,Ke,A.Y),void(H!=X&&Ie(X,H,A.S))}var Ve=(n-m)/Ue,Ee=(a-Xe)/Ue,ke=Math.sqrt(Math.pow(Ve,2)+Math.pow(Ee,2)),ve=!1,fe=!1;(function(Q,T){var V=Q,he=0,Z=void 0,F=0,Ge=function(cn){Z||(Z=cn);var un=cn-Z,Vn=Math.sign(Q),In=-.001*Vn,An=Math.sign(-V)*Math.pow(V,2)*2e-4,zn=V*un+(In+An)*Math.pow(un,2)/2;he+=zn,Z=cn,Vn*(V+=(In+An)*un)<=0?B():T(he)?oe():B()};function oe(){F=requestAnimationFrame(Ge)}function B(){cancelAnimationFrame(F)}oe()})(ke,function(Q){var T=n+Q*(Ve/ke),V=a+Q*(Ee/ke),he=Pe(T,X,je,innerWidth),Z=he[0],F=he[1],Ge=Pe(V,X,ue,innerHeight),oe=Ge[0],B=Ge[1];if(Z&&!ve&&(ve=!0,le?Ie(T,F,A.X):Ln(F,T+(T-F),A.X)),oe&&!fe&&(fe=!0,qe?Ie(V,B,A.Y):Ln(B,V+(V-B),A.Y)),ve&&fe)return!1;var cn=ve||A.X(F),un=fe||A.Y(B);return cn&&un})}),Be=(ye=R,ee=function(n,a){Ye||ae(Y!==1?1:Math.max(2,ie/j),n,a)},xe=W(0),rn=En(function(){xe.current=0,ye.apply(void 0,[].slice.call(arguments))},{wait:300}),function(){var n=[].slice.call(arguments);xe.current+=1,rn.apply(void 0,n),xe.current>=2&&(rn.cancel(),xe.current=0,ee.apply(void 0,n))});function ze(n,a){if(De.current=0,(q||pe)&&L){C({touched:!1,maskTouched:!1,pause:!1,stopRaf:!1,reach:void 0});var m=bn(Y,ie/j);if(yn(D,re,_e,nn,j,we,Y,m,$,U,Re),Le(n,a),vn===n&&Fe===a){if(q)return void Be(n,a);pe&&z(n,a)}}}function an(n,a,m){m===void 0&&(m=0),C({touched:!0,CX:n,CY:a,lastCX:n,lastCY:a,lastX:D,lastY:re,lastScale:Y,touchLength:m,touchTime:Date.now()})}function xn(n){C({maskTouched:!0,CX:n.clientX,CY:n.clientY,lastX:D,lastY:re})}Je(me?void 0:"mousemove",function(n){n.preventDefault(),mn(n.clientX,n.clientY)}),Je(me?void 0:"mouseup",function(n){ze(n.clientX,n.clientY)}),Je(me?"touchmove":void 0,function(n){n.preventDefault();var a=Hn(n);mn.apply(void 0,a)},{passive:!1}),Je(me?"touchend":void 0,function(n){var a=n.changedTouches[0];ze(a.clientX,a.clientY)},{passive:!1}),Je("resize",En(function(){en&&!q&&(C(Xn(ie,S,U)),_n())},{maxWait:8})),Sn(function(){L&&ge(M({scale:Y,rotate:U},tn))},[L]);var ne=function(n,a,m,Xe,ce,G,X,H,Ne,We){var J=function(de,Te,O,Ke,Ve){var Ee=W(!1),ke=Pn({lead:!0,scale:O}),ve=ke[0],fe=ve.lead,Q=ve.scale,T=ke[1],V=En(function(he){try{return Ve(!0),T({lead:!1,scale:he}),Promise.resolve()}catch(Z){return Promise.reject(Z)}},{wait:Ke});return Sn(function(){Ee.current?(Ve(!1),T({lead:!0}),V(O)):Ee.current=!0},[O]),fe?[de*Q,Te*Q,O/Q]:[de*O,Te*O,1]}(G,X,H,Ne,We),Se=J[0],je=J[1],ue=J[2],Ce=function(de,Te,O,Ke,Ve){var Ee=Nn(at),ke=Ee[0],ve=Ee[1],fe=Nn(0),Q=fe[0],T=fe[1],V=W(),he=Ae({OK:function(){return de&&T(4)}});function Z(F){Ve(!1),T(F)}return He(function(){if(V.current||(V.current=Date.now()),O){if(function(F,Ge){var oe=F&&F.current;if(oe&&oe.nodeType===1){var B=oe.getBoundingClientRect();Ge({T:B.top,L:B.left,W:B.width,H:B.height,FIT:oe.tagName==="IMG"?getComputedStyle(oe).objectFit:void 0})}}(Te,ve),de)return Date.now()-V.current<250?(T(1),requestAnimationFrame(function(){T(2),requestAnimationFrame(function(){return Z(3)})}),void setTimeout(he.OK,Ke)):void T(4);Z(5)}},[de,O]),[Q,ke]}(n,a,m,Ne,We),le=Ce[0],se=Ce[1],te=se.W,qe=se.FIT,Cn=innerWidth/2,Ue=innerHeight/2,be=le<3||le>4;return[be?te?se.L:Cn:Xe+(Cn-G*H/2),be?te?se.T:Ue:ce+(Ue-X*H/2),Se,be&&qe?Se*(se.H/te):je,le===0?ue:be?te/(G*H)||.01:ue,be?qe?1:0:1,le,qe]}(v,h,en,D,re,j,we,Y,f,function(n){return C({pause:n})}),s=ne[4],p=ne[6],P="transform "+f+"ms "+w,E={className:k,onMouseDown:me?void 0:function(n){n.stopPropagation(),n.button===0&&an(n.clientX,n.clientY,0)},onTouchStart:me?function(n){n.stopPropagation(),an.apply(void 0,Hn(n))}:void 0,onWheel:function(n){if(!Ye){var a=bn(Y-n.deltaY/100/2,ie/j);C({stopRaf:!0}),ae(a,n.clientX,n.clientY)}},style:{width:ne[2],height:ne[3],opacity:ne[5],objectFit:p===4?void 0:ne[7],transform:U?"rotate("+U+"deg)":void 0,transition:p>2?P+", opacity "+f+"ms ease, height "+(p<4?f/2:p>4?f:0)+"ms "+w:void 0}};return d.createElement("div",{className:"PhotoView__PhotoWrap"+(_?" "+_:""),style:I,onMouseDown:!me&&L?xn:void 0,onTouchStart:me&&L?function(n){return xn(n.touches[0])}:void 0},d.createElement("div",{className:"PhotoView__PhotoBox",style:{transform:"matrix("+s+", 0, 0, "+s+", "+ne[0]+", "+ne[1]+")",transition:q||K?void 0:P,willChange:L?"transform":void 0}},o?d.createElement(st,M({src:o,loaded:en,broken:Me},E,{onPhotoLoad:function(n){C(M({},n,n.loaded&&Xn(n.naturalWidth||0,n.naturalHeight||0,U)))},loadingElement:b,brokenElement:x})):i&&i({attrs:E,scale:s,rotate:U})))}var Dn={x:0,touched:!1,pause:!1,lastCX:void 0,lastCY:void 0,bg:void 0,lastBg:void 0,overlay:!0,minimal:!0,scale:1,rotate:0};function ft(e){var t=e.loop,o=t===void 0?3:t,i=e.speed,r=e.easing,c=e.photoClosable,u=e.maskClosable,l=u===void 0||u,h=e.maskOpacity,v=h===void 0?1:h,f=e.pullClosable,w=f===void 0||f,_=e.bannerVisible,k=_===void 0||_,I=e.overlayRender,b=e.toolbarRender,x=e.className,R=e.maskClassName,z=e.photoClassName,Qe=e.photoWrapClassName,Le=e.loadingElement,_n=e.brokenElement,L=e.images,ge=e.index,ln=ge===void 0?0:ge,g=e.onIndexChange,C=e.visible,De=e.onClose,Oe=e.afterClose,sn=e.portalContainer,ie=Pn(Dn),N=ie[0],S=ie[1],Ze=Nn(0),j=Ze[0],dn=Ze[1],we=N.x,$e=N.touched,en=N.pause,Me=N.lastCX,D=N.lastCY,re=N.bg,q=re===void 0?v:re,Rn=N.lastBg,pe=N.overlay,U=N.minimal,Y=N.scale,vn=N.rotate,Fe=N.onScale,_e=N.onRotate,nn=e.hasOwnProperty("index"),y=nn?ln:j,fn=nn?g:dn,$=W(y),Re=L.length,hn=L[y],K=typeof o=="boolean"?o:Re>o,Ye=function(s,p){var P=On(function(m){return!m},!1)[1],E=W(0),n=function(m,Xe){var ce=W(m);function G(X){ce.current=X}return kn(function(){(function(X){s?(X(s),E.current=1):E.current=2})(G)},[m]),[ce.current,G]}(s),a=n[1];return[n[0],E.current,function(){P(),E.current===2&&(a(!1),p&&p()),E.current=0}]}(C,Oe),tn=Ye[0],ae=Ye[1],mn=Ye[2];Sn(function(){if(tn)return S({pause:!0,x:y*-(innerWidth+20)}),void($.current=y);S(Dn)},[tn]);var on=Ae({close:function(s){_e&&_e(0),S({overlay:!0,lastBg:q}),De(s)},changeIndex:function(s,p){p===void 0&&(p=!1);var P=K?$.current+(s-y):s,E=Re-1,n=Wn(P,0,E),a=K?P:n,m=innerWidth+20;S({touched:!1,lastCX:void 0,lastCY:void 0,x:-m*a,pause:p}),$.current=a,fn&&fn(K?s<0?E:s>E?0:s:n)}}),ye=on.close,ee=on.changeIndex;function xe(s){return s?ye():S({overlay:!pe})}function rn(){S({x:-(innerWidth+20)*y,lastCX:void 0,lastCY:void 0,pause:!0}),$.current=y}function gn(s,p,P,E){s==="x"?function(n){if(Me!==void 0){var a=n-Me,m=a;!K&&(y===0&&a>0||y===Re-1&&a<0)&&(m=a/2),S({touched:!0,lastCX:Me,x:-(innerWidth+20)*$.current+m,pause:!1})}else S({touched:!0,lastCX:n,x:we,pause:!1})}(p):s==="y"&&function(n,a){if(D!==void 0){var m=v===null?null:Wn(v,.01,v-Math.abs(n-D)/100/4);S({touched:!0,lastCY:D,bg:a===1?m:v,minimal:a===1})}else S({touched:!0,lastCY:n,bg:q,minimal:!0})}(P,E)}function wn(s,p){var P=s-(Me??s),E=p-(D??p),n=!1;if(P<-40)ee(y+1);else if(P>40)ee(y-1);else{var a=-(innerWidth+20)*$.current;Math.abs(E)>100&&U&&w&&(n=!0,ye()),S({touched:!1,x:a,lastCX:void 0,lastCY:void 0,bg:v,overlay:!!n||pe})}}Je("keydown",function(s){if(C)switch(s.key){case"ArrowLeft":ee(y-1,!0);break;case"ArrowRight":ee(y+1,!0);break;case"Escape":ye()}});var pn=function(s,p,P){return kn(function(){var E=s.length;return P?s.concat(s).concat(s).slice(E+p-1,E+p+2):s.slice(Math.max(p-1,0),Math.min(p+2,E+1))},[s,p,P])}(L,y,K);if(!tn)return null;var A=pe&&!ae,yn=C?q:Rn,Be=Fe&&_e&&{images:L,index:y,visible:C,onClose:ye,onIndexChange:ee,overlayVisible:A,overlay:hn&&hn.overlay,scale:Y,rotate:vn,onScale:Fe,onRotate:_e},ze=i?i(ae):400,an=r?r(ae):"cubic-bezier(0.25, 0.8, 0.25, 1)",xn=i?i(3):600,ne=r?r(3):"cubic-bezier(0.25, 0.8, 0.25, 1)";return d.createElement(et,{className:"PhotoView-Portal"+(A?"":" PhotoView-Slider__clean")+(C?"":" PhotoView-Slider__willClose")+(x?" "+x:""),role:"dialog",onClick:function(s){return s.stopPropagation()},container:sn},C&&d.createElement(it,null),d.createElement("div",{className:"PhotoView-Slider__Backdrop"+(R?" "+R:"")+(ae===1?" PhotoView-Slider__fadeIn":ae===2?" PhotoView-Slider__fadeOut":""),style:{background:yn?"rgba(0, 0, 0, "+yn+")":void 0,transitionTimingFunction:an,transitionDuration:($e?0:ze)+"ms",animationDuration:ze+"ms"},onAnimationEnd:mn}),k&&d.createElement("div",{className:"PhotoView-Slider__BannerWrap"},d.createElement("div",{className:"PhotoView-Slider__Counter"},y+1," / ",Re),d.createElement("div",{className:"PhotoView-Slider__BannerRight"},b&&Be&&b(Be),d.createElement(nt,{className:"PhotoView-Slider__toolbarIcon",onClick:ye}))),pn.map(function(s,p){var P=K||y!==0?$.current-1+p:y+p;return d.createElement(vt,{key:K?s.key+"/"+s.src+"/"+P:s.key,item:s,speed:ze,easing:an,visible:C,onReachMove:gn,onReachUp:wn,onPhotoTap:function(){return xe(c)},onMaskTap:function(){return xe(l)},wrapClassName:Qe,className:z,style:{left:(innerWidth+20)*P+"px",transform:"translate3d("+we+"px, 0px, 0)",transition:$e||en?void 0:"transform "+xn+"ms "+ne},loadingElement:Le,brokenElement:_n,onPhotoResize:rn,isActive:$.current===P,expose:S})}),!me&&k&&d.createElement(d.Fragment,null,(K||y!==0)&&d.createElement("div",{className:"PhotoView-Slider__ArrowLeft",onClick:function(){return ee(y-1,!0)}},d.createElement(tt,null)),(K||y+1<Re)&&d.createElement("div",{className:"PhotoView-Slider__ArrowRight",onClick:function(){return ee(y+1,!0)}},d.createElement(ot,null))),I&&Be&&d.createElement("div",{className:"PhotoView-Slider__Overlay"},I(Be)))}var ht=["children","onIndexChange","onVisibleChange"],mt={images:[],visible:!1,index:0};function gt(e){var t=e.children,o=e.onIndexChange,i=e.onVisibleChange,r=Mn(e,ht),c=Pn(mt),u=c[0],l=c[1],h=W(0),v=u.images,f=u.visible,w=u.index,_=Ae({nextId:function(){return h.current+=1},update:function(b){var x=v.findIndex(function(z){return z.key===b.key});if(x>-1){var R=v.slice();return R.splice(x,1,b),void l({images:R})}l(function(z){return{images:z.images.concat(b)}})},remove:function(b){l(function(x){var R=x.images.filter(function(z){return z.key!==b});return{images:R,index:Math.min(R.length-1,w)}})},show:function(b){var x=v.findIndex(function(R){return R.key===b});l({visible:!0,index:x}),i&&i(!0,x,u)}}),k=Ae({close:function(){l({visible:!1}),i&&i(!1,w,u)},changeIndex:function(b){l({index:b}),o&&o(b,u)}}),I=kn(function(){return M({},u,_)},[u,_]);return d.createElement(Fn.Provider,{value:I},t,d.createElement(ft,M({images:v,visible:f,index:w,onIndexChange:k.changeIndex,onClose:k.close},r)))}var wt=function(e){var t,o,i=e.src,r=e.render,c=e.overlay,u=e.width,l=e.height,h=e.triggers,v=h===void 0?["onClick"]:h,f=e.children,w=Kn(Fn),_=(t=function(){return w.nextId()},(o=W({sign:!1,fn:void 0}).current).sign||(o.sign=!0,o.fn=t()),o.fn),k=W(null);Gn(f==null?void 0:f.ref,function(){return k.current}),He(function(){return function(){w.remove(_)}},[]);var I=Ae({render:function(x){return r&&r(x)},show:function(x,R){w.show(_),function(z,Qe){if(f){var Le=f.props[z];Le&&Le(Qe)}}(x,R)}}),b=kn(function(){var x={};return v.forEach(function(R){x[R]=I.show.bind(null,R)}),x},[]);return He(function(){w.update({key:_,src:i,originRef:k,render:I.render,overlay:c,width:u,height:l})},[i]),f?Jn.only(Qn(f,M({},b,{ref:k}))):null};export{gt as Q,wt as Z};