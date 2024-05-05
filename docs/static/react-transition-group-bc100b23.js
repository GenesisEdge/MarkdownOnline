import{d as w,a as k,e as P,_ as U}from"./@babel-f8d566ba.js";const M={disabled:!1},_=window.React,S=_.createContext(null);var y=function(a){return a.scrollTop};const x=window.React,g=window.ReactDOM;var m="unmounted",d="exited",f="entering",v="entered",N="exiting",p=function(s){w(a,s);function a(r,e){var t;t=s.call(this,r,e)||this;var n=e,i=n&&!n.isMounting?r.enter:r.appear,u;return t.appearStatus=null,r.in?i?(u=d,t.appearStatus=f):u=v:r.unmountOnExit||r.mountOnEnter?u=m:u=d,t.state={status:u},t.nextCallback=null,t}a.getDerivedStateFromProps=function(e,t){var n=e.in;return n&&t.status===m?{status:d}:null};var o=a.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==f&&n!==v&&(t=f):(n===f||n===v)&&(t=N)}this.updateStatus(!1,t)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var e=this.props.timeout,t,n,i;return t=n=i=e,e!=null&&typeof e!="number"&&(t=e.exit,n=e.enter,i=e.appear!==void 0?e.appear:n),{exit:t,enter:n,appear:i}},o.updateStatus=function(e,t){if(e===void 0&&(e=!1),t!==null)if(this.cancelNextCallback(),t===f){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:g.findDOMNode(this);n&&y(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===d&&this.setState({status:m})},o.performEnter=function(e){var t=this,n=this.props.enter,i=this.context?this.context.isMounting:e,u=this.props.nodeRef?[i]:[g.findDOMNode(this),i],l=u[0],c=u[1],D=this.getTimeouts(),I=i?D.appear:D.enter;if(!e&&!n||M.disabled){this.safeSetState({status:v},function(){t.props.onEntered(l)});return}this.props.onEnter(l,c),this.safeSetState({status:f},function(){t.props.onEntering(l,c),t.onTransitionEnd(I,function(){t.safeSetState({status:v},function(){t.props.onEntered(l,c)})})})},o.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),i=this.props.nodeRef?void 0:g.findDOMNode(this);if(!t||M.disabled){this.safeSetState({status:d},function(){e.props.onExited(i)});return}this.props.onExit(i),this.safeSetState({status:N},function(){e.props.onExiting(i),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:d},function(){e.props.onExited(i)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},o.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(i){n&&(n=!1,t.nextCallback=null,e(i))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},o.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:g.findDOMNode(this),i=e==null&&!this.props.addEndListener;if(!n||i){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],l=u[0],c=u[1];this.props.addEndListener(l,c)}e!=null&&setTimeout(this.nextCallback,e)},o.render=function(){var e=this.state.status;if(e===m)return null;var t=this.props,n=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var i=k(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return x.createElement(S.Provider,{value:null},typeof n=="function"?n(e,i):x.cloneElement(x.Children.only(n),i))},a}(x.Component);p.contextType=S;p.propTypes={};function E(){}p.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:E,onEntering:E,onEntered:E,onExit:E,onExiting:E,onExited:E};p.UNMOUNTED=m;p.EXITED=d;p.ENTERING=f;p.ENTERED=v;p.EXITING=N;const $=p,F=window.React.Children,b=window.React.cloneElement,C=window.React.isValidElement;function R(s,a){var o=function(t){return a&&C(t)?a(t):t},r=Object.create(null);return s&&F.map(s,function(e){return e}).forEach(function(e){r[e.key]=o(e)}),r}function G(s,a){s=s||{},a=a||{};function o(c){return c in a?a[c]:s[c]}var r=Object.create(null),e=[];for(var t in s)t in a?e.length&&(r[t]=e,e=[]):e.push(t);var n,i={};for(var u in a){if(r[u])for(n=0;n<r[u].length;n++){var l=r[u][n];i[r[u][n]]=o(l)}i[u]=o(u)}for(n=0;n<e.length;n++)i[e[n]]=o(e[n]);return i}function h(s,a,o){return o[a]!=null?o[a]:s.props[a]}function L(s,a){return R(s.children,function(o){return b(o,{onExited:a.bind(null,o),in:!0,appear:h(o,"appear",s),enter:h(o,"enter",s),exit:h(o,"exit",s)})})}function V(s,a,o){var r=R(s.children),e=G(a,r);return Object.keys(e).forEach(function(t){var n=e[t];if(C(n)){var i=t in a,u=t in r,l=a[t],c=C(l)&&!l.props.in;u&&(!i||c)?e[t]=b(n,{onExited:o.bind(null,n),in:!0,exit:h(n,"exit",s),enter:h(n,"enter",s)}):!u&&i&&!c?e[t]=b(n,{in:!1}):u&&i&&C(l)&&(e[t]=b(n,{onExited:o.bind(null,n),in:l.props.in,exit:h(n,"exit",s),enter:h(n,"enter",s)}))}}),e}const T=window.React;var j=Object.values||function(s){return Object.keys(s).map(function(a){return s[a]})},W={component:"div",childFactory:function(a){return a}},O=function(s){w(a,s);function a(r,e){var t;t=s.call(this,r,e)||this;var n=t.handleExited.bind(P(t));return t.state={contextValue:{isMounting:!0},handleExited:n,firstRender:!0},t}var o=a.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},a.getDerivedStateFromProps=function(e,t){var n=t.children,i=t.handleExited,u=t.firstRender;return{children:u?L(e,i):V(e,n,i),firstRender:!1}},o.handleExited=function(e,t){var n=R(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(i){var u=U({},i.children);return delete u[e.key],{children:u}}))},o.render=function(){var e=this.props,t=e.component,n=e.childFactory,i=k(e,["component","childFactory"]),u=this.state.contextValue,l=j(this.state.children).map(n);return delete i.appear,delete i.enter,delete i.exit,t===null?T.createElement(S.Provider,{value:u},l):T.createElement(S.Provider,{value:u},T.createElement(t,i,l))},a}(T.Component);O.propTypes={};O.defaultProps=W;const z=O;export{$ as T,z as a};