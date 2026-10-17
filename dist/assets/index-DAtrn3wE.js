var iS=Object.defineProperty;var aS=(o,t,i)=>t in o?iS(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i;var Ao=(o,t,i)=>aS(o,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var kf={exports:{}},Ro={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function sS(){if(a_)return Ro;a_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return Ro.Fragment=t,Ro.jsx=i,Ro.jsxs=i,Ro}var s_;function rS(){return s_||(s_=1,kf.exports=sS()),kf.exports}var ct=rS(),Xf={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function oS(){if(r_)return ce;r_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(D){return D===null||typeof D!="object"?null:(D=_&&D[_]||D["@@iterator"],typeof D=="function"?D:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function M(D,K,St){this.props=D,this.context=K,this.refs=R,this.updater=St||y}M.prototype.isReactComponent={},M.prototype.setState=function(D,K){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,K,"setState")},M.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function v(){}v.prototype=M.prototype;function B(D,K,St){this.props=D,this.context=K,this.refs=R,this.updater=St||y}var N=B.prototype=new v;N.constructor=B,T(N,M.prototype),N.isPureReactComponent=!0;var U=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function k(D,K,St,yt,Ut,Ht){return St=Ht.ref,{$$typeof:o,type:D,key:K,ref:St!==void 0?St:null,props:Ht}}function Z(D,K){return k(D.type,K,void 0,void 0,void 0,D.props)}function w(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function C(D){var K={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(St){return K[St]})}var X=/\/+/g;function tt(D,K){return typeof D=="object"&&D!==null&&D.key!=null?C(""+D.key):K.toString(36)}function ot(){}function dt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(ot,ot):(D.status="pending",D.then(function(K){D.status==="pending"&&(D.status="fulfilled",D.value=K)},function(K){D.status==="pending"&&(D.status="rejected",D.reason=K)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ut(D,K,St,yt,Ut){var Ht=typeof D;(Ht==="undefined"||Ht==="boolean")&&(D=null);var nt=!1;if(D===null)nt=!0;else switch(Ht){case"bigint":case"string":case"number":nt=!0;break;case"object":switch(D.$$typeof){case o:case t:nt=!0;break;case g:return nt=D._init,ut(nt(D._payload),K,St,yt,Ut)}}if(nt)return Ut=Ut(D),nt=yt===""?"."+tt(D,0):yt,U(Ut)?(St="",nt!=null&&(St=nt.replace(X,"$&/")+"/"),ut(Ut,K,St,"",function(Kt){return Kt})):Ut!=null&&(w(Ut)&&(Ut=Z(Ut,St+(Ut.key==null||D&&D.key===Ut.key?"":(""+Ut.key).replace(X,"$&/")+"/")+nt)),K.push(Ut)),1;nt=0;var vt=yt===""?".":yt+":";if(U(D))for(var At=0;At<D.length;At++)yt=D[At],Ht=vt+tt(yt,At),nt+=ut(yt,K,St,Ht,Ut);else if(At=x(D),typeof At=="function")for(D=At.call(D),At=0;!(yt=D.next()).done;)yt=yt.value,Ht=vt+tt(yt,At++),nt+=ut(yt,K,St,Ht,Ut);else if(Ht==="object"){if(typeof D.then=="function")return ut(dt(D),K,St,yt,Ut);throw K=String(D),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return nt}function O(D,K,St){if(D==null)return D;var yt=[],Ut=0;return ut(D,yt,"","",function(Ht){return K.call(St,Ht,Ut++)}),yt}function H(D){if(D._status===-1){var K=D._result;K=K(),K.then(function(St){(D._status===0||D._status===-1)&&(D._status=1,D._result=St)},function(St){(D._status===0||D._status===-1)&&(D._status=2,D._result=St)}),D._status===-1&&(D._status=0,D._result=K)}if(D._status===1)return D._result.default;throw D._result}var G=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function pt(){}return ce.Children={map:O,forEach:function(D,K,St){O(D,function(){K.apply(this,arguments)},St)},count:function(D){var K=0;return O(D,function(){K++}),K},toArray:function(D){return O(D,function(K){return K})||[]},only:function(D){if(!w(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},ce.Component=M,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=B,ce.StrictMode=s,ce.Suspense=m,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ce.__COMPILER_RUNTIME={__proto__:null,c:function(D){return z.H.useMemoCache(D)}},ce.cache=function(D){return function(){return D.apply(null,arguments)}},ce.cloneElement=function(D,K,St){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var yt=T({},D.props),Ut=D.key,Ht=void 0;if(K!=null)for(nt in K.ref!==void 0&&(Ht=void 0),K.key!==void 0&&(Ut=""+K.key),K)!F.call(K,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&K.ref===void 0||(yt[nt]=K[nt]);var nt=arguments.length-2;if(nt===1)yt.children=St;else if(1<nt){for(var vt=Array(nt),At=0;At<nt;At++)vt[At]=arguments[At+2];yt.children=vt}return k(D.type,Ut,void 0,void 0,Ht,yt)},ce.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},ce.createElement=function(D,K,St){var yt,Ut={},Ht=null;if(K!=null)for(yt in K.key!==void 0&&(Ht=""+K.key),K)F.call(K,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(Ut[yt]=K[yt]);var nt=arguments.length-2;if(nt===1)Ut.children=St;else if(1<nt){for(var vt=Array(nt),At=0;At<nt;At++)vt[At]=arguments[At+2];Ut.children=vt}if(D&&D.defaultProps)for(yt in nt=D.defaultProps,nt)Ut[yt]===void 0&&(Ut[yt]=nt[yt]);return k(D,Ht,void 0,void 0,null,Ut)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(D){return{$$typeof:d,render:D}},ce.isValidElement=w,ce.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:H}},ce.memo=function(D,K){return{$$typeof:p,type:D,compare:K===void 0?null:K}},ce.startTransition=function(D){var K=z.T,St={};z.T=St;try{var yt=D(),Ut=z.S;Ut!==null&&Ut(St,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(pt,G)}catch(Ht){G(Ht)}finally{z.T=K}},ce.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ce.use=function(D){return z.H.use(D)},ce.useActionState=function(D,K,St){return z.H.useActionState(D,K,St)},ce.useCallback=function(D,K){return z.H.useCallback(D,K)},ce.useContext=function(D){return z.H.useContext(D)},ce.useDebugValue=function(){},ce.useDeferredValue=function(D,K){return z.H.useDeferredValue(D,K)},ce.useEffect=function(D,K,St){var yt=z.H;if(typeof St=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(D,K)},ce.useId=function(){return z.H.useId()},ce.useImperativeHandle=function(D,K,St){return z.H.useImperativeHandle(D,K,St)},ce.useInsertionEffect=function(D,K){return z.H.useInsertionEffect(D,K)},ce.useLayoutEffect=function(D,K){return z.H.useLayoutEffect(D,K)},ce.useMemo=function(D,K){return z.H.useMemo(D,K)},ce.useOptimistic=function(D,K){return z.H.useOptimistic(D,K)},ce.useReducer=function(D,K,St){return z.H.useReducer(D,K,St)},ce.useRef=function(D){return z.H.useRef(D)},ce.useState=function(D){return z.H.useState(D)},ce.useSyncExternalStore=function(D,K,St){return z.H.useSyncExternalStore(D,K,St)},ce.useTransition=function(){return z.H.useTransition()},ce.version="19.1.0",ce}var o_;function _d(){return o_||(o_=1,Xf.exports=oS()),Xf.exports}var Ce=_d(),Wf={exports:{}},Co={},qf={exports:{}},Yf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function lS(){return l_||(l_=1,(function(o){function t(O,H){var G=O.length;O.push(H);t:for(;0<G;){var pt=G-1>>>1,D=O[pt];if(0<l(D,H))O[pt]=H,O[G]=D,G=pt;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var H=O[0],G=O.pop();if(G!==H){O[0]=G;t:for(var pt=0,D=O.length,K=D>>>1;pt<K;){var St=2*(pt+1)-1,yt=O[St],Ut=St+1,Ht=O[Ut];if(0>l(yt,G))Ut<D&&0>l(Ht,yt)?(O[pt]=Ht,O[Ut]=G,pt=Ut):(O[pt]=yt,O[St]=G,pt=St);else if(Ut<D&&0>l(Ht,G))O[pt]=Ht,O[Ut]=G,pt=Ut;else break t}}return H}function l(O,H){var G=O.sortIndex-H.sortIndex;return G!==0?G:O.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,_=null,x=3,y=!1,T=!1,R=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=O)s(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(p)}}function z(O){if(R=!1,U(O),!T)if(i(m)!==null)T=!0,F||(F=!0,tt());else{var H=i(p);H!==null&&ut(z,H.startTime-O)}}var F=!1,k=-1,Z=5,w=-1;function C(){return M?!0:!(o.unstable_now()-w<Z)}function X(){if(M=!1,F){var O=o.unstable_now();w=O;var H=!0;try{t:{T=!1,R&&(R=!1,B(k),k=-1),y=!0;var G=x;try{e:{for(U(O),_=i(m);_!==null&&!(_.expirationTime>O&&C());){var pt=_.callback;if(typeof pt=="function"){_.callback=null,x=_.priorityLevel;var D=pt(_.expirationTime<=O);if(O=o.unstable_now(),typeof D=="function"){_.callback=D,U(O),H=!0;break e}_===i(m)&&s(m),U(O)}else s(m);_=i(m)}if(_!==null)H=!0;else{var K=i(p);K!==null&&ut(z,K.startTime-O),H=!1}}break t}finally{_=null,x=G,y=!1}H=void 0}}finally{H?tt():F=!1}}}var tt;if(typeof N=="function")tt=function(){N(X)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,dt=ot.port2;ot.port1.onmessage=X,tt=function(){dt.postMessage(null)}}else tt=function(){v(X,0)};function ut(O,H){k=v(function(){O(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(O){switch(x){case 1:case 2:case 3:var H=3;break;default:H=x}var G=x;x=H;try{return O()}finally{x=G}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(O,H){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var G=x;x=O;try{return H()}finally{x=G}},o.unstable_scheduleCallback=function(O,H,G){var pt=o.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?pt+G:pt):G=pt,O){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=G+D,O={id:g++,callback:H,priorityLevel:O,startTime:G,expirationTime:D,sortIndex:-1},G>pt?(O.sortIndex=G,t(p,O),i(m)===null&&O===i(p)&&(R?(B(k),k=-1):R=!0,ut(z,G-pt))):(O.sortIndex=D,t(m,O),T||y||(T=!0,F||(F=!0,tt()))),O},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(O){var H=x;return function(){var G=x;x=H;try{return O.apply(this,arguments)}finally{x=G}}}})(Yf)),Yf}var c_;function cS(){return c_||(c_=1,qf.exports=lS()),qf.exports}var jf={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function uS(){if(u_)return wn;u_=1;var o=_d();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,wn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},wn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},wn.requestFormReset=function(m){s.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},wn.useFormStatus=function(){return h.H.useHostTransitionStatus()},wn.version="19.1.0",wn}var f_;function fS(){if(f_)return jf.exports;f_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),jf.exports=uS(),jf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function hS(){if(h_)return Co;h_=1;var o=cS(),t=_d(),i=fS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),e;if(f===r)return d(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var S=!1,b=c.child;b;){if(b===a){S=!0,a=c,r=f;break}if(b===r){S=!0,r=c,a=f;break}b=b.sibling}if(!S){for(b=f.child;b;){if(b===a){S=!0,a=f,r=c;break}if(b===r){S=!0,r=f,a=c;break}b=b.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function tt(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case M:return"Profiler";case R:return"StrictMode";case z:return"Suspense";case F:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case N:return(e.displayName||"Context")+".Provider";case B:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case k:return n=e.displayName||null,n!==null?n:dt(e.type)||"Memo";case Z:n=e._payload,e=e._init;try{return dt(e(n))}catch{}}return null}var ut=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},pt=[],D=-1;function K(e){return{current:e}}function St(e){0>D||(e.current=pt[D],pt[D]=null,D--)}function yt(e,n){D++,pt[D]=e.current,e.current=n}var Ut=K(null),Ht=K(null),nt=K(null),vt=K(null);function At(e,n){switch(yt(nt,n),yt(Ht,e),yt(Ut,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Lg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Lg(n),e=Ng(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}St(Ut),yt(Ut,e)}function Kt(){St(Ut),St(Ht),St(nt)}function qt(e){e.memoizedState!==null&&yt(vt,e);var n=Ut.current,a=Ng(n,e.type);n!==a&&(yt(Ht,e),yt(Ut,a))}function pe(e){Ht.current===e&&(St(Ut),St(Ht)),vt.current===e&&(St(vt),yo._currentValue=G)}var an=Object.prototype.hasOwnProperty,I=o.unstable_scheduleCallback,Le=o.unstable_cancelCallback,se=o.unstable_shouldYield,ne=o.unstable_requestPaint,Pt=o.unstable_now,Ge=o.unstable_getCurrentPriorityLevel,Vt=o.unstable_ImmediatePriority,re=o.unstable_UserBlockingPriority,Ye=o.unstable_NormalPriority,je=o.unstable_LowPriority,L=o.unstable_IdlePriority,E=o.log,et=o.unstable_setDisableYieldValue,ft=null,gt=null;function lt(e){if(typeof E=="function"&&et(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(ft,e)}catch{}}var It=Math.clz32?Math.clz32:Yt,Rt=Math.log,Xt=Math.LN2;function Yt(e){return e>>>=0,e===0?32:31-(Rt(e)/Xt|0)|0}var Mt=256,Lt=4194304;function Zt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function kt(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~f,r!==0?c=Zt(r):(S&=b,S!==0?c=Zt(S):a||(a=b&~e,a!==0&&(c=Zt(a))))):(b=r&~f,b!==0?c=Zt(b):S!==0?c=Zt(S):a||(a=r&~e,a!==0&&(c=Zt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function wt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function oe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var e=Mt;return Mt<<=1,(Mt&4194048)===0&&(Mt=256),e}function bt(){var e=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),e}function Ct(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Bt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Et(e,n,a,r,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,P=e.expirationTimes,J=e.hiddenUpdates;for(a=S&~a;0<a;){var ht=31-It(a),_t=1<<ht;b[ht]=0,P[ht]=-1;var it=J[ht];if(it!==null)for(J[ht]=null,ht=0;ht<it.length;ht++){var at=it[ht];at!==null&&(at.lane&=-536870913)}a&=~_t}r!==0&&xt(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function xt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-It(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&4194090}function Gt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-It(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function ae(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function we(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ee(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Jg(e.type))}function di(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var cn=Math.random().toString(36).slice(2),un="__reactFiber$"+cn,Ke="__reactProps$"+cn,Ti="__reactContainer$"+cn,Ms="__reactEvents$"+cn,Wo="__reactListeners$"+cn,Es="__reactHandles$"+cn,Lr="__reactResources$"+cn,bi="__reactMarker$"+cn;function Ts(e){delete e[un],delete e[Ke],delete e[Ms],delete e[Wo],delete e[Es]}function zi(e){var n=e[un];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ti]||a[un]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Bg(e);e!==null;){if(a=e[un])return a;e=Bg(e)}return n}e=a,a=e.parentNode}return null}function oa(e){if(e=e[un]||e[Ti]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Xa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function la(e){var n=e[Lr];return n||(n=e[Lr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function sn(e){e[bi]=!0}var qo=new Set,Yo={};function A(e,n){q(e,n),q(e+"Capture",n)}function q(e,n){for(Yo[e]=n,e=0;e<n.length;e++)qo.add(n[e])}var st=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},j={};function Tt(e){return an.call(j,e)?!0:an.call(rt,e)?!1:st.test(e)?j[e]=!0:(rt[e]=!0,!1)}function Dt(e,n,a){if(Tt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function zt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Nt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}var Jt,te;function Wt(e){if(Jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+e+te}var fe=!1;function Te(e,n){if(!e||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(at){var it=at}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(at){it=at}e.call(_t.prototype)}}else{try{throw Error()}catch(at){it=at}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(at){if(at&&it&&typeof at.stack=="string")return[at.stack,it.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),S=f[0],b=f[1];if(S&&b){var P=S.split(`
`),J=b.split(`
`);for(c=r=0;r<P.length&&!P[r].includes("DetermineComponentFrameRoot");)r++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(r===P.length||c===J.length)for(r=P.length-1,c=J.length-1;1<=r&&0<=c&&P[r]!==J[c];)c--;for(;1<=r&&0<=c;r--,c--)if(P[r]!==J[c]){if(r!==1||c!==1)do if(r--,c--,0>c||P[r]!==J[c]){var ht=`
`+P[r].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=r&&0<=c);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Wt(a):""}function We(e){switch(e.tag){case 26:case 27:case 5:return Wt(e.type);case 16:return Wt("Lazy");case 13:return Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Wt("Activity");default:return""}}function Ne(e){try{var n="";do n+=We(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function he(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Xe(e){var n=Qt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){r=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function _e(e){e._valueTracker||(e._valueTracker=Xe(e))}function An(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Qt(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ln=/[\n"\\]/g;function gn(e){return e.replace(Ln,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fe(e,n,a,r,c,f,S,b){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+he(n)):e.value!==""+he(n)&&(e.value=""+he(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Rn(e,S,he(n)):a!=null?Rn(e,S,he(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+he(b):e.removeAttribute("name")}function Nn(e,n,a,r,c,f,S,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+he(a):"",n=n!=null?""+he(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function Rn(e,n,a){n==="number"&&pi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Qe(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+he(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Mn(e,n,a){if(n!=null&&(n=""+he(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+he(a):""}function bs(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ut(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=he(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r)}function Bn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var t0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ld(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||t0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Nd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Ld(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Ld(e,f,n[f])}function Gc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var e0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),n0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jo(e){return n0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Vc=null;function kc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var As=null,Rs=null;function Od(e){var n=oa(e);if(n&&(e=n.stateNode)){var a=e[Ke]||null;t:switch(e=n.stateNode,n.type){case"input":if(Fe(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[Ke]||null;if(!c)throw Error(s(90));Fe(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&An(r)}break t;case"textarea":Mn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Qe(e,!!a.multiple,n,!1)}}}var Xc=!1;function Pd(e,n,a){if(Xc)return e(n,a);Xc=!0;try{var r=e(n);return r}finally{if(Xc=!1,(As!==null||Rs!==null)&&(Nl(),As&&(n=As,e=Rs,Rs=As=null,Od(n),e)))for(n=0;n<e.length;n++)Od(e[n])}}function Nr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[Ke]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wc=!1;if(Fi)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Wc=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Wc=!1}var ca=null,qc=null,Zo=null;function Id(){if(Zo)return Zo;var e,n=qc,a=n.length,r,c="value"in ca?ca.value:ca.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(r=1;r<=S&&n[a-r]===c[f-r];r++);return Zo=c.slice(e,1<r?1-r:void 0)}function Ko(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Qo(){return!0}function Bd(){return!1}function zn(e){function n(a,r,c,f,S){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Qo:Bd,this.isPropagationStopped=Bd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jo=zn(Wa),Pr=g({},Wa,{view:0,detail:0}),i0=zn(Pr),Yc,jc,Ir,$o=g({},Pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ir&&(Ir&&e.type==="mousemove"?(Yc=e.screenX-Ir.screenX,jc=e.screenY-Ir.screenY):jc=Yc=0,Ir=e),Yc)},movementY:function(e){return"movementY"in e?e.movementY:jc}}),zd=zn($o),a0=g({},$o,{dataTransfer:0}),s0=zn(a0),r0=g({},Pr,{relatedTarget:0}),Zc=zn(r0),o0=g({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),l0=zn(o0),c0=g({},Wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),u0=zn(c0),f0=g({},Wa,{data:0}),Fd=zn(f0),h0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},p0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=p0[e])?!!n[e]:!1}function Kc(){return m0}var g0=g({},Pr,{key:function(e){if(e.key){var n=h0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?d0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(e){return e.type==="keypress"?Ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_0=zn(g0),v0=g({},$o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hd=zn(v0),x0=g({},Pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),S0=zn(x0),y0=g({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),M0=zn(y0),E0=g({},$o,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),T0=zn(E0),b0=g({},Wa,{newState:0,oldState:0}),A0=zn(b0),R0=[9,13,27,32],Qc=Fi&&"CompositionEvent"in window,Br=null;Fi&&"documentMode"in document&&(Br=document.documentMode);var C0=Fi&&"TextEvent"in window&&!Br,Gd=Fi&&(!Qc||Br&&8<Br&&11>=Br),Vd=" ",kd=!1;function Xd(e,n){switch(e){case"keyup":return R0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cs=!1;function w0(e,n){switch(e){case"compositionend":return Wd(n);case"keypress":return n.which!==32?null:(kd=!0,Vd);case"textInput":return e=n.data,e===Vd&&kd?null:e;default:return null}}function D0(e,n){if(Cs)return e==="compositionend"||!Qc&&Xd(e,n)?(e=Id(),Zo=qc=ca=null,Cs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Gd&&n.locale!=="ko"?null:n.data;default:return null}}var U0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!U0[e.type]:n==="textarea"}function Yd(e,n,a,r){As?Rs?Rs.push(r):Rs=[r]:As=r,n=Fl(n,"onChange"),0<n.length&&(a=new Jo("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var zr=null,Fr=null;function L0(e){Rg(e,0)}function tl(e){var n=Xa(e);if(An(n))return e}function jd(e,n){if(e==="change")return n}var Zd=!1;if(Fi){var Jc;if(Fi){var $c="oninput"in document;if(!$c){var Kd=document.createElement("div");Kd.setAttribute("oninput","return;"),$c=typeof Kd.oninput=="function"}Jc=$c}else Jc=!1;Zd=Jc&&(!document.documentMode||9<document.documentMode)}function Qd(){zr&&(zr.detachEvent("onpropertychange",Jd),Fr=zr=null)}function Jd(e){if(e.propertyName==="value"&&tl(Fr)){var n=[];Yd(n,Fr,e,kc(e)),Pd(L0,n)}}function N0(e,n,a){e==="focusin"?(Qd(),zr=n,Fr=a,zr.attachEvent("onpropertychange",Jd)):e==="focusout"&&Qd()}function O0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tl(Fr)}function P0(e,n){if(e==="click")return tl(n)}function I0(e,n){if(e==="input"||e==="change")return tl(n)}function B0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:B0;function Hr(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!an.call(n,c)||!Wn(e[c],n[c]))return!1}return!0}function $d(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tp(e,n){var a=$d(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=$d(a)}}function ep(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ep(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function np(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=pi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=pi(e.document)}return n}function tu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var z0=Fi&&"documentMode"in document&&11>=document.documentMode,ws=null,eu=null,Gr=null,nu=!1;function ip(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nu||ws==null||ws!==pi(r)||(r=ws,"selectionStart"in r&&tu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gr&&Hr(Gr,r)||(Gr=r,r=Fl(eu,"onSelect"),0<r.length&&(n=new Jo("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=ws)))}function qa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ds={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},iu={},ap={};Fi&&(ap=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Ya(e){if(iu[e])return iu[e];if(!Ds[e])return e;var n=Ds[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in ap)return iu[e]=n[a];return e}var sp=Ya("animationend"),rp=Ya("animationiteration"),op=Ya("animationstart"),F0=Ya("transitionrun"),H0=Ya("transitionstart"),G0=Ya("transitioncancel"),lp=Ya("transitionend"),cp=new Map,au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");au.push("scrollEnd");function mi(e,n){cp.set(e,n),A(n,[e])}var up=new WeakMap;function ei(e,n){if(typeof e=="object"&&e!==null){var a=up.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ne(n)},up.set(e,n),n)}return{value:e,source:n,stack:Ne(n)}}var ni=[],Us=0,su=0;function el(){for(var e=Us,n=su=Us=0;n<e;){var a=ni[n];ni[n++]=null;var r=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,r!==null&&c!==null){var S=r.pending;S===null?c.next=c:(c.next=S.next,S.next=c),r.pending=c}f!==0&&fp(a,c,f)}}function nl(e,n,a,r){ni[Us++]=e,ni[Us++]=n,ni[Us++]=a,ni[Us++]=r,su|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ru(e,n,a,r){return nl(e,n,a,r),il(e)}function Ls(e,n){return nl(e,null,null,n),il(e)}function fp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-It(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function il(e){if(50<ho)throw ho=0,df=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ns={};function V0(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,r){return new V0(e,n,a,r)}function ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hi(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function hp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function al(e,n,a,r,c,f){var S=0;if(r=e,typeof e=="function")ou(e)&&(S=1);else if(typeof e=="string")S=Xx(e,a,Ut.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=qn(31,a,n,c),e.elementType=w,e.lanes=f,e;case T:return ja(a.children,c,f,n);case R:S=8,c|=24;break;case M:return e=qn(12,a,n,c|2),e.elementType=M,e.lanes=f,e;case z:return e=qn(13,a,n,c),e.elementType=z,e.lanes=f,e;case F:return e=qn(19,a,n,c),e.elementType=F,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case N:S=10;break t;case B:S=9;break t;case U:S=11;break t;case k:S=14;break t;case Z:S=16,r=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=qn(S,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function ja(e,n,a,r){return e=qn(7,e,r,n),e.lanes=a,e}function lu(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function cu(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Os=[],Ps=0,sl=null,rl=0,ii=[],ai=0,Za=null,Gi=1,Vi="";function Ka(e,n){Os[Ps++]=rl,Os[Ps++]=sl,sl=e,rl=n}function dp(e,n,a){ii[ai++]=Gi,ii[ai++]=Vi,ii[ai++]=Za,Za=e;var r=Gi;e=Vi;var c=32-It(r)-1;r&=~(1<<c),a+=1;var f=32-It(n)+c;if(30<f){var S=c-c%5;f=(r&(1<<S)-1).toString(32),r>>=S,c-=S,Gi=1<<32-It(n)+c|a<<c|r,Vi=f+e}else Gi=1<<f|a<<c|r,Vi=e}function uu(e){e.return!==null&&(Ka(e,1),dp(e,1,0))}function fu(e){for(;e===sl;)sl=Os[--Ps],Os[Ps]=null,rl=Os[--Ps],Os[Ps]=null;for(;e===Za;)Za=ii[--ai],ii[ai]=null,Vi=ii[--ai],ii[ai]=null,Gi=ii[--ai],ii[ai]=null}var On=null,Je=null,Re=!1,Qa=null,Ai=!1,hu=Error(s(519));function Ja(e){var n=Error(s(418,""));throw Xr(ei(n,e)),hu}function pp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[un]=e,n[Ke]=r,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<mo.length;a++)xe(mo[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Nn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),_e(n);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),bs(n,r.value,r.defaultValue,r.children),_e(n)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Ug(n.textContent,a)?(r.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),r.onScroll!=null&&xe("scroll",n),r.onScrollEnd!=null&&xe("scrollend",n),r.onClick!=null&&(n.onclick=Hl),n=!0):n=!1,n||Ja(e)}function mp(e){for(On=e.return;On;)switch(On.tag){case 5:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:On=On.return}}function Vr(e){if(e!==On)return!1;if(!Re)return mp(e),Re=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||wf(e.type,e.memoizedProps)),a=!a),a&&Je&&Ja(e),mp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Je=_i(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Je=null}}else n===27?(n=Je,ba(e.type)?(e=Nf,Nf=null,Je=e):Je=n):Je=On?_i(e.stateNode.nextSibling):null;return!0}function kr(){Je=On=null,Re=!1}function gp(){var e=Qa;return e!==null&&(Gn===null?Gn=e:Gn.push.apply(Gn,e),Qa=null),e}function Xr(e){Qa===null?Qa=[e]:Qa.push(e)}var du=K(null),$a=null,ki=null;function ua(e,n,a){yt(du,n._currentValue),n._currentValue=a}function Xi(e){e._currentValue=du.current,St(du)}function pu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function mu(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var P=0;P<n.length;P++)if(b.context===n[P]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),pu(f.return,a,e),r||(S=null);break t}f=b.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(s(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),pu(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Wr(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var b=c.type;Wn(c.pendingProps.value,S.value)||(e!==null?e.push(b):e=[b])}}else if(c===vt.current){if(S=c.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(yo):e=[yo])}c=c.return}e!==null&&mu(n,e,a,r),n.flags|=262144}function ol(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ts(e){$a=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return _p($a,e)}function ll(e,n){return $a===null&&ts(e),_p(e,n)}function _p(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(s(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return a}var k0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},X0=o.unstable_scheduleCallback,W0=o.unstable_NormalPriority,fn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gu(){return{controller:new k0,data:new Map,refCount:0}}function qr(e){e.refCount--,e.refCount===0&&X0(W0,function(){e.controller.abort()})}var Yr=null,_u=0,Is=0,Bs=null;function q0(e,n){if(Yr===null){var a=Yr=[];_u=0,Is=Sf(),Bs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return _u++,n.then(vp,vp),n}function vp(){if(--_u===0&&Yr!==null){Bs!==null&&(Bs.status="fulfilled");var e=Yr;Yr=null,Is=0,Bs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Y0(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var xp=O.S;O.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&q0(e,n),xp!==null&&xp(e,n)};var es=K(null);function vu(){var e=es.current;return e!==null?e:Ve.pooledCache}function cl(e,n){n===null?yt(es,es.current):yt(es,n.pool)}function Sp(){var e=vu();return e===null?null:{parent:fn._currentValue,pool:e}}var jr=Error(s(460)),yp=Error(s(474)),ul=Error(s(542)),xu={then:function(){}};function Mp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fl(){}function Ep(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(fl,fl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,bp(e),e;default:if(typeof n.status=="string")n.then(fl,fl);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,bp(e),e}throw Zr=n,jr}}var Zr=null;function Tp(){if(Zr===null)throw Error(s(459));var e=Zr;return Zr=null,e}function bp(e){if(e===jr||e===ul)throw Error(s(483))}var fa=!1;function Su(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function da(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(De&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=il(e),fp(e,null,a),n}return nl(e,r,n,a),il(e)}function Kr(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Gt(e,a)}}function Mu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Eu=!1;function Qr(){if(Eu){var e=Bs;if(e!==null)throw e}}function Jr(e,n,a,r){Eu=!1;var c=e.updateQueue;fa=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var P=b,J=P.next;P.next=null,S===null?f=J:S.next=J,S=P;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,b=ht.lastBaseUpdate,b!==S&&(b===null?ht.firstBaseUpdate=J:b.next=J,ht.lastBaseUpdate=P))}if(f!==null){var _t=c.baseState;S=0,ht=J=P=null,b=f;do{var it=b.lane&-536870913,at=it!==b.lane;if(at?(Me&it)===it:(r&it)===it){it!==0&&it===Is&&(Eu=!0),ht!==null&&(ht=ht.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ie=e,$t=b;it=n;var Ie=a;switch($t.tag){case 1:if(ie=$t.payload,typeof ie=="function"){_t=ie.call(Ie,_t,it);break t}_t=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=$t.payload,it=typeof ie=="function"?ie.call(Ie,_t,it):ie,it==null)break t;_t=g({},_t,it);break t;case 2:fa=!0}}it=b.callback,it!==null&&(e.flags|=64,at&&(e.flags|=8192),at=c.callbacks,at===null?c.callbacks=[it]:at.push(it))}else at={lane:it,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ht===null?(J=ht=at,P=_t):ht=ht.next=at,S|=it;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;at=b,b=at.next,at.next=null,c.lastBaseUpdate=at,c.shared.pending=null}}while(!0);ht===null&&(P=_t),c.baseState=P,c.firstBaseUpdate=J,c.lastBaseUpdate=ht,f===null&&(c.shared.lanes=0),ya|=S,e.lanes=S,e.memoizedState=_t}}function Ap(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Rp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ap(a[e],n)}var zs=K(null),hl=K(0);function Cp(e,n){e=Qi,yt(hl,e),yt(zs,n),Qi=e|n.baseLanes}function Tu(){yt(hl,Qi),yt(zs,zs.current)}function bu(){Qi=hl.current,St(zs),St(hl)}var pa=0,me=null,Oe=null,rn=null,dl=!1,Fs=!1,ns=!1,pl=0,$r=0,Hs=null,j0=0;function en(){throw Error(s(321))}function Au(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function Ru(e,n,a,r,c,f){return pa=f,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?fm:hm,ns=!1,f=a(r,c),ns=!1,Fs&&(f=Dp(n,a,r,c)),wp(e),f}function wp(e){O.H=Sl;var n=Oe!==null&&Oe.next!==null;if(pa=0,rn=Oe=me=null,dl=!1,$r=0,Hs=null,n)throw Error(s(300));e===null||_n||(e=e.dependencies,e!==null&&ol(e)&&(_n=!0))}function Dp(e,n,a,r){me=e;var c=0;do{if(Fs&&(Hs=null),$r=0,Fs=!1,25<=c)throw Error(s(301));if(c+=1,rn=Oe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=ex,f=n(a,r)}while(Fs);return f}function Z0(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?to(n):n,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(me.flags|=1024),n}function Cu(){var e=pl!==0;return pl=0,e}function wu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Du(e){if(dl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}dl=!1}pa=0,rn=Oe=me=null,Fs=!1,$r=pl=0,Hs=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?me.memoizedState=rn=e:rn=rn.next=e,rn}function on(){if(Oe===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var n=rn===null?me.memoizedState:rn.next;if(n!==null)rn=n,Oe=e;else{if(e===null)throw me.alternate===null?Error(s(467)):Error(s(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},rn===null?me.memoizedState=rn=e:rn=rn.next=e}return rn}function Uu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function to(e){var n=$r;return $r+=1,Hs===null&&(Hs=[]),e=Ep(Hs,e,n),n=me,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?fm:hm),e}function ml(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return to(e);if(e.$$typeof===N)return Cn(e)}throw Error(s(438,String(e)))}function Lu(e){var n=null,a=me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=me.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Uu(),me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=C;return n.index++,a}function Wi(e,n){return typeof n=="function"?n(e):n}function gl(e){var n=on();return Nu(n,Oe,e)}function Nu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var b=S=null,P=null,J=n,ht=!1;do{var _t=J.lane&-536870913;if(_t!==J.lane?(Me&_t)===_t:(pa&_t)===_t){var it=J.revertLane;if(it===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),_t===Is&&(ht=!0);else if((pa&it)===it){J=J.next,it===Is&&(ht=!0);continue}else _t={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(b=P=_t,S=f):P=P.next=_t,me.lanes|=it,ya|=it;_t=J.action,ns&&a(f,_t),f=J.hasEagerState?J.eagerState:a(f,_t)}else it={lane:_t,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(b=P=it,S=f):P=P.next=it,me.lanes|=_t,ya|=_t;J=J.next}while(J!==null&&J!==n);if(P===null?S=f:P.next=b,!Wn(f,e.memoizedState)&&(_n=!0,ht&&(a=Bs,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=P,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ou(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);Wn(f,n.memoizedState)||(_n=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Up(e,n,a){var r=me,c=on(),f=Re;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!Wn((Oe||c).memoizedState,a);S&&(c.memoizedState=a,_n=!0),c=c.queue;var b=Op.bind(null,r,c,e);if(eo(2048,8,b,[e]),c.getSnapshot!==n||S||rn!==null&&rn.memoizedState.tag&1){if(r.flags|=2048,Gs(9,_l(),Np.bind(null,r,c,a,n),null),Ve===null)throw Error(s(349));f||(pa&124)!==0||Lp(r,n,a)}return a}function Lp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=me.updateQueue,n===null?(n=Uu(),me.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Np(e,n,a,r){n.value=a,n.getSnapshot=r,Pp(n)&&Ip(e)}function Op(e,n,a){return a(function(){Pp(n)&&Ip(e)})}function Pp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function Ip(e){var n=Ls(e,2);n!==null&&Qn(n,e,2)}function Pu(e){var n=Fn();if(typeof e=="function"){var a=e;if(e=a(),ns){lt(!0);try{a()}finally{lt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},n}function Bp(e,n,a,r){return e.baseState=a,Nu(e,Oe,typeof r=="function"?r:Wi)}function K0(e,n,a,r,c){if(xl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};O.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,zp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function zp(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=O.T,S={};O.T=S;try{var b=a(c,r),P=O.S;P!==null&&P(S,b),Fp(e,n,b)}catch(J){Iu(e,n,J)}finally{O.T=f}}else try{f=a(c,r),Fp(e,n,f)}catch(J){Iu(e,n,J)}}function Fp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Hp(e,n,r)},function(r){return Iu(e,n,r)}):Hp(e,n,a)}function Hp(e,n,a){n.status="fulfilled",n.value=a,Gp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,zp(e,a)))}function Iu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Gp(n),n=n.next;while(n!==r)}e.action=null}function Gp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Vp(e,n){return n}function kp(e,n){if(Re){var a=Ve.formState;if(a!==null){t:{var r=me;if(Re){if(Je){e:{for(var c=Je,f=Ai;c.nodeType!==8;){if(!f){c=null;break e}if(c=_i(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Je=_i(c.nextSibling),r=c.data==="F!";break t}}Ja(r)}r=!1}r&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vp,lastRenderedState:n},a.queue=r,a=lm.bind(null,me,r),r.dispatch=a,r=Pu(!1),f=Gu.bind(null,me,!1,r.queue),r=Fn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=K0.bind(null,me,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function Xp(e){var n=on();return Wp(n,Oe,e)}function Wp(e,n,a){if(n=Nu(e,n,Vp)[0],e=gl(Wi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=to(n)}catch(S){throw S===jr?ul:S}else r=n;n=on();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(me.flags|=2048,Gs(9,_l(),Q0.bind(null,c,a),null)),[r,f,e]}function Q0(e,n){e.action=n}function qp(e){var n=on(),a=Oe;if(a!==null)return Wp(n,a,e);on(),n=n.memoizedState,a=on();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Gs(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=me.updateQueue,n===null&&(n=Uu(),me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function _l(){return{destroy:void 0,resource:void 0}}function Yp(){return on().memoizedState}function vl(e,n,a,r){var c=Fn();r=r===void 0?null:r,me.flags|=e,c.memoizedState=Gs(1|n,_l(),a,r)}function eo(e,n,a,r){var c=on();r=r===void 0?null:r;var f=c.memoizedState.inst;Oe!==null&&r!==null&&Au(r,Oe.memoizedState.deps)?c.memoizedState=Gs(n,f,a,r):(me.flags|=e,c.memoizedState=Gs(1|n,f,a,r))}function jp(e,n){vl(8390656,8,e,n)}function Zp(e,n){eo(2048,8,e,n)}function Kp(e,n){return eo(4,2,e,n)}function Qp(e,n){return eo(4,4,e,n)}function Jp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function $p(e,n,a){a=a!=null?a.concat([e]):null,eo(4,4,Jp.bind(null,n,e),a)}function Bu(){}function tm(e,n){var a=on();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Au(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function em(e,n){var a=on();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Au(n,r[1]))return r[0];if(r=e(),ns){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[r,n],r}function zu(e,n,a){return a===void 0||(pa&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=ag(),me.lanes|=e,ya|=e,a)}function nm(e,n,a,r){return Wn(a,n)?a:zs.current!==null?(e=zu(e,a,r),Wn(e,n)||(_n=!0),e):(pa&42)===0?(_n=!0,e.memoizedState=a):(e=ag(),me.lanes|=e,ya|=e,n)}function im(e,n,a,r,c){var f=H.p;H.p=f!==0&&8>f?f:8;var S=O.T,b={};O.T=b,Gu(e,!1,n,a);try{var P=c(),J=O.S;if(J!==null&&J(b,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ht=Y0(P,r);no(e,n,ht,Kn(e))}else no(e,n,r,Kn(e))}catch(_t){no(e,n,{then:function(){},status:"rejected",reason:_t},Kn())}finally{H.p=f,O.T=S}}function J0(){}function Fu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=am(e).queue;im(e,c,n,G,a===null?J0:function(){return sm(e),a(r)})}function am(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:G},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function sm(e){var n=am(e).next.queue;no(e,n,{},Kn())}function Hu(){return Cn(yo)}function rm(){return on().memoizedState}function om(){return on().memoizedState}function $0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();e=ha(a);var r=da(n,e,a);r!==null&&(Qn(r,n,a),Kr(r,n,a)),n={cache:gu()},e.payload=n;return}n=n.return}}function tx(e,n,a){var r=Kn();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},xl(e)?cm(n,a):(a=ru(e,n,a,r),a!==null&&(Qn(a,e,r),um(a,n,r)))}function lm(e,n,a){var r=Kn();no(e,n,a,r)}function no(e,n,a,r){var c={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(xl(e))cm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,b=f(S,a);if(c.hasEagerState=!0,c.eagerState=b,Wn(b,S))return nl(e,n,c,0),Ve===null&&el(),!1}catch{}finally{}if(a=ru(e,n,c,r),a!==null)return Qn(a,e,r),um(a,n,r),!0}return!1}function Gu(e,n,a,r){if(r={lane:2,revertLane:Sf(),action:r,hasEagerState:!1,eagerState:null,next:null},xl(e)){if(n)throw Error(s(479))}else n=ru(e,a,r,2),n!==null&&Qn(n,e,2)}function xl(e){var n=e.alternate;return e===me||n!==null&&n===me}function cm(e,n){Fs=dl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function um(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Gt(e,a)}}var Sl={readContext:Cn,use:ml,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en},fm={readContext:Cn,use:ml,useCallback:function(e,n){return Fn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:jp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,vl(4194308,4,Jp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return vl(4194308,4,e,n)},useInsertionEffect:function(e,n){vl(4,2,e,n)},useMemo:function(e,n){var a=Fn();n=n===void 0?null:n;var r=e();if(ns){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Fn();if(a!==void 0){var c=a(n);if(ns){lt(!0);try{a(n)}finally{lt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=tx.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var n=Fn();return e={current:e},n.memoizedState=e},useState:function(e){e=Pu(e);var n=e.queue,a=lm.bind(null,me,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Bu,useDeferredValue:function(e,n){var a=Fn();return zu(a,e,n)},useTransition:function(){var e=Pu(!1);return e=im.bind(null,me,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=me,c=Fn();if(Re){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ve===null)throw Error(s(349));(Me&124)!==0||Lp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,jp(Op.bind(null,r,f,e),[e]),r.flags|=2048,Gs(9,_l(),Np.bind(null,r,f,a,n),null),a},useId:function(){var e=Fn(),n=Ve.identifierPrefix;if(Re){var a=Vi,r=Gi;a=(r&~(1<<32-It(r)-1)).toString(32)+a,n="«"+n+"R"+a,a=pl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=j0++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Hu,useFormState:kp,useActionState:kp,useOptimistic:function(e){var n=Fn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Gu.bind(null,me,!0,a),a.dispatch=n,[e,n]},useMemoCache:Lu,useCacheRefresh:function(){return Fn().memoizedState=$0.bind(null,me)}},hm={readContext:Cn,use:ml,useCallback:tm,useContext:Cn,useEffect:Zp,useImperativeHandle:$p,useInsertionEffect:Kp,useLayoutEffect:Qp,useMemo:em,useReducer:gl,useRef:Yp,useState:function(){return gl(Wi)},useDebugValue:Bu,useDeferredValue:function(e,n){var a=on();return nm(a,Oe.memoizedState,e,n)},useTransition:function(){var e=gl(Wi)[0],n=on().memoizedState;return[typeof e=="boolean"?e:to(e),n]},useSyncExternalStore:Up,useId:rm,useHostTransitionStatus:Hu,useFormState:Xp,useActionState:Xp,useOptimistic:function(e,n){var a=on();return Bp(a,Oe,e,n)},useMemoCache:Lu,useCacheRefresh:om},ex={readContext:Cn,use:ml,useCallback:tm,useContext:Cn,useEffect:Zp,useImperativeHandle:$p,useInsertionEffect:Kp,useLayoutEffect:Qp,useMemo:em,useReducer:Ou,useRef:Yp,useState:function(){return Ou(Wi)},useDebugValue:Bu,useDeferredValue:function(e,n){var a=on();return Oe===null?zu(a,e,n):nm(a,Oe.memoizedState,e,n)},useTransition:function(){var e=Ou(Wi)[0],n=on().memoizedState;return[typeof e=="boolean"?e:to(e),n]},useSyncExternalStore:Up,useId:rm,useHostTransitionStatus:Hu,useFormState:qp,useActionState:qp,useOptimistic:function(e,n){var a=on();return Oe!==null?Bp(a,Oe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Lu,useCacheRefresh:om},Vs=null,io=0;function yl(e){var n=io;return io+=1,Vs===null&&(Vs=[]),Ep(Vs,e,n)}function ao(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ml(e,n){throw n.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function dm(e){var n=e._init;return n(e._payload)}function pm(e){function n(Y,V){if(e){var Q=Y.deletions;Q===null?(Y.deletions=[V],Y.flags|=16):Q.push(V)}}function a(Y,V){if(!e)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function r(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function c(Y,V){return Y=Hi(Y,V),Y.index=0,Y.sibling=null,Y}function f(Y,V,Q){return Y.index=Q,e?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<V?(Y.flags|=67108866,V):Q):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function S(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function b(Y,V,Q,mt){return V===null||V.tag!==6?(V=lu(Q,Y.mode,mt),V.return=Y,V):(V=c(V,Q),V.return=Y,V)}function P(Y,V,Q,mt){var Ft=Q.type;return Ft===T?ht(Y,V,Q.props.children,mt,Q.key):V!==null&&(V.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===Z&&dm(Ft)===V.type)?(V=c(V,Q.props),ao(V,Q),V.return=Y,V):(V=al(Q.type,Q.key,Q.props,null,Y.mode,mt),ao(V,Q),V.return=Y,V)}function J(Y,V,Q,mt){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=cu(Q,Y.mode,mt),V.return=Y,V):(V=c(V,Q.children||[]),V.return=Y,V)}function ht(Y,V,Q,mt,Ft){return V===null||V.tag!==7?(V=ja(Q,Y.mode,mt,Ft),V.return=Y,V):(V=c(V,Q),V.return=Y,V)}function _t(Y,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=lu(""+V,Y.mode,Q),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return Q=al(V.type,V.key,V.props,null,Y.mode,Q),ao(Q,V),Q.return=Y,Q;case y:return V=cu(V,Y.mode,Q),V.return=Y,V;case Z:var mt=V._init;return V=mt(V._payload),_t(Y,V,Q)}if(ut(V)||tt(V))return V=ja(V,Y.mode,Q,null),V.return=Y,V;if(typeof V.then=="function")return _t(Y,yl(V),Q);if(V.$$typeof===N)return _t(Y,ll(Y,V),Q);Ml(Y,V)}return null}function it(Y,V,Q,mt){var Ft=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ft!==null?null:b(Y,V,""+Q,mt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return Q.key===Ft?P(Y,V,Q,mt):null;case y:return Q.key===Ft?J(Y,V,Q,mt):null;case Z:return Ft=Q._init,Q=Ft(Q._payload),it(Y,V,Q,mt)}if(ut(Q)||tt(Q))return Ft!==null?null:ht(Y,V,Q,mt,null);if(typeof Q.then=="function")return it(Y,V,yl(Q),mt);if(Q.$$typeof===N)return it(Y,V,ll(Y,Q),mt);Ml(Y,Q)}return null}function at(Y,V,Q,mt,Ft){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Y=Y.get(Q)||null,b(V,Y,""+mt,Ft);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case x:return Y=Y.get(mt.key===null?Q:mt.key)||null,P(V,Y,mt,Ft);case y:return Y=Y.get(mt.key===null?Q:mt.key)||null,J(V,Y,mt,Ft);case Z:var ge=mt._init;return mt=ge(mt._payload),at(Y,V,Q,mt,Ft)}if(ut(mt)||tt(mt))return Y=Y.get(Q)||null,ht(V,Y,mt,Ft,null);if(typeof mt.then=="function")return at(Y,V,Q,yl(mt),Ft);if(mt.$$typeof===N)return at(Y,V,Q,ll(V,mt),Ft);Ml(V,mt)}return null}function ie(Y,V,Q,mt){for(var Ft=null,ge=null,jt=V,ee=V=0,xn=null;jt!==null&&ee<Q.length;ee++){jt.index>ee?(xn=jt,jt=null):xn=jt.sibling;var be=it(Y,jt,Q[ee],mt);if(be===null){jt===null&&(jt=xn);break}e&&jt&&be.alternate===null&&n(Y,jt),V=f(be,V,ee),ge===null?Ft=be:ge.sibling=be,ge=be,jt=xn}if(ee===Q.length)return a(Y,jt),Re&&Ka(Y,ee),Ft;if(jt===null){for(;ee<Q.length;ee++)jt=_t(Y,Q[ee],mt),jt!==null&&(V=f(jt,V,ee),ge===null?Ft=jt:ge.sibling=jt,ge=jt);return Re&&Ka(Y,ee),Ft}for(jt=r(jt);ee<Q.length;ee++)xn=at(jt,Y,ee,Q[ee],mt),xn!==null&&(e&&xn.alternate!==null&&jt.delete(xn.key===null?ee:xn.key),V=f(xn,V,ee),ge===null?Ft=xn:ge.sibling=xn,ge=xn);return e&&jt.forEach(function(Da){return n(Y,Da)}),Re&&Ka(Y,ee),Ft}function $t(Y,V,Q,mt){if(Q==null)throw Error(s(151));for(var Ft=null,ge=null,jt=V,ee=V=0,xn=null,be=Q.next();jt!==null&&!be.done;ee++,be=Q.next()){jt.index>ee?(xn=jt,jt=null):xn=jt.sibling;var Da=it(Y,jt,be.value,mt);if(Da===null){jt===null&&(jt=xn);break}e&&jt&&Da.alternate===null&&n(Y,jt),V=f(Da,V,ee),ge===null?Ft=Da:ge.sibling=Da,ge=Da,jt=xn}if(be.done)return a(Y,jt),Re&&Ka(Y,ee),Ft;if(jt===null){for(;!be.done;ee++,be=Q.next())be=_t(Y,be.value,mt),be!==null&&(V=f(be,V,ee),ge===null?Ft=be:ge.sibling=be,ge=be);return Re&&Ka(Y,ee),Ft}for(jt=r(jt);!be.done;ee++,be=Q.next())be=at(jt,Y,ee,be.value,mt),be!==null&&(e&&be.alternate!==null&&jt.delete(be.key===null?ee:be.key),V=f(be,V,ee),ge===null?Ft=be:ge.sibling=be,ge=be);return e&&jt.forEach(function(nS){return n(Y,nS)}),Re&&Ka(Y,ee),Ft}function Ie(Y,V,Q,mt){if(typeof Q=="object"&&Q!==null&&Q.type===T&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:t:{for(var Ft=Q.key;V!==null;){if(V.key===Ft){if(Ft=Q.type,Ft===T){if(V.tag===7){a(Y,V.sibling),mt=c(V,Q.props.children),mt.return=Y,Y=mt;break t}}else if(V.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===Z&&dm(Ft)===V.type){a(Y,V.sibling),mt=c(V,Q.props),ao(mt,Q),mt.return=Y,Y=mt;break t}a(Y,V);break}else n(Y,V);V=V.sibling}Q.type===T?(mt=ja(Q.props.children,Y.mode,mt,Q.key),mt.return=Y,Y=mt):(mt=al(Q.type,Q.key,Q.props,null,Y.mode,mt),ao(mt,Q),mt.return=Y,Y=mt)}return S(Y);case y:t:{for(Ft=Q.key;V!==null;){if(V.key===Ft)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(Y,V.sibling),mt=c(V,Q.children||[]),mt.return=Y,Y=mt;break t}else{a(Y,V);break}else n(Y,V);V=V.sibling}mt=cu(Q,Y.mode,mt),mt.return=Y,Y=mt}return S(Y);case Z:return Ft=Q._init,Q=Ft(Q._payload),Ie(Y,V,Q,mt)}if(ut(Q))return ie(Y,V,Q,mt);if(tt(Q)){if(Ft=tt(Q),typeof Ft!="function")throw Error(s(150));return Q=Ft.call(Q),$t(Y,V,Q,mt)}if(typeof Q.then=="function")return Ie(Y,V,yl(Q),mt);if(Q.$$typeof===N)return Ie(Y,V,ll(Y,Q),mt);Ml(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(Y,V.sibling),mt=c(V,Q),mt.return=Y,Y=mt):(a(Y,V),mt=lu(Q,Y.mode,mt),mt.return=Y,Y=mt),S(Y)):a(Y,V)}return function(Y,V,Q,mt){try{io=0;var Ft=Ie(Y,V,Q,mt);return Vs=null,Ft}catch(jt){if(jt===jr||jt===ul)throw jt;var ge=qn(29,jt,null,Y.mode);return ge.lanes=mt,ge.return=Y,ge}finally{}}}var ks=pm(!0),mm=pm(!1),si=K(null),Ri=null;function ma(e){var n=e.alternate;yt(hn,hn.current&1),yt(si,e),Ri===null&&(n===null||zs.current!==null||n.memoizedState!==null)&&(Ri=e)}function gm(e){if(e.tag===22){if(yt(hn,hn.current),yt(si,e),Ri===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ri=e)}}else ga()}function ga(){yt(hn,hn.current),yt(si,si.current)}function qi(e){St(si),Ri===e&&(Ri=null),St(hn)}var hn=K(0);function El(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Lf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Vu(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ku={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=Kn(),c=ha(r);c.payload=n,a!=null&&(c.callback=a),n=da(e,c,r),n!==null&&(Qn(n,e,r),Kr(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=Kn(),c=ha(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=da(e,c,r),n!==null&&(Qn(n,e,r),Kr(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Kn(),r=ha(a);r.tag=2,n!=null&&(r.callback=n),n=da(e,r,a),n!==null&&(Qn(n,e,a),Kr(n,e,a))}};function _m(e,n,a,r,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,S):n.prototype&&n.prototype.isPureReactComponent?!Hr(a,r)||!Hr(c,f):!0}function vm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&ku.enqueueReplaceState(n,n.state,null)}function is(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Tl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function xm(e){Tl(e)}function Sm(e){console.error(e)}function ym(e){Tl(e)}function bl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Mm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Xu(e,n,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){bl(e,n)},a}function Em(e){return e=ha(e),e.tag=3,e}function Tm(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){Mm(n,a,r)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Mm(n,a,r),typeof c!="function"&&(Ma===null?Ma=new Set([this]):Ma.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function nx(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Wr(n,a,c,!0),a=si.current,a!==null){switch(a.tag){case 13:return Ri===null?mf():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===xu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),_f(e,r,c)),!1;case 22:return a.flags|=65536,r===xu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),_f(e,r,c)),!1}throw Error(s(435,a.tag))}return _f(e,r,c),mf(),!1}if(Re)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==hu&&(e=Error(s(422),{cause:r}),Xr(ei(e,a)))):(r!==hu&&(n=Error(s(423),{cause:r}),Xr(ei(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=ei(r,a),c=Xu(e.stateNode,r,c),Mu(e,c),$e!==4&&($e=2)),!1;var f=Error(s(520),{cause:r});if(f=ei(f,a),fo===null?fo=[f]:fo.push(f),$e!==4&&($e=2),n===null)return!0;r=ei(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Xu(a.stateNode,r,e),Mu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ma===null||!Ma.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Em(c),Tm(c,e,a,r),Mu(a,c),!1}a=a.return}while(a!==null);return!1}var bm=Error(s(461)),_n=!1;function En(e,n,a,r){n.child=e===null?mm(n,null,a,r):ks(n,e.child,a,r)}function Am(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var S={};for(var b in r)b!=="ref"&&(S[b]=r[b])}else S=r;return ts(n),r=Ru(e,n,a,S,f,c),b=Cu(),e!==null&&!_n?(wu(e,n,c),Yi(e,n,c)):(Re&&b&&uu(n),n.flags|=1,En(e,n,r,c),n.child)}function Rm(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!ou(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Cm(e,n,f,r,c)):(e=al(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ju(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Hr,a(S,r)&&e.ref===n.ref)return Yi(e,n,c)}return n.flags|=1,e=Hi(f,r),e.ref=n.ref,e.return=n,n.child=e}function Cm(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(Hr(f,r)&&e.ref===n.ref)if(_n=!1,n.pendingProps=r=f,Ju(e,c))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,Yi(e,n,c)}return Wu(e,n,a,r,c)}function wm(e,n,a){var r=n.pendingProps,c=r.children,f=e!==null?e.memoizedState:null;if(r.mode==="hidden"){if((n.flags&128)!==0){if(r=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~r}else n.childLanes=0,n.child=null;return Dm(e,n,r,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&cl(n,f!==null?f.cachePool:null),f!==null?Cp(n,f):Tu(),gm(n);else return n.lanes=n.childLanes=536870912,Dm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(cl(n,f.cachePool),Cp(n,f),ga(),n.memoizedState=null):(e!==null&&cl(n,null),Tu(),ga());return En(e,n,c,a),n.child}function Dm(e,n,a,r){var c=vu();return c=c===null?null:{parent:fn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&cl(n,null),Tu(),gm(n),e!==null&&Wr(e,n,r,!0),null}function Al(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Wu(e,n,a,r,c){return ts(n),a=Ru(e,n,a,r,void 0,c),r=Cu(),e!==null&&!_n?(wu(e,n,c),Yi(e,n,c)):(Re&&r&&uu(n),n.flags|=1,En(e,n,a,c),n.child)}function Um(e,n,a,r,c,f){return ts(n),n.updateQueue=null,a=Dp(n,r,a,c),wp(e),r=Cu(),e!==null&&!_n?(wu(e,n,f),Yi(e,n,f)):(Re&&r&&uu(n),n.flags|=1,En(e,n,a,f),n.child)}function Lm(e,n,a,r,c){if(ts(n),n.stateNode===null){var f=Ns,S=a.contextType;typeof S=="object"&&S!==null&&(f=Cn(S)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ku,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Su(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Cn(S):Ns,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Vu(n,a,S,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&ku.enqueueReplaceState(f,f.state,null),Jr(n,r,f,c),Qr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,P=is(a,b);f.props=P;var J=f.context,ht=a.contextType;S=Ns,typeof ht=="object"&&ht!==null&&(S=Cn(ht));var _t=a.getDerivedStateFromProps;ht=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||J!==S)&&vm(n,f,r,S),fa=!1;var it=n.memoizedState;f.state=it,Jr(n,r,f,c),Qr(),J=n.memoizedState,b||it!==J||fa?(typeof _t=="function"&&(Vu(n,a,_t,r),J=n.memoizedState),(P=fa||_m(n,a,P,r,it,J,S))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),f.props=r,f.state=J,f.context=S,r=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,yu(e,n),S=n.memoizedProps,ht=is(a,S),f.props=ht,_t=n.pendingProps,it=f.context,J=a.contextType,P=Ns,typeof J=="object"&&J!==null&&(P=Cn(J)),b=a.getDerivedStateFromProps,(J=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==_t||it!==P)&&vm(n,f,r,P),fa=!1,it=n.memoizedState,f.state=it,Jr(n,r,f,c),Qr();var at=n.memoizedState;S!==_t||it!==at||fa||e!==null&&e.dependencies!==null&&ol(e.dependencies)?(typeof b=="function"&&(Vu(n,a,b,r),at=n.memoizedState),(ht=fa||_m(n,a,ht,r,it,at,P)||e!==null&&e.dependencies!==null&&ol(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,at,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,at,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=at),f.props=r,f.state=at,f.context=P,r=ht):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Al(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=ks(n,e.child,null,c),n.child=ks(n,null,a,c)):En(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Yi(e,n,c),e}function Nm(e,n,a,r){return kr(),n.flags|=256,En(e,n,a,r),n.child}var qu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yu(e){return{baseLanes:e,cachePool:Sp()}}function ju(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ri),e}function Om(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(c?ma(n):ga(),Re){var b=Je,P;if(P=b){t:{for(P=b,b=Ai;P.nodeType!==8;){if(!b){b=null;break t}if(P=_i(P.nextSibling),P===null){b=null;break t}}b=P}b!==null?(n.memoizedState={dehydrated:b,treeContext:Za!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},P=qn(18,null,null,0),P.stateNode=b,P.return=n,n.child=P,On=n,Je=null,P=!0):P=!1}P||Ja(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Lf(b)?n.lanes=32:n.lanes=536870912,null;qi(n)}return b=r.children,r=r.fallback,c?(ga(),c=n.mode,b=Rl({mode:"hidden",children:b},c),r=ja(r,c,a,null),b.return=n,r.return=n,b.sibling=r,n.child=b,c=n.child,c.memoizedState=Yu(a),c.childLanes=ju(e,S,a),n.memoizedState=qu,r):(ma(n),Zu(n,b))}if(P=e.memoizedState,P!==null&&(b=P.dehydrated,b!==null)){if(f)n.flags&256?(ma(n),n.flags&=-257,n=Ku(e,n,a)):n.memoizedState!==null?(ga(),n.child=e.child,n.flags|=128,n=null):(ga(),c=r.fallback,b=n.mode,r=Rl({mode:"visible",children:r.children},b),c=ja(c,b,a,null),c.flags|=2,r.return=n,c.return=n,r.sibling=c,n.child=r,ks(n,e.child,null,a),r=n.child,r.memoizedState=Yu(a),r.childLanes=ju(e,S,a),n.memoizedState=qu,n=c);else if(ma(n),Lf(b)){if(S=b.nextSibling&&b.nextSibling.dataset,S)var J=S.dgst;S=J,r=Error(s(419)),r.stack="",r.digest=S,Xr({value:r,source:null,stack:null}),n=Ku(e,n,a)}else if(_n||Wr(e,n,a,!1),S=(a&e.childLanes)!==0,_n||S){if(S=Ve,S!==null&&(r=a&-a,r=(r&42)!==0?1:ae(r),r=(r&(S.suspendedLanes|a))!==0?0:r,r!==0&&r!==P.retryLane))throw P.retryLane=r,Ls(e,r),Qn(S,e,r),bm;b.data==="$?"||mf(),n=Ku(e,n,a)}else b.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,Je=_i(b.nextSibling),On=n,Re=!0,Qa=null,Ai=!1,e!==null&&(ii[ai++]=Gi,ii[ai++]=Vi,ii[ai++]=Za,Gi=e.id,Vi=e.overflow,Za=n),n=Zu(n,r.children),n.flags|=4096);return n}return c?(ga(),c=r.fallback,b=n.mode,P=e.child,J=P.sibling,r=Hi(P,{mode:"hidden",children:r.children}),r.subtreeFlags=P.subtreeFlags&65011712,J!==null?c=Hi(J,c):(c=ja(c,b,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,r=c,c=n.child,b=e.child.memoizedState,b===null?b=Yu(a):(P=b.cachePool,P!==null?(J=fn._currentValue,P=P.parent!==J?{parent:J,pool:J}:P):P=Sp(),b={baseLanes:b.baseLanes|a,cachePool:P}),c.memoizedState=b,c.childLanes=ju(e,S,a),n.memoizedState=qu,r):(ma(n),a=e.child,e=a.sibling,a=Hi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Zu(e,n){return n=Rl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Rl(e,n){return e=qn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ku(e,n,a){return ks(n,e.child,null,a),e=Zu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Pm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),pu(e.return,n,a)}function Qu(e,n,a,r,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=r,f.tail=a,f.tailMode=c)}function Im(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;if(En(e,n,r.children,a),r=hn.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pm(e,a,n);else if(e.tag===19)Pm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(yt(hn,r),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&El(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Qu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&El(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Qu(n,!0,a,null,f);break;case"together":Qu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Yi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ya|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Wr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Hi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Hi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ju(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ol(e)))}function ix(e,n,a){switch(n.tag){case 3:At(n,n.stateNode.containerInfo),ua(n,fn,e.memoizedState.cache),kr();break;case 27:case 5:qt(n);break;case 4:At(n,n.stateNode.containerInfo);break;case 10:ua(n,n.type,n.memoizedProps.value);break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Om(e,n,a):(ma(n),e=Yi(e,n,a),e!==null?e.sibling:null);ma(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Wr(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Im(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(hn,hn.current),r)break;return null;case 22:case 23:return n.lanes=0,wm(e,n,a);case 24:ua(n,fn,e.memoizedState.cache)}return Yi(e,n,a)}function Bm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!Ju(e,a)&&(n.flags&128)===0)return _n=!1,ix(e,n,a);_n=(e.flags&131072)!==0}else _n=!1,Re&&(n.flags&1048576)!==0&&dp(n,rl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var r=n.elementType,c=r._init;if(r=c(r._payload),n.type=r,typeof r=="function")ou(r)?(e=is(r,e),n.tag=1,n=Lm(null,n,r,e,a)):(n.tag=0,n=Wu(null,n,r,e,a));else{if(r!=null){if(c=r.$$typeof,c===U){n.tag=11,n=Am(null,n,r,e,a);break t}else if(c===k){n.tag=14,n=Rm(null,n,r,e,a);break t}}throw n=dt(r)||r,Error(s(306,n,""))}}return n;case 0:return Wu(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=is(r,n.pendingProps),Lm(e,n,r,c,a);case 3:t:{if(At(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,yu(e,n),Jr(n,r,null,a);var S=n.memoizedState;if(r=S.cache,ua(n,fn,r),r!==f.cache&&mu(n,[fn],a,!0),Qr(),r=S.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Nm(e,n,r,a);break t}else if(r!==c){c=ei(Error(s(424)),n),Xr(c),n=Nm(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=_i(e.firstChild),On=n,Re=!0,Qa=null,Ai=!0,a=mm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(kr(),r===c){n=Yi(e,n,a);break t}En(e,n,r,a)}n=n.child}return n;case 26:return Al(e,n),e===null?(a=Gg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,e=n.pendingProps,r=Gl(nt.current).createElement(a),r[un]=n,r[Ke]=e,bn(r,a,e),sn(r),n.stateNode=r):n.memoizedState=Gg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return qt(n),e===null&&Re&&(r=n.stateNode=zg(n.type,n.pendingProps,nt.current),On=n,Ai=!0,c=Je,ba(n.type)?(Nf=c,Je=_i(r.firstChild)):Je=c),En(e,n,n.pendingProps.children,a),Al(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((c=r=Je)&&(r=Ux(r,n.type,n.pendingProps,Ai),r!==null?(n.stateNode=r,On=n,Je=_i(r.firstChild),Ai=!1,c=!0):c=!1),c||Ja(n)),qt(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,r=f.children,wf(c,f)?r=null:S!==null&&wf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=Ru(e,n,Z0,null,null,a),yo._currentValue=c),Al(e,n),En(e,n,r,a),n.child;case 6:return e===null&&Re&&((e=a=Je)&&(a=Lx(a,n.pendingProps,Ai),a!==null?(n.stateNode=a,On=n,Je=null,e=!0):e=!1),e||Ja(n)),null;case 13:return Om(e,n,a);case 4:return At(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ks(n,null,r,a):En(e,n,r,a),n.child;case 11:return Am(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,ua(n,n.type,r.value),En(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,ts(n),c=Cn(c),r=r(c),n.flags|=1,En(e,n,r,a),n.child;case 14:return Rm(e,n,n.type,n.pendingProps,a);case 15:return Cm(e,n,n.type,n.pendingProps,a);case 19:return Im(e,n,a);case 31:return r=n.pendingProps,a=n.mode,r={mode:r.mode,children:r.children},e===null?(a=Rl(r,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Hi(e.child,r),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return wm(e,n,a);case 24:return ts(n),r=Cn(fn),e===null?(c=vu(),c===null&&(c=Ve,f=gu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Su(n),ua(n,fn,c)):((e.lanes&a)!==0&&(yu(e,n),Jr(n,null,null,a),Qr()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ua(n,fn,r)):(r=f.cache,ua(n,fn,r),r!==c.cache&&mu(n,[fn],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ji(e){e.flags|=4}function zm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!qg(n)){if(n=si.current,n!==null&&((Me&4194048)===Me?Ri!==null:(Me&62914560)!==Me&&(Me&536870912)===0||n!==Ri))throw Zr=xu,yp;e.flags|=8192}}function Cl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?bt():536870912,e.lanes|=n,Ys|=n)}function so(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function ax(e,n,a){var r=n.pendingProps;switch(fu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Xi(fn),Kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Vr(n)?ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gp())),Ze(n),null;case 26:return a=n.memoizedState,e===null?(ji(n),a!==null?(Ze(n),zm(n,a)):(Ze(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ji(n),Ze(n),zm(n,a)):(Ze(n),n.flags&=-16777217):(e.memoizedProps!==r&&ji(n),Ze(n),n.flags&=-16777217),null;case 27:pe(n),a=nt.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ji(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}e=Ut.current,Vr(n)?pp(n):(e=zg(c,r,a),n.stateNode=e,ji(n))}return Ze(n),null;case 5:if(pe(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ji(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(e=Ut.current,Vr(n))pp(n);else{switch(c=Gl(nt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?c.createElement("select",{is:r.is}):c.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?c.createElement(a,{is:r.is}):c.createElement(a)}}e[un]=n,e[Ke]=r;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(bn(e,a,r),a){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ji(n)}}return Ze(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&ji(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=nt.current,Vr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=On,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[un]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Ug(e.nodeValue,a)),e||Ja(n)}else e=Gl(e).createTextNode(r),e[un]=n,n.stateNode=e}return Ze(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Vr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[un]=n}else kr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),c=!1}else c=gp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(qi(n),n):(qi(n),null)}if(qi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=r!==null,e=e!==null&&e.memoizedState!==null,a){r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool);var f=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Cl(n,n.updateQueue),Ze(n),null;case 4:return Kt(),e===null&&Tf(n.stateNode.containerInfo),Ze(n),null;case 10:return Xi(n.type),Ze(n),null;case 19:if(St(hn),c=n.memoizedState,c===null)return Ze(n),null;if(r=(n.flags&128)!==0,f=c.rendering,f===null)if(r)so(c,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=El(e),f!==null){for(n.flags|=128,so(c,!1),e=f.updateQueue,n.updateQueue=e,Cl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)hp(a,e),a=a.sibling;return yt(hn,hn.current&1|2),n.child}e=e.sibling}c.tail!==null&&Pt()>Ul&&(n.flags|=128,r=!0,so(c,!1),n.lanes=4194304)}else{if(!r)if(e=El(f),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,Cl(n,e),so(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Re)return Ze(n),null}else 2*Pt()-c.renderingStartTime>Ul&&a!==536870912&&(n.flags|=128,r=!0,so(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=Pt(),n.sibling=null,e=hn.current,yt(hn,r?e&1|2:e&1),n):(Ze(n),null);case 22:case 23:return qi(n),bu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Cl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&St(es),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(fn),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function sx(e,n){switch(fu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xi(fn),Kt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return pe(n),null;case 13:if(qi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));kr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return St(hn),null;case 4:return Kt(),null;case 10:return Xi(n.type),null;case 22:case 23:return qi(n),bu(),e!==null&&St(es),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Xi(fn),null;case 25:return null;default:return null}}function Fm(e,n){switch(fu(n),n.tag){case 3:Xi(fn),Kt();break;case 26:case 27:case 5:pe(n);break;case 4:Kt();break;case 13:qi(n);break;case 19:St(hn);break;case 10:Xi(n.type);break;case 22:case 23:qi(n),bu(),e!==null&&St(es);break;case 24:Xi(fn)}}function ro(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,S=a.inst;r=f(),S.destroy=r}a=a.next}while(a!==c)}}catch(b){He(n,n.return,b)}}function _a(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var S=r.inst,b=S.destroy;if(b!==void 0){S.destroy=void 0,c=n;var P=a,J=b;try{J()}catch(ht){He(c,P,ht)}}}r=r.next}while(r!==f)}}catch(ht){He(n,n.return,ht)}}function Hm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Rp(n,a)}catch(r){He(e,e.return,r)}}}function Gm(e,n,a){a.props=is(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){He(e,n,r)}}function oo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(c){He(e,n,c)}}function Ci(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){He(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){He(e,n,c)}else a.current=null}function Vm(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){He(e,e.return,c)}}function $u(e,n,a){try{var r=e.stateNode;Ax(r,e.type,a,n),r[Ke]=n}catch(c){He(e,e.return,c)}}function km(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ba(e.type)||e.tag===4}function tf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||km(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ef(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Hl));else if(r!==4&&(r===27&&ba(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ef(e,n,a),e=e.sibling;e!==null;)ef(e,n,a),e=e.sibling}function wl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&ba(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(wl(e,n,a),e=e.sibling;e!==null;)wl(e,n,a),e=e.sibling}function Xm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,r,a),n[un]=e,n[Ke]=a}catch(f){He(e,e.return,f)}}var Zi=!1,nn=!1,nf=!1,Wm=typeof WeakSet=="function"?WeakSet:Set,vn=null;function rx(e,n){if(e=e.containerInfo,Rf=Yl,e=np(e),tu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,b=-1,P=-1,J=0,ht=0,_t=e,it=null;e:for(;;){for(var at;_t!==a||c!==0&&_t.nodeType!==3||(b=S+c),_t!==f||r!==0&&_t.nodeType!==3||(P=S+r),_t.nodeType===3&&(S+=_t.nodeValue.length),(at=_t.firstChild)!==null;)it=_t,_t=at;for(;;){if(_t===e)break e;if(it===a&&++J===c&&(b=S),it===f&&++ht===r&&(P=S),(at=_t.nextSibling)!==null)break;_t=it,it=_t.parentNode}_t=at}a=b===-1||P===-1?null:{start:b,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cf={focusedElem:e,selectionRange:a},Yl=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var ie=is(a.type,c,a.elementType===a.type);e=r.getSnapshotBeforeUpdate(ie,f),r.__reactInternalSnapshotBeforeUpdate=e}catch($t){He(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Uf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Uf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function qm(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:va(e,a),r&4&&ro(5,a);break;case 1:if(va(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){He(a,a.return,S)}else{var c=is(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){He(a,a.return,S)}}r&64&&Hm(a),r&512&&oo(a,a.return);break;case 3:if(va(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Rp(e,n)}catch(S){He(a,a.return,S)}}break;case 27:n===null&&r&4&&Xm(a);case 26:case 5:va(e,a),n===null&&r&4&&Vm(a),r&512&&oo(a,a.return);break;case 12:va(e,a);break;case 13:va(e,a),r&4&&Zm(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=mx.bind(null,a),Nx(e,a))));break;case 22:if(r=a.memoizedState!==null||Zi,!r){n=n!==null&&n.memoizedState!==null||nn,c=Zi;var f=nn;Zi=r,(nn=n)&&!f?xa(e,a,(a.subtreeFlags&8772)!==0):va(e,a),Zi=c,nn=f}break;case 30:break;default:va(e,a)}}function Ym(e){var n=e.alternate;n!==null&&(e.alternate=null,Ym(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ts(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,Hn=!1;function Ki(e,n,a){for(a=a.child;a!==null;)jm(e,n,a),a=a.sibling}function jm(e,n,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:nn||Ci(a,n),Ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:nn||Ci(a,n);var r=qe,c=Hn;ba(a.type)&&(qe=a.stateNode,Hn=!1),Ki(e,n,a),_o(a.stateNode),qe=r,Hn=c;break;case 5:nn||Ci(a,n);case 6:if(r=qe,c=Hn,qe=null,Ki(e,n,a),qe=r,Hn=c,qe!==null)if(Hn)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(f){He(a,n,f)}else try{qe.removeChild(a.stateNode)}catch(f){He(a,n,f)}break;case 18:qe!==null&&(Hn?(e=qe,Ig(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),bo(e)):Ig(qe,a.stateNode));break;case 4:r=qe,c=Hn,qe=a.stateNode.containerInfo,Hn=!0,Ki(e,n,a),qe=r,Hn=c;break;case 0:case 11:case 14:case 15:nn||_a(2,a,n),nn||_a(4,a,n),Ki(e,n,a);break;case 1:nn||(Ci(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Gm(a,n,r)),Ki(e,n,a);break;case 21:Ki(e,n,a);break;case 22:nn=(r=nn)||a.memoizedState!==null,Ki(e,n,a),nn=r;break;default:Ki(e,n,a)}}function Zm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{bo(e)}catch(a){He(n,n.return,a)}}function ox(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Wm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Wm),n;default:throw Error(s(435,e.tag))}}function af(e,n){var a=ox(e);n.forEach(function(r){var c=gx.bind(null,e,r);a.has(r)||(a.add(r),r.then(c,c))})}function Yn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,S=n,b=S;t:for(;b!==null;){switch(b.tag){case 27:if(ba(b.type)){qe=b.stateNode,Hn=!1;break t}break;case 5:qe=b.stateNode,Hn=!1;break t;case 3:case 4:qe=b.stateNode.containerInfo,Hn=!0;break t}b=b.return}if(qe===null)throw Error(s(160));jm(f,S,c),qe=null,Hn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Km(n,e),n=n.sibling}var gi=null;function Km(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yn(n,e),jn(e),r&4&&(_a(3,e,e.return),ro(3,e),_a(5,e,e.return));break;case 1:Yn(n,e),jn(e),r&512&&(nn||a===null||Ci(a,a.return)),r&64&&Zi&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=gi;if(Yn(n,e),jn(e),r&512&&(nn||a===null||Ci(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[bi]||f[un]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),bn(f,r,a),f[un]=e,sn(f),r=f;break t;case"link":var S=Xg("link","href",c).get(r+(a.href||""));if(S){for(var b=0;b<S.length;b++)if(f=S[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(b,1);break e}}f=c.createElement(r),bn(f,r,a),c.head.appendChild(f);break;case"meta":if(S=Xg("meta","content",c).get(r+(a.content||""))){for(b=0;b<S.length;b++)if(f=S[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(b,1);break e}}f=c.createElement(r),bn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[un]=e,sn(f),r=f}e.stateNode=r}else Wg(c,e.type,e.stateNode);else e.stateNode=kg(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Wg(c,e.type,e.stateNode):kg(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&$u(e,e.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,e),jn(e),r&512&&(nn||a===null||Ci(a,a.return)),a!==null&&r&4&&$u(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,e),jn(e),r&512&&(nn||a===null||Ci(a,a.return)),e.flags&32){c=e.stateNode;try{Bn(c,"")}catch(at){He(e,e.return,at)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,$u(e,c,a!==null?a.memoizedProps:c)),r&1024&&(nf=!0);break;case 6:if(Yn(n,e),jn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(at){He(e,e.return,at)}}break;case 3:if(Xl=null,c=gi,gi=Vl(n.containerInfo),Yn(n,e),gi=c,jn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{bo(n.containerInfo)}catch(at){He(e,e.return,at)}nf&&(nf=!1,Qm(e));break;case 4:r=gi,gi=Vl(e.stateNode.containerInfo),Yn(n,e),jn(e),gi=r;break;case 12:Yn(n,e),jn(e);break;case 13:Yn(n,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(uf=Pt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,af(e,r)));break;case 22:c=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,J=Zi,ht=nn;if(Zi=J||c,nn=ht||P,Yn(n,e),nn=ht,Zi=J,jn(e),r&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Zi||nn||as(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{b=P.stateNode;var _t=P.memoizedProps.style,it=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;b.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(at){He(P,P.return,at)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(at){He(P,P.return,at)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,af(e,a))));break;case 19:Yn(n,e),jn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,af(e,r)));break;case 30:break;case 21:break;default:Yn(n,e),jn(e)}}function jn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(km(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=tf(e);wl(e,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(Bn(S,""),a.flags&=-33);var b=tf(e);wl(e,b,S);break;case 3:case 4:var P=a.stateNode.containerInfo,J=tf(e);ef(e,J,P);break;default:throw Error(s(161))}}catch(ht){He(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Qm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Qm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function va(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)qm(e,n.alternate,n),n=n.sibling}function as(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:_a(4,n,n.return),as(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Gm(n,n.return,a),as(n);break;case 27:_o(n.stateNode);case 26:case 5:Ci(n,n.return),as(n);break;case 22:n.memoizedState===null&&as(n);break;case 30:as(n);break;default:as(n)}e=e.sibling}}function xa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:xa(c,f,a),ro(4,f);break;case 1:if(xa(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){He(r,r.return,J)}if(r=f,c=r.updateQueue,c!==null){var b=r.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)Ap(P[c],b)}catch(J){He(r,r.return,J)}}a&&S&64&&Hm(f),oo(f,f.return);break;case 27:Xm(f);case 26:case 5:xa(c,f,a),a&&r===null&&S&4&&Vm(f),oo(f,f.return);break;case 12:xa(c,f,a);break;case 13:xa(c,f,a),a&&S&4&&Zm(c,f);break;case 22:f.memoizedState===null&&xa(c,f,a),oo(f,f.return);break;case 30:break;default:xa(c,f,a)}n=n.sibling}}function sf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&qr(a))}function rf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qr(e))}function wi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Jm(e,n,a,r),n=n.sibling}function Jm(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:wi(e,n,a,r),c&2048&&ro(9,n);break;case 1:wi(e,n,a,r);break;case 3:wi(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qr(e)));break;case 12:if(c&2048){wi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,b=f.onPostCommit;typeof b=="function"&&b(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){He(n,n.return,P)}}else wi(e,n,a,r);break;case 13:wi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?wi(e,n,a,r):lo(e,n):f._visibility&2?wi(e,n,a,r):(f._visibility|=2,Xs(e,n,a,r,(n.subtreeFlags&10256)!==0)),c&2048&&sf(S,n);break;case 24:wi(e,n,a,r),c&2048&&rf(n.alternate,n);break;default:wi(e,n,a,r)}}function Xs(e,n,a,r,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,b=a,P=r,J=S.flags;switch(S.tag){case 0:case 11:case 15:Xs(f,S,b,P,c),ro(8,S);break;case 23:break;case 22:var ht=S.stateNode;S.memoizedState!==null?ht._visibility&2?Xs(f,S,b,P,c):lo(f,S):(ht._visibility|=2,Xs(f,S,b,P,c)),c&&J&2048&&sf(S.alternate,S);break;case 24:Xs(f,S,b,P,c),c&&J&2048&&rf(S.alternate,S);break;default:Xs(f,S,b,P,c)}n=n.sibling}}function lo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:lo(a,r),c&2048&&sf(r.alternate,r);break;case 24:lo(a,r),c&2048&&rf(r.alternate,r);break;default:lo(a,r)}n=n.sibling}}var co=8192;function Ws(e){if(e.subtreeFlags&co)for(e=e.child;e!==null;)$m(e),e=e.sibling}function $m(e){switch(e.tag){case 26:Ws(e),e.flags&co&&e.memoizedState!==null&&qx(gi,e.memoizedState,e.memoizedProps);break;case 5:Ws(e);break;case 3:case 4:var n=gi;gi=Vl(e.stateNode.containerInfo),Ws(e),gi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=co,co=16777216,Ws(e),co=n):Ws(e));break;default:Ws(e)}}function tg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function uo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,ng(r,e)}tg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)eg(e),e=e.sibling}function eg(e){switch(e.tag){case 0:case 11:case 15:uo(e),e.flags&2048&&_a(9,e,e.return);break;case 3:uo(e);break;case 12:uo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Dl(e)):uo(e);break;default:uo(e)}}function Dl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,ng(r,e)}tg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:_a(8,n,n.return),Dl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Dl(n));break;default:Dl(n)}e=e.sibling}}function ng(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:_a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:qr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,vn=r;else t:for(a=e;vn!==null;){r=vn;var c=r.sibling,f=r.return;if(Ym(r),r===a){vn=null;break t}if(c!==null){c.return=f,vn=c;break t}vn=f}}}var lx={getCacheForType:function(e){var n=Cn(fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},cx=typeof WeakMap=="function"?WeakMap:Map,De=0,Ve=null,ve=null,Me=0,Ue=0,Zn=null,Sa=!1,qs=!1,of=!1,Qi=0,$e=0,ya=0,ss=0,lf=0,ri=0,Ys=0,fo=null,Gn=null,cf=!1,uf=0,Ul=1/0,Ll=null,Ma=null,Tn=0,Ea=null,js=null,Zs=0,ff=0,hf=null,ig=null,ho=0,df=null;function Kn(){if((De&2)!==0&&Me!==0)return Me&-Me;if(O.T!==null){var e=Is;return e!==0?e:Sf()}return Ee()}function ag(){ri===0&&(ri=(Me&536870912)===0||Re?W():536870912);var e=si.current;return e!==null&&(e.flags|=32),ri}function Qn(e,n,a){(e===Ve&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(Ks(e,0),Ta(e,Me,ri,!1)),Bt(e,a),((De&2)===0||e!==Ve)&&(e===Ve&&((De&2)===0&&(ss|=a),$e===4&&Ta(e,Me,ri,!1)),Di(e))}function sg(e,n,a){if((De&6)!==0)throw Error(s(327));var r=!a&&(n&124)===0&&(n&e.expiredLanes)===0||wt(e,n),c=r?hx(e,n):gf(e,n,!0),f=r;do{if(c===0){qs&&!r&&Ta(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!ux(a)){c=gf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var b=e;c=fo;var P=b.current.memoizedState.isDehydrated;if(P&&(Ks(b,S).flags|=256),S=gf(b,S,!1),S!==2){if(of&&!P){b.errorRecoveryDisabledLanes|=f,ss|=f,c=4;break t}f=Gn,Gn=c,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){Ks(e,0),Ta(e,n,0,!0);break}t:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ta(r,n,ri,!Sa);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=uf+300-Pt(),10<c)){if(Ta(r,n,ri,!Sa),kt(r,0,!0)!==0)break t;r.timeoutHandle=Og(rg.bind(null,r,a,Gn,Ll,cf,n,ri,ss,Ys,Sa,f,2,-0,0),c);break t}rg(r,a,Gn,Ll,cf,n,ri,ss,Ys,Sa,f,0,-0,0)}}break}while(!0);Di(e)}function rg(e,n,a,r,c,f,S,b,P,J,ht,_t,it,at){if(e.timeoutHandle=-1,_t=n.subtreeFlags,(_t&8192||(_t&16785408)===16785408)&&(So={stylesheets:null,count:0,unsuspend:Wx},$m(n),_t=Yx(),_t!==null)){e.cancelPendingCommit=_t(dg.bind(null,e,n,f,a,r,c,S,b,P,ht,1,it,at)),Ta(e,f,S,!J);return}dg(e,n,f,a,r,c,S,b,P)}function ux(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(e,n,a,r){n&=~lf,n&=~ss,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-It(c),S=1<<f;r[f]=-1,c&=~S}a!==0&&xt(e,a,n)}function Nl(){return(De&6)===0?(po(0),!1):!0}function pf(){if(ve!==null){if(Ue===0)var e=ve.return;else e=ve,ki=$a=null,Du(e),Vs=null,io=0,e=ve;for(;e!==null;)Fm(e.alternate,e),e=e.return;ve=null}}function Ks(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Cx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),pf(),Ve=e,ve=a=Hi(e.current,null),Me=n,Ue=0,Zn=null,Sa=!1,qs=wt(e,n),of=!1,Ys=ri=lf=ss=ya=$e=0,Gn=fo=null,cf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-It(r),f=1<<c;n|=e[c],r&=~f}return Qi=n,el(),a}function og(e,n){me=null,O.H=Sl,n===jr||n===ul?(n=Tp(),Ue=3):n===yp?(n=Tp(),Ue=4):Ue=n===bm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,ve===null&&($e=1,bl(e,ei(n,e.current)))}function lg(){var e=O.H;return O.H=Sl,e===null?Sl:e}function cg(){var e=O.A;return O.A=lx,e}function mf(){$e=4,Sa||(Me&4194048)!==Me&&si.current!==null||(qs=!0),(ya&134217727)===0&&(ss&134217727)===0||Ve===null||Ta(Ve,Me,ri,!1)}function gf(e,n,a){var r=De;De|=2;var c=lg(),f=cg();(Ve!==e||Me!==n)&&(Ll=null,Ks(e,n)),n=!1;var S=$e;t:do try{if(Ue!==0&&ve!==null){var b=ve,P=Zn;switch(Ue){case 8:pf(),S=6;break t;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var J=Ue;if(Ue=0,Zn=null,Qs(e,b,P,J),a&&qs){S=0;break t}break;default:J=Ue,Ue=0,Zn=null,Qs(e,b,P,J)}}fx(),S=$e;break}catch(ht){og(e,ht)}while(!0);return n&&e.shellSuspendCounter++,ki=$a=null,De=r,O.H=c,O.A=f,ve===null&&(Ve=null,Me=0,el()),S}function fx(){for(;ve!==null;)ug(ve)}function hx(e,n){var a=De;De|=2;var r=lg(),c=cg();Ve!==e||Me!==n?(Ll=null,Ul=Pt()+500,Ks(e,n)):qs=wt(e,n);t:do try{if(Ue!==0&&ve!==null){n=ve;var f=Zn;e:switch(Ue){case 1:Ue=0,Zn=null,Qs(e,n,f,1);break;case 2:case 9:if(Mp(f)){Ue=0,Zn=null,fg(n);break}n=function(){Ue!==2&&Ue!==9||Ve!==e||(Ue=7),Di(e)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:Mp(f)?(Ue=0,Zn=null,fg(n)):(Ue=0,Zn=null,Qs(e,n,f,7));break;case 5:var S=null;switch(ve.tag){case 26:S=ve.memoizedState;case 5:case 27:var b=ve;if(!S||qg(S)){Ue=0,Zn=null;var P=b.sibling;if(P!==null)ve=P;else{var J=b.return;J!==null?(ve=J,Ol(J)):ve=null}break e}}Ue=0,Zn=null,Qs(e,n,f,5);break;case 6:Ue=0,Zn=null,Qs(e,n,f,6);break;case 8:pf(),$e=6;break t;default:throw Error(s(462))}}dx();break}catch(ht){og(e,ht)}while(!0);return ki=$a=null,O.H=r,O.A=c,De=a,ve!==null?0:(Ve=null,Me=0,el(),$e)}function dx(){for(;ve!==null&&!se();)ug(ve)}function ug(e){var n=Bm(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?Ol(e):ve=n}function fg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Um(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=Um(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:Du(n);default:Fm(a,n),n=ve=hp(n,Qi),n=Bm(a,n,Qi)}e.memoizedProps=e.pendingProps,n===null?Ol(e):ve=n}function Qs(e,n,a,r){ki=$a=null,Du(n),Vs=null,io=0;var c=n.return;try{if(nx(e,c,n,a,Me)){$e=1,bl(e,ei(a,e.current)),ve=null;return}}catch(f){if(c!==null)throw ve=c,f;$e=1,bl(e,ei(a,e.current)),ve=null;return}n.flags&32768?(Re||r===1?e=!0:qs||(Me&536870912)!==0?e=!1:(Sa=e=!0,(r===2||r===9||r===3||r===6)&&(r=si.current,r!==null&&r.tag===13&&(r.flags|=16384))),hg(n,e)):Ol(n)}function Ol(e){var n=e;do{if((n.flags&32768)!==0){hg(n,Sa);return}e=n.return;var a=ax(n.alternate,n,Qi);if(a!==null){ve=a;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);$e===0&&($e=5)}function hg(e,n){do{var a=sx(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);$e=6,ve=null}function dg(e,n,a,r,c,f,S,b,P){e.cancelPendingCommit=null;do Pl();while(Tn!==0);if((De&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=su,Et(e,a,f,S,b,P),e===Ve&&(ve=Ve=null,Me=0),js=n,Ea=e,Zs=a,ff=f,hf=c,ig=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,_x(Ye,function(){return vg(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,c=H.p,H.p=2,S=De,De|=4;try{rx(e,n,a)}finally{De=S,H.p=c,O.T=r}}Tn=1,pg(),mg(),gg()}}function pg(){if(Tn===1){Tn=0;var e=Ea,n=js,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var r=H.p;H.p=2;var c=De;De|=4;try{Km(n,e);var f=Cf,S=np(e.containerInfo),b=f.focusedElem,P=f.selectionRange;if(S!==b&&b&&b.ownerDocument&&ep(b.ownerDocument.documentElement,b)){if(P!==null&&tu(b)){var J=P.start,ht=P.end;if(ht===void 0&&(ht=J),"selectionStart"in b)b.selectionStart=J,b.selectionEnd=Math.min(ht,b.value.length);else{var _t=b.ownerDocument||document,it=_t&&_t.defaultView||window;if(it.getSelection){var at=it.getSelection(),ie=b.textContent.length,$t=Math.min(P.start,ie),Ie=P.end===void 0?$t:Math.min(P.end,ie);!at.extend&&$t>Ie&&(S=Ie,Ie=$t,$t=S);var Y=tp(b,$t),V=tp(b,Ie);if(Y&&V&&(at.rangeCount!==1||at.anchorNode!==Y.node||at.anchorOffset!==Y.offset||at.focusNode!==V.node||at.focusOffset!==V.offset)){var Q=_t.createRange();Q.setStart(Y.node,Y.offset),at.removeAllRanges(),$t>Ie?(at.addRange(Q),at.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),at.addRange(Q))}}}}for(_t=[],at=b;at=at.parentNode;)at.nodeType===1&&_t.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<_t.length;b++){var mt=_t[b];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Yl=!!Rf,Cf=Rf=null}finally{De=c,H.p=r,O.T=a}}e.current=n,Tn=2}}function mg(){if(Tn===2){Tn=0;var e=Ea,n=js,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var r=H.p;H.p=2;var c=De;De|=4;try{qm(e,n.alternate,n)}finally{De=c,H.p=r,O.T=a}}Tn=3}}function gg(){if(Tn===4||Tn===3){Tn=0,ne();var e=Ea,n=js,a=Zs,r=ig;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,js=Ea=null,_g(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ma=null),we(a),n=n.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=O.T,c=H.p,H.p=2,O.T=null;try{for(var f=e.onRecoverableError,S=0;S<r.length;S++){var b=r[S];f(b.value,{componentStack:b.stack})}}finally{O.T=n,H.p=c}}(Zs&3)!==0&&Pl(),Di(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===df?ho++:(ho=0,df=e):ho=0,po(0)}}function _g(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,qr(n)))}function Pl(e){return pg(),mg(),gg(),vg()}function vg(){if(Tn!==5)return!1;var e=Ea,n=ff;ff=0;var a=we(Zs),r=O.T,c=H.p;try{H.p=32>a?32:a,O.T=null,a=hf,hf=null;var f=Ea,S=Zs;if(Tn=0,js=Ea=null,Zs=0,(De&6)!==0)throw Error(s(331));var b=De;if(De|=4,eg(f.current),Jm(f,f.current,S,a),De=b,po(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(ft,f)}catch{}return!0}finally{H.p=c,O.T=r,_g(e,n)}}function xg(e,n,a){n=ei(a,n),n=Xu(e.stateNode,n,2),e=da(e,n,2),e!==null&&(Bt(e,2),Di(e))}function He(e,n,a){if(e.tag===3)xg(e,e,a);else for(;n!==null;){if(n.tag===3){xg(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ma===null||!Ma.has(r))){e=ei(a,e),a=Em(2),r=da(n,a,2),r!==null&&(Tm(a,r,n,e),Bt(r,2),Di(r));break}}n=n.return}}function _f(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new cx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(of=!0,c.add(a),e=px.bind(null,e,n,a),n.then(e,e))}function px(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ve===e&&(Me&a)===a&&($e===4||$e===3&&(Me&62914560)===Me&&300>Pt()-uf?(De&2)===0&&Ks(e,0):lf|=a,Ys===Me&&(Ys=0)),Di(e)}function Sg(e,n){n===0&&(n=bt()),e=Ls(e,n),e!==null&&(Bt(e,n),Di(e))}function mx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Sg(e,a)}function gx(e,n){var a=0;switch(e.tag){case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Sg(e,a)}function _x(e,n){return I(e,n)}var Il=null,Js=null,vf=!1,Bl=!1,xf=!1,rs=0;function Di(e){e!==Js&&e.next===null&&(Js===null?Il=Js=e:Js=Js.next=e),Bl=!0,vf||(vf=!0,xx())}function po(e,n){if(!xf&&Bl){xf=!0;do for(var a=!1,r=Il;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var S=r.suspendedLanes,b=r.pingedLanes;f=(1<<31-It(42|e)+1)-1,f&=c&~(S&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Tg(r,f))}else f=Me,f=kt(r,r===Ve?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||wt(r,f)||(a=!0,Tg(r,f));r=r.next}while(a);xf=!1}}function vx(){yg()}function yg(){Bl=vf=!1;var e=0;rs!==0&&(Rx()&&(e=rs),rs=0);for(var n=Pt(),a=null,r=Il;r!==null;){var c=r.next,f=Mg(r,n);f===0?(r.next=null,a===null?Il=c:a.next=c,c===null&&(Js=a)):(a=r,(e!==0||(f&3)!==0)&&(Bl=!0)),r=c}po(e)}function Mg(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-It(f),b=1<<S,P=c[S];P===-1?((b&a)===0||(b&r)!==0)&&(c[S]=oe(b,n)):P<=n&&(e.expiredLanes|=b),f&=~b}if(n=Ve,a=Me,a=kt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Le(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||wt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Le(r),we(a)){case 2:case 8:a=re;break;case 32:a=Ye;break;case 268435456:a=L;break;default:a=Ye}return r=Eg.bind(null,e),a=I(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Le(r),e.callbackPriority=2,e.callbackNode=null,2}function Eg(e,n){if(Tn!==0&&Tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Pl()&&e.callbackNode!==a)return null;var r=Me;return r=kt(e,e===Ve?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(sg(e,r,n),Mg(e,Pt()),e.callbackNode!=null&&e.callbackNode===a?Eg.bind(null,e):null)}function Tg(e,n){if(Pl())return null;sg(e,n,!0)}function xx(){wx(function(){(De&6)!==0?I(Vt,vx):yg()})}function Sf(){return rs===0&&(rs=W()),rs}function bg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:jo(""+e)}function Ag(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Sx(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=bg((c[Ke]||null).action),S=r.submitter;S&&(n=(n=S[Ke]||null)?bg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var b=new Jo("action","action",null,r,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rs!==0){var P=S?Ag(c,S):new FormData(c);Fu(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(b.preventDefault(),P=S?Ag(c,S):new FormData(c),Fu(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var yf=0;yf<au.length;yf++){var Mf=au[yf],yx=Mf.toLowerCase(),Mx=Mf[0].toUpperCase()+Mf.slice(1);mi(yx,"on"+Mx)}mi(sp,"onAnimationEnd"),mi(rp,"onAnimationIteration"),mi(op,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(F0,"onTransitionRun"),mi(H0,"onTransitionStart"),mi(G0,"onTransitionCancel"),mi(lp,"onTransitionEnd"),q("onMouseEnter",["mouseout","mouseover"]),q("onMouseLeave",["mouseout","mouseover"]),q("onPointerEnter",["pointerout","pointerover"]),q("onPointerLeave",["pointerout","pointerover"]),A("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A("onBeforeInput",["compositionend","keypress","textInput","paste"]),A("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ex=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mo));function Rg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var S=r.length-1;0<=S;S--){var b=r[S],P=b.instance,J=b.currentTarget;if(b=b.listener,P!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=J;try{f(c)}catch(ht){Tl(ht)}c.currentTarget=null,f=P}else for(S=0;S<r.length;S++){if(b=r[S],P=b.instance,J=b.currentTarget,b=b.listener,P!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=J;try{f(c)}catch(ht){Tl(ht)}c.currentTarget=null,f=P}}}}function xe(e,n){var a=n[Ms];a===void 0&&(a=n[Ms]=new Set);var r=e+"__bubble";a.has(r)||(Cg(n,e,2,!1),a.add(r))}function Ef(e,n,a){var r=0;n&&(r|=4),Cg(a,e,r,n)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Tf(e){if(!e[zl]){e[zl]=!0,qo.forEach(function(a){a!=="selectionchange"&&(Ex.has(a)||Ef(a,!1,e),Ef(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[zl]||(n[zl]=!0,Ef("selectionchange",!1,n))}}function Cg(e,n,a,r){switch(Jg(n)){case 2:var c=Kx;break;case 8:c=Qx;break;default:c=zf}a=c.bind(null,n,a,e),c=void 0,!Wc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function bf(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var S=r.tag;if(S===3||S===4){var b=r.stateNode.containerInfo;if(b===c)break;if(S===4)for(S=r.return;S!==null;){var P=S.tag;if((P===3||P===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;b!==null;){if(S=zi(b),S===null)return;if(P=S.tag,P===5||P===6||P===26||P===27){r=f=S;continue t}b=b.parentNode}}r=r.return}Pd(function(){var J=f,ht=kc(a),_t=[];t:{var it=cp.get(e);if(it!==void 0){var at=Jo,ie=e;switch(e){case"keypress":if(Ko(a)===0)break t;case"keydown":case"keyup":at=_0;break;case"focusin":ie="focus",at=Zc;break;case"focusout":ie="blur",at=Zc;break;case"beforeblur":case"afterblur":at=Zc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=s0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=S0;break;case sp:case rp:case op:at=l0;break;case lp:at=M0;break;case"scroll":case"scrollend":at=i0;break;case"wheel":at=T0;break;case"copy":case"cut":case"paste":at=u0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=Hd;break;case"toggle":case"beforetoggle":at=A0}var $t=(n&4)!==0,Ie=!$t&&(e==="scroll"||e==="scrollend"),Y=$t?it!==null?it+"Capture":null:it;$t=[];for(var V=J,Q;V!==null;){var mt=V;if(Q=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||Q===null||Y===null||(mt=Nr(V,Y),mt!=null&&$t.push(go(V,mt,Q))),Ie)break;V=V.return}0<$t.length&&(it=new at(it,ie,null,a,ht),_t.push({event:it,listeners:$t}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",at=e==="mouseout"||e==="pointerout",it&&a!==Vc&&(ie=a.relatedTarget||a.fromElement)&&(zi(ie)||ie[Ti]))break t;if((at||it)&&(it=ht.window===ht?ht:(it=ht.ownerDocument)?it.defaultView||it.parentWindow:window,at?(ie=a.relatedTarget||a.toElement,at=J,ie=ie?zi(ie):null,ie!==null&&(Ie=u(ie),$t=ie.tag,ie!==Ie||$t!==5&&$t!==27&&$t!==6)&&(ie=null)):(at=null,ie=J),at!==ie)){if($t=zd,mt="onMouseLeave",Y="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&($t=Hd,mt="onPointerLeave",Y="onPointerEnter",V="pointer"),Ie=at==null?it:Xa(at),Q=ie==null?it:Xa(ie),it=new $t(mt,V+"leave",at,a,ht),it.target=Ie,it.relatedTarget=Q,mt=null,zi(ht)===J&&($t=new $t(Y,V+"enter",ie,a,ht),$t.target=Q,$t.relatedTarget=Ie,mt=$t),Ie=mt,at&&ie)e:{for($t=at,Y=ie,V=0,Q=$t;Q;Q=$s(Q))V++;for(Q=0,mt=Y;mt;mt=$s(mt))Q++;for(;0<V-Q;)$t=$s($t),V--;for(;0<Q-V;)Y=$s(Y),Q--;for(;V--;){if($t===Y||Y!==null&&$t===Y.alternate)break e;$t=$s($t),Y=$s(Y)}$t=null}else $t=null;at!==null&&wg(_t,it,at,$t,!1),ie!==null&&Ie!==null&&wg(_t,Ie,ie,$t,!0)}}t:{if(it=J?Xa(J):window,at=it.nodeName&&it.nodeName.toLowerCase(),at==="select"||at==="input"&&it.type==="file")var Ft=jd;else if(qd(it))if(Zd)Ft=I0;else{Ft=O0;var ge=N0}else at=it.nodeName,!at||at.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?J&&Gc(J.elementType)&&(Ft=jd):Ft=P0;if(Ft&&(Ft=Ft(e,J))){Yd(_t,Ft,a,ht);break t}ge&&ge(e,it,J),e==="focusout"&&J&&it.type==="number"&&J.memoizedProps.value!=null&&Rn(it,"number",it.value)}switch(ge=J?Xa(J):window,e){case"focusin":(qd(ge)||ge.contentEditable==="true")&&(ws=ge,eu=J,Gr=null);break;case"focusout":Gr=eu=ws=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,ip(_t,a,ht);break;case"selectionchange":if(z0)break;case"keydown":case"keyup":ip(_t,a,ht)}var jt;if(Qc)t:{switch(e){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else Cs?Xd(e,a)&&(ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ee="onCompositionStart");ee&&(Gd&&a.locale!=="ko"&&(Cs||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Cs&&(jt=Id()):(ca=ht,qc="value"in ca?ca.value:ca.textContent,Cs=!0)),ge=Fl(J,ee),0<ge.length&&(ee=new Fd(ee,e,null,a,ht),_t.push({event:ee,listeners:ge}),jt?ee.data=jt:(jt=Wd(a),jt!==null&&(ee.data=jt)))),(jt=C0?w0(e,a):D0(e,a))&&(ee=Fl(J,"onBeforeInput"),0<ee.length&&(ge=new Fd("onBeforeInput","beforeinput",null,a,ht),_t.push({event:ge,listeners:ee}),ge.data=jt)),Sx(_t,e,J,a,ht)}Rg(_t,n)})}function go(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Fl(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Nr(e,a),c!=null&&r.unshift(go(e,c,f)),c=Nr(e,n),c!=null&&r.push(go(e,c,f))),e.tag===3)return r;e=e.return}return[]}function $s(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function wg(e,n,a,r,c){for(var f=n._reactName,S=[];a!==null&&a!==r;){var b=a,P=b.alternate,J=b.stateNode;if(b=b.tag,P!==null&&P===r)break;b!==5&&b!==26&&b!==27||J===null||(P=J,c?(J=Nr(a,f),J!=null&&S.unshift(go(a,J,P))):c||(J=Nr(a,f),J!=null&&S.push(go(a,J,P)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var Tx=/\r\n?/g,bx=/\u0000|\uFFFD/g;function Dg(e){return(typeof e=="string"?e:""+e).replace(Tx,`
`).replace(bx,"")}function Ug(e,n){return n=Dg(n),Dg(e)===n}function Hl(){}function Pe(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Bn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Bn(e,""+r);break;case"className":zt(e,"class",r);break;case"tabIndex":zt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":zt(e,a,r);break;case"style":Nd(e,r,f);break;case"data":if(n!=="object"){zt(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=jo(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Pe(e,n,"name",c.name,c,null),Pe(e,n,"formEncType",c.formEncType,c,null),Pe(e,n,"formMethod",c.formMethod,c,null),Pe(e,n,"formTarget",c.formTarget,c,null)):(Pe(e,n,"encType",c.encType,c,null),Pe(e,n,"method",c.method,c,null),Pe(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=jo(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Hl);break;case"onScroll":r!=null&&xe("scroll",e);break;case"onScrollEnd":r!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=jo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Dt(e,"popover",r);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Dt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=e0.get(a)||a,Dt(e,a,r))}}function Af(e,n,a,r,c,f){switch(a){case"style":Nd(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Bn(e,r):(typeof r=="number"||typeof r=="bigint")&&Bn(e,""+r);break;case"onScroll":r!=null&&xe("scroll",e);break;case"onScrollEnd":r!=null&&xe("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Hl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Yo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[Ke]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Dt(e,a,r)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pe(e,n,f,S,a,null)}}c&&Pe(e,n,"srcSet",a.srcSet,a,null),r&&Pe(e,n,"src",a.src,a,null);return;case"input":xe("invalid",e);var b=f=S=c=null,P=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var ht=a[r];if(ht!=null)switch(r){case"name":c=ht;break;case"type":S=ht;break;case"checked":P=ht;break;case"defaultChecked":J=ht;break;case"value":f=ht;break;case"defaultValue":b=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:Pe(e,n,r,ht,a,null)}}Nn(e,f,b,P,J,S,c,!1),_e(e);return;case"select":xe("invalid",e),r=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":S=b;break;case"multiple":r=b;default:Pe(e,n,c,b,a,null)}n=f,a=S,e.multiple=!!r,n!=null?Qe(e,!!r,n,!1):a!=null&&Qe(e,!!r,a,!0);return;case"textarea":xe("invalid",e),f=c=r=null;for(S in a)if(a.hasOwnProperty(S)&&(b=a[S],b!=null))switch(S){case"value":r=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Pe(e,n,S,b,a,null)}bs(e,r,c,f),_e(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(r=a[P],r!=null))switch(P){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Pe(e,n,P,r,a,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(r=0;r<mo.length;r++)xe(mo[r],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pe(e,n,J,r,a,null)}return;default:if(Gc(n)){for(ht in a)a.hasOwnProperty(ht)&&(r=a[ht],r!==void 0&&Af(e,n,ht,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Pe(e,n,b,r,a,null))}function Ax(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,b=null,P=null,J=null,ht=null;for(at in a){var _t=a[at];if(a.hasOwnProperty(at)&&_t!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":P=_t;default:r.hasOwnProperty(at)||Pe(e,n,at,null,r,_t)}}for(var it in r){var at=r[it];if(_t=a[it],r.hasOwnProperty(it)&&(at!=null||_t!=null))switch(it){case"type":f=at;break;case"name":c=at;break;case"checked":J=at;break;case"defaultChecked":ht=at;break;case"value":S=at;break;case"defaultValue":b=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:at!==_t&&Pe(e,n,it,at,r,_t)}}Fe(e,S,b,P,J,ht,f,c);return;case"select":at=S=b=it=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":at=P;default:r.hasOwnProperty(f)||Pe(e,n,f,null,r,P)}for(c in r)if(f=r[c],P=a[c],r.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":it=f;break;case"defaultValue":b=f;break;case"multiple":S=f;default:f!==P&&Pe(e,n,c,f,r,P)}n=b,a=S,r=at,it!=null?Qe(e,!!a,it,!1):!!r!=!!a&&(n!=null?Qe(e,!!a,n,!0):Qe(e,!!a,a?[]:"",!1));return;case"textarea":at=it=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Pe(e,n,b,null,r,c)}for(S in r)if(c=r[S],f=a[S],r.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":it=c;break;case"defaultValue":at=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Pe(e,n,S,c,r,f)}Mn(e,it,at);return;case"option":for(var ie in a)if(it=a[ie],a.hasOwnProperty(ie)&&it!=null&&!r.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Pe(e,n,ie,null,r,it)}for(P in r)if(it=r[P],at=a[P],r.hasOwnProperty(P)&&it!==at&&(it!=null||at!=null))switch(P){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Pe(e,n,P,it,r,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)it=a[$t],a.hasOwnProperty($t)&&it!=null&&!r.hasOwnProperty($t)&&Pe(e,n,$t,null,r,it);for(J in r)if(it=r[J],at=a[J],r.hasOwnProperty(J)&&it!==at&&(it!=null||at!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:Pe(e,n,J,it,r,at)}return;default:if(Gc(n)){for(var Ie in a)it=a[Ie],a.hasOwnProperty(Ie)&&it!==void 0&&!r.hasOwnProperty(Ie)&&Af(e,n,Ie,void 0,r,it);for(ht in r)it=r[ht],at=a[ht],!r.hasOwnProperty(ht)||it===at||it===void 0&&at===void 0||Af(e,n,ht,it,r,at);return}}for(var Y in a)it=a[Y],a.hasOwnProperty(Y)&&it!=null&&!r.hasOwnProperty(Y)&&Pe(e,n,Y,null,r,it);for(_t in r)it=r[_t],at=a[_t],!r.hasOwnProperty(_t)||it===at||it==null&&at==null||Pe(e,n,_t,it,r,at)}var Rf=null,Cf=null;function Gl(e){return e.nodeType===9?e:e.ownerDocument}function Lg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ng(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function wf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Df=null;function Rx(){var e=window.event;return e&&e.type==="popstate"?e===Df?!1:(Df=e,!0):(Df=null,!1)}var Og=typeof setTimeout=="function"?setTimeout:void 0,Cx=typeof clearTimeout=="function"?clearTimeout:void 0,Pg=typeof Promise=="function"?Promise:void 0,wx=typeof queueMicrotask=="function"?queueMicrotask:typeof Pg<"u"?function(e){return Pg.resolve(null).then(e).catch(Dx)}:Og;function Dx(e){setTimeout(function(){throw e})}function ba(e){return e==="head"}function Ig(e,n){var a=n,r=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<r&&8>r){a=r;var S=e.ownerDocument;if(a&1&&_o(S.documentElement),a&2&&_o(S.body),a&4)for(a=S.head,_o(a),S=a.firstChild;S;){var b=S.nextSibling,P=S.nodeName;S[bi]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=b}}if(c===0){e.removeChild(f),bo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:r=a.charCodeAt(0)-48;else r=0;a=f}while(a);bo(n)}function Uf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Uf(a),Ts(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ux(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[bi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function Lx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function Lf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Nx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Nf=null;function Bg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function zg(e,n,a){switch(n=Gl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function _o(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ts(e)}var oi=new Map,Fg=new Set;function Vl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=H.d;H.d={f:Ox,r:Px,D:Ix,C:Bx,L:zx,m:Fx,X:Gx,S:Hx,M:Vx};function Ox(){var e=Ji.f(),n=Nl();return e||n}function Px(e){var n=oa(e);n!==null&&n.tag===5&&n.type==="form"?sm(n):Ji.r(e)}var tr=typeof document>"u"?null:document;function Hg(e,n,a){var r=tr;if(r&&typeof n=="string"&&n){var c=gn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Fg.has(c)||(Fg.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),bn(n,"link",e),sn(n),r.head.appendChild(n)))}}function Ix(e){Ji.D(e),Hg("dns-prefetch",e,null)}function Bx(e,n){Ji.C(e,n),Hg("preconnect",e,n)}function zx(e,n,a){Ji.L(e,n,a);var r=tr;if(r&&e&&n){var c='link[rel="preload"][as="'+gn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+gn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+gn(a.imageSizes)+'"]')):c+='[href="'+gn(e)+'"]';var f=c;switch(n){case"style":f=er(e);break;case"script":f=nr(e)}oi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),oi.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(vo(f))||n==="script"&&r.querySelector(xo(f))||(n=r.createElement("link"),bn(n,"link",e),sn(n),r.head.appendChild(n)))}}function Fx(e,n){Ji.m(e,n);var a=tr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+gn(r)+'"][href="'+gn(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=nr(e)}if(!oi.has(f)&&(e=g({rel:"modulepreload",href:e},n),oi.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xo(f)))return}r=a.createElement("link"),bn(r,"link",e),sn(r),a.head.appendChild(r)}}}function Hx(e,n,a){Ji.S(e,n,a);var r=tr;if(r&&e){var c=la(r).hoistableStyles,f=er(e);n=n||"default";var S=c.get(f);if(!S){var b={loading:0,preload:null};if(S=r.querySelector(vo(f)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=oi.get(f))&&Of(e,a);var P=S=r.createElement("link");sn(P),bn(P,"link",e),P._p=new Promise(function(J,ht){P.onload=J,P.onerror=ht}),P.addEventListener("load",function(){b.loading|=1}),P.addEventListener("error",function(){b.loading|=2}),b.loading|=4,kl(S,n,r)}S={type:"stylesheet",instance:S,count:1,state:b},c.set(f,S)}}}function Gx(e,n){Ji.X(e,n);var a=tr;if(a&&e){var r=la(a).hoistableScripts,c=nr(e),f=r.get(c);f||(f=a.querySelector(xo(c)),f||(e=g({src:e,async:!0},n),(n=oi.get(c))&&Pf(e,n),f=a.createElement("script"),sn(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Vx(e,n){Ji.M(e,n);var a=tr;if(a&&e){var r=la(a).hoistableScripts,c=nr(e),f=r.get(c);f||(f=a.querySelector(xo(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=oi.get(c))&&Pf(e,n),f=a.createElement("script"),sn(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Gg(e,n,a,r){var c=(c=nt.current)?Vl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=er(a.href),a=la(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=er(a.href);var f=la(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(vo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),oi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(e,a),f||kx(c,e,a,S.state))),n&&r===null)throw Error(s(528,""));return S}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=nr(a),a=la(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function er(e){return'href="'+gn(e)+'"'}function vo(e){return'link[rel="stylesheet"]['+e+"]"}function Vg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function kx(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),bn(n,"link",a),sn(n),e.head.appendChild(n))}function nr(e){return'[src="'+gn(e)+'"]'}function xo(e){return"script[async]"+e}function kg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+gn(a.href)+'"]');if(r)return n.instance=r,sn(r),r;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),sn(r),bn(r,"style",c),kl(r,a.precedence,e),n.instance=r;case"stylesheet":c=er(a.href);var f=e.querySelector(vo(c));if(f)return n.state.loading|=4,n.instance=f,sn(f),f;r=Vg(a),(c=oi.get(c))&&Of(r,c),f=(e.ownerDocument||e).createElement("link"),sn(f);var S=f;return S._p=new Promise(function(b,P){S.onload=b,S.onerror=P}),bn(f,"link",r),n.state.loading|=4,kl(f,a.precedence,e),n.instance=f;case"script":return f=nr(a.src),(c=e.querySelector(xo(f)))?(n.instance=c,sn(c),c):(r=a,(c=oi.get(f))&&(r=g({},a),Pf(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),sn(c),bn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,kl(r,a.precedence,e));return n.instance}function kl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,S=0;S<r.length;S++){var b=r[S];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Of(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Pf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Xl=null;function Xg(e,n,a){if(Xl===null){var r=new Map,c=Xl=new Map;c.set(a,r)}else c=Xl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[bi]||f[un]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var b=r.get(S);b?b.push(f):r.set(S,[f])}}return r}function Wg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Xx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function qg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var So=null;function Wx(){}function qx(e,n,a){if(So===null)throw Error(s(475));var r=So;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=er(a.href),f=e.querySelector(vo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=Wl.bind(r),e.then(r,r)),n.state.loading|=4,n.instance=f,sn(f);return}f=e.ownerDocument||e,a=Vg(a),(c=oi.get(c))&&Of(a,c),f=f.createElement("link"),sn(f);var S=f;S._p=new Promise(function(b,P){S.onload=b,S.onerror=P}),bn(f,"link",a),n.instance=f}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(r.count++,n=Wl.bind(r),e.addEventListener("load",n),e.addEventListener("error",n))}}function Yx(){if(So===null)throw Error(s(475));var e=So;return e.stylesheets&&e.count===0&&If(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&If(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Wl(){if(this.count--,this.count===0){if(this.stylesheets)If(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ql=null;function If(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ql=new Map,n.forEach(jx,e),ql=null,Wl.call(e))}function jx(e,n){if(!(n.state.loading&4)){var a=ql.get(e);if(a)var r=a.get(null);else{a=new Map,ql.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),r=S)}r&&a.set(null,r)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||r,f===r&&a.set(null,c),a.set(S,c),this.count++,r=Wl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var yo={$$typeof:N,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function Zx(e,n,a,r,c,f,S,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Yg(e,n,a,r,c,f,S,b,P,J,ht,_t){return e=new Zx(e,n,a,S,b,P,J,_t),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),e.current=f,f.stateNode=e,n=gu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Su(f),e}function jg(e){return e?(e=Ns,e):Ns}function Zg(e,n,a,r,c,f){c=jg(c),r.context===null?r.context=c:r.pendingContext=c,r=ha(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=da(e,r,n),a!==null&&(Qn(a,e,n),Kr(a,e,n))}function Kg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Bf(e,n){Kg(e,n),(e=e.alternate)&&Kg(e,n)}function Qg(e){if(e.tag===13){var n=Ls(e,67108864);n!==null&&Qn(n,e,67108864),Bf(e,67108864)}}var Yl=!0;function Kx(e,n,a,r){var c=O.T;O.T=null;var f=H.p;try{H.p=2,zf(e,n,a,r)}finally{H.p=f,O.T=c}}function Qx(e,n,a,r){var c=O.T;O.T=null;var f=H.p;try{H.p=8,zf(e,n,a,r)}finally{H.p=f,O.T=c}}function zf(e,n,a,r){if(Yl){var c=Ff(r);if(c===null)bf(e,n,r,jl,a),$g(e,r);else if($x(c,e,n,a,r))r.stopPropagation();else if($g(e,r),n&4&&-1<Jx.indexOf(e)){for(;c!==null;){var f=oa(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Zt(f.pendingLanes);if(S!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;S;){var P=1<<31-It(S);b.entanglements[1]|=P,S&=~P}Di(f),(De&6)===0&&(Ul=Pt()+500,po(0))}}break;case 13:b=Ls(f,2),b!==null&&Qn(b,f,2),Nl(),Bf(f,2)}if(f=Ff(r),f===null&&bf(e,n,r,jl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else bf(e,n,r,null,a)}}function Ff(e){return e=kc(e),Hf(e)}var jl=null;function Hf(e){if(jl=null,e=zi(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return jl=e,null}function Jg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ge()){case Vt:return 2;case re:return 8;case Ye:case je:return 32;case L:return 268435456;default:return 32}default:return 32}}var Gf=!1,Aa=null,Ra=null,Ca=null,Mo=new Map,Eo=new Map,wa=[],Jx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $g(e,n){switch(e){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":Mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(n.pointerId)}}function To(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=oa(n),n!==null&&Qg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function $x(e,n,a,r,c){switch(n){case"focusin":return Aa=To(Aa,e,n,a,r,c),!0;case"dragenter":return Ra=To(Ra,e,n,a,r,c),!0;case"mouseover":return Ca=To(Ca,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Mo.set(f,To(Mo.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Eo.set(f,To(Eo.get(f)||null,e,n,a,r,c)),!0}return!1}function t_(e){var n=zi(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,di(e.priority,function(){if(a.tag===13){var r=Kn();r=ae(r);var c=Ls(a,r);c!==null&&Qn(c,a,r),Bf(a,r)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Ff(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Vc=r,a.target.dispatchEvent(r),Vc=null}else return n=oa(a),n!==null&&Qg(n),e.blockedOn=a,!1;n.shift()}return!0}function e_(e,n,a){Zl(e)&&a.delete(n)}function tS(){Gf=!1,Aa!==null&&Zl(Aa)&&(Aa=null),Ra!==null&&Zl(Ra)&&(Ra=null),Ca!==null&&Zl(Ca)&&(Ca=null),Mo.forEach(e_),Eo.forEach(e_)}function Kl(e,n){e.blockedOn===n&&(e.blockedOn=null,Gf||(Gf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,tS)))}var Ql=null;function n_(e){Ql!==e&&(Ql=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ql===e&&(Ql=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(Hf(r||a)===null)continue;break}var f=oa(a);f!==null&&(e.splice(n,3),n-=3,Fu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function bo(e){function n(P){return Kl(P,e)}Aa!==null&&Kl(Aa,e),Ra!==null&&Kl(Ra,e),Ca!==null&&Kl(Ca,e),Mo.forEach(n),Eo.forEach(n);for(var a=0;a<wa.length;a++){var r=wa[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<wa.length&&(a=wa[0],a.blockedOn===null);)t_(a),a.blockedOn===null&&wa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],S=c[Ke]||null;if(typeof f=="function")S||n_(a);else if(S){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[Ke]||null)b=S.formAction;else if(Hf(c)!==null)continue}else b=S.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),n_(a)}}}function Vf(e){this._internalRoot=e}Jl.prototype.render=Vf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Kn();Zg(a,r,e,n,null,null)},Jl.prototype.unmount=Vf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Zg(e.current,2,null,e,null,null),Nl(),n[Ti]=null}};function Jl(e){this._internalRoot=e}Jl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ee();e={blockedOn:null,target:e,priority:n};for(var a=0;a<wa.length&&n!==0&&n<wa[a].priority;a++);wa.splice(a,0,e),a===0&&t_(e)}};var i_=t.version;if(i_!=="19.1.0")throw Error(s(527,i_,"19.1.0"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var eS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{ft=$l.inject(eS),gt=$l}catch{}}return Co.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=xm,f=Sm,S=ym,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=Yg(e,1,!1,null,null,a,r,c,f,S,b,null),e[Ti]=n.current,Tf(e),new Vf(n)},Co.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=xm,S=Sm,b=ym,P=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=Yg(e,1,!0,n,a??null,r,c,f,S,b,P,J),n.context=jg(null),a=n.current,r=Kn(),r=ae(r),c=ha(r),c.callback=null,da(a,c,r),a=r,n.current.lanes=a,Bt(n,a),Di(n),e[Ti]=n.current,Tf(e),new Jl(n)},Co.version="19.1.0",Co}var d_;function dS(){if(d_)return Wf.exports;d_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Wf.exports=hS(),Wf.exports}var pS=dS();class mS{constructor(){Ao(this,"worker",new Worker(new URL(""+new URL("engine.worker-B5M-ZpJh.js",import.meta.url).href,import.meta.url),{type:"module"}));Ao(this,"nextId",0);Ao(this,"failure");Ao(this,"pending",new Map);this.worker.onmessage=({data:t})=>{const i=this.pending.get(t.id);i&&(this.pending.delete(t.id),t.error?i.reject(new Error(t.error)):i.resolve(t))},this.worker.onerror=t=>this.fail(new Error(t.message||"Simulation worker failed. Reload to retry."))}fail(t){this.failure=t;for(const i of this.pending.values())i.reject(t);this.pending.clear()}request(t,i){if(this.failure)return Promise.reject(this.failure);const s=++this.nextId;return new Promise((l,u)=>{this.pending.set(s,{resolve:l,reject:u}),this.worker.postMessage({id:s,action:t,json:i,baseUrl:document.baseURI})})}async initialize(){const t=setTimeout(()=>{this.fail(new Error("WASM startup timed out after 60 seconds. Check that the static host serves all wasm/_framework assets, then reload.")),this.worker.terminate()},6e4);try{await this.request("init")}finally{clearTimeout(t)}}configure(t){return this.request("configure",t)}step(){return this.request("step")}reset(){return this.request("reset")}dispose(){this.fail(new Error("Simulation closed.")),this.worker.terminate()}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vd="180",Sr={ROTATE:0,DOLLY:1,PAN:2},vr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gS=0,p_=1,_S=2,yv=1,vS=2,aa=3,Ga=0,Xn=1,sa=2,Fa=0,yr=1,m_=2,g_=3,__=4,xS=5,ps=100,SS=101,yS=102,MS=103,ES=104,TS=200,bS=201,AS=202,RS=203,Ch=204,wh=205,CS=206,wS=207,DS=208,US=209,LS=210,NS=211,OS=212,PS=213,IS=214,Dh=0,Uh=1,Lh=2,Er=3,Nh=4,Oh=5,Ph=6,Ih=7,Mv=0,BS=1,zS=2,Ha=0,FS=1,HS=2,GS=3,VS=4,kS=5,XS=6,WS=7,Ev=300,Tr=301,br=302,Bh=303,zh=304,zc=306,Fh=1e3,gs=1001,Hh=1002,ti=1003,qS=1004,tc=1005,Li=1006,Zf=1007,_s=1008,Pi=1009,Tv=1010,bv=1011,zo=1012,xd=1013,vs=1014,Ni=1015,ko=1016,Sd=1017,yd=1018,Fo=1020,Av=35902,Rv=35899,Cv=1021,wv=1022,Mi=1023,Ho=1026,Go=1027,Md=1028,Ed=1029,Dv=1030,Td=1031,bd=1033,Rc=33776,Cc=33777,wc=33778,Dc=33779,Gh=35840,Vh=35841,kh=35842,Xh=35843,Wh=36196,qh=37492,Yh=37496,jh=37808,Zh=37809,Kh=37810,Qh=37811,Jh=37812,$h=37813,td=37814,ed=37815,nd=37816,id=37817,ad=37818,sd=37819,rd=37820,od=37821,ld=36492,cd=36494,ud=36495,fd=36283,hd=36284,dd=36285,pd=36286,YS=3200,jS=3201,Uv=0,ZS=1,za="",ci="srgb",Ar="srgb-linear",Nc="linear",Be="srgb",ir=7680,v_=519,KS=512,QS=513,JS=514,Lv=515,$S=516,ty=517,ey=518,ny=519,x_=35044,iy=35048,S_="300 es",Oi=2e3,Oc=2001;class ys{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uc=Math.PI/180,md=180/Math.PI;function Xo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]).toLowerCase()}function Se(o,t,i){return Math.max(t,Math.min(i,o))}function ay(o,t){return(o%t+t)%t}function Kf(o,t,i){return(1-i)*o+i*t}function wo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const sy={DEG2RAD:Uc};class le{constructor(t=0,i=0){le.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3];const x=u[h+0],y=u[h+1],T=u[h+2],R=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=x,t[i+1]=y,t[i+2]=T,t[i+3]=R;return}if(_!==R||m!==x||p!==y||g!==T){let M=1-d;const v=m*x+p*y+g*T+_*R,B=v>=0?1:-1,N=1-v*v;if(N>Number.EPSILON){const z=Math.sqrt(N),F=Math.atan2(z,v*B);M=Math.sin(M*F)/z,d=Math.sin(d*F)/z}const U=d*B;if(m=m*M+x*U,p=p*M+y*U,g=g*M+T*U,_=_*M+R*U,M===1-d){const z=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=z,p*=z,g*=z,_*=z}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=u[h],x=u[h+1],y=u[h+2],T=u[h+3];return t[i]=d*T+g*_+m*y-p*x,t[i+1]=m*T+g*x+p*_-d*y,t[i+2]=p*T+g*y+d*x-m*_,t[i+3]=g*T-d*_-m*x-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(u/2),x=m(s/2),y=m(l/2),T=m(u/2);switch(h){case"XYZ":this._x=x*g*_+p*y*T,this._y=p*y*_-x*g*T,this._z=p*g*T+x*y*_,this._w=p*g*_-x*y*T;break;case"YXZ":this._x=x*g*_+p*y*T,this._y=p*y*_-x*g*T,this._z=p*g*T-x*y*_,this._w=p*g*_+x*y*T;break;case"ZXY":this._x=x*g*_-p*y*T,this._y=p*y*_+x*g*T,this._z=p*g*T+x*y*_,this._w=p*g*_-x*y*T;break;case"ZYX":this._x=x*g*_-p*y*T,this._y=p*y*_+x*g*T,this._z=p*g*T-x*y*_,this._w=p*g*_+x*y*T;break;case"YZX":this._x=x*g*_+p*y*T,this._y=p*y*_+x*g*T,this._z=p*g*T-x*y*_,this._w=p*g*_-x*y*T;break;case"XZY":this._x=x*g*_-p*y*T,this._y=p*y*_-x*g*T,this._z=p*g*T+x*y*_,this._w=p*g*_+x*y*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],x=s+d+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(u-p)*y,this._z=(h-l)*y}else if(s>d&&s>_){const y=2*Math.sqrt(1+s-d-_);this._w=(g-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+p)/y}else if(d>_){const y=2*Math.sqrt(1+d-s-_);this._w=(u-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-s-d);this._w=(h-l)/y,this._x=(u+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-s*p,this._z=u*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*s+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),_=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*_+this._w*x,this._x=s*_+this._x*x,this._y=l*_+this._y*x,this._z=u*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,i=0,s=0){$.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(y_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(y_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-u*l),_=2*(u*s-h*i);return this.x=i+m*p+h*_-d*g,this.y=s+m*g+d*p-u*_,this.z=l+m*_+u*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Qf.copy(this).projectOnVector(t),this.sub(Qf)}reflect(t){return this.sub(Qf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qf=new $,y_=new xs;class ue{constructor(t,i,s,l,u,h,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p)}set(t,i,s,l,u,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],x=s[2],y=s[5],T=s[8],R=l[0],M=l[3],v=l[6],B=l[1],N=l[4],U=l[7],z=l[2],F=l[5],k=l[8];return u[0]=h*R+d*B+m*z,u[3]=h*M+d*N+m*F,u[6]=h*v+d*U+m*k,u[1]=p*R+g*B+_*z,u[4]=p*M+g*N+_*F,u[7]=p*v+g*U+_*k,u[2]=x*R+y*B+T*z,u[5]=x*M+y*N+T*F,u[8]=x*v+y*U+T*k,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*u*g+s*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*h-d*p,x=d*m-g*u,y=p*u-h*m,T=i*_+s*x+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=_*R,t[1]=(l*p-g*s)*R,t[2]=(d*s-l*h)*R,t[3]=x*R,t[4]=(g*i-l*m)*R,t[5]=(l*u-d*i)*R,t[6]=y*R,t[7]=(s*m-p*i)*R,t[8]=(h*i-s*u)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Jf.makeScale(t,i)),this}rotate(t){return this.premultiply(Jf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Jf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jf=new ue;function Nv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Pc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ry(){const o=Pc("canvas");return o.style.display="block",o}const M_={};function Vo(o){o in M_||(M_[o]=!0,console.warn(o))}function oy(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const E_=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),T_=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ly(){const o={enabled:!0,workingColorSpace:Ar,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Be&&(l.r=ra(l.r),l.g=ra(l.g),l.b=ra(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=Mr(l.r),l.g=Mr(l.g),l.b=Mr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===za?Nc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Vo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Vo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Ar]:{primaries:t,whitePoint:s,transfer:Nc,toXYZ:E_,fromXYZ:T_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:s,transfer:Be,toXYZ:E_,fromXYZ:T_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),o}const Ae=ly();function ra(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Mr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ar;class cy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{ar===void 0&&(ar=Pc("canvas")),ar.width=t.width,ar.height=t.height;const l=ar.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=ar}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Pc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ra(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ra(i[s]/255)*255):i[s]=ra(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uy=0;class Ad{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Xo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push($f(l[h].image)):u.push($f(l[h]))}else u=$f(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function $f(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?cy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fy=0;const th=new $;class In extends ys{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,s=gs,l=gs,u=Li,h=_s,d=Mi,m=Pi,p=In.DEFAULT_ANISOTROPY,g=za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=Xo(),this.name="",this.source=new Ad(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(th).x}get height(){return this.source.getSize(th).y}get depth(){return this.source.getSize(th).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ev)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fh:t.x=t.x-Math.floor(t.x);break;case gs:t.x=t.x<0?0:1;break;case Hh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fh:t.y=t.y-Math.floor(t.y);break;case gs:t.y=t.y<0?0:1;break;case Hh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Ev;In.DEFAULT_ANISOTROPY=1;class tn{constructor(t=0,i=0,s=0,l=1){tn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],g=m[4],_=m[8],x=m[1],y=m[5],T=m[9],R=m[2],M=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-R)<.01&&Math.abs(T-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+R)<.1&&Math.abs(T+M)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,U=(y+1)/2,z=(v+1)/2,F=(g+x)/4,k=(_+R)/4,Z=(T+M)/4;return N>U&&N>z?N<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(N),l=F/s,u=k/s):U>z?U<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),s=F/l,u=Z/l):z<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(z),s=k/u,l=Z/u),this.set(s,l,u,i),this}let B=Math.sqrt((M-T)*(M-T)+(_-R)*(_-R)+(x-g)*(x-g));return Math.abs(B)<.001&&(B=1),this.x=(M-T)/B,this.y=(_-R)/B,this.z=(x-g)/B,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this.w=Se(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this.w=Se(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hy extends ys{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new tn(0,0,t,i),this.scissorTest=!1,this.viewport=new tn(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new In(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Li,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ad(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ss extends hy{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Ov extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ti,this.minFilter=ti,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dy extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ti,this.minFilter=ti,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ka{constructor(t=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(vi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(vi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=vi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,vi):vi.fromBufferAttribute(u,h),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ec.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ec.copy(s.boundingBox)),ec.applyMatrix4(t.matrixWorld),this.union(ec)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Do),nc.subVectors(this.max,Do),sr.subVectors(t.a,Do),rr.subVectors(t.b,Do),or.subVectors(t.c,Do),Ua.subVectors(rr,sr),La.subVectors(or,rr),os.subVectors(sr,or);let i=[0,-Ua.z,Ua.y,0,-La.z,La.y,0,-os.z,os.y,Ua.z,0,-Ua.x,La.z,0,-La.x,os.z,0,-os.x,-Ua.y,Ua.x,0,-La.y,La.x,0,-os.y,os.x,0];return!eh(i,sr,rr,or,nc)||(i=[1,0,0,0,1,0,0,0,1],!eh(i,sr,rr,or,nc))?!1:(ic.crossVectors(Ua,La),i=[ic.x,ic.y,ic.z],eh(i,sr,rr,or,nc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $i=[new $,new $,new $,new $,new $,new $,new $,new $],vi=new $,ec=new ka,sr=new $,rr=new $,or=new $,Ua=new $,La=new $,os=new $,Do=new $,nc=new $,ic=new $,ls=new $;function eh(o,t,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){ls.fromArray(o,u);const d=l.x*Math.abs(ls.x)+l.y*Math.abs(ls.y)+l.z*Math.abs(ls.z),m=t.dot(ls),p=i.dot(ls),g=s.dot(ls);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const py=new ka,Uo=new $,nh=new $;class Cr{constructor(t=new $,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):py.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Uo.subVectors(t,this.center);const i=Uo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Uo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Uo.copy(t.center).add(nh)),this.expandByPoint(Uo.copy(t.center).sub(nh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ta=new $,ih=new $,ac=new $,Na=new $,ah=new $,sc=new $,sh=new $;class Rd{constructor(t=new $,i=new $(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){ih.copy(t).add(i).multiplyScalar(.5),ac.copy(i).sub(t).normalize(),Na.copy(this.origin).sub(ih);const u=t.distanceTo(i)*.5,h=-this.direction.dot(ac),d=Na.dot(this.direction),m=-Na.dot(ac),p=Na.lengthSq(),g=Math.abs(1-h*h);let _,x,y,T;if(g>0)if(_=h*m-d,x=h*d-m,T=u*g,_>=0)if(x>=-T)if(x<=T){const R=1/g;_*=R,x*=R,y=_*(_+h*x+2*d)+x*(h*_+x+2*m)+p}else x=u,_=Math.max(0,-(h*x+d)),y=-_*_+x*(x+2*m)+p;else x=-u,_=Math.max(0,-(h*x+d)),y=-_*_+x*(x+2*m)+p;else x<=-T?(_=Math.max(0,-(-h*u+d)),x=_>0?-u:Math.min(Math.max(-u,-m),u),y=-_*_+x*(x+2*m)+p):x<=T?(_=0,x=Math.min(Math.max(-u,-m),u),y=x*(x+2*m)+p):(_=Math.max(0,-(h*u+d)),x=_>0?u:Math.min(Math.max(-u,-m),u),y=-_*_+x*(x+2*m)+p);else x=h>0?-u:u,_=Math.max(0,-(h*x+d)),y=-_*_+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(ih).addScaledVector(ac,x),y}intersectSphere(t,i){ta.subVectors(t.center,this.origin);const s=ta.dot(this.direction),l=ta.dot(ta)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(u=(t.min.y-x.y)*g,h=(t.max.y-x.y)*g):(u=(t.max.y-x.y)*g,h=(t.min.y-x.y)*g),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(d=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ta)!==null}intersectTriangle(t,i,s,l,u){ah.subVectors(i,t),sc.subVectors(s,t),sh.crossVectors(ah,sc);let h=this.direction.dot(sh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Na.subVectors(this.origin,t);const m=d*this.direction.dot(sc.crossVectors(Na,sc));if(m<0)return null;const p=d*this.direction.dot(ah.cross(Na));if(p<0||m+p>h)return null;const g=-d*Na.dot(sh);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(t,i,s,l,u,h,d,m,p,g,_,x,y,T,R,M){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p,g,_,x,y,T,R,M)}set(t,i,s,l,u,h,d,m,p,g,_,x,y,T,R,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=u,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=y,v[7]=T,v[11]=R,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/lr.setFromMatrixColumn(t,0).length(),u=1/lr.setFromMatrixColumn(t,1).length(),h=1/lr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const x=h*g,y=h*_,T=d*g,R=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=y+T*p,i[5]=x-R*p,i[9]=-d*m,i[2]=R-x*p,i[6]=T+y*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*g,y=m*_,T=p*g,R=p*_;i[0]=x+R*d,i[4]=T*d-y,i[8]=h*p,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=y*d-T,i[6]=R+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*g,y=m*_,T=p*g,R=p*_;i[0]=x-R*d,i[4]=-h*_,i[8]=T+y*d,i[1]=y+T*d,i[5]=h*g,i[9]=R-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*g,y=h*_,T=d*g,R=d*_;i[0]=m*g,i[4]=T*p-y,i[8]=x*p+R,i[1]=m*_,i[5]=R*p+x,i[9]=y*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,y=h*p,T=d*m,R=d*p;i[0]=m*g,i[4]=R-x*_,i[8]=T*_+y,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*_+T,i[10]=x-R*_}else if(t.order==="XZY"){const x=h*m,y=h*p,T=d*m,R=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=x*_+R,i[5]=h*g,i[9]=y*_-T,i[2]=T*_-y,i[6]=d*g,i[10]=R*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(my,t,gy)}lookAt(t,i,s){const l=this.elements;return Jn.subVectors(t,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Oa.crossVectors(s,Jn),Oa.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Oa.crossVectors(s,Jn)),Oa.normalize(),rc.crossVectors(Jn,Oa),l[0]=Oa.x,l[4]=rc.x,l[8]=Jn.x,l[1]=Oa.y,l[5]=rc.y,l[9]=Jn.y,l[2]=Oa.z,l[6]=rc.z,l[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],x=s[9],y=s[13],T=s[2],R=s[6],M=s[10],v=s[14],B=s[3],N=s[7],U=s[11],z=s[15],F=l[0],k=l[4],Z=l[8],w=l[12],C=l[1],X=l[5],tt=l[9],ot=l[13],dt=l[2],ut=l[6],O=l[10],H=l[14],G=l[3],pt=l[7],D=l[11],K=l[15];return u[0]=h*F+d*C+m*dt+p*G,u[4]=h*k+d*X+m*ut+p*pt,u[8]=h*Z+d*tt+m*O+p*D,u[12]=h*w+d*ot+m*H+p*K,u[1]=g*F+_*C+x*dt+y*G,u[5]=g*k+_*X+x*ut+y*pt,u[9]=g*Z+_*tt+x*O+y*D,u[13]=g*w+_*ot+x*H+y*K,u[2]=T*F+R*C+M*dt+v*G,u[6]=T*k+R*X+M*ut+v*pt,u[10]=T*Z+R*tt+M*O+v*D,u[14]=T*w+R*ot+M*H+v*K,u[3]=B*F+N*C+U*dt+z*G,u[7]=B*k+N*X+U*ut+z*pt,u[11]=B*Z+N*tt+U*O+z*D,u[15]=B*w+N*ot+U*H+z*K,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],x=t[10],y=t[14],T=t[3],R=t[7],M=t[11],v=t[15];return T*(+u*m*_-l*p*_-u*d*x+s*p*x+l*d*y-s*m*y)+R*(+i*m*y-i*p*x+u*h*x-l*h*y+l*p*g-u*m*g)+M*(+i*p*_-i*d*y-u*h*_+s*h*y+u*d*g-s*p*g)+v*(-l*d*g-i*m*_+i*d*x+l*h*_-s*h*x+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],x=t[10],y=t[11],T=t[12],R=t[13],M=t[14],v=t[15],B=_*M*p-R*x*p+R*m*y-d*M*y-_*m*v+d*x*v,N=T*x*p-g*M*p-T*m*y+h*M*y+g*m*v-h*x*v,U=g*R*p-T*_*p+T*d*y-h*R*y-g*d*v+h*_*v,z=T*_*m-g*R*m-T*d*x+h*R*x+g*d*M-h*_*M,F=i*B+s*N+l*U+u*z;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/F;return t[0]=B*k,t[1]=(R*x*u-_*M*u-R*l*y+s*M*y+_*l*v-s*x*v)*k,t[2]=(d*M*u-R*m*u+R*l*p-s*M*p-d*l*v+s*m*v)*k,t[3]=(_*m*u-d*x*u-_*l*p+s*x*p+d*l*y-s*m*y)*k,t[4]=N*k,t[5]=(g*M*u-T*x*u+T*l*y-i*M*y-g*l*v+i*x*v)*k,t[6]=(T*m*u-h*M*u-T*l*p+i*M*p+h*l*v-i*m*v)*k,t[7]=(h*x*u-g*m*u+g*l*p-i*x*p-h*l*y+i*m*y)*k,t[8]=U*k,t[9]=(T*_*u-g*R*u-T*s*y+i*R*y+g*s*v-i*_*v)*k,t[10]=(h*R*u-T*d*u+T*s*p-i*R*p-h*s*v+i*d*v)*k,t[11]=(g*d*u-h*_*u-g*s*p+i*_*p+h*s*y-i*d*y)*k,t[12]=z*k,t[13]=(g*R*l-T*_*l+T*s*x-i*R*x-g*s*M+i*_*M)*k,t[14]=(T*d*l-h*R*l-T*s*m+i*R*m+h*s*M-i*d*M)*k,t[15]=(h*_*l-g*d*l+g*s*m-i*_*m-h*s*x+i*d*x)*k,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,m=t.z,p=u*h,g=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,_=d+d,x=u*p,y=u*g,T=u*_,R=h*g,M=h*_,v=d*_,B=m*p,N=m*g,U=m*_,z=s.x,F=s.y,k=s.z;return l[0]=(1-(R+v))*z,l[1]=(y+U)*z,l[2]=(T-N)*z,l[3]=0,l[4]=(y-U)*F,l[5]=(1-(x+v))*F,l[6]=(M+B)*F,l[7]=0,l[8]=(T+N)*k,l[9]=(M-B)*k,l[10]=(1-(x+R))*k,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=lr.set(l[0],l[1],l[2]).length();const h=lr.set(l[4],l[5],l[6]).length(),d=lr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],xi.copy(this);const p=1/u,g=1/h,_=1/d;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=g,xi.elements[5]*=g,xi.elements[6]*=g,xi.elements[8]*=_,xi.elements[9]*=_,xi.elements[10]*=_,i.setFromRotationMatrix(xi),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=Oi,m=!1){const p=this.elements,g=2*u/(i-t),_=2*u/(s-l),x=(i+t)/(i-t),y=(s+l)/(s-l);let T,R;if(m)T=u/(h-u),R=h*u/(h-u);else if(d===Oi)T=-(h+u)/(h-u),R=-2*h*u/(h-u);else if(d===Oc)T=-h/(h-u),R=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=Oi,m=!1){const p=this.elements,g=2/(i-t),_=2/(s-l),x=-(i+t)/(i-t),y=-(s+l)/(s-l);let T,R;if(m)T=1/(h-u),R=h/(h-u);else if(d===Oi)T=-2/(h-u),R=-(h+u)/(h-u);else if(d===Oc)T=-1/(h-u),R=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=T,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const lr=new $,xi=new ke,my=new $(0,0,0),gy=new $(1,1,1),Oa=new $,rc=new $,Jn=new $,b_=new ke,A_=new xs;class Ii{constructor(t=0,i=0,s=0,l=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Se(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return b_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(b_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return A_.setFromEuler(this),this.setFromQuaternion(A_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class Pv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _y=0;const R_=new $,cr=new xs,ea=new ke,oc=new $,Lo=new $,vy=new $,xy=new xs,C_=new $(1,0,0),w_=new $(0,1,0),D_=new $(0,0,1),U_={type:"added"},Sy={type:"removed"},ur={type:"childadded",child:null},rh={type:"childremoved",child:null};class yn extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const t=new $,i=new Ii,s=new xs,l=new $(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ke},normalMatrix:{value:new ue}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return cr.setFromAxisAngle(t,i),this.quaternion.multiply(cr),this}rotateOnWorldAxis(t,i){return cr.setFromAxisAngle(t,i),this.quaternion.premultiply(cr),this}rotateX(t){return this.rotateOnAxis(C_,t)}rotateY(t){return this.rotateOnAxis(w_,t)}rotateZ(t){return this.rotateOnAxis(D_,t)}translateOnAxis(t,i){return R_.copy(t).applyQuaternion(this.quaternion),this.position.add(R_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(C_,t)}translateY(t){return this.translateOnAxis(w_,t)}translateZ(t){return this.translateOnAxis(D_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?oc.copy(t):oc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Lo,oc,this.up):ea.lookAt(oc,Lo,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),cr.setFromRotationMatrix(ea),this.quaternion.premultiply(cr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(U_),ur.child=t,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Sy),rh.child=t,this.dispatchEvent(rh),rh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(U_),ur.child=t,this.dispatchEvent(ur),ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,t,vy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,xy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];u(t.shapes,_)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),_=h(t.shapes),x=h(t.skeletons),y=h(t.animations),T=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}yn.DEFAULT_UP=new $(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new $,na=new $,oh=new $,ia=new $,fr=new $,hr=new $,L_=new $,lh=new $,ch=new $,uh=new $,fh=new tn,hh=new tn,dh=new tn;class yi{constructor(t=new $,i=new $,s=new $){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Si.subVectors(t,i),l.cross(Si);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Si.subVectors(l,i),na.subVectors(s,i),oh.subVectors(t,i);const h=Si.dot(Si),d=Si.dot(na),m=Si.dot(oh),p=na.dot(na),g=na.dot(oh),_=h*p-d*d;if(_===0)return u.set(0,0,0),null;const x=1/_,y=(p*m-d*g)*x,T=(h*g-d*m)*x;return u.set(1-y-T,T,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(t,i,s,l,u,h,d,m){return this.getBarycoord(t,i,s,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ia.x),m.addScaledVector(h,ia.y),m.addScaledVector(d,ia.z),m)}static getInterpolatedAttribute(t,i,s,l,u,h){return fh.setScalar(0),hh.setScalar(0),dh.setScalar(0),fh.fromBufferAttribute(t,i),hh.fromBufferAttribute(t,s),dh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(fh,u.x),h.addScaledVector(hh,u.y),h.addScaledVector(dh,u.z),h}static isFrontFacing(t,i,s,l){return Si.subVectors(s,i),na.subVectors(t,i),Si.cross(na).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),na.subVectors(this.a,this.b),Si.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return yi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;fr.subVectors(l,s),hr.subVectors(u,s),lh.subVectors(t,s);const m=fr.dot(lh),p=hr.dot(lh);if(m<=0&&p<=0)return i.copy(s);ch.subVectors(t,l);const g=fr.dot(ch),_=hr.dot(ch);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(fr,h);uh.subVectors(t,u);const y=fr.dot(uh),T=hr.dot(uh);if(T>=0&&y<=T)return i.copy(u);const R=y*p-m*T;if(R<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(hr,d);const M=g*T-y*_;if(M<=0&&_-g>=0&&y-T>=0)return L_.subVectors(u,l),d=(_-g)/(_-g+(y-T)),i.copy(l).addScaledVector(L_,d);const v=1/(M+R+x);return h=R*v,d=x*v,i.copy(s).addScaledVector(fr,h).addScaledVector(hr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Iv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pa={h:0,s:0,l:0},lc={h:0,s:0,l:0};function ph(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class ye{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ae.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ae.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ae.workingColorSpace){if(t=ay(t,1),i=Se(i,0,1),s=Se(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=ph(h,u,t+1/3),this.g=ph(h,u,t),this.b=ph(h,u,t-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(t,i=ci){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ci){const s=Iv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ra(t.r),this.g=ra(t.g),this.b=ra(t.b),this}copyLinearToSRGB(t){return this.r=Mr(t.r),this.g=Mr(t.g),this.b=Mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return Ae.workingToColorSpace(Un.copy(this),t),Math.round(Se(Un.r*255,0,255))*65536+Math.round(Se(Un.g*255,0,255))*256+Math.round(Se(Un.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ae.workingColorSpace){Ae.workingToColorSpace(Un.copy(this),i);const s=Un.r,l=Un.g,u=Un.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=g<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-s)/_+2;break;case u:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ae.workingColorSpace){return Ae.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=ci){Ae.workingToColorSpace(Un.copy(this),t);const i=Un.r,s=Un.g,l=Un.b;return t!==ci?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Pa),this.setHSL(Pa.h+t,Pa.s+i,Pa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Pa),t.getHSL(lc);const s=Kf(Pa.h,lc.h,i),l=Kf(Pa.s,lc.s,i),u=Kf(Pa.l,lc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new ye;ye.NAMES=Iv;let yy=0;class wr extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=yr,this.side=Ga,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=wh,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(s.blending=this.blending),this.side!==Ga&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ch&&(s.blendSrc=this.blendSrc),this.blendDst!==wh&&(s.blendDst=this.blendDst),this.blendEquation!==ps&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==v_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Bv extends wr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Mv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ln=new $,cc=new le;let My=0;class fi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:My++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=x_,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)cc.fromBufferAttribute(this,i),cc.applyMatrix3(t),this.setXY(i,cc.x,cc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix3(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix4(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.applyNormalMatrix(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.transformDirection(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=wo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Vn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=wo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=wo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=wo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=wo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==x_&&(t.usage=this.usage),t}}class zv extends fi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Fv extends fi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class hi extends fi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let Ey=0;const li=new ke,mh=new yn,dr=new $,$n=new ka,No=new ka,Sn=new $;class Bi extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nv(t)?Fv:zv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ue().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,i,s){return li.makeTranslation(t,i,s),this.applyMatrix4(li),this}scale(t,i,s){return li.makeScale(t,i,s),this.applyMatrix4(li),this}lookAt(t){return mh.lookAt(t),mh.updateMatrix(),this.applyMatrix4(mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new hi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ka);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];No.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors($n.min,No.min),$n.expandByPoint(Sn),Sn.addVectors($n.max,No.max),$n.expandByPoint(Sn)):($n.expandByPoint(No.min),$n.expandByPoint(No.max))}$n.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)Sn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Sn.fromBufferAttribute(d,p),m&&(dr.fromBufferAttribute(t,p),Sn.add(dr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<s.count;Z++)d[Z]=new $,m[Z]=new $;const p=new $,g=new $,_=new $,x=new le,y=new le,T=new le,R=new $,M=new $;function v(Z,w,C){p.fromBufferAttribute(s,Z),g.fromBufferAttribute(s,w),_.fromBufferAttribute(s,C),x.fromBufferAttribute(u,Z),y.fromBufferAttribute(u,w),T.fromBufferAttribute(u,C),g.sub(p),_.sub(p),y.sub(x),T.sub(x);const X=1/(y.x*T.y-T.x*y.y);isFinite(X)&&(R.copy(g).multiplyScalar(T.y).addScaledVector(_,-y.y).multiplyScalar(X),M.copy(_).multiplyScalar(y.x).addScaledVector(g,-T.x).multiplyScalar(X),d[Z].add(R),d[w].add(R),d[C].add(R),m[Z].add(M),m[w].add(M),m[C].add(M))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let Z=0,w=B.length;Z<w;++Z){const C=B[Z],X=C.start,tt=C.count;for(let ot=X,dt=X+tt;ot<dt;ot+=3)v(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const N=new $,U=new $,z=new $,F=new $;function k(Z){z.fromBufferAttribute(l,Z),F.copy(z);const w=d[Z];N.copy(w),N.sub(z.multiplyScalar(z.dot(w))).normalize(),U.crossVectors(F,w);const X=U.dot(m[Z])<0?-1:1;h.setXYZW(Z,N.x,N.y,N.z,X)}for(let Z=0,w=B.length;Z<w;++Z){const C=B[Z],X=C.start,tt=C.count;for(let ot=X,dt=X+tt;ot<dt;ot+=3)k(t.getX(ot+0)),k(t.getX(ot+1)),k(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new fi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const l=new $,u=new $,h=new $,d=new $,m=new $,p=new $,g=new $,_=new $;if(t)for(let x=0,y=t.count;x<y;x+=3){const T=t.getX(x+0),R=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),g.subVectors(h,u),_.subVectors(l,u),g.cross(_),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,M),d.add(g),m.add(g),p.add(g),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,u),_.subVectors(l,u),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,x=new p.constructor(m.length*g);let y=0,T=0;for(let R=0,M=m.length;R<M;R++){d.isInterleavedBufferAttribute?y=m[R]*d.data.stride+d.offset:y=m[R]*g;for(let v=0;v<g;v++)x[T++]=p[y++]}return new fi(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Bi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,_=p.length;g<_;g++){const x=p[g],y=t(x,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const y=p[_];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],_=u[p];for(let x=0,y=_.length;x<y;x++)g.push(_[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const N_=new ke,cs=new Rd,uc=new Cr,O_=new $,fc=new $,hc=new $,dc=new $,gh=new $,pc=new $,P_=new $,mc=new $;class Ei extends yn{constructor(t=new Bi,i=new Bv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){pc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],_=u[m];g!==0&&(gh.fromBufferAttribute(_,t),h?pc.addScaledVector(gh,g):pc.addScaledVector(gh.sub(i),g))}i.add(pc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),uc.copy(s.boundingSphere),uc.applyMatrix4(u),cs.copy(t.ray).recast(t.near),!(uc.containsPoint(cs.origin)===!1&&(cs.intersectSphere(uc,O_)===null||cs.origin.distanceToSquared(O_)>(t.far-t.near)**2))&&(N_.copy(u).invert(),cs.copy(t.ray).applyMatrix4(N_),!(s.boundingBox!==null&&cs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,cs)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,R=x.length;T<R;T++){const M=x[T],v=h[M.materialIndex],B=Math.max(M.start,y.start),N=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=B,z=N;U<z;U+=3){const F=d.getX(U),k=d.getX(U+1),Z=d.getX(U+2);l=gc(this,v,t,s,p,g,_,F,k,Z),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),R=Math.min(d.count,y.start+y.count);for(let M=T,v=R;M<v;M+=3){const B=d.getX(M),N=d.getX(M+1),U=d.getX(M+2);l=gc(this,h,t,s,p,g,_,B,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,R=x.length;T<R;T++){const M=x[T],v=h[M.materialIndex],B=Math.max(M.start,y.start),N=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let U=B,z=N;U<z;U+=3){const F=U,k=U+1,Z=U+2;l=gc(this,v,t,s,p,g,_,F,k,Z),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),R=Math.min(m.count,y.start+y.count);for(let M=T,v=R;M<v;M+=3){const B=M,N=M+1,U=M+2;l=gc(this,h,t,s,p,g,_,B,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Ty(o,t,i,s,l,u,h,d){let m;if(t.side===Xn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,t.side===Ga,d),m===null)return null;mc.copy(d),mc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(mc);return p<i.near||p>i.far?null:{distance:p,point:mc.clone(),object:o}}function gc(o,t,i,s,l,u,h,d,m,p){o.getVertexPosition(d,fc),o.getVertexPosition(m,hc),o.getVertexPosition(p,dc);const g=Ty(o,t,i,s,fc,hc,dc,P_);if(g){const _=new $;yi.getBarycoord(P_,fc,hc,dc,_),l&&(g.uv=yi.getInterpolatedAttribute(l,d,m,p,_,new le)),u&&(g.uv1=yi.getInterpolatedAttribute(u,d,m,p,_,new le)),h&&(g.normal=yi.getInterpolatedAttribute(h,d,m,p,_,new $),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new $,materialIndex:0};yi.getNormal(fc,hc,dc,x.normal),g.face=x,g.barycoord=_}return g}class Dr extends Bi{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],_=[];let x=0,y=0;T("z","y","x",-1,-1,s,i,t,h,u,0),T("z","y","x",1,-1,s,i,-t,h,u,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,u,4),T("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new hi(p,3)),this.setAttribute("normal",new hi(g,3)),this.setAttribute("uv",new hi(_,2));function T(R,M,v,B,N,U,z,F,k,Z,w){const C=U/k,X=z/Z,tt=U/2,ot=z/2,dt=F/2,ut=k+1,O=Z+1;let H=0,G=0;const pt=new $;for(let D=0;D<O;D++){const K=D*X-ot;for(let St=0;St<ut;St++){const yt=St*C-tt;pt[R]=yt*B,pt[M]=K*N,pt[v]=dt,p.push(pt.x,pt.y,pt.z),pt[R]=0,pt[M]=0,pt[v]=F>0?1:-1,g.push(pt.x,pt.y,pt.z),_.push(St/k),_.push(1-D/Z),H+=1}}for(let D=0;D<Z;D++)for(let K=0;K<k;K++){const St=x+K+ut*D,yt=x+K+ut*(D+1),Ut=x+(K+1)+ut*(D+1),Ht=x+(K+1)+ut*D;m.push(St,yt,Ht),m.push(yt,Ut,Ht),G+=6}d.addGroup(y,G,w),y+=G,x+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Pn(o){const t={};for(let i=0;i<o.length;i++){const s=Rr(o[i]);for(const l in s)t[l]=s[l]}return t}function by(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Hv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const Ay={clone:Rr,merge:Pn};var Ry=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Va extends wr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ry,this.fragmentShader=Cy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rr(t.uniforms),this.uniformsGroups=by(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Gv extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ia=new $,I_=new le,B_=new le;class ui extends Gv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=md*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Uc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return md*2*Math.atan(Math.tan(Uc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ia.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ia.x,Ia.y).multiplyScalar(-t/Ia.z),Ia.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ia.x,Ia.y).multiplyScalar(-t/Ia.z)}getViewSize(t,i){return this.getViewBounds(t,I_,B_),i.subVectors(B_,I_)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Uc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const pr=-90,mr=1;class wy extends yn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ui(pr,mr,t,i);l.layers=this.layers,this.add(l);const u=new ui(pr,mr,t,i);u.layers=this.layers,this.add(u);const h=new ui(pr,mr,t,i);h.layers=this.layers,this.add(h);const d=new ui(pr,mr,t,i);d.layers=this.layers,this.add(d);const m=new ui(pr,mr,t,i);m.layers=this.layers,this.add(m);const p=new ui(pr,mr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===Oi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Oc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,x,y),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class Vv extends In{constructor(t=[],i=Tr,s,l,u,h,d,m,p,g){super(t,i,s,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dy extends Ss{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Vv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Dr(5,5,5),u=new Va({name:"CubemapFromEquirect",uniforms:Rr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:Fa});u.uniforms.tEquirect.value=i;const h=new Ei(l,u),d=i.minFilter;return i.minFilter===_s&&(i.minFilter=Li),new wy(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class _c extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uy={type:"move"};class _h{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _c,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _c,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _c,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const R of t.hand.values()){const M=i.getJointPose(R,s),v=this._getHandJoint(p,R);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),y=.02,T=.005;p.inputState.pinching&&x>y+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=y-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Uy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new _c;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Ly extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Ny extends In{constructor(t=null,i=1,s=1,l,u,h,d,m,p=ti,g=ti,_,x){super(null,h,d,m,p,g,l,u,_,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class z_ extends fi{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const gr=new ke,F_=new ke,vc=[],H_=new ka,Oy=new ke,Oo=new Ei,Po=new Cr;class Py extends Ei{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new z_(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,Oy)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new ka),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,gr),H_.copy(t.boundingBox).applyMatrix4(gr),this.boundingBox.union(H_)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,gr),Po.copy(t.boundingSphere).applyMatrix4(gr),this.boundingSphere.union(Po)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,u=s.length+1,h=t*u+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Oo.geometry=this.geometry,Oo.material=this.material,Oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Po.copy(this.boundingSphere),Po.applyMatrix4(s),t.ray.intersectsSphere(Po)!==!1))for(let u=0;u<l;u++){this.getMatrixAt(u,gr),F_.multiplyMatrices(s,gr),Oo.matrixWorld=F_,Oo.raycast(t,vc);for(let h=0,d=vc.length;h<d;h++){const m=vc[h];m.instanceId=u,m.object=this,i.push(m)}vc.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new z_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new Ny(new Float32Array(l*this.count),l,this.count,Md,Ni));const u=this.morphTexture.source.data.data;let h=0;for(let p=0;p<s.length;p++)h+=s[p];const d=this.geometry.morphTargetsRelative?1:1-h,m=l*t;u[m]=d,u.set(s,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const vh=new $,Iy=new $,By=new ue;class Ba{constructor(t=new $(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=vh.subVectors(s,i).cross(Iy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(vh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||By.getNormalMatrix(t),l=this.coplanarPoint(vh).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new Cr,zy=new le(.5,.5),xc=new $;class Cd{constructor(t=new Ba,i=new Ba,s=new Ba,l=new Ba,u=new Ba,h=new Ba){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Oi,s=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],m=u[2],p=u[3],g=u[4],_=u[5],x=u[6],y=u[7],T=u[8],R=u[9],M=u[10],v=u[11],B=u[12],N=u[13],U=u[14],z=u[15];if(l[0].setComponents(p-h,y-g,v-T,z-B).normalize(),l[1].setComponents(p+h,y+g,v+T,z+B).normalize(),l[2].setComponents(p+d,y+_,v+R,z+N).normalize(),l[3].setComponents(p-d,y-_,v-R,z-N).normalize(),s)l[4].setComponents(m,x,M,U).normalize(),l[5].setComponents(p-m,y-x,v-M,z-U).normalize();else if(l[4].setComponents(p-m,y-x,v-M,z-U).normalize(),i===Oi)l[5].setComponents(p+m,y+x,v+M,z+U).normalize();else if(i===Oc)l[5].setComponents(m,x,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),us.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(t){us.center.set(0,0,0);const i=zy.distanceTo(t.center);return us.radius=.7071067811865476+i,us.applyMatrix4(t.matrixWorld),this.intersectsSphere(us)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(xc.x=l.normal.x>0?t.max.x:t.min.x,xc.y=l.normal.y>0?t.max.y:t.min.y,xc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(xc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wd extends wr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ic=new $,Bc=new $,G_=new ke,Io=new Rd,Sc=new Cr,xh=new $,V_=new $;class Fy extends yn{constructor(t=new Bi,i=new wd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Ic.fromBufferAttribute(i,l-1),Bc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Ic.distanceTo(Bc);t.setAttribute("lineDistance",new hi(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Sc.copy(s.boundingSphere),Sc.applyMatrix4(l),Sc.radius+=u,t.ray.intersectsSphere(Sc)===!1)return;G_.copy(l).invert(),Io.copy(t.ray).applyMatrix4(G_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const y=Math.max(0,h.start),T=Math.min(g.count,h.start+h.count);for(let R=y,M=T-1;R<M;R+=p){const v=g.getX(R),B=g.getX(R+1),N=yc(this,t,Io,m,v,B,R);N&&i.push(N)}if(this.isLineLoop){const R=g.getX(T-1),M=g.getX(y),v=yc(this,t,Io,m,R,M,T-1);v&&i.push(v)}}else{const y=Math.max(0,h.start),T=Math.min(x.count,h.start+h.count);for(let R=y,M=T-1;R<M;R+=p){const v=yc(this,t,Io,m,R,R+1,R);v&&i.push(v)}if(this.isLineLoop){const R=yc(this,t,Io,m,T-1,y,T-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function yc(o,t,i,s,l,u,h){const d=o.geometry.attributes.position;if(Ic.fromBufferAttribute(d,l),Bc.fromBufferAttribute(d,u),i.distanceSqToSegment(Ic,Bc,xh,V_)>s)return;xh.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(xh);if(!(p<t.near||p>t.far))return{distance:p,point:V_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const k_=new $,X_=new $;class kv extends Fy{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)k_.fromBufferAttribute(i,l),X_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+k_.distanceTo(X_);t.setAttribute("lineDistance",new hi(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xv extends In{constructor(t,i,s=vs,l,u,h,d=ti,m=ti,p,g=Ho,_=1){if(g!==Ho&&g!==Go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,u,h,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ad(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Wv extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Fc extends Bi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=t/d,x=i/m,y=[],T=[],R=[],M=[];for(let v=0;v<g;v++){const B=v*x-h;for(let N=0;N<p;N++){const U=N*_-u;T.push(U,-B,0),R.push(0,0,1),M.push(N/d),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let B=0;B<d;B++){const N=B+p*v,U=B+p*(v+1),z=B+1+p*(v+1),F=B+1+p*v;y.push(N,U,F),y.push(U,z,F)}this.setIndex(y),this.setAttribute("position",new hi(T,3)),this.setAttribute("normal",new hi(R,3)),this.setAttribute("uv",new hi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Hy extends wr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uv,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gy extends wr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=YS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vy extends wr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class qv extends yn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class ky extends qv{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Sh=new ke,W_=new $,q_=new $;class Xy{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cd,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;W_.setFromMatrixPosition(t.matrixWorld),i.position.copy(W_),q_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(q_),i.updateMatrixWorld(),Sh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Sh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Yv extends Gv{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Wy extends Xy{constructor(){super(new Yv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qy extends qv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new Wy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Yy extends ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Y_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Se(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Se(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jy extends kv{constructor(t=10,i=10,s=4473924,l=8947848){s=new ye(s),l=new ye(l);const u=i/2,h=t/i,d=t/2,m=[],p=[];for(let x=0,y=0,T=-d;x<=i;x++,T+=h){m.push(-d,0,T,d,0,T),m.push(T,0,-d,T,0,d);const R=x===u?s:l;R.toArray(p,y),y+=3,R.toArray(p,y),y+=3,R.toArray(p,y),y+=3,R.toArray(p,y),y+=3}const g=new Bi;g.setAttribute("position",new hi(m,3)),g.setAttribute("color",new hi(p,3));const _=new wd({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Zy extends kv{constructor(t,i=16776960){const s=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),l=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],u=new Bi;u.setIndex(new fi(s,1)),u.setAttribute("position",new hi(l,3)),super(u,new wd({color:i,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const i=this.box;i.isEmpty()||(i.getCenter(this.position),i.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ky extends ys{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function j_(o,t,i,s){const l=Qy(s);switch(i){case Cv:return o*t;case Md:return o*t/l.components*l.byteLength;case Ed:return o*t/l.components*l.byteLength;case Dv:return o*t*2/l.components*l.byteLength;case Td:return o*t*2/l.components*l.byteLength;case wv:return o*t*3/l.components*l.byteLength;case Mi:return o*t*4/l.components*l.byteLength;case bd:return o*t*4/l.components*l.byteLength;case Rc:case Cc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case wc:case Dc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Vh:case Xh:return Math.max(o,16)*Math.max(t,8)/4;case Gh:case kh:return Math.max(o,8)*Math.max(t,8)/2;case Wh:case qh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Yh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case jh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Zh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Kh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Qh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Jh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case $h:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case td:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case ed:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case nd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case id:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case ad:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case sd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case rd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case od:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case ld:case cd:case ud:return Math.ceil(o/4)*Math.ceil(t/4)*16;case fd:case hd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case dd:case pd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Qy(o){switch(o){case Pi:case Tv:return{byteLength:1,components:1};case zo:case bv:case ko:return{byteLength:2,components:1};case Sd:case yd:return{byteLength:2,components:4};case vs:case xd:case Ni:return{byteLength:4,components:1};case Av:case Rv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jv(){let o=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Jy(o){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(o.bindBuffer(p,d),_.length===0)o.bufferSubData(p,0,g);else{_.sort((y,T)=>y.start-T.start);let x=0;for(let y=1;y<_.length;y++){const T=_[x],R=_[y];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++x,_[x]=R)}_.length=x+1;for(let y=0,T=_.length;y<T;y++){const R=_[y];o.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var $y=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,MM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,EM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,TM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wM="gl_FragColor = linearToOutputTexel( gl_FragColor );",DM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,LM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,OM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,IM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,GM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,WM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,QM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$M=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_E=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ME=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,EE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,CE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,PE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,IE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,BE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,HE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,VE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,YE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,QE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$E=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_T=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ST=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ET=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,DT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:$y,alphahash_pars_fragment:tM,alphamap_fragment:eM,alphamap_pars_fragment:nM,alphatest_fragment:iM,alphatest_pars_fragment:aM,aomap_fragment:sM,aomap_pars_fragment:rM,batching_pars_vertex:oM,batching_vertex:lM,begin_vertex:cM,beginnormal_vertex:uM,bsdfs:fM,iridescence_fragment:hM,bumpmap_pars_fragment:dM,clipping_planes_fragment:pM,clipping_planes_pars_fragment:mM,clipping_planes_pars_vertex:gM,clipping_planes_vertex:_M,color_fragment:vM,color_pars_fragment:xM,color_pars_vertex:SM,color_vertex:yM,common:MM,cube_uv_reflection_fragment:EM,defaultnormal_vertex:TM,displacementmap_pars_vertex:bM,displacementmap_vertex:AM,emissivemap_fragment:RM,emissivemap_pars_fragment:CM,colorspace_fragment:wM,colorspace_pars_fragment:DM,envmap_fragment:UM,envmap_common_pars_fragment:LM,envmap_pars_fragment:NM,envmap_pars_vertex:OM,envmap_physical_pars_fragment:WM,envmap_vertex:PM,fog_vertex:IM,fog_pars_vertex:BM,fog_fragment:zM,fog_pars_fragment:FM,gradientmap_pars_fragment:HM,lightmap_pars_fragment:GM,lights_lambert_fragment:VM,lights_lambert_pars_fragment:kM,lights_pars_begin:XM,lights_toon_fragment:qM,lights_toon_pars_fragment:YM,lights_phong_fragment:jM,lights_phong_pars_fragment:ZM,lights_physical_fragment:KM,lights_physical_pars_fragment:QM,lights_fragment_begin:JM,lights_fragment_maps:$M,lights_fragment_end:tE,logdepthbuf_fragment:eE,logdepthbuf_pars_fragment:nE,logdepthbuf_pars_vertex:iE,logdepthbuf_vertex:aE,map_fragment:sE,map_pars_fragment:rE,map_particle_fragment:oE,map_particle_pars_fragment:lE,metalnessmap_fragment:cE,metalnessmap_pars_fragment:uE,morphinstance_vertex:fE,morphcolor_vertex:hE,morphnormal_vertex:dE,morphtarget_pars_vertex:pE,morphtarget_vertex:mE,normal_fragment_begin:gE,normal_fragment_maps:_E,normal_pars_fragment:vE,normal_pars_vertex:xE,normal_vertex:SE,normalmap_pars_fragment:yE,clearcoat_normal_fragment_begin:ME,clearcoat_normal_fragment_maps:EE,clearcoat_pars_fragment:TE,iridescence_pars_fragment:bE,opaque_fragment:AE,packing:RE,premultiplied_alpha_fragment:CE,project_vertex:wE,dithering_fragment:DE,dithering_pars_fragment:UE,roughnessmap_fragment:LE,roughnessmap_pars_fragment:NE,shadowmap_pars_fragment:OE,shadowmap_pars_vertex:PE,shadowmap_vertex:IE,shadowmask_pars_fragment:BE,skinbase_vertex:zE,skinning_pars_vertex:FE,skinning_vertex:HE,skinnormal_vertex:GE,specularmap_fragment:VE,specularmap_pars_fragment:kE,tonemapping_fragment:XE,tonemapping_pars_fragment:WE,transmission_fragment:qE,transmission_pars_fragment:YE,uv_pars_fragment:jE,uv_pars_vertex:ZE,uv_vertex:KE,worldpos_vertex:QE,background_vert:JE,background_frag:$E,backgroundCube_vert:tT,backgroundCube_frag:eT,cube_vert:nT,cube_frag:iT,depth_vert:aT,depth_frag:sT,distanceRGBA_vert:rT,distanceRGBA_frag:oT,equirect_vert:lT,equirect_frag:cT,linedashed_vert:uT,linedashed_frag:fT,meshbasic_vert:hT,meshbasic_frag:dT,meshlambert_vert:pT,meshlambert_frag:mT,meshmatcap_vert:gT,meshmatcap_frag:_T,meshnormal_vert:vT,meshnormal_frag:xT,meshphong_vert:ST,meshphong_frag:yT,meshphysical_vert:MT,meshphysical_frag:ET,meshtoon_vert:TT,meshtoon_frag:bT,points_vert:AT,points_frag:RT,shadow_vert:CT,shadow_frag:wT,sprite_vert:DT,sprite_frag:UT},Ot={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Ui={basic:{uniforms:Pn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Pn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ye(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Pn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Pn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Pn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new ye(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Pn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Pn([Ot.points,Ot.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Pn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Pn([Ot.common,Ot.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Pn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Pn([Ot.sprite,Ot.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:Pn([Ot.common,Ot.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:Pn([Ot.lights,Ot.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Ui.physical={uniforms:Pn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Mc={r:0,b:0,g:0},fs=new Ii,LT=new ke;function NT(o,t,i,s,l,u,h){const d=new ye(0);let m=u===!0?0:1,p,g,_=null,x=0,y=null;function T(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?i:t).get(U)),U}function R(N){let U=!1;const z=T(N);z===null?v(d,m):z&&z.isColor&&(v(z,1),U=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(N,U){const z=T(U);z&&(z.isCubeTexture||z.mapping===zc)?(g===void 0&&(g=new Ei(new Dr(1,1,1),new Va({name:"BackgroundCubeMaterial",uniforms:Rr(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,k,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),fs.copy(U.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(LT.makeRotationFromEuler(fs)),g.material.toneMapped=Ae.getTransfer(z.colorSpace)!==Be,(_!==z||x!==z.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,_=z,x=z.version,y=o.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Ei(new Fc(2,2),new Va({name:"BackgroundMaterial",uniforms:Rr(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Ga,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(z.colorSpace)!==Be,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(_!==z||x!==z.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,_=z,x=z.version,y=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function v(N,U){N.getRGB(Mc,Hv(o)),s.buffers.color.setClear(Mc.r,Mc.g,Mc.b,U,h)}function B(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,U=1){d.set(N),m=U,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,v(d,m)},render:R,addToRenderList:M,dispose:B}}function OT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let u=l,h=!1;function d(C,X,tt,ot,dt){let ut=!1;const O=_(ot,tt,X);u!==O&&(u=O,p(u.object)),ut=y(C,ot,tt,dt),ut&&T(C,ot,tt,dt),dt!==null&&t.update(dt,o.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,U(C,X,tt,ot),dt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(dt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function g(C){return o.deleteVertexArray(C)}function _(C,X,tt){const ot=tt.wireframe===!0;let dt=s[C.id];dt===void 0&&(dt={},s[C.id]=dt);let ut=dt[X.id];ut===void 0&&(ut={},dt[X.id]=ut);let O=ut[ot];return O===void 0&&(O=x(m()),ut[ot]=O),O}function x(C){const X=[],tt=[],ot=[];for(let dt=0;dt<i;dt++)X[dt]=0,tt[dt]=0,ot[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:tt,attributeDivisors:ot,object:C,attributes:{},index:null}}function y(C,X,tt,ot){const dt=u.attributes,ut=X.attributes;let O=0;const H=tt.getAttributes();for(const G in H)if(H[G].location>=0){const D=dt[G];let K=ut[G];if(K===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(K=C.instanceColor)),D===void 0||D.attribute!==K||K&&D.data!==K.data)return!0;O++}return u.attributesNum!==O||u.index!==ot}function T(C,X,tt,ot){const dt={},ut=X.attributes;let O=0;const H=tt.getAttributes();for(const G in H)if(H[G].location>=0){let D=ut[G];D===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(D=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(D=C.instanceColor));const K={};K.attribute=D,D&&D.data&&(K.data=D.data),dt[G]=K,O++}u.attributes=dt,u.attributesNum=O,u.index=ot}function R(){const C=u.newAttributes;for(let X=0,tt=C.length;X<tt;X++)C[X]=0}function M(C){v(C,0)}function v(C,X){const tt=u.newAttributes,ot=u.enabledAttributes,dt=u.attributeDivisors;tt[C]=1,ot[C]===0&&(o.enableVertexAttribArray(C),ot[C]=1),dt[C]!==X&&(o.vertexAttribDivisor(C,X),dt[C]=X)}function B(){const C=u.newAttributes,X=u.enabledAttributes;for(let tt=0,ot=X.length;tt<ot;tt++)X[tt]!==C[tt]&&(o.disableVertexAttribArray(tt),X[tt]=0)}function N(C,X,tt,ot,dt,ut,O){O===!0?o.vertexAttribIPointer(C,X,tt,dt,ut):o.vertexAttribPointer(C,X,tt,ot,dt,ut)}function U(C,X,tt,ot){R();const dt=ot.attributes,ut=tt.getAttributes(),O=X.defaultAttributeValues;for(const H in ut){const G=ut[H];if(G.location>=0){let pt=dt[H];if(pt===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(pt=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(pt=C.instanceColor)),pt!==void 0){const D=pt.normalized,K=pt.itemSize,St=t.get(pt);if(St===void 0)continue;const yt=St.buffer,Ut=St.type,Ht=St.bytesPerElement,nt=Ut===o.INT||Ut===o.UNSIGNED_INT||pt.gpuType===xd;if(pt.isInterleavedBufferAttribute){const vt=pt.data,At=vt.stride,Kt=pt.offset;if(vt.isInstancedInterleavedBuffer){for(let qt=0;qt<G.locationSize;qt++)v(G.location+qt,vt.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let qt=0;qt<G.locationSize;qt++)M(G.location+qt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let qt=0;qt<G.locationSize;qt++)N(G.location+qt,K/G.locationSize,Ut,D,At*Ht,(Kt+K/G.locationSize*qt)*Ht,nt)}else{if(pt.isInstancedBufferAttribute){for(let vt=0;vt<G.locationSize;vt++)v(G.location+vt,pt.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let vt=0;vt<G.locationSize;vt++)M(G.location+vt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let vt=0;vt<G.locationSize;vt++)N(G.location+vt,K/G.locationSize,Ut,D,K*Ht,K/G.locationSize*vt*Ht,nt)}}else if(O!==void 0){const D=O[H];if(D!==void 0)switch(D.length){case 2:o.vertexAttrib2fv(G.location,D);break;case 3:o.vertexAttrib3fv(G.location,D);break;case 4:o.vertexAttrib4fv(G.location,D);break;default:o.vertexAttrib1fv(G.location,D)}}}}B()}function z(){Z();for(const C in s){const X=s[C];for(const tt in X){const ot=X[tt];for(const dt in ot)g(ot[dt].object),delete ot[dt];delete X[tt]}delete s[C]}}function F(C){if(s[C.id]===void 0)return;const X=s[C.id];for(const tt in X){const ot=X[tt];for(const dt in ot)g(ot[dt].object),delete ot[dt];delete X[tt]}delete s[C.id]}function k(C){for(const X in s){const tt=s[X];if(tt[C.id]===void 0)continue;const ot=tt[C.id];for(const dt in ot)g(ot[dt].object),delete ot[dt];delete tt[C.id]}}function Z(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:w,dispose:z,releaseStatesOfGeometry:F,releaseStatesOfProgram:k,initAttributes:R,enableAttribute:M,disableUnusedAttributes:B}}function PT(o,t,i){let s;function l(p){s=p}function u(p,g){o.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,_){_!==0&&(o.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let y=0;for(let T=0;T<_;T++)y+=g[T];i.update(y,s,1)}function m(p,g,_,x){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<p.length;T++)h(p[T],g[T],x[T]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,_);let T=0;for(let R=0;R<_;R++)T+=g[R]*x[R];i.update(T,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function IT(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const k=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(k){return!(k!==Mi&&s.convert(k)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(k){const Z=k===ko&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(k!==Pi&&s.convert(k)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Ni&&!Z)}function m(k){if(k==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=T>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:B,maxVaryings:N,maxFragmentUniforms:U,vertexTextures:z,maxSamples:F}}function BT(o){const t=this;let i=null,s=0,l=!1,u=!1;const h=new Ba,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||s!==0||l;return l=x,s=_.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,y){const T=_.clippingPlanes,R=_.clipIntersection,M=_.clipShadows,v=o.get(_);if(!l||T===null||T.length===0||u&&!M)u?g(null):p();else{const B=u?0:s,N=B*4;let U=v.clippingState||null;m.value=U,U=g(T,x,N,y);for(let z=0;z!==N;++z)U[z]=i[z];v.clippingState=U,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,x,y,T){const R=_!==null?_.length:0;let M=null;if(R!==0){if(M=m.value,T!==!0||M===null){const v=y+R*4,B=x.matrixWorldInverse;d.getNormalMatrix(B),(M===null||M.length<v)&&(M=new Float32Array(v));for(let N=0,U=y;N!==R;++N,U+=4)h.copy(_[N]).applyMatrix4(B,d),h.normal.toArray(M,U),M[U+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,M}}function zT(o){let t=new WeakMap;function i(h,d){return d===Bh?h.mapping=Tr:d===zh&&(h.mapping=br),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Bh||d===zh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Dy(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const xr=4,Z_=[.125,.215,.35,.446,.526,.582],ms=20,yh=new Yv,K_=new ye;let Mh=null,Eh=0,Th=0,bh=!1;const ds=(1+Math.sqrt(5))/2,_r=1/ds,Q_=[new $(-ds,_r,0),new $(ds,_r,0),new $(-_r,0,ds),new $(_r,0,ds),new $(0,ds,-_r),new $(0,ds,_r),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],FT=new $;class J_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=FT}=u;Mh=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ev(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mh,Eh,Th),this._renderer.xr.enabled=bh,t.scissorTest=!1,Ec(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Tr||t.mapping===br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mh=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:ko,format:Mi,colorSpace:Ar,depthBuffer:!1},l=$_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$_(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HT(u)),this._blurMaterial=GT(u,t,i)}return l}_compileMaterial(t){const i=new Ei(this._lodPlanes[0],t);this._renderer.compile(i,yh)}_sceneToCubeUV(t,i,s,l,u){const m=new ui(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(K_),_.toneMapping=Ha,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const R=new Bv({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),M=new Ei(new Dr,R);let v=!1;const B=t.background;B?B.isColor&&(R.color.copy(B),t.background=null,v=!0):(R.color.copy(K_),v=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[N],u.y,u.z)):U===1?(m.up.set(0,0,p[N]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[N],u.z)):(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[N]));const z=this._cubeSize;Ec(l,U*z,N>2?z:0,z,z),_.setRenderTarget(l),v&&_.render(M,m),_.render(t,m)}M.geometry.dispose(),M.material.dispose(),_.toneMapping=y,_.autoClear=x,t.background=B}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Tr||t.mapping===br;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ev()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tv());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Ei(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Ec(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,yh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Q_[(l-u-1)%Q_.length];this._blur(t,u-1,u,h,d)}i.autoClear=s}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Ei(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[s]-1,T=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*ms-1),R=u/T,M=isFinite(u)?1+Math.floor(g*R):ms;M>ms&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ms}`);const v=[];let B=0;for(let k=0;k<ms;++k){const Z=k/R,w=Math.exp(-Z*Z/2);v.push(w),k===0?B+=w:k<M&&(B+=2*w)}for(let k=0;k<v.length;k++)v[k]=v[k]/B;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=v,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=T,x.mipInt.value=N-s;const U=this._sizeLods[l],z=3*U*(l>N-xr?l-N+xr:0),F=4*(this._cubeSize-U);Ec(i,z,F,3*U,2*U),m.setRenderTarget(i),m.render(_,yh)}}function HT(o){const t=[],i=[],s=[];let l=o;const u=o-xr+1+Z_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-xr?m=Z_[h-o+xr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,T=6,R=3,M=2,v=1,B=new Float32Array(R*T*y),N=new Float32Array(M*T*y),U=new Float32Array(v*T*y);for(let F=0;F<y;F++){const k=F%3*2/3-1,Z=F>2?0:-1,w=[k,Z,0,k+2/3,Z,0,k+2/3,Z+1,0,k,Z,0,k+2/3,Z+1,0,k,Z+1,0];B.set(w,R*T*F),N.set(x,M*T*F);const C=[F,F,F,F,F,F];U.set(C,v*T*F)}const z=new Bi;z.setAttribute("position",new fi(B,R)),z.setAttribute("uv",new fi(N,M)),z.setAttribute("faceIndex",new fi(U,v)),t.push(z),l>xr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function $_(o,t,i){const s=new Ss(o,t,i);return s.texture.mapping=zc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ec(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function GT(o,t,i){const s=new Float32Array(ms),l=new $(0,1,0);return new Va({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function tv(){return new Va({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function ev(){return new Va({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Dd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function VT(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Bh||m===zh,g=m===Tr||m===br;if(p||g){let _=t.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new J_(o)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new J_(o)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function kT(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Vo("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function XT(o,t,i,s){const l={},u=new WeakMap;function h(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const T in x.attributes)t.remove(x.attributes[T]);x.removeEventListener("dispose",h),delete l[x.id];const y=u.get(x);y&&(t.remove(y),u.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const y in x)t.update(x[y],o.ARRAY_BUFFER)}function p(_){const x=[],y=_.index,T=_.attributes.position;let R=0;if(y!==null){const B=y.array;R=y.version;for(let N=0,U=B.length;N<U;N+=3){const z=B[N+0],F=B[N+1],k=B[N+2];x.push(z,F,F,k,k,z)}}else if(T!==void 0){const B=T.array;R=T.version;for(let N=0,U=B.length/3-1;N<U;N+=3){const z=N+0,F=N+1,k=N+2;x.push(z,F,F,k,k,z)}}else return;const M=new(Nv(x)?Fv:zv)(x,1);M.version=R;const v=u.get(_);v&&t.remove(v),u.set(_,M)}function g(_){const x=u.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&p(_)}else p(_);return u.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function WT(o,t,i){let s;function l(x){s=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,y){o.drawElements(s,y,u,x*h),i.update(y,s,1)}function p(x,y,T){T!==0&&(o.drawElementsInstanced(s,y,u,x*h,T),i.update(y,s,T))}function g(x,y,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,u,x,0,T);let M=0;for(let v=0;v<T;v++)M+=y[v];i.update(M,s,1)}function _(x,y,T,R){if(T===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<x.length;v++)p(x[v]/h,y[v],R[v]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,u,x,0,R,0,T);let v=0;for(let B=0;B<T;B++)v+=y[B]*R[B];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function qT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function YT(o,t,i){const s=new WeakMap,l=new tn;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==_){let w=function(){k.dispose(),s.delete(d),d.removeEventListener("dispose",w)};x!==void 0&&x.texture.dispose();const y=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],v=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let N=0;y===!0&&(N=1),T===!0&&(N=2),R===!0&&(N=3);let U=d.attributes.position.count*N,z=1;U>t.maxTextureSize&&(z=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const F=new Float32Array(U*z*4*_),k=new Ov(F,U,z,_);k.type=Ni,k.needsUpdate=!0;const Z=N*4;for(let C=0;C<_;C++){const X=M[C],tt=v[C],ot=B[C],dt=U*z*4*C;for(let ut=0;ut<X.count;ut++){const O=ut*Z;y===!0&&(l.fromBufferAttribute(X,ut),F[dt+O+0]=l.x,F[dt+O+1]=l.y,F[dt+O+2]=l.z,F[dt+O+3]=0),T===!0&&(l.fromBufferAttribute(tt,ut),F[dt+O+4]=l.x,F[dt+O+5]=l.y,F[dt+O+6]=l.z,F[dt+O+7]=0),R===!0&&(l.fromBufferAttribute(ot,ut),F[dt+O+8]=l.x,F[dt+O+9]=l.y,F[dt+O+10]=l.z,F[dt+O+11]=ot.itemSize===4?l.w:1)}}x={count:_,texture:k,size:new le(U,z)},s.set(d,x),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let y=0;for(let R=0;R<p.length;R++)y+=p[R];const T=d.morphTargetsRelative?1:1-y;m.getUniforms().setValue(o,"morphTargetBaseInfluence",T),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function jT(o,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const Zv=new In,nv=new Xv(1,1),Kv=new Ov,Qv=new dy,Jv=new Vv,iv=[],av=[],sv=new Float32Array(16),rv=new Float32Array(9),ov=new Float32Array(4);function Ur(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=iv[l];if(u===void 0&&(u=new Float32Array(l),iv[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function pn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function mn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Hc(o,t){let i=av[t];i===void 0&&(i=new Int32Array(t),av[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function ZT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function KT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2fv(this.addr,t),mn(i,t)}}function QT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(pn(i,t))return;o.uniform3fv(this.addr,t),mn(i,t)}}function JT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4fv(this.addr,t),mn(i,t)}}function $T(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,s))return;ov.set(s),o.uniformMatrix2fv(this.addr,!1,ov),mn(i,s)}}function tb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,s))return;rv.set(s),o.uniformMatrix3fv(this.addr,!1,rv),mn(i,s)}}function eb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,s))return;sv.set(s),o.uniformMatrix4fv(this.addr,!1,sv),mn(i,s)}}function nb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function ib(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2iv(this.addr,t),mn(i,t)}}function ab(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;o.uniform3iv(this.addr,t),mn(i,t)}}function sb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4iv(this.addr,t),mn(i,t)}}function rb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function ob(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2uiv(this.addr,t),mn(i,t)}}function lb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;o.uniform3uiv(this.addr,t),mn(i,t)}}function cb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4uiv(this.addr,t),mn(i,t)}}function ub(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(nv.compareFunction=Lv,u=nv):u=Zv,i.setTexture2D(t||u,l)}function fb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Qv,l)}function hb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Jv,l)}function db(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Kv,l)}function pb(o){switch(o){case 5126:return ZT;case 35664:return KT;case 35665:return QT;case 35666:return JT;case 35674:return $T;case 35675:return tb;case 35676:return eb;case 5124:case 35670:return nb;case 35667:case 35671:return ib;case 35668:case 35672:return ab;case 35669:case 35673:return sb;case 5125:return rb;case 36294:return ob;case 36295:return lb;case 36296:return cb;case 35678:case 36198:case 36298:case 36306:case 35682:return ub;case 35679:case 36299:case 36307:return fb;case 35680:case 36300:case 36308:case 36293:return hb;case 36289:case 36303:case 36311:case 36292:return db}}function mb(o,t){o.uniform1fv(this.addr,t)}function gb(o,t){const i=Ur(t,this.size,2);o.uniform2fv(this.addr,i)}function _b(o,t){const i=Ur(t,this.size,3);o.uniform3fv(this.addr,i)}function vb(o,t){const i=Ur(t,this.size,4);o.uniform4fv(this.addr,i)}function xb(o,t){const i=Ur(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Sb(o,t){const i=Ur(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function yb(o,t){const i=Ur(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Mb(o,t){o.uniform1iv(this.addr,t)}function Eb(o,t){o.uniform2iv(this.addr,t)}function Tb(o,t){o.uniform3iv(this.addr,t)}function bb(o,t){o.uniform4iv(this.addr,t)}function Ab(o,t){o.uniform1uiv(this.addr,t)}function Rb(o,t){o.uniform2uiv(this.addr,t)}function Cb(o,t){o.uniform3uiv(this.addr,t)}function wb(o,t){o.uniform4uiv(this.addr,t)}function Db(o,t,i){const s=this.cache,l=t.length,u=Hc(i,l);pn(s,u)||(o.uniform1iv(this.addr,u),mn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Zv,u[h])}function Ub(o,t,i){const s=this.cache,l=t.length,u=Hc(i,l);pn(s,u)||(o.uniform1iv(this.addr,u),mn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Qv,u[h])}function Lb(o,t,i){const s=this.cache,l=t.length,u=Hc(i,l);pn(s,u)||(o.uniform1iv(this.addr,u),mn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Jv,u[h])}function Nb(o,t,i){const s=this.cache,l=t.length,u=Hc(i,l);pn(s,u)||(o.uniform1iv(this.addr,u),mn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Kv,u[h])}function Ob(o){switch(o){case 5126:return mb;case 35664:return gb;case 35665:return _b;case 35666:return vb;case 35674:return xb;case 35675:return Sb;case 35676:return yb;case 5124:case 35670:return Mb;case 35667:case 35671:return Eb;case 35668:case 35672:return Tb;case 35669:case 35673:return bb;case 5125:return Ab;case 36294:return Rb;case 36295:return Cb;case 36296:return wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Db;case 35679:case 36299:case 36307:return Ub;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Nb}}class Pb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=pb(i.type)}}class Ib{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Ob(i.type)}}class Bb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const Ah=/(\w+)(\])?(\[|\.)?/g;function lv(o,t){o.seq.push(t),o.map[t.id]=t}function zb(o,t,i){const s=o.name,l=s.length;for(Ah.lastIndex=0;;){const u=Ah.exec(s),h=Ah.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){lv(i,p===void 0?new Pb(d,o,t):new Ib(d,o,t));break}else{let _=i.map[d];_===void 0&&(_=new Bb(d),lv(i,_)),i=_}}}class Lc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);zb(u,h,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function cv(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const Fb=37297;let Hb=0;function Gb(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const uv=new ue;function Vb(o){Ae._getMatrix(uv,Ae.workingColorSpace,o);const t=`mat3( ${uv.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case Nc:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function fv(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+Gb(o.getShaderSource(t),d)}else return u}function kb(o,t){const i=Vb(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Xb(o,t){let i;switch(t){case FS:i="Linear";break;case HS:i="Reinhard";break;case GS:i="Cineon";break;case VS:i="ACESFilmic";break;case XS:i="AgX";break;case WS:i="Neutral";break;case kS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Tc=new $;function Wb(){Ae.getLuminanceCoefficients(Tc);const o=Tc.x.toFixed(4),t=Tc.y.toFixed(4),i=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function Yb(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function jb(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Bo(o){return o!==""}function hv(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dv(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function gd(o){return o.replace(Zb,Qb)}const Kb=new Map;function Qb(o,t){let i=de[t];if(i===void 0){const s=Kb.get(t);if(s!==void 0)i=de[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return gd(i)}const Jb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pv(o){return o.replace(Jb,$b)}function $b(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function mv(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function tA(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===yv?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===vS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function eA(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Tr:case br:t="ENVMAP_TYPE_CUBE";break;case zc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function nA(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case br:t="ENVMAP_MODE_REFRACTION";break}return t}function iA(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Mv:t="ENVMAP_BLENDING_MULTIPLY";break;case BS:t="ENVMAP_BLENDING_MIX";break;case zS:t="ENVMAP_BLENDING_ADD";break}return t}function aA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function sA(o,t,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=tA(i),p=eA(i),g=nA(i),_=iA(i),x=aA(i),y=qb(i),T=Yb(u),R=l.createProgram();let M,v,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Bo).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Bo).join(`
`),v.length>0&&(v+=`
`)):(M=[mv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),v=[mv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ha?"#define TONE_MAPPING":"",i.toneMapping!==Ha?de.tonemapping_pars_fragment:"",i.toneMapping!==Ha?Xb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,kb("linearToOutputTexel",i.outputColorSpace),Wb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bo).join(`
`)),h=gd(h),h=hv(h,i),h=dv(h,i),d=gd(d),d=hv(d,i),d=dv(d,i),h=pv(h),d=pv(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===S_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===S_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=B+M+h,U=B+v+d,z=cv(l,l.VERTEX_SHADER,N),F=cv(l,l.FRAGMENT_SHADER,U);l.attachShader(R,z),l.attachShader(R,F),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function k(X){if(o.debug.checkShaderErrors){const tt=l.getProgramInfoLog(R)||"",ot=l.getShaderInfoLog(z)||"",dt=l.getShaderInfoLog(F)||"",ut=tt.trim(),O=ot.trim(),H=dt.trim();let G=!0,pt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(G=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,z,F);else{const D=fv(l,z,"vertex"),K=fv(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+ut+`
`+D+`
`+K)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(O===""||H==="")&&(pt=!1);pt&&(X.diagnostics={runnable:G,programLog:ut,vertexShader:{log:O,prefix:M},fragmentShader:{log:H,prefix:v}})}l.deleteShader(z),l.deleteShader(F),Z=new Lc(l,R),w=jb(l,R)}let Z;this.getUniforms=function(){return Z===void 0&&k(this),Z};let w;this.getAttributes=function(){return w===void 0&&k(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,Fb)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Hb++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=z,this.fragmentShader=F,this}let rA=0;class oA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new lA(t),i.set(t,s)),s}}class lA{constructor(t){this.id=rA++,this.code=t,this.usedTimes=0}}function cA(o,t,i,s,l,u,h){const d=new Pv,m=new oA,p=new Set,g=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,C,X,tt,ot){const dt=tt.fog,ut=ot.geometry,O=w.isMeshStandardMaterial?tt.environment:null,H=(w.isMeshStandardMaterial?i:t).get(w.envMap||O),G=H&&H.mapping===zc?H.image.height:null,pt=T[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const D=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,K=D!==void 0?D.length:0;let St=0;ut.morphAttributes.position!==void 0&&(St=1),ut.morphAttributes.normal!==void 0&&(St=2),ut.morphAttributes.color!==void 0&&(St=3);let yt,Ut,Ht,nt;if(pt){const Ee=Ui[pt];yt=Ee.vertexShader,Ut=Ee.fragmentShader}else yt=w.vertexShader,Ut=w.fragmentShader,m.update(w),Ht=m.getVertexShaderID(w),nt=m.getFragmentShaderID(w);const vt=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),Kt=ot.isInstancedMesh===!0,qt=ot.isBatchedMesh===!0,pe=!!w.map,an=!!w.matcap,I=!!H,Le=!!w.aoMap,se=!!w.lightMap,ne=!!w.bumpMap,Pt=!!w.normalMap,Ge=!!w.displacementMap,Vt=!!w.emissiveMap,re=!!w.metalnessMap,Ye=!!w.roughnessMap,je=w.anisotropy>0,L=w.clearcoat>0,E=w.dispersion>0,et=w.iridescence>0,ft=w.sheen>0,gt=w.transmission>0,lt=je&&!!w.anisotropyMap,It=L&&!!w.clearcoatMap,Rt=L&&!!w.clearcoatNormalMap,Xt=L&&!!w.clearcoatRoughnessMap,Yt=et&&!!w.iridescenceMap,Mt=et&&!!w.iridescenceThicknessMap,Lt=ft&&!!w.sheenColorMap,Zt=ft&&!!w.sheenRoughnessMap,kt=!!w.specularMap,wt=!!w.specularColorMap,oe=!!w.specularIntensityMap,W=gt&&!!w.transmissionMap,bt=gt&&!!w.thicknessMap,Ct=!!w.gradientMap,Bt=!!w.alphaMap,Et=w.alphaTest>0,xt=!!w.alphaHash,Gt=!!w.extensions;let ae=Ha;w.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ae=o.toneMapping);const we={shaderID:pt,shaderType:w.type,shaderName:w.name,vertexShader:yt,fragmentShader:Ut,defines:w.defines,customVertexShaderID:Ht,customFragmentShaderID:nt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:qt,batchingColor:qt&&ot._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&ot.instanceColor!==null,instancingMorph:Kt&&ot.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:vt===null?o.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Ar,alphaToCoverage:!!w.alphaToCoverage,map:pe,matcap:an,envMap:I,envMapMode:I&&H.mapping,envMapCubeUVHeight:G,aoMap:Le,lightMap:se,bumpMap:ne,normalMap:Pt,displacementMap:x&&Ge,emissiveMap:Vt,normalMapObjectSpace:Pt&&w.normalMapType===ZS,normalMapTangentSpace:Pt&&w.normalMapType===Uv,metalnessMap:re,roughnessMap:Ye,anisotropy:je,anisotropyMap:lt,clearcoat:L,clearcoatMap:It,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Xt,dispersion:E,iridescence:et,iridescenceMap:Yt,iridescenceThicknessMap:Mt,sheen:ft,sheenColorMap:Lt,sheenRoughnessMap:Zt,specularMap:kt,specularColorMap:wt,specularIntensityMap:oe,transmission:gt,transmissionMap:W,thicknessMap:bt,gradientMap:Ct,opaque:w.transparent===!1&&w.blending===yr&&w.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Et,alphaHash:xt,combine:w.combine,mapUv:pe&&R(w.map.channel),aoMapUv:Le&&R(w.aoMap.channel),lightMapUv:se&&R(w.lightMap.channel),bumpMapUv:ne&&R(w.bumpMap.channel),normalMapUv:Pt&&R(w.normalMap.channel),displacementMapUv:Ge&&R(w.displacementMap.channel),emissiveMapUv:Vt&&R(w.emissiveMap.channel),metalnessMapUv:re&&R(w.metalnessMap.channel),roughnessMapUv:Ye&&R(w.roughnessMap.channel),anisotropyMapUv:lt&&R(w.anisotropyMap.channel),clearcoatMapUv:It&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&R(w.sheenRoughnessMap.channel),specularMapUv:kt&&R(w.specularMap.channel),specularColorMapUv:wt&&R(w.specularColorMap.channel),specularIntensityMapUv:oe&&R(w.specularIntensityMap.channel),transmissionMapUv:W&&R(w.transmissionMap.channel),thicknessMapUv:bt&&R(w.thicknessMap.channel),alphaMapUv:Bt&&R(w.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(Pt||je),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!ut.attributes.uv&&(pe||Bt),fog:!!dt,useFog:w.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:At,skinning:ot.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:St,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&X.length>0,shadowMapType:o.shadowMap.type,toneMapping:ae,decodeVideoTexture:pe&&w.map.isVideoTexture===!0&&Ae.getTransfer(w.map.colorSpace)===Be,decodeVideoTextureEmissive:Vt&&w.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(w.emissiveMap.colorSpace)===Be,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===sa,flipSided:w.side===Xn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Gt&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&w.extensions.multiDraw===!0||qt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return we.vertexUv1s=p.has(1),we.vertexUv2s=p.has(2),we.vertexUv3s=p.has(3),p.clear(),we}function v(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const X in w.defines)C.push(X),C.push(w.defines[X]);return w.isRawShaderMaterial===!1&&(B(C,w),N(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function B(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function N(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function U(w){const C=T[w.type];let X;if(C){const tt=Ui[C];X=Ay.clone(tt.uniforms)}else X=w.uniforms;return X}function z(w,C){let X;for(let tt=0,ot=g.length;tt<ot;tt++){const dt=g[tt];if(dt.cacheKey===C){X=dt,++X.usedTimes;break}}return X===void 0&&(X=new sA(o,C,w,u),g.push(X)),X}function F(w){if(--w.usedTimes===0){const C=g.indexOf(w);g[C]=g[g.length-1],g.pop(),w.destroy()}}function k(w){m.remove(w)}function Z(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:U,acquireProgram:z,releaseProgram:F,releaseShaderCache:k,programs:g,dispose:Z}}function uA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function fA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function gv(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function _v(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(_,x,y,T,R,M){let v=o[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:y,groupOrder:T,renderOrder:_.renderOrder,z:R,group:M},o[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=y,v.groupOrder=T,v.renderOrder=_.renderOrder,v.z=R,v.group=M),t++,v}function d(_,x,y,T,R,M){const v=h(_,x,y,T,R,M);y.transmission>0?s.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(_,x,y,T,R,M){const v=h(_,x,y,T,R,M);y.transmission>0?s.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,x){i.length>1&&i.sort(_||fA),s.length>1&&s.sort(x||gv),l.length>1&&l.sort(x||gv)}function g(){for(let _=t,x=o.length;_<x;_++){const y=o[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function hA(){let o=new WeakMap;function t(s,l){const u=o.get(s);let h;return u===void 0?(h=new _v,o.set(s,[h])):l>=u.length?(h=new _v,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function dA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new $,color:new ye};break;case"SpotLight":i={position:new $,direction:new $,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new $,halfWidth:new $,halfHeight:new $};break}return o[t.id]=i,i}}}function pA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let mA=0;function gA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function _A(o){const t=new dA,i=pA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new $);const l=new $,u=new ke,h=new ke;function d(p){let g=0,_=0,x=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let y=0,T=0,R=0,M=0,v=0,B=0,N=0,U=0,z=0,F=0,k=0;p.sort(gA);for(let w=0,C=p.length;w<C;w++){const X=p[w],tt=X.color,ot=X.intensity,dt=X.distance,ut=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)g+=tt.r*ot,_+=tt.g*ot,x+=tt.b*ot;else if(X.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(X.sh.coefficients[O],ot);k++}else if(X.isDirectionalLight){const O=t.get(X);if(O.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const H=X.shadow,G=i.get(X);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,s.directionalShadow[y]=G,s.directionalShadowMap[y]=ut,s.directionalShadowMatrix[y]=X.shadow.matrix,B++}s.directional[y]=O,y++}else if(X.isSpotLight){const O=t.get(X);O.position.setFromMatrixPosition(X.matrixWorld),O.color.copy(tt).multiplyScalar(ot),O.distance=dt,O.coneCos=Math.cos(X.angle),O.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),O.decay=X.decay,s.spot[R]=O;const H=X.shadow;if(X.map&&(s.spotLightMap[z]=X.map,z++,H.updateMatrices(X),X.castShadow&&F++),s.spotLightMatrix[R]=H.matrix,X.castShadow){const G=i.get(X);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,s.spotShadow[R]=G,s.spotShadowMap[R]=ut,U++}R++}else if(X.isRectAreaLight){const O=t.get(X);O.color.copy(tt).multiplyScalar(ot),O.halfWidth.set(X.width*.5,0,0),O.halfHeight.set(0,X.height*.5,0),s.rectArea[M]=O,M++}else if(X.isPointLight){const O=t.get(X);if(O.color.copy(X.color).multiplyScalar(X.intensity),O.distance=X.distance,O.decay=X.decay,X.castShadow){const H=X.shadow,G=i.get(X);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,G.shadowCameraNear=H.camera.near,G.shadowCameraFar=H.camera.far,s.pointShadow[T]=G,s.pointShadowMap[T]=ut,s.pointShadowMatrix[T]=X.shadow.matrix,N++}s.point[T]=O,T++}else if(X.isHemisphereLight){const O=t.get(X);O.skyColor.copy(X.color).multiplyScalar(ot),O.groundColor.copy(X.groundColor).multiplyScalar(ot),s.hemi[v]=O,v++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ot.LTC_FLOAT_1,s.rectAreaLTC2=Ot.LTC_FLOAT_2):(s.rectAreaLTC1=Ot.LTC_HALF_1,s.rectAreaLTC2=Ot.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const Z=s.hash;(Z.directionalLength!==y||Z.pointLength!==T||Z.spotLength!==R||Z.rectAreaLength!==M||Z.hemiLength!==v||Z.numDirectionalShadows!==B||Z.numPointShadows!==N||Z.numSpotShadows!==U||Z.numSpotMaps!==z||Z.numLightProbes!==k)&&(s.directional.length=y,s.spot.length=R,s.rectArea.length=M,s.point.length=T,s.hemi.length=v,s.directionalShadow.length=B,s.directionalShadowMap.length=B,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=B,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=U+z-F,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=k,Z.directionalLength=y,Z.pointLength=T,Z.spotLength=R,Z.rectAreaLength=M,Z.hemiLength=v,Z.numDirectionalShadows=B,Z.numPointShadows=N,Z.numSpotShadows=U,Z.numSpotMaps=z,Z.numLightProbes=k,s.version=mA++)}function m(p,g){let _=0,x=0,y=0,T=0,R=0;const M=g.matrixWorldInverse;for(let v=0,B=p.length;v<B;v++){const N=p[v];if(N.isDirectionalLight){const U=s.directional[_];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),_++}else if(N.isSpotLight){const U=s.spot[y];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const U=s.rectArea[T];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),h.identity(),u.copy(N.matrixWorld),u.premultiply(M),h.extractRotation(u),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),T++}else if(N.isPointLight){const U=s.point[x];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),x++}else if(N.isHemisphereLight){const U=s.hemi[R];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(M),R++}}}return{setup:d,setupView:m,state:s}}function vv(o){const t=new _A(o),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function vA(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new vv(o),t.set(l,[d])):u>=h.length?(d=new vv(o),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const xA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yA(o,t,i){let s=new Cd;const l=new le,u=new le,h=new tn,d=new Gy({depthPacking:jS}),m=new Vy,p={},g=i.maxTextureSize,_={[Ga]:Xn,[Xn]:Ga,[sa]:sa},x=new Va({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:xA,fragmentShader:SA}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const T=new Bi;T.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ei(T,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yv;let v=this.type;this.render=function(F,k,Z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),X=o.getActiveMipmapLevel(),tt=o.state;tt.setBlending(Fa),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const ot=v!==aa&&this.type===aa,dt=v===aa&&this.type!==aa;for(let ut=0,O=F.length;ut<O;ut++){const H=F[ut],G=H.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const pt=G.getFrameExtents();if(l.multiply(pt),u.copy(G.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/pt.x),l.x=u.x*pt.x,G.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/pt.y),l.y=u.y*pt.y,G.mapSize.y=u.y)),G.map===null||ot===!0||dt===!0){const K=this.type!==aa?{minFilter:ti,magFilter:ti}:{};G.map!==null&&G.map.dispose(),G.map=new Ss(l.x,l.y,K),G.map.texture.name=H.name+".shadowMap",G.camera.updateProjectionMatrix()}o.setRenderTarget(G.map),o.clear();const D=G.getViewportCount();for(let K=0;K<D;K++){const St=G.getViewport(K);h.set(u.x*St.x,u.y*St.y,u.x*St.z,u.y*St.w),tt.viewport(h),G.updateMatrices(H,K),s=G.getFrustum(),U(k,Z,G.camera,H,this.type)}G.isPointLightShadow!==!0&&this.type===aa&&B(G,Z),G.needsUpdate=!1}v=this.type,M.needsUpdate=!1,o.setRenderTarget(w,C,X)};function B(F,k){const Z=t.update(R);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Ss(l.x,l.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(k,null,Z,x,R,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(k,null,Z,y,R,null)}function N(F,k,Z,w){let C=null;const X=Z.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(X!==void 0)C=X;else if(C=Z.isPointLight===!0?m:d,o.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const tt=C.uuid,ot=k.uuid;let dt=p[tt];dt===void 0&&(dt={},p[tt]=dt);let ut=dt[ot];ut===void 0&&(ut=C.clone(),dt[ot]=ut,k.addEventListener("dispose",z)),C=ut}if(C.visible=k.visible,C.wireframe=k.wireframe,w===aa?C.side=k.shadowSide!==null?k.shadowSide:k.side:C.side=k.shadowSide!==null?k.shadowSide:_[k.side],C.alphaMap=k.alphaMap,C.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,C.map=k.map,C.clipShadows=k.clipShadows,C.clippingPlanes=k.clippingPlanes,C.clipIntersection=k.clipIntersection,C.displacementMap=k.displacementMap,C.displacementScale=k.displacementScale,C.displacementBias=k.displacementBias,C.wireframeLinewidth=k.wireframeLinewidth,C.linewidth=k.linewidth,Z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const tt=o.properties.get(C);tt.light=Z}return C}function U(F,k,Z,w,C){if(F.visible===!1)return;if(F.layers.test(k.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===aa)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,F.matrixWorld);const ot=t.update(F),dt=F.material;if(Array.isArray(dt)){const ut=ot.groups;for(let O=0,H=ut.length;O<H;O++){const G=ut[O],pt=dt[G.materialIndex];if(pt&&pt.visible){const D=N(F,pt,w,C);F.onBeforeShadow(o,F,k,Z,ot,D,G),o.renderBufferDirect(Z,null,ot,D,F,G),F.onAfterShadow(o,F,k,Z,ot,D,G)}}}else if(dt.visible){const ut=N(F,dt,w,C);F.onBeforeShadow(o,F,k,Z,ot,ut,null),o.renderBufferDirect(Z,null,ot,ut,F,null),F.onAfterShadow(o,F,k,Z,ot,ut,null)}}const tt=F.children;for(let ot=0,dt=tt.length;ot<dt;ot++)U(tt[ot],k,Z,w,C)}function z(F){F.target.removeEventListener("dispose",z);for(const Z in p){const w=p[Z],C=F.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const MA={[Dh]:Uh,[Lh]:Ph,[Nh]:Ih,[Er]:Oh,[Uh]:Dh,[Ph]:Lh,[Ih]:Nh,[Oh]:Er};function EA(o,t){function i(){let W=!1;const bt=new tn;let Ct=null;const Bt=new tn(0,0,0,0);return{setMask:function(Et){Ct!==Et&&!W&&(o.colorMask(Et,Et,Et,Et),Ct=Et)},setLocked:function(Et){W=Et},setClear:function(Et,xt,Gt,ae,we){we===!0&&(Et*=ae,xt*=ae,Gt*=ae),bt.set(Et,xt,Gt,ae),Bt.equals(bt)===!1&&(o.clearColor(Et,xt,Gt,ae),Bt.copy(bt))},reset:function(){W=!1,Ct=null,Bt.set(-1,0,0,0)}}}function s(){let W=!1,bt=!1,Ct=null,Bt=null,Et=null;return{setReversed:function(xt){if(bt!==xt){const Gt=t.get("EXT_clip_control");xt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),bt=xt;const ae=Et;Et=null,this.setClear(ae)}},getReversed:function(){return bt},setTest:function(xt){xt?vt(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(xt){Ct!==xt&&!W&&(o.depthMask(xt),Ct=xt)},setFunc:function(xt){if(bt&&(xt=MA[xt]),Bt!==xt){switch(xt){case Dh:o.depthFunc(o.NEVER);break;case Uh:o.depthFunc(o.ALWAYS);break;case Lh:o.depthFunc(o.LESS);break;case Er:o.depthFunc(o.LEQUAL);break;case Nh:o.depthFunc(o.EQUAL);break;case Oh:o.depthFunc(o.GEQUAL);break;case Ph:o.depthFunc(o.GREATER);break;case Ih:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=xt}},setLocked:function(xt){W=xt},setClear:function(xt){Et!==xt&&(bt&&(xt=1-xt),o.clearDepth(xt),Et=xt)},reset:function(){W=!1,Ct=null,Bt=null,Et=null,bt=!1}}}function l(){let W=!1,bt=null,Ct=null,Bt=null,Et=null,xt=null,Gt=null,ae=null,we=null;return{setTest:function(Ee){W||(Ee?vt(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(Ee){bt!==Ee&&!W&&(o.stencilMask(Ee),bt=Ee)},setFunc:function(Ee,di,cn){(Ct!==Ee||Bt!==di||Et!==cn)&&(o.stencilFunc(Ee,di,cn),Ct=Ee,Bt=di,Et=cn)},setOp:function(Ee,di,cn){(xt!==Ee||Gt!==di||ae!==cn)&&(o.stencilOp(Ee,di,cn),xt=Ee,Gt=di,ae=cn)},setLocked:function(Ee){W=Ee},setClear:function(Ee){we!==Ee&&(o.clearStencil(Ee),we=Ee)},reset:function(){W=!1,bt=null,Ct=null,Bt=null,Et=null,xt=null,Gt=null,ae=null,we=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,y=[],T=null,R=!1,M=null,v=null,B=null,N=null,U=null,z=null,F=null,k=new ye(0,0,0),Z=0,w=!1,C=null,X=null,tt=null,ot=null,dt=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,H=0;const G=o.getParameter(o.VERSION);G.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=H>=1):G.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=H>=2);let pt=null,D={};const K=o.getParameter(o.SCISSOR_BOX),St=o.getParameter(o.VIEWPORT),yt=new tn().fromArray(K),Ut=new tn().fromArray(St);function Ht(W,bt,Ct,Bt){const Et=new Uint8Array(4),xt=o.createTexture();o.bindTexture(W,xt),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Gt=0;Gt<Ct;Gt++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,Et):o.texImage2D(bt+Gt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Et);return xt}const nt={};nt[o.TEXTURE_2D]=Ht(o.TEXTURE_2D,o.TEXTURE_2D,1),nt[o.TEXTURE_CUBE_MAP]=Ht(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[o.TEXTURE_2D_ARRAY]=Ht(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),nt[o.TEXTURE_3D]=Ht(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),vt(o.DEPTH_TEST),h.setFunc(Er),ne(!1),Pt(p_),vt(o.CULL_FACE),Le(Fa);function vt(W){g[W]!==!0&&(o.enable(W),g[W]=!0)}function At(W){g[W]!==!1&&(o.disable(W),g[W]=!1)}function Kt(W,bt){return _[W]!==bt?(o.bindFramebuffer(W,bt),_[W]=bt,W===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=bt),W===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function qt(W,bt){let Ct=y,Bt=!1;if(W){Ct=x.get(bt),Ct===void 0&&(Ct=[],x.set(bt,Ct));const Et=W.textures;if(Ct.length!==Et.length||Ct[0]!==o.COLOR_ATTACHMENT0){for(let xt=0,Gt=Et.length;xt<Gt;xt++)Ct[xt]=o.COLOR_ATTACHMENT0+xt;Ct.length=Et.length,Bt=!0}}else Ct[0]!==o.BACK&&(Ct[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(Ct)}function pe(W){return T!==W?(o.useProgram(W),T=W,!0):!1}const an={[ps]:o.FUNC_ADD,[SS]:o.FUNC_SUBTRACT,[yS]:o.FUNC_REVERSE_SUBTRACT};an[MS]=o.MIN,an[ES]=o.MAX;const I={[TS]:o.ZERO,[bS]:o.ONE,[AS]:o.SRC_COLOR,[Ch]:o.SRC_ALPHA,[LS]:o.SRC_ALPHA_SATURATE,[DS]:o.DST_COLOR,[CS]:o.DST_ALPHA,[RS]:o.ONE_MINUS_SRC_COLOR,[wh]:o.ONE_MINUS_SRC_ALPHA,[US]:o.ONE_MINUS_DST_COLOR,[wS]:o.ONE_MINUS_DST_ALPHA,[NS]:o.CONSTANT_COLOR,[OS]:o.ONE_MINUS_CONSTANT_COLOR,[PS]:o.CONSTANT_ALPHA,[IS]:o.ONE_MINUS_CONSTANT_ALPHA};function Le(W,bt,Ct,Bt,Et,xt,Gt,ae,we,Ee){if(W===Fa){R===!0&&(At(o.BLEND),R=!1);return}if(R===!1&&(vt(o.BLEND),R=!0),W!==xS){if(W!==M||Ee!==w){if((v!==ps||U!==ps)&&(o.blendEquation(o.FUNC_ADD),v=ps,U=ps),Ee)switch(W){case yr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case m_:o.blendFunc(o.ONE,o.ONE);break;case g_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case __:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case yr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case m_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case g_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case __:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}B=null,N=null,z=null,F=null,k.set(0,0,0),Z=0,M=W,w=Ee}return}Et=Et||bt,xt=xt||Ct,Gt=Gt||Bt,(bt!==v||Et!==U)&&(o.blendEquationSeparate(an[bt],an[Et]),v=bt,U=Et),(Ct!==B||Bt!==N||xt!==z||Gt!==F)&&(o.blendFuncSeparate(I[Ct],I[Bt],I[xt],I[Gt]),B=Ct,N=Bt,z=xt,F=Gt),(ae.equals(k)===!1||we!==Z)&&(o.blendColor(ae.r,ae.g,ae.b,we),k.copy(ae),Z=we),M=W,w=!1}function se(W,bt){W.side===sa?At(o.CULL_FACE):vt(o.CULL_FACE);let Ct=W.side===Xn;bt&&(Ct=!Ct),ne(Ct),W.blending===yr&&W.transparent===!1?Le(Fa):Le(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),u.setMask(W.colorWrite);const Bt=W.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Vt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?vt(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function ne(W){C!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),C=W)}function Pt(W){W!==gS?(vt(o.CULL_FACE),W!==X&&(W===p_?o.cullFace(o.BACK):W===_S?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),X=W}function Ge(W){W!==tt&&(O&&o.lineWidth(W),tt=W)}function Vt(W,bt,Ct){W?(vt(o.POLYGON_OFFSET_FILL),(ot!==bt||dt!==Ct)&&(o.polygonOffset(bt,Ct),ot=bt,dt=Ct)):At(o.POLYGON_OFFSET_FILL)}function re(W){W?vt(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function Ye(W){W===void 0&&(W=o.TEXTURE0+ut-1),pt!==W&&(o.activeTexture(W),pt=W)}function je(W,bt,Ct){Ct===void 0&&(pt===null?Ct=o.TEXTURE0+ut-1:Ct=pt);let Bt=D[Ct];Bt===void 0&&(Bt={type:void 0,texture:void 0},D[Ct]=Bt),(Bt.type!==W||Bt.texture!==bt)&&(pt!==Ct&&(o.activeTexture(Ct),pt=Ct),o.bindTexture(W,bt||nt[W]),Bt.type=W,Bt.texture=bt)}function L(){const W=D[pt];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ft(){try{o.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function gt(){try{o.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function It(){try{o.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Rt(){try{o.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Xt(){try{o.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Yt(){try{o.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Mt(){try{o.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Lt(W){yt.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),yt.copy(W))}function Zt(W){Ut.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Ut.copy(W))}function kt(W,bt){let Ct=p.get(bt);Ct===void 0&&(Ct=new WeakMap,p.set(bt,Ct));let Bt=Ct.get(W);Bt===void 0&&(Bt=o.getUniformBlockIndex(bt,W.name),Ct.set(W,Bt))}function wt(W,bt){const Bt=p.get(bt).get(W);m.get(bt)!==Bt&&(o.uniformBlockBinding(bt,Bt,W.__bindingPointIndex),m.set(bt,Bt))}function oe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},pt=null,D={},_={},x=new WeakMap,y=[],T=null,R=!1,M=null,v=null,B=null,N=null,U=null,z=null,F=null,k=new ye(0,0,0),Z=0,w=!1,C=null,X=null,tt=null,ot=null,dt=null,yt.set(0,0,o.canvas.width,o.canvas.height),Ut.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:vt,disable:At,bindFramebuffer:Kt,drawBuffers:qt,useProgram:pe,setBlending:Le,setMaterial:se,setFlipSided:ne,setCullFace:Pt,setLineWidth:Ge,setPolygonOffset:Vt,setScissorTest:re,activeTexture:Ye,bindTexture:je,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:et,texImage2D:Yt,texImage3D:Mt,updateUBOMapping:kt,uniformBlockBinding:wt,texStorage2D:Rt,texStorage3D:Xt,texSubImage2D:ft,texSubImage3D:gt,compressedTexSubImage2D:lt,compressedTexSubImage3D:It,scissor:Lt,viewport:Zt,reset:oe}}function TA(o,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new le,g=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,E){return y?new OffscreenCanvas(L,E):Pc("canvas")}function R(L,E,et){let ft=1;const gt=je(L);if((gt.width>et||gt.height>et)&&(ft=et/Math.max(gt.width,gt.height)),ft<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const lt=Math.floor(ft*gt.width),It=Math.floor(ft*gt.height);_===void 0&&(_=T(lt,It));const Rt=E?T(lt,It):_;return Rt.width=lt,Rt.height=It,Rt.getContext("2d").drawImage(L,0,0,lt,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+lt+"x"+It+")."),Rt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),L;return L}function M(L){return L.generateMipmaps}function v(L){o.generateMipmap(L)}function B(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(L,E,et,ft,gt=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let lt=E;if(E===o.RED&&(et===o.FLOAT&&(lt=o.R32F),et===o.HALF_FLOAT&&(lt=o.R16F),et===o.UNSIGNED_BYTE&&(lt=o.R8)),E===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.R8UI),et===o.UNSIGNED_SHORT&&(lt=o.R16UI),et===o.UNSIGNED_INT&&(lt=o.R32UI),et===o.BYTE&&(lt=o.R8I),et===o.SHORT&&(lt=o.R16I),et===o.INT&&(lt=o.R32I)),E===o.RG&&(et===o.FLOAT&&(lt=o.RG32F),et===o.HALF_FLOAT&&(lt=o.RG16F),et===o.UNSIGNED_BYTE&&(lt=o.RG8)),E===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.RG8UI),et===o.UNSIGNED_SHORT&&(lt=o.RG16UI),et===o.UNSIGNED_INT&&(lt=o.RG32UI),et===o.BYTE&&(lt=o.RG8I),et===o.SHORT&&(lt=o.RG16I),et===o.INT&&(lt=o.RG32I)),E===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),et===o.UNSIGNED_INT&&(lt=o.RGB32UI),et===o.BYTE&&(lt=o.RGB8I),et===o.SHORT&&(lt=o.RGB16I),et===o.INT&&(lt=o.RGB32I)),E===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),et===o.UNSIGNED_INT&&(lt=o.RGBA32UI),et===o.BYTE&&(lt=o.RGBA8I),et===o.SHORT&&(lt=o.RGBA16I),et===o.INT&&(lt=o.RGBA32I)),E===o.RGB&&(et===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),et===o.UNSIGNED_INT_10F_11F_11F_REV&&(lt=o.R11F_G11F_B10F)),E===o.RGBA){const It=gt?Nc:Ae.getTransfer(ft);et===o.FLOAT&&(lt=o.RGBA32F),et===o.HALF_FLOAT&&(lt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(lt=It===Be?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function U(L,E){let et;return L?E===null||E===vs||E===Fo?et=o.DEPTH24_STENCIL8:E===Ni?et=o.DEPTH32F_STENCIL8:E===zo&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===vs||E===Fo?et=o.DEPTH_COMPONENT24:E===Ni?et=o.DEPTH_COMPONENT32F:E===zo&&(et=o.DEPTH_COMPONENT16),et}function z(L,E){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==ti&&L.minFilter!==Li?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function F(L){const E=L.target;E.removeEventListener("dispose",F),Z(E),E.isVideoTexture&&g.delete(E)}function k(L){const E=L.target;E.removeEventListener("dispose",k),C(E)}function Z(L){const E=s.get(L);if(E.__webglInit===void 0)return;const et=L.source,ft=x.get(et);if(ft){const gt=ft[E.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&w(L),Object.keys(ft).length===0&&x.delete(et)}s.remove(L)}function w(L){const E=s.get(L);o.deleteTexture(E.__webglTexture);const et=L.source,ft=x.get(et);delete ft[E.__cacheKey],h.memory.textures--}function C(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(E.__webglFramebuffer[ft]))for(let gt=0;gt<E.__webglFramebuffer[ft].length;gt++)o.deleteFramebuffer(E.__webglFramebuffer[ft][gt]);else o.deleteFramebuffer(E.__webglFramebuffer[ft]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ft])}else{if(Array.isArray(E.__webglFramebuffer))for(let ft=0;ft<E.__webglFramebuffer.length;ft++)o.deleteFramebuffer(E.__webglFramebuffer[ft]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ft=0;ft<E.__webglColorRenderbuffer.length;ft++)E.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ft]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const et=L.textures;for(let ft=0,gt=et.length;ft<gt;ft++){const lt=s.get(et[ft]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),h.memory.textures--),s.remove(et[ft])}s.remove(L)}let X=0;function tt(){X=0}function ot(){const L=X;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),X+=1,L}function dt(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ut(L,E){const et=s.get(L);if(L.isVideoTexture&&re(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&et.__version!==L.version){const ft=L.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(et,L,E);return}}else L.isExternalTexture&&(et.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+E)}function O(L,E){const et=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&et.__version!==L.version){nt(et,L,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+E)}function H(L,E){const et=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&et.__version!==L.version){nt(et,L,E);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+E)}function G(L,E){const et=s.get(L);if(L.version>0&&et.__version!==L.version){vt(et,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+E)}const pt={[Fh]:o.REPEAT,[gs]:o.CLAMP_TO_EDGE,[Hh]:o.MIRRORED_REPEAT},D={[ti]:o.NEAREST,[qS]:o.NEAREST_MIPMAP_NEAREST,[tc]:o.NEAREST_MIPMAP_LINEAR,[Li]:o.LINEAR,[Zf]:o.LINEAR_MIPMAP_NEAREST,[_s]:o.LINEAR_MIPMAP_LINEAR},K={[KS]:o.NEVER,[ny]:o.ALWAYS,[QS]:o.LESS,[Lv]:o.LEQUAL,[JS]:o.EQUAL,[ey]:o.GEQUAL,[$S]:o.GREATER,[ty]:o.NOTEQUAL};function St(L,E){if(E.type===Ni&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Li||E.magFilter===Zf||E.magFilter===tc||E.magFilter===_s||E.minFilter===Li||E.minFilter===Zf||E.minFilter===tc||E.minFilter===_s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,pt[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,pt[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,pt[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,D[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,D[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,K[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ti||E.minFilter!==tc&&E.minFilter!==_s||E.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function yt(L,E){let et=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",F));const ft=E.source;let gt=x.get(ft);gt===void 0&&(gt={},x.set(ft,gt));const lt=dt(E);if(lt!==L.__cacheKey){gt[lt]===void 0&&(gt[lt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),gt[lt].usedTimes++;const It=gt[L.__cacheKey];It!==void 0&&(gt[L.__cacheKey].usedTimes--,It.usedTimes===0&&w(E)),L.__cacheKey=lt,L.__webglTexture=gt[lt].texture}return et}function Ut(L,E,et){return Math.floor(Math.floor(L/et)/E)}function Ht(L,E,et,ft){const lt=L.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,et,ft,E.data);else{lt.sort((Mt,Lt)=>Mt.start-Lt.start);let It=0;for(let Mt=1;Mt<lt.length;Mt++){const Lt=lt[It],Zt=lt[Mt],kt=Lt.start+Lt.count,wt=Ut(Zt.start,E.width,4),oe=Ut(Lt.start,E.width,4);Zt.start<=kt+1&&wt===oe&&Ut(Zt.start+Zt.count-1,E.width,4)===wt?Lt.count=Math.max(Lt.count,Zt.start+Zt.count-Lt.start):(++It,lt[It]=Zt)}lt.length=It+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),Yt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,Lt=lt.length;Mt<Lt;Mt++){const Zt=lt[Mt],kt=Math.floor(Zt.start/4),wt=Math.ceil(Zt.count/4),oe=kt%E.width,W=Math.floor(kt/E.width),bt=wt,Ct=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,oe),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,oe,W,bt,Ct,et,ft,E.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Yt)}}function nt(L,E,et){let ft=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ft=o.TEXTURE_3D);const gt=yt(L,E),lt=E.source;i.bindTexture(ft,L.__webglTexture,o.TEXTURE0+et);const It=s.get(lt);if(lt.version!==It.__version||gt===!0){i.activeTexture(o.TEXTURE0+et);const Rt=Ae.getPrimaries(Ae.workingColorSpace),Xt=E.colorSpace===za?null:Ae.getPrimaries(E.colorSpace),Yt=E.colorSpace===za||Rt===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let Mt=R(E.image,!1,l.maxTextureSize);Mt=Ye(E,Mt);const Lt=u.convert(E.format,E.colorSpace),Zt=u.convert(E.type);let kt=N(E.internalFormat,Lt,Zt,E.colorSpace,E.isVideoTexture);St(ft,E);let wt;const oe=E.mipmaps,W=E.isVideoTexture!==!0,bt=It.__version===void 0||gt===!0,Ct=lt.dataReady,Bt=z(E,Mt);if(E.isDepthTexture)kt=U(E.format===Go,E.type),bt&&(W?i.texStorage2D(o.TEXTURE_2D,1,kt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,kt,Mt.width,Mt.height,0,Lt,Zt,null));else if(E.isDataTexture)if(oe.length>0){W&&bt&&i.texStorage2D(o.TEXTURE_2D,Bt,kt,oe[0].width,oe[0].height);for(let Et=0,xt=oe.length;Et<xt;Et++)wt=oe[Et],W?Ct&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,wt.width,wt.height,Lt,Zt,wt.data):i.texImage2D(o.TEXTURE_2D,Et,kt,wt.width,wt.height,0,Lt,Zt,wt.data);E.generateMipmaps=!1}else W?(bt&&i.texStorage2D(o.TEXTURE_2D,Bt,kt,Mt.width,Mt.height),Ct&&Ht(E,Mt,Lt,Zt)):i.texImage2D(o.TEXTURE_2D,0,kt,Mt.width,Mt.height,0,Lt,Zt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,kt,oe[0].width,oe[0].height,Mt.depth);for(let Et=0,xt=oe.length;Et<xt;Et++)if(wt=oe[Et],E.format!==Mi)if(Lt!==null)if(W){if(Ct)if(E.layerUpdates.size>0){const Gt=j_(wt.width,wt.height,E.format,E.type);for(const ae of E.layerUpdates){const we=wt.data.subarray(ae*Gt/wt.data.BYTES_PER_ELEMENT,(ae+1)*Gt/wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,ae,wt.width,wt.height,1,Lt,we)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,wt.width,wt.height,Mt.depth,Lt,wt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,kt,wt.width,wt.height,Mt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ct&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,wt.width,wt.height,Mt.depth,Lt,Zt,wt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Et,kt,wt.width,wt.height,Mt.depth,0,Lt,Zt,wt.data)}else{W&&bt&&i.texStorage2D(o.TEXTURE_2D,Bt,kt,oe[0].width,oe[0].height);for(let Et=0,xt=oe.length;Et<xt;Et++)wt=oe[Et],E.format!==Mi?Lt!==null?W?Ct&&i.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,wt.width,wt.height,Lt,wt.data):i.compressedTexImage2D(o.TEXTURE_2D,Et,kt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ct&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,wt.width,wt.height,Lt,Zt,wt.data):i.texImage2D(o.TEXTURE_2D,Et,kt,wt.width,wt.height,0,Lt,Zt,wt.data)}else if(E.isDataArrayTexture)if(W){if(bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,kt,Mt.width,Mt.height,Mt.depth),Ct)if(E.layerUpdates.size>0){const Et=j_(Mt.width,Mt.height,E.format,E.type);for(const xt of E.layerUpdates){const Gt=Mt.data.subarray(xt*Et/Mt.data.BYTES_PER_ELEMENT,(xt+1)*Et/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xt,Mt.width,Mt.height,1,Lt,Zt,Gt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Lt,Zt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,kt,Mt.width,Mt.height,Mt.depth,0,Lt,Zt,Mt.data);else if(E.isData3DTexture)W?(bt&&i.texStorage3D(o.TEXTURE_3D,Bt,kt,Mt.width,Mt.height,Mt.depth),Ct&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Lt,Zt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,kt,Mt.width,Mt.height,Mt.depth,0,Lt,Zt,Mt.data);else if(E.isFramebufferTexture){if(bt)if(W)i.texStorage2D(o.TEXTURE_2D,Bt,kt,Mt.width,Mt.height);else{let Et=Mt.width,xt=Mt.height;for(let Gt=0;Gt<Bt;Gt++)i.texImage2D(o.TEXTURE_2D,Gt,kt,Et,xt,0,Lt,Zt,null),Et>>=1,xt>>=1}}else if(oe.length>0){if(W&&bt){const Et=je(oe[0]);i.texStorage2D(o.TEXTURE_2D,Bt,kt,Et.width,Et.height)}for(let Et=0,xt=oe.length;Et<xt;Et++)wt=oe[Et],W?Ct&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Lt,Zt,wt):i.texImage2D(o.TEXTURE_2D,Et,kt,Lt,Zt,wt);E.generateMipmaps=!1}else if(W){if(bt){const Et=je(Mt);i.texStorage2D(o.TEXTURE_2D,Bt,kt,Et.width,Et.height)}Ct&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Lt,Zt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,kt,Lt,Zt,Mt);M(E)&&v(ft),It.__version=lt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function vt(L,E,et){if(E.image.length!==6)return;const ft=yt(L,E),gt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+et);const lt=s.get(gt);if(gt.version!==lt.__version||ft===!0){i.activeTexture(o.TEXTURE0+et);const It=Ae.getPrimaries(Ae.workingColorSpace),Rt=E.colorSpace===za?null:Ae.getPrimaries(E.colorSpace),Xt=E.colorSpace===za||It===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const Yt=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,Lt=[];for(let xt=0;xt<6;xt++)!Yt&&!Mt?Lt[xt]=R(E.image[xt],!0,l.maxCubemapSize):Lt[xt]=Mt?E.image[xt].image:E.image[xt],Lt[xt]=Ye(E,Lt[xt]);const Zt=Lt[0],kt=u.convert(E.format,E.colorSpace),wt=u.convert(E.type),oe=N(E.internalFormat,kt,wt,E.colorSpace),W=E.isVideoTexture!==!0,bt=lt.__version===void 0||ft===!0,Ct=gt.dataReady;let Bt=z(E,Zt);St(o.TEXTURE_CUBE_MAP,E);let Et;if(Yt){W&&bt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,oe,Zt.width,Zt.height);for(let xt=0;xt<6;xt++){Et=Lt[xt].mipmaps;for(let Gt=0;Gt<Et.length;Gt++){const ae=Et[Gt];E.format!==Mi?kt!==null?W?Ct&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt,0,0,ae.width,ae.height,kt,ae.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt,oe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt,0,0,ae.width,ae.height,kt,wt,ae.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt,oe,ae.width,ae.height,0,kt,wt,ae.data)}}}else{if(Et=E.mipmaps,W&&bt){Et.length>0&&Bt++;const xt=je(Lt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,oe,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Mt){W?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Lt[xt].width,Lt[xt].height,kt,wt,Lt[xt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,oe,Lt[xt].width,Lt[xt].height,0,kt,wt,Lt[xt].data);for(let Gt=0;Gt<Et.length;Gt++){const we=Et[Gt].image[xt].image;W?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt+1,0,0,we.width,we.height,kt,wt,we.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt+1,oe,we.width,we.height,0,kt,wt,we.data)}}else{W?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,kt,wt,Lt[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,oe,kt,wt,Lt[xt]);for(let Gt=0;Gt<Et.length;Gt++){const ae=Et[Gt];W?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt+1,0,0,kt,wt,ae.image[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt+1,oe,kt,wt,ae.image[xt])}}}M(E)&&v(o.TEXTURE_CUBE_MAP),lt.__version=gt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function At(L,E,et,ft,gt,lt){const It=u.convert(et.format,et.colorSpace),Rt=u.convert(et.type),Xt=N(et.internalFormat,It,Rt,et.colorSpace),Yt=s.get(E),Mt=s.get(et);if(Mt.__renderTarget=E,!Yt.__hasExternalTextures){const Lt=Math.max(1,E.width>>lt),Zt=Math.max(1,E.height>>lt);gt===o.TEXTURE_3D||gt===o.TEXTURE_2D_ARRAY?i.texImage3D(gt,lt,Xt,Lt,Zt,E.depth,0,It,Rt,null):i.texImage2D(gt,lt,Xt,Lt,Zt,0,It,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Vt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,gt,Mt.__webglTexture,0,Ge(E)):(gt===o.TEXTURE_2D||gt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,gt,Mt.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Kt(L,E,et){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const ft=E.depthTexture,gt=ft&&ft.isDepthTexture?ft.type:null,lt=U(E.stencilBuffer,gt),It=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=Ge(E);Vt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,lt,E.width,E.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,lt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,lt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,It,o.RENDERBUFFER,L)}else{const ft=E.textures;for(let gt=0;gt<ft.length;gt++){const lt=ft[gt],It=u.convert(lt.format,lt.colorSpace),Rt=u.convert(lt.type),Xt=N(lt.internalFormat,It,Rt,lt.colorSpace),Yt=Ge(E);et&&Vt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,Xt,E.width,E.height):Vt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Yt,Xt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function qt(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=s.get(E.depthTexture);ft.__renderTarget=E,(!ft.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ut(E.depthTexture,0);const gt=ft.__webglTexture,lt=Ge(E);if(E.depthTexture.format===Ho)Vt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,gt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,gt,0);else if(E.depthTexture.format===Go)Vt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,gt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,gt,0);else throw new Error("Unknown depthTexture format")}function pe(L){const E=s.get(L),et=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ft=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ft){const gt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ft.removeEventListener("dispose",gt)};ft.addEventListener("dispose",gt),E.__depthDisposeCallback=gt}E.__boundDepthTexture=ft}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ft=L.texture.mipmaps;ft&&ft.length>0?qt(E.__webglFramebuffer[0],L):qt(E.__webglFramebuffer,L)}else if(et){E.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ft]),E.__webglDepthbuffer[ft]===void 0)E.__webglDepthbuffer[ft]=o.createRenderbuffer(),Kt(E.__webglDepthbuffer[ft],L,!1);else{const gt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,lt)}}else{const ft=L.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Kt(E.__webglDepthbuffer,L,!1);else{const gt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function an(L,E,et){const ft=s.get(L);E!==void 0&&At(ft.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&pe(L)}function I(L){const E=L.texture,et=s.get(L),ft=s.get(E);L.addEventListener("dispose",k);const gt=L.textures,lt=L.isWebGLCubeRenderTarget===!0,It=gt.length>1;if(It||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=E.version,h.memory.textures++),lt){et.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[Rt]=[];for(let Xt=0;Xt<E.mipmaps.length;Xt++)et.__webglFramebuffer[Rt][Xt]=o.createFramebuffer()}else et.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)et.__webglFramebuffer[Rt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(It)for(let Rt=0,Xt=gt.length;Rt<Xt;Rt++){const Yt=s.get(gt[Rt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&Vt(L)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Rt=0;Rt<gt.length;Rt++){const Xt=gt[Rt];et.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Rt]);const Yt=u.convert(Xt.format,Xt.colorSpace),Mt=u.convert(Xt.type),Lt=N(Xt.internalFormat,Yt,Mt,Xt.colorSpace,L.isXRRenderTarget===!0),Zt=Ge(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Lt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,et.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),Kt(et.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),St(o.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)At(et.__webglFramebuffer[Rt][Xt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Xt);else At(et.__webglFramebuffer[Rt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(E)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(It){for(let Rt=0,Xt=gt.length;Rt<Xt;Rt++){const Yt=gt[Rt],Mt=s.get(Yt);let Lt=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Lt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Lt,Mt.__webglTexture),St(Lt,Yt),At(et.__webglFramebuffer,L,Yt,o.COLOR_ATTACHMENT0+Rt,Lt,0),M(Yt)&&v(Lt)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Rt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,ft.__webglTexture),St(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)At(et.__webglFramebuffer[Xt],L,E,o.COLOR_ATTACHMENT0,Rt,Xt);else At(et.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,Rt,0);M(E)&&v(Rt),i.unbindTexture()}L.depthBuffer&&pe(L)}function Le(L){const E=L.textures;for(let et=0,ft=E.length;et<ft;et++){const gt=E[et];if(M(gt)){const lt=B(L),It=s.get(gt).__webglTexture;i.bindTexture(lt,It),v(lt),i.unbindTexture()}}}const se=[],ne=[];function Pt(L){if(L.samples>0){if(Vt(L)===!1){const E=L.textures,et=L.width,ft=L.height;let gt=o.COLOR_BUFFER_BIT;const lt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,It=s.get(L),Rt=E.length>1;if(Rt)for(let Yt=0;Yt<E.length;Yt++)i.bindFramebuffer(o.FRAMEBUFFER,It.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,It.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const Xt=L.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Yt=0;Yt<E.length;Yt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(gt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(gt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,It.__webglColorRenderbuffer[Yt]);const Mt=s.get(E[Yt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,et,ft,0,0,et,ft,gt,o.NEAREST),m===!0&&(se.length=0,ne.length=0,se.push(o.COLOR_ATTACHMENT0+Yt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(se.push(lt),ne.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ne)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,se))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Yt=0;Yt<E.length;Yt++){i.bindFramebuffer(o.FRAMEBUFFER,It.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,It.__webglColorRenderbuffer[Yt]);const Mt=s.get(E[Yt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,It.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,Mt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Ge(L){return Math.min(l.maxSamples,L.samples)}function Vt(L){const E=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function re(L){const E=h.render.frame;g.get(L)!==E&&(g.set(L,E),L.update())}function Ye(L,E){const et=L.colorSpace,ft=L.format,gt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||et!==Ar&&et!==za&&(Ae.getTransfer(et)===Be?(ft!==Mi||gt!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),E}function je(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=tt,this.setTexture2D=ut,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=G,this.rebindTextures=an,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Vt}function bA(o,t){function i(s,l=za){let u;const h=Ae.getTransfer(l);if(s===Pi)return o.UNSIGNED_BYTE;if(s===Sd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===yd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Av)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Rv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Tv)return o.BYTE;if(s===bv)return o.SHORT;if(s===zo)return o.UNSIGNED_SHORT;if(s===xd)return o.INT;if(s===vs)return o.UNSIGNED_INT;if(s===Ni)return o.FLOAT;if(s===ko)return o.HALF_FLOAT;if(s===Cv)return o.ALPHA;if(s===wv)return o.RGB;if(s===Mi)return o.RGBA;if(s===Ho)return o.DEPTH_COMPONENT;if(s===Go)return o.DEPTH_STENCIL;if(s===Md)return o.RED;if(s===Ed)return o.RED_INTEGER;if(s===Dv)return o.RG;if(s===Td)return o.RG_INTEGER;if(s===bd)return o.RGBA_INTEGER;if(s===Rc||s===Cc||s===wc||s===Dc)if(h===Be)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Rc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Rc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Dc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Gh||s===Vh||s===kh||s===Xh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Gh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Vh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wh||s===qh||s===Yh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Wh||s===qh)return h===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Yh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd||s===rd||s===od)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===jh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Qh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Jh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$h)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===td)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ed)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===nd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===id)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ad)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===od)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ld||s===cd||s===ud)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===ld)return h===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===cd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ud)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===fd||s===hd||s===dd||s===pd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===fd)return u.COMPRESSED_RED_RGTC1_EXT;if(s===hd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===dd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===pd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Fo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const AA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class CA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Wv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Va({vertexShader:AA,fragmentShader:RA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ei(new Fc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wA extends ys{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,_=null,x=null,y=null,T=null;const R=typeof XRWebGLBinding<"u",M=new CA,v={},B=i.getContextAttributes();let N=null,U=null;const z=[],F=[],k=new le;let Z=null;const w=new ui;w.viewport=new tn;const C=new ui;C.viewport=new tn;const X=[w,C],tt=new Yy;let ot=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let vt=z[nt];return vt===void 0&&(vt=new _h,z[nt]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(nt){let vt=z[nt];return vt===void 0&&(vt=new _h,z[nt]=vt),vt.getGripSpace()},this.getHand=function(nt){let vt=z[nt];return vt===void 0&&(vt=new _h,z[nt]=vt),vt.getHandSpace()};function ut(nt){const vt=F.indexOf(nt.inputSource);if(vt===-1)return;const At=z[vt];At!==void 0&&(At.update(nt.inputSource,nt.frame,p||h),At.dispatchEvent({type:nt.type,data:nt.inputSource}))}function O(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",H);for(let nt=0;nt<z.length;nt++){const vt=F[nt];vt!==null&&(F[nt]=null,z[nt].disconnect(vt))}ot=null,dt=null,M.reset();for(const nt in v)delete v[nt];t.setRenderTarget(N),y=null,x=null,_=null,l=null,U=null,Ht.stop(),s.isPresenting=!1,t.setPixelRatio(Z),t.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){u=nt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){d=nt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",O),l.addEventListener("inputsourceschange",H),B.xrCompatible!==!0&&await i.makeXRCompatible(),Z=t.getPixelRatio(),t.getSize(k),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Kt=null,qt=null;B.depth&&(qt=B.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,At=B.stencil?Go:Ho,Kt=B.stencil?Fo:vs);const pe={colorFormat:i.RGBA8,depthFormat:qt,scaleFactor:u};_=this.getBinding(),x=_.createProjectionLayer(pe),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),U=new Ss(x.textureWidth,x.textureHeight,{format:Mi,type:Pi,depthTexture:new Xv(x.textureWidth,x.textureHeight,Kt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:B.stencil,colorSpace:t.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const At={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,At),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new Ss(y.framebufferWidth,y.framebufferHeight,{format:Mi,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ht.setContext(l),Ht.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(nt){for(let vt=0;vt<nt.removed.length;vt++){const At=nt.removed[vt],Kt=F.indexOf(At);Kt>=0&&(F[Kt]=null,z[Kt].disconnect(At))}for(let vt=0;vt<nt.added.length;vt++){const At=nt.added[vt];let Kt=F.indexOf(At);if(Kt===-1){for(let pe=0;pe<z.length;pe++)if(pe>=F.length){F.push(At),Kt=pe;break}else if(F[pe]===null){F[pe]=At,Kt=pe;break}if(Kt===-1)break}const qt=z[Kt];qt&&qt.connect(At)}}const G=new $,pt=new $;function D(nt,vt,At){G.setFromMatrixPosition(vt.matrixWorld),pt.setFromMatrixPosition(At.matrixWorld);const Kt=G.distanceTo(pt),qt=vt.projectionMatrix.elements,pe=At.projectionMatrix.elements,an=qt[14]/(qt[10]-1),I=qt[14]/(qt[10]+1),Le=(qt[9]+1)/qt[5],se=(qt[9]-1)/qt[5],ne=(qt[8]-1)/qt[0],Pt=(pe[8]+1)/pe[0],Ge=an*ne,Vt=an*Pt,re=Kt/(-ne+Pt),Ye=re*-ne;if(vt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Ye),nt.translateZ(re),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),qt[10]===-1)nt.projectionMatrix.copy(vt.projectionMatrix),nt.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const je=an+re,L=I+re,E=Ge-Ye,et=Vt+(Kt-Ye),ft=Le*I/L*je,gt=se*I/L*je;nt.projectionMatrix.makePerspective(E,et,ft,gt,je,L),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function K(nt,vt){vt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(vt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let vt=nt.near,At=nt.far;M.texture!==null&&(M.depthNear>0&&(vt=M.depthNear),M.depthFar>0&&(At=M.depthFar)),tt.near=C.near=w.near=vt,tt.far=C.far=w.far=At,(ot!==tt.near||dt!==tt.far)&&(l.updateRenderState({depthNear:tt.near,depthFar:tt.far}),ot=tt.near,dt=tt.far),tt.layers.mask=nt.layers.mask|6,w.layers.mask=tt.layers.mask&3,C.layers.mask=tt.layers.mask&5;const Kt=nt.parent,qt=tt.cameras;K(tt,Kt);for(let pe=0;pe<qt.length;pe++)K(qt[pe],Kt);qt.length===2?D(tt,w,C):tt.projectionMatrix.copy(w.projectionMatrix),St(nt,tt,Kt)};function St(nt,vt,At){At===null?nt.matrix.copy(vt.matrixWorld):(nt.matrix.copy(At.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(vt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(vt.projectionMatrix),nt.projectionMatrixInverse.copy(vt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=md*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(nt){m=nt,x!==null&&(x.fixedFoveation=nt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=nt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(tt)},this.getCameraTexture=function(nt){return v[nt]};let yt=null;function Ut(nt,vt){if(g=vt.getViewerPose(p||h),T=vt,g!==null){const At=g.views;y!==null&&(t.setRenderTargetFramebuffer(U,y.framebuffer),t.setRenderTarget(U));let Kt=!1;At.length!==tt.cameras.length&&(tt.cameras.length=0,Kt=!0);for(let I=0;I<At.length;I++){const Le=At[I];let se=null;if(y!==null)se=y.getViewport(Le);else{const Pt=_.getViewSubImage(x,Le);se=Pt.viewport,I===0&&(t.setRenderTargetTextures(U,Pt.colorTexture,Pt.depthStencilTexture),t.setRenderTarget(U))}let ne=X[I];ne===void 0&&(ne=new ui,ne.layers.enable(I),ne.viewport=new tn,X[I]=ne),ne.matrix.fromArray(Le.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Le.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(se.x,se.y,se.width,se.height),I===0&&(tt.matrix.copy(ne.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),Kt===!0&&tt.cameras.push(ne)}const qt=l.enabledFeatures;if(qt&&qt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){_=s.getBinding();const I=_.getDepthInformation(At[0]);I&&I.isValid&&I.texture&&M.init(I,l.renderState)}if(qt&&qt.includes("camera-access")&&R){t.state.unbindTexture(),_=s.getBinding();for(let I=0;I<At.length;I++){const Le=At[I].camera;if(Le){let se=v[Le];se||(se=new Wv,v[Le]=se);const ne=_.getCameraImage(Le);se.sourceTexture=ne}}}}for(let At=0;At<z.length;At++){const Kt=F[At],qt=z[At];Kt!==null&&qt!==void 0&&qt.update(Kt,vt,p||h)}yt&&yt(nt,vt),vt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:vt}),T=null}const Ht=new jv;Ht.setAnimationLoop(Ut),this.setAnimationLoop=function(nt){yt=nt},this.dispose=function(){}}}const hs=new Ii,DA=new ke;function UA(o,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,Hv(o)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,B,N,U){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(M,v):v.isMeshToonMaterial?(u(M,v),_(M,v)):v.isMeshPhongMaterial?(u(M,v),g(M,v)):v.isMeshStandardMaterial?(u(M,v),x(M,v),v.isMeshPhysicalMaterial&&y(M,v,U)):v.isMeshMatcapMaterial?(u(M,v),T(M,v)):v.isMeshDepthMaterial?u(M,v):v.isMeshDistanceMaterial?(u(M,v),R(M,v)):v.isMeshNormalMaterial?u(M,v):v.isLineBasicMaterial?(h(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?m(M,v,B,N):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Xn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Xn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const B=t.get(v),N=B.envMap,U=B.envMapRotation;N&&(M.envMap.value=N,hs.copy(U),hs.x*=-1,hs.y*=-1,hs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),M.envMapRotation.value.setFromMatrix4(DA.makeRotationFromEuler(hs)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,B,N){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*B,M.scale.value=N*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function _(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function x(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,B){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Xn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=B.texture,M.transmissionSamplerSize.value.set(B.width,B.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,v){v.matcap&&(M.matcap.value=v.matcap)}function R(M,v){const B=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(B.matrixWorld),M.nearDistance.value=B.shadow.camera.near,M.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function LA(o,t,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,N){const U=N.program;s.uniformBlockBinding(B,U)}function p(B,N){let U=l[B.id];U===void 0&&(T(B),U=g(B),l[B.id]=U,B.addEventListener("dispose",M));const z=N.program;s.updateUBOMapping(B,z);const F=t.render.frame;u[B.id]!==F&&(x(B),u[B.id]=F)}function g(B){const N=_();B.__bindingPointIndex=N;const U=o.createBuffer(),z=B.__size,F=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,z,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,U),U}function _(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(B){const N=l[B.id],U=B.uniforms,z=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let F=0,k=U.length;F<k;F++){const Z=Array.isArray(U[F])?U[F]:[U[F]];for(let w=0,C=Z.length;w<C;w++){const X=Z[w];if(y(X,F,w,z)===!0){const tt=X.__offset,ot=Array.isArray(X.value)?X.value:[X.value];let dt=0;for(let ut=0;ut<ot.length;ut++){const O=ot[ut],H=R(O);typeof O=="number"||typeof O=="boolean"?(X.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,tt+dt,X.__data)):O.isMatrix3?(X.__data[0]=O.elements[0],X.__data[1]=O.elements[1],X.__data[2]=O.elements[2],X.__data[3]=0,X.__data[4]=O.elements[3],X.__data[5]=O.elements[4],X.__data[6]=O.elements[5],X.__data[7]=0,X.__data[8]=O.elements[6],X.__data[9]=O.elements[7],X.__data[10]=O.elements[8],X.__data[11]=0):(O.toArray(X.__data,dt),dt+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,tt,X.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(B,N,U,z){const F=B.value,k=N+"_"+U;if(z[k]===void 0)return typeof F=="number"||typeof F=="boolean"?z[k]=F:z[k]=F.clone(),!0;{const Z=z[k];if(typeof F=="number"||typeof F=="boolean"){if(Z!==F)return z[k]=F,!0}else if(Z.equals(F)===!1)return Z.copy(F),!0}return!1}function T(B){const N=B.uniforms;let U=0;const z=16;for(let k=0,Z=N.length;k<Z;k++){const w=Array.isArray(N[k])?N[k]:[N[k]];for(let C=0,X=w.length;C<X;C++){const tt=w[C],ot=Array.isArray(tt.value)?tt.value:[tt.value];for(let dt=0,ut=ot.length;dt<ut;dt++){const O=ot[dt],H=R(O),G=U%z,pt=G%H.boundary,D=G+pt;U+=pt,D!==0&&z-D<H.storage&&(U+=z-D),tt.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=U,U+=H.storage}}}const F=U%z;return F>0&&(U+=z-F),B.__size=U,B.__cache={},this}function R(B){const N={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(N.boundary=4,N.storage=4):B.isVector2?(N.boundary=8,N.storage=8):B.isVector3||B.isColor?(N.boundary=16,N.storage=12):B.isVector4?(N.boundary=16,N.storage=16):B.isMatrix3?(N.boundary=48,N.storage=48):B.isMatrix4?(N.boundary=64,N.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),N}function M(B){const N=B.target;N.removeEventListener("dispose",M);const U=h.indexOf(N.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function v(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},u={}}return{bind:m,update:p,dispose:v}}class NA{constructor(t={}){const{canvas:i=ry(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=h;const T=new Uint32Array(4),R=new Int32Array(4);let M=null,v=null;const B=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ha,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let z=!1;this._outputColorSpace=ci;let F=0,k=0,Z=null,w=-1,C=null;const X=new tn,tt=new tn;let ot=null;const dt=new ye(0);let ut=0,O=i.width,H=i.height,G=1,pt=null,D=null;const K=new tn(0,0,O,H),St=new tn(0,0,O,H);let yt=!1;const Ut=new Cd;let Ht=!1,nt=!1;const vt=new ke,At=new $,Kt=new tn,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function an(){return Z===null?G:1}let I=s;function Le(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${vd}`),i.addEventListener("webglcontextlost",Ct,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",Et,!1),I===null){const q="webgl2";if(I=Le(q,A),I===null)throw Le(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let se,ne,Pt,Ge,Vt,re,Ye,je,L,E,et,ft,gt,lt,It,Rt,Xt,Yt,Mt,Lt,Zt,kt,wt,oe;function W(){se=new kT(I),se.init(),kt=new bA(I,se),ne=new IT(I,se,t,kt),Pt=new EA(I,se),ne.reversedDepthBuffer&&x&&Pt.buffers.depth.setReversed(!0),Ge=new qT(I),Vt=new uA,re=new TA(I,se,Pt,Vt,ne,kt,Ge),Ye=new zT(U),je=new VT(U),L=new Jy(I),wt=new OT(I,L),E=new XT(I,L,Ge,wt),et=new jT(I,E,L,Ge),Mt=new YT(I,ne,re),Rt=new BT(Vt),ft=new cA(U,Ye,je,se,ne,wt,Rt),gt=new UA(U,Vt),lt=new hA,It=new vA(se),Yt=new NT(U,Ye,je,Pt,et,y,m),Xt=new yA(U,et,ne),oe=new LA(I,Ge,ne,Pt),Lt=new PT(I,se,Ge),Zt=new WT(I,se,Ge),Ge.programs=ft.programs,U.capabilities=ne,U.extensions=se,U.properties=Vt,U.renderLists=lt,U.shadowMap=Xt,U.state=Pt,U.info=Ge}W();const bt=new wA(U,I);this.xr=bt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(O,H,!1))},this.getSize=function(A){return A.set(O,H)},this.setSize=function(A,q,st=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,H=q,i.width=Math.floor(A*G),i.height=Math.floor(q*G),st===!0&&(i.style.width=A+"px",i.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(O*G,H*G).floor()},this.setDrawingBufferSize=function(A,q,st){O=A,H=q,G=st,i.width=Math.floor(A*st),i.height=Math.floor(q*st),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(X)},this.getViewport=function(A){return A.copy(K)},this.setViewport=function(A,q,st,rt){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,q,st,rt),Pt.viewport(X.copy(K).multiplyScalar(G).round())},this.getScissor=function(A){return A.copy(St)},this.setScissor=function(A,q,st,rt){A.isVector4?St.set(A.x,A.y,A.z,A.w):St.set(A,q,st,rt),Pt.scissor(tt.copy(St).multiplyScalar(G).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(A){Pt.setScissorTest(yt=A)},this.setOpaqueSort=function(A){pt=A},this.setTransparentSort=function(A){D=A},this.getClearColor=function(A){return A.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,st=!0){let rt=0;if(A){let j=!1;if(Z!==null){const Tt=Z.texture.format;j=Tt===bd||Tt===Td||Tt===Ed}if(j){const Tt=Z.texture.type,Dt=Tt===Pi||Tt===vs||Tt===zo||Tt===Fo||Tt===Sd||Tt===yd,zt=Yt.getClearColor(),Nt=Yt.getClearAlpha(),Jt=zt.r,te=zt.g,Wt=zt.b;Dt?(T[0]=Jt,T[1]=te,T[2]=Wt,T[3]=Nt,I.clearBufferuiv(I.COLOR,0,T)):(R[0]=Jt,R[1]=te,R[2]=Wt,R[3]=Nt,I.clearBufferiv(I.COLOR,0,R))}else rt|=I.COLOR_BUFFER_BIT}q&&(rt|=I.DEPTH_BUFFER_BIT),st&&(rt|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",Et,!1),Yt.dispose(),lt.dispose(),It.dispose(),Vt.dispose(),Ye.dispose(),je.dispose(),et.dispose(),wt.dispose(),oe.dispose(),ft.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",cn),bt.removeEventListener("sessionend",un),Ke.stop()};function Ct(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const A=Ge.autoReset,q=Xt.enabled,st=Xt.autoUpdate,rt=Xt.needsUpdate,j=Xt.type;W(),Ge.autoReset=A,Xt.enabled=q,Xt.autoUpdate=st,Xt.needsUpdate=rt,Xt.type=j}function Et(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function xt(A){const q=A.target;q.removeEventListener("dispose",xt),Gt(q)}function Gt(A){ae(A),Vt.remove(A)}function ae(A){const q=Vt.get(A).programs;q!==void 0&&(q.forEach(function(st){ft.releaseProgram(st)}),A.isShaderMaterial&&ft.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,st,rt,j,Tt){q===null&&(q=qt);const Dt=j.isMesh&&j.matrixWorld.determinant()<0,zt=oa(A,q,st,rt,j);Pt.setMaterial(rt,Dt);let Nt=st.index,Jt=1;if(rt.wireframe===!0){if(Nt=E.getWireframeAttribute(st),Nt===void 0)return;Jt=2}const te=st.drawRange,Wt=st.attributes.position;let fe=te.start*Jt,Te=(te.start+te.count)*Jt;Tt!==null&&(fe=Math.max(fe,Tt.start*Jt),Te=Math.min(Te,(Tt.start+Tt.count)*Jt)),Nt!==null?(fe=Math.max(fe,0),Te=Math.min(Te,Nt.count)):Wt!=null&&(fe=Math.max(fe,0),Te=Math.min(Te,Wt.count));const We=Te-fe;if(We<0||We===1/0)return;wt.setup(j,rt,zt,st,Nt);let Ne,he=Lt;if(Nt!==null&&(Ne=L.get(Nt),he=Zt,he.setIndex(Ne)),j.isMesh)rt.wireframe===!0?(Pt.setLineWidth(rt.wireframeLinewidth*an()),he.setMode(I.LINES)):he.setMode(I.TRIANGLES);else if(j.isLine){let Qt=rt.linewidth;Qt===void 0&&(Qt=1),Pt.setLineWidth(Qt*an()),j.isLineSegments?he.setMode(I.LINES):j.isLineLoop?he.setMode(I.LINE_LOOP):he.setMode(I.LINE_STRIP)}else j.isPoints?he.setMode(I.POINTS):j.isSprite&&he.setMode(I.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Vo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))he.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Qt=j._multiDrawStarts,Xe=j._multiDrawCounts,_e=j._multiDrawCount,An=Nt?L.get(Nt).bytesPerElement:1,pi=Vt.get(rt).currentProgram.getUniforms();for(let Ln=0;Ln<_e;Ln++)pi.setValue(I,"_gl_DrawID",Ln),he.render(Qt[Ln]/An,Xe[Ln])}else if(j.isInstancedMesh)he.renderInstances(fe,We,j.count);else if(st.isInstancedBufferGeometry){const Qt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Xe=Math.min(st.instanceCount,Qt);he.renderInstances(fe,We,Xe)}else he.render(fe,We)};function we(A,q,st){A.transparent===!0&&A.side===sa&&A.forceSinglePass===!1?(A.side=Xn,A.needsUpdate=!0,bi(A,q,st),A.side=Ga,A.needsUpdate=!0,bi(A,q,st),A.side=sa):bi(A,q,st)}this.compile=function(A,q,st=null){st===null&&(st=A),v=It.get(st),v.init(q),N.push(v),st.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),A!==st&&A.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),v.setupLights();const rt=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){const zt=Tt[Dt];we(zt,st,j),rt.add(zt)}else we(Tt,st,j),rt.add(Tt)}),v=N.pop(),rt},this.compileAsync=function(A,q,st=null){const rt=this.compile(A,q,st);return new Promise(j=>{function Tt(){if(rt.forEach(function(Dt){Vt.get(Dt).currentProgram.isReady()&&rt.delete(Dt)}),rt.size===0){j(A);return}setTimeout(Tt,10)}se.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Ee=null;function di(A){Ee&&Ee(A)}function cn(){Ke.stop()}function un(){Ke.start()}const Ke=new jv;Ke.setAnimationLoop(di),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(A){Ee=A,bt.setAnimationLoop(A),A===null?Ke.stop():Ke.start()},bt.addEventListener("sessionstart",cn),bt.addEventListener("sessionend",un),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(q),q=bt.getCamera()),A.isScene===!0&&A.onBeforeRender(U,A,q,Z),v=It.get(A,N.length),v.init(q),N.push(v),vt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ut.setFromProjectionMatrix(vt,Oi,q.reversedDepth),nt=this.localClippingEnabled,Ht=Rt.init(this.clippingPlanes,nt),M=lt.get(A,B.length),M.init(),B.push(M),bt.enabled===!0&&bt.isPresenting===!0){const Tt=U.xr.getDepthSensingMesh();Tt!==null&&Ti(Tt,q,-1/0,U.sortObjects)}Ti(A,q,0,U.sortObjects),M.finish(),U.sortObjects===!0&&M.sort(pt,D),pe=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,pe&&Yt.addToRenderList(M,A),this.info.render.frame++,Ht===!0&&Rt.beginShadows();const st=v.state.shadowsArray;Xt.render(st,A,q),Ht===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=M.opaque,j=M.transmissive;if(v.setupLights(),q.isArrayCamera){const Tt=q.cameras;if(j.length>0)for(let Dt=0,zt=Tt.length;Dt<zt;Dt++){const Nt=Tt[Dt];Wo(rt,j,A,Nt)}pe&&Yt.render(A);for(let Dt=0,zt=Tt.length;Dt<zt;Dt++){const Nt=Tt[Dt];Ms(M,A,Nt,Nt.viewport)}}else j.length>0&&Wo(rt,j,A,q),pe&&Yt.render(A),Ms(M,A,q);Z!==null&&k===0&&(re.updateMultisampleRenderTarget(Z),re.updateRenderTargetMipmap(Z)),A.isScene===!0&&A.onAfterRender(U,A,q),wt.resetDefaultState(),w=-1,C=null,N.pop(),N.length>0?(v=N[N.length-1],Ht===!0&&Rt.setGlobalState(U.clippingPlanes,v.state.camera)):v=null,B.pop(),B.length>0?M=B[B.length-1]:M=null};function Ti(A,q,st,rt){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)st=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ut.intersectsSprite(A)){rt&&Kt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(vt);const Dt=et.update(A),zt=A.material;zt.visible&&M.push(A,Dt,zt,st,Kt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ut.intersectsObject(A))){const Dt=et.update(A),zt=A.material;if(rt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Kt.copy(A.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Kt.copy(Dt.boundingSphere.center)),Kt.applyMatrix4(A.matrixWorld).applyMatrix4(vt)),Array.isArray(zt)){const Nt=Dt.groups;for(let Jt=0,te=Nt.length;Jt<te;Jt++){const Wt=Nt[Jt],fe=zt[Wt.materialIndex];fe&&fe.visible&&M.push(A,Dt,fe,st,Kt.z,Wt)}}else zt.visible&&M.push(A,Dt,zt,st,Kt.z,null)}}const Tt=A.children;for(let Dt=0,zt=Tt.length;Dt<zt;Dt++)Ti(Tt[Dt],q,st,rt)}function Ms(A,q,st,rt){const j=A.opaque,Tt=A.transmissive,Dt=A.transparent;v.setupLightsView(st),Ht===!0&&Rt.setGlobalState(U.clippingPlanes,st),rt&&Pt.viewport(X.copy(rt)),j.length>0&&Es(j,q,st),Tt.length>0&&Es(Tt,q,st),Dt.length>0&&Es(Dt,q,st),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Wo(A,q,st,rt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[rt.id]===void 0&&(v.state.transmissionRenderTarget[rt.id]=new Ss(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?ko:Pi,minFilter:_s,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const Tt=v.state.transmissionRenderTarget[rt.id],Dt=rt.viewport||X;Tt.setSize(Dt.z*U.transmissionResolutionScale,Dt.w*U.transmissionResolutionScale);const zt=U.getRenderTarget(),Nt=U.getActiveCubeFace(),Jt=U.getActiveMipmapLevel();U.setRenderTarget(Tt),U.getClearColor(dt),ut=U.getClearAlpha(),ut<1&&U.setClearColor(16777215,.5),U.clear(),pe&&Yt.render(st);const te=U.toneMapping;U.toneMapping=Ha;const Wt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),v.setupLightsView(rt),Ht===!0&&Rt.setGlobalState(U.clippingPlanes,rt),Es(A,st,rt),re.updateMultisampleRenderTarget(Tt),re.updateRenderTargetMipmap(Tt),se.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let Te=0,We=q.length;Te<We;Te++){const Ne=q[Te],he=Ne.object,Qt=Ne.geometry,Xe=Ne.material,_e=Ne.group;if(Xe.side===sa&&he.layers.test(rt.layers)){const An=Xe.side;Xe.side=Xn,Xe.needsUpdate=!0,Lr(he,st,rt,Qt,Xe,_e),Xe.side=An,Xe.needsUpdate=!0,fe=!0}}fe===!0&&(re.updateMultisampleRenderTarget(Tt),re.updateRenderTargetMipmap(Tt))}U.setRenderTarget(zt,Nt,Jt),U.setClearColor(dt,ut),Wt!==void 0&&(rt.viewport=Wt),U.toneMapping=te}function Es(A,q,st){const rt=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Tt=A.length;j<Tt;j++){const Dt=A[j],zt=Dt.object,Nt=Dt.geometry,Jt=Dt.group;let te=Dt.material;te.allowOverride===!0&&rt!==null&&(te=rt),zt.layers.test(st.layers)&&Lr(zt,q,st,Nt,te,Jt)}}function Lr(A,q,st,rt,j,Tt){A.onBeforeRender(U,q,st,rt,j,Tt),A.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(U,q,st,rt,A,Tt),j.transparent===!0&&j.side===sa&&j.forceSinglePass===!1?(j.side=Xn,j.needsUpdate=!0,U.renderBufferDirect(st,q,rt,j,A,Tt),j.side=Ga,j.needsUpdate=!0,U.renderBufferDirect(st,q,rt,j,A,Tt),j.side=sa):U.renderBufferDirect(st,q,rt,j,A,Tt),A.onAfterRender(U,q,st,rt,j,Tt)}function bi(A,q,st){q.isScene!==!0&&(q=qt);const rt=Vt.get(A),j=v.state.lights,Tt=v.state.shadowsArray,Dt=j.state.version,zt=ft.getParameters(A,j.state,Tt,q,st),Nt=ft.getProgramCacheKey(zt);let Jt=rt.programs;rt.environment=A.isMeshStandardMaterial?q.environment:null,rt.fog=q.fog,rt.envMap=(A.isMeshStandardMaterial?je:Ye).get(A.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Jt===void 0&&(A.addEventListener("dispose",xt),Jt=new Map,rt.programs=Jt);let te=Jt.get(Nt);if(te!==void 0){if(rt.currentProgram===te&&rt.lightsStateVersion===Dt)return zi(A,zt),te}else zt.uniforms=ft.getUniforms(A),A.onBeforeCompile(zt,U),te=ft.acquireProgram(zt,Nt),Jt.set(Nt,te),rt.uniforms=zt.uniforms;const Wt=rt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=Rt.uniform),zi(A,zt),rt.needsLights=la(A),rt.lightsStateVersion=Dt,rt.needsLights&&(Wt.ambientLightColor.value=j.state.ambient,Wt.lightProbe.value=j.state.probe,Wt.directionalLights.value=j.state.directional,Wt.directionalLightShadows.value=j.state.directionalShadow,Wt.spotLights.value=j.state.spot,Wt.spotLightShadows.value=j.state.spotShadow,Wt.rectAreaLights.value=j.state.rectArea,Wt.ltc_1.value=j.state.rectAreaLTC1,Wt.ltc_2.value=j.state.rectAreaLTC2,Wt.pointLights.value=j.state.point,Wt.pointLightShadows.value=j.state.pointShadow,Wt.hemisphereLights.value=j.state.hemi,Wt.directionalShadowMap.value=j.state.directionalShadowMap,Wt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Wt.spotShadowMap.value=j.state.spotShadowMap,Wt.spotLightMatrix.value=j.state.spotLightMatrix,Wt.spotLightMap.value=j.state.spotLightMap,Wt.pointShadowMap.value=j.state.pointShadowMap,Wt.pointShadowMatrix.value=j.state.pointShadowMatrix),rt.currentProgram=te,rt.uniformsList=null,te}function Ts(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Lc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function zi(A,q){const st=Vt.get(A);st.outputColorSpace=q.outputColorSpace,st.batching=q.batching,st.batchingColor=q.batchingColor,st.instancing=q.instancing,st.instancingColor=q.instancingColor,st.instancingMorph=q.instancingMorph,st.skinning=q.skinning,st.morphTargets=q.morphTargets,st.morphNormals=q.morphNormals,st.morphColors=q.morphColors,st.morphTargetsCount=q.morphTargetsCount,st.numClippingPlanes=q.numClippingPlanes,st.numIntersection=q.numClipIntersection,st.vertexAlphas=q.vertexAlphas,st.vertexTangents=q.vertexTangents,st.toneMapping=q.toneMapping}function oa(A,q,st,rt,j){q.isScene!==!0&&(q=qt),re.resetTextureUnits();const Tt=q.fog,Dt=rt.isMeshStandardMaterial?q.environment:null,zt=Z===null?U.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ar,Nt=(rt.isMeshStandardMaterial?je:Ye).get(rt.envMap||Dt),Jt=rt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,te=!!st.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Wt=!!st.morphAttributes.position,fe=!!st.morphAttributes.normal,Te=!!st.morphAttributes.color;let We=Ha;rt.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(We=U.toneMapping);const Ne=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,he=Ne!==void 0?Ne.length:0,Qt=Vt.get(rt),Xe=v.state.lights;if(Ht===!0&&(nt===!0||A!==C)){const Qe=A===C&&rt.id===w;Rt.setState(rt,A,Qe)}let _e=!1;rt.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Xe.state.version||Qt.outputColorSpace!==zt||j.isBatchedMesh&&Qt.batching===!1||!j.isBatchedMesh&&Qt.batching===!0||j.isBatchedMesh&&Qt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Qt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Qt.instancing===!1||!j.isInstancedMesh&&Qt.instancing===!0||j.isSkinnedMesh&&Qt.skinning===!1||!j.isSkinnedMesh&&Qt.skinning===!0||j.isInstancedMesh&&Qt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Qt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Qt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Qt.instancingMorph===!1&&j.morphTexture!==null||Qt.envMap!==Nt||rt.fog===!0&&Qt.fog!==Tt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Rt.numPlanes||Qt.numIntersection!==Rt.numIntersection)||Qt.vertexAlphas!==Jt||Qt.vertexTangents!==te||Qt.morphTargets!==Wt||Qt.morphNormals!==fe||Qt.morphColors!==Te||Qt.toneMapping!==We||Qt.morphTargetsCount!==he)&&(_e=!0):(_e=!0,Qt.__version=rt.version);let An=Qt.currentProgram;_e===!0&&(An=bi(rt,q,j));let pi=!1,Ln=!1,gn=!1;const Fe=An.getUniforms(),Nn=Qt.uniforms;if(Pt.useProgram(An.program)&&(pi=!0,Ln=!0,gn=!0),rt.id!==w&&(w=rt.id,Ln=!0),pi||C!==A){Pt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Fe.setValue(I,"projectionMatrix",A.projectionMatrix),Fe.setValue(I,"viewMatrix",A.matrixWorldInverse);const Mn=Fe.map.cameraPosition;Mn!==void 0&&Mn.setValue(I,At.setFromMatrixPosition(A.matrixWorld)),ne.logarithmicDepthBuffer&&Fe.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Fe.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Ln=!0,gn=!0)}if(j.isSkinnedMesh){Fe.setOptional(I,j,"bindMatrix"),Fe.setOptional(I,j,"bindMatrixInverse");const Qe=j.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Fe.setValue(I,"boneTexture",Qe.boneTexture,re))}j.isBatchedMesh&&(Fe.setOptional(I,j,"batchingTexture"),Fe.setValue(I,"batchingTexture",j._matricesTexture,re),Fe.setOptional(I,j,"batchingIdTexture"),Fe.setValue(I,"batchingIdTexture",j._indirectTexture,re),Fe.setOptional(I,j,"batchingColorTexture"),j._colorsTexture!==null&&Fe.setValue(I,"batchingColorTexture",j._colorsTexture,re));const Rn=st.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&Mt.update(j,st,An),(Ln||Qt.receiveShadow!==j.receiveShadow)&&(Qt.receiveShadow=j.receiveShadow,Fe.setValue(I,"receiveShadow",j.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Nn.envMap.value=Nt,Nn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&q.environment!==null&&(Nn.envMapIntensity.value=q.environmentIntensity),Ln&&(Fe.setValue(I,"toneMappingExposure",U.toneMappingExposure),Qt.needsLights&&Xa(Nn,gn),Tt&&rt.fog===!0&&gt.refreshFogUniforms(Nn,Tt),gt.refreshMaterialUniforms(Nn,rt,G,H,v.state.transmissionRenderTarget[A.id]),Lc.upload(I,Ts(Qt),Nn,re)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Lc.upload(I,Ts(Qt),Nn,re),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Fe.setValue(I,"center",j.center),Fe.setValue(I,"modelViewMatrix",j.modelViewMatrix),Fe.setValue(I,"normalMatrix",j.normalMatrix),Fe.setValue(I,"modelMatrix",j.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Qe=rt.uniformsGroups;for(let Mn=0,bs=Qe.length;Mn<bs;Mn++){const Bn=Qe[Mn];oe.update(Bn,An),oe.bind(Bn,An)}}return An}function Xa(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function la(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,q,st){const rt=Vt.get(A);rt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Vt.get(A.texture).__webglTexture=q,Vt.get(A.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:st,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const st=Vt.get(A);st.__webglFramebuffer=q,st.__useDefaultFramebuffer=q===void 0};const sn=I.createFramebuffer();this.setRenderTarget=function(A,q=0,st=0){Z=A,F=q,k=st;let rt=!0,j=null,Tt=!1,Dt=!1;if(A){const Nt=Vt.get(A);if(Nt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(I.FRAMEBUFFER,null),rt=!1;else if(Nt.__webglFramebuffer===void 0)re.setupRenderTarget(A);else if(Nt.__hasExternalTextures)re.rebindTextures(A,Vt.get(A.texture).__webglTexture,Vt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Wt=A.depthTexture;if(Nt.__boundDepthTexture!==Wt){if(Wt!==null&&Vt.has(Wt)&&(A.width!==Wt.image.width||A.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(A)}}const Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Dt=!0);const te=Vt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(te[q])?j=te[q][st]:j=te[q],Tt=!0):A.samples>0&&re.useMultisampledRTT(A)===!1?j=Vt.get(A).__webglMultisampledFramebuffer:Array.isArray(te)?j=te[st]:j=te,X.copy(A.viewport),tt.copy(A.scissor),ot=A.scissorTest}else X.copy(K).multiplyScalar(G).floor(),tt.copy(St).multiplyScalar(G).floor(),ot=yt;if(st!==0&&(j=sn),Pt.bindFramebuffer(I.FRAMEBUFFER,j)&&rt&&Pt.drawBuffers(A,j),Pt.viewport(X),Pt.scissor(tt),Pt.setScissorTest(ot),Tt){const Nt=Vt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+q,Nt.__webglTexture,st)}else if(Dt){const Nt=q;for(let Jt=0;Jt<A.textures.length;Jt++){const te=Vt.get(A.textures[Jt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Jt,te.__webglTexture,st,Nt)}}else if(A!==null&&st!==0){const Nt=Vt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Nt.__webglTexture,st)}w=-1},this.readRenderTargetPixels=function(A,q,st,rt,j,Tt,Dt,zt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt){Pt.bindFramebuffer(I.FRAMEBUFFER,Nt);try{const Jt=A.textures[zt],te=Jt.format,Wt=Jt.type;if(!ne.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-rt&&st>=0&&st<=A.height-j&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+zt),I.readPixels(q,st,rt,j,kt.convert(te),kt.convert(Wt),Tt))}finally{const Jt=Z!==null?Vt.get(Z).__webglFramebuffer:null;Pt.bindFramebuffer(I.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(A,q,st,rt,j,Tt,Dt,zt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt)if(q>=0&&q<=A.width-rt&&st>=0&&st<=A.height-j){Pt.bindFramebuffer(I.FRAMEBUFFER,Nt);const Jt=A.textures[zt],te=Jt.format,Wt=Jt.type;if(!ne.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const fe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,fe),I.bufferData(I.PIXEL_PACK_BUFFER,Tt.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+zt),I.readPixels(q,st,rt,j,kt.convert(te),kt.convert(Wt),0);const Te=Z!==null?Vt.get(Z).__webglFramebuffer:null;Pt.bindFramebuffer(I.FRAMEBUFFER,Te);const We=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await oy(I,We,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,fe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Tt),I.deleteBuffer(fe),I.deleteSync(We),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,st=0){const rt=Math.pow(2,-st),j=Math.floor(A.image.width*rt),Tt=Math.floor(A.image.height*rt),Dt=q!==null?q.x:0,zt=q!==null?q.y:0;re.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,st,0,0,Dt,zt,j,Tt),Pt.unbindTexture()};const qo=I.createFramebuffer(),Yo=I.createFramebuffer();this.copyTextureToTexture=function(A,q,st=null,rt=null,j=0,Tt=null){Tt===null&&(j!==0?(Vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=j,j=0):Tt=0);let Dt,zt,Nt,Jt,te,Wt,fe,Te,We;const Ne=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(st!==null)Dt=st.max.x-st.min.x,zt=st.max.y-st.min.y,Nt=st.isBox3?st.max.z-st.min.z:1,Jt=st.min.x,te=st.min.y,Wt=st.isBox3?st.min.z:0;else{const Rn=Math.pow(2,-j);Dt=Math.floor(Ne.width*Rn),zt=Math.floor(Ne.height*Rn),A.isDataArrayTexture?Nt=Ne.depth:A.isData3DTexture?Nt=Math.floor(Ne.depth*Rn):Nt=1,Jt=0,te=0,Wt=0}rt!==null?(fe=rt.x,Te=rt.y,We=rt.z):(fe=0,Te=0,We=0);const he=kt.convert(q.format),Qt=kt.convert(q.type);let Xe;q.isData3DTexture?(re.setTexture3D(q,0),Xe=I.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(re.setTexture2DArray(q,0),Xe=I.TEXTURE_2D_ARRAY):(re.setTexture2D(q,0),Xe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,q.unpackAlignment);const _e=I.getParameter(I.UNPACK_ROW_LENGTH),An=I.getParameter(I.UNPACK_IMAGE_HEIGHT),pi=I.getParameter(I.UNPACK_SKIP_PIXELS),Ln=I.getParameter(I.UNPACK_SKIP_ROWS),gn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ne.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ne.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Jt),I.pixelStorei(I.UNPACK_SKIP_ROWS,te),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Wt);const Fe=A.isDataArrayTexture||A.isData3DTexture,Nn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const Rn=Vt.get(A),Qe=Vt.get(q),Mn=Vt.get(Rn.__renderTarget),bs=Vt.get(Qe.__renderTarget);Pt.bindFramebuffer(I.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Pt.bindFramebuffer(I.DRAW_FRAMEBUFFER,bs.__webglFramebuffer);for(let Bn=0;Bn<Nt;Bn++)Fe&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vt.get(A).__webglTexture,j,Wt+Bn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vt.get(q).__webglTexture,Tt,We+Bn)),I.blitFramebuffer(Jt,te,Dt,zt,fe,Te,Dt,zt,I.DEPTH_BUFFER_BIT,I.NEAREST);Pt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||Vt.has(A)){const Rn=Vt.get(A),Qe=Vt.get(q);Pt.bindFramebuffer(I.READ_FRAMEBUFFER,qo),Pt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Yo);for(let Mn=0;Mn<Nt;Mn++)Fe?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Rn.__webglTexture,j,Wt+Mn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Rn.__webglTexture,j),Nn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Qe.__webglTexture,Tt,We+Mn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Qe.__webglTexture,Tt),j!==0?I.blitFramebuffer(Jt,te,Dt,zt,fe,Te,Dt,zt,I.COLOR_BUFFER_BIT,I.NEAREST):Nn?I.copyTexSubImage3D(Xe,Tt,fe,Te,We+Mn,Jt,te,Dt,zt):I.copyTexSubImage2D(Xe,Tt,fe,Te,Jt,te,Dt,zt);Pt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Nn?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Xe,Tt,fe,Te,We,Dt,zt,Nt,he,Qt,Ne.data):q.isCompressedArrayTexture?I.compressedTexSubImage3D(Xe,Tt,fe,Te,We,Dt,zt,Nt,he,Ne.data):I.texSubImage3D(Xe,Tt,fe,Te,We,Dt,zt,Nt,he,Qt,Ne):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Tt,fe,Te,Dt,zt,he,Qt,Ne.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Tt,fe,Te,Ne.width,Ne.height,he,Ne.data):I.texSubImage2D(I.TEXTURE_2D,Tt,fe,Te,Dt,zt,he,Qt,Ne);I.pixelStorei(I.UNPACK_ROW_LENGTH,_e),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,An),I.pixelStorei(I.UNPACK_SKIP_PIXELS,pi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ln),I.pixelStorei(I.UNPACK_SKIP_IMAGES,gn),Tt===0&&q.generateMipmaps&&I.generateMipmap(Xe),Pt.unbindTexture()},this.initRenderTarget=function(A){Vt.get(A).__webglFramebuffer===void 0&&re.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?re.setTextureCube(A,0):A.isData3DTexture?re.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?re.setTexture2DArray(A,0):re.setTexture2D(A,0),Pt.unbindTexture()},this.resetState=function(){F=0,k=0,Z=null,Pt.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const xv={type:"change"},Ud={type:"start"},$v={type:"end"},bc=new Rd,Sv=new Ba,OA=Math.cos(70*sy.DEG2RAD),dn=new $,kn=2*Math.PI,ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Rh=1e-6;class PA extends Ky{constructor(t,i=null){super(t,i),this.state=ze.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Sr.ROTATE,MIDDLE:Sr.DOLLY,RIGHT:Sr.PAN},this.touches={ONE:vr.ROTATE,TWO:vr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new xs,this._lastTargetPosition=new $,this._quat=new xs().setFromUnitVectors(t.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Y_,this._sphericalDelta=new Y_,this._scale=1,this._panOffset=new $,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new $,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=BA.bind(this),this._onPointerDown=IA.bind(this),this._onPointerUp=zA.bind(this),this._onContextMenu=WA.bind(this),this._onMouseWheel=GA.bind(this),this._onKeyDown=VA.bind(this),this._onTouchStart=kA.bind(this),this._onTouchMove=XA.bind(this),this._onMouseDown=FA.bind(this),this._onMouseMove=HA.bind(this),this._interceptControlDown=qA.bind(this),this._interceptControlUp=YA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xv),this.update(),this.state=ze.NONE}update(t=null){const i=this.object.position;dn.copy(i).sub(this.target),dn.applyQuaternion(this._quat),this._spherical.setFromVector3(dn),this.autoRotate&&this.state===ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=kn:s>Math.PI&&(s-=kn),l<-Math.PI?l+=kn:l>Math.PI&&(l-=kn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(dn.setFromSpherical(this._spherical),dn.applyQuaternion(this._quatInverse),i.copy(this.target).add(dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=dn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new $(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new $(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(bc.origin.copy(this.object.position),bc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(bc.direction))<OA?this.object.lookAt(this.target):(Sv.setFromNormalAndCoplanarPoint(this.object.up,this.target),bc.intersectPlane(Sv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Rh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Rh||this._lastTargetPosition.distanceToSquared(this.target)>Rh?(this.dispatchEvent(xv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?kn/60*this.autoRotateSpeed*t:kn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){dn.setFromMatrixColumn(i,0),dn.multiplyScalar(-t),this._panOffset.add(dn)}_panUp(t,i){this.screenSpacePanning===!0?dn.setFromMatrixColumn(i,1):(dn.setFromMatrixColumn(i,0),dn.crossVectors(this.object.up,dn)),dn.multiplyScalar(t),this._panOffset.add(dn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;dn.copy(l).sub(this.target);let u=dn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),u=.5*(t.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new le,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function IA(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function BA(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function zA(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($v),this.state=ze.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function FA(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Sr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=ze.DOLLY;break;case Sr.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=ze.ROTATE}break;case Sr.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=ze.PAN}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(Ud)}function HA(o){switch(this.state){case ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function GA(o){this.enabled===!1||this.enableZoom===!1||this.state!==ze.NONE||(o.preventDefault(),this.dispatchEvent(Ud),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent($v))}function VA(o){this.enabled!==!1&&this._handleKeyDown(o)}function kA(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case vr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=ze.TOUCH_ROTATE;break;case vr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=ze.TOUCH_PAN;break;default:this.state=ze.NONE}break;case 2:switch(this.touches.TWO){case vr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=ze.TOUCH_DOLLY_PAN;break;case vr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=ze.TOUCH_DOLLY_ROTATE;break;default:this.state=ze.NONE}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(Ud)}function XA(o){switch(this._trackPointer(o),this.state){case ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=ze.NONE}}function WA(o){this.enabled!==!1&&o.preventDefault()}function qA(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function YA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jA({cells:o,dimensions:t,fitKey:i}){const s=Ce.useRef(null),l=Ce.useRef(null),[u,h]=Ce.useState(""),[d,m,p]=t;return Ce.useEffect(()=>{const g=s.current;let _;try{_=new NA({antialias:!0})}catch{h("WebGL2 is unavailable. Enable hardware acceleration or use the 2D view.");return}h(""),_.setPixelRatio(Math.min(devicePixelRatio,2)),_.setClearColor(857874),_.domElement.setAttribute("aria-label","3D voxel canvas"),g.appendChild(_.domElement);const x=new Ly,y=new ui(45,1,.1,3e3),T=new PA(y,_.domElement);T.enableDamping=!0,T.dampingFactor=.09;const R=Math.hypot(d,m,p)/2;T.minDistance=2,T.maxDistance=R*12;const M=()=>{T.target.set(0,0,0);const tt=Math.min(y.fov*Math.PI/360,Math.atan(Math.tan(y.fov*Math.PI/360)*y.aspect)),ot=R/Math.sin(tt)*1.08;y.position.copy(new $(1,.75,1.3).normalize().multiplyScalar(ot)),T.update()};x.add(new ky(14483430,2371625,2.4));const v=new qy(16777215,3);v.position.set(15,25,20),x.add(v);const B=new Dr(.8,.8,.8),N=new Hy({roughness:.6,metalness:.05}),U=new Py(B,N,d*m*p);U.count=0,U.instanceMatrix.setUsage(iy),U.frustumCulled=!1,x.add(U);const z=new Zy(new ka(new $(-d/2,-m/2,-p/2),new $(d/2,m/2,p/2)),4086085);x.add(z);const F=new jy(Math.max(d,p),Math.max(d,p),4350023,2112297);F.position.y=-m/2-.5,x.add(F),l.current={mesh:U,fit:M};const k=()=>{_.setSize(g.clientWidth,g.clientHeight),y.aspect=g.clientWidth/Math.max(1,g.clientHeight),y.updateProjectionMatrix()};k(),M();const Z=new ResizeObserver(k);Z.observe(g);let w=0;const C=()=>{T.update(),_.render(x,y),w=requestAnimationFrame(C)};C();const X=tt=>{tt.preventDefault(),h("The WebGL context was lost. Switch to 2D and back to recreate the view.")};return _.domElement.addEventListener("webglcontextlost",X),()=>{cancelAnimationFrame(w),Z.disconnect(),T.dispose(),l.current=null,_.domElement.removeEventListener("webglcontextlost",X),B.dispose(),N.dispose(),z.geometry.dispose(),[z.material].flat().forEach(tt=>tt.dispose()),F.geometry.dispose(),F.material.dispose(),_.dispose(),_.forceContextLoss(),_.domElement.remove()}},[d,m,p]),Ce.useEffect(()=>{var T;const g=(T=l.current)==null?void 0:T.mesh;if(!g)return;const _=new ke,x=new ye;let y=0;for(let R=0;R<o.length;R++){if(!o[R])continue;const M=R%d,v=Math.floor(R/d)%m,B=Math.floor(R/(d*m));_.makeTranslation(M-(d-1)/2,(m-1)/2-v,B-(p-1)/2),g.setMatrixAt(y,_),x.setHSL(.28+.13*B/Math.max(1,p-1),.48,.57+.13*v/m),g.setColorAt(y,x),y++}g.count=y,g.instanceMatrix.needsUpdate=!0,g.instanceColor&&(g.instanceColor.needsUpdate=!0),s.current.dataset.voxels=String(y)},[o,d,m,p]),Ce.useEffect(()=>{var g;(g=l.current)==null||g.fit()},[i]),ct.jsx("div",{ref:s,className:"three-stage","aria-label":"3D automaton viewport",children:u&&ct.jsx("div",{role:"alert",className:"webgl-error",children:u})})}function ZA({cells:o,width:t,height:i,fitKey:s}){const l=Ce.useRef(null),u=Ce.useRef(null),[h,d]=Ce.useState(1),[m,p]=Ce.useState({x:0,y:0}),g=Ce.useRef(null);return Ce.useEffect(()=>{const _=u.current,x=y=>{y.preventDefault(),d(T=>Math.max(.5,Math.min(12,T*(y.deltaY<0?1.15:.87))))};return _.addEventListener("wheel",x,{passive:!1}),()=>_.removeEventListener("wheel",x)},[]),Ce.useEffect(()=>{d(1),p({x:0,y:0})},[s,t,i]),Ce.useEffect(()=>{var y;const _=(y=l.current)==null?void 0:y.getContext("2d");if(!_)return;const x=new ImageData(t,i);for(let T=0;T<o.length;T++){const R=o[T]?[166,237,179]:[19,31,28];x.data.set([...R,255],T*4)}_.putImageData(x,0,0)},[o,t,i]),ct.jsxs("div",{ref:u,className:"canvas-stage","aria-label":"2D automaton viewport",onPointerDown:_=>{_.currentTarget.setPointerCapture(_.pointerId),g.current={x:_.clientX,y:_.clientY}},onPointerMove:_=>{if(g.current){const x=g.current;p(y=>({x:y.x+_.clientX-x.x,y:y.y+_.clientY-x.y})),g.current={x:_.clientX,y:_.clientY}}},onPointerUp:()=>{g.current=null},onPointerCancel:()=>{g.current=null},children:[ct.jsx("canvas",{ref:l,width:t,height:i,"aria-label":"Cell state",style:{transform:`translate(${m.x}px, ${m.y}px) scale(${h})`,aspectRatio:`${t}/${i}`}}),ct.jsxs("span",{className:"zoom-label",children:[Math.round(h*100),"%"]})]})}const Ac={dimensions:[128,128],family:"totalistic",neighborhood:"moore",birth:[3],survival:[2,3],wolframRule:30,wrap:!0,seed:42,density:.25,initial:"random"};function KA(){const o=Ce.useRef(null),[t,i]=Ce.useState(Ac),[s,l]=Ce.useState(Ac),[u,h]=Ce.useState(new Uint8Array),[d,m]=Ce.useState(),[p,g]=Ce.useState(""),[_,x]=Ce.useState(!1),[y,T]=Ce.useState(!1),R=Ce.useRef(!1),[M,v]=Ce.useState(!1),[B,N]=Ce.useState(8),[U,z]=Ce.useState(0),[F,k]=Ce.useState(0),[Z,w]=Ce.useState("3"),[C,X]=Ce.useState("2, 3"),tt=H=>{h(H.cells),m(H.metadata),k(H.duration)};Ce.useEffect(()=>{let H=!1;const G=new mS;return o.current=G,(async()=>{await G.initialize();const pt=await G.configure(JSON.stringify(Ac));H||(tt(pt),x(!0))})().catch(pt=>{H||g(String(pt))}),()=>{H=!0,G.dispose()}},[]);async function ot(H){if(!R.current){R.current=!0,v(!0);try{tt(await H()),g("")}catch(G){g(String(G)),T(!1)}finally{R.current=!1,v(!1)}}}Ce.useEffect(()=>{if(!y)return;let H=!1,G;const pt=async()=>{const D=performance.now();await ot(()=>o.current.step()),H||(G=setTimeout(pt,Math.max(0,1e3/B-(performance.now()-D))))};return G=setTimeout(pt,0),()=>{H=!0,clearTimeout(G)}},[y,B]);async function dt(H){if(H.preventDefault(),T(!1),!R.current){R.current=!0,v(!0);try{const G=K=>{if(!/^\s*(\d+\s*(,\s*\d+\s*)*)?$/.test(K))throw Error("Use comma-separated whole neighbor counts.");return K.trim()?K.split(",").map(Number):[]},pt={...t,birth:G(Z),survival:G(C)},D=await o.current.configure(JSON.stringify(pt));i(pt),l(pt),tt(D),g(""),z(K=>K+1)}catch(G){g(String(G))}finally{R.current=!1,v(!1)}}}function ut(H){const G=H.startsWith("wolfram"),pt=H.endsWith("3d")?3:2,D={...Ac,dimensions:pt===3?[32,32,32]:[128,128],family:G?"wolfram":"totalistic",neighborhood:pt===3&&!G?"extrudedMoore":"moore",density:pt===3?.12:.25,initial:G?"single":"random",wrap:!G};i(D),w("3"),X("2, 3")}const O=JSON.stringify(t)!==JSON.stringify(s)||Z!==s.birth.join(", ")||C!==s.survival.join(", ");return ct.jsxs("div",{className:"app",children:[ct.jsxs("header",{children:[ct.jsxs("a",{className:"brand",href:"./",children:[ct.jsx("span",{className:"brand-icon",children:"▦"})," cellular",ct.jsx("span",{className:"brand-tag",children:"AUTOMATA LAB"})]}),ct.jsxs("span",{className:"runtime",children:[ct.jsx("i",{className:_?"online":""}),_?".NET WASM · local execution":"Starting .NET runtime…"]})]}),ct.jsxs("div",{className:"workspace",children:[ct.jsxs("aside",{children:[ct.jsxs("div",{className:"aside-heading",children:[ct.jsx("span",{className:"eyebrow",children:"EXPERIMENT SETUP"}),ct.jsxs("h1",{children:["Small rules.",ct.jsx("br",{}),"Complex worlds."]}),ct.jsx("p",{children:"Build a universe, one generation at a time."})]}),ct.jsxs("form",{onSubmit:dt,children:[ct.jsxs("section",{children:[ct.jsxs("label",{children:["Start from a preset",ct.jsxs("select",{defaultValue:"conway2d",onChange:H=>ut(H.target.value),children:[ct.jsx("option",{value:"conway2d",children:"Conway · 2D"}),ct.jsx("option",{value:"conway3d",children:"Conway · 3D"}),ct.jsx("option",{value:"wolfram2d",children:"Wolfram Rule 30 · 2D"}),ct.jsx("option",{value:"wolfram3d",children:"Wolfram Rule 30 · 3D"})]})]}),ct.jsxs("div",{className:"section-title",children:[ct.jsx("span",{children:"01"})," Universe"]}),ct.jsx("div",{className:"segmented",children:[2,3].map(H=>ct.jsxs("button",{type:"button",className:t.dimensions.length===H?"selected":"",onClick:()=>i({...t,dimensions:H===2?[128,128]:[32,32,32],neighborhood:"moore"}),children:[H,"D ",H===2?"plane":"volume"]},H))}),ct.jsx("div",{className:"row",children:t.dimensions.map((H,G)=>ct.jsxs("label",{children:[["Width","Height","Depth"][G],ct.jsx("input",{type:"number",min:"3",max:"256",required:!0,value:H,onChange:pt=>i({...t,dimensions:t.dimensions.map((D,K)=>G===K?Number(pt.target.value):D)})})]},G))}),ct.jsxs("label",{className:"check",children:[ct.jsx("input",{type:"checkbox",checked:t.wrap,onChange:H=>i({...t,wrap:H.target.checked})})," ","Wrap edges ",ct.jsx("span",{children:"↔"})]})]}),ct.jsxs("section",{children:[ct.jsxs("div",{className:"section-title",children:[ct.jsx("span",{children:"02"})," Rule builder"]}),ct.jsxs("label",{children:["Rule family",ct.jsxs("select",{value:t.family,onChange:H=>i({...t,family:H.target.value}),children:[ct.jsx("option",{value:"totalistic",children:"Birth / survival"}),ct.jsx("option",{value:"wolfram",children:"Wolfram · 0–255"})]})]}),t.family==="totalistic"?ct.jsxs(ct.Fragment,{children:[ct.jsxs("label",{children:["Neighborhood",ct.jsxs("select",{value:t.neighborhood,onChange:H=>i({...t,neighborhood:H.target.value}),children:[ct.jsxs("option",{value:"moore",children:["Moore · ",t.dimensions.length===2?8:26," ","neighbors"]}),ct.jsxs("option",{value:"vonNeumann",children:["von Neumann · ",t.dimensions.length===2?4:6," ","neighbors"]}),t.dimensions.length===3&&ct.jsx("option",{value:"extrudedMoore",children:"Extruded Moore · 24 neighbors"})]})]}),ct.jsxs("div",{className:"row",children:[ct.jsxs("label",{children:["Birth counts",ct.jsx("input",{value:Z,onChange:H=>w(H.target.value),placeholder:"3"})]}),ct.jsxs("label",{children:["Survival counts",ct.jsx("input",{value:C,onChange:H=>X(H.target.value),placeholder:"2, 3"})]})]}),ct.jsx("p",{className:"hint",children:"Comma-separated live-neighbor counts. An empty list means never."})]}):ct.jsxs(ct.Fragment,{children:[ct.jsxs("label",{children:["Rule number",ct.jsx("input",{type:"number",min:"0",max:"255",required:!0,value:t.wolframRule,onChange:H=>i({...t,wolframRule:Number(H.target.value)})})]}),ct.jsx("p",{className:"hint",children:"Y records time from a fixed seed row. In 3D, each input is OR’d across three Z neighbors."})]})]}),ct.jsxs("section",{children:[ct.jsxs("div",{className:"section-title",children:[ct.jsx("span",{children:"03"})," Initial state"]}),ct.jsxs("label",{children:["Pattern",ct.jsxs("select",{value:t.initial,onChange:H=>i({...t,initial:H.target.value}),children:[ct.jsx("option",{value:"random",children:"Seeded random"}),ct.jsx("option",{value:"single",children:"Single cell"}),ct.jsx("option",{value:"empty",children:"Empty"})]})]}),ct.jsxs("div",{className:"row",children:[ct.jsxs("label",{children:["Seed",ct.jsx("input",{type:"number",min:"0",max:"4294967295",required:!0,value:t.seed,onChange:H=>i({...t,seed:Number(H.target.value)})})]}),ct.jsxs("label",{children:["Density (%)",ct.jsx("input",{type:"number",min:"0",max:"100",step:"1",required:!0,value:Math.round(t.density*100),onChange:H=>i({...t,density:Number(H.target.value)/100})})]})]})]}),ct.jsxs("button",{className:"apply",disabled:!_||M,type:"submit",children:["Apply & restart ",ct.jsx("span",{children:"↗"})]}),ct.jsxs("p",{className:"hint",children:[O?"Apply to start with these settings.":"All settings applied."," ","Maximum 65,536 cells."]})]})]}),ct.jsxs("main",{children:[ct.jsxs("div",{className:"view-heading",children:[ct.jsxs("div",{children:[ct.jsx("span",{className:"eyebrow",children:"LIVE WORKSPACE"}),ct.jsxs("h2",{children:[s.family==="wolfram"?`Wolfram ${s.wolframRule}`:"Birth / survival"," ",ct.jsxs("span",{children:[s.dimensions.length,"D"]})]})]}),ct.jsx("span",{className:"status",children:y?"● Running":"○ Paused"})]}),p&&ct.jsx("div",{role:"alert",className:"error",children:p}),ct.jsxs("div",{className:"viewer",children:[ct.jsxs("div",{className:"viewer-top",children:[ct.jsxs("span",{children:[s.dimensions.join(" × "),ct.jsxs("b",{children:[" / ",s.wrap?"WRAPPED":"FINITE"]})]}),ct.jsx("button",{onClick:()=>z(H=>H+1),children:"⌖ Fit view"})]}),_?s.dimensions.length===3?ct.jsx(jA,{cells:u,dimensions:s.dimensions,fitKey:U}):ct.jsx(ZA,{cells:u,width:s.dimensions[0],height:s.dimensions[1],fitKey:U}):ct.jsx("div",{className:"loading",children:"Loading the simulation engine…"}),ct.jsxs("div",{className:"viewer-bottom",children:[ct.jsxs("span",{children:[ct.jsx("i",{})," Alive ",ct.jsx("span",{className:"dead-dot"})," Empty"]}),ct.jsx("span",{children:s.dimensions.length===3?"Drag to orbit · Right-drag to pan · Scroll to zoom":"Drag to pan · Scroll to zoom"})]})]}),ct.jsxs("div",{className:"transport",children:[ct.jsxs("div",{children:[ct.jsx("button",{className:"play",disabled:!_||!y&&M,onClick:()=>T(!y),children:y?"Ⅱ Pause":"▶ Play"}),ct.jsx("button",{disabled:!_||y||M,onClick:()=>ot(()=>o.current.step()),children:"▷ Step"}),ct.jsx("button",{disabled:!_||M,onClick:()=>{T(!1),ot(()=>o.current.reset())},children:"↺ Reset"})]}),ct.jsxs("label",{children:["Speed"," ",ct.jsx("input",{"aria-label":"Steps per second",type:"range",min:"1",max:"20",value:B,onChange:H=>N(Number(H.target.value))}),ct.jsxs("span",{children:[B," / s"]})]})]}),ct.jsxs("div",{className:"metrics",children:[ct.jsxs("div",{children:[ct.jsx("span",{children:"GENERATION"}),ct.jsx("strong",{"data-testid":"generation",children:(d==null?void 0:d.generation)??"—"})]}),ct.jsxs("div",{children:[ct.jsx("span",{children:"LIVING CELLS"}),ct.jsx("strong",{children:(d==null?void 0:d.population.toLocaleString())??"—"})]}),ct.jsxs("div",{children:[ct.jsx("span",{children:"POPULATION"}),ct.jsx("strong",{children:d?`${(d.population/d.cells*100).toFixed(1)}%`:"—"})]}),ct.jsxs("div",{children:[ct.jsx("span",{children:"LAST UPDATE"}),ct.jsxs("strong",{children:[F.toFixed(0),ct.jsx("small",{children:" ms"})]})]})]}),ct.jsxs("footer",{children:[ct.jsx("span",{children:"Deterministic seeds. Rules evaluated in C#."}),ct.jsx("span",{children:d?`Vector width ${d.vectorWidth} · ${d.neighborCount} neighbors`:"Initializing WebAssembly"})]})]})]})]})}pS.createRoot(document.getElementById("root")).render(ct.jsx(KA,{}));
