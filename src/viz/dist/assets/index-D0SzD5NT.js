(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),S=e=>x(e).slice(8,-1),C=e=>x(e)===`[object Object]`,w=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,T=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),E=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},D=/-\w/g,O=E(e=>e.replace(D,e=>e.slice(1).toUpperCase())),ee=/\B([A-Z])/g,k=E(e=>e.replace(ee,`-$1`).toLowerCase()),A=E(e=>e.charAt(0).toUpperCase()+e.slice(1)),j=E(e=>e?`on${A(e)}`:``),M=(e,t)=>!Object.is(e,t),N=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},P=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},te=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ne,re=()=>ne||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function ie(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?ce(r):ie(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(g(e)||v(e))return e}var ae=/;(?![^(]*\))/g,oe=/:([^]+)/,se=/\/\*[^]*?\*\//g;function ce(e){let t={};return e.replace(se,``).split(ae).forEach(e=>{if(e){let n=e.split(oe);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function F(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=F(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var le=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,ue=e(le);le+``;function de(e){return!!e||e===``}function fe(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=pe(e[r],t[r]);return n}function pe(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=_(e),r=_(t),n||r)return e===t;if(n=d(e),r=d(t),n||r)return n&&r?fe(e,t):!1;if(n=v(e),r=v(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!pe(e[n],t[n]))return!1}}return String(e)===String(t)}function me(e,t){return e.findIndex(e=>pe(e,t))}var he=e=>!!(e&&e.__v_isRef===!0),ge=e=>g(e)?e:e==null?``:d(e)||v(e)&&(e.toString===b||!h(e.toString))?he(e)?ge(e.value):JSON.stringify(e,I,2):String(e),I=(e,t)=>he(t)?I(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[_e(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>_e(e))}:_(t)?_e(t):v(t)&&!d(t)&&!C(t)?String(t):t,_e=(e,t=``)=>_(e)?`Symbol(${e.description??t})`:e,L,ve=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&L&&(L.active?(this.parent=L,this.index=(L.scopes||=[]).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=L;try{return L=this,e()}finally{L=t}}}on(){++this._on===1&&(this.prevScope=L,L=this)}off(){if(this._on>0&&--this._on===0){if(L===this)L=this.prevScope;else{let e=L;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function R(){return L}var ye,z=new WeakSet,be=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,L&&(L.active?L.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,z.has(this)&&(z.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||we(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Le(this),De(this);let e=ye,t=Ne;ye=this,Ne=!0;try{return this.fn()}finally{Oe(this),ye=e,Ne=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)je(e);this.deps=this.depsTail=void 0,Le(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?z.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ke(this)&&this.run()}get dirty(){return ke(this)}},xe=0,Se,Ce;function we(e,t=!1){if(e.flags|=8,t){e.next=Ce,Ce=e;return}e.next=Se,Se=e}function Te(){xe++}function Ee(){if(--xe>0)return;if(Ce){let e=Ce;for(Ce=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Se;){let t=Se;for(Se=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function De(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Oe(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),je(r),Me(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function ke(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ae(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ae(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Re)||(e.globalVersion=Re,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ke(e))))return;e.flags|=2;let t=e.dep,n=ye,r=Ne;ye=e,Ne=!0;try{De(e);let n=e.fn(e._value);(t.version===0||M(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{ye=n,Ne=r,Oe(e),e.flags&=-3}}function je(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)je(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Me(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Ne=!0,Pe=[];function Fe(){Pe.push(Ne),Ne=!1}function Ie(){let e=Pe.pop();Ne=e===void 0||e}function Le(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=ye;ye=void 0;try{t()}finally{ye=e}}}var Re=0,ze=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Be=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ye||!Ne||ye===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ye)t=this.activeLink=new ze(ye,this),ye.deps?(t.prevDep=ye.depsTail,ye.depsTail.nextDep=t,ye.depsTail=t):ye.deps=ye.depsTail=t,Ve(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=ye.depsTail,t.nextDep=void 0,ye.depsTail.nextDep=t,ye.depsTail=t,ye.deps===t&&(ye.deps=e)}return t}trigger(e){this.version++,Re++,this.notify(e)}notify(e){Te();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ee()}}};function Ve(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Ve(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var He=new WeakMap,Ue=Symbol(``),We=Symbol(``),Ge=Symbol(``);function Ke(e,t,n){if(Ne&&ye){let t=He.get(e);t||He.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Be),r.map=t,r.key=n),r.track()}}function qe(e,t,n,r,i,a){let o=He.get(e);if(!o){Re++;return}let s=e=>{e&&e.trigger()};if(Te(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&w(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===Ge||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(Ge)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Ue)),f(e)&&s(o.get(We)));break;case`delete`:i||(s(o.get(Ue)),f(e)&&s(o.get(We)));break;case`set`:f(e)&&s(o.get(Ue));break}}Ee()}function Je(e){let t=Ft(e);return t===e?t:(Ke(t,`iterate`,Ge),Nt(e)?t:t.map(Lt))}function Ye(e){return Ke(e=Ft(e),`iterate`,Ge),e}function Xe(e,t){return Mt(e)?Rt(jt(e)?Lt(t):t):Lt(t)}var Ze={__proto__:null,[Symbol.iterator](){return Qe(this,Symbol.iterator,e=>Xe(this,e))},concat(...e){return Je(this).concat(...e.map(e=>d(e)?Je(e):e))},entries(){return Qe(this,`entries`,e=>(e[1]=Xe(this,e[1]),e))},every(e,t){return et(this,`every`,e,t,void 0,arguments)},filter(e,t){return et(this,`filter`,e,t,e=>e.map(e=>Xe(this,e)),arguments)},find(e,t){return et(this,`find`,e,t,e=>Xe(this,e),arguments)},findIndex(e,t){return et(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return et(this,`findLast`,e,t,e=>Xe(this,e),arguments)},findLastIndex(e,t){return et(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return et(this,`forEach`,e,t,void 0,arguments)},includes(...e){return nt(this,`includes`,e)},indexOf(...e){return nt(this,`indexOf`,e)},join(e){return Je(this).join(e)},lastIndexOf(...e){return nt(this,`lastIndexOf`,e)},map(e,t){return et(this,`map`,e,t,void 0,arguments)},pop(){return rt(this,`pop`)},push(...e){return rt(this,`push`,e)},reduce(e,...t){return tt(this,`reduce`,e,t)},reduceRight(e,...t){return tt(this,`reduceRight`,e,t)},shift(){return rt(this,`shift`)},some(e,t){return et(this,`some`,e,t,void 0,arguments)},splice(...e){return rt(this,`splice`,e)},toReversed(){return Je(this).toReversed()},toSorted(e){return Je(this).toSorted(e)},toSpliced(...e){return Je(this).toSpliced(...e)},unshift(...e){return rt(this,`unshift`,e)},values(){return Qe(this,`values`,e=>Xe(this,e))}};function Qe(e,t,n){let r=Ye(e),i=r[t]();return r!==e&&!Nt(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var $e=Array.prototype;function et(e,t,n,r,i,a){let o=Ye(e),s=o!==e&&!Nt(e),c=o[t];if(c!==$e[t]){let t=c.apply(e,a);return s?Lt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,Xe(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function tt(e,t,n,r){let i=Ye(e),a=i!==e&&!Nt(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=Xe(e,t)),n.call(this,t,Xe(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?Xe(e,c):c}function nt(e,t,n){let r=Ft(e);Ke(r,`iterate`,Ge);let i=r[t](...n);return(i===-1||i===!1)&&Pt(n[0])?(n[0]=Ft(n[0]),r[t](...n)):i}function rt(e,t,n=[]){Fe(),Te();let r=Ft(e)[t].apply(e,n);return Ee(),Ie(),r}var it=e(`__proto__,__v_isRef,__isVue`),at=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function ot(e){_(e)||(e=String(e));let t=Ft(this);return Ke(t,`has`,e),t.hasOwnProperty(e)}var st=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Tt:wt:i?Ct:St).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=Ze[t]))return e;if(t===`hasOwnProperty`)return ot}let o=Reflect.get(e,t,zt(e)?e:n);if((_(t)?at.has(t):it(t))||(r||Ke(e,`get`,t),i))return o;if(zt(o)){let e=a&&w(t)?o:o.value;return r&&v(e)?kt(e):e}return v(o)?r?kt(o):Dt(o):o}},ct=class extends st{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&w(t);if(!this._isShallow){let e=Mt(i);if(!Nt(n)&&!Mt(n)&&(i=Ft(i),n=Ft(n)),!a&&zt(i)&&!zt(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,zt(e)?e:r);return e===Ft(r)&&s&&(o?M(n,i)&&qe(e,`set`,t,n,i):qe(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&qe(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!_(t)||!at.has(t))&&Ke(e,`has`,t),n}ownKeys(e){return Ke(e,`iterate`,d(e)?`length`:Ue),Reflect.ownKeys(e)}},lt=class extends st{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},ut=new ct,dt=new lt,ft=new ct(!0),pt=e=>e,mt=e=>Reflect.getPrototypeOf(e);function ht(e,t,n){return function(...r){let i=this.__v_raw,a=Ft(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?pt:t?Rt:Lt;return!t&&Ke(a,`iterate`,l?We:Ue),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function gt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function _t(e,t){let n={get(n){let r=this.__v_raw,i=Ft(r),a=Ft(n);e||(M(n,a)&&Ke(i,`get`,n),Ke(i,`get`,a));let{has:o}=mt(i),s=t?pt:e?Rt:Lt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&Ke(Ft(t),`iterate`,Ue),t.size},has(t){let n=this.__v_raw,r=Ft(n),i=Ft(t);return e||(M(t,i)&&Ke(r,`has`,t),Ke(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=Ft(a),s=t?pt:e?Rt:Lt;return!e&&Ke(o,`iterate`,Ue),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:gt(`add`),set:gt(`set`),delete:gt(`delete`),clear:gt(`clear`)}:{add(e){let n=Ft(this),r=mt(n),i=Ft(e),a=!t&&!Nt(e)&&!Mt(e)?i:e;return r.has.call(n,a)||M(e,a)&&r.has.call(n,e)||M(i,a)&&r.has.call(n,i)||(n.add(a),qe(n,`add`,a,a)),this},set(e,n){!t&&!Nt(n)&&!Mt(n)&&(n=Ft(n));let r=Ft(this),{has:i,get:a}=mt(r),o=i.call(r,e);o||=(e=Ft(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?M(n,s)&&qe(r,`set`,e,n,s):qe(r,`add`,e,n),this},delete(e){let t=Ft(this),{has:n,get:r}=mt(t),i=n.call(t,e);i||=(e=Ft(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&qe(t,`delete`,e,void 0,a),o},clear(){let e=Ft(this),t=e.size!==0,n=e.clear();return t&&qe(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=ht(r,e,t)}),n}function vt(e,t){let n=_t(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var yt={get:vt(!1,!1)},bt={get:vt(!1,!0)},xt={get:vt(!0,!1)},St=new WeakMap,Ct=new WeakMap,wt=new WeakMap,Tt=new WeakMap;function Et(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Dt(e){return Mt(e)?e:At(e,!1,ut,yt,St)}function Ot(e){return At(e,!1,ft,bt,Ct)}function kt(e){return At(e,!0,dt,xt,wt)}function At(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=Et(S(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function jt(e){return Mt(e)?jt(e.__v_raw):!!(e&&e.__v_isReactive)}function Mt(e){return!!(e&&e.__v_isReadonly)}function Nt(e){return!!(e&&e.__v_isShallow)}function Pt(e){return e?!!e.__v_raw:!1}function Ft(e){let t=e&&e.__v_raw;return t?Ft(t):e}function It(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&P(e,`__v_skip`,!0),e}var Lt=e=>v(e)?Dt(e):e,Rt=e=>v(e)?kt(e):e;function zt(e){return e?e.__v_isRef===!0:!1}function B(e){return Bt(e,!1)}function V(e){return Bt(e,!0)}function Bt(e,t){return zt(e)?e:new Vt(e,t)}var Vt=class{constructor(e,t){this.dep=new Be,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ft(e),this._value=t?e:Lt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Nt(e)||Mt(e);e=n?e:Ft(e),M(e,t)&&(this._rawValue=e,this._value=n?e:Lt(e),this.dep.trigger())}};function Ht(e){return zt(e)?e.value:e}var Ut={get:(e,t,n)=>t===`__v_raw`?e:Ht(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return zt(i)&&!zt(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Wt(e){return jt(e)?e:new Proxy(e,Ut)}var Gt=class{constructor(e){this.__v_isRef=!0,this._value=void 0;let t=this.dep=new Be,{get:n,set:r}=e(t.track.bind(t),t.trigger.bind(t));this._get=n,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}};function Kt(e){return new Gt(e)}var qt=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Be(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Re-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&ye!==this)return we(this,!0),!0}get value(){let e=this.dep.track();return Ae(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Jt(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new qt(r,i,n)}var Yt={},Xt=new WeakMap,Zt=void 0;function Qt(e,t=!1,n=Zt){if(n){let t=Xt.get(n);t||Xt.set(n,t=[]),t.push(e)}}function $t(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:Nt(e)||o===!1||o===0?en(e,1):en(e),m,g,_,v,y=!1,b=!1;if(zt(e)?(g=()=>e.value,y=Nt(e)):jt(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>jt(e)||Nt(e)),g=()=>e.map(e=>{if(zt(e))return e.value;if(jt(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){Fe();try{_()}finally{Ie()}}let t=Zt;Zt=m;try{return f?f(e,3,[v]):e(v)}finally{Zt=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>en(e(),t)}let x=R(),S=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{let n=e(...t);return S(),n}}let C=b?Array(e.length).fill(Yt):Yt,w=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(n){let t=m.run();if(e||o||y||(b?t.some((e,t)=>M(e,C[t])):M(t,C))){_&&_();let e=Zt;Zt=m;try{let e=[t,C===Yt?void 0:b&&C[0]===Yt?[]:C,v];C=t,f?f(n,3,e):n(...e)}finally{Zt=e}}}else m.run()};return u&&u(w),m=new be(g),m.scheduler=l?()=>l(w,!1):w,v=e=>Qt(e,!1,m),_=m.onStop=()=>{let e=Xt.get(m);if(e){if(f)f(e,4);else for(let t of e)t();Xt.delete(m)}},n?a?w(!0):C=m.run():l?l(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function en(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,zt(e))en(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)en(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{en(e,t,n)});else if(C(e)){for(let r in e)en(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&en(e[r],t,n)}return e}function tn(e,t,n,r){try{return r?e(...r):e()}catch(e){rn(e,t,n)}}function nn(e,t,n,r){if(h(e)){let i=tn(e,t,n,r);return i&&y(i)&&i.catch(e=>{rn(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(nn(e[a],t,n,r));return i}}function rn(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){Fe(),tn(o,null,10,[e,i,a]),Ie();return}}an(e,r,a,i,s)}function an(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var on=[],sn=-1,cn=[],ln=null,un=0,dn=Promise.resolve(),fn=null;function pn(e){let t=fn||dn;return e?t.then(this?e.bind(this):e):t}function mn(e){let t=sn+1,n=on.length;for(;t<n;){let r=t+n>>>1,i=on[r],a=bn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function hn(e){if(!(e.flags&1)){let t=bn(e),n=on[on.length-1];!n||!(e.flags&2)&&t>=bn(n)?on.push(e):on.splice(mn(t),0,e),e.flags|=1,gn()}}function gn(){fn||=dn.then(xn)}function _n(e){if(!d(e))ln&&e.id===-1?ln.splice(un+1,0,e):e.flags&1||(cn.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)cn.push(e[t]);gn()}function vn(e,t,n=sn+1){for(;n<on.length;n++){let t=on[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;on.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function yn(e){if(cn.length){let e=[...new Set(cn)].sort((e,t)=>bn(e)-bn(t));if(cn.length=0,ln){for(let t=0;t<e.length;t++)ln.push(e[t]);return}for(ln=e,un=0;un<ln.length;un++){let e=ln[un];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}ln=null,un=0}}var bn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function xn(e){try{for(sn=0;sn<on.length;sn++){let e=on[sn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),tn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;sn<on.length;sn++){let e=on[sn];e&&(e.flags&=-2)}sn=-1,on.length=0,yn(e),fn=null,(on.length||cn.length)&&xn(e)}}var Sn=null,Cn=null;function wn(e){let t=Sn;return Sn=e,Cn=e&&e.type.__scopeId||null,t}function Tn(e,t=Sn,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Li(-1);let i=wn(t),a=Ni.length,o;try{o=e(...n)}finally{for(let e=Ni.length;e>a;e--)Fi();wn(i),r._d&&Li(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function En(e,n){if(Sn===null)return e;let r=xa(Sn),i=e.dirs||=[];for(let e=0;e<n.length;e++){let[a,o,s,c=t]=n[e];a&&(h(a)&&(a={mounted:a,updated:a}),a.deep&&en(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function Dn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Fe(),nn(c,n,8,[e.el,s,e,t]),Ie())}}function On(e,t){if(aa){let n=aa.provides,r=aa.parent&&aa.parent.provides;r===n&&(n=aa.provides=Object.create(r)),n[e]=t}}function kn(e,t,n=!1){let r=oa();if(r||Rr){let i=Rr?Rr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var An=Symbol.for(`v-scx`),jn=()=>kn(An);function Mn(e,t){return Nn(e,null,{flush:`sync`})}function H(e,t,n){return Nn(e,t,n)}function Nn(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(fa){if(c===`sync`){let e=jn();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=aa;u.call=(e,t,n)=>nn(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{gi(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():hn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=$t(e,n,u);return fa&&(f?f.push(h):d&&h()),h}function Pn(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?Fn(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=la(this),s=Nn(i,a.bind(r),n);return o(),s}function Fn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var In=Symbol(`_vte`),Ln=e=>e.__isTeleport,Rn=Symbol(`_leaveCb`);function zn(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==ji){t=n;break}}return t}function Bn(e){if(!Yn(e))return Ln(e.type)&&e.children?zn(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&h(n.default))return n.default()}}function Vn(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;let n=e.component.subTree;Vn(Ln(n.type)&&Bn(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Hn(e,t){return h(e)?s({name:e.name},t,{setup:e}):e}function Un(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function Wn(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Gn=new WeakMap;function Kn(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>Kn(e,n&&(d(n)?n[t]:n),r,a,o));return}if(Jn(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Kn(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?xa(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=Ft(v),b=v===t?i:e=>!Wn(_,e)&&u(y,e),x=(e,t)=>!(t&&Wn(_,t));if(m!=null&&m!==p){if(qn(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(zt(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))tn(p,f,12,[l,_]);else{let t=g(p),n=zt(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),Gn.delete(e)};t.id=-1,Gn.set(e,t),gi(t,r)}else qn(e),i()}}}function qn(e){let t=Gn.get(e);t&&(t.flags|=8,Gn.delete(e))}re().requestIdleCallback,re().cancelIdleCallback;var Jn=e=>!!e.type.__asyncLoader,Yn=e=>e.type.__isKeepAlive;function Xn(e,t){Qn(e,`a`,t)}function Zn(e,t){Qn(e,`da`,t)}function Qn(e,t,n=aa){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(er(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Yn(e.parent.vnode)&&$n(r,t,n,e),e=e.parent}}function $n(e,t,n,r){let i=er(t,e,r,!0);sr(()=>{c(r[t],i)},n)}function er(e,t,n=aa,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Fe();let i=la(n),a=nn(t,n,e,r);return i(),Ie(),a};return r?i.unshift(a):i.push(a),a}}var tr=e=>(t,n=aa)=>{(!fa||e===`sp`)&&er(e,(...e)=>t(...e),n)},nr=tr(`bm`),rr=tr(`m`),ir=tr(`bu`),ar=tr(`u`),or=tr(`bum`),sr=tr(`um`),cr=tr(`sp`),lr=tr(`rtg`),ur=tr(`rtc`);function dr(e,t=aa){er(`ec`,e,t)}var fr=Symbol.for(`v-ndc`);function pr(e,t,n,r){let i,a=n&&n[r],o=d(e);if(o||g(e)){let n=o&&jt(e),r=!1,s=!1;n&&(r=!Nt(e),s=Mt(e),e=Ye(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Rt(Lt(e[n])):Lt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(v(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}var mr=e=>e?da(e)?xa(e):mr(e.parent):null,hr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>mr(e.parent),$root:e=>mr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Tr(e),$forceUpdate:e=>e.f||=()=>{hn(e.update)},$nextTick:e=>e.n||=pn.bind(e.proxy),$watch:e=>Pn.bind(e)}),gr=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),_r={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(gr(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else br&&(s[n]=0)}let d=hr[n],f,p;if(d)return n===`$attrs`&&Ke(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return gr(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||gr(n,c)||u(o,c)||u(i,c)||u(hr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function vr(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}function yr(e,t){return!e||!t?e||t:d(e)&&d(t)?e.concat(t):s({},vr(e),vr(t))}var br=!0;function xr(e){let t=Tr(e),n=e.proxy,i=e.ctx;br=!1,t.beforeCreate&&Cr(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:T,renderTracked:E,renderTriggered:D,errorCaptured:O,serverPrefetch:ee,expose:k,inheritAttrs:A,components:j,directives:M,filters:N}=t;if(u&&Sr(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=Dt(t))}if(br=!0,o)for(let e in o){let t=o[e],a=Ca({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)wr(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{On(t,e[t])})}f&&Cr(f,e,`c`);function P(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(P(nr,p),P(rr,m),P(ir,g),P(ar,_),P(Xn,y),P(Zn,b),P(dr,O),P(ur,E),P(lr,D),P(or,S),P(sr,w),P(cr,ee),d(k))if(k.length){let t=e.exposed||={};k.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};T&&e.render===r&&(e.render=T),A!=null&&(e.inheritAttrs=A),j&&(e.components=j),M&&(e.directives=M),ee&&Un(e)}function Sr(e,t,n=r){d(e)&&(e=Ar(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?kn(r.from||n,r.default,!0):kn(r.from||n):kn(r),zt(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Cr(e,t,n){nn(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function wr(e,t,n,r){let i=r.includes(`.`)?Fn(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&H(i,n)}else if(h(e))H(i,e.bind(n));else if(v(e))if(d(e))e.forEach(e=>wr(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&H(i,r,e)}}function Tr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Er(c,e,o,!0)),Er(c,t,o)),v(t)&&a.set(t,c),c}function Er(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Er(e,a,n,!0),i&&i.forEach(t=>Er(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Dr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Dr={data:Or,props:Nr,emits:Nr,methods:Mr,computed:Mr,beforeCreate:jr,created:jr,beforeMount:jr,mounted:jr,beforeUpdate:jr,updated:jr,beforeDestroy:jr,beforeUnmount:jr,destroyed:jr,unmounted:jr,activated:jr,deactivated:jr,errorCaptured:jr,serverPrefetch:jr,components:Mr,directives:Mr,watch:Pr,provide:Or,inject:kr};function Or(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function kr(e,t){return Mr(Ar(e),Ar(t))}function Ar(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function jr(e,t){return e?[...new Set([].concat(e,t))]:t}function Mr(e,t){return e?s(Object.create(null),e,t):t}function Nr(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),vr(e),vr(t??{})):t}function Pr(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=jr(e[r],t[r]);return n}function Fr(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Ir=0;function Lr(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=Fr(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:Ir++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:wa,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||Wi(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,xa(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(nn(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=Rr;Rr=l;try{return e()}finally{Rr=t}}};return l}}var Rr=null;function zr(e,n,r=t){let i=oa(),a=O(n),o=k(n),s=Br(e,a),c=Kt((s,c)=>{let l,u=t,d;return Mn(()=>{let t=e[a];M(l,t)&&(l=t,c())}),{get(){return s(),r.get?r.get(l):l},set(e){let s=r.set?r.set(e):e;if(!M(s,l)&&!(u!==t&&M(e,u)))return;let f=i.vnode.props,p=!!(f&&(n in f||a in f||o in f)&&(`onUpdate:${n}`in f||`onUpdate:${a}`in f||`onUpdate:${o}`in f));p||(l=e,c()),i.emit(`update:${n}`,s),M(e,u)&&(M(e,s)&&!M(s,d)||p&&u!==t&&!M(s,l))&&c(),u=e,d=s}}});return c[Symbol.iterator]=()=>{let e=0;return{next(){return e<2?{value:e++?s||t:c,done:!1}:{done:!0}}}},c}var Br=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${O(t)}Modifiers`]||e[`${k(t)}Modifiers`];function Vr(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&Br(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=r.map(te)));let c,l=i[c=j(n)]||i[c=j(O(n))];!l&&o&&(l=i[c=j(k(n))]),l&&nn(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,nn(u,e,6,a)}}var Hr=new WeakMap;function Ur(e,t,n=!1){let r=n?Hr:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=Ur(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function Wr(e,t){return!e||!a(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,k(t))||u(e,t))}function Gr(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=wn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Zi(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=Zi(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:Kr(c)}}catch(t){Ni.length=0,rn(t,e,1),v=Wi(ji)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=qr(y,a)),b=qi(b,y,!1,!0))}return n.dirs&&(b=qi(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Vn(Ln(b.type)&&Bn(b)||b,n.transition),v=b,wn(_),v}var Kr=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},qr=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Jr(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Yr(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(Xr(o,r,n)&&!Wr(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||Yr(r,o,l):!!o;return!1}function Yr(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(Xr(t,e,a)&&!Wr(n,a))return!0}return!1}function Xr(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!pe(r,i):r!==i}function Zr({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var Qr={},$r=()=>Object.create(Qr),ei=e=>Object.getPrototypeOf(e)===Qr;function ti(e,t,n,r=!1){let i={},a=$r();e.propsDefaults=Object.create(null),ri(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:Ot(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function ni(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=Ft(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Wr(e.emitsOptions,o))continue;let d=t[o];if(c)if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=O(o);i[t]=ii(c,s,t,d,e,!1)}else d!==a[o]&&(a[o]=d,l=!0)}}}else{ri(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=k(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=ii(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&qe(e.attrs,`set`,``)}function ri(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(T(t))continue;let l=n[t],d;a&&u(a,d=O(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:Wr(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=Ft(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=ii(a,n,s,i[s],e,!u(i,s))}}return s}function ii(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=la(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===k(n))&&(r=!0))}return r}var ai=new WeakMap;function oi(e,r,i=!1){let a=i?ai:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=oi(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=O(c[e]);si(n)&&(l[n]=t)}else if(c)for(let e in c){let t=O(e);if(si(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}else n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function si(e){return e[0]!==`$`&&!T(e)}var ci=e=>e===`_`||e===`_ctx`||e===`$stable`,li=e=>d(e)?e.map(Zi):[Zi(e)],ui=(e,t,n)=>{if(t._n)return t;let r=Tn((...e)=>li(t(...e)),n);return r._c=!1,r},di=(e,t,n)=>{let r=e._ctx;for(let n in e){if(ci(n))continue;let i=e[n];if(h(i))t[n]=ui(n,i,r);else if(i!=null){let e=li(i);t[n]=()=>e}}},fi=(e,t)=>{let n=li(t);e.slots.default=()=>n},pi=(e,t,n)=>{for(let r in t)(n||!ci(r))&&(e[r]=t[r])},mi=(e,t,n)=>{let r=e.slots=$r();if(e.vnode.shapeFlag&32){let e=t._;e?(pi(r,t,n),n&&P(r,`_`,e,!0)):di(t,r)}else t&&fi(e,t)},hi=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:pi(a,n,r):(o=!n.$stable,di(n,a)),s=n}else n&&(fi(e,n),s={default:1});if(o)for(let e in a)!ci(e)&&s[e]==null&&delete a[e]},gi=Oi;function _i(e){return vi(e)}function vi(e,i){let a=re();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Vi(e,t)&&(r=pe(e),F(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Ai:y(e,t,n,r);break;case ji:b(e,t,n,r);break;case Mi:e??x(t,n,r,o);break;case ki:j(e,t,n,r,i,a,o,s,c);break;default:d&1?w(e,t,n,r,i,a,o,s,c):d&6?M(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,ge)}u!=null&&i?Kn(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&Kn(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)E(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),ee(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},E=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&O(e.children,d,null,r,i,yi(e,a),s,u),_&&Dn(e,null,r,`created`),D(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!T(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&ta(f,r,e)}_&&Dn(e,null,r,`beforeMount`);let v=xi(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&gi(()=>{try{f&&ta(f,r,e),v&&g.enter(d),_&&Dn(e,null,r,`mounted`)}finally{}},i)},D=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Di(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;D(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},O=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?Qi(e[l]):Zi(e[l]);v(null,c,t,n,r,i,a,o,s)}},ee=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&bi(r,!1),(g=h.onVnodeBeforeUpdate)&&ta(g,r,n,e),f&&Dn(n,e,r,`beforeUpdate`),r&&bi(r,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(u=0,s=!1,d=null),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?k(e.dynamicChildren,d,l,r,i,yi(n,a),o):s||ae(e,n,l,null,r,i,yi(n,a),o,!1),u>0){if(u&16)A(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else!s&&d==null&&A(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&gi(()=>{g&&ta(g,r,n,e),f&&Dn(n,e,r,`updated`)},i)},k=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el&&(c.type===ki||!Vi(c,l)||c.shapeFlag&198)?m(c.el):n;v(c,l,u,null,r,i,a,o,!0)}},A=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!T(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(T(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},j=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),O(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(k(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&Si(e,t,!0)):ae(e,t,n,f,i,a,s,c,l)},M=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):P(t,n,r,i,a,o,c):te(e,t,c)},P=(e,t,n,r,i,a,o)=>{let s=e.component=ia(e,r,i);if(Yn(e)&&(s.ctx.renderer=ge),pa(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,ne,o),!e.el){let r=s.subTree=Wi(ji);b(null,r,t,n),e.placeholder=r.el}}else ne(s,e,t,n,i,a,o)},te=(e,t,n)=>{let r=t.component=e.component;if(Jr(e,t,n))if(r.asyncDep&&!r.asyncResolved){ie(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},ne=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=wi(e);if(n){t&&(t.el=c.el,ie(e,t,o)),n.asyncDep.then(()=>{gi(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;bi(e,!1),t?(t.el=c.el,ie(e,t,o)):t=c,n&&N(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&ta(d,s,t,c),bi(e,!0);let f=Gr(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),pe(p),e,i,a),t.el=f.el,u===null&&Zr(e,f.el),r&&gi(r,i),(d=t.props&&t.props.onVnodeUpdated)&&gi(()=>ta(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Jn(t);if(bi(e,!1),l&&N(l),!m&&(o=c&&c.onVnodeBeforeMount)&&ta(o,d,t),bi(e,!0),s&&_e){let t=()=>{e.subTree=Gr(e),_e(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Gr(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&gi(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;gi(()=>ta(o,d,e),i)}(t.shapeFlag&256||d&&Jn(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&gi(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new be(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>hn(u),bi(e,!0),l()},ie=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,ni(e,t.props,r,n),hi(e,t.children,n),Fe(),vn(e),Ie()},ae=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){se(l,d,n,r,i,a,o,s,c);return}else if(f&256){oe(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&fe(l,i,a),d!==l&&p(n,d)):u&16?m&16?se(l,d,n,r,i,a,o,s,c):fe(l,i,a,!0):(u&8&&p(n,``),m&16&&O(d,n,r,i,a,o,s,c))},oe=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let n=t[p]=l?Qi(t[p]):Zi(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?fe(e,a,o,!0,!1,f):O(t,r,i,a,o,s,c,l,f)},se=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?Qi(t[u]):Zi(t[u]);if(Vi(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?Qi(t[p]):Zi(t[p]);if(Vi(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?Qi(t[u]):Zi(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)F(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?Qi(t[u]):Zi(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){F(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&Vi(n,t[_])){i=_;break}i===void 0?F(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let w=x?Ci(C):n;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||Ei(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==w[_]?ce(n,r,p,2):_--)}}},ce=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){ce(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,ge);return}if(c===ki){o(a,t,n);for(let e=0;e<u.length;e++)ce(u[e],t,n,r);o(e.anchor,t,n);return}if(c===Mi){S(e,t,n);return}if(r!==2&&d&1&&l)if(r===0)l.persisted&&!a[Rn]?o(a,t,n):(l.beforeEnter(a),o(a,t,n),gi(()=>l.enter(a),i));else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{let e=a._isLeaving||!!a[Rn];a._isLeaving&&a[Rn](!0),l.persisted&&!e?u():r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},F=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(Fe(),Kn(s,null,n,e,!0),Ie()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!Jn(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&ta(_,t,e),u&6)de(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Dn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,ge,r):l&&!l.hasOnce&&(a!==ki||d>0&&d&64)?fe(l,t,n,!1,!0):(a===ki&&d&384||!i&&u&16)&&fe(c,t,n),r&&le(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&gi(()=>{_&&ta(_,t,e),h&&Dn(e,null,t,`unmounted`),v&&(e.el=null)},n)},le=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===ki){ue(n,r);return}if(t===Mi){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},ue=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},de=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Ti(c),Ti(l),r&&N(r),i.stop(),a&&(a.flags|=8,F(o,e,t,n)),s&&gi(s,t),gi(()=>{e.isUnmounted=!0},t)},fe=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)F(e[o],t,n,r,i)},pe=e=>{if(e.shapeFlag&6)return pe(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[In];return n?h(n):t},me=!1,he=(e,t,n)=>{let r;e==null?t._vnode&&(F(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,me||=(me=!0,vn(r),yn(),!1)},ge={p:v,um:F,m:ce,r:le,mt:P,mc:O,pc:ae,pbc:k,n:pe,o:e},I,_e;return i&&([I,_e]=i(ge)),{render:he,hydrate:I,createApp:Lr(he,I)}}function yi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function bi({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function xi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Si(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=Qi(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Si(t,a)),a.type===Ai&&(a.patchFlag===-1&&(a=i[e]=Qi(a)),a.el=t.el),a.type===ji&&!a.el&&(a.el=t.el)}}function Ci(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function wi(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:wi(t)}function Ti(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Ei(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?Ei(t.subTree):null}var Di=e=>e.__isSuspense;function Oi(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):_n(e)}var ki=Symbol.for(`v-fgt`),Ai=Symbol.for(`v-txt`),ji=Symbol.for(`v-cmt`),Mi=Symbol.for(`v-stc`),Ni=[],Pi=null;function U(e=!1){Ni.push(Pi=e?null:[])}function Fi(){Ni.pop(),Pi=Ni[Ni.length-1]||null}var Ii=1;function Li(e,t=!1){Ii+=e,e<0&&Pi&&t&&(Pi.hasOnce=!0)}function Ri(e){return e.dynamicChildren=Ii>0?Pi||n:null,Fi(),Ii>0&&Pi&&Pi.push(e),e}function W(e,t,n,r,i,a){return Ri(G(e,t,n,r,i,a,!0))}function zi(e,t,n,r,i){return Ri(Wi(e,t,n,r,i,!0))}function Bi(e){return e?e.__v_isVNode===!0:!1}function Vi(e,t){return e.type===t.type&&e.key===t.key}var Hi=({key:e})=>e??null,Ui=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||zt(e)||h(e)?{i:Sn,r:e,k:t,f:!!n}:e);function G(e,t=null,n=null,r=0,i=null,a=e===ki?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Hi(t),ref:t&&Ui(t),scopeId:Cn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Sn};return s?($i(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),Ii>0&&!o&&Pi&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&Pi.push(c),c}var Wi=Gi;function Gi(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===fr)&&(e=ji),Bi(e)){let r=qi(e,t,!0);return n&&$i(r,n),Ii>0&&!a&&Pi&&(r.shapeFlag&6?Pi[Pi.indexOf(e)]=r:Pi.push(r)),r.patchFlag=-2,r}if(Sa(e)&&(e=e.__vccOpts),t){t=Ki(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=F(e)),v(n)&&(Pt(n)&&!d(n)&&(n=s({},n)),t.style=ie(n))}let o=g(e)?1:Di(e)?128:Ln(e)?64:v(e)?4:h(e)?2:0;return G(e,t,n,r,i,o,a,!0)}function Ki(e){return e?Pt(e)||ei(e)?s({},e):e:null}function qi(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?ea(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Hi(l),ref:t&&t.ref?n&&a?d(a)?a.concat(Ui(t)):[a,Ui(t)]:Ui(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ki?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&qi(e.ssContent),ssFallback:e.ssFallback&&qi(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Vn(u,c.clone(u)),u}function Ji(e=` `,t=0){return Wi(Ai,null,e,t)}function Yi(e,t){let n=Wi(Mi,null,e);return n.staticCount=t,n}function Xi(e=``,t=!1){return t?(U(),zi(ji,null,e)):Wi(ji,null,e)}function Zi(e){return e==null||typeof e==`boolean`?Wi(ji):d(e)?Wi(ki,null,e.slice()):Bi(e)?Qi(e):Wi(Ai,null,String(e))}function Qi(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:qi(e)}function $i(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),$i(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!ei(t)?t._ctx=Sn:r===3&&Sn&&(Sn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(h(t)){if(r&65){$i(e,{default:t});return}t={default:t,_ctx:Sn},n=32}else t=String(t),r&64?(n=16,t=[Ji(t)]):n=8;e.children=t,e.shapeFlag|=n}function ea(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=F([t.class,r.class]));else if(e===`style`)t.style=ie([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function ta(e,t,n,r=null){nn(e,t,7,[n,r])}var na=Fr(),ra=0;function ia(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||na,o={uid:ra++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ve(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oi(i,a),emitsOptions:Ur(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=Vr.bind(null,o),e.ce&&e.ce(o),o}var aa=null,oa=()=>aa||Sn,sa,ca;{let e=re(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};sa=t(`__VUE_INSTANCE_SETTERS__`,e=>aa=e),ca=t(`__VUE_SSR_SETTERS__`,e=>fa=e)}var la=e=>{let t=aa;return sa(e),e.scope.on(),()=>{e.scope.off(),sa(t)}},ua=()=>{aa&&aa.scope.off(),sa(null)};function da(e){return e.vnode.shapeFlag&4}var fa=!1;function pa(e,t=!1,n=!1){t&&ca(t);let{props:r,children:i}=e.vnode,a=da(e);ti(e,r,a,t),mi(e,i,n||t);let o=a?ma(e,t):void 0;return t&&ca(!1),o}function ma(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,_r);let{setup:r}=n;if(r){Fe();let n=e.setupContext=r.length>1?ba(e):null,i=la(e),a=tn(r,e,0,[e.props,n]),o=y(a);if(Ie(),i(),(o||e.sp)&&!Jn(e)&&Un(e),o){if(a.then(ua,ua),t)return a.then(n=>{ca(!0);try{ha(e,n,t)}finally{ca(!1)}}).catch(t=>{rn(t,e,0)});e.asyncDep=a}else ha(e,a,t)}else va(e,t)}function ha(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=Wt(t)),va(e,n)}var ga,_a;function va(e,t,n){let i=e.type;if(!e.render){if(!t&&ga&&!i.render){let t=i.template||Tr(e).template;if(t){let{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:o}=i;i.render=ga(t,s(s({isCustomElement:n,delimiters:a},r),o))}}e.render=i.render||r,_a&&_a(e)}{let t=la(e);Fe();try{xr(e)}finally{Ie(),t()}}}var ya={get(e,t){return Ke(e,`get`,``),e[t]}};function ba(e){return{attrs:new Proxy(e.attrs,ya),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function xa(e){return e.exposed?e.exposeProxy||=new Proxy(Wt(It(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in hr)return hr[n](e)},has(e,t){return t in e||t in hr}}):e.proxy}function Sa(e){return h(e)&&`__vccOpts`in e}var Ca=(e,t)=>Jt(e,t,fa),wa=`3.5.41`,Ta=void 0,Ea=typeof window<`u`&&window.trustedTypes;if(Ea)try{Ta=Ea.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Da=Ta?e=>Ta.createHTML(e):e=>e,Oa=`http://www.w3.org/2000/svg`,ka=`http://www.w3.org/1998/Math/MathML`,Aa=typeof document<`u`?document:null,ja=Aa&&Aa.createElement(`template`),Ma={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Aa.createElementNS(Oa,e):t===`mathml`?Aa.createElementNS(ka,e):n?Aa.createElement(e,{is:n}):Aa.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Aa.createTextNode(e),createComment:e=>Aa.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Aa.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{ja.innerHTML=Da(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=ja.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Na=Symbol(`_vtc`);function Pa(e,t,n){let r=e[Na];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Fa=Symbol(`_vod`),Ia=Symbol(`_vsh`),La={name:`show`,beforeMount(e,{value:t},{transition:n}){e[Fa]=e.style.display===`none`?``:e.style.display,n&&t?n.beforeEnter(e):Ra(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Ra(e,!0),r.enter(e)):r.leave(e,()=>{Ra(e,!1)}):Ra(e,t))},beforeUnmount(e,{value:t}){Ra(e,t)}};function Ra(e,t){e.style.display=t?e[Fa]:`none`,e[Ia]=!t}var za=Symbol(``),Ba=/(?:^|;)\s*display\s*:/;function Va(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t)if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Ua(r,t,``)}else for(let e in t)n[e]??Ua(r,e,``);for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?Ua(r,i,``):qa(e,i,!g(t)&&t?t[i]:void 0,o)||Ua(r,i,o)}}else if(i){if(t!==n){let e=r[za];e&&(n+=`;`+e),r.cssText=n,a=Ba.test(n)}}else t&&e.removeAttribute(`style`);Fa in e&&(e[Fa]=a?r.display:``,e[Ia]&&(r.display=`none`))}var Ha=/\s*!important$/;function Ua(e,t,n){if(d(n))n.forEach(n=>Ua(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=Ka(e,t);Ha.test(n)?e.setProperty(k(r),n.replace(Ha,``),`important`):e[r]=n}}var Wa=[`Webkit`,`Moz`,`ms`],Ga={};function Ka(e,t){let n=Ga[t];if(n)return n;let r=O(t);if(r!==`filter`&&r in e)return Ga[t]=r;r=A(r);for(let n=0;n<Wa.length;n++){let i=Wa[n]+r;if(i in e)return Ga[t]=i}return t}function qa(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&g(r)&&n===r}var Ja=`http://www.w3.org/1999/xlink`;function Ya(e,t,n,r,i,a=ue(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Ja,t.slice(6,t.length)):e.setAttributeNS(Ja,t,n):n==null||a&&!de(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function Xa(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Da(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=de(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Za(e,t,n,r){e.addEventListener(t,n,r)}function Qa(e,t,n,r){e.removeEventListener(t,n,r)}var $a=Symbol(`_vei`);function eo(e,t,n,r,i=null){let a=e[$a]||(e[$a]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=ro(t);r?Za(e,n,a[t]=so(r,i),s):o&&(Qa(e,n,o,s),a[t]=void 0)}}var to=/(Once|Passive|Capture)$/,no=/^on:?(?:Once|Passive|Capture)$/;function ro(e){let t,n;for(;(n=e.match(to))&&!no.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):k(e.slice(2)),t]}var io=0,ao=Promise.resolve(),oo=()=>io||=(ao.then(()=>io=0),Date.now());function so(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(d(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&nn(e,t,5,a)}}else nn(r,t,5,[e])};return n.value=e,n.attached=oo(),n}var co=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,lo=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?Pa(e,r,c):t===`style`?Va(e,n,r):a(t)?o(t)||eo(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):uo(e,t,r,c))?(Xa(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Ya(e,t,r,c,s,t!==`value`)):e._isVueCE&&(fo(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?Xa(e,O(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Ya(e,t,r,c))};function uo(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&co(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return co(t)&&g(n)?!1:t in e}function fo(e,t){let n=e._def.props;if(!n)return!1;let r=O(t);return Array.isArray(n)?n.some(e=>O(e)===r):Object.keys(n).some(e=>O(e)===r)}var po=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return d(t)?e=>N(t,e):t};function mo(e){e.target.composing=!0}function ho(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var go=Symbol(`_assign`),_o=Symbol(`_initialValue`);function vo(e,t,n){return t&&(e=e.trim()),n&&(e=te(e)),e}var yo={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e.parentNode&&(e.type===`text`?e[_o]=e.defaultValue.replace(/[\r\n]/g,``):e.type===`textarea`&&(e[_o]=e.defaultValue.replace(/\r\n?/g,`
`))),e[go]=po(i);let a=r||i.props&&i.props.type===`number`;Za(e,t?`change`:`input`,t=>{t.target.composing||e[go](vo(e.value,n,a))}),(n||a)&&Za(e,`change`,()=>{e.value=vo(e.value,n,a)}),t||(Za(e,`compositionstart`,mo),Za(e,`compositionend`,ho),Za(e,`change`,ho))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){let i=t??``,a=e[_o];delete e[_o],a!==void 0&&(e.type===`text`||e.type===`textarea`)&&e.value!==a?e[go](vo(e.value,n,r)):e.value=i},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[go]=po(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?te(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},bo={deep:!0,created(e,t,n){e[go]=po(n),Za(e,`change`,()=>{let t=e._modelValue,n=So(e),r=e.checked,i=e[go];if(d(t)){let e=me(t,n),a=e!==-1;if(r&&!a)i(t.concat(n));else if(!r&&a){let n=[...t];n.splice(e,1),i(n)}}else if(p(t)){let e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(Co(e,r))})},mounted:xo,beforeUpdate(e,t,n){e[go]=po(n),xo(e,t,n)}};function xo(e,{value:t,oldValue:n},r){e._modelValue=t;let i;if(d(t))i=me(t,r.props.value)>-1;else if(p(t))i=t.has(r.props.value);else{if(t===n)return;i=pe(t,Co(e,!0))}e.checked!==i&&(e.checked=i)}function So(e){return`_value`in e?e._value:e.value}function Co(e,t){let n=t?`_trueValue`:`_falseValue`;return n in e?e[n]:t}var wo=[`ctrl`,`shift`,`alt`,`meta`],To={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>wo.some(n=>e[`${n}Key`]&&!t.includes(n))},Eo=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=To[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},Do=s({patchProp:lo},Ma),Oo;function ko(){return Oo||=_i(Do)}var Ao=((...e)=>{let t=ko().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=Mo(e);if(!r)return;let i=t._component;!h(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,jo(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function jo(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function Mo(e){return g(e)?document.querySelector(e):e}var No=window.location.host;function Po(){return`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,function(e){let t=Math.random()*16|0;return(e==`x`?t:t&3|8).toString(16)})}var Fo=Po();async function Io(e=`any`,t=`any`){try{let n=await fetch(`http://${No}/topics?type=${encodeURIComponent(e)}&msgtype=${encodeURIComponent(t)}`);return n.ok&&(await n.json()).topics||[]}catch{return[]}}var Lo=(e,t)=>{let n=e;for(let e of[`package://`,`file://`])n.startsWith(e)&&(n=n.substring(e.length));return t?(t.endsWith(`/`)?t:t+`/`)+n:n};async function Ro(e,t){if(!e)return{data:null,error:!0};try{let n=await fetch(`http://${No}/point?uuid=${Fo}&id=${t}&topic=${encodeURIComponent(e)}`);if(n.status===202)return{data:null,error:!1};if(!n.ok)return{data:null,error:!0};let r=await n.json();return!r||typeof r.x!=`number`||typeof r.y!=`number`||typeof r.z!=`number`?{data:null,error:!0}:{data:r,error:!1}}catch{return{data:null,error:!0}}}async function zo(e,t){if(!e)return{data:null,error:!0};try{let n=await fetch(`http://${No}/pose?uuid=${Fo}&id=${t}&topic=${encodeURIComponent(e)}`);if(n.status===202)return{data:null,error:!1};if(!n.ok)return{data:null,error:!0};let r=await n.json();return!r||!r.position||!r.orientation?{data:null,error:!0}:{data:r,error:!1}}catch{return{data:null,error:!0}}}async function Bo(e,t){if(!e)return{data:null,error:!0};try{let n=await fetch(`http://${No}/marker?uuid=${Fo}&id=${t}&topic=${encodeURIComponent(e)}`);if(n.status===202||n.status===204)return{data:null,error:!1};if(!n.ok)return{data:null,error:!0};let r=await n.json();return r?{data:[r],error:!1}:{data:null,error:!0}}catch{return{data:null,error:!0}}}async function Vo(e,t){if(!e)return{data:null,error:!0};try{let n=await fetch(`http://${No}/marker_array?uuid=${Fo}&id=${t}&topic=${encodeURIComponent(e)}`);if(n.status===202||n.status===204)return{data:null,error:!1};if(!n.ok)return{data:null,error:!0};let r=await n.json();return Array.isArray(r)?{data:r,error:!1}:{data:null,error:!0}}catch{return{data:null,error:!0}}}async function Ho(e,t){if(!e)return{data:null,error:!0};try{let n=await fetch(`http://${No}/wrench?uuid=${Fo}&id=${t}&topic=${encodeURIComponent(e)}`);if(n.status===202)return{data:null,error:!1};if(!n.ok)return{data:null,error:!0};let r=await n.json();return!r||!r.force||!r.torque?{data:null,error:!0}:{data:r,error:!1}}catch{return{data:null,error:!0}}}async function Uo(e,t){if(!e)return{data:null,error:!0};try{let n=await fetch(`http://${No}/twist?uuid=${Fo}&id=${t}&topic=${encodeURIComponent(e)}`);if(n.status===202)return{data:null,error:!1};if(!n.ok)return{data:null,error:!0};let r=await n.json();return!r||!r.linear||!r.angular?{data:null,error:!0}:{data:r,error:!1}}catch{return{data:null,error:!0}}}async function Wo(e,t,n){if(!e)return{blob:null,error:!0};try{let r=await fetch(`http://${No}/image?uuid=${Fo}&id=${n}&topic=${encodeURIComponent(e)}&option=${t}`);if(r.status===202)return{blob:null,error:!1};if(!r.ok)return{blob:null,error:!0};let i=await r.blob();return!i||i.size===0?{blob:null,error:!0}:{blob:i,error:!1}}catch{return{blob:null,error:!0}}}async function Go(e,t,n){if(!t)return{data:null,error:!0};try{let r=await fetch(`http://${No}/${e}?uuid=${Fo}&id=${n}&topic=${encodeURIComponent(t)}`);if(r.status===202)return{data:null,error:!1};if(!r.ok)return{data:null,error:!0};let i=await r.json();return!i||!Array.isArray(i)?{data:null,error:!0}:{data:i,error:!1}}catch{return{data:null,error:!0}}}async function Ko(e){if(!e)return{data:null,error:!0};try{let t=await fetch(`http://${No}/urdf?topic=${encodeURIComponent(e)}`);if(t.status===202)return{data:null,error:!1};if(!t.ok)return{data:null,error:!0};let n=await t.json();return!n||typeof n.urdf!=`string`||typeof n.mesh_path!=`string`?{data:null,error:!0}:{data:n,error:!1}}catch{return{data:null,error:!0}}}async function qo(e,t){if(!e)return{data:null,error:!0};try{let n=await fetch(`http://${No}/mesh?uuid=${Fo}&id=${t}&filepath=${encodeURIComponent(e)}`);return n.status===202?{data:null,error:!1}:n.ok?{data:await n.arrayBuffer(),error:!1}:{data:null,error:!0}}catch{return{data:null,error:!0}}}async function Jo(e,t){if(!e)return{data:null,error:!0};try{let n=await fetch(`http://${No}/trajectory?uuid=${Fo}&id=${t}&topic=${encodeURIComponent(e)}`);return n.status===202?{data:null,error:!1}:n.ok?{data:await n.json(),error:!1}:{data:null,error:!0}}catch{return{data:null,error:!0}}}async function Yo(e,t,n,r,i){if(!e||!r)return{data:null,error:!0,status:`话题名或固定坐标系为空`};let a=new URLSearchParams({uuid:Fo,id:String(i),topic:e,update_topic:t||``,tf_name:n===`<undefined>`?``:n||``,fixed_frame:r});try{let e=await fetch(`http://${No}/map?${a}`);if(e.status===202)return{data:null,error:!1};if(!e.ok)return{data:null,error:!0,status:(await e.json().catch(()=>null))?.status||`HTTP ${e.status}`};let t=await e.json();return!t||typeof t.revision!=`string`||!Number.isInteger(t.width)||!Number.isInteger(t.height)||!(t.resolution>0)||!t.pose?.position||!t.pose?.orientation?{data:null,error:!0,status:`地图元信息无效`}:{data:t,error:!1,status:t.status}}catch{return{data:null,error:!0,status:`后端连接失败`}}}async function Xo(e,t){let n=new URLSearchParams({uuid:Fo,id:String(e),revision:t});try{let e=await fetch(`http://${No}/map/data?${n}`);return e.ok?{data:new Uint8Array(await e.arrayBuffer()),error:!1}:{data:null,error:!0,status:`HTTP ${e.status}`}}catch{return{data:null,error:!0,status:`地图数据获取失败`}}}async function Zo(e,t){try{await fetch(`http://${No}/${e}?uuid=${Fo}&id=${t}`,{method:`DELETE`})}catch{}}function Qo(){let e=`http://${No}/cleanup?uuid=${Fo}`;navigator.sendBeacon?navigator.sendBeacon(e):fetch(e,{method:`POST`,keepalive:!0}).catch(()=>{})}var $o=`attached`,es=1e3,ts=1001,ns=1002,rs=1003,is=1004,as=1005,os=1006,ss=1007,cs=1008,ls=1009,us=1010,ds=1011,fs=1012,ps=1013,ms=1014,hs=1015,gs=1016,_s=1017,vs=1018,ys=1020,bs=35902,xs=35899,Ss=1021,Cs=1022,ws=1023,Ts=1026,Es=1027,Ds=1028,Os=1029,ks=1030,As=1031,js=1033,Ms=33776,Ns=33777,Ps=33778,Fs=33779,Is=35840,Ls=35841,Rs=35842,zs=35843,Bs=36196,Vs=37492,Hs=37496,Us=37488,Ws=37489,Gs=37490,Ks=37491,qs=37808,Js=37809,Ys=37810,Xs=37811,Zs=37812,Qs=37813,$s=37814,ec=37815,tc=37816,nc=37817,rc=37818,ic=37819,ac=37820,oc=37821,sc=36492,cc=36494,lc=36495,uc=36283,dc=36284,fc=36285,pc=36286,mc=2300,hc=2301,gc=2302,_c=2303,vc=2400,yc=2401,bc=2402,xc=2500,Sc=3200,Cc=`srgb`,wc=`srgb-linear`,Tc=`linear`,Ec=`srgb`,Dc=7680,Oc=35044,kc=2e3;function Ac(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function jc(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Mc(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Nc(){let e=Mc(`canvas`);return e.style.display=`block`,e}var Pc={};function Fc(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Ic(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function K(...e){e=Ic(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function q(...e){e=Ic(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Lc(...e){let t=e.join(` `);t in Pc||(Pc[t]=!0,K(...e))}function Rc(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var zc={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Bc=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Vc=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Hc=1234567,Uc=Math.PI/180,Wc=180/Math.PI;function Gc(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Vc[e&255]+Vc[e>>8&255]+Vc[e>>16&255]+Vc[e>>24&255]+`-`+Vc[t&255]+Vc[t>>8&255]+`-`+Vc[t>>16&15|64]+Vc[t>>24&255]+`-`+Vc[n&63|128]+Vc[n>>8&255]+`-`+Vc[n>>16&255]+Vc[n>>24&255]+Vc[r&255]+Vc[r>>8&255]+Vc[r>>16&255]+Vc[r>>24&255]).toLowerCase()}function Kc(e,t,n){return Math.max(t,Math.min(n,e))}function qc(e,t){return(e%t+t)%t}function Jc(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Yc(e,t,n){return e===t?0:(n-e)/(t-e)}function Xc(e,t,n){return(1-n)*e+n*t}function Zc(e,t,n,r){return Xc(e,t,1-Math.exp(-n*r))}function Qc(e,t=1){return t-Math.abs(qc(e,t*2)-t)}function $c(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function el(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function tl(e,t){return e+Math.floor(Math.random()*(t-e+1))}function nl(e,t){return e+Math.random()*(t-e)}function rl(e){return e*(.5-Math.random())}function il(e){e!==void 0&&(Hc=e);let t=Hc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function al(e){return e*Uc}function ol(e){return e*Wc}function sl(e){return(e&e-1)==0&&e!==0}function cl(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function ll(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function ul(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:K(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function dl(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function fl(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var pl={DEG2RAD:Uc,RAD2DEG:Wc,generateUUID:Gc,clamp:Kc,euclideanModulo:qc,mapLinear:Jc,inverseLerp:Yc,lerp:Xc,damp:Zc,pingpong:Qc,smoothstep:$c,smootherstep:el,randInt:tl,randFloat:nl,randFloatSpread:rl,seededRandom:il,degToRad:al,radToDeg:ol,isPowerOfTwo:sl,ceilPowerOfTwo:cl,floorPowerOfTwo:ll,setQuaternionFromProperEuler:ul,normalize:fl,denormalize:dl},ml=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Kc(this.x,e.x,t.x),this.y=Kc(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Kc(this.x,e,t),this.y=Kc(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kc(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Kc(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},hl=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:K(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kc(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},J=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_l.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_l.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Kc(this.x,e.x,t.x),this.y=Kc(this.y,e.y,t.y),this.z=Kc(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Kc(this.x,e,t),this.y=Kc(this.y,e,t),this.z=Kc(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kc(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gl.copy(this).projectOnVector(e),this.sub(gl)}reflect(e){return this.sub(gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Kc(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gl=new J,_l=new hl,vl=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(yl.makeScale(e,t)),this}rotate(e){return this.premultiply(yl.makeRotation(-e)),this}translate(e,t){return this.premultiply(yl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},yl=new vl,bl=new vl().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xl=new vl().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sl(){let e={enabled:!0,workingColorSpace:wc,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=wl(e.r),e.g=wl(e.g),e.b=wl(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Tl(e.r),e.g=Tl(e.g),e.b=Tl(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Tc:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Lc(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Lc(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[wc]:{primaries:t,whitePoint:r,transfer:Tc,toXYZ:bl,fromXYZ:xl,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Cc},outputColorSpaceConfig:{drawingBufferColorSpace:Cc}},[Cc]:{primaries:t,whitePoint:r,transfer:Ec,toXYZ:bl,fromXYZ:xl,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Cc}}}),e}var Cl=Sl();function wl(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Tl(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var El,Dl=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{El===void 0&&(El=Mc(`canvas`)),El.width=e.width,El.height=e.height;let t=El.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=El}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Mc(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=wl(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(wl(t[e]/255)*255):t[e]=wl(t[e]);return{data:t,width:e.width,height:e.height}}else return K(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ol=0,kl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=Gc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Al(r[t].image)):e.push(Al(r[t]))}else e=Al(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Al(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Dl.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(K(`Texture: Unable to serialize Texture.`),{})}var jl=0,Ml=new J,Nl=class e extends Bc{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=ts,i=ts,a=os,o=cs,s=ws,c=ls,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jl++}),this.uuid=Gc(),this.name=``,this.source=new kl(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new ml(0,0),this.repeat=new ml(1,1),this.center=new ml(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vl,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ml).x}get height(){return this.source.getSize(Ml).y}get depth(){return this.source.getSize(Ml).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){K(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){K(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case es:e.x-=Math.floor(e.x);break;case ts:e.x=e.x<0?0:1;break;case ns:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case es:e.y-=Math.floor(e.y);break;case ts:e.y=e.y<0?0:1;break;case ns:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Nl.DEFAULT_IMAGE=null,Nl.DEFAULT_MAPPING=300,Nl.DEFAULT_ANISOTROPY=1;var Pl=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Kc(this.x,e.x,t.x),this.y=Kc(this.y,e.y,t.y),this.z=Kc(this.z,e.z,t.z),this.w=Kc(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Kc(this.x,e,t),this.y=Kc(this.y,e,t),this.z=Kc(this.z,e,t),this.w=Kc(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kc(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fl=class extends Bc{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:os,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pl(0,0,e,t),this.scissorTest=!1,this.viewport=new Pl(0,0,e,t),this.textures=[];let r=new Nl({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:os,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new kl(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Il=class extends Fl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ll=class extends Nl{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=rs,this.minFilter=rs,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Rl=class extends Nl{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=rs,this.minFilter=rs,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Y=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/zl.setFromMatrixColumn(e,0).length(),i=1/zl.setFromMatrixColumn(e,1).length(),a=1/zl.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vl,e,Hl)}lookAt(e,t,n){let r=this.elements;return Gl.subVectors(e,t),Gl.lengthSq()===0&&(Gl.z=1),Gl.normalize(),Ul.crossVectors(n,Gl),Ul.lengthSq()===0&&(Math.abs(n.z)===1?Gl.x+=1e-4:Gl.z+=1e-4,Gl.normalize(),Ul.crossVectors(n,Gl)),Ul.normalize(),Wl.crossVectors(Gl,Ul),r[0]=Ul.x,r[4]=Wl.x,r[8]=Gl.x,r[1]=Ul.y,r[5]=Wl.y,r[9]=Gl.y,r[2]=Ul.z,r[6]=Wl.z,r[10]=Gl.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],k=r[6],A=r[10],j=r[14],M=r[3],N=r[7],P=r[11],te=r[15];return i[0]=a*x+o*T+s*ee+c*M,i[4]=a*S+o*E+s*k+c*N,i[8]=a*C+o*D+s*A+c*P,i[12]=a*w+o*O+s*j+c*te,i[1]=l*x+u*T+d*ee+f*M,i[5]=l*S+u*E+d*k+f*N,i[9]=l*C+u*D+d*A+f*P,i[13]=l*w+u*O+d*j+f*te,i[2]=p*x+m*T+h*ee+g*M,i[6]=p*S+m*E+h*k+g*N,i[10]=p*C+m*D+h*A+g*P,i[14]=p*w+m*O+h*j+g*te,i[3]=_*x+v*T+y*ee+b*M,i[7]=_*S+v*E+y*k+b*N,i[11]=_*C+v*D+y*A+b*P,i[15]=_*w+v*O+y*j+b*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,ee=_*O-v*D+y*E+b*T-x*w+S*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/ee;return e[0]=(o*O-s*D+c*E)*k,e[1]=(r*D-n*O-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*O-c*w)*k,e[5]=(t*O-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinant();if(i===0)return n.set(1,1,1),t.identity(),this;let a=zl.set(r[0],r[1],r[2]).length(),o=zl.set(r[4],r[5],r[6]).length(),s=zl.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Bl.copy(this);let c=1/a,l=1/o,u=1/s;return Bl.elements[0]*=c,Bl.elements[1]*=c,Bl.elements[2]*=c,Bl.elements[4]*=l,Bl.elements[5]*=l,Bl.elements[6]*=l,Bl.elements[8]*=u,Bl.elements[9]*=u,Bl.elements[10]*=u,t.setFromRotationMatrix(Bl),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=kc,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=kc,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},zl=new J,Bl=new Y,Vl=new J(0,0,0),Hl=new J(1,1,1),Ul=new J,Wl=new J,Gl=new J,Kl=new Y,ql=new hl,Jl=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Kc(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Kc(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Kc(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Kc(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Kc(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Kc(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:K(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ql.setFromEuler(this),this.setFromQuaternion(ql,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jl.DEFAULT_ORDER=`XYZ`;var Yl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Xl=0,Zl=new J,Ql=new hl,$l=new Y,eu=new J,tu=new J,nu=new J,ru=new hl,iu=new J(1,0,0),au=new J(0,1,0),ou=new J(0,0,1),su={type:`added`},cu={type:`removed`},lu={type:`childadded`,child:null},uu={type:`childremoved`,child:null},du=class e extends Bc{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=Gc(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new J,n=new Jl,r=new hl,i=new J(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Y},normalMatrix:{value:new vl}}),this.matrix=new Y,this.matrixWorld=new Y,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ql.setFromAxisAngle(e,t),this.quaternion.multiply(Ql),this}rotateOnWorldAxis(e,t){return Ql.setFromAxisAngle(e,t),this.quaternion.premultiply(Ql),this}rotateX(e){return this.rotateOnAxis(iu,e)}rotateY(e){return this.rotateOnAxis(au,e)}rotateZ(e){return this.rotateOnAxis(ou,e)}translateOnAxis(e,t){return Zl.copy(e).applyQuaternion(this.quaternion),this.position.add(Zl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(iu,e)}translateY(e){return this.translateOnAxis(au,e)}translateZ(e){return this.translateOnAxis(ou,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($l.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?eu.copy(e):eu.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),tu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$l.lookAt(tu,eu,this.up):$l.lookAt(eu,tu,this.up),this.quaternion.setFromRotationMatrix($l),r&&($l.extractRotation(r.matrixWorld),Ql.setFromRotationMatrix($l),this.quaternion.premultiply(Ql.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(q(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(su),lu.child=e,this.dispatchEvent(lu),lu.child=null):q(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cu),uu.child=e,this.dispatchEvent(uu),uu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$l.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$l.multiply(e.parent.matrixWorld)),e.applyMatrix4($l),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(su),lu.child=e,this.dispatchEvent(lu),lu.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tu,e,nu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tu,ru,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};du.DEFAULT_UP=new J(0,1,0),du.DEFAULT_MATRIX_AUTO_UPDATE=!0,du.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fu=class extends du{constructor(){super(),this.isGroup=!0,this.type=`Group`}},pu={type:`move`},mu=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pu)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new fu;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gu={h:0,s:0,l:0},_u={h:0,s:0,l:0};function vu(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var X=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Cc){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Cl.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Cl.workingColorSpace){return this.r=e,this.g=t,this.b=n,Cl.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Cl.workingColorSpace){if(e=qc(e,1),t=Kc(t,0,1),n=Kc(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=vu(i,r,e+1/3),this.g=vu(i,r,e),this.b=vu(i,r,e-1/3)}return Cl.colorSpaceToWorking(this,r),this}setStyle(e,t=Cc){function n(t){t!==void 0&&parseFloat(t)<1&&K(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:K(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);K(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Cc){let n=hu[e.toLowerCase()];return n===void 0?K(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wl(e.r),this.g=wl(e.g),this.b=wl(e.b),this}copyLinearToSRGB(e){return this.r=Tl(e.r),this.g=Tl(e.g),this.b=Tl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cc){return Cl.workingToColorSpace(yu.copy(this),e),Math.round(Kc(yu.r*255,0,255))*65536+Math.round(Kc(yu.g*255,0,255))*256+Math.round(Kc(yu.b*255,0,255))}getHexString(e=Cc){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Cl.workingColorSpace){Cl.workingToColorSpace(yu.copy(this),t);let n=yu.r,r=yu.g,i=yu.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Cl.workingColorSpace){return Cl.workingToColorSpace(yu.copy(this),t),e.r=yu.r,e.g=yu.g,e.b=yu.b,e}getStyle(e=Cc){Cl.workingToColorSpace(yu.copy(this),e);let t=yu.r,n=yu.g,r=yu.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(gu),this.setHSL(gu.h+e,gu.s+t,gu.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gu),e.getHSL(_u);let n=Xc(gu.h,_u.h,t),r=Xc(gu.s,_u.s,t),i=Xc(gu.l,_u.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yu=new X;X.NAMES=hu;var bu=class extends du{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jl,this.environmentIntensity=1,this.environmentRotation=new Jl,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},xu=new J,Su=new J,Cu=new J,wu=new J,Tu=new J,Eu=new J,Du=new J,Ou=new J,ku=new J,Au=new J,ju=new Pl,Mu=new Pl,Nu=new Pl,Pu=class e{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),xu.subVectors(e,t),r.cross(xu);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){xu.subVectors(r,t),Su.subVectors(n,t),Cu.subVectors(e,t);let a=xu.dot(xu),o=xu.dot(Su),s=xu.dot(Cu),c=Su.dot(Su),l=Su.dot(Cu),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,wu)!==null&&wu.x>=0&&wu.y>=0&&wu.x+wu.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,wu)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,wu.x),s.addScaledVector(a,wu.y),s.addScaledVector(o,wu.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return ju.setScalar(0),Mu.setScalar(0),Nu.setScalar(0),ju.fromBufferAttribute(e,t),Mu.fromBufferAttribute(e,n),Nu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ju,i.x),a.addScaledVector(Mu,i.y),a.addScaledVector(Nu,i.z),a}static isFrontFacing(e,t,n,r){return xu.subVectors(n,t),Su.subVectors(e,t),xu.cross(Su).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xu.subVectors(this.c,this.b),Su.subVectors(this.a,this.b),xu.cross(Su).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Tu.subVectors(r,n),Eu.subVectors(i,n),Ou.subVectors(e,n);let s=Tu.dot(Ou),c=Eu.dot(Ou);if(s<=0&&c<=0)return t.copy(n);ku.subVectors(e,r);let l=Tu.dot(ku),u=Eu.dot(ku);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Tu,a);Au.subVectors(e,i);let f=Tu.dot(Au),p=Eu.dot(Au);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Eu,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Du.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Du,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Tu,a).addScaledVector(Eu,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fu=class{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Lu.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Lu.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Lu.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Lu):Lu.fromBufferAttribute(r,t),Lu.applyMatrix4(e.matrixWorld),this.expandByPoint(Lu);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Ru.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Ru.copy(e.boundingBox)),Ru.applyMatrix4(e.matrixWorld),this.union(Ru)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Lu),Lu.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gu),Ku.subVectors(this.max,Gu),zu.subVectors(e.a,Gu),Bu.subVectors(e.b,Gu),Vu.subVectors(e.c,Gu),Hu.subVectors(Bu,zu),Uu.subVectors(Vu,Bu),Wu.subVectors(zu,Vu);let t=[0,-Hu.z,Hu.y,0,-Uu.z,Uu.y,0,-Wu.z,Wu.y,Hu.z,0,-Hu.x,Uu.z,0,-Uu.x,Wu.z,0,-Wu.x,-Hu.y,Hu.x,0,-Uu.y,Uu.x,0,-Wu.y,Wu.x,0];return!Yu(t,zu,Bu,Vu,Ku)||(t=[1,0,0,0,1,0,0,0,1],!Yu(t,zu,Bu,Vu,Ku))?!1:(qu.crossVectors(Hu,Uu),t=[qu.x,qu.y,qu.z],Yu(t,zu,Bu,Vu,Ku))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Lu).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Lu).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Iu[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Iu[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Iu[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Iu[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Iu[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Iu[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Iu[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Iu[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Iu),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Iu=[new J,new J,new J,new J,new J,new J,new J,new J],Lu=new J,Ru=new Fu,zu=new J,Bu=new J,Vu=new J,Hu=new J,Uu=new J,Wu=new J,Gu=new J,Ku=new J,qu=new J,Ju=new J;function Yu(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Ju.fromArray(e,a);let o=i.x*Math.abs(Ju.x)+i.y*Math.abs(Ju.y)+i.z*Math.abs(Ju.z),s=t.dot(Ju),c=n.dot(Ju),l=r.dot(Ju);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Xu=new J,Zu=new ml,Qu=0,$u=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qu++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Oc,this.updateRanges=[],this.gpuType=hs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zu.fromBufferAttribute(this,t),Zu.applyMatrix3(e),this.setXY(t,Zu.x,Zu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xu.fromBufferAttribute(this,t),Xu.applyMatrix3(e),this.setXYZ(t,Xu.x,Xu.y,Xu.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xu.fromBufferAttribute(this,t),Xu.applyMatrix4(e),this.setXYZ(t,Xu.x,Xu.y,Xu.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xu.fromBufferAttribute(this,t),Xu.applyNormalMatrix(e),this.setXYZ(t,Xu.x,Xu.y,Xu.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xu.fromBufferAttribute(this,t),Xu.transformDirection(e),this.setXYZ(t,Xu.x,Xu.y,Xu.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dl(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=fl(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dl(t,this.array)),t}setX(e,t){return this.normalized&&(t=fl(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dl(t,this.array)),t}setY(e,t){return this.normalized&&(t=fl(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fl(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dl(t,this.array)),t}setW(e,t){return this.normalized&&(t=fl(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=fl(t,this.array),n=fl(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=fl(t,this.array),n=fl(n,this.array),r=fl(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=fl(t,this.array),n=fl(n,this.array),r=fl(r,this.array),i=fl(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},ed=class extends $u{constructor(e,t,n){super(new Uint16Array(e),t,n)}},td=class extends $u{constructor(e,t,n){super(new Uint32Array(e),t,n)}},nd=class extends $u{constructor(e,t,n){super(new Float32Array(e),t,n)}},rd=new Fu,id=new J,ad=new J,od=class{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?rd.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;id.subVectors(e,this.center);let t=id.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(id,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ad.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(id.copy(e.center).add(ad)),this.expandByPoint(id.copy(e.center).sub(ad))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},sd=0,cd=new Y,ld=new du,ud=new J,dd=new Fu,fd=new Fu,pd=new J,md=class e extends Bc{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Gc(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ac(e)?td:ed)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new vl().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cd.makeRotationFromQuaternion(e),this.applyMatrix4(cd),this}rotateX(e){return cd.makeRotationX(e),this.applyMatrix4(cd),this}rotateY(e){return cd.makeRotationY(e),this.applyMatrix4(cd),this}rotateZ(e){return cd.makeRotationZ(e),this.applyMatrix4(cd),this}translate(e,t,n){return cd.makeTranslation(e,t,n),this.applyMatrix4(cd),this}scale(e,t,n){return cd.makeScale(e,t,n),this.applyMatrix4(cd),this}lookAt(e){return ld.lookAt(e),ld.updateMatrix(),this.applyMatrix4(ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ud).negate(),this.translate(ud.x,ud.y,ud.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new nd(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&K(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fu);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){q(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];dd.setFromBufferAttribute(n),this.morphTargetsRelative?(pd.addVectors(this.boundingBox.min,dd.min),this.boundingBox.expandByPoint(pd),pd.addVectors(this.boundingBox.max,dd.max),this.boundingBox.expandByPoint(pd)):(this.boundingBox.expandByPoint(dd.min),this.boundingBox.expandByPoint(dd.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&q(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new od);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){q(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new J,1/0);return}if(e){let n=this.boundingSphere.center;if(dd.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];fd.setFromBufferAttribute(n),this.morphTargetsRelative?(pd.addVectors(dd.min,fd.min),dd.expandByPoint(pd),pd.addVectors(dd.max,fd.max),dd.expandByPoint(pd)):(dd.expandByPoint(fd.min),dd.expandByPoint(fd.max))}dd.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)pd.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(pd));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)pd.fromBufferAttribute(a,t),o&&(ud.fromBufferAttribute(e,t),pd.add(ud)),r=Math.max(r,n.distanceToSquared(pd))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&q(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){q(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new $u(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new J,s[e]=new J;let c=new J,l=new J,u=new J,d=new ml,f=new ml,p=new ml,m=new J,h=new J;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new J,y=new J,b=new J,x=new J;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new $u(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new J,i=new J,a=new J,o=new J,s=new J,c=new J,l=new J,u=new J;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pd.fromBufferAttribute(e,t),pd.normalize(),e.setXYZ(t,pd.x,pd.y,pd.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new $u(a,r,i)}if(this.index===null)return K(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},hd=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Oc,this.updateRanges=[],this.version=0,this.uuid=Gc()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gc()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gc()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},gd=new J,_d=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)gd.fromBufferAttribute(this,t),gd.applyMatrix4(e),this.setXYZ(t,gd.x,gd.y,gd.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gd.fromBufferAttribute(this,t),gd.applyNormalMatrix(e),this.setXYZ(t,gd.x,gd.y,gd.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gd.fromBufferAttribute(this,t),gd.transformDirection(e),this.setXYZ(t,gd.x,gd.y,gd.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=dl(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=fl(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=fl(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=fl(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=fl(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=fl(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=dl(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=dl(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=dl(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=dl(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=fl(t,this.array),n=fl(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=fl(t,this.array),n=fl(n,this.array),r=fl(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=fl(t,this.array),n=fl(n,this.array),r=fl(r,this.array),i=fl(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Fc(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new $u(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Fc(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},vd=0,yd=class extends Bc{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Gc(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new X(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dc,this.stencilZFail=Dc,this.stencilZPass=Dc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){K(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){K(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},bd=class extends yd{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new X(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xd,Sd=new J,Cd=new J,wd=new J,Td=new ml,Ed=new ml,Dd=new Y,Od=new J,kd=new J,Ad=new J,jd=new ml,Md=new ml,Nd=new ml,Pd=class extends du{constructor(e=new bd){if(super(),this.isSprite=!0,this.type=`Sprite`,xd===void 0){xd=new md;let e=new hd(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);xd.setIndex([0,1,2,0,2,3]),xd.setAttribute(`position`,new _d(e,3,0,!1)),xd.setAttribute(`uv`,new _d(e,2,3,!1))}this.geometry=xd,this.material=e,this.center=new ml(.5,.5),this.count=1}raycast(e,t){e.camera===null&&q(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Cd.setFromMatrixScale(this.matrixWorld),Dd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wd.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cd.multiplyScalar(-wd.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Fd(Od.set(-.5,-.5,0),wd,a,Cd,r,i),Fd(kd.set(.5,-.5,0),wd,a,Cd,r,i),Fd(Ad.set(.5,.5,0),wd,a,Cd,r,i),jd.set(0,0),Md.set(1,0),Nd.set(1,1);let o=e.ray.intersectTriangle(Od,kd,Ad,!1,Sd);if(o===null&&(Fd(kd.set(-.5,.5,0),wd,a,Cd,r,i),Md.set(0,1),o=e.ray.intersectTriangle(Od,Ad,kd,!1,Sd),o===null))return;let s=e.ray.origin.distanceTo(Sd);s<e.near||s>e.far||t.push({distance:s,point:Sd.clone(),uv:Pu.getInterpolation(Sd,Od,kd,Ad,jd,Md,Nd,new ml),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Fd(e,t,n,r,i,a){Td.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Ed.copy(Td):(Ed.x=a*Td.x-i*Td.y,Ed.y=i*Td.x+a*Td.y),e.copy(t),e.x+=Ed.x,e.y+=Ed.y,e.applyMatrix4(Dd)}var Id=new J,Ld=new J,Rd=new J,zd=new J,Bd=new J,Vd=new J,Hd=new J,Ud=class{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Id)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Id.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Id.copy(this.origin).addScaledVector(this.direction,t),Id.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ld.copy(e).add(t).multiplyScalar(.5),Rd.copy(t).sub(e).normalize(),zd.copy(this.origin).sub(Ld);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Rd),o=zd.dot(this.direction),s=-zd.dot(Rd),c=zd.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ld).addScaledVector(Rd,d),f}intersectSphere(e,t){Id.subVectors(e.center,this.origin);let n=Id.dot(this.direction),r=Id.dot(Id)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Id)!==null}intersectTriangle(e,t,n,r,i){Bd.subVectors(t,e),Vd.subVectors(n,e),Hd.crossVectors(Bd,Vd);let a=this.direction.dot(Hd),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zd.subVectors(this.origin,e);let s=o*this.direction.dot(Vd.crossVectors(zd,Vd));if(s<0)return null;let c=o*this.direction.dot(Bd.cross(zd));if(c<0||s+c>a)return null;let l=-o*zd.dot(Hd);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wd=class extends yd{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new X(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jl,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gd=new Y,Kd=new Ud,qd=new od,Jd=new J,Yd=new J,Xd=new J,Zd=new J,Qd=new J,$d=new J,ef=new J,tf=new J,Z=class extends du{constructor(e=new md,t=new Wd){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){$d.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Qd.fromBufferAttribute(s,e),a?$d.addScaledVector(Qd,r):$d.addScaledVector(Qd.sub(t),r))}t.add($d)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qd.copy(n.boundingSphere),qd.applyMatrix4(i),Kd.copy(e.ray).recast(e.near),!(qd.containsPoint(Kd.origin)===!1&&(Kd.intersectSphere(qd,Jd)===null||Kd.origin.distanceToSquared(Jd)>(e.far-e.near)**2))&&(Gd.copy(i).invert(),Kd.copy(e.ray).applyMatrix4(Gd),!(n.boundingBox!==null&&Kd.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Kd)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=rf(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=rf(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=rf(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=rf(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function nf(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;tf.copy(s),tf.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(tf);return l<n.near||l>n.far?null:{distance:l,point:tf.clone(),object:e}}function rf(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Yd),e.getVertexPosition(c,Xd),e.getVertexPosition(l,Zd);let u=nf(e,t,n,r,Yd,Xd,Zd,ef);if(u){let e=new J;Pu.getBarycoord(ef,Yd,Xd,Zd,e),i&&(u.uv=Pu.getInterpolatedAttribute(i,s,c,l,e,new ml)),a&&(u.uv1=Pu.getInterpolatedAttribute(a,s,c,l,e,new ml)),o&&(u.normal=Pu.getInterpolatedAttribute(o,s,c,l,e,new J),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new J,materialIndex:0};Pu.getNormal(Yd,Xd,Zd,t.normal),u.face=t,u.barycoord=e}return u}var af=new J,of=new Pl,sf=new Pl,cf=new J,lf=new Y,uf=new J,df=new od,ff=new Y,pf=new Ud,mf=class extends Z{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=$o,this.bindMatrix=new Y,this.bindMatrixInverse=new Y,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fu),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,uf),this.boundingBox.expandByPoint(uf)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new od),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,uf),this.boundingSphere.expandByPoint(uf)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),df.copy(this.boundingSphere),df.applyMatrix4(r),e.ray.intersectsSphere(df)!==!1&&(ff.copy(r).invert(),pf.copy(e.ray).applyMatrix4(ff),!(this.boundingBox!==null&&pf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Pl,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():K(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;of.fromBufferAttribute(r.attributes.skinIndex,e),sf.fromBufferAttribute(r.attributes.skinWeight,e),af.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let e=0;e<4;e++){let r=sf.getComponent(e);if(r!==0){let i=of.getComponent(e);lf.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(cf.copy(af).applyMatrix4(lf),r)}}return t.applyMatrix4(this.bindMatrixInverse)}},hf=class extends du{constructor(){super(),this.isBone=!0,this.type=`Bone`}},gf=class extends Nl{constructor(e=null,t=1,n=1,r,i,a,o,s,c=rs,l=rs,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_f=new Y,vf=new Y,yf=class e{constructor(e=[],t=[]){this.uuid=Gc(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){K(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new Y)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new Y;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:vf;_f.multiplyMatrices(i,t[r]),_f.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new gf(t,e,e,ws,hs);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(K(`Skeleton: No bone found with UUID:`,r),i=new hf),this.bones.push(i),this.boneInverses.push(new Y().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},bf=new J,xf=new J,Sf=new vl,Cf=class{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=bf.subVectors(n,t).cross(xf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(bf),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Sf.getNormalMatrix(e),r=this.coplanarPoint(bf).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},wf=new od,Tf=new ml(.5,.5),Ef=new J,Df=class{constructor(e=new Cf,t=new Cf,n=new Cf,r=new Cf,i=new Cf,a=new Cf){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kc,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wf.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wf.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wf)}intersectsSprite(e){return wf.center.set(0,0,0),wf.radius=.7071067811865476+Tf.distanceTo(e.center),wf.applyMatrix4(e.matrixWorld),this.intersectsSphere(wf)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ef.x=r.normal.x>0?e.max.x:e.min.x,Ef.y=r.normal.y>0?e.max.y:e.min.y,Ef.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ef)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Of=class extends yd{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new X(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},kf=new J,Af=new J,jf=new Y,Mf=new Ud,Nf=new od,Pf=new J,Ff=new J,If=class extends du{constructor(e=new md,t=new Of){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)kf.fromBufferAttribute(t,e-1),Af.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=kf.distanceTo(Af);e.setAttribute(`lineDistance`,new nd(n,1))}else K(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nf.copy(n.boundingSphere),Nf.applyMatrix4(r),Nf.radius+=i,e.ray.intersectsSphere(Nf)===!1)return;jf.copy(r).invert(),Mf.copy(e.ray).applyMatrix4(jf);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Lf(this,e,Mf,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Lf(this,e,Mf,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Lf(this,e,Mf,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Lf(this,e,Mf,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Lf(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(kf.fromBufferAttribute(s,i),Af.fromBufferAttribute(s,a),n.distanceSqToSegment(kf,Af,Pf,Ff)>r)return;Pf.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Pf);if(!(c<t.near||c>t.far))return{distance:c,point:Ff.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Rf=new J,zf=new J,Bf=class extends If{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Rf.fromBufferAttribute(t,e),zf.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Rf.distanceTo(zf);e.setAttribute(`lineDistance`,new nd(n,1))}else K(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Vf=class extends yd{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new X(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hf=new Y,Uf=new Ud,Wf=new od,Gf=new J,Kf=class extends du{constructor(e=new md,t=new Vf){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wf.copy(n.boundingSphere),Wf.applyMatrix4(r),Wf.radius+=i,e.ray.intersectsSphere(Wf)===!1)return;Hf.copy(r).invert(),Uf.copy(e.ray).applyMatrix4(Hf);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Gf.fromBufferAttribute(l,n),qf(Gf,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Gf.fromBufferAttribute(l,a),qf(Gf,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function qf(e,t,n,r,i,a,o){let s=Uf.distanceSqToPoint(e);if(s<n){let n=new J;Uf.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Jf=class extends Nl{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yf=class extends Nl{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xf=class extends Nl{constructor(e,t,n=ms,r,i,a,o=rs,s=rs,c,l=Ts,u=1){if(l!==1026&&l!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Zf=class extends Xf{constructor(e,t=ms,n=301,r,i,a=rs,o=rs,s,c=Ts){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Qf=class extends Nl{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},$f=class e extends md{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new nd(c,3)),this.setAttribute(`normal`,new nd(l,3)),this.setAttribute(`uv`,new nd(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new J;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ep=class e extends md{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new nd(u,3)),this.setAttribute(`normal`,new nd(d,3)),this.setAttribute(`uv`,new nd(f,2));function _(){let a=new J,_=new J,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new ml,m=new J,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},tp=class e extends ep{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},np=class e extends md{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new nd(p,3)),this.setAttribute(`normal`,new nd(m,3)),this.setAttribute(`uv`,new nd(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},rp=class e extends md{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new J,d=new J,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new nd(p,3)),this.setAttribute(`normal`,new nd(m,3)),this.setAttribute(`uv`,new nd(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},ip=class e extends md{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new J,f=new J,p=new J;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new nd(c,3)),this.setAttribute(`normal`,new nd(l,3)),this.setAttribute(`uv`,new nd(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function ap(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(K(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function op(e){let t={};for(let n=0;n<e.length;n++){let r=ap(e[n]);for(let e in r)t[e]=r[e]}return t}function sp(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function cp(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Cl.workingColorSpace}var lp={clone:ap,merge:op},up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fp=class extends yd{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=up,this.fragmentShader=dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ap(e.uniforms),this.uniformsGroups=sp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},pp=class extends fp{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},mp=class extends yd{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new X(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new X(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ml(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jl,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},hp=class extends yd{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type=`MeshPhongMaterial`,this.color=new X(16777215),this.specular=new X(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new X(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ml(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jl,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gp=class extends yd{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new X(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new X(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ml(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jl,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_p=class extends yd{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Sc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},vp=class extends yd{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function yp(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function bp(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function xp(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function Sp(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0)if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push(...o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}var Cp=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},wp=class extends Cp{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vc,endingEnd:vc}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case yc:i=e,o=2*t-n;break;case bc:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case yc:a=e,s=2*n-t;break;case bc:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Tp=class extends Cp{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ep=class extends Cp{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Dp=class extends Cp{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.settings||this.DefaultSettings_,u=l.inTangents,d=l.outTangents;if(!u||!d){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let f=o*2,p=e-1;for(let l=0;l!==o;++l){let o=a[c+l],m=a[s+l],h=p*f+l*2,g=d[h],_=d[h+1],v=e*f+l*2,y=u[v],b=u[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[l]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},Op=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=yp(t,this.TimeBufferType),this.values=yp(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:yp(e.times,Array),values:yp(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ep(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Dp(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case mc:t=this.InterpolantFactoryMethodDiscrete;break;case hc:t=this.InterpolantFactoryMethodLinear;break;case gc:t=this.InterpolantFactoryMethodSmooth;break;case _c:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return K(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mc;case this.InterpolantFactoryMethodLinear:return hc;case this.InterpolantFactoryMethodSmooth:return gc;case this.InterpolantFactoryMethodBezier:return _c}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(q(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(q(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){q(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){q(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&jc(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){q(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===gc,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Op.prototype.ValueTypeName=``,Op.prototype.TimeBufferType=Float32Array,Op.prototype.ValueBufferType=Float32Array,Op.prototype.DefaultInterpolation=hc;var kp=class extends Op{constructor(e,t,n){super(e,t,n)}};kp.prototype.ValueTypeName=`bool`,kp.prototype.ValueBufferType=Array,kp.prototype.DefaultInterpolation=mc,kp.prototype.InterpolantFactoryMethodLinear=void 0,kp.prototype.InterpolantFactoryMethodSmooth=void 0;var Ap=class extends Op{constructor(e,t,n,r){super(e,t,n,r)}};Ap.prototype.ValueTypeName=`color`;var jp=class extends Op{constructor(e,t,n,r){super(e,t,n,r)}};jp.prototype.ValueTypeName=`number`;var Mp=class extends Cp{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)hl.slerpFlat(i,0,a,c-o,a,c,s);return i}},Np=class extends Op{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Mp(this.times,this.values,this.getValueSize(),e)}};Np.prototype.ValueTypeName=`quaternion`,Np.prototype.InterpolantFactoryMethodSmooth=void 0;var Pp=class extends Op{constructor(e,t,n){super(e,t,n)}};Pp.prototype.ValueTypeName=`string`,Pp.prototype.ValueBufferType=Array,Pp.prototype.DefaultInterpolation=mc,Pp.prototype.InterpolantFactoryMethodLinear=void 0,Pp.prototype.InterpolantFactoryMethodSmooth=void 0;var Fp=class extends Op{constructor(e,t,n,r){super(e,t,n,r)}};Fp.prototype.ValueTypeName=`vector`;var Ip=class{constructor(e=``,t=-1,n=[],r=xc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Gc(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(Rp(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i.userData=JSON.parse(e.userData||`{}`),i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let e=0,r=n.length;e!==r;++e)t.push(Op.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=bp(o);o=xp(o,1,c),s=xp(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new jp(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}static parseAnimation(e,t){if(K(`AnimationClip: parseAnimation() is deprecated and will be removed with r185`),!e)return q(`AnimationClip: No animation in JSONLoader data.`),null;let n=function(e,t,n,r,i){if(n.length!==0){let a=[],o=[];Sp(n,a,o,r),a.length!==0&&i.push(new e(t,a,o))}},r=[],i=e.name||`default`,a=e.fps||30,o=e.blendMode,s=e.length||-1,c=e.hierarchy||[];for(let e=0;e<c.length;e++){let i=c[e].keys;if(!(!i||i.length===0))if(i[0].morphTargets){let e={},t;for(t=0;t<i.length;t++)if(i[t].morphTargets)for(let n=0;n<i[t].morphTargets.length;n++)e[i[t].morphTargets[n]]=-1;for(let n in e){let e=[],a=[];for(let r=0;r!==i[t].morphTargets.length;++r){let r=i[t];e.push(r.time),a.push(+(r.morphTarget===n))}r.push(new jp(`.morphTargetInfluence[`+n+`]`,e,a))}s=e.length*a}else{let a=`.bones[`+t[e].name+`]`;n(Fp,a+`.position`,i,`pos`,r),n(Np,a+`.quaternion`,i,`rot`,r),n(Fp,a+`.scale`,i,`scl`,r)}}return r.length===0?null:new this(i,s,r,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Lp(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return jp;case`vector`:case`vector2`:case`vector3`:case`vector4`:return Fp;case`color`:return Ap;case`quaternion`:return Np;case`bool`:case`boolean`:return kp;case`string`:return Pp}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function Rp(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=Lp(e.type);if(e.times===void 0){let t=[],n=[];Sp(e.keys,t,n,`value`),e.times=t,e.values=n}return t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e)}var zp={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Bp(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Bp(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Bp(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var Vp=class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Hp=new Vp,Up=class{constructor(e){this.manager=e===void 0?Hp:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Up.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Wp={},Gp=class extends Error{constructor(e,t){super(e),this.response=t}},Kp=class extends Up{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=zp.get(`file:${e}`);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(Wp[e]!==void 0){Wp[e].push({onLoad:t,onProgress:n,onError:r});return}Wp[e]=[],Wp[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&K(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=Wp[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}else throw new Gp(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{zp.add(`file:${e}`,t);let n=Wp[e];delete Wp[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=Wp[e];if(n===void 0)throw this.manager.itemError(e),t;delete Wp[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},qp=new WeakMap,Jp=class extends Up{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=zp.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=qp.get(a);e===void 0&&(e=[],qp.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=Mc(`img`);function s(){l(),t&&t(this);let n=qp.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}qp.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),zp.remove(`image:${e}`);let n=qp.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}qp.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),zp.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},Yp=class extends Up{constructor(e){super(e)}load(e,t,n,r){let i=this,a=new gf,o=new Kp(this.manager);return o.setResponseType(`arraybuffer`),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(i.withCredentials),o.load(e,function(e){let n;try{n=i.parse(e)}catch(e){if(r!==void 0)r(e);else{e(e);return}}n.image===void 0?n.data!==void 0&&(a.image.width=n.width,a.image.height=n.height,a.image.data=n.data):a.image=n.image,a.wrapS=n.wrapS===void 0?ts:n.wrapS,a.wrapT=n.wrapT===void 0?ts:n.wrapT,a.magFilter=n.magFilter===void 0?os:n.magFilter,a.minFilter=n.minFilter===void 0?os:n.minFilter,a.anisotropy=n.anisotropy===void 0?1:n.anisotropy,n.colorSpace!==void 0&&(a.colorSpace=n.colorSpace),n.flipY!==void 0&&(a.flipY=n.flipY),n.format!==void 0&&(a.format=n.format),n.type!==void 0&&(a.type=n.type),n.mipmaps!==void 0&&(a.mipmaps=n.mipmaps,a.minFilter=cs),n.mipmapCount===1&&(a.minFilter=os),n.generateMipmaps!==void 0&&(a.generateMipmaps=n.generateMipmaps),a.needsUpdate=!0,t&&t(a,n)},n,r),a}},Xp=class extends Up{constructor(e){super(e)}load(e,t,n,r){let i=new Nl,a=new Jp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Zp=class extends du{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new X(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Qp=new Y,$p=new J,em=new J,tm=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ml(512,512),this.mapType=ls,this.map=null,this.mapPass=null,this.matrix=new Y,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Df,this._frameExtents=new ml(1,1),this._viewportCount=1,this._viewports=[new Pl(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;$p.setFromMatrixPosition(e.matrixWorld),t.position.copy($p),em.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(em),t.updateMatrixWorld(),Qp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qp,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},nm=new J,rm=new hl,im=new J,am=class extends du{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Y,this.projectionMatrix=new Y,this.projectionMatrixInverse=new Y,this.coordinateSystem=kc,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(nm,rm,im),im.x===1&&im.y===1&&im.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nm,rm,im.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(nm,rm,im),im.x===1&&im.y===1&&im.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nm,rm,im.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},om=new J,sm=new ml,cm=new ml,lm=class extends am{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Wc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Uc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wc*2*Math.atan(Math.tan(Uc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){om.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(om.x,om.y).multiplyScalar(-e/om.z),om.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(om.x,om.y).multiplyScalar(-e/om.z)}getViewSize(e,t){return this.getViewBounds(e,sm,cm),t.subVectors(cm,sm)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Uc*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},um=class extends tm{constructor(){super(new lm(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Wc*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},dm=class extends Zp{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(du.DEFAULT_UP),this.updateMatrix(),this.target=new du,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new um}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},fm=class extends tm{constructor(){super(new lm(90,1,.5,500)),this.isPointLightShadow=!0}},pm=class extends Zp{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new fm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},mm=class extends am{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hm=class extends tm{constructor(){super(new mm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gm=class extends Zp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(du.DEFAULT_UP),this.updateMatrix(),this.target=new du,this.shadow=new hm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},_m=class extends Zp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},vm=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},ym=-90,bm=1,xm=class extends du{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new lm(ym,bm,e,t);r.layers=this.layers,this.add(r);let i=new lm(ym,bm,e,t);i.layers=this.layers,this.add(i);let a=new lm(ym,bm,e,t);a.layers=this.layers,this.add(a);let o=new lm(ym,bm,e,t);o.layers=this.layers,this.add(o);let s=new lm(ym,bm,e,t);s.layers=this.layers,this.add(s);let c=new lm(ym,bm,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Sm=class extends lm{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Cm=`\\[\\]\\.:\\/`,wm=RegExp(`[\\[\\]\\.:\\/]`,`g`),Tm=`[^\\[\\]\\.:\\/]`,Em=`[^`+Cm.replace(`\\.`,``)+`]`,Dm=`((?:WC+[\\/:])*)`.replace(`WC`,Tm),Om=`(WCOD+)?`.replace(`WCOD`,Em),km=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Tm),Am=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Tm),jm=RegExp(`^`+Dm+Om+km+Am+`$`),Mm=[`material`,`materials`,`bones`,`map`],Nm=class{constructor(e,t,n){let r=n||Pm.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pm=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(wm,``)}static parseTrackName(e){let t=jm.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Mm.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){K(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){q(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){q(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){q(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){q(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){q(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){q(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){q(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;q(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){q(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){q(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pm.Composite=Nm,Pm.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Pm.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Pm.prototype.GetterByBindingType=[Pm.prototype._getValue_direct,Pm.prototype._getValue_array,Pm.prototype._getValue_arrayElement,Pm.prototype._getValue_toArray],Pm.prototype.SetterByBindingTypeAndVersioning=[[Pm.prototype._setValue_direct,Pm.prototype._setValue_direct_setNeedsUpdate,Pm.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pm.prototype._setValue_array,Pm.prototype._setValue_array_setNeedsUpdate,Pm.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pm.prototype._setValue_arrayElement,Pm.prototype._setValue_arrayElement_setNeedsUpdate,Pm.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pm.prototype._setValue_fromArray,Pm.prototype._setValue_fromArray_setNeedsUpdate,Pm.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Fm(e,t,n,r){let i=Im(r);switch(n){case Ss:return e*t;case Ds:return e*t/i.components*i.byteLength;case Os:return e*t/i.components*i.byteLength;case ks:return e*t*2/i.components*i.byteLength;case As:return e*t*2/i.components*i.byteLength;case Cs:return e*t*3/i.components*i.byteLength;case ws:return e*t*4/i.components*i.byteLength;case js:return e*t*4/i.components*i.byteLength;case Ms:case Ns:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ps:case Fs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ls:case zs:return Math.max(e,16)*Math.max(t,8)/4;case Is:case Rs:return Math.max(e,8)*Math.max(t,8)/2;case Bs:case Vs:case Us:case Ws:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Hs:case Gs:case Ks:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case qs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Js:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ys:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Xs:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Zs:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Qs:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case $s:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ec:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case tc:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case nc:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case rc:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ic:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ac:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case oc:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case sc:case cc:case lc:return Math.ceil(e/4)*Math.ceil(t/4)*16;case uc:case dc:return Math.ceil(e/4)*Math.ceil(t/4)*8;case fc:case pc:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Im(e){switch(e){case ls:case us:return{byteLength:1,components:1};case fs:case ds:case gs:return{byteLength:2,components:1};case _s:case vs:return{byteLength:2,components:4};case ms:case ps:case hs:return{byteLength:4,components:1};case bs:case xs:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`183`}})),typeof window<`u`&&(window.__THREE__?K(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`183`);function Lm(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Rm(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var zm={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Q={common:{diffuse:{value:new X(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vl},alphaMap:{value:null},alphaMapTransform:{value:new vl},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vl}},envmap:{envMap:{value:null},envMapRotation:{value:new vl},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vl}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vl}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vl},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vl},normalScale:{value:new ml(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vl},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vl}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vl}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vl}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new X(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new X(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vl},alphaTest:{value:0},uvTransform:{value:new vl}},sprite:{diffuse:{value:new X(16777215)},opacity:{value:1},center:{value:new ml(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vl},alphaMap:{value:null},alphaMapTransform:{value:new vl},alphaTest:{value:0}}},Bm={basic:{uniforms:op([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:zm.meshbasic_vert,fragmentShader:zm.meshbasic_frag},lambert:{uniforms:op([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new X(0)},envMapIntensity:{value:1}}]),vertexShader:zm.meshlambert_vert,fragmentShader:zm.meshlambert_frag},phong:{uniforms:op([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new X(0)},specular:{value:new X(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:zm.meshphong_vert,fragmentShader:zm.meshphong_frag},standard:{uniforms:op([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new X(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zm.meshphysical_vert,fragmentShader:zm.meshphysical_frag},toon:{uniforms:op([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new X(0)}}]),vertexShader:zm.meshtoon_vert,fragmentShader:zm.meshtoon_frag},matcap:{uniforms:op([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:zm.meshmatcap_vert,fragmentShader:zm.meshmatcap_frag},points:{uniforms:op([Q.points,Q.fog]),vertexShader:zm.points_vert,fragmentShader:zm.points_frag},dashed:{uniforms:op([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zm.linedashed_vert,fragmentShader:zm.linedashed_frag},depth:{uniforms:op([Q.common,Q.displacementmap]),vertexShader:zm.depth_vert,fragmentShader:zm.depth_frag},normal:{uniforms:op([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:zm.meshnormal_vert,fragmentShader:zm.meshnormal_frag},sprite:{uniforms:op([Q.sprite,Q.fog]),vertexShader:zm.sprite_vert,fragmentShader:zm.sprite_frag},background:{uniforms:{uvTransform:{value:new vl},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zm.background_vert,fragmentShader:zm.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vl}},vertexShader:zm.backgroundCube_vert,fragmentShader:zm.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zm.cube_vert,fragmentShader:zm.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zm.equirect_vert,fragmentShader:zm.equirect_frag},distance:{uniforms:op([Q.common,Q.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zm.distance_vert,fragmentShader:zm.distance_frag},shadow:{uniforms:op([Q.lights,Q.fog,{color:{value:new X(0)},opacity:{value:1}}]),vertexShader:zm.shadow_vert,fragmentShader:zm.shadow_frag}};Bm.physical={uniforms:op([Bm.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vl},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vl},clearcoatNormalScale:{value:new ml(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vl},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vl},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vl},sheen:{value:0},sheenColor:{value:new X(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vl},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vl},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vl},transmissionSamplerSize:{value:new ml},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vl},attenuationDistance:{value:0},attenuationColor:{value:new X(0)},specularColor:{value:new X(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vl},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vl},anisotropyVector:{value:new ml},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vl}}]),vertexShader:zm.meshphysical_vert,fragmentShader:zm.meshphysical_frag};var Vm={r:0,b:0,g:0},Hm=new Jl,Um=new Y;function Wm(e,t,n,r,i,a){let o=new X(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Z(new $f(1,1,1),new fp({name:`BackgroundCubeMaterial`,uniforms:ap(Bm.backgroundCube.uniforms),vertexShader:Bm.backgroundCube.vertexShader,fragmentShader:Bm.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),Hm.copy(n.backgroundRotation),Hm.x*=-1,Hm.y*=-1,Hm.z*=-1,i.isCubeTexture&&i.isRenderTargetTexture===!1&&(Hm.y*=-1,Hm.z*=-1),l.material.uniforms.envMap.value=i,l.material.uniforms.flipEnvMap.value=i.isCubeTexture&&i.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Um.makeRotationFromEuler(Hm)),l.material.toneMapped=Cl.getTransfer(i.colorSpace)!==Ec,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Z(new np(2,2),new fp({name:`BackgroundMaterial`,uniforms:ap(Bm.background.uniforms),vertexShader:Bm.background.vertexShader,fragmentShader:Bm.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Cl.getTransfer(i.colorSpace)!==Ec,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Vm,cp(e)),n.buffers.color.setClear(Vm.r,Vm.g,Vm.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Gm(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Km(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function qm(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(K(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Jm(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Cf,s=new vl,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ym=4,Xm=[.125,.215,.35,.446,.526,.582],Zm=20,Qm=256,$m=new mm,eh=new X,th=null,nh=0,rh=0,ih=!1,ah=new J,oh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=ah}=i;th=this._renderer.getRenderTarget(),nh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(th,nh,rh),this._renderer.xr.enabled=ih,e.scissorTest=!1,lh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),th=this._renderer.getRenderTarget(),nh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:os,minFilter:os,generateMipmaps:!1,type:gs,format:ws,colorSpace:wc,depthBuffer:!1},r=ch(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sh(r)),this._blurMaterial=dh(r,e,t),this._ggxMaterial=uh(r,e,t)}return r}_compileMaterial(e){let t=new Z(new md,e);this._renderer.compile(t,$m)}_sceneToCubeUV(e,t,n,r,i){let a=new lm(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(eh),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Z(new $f,new Wd({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(eh),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;lh(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;lh(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,$m)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Ym?n-d+Ym:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,lh(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,$m),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,lh(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,$m)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&q(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*Zm-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):Zm;m>Zm&&K(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zm}`);let h=[],g=0;for(let e=0;e<Zm;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];lh(t,3*v*(r>_-Ym?r-_+Ym:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,$m)}};function sh(e){let t=[],n=[],r=[],i=e,a=e-Ym+1+Xm.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Ym?s=Xm[o-e+Ym-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new md;h.setAttribute(`position`,new $u(f,3)),h.setAttribute(`uv`,new $u(p,2)),h.setAttribute(`faceIndex`,new $u(m,1)),r.push(new Z(h,null)),i>Ym&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function ch(e,t,n){let r=new Il(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function lh(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function uh(e,t,n){return new fp({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Qm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function dh(e,t,n){let r=new Float32Array(Zm),i=new J(0,1,0);return new fp({name:`SphericalGaussianBlur`,defines:{n:Zm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:mh(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function fh(){return new fp({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:mh(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ph(){return new fp({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function mh(){return`

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
	`}var hh=class extends Il{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Jf(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $f(5,5,5),i=new fp({name:`CubemapFromEquirect`,uniforms:ap(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Z(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=os),new xm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function gh(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new hh(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}else return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new oh(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new oh(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function _h(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Lc(`WebGLRenderer: `+e+` extension not supported.`),t}}}function vh(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?td:ed)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function yh(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function bh(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:q(`WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function xh(e,t,n){let r=new WeakMap,i=new Pl;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Ll(h,p,m,u);g.type=hs,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new ml(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Sh(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ch={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function wh(e,t,n,r,i){let a=new Il(t,n,{type:e,depthBuffer:r,stencilBuffer:i}),o=new Il(t,n,{type:gs,depthBuffer:!1,stencilBuffer:!1}),s=new md;s.setAttribute(`position`,new nd([-1,3,0,-1,-1,0,3,-1,0],3)),s.setAttribute(`uv`,new nd([0,2,0,0,2,0],2));let c=new pp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Z(s,c),u=new mm(-1,1,1,-1,0,1),d=null,f=null,p=!1,m,h=null,g=[],_=!1;this.setSize=function(e,t){a.setSize(e,t),o.setSize(e,t);for(let n=0;n<g.length;n++){let r=g[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){g=e,_=g.length>0&&g[0].isRenderPass===!0;let t=a.width,n=a.height;for(let e=0;e<g.length;e++){let r=g[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(p||e.toneMapping===0&&g.length===0)return!1;if(h=t,t!==null){let e=t.width,n=t.height;(a.width!==e||a.height!==n)&&this.setSize(e,n)}return _===!1&&e.setRenderTarget(a),m=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return _},this.end=function(e,t){e.toneMapping=m,p=!0;let n=a,r=o;for(let i=0;i<g.length;i++){let a=g[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(d!==e.outputColorSpace||f!==e.toneMapping){d=e.outputColorSpace,f=e.toneMapping,c.defines={},Cl.getTransfer(d)===`srgb`&&(c.defines.SRGB_TRANSFER=``);let t=Ch[f];t&&(c.defines[t]=``),c.needsUpdate=!0}c.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(h),e.render(l,u),h=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o.dispose(),s.dispose(),c.dispose()}}var Th=new Nl,Eh=new Xf(1,1),Dh=new Ll,Oh=new Rl,kh=new Jf,Ah=[],jh=[],Mh=new Float32Array(16),Nh=new Float32Array(9),Ph=new Float32Array(4);function Fh(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ah[i];if(a===void 0&&(a=new Float32Array(i),Ah[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ih(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Lh(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Rh(e,t){let n=jh[t];n===void 0&&(n=new Int32Array(t),jh[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function zh(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Bh(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ih(n,t))return;e.uniform2fv(this.addr,t),Lh(n,t)}}function Vh(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ih(n,t))return;e.uniform3fv(this.addr,t),Lh(n,t)}}function Hh(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ih(n,t))return;e.uniform4fv(this.addr,t),Lh(n,t)}}function Uh(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ih(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Lh(n,t)}else{if(Ih(n,r))return;Ph.set(r),e.uniformMatrix2fv(this.addr,!1,Ph),Lh(n,r)}}function Wh(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ih(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Lh(n,t)}else{if(Ih(n,r))return;Nh.set(r),e.uniformMatrix3fv(this.addr,!1,Nh),Lh(n,r)}}function Gh(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ih(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Lh(n,t)}else{if(Ih(n,r))return;Mh.set(r),e.uniformMatrix4fv(this.addr,!1,Mh),Lh(n,r)}}function Kh(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function qh(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ih(n,t))return;e.uniform2iv(this.addr,t),Lh(n,t)}}function Jh(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ih(n,t))return;e.uniform3iv(this.addr,t),Lh(n,t)}}function Yh(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ih(n,t))return;e.uniform4iv(this.addr,t),Lh(n,t)}}function Xh(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Zh(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ih(n,t))return;e.uniform2uiv(this.addr,t),Lh(n,t)}}function Qh(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ih(n,t))return;e.uniform3uiv(this.addr,t),Lh(n,t)}}function $h(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ih(n,t))return;e.uniform4uiv(this.addr,t),Lh(n,t)}}function eg(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Eh.compareFunction=n.isReversedDepthBuffer()?518:515,a=Eh):a=Th,n.setTexture2D(t||a,i)}function tg(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Oh,i)}function ng(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||kh,i)}function rg(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Dh,i)}function ig(e){switch(e){case 5126:return zh;case 35664:return Bh;case 35665:return Vh;case 35666:return Hh;case 35674:return Uh;case 35675:return Wh;case 35676:return Gh;case 5124:case 35670:return Kh;case 35667:case 35671:return qh;case 35668:case 35672:return Jh;case 35669:case 35673:return Yh;case 5125:return Xh;case 36294:return Zh;case 36295:return Qh;case 36296:return $h;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return rg}}function ag(e,t){e.uniform1fv(this.addr,t)}function og(e,t){let n=Fh(t,this.size,2);e.uniform2fv(this.addr,n)}function sg(e,t){let n=Fh(t,this.size,3);e.uniform3fv(this.addr,n)}function cg(e,t){let n=Fh(t,this.size,4);e.uniform4fv(this.addr,n)}function lg(e,t){let n=Fh(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ug(e,t){let n=Fh(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function dg(e,t){let n=Fh(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function fg(e,t){e.uniform1iv(this.addr,t)}function pg(e,t){e.uniform2iv(this.addr,t)}function mg(e,t){e.uniform3iv(this.addr,t)}function hg(e,t){e.uniform4iv(this.addr,t)}function gg(e,t){e.uniform1uiv(this.addr,t)}function _g(e,t){e.uniform2uiv(this.addr,t)}function vg(e,t){e.uniform3uiv(this.addr,t)}function yg(e,t){e.uniform4uiv(this.addr,t)}function bg(e,t,n){let r=this.cache,i=t.length,a=Rh(n,i);Ih(r,a)||(e.uniform1iv(this.addr,a),Lh(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Eh:Th;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function xg(e,t,n){let r=this.cache,i=t.length,a=Rh(n,i);Ih(r,a)||(e.uniform1iv(this.addr,a),Lh(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Oh,a[e])}function Sg(e,t,n){let r=this.cache,i=t.length,a=Rh(n,i);Ih(r,a)||(e.uniform1iv(this.addr,a),Lh(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||kh,a[e])}function Cg(e,t,n){let r=this.cache,i=t.length,a=Rh(n,i);Ih(r,a)||(e.uniform1iv(this.addr,a),Lh(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Dh,a[e])}function wg(e){switch(e){case 5126:return ag;case 35664:return og;case 35665:return sg;case 35666:return cg;case 35674:return lg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return hg;case 5125:return gg;case 36294:return _g;case 36295:return vg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return Cg}}var Tg=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ig(t.type)}},Eg=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wg(t.type)}},Dg=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Og=/(\w+)(\])?(\[|\.)?/g;function kg(e,t){e.seq.push(t),e.map[t.id]=t}function Ag(e,t,n){let r=e.name,i=r.length;for(Og.lastIndex=0;;){let a=Og.exec(r),o=Og.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){kg(n,l===void 0?new Tg(s,e,t):new Eg(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new Dg(s),kg(n,e)),n=e}}}var jg=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ag(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Mg(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Ng=37297,Pg=0;function Fg(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Ig=new vl;function Lg(e){Cl._getMatrix(Ig,Cl.workingColorSpace,e);let t=`mat3( ${Ig.elements.map(e=>e.toFixed(4))} )`;switch(Cl.getTransfer(e)){case Tc:return[t,`LinearTransferOETF`];case Ec:return[t,`sRGBTransferOETF`];default:return K(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Rg(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Fg(e.getShaderSource(t),r)}else return i}function zg(e,t){let n=Lg(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Bg={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Vg(e,t){let n=Bg[t];return n===void 0?(K(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Hg=new J;function Ug(){return Cl.getLuminanceCoefficients(Hg),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Hg.x.toFixed(4)}, ${Hg.y.toFixed(4)}, ${Hg.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Wg(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(qg).join(`
`)}function Gg(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Kg(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function qg(e){return e!==``}function Jg(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yg(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zg(e){return e.replace(Xg,$g)}var Qg=new Map;function $g(e,t){let n=zm[t];if(n===void 0){let e=Qg.get(t);if(e!==void 0)n=zm[e],K(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Zg(n)}var e_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function t_(e){return e.replace(e_,n_)}function n_(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function r_(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var i_={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function a_(e){return i_[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var o_={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function s_(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:o_[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var c_={302:`ENVMAP_MODE_REFRACTION`};function l_(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:c_[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var u_={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function d_(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:u_[e.combine]||`ENVMAP_BLENDING_NONE`}function f_(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function p_(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=a_(n),l=s_(n),u=l_(n),d=d_(n),f=f_(n),p=Wg(n),m=Gg(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(qg).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(qg).join(`
`),_.length>0&&(_+=`
`)):(g=[r_(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(qg).join(`
`),_=[r_(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:zm.tonemapping_pars_fragment,n.toneMapping===0?``:Vg(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,zm.colorspace_pars_fragment,zg(`linearToOutputTexel`,n.outputColorSpace),Ug(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(qg).join(`
`)),o=Zg(o),o=Jg(o,n),o=Yg(o,n),s=Zg(s),s=Jg(s,n),s=Yg(s,n),o=t_(o),s=t_(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Mg(i,i.VERTEX_SHADER,y),S=Mg(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Rg(i,x,`vertex`),n=Rg(i,S,`fragment`);q(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):K(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new jg(i,h),T=Kg(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Ng)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Pg++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var m_=0,h_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new g_(e),t.set(e,n)),n}},g_=class{constructor(e){this.id=m_++,this.code=e,this.usedTimes=0}};function __(e,t,n,r,i,a){let o=new Yl,s=new h_,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h){let g=u.fog,_=h.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=b&&b.mapping===306?b.image.height:null,S=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&K(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,ee;if(S){let e=Bm[S];E=e.vertexShader,D=e.fragmentShader}else E=i.vertexShader,D=i.fragmentShader,s.update(i),O=s.getVertexShaderID(i),ee=s.getFragmentShaderID(i);let k=e.getRenderTarget(),A=e.state.buffers.depth.getReversed(),j=h.isInstancedMesh===!0,M=h.isBatchedMesh===!0,N=!!i.map,P=!!i.matcap,te=!!b,ne=!!i.aoMap,re=!!i.lightMap,ie=!!i.bumpMap,ae=!!i.normalMap,oe=!!i.displacementMap,se=!!i.emissiveMap,ce=!!i.metalnessMap,F=!!i.roughnessMap,le=i.anisotropy>0,ue=i.clearcoat>0,de=i.dispersion>0,fe=i.iridescence>0,pe=i.sheen>0,me=i.transmission>0,he=le&&!!i.anisotropyMap,ge=ue&&!!i.clearcoatMap,I=ue&&!!i.clearcoatNormalMap,_e=ue&&!!i.clearcoatRoughnessMap,L=fe&&!!i.iridescenceMap,ve=fe&&!!i.iridescenceThicknessMap,R=pe&&!!i.sheenColorMap,ye=pe&&!!i.sheenRoughnessMap,z=!!i.specularMap,be=!!i.specularColorMap,xe=!!i.specularIntensityMap,Se=me&&!!i.transmissionMap,Ce=me&&!!i.thicknessMap,we=!!i.gradientMap,Te=!!i.alphaMap,Ee=i.alphaTest>0,De=!!i.alphaHash,Oe=!!i.extensions,ke=0;i.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ke=e.toneMapping);let Ae={shaderID:S,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:ee,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:M,batchingColor:M&&h._colorsTexture!==null,instancing:j,instancingColor:j&&h.instanceColor!==null,instancingMorph:j&&h.morphTexture!==null,outputColorSpace:k===null?e.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:wc,alphaToCoverage:!!i.alphaToCoverage,map:N,matcap:P,envMap:te,envMapMode:te&&b.mapping,envMapCubeUVHeight:x,aoMap:ne,lightMap:re,bumpMap:ie,normalMap:ae,displacementMap:oe,emissiveMap:se,normalMapObjectSpace:ae&&i.normalMapType===1,normalMapTangentSpace:ae&&i.normalMapType===0,metalnessMap:ce,roughnessMap:F,anisotropy:le,anisotropyMap:he,clearcoat:ue,clearcoatMap:ge,clearcoatNormalMap:I,clearcoatRoughnessMap:_e,dispersion:de,iridescence:fe,iridescenceMap:L,iridescenceThicknessMap:ve,sheen:pe,sheenColorMap:R,sheenRoughnessMap:ye,specularMap:z,specularColorMap:be,specularIntensityMap:xe,transmission:me,transmissionMap:Se,thicknessMap:Ce,gradientMap:we,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Te,alphaTest:Ee,alphaHash:De,combine:i.combine,mapUv:N&&m(i.map.channel),aoMapUv:ne&&m(i.aoMap.channel),lightMapUv:re&&m(i.lightMap.channel),bumpMapUv:ie&&m(i.bumpMap.channel),normalMapUv:ae&&m(i.normalMap.channel),displacementMapUv:oe&&m(i.displacementMap.channel),emissiveMapUv:se&&m(i.emissiveMap.channel),metalnessMapUv:ce&&m(i.metalnessMap.channel),roughnessMapUv:F&&m(i.roughnessMap.channel),anisotropyMapUv:he&&m(i.anisotropyMap.channel),clearcoatMapUv:ge&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:I&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:L&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:R&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:ye&&m(i.sheenRoughnessMap.channel),specularMapUv:z&&m(i.specularMap.channel),specularColorMapUv:be&&m(i.specularColorMap.channel),specularIntensityMapUv:xe&&m(i.specularIntensityMap.channel),transmissionMapUv:Se&&m(i.transmissionMap.channel),thicknessMapUv:Ce&&m(i.thicknessMap.channel),alphaMapUv:Te&&m(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ae||le),vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!_.attributes.uv&&(N||Te),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ae===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:A,skinning:h.isSkinnedMesh===!0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:ke,decodeVideoTexture:N&&i.map.isVideoTexture===!0&&Cl.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:se&&i.emissiveMap.isVideoTexture===!0&&Cl.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Oe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Oe&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Bm[t];n=lp.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new p_(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function v_(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function y_(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function b_(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function x_(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||y_),r.length>1&&r.sort(t||b_),i.length>1&&i.sort(t||b_)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function S_(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new x_,e.set(t,[i])):n>=r.length?(i=new x_,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function C_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new J,color:new X};break;case`SpotLight`:n={position:new J,direction:new J,color:new X,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new J,color:new X,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new J,skyColor:new X,groundColor:new X};break;case`RectAreaLight`:n={color:new X,position:new J,halfWidth:new J,halfHeight:new J};break}return e[t.id]=n,n}}}function w_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ml};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ml};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ml,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var T_=0;function E_(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function D_(e){let t=new C_,n=w_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new J);let i=new J,a=new Y,o=new Y;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(E_);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=T_++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function O_(e){let t=new D_(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function k_(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new O_(e),t.set(n,[a])):r>=i.length?(a=new O_(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var A_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,M_=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],N_=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],P_=new Y,F_=new J,I_=new J;function L_(e,t,n){let r=new Df,i=new ml,a=new ml,o=new Pl,s=new _p,c=new vp,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new fp({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ml},radius:{value:4}},vertexShader:A_,fragmentShader:j_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new md;m.setAttribute(`position`,new $u(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Z(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(K(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){K(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){K(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Il(i.x,i.y,{format:ks,type:gs,minFilter:os,magFilter:os,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Xf(i.x,i.y,hs),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Ts,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=rs,d.map.depthTexture.magFilter=rs}else l.isPointLight?(d.map=new hh(i.x),d.map.depthTexture=new Zf(i.x,ms)):(d.map=new Il(i.x,i.y),d.map.depthTexture=new Xf(i.x,i.y,ms)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Ts,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=os,d.map.depthTexture.magFilter=os):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=rs,d.map.depthTexture.magFilter=rs);d.camera.updateProjectionMatrix()}let g=d.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<g;t++){if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),F_.setFromMatrixPosition(l.matrixWorld),e.position.copy(F_),I_.copy(e.position),I_.add(M_[t]),e.up.copy(N_[t]),e.lookAt(I_),e.updateMatrixWorld(),n.makeTranslation(-F_.x,-F_.y,-F_.z),P_.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(P_,e.coordinateSystem,e.reversedDepth)}else d.updateMatrices(l);r=d.getFrustum(),b(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Il(i.x,i.y,{format:ks,type:gs})),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function R_(e,t){function n(){let t=!1,n=new Pl,r=null,i=new Pl(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ce(e.DEPTH_TEST):F(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=zc[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ce(e.STENCIL_TEST):F(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new X(0,0,0),w=0,T=!1,E=null,D=null,O=null,ee=null,k=null,A=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,M=0,N=e.getParameter(e.VERSION);N.indexOf(`WebGL`)===-1?N.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),j=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(N)[1]),j=M>=1);let P=null,te={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ie=new Pl().fromArray(ne),ae=new Pl().fromArray(re);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ce(e.DEPTH_TEST),o.setFunc(3),ge(!1),I(1),ce(e.CULL_FACE),me(0);function ce(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function F(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function le(t,n){return d[t]===n?!1:(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return m===t?!1:(e.useProgram(t),m=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function me(t,n,r,i,a,o,s,c,l,u){if(t===0){h===!0&&(F(e.BLEND),h=!1);return}if(h===!1&&(ce(e.BLEND),h=!0),t!==5){if(t!==g||u!==T){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:q(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:q(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:q(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:q(`WebGLState: Invalid blending: `,t);break}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,T=u}return}a||=n,o||=r,s||=i,(n!==_||a!==b)&&(e.blendEquationSeparate(fe[n],fe[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,T=!1}function he(t,n){t.side===2?F(e.CULL_FACE):ce(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ge(r),t.blending===1&&t.transparent===!1?me(0):me(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),L(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ce(e.SAMPLE_ALPHA_TO_COVERAGE):F(e.SAMPLE_ALPHA_TO_COVERAGE)}function ge(t){E!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),E=t)}function I(t){t===0?F(e.CULL_FACE):(ce(e.CULL_FACE),t!==D&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),D=t}function _e(t){t!==O&&(j&&e.lineWidth(t),O=t)}function L(t,n,r){t?(ce(e.POLYGON_OFFSET_FILL),(ee!==n||k!==r)&&(ee=n,k=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):F(e.POLYGON_OFFSET_FILL)}function ve(t){t?ce(e.SCISSOR_TEST):F(e.SCISSOR_TEST)}function R(t){t===void 0&&(t=e.TEXTURE0+A-1),P!==t&&(e.activeTexture(t),P=t)}function ye(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+A-1:P);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function z(){let t=te[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function be(){try{e.compressedTexImage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function xe(){try{e.compressedTexImage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function Se(){try{e.texSubImage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function Ce(){try{e.texSubImage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function we(){try{e.compressedTexSubImage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function Ee(){try{e.texStorage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function De(){try{e.texStorage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function Oe(){try{e.texImage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function ke(){try{e.texImage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function Ae(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function je(t){ae.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ae.copy(t))}function Me(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ne(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Pe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},P=null,te={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new X(0,0,0),w=0,T=!1,E=null,D=null,O=null,ee=null,k=null,ie.set(0,0,e.canvas.width,e.canvas.height),ae.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ce,disable:F,bindFramebuffer:le,drawBuffers:ue,useProgram:de,setBlending:me,setMaterial:he,setFlipSided:ge,setCullFace:I,setLineWidth:_e,setPolygonOffset:L,setScissorTest:ve,activeTexture:R,bindTexture:ye,unbindTexture:z,compressedTexImage2D:be,compressedTexImage3D:xe,texImage2D:Oe,texImage3D:ke,updateUBOMapping:Me,uniformBlockBinding:Ne,texStorage2D:Ee,texStorage3D:De,texSubImage2D:Se,texSubImage3D:Ce,compressedTexSubImage2D:we,compressedTexSubImage3D:Te,scissor:Ae,viewport:je,reset:Pe}}function z_(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ml,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function m(e,t){return p?new OffscreenCanvas(e,t):Mc(`canvas`)}function h(e,t,n){let r=1,i=ye(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);d===void 0&&(d=m(n,a));let o=t?m(n,a):d;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),K(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&K(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function g(e){return e.generateMipmaps}function _(t){e.generateMipmap(t)}function v(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(n,r,i,a,o=!1){if(n!==null){if(e[n]!==void 0)return e[n];K(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGB8UI),i===e.UNSIGNED_SHORT&&(s=e.RGB16UI),i===e.UNSIGNED_INT&&(s=e.RGB32UI),i===e.BYTE&&(s=e.RGB8I),i===e.SHORT&&(s=e.RGB16I),i===e.INT&&(s=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(s=e.RGBA16UI),i===e.UNSIGNED_INT&&(s=e.RGBA32UI),i===e.BYTE&&(s=e.RGBA8I),i===e.SHORT&&(s=e.RGBA16I),i===e.INT&&(s=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(s=e.R11F_G11F_B10F)),r===e.RGBA){let t=o?Tc:Cl.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function b(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,K(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function x(e,t){return g(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function S(e){let t=e.target;t.removeEventListener(`dispose`,S),w(t),t.isVideoTexture&&u.delete(t)}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),E(t)}function w(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=f.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&T(e),Object.keys(i).length===0&&f.delete(n)}r.remove(e)}function T(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=f.get(i);delete a[n.__cacheKey],o.memory.textures--}function E(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let D=0;function O(){D=0}function ee(){let e=D;return e>=i.maxTextures&&K(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),D+=1,e}function k(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function A(t,i){let a=r.get(t);if(t.isVideoTexture&&ve(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)K(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)K(`WebGLRenderer: Texture marked for update but image is incomplete`);else{se(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function j(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){se(a,t,i);return}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function M(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){se(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function N(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){ce(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let P={[es]:e.REPEAT,[ts]:e.CLAMP_TO_EDGE,[ns]:e.MIRRORED_REPEAT},te={[rs]:e.NEAREST,[is]:e.NEAREST_MIPMAP_NEAREST,[as]:e.NEAREST_MIPMAP_LINEAR,[os]:e.LINEAR,[ss]:e.LINEAR_MIPMAP_NEAREST,[cs]:e.LINEAR_MIPMAP_LINEAR},ne={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function re(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&K(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,P[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,P[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,P[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,te[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,te[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ne[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ie(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,S));let i=n.source,a=f.get(i);a===void 0&&(a={},f.set(i,a));let s=k(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&T(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ae(e,t,n){return Math.floor(Math.floor(e/n)/t)}function oe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ae(n.start,r.width,4),c=ae(t.start,r.width,4);n.start<=i+1&&a===c&&ae(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=e.getParameter(e.UNPACK_ROW_LENGTH),l=e.getParameter(e.UNPACK_SKIP_PIXELS),u=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;e.pixelStorei(e.UNPACK_SKIP_PIXELS,u),e.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,c),e.pixelStorei(e.UNPACK_SKIP_PIXELS,l),e.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function se(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ie(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+s);let t=Cl.getPrimaries(Cl.workingColorSpace),r=o.colorSpace===``?null:Cl.getPrimaries(o.colorSpace),f=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=h(o.image,!1,i.maxTextureSize);p=R(o,p);let m=a.convert(o.format,o.colorSpace),v=a.convert(o.type),S=y(o.internalFormat,m,v,o.colorSpace,o.isVideoTexture);re(c,o);let C,w=o.mipmaps,T=o.isVideoTexture!==!0,E=d.__version===void 0||l===!0,D=u.dataReady,O=x(o,p);if(o.isDepthTexture)S=b(o.format===Es,o.type),E&&(T?n.texStorage2D(e.TEXTURE_2D,1,S,p.width,p.height):n.texImage2D(e.TEXTURE_2D,0,S,p.width,p.height,0,m,v,null));else if(o.isDataTexture)if(w.length>0){T&&E&&n.texStorage2D(e.TEXTURE_2D,O,S,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,v,C.data):n.texImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,m,v,C.data);o.generateMipmaps=!1}else T?(E&&n.texStorage2D(e.TEXTURE_2D,O,S,p.width,p.height),D&&oe(o,p,m,v)):n.texImage2D(e.TEXTURE_2D,0,S,p.width,p.height,0,m,v,p.data);else if(o.isCompressedTexture)if(o.isCompressedArrayTexture){T&&E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,S,w[0].width,w[0].height,p.depth);for(let t=0,r=w.length;t<r;t++)if(C=w[t],o.format!==1023)if(m!==null)if(T){if(D)if(o.layerUpdates.size>0){let r=Fm(C.width,C.height,o.format,o.type);for(let i of o.layerUpdates){let a=C.data.subarray(i*r/C.data.BYTES_PER_ELEMENT,(i+1)*r/C.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,i,C.width,C.height,1,m,a)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,C.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,S,C.width,C.height,p.depth,0,C.data,0,0);else K(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else T?D&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,v,C.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,S,C.width,C.height,p.depth,0,m,v,C.data)}else{T&&E&&n.texStorage2D(e.TEXTURE_2D,O,S,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,v,C.data):n.texImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,m,v,C.data):m===null?K(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,C.data):n.compressedTexImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,C.data)}else if(o.isDataArrayTexture)if(T){if(E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,S,p.width,p.height,p.depth),D)if(o.layerUpdates.size>0){let t=Fm(p.width,p.height,o.format,o.type);for(let r of o.layerUpdates){let i=p.data.subarray(r*t/p.data.BYTES_PER_ELEMENT,(r+1)*t/p.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,p.width,p.height,1,m,v,i)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,p.width,p.height,p.depth,m,v,p.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,S,p.width,p.height,p.depth,0,m,v,p.data);else if(o.isData3DTexture)T?(E&&n.texStorage3D(e.TEXTURE_3D,O,S,p.width,p.height,p.depth),D&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,p.width,p.height,p.depth,m,v,p.data)):n.texImage3D(e.TEXTURE_3D,0,S,p.width,p.height,p.depth,0,m,v,p.data);else if(o.isFramebufferTexture){if(E)if(T)n.texStorage2D(e.TEXTURE_2D,O,S,p.width,p.height);else{let t=p.width,r=p.height;for(let i=0;i<O;i++)n.texImage2D(e.TEXTURE_2D,i,S,t,r,0,m,v,null),t>>=1,r>>=1}}else if(w.length>0){if(T&&E){let t=ye(w[0]);n.texStorage2D(e.TEXTURE_2D,O,S,t.width,t.height)}for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m,v,C):n.texImage2D(e.TEXTURE_2D,t,S,m,v,C);o.generateMipmaps=!1}else if(T){if(E){let t=ye(p);n.texStorage2D(e.TEXTURE_2D,O,S,t.width,t.height)}D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,m,v,p)}else n.texImage2D(e.TEXTURE_2D,0,S,m,v,p);g(o)&&_(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ce(t,o,s){if(o.image.length!==6)return;let c=ie(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Cl.getPrimaries(Cl.workingColorSpace),r=o.colorSpace===``?null:Cl.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=h(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=R(o,m[e]);let v=m[0],b=a.convert(o.format,o.colorSpace),S=a.convert(o.type),C=y(o.internalFormat,b,S,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=x(o,v);re(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,v.width,v.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,b,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,b,S,i.data):b===null?K(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,b,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=ye(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,b,S,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,b,S,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,b,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,b,S,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,b,S,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,b,S,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,b,S,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,b,S,i.image[t])}}}g(o)&&_(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function F(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=y(o.internalFormat,d,f,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),L(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,_e(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function le(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=b(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;L(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,_e(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,_e(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=y(o.internalFormat,c,l,o.colorSpace);L(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,_e(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,_e(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ue(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,S)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),re(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else A(i.depthTexture,0);let u=l.__webglTexture,d=_e(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)L(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)L(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`Unknown depthTexture format`)}function de(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer)if(a)for(let e=0;e<6;e++)ue(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ue(i.__webglFramebuffer[0],t,0):ue(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),le(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),le(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function fe(t,n,i){let a=r.get(t);n!==void 0&&F(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&de(t)}function pe(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,C);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&L(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=y(r.internalFormat,i,o,r.colorSpace,t.isXRRenderTarget===!0),u=_e(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),le(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),re(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)F(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else F(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);g(i)&&_(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),re(c,a),F(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),g(a)&&_(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),re(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)F(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else F(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);g(i)&&_(r),n.unbindTexture()}t.depthBuffer&&de(t)}function me(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(g(a)){let t=v(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),_(t),n.unbindTexture()}}}let he=[],ge=[];function I(t){if(t.samples>0){if(L(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(he.length=0,ge.length=0,he.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(he.push(l),ge.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ge)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,he))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function _e(e){return Math.min(i.maxSamples,e.samples)}function L(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function ve(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function R(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Cl.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&K(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):q(`WebGLTextures: Unsupported texture color space:`,n)),t}function ye(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ee,this.resetTextureUnits=O,this.setTexture2D=A,this.setTexture2DArray=j,this.setTexture3D=M,this.setTextureCube=N,this.rebindTextures=fe,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=F,this.useMultisampledRTT=L,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function B_(e,t){function n(n,r=``){let i,a=Cl.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var V_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H_=`
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

}`,U_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Qf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fp({vertexShader:V_,fragmentShader:H_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Z(new np(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},W_=class extends Bc{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new U_,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new ml,C=null,w=new lm;w.viewport=new Pl;let T=new lm;T.viewport=new Pl;let E=[w,T],D=new Sm,O=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new mu,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new mu,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new mu,b[e]=t),t.getHandSpace()};function k(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function A(){r.removeEventListener(`select`,k),r.removeEventListener(`selectstart`,k),r.removeEventListener(`selectend`,k),r.removeEventListener(`squeeze`,k),r.removeEventListener(`squeezestart`,k),r.removeEventListener(`squeezeend`,k),r.removeEventListener(`end`,A),r.removeEventListener(`inputsourceschange`,j);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}O=null,ee=null,h.reset();for(let e in g)delete g[e];e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&K(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&K(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,k),r.addEventListener(`selectstart`,k),r.addEventListener(`selectend`,k),r.addEventListener(`squeeze`,k),r.addEventListener(`squeezestart`,k),r.addEventListener(`squeezeend`,k),r.addEventListener(`end`,A),r.addEventListener(`inputsourceschange`,j),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Es:Ts,a=_.stencil?ys:ms);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Il(d.textureWidth,d.textureHeight,{format:ws,type:ls,depthTexture:new Xf(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Il(f.framebufferWidth,f.framebufferHeight,{format:ws,type:ls,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function j(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let M=new J,N=new J;function P(e,t,n){M.setFromMatrixPosition(t.matrixWorld),N.setFromMatrixPosition(n.matrixWorld);let r=M.distanceTo(N),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function te(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),D.near=T.near=w.near=t,D.far=T.far=w.far=n,(O!==D.near||ee!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,ee=D.far),D.layers.mask=e.layers.mask|6,w.layers.mask=D.layers.mask&-5,T.layers.mask=D.layers.mask&-3;let i=e.parent,a=D.cameras;te(D,i);for(let e=0;e<a.length;e++)te(a[e],i);a.length===2?P(D,w,T):D.projectionMatrix.copy(w.projectionMatrix),ne(e,D,i)};function ne(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Wc*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(D)},this.getCameraTexture=function(e){return g[e]};let re=null;function ie(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==D.cameras.length&&(D.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=E[n];o===void 0&&(o=new lm,o.layers.enable(n),o.viewport=new Pl,E[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(D.matrix.copy(o.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),i===!0&&D.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Qf,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}re&&re(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ae=new Lm;ae.setAnimationLoop(ie),this.setAnimationLoop=function(e){re=e},this.dispose=function(){}}},G_=new Jl,K_=new Y;function q_(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,cp(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,G_.copy(o),G_.x*=-1,G_.y*=-1,G_.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(G_.y*=-1,G_.z*=-1),e.envMapRotation.value.setFromMatrix4(K_.makeRotationFromEuler(G_)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function J_(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return q(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?K(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):K(`WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Y_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),X_=null;function Z_(){return X_===null&&(X_=new gf(Y_,16,16,ks,gs),X_.name=`DFG_LUT`,X_.minFilter=os,X_.magFilter=os,X_.wrapS=ts,X_.wrapT=ts,X_.generateMipmaps=!1,X_.needsUpdate=!0),X_}var Q_=class{constructor(e={}){let{canvas:t=Nc(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ls}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([js,As,Os]),g=new Set([ls,ms,fs,ys,_s,vs]),_=new Uint32Array(4),v=new Int32Array(4),y=null,b=null,x=[],S=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,T=!1;this._outputColorSpace=Cc;let E=0,D=0,O=null,ee=-1,k=null,A=new Pl,j=new Pl,M=null,N=new X(0),P=0,te=t.width,ne=t.height,re=1,ie=null,ae=null,oe=new Pl(0,0,te,ne),se=new Pl(0,0,te,ne),ce=!1,F=new Df,le=!1,ue=!1,de=new Y,fe=new J,pe=new Pl,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},he=!1;function ge(){return O===null?re:1}let I=n;function _e(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r183`),t.addEventListener(`webglcontextlost`,Be,!1),t.addEventListener(`webglcontextrestored`,Ve,!1),t.addEventListener(`webglcontextcreationerror`,He,!1),I===null){let t=`webgl2`;if(I=_e(t,e),I===null)throw _e(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw q(`WebGLRenderer: `+e.message),e}let L,ve,R,ye,z,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le;function Re(){L=new _h(I),L.init(),Fe=new B_(I,L),ve=new qm(I,L,e,Fe),R=new R_(I,L),ve.reversedDepthBuffer&&d&&R.buffers.depth.setReversed(!0),ye=new bh(I),z=new v_,be=new z_(I,L,R,z,ve,Fe,ye),xe=new gh(w),Se=new Rm(I),Ie=new Gm(I,Se),Ce=new vh(I,Se,ye,Ie),we=new Sh(I,Ce,Se,Ie,ye),Me=new xh(I,ve,be),ke=new Jm(z),Te=new __(w,xe,L,ve,Ie,ke),Ee=new q_(w,z),De=new S_,Oe=new k_(L),je=new Wm(w,xe,R,we,p,s),Ae=new L_(w,we,ve),Le=new J_(I,ye,ve,R),Ne=new Km(I,L,ye),Pe=new yh(I,L,ye),ye.programs=Te.programs,w.capabilities=ve,w.extensions=L,w.properties=z,w.renderLists=De,w.shadowMap=Ae,w.state=R,w.info=ye}Re(),m!==1009&&(C=new wh(m,t.width,t.height,r,i));let ze=new W_(w,I);this.xr=ze,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=L.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=L.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(e){e!==void 0&&(re=e,this.setSize(te,ne,!1))},this.getSize=function(e){return e.set(te,ne)},this.setSize=function(e,n,r=!0){if(ze.isPresenting){K(`WebGLRenderer: Can't change size while VR device is presenting.`);return}te=e,ne=n,t.width=Math.floor(e*re),t.height=Math.floor(n*re),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(te*re,ne*re).floor()},this.setDrawingBufferSize=function(e,n,r){te=e,ne=n,re=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){console.error(`THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){console.warn(`THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}C.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(A)},this.getViewport=function(e){return e.copy(oe)},this.setViewport=function(e,t,n,r){e.isVector4?oe.set(e.x,e.y,e.z,e.w):oe.set(e,t,n,r),R.viewport(A.copy(oe).multiplyScalar(re).round())},this.getScissor=function(e){return e.copy(se)},this.setScissor=function(e,t,n,r){e.isVector4?se.set(e.x,e.y,e.z,e.w):se.set(e,t,n,r),R.scissor(j.copy(se).multiplyScalar(re).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(e){R.setScissorTest(ce=e)},this.setOpaqueSort=function(e){ie=e},this.setTransparentSort=function(e){ae=e},this.getClearColor=function(e){return e.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(O!==null){let t=O.texture.format;e=h.has(t)}if(e){let e=O.texture.type,t=g.has(e),n=je.getClearColor(),r=je.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,I.clearBufferuiv(I.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,I.clearBufferiv(I.COLOR,0,v))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Be,!1),t.removeEventListener(`webglcontextrestored`,Ve,!1),t.removeEventListener(`webglcontextcreationerror`,He,!1),je.dispose(),De.dispose(),Oe.dispose(),z.dispose(),xe.dispose(),we.dispose(),Ie.dispose(),Le.dispose(),Te.dispose(),ze.dispose(),ze.removeEventListener(`sessionstart`,Ye),ze.removeEventListener(`sessionend`,Xe),Ze.stop()};function Be(e){e.preventDefault(),Fc(`WebGLRenderer: Context Lost.`),T=!0}function Ve(){Fc(`WebGLRenderer: Context Restored.`),T=!1;let e=ye.autoReset,t=Ae.enabled,n=Ae.autoUpdate,r=Ae.needsUpdate,i=Ae.type;Re(),ye.autoReset=e,Ae.enabled=t,Ae.autoUpdate=n,Ae.needsUpdate=r,Ae.type=i}function He(e){q(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ue(e){let t=e.target;t.removeEventListener(`dispose`,Ue),We(t)}function We(e){Ge(e),z.remove(e)}function Ge(e){let t=z.get(e).programs;t!==void 0&&(t.forEach(function(e){Te.releaseProgram(e)}),e.isShaderMaterial&&Te.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=me);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=ot(e,t,n,r,i);R.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ce.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ie.setup(i,r,s,n,c);let h,g=Ne;if(c!==null&&(h=Se.get(c),g=Pe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(R.setLineWidth(r.wireframeLinewidth*ge()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),R.setLineWidth(e*ge()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh)if(i._multiDrawInstances!==null)Lc(`WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.`),g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(L.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Se.get(c).bytesPerElement:1,o=z.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ke(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,rt(e,t,n),e.side=0,e.needsUpdate=!0,rt(e,t,n),e.side=2):rt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),b=Oe.get(n),b.init(t),S.push(b),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(b.pushLight(e),e.castShadow&&b.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(b.pushLight(e),e.castShadow&&b.pushShadow(e))}),b.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Ke(a,n,e),r.add(a)}else Ke(t,n,e),r.add(t)}),b=S.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){z.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}L.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let qe=null;function Je(e){qe&&qe(e)}function Ye(){Ze.stop()}function Xe(){Ze.start()}let Ze=new Lm;Ze.setAnimationLoop(Je),typeof self<`u`&&Ze.setContext(self),this.setAnimationLoop=function(e){qe=e,ze.setAnimationLoop(e),e===null?Ze.stop():Ze.start()},ze.addEventListener(`sessionstart`,Ye),ze.addEventListener(`sessionend`,Xe),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){q(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(T===!0)return;let n=ze.enabled===!0&&ze.isPresenting===!0,r=C!==null&&(O===null||n)&&C.begin(w,O);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(t),t=ze.getCamera()),e.isScene===!0&&e.onBeforeRender(w,e,t,O),b=Oe.get(e,S.length),b.init(t),S.push(b),de.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),F.setFromProjectionMatrix(de,kc,t.reversedDepth),ue=this.localClippingEnabled,le=ke.init(this.clippingPlanes,ue),y=De.get(e,x.length),y.init(),x.push(y),ze.enabled===!0&&ze.isPresenting===!0){let e=w.xr.getDepthSensingMesh();e!==null&&Qe(e,t,-1/0,w.sortObjects)}Qe(e,t,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(ie,ae),he=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1,he&&je.addToRenderList(y,e),this.info.render.frame++,le===!0&&ke.beginShadows();let i=b.state.shadowsArray;if(Ae.render(i,e,t),le===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),(r&&C.hasRenderPass())===!1){let n=y.opaque,r=y.transmissive;if(b.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];et(n,r,e,a)}he&&je.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];$e(y,e,n,n.viewport)}}else r.length>0&&et(n,r,e,t),he&&je.render(e),$e(y,e,t)}O!==null&&D===0&&(be.updateMultisampleRenderTarget(O),be.updateRenderTargetMipmap(O)),r&&C.end(w),e.isScene===!0&&e.onAfterRender(w,e,t),Ie.resetDefaultState(),ee=-1,k=null,S.pop(),S.length>0?(b=S[S.length-1],le===!0&&ke.setGlobalState(w.clippingPlanes,b.state.camera)):b=null,x.pop(),y=x.length>0?x[x.length-1]:null};function Qe(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)b.pushLight(e),e.castShadow&&b.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||F.intersectsSprite(e)){r&&pe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(de);let t=we.update(e),i=e.material;i.visible&&y.push(e,t,i,n,pe.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||F.intersectsObject(e))){let t=we.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),pe.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),pe.copy(e.boundingSphere.center)),pe.applyMatrix4(e.matrixWorld).applyMatrix4(de)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&y.push(e,t,s,n,pe.z,o)}}else i.visible&&y.push(e,t,i,n,pe.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Qe(i[e],t,n,r)}function $e(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;b.setupLightsView(n),le===!0&&ke.setGlobalState(w.clippingPlanes,n),r&&R.viewport(A.copy(r)),i.length>0&&tt(i,t,n),a.length>0&&tt(a,t,n),o.length>0&&tt(o,t,n),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function et(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[r.id]===void 0){let e=L.has(`EXT_color_buffer_half_float`)||L.has(`EXT_color_buffer_float`);b.state.transmissionRenderTarget[r.id]=new Il(1,1,{generateMipmaps:!0,type:e?gs:ls,minFilter:cs,samples:Math.max(4,ve.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Cl.workingColorSpace})}let a=b.state.transmissionRenderTarget[r.id],o=r.viewport||A;a.setSize(o.z*w.transmissionResolutionScale,o.w*w.transmissionResolutionScale);let s=w.getRenderTarget(),c=w.getActiveCubeFace(),l=w.getActiveMipmapLevel();w.setRenderTarget(a),w.getClearColor(N),P=w.getClearAlpha(),P<1&&w.setClearColor(16777215,.5),w.clear(),he&&je.render(n);let u=w.toneMapping;w.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),b.setupLightsView(r),le===!0&&ke.setGlobalState(w.clippingPlanes,r),tt(e,n,r),be.updateMultisampleRenderTarget(a),be.updateRenderTargetMipmap(a),L.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,nt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(be.updateMultisampleRenderTarget(a),be.updateRenderTargetMipmap(a))}w.setRenderTarget(s,c,l),w.setClearColor(N,P),d!==void 0&&(r.viewport=d),w.toneMapping=u}function tt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&nt(o,t,n,s,l,c)}}function nt(e,t,n,r,i,a){e.onBeforeRender(w,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(w,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,w.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,w.renderBufferDirect(n,t,r,i,e,a),i.side=2):w.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(w,t,n,r,i,a)}function rt(e,t,n){t.isScene!==!0&&(t=me);let r=z.get(e),i=b.state.lights,a=b.state.shadowsArray,o=i.state.version,s=Te.getParameters(e,i.state,a,t,n),c=Te.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=xe.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ue),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return at(e,s),d}else s.uniforms=Te.getUniforms(e),e.onBeforeCompile(s,w),d=Te.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=ke.uniform),at(e,s),r.needsLights=ct(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=d,r.uniformsList=null,d}function it(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=jg.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function at(e,t){let n=z.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ot(e,t,n,r,i){t.isScene!==!0&&(t=me),be.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:wc,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=xe.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(h=w.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=z.get(r),y=b.state.lights;if(le===!0&&(ue===!0||e!==k)){let t=e===k&&r.id===ee;ke.setState(r,e,t)}let x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?x=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?x=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==ke.numPlanes||v.numIntersection!==ke.numIntersection)?x=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h?v.morphTargetsCount!==_&&(x=!0):x=!0:x=!0:x=!0:(x=!0,v.__version=r.version);let S=v.currentProgram;x===!0&&(S=rt(r,t,i));let C=!1,T=!1,E=!1,D=S.getUniforms(),A=v.uniforms;if(R.useProgram(S.program)&&(C=!0,T=!0,E=!0),r.id!==ee&&(ee=r.id,T=!0),C||k!==e){R.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),D.setValue(I,`projectionMatrix`,e.projectionMatrix),D.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=D.map.cameraPosition;t!==void 0&&t.setValue(I,fe.setFromMatrixPosition(e.matrixWorld)),ve.logarithmicDepthBuffer&&D.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&D.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),k!==e&&(k=e,T=!0,E=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&D.setValue(I,`directionalShadowMap`,y.state.directionalShadowMap,be),y.state.spotShadowMap.length>0&&D.setValue(I,`spotShadowMap`,y.state.spotShadowMap,be),y.state.pointShadowMap.length>0&&D.setValue(I,`pointShadowMap`,y.state.pointShadowMap,be)),i.isSkinnedMesh){D.setOptional(I,i,`bindMatrix`),D.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),D.setValue(I,`boneTexture`,e.boneTexture,be))}i.isBatchedMesh&&(D.setOptional(I,i,`batchingTexture`),D.setValue(I,`batchingTexture`,i._matricesTexture,be),D.setOptional(I,i,`batchingIdTexture`),D.setValue(I,`batchingIdTexture`,i._indirectTexture,be),D.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&D.setValue(I,`batchingColorTexture`,i._colorsTexture,be));let j=n.morphAttributes;if((j.position!==void 0||j.normal!==void 0||j.color!==void 0)&&Me.update(i,n,S),(T||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,D.setValue(I,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),A.dfgLUT!==void 0&&(A.dfgLUT.value=Z_()),T&&(D.setValue(I,`toneMappingExposure`,w.toneMappingExposure),v.needsLights&&st(A,E),a&&r.fog===!0&&Ee.refreshFogUniforms(A,a),Ee.refreshMaterialUniforms(A,r,re,ne,b.state.transmissionRenderTarget[e.id]),jg.upload(I,it(v),A,be)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(jg.upload(I,it(v),A,be),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&D.setValue(I,`center`,i.center),D.setValue(I,`modelViewMatrix`,i.modelViewMatrix),D.setValue(I,`normalMatrix`,i.normalMatrix),D.setValue(I,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Le.update(n,S),Le.bind(n,S)}}return S}function st(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function ct(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(e,t,n){let r=z.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),z.get(e.texture).__webglTexture=t,z.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=z.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let lt=I.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){O=e,E=t,D=n;let r=null,i=!1,a=!1;if(e){let o=z.get(e);if(o.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(I.FRAMEBUFFER,o.__webglFramebuffer),A.copy(e.viewport),j.copy(e.scissor),M=e.scissorTest,R.viewport(A),R.scissor(j),R.setScissorTest(M),ee=-1;return}else if(o.__webglFramebuffer===void 0)be.setupRenderTarget(e);else if(o.__hasExternalTextures)be.rebindTextures(e,z.get(e.texture).__webglTexture,z.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&z.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);be.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=z.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&be.useMultisampledRTT(e)===!1?z.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,A.copy(e.viewport),j.copy(e.scissor),M=e.scissorTest}else A.copy(oe).multiplyScalar(re).floor(),j.copy(se).multiplyScalar(re).floor(),M=ce;if(n!==0&&(r=lt),R.bindFramebuffer(I.FRAMEBUFFER,r)&&R.drawBuffers(e,r),R.viewport(A),R.scissor(j),R.setScissorTest(M),i){let r=z.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=z.get(e.textures[t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=z.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}ee=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){q(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){R.bindFramebuffer(I.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s),!ve.textureFormatReadable(c)){q(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!ve.textureTypeReadable(l)){q(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&I.readPixels(t,n,r,i,Fe.convert(c),Fe.convert(l),a)}finally{let e=O===null?null:z.get(O).__webglFramebuffer;R.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){R.bindFramebuffer(I.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s),!ve.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!ve.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,d),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),I.readPixels(t,n,r,i,Fe.convert(l),Fe.convert(u),0);let f=O===null?null:z.get(O).__webglFramebuffer;R.bindFramebuffer(I.FRAMEBUFFER,f);let p=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Rc(I,p,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,d),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.deleteBuffer(d),I.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;be.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),R.unbindTexture()};let ut=I.createFramebuffer(),dt=I.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Fe.convert(t.format),_=Fe.convert(t.type),v;t.isData3DTexture?(be.setTexture3D(t,0),v=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(be.setTexture2DArray(t,0),v=I.TEXTURE_2D_ARRAY):(be.setTexture2D(t,0),v=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(I.UNPACK_ROW_LENGTH),b=I.getParameter(I.UNPACK_IMAGE_HEIGHT),x=I.getParameter(I.UNPACK_SKIP_PIXELS),S=I.getParameter(I.UNPACK_SKIP_ROWS),C=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,l),I.pixelStorei(I.UNPACK_SKIP_ROWS,u),I.pixelStorei(I.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=z.get(e),r=z.get(t),h=z.get(n.__renderTarget),g=z.get(r.__renderTarget);R.bindFramebuffer(I.READ_FRAMEBUFFER,h.__webglFramebuffer),R.bindFramebuffer(I.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,z.get(e).__webglTexture,i,d+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,z.get(t).__webglTexture,a,m+n)),I.blitFramebuffer(l,u,o,s,f,p,o,s,I.DEPTH_BUFFER_BIT,I.NEAREST);R.bindFramebuffer(I.READ_FRAMEBUFFER,null),R.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||z.has(e)){let n=z.get(e),r=z.get(t);R.bindFramebuffer(I.READ_FRAMEBUFFER,ut),R.bindFramebuffer(I.DRAW_FRAMEBUFFER,dt);for(let e=0;e<c;e++)w?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,i),T?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),i===0?T?I.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):I.copyTexSubImage2D(v,a,f,p,l,u,o,s):I.blitFramebuffer(l,u,o,s,f,p,o,s,I.COLOR_BUFFER_BIT,I.NEAREST);R.bindFramebuffer(I.READ_FRAMEBUFFER,null),R.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(I.UNPACK_ROW_LENGTH,y),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(I.UNPACK_SKIP_PIXELS,x),I.pixelStorei(I.UNPACK_SKIP_ROWS,S),I.pixelStorei(I.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&I.generateMipmap(v),R.unbindTexture()},this.initRenderTarget=function(e){z.get(e).__webglFramebuffer===void 0&&be.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?be.setTextureCube(e,0):e.isData3DTexture?be.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?be.setTexture2DArray(e,0):be.setTexture2D(e,0),R.unbindTexture()},this.resetState=function(){E=0,D=0,O=null,R.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return kc}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Cl._getDrawingBufferColorSpace(e),t.unpackColorSpace=Cl._getUnpackColorSpace()}},$={fps:30,pitch:30,yaw:45,zoom:1,worldSize:10,roughness:.4,metalness:.3,retryInterval:1e3,color:{r:14221312,g:123136,b:4210943}},$_=e=>e>0?e<=200?e:200:30,ev=()=>{let e=new _m(16777215,.5),t=new gm(16777215,2);t.position.set(8,6,15);let n=new gm(12572415,.5);return n.position.set(-6,-4,3),[e,t,n]},tv={class:`image-panel`},nv=[`src`],rv={key:1,class:`placeholder-text`},iv=Hn({__name:`ImagePanel`,props:{title:{default:`Image`},topic:{default:``},enabled:{type:Boolean,default:!0},fps:{default:$.fps},hint:{default:`png`},id:{default:``}},setup(e){let t=e,n=Ca(()=>{let e=1e3/$_(t.fps);return e>0?e:$.fps}),r=B(null),i=B(!1),a=null,o=!1,s=!1,c=()=>{r.value&&=(URL.revokeObjectURL(r.value),null)},l=()=>{u(),c(),i.value=!1,s=!1,o=!0;let e=async()=>{let{blob:l,error:u}=await Wo(t.topic,t.hint,t.id);if(!o)return;u?(i.value=!1,s=!0):(l&&(c(),r.value=URL.createObjectURL(l)),i.value=!0,s=!1);let d=s?$.retryInterval:n.value;a=setTimeout(e,d)};e()},u=()=>{o=!1,a!==null&&(clearTimeout(a),a=null),c(),i.value=!1,s=!1};return H(()=>t.topic,(e,n)=>{e!==n&&t.enabled&&l()}),H(()=>t.hint,()=>{t.enabled&&t.topic&&l()}),H(n,()=>{t.enabled&&t.topic&&l()}),H(()=>t.enabled,e=>{e?l():u()}),rr(()=>{t.enabled&&l()}),sr(u),(t,n)=>(U(),W(`div`,tv,[G(`div`,{class:F([`image-header`,{disabled:!e.enabled}])},[G(`span`,null,ge(e.title),1),G(`span`,{class:F([`topic-name`,{disabled:!e.enabled}])},ge(e.topic?e.topic:`未指定话题名`),3),G(`span`,{class:F([`status-indicator`,{connected:i.value&&e.enabled,failed:!i.value&&e.enabled}])},`●`,2)],2),G(`div`,{class:F([`image-content`,{disabled:!e.enabled}])},[e.enabled&&r.value?(U(),W(`img`,{key:0,src:r.value,class:`lpss-image`,draggable:`false`},null,8,nv)):(U(),W(`div`,rv,`No Image`))],2)]))}}),av=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},ov=av(iv,[[`__scopeId`,`data-v-14dfe6ac`]]),sv=av(Hn({__name:`GridPanel`,props:{enabled:{type:Boolean,default:!0},cellCount:{default:10},cellSize:{default:1},color:{default:`160; 160; 164`},alpha:{default:.5},plane:{default:`XY`},offsetX:{default:0},offsetY:{default:0},offsetZ:{default:0},pitch:{default:$.pitch},yaw:{default:$.yaw},zoom:{default:$.zoom},showDisk:{type:Boolean,default:!1}},setup(e){let t=e,n=B(null),r=null,i=V(null),a=V(null),o=V(null),s=V(null),c=e=>{let t=e.split(`;`).map(e=>parseInt(e.trim()));return t.length>=3&&t.every(e=>!isNaN(e))?t[0]<<16|t[1]<<8|t[2]:10526884},l=()=>{let e=n.value;if(!e)return;let t=e.parentElement;if(!t)return;let r=t.clientWidth,c=t.clientHeight;i.value=new Q_({canvas:e,alpha:!0,antialias:!0}),i.value.setSize(r,c),i.value.setPixelRatio(window.devicePixelRatio||1),a.value=new bu,o.value=new lm(45,r/c,.1,1e3),s.value=new fu,a.value.add(s.value),ev().forEach(e=>{a.value?.add(e)}),f(),p(),m()},u=e=>{for(;e.children.length>0;)u(e.children[0]),e.remove(e.children[0]);if(e.isMesh||e.isLineSegments||e.isLine){let t=e;t.geometry?.dispose();let n=t.material;Array.isArray(n)?n.forEach(e=>e.dispose()):n&&n.dispose()}},d=()=>{if(s.value)for(;s.value.children.length>0;)u(s.value.children[0]),s.value.remove(s.value.children[0])},f=()=>{if(!s.value||!a.value||(d(),!t.enabled))return;let e=c(t.color),n=t.cellCount,r=t.cellSize,i=n*r/2,o=new Of({color:e,transparent:!0,opacity:t.alpha,linewidth:.5}),l=[];for(let e=0;e<=n;e++){let t=-i+e*r;l.push(new J(t,-i,0),new J(t,i,0)),l.push(new J(-i,t,0),new J(i,t,0))}let u=new Bf(new md().setFromPoints(l),o),f=new fu;f.position.set(t.offsetX,t.offsetY,t.offsetZ),f.add(u);let p=new Z(new rp(i*.01,16,8),new mp({color:16776960,transparent:!0,opacity:.7,depthWrite:!1,roughness:$.roughness,metalness:$.metalness}));p.scale.set(1,1,.15),p.visible=t.showDisk,p.name=`disk`,s.value.add(f),s.value.add(p);let m={XZ:[Math.PI/2,0,0],YZ:[0,Math.PI/2,0],XY:[0,0,0]}[t.plane]??[0,0,0];s.value.rotation.set(...m)},p=()=>{if(!o.value||!n.value||!i.value)return;let e=n.value.parentElement;if(!e)return;let r=e.clientWidth,a=e.clientHeight;i.value.setSize(r,a),o.value.aspect=r/a,o.value.setViewOffset(r,a,0,a*-.05,r,a),o.value.updateProjectionMatrix();let s=t.pitch*Math.PI/180,c=t.yaw*Math.PI/180,l=t.cellCount*t.cellSize*1.2/Math.max(t.zoom,.001),u=l*Math.sin(s),d=l*Math.cos(s),f=d*Math.cos(c),p=d*Math.sin(c);o.value.position.set(f,p,u),o.value.up.set(0,0,1),o.value.lookAt(0,0,0)},m=()=>{i.value&&a.value&&o.value&&i.value.render(a.value,o.value)};return H(()=>[t.enabled,t.cellCount,t.cellSize,t.color,t.alpha,t.plane,t.offsetX,t.offsetY,t.offsetZ],()=>{f(),m()}),H(()=>[t.pitch,t.yaw,t.zoom],()=>{p(),m()}),H(()=>t.showDisk,e=>{if(!s.value)return;let t=s.value.children.find(e=>e.name===`disk`);t&&(t.visible=e,m())}),rr(()=>{pn(()=>{l(),r=new ResizeObserver(()=>{p(),m()});let e=n.value;e?.parentElement&&r.observe(e.parentElement)})}),sr(()=>{r?.disconnect(),d(),i.value?.dispose(),i.value=null,a.value=null,o.value=null,s.value=null}),(t,r)=>En((U(),W(`canvas`,{ref_key:`canvasRef`,ref:n,class:`grid-canvas`},null,512)),[[La,e.enabled]])}}),[[`__scopeId`,`data-v-1c9a6c71`]]),cv=av(Hn({__name:`MapPanel`,props:{enabled:{type:Boolean,default:!0},topic:{default:``},updateTopic:{default:``},tfName:{default:``},fixedFrame:{default:`map`},scheme:{default:`Map`},alpha:{default:1},drawBehind:{type:Boolean,default:!1},fps:{default:$.fps},id:{default:``},pitch:{default:$.pitch},yaw:{default:$.yaw},zoom:{default:$.zoom},worldSize:{default:$.worldSize},dx:{default:0},dy:{default:0},dz:{default:0}},emits:[`status-change`,`map-size`],setup(e,{emit:t}){let n=e,r=t,i=B(null),a=B(null),o=V(null),s=V(null),c=V(null),l=V(null),u=null,d=null,f=null,p=``,m=null,h=null,g=!1,_=Ca(()=>1e3/Math.max($_(n.fps),1)),v=(e,t,n,r,i,a=255)=>{let o=t*4;e[o]=n,e[o+1]=r,e[o+2]=i,e[o+3]=a},y=()=>{let e=new Uint8Array(256*4);for(let t=0;t<256;++t)v(e,t,112,137,134);if(n.scheme===`Raw`)for(let t=0;t<256;++t)v(e,t,t,t,t===255?0:255);else if(n.scheme===`Costmap`){v(e,0,0,0,0,0);for(let t=1;t<=98;++t){let n=(t-1)/97;v(e,t,Math.round(255*n),0,Math.round(255*(1-n)))}v(e,99,0,255,255),v(e,100,255,0,255),v(e,255,112,137,134,160)}else{for(let t=0;t<=100;++t){let n=Math.round(255*(100-t)/100);v(e,t,n,n,n)}v(e,255,112,137,134)}return e},b=()=>{f?.dispose(),f=new gf(y(),256,1,ws,ls),f.minFilter=rs,f.magFilter=rs,f.generateMipmaps=!1,f.needsUpdate=!0,u&&(u.material.uniforms.paletteTexture.value=f,u.material.needsUpdate=!0)},x=()=>{u&&l.value&&l.value.remove(u),u?.geometry.dispose(),u?.material.dispose(),d?.dispose(),f?.dispose(),u=null,d=null,f=null,p=``},S=(e,t)=>{if(!l.value||t.length!==e.width*e.height){r(`status-change`,`地图数据长度无效`);return}x(),d=new gf(t,e.width,e.height,Ds,ls),d.minFilter=rs,d.magFilter=rs,d.generateMipmaps=!1,d.needsUpdate=!0,b();let i=new fp({uniforms:{mapTexture:{value:d},paletteTexture:{value:f},alpha:{value:Math.max(0,Math.min(1,n.alpha))}},vertexShader:`
      varying vec2 mapUv;
      void main() {
        mapUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D mapTexture;
      uniform sampler2D paletteTexture;
      uniform float alpha;
      varying vec2 mapUv;
      void main() {
        float value = texture2D(mapTexture, mapUv).r;
        vec4 color = texture2D(paletteTexture, vec2(value, 0.5));
        color.a *= alpha;
        if (color.a <= 0.001) discard;
        gl_FragColor = color;
      }
    `,transparent:!0,depthWrite:!n.drawBehind,side:2}),a=e.width*e.resolution,o=e.height*e.resolution;u=new Z(new np(a,o),i),u.position.set(a/2,o/2,n.drawBehind?-.002:.002),u.renderOrder=n.drawBehind?-10:0,l.value.add(u),p=e.revision,C(e),r(`map-size`,Math.max(a,o))},C=e=>{if(!l.value)return;let{position:t,orientation:n}=e.pose;l.value.position.set(t.x,t.y,t.z),l.value.quaternion.set(n.x,n.y,n.z,n.w),l.value.visible=e.transform_valid},w=()=>{if(!o.value||!s.value||!c.value||!i.value)return;let e=i.value.parentElement;if(!e)return;let t=e.clientWidth,r=e.clientHeight;o.value.setSize(t,r),c.value.aspect=t/r,c.value.setViewOffset(t,r,0,r*-.05,t,r),c.value.updateProjectionMatrix();let a=n.pitch*Math.PI/180,l=n.yaw*Math.PI/180,u=n.worldSize*1.2/Math.max(n.zoom,.001),d=u*Math.sin(a),f=u*Math.cos(a);c.value.position.set(f*Math.cos(l)-n.dx,f*Math.sin(l)-n.dy,d-n.dz),c.value.up.set(0,0,1),c.value.lookAt(-n.dx,-n.dy,-n.dz),o.value.render(s.value,c.value)},T=async()=>{if(!g||!n.enabled||!n.topic)return;let e=await Yo(n.topic,n.updateTopic,n.tfName,n.fixedFrame,n.id);if(!g)return;let t=e.error;if(e.data){if(a.value=e.data,C(e.data),!e.data.transform_valid)r(`status-change`,`TF: ${e.data.status}`);else if(p!==e.data.revision){let i=await Xo(n.id,e.data.revision);if(!g)return;t=i.error,i.data?S(e.data,i.data):i.status&&r(`status-change`,i.status)}!t&&e.data.transform_valid&&r(`status-change`,`正常`)}else e.status&&r(`status-change`,e.status);w(),m=setTimeout(T,t?$.retryInterval:_.value)},E=(e=!1)=>{g=!1,m!==null&&clearTimeout(m),m=null,e&&(a.value=null,x())},D=()=>{E(!0),!(!n.enabled||!n.topic)&&(g=!0,T())};return H(()=>[n.topic,n.updateTopic,n.tfName,n.fixedFrame],D),H(()=>n.enabled,e=>e?D():E()),H(()=>n.fps,()=>{g&&D()}),H(()=>n.scheme,()=>{b(),w()}),H(()=>n.alpha,e=>{u&&(u.material.uniforms.alpha.value=Math.max(0,Math.min(1,e))),w()}),H(()=>n.drawBehind,e=>{u&&(u.material.depthWrite=!e,u.position.z=e?-.002:.002,u.renderOrder=e?-10:0),w()}),H(()=>[n.pitch,n.yaw,n.zoom,n.worldSize,n.dx,n.dy,n.dz],w),rr(()=>{pn(()=>{let e=i.value,t=e?.parentElement;!e||!t||(o.value=new Q_({canvas:e,alpha:!0,antialias:!0}),o.value.setPixelRatio(window.devicePixelRatio||1),s.value=new bu,c.value=new lm(45,1,.1,1e4),l.value=new fu,s.value.add(l.value),h=new ResizeObserver(w),h.observe(t),w(),D())})}),sr(()=>{E(!0),h?.disconnect(),o.value?.dispose()}),(t,n)=>En((U(),W(`canvas`,{ref_key:`canvasRef`,ref:i,class:`map-canvas`},null,512)),[[La,e.enabled]])}}),[[`__scopeId`,`data-v-a6864d28`]]),lv=av(Hn({__name:`AxesPanel`,props:{enabled:{type:Boolean,default:!0},length:{default:1},radius:{default:.05},pitch:{default:$.pitch},yaw:{default:$.yaw},zoom:{default:$.zoom},worldSize:{default:$.worldSize},dx:{default:0},dy:{default:0},dz:{default:0}},setup(e){let t=e,n=B(null),r=null,i=V(null),a=V(null),o=V(null),s=V(null),c=null,l=null,u=null,d=null,f=null,p=null,m=()=>{let e=n.value;if(!e)return;let t=e.parentElement;if(!t)return;let r=t.clientWidth,m=t.clientHeight;i.value=new Q_({canvas:e,alpha:!0,antialias:!0}),i.value.setSize(r,m),i.value.setPixelRatio(window.devicePixelRatio||1),a.value=new bu,o.value=new lm(45,r/m,.1,1e3),s.value=new fu,a.value.add(s.value),ev().forEach(e=>{a.value?.add(e)}),d=h($.color.r),f=h($.color.g),p=h($.color.b),c=g(d,`x`),l=g(f,`y`),u=g(p,`z`),s.value.add(c),s.value.add(l),s.value.add(u),_(),v()},h=e=>new mp({color:e,roughness:$.roughness,metalness:$.metalness}),g=(e,t)=>{let n=new ep(1,1,1,16);return n.translate(0,.5,0),t===`x`?n.rotateZ(-Math.PI/2):t===`z`&&n.rotateX(Math.PI/2),new Z(n,e)},_=()=>{if(!o.value||!n.value||!i.value)return;let e=n.value.parentElement;if(!e)return;let r=e.clientWidth,a=e.clientHeight;i.value.setSize(r,a),o.value.aspect=r/a,o.value.setViewOffset(r,a,0,a*-.05,r,a),o.value.updateProjectionMatrix();let s=t.pitch*Math.PI/180,c=t.yaw*Math.PI/180,l=t.worldSize*1.2/Math.max(t.zoom,.001),u=l*Math.sin(s),d=l*Math.cos(s),f=d*Math.cos(c),p=d*Math.sin(c);o.value.position.set(f-t.dx,p-t.dy,u-t.dz),o.value.up.set(0,0,1),o.value.lookAt(-t.dx,-t.dy,-t.dz)},v=()=>{if(!s.value||!a.value||!i.value||!o.value)return;if(!t.enabled){s.value.visible=!1,i.value.render(a.value,o.value);return}s.value.visible=!0;let e=t.length,n=t.radius;c&&c.scale.set(e,n,n),l&&l.scale.set(n,e,n),u&&u.scale.set(n,n,e),i.value.render(a.value,o.value)};return H(()=>[t.length,t.radius],()=>{t.enabled&&pn(v)}),H(()=>t.enabled,e=>{e&&_(),pn(v)}),H(()=>[t.pitch,t.yaw,t.zoom,t.worldSize,t.dx,t.dy,t.dz],()=>{t.enabled&&(_(),v())}),rr(()=>{pn(()=>{m(),r=new ResizeObserver(()=>{_(),v()});let e=n.value;e?.parentElement&&r.observe(e.parentElement)})}),sr(()=>{r&&r.disconnect(),i.value&&i.value.dispose(),[d,f,p].forEach(e=>e?.dispose()),[c,l,u].forEach(e=>e?.geometry.dispose())}),(t,r)=>En((U(),W(`canvas`,{ref_key:`canvasRef`,ref:n,class:`axes-canvas`},null,512)),[[La,e.enabled]])}}),[[`__scopeId`,`data-v-bc92751d`]]),uv=av(Hn({__name:`PointPanel`,props:{enabled:{type:Boolean,default:!0},topic:{default:``},color:{default:`204; 41; 204`},alpha:{default:1},fps:{default:$.fps},id:{default:``},pitch:{default:$.pitch},yaw:{default:$.yaw},zoom:{default:$.zoom},worldSize:{default:$.worldSize},radius:{default:.1},dx:{default:0},dy:{default:0},dz:{default:0}},setup(e){let t=e,n=B(null),r=B(null),i=B(!1),a=null,o=!1,s=!1,c=null,l=Ca(()=>{let e=1e3/$_(t.fps);return e>0?e:$.fps}),u=e=>{let t=e.split(`;`).map(e=>parseInt(e.trim()));return t.length>=3&&t.every(e=>!isNaN(e))?t[0]<<16|t[1]<<8|t[2]:65280},d=V(null),f=V(null),p=V(null),m=V(null),h=null,g=null,_=()=>{let e=n.value;if(!e)return;let r=e.parentElement;if(!r)return;let i=r.clientWidth,a=r.clientHeight;d.value=new Q_({canvas:e,alpha:!0,antialias:!0}),d.value.setSize(i,a),d.value.setPixelRatio(window.devicePixelRatio||1),f.value=new bu,p.value=new lm(45,i/a,.1,1e3),m.value=new fu,f.value.add(m.value),ev().forEach(e=>{f.value?.add(e)}),g=new mp({color:u(t.color),transparent:!0,opacity:t.alpha,roughness:$.roughness,metalness:$.metalness}),h=new Z(new rp(1,32,32),g),m.value.add(h),v(),y()},v=()=>{if(!p.value||!n.value||!d.value)return;let e=n.value.parentElement;if(!e)return;let r=e.clientWidth,i=e.clientHeight;d.value.setSize(r,i),p.value.aspect=r/i,p.value.setViewOffset(r,i,0,i*-.05,r,i),p.value.updateProjectionMatrix();let a=t.pitch*Math.PI/180,o=t.yaw*Math.PI/180,s=t.worldSize*1.2/Math.max(t.zoom,.001),c=s*Math.sin(a),l=s*Math.cos(a),u=l*Math.cos(o),f=l*Math.sin(o);p.value.position.set(u-t.dx,f-t.dy,c-t.dz),p.value.up.set(0,0,1),p.value.lookAt(-t.dx,-t.dy,-t.dz)},y=()=>{if(!m.value||!f.value||!d.value||!p.value)return;if(!r.value||!t.enabled){m.value.visible=!1,d.value.render(f.value,p.value);return}m.value.visible=!0,g&&(g.color.setHex(u(t.color)),g.opacity=t.alpha);let e=r.value;h&&(h.position.set(e.x,e.y,e.z),h.scale.setScalar(t.radius)),d.value.render(f.value,p.value)},b=()=>{x(),r.value=null,i.value=!1,s=!1,o=!0;let e=async()=>{let{data:n,error:c}=await Ro(t.topic,t.id);o&&(!c&&n?(r.value=n,i.value=!0,s=!1,pn(y)):c&&(i.value=!1,s=!0),a=setTimeout(e,s?$.retryInterval:l.value))};e()},x=()=>{o=!1,a!==null&&(clearTimeout(a),a=null),r.value=null,i.value=!1,s=!1};return H(()=>t.topic,(e,n)=>{e!==n&&t.enabled&&b()}),H(()=>t.enabled,e=>{e?(v(),t.topic?b():pn(y)):(x(),pn(y))}),H(l,()=>{t.enabled&&t.topic&&b()}),H(()=>[t.color,t.alpha,t.radius],()=>{t.enabled&&pn(y)}),H(()=>[t.pitch,t.yaw,t.zoom,t.worldSize,t.dx,t.dy,t.dz],()=>{t.enabled&&(v(),y())}),rr(()=>{t.enabled&&t.topic&&b(),pn(()=>{_(),c=new ResizeObserver(()=>{v(),y()});let e=n.value;e?.parentElement&&c.observe(e.parentElement)})}),sr(()=>{x(),c?.disconnect(),d.value?.dispose(),g?.dispose(),h?.geometry.dispose()}),(t,r)=>En((U(),W(`canvas`,{ref_key:`canvasRef`,ref:n,class:`point-canvas`},null,512)),[[La,e.enabled]])}}),[[`__scopeId`,`data-v-2a5f71c9`]]),dv=.2,fv=8,pv=.5,mv=2,hv=.4,gv=av(Hn({__name:`WrenchPanel`,props:{enabled:{type:Boolean,default:!0},topic:{default:``},forceColor:{default:`204; 51; 51`},torqueColor:{default:`204; 204; 51`},forceScale:{default:.6},torqueScale:{default:.6},forceRadius:{default:.02},torqueRadius:{default:.02},alpha:{default:.8},fps:{default:$.fps},id:{default:``},pitch:{default:$.pitch},yaw:{default:$.yaw},zoom:{default:$.zoom},worldSize:{default:$.worldSize},dx:{default:0},dy:{default:0},dz:{default:0}},setup(e){let t=e,n=B(null),r=B(null),i=B(!1),a=null,o=!1,s=!1,c=null,l=Ca(()=>{let e=1e3/$_(t.fps);return e>0?e:$.fps}),u=e=>{let t=e.split(`;`).map(e=>parseInt(e.trim()));return t.length>=3&&t.every(e=>!isNaN(e))?t[0]<<16|t[1]<<8|t[2]:16711680},d=V(null),f=V(null),p=V(null),m=V(null),h=null,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=null,E=Math.PI*1.5,D=()=>{let e=n.value;if(!e)return;let r=e.parentElement;if(!r)return;let i=r.clientWidth,a=r.clientHeight;d.value=new Q_({canvas:e,alpha:!0,antialias:!0}),d.value.setSize(i,a),d.value.setPixelRatio(window.devicePixelRatio||1),f.value=new bu,p.value=new lm(45,i/a,.1,1e3),m.value=new fu,f.value.add(m.value),ev().forEach(e=>{f.value?.add(e)}),v=new mp({color:u(t.forceColor),transparent:!0,opacity:t.alpha,roughness:$.roughness,metalness:$.metalness}),S=new mp({color:u(t.torqueColor),transparent:!0,opacity:t.alpha,roughness:$.roughness,metalness:$.metalness}),h=ee(v),g=h.children[0],_=h.children[1],m.value.add(h),y=ee(S),b=y.children[0],x=y.children[1],m.value.add(y),C=O(S),w=C.children[0],T=C.children[1],y.add(C),k(),j()},O=e=>{let t=new fu,n=fv,r=new ip(n,pv,8,48,E);r.rotateY(Math.PI/2);let i=new Z(r,e);t.add(i);let a=mv,o=new tp(1,a,8);o.translate(0,a/2,0),o.rotateX(-Math.PI/2);let s=n*Math.sin(E),c=-8*Math.cos(E);o.translate(0,s,c);let l=new Z(o,e);return t.add(l),t},ee=e=>{let t=new fu,n=new ep(1,1,1,16);n.rotateZ(-Math.PI/2),n.translate(.5,0,0);let r=new Z(n,e);t.add(r);let i=new tp(1,1,16);i.rotateZ(-Math.PI/2),i.translate(.5,0,0);let a=new Z(i,e);return t.add(a),t},k=()=>{if(!p.value||!n.value||!d.value)return;let e=n.value.parentElement;if(!e)return;let r=e.clientWidth,i=e.clientHeight;d.value.setSize(r,i),p.value.aspect=r/i,p.value.setViewOffset(r,i,0,i*-.05,r,i),p.value.updateProjectionMatrix();let a=t.pitch*Math.PI/180,o=t.yaw*Math.PI/180,s=t.worldSize*1.2/Math.max(t.zoom,.001),c=s*Math.sin(a),l=s*Math.cos(a),u=l*Math.cos(o),f=l*Math.sin(o);p.value.position.set(u-t.dx,f-t.dy,c-t.dz),p.value.up.set(0,0,1),p.value.lookAt(-t.dx,-t.dy,-t.dz)},A=(e,t,n,r,i,a,o)=>{let s=i*o;if(s<.001){e.visible=!1;return}e.visible=!0;let c=new J(1,0,0),l=new hl;l.setFromUnitVectors(c,r),e.setRotationFromQuaternion(l);let u=s*dv,d=s-u;t.scale.set(d,a,a),n.scale.set(u,a*2,a*2),n.position.set(d,0,0)},j=()=>{if(!m.value||!f.value||!d.value||!p.value)return;if(!r.value||!t.enabled){m.value.visible=!1,d.value.render(f.value,p.value);return}m.value.visible=!0,v&&(v.color.setHex(u(t.forceColor)),v.opacity=t.alpha),S&&(S.color.setHex(u(t.torqueColor)),S.opacity=t.alpha);let e=r.value,n=new J(e.force.x,e.force.y,e.force.z),i=n.length();if(h&&g&&_)if(i>.001){let e=n.clone().normalize();A(h,g,_,e,i,t.forceRadius,t.forceScale)}else h.visible=!1;let a=new J(e.torque.x,e.torque.y,e.torque.z),o=a.length();if(y&&b&&x)if(o>.001){let e=a.clone().normalize();if(A(y,b,x,e,o,t.torqueRadius,t.torqueScale),C){let e=o*t.torqueScale*(1-dv);C.position.set(e*hv,0,0),C.scale.setScalar(t.torqueRadius),C.visible=!0}}else y.visible=!1;d.value.render(f.value,p.value)},M=()=>{N(),r.value=null,i.value=!1,s=!1,o=!0;let e=async()=>{let{data:n,error:c}=await Ho(t.topic,t.id);o&&(!c&&n?(r.value=n,i.value=!0,s=!1,pn(j)):c&&(i.value=!1,s=!0),a=setTimeout(e,s?$.retryInterval:l.value))};e()},N=()=>{o=!1,a!==null&&(clearTimeout(a),a=null),r.value=null,i.value=!1,s=!1};return H(()=>t.topic,(e,n)=>{e!==n&&t.enabled&&M()}),H(()=>t.enabled,e=>{e?(k(),t.topic?M():pn(j)):(N(),pn(j))}),H(l,()=>{t.enabled&&t.topic&&M()}),H(()=>[t.forceColor,t.torqueColor,t.alpha,t.forceScale,t.torqueScale],()=>{t.enabled&&pn(j)}),H(()=>[t.pitch,t.yaw,t.zoom,t.worldSize,t.dx,t.dy,t.dz],()=>{t.enabled&&(k(),j())}),rr(()=>{t.enabled&&t.topic&&M(),pn(()=>{D(),c=new ResizeObserver(()=>{k(),j()});let e=n.value;e?.parentElement&&c.observe(e.parentElement)})}),sr(()=>{N(),c?.disconnect(),d.value?.dispose(),[v,S].forEach(e=>e?.dispose()),[g,_,b,x,w,T].forEach(e=>e?.geometry.dispose())}),(t,r)=>En((U(),W(`canvas`,{ref_key:`canvasRef`,ref:n,class:`wrench-canvas`},null,512)),[[La,e.enabled]])}}),[[`__scopeId`,`data-v-e918588a`]]),_v=.2,vv=8,yv=.5,bv=2,xv=.4,Sv=av(Hn({__name:`TwistPanel`,props:{enabled:{type:Boolean,default:!0},topic:{default:``},linearColor:{default:`51; 204; 51`},angularColor:{default:`51; 51; 204`},linearScale:{default:.6},angularScale:{default:.6},linearRadius:{default:.02},angularRadius:{default:.02},alpha:{default:.8},fps:{default:$.fps},id:{default:``},pitch:{default:$.pitch},yaw:{default:$.yaw},zoom:{default:$.zoom},worldSize:{default:$.worldSize},dx:{default:0},dy:{default:0},dz:{default:0}},setup(e){let t=e,n=B(null),r=B(null),i=B(!1),a=null,o=!1,s=!1,c=null,l=Ca(()=>{let e=1e3/$_(t.fps);return e>0?e:$.fps}),u=e=>{let t=e.split(`;`).map(e=>parseInt(e.trim()));return t.length>=3&&t.every(e=>!isNaN(e))?t[0]<<16|t[1]<<8|t[2]:16711680},d=V(null),f=V(null),p=V(null),m=V(null),h=null,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=null,E=Math.PI*1.5,D=()=>{let e=n.value;if(!e)return;let r=e.parentElement;if(!r)return;let i=r.clientWidth,a=r.clientHeight;d.value=new Q_({canvas:e,alpha:!0,antialias:!0}),d.value.setSize(i,a),d.value.setPixelRatio(window.devicePixelRatio||1),f.value=new bu,p.value=new lm(45,i/a,.1,1e3),m.value=new fu,f.value.add(m.value),ev().forEach(e=>{f.value?.add(e)}),v=new mp({color:u(t.linearColor),transparent:!0,opacity:t.alpha,roughness:$.roughness,metalness:$.metalness}),S=new mp({color:u(t.angularColor),transparent:!0,opacity:t.alpha,roughness:$.roughness,metalness:$.metalness}),h=ee(v),g=h.children[0],_=h.children[1],m.value.add(h),y=ee(S),b=y.children[0],x=y.children[1],m.value.add(y),C=O(S),w=C.children[0],T=C.children[1],y.add(C),k(),j()},O=e=>{let t=new fu,n=vv,r=new ip(n,yv,8,48,E);r.rotateY(Math.PI/2);let i=new Z(r,e);t.add(i);let a=bv,o=new tp(1,a,8);o.translate(0,a/2,0),o.rotateX(-Math.PI/2);let s=n*Math.sin(E),c=-8*Math.cos(E);o.translate(0,s,c);let l=new Z(o,e);return t.add(l),t},ee=e=>{let t=new fu,n=new ep(1,1,1,16);n.rotateZ(-Math.PI/2),n.translate(.5,0,0);let r=new Z(n,e);t.add(r);let i=new tp(1,1,16);i.rotateZ(-Math.PI/2),i.translate(.5,0,0);let a=new Z(i,e);return t.add(a),t},k=()=>{if(!p.value||!n.value||!d.value)return;let e=n.value.parentElement;if(!e)return;let r=e.clientWidth,i=e.clientHeight;d.value.setSize(r,i),p.value.aspect=r/i,p.value.setViewOffset(r,i,0,i*-.05,r,i),p.value.updateProjectionMatrix();let a=t.pitch*Math.PI/180,o=t.yaw*Math.PI/180,s=t.worldSize*1.2/Math.max(t.zoom,.001),c=s*Math.sin(a),l=s*Math.cos(a),u=l*Math.cos(o),f=l*Math.sin(o);p.value.position.set(u-t.dx,f-t.dy,c-t.dz),p.value.up.set(0,0,1),p.value.lookAt(-t.dx,-t.dy,-t.dz)},A=(e,t,n,r,i,a,o)=>{let s=i*o;if(s<.001){e.visible=!1;return}e.visible=!0;let c=new J(1,0,0),l=new hl;l.setFromUnitVectors(c,r),e.setRotationFromQuaternion(l);let u=s*_v,d=s-u;t.scale.set(d,a,a),n.scale.set(u,a*2,a*2),n.position.set(d,0,0)},j=()=>{if(!m.value||!f.value||!d.value||!p.value)return;if(!r.value||!t.enabled){m.value.visible=!1,d.value.render(f.value,p.value);return}m.value.visible=!0,v&&(v.color.setHex(u(t.linearColor)),v.opacity=t.alpha),S&&(S.color.setHex(u(t.angularColor)),S.opacity=t.alpha);let e=r.value,n=new J(e.linear.x,e.linear.y,e.linear.z),i=n.length();if(h&&g&&_)if(i>.001){let e=n.clone().normalize();A(h,g,_,e,i,t.linearRadius,t.linearScale)}else h.visible=!1;let a=new J(e.angular.x,e.angular.y,e.angular.z),o=a.length();if(y&&b&&x)if(o>.001){let e=a.clone().normalize();if(A(y,b,x,e,o,t.angularRadius,t.angularScale),C){let e=o*t.angularScale*(1-_v);C.position.set(e*xv,0,0),C.scale.setScalar(t.angularRadius),C.visible=!0}}else y.visible=!1;d.value.render(f.value,p.value)},M=()=>{N(),r.value=null,i.value=!1,s=!1,o=!0;let e=async()=>{let{data:n,error:c}=await Uo(t.topic,t.id);o&&(!c&&n?(r.value=n,i.value=!0,s=!1,pn(j)):c&&(i.value=!1,s=!0),a=setTimeout(e,s?$.retryInterval:l.value))};e()},N=()=>{o=!1,a!==null&&(clearTimeout(a),a=null),r.value=null,i.value=!1,s=!1};return H(()=>t.topic,(e,n)=>{e!==n&&t.enabled&&M()}),H(()=>t.enabled,e=>{e?(k(),t.topic?M():pn(j)):(N(),pn(j))}),H(l,()=>{t.enabled&&t.topic&&M()}),H(()=>[t.linearColor,t.angularColor,t.alpha,t.linearScale,t.angularScale],()=>{t.enabled&&pn(j)}),H(()=>[t.pitch,t.yaw,t.zoom,t.worldSize,t.dx,t.dy,t.dz],()=>{t.enabled&&(k(),j())}),rr(()=>{t.enabled&&t.topic&&M(),pn(()=>{D(),c=new ResizeObserver(()=>{k(),j()});let e=n.value;e?.parentElement&&c.observe(e.parentElement)})}),sr(()=>{N(),c?.disconnect(),d.value?.dispose(),[v,S].forEach(e=>e?.dispose()),[g,_,b,x,w,T].forEach(e=>e?.geometry.dispose())}),(t,r)=>En((U(),W(`canvas`,{ref_key:`canvasRef`,ref:n,class:`twist-canvas`},null,512)),[[La,e.enabled]])}}),[[`__scopeId`,`data-v-0dee98ca`]]),Cv=av(Hn({__name:`PosePanel`,props:{enabled:{type:Boolean,default:!0},topic:{default:``},color:{default:`255; 25; 0`},alpha:{default:.8},fps:{default:$.fps},id:{default:``},pitch:{default:$.pitch},yaw:{default:$.yaw},zoom:{default:$.zoom},worldSize:{default:$.worldSize},headLength:{default:.2},headRadius:{default:.1},shaftLength:{default:.8},shaftRadius:{default:.02},dx:{default:0},dy:{default:0},dz:{default:0}},setup(e){let t=e,n=B(null),r=B(null),i=B(!1),a=null,o=!1,s=!1,c=null,l=Ca(()=>{let e=1e3/$_(t.fps);return e>0?e:$.fps}),u=e=>{let t=e.split(`;`).map(e=>parseInt(e.trim()));return t.length>=3&&t.every(e=>!isNaN(e))?t[0]<<16|t[1]<<8|t[2]:16718080},d=V(null),f=V(null),p=V(null),m=V(null),h=null,g=null,_=null,v=null,y=null,b=()=>{let e=n.value;if(!e)return;let r=e.parentElement;if(!r)return;let i=r.clientWidth,a=r.clientHeight;d.value=new Q_({canvas:e,alpha:!0,antialias:!0}),d.value.setSize(i,a),d.value.setPixelRatio(window.devicePixelRatio||1),f.value=new bu,p.value=new lm(45,i/a,.1,1e3),m.value=new fu,f.value.add(m.value),ev().forEach(e=>{f.value?.add(e)}),y=new mp({color:u(t.color),transparent:!0,opacity:t.alpha,roughness:$.roughness,metalness:$.metalness}),h=new Z(new rp(.03,16,16),y),m.value.add(h),g=new fu;let o=new ep(.8,1,1,16);o.rotateZ(-Math.PI/2),o.translate(.5,0,0),_=new Z(o,y),g.add(_);let s=new tp(.5,1,16);s.rotateZ(-Math.PI/2),s.translate(.5,0,0),v=new Z(s,y),g.add(v),m.value.add(g),x(),S()},x=()=>{if(!p.value||!n.value||!d.value)return;let e=n.value.parentElement;if(!e)return;let r=e.clientWidth,i=e.clientHeight;d.value.setSize(r,i),p.value.aspect=r/i,p.value.setViewOffset(r,i,0,i*-.05,r,i),p.value.updateProjectionMatrix();let a=t.pitch*Math.PI/180,o=t.yaw*Math.PI/180,s=t.worldSize*1.2/Math.max(t.zoom,.001),c=s*Math.sin(a),l=s*Math.cos(a),u=l*Math.cos(o),f=l*Math.sin(o);p.value.position.set(u-t.dx,f-t.dy,c-t.dz),p.value.up.set(0,0,1),p.value.lookAt(-t.dx,-t.dy,-t.dz)},S=()=>{if(!m.value||!f.value||!d.value||!p.value)return;if(!r.value||!t.enabled){m.value.visible=!1,d.value.render(f.value,p.value);return}m.value.visible=!0,y&&(y.color.setHex(u(t.color)),y.opacity=t.alpha);let e=r.value,n=e.position.x,i=e.position.y,a=e.position.z,o=e.orientation.x,s=e.orientation.y,c=e.orientation.z,l=e.orientation.w,b=Math.sqrt(o*o+s*s+c*c+l*l);b>0?(o/=b,s/=b,c/=b,l/=b):(o=0,s=0,c=0,l=1);let x=2*Math.acos(Math.min(1,Math.max(-1,Math.abs(l))))/Math.PI;if(h&&h.position.set(n,i,a),g&&_&&v)if(x>.001){g.visible=!0,g.position.set(n,i,a);let e=new hl(o,s,c,l);g.setRotationFromQuaternion(e);let r=t.shaftLength*x,u=t.headLength*x,d=t.headRadius*Math.min(1,x*3),f=t.shaftRadius*Math.min(1,x*3);_.scale.set(r,f,f),v.scale.set(u,d,d),v.position.set(r,0,0)}else g.visible=!1;d.value.render(f.value,p.value)},C=()=>{w(),r.value=null,i.value=!1,s=!1,o=!0;let e=async()=>{let{data:n,error:c}=await zo(t.topic,t.id);o&&(!c&&n?(r.value=n,i.value=!0,s=!1,pn(S)):c&&(i.value=!1,s=!0),a=setTimeout(e,s?$.retryInterval:l.value))};e()},w=()=>{o=!1,a!==null&&(clearTimeout(a),a=null),r.value=null,i.value=!1,s=!1};return H(()=>t.topic,(e,n)=>{e!==n&&t.enabled&&C()}),H(()=>t.enabled,e=>{e?(x(),t.topic?C():pn(S)):(w(),pn(S))}),H(l,()=>{t.enabled&&t.topic&&C()}),H(()=>[t.color,t.alpha,t.headLength,t.headRadius,t.shaftLength,t.shaftRadius],()=>{t.enabled&&pn(S)}),H(()=>[t.pitch,t.yaw,t.zoom,t.worldSize,t.dx,t.dy,t.dz],()=>{t.enabled&&(x(),S())}),rr(()=>{t.enabled&&t.topic&&C(),pn(()=>{b(),c=new ResizeObserver(()=>{x(),S()});let e=n.value;e?.parentElement&&c.observe(e.parentElement)})}),sr(()=>{w(),c?.disconnect(),d.value?.dispose(),y?.dispose(),[h,_,v].forEach(e=>e?.geometry.dispose())}),(t,r)=>En((U(),W(`canvas`,{ref_key:`canvasRef`,ref:n,class:`pose-canvas`},null,512)),[[La,e.enabled]])}}),[[`__scopeId`,`data-v-ff9f3470`]]),wv=av(Hn({__name:`TFPanel`,props:{enabled:{type:Boolean,default:!0},topic:{default:``},fixedFrame:{default:`map`},size:{default:.4},showName:{type:Boolean,default:!0},showAxes:{type:Boolean,default:!0},fps:{default:$.fps},id:{default:``},pitch:{default:$.pitch},yaw:{default:$.yaw},zoom:{default:$.zoom},worldSize:{default:$.worldSize},dx:{default:0},dy:{default:0},dz:{default:0}},emits:[`status-change`],setup(e,{emit:t}){let n=e,r=t,i=B(null),a=B(null),o=B(!1),s=null,c=!1,l=null,u=V(null),d=V(null),f=V(null),p=V(null),m=new Map,h=Ca(()=>{let e=$_(n.fps);return e>0?e:$.fps}),g=(e,t)=>{let n=document.createElement(`canvas`),r=n.getContext(`2d`),i=`${t}px Arial`;r&&(r.font=i,n.width=r.measureText(e).width+10,n.height=t+10,r.font=i,r.fillStyle=`rgba(0, 0, 0, 0)`,r.fillRect(0,0,n.width,n.height),r.fillStyle=`white`,r.strokeText(e,5,t),r.fillText(e,5,t));let a=new Yf(n);return a.minFilter=os,new Pd(new bd({map:a,depthTest:!1,depthWrite:!1}))},_=null,v=null,y=null,b=null,x=null,S=e=>e?.dispose(),C=e=>{for(;e.children.length>0;)C(e.children[0]),e.remove(e.children[0]);if(e.isMesh){let t=e;t.geometry?.dispose();let n=t.material;Array.isArray(n)?n.forEach(e=>e.dispose()):n&&n.dispose()}else if(e.isSprite){let t=e;t.material.map?.dispose(),t.material.dispose()}},w=()=>{if(!p.value)return;let e=p.value;for(;e.children.length>0;)C(e.children[0]),e.remove(e.children[0]);m.clear()},T=()=>{if(!p.value)return;let e=p.value;if(w(),!a.value||!a.value.length)return;let t=n.size/20;_||(_=new mp({color:$.color.r}),v=new mp({color:$.color.g}),y=new mp({color:$.color.b}),b=new mp({color:16776960}),x=new mp({color:16738740}));let i=[],o=new Set,s=new Map;if(a.value.forEach(e=>{let t=e.child_frame_id,n=e.frame_id;o.add(t),o.add(n);let{x:r,y:i,z:a}=e.translation,{x:c,y:l,z:u,w:d}=e.rotation,f=new J(r,i,a),p=new hl(c,l,u,d);s.has(n)||s.set(n,[]),s.get(n).push({neighbor:t,pos:f.clone(),quat:p.clone(),forward:!0}),s.has(t)||s.set(t,[]),s.get(t).push({neighbor:n,pos:f.clone(),quat:p.clone(),forward:!1})}),!o.has(n.fixedFrame)&&a.value.length>0){r(`status-change`,`固定坐标系不存在`);return}else r(`status-change`,`正常`);let c=new Map;c.set(n.fixedFrame,{pos:new J,quat:new hl});let l=[n.fixedFrame];for(;l.length>0;){let e=l.shift(),t=c.get(e),n=s.get(e)||[];for(let e of n){if(c.has(e.neighbor))continue;let n,r;if(e.forward)r=t.quat.clone().multiply(e.quat),n=e.pos.clone().applyQuaternion(t.quat).add(t.pos);else{let i=e.quat.clone().invert();r=t.quat.clone().multiply(i),n=t.pos.clone().sub(e.pos.clone().applyQuaternion(r))}c.set(e.neighbor,{pos:n,quat:r}),l.push(e.neighbor)}}c.forEach(({pos:r,quat:a},o)=>{let s=new fu;if(m.set(o,s),s.position.copy(r),s.quaternion.copy(a),e.add(s),n.showAxes){let e=new ep(t,t,n.size,16),r=new Z(e,_);r.position.x=n.size/2,r.rotation.z=-Math.PI/2,s.add(r);let i=new Z(e,v);i.position.y=n.size/2,s.add(i);let a=new Z(e,y);a.position.z=n.size/2,a.rotation.x=Math.PI/2,s.add(a)}if(n.showName){let e=g(o,32),r=e.material.map.image,a=r.width/r.height,c=n.size*.8;e.scale.set(c*a,c,1),e.position.set(0,0,n.size+t*3),s.add(e),i.push(e)}});let u=t*.6;a.value.forEach(t=>{let n=c.get(t.child_frame_id),r=c.get(t.frame_id);if(!n||!r)return;let i=n.pos,a=r.pos,o=new J().subVectors(a,i),s=o.length();if(s<1e-6)return;o.normalize();let l=s*.15,d=s-l,f=new Z(new ep(u,u,d,8),b),p=i.clone().add(o.clone().multiplyScalar(d/2));f.position.copy(p),f.quaternion.setFromUnitVectors(new J(0,1,0),o),e.add(f);let m=new Z(new tp(u*2.5,l,8),x),h=i.clone().add(o.clone().multiplyScalar(d+l/2));m.position.copy(h),m.quaternion.setFromUnitVectors(new J(0,1,0),o),e.add(m)})},E=()=>{if(!u.value||!d.value||!f.value||!i.value)return;let e=i.value.parentElement;if(!e)return;let t=e.clientWidth,r=e.clientHeight;u.value.setSize(t,r);let a=f.value;a.aspect=t/r,a.setViewOffset(t,r,0,r*-.05,t,r),a.updateProjectionMatrix();let o=n.pitch*Math.PI/180,s=n.yaw*Math.PI/180,c=n.worldSize*1.2/Math.max(n.zoom,.001),l=c*Math.sin(o),p=c*Math.cos(o),m=p*Math.cos(s),h=p*Math.sin(s);a.position.set(m-n.dx,h-n.dy,l-n.dz),a.up.set(0,0,1),a.lookAt(-n.dx,-n.dy,-n.dz),u.value.render(d.value,a)},D=()=>{let e=i.value;if(!e)return;let t=e.parentElement;if(!t)return;let n=t.clientWidth,r=t.clientHeight,a=new Q_({canvas:e,alpha:!0,antialias:!0});a.setSize(n,r),a.setPixelRatio(window.devicePixelRatio||1),u.value=a;let o=new bu;d.value=o;let s=new lm(45,n/r,.1,1e3);f.value=s,ev().forEach(e=>o.add(e)),p.value=new fu,o.add(p.value),l=new ResizeObserver(()=>{E()}),l.observe(t),E()},O=async()=>{if(!c||!n.enabled)return;if(!o.value){o.value=!0;let e=await Go(`tf`,n.topic,n.id);console.log(`Fetched TF data:`,e),!e.error&&e.data&&(a.value=e.data,T()),o.value=!1}E();let e=1e3/h.value;s=setTimeout(O,e)};return H(()=>n.enabled,e=>{e?(c=!0,T(),pn(()=>{E(),s||O()})):(c=!1,s&&=(clearTimeout(s),null),w())}),H([()=>n.size,()=>n.showAxes,()=>n.showName],()=>{T(),E()}),H([()=>n.pitch,()=>n.yaw,()=>n.zoom,()=>n.worldSize,()=>n.dx,()=>n.dy,()=>n.dz],()=>{n.enabled&&E()}),rr(()=>{pn(()=>{D(),T(),n.enabled&&(c=!0,O())})}),sr(()=>{c=!1,s&&clearTimeout(s),l?.disconnect(),w(),[_,v,y,b,x].forEach(S),_=null,v=null,y=null,b=null,x=null,u.value?.dispose(),u.value=null,d.value=null,f.value=null,p.value=null}),(t,n)=>En((U(),W(`canvas`,{ref_key:`canvasRef`,ref:i,class:`tf-canvas`},null,512)),[[La,e.enabled]])}}),[[`__scopeId`,`data-v-1f24b4af`]]),Tv=class extends Up{constructor(e){super(e)}load(e,t,n,r){let i=this,a=new Kp(this.manager);a.setPath(this.path),a.setResponseType(`arraybuffer`),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(n){try{t(i.parse(n))}catch(t){r?r(t):console.error(t),i.manager.itemError(e)}},n,r)}parse(e){function t(e){let t=new DataView(e);if(84+t.getUint32(80,!0)*50===t.byteLength)return!0;let r=[115,111,108,105,100];for(let e=0;e<5;e++)if(n(r,t,e))return!1;return!0}function n(e,t,n){for(let r=0,i=e.length;r<i;r++)if(e[r]!==t.getUint8(n+r))return!1;return!0}function r(e){let t=new DataView(e),n=t.getUint32(80,!0),r,i,a,o=!1,s,c,l,u,d;for(let e=0;e<70;e++)t.getUint32(e,!1)==1129270351&&t.getUint8(e+4)==82&&t.getUint8(e+5)==61&&(o=!0,s=new Float32Array(n*3*3),c=t.getUint8(e+6)/255,l=t.getUint8(e+7)/255,u=t.getUint8(e+8)/255,d=t.getUint8(e+9)/255);let f=new md,p=new Float32Array(n*3*3),m=new Float32Array(n*3*3),h=new X;for(let e=0;e<n;e++){let n=84+e*50,d=t.getFloat32(n,!0),f=t.getFloat32(n+4,!0),g=t.getFloat32(n+8,!0);if(o){let e=t.getUint16(n+48,!0);e&32768?(r=c,i=l,a=u):(r=(e&31)/31,i=(e>>5&31)/31,a=(e>>10&31)/31)}for(let c=1;c<=3;c++){let l=n+c*12,u=e*3*3+(c-1)*3;p[u]=t.getFloat32(l,!0),p[u+1]=t.getFloat32(l+4,!0),p[u+2]=t.getFloat32(l+8,!0),m[u]=d,m[u+1]=f,m[u+2]=g,o&&(h.setRGB(r,i,a,Cc),s[u]=h.r,s[u+1]=h.g,s[u+2]=h.b)}}return f.setAttribute(`position`,new $u(p,3)),f.setAttribute(`normal`,new $u(m,3)),o&&(f.setAttribute(`color`,new $u(s,3)),f.hasColors=!0,f.alpha=d),f}function i(e){let t=new md,n=/solid([\s\S]*?)endsolid/g,r=/facet([\s\S]*?)endfacet/g,i=/solid\s(.+)/,a=0,o=RegExp(`vertex[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)`,`g`),s=RegExp(`normal[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)`,`g`),c=[],l=[],u=[],d=new J,f,p=0,m=0,h=0;for(;(f=n.exec(e))!==null;){m=h;let e=f[0],n=(f=i.exec(e))===null?``:f[1];for(u.push(n);(f=r.exec(e))!==null;){let e=0,t=0,n=f[0];for(;(f=s.exec(n))!==null;)d.x=parseFloat(f[1]),d.y=parseFloat(f[2]),d.z=parseFloat(f[3]),t++;for(;(f=o.exec(n))!==null;)c.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),l.push(d.x,d.y,d.z),e++,h++;t!==1&&console.error(`THREE.STLLoader: Something isn't right with the normal of face number `+a),e!==3&&console.error(`THREE.STLLoader: Something isn't right with the vertices of face number `+a),a++}let g=m,_=h-m;t.userData.groupNames=u,t.addGroup(g,_,p),p++}return t.setAttribute(`position`,new nd(c,3)),t.setAttribute(`normal`,new nd(l,3)),t}function a(e){return typeof e==`string`?e:new TextDecoder().decode(e)}function o(e){if(typeof e==`string`){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer||t}else return e}let s=o(e);return t(s)?r(s):i(a(e))}},Ev=av(Hn({__name:`RobotModelPanel`,props:{enabled:{type:Boolean,default:!0},name:{},fixedFrame:{default:`map`},alpha:{default:1},fps:{default:$.fps},id:{default:``},pitch:{default:$.pitch},yaw:{default:$.yaw},zoom:{default:$.zoom},worldSize:{default:$.worldSize},dx:{default:0},dy:{default:0},dz:{default:0}},emits:[`status-change`],setup(e,{emit:t}){let n=e,r=t,i=``,a=e=>{e!==i&&(i=e,r(`status-change`,e))},o=B(null),s=B(null),c=B([]),l=B([]),u=B(!1),d=null,f=!1,p=!1,m=null,h=V(null),g=V(null),_=V(null),v=V(null),y=Ca(()=>{let e=$_(n.fps);return e>0?e:$.fps}),b=()=>{let e=new Map;l.value.forEach(t=>e.set(t.child_frame_id,t)),c.value.forEach(t=>e.set(t.child_frame_id,t)),s.value=Array.from(e.values())},x=[],S=null,C=``,w=new Map,T=new Tv,E=e=>{let t=e.trim().split(/\s+/).map(Number);return new Jl(t[0]||0,t[1]||0,t[2]||0,`XYZ`)},D=e=>{let t=e.trim().split(/\s+/).map(Number);return new J(t[0]||0,t[1]||0,t[2]||0)},O=e=>{let t=new DOMParser().parseFromString(e,`text/xml`),n=[],r=new Map;return t.querySelectorAll(`robot > material`).forEach(e=>{let t=e.getAttribute(`name`),n=e.querySelector(`color`);if(t&&n){let e=n.getAttribute(`rgba`)?.trim().split(/\s+/).map(Number);e&&e.length>=3&&r.set(t,{r:e[0],g:e[1],b:e[2],a:e[3]??1})}}),t.querySelectorAll(`link`).forEach(e=>{let t=e.getAttribute(`name`);if(!t)return;let i=[];e.querySelectorAll(`visual`).forEach(e=>{let t=new J,n=new Jl(0,0,0,`XYZ`),a=e.querySelector(`origin`);if(a){let e=a.getAttribute(`xyz`),r=a.getAttribute(`rpy`);e&&(t=D(e)),r&&(n=E(r))}let o=null,s=e.querySelector(`material`);if(s){let e=s.querySelector(`color`);if(e){let t=e.getAttribute(`rgba`)?.trim().split(/\s+/).map(Number);t&&t.length>=3&&(o={r:t[0],g:t[1],b:t[2],a:t[3]??1})}if(!o){let e=s.getAttribute(`name`);e&&r.has(e)&&(o=r.get(e))}}let c=e.querySelector(`geometry`);if(!c)return;let l=c.querySelector(`box`),u=c.querySelector(`cylinder`),d=c.querySelector(`sphere`),f=c.querySelector(`mesh`);if(l){let e=l.getAttribute(`size`)?.trim().split(/\s+/).map(Number)||[1,1,1];i.push({type:`box`,size:{x:e[0]||1,y:e[1]||1,z:e[2]||1},origin:{xyz:t,rpy:n},color:o})}else if(u)i.push({type:`cylinder`,radius:parseFloat(u.getAttribute(`radius`)||`0.05`),length:parseFloat(u.getAttribute(`length`)||`0.1`),origin:{xyz:t,rpy:n},color:o});else if(d)i.push({type:`sphere`,radius:parseFloat(d.getAttribute(`radius`)||`0.05`),origin:{xyz:t,rpy:n},color:o});else if(f){let e=f.getAttribute(`filename`)||``,r=f.getAttribute(`scale`),a={x:1,y:1,z:1};if(r){let e=r.trim().split(/\s+/).map(Number);a={x:e[0]||1,y:e[1]||1,z:e[2]||1}}i.push({type:`mesh`,filename:e,scale:a,origin:{xyz:t,rpy:n},color:o})}}),n.push({name:t,visuals:i})}),n},ee={r:.8,g:.8,b:.8,a:1},k=async()=>{let e=new Set;for(let t of x)for(let n of t.visuals)n.type===`mesh`&&n.filename&&e.add(n.filename);let t=Array.from(e).filter(e=>!w.has(e)).map(async e=>{try{let t=await qo(Lo(e,C),n.id);if(t.error||!t.data){console.warn(`[RobotModel] Cannot load mesh: ${e}`);return}let r=T.parse(t.data);r.computeVertexNormals(),w.set(e,r)}catch(t){console.warn(`[RobotModel] Cannot load mesh: ${e}`,t)}});await Promise.all(t)},A=(e,t)=>{let n=null;switch(e.type){case`box`:n=new $f(e.size.x,e.size.y,e.size.z);break;case`cylinder`:n=new ep(e.radius,e.radius,e.length,32);break;case`sphere`:n=new rp(e.radius,32,24);break;case`mesh`:{let t=e.filename?w.get(e.filename):null;n=t?t.clone():new rp(.02,16,12);break}}if(!n)return null;let r=e.color||ee,i=new mp({color:new X(r.r,r.g,r.b),roughness:$.roughness,metalness:$.metalness,transparent:t<1||r.a<1,opacity:Math.min(t,r.a)}),a=new Z(n,i);e.type===`cylinder`&&(a.rotation.x=Math.PI/2),e.type===`mesh`&&e.scale&&a.scale.set(e.scale.x,e.scale.y,e.scale.z);let o=new fu;return o.position.copy(e.origin.xyz),o.rotation.copy(e.origin.rpy),o.add(a),o},j=e=>{for(;e.children.length>0;)j(e.children[0]),e.remove(e.children[0]);if(e.isMesh){let t=e;t.geometry?.dispose();let n=t.material;Array.isArray(n)?n.forEach(e=>e.dispose()):n&&n.dispose()}},M=()=>{if(!v.value)return;let e=v.value;for(;e.children.length>0;)j(e.children[0]),e.remove(e.children[0])},N=()=>{if(!v.value||(M(),!s.value||!s.value.length||x.length===0))return;let e=new Set,t=new Map;if(s.value.forEach(n=>{let r=n.child_frame_id,i=n.frame_id;e.add(r),e.add(i);let{x:a,y:o,z:s}=n.translation,{x:c,y:l,z:u,w:d}=n.rotation,f=new J(a,o,s),p=new hl(c,l,u,d);t.has(i)||t.set(i,[]),t.get(i).push({neighbor:r,pos:f.clone(),quat:p.clone(),forward:!0}),t.has(r)||t.set(r,[]),t.get(r).push({neighbor:i,pos:f.clone(),quat:p.clone(),forward:!1})}),!e.has(n.fixedFrame)&&s.value.length>0){a(`固定坐标系不存在`);return}else a(`正常`);let r=new Map;r.set(n.fixedFrame,{pos:new J,quat:new hl});let i=[n.fixedFrame];for(;i.length>0;){let e=i.shift(),n=r.get(e),a=t.get(e)||[];for(let e of a){if(r.has(e.neighbor))continue;let t,a;if(e.forward)a=n.quat.clone().multiply(e.quat),t=e.pos.clone().applyQuaternion(n.quat).add(n.pos);else{let r=e.quat.clone().invert();a=n.quat.clone().multiply(r),t=n.pos.clone().sub(e.pos.clone().applyQuaternion(a))}r.set(e.neighbor,{pos:t,quat:a}),i.push(e.neighbor)}}for(let e of x){let t=r.get(e.name);if(!t||e.visuals.length===0)continue;let i=new fu;i.position.copy(t.pos),i.quaternion.copy(t.quat);for(let t of e.visuals){let e=A(t,n.alpha);e&&i.add(e)}v.value.add(i)}},P=()=>{if(!h.value||!g.value||!_.value||!o.value)return;let e=o.value.parentElement;if(!e)return;let t=e.clientWidth,r=e.clientHeight;h.value.setSize(t,r);let i=_.value;i.aspect=t/r,i.setViewOffset(t,r,0,r*-.05,t,r),i.updateProjectionMatrix();let a=n.pitch*Math.PI/180,s=n.yaw*Math.PI/180,c=n.worldSize*1.2/Math.max(n.zoom,.001),l=c*Math.sin(a),u=c*Math.cos(a),d=u*Math.cos(s),f=u*Math.sin(s);i.position.set(d-n.dx,f-n.dy,l-n.dz),i.up.set(0,0,1),i.lookAt(-n.dx,-n.dy,-n.dz),h.value.render(g.value,i)},te=()=>{let e=o.value;if(!e)return;let t=e.parentElement;if(!t)return;let n=t.clientWidth,r=t.clientHeight,i=new Q_({canvas:e,alpha:!0,antialias:!0});i.setSize(n,r),i.setPixelRatio(window.devicePixelRatio||1),h.value=i;let a=new bu;g.value=a;let s=new lm(45,n/r,.1,1e3);_.value=s,ev().forEach(e=>a.add(e)),v.value=new fu,a.add(v.value),m=new ResizeObserver(()=>{P()}),m.observe(t),P()},ne=async()=>{if(!f||!n.enabled)return;if(!n.name){a(`未设置`),d=setTimeout(ne,$.retryInterval);return}if(!u.value){u.value=!0;let e=!1;if(n.name&&S===null){let t=await Ko(`${n.name}/robot_description`);!t.error&&t.data?(S=t.data.urdf,C=t.data.mesh_path,x=O(t.data.urdf),await k()):t.error&&(e=!0)}if(!e){let t=await Go(`robotmodel/tf`,`${n.name}/tf`,n.id),r=await Go(`robotmodel/tf_static`,`${n.name}/tf_static`,n.id),i=!1;!t.error&&t.data?(c.value=t.data,i=!0):t.error&&(e=!0),!r.error&&r.data?(l.value=r.data,i=!0):r.error&&(e=!0),i&&(b(),N())}p=e,p&&a(`无法获取`),u.value=!1}P();let e=p?$.retryInterval:1e3/y.value;d=setTimeout(ne,e)};return H(()=>n.enabled,e=>{e?(f=!0,N(),pn(()=>{P(),d||ne()})):(f=!1,d&&=(clearTimeout(d),null),M())}),H(()=>n.name,()=>{S=null,C=``,x=[],s.value=null,c.value=[],l.value=[],w.forEach(e=>e.dispose()),w.clear(),M()}),H(()=>n.alpha,()=>{N(),P()}),H([()=>n.pitch,()=>n.yaw,()=>n.zoom,()=>n.worldSize,()=>n.dx,()=>n.dy,()=>n.dz],()=>{n.enabled&&P()}),rr(()=>{pn(()=>{te(),n.enabled&&(f=!0,ne())})}),sr(()=>{f=!1,d&&clearTimeout(d),m&&m.disconnect(),M(),w.forEach(e=>e.dispose()),w.clear(),h.value?.dispose(),h.value=null,g.value=null,_.value=null,v.value=null}),(t,n)=>En((U(),W(`canvas`,{ref_key:`canvasRef`,ref:o,class:`robotmodel-canvas`},null,512)),[[La,e.enabled]])}}),[[`__scopeId`,`data-v-bb8b147c`]]),Dv=class extends Yp{constructor(e){super(e)}parse(e){function t(e){switch(e.image_type){case d:case m:if(e.colormap_length>256||e.colormap_size!==24||e.colormap_type!==1)throw Error(`THREE.TGALoader: Invalid type colormap data for indexed type.`);break;case f:case p:case h:case g:if(e.colormap_type)throw Error(`THREE.TGALoader: Invalid type colormap data for colormap type.`);break;case u:throw Error(`THREE.TGALoader: No data.`);default:throw Error(`THREE.TGALoader: Invalid type `+e.image_type)}if(e.width<=0||e.height<=0)throw Error(`THREE.TGALoader: Invalid image size.`);if(e.pixel_size!==8&&e.pixel_size!==16&&e.pixel_size!==24&&e.pixel_size!==32)throw Error(`THREE.TGALoader: Invalid pixel size `+e.pixel_size)}function n(e,t,n,r,i){let a,o,s=n.pixel_size>>3,c=n.width*n.height*s;if(t&&(o=i.subarray(r,r+=n.colormap_length*(n.colormap_size>>3))),e){a=new Uint8Array(c);let e,t,n,o=0,l=new Uint8Array(s);for(;o<c;)if(e=i[r++],t=(e&127)+1,e&128){for(n=0;n<s;++n)l[n]=i[r++];for(n=0;n<t;++n)a.set(l,o+n*s);o+=s*t}else{for(t*=s,n=0;n<t;++n)a[o+n]=i[r++];o+=t}}else a=i.subarray(r,r+=t?n.width*n.height:c);return{pixel_data:a,palettes:o}}function r(e,t,n,r,i,a,o,s,c){let l=c,u,d=0,f,p,m=T.width;for(p=t;p!==r;p+=n)for(f=i;f!==o;f+=a,d++)u=s[d],e[(f+m*p)*4+3]=255,e[(f+m*p)*4+2]=l[u*3+0],e[(f+m*p)*4+1]=l[u*3+1],e[(f+m*p)*4+0]=l[u*3+2];return e}function i(e,t,n,r,i,a,o,s){let c,l=0,u,d,f=T.width;for(d=t;d!==r;d+=n)for(u=i;u!==o;u+=a,l+=2)c=s[l+0]+(s[l+1]<<8),e[(u+f*d)*4+0]=(c&31744)>>7,e[(u+f*d)*4+1]=(c&992)>>2,e[(u+f*d)*4+2]=(c&31)<<3,e[(u+f*d)*4+3]=c&32768?0:255;return e}function a(e,t,n,r,i,a,o,s){let c=0,l,u,d=T.width;for(u=t;u!==r;u+=n)for(l=i;l!==o;l+=a,c+=3)e[(l+d*u)*4+3]=255,e[(l+d*u)*4+2]=s[c+0],e[(l+d*u)*4+1]=s[c+1],e[(l+d*u)*4+0]=s[c+2];return e}function o(e,t,n,r,i,a,o,s){let c=0,l,u,d=T.width;for(u=t;u!==r;u+=n)for(l=i;l!==o;l+=a,c+=4)e[(l+d*u)*4+2]=s[c+0],e[(l+d*u)*4+1]=s[c+1],e[(l+d*u)*4+0]=s[c+2],e[(l+d*u)*4+3]=s[c+3];return e}function s(e,t,n,r,i,a,o,s){let c,l=0,u,d,f=T.width;for(d=t;d!==r;d+=n)for(u=i;u!==o;u+=a,l++)c=s[l],e[(u+f*d)*4+0]=c,e[(u+f*d)*4+1]=c,e[(u+f*d)*4+2]=c,e[(u+f*d)*4+3]=255;return e}function c(e,t,n,r,i,a,o,s){let c=0,l,u,d=T.width;for(u=t;u!==r;u+=n)for(l=i;l!==o;l+=a,c+=2)e[(l+d*u)*4+0]=s[c+0],e[(l+d*u)*4+1]=s[c+0],e[(l+d*u)*4+2]=s[c+0],e[(l+d*u)*4+3]=s[c+1];return e}function l(e,t,n,l,u){let d,f,p,m,h,g;switch((T.flags&_)>>v){default:case x:d=0,p=1,h=t,f=0,m=1,g=n;break;case y:d=0,p=1,h=t,f=n-1,m=-1,g=-1;break;case S:d=t-1,p=-1,h=-1,f=0,m=1,g=n;break;case b:d=t-1,p=-1,h=-1,f=n-1,m=-1,g=-1;break}if(O)switch(T.pixel_size){case 8:s(e,f,m,g,d,p,h,l);break;case 16:c(e,f,m,g,d,p,h,l);break;default:throw Error(`THREE.TGALoader: Format not supported.`)}else switch(T.pixel_size){case 8:r(e,f,m,g,d,p,h,l,u);break;case 16:i(e,f,m,g,d,p,h,l);break;case 24:a(e,f,m,g,d,p,h,l);break;case 32:o(e,f,m,g,d,p,h,l);break;default:throw Error(`THREE.TGALoader: Format not supported.`)}return e}let u=0,d=1,f=2,p=3,m=9,h=10,g=11,_=48,v=4,y=0,b=1,x=2,S=3;if(e.length<19)throw Error(`THREE.TGALoader: Not enough data to contain header.`);let C=0,w=new Uint8Array(e),T={id_length:w[C++],colormap_type:w[C++],image_type:w[C++],colormap_index:w[C++]|w[C++]<<8,colormap_length:w[C++]|w[C++]<<8,colormap_size:w[C++],origin:[w[C++]|w[C++]<<8,w[C++]|w[C++]<<8],width:w[C++]|w[C++]<<8,height:w[C++]|w[C++]<<8,pixel_size:w[C++],flags:w[C++]};if(t(T),T.id_length+C>e.length)throw Error(`THREE.TGALoader: No data.`);C+=T.id_length;let E=!1,D=!1,O=!1;switch(T.image_type){case 9:E=!0,D=!0;break;case 1:D=!0;break;case 10:E=!0;break;case 2:break;case 11:E=!0,O=!0;break;case 3:O=!0;break}let ee=new Uint8Array(T.width*T.height*4),k=n(E,D,T,C,w);return l(ee,T.width,T.height,k.pixel_data,k.palettes),{data:ee,width:T.width,height:T.height,flipY:!0,generateMipmaps:!0,minFilter:cs}}};function Ov(e,t){let n=[],r=e.childNodes;for(let e=0,i=r.length;e<i;e++){let i=r[e];i.nodeName===t&&n.push(i)}return n}function kv(e){return e.length===0?[]:e.trim().split(/\s+/)}function Av(e){return e.length===0?[]:e.trim().split(/\s+/).map(parseFloat)}function jv(e){return e.length===0?[]:e.trim().split(/\s+/).map(e=>parseInt(e))}function Mv(e){return e.substring(1)}var Nv=class{constructor(){this.count=0}generateId(){return`three_default_`+this.count++}parse(e){if(e.length===0)return null;let t=new DOMParser().parseFromString(e,`application/xml`),n=Ov(t,`COLLADA`)[0],r=t.getElementsByTagName(`parsererror`)[0];if(r!==void 0){let e=Ov(r,`div`)[0],t;return t=e?e.textContent:this.parserErrorToText(r),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,t),null}let i=n.getAttribute(`version`);console.debug(`THREE.ColladaLoader: File version`,i);let a=this.parseAsset(Ov(n,`asset`)[0]),o={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};return this.library=o,this.collada=n,this.parseLibrary(n,`library_animations`,`animation`,this.parseAnimation.bind(this)),this.parseLibrary(n,`library_animation_clips`,`animation_clip`,this.parseAnimationClip.bind(this)),this.parseLibrary(n,`library_controllers`,`controller`,this.parseController.bind(this)),this.parseLibrary(n,`library_images`,`image`,this.parseImage.bind(this)),this.parseLibrary(n,`library_effects`,`effect`,this.parseEffect.bind(this)),this.parseLibrary(n,`library_materials`,`material`,this.parseMaterial.bind(this)),this.parseLibrary(n,`library_cameras`,`camera`,this.parseCamera.bind(this)),this.parseLibrary(n,`library_lights`,`light`,this.parseLight.bind(this)),this.parseLibrary(n,`library_geometries`,`geometry`,this.parseGeometry.bind(this)),this.parseLibrary(n,`library_nodes`,`node`,this.parseNode.bind(this)),this.parseLibrary(n,`library_visual_scenes`,`visual_scene`,this.parseVisualScene.bind(this)),this.parseLibrary(n,`library_kinematics_models`,`kinematics_model`,this.parseKinematicsModel.bind(this)),this.parseLibrary(n,`library_physics_models`,`physics_model`,this.parsePhysicsModel.bind(this)),this.parseLibrary(n,`scene`,`instance_kinematics_scene`,this.parseKinematicsScene.bind(this)),{library:o,asset:a,collada:n}}parserErrorToText(e){let t=[],n=[e];for(;n.length;){let e=n.shift();e.nodeType===Node.TEXT_NODE?t.push(e.textContent):(t.push(`
`),n.push(...e.childNodes))}return t.join(``).trim()}parseAsset(e){return{unit:this.parseAssetUnit(Ov(e,`unit`)[0]),upAxis:this.parseAssetUpAxis(Ov(e,`up_axis`)[0])}}parseAssetUnit(e){return e!==void 0&&e.hasAttribute(`meter`)===!0?parseFloat(e.getAttribute(`meter`)):1}parseAssetUpAxis(e){return e===void 0?`Y_UP`:e.textContent}parseLibrary(e,t,n,r){let i=Ov(e,t)[0];if(i!==void 0){let e=Ov(i,n);for(let t=0;t<e.length;t++)r(e[t])}}parseAnimation(e){let t={sources:{},samplers:{},channels:{}},n=!1;for(let r=0,i=e.childNodes.length;r<i;r++){let i=e.childNodes[r];if(i.nodeType!==1)continue;let a;switch(i.nodeName){case`source`:a=i.getAttribute(`id`),t.sources[a]=this.parseSource(i);break;case`sampler`:a=i.getAttribute(`id`),t.samplers[a]=this.parseAnimationSampler(i);break;case`channel`:a=i.getAttribute(`target`),t.channels[a]=this.parseAnimationChannel(i);break;case`animation`:this.parseAnimation(i),n=!0;break;default:}}n===!1&&(this.library.animations[e.getAttribute(`id`)||pl.generateUUID()]=t)}parseAnimationSampler(e){let t={inputs:{}};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`input`:let e=Mv(r.getAttribute(`source`)),n=r.getAttribute(`semantic`);t.inputs[n]=e;break}}return t}parseAnimationChannel(e){let t={},n=e.getAttribute(`target`).split(`/`),r=n.shift(),i=n.shift(),a=i.indexOf(`(`)!==-1,o=i.indexOf(`.`)!==-1;if(o)n=i.split(`.`),i=n.shift(),t.member=n.shift();else if(a){let e=i.split(`(`);i=e.shift();for(let t=0;t<e.length;t++)e[t]=parseInt(e[t].replace(/\)/,``));t.indices=e}return t.id=r,t.sid=i,t.arraySyntax=a,t.memberSyntax=o,t.sampler=Mv(e.getAttribute(`source`)),t}parseAnimationClip(e){let t={name:e.getAttribute(`id`)||`default`,start:parseFloat(e.getAttribute(`start`)||0),end:parseFloat(e.getAttribute(`end`)||0),animations:[]};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`instance_animation`:t.animations.push(Mv(r.getAttribute(`url`)));break}}this.library.clips[e.getAttribute(`id`)]=t}parseController(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`skin`:t.id=Mv(r.getAttribute(`source`)),t.skin=this.parseSkin(r);break;case`morph`:t.id=Mv(r.getAttribute(`source`)),console.warn(`THREE.ColladaLoader: Morph target animation not supported yet.`);break}}this.library.controllers[e.getAttribute(`id`)]=t}parseSkin(e){let t={sources:{}};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`bind_shape_matrix`:t.bindShapeMatrix=Av(r.textContent);break;case`source`:let e=r.getAttribute(`id`);t.sources[e]=this.parseSource(r);break;case`joints`:t.joints=this.parseJoints(r);break;case`vertex_weights`:t.vertexWeights=this.parseVertexWeights(r);break}}return t}parseJoints(e){let t={inputs:{}};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`input`:let e=r.getAttribute(`semantic`),n=Mv(r.getAttribute(`source`));t.inputs[e]=n;break}}return t}parseVertexWeights(e){let t={inputs:{}};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`input`:let e=r.getAttribute(`semantic`),n=Mv(r.getAttribute(`source`)),i=parseInt(r.getAttribute(`offset`));t.inputs[e]={id:n,offset:i};break;case`vcount`:t.vcount=jv(r.textContent);break;case`v`:t.v=jv(r.textContent);break}}return t}parseImage(e){let t={init_from:Ov(e,`init_from`)[0].textContent};this.library.images[e.getAttribute(`id`)]=t}parseEffect(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`profile_COMMON`:t.profile=this.parseEffectProfileCOMMON(r);break}}this.library.effects[e.getAttribute(`id`)]=t}parseEffectProfileCOMMON(e){let t={surfaces:{},samplers:{}};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`newparam`:this.parseEffectNewparam(r,t);break;case`technique`:t.technique=this.parseEffectTechnique(r);break;case`extra`:t.extra=this.parseEffectExtra(r);break}}return t}parseEffectNewparam(e,t){let n=e.getAttribute(`sid`);for(let r=0,i=e.childNodes.length;r<i;r++){let i=e.childNodes[r];if(i.nodeType===1)switch(i.nodeName){case`surface`:t.surfaces[n]=this.parseEffectSurface(i);break;case`sampler2D`:t.samplers[n]=this.parseEffectSampler(i);break}}}parseEffectSurface(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`init_from`:t.init_from=r.textContent;break}}return t}parseEffectSampler(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`source`:t.source=r.textContent;break}}return t}parseEffectTechnique(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`constant`:case`lambert`:case`blinn`:case`phong`:t.type=r.nodeName,t.parameters=this.parseEffectParameters(r);break;case`extra`:t.extra=this.parseEffectExtra(r);break}}return t}parseEffectParameters(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`emission`:case`diffuse`:case`specular`:case`bump`:case`ambient`:case`shininess`:case`transparency`:t[r.nodeName]=this.parseEffectParameter(r);break;case`transparent`:t[r.nodeName]={opaque:r.hasAttribute(`opaque`)?r.getAttribute(`opaque`):`A_ONE`,data:this.parseEffectParameter(r)};break}}return t}parseEffectParameter(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`color`:t[r.nodeName]=Av(r.textContent);break;case`float`:t[r.nodeName]=parseFloat(r.textContent);break;case`texture`:t[r.nodeName]={id:r.getAttribute(`texture`),extra:this.parseEffectParameterTexture(r)};break}}return t}parseEffectParameterTexture(e){let t={technique:{}};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`extra`:this.parseEffectParameterTextureExtra(r,t);break}}return t}parseEffectParameterTextureExtra(e,t){for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`technique`:this.parseEffectParameterTextureExtraTechnique(r,t);break}}}parseEffectParameterTextureExtraTechnique(e,t){for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`repeatU`:case`repeatV`:case`offsetU`:case`offsetV`:t.technique[r.nodeName]=parseFloat(r.textContent);break;case`wrapU`:case`wrapV`:r.textContent.toUpperCase()===`TRUE`?t.technique[r.nodeName]=1:r.textContent.toUpperCase()===`FALSE`?t.technique[r.nodeName]=0:t.technique[r.nodeName]=parseInt(r.textContent);break;case`bump`:t[r.nodeName]=this.parseEffectExtraTechniqueBump(r);break}}}parseEffectExtra(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`technique`:t.technique=this.parseEffectExtraTechnique(r);break}}return t}parseEffectExtraTechnique(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`double_sided`:t[r.nodeName]=parseInt(r.textContent);break;case`bump`:t[r.nodeName]=this.parseEffectExtraTechniqueBump(r);break}}return t}parseEffectExtraTechniqueBump(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`texture`:t[r.nodeName]={id:r.getAttribute(`texture`),texcoord:r.getAttribute(`texcoord`),extra:this.parseEffectParameterTexture(r)};break}}return t}parseMaterial(e){let t={name:e.getAttribute(`name`)};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`instance_effect`:t.url=Mv(r.getAttribute(`url`));break}}this.library.materials[e.getAttribute(`id`)]=t}parseCamera(e){let t={name:e.getAttribute(`name`)};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`optics`:t.optics=this.parseCameraOptics(r);break}}this.library.cameras[e.getAttribute(`id`)]=t}parseCameraOptics(e){for(let t=0;t<e.childNodes.length;t++){let n=e.childNodes[t];switch(n.nodeName){case`technique_common`:return this.parseCameraTechnique(n)}}return{}}parseCameraTechnique(e){let t={};for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];switch(r.nodeName){case`perspective`:case`orthographic`:t.technique=r.nodeName,t.parameters=this.parseCameraParameters(r);break}}return t}parseCameraParameters(e){let t={};for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];switch(r.nodeName){case`xfov`:case`yfov`:case`xmag`:case`ymag`:case`znear`:case`zfar`:case`aspect_ratio`:t[r.nodeName]=parseFloat(r.textContent);break}}return t}parseLight(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`technique_common`:t=this.parseLightTechnique(r);break}}this.library.lights[e.getAttribute(`id`)]=t}parseLightTechnique(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`directional`:case`point`:case`spot`:case`ambient`:t.technique=r.nodeName,t.parameters=this.parseLightParameters(r);break}}return t}parseLightParameters(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`color`:let e=Av(r.textContent);t.color=new X().fromArray(e),Cl.colorSpaceToWorking(t.color,Cc);break;case`falloff_angle`:t.falloffAngle=parseFloat(r.textContent);break;case`quadratic_attenuation`:let n=parseFloat(r.textContent);t.distance=n?Math.sqrt(1/n):0;break}}return t}parseGeometry(e){let t={name:e.getAttribute(`name`),sources:{},vertices:{},primitives:[]},n=Ov(e,`mesh`)[0];if(n!==void 0){for(let e=0;e<n.childNodes.length;e++){let r=n.childNodes[e];if(r.nodeType!==1)continue;let i=r.getAttribute(`id`);switch(r.nodeName){case`source`:t.sources[i]=this.parseSource(r);break;case`vertices`:t.vertices=this.parseGeometryVertices(r);break;case`polygons`:console.warn(`THREE.ColladaLoader: Unsupported primitive type: `,r.nodeName);break;case`lines`:case`linestrips`:case`polylist`:case`triangles`:t.primitives.push(this.parseGeometryPrimitive(r));break;default:}}this.library.geometries[e.getAttribute(`id`)]=t}}parseSource(e){let t={array:[],stride:3};for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`float_array`:t.array=Av(r.textContent);break;case`Name_array`:t.array=kv(r.textContent);break;case`technique_common`:let e=Ov(r,`accessor`)[0];e!==void 0&&(t.stride=parseInt(e.getAttribute(`stride`)));break}}return t}parseGeometryVertices(e){let t={};for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];r.nodeType===1&&(t[r.getAttribute(`semantic`)]=Mv(r.getAttribute(`source`)))}return t}parseGeometryPrimitive(e){let t={type:e.nodeName,material:e.getAttribute(`material`),count:parseInt(e.getAttribute(`count`)),inputs:{},stride:0,hasUV:!1};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`input`:let e=Mv(r.getAttribute(`source`)),n=r.getAttribute(`semantic`),i=parseInt(r.getAttribute(`offset`)),a=parseInt(r.getAttribute(`set`)),o=a>0?n+a:n;t.inputs[o]={id:e,offset:i},t.stride=Math.max(t.stride,i+1),n===`TEXCOORD`&&(t.hasUV=!0);break;case`vcount`:t.vcount=jv(r.textContent);break;case`p`:t.p=jv(r.textContent);break}}return t}parseKinematicsModel(e){let t={name:e.getAttribute(`name`)||``,joints:{},links:[]};for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`technique_common`:this.parseKinematicsTechniqueCommon(r,t);break}}this.library.kinematicsModels[e.getAttribute(`id`)]=t}parseKinematicsTechniqueCommon(e,t){for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`joint`:t.joints[r.getAttribute(`sid`)]=this.parseKinematicsJoint(r);break;case`link`:t.links.push(this.parseKinematicsLink(r));break}}}parseKinematicsJoint(e){let t;for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`prismatic`:case`revolute`:t=this.parseKinematicsJointParameter(r);break}}return t}parseKinematicsJointParameter(e){let t={sid:e.getAttribute(`sid`),name:e.getAttribute(`name`)||``,axis:new J,limits:{min:0,max:0},type:e.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`axis`:let e=Av(r.textContent);t.axis.fromArray(e);break;case`limits`:let n=r.getElementsByTagName(`max`)[0],i=r.getElementsByTagName(`min`)[0];t.limits.max=parseFloat(n.textContent),t.limits.min=parseFloat(i.textContent);break}}return t.limits.min>=t.limits.max&&(t.static=!0),t.middlePosition=(t.limits.min+t.limits.max)/2,t}parseKinematicsLink(e){let t={sid:e.getAttribute(`sid`),name:e.getAttribute(`name`)||``,attachments:[],transforms:[]};for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`attachment_full`:t.attachments.push(this.parseKinematicsAttachment(r));break;case`matrix`:case`translate`:case`rotate`:t.transforms.push(this.parseKinematicsTransform(r));break}}return t}parseKinematicsAttachment(e){let t={joint:e.getAttribute(`joint`).split(`/`).pop(),transforms:[],links:[]};for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`link`:t.links.push(this.parseKinematicsLink(r));break;case`matrix`:case`translate`:case`rotate`:t.transforms.push(this.parseKinematicsTransform(r));break}}return t}parseKinematicsTransform(e){let t={type:e.nodeName},n=Av(e.textContent);switch(t.type){case`matrix`:t.obj=new Y,t.obj.fromArray(n).transpose();break;case`translate`:t.obj=new J,t.obj.fromArray(n);break;case`rotate`:t.obj=new J,t.obj.fromArray(n),t.angle=pl.degToRad(n[3]);break}return t}parsePhysicsModel(e){let t={name:e.getAttribute(`name`)||``,rigidBodies:{}};for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`rigid_body`:t.rigidBodies[r.getAttribute(`name`)]={},this.parsePhysicsRigidBody(r,t.rigidBodies[r.getAttribute(`name`)]);break}}this.library.physicsModels[e.getAttribute(`id`)]=t}parsePhysicsRigidBody(e,t){for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`technique_common`:this.parsePhysicsTechniqueCommon(r,t);break}}}parsePhysicsTechniqueCommon(e,t){for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`inertia`:t.inertia=Av(r.textContent);break;case`mass`:t.mass=Av(r.textContent)[0];break}}}parseKinematicsScene(e){let t={bindJointAxis:[]};for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`bind_joint_axis`:t.bindJointAxis.push(this.parseKinematicsBindJointAxis(r));break}}this.library.kinematicsScenes[Mv(e.getAttribute(`url`))]=t}parseKinematicsBindJointAxis(e){let t={target:e.getAttribute(`target`).split(`/`).pop()};for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`axis`:t.axis=r.getElementsByTagName(`param`)[0].textContent;let e=t.axis.split(`inst_`).pop().split(`axis`)[0];t.jointIndex=e.substring(0,e.length-1);break}}return t}prepareNodes(e){let t=e.getElementsByTagName(`node`);for(let e=0;e<t.length;e++){let n=t[e];n.hasAttribute(`id`)===!1&&n.setAttribute(`id`,this.generateId())}}parseNode(e){let t=new Y,n=new J,r={name:e.getAttribute(`name`)||``,type:e.getAttribute(`type`),id:e.getAttribute(`id`),sid:e.getAttribute(`sid`),matrix:new Y,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{},transformData:{},transformOrder:[]};for(let i=0;i<e.childNodes.length;i++){let a=e.childNodes[i];if(a.nodeType!==1)continue;let o;switch(a.nodeName){case`node`:r.nodes.push(a.getAttribute(`id`)),this.parseNode(a);break;case`instance_camera`:r.instanceCameras.push(Mv(a.getAttribute(`url`)));break;case`instance_controller`:r.instanceControllers.push(this.parseNodeInstance(a));break;case`instance_light`:r.instanceLights.push(Mv(a.getAttribute(`url`)));break;case`instance_geometry`:r.instanceGeometries.push(this.parseNodeInstance(a));break;case`instance_node`:r.instanceNodes.push(Mv(a.getAttribute(`url`)));break;case`matrix`:o=Av(a.textContent),r.matrix.multiply(t.fromArray(o).transpose());{let e=a.getAttribute(`sid`);r.transforms[e]=a.nodeName,r.transformData[e]={type:`matrix`,array:o},r.transformOrder.push(e)}break;case`translate`:o=Av(a.textContent),n.fromArray(o),r.matrix.multiply(t.makeTranslation(n.x,n.y,n.z));{let e=a.getAttribute(`sid`);r.transforms[e]=a.nodeName,r.transformData[e]={type:`translate`,x:o[0],y:o[1],z:o[2]},r.transformOrder.push(e)}break;case`rotate`:o=Av(a.textContent);{let e=pl.degToRad(o[3]);r.matrix.multiply(t.makeRotationAxis(n.fromArray(o),e));let i=a.getAttribute(`sid`);r.transforms[i]=a.nodeName,r.transformData[i]={type:`rotate`,axis:[o[0],o[1],o[2]],angle:o[3]},r.transformOrder.push(i)}break;case`scale`:o=Av(a.textContent),r.matrix.scale(n.fromArray(o));{let e=a.getAttribute(`sid`);r.transforms[e]=a.nodeName,r.transformData[e]={type:`scale`,x:o[0],y:o[1],z:o[2]},r.transformOrder.push(e)}break;case`extra`:break;default:}}return this.hasNode(r.id)?console.warn(`THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.`,r.id):this.library.nodes[r.id]=r,r}parseNodeInstance(e){let t={id:Mv(e.getAttribute(`url`)),materials:{},skeletons:[]};for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];switch(r.nodeName){case`bind_material`:let e=r.getElementsByTagName(`instance_material`);for(let n=0;n<e.length;n++){let r=e[n],i=r.getAttribute(`symbol`),a=r.getAttribute(`target`);t.materials[i]=Mv(a)}break;case`skeleton`:t.skeletons.push(Mv(r.textContent));break;default:break}}return t}parseVisualScene(e){let t={name:e.getAttribute(`name`),children:[]};this.prepareNodes(e);let n=Ov(e,`node`);for(let e=0;e<n.length;e++)t.children.push(this.parseNode(n[e]));this.library.visualScenes[e.getAttribute(`id`)]=t}hasNode(e){return this.library.nodes[e]!==void 0}},Pv=class{constructor(e,t,n,r){this.library=e,this.collada=t,this.textureLoader=n,this.tgaLoader=r,this.tempColor=new X,this.animations=[],this.kinematics={},this.position=new J,this.scale=new J,this.quaternion=new hl,this.matrix=new Y,this.deferredPivotAnimations={},this.transformNodes={}}compose(){let e=this.library;this.buildLibrary(e.animations,this.buildAnimation.bind(this)),this.buildLibrary(e.clips,this.buildAnimationClip.bind(this)),this.buildLibrary(e.controllers,this.buildController.bind(this)),this.buildLibrary(e.images,this.buildImage.bind(this)),this.buildLibrary(e.effects,this.buildEffect.bind(this)),this.buildLibrary(e.materials,this.buildMaterial.bind(this)),this.buildLibrary(e.cameras,this.buildCamera.bind(this)),this.buildLibrary(e.lights,this.buildLight.bind(this)),this.buildLibrary(e.geometries,this.buildGeometry.bind(this)),this.buildLibrary(e.visualScenes,this.buildVisualScene.bind(this)),this.setupAnimations(),this.setupKinematics();let t=this.parseScene(Ov(this.collada,`scene`)[0]);return t.animations=this.animations,{scene:t,animations:this.animations,kinematics:this.kinematics}}buildLibrary(e,t){for(let n in e){let r=e[n];r.build=t(e[n])}}getBuild(e,t){return e.build===void 0&&(e.build=t(e)),e.build}isEmpty(e){return Object.keys(e).length===0}buildAnimation(e){let t=[],n=e.channels,r=e.samplers,i=e.sources,a=this.aggregateAnimationChannels(n,r,i);for(let e in a){let n=this.library.nodes[e];if(!n)continue;let r=a[e];if(this.hasPivotTransforms(n))this.collectDeferredPivotAnimation(e,r);else{let i=this.getNode(e),a=!1;for(let e in r){let o=n.transforms[e],s=n.transformData[e],c=r[e];switch(o){case`matrix`:this.buildMatrixTracks(i,c,n,t);break;case`translate`:this.buildTranslateTrack(i,c,s,t);break;case`rotate`:a||=(this.buildRotateTrack(i,e,c,s,n,t),!0);break;case`scale`:this.buildScaleTrack(i,c,s,t);break}}}}return t}collectDeferredPivotAnimation(e,t){this.deferredPivotAnimations[e]||(this.deferredPivotAnimations[e]={});let n=this.deferredPivotAnimations[e];for(let e in t){n[e]||(n[e]={});for(let r in t[e])n[e][r]=t[e][r]}}hasPivotTransforms(e){for(let t of[`rotatePivot`,`rotatePivotInverse`,`rotatePivotTranslation`,`scalePivot`,`scalePivotInverse`,`scalePivotTranslation`])if(e.transforms[t]!==void 0)return!0;return!1}getAnimation(e){return this.getBuild(this.library.animations[e],this.buildAnimation.bind(this))}aggregateAnimationChannels(e,t,n){let r={};for(let i in e){if(!e.hasOwnProperty(i))continue;let a=e[i],o=t[a.sampler],s=o.inputs.INPUT,c=o.inputs.OUTPUT,l=n[s],u=n[c],d=o.inputs.INTERPOLATION,f=o.inputs.IN_TANGENT,p=o.inputs.OUT_TANGENT,m=d?n[d]:null,h=f?n[f]:null,g=p?n[p]:null,_=a.id,v=a.sid,y=a.member||`default`;r[_]||(r[_]={}),r[_][v]||(r[_][v]={}),r[_][v][y]={times:l.array,values:u.array,stride:u.stride,arraySyntax:a.arraySyntax,indices:a.indices,interpolation:m?m.array:null,inTangent:h?h.array:null,outTangent:g?g.array:null,inTangentStride:h?h.stride:0,outTangentStride:g?g.stride:0}}return r}buildMatrixTracks(e,t,n,r){let i=n.matrix.clone().transpose(),a={};for(let e in t){let n=t[e],r=n.times,i=n.values,o=n.stride;for(let e=0,t=r.length;e<t;e++){let t=r[e],s=e*o;if(a[t]===void 0&&(a[t]={}),n.arraySyntax===!0){let e=i[s],r=n.indices[0]+4*n.indices[1];a[t][r]=e}else for(let e=0;e<o;e++)a[t][e]=i[s+e]}}let o=this.prepareAnimationData(a,i),s={name:e.uuid,keyframes:o};this.createKeyframeTracks(s,r)}buildTranslateTrack(e,t,n,r){if(t.default&&t.default.stride===3){let n=t.default,i=Array.from(n.times),a=Array.from(n.values),o=new Fp(e.uuid+`.position`,i,a),s=this.getInterpolationInfo(t);this.applyInterpolation(o,s,t),r.push(o);return}let i=this.getTimesForAllAxes(t);if(i.length===0)return;let a=[],o=this.getInterpolationInfo(t);for(let e=0;e<i.length;e++){let r=i[e],o=this.getValueAtTime(t.X,r,n.x),s=this.getValueAtTime(t.Y,r,n.y),c=this.getValueAtTime(t.Z,r,n.z);a.push(o,s,c)}let s=new Fp(e.uuid+`.position`,i,a);this.applyInterpolation(s,o),r.push(s)}buildRotateTrack(e,t,n,r,i,a){let o=n.ANGLE||n.default;if(!o)return;let s=Array.from(o.times);if(s.length===0)return;let c=[];for(let e of i.transformOrder)if(i.transforms[e]===`rotate`){let t=i.transformData[e];c.push({sid:e,axis:new J(t.axis[0],t.axis[1],t.axis[2]),defaultAngle:t.angle})}let l=new hl,u=new hl,d=new hl,f=[],p=this.getInterpolationInfo(n);for(let e=0;e<s.length;e++){let n=s[e];l.identity();for(let e of c){let r;r=e.sid===t?this.getValueAtTime(o,n,e.defaultAngle):e.defaultAngle;let i=pl.degToRad(r);d.setFromAxisAngle(e.axis,i),l.multiply(d)}e>0&&u.dot(l)<0&&(l.x=-l.x,l.y=-l.y,l.z=-l.z,l.w=-l.w),u.copy(l),f.push(l.x,l.y,l.z,l.w)}let m=new Np(e.uuid+`.quaternion`,s,f);this.applyInterpolation(m,p),a.push(m)}buildScaleTrack(e,t,n,r){if(t.default&&t.default.stride===3){let n=t.default,i=Array.from(n.times),a=Array.from(n.values),o=new Fp(e.uuid+`.scale`,i,a),s=this.getInterpolationInfo(t);this.applyInterpolation(o,s,t),r.push(o);return}let i=this.getTimesForAllAxes(t);if(i.length===0)return;let a=[],o=this.getInterpolationInfo(t);for(let e=0;e<i.length;e++){let r=i[e],o=this.getValueAtTime(t.X,r,n.x),s=this.getValueAtTime(t.Y,r,n.y),c=this.getValueAtTime(t.Z,r,n.z);a.push(o,s,c)}let s=new Fp(e.uuid+`.scale`,i,a);this.applyInterpolation(s,o),r.push(s)}getTimesForAllAxes(e){let t=[];return e.X&&(t=t.concat(Array.from(e.X.times))),e.Y&&(t=t.concat(Array.from(e.Y.times))),e.Z&&(t=t.concat(Array.from(e.Z.times))),e.ANGLE&&(t=t.concat(Array.from(e.ANGLE.times))),e.default&&(t=t.concat(Array.from(e.default.times))),t=[...new Set(t)].sort((e,t)=>e-t),t}getValueAtTime(e,t,n){if(!e)return n;let r=e.times,i=e.values,a=e.interpolation;for(let n=0;n<r.length;n++){if(r[n]===t)return i[n];if(r[n]>t){if(n===0)return i[0];let o=n-1,s=n,c=r[o],l=r[s],u=i[o],d=i[s],f=a?a[o]:`LINEAR`;return f===`STEP`?u:f===`BEZIER`&&e.inTangent&&e.outTangent?this.evaluateBezierComponent(e,o,s,c,l,t):u+(t-c)/(l-c)*(d-u)}}return i[i.length-1]}evaluateBezierComponent(e,t,n,r,i,a){let o=e.values,s=e.inTangent,c=e.outTangent,l=e.inTangentStride||1,u=o[t],d=o[n],f,p,m,h;l===2?(f=c[t*2],p=c[t*2+1],m=s[n*2],h=s[n*2+1]):(f=r+(i-r)/3,p=c[t],m=i-(i-r)/3,h=s[n]);let g=(a-r)/(i-r);for(let e=0;e<8;e++){let e=g*g,t=e*g,n=1-g,o=n*n,s=o*n*r+3*o*g*f+3*n*e*m+t*i,c=3*o*(f-r)+6*n*g*(m-f)+3*e*(i-m);if(Math.abs(c)<1e-10)break;let l=s-a;if(Math.abs(l)<1e-10)break;g-=l/c,g=Math.max(0,Math.min(1,g))}let _=g*g,v=_*g,y=1-g,b=y*y;return b*y*u+3*b*g*p+3*y*_*h+v*d}getInterpolationInfo(e){let t=[`X`,`Y`,`Z`,`ANGLE`,`default`],n=null,r=!0;for(let i of t){let t=e[i];if(!t||!t.interpolation)continue;let a=t.interpolation;for(let e=0;e<a.length;e++){let t=a[e];n===null?n=t:t!==n&&(r=!1)}}return{type:n||`LINEAR`,uniform:r}}applyInterpolation(e,t,n=null){if(t.type===`STEP`&&t.uniform)e.setInterpolation(mc);else if(t.type===`BEZIER`&&t.uniform&&n){let t=n.default;t&&t.inTangent&&t.outTangent&&(e.setInterpolation(_c),e.settings={inTangents:new Float32Array(t.inTangent),outTangents:new Float32Array(t.outTangent)})}}prepareAnimationData(e,t){let n=[];for(let t in e)n.push({time:parseFloat(t),value:e[t]});n.sort((e,t)=>e.time-t.time);for(let e=0;e<16;e++)this.transformAnimationData(n,e,t.elements[e]);return n}createKeyframeTracks(e,t){let n=e.keyframes,r=e.name,i=[],a=[],o=[],s=[],c=this.position,l=this.quaternion,u=this.scale,d=this.matrix;for(let e=0,t=n.length;e<t;e++){let t=n[e],r=t.time,f=t.value;d.fromArray(f).transpose(),d.decompose(c,l,u),i.push(r),a.push(c.x,c.y,c.z),o.push(l.x,l.y,l.z,l.w),s.push(u.x,u.y,u.z)}return a.length>0&&t.push(new Fp(r+`.position`,i,a)),o.length>0&&t.push(new Np(r+`.quaternion`,i,o)),s.length>0&&t.push(new Fp(r+`.scale`,i,s)),t}transformAnimationData(e,t,n){let r,i=!0,a,o;for(a=0,o=e.length;a<o;a++)r=e[a],r.value[t]===void 0?r.value[t]=null:i=!1;if(i===!0)for(a=0,o=e.length;a<o;a++)r=e[a],r.value[t]=n;else this.createMissingKeyframes(e,t)}createMissingKeyframes(e,t){let n,r;for(let i=0,a=e.length;i<a;i++){let a=e[i];if(a.value[t]===null){if(n=this.getPrev(e,i,t),r=this.getNext(e,i,t),n===null){a.value[t]=r.value[t];continue}if(r===null){a.value[t]=n.value[t];continue}this.interpolate(a,n,r,t)}}}getPrev(e,t,n){for(;t>=0;){let r=e[t];if(r.value[n]!==null)return r;t--}return null}getNext(e,t,n){for(;t<e.length;){let r=e[t];if(r.value[n]!==null)return r;t++}return null}interpolate(e,t,n,r){if(n.time-t.time===0){e.value[r]=t.value[r];return}e.value[r]=(e.time-t.time)*(n.value[r]-t.value[r])/(n.time-t.time)+t.value[r]}buildAnimationClip(e){let t=[],n=e.name,r=e.end-e.start||-1,i=e.animations;for(let e=0,n=i.length;e<n;e++){let n=this.getAnimation(i[e]);for(let e=0,r=n.length;e<r;e++)t.push(n[e])}return new Ip(n,r,t)}getAnimationClip(e){return this.getBuild(this.library.clips[e],this.buildAnimationClip.bind(this))}buildController(e){let t={id:e.id},n=this.library.geometries[t.id];return e.skin!==void 0&&(t.skin=this.buildSkin(e.skin),n.sources.skinIndices=t.skin.indices,n.sources.skinWeights=t.skin.weights),t}buildSkin(e){let t={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},n=e.sources,r=e.vertexWeights,i=r.vcount,a=r.v,o=r.inputs.JOINT.offset,s=r.inputs.WEIGHT.offset,c=e.sources[e.joints.inputs.JOINT],l=e.sources[e.joints.inputs.INV_BIND_MATRIX],u=n[r.inputs.WEIGHT.id].array,d=0,f,p,m;for(f=0,m=i.length;f<m;f++){let e=i[f],n=[];for(p=0;p<e;p++){let e=a[d+o],t=u[a[d+s]];n.push({index:e,weight:t}),d+=2}for(n.sort(h),p=0;p<4;p++){let e=n[p];e===void 0?(t.indices.array.push(0),t.weights.array.push(0)):(t.indices.array.push(e.index),t.weights.array.push(e.weight))}}for(e.bindShapeMatrix?t.bindMatrix=new Y().fromArray(e.bindShapeMatrix).transpose():t.bindMatrix=new Y().identity(),f=0,m=c.array.length;f<m;f++){let e=c.array[f],n=new Y().fromArray(l.array,f*l.stride).transpose();t.joints.push({name:e,boneInverse:n})}return t;function h(e,t){return t.weight-e.weight}}getController(e){return this.getBuild(this.library.controllers[e],this.buildController.bind(this))}buildImage(e){return e.build===void 0?e.init_from:e.build}getImage(e){let t=this.library.images[e];return t===void 0?(console.warn(`THREE.ColladaLoader: Couldn't find image with ID:`,e),null):this.getBuild(t,this.buildImage.bind(this))}buildEffect(e){return e}getEffect(e){return this.getBuild(this.library.effects[e],this.buildEffect.bind(this))}getTextureLoader(e){let t,n=e.slice((e.lastIndexOf(`.`)-1>>>0)+2);switch(n=n.toLowerCase(),n){case`tga`:t=this.tgaLoader;break;default:t=this.textureLoader}return t}buildMaterial(e){let t=this.getEffect(e.url),n=t.profile.technique,r;switch(n.type){case`phong`:case`blinn`:r=new hp;break;case`lambert`:r=new gp;break;default:r=new Wd;break}r.name=e.name||``;let i=this;function a(e,n=null){let r=t.profile.samplers[e.id],a=null;if(r!==void 0){let e=t.profile.surfaces[r.source];a=i.getImage(e.init_from)}else console.warn(`THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530).`),a=i.getImage(e.id);if(a!==null){let t=i.getTextureLoader(a);if(t!==void 0){let r=t.load(a),o=e.extra;if(o!==void 0&&o.technique!==void 0&&i.isEmpty(o.technique)===!1){let e=o.technique;r.wrapS=e.wrapU?es:ts,r.wrapT=e.wrapV?es:ts,r.offset.set(e.offsetU||0,e.offsetV||0),r.repeat.set(e.repeatU||1,e.repeatV||1)}else r.wrapS=es,r.wrapT=es;return n!==null&&(r.colorSpace=n),r}else return console.warn(`THREE.ColladaLoader: Loader for texture %s not found.`,a),null}else return console.warn(`THREE.ColladaLoader: Couldn't create texture with ID:`,e.id),null}let o=n.parameters;for(let e in o){let t=o[e];switch(e){case`diffuse`:t.color&&r.color.fromArray(t.color),t.texture&&(r.map=a(t.texture,Cc));break;case`specular`:t.color&&r.specular&&r.specular.fromArray(t.color),t.texture&&(r.specularMap=a(t.texture));break;case`bump`:t.texture&&(r.normalMap=a(t.texture));break;case`ambient`:t.texture&&(r.lightMap=a(t.texture,Cc));break;case`shininess`:t.float&&r.shininess&&(r.shininess=t.float);break;case`emission`:t.color&&r.emissive&&r.emissive.fromArray(t.color),t.texture&&(r.emissiveMap=a(t.texture,Cc));break}}Cl.colorSpaceToWorking(r.color,Cc),r.specular&&Cl.colorSpaceToWorking(r.specular,Cc),r.emissive&&Cl.colorSpaceToWorking(r.emissive,Cc);let s=o.transparent,c=o.transparency;if(c===void 0&&s&&(c={float:1}),s===void 0&&c&&(s={opaque:`A_ONE`,data:{color:[1,1,1,1]}}),s&&c)if(s.data.texture)r.transparent=!0;else{let e=s.data.color;switch(s.opaque){case`A_ONE`:r.opacity=e[3]*c.float;break;case`RGB_ZERO`:r.opacity=1-e[0]*c.float;break;case`A_ZERO`:r.opacity=1-e[3]*c.float;break;case`RGB_ONE`:r.opacity=e[0]*c.float;break;default:console.warn(`THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.`,s.opaque)}r.opacity<1&&(r.transparent=!0)}if(n.extra!==void 0&&n.extra.technique!==void 0){let e=n.extra.technique;for(let t in e){let n=e[t];switch(t){case`double_sided`:r.side=n===1?2:0;break;case`bump`:r.normalMap=a(n.texture),r.normalScale=new ml(1,1);break}}}return r}getMaterial(e){return this.getBuild(this.library.materials[e],this.buildMaterial.bind(this))}buildCamera(e){let t;switch(e.optics.technique){case`perspective`:t=new lm(e.optics.parameters.yfov,e.optics.parameters.aspect_ratio,e.optics.parameters.znear,e.optics.parameters.zfar);break;case`orthographic`:let n=e.optics.parameters.ymag,r=e.optics.parameters.xmag,i=e.optics.parameters.aspect_ratio;r=r===void 0?n*i:r,n=n===void 0?r/i:n,r*=.5,n*=.5,t=new mm(-r,r,n,-n,e.optics.parameters.znear,e.optics.parameters.zfar);break;default:t=new lm;break}return t.name=e.name||``,t}getCamera(e){let t=this.library.cameras[e];return t===void 0?(console.warn(`THREE.ColladaLoader: Couldn't find camera with ID:`,e),null):this.getBuild(t,this.buildCamera.bind(this))}buildLight(e){let t;switch(e.technique){case`directional`:t=new gm;break;case`point`:t=new pm;break;case`spot`:t=new dm;break;case`ambient`:t=new _m;break}return e.parameters.color&&t.color.copy(e.parameters.color),e.parameters.distance&&(t.distance=e.parameters.distance),e.parameters.falloffAngle&&(t.angle=pl.degToRad(e.parameters.falloffAngle)),t}getLight(e){let t=this.library.lights[e];return t===void 0?(console.warn(`THREE.ColladaLoader: Couldn't find light with ID:`,e),null):this.getBuild(t,this.buildLight.bind(this))}groupPrimitives(e){let t={};for(let n=0;n<e.length;n++){let r=e[n];t[r.type]===void 0&&(t[r.type]=[]),t[r.type].push(r)}return t}checkUVCoordinates(e){let t=0;for(let n=0,r=e.length;n<r;n++)e[n].hasUV===!0&&t++;t>0&&t<e.length&&(e.uvsNeedsFix=!0)}buildGeometry(e){let t={},n=e.sources,r=e.vertices,i=e.primitives;if(i.length===0)return{};let a=this.groupPrimitives(i);for(let e in a){let i=a[e];this.checkUVCoordinates(i),t[e]=this.buildGeometryType(i,n,r)}return t}buildGeometryType(e,t,n){let r={},i={array:[],stride:0},a={array:[],stride:0},o={array:[],stride:0},s={array:[],stride:0},c={array:[],stride:0},l={array:[],stride:4},u={array:[],stride:4},d=new md,f=[],p=0;for(let r=0;r<e.length;r++){let m=e[r],h=m.inputs,g=0;switch(m.type){case`lines`:case`linestrips`:g=m.count*2;break;case`triangles`:g=m.count*3;break;case`polylist`:for(let e=0;e<m.count;e++){let t=m.vcount[e];switch(t){case 3:g+=3;break;case 4:g+=6;break;default:g+=(t-2)*3;break}}break;default:console.warn(`THREE.ColladaLoader: Unknown primitive type:`,m.type)}d.addGroup(p,g,r),p+=g,m.material&&f.push(m.material);for(let r in h){let d=h[r];switch(r){case`VERTEX`:for(let r in n){let f=n[r];switch(r){case`POSITION`:let n=i.array.length;if(this.buildGeometryData(m,t[f],d.offset,i.array),i.stride=t[f].stride,t.skinWeights&&t.skinIndices&&(this.buildGeometryData(m,t.skinIndices,d.offset,l.array),this.buildGeometryData(m,t.skinWeights,d.offset,u.array)),m.hasUV===!1&&e.uvsNeedsFix===!0){let e=(i.array.length-n)/i.stride;for(let t=0;t<e;t++)o.array.push(0,0)}break;case`NORMAL`:this.buildGeometryData(m,t[f],d.offset,a.array),a.stride=t[f].stride;break;case`COLOR`:this.buildGeometryData(m,t[f],d.offset,c.array),c.stride=t[f].stride;break;case`TEXCOORD`:this.buildGeometryData(m,t[f],d.offset,o.array),o.stride=t[f].stride;break;case`TEXCOORD1`:this.buildGeometryData(m,t[f],d.offset,s.array),o.stride=t[f].stride;break;default:console.warn(`THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.`,r)}}break;case`NORMAL`:this.buildGeometryData(m,t[d.id],d.offset,a.array),a.stride=t[d.id].stride;break;case`COLOR`:this.buildGeometryData(m,t[d.id],d.offset,c.array,!0),c.stride=t[d.id].stride;break;case`TEXCOORD`:this.buildGeometryData(m,t[d.id],d.offset,o.array),o.stride=t[d.id].stride;break;case`TEXCOORD1`:this.buildGeometryData(m,t[d.id],d.offset,s.array),s.stride=t[d.id].stride;break}}}return i.array.length>0&&d.setAttribute(`position`,new nd(i.array,i.stride)),a.array.length>0&&d.setAttribute(`normal`,new nd(a.array,a.stride)),c.array.length>0&&d.setAttribute(`color`,new nd(c.array,c.stride)),o.array.length>0&&d.setAttribute(`uv`,new nd(o.array,o.stride)),s.array.length>0&&d.setAttribute(`uv1`,new nd(s.array,s.stride)),l.array.length>0&&d.setAttribute(`skinIndex`,new nd(l.array,l.stride)),u.array.length>0&&d.setAttribute(`skinWeight`,new nd(u.array,u.stride)),r.data=d,r.type=e[0].type,r.materialKeys=f,r}buildGeometryData(e,t,n,r,i=!1){let a=e.p,o=e.stride,s=e.vcount,c=this.tempColor;function l(e){let t=a[e+n]*d,o=t+d;for(;t<o;t++)r.push(u[t]);if(i){let e=r.length-d-1;c.setRGB(r[e+0],r[e+1],r[e+2],Cc),r[e+0]=c.r,r[e+1]=c.g,r[e+2]=c.b}}let u=t.array,d=t.stride;if(e.vcount!==void 0){let e=0;for(let t=0,n=s.length;t<n;t++){let n=s[t];if(n===4){let t=e+o*0,n=e+o*1,r=e+o*2,i=e+o*3;l(t),l(n),l(i),l(n),l(r),l(i)}else if(n===3){let t=e+o*0,n=e+o*1,r=e+o*2;l(t),l(n),l(r)}else if(n>4)for(let t=1,r=n-2;t<=r;t++){let n=e+o*0,r=e+o*t,i=e+o*(t+1);l(n),l(r),l(i)}e+=o*n}}else for(let e=0,t=a.length;e<t;e+=o)l(e)}getGeometry(e){return this.getBuild(this.library.geometries[e],this.buildGeometry.bind(this))}buildKinematicsModel(e){return e.build===void 0?e:e.build}getKinematicsModel(e){return this.getBuild(this.library.kinematicsModels[e],this.buildKinematicsModel.bind(this))}buildKinematicsScene(e){return e.build===void 0?e:e.build}getKinematicsScene(e){return this.getBuild(this.library.kinematicsScenes[e],this.buildKinematicsScene.bind(this))}setupKinematics(){let e=Object.keys(this.library.kinematicsModels)[0],t=Object.keys(this.library.kinematicsScenes)[0],n=Object.keys(this.library.visualScenes)[0];if(e===void 0||t===void 0)return;let r=this.getKinematicsModel(e),i=this.getKinematicsScene(t),a=this.getVisualScene(n),o=i.bindJointAxis,s={},c=this.collada,l=this;for(let e=0,t=o.length;e<t;e++){let t=o[e],n=c.querySelector(`[sid="`+t.target+`"]`);if(n){let e=n.parentElement;u(t.jointIndex,e)}}function u(e,t){let n=t.getAttribute(`name`),i=r.joints[e],o=l.buildTransformList(t);a.traverse(function(t){t.name===n&&(s[e]={object:t,transforms:o,joint:i,position:i.zeroPosition})})}let d=new Y,f=this.matrix;this.kinematics={joints:r&&r.joints,getJointValue:function(e){let t=s[e];if(t)return t.position;console.warn(`THREE.ColladaLoader: Joint `+e+` doesn't exist.`)},setJointValue:function(e,t){let n=s[e];if(n){let r=n.joint;if(t>r.limits.max||t<r.limits.min)console.warn(`THREE.ColladaLoader: Joint `+e+` value `+t+` outside of limits (min: `+r.limits.min+`, max: `+r.limits.max+`).`);else if(r.static)console.warn(`THREE.ColladaLoader: Joint `+e+` is static.`);else{let i=n.object,a=r.axis,o=n.transforms;f.identity();for(let n=0;n<o.length;n++){let i=o[n];if(i.sid&&i.sid.indexOf(e)!==-1)switch(r.type){case`revolute`:f.multiply(d.makeRotationAxis(a,pl.degToRad(t)));break;case`prismatic`:f.multiply(d.makeTranslation(a.x*t,a.y*t,a.z*t));break;default:console.warn(`THREE.ColladaLoader: Unknown joint type: `+r.type);break}else switch(i.type){case`matrix`:f.multiply(i.obj);break;case`translate`:f.multiply(d.makeTranslation(i.obj.x,i.obj.y,i.obj.z));break;case`scale`:f.scale(i.obj);break;case`rotate`:f.multiply(d.makeRotationAxis(i.obj,i.angle));break}}i.matrix.copy(f),i.matrix.decompose(i.position,i.quaternion,i.scale),s[e].position=t}}else console.warn(`THREE.ColladaLoader: Joint `+e+` does not exist.`)}}}buildTransformList(e){let t=[],n=this.collada.querySelector(`[id="`+e.id+`"]`);for(let e=0;e<n.childNodes.length;e++){let r=n.childNodes[e];if(r.nodeType!==1)continue;let i,a;switch(r.nodeName){case`matrix`:i=Av(r.textContent);let e=new Y().fromArray(i).transpose();t.push({sid:r.getAttribute(`sid`),type:r.nodeName,obj:e});break;case`translate`:case`scale`:i=Av(r.textContent),a=new J().fromArray(i),t.push({sid:r.getAttribute(`sid`),type:r.nodeName,obj:a});break;case`rotate`:i=Av(r.textContent),a=new J().fromArray(i);let n=pl.degToRad(i[3]);t.push({sid:r.getAttribute(`sid`),type:r.nodeName,obj:a,angle:n});break}}return t}buildSkeleton(e,t){let n=[],r=[],i,a,o;for(i=0;i<e.length;i++){let r=e[i],a;if(this.hasNode(r))a=this.getNode(r),this.buildBoneHierarchy(a,t,n);else if(this.hasVisualScene(r)){let e=this.library.visualScenes[r].children;for(let r=0;r<e.length;r++){let i=e[r];if(i.type===`JOINT`){let e=this.getNode(i.id);this.buildBoneHierarchy(e,t,n)}}}else console.error(`THREE.ColladaLoader: Unable to find root bone of skeleton with ID:`,r)}for(i=0;i<t.length;i++)for(a=0;a<n.length;a++)if(o=n[a],o.bone.name===t[i].name){r[i]=o,o.processed=!0;break}for(i=0;i<n.length;i++)o=n[i],o.processed===!1&&(r.push(o),o.processed=!0);let s=[],c=[];for(i=0;i<r.length;i++)o=r[i],s.push(o.bone),c.push(o.boneInverse);return new yf(s,c)}buildBoneHierarchy(e,t,n){e.traverse(function(e){if(e.isBone===!0){let r;for(let n=0;n<t.length;n++){let i=t[n];if(i.name===e.name){r=i.boneInverse;break}}r===void 0&&(r=new Y),n.push({bone:e,boneInverse:r,processed:!1})}})}buildNode(e){let t=[],n=e.matrix,r=e.nodes,i=e.type,a=e.instanceCameras,o=e.instanceControllers,s=e.instanceLights,c=e.instanceGeometries,l=e.instanceNodes;for(let e=0,n=r.length;e<n;e++)t.push(this.getNode(r[e]));for(let e=0,n=a.length;e<n;e++){let n=this.getCamera(a[e]);n!==null&&t.push(n.clone())}for(let e=0,n=o.length;e<n;e++){let n=o[e],r=this.getController(n.id),i=this.getGeometry(r.id),a=this.buildObjects(i,n.materials),s=n.skeletons,c=r.skin.joints,l=this.buildSkeleton(s,c);for(let e=0,n=a.length;e<n;e++){let n=a[e];n.isSkinnedMesh&&(n.bind(l,r.skin.bindMatrix),n.normalizeSkinWeights()),t.push(n)}}for(let e=0,n=s.length;e<n;e++){let n=this.getLight(s[e]);n!==null&&t.push(n.clone())}for(let e=0,n=c.length;e<n;e++){let n=c[e],r=this.getGeometry(n.id),i=this.buildObjects(r,n.materials);for(let e=0,n=i.length;e<n;e++)t.push(i[e])}for(let e=0,n=l.length;e<n;e++)t.push(this.getNode(l[e]).clone());let u;if(r.length===0&&t.length===1)u=t[0];else{u=i===`JOINT`?new hf:new fu;for(let e=0;e<t.length;e++)u.add(t[e])}return u.name=i===`JOINT`?e.sid:e.name,i!==`JOINT`&&this.hasPivotTransforms(e)?this.wrapWithTransformHierarchy(u,e):(u.matrix.copy(n),u.matrix.decompose(u.position,u.quaternion,u.scale),u)}wrapWithTransformHierarchy(e,t){let n=t.id;this.transformNodes[n]={};let r=t.transformOrder,i=t.transformData,a=new fu;a.name=t.name;let o=a;for(let e=0;e<r.length;e++){let a=r[e],s=i[a],c=new fu;switch(c.name=t.name+`_`+a,s.type){case`translate`:c.position.set(s.x,s.y,s.z);break;case`rotate`:{let e=new J(s.axis[0],s.axis[1],s.axis[2]),t=pl.degToRad(s.angle);c.quaternion.setFromAxisAngle(e,t),c.userData.rotationAxis=e;break}case`scale`:c.scale.set(s.x,s.y,s.z);break;case`matrix`:new Y().fromArray(s.array).transpose().decompose(c.position,c.quaternion,c.scale);break}this.transformNodes[n][a]=c,o.add(c),o=c}return o.add(e),a}resolveMaterialBinding(e,t){let n=[];for(let r=0,i=e.length;r<i;r++){let i=t[e[r]];i===void 0?(console.warn(`THREE.ColladaLoader: Material with key %s not found. Apply fallback material.`,e[r]),n.push(this.fallbackMaterial)):n.push(this.getMaterial(i))}return n}get fallbackMaterial(){return this._fallbackMaterial===void 0&&(this._fallbackMaterial=new Wd({name:Up.DEFAULT_MATERIAL_NAME,color:16711935})),this._fallbackMaterial}buildObjects(e,t){let n=[];for(let r in e){let i=e[r],a=this.resolveMaterialBinding(i.materialKeys,t);if(a.length===0&&(r===`lines`||r===`linestrips`?a.push(new Of):a.push(new hp)),r===`lines`||r===`linestrips`)for(let e=0,t=a.length;e<t;e++){let t=a[e];if(t.isMeshPhongMaterial===!0||t.isMeshLambertMaterial===!0){let n=new Of;n.color.copy(t.color),n.opacity=t.opacity,n.transparent=t.transparent,a[e]=n}}let o=i.data.attributes.skinIndex!==void 0,s=a.length===1?a[0]:a,c;switch(r){case`lines`:c=new Bf(i.data,s);break;case`linestrips`:c=new If(i.data,s);break;case`triangles`:case`polylist`:c=o?new mf(i.data,s):new Z(i.data,s);break}n.push(c)}return n}hasNode(e){return this.library.nodes[e]!==void 0}getNode(e){return this.getBuild(this.library.nodes[e],this.buildNode.bind(this))}buildVisualScene(e){let t=new fu;t.name=e.name;let n=e.children;for(let e=0;e<n.length;e++){let r=n[e];t.add(this.getNode(r.id))}return t}hasVisualScene(e){return this.library.visualScenes[e]!==void 0}getVisualScene(e){return this.getBuild(this.library.visualScenes[e],this.buildVisualScene.bind(this))}parseScene(e){let t=Ov(e,`instance_visual_scene`)[0];return this.getVisualScene(this.parseId(t.getAttribute(`url`)))}parseId(e){return e.substring(1)}setupAnimations(){let e=this.library.clips;if(this.isEmpty(e)===!0){if(this.isEmpty(this.library.animations)===!1){let e=[];for(let t in this.library.animations){let n=this.getAnimation(t);for(let t=0,r=n.length;t<r;t++)e.push(n[t])}this.buildDeferredPivotAnimationTracks(e),this.animations.push(new Ip(`default`,-1,e))}}else for(let t in e)this.animations.push(this.getAnimationClip(t))}buildDeferredPivotAnimationTracks(e){for(let t in this.deferredPivotAnimations){let n=this.library.nodes[t];if(!n)continue;let r=this.deferredPivotAnimations[t];this.buildTransformHierarchyTracks(t,r,n,e)}}buildTransformHierarchyTracks(e,t,n,r){let i=this.transformNodes[e];if(!i){console.warn(`THREE.ColladaLoader: Transform hierarchy not found for node:`,e);return}for(let e in t){let a=i[e];if(!a)continue;let o=n.transforms[e],s=n.transformData[e],c=t[e];switch(o){case`translate`:this.buildHierarchyTranslateTrack(a,c,s,r);break;case`rotate`:this.buildHierarchyRotateTrack(a,c,s,r);break;case`scale`:this.buildHierarchyScaleTrack(a,c,s,r);break}}}buildHierarchyTranslateTrack(e,t,n,r){if(t.default&&t.default.stride===3){let n=t.default,i=new Fp(e.uuid+`.position`,Array.from(n.times),Array.from(n.values)),a=this.getInterpolationInfo(t);this.applyInterpolation(i,a,t),r.push(i);return}let i=this.getTimesForAllAxes(t);if(i.length===0)return;let a=[],o=this.getInterpolationInfo(t);for(let e=0;e<i.length;e++){let r=i[e],o=this.getValueAtTime(t.X,r,n.x),s=this.getValueAtTime(t.Y,r,n.y),c=this.getValueAtTime(t.Z,r,n.z);a.push(o,s,c)}let s=new Fp(e.uuid+`.position`,i,a);this.applyInterpolation(s,o),r.push(s)}buildHierarchyRotateTrack(e,t,n,r){let i=t.ANGLE||t.default;if(!i)return;let a=Array.from(i.times);if(a.length===0)return;let o=e.userData.rotationAxis||new J(n.axis[0],n.axis[1],n.axis[2]),s=new hl,c=new hl,l=[],u=this.getInterpolationInfo(t);for(let e=0;e<a.length;e++){let t=a[e],r=this.getValueAtTime(i,t,n.angle),u=pl.degToRad(r);s.setFromAxisAngle(o,u),e>0&&c.dot(s)<0&&(s.x=-s.x,s.y=-s.y,s.z=-s.z,s.w=-s.w),c.copy(s),l.push(s.x,s.y,s.z,s.w)}let d=new Np(e.uuid+`.quaternion`,a,l);this.applyInterpolation(d,u),r.push(d)}buildHierarchyScaleTrack(e,t,n,r){if(t.default&&t.default.stride===3){let n=t.default,i=new Fp(e.uuid+`.scale`,Array.from(n.times),Array.from(n.values)),a=this.getInterpolationInfo(t);this.applyInterpolation(i,a,t),r.push(i);return}let i=this.getTimesForAllAxes(t);if(i.length===0)return;let a=[],o=this.getInterpolationInfo(t);for(let e=0;e<i.length;e++){let r=i[e],o=this.getValueAtTime(t.X,r,n.x),s=this.getValueAtTime(t.Y,r,n.y),c=this.getValueAtTime(t.Z,r,n.z);a.push(o,s,c)}let s=new Fp(e.uuid+`.scale`,i,a);this.applyInterpolation(s,o),r.push(s)}},Fv=class extends Up{load(e,t,n,r){let i=this,a=i.path===``?vm.extractUrlBase(e):i.path,o=new Kp(i.manager);o.setPath(i.path),o.setRequestHeader(i.requestHeader),o.setWithCredentials(i.withCredentials),o.load(e,function(n){try{t(i.parse(n,a))}catch(t){r?r(t):console.error(t),i.manager.itemError(e)}},n,r)}parse(e,t){if(e.length===0)return{scene:new bu};let n=new Nv().parse(e);if(n===null)return null;let{library:r,asset:i,collada:a}=n,o=new Xp(this.manager);o.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let s;Dv&&(s=new Dv(this.manager),s.setPath(this.resourcePath||t));let{scene:c,animations:l,kinematics:u}=new Pv(r,a,o,s).compose();return c.animations=l,i.upAxis===`Z_UP`&&(console.warn(`THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289.`),c.rotation.set(-Math.PI/2,0,0)),c.scale.multiplyScalar(i.unit),{get animations(){return console.warn(`THREE.ColladaLoader: Please access animations over scene.animations now.`),l},kinematics:u,library:r,scene:c}}},Iv=new J,Lv=new Jl,Rv=new Y,zv=new Y,Bv=new hl,Vv=new J(1,1,1),Hv=new J,Uv=class extends du{constructor(...e){super(...e),this.urdfNode=null,this.urdfName=``}copy(e,t){return super.copy(e,t),this.urdfNode=e.urdfNode,this.urdfName=e.urdfName,this}},Wv=class extends Uv{constructor(...e){super(...e),this.isURDFCollider=!0,this.type=`URDFCollider`}},Gv=class extends Uv{constructor(...e){super(...e),this.isURDFVisual=!0,this.type=`URDFVisual`}},Kv=class extends Uv{constructor(...e){super(...e),this.isURDFLink=!0,this.type=`URDFLink`,this.inertial={mass:0,origin:{xyz:[0,0,0],rpy:[0,0,0]},inertia:{ixx:0,ixy:0,ixz:0,iyy:0,iyz:0,izz:0}}}copy(e,t){return super.copy(e,t),this.inertial={mass:e.inertial.mass,origin:{xyz:[...e.inertial.origin.xyz],rpy:[...e.inertial.origin.rpy]},inertia:{...e.inertial.inertia}},this}},qv=class extends Uv{get jointType(){return this._jointType}set jointType(e){if(this.jointType!==e)switch(this._jointType=e,this.matrixWorldNeedsUpdate=!0,e){case`fixed`:this.jointValue=[];break;case`continuous`:case`revolute`:case`prismatic`:this.jointValue=[,].fill(0);break;case`planar`:this.jointValue=[,,,].fill(0),this.axis=new J(0,0,1);break;case`floating`:this.jointValue=[,,,,,,].fill(0);break}}get angle(){return this.jointValue[0]}constructor(...e){super(...e),this.isURDFJoint=!0,this.type=`URDFJoint`,this.jointValue=null,this.jointType=`fixed`,this.axis=new J(1,0,0),this.limit={lower:0,upper:0,effort:0,velocity:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null,this.mimicJoints=[]}copy(e,t){return super.copy(e,t),this.jointType=e.jointType,this.axis=e.axis.clone(),this.limit.lower=e.limit.lower,this.limit.upper=e.limit.upper,this.limit.effort=e.limit.effort,this.limit.velocity=e.limit.velocity,this.ignoreLimits=!1,this.jointValue=[...e.jointValue],this.origPosition=e.origPosition?e.origPosition.clone():null,this.origQuaternion=e.origQuaternion?e.origQuaternion.clone():null,this.mimicJoints=[...e.mimicJoints],this}setJointValue(...e){e=e.map(e=>e===null?null:parseFloat(e)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone());let t=!1;switch(this.mimicJoints.forEach(n=>{t=n.updateFromMimickedJoint(...e)||t}),this.jointType){case`fixed`:return t;case`continuous`:case`revolute`:{let n=e[0];return n==null||n===this.jointValue[0]?t:(!this.ignoreLimits&&this.jointType===`revolute`&&(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.quaternion.setFromAxisAngle(this.axis,n).premultiply(this.origQuaternion),this.jointValue[0]===n?t:(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0))}case`prismatic`:{let n=e[0];return n==null||n===this.jointValue[0]?t:(this.ignoreLimits||(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.position.copy(this.origPosition),Iv.copy(this.axis).applyEuler(this.rotation),this.position.addScaledVector(Iv,n),this.jointValue[0]===n?t:(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0))}case`floating`:return this.jointValue.every((t,n)=>e[n]===t||e[n]===null)?t:(this.jointValue[0]=e[0]===null?this.jointValue[0]:e[0],this.jointValue[1]=e[1]===null?this.jointValue[1]:e[1],this.jointValue[2]=e[2]===null?this.jointValue[2]:e[2],this.jointValue[3]=e[3]===null?this.jointValue[3]:e[3],this.jointValue[4]=e[4]===null?this.jointValue[4]:e[4],this.jointValue[5]=e[5]===null?this.jointValue[5]:e[5],zv.compose(this.origPosition,this.origQuaternion,Vv),Bv.setFromEuler(Lv.set(this.jointValue[3],this.jointValue[4],this.jointValue[5],`XYZ`)),Hv.set(this.jointValue[0],this.jointValue[1],this.jointValue[2]),Rv.compose(Hv,Bv,Vv),zv.premultiply(Rv),this.position.setFromMatrixPosition(zv),this.rotation.setFromRotationMatrix(zv),this.matrixWorldNeedsUpdate=!0,!0);case`planar`:return this.jointValue.every((t,n)=>e[n]===t||e[n]===null)?t:(this.jointValue[0]=e[0]===null?this.jointValue[0]:e[0],this.jointValue[1]=e[1]===null?this.jointValue[1]:e[1],this.jointValue[2]=e[2]===null?this.jointValue[2]:e[2],zv.compose(this.origPosition,this.origQuaternion,Vv),Bv.setFromAxisAngle(this.axis,this.jointValue[2]),Hv.set(this.jointValue[0],this.jointValue[1],0),Rv.compose(Hv,Bv,Vv),zv.premultiply(Rv),this.position.setFromMatrixPosition(zv),this.rotation.setFromRotationMatrix(zv),this.matrixWorldNeedsUpdate=!0,!0)}return t}},Jv=class extends qv{constructor(...e){super(...e),this.type=`URDFMimicJoint`,this.mimicJoint=null,this.offset=0,this.multiplier=1}updateFromMimickedJoint(...e){let t=e.map(e=>e===null?null:e*this.multiplier+this.offset);return super.setJointValue(...t)}copy(e,t){return super.copy(e,t),this.mimicJoint=e.mimicJoint,this.offset=e.offset,this.multiplier=e.multiplier,this}},Yv=class extends Kv{constructor(...e){super(...e),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null,this.colliders=null,this.visual=null,this.frames=null}copy(e,t){super.copy(e,t),this.urdfRobotNode=e.urdfRobotNode,this.robotName=e.robotName,this.links={},this.joints={},this.colliders={},this.visual={},this.traverse(t=>{t.isURDFJoint&&t.urdfName in e.joints&&(this.joints[t.urdfName]=t),t.isURDFLink&&t.urdfName in e.links&&(this.links[t.urdfName]=t),t.isURDFCollider&&t.urdfName in e.colliders&&(this.colliders[t.urdfName]=t),t.isURDFVisual&&t.urdfName in e.visual&&(this.visual[t.urdfName]=t)});for(let e in this.joints)this.joints[e].mimicJoints=this.joints[e].mimicJoints.map(e=>this.joints[e.name]);return this.frames={...this.colliders,...this.visual,...this.links,...this.joints},this}getFrame(e){return this.frames[e]}setJointValue(e,...t){let n=this.joints[e];return n?n.setJointValue(...t):!1}setJointValues(e){let t=!1;for(let n in e){let r=e[n];t=Array.isArray(r)?this.setJointValue(n,...r)||t:this.setJointValue(n,r)||t}return t}},Xv=new hl,Zv=new Jl;function Qv(e){return e?e.trim().split(/\s+/g).map(e=>parseFloat(e)):[0,0,0]}function $v(e,t,n=!1){n||e.rotation.set(0,0,0),Zv.set(t[0],t[1],t[2],`ZYX`),Xv.setFromEuler(Zv),Xv.multiply(e.quaternion),e.quaternion.copy(Xv)}var ey=class{constructor(e){this.manager=e||Hp,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages=``,this.workingPath=``,this.fetchOptions={}}loadAsync(e){return new Promise((t,n)=>{this.load(e,t,null,n)})}load(e,t,n,r){let i=this.manager,a=vm.extractUrlBase(e),o=this.manager.resolveURL(e);i.itemStart(o),fetch(o,this.fetchOptions).then(e=>{if(e.ok)return n&&n(null),e.text();throw Error(`URDFLoader: Failed to load url '${o}' with error code ${e.status} : ${e.statusText}.`)}).then(e=>{t(this.parse(e,this.workingPath||a)),i.itemEnd(o)}).catch(e=>{r?r(e):console.error(`URDFLoader: Error loading file.`,e),i.itemError(o),i.itemEnd(o)})}parse(e,t=this.workingPath){let n=this.packages,r=this.loadMeshCb,i=this.parseVisual,a=this.parseCollision,o=this.manager,s={},c={},l={};function u(e){if(!/^package:\/\//.test(e))return t?t+e:e;let[r,i]=e.replace(/^package:\/\//,``).split(/\/(.+)/);if(typeof n==`string`)return n.endsWith(r)?n+`/`+i:n+`/`+r+`/`+i;if(typeof n==`function`)return n(r)+`/`+i;if(typeof n==`object`)return r in n?n[r]+`/`+i:(console.error(`URDFLoader : ${r} not found in provided package list.`),null)}function d(e){let t;return t=e instanceof Document?[...e.children]:e instanceof Element?[e]:[...new DOMParser().parseFromString(e,`text/xml`).children],f(t.filter(e=>e.nodeName===`robot`).pop())}function f(e){let t=[...e.children],n=t.filter(e=>e.nodeName.toLowerCase()===`link`),r=t.filter(e=>e.nodeName.toLowerCase()===`joint`),i=t.filter(e=>e.nodeName.toLowerCase()===`material`),a=new Yv;a.robotName=e.getAttribute(`name`),a.urdfRobotNode=e,i.forEach(e=>{let t=e.getAttribute(`name`);l[t]=h(e)});let o={},u={};n.forEach(t=>{let n=t.getAttribute(`name`),r=e.querySelector(`child[link="${n}"]`)===null;s[n]=m(t,o,u,r?a:null)}),r.forEach(e=>{let t=e.getAttribute(`name`);c[t]=p(e)}),a.joints=c,a.links=s,a.colliders=u,a.visual=o;let d=Object.values(c);return d.forEach(e=>{e instanceof Jv&&c[e.mimicJoint].mimicJoints.push(e)}),d.forEach(e=>{let t=new Set,n=e=>{if(t.has(e))throw Error(`URDFLoader: Detected an infinite loop of mimic joints.`);t.add(e),e.mimicJoints.forEach(e=>{n(e)})};n(e)}),a.frames={...u,...o,...s,...c},a}function p(e){let t=[...e.children],n=e.getAttribute(`type`),r,i=t.find(e=>e.nodeName.toLowerCase()===`mimic`);i?(r=new Jv,r.mimicJoint=i.getAttribute(`joint`),r.multiplier=parseFloat(i.getAttribute(`multiplier`)||1),r.offset=parseFloat(i.getAttribute(`offset`)||0)):r=new qv,r.urdfNode=e,r.name=e.getAttribute(`name`),r.urdfName=r.name,r.jointType=n;let a=null,o=null,c=[0,0,0],l=[0,0,0];t.forEach(e=>{let t=e.nodeName.toLowerCase();t===`origin`?(c=Qv(e.getAttribute(`xyz`)),l=Qv(e.getAttribute(`rpy`))):t===`child`?o=s[e.getAttribute(`link`)]:t===`parent`?a=s[e.getAttribute(`link`)]:t===`limit`&&(r.limit.lower=parseFloat(e.getAttribute(`lower`)||r.limit.lower),r.limit.upper=parseFloat(e.getAttribute(`upper`)||r.limit.upper),r.limit.effort=parseFloat(e.getAttribute(`effort`)||r.limit.effort),r.limit.velocity=parseFloat(e.getAttribute(`velocity`)||r.limit.velocity))}),a.add(r),r.add(o),$v(r,l),r.position.set(c[0],c[1],c[2]);let u=t.filter(e=>e.nodeName.toLowerCase()===`axis`)[0];if(u){let e=u.getAttribute(`xyz`).split(/\s+/g).map(e=>parseFloat(e));r.axis=new J(e[0],e[1],e[2]),r.axis.normalize()}return r}function m(e,t,n,r=null){r===null&&(r=new Kv);let o=[...e.children];r.name=e.getAttribute(`name`),r.urdfName=r.name,r.urdfNode=e;let s=o.find(e=>e.nodeName.toLowerCase()===`inertial`);return s&&[...s.children].forEach(e=>{let t=e.nodeName.toLowerCase();t===`origin`?(r.inertial.origin.xyz=Qv(e.getAttribute(`xyz`)),r.inertial.origin.rpy=Qv(e.getAttribute(`rpy`))):t===`mass`?r.inertial.mass=parseFloat(e.getAttribute(`value`))||0:t===`inertia`&&(r.inertial.inertia.ixx=parseFloat(e.getAttribute(`ixx`))||0,r.inertial.inertia.ixy=parseFloat(e.getAttribute(`ixy`))||0,r.inertial.inertia.ixz=parseFloat(e.getAttribute(`ixz`))||0,r.inertial.inertia.iyy=parseFloat(e.getAttribute(`iyy`))||0,r.inertial.inertia.iyz=parseFloat(e.getAttribute(`iyz`))||0,r.inertial.inertia.izz=parseFloat(e.getAttribute(`izz`))||0)}),i&&o.filter(e=>e.nodeName.toLowerCase()===`visual`).forEach(e=>{let n=g(e,l);if(r.add(n),e.hasAttribute(`name`)){let r=e.getAttribute(`name`);n.name=r,n.urdfName=r,t[r]=n}}),a&&o.filter(e=>e.nodeName.toLowerCase()===`collision`).forEach(e=>{let t=g(e);if(r.add(t),e.hasAttribute(`name`)){let r=e.getAttribute(`name`);t.name=r,t.urdfName=r,n[r]=t}}),r}function h(e){let t=[...e.children],n=new hp;return n.name=e.getAttribute(`name`)||``,t.forEach(e=>{let t=e.nodeName.toLowerCase();if(t===`color`){let t=e.getAttribute(`rgba`).split(/\s/g).map(e=>parseFloat(e));n.color.setRGB(t[0],t[1],t[2]),n.opacity=t[3],n.transparent=t[3]<1,n.depthWrite=!n.transparent}else if(t===`texture`){let t=e.getAttribute(`filename`);if(t){let e=new Xp(o),r=u(t);n.map=e.load(r),n.map.colorSpace=Cc}}}),n}function g(e,t={}){let n=e.nodeName.toLowerCase()===`collision`,i=[...e.children],a=null,s=i.filter(e=>e.nodeName.toLowerCase()===`material`)[0];if(s){let e=s.getAttribute(`name`);a=e&&e in t?t[e]:h(s)}else a=new hp;let c=n?new Wv:new Gv;return c.urdfNode=e,i.forEach(e=>{let t=e.nodeName.toLowerCase();if(t===`geometry`){let t=e.children[0].nodeName.toLowerCase();if(t===`mesh`){let t=u(e.children[0].getAttribute(`filename`));if(t!==null){let n=e.children[0].getAttribute(`scale`);if(n){let e=Qv(n);c.scale.set(e[0],e[1],e[2])}r(t,o,(e,t)=>{t?console.error(`URDFLoader: Error loading mesh.`,t):e&&(e instanceof Z&&(e.material=a),e.position.set(0,0,0),e.quaternion.identity(),c.add(e))})}}else if(t===`box`){let t=new Z;t.geometry=new $f(1,1,1),t.material=a;let n=Qv(e.children[0].getAttribute(`size`));t.scale.set(n[0],n[1],n[2]),c.add(t)}else if(t===`sphere`){let t=new Z;t.geometry=new rp(1,30,30),t.material=a;let n=parseFloat(e.children[0].getAttribute(`radius`))||0;t.scale.set(n,n,n),c.add(t)}else if(t===`cylinder`){let t=new Z;t.geometry=new ep(1,1,1,30),t.material=a;let n=parseFloat(e.children[0].getAttribute(`radius`))||0,r=parseFloat(e.children[0].getAttribute(`length`))||0;t.scale.set(n,r,n),t.rotation.set(Math.PI/2,0,0),c.add(t)}}else if(t===`origin`){let t=Qv(e.getAttribute(`xyz`)),n=Qv(e.getAttribute(`rpy`));c.position.set(t[0],t[1],t[2]),c.rotation.set(0,0,0),$v(c,n)}}),c}return d(e)}defaultMeshLoader(e,t,n){/\.stl$/i.test(e)?new Tv(t).load(e,e=>{n(new Z(e,new hp))},null,e=>n(null,e)):/\.dae$/i.test(e)?new Fv(t).load(e,e=>n(e.scene),null,e=>n(null,e)):console.warn(`URDFLoader: Could not load model at ${e}.\nNo loader available`)}},ty=av(Hn({__name:`TrajectoryPanel`,props:{enabled:{type:Boolean,default:!0},name:{},alpha:{default:1},fps:{default:$.fps},id:{default:``},pitch:{default:$.pitch},yaw:{default:$.yaw},zoom:{default:$.zoom},worldSize:{default:$.worldSize},dx:{default:0},dy:{default:0},dz:{default:0}},emits:[`status-change`],setup(e,{emit:t}){let n=e,r=t,i=B(null),a=null,o=null,s=!1,c=!1,l=!1,u=``,d=null,f=V(null),p=V(null),m=V(null),h=V(null),g=Ca(()=>{let e=$_(n.fps);return e>0?e:$.fps}),_=null,v=``,y=null,b=0,x=!1,S=0,C=!1,w=!1,T=!1,E=null,D=new Tv,O=e=>(e.time_from_start||0)/1e3,ee=(e,t)=>{if(!E)return;let n=E;for(let r=0;r<e.length&&r<t.length;r++){let i=e[r],a=t[r];if(typeof n.setJointValue==`function`){n.setJointValue(i,a);continue}let o=n.joints?.[i];o?.setJointValue&&o.setJointValue(a)}},k=e=>e.points?.length?O(e.points[e.points.length-1]):0,A=(e,t)=>{let{points:n}=e;if(!n?.length)return null;let r=k(e),i=Math.max(t,0);if(i>=r)return[...n[n.length-1].positions];if(i<=O(n[0]))return[...n[0].positions];for(let e=0;e<n.length-1;e++){let t=O(n[e]),r=O(n[e+1]);if(i>=t&&i<=r){let a=n[e].positions,o=n[e+1].positions,s=Math.min(a.length,o.length);if(s===0)return[];if(r<=t)return[...o];let c=(i-t)/(r-t);return Array.from({length:s},(e,t)=>a[t]+(o[t]-a[t])*c)}}return[...n[n.length-1].positions]},j=e=>{let t=new ey(new Vp);t.loadMeshCb=async(e,t,r)=>{try{let t=await qo(Lo(e,v),n.id);if(t.error||!t.data){r(new du,Error(`Fetch failed`));return}let i=D.parse(t.data);i.computeVertexNormals(),r(new Z(i,new mp({color:13421772,roughness:$.roughness,metalness:$.metalness})))}catch(e){r(new du,e instanceof Error?e:Error(String(e)))}},E=t.parse(e),h.value&&E&&(h.value.add(E),E.position.set(0,0,0),E.quaternion.identity(),P(E,n.alpha))},M=e=>{e.traverse(e=>{let t=e;t.isMesh&&(t.geometry?.dispose(),(Array.isArray(t.material)?t.material:[t.material]).forEach(e=>e?.dispose()))})},N=()=>{if(h.value){for(let e of[...h.value.children])M(e),h.value.remove(e);E=null}},P=(e,t)=>{e.traverse(e=>{let n=e;if(!n.isMesh)return;let r=Array.isArray(n.material)?n.material:[n.material];for(let e of r)e&&(e.transparent=t<1,e.opacity=t,e.depthWrite=t>=1,e.needsUpdate=!0)})},te=()=>{if(!f.value||!p.value||!m.value||!i.value)return;let e=i.value.parentElement;if(!e)return;let t=e.clientWidth,r=e.clientHeight;f.value.setSize(t,r);let a=m.value;a.aspect=t/r,a.setViewOffset(t,r,0,r*-.05,t,r),a.updateProjectionMatrix();let o=n.pitch*Math.PI/180,s=n.yaw*Math.PI/180,c=n.worldSize*1.2/Math.max(n.zoom,.001),l=c*Math.sin(o),u=c*Math.cos(o);a.position.set(u*Math.cos(s)-n.dx,u*Math.sin(s)-n.dy,l-n.dz),a.up.set(0,0,1),a.lookAt(-n.dx,-n.dy,-n.dz),f.value.render(p.value,a)},ne=e=>{e!==u&&(u=e,r(`status-change`,e))},re=async()=>{if(!(T||!s||!n.enabled||!n.name)){T=!0;try{let e=await Jo(`${n.name}/trajectory`,n.id);if(e.error){c=!0,w=!1,x=!1,ne(`错误`),s&&(a!==null&&clearTimeout(a),a=setTimeout(ae,$.retryInterval));return}if(c=!1,!e.data){w=!1,x=!1,ne(`接收中`),s&&(a!==null&&clearTimeout(a),a=setTimeout(ae,1e3));return}y=e.data,b=0,S=0,x=!0,l=!0,w=!0,ne(`正常`)}catch{c=!0,w=!1,x=!1,ne(`错误`),s&&(a!==null&&clearTimeout(a),a=setTimeout(ae,$.retryInterval))}finally{T=!1}}},ie=()=>{if(s&&(o=requestAnimationFrame(ie),!(!f.value||!p.value||!m.value||!n.enabled))){if(x&&E&&y?.joint_names){let e=performance.now()/1e3;b===0&&(b=e,S=0);let t=1/Math.max(g.value,1);if(S===0||e-S>=t){S=e;let t=e-b,n=k(y);if(n<=0){let e=y.points?.[0]?.positions;e&&ee(y.joint_names,e)}else if(t>=n){let e=y.points?.[y.points.length-1]?.positions;e&&ee(y.joint_names,e),x=!1,re()}else{let e=A(y,t);e&&ee(y.joint_names,e)}}}te()}},ae=async()=>{if(s){a=null;try{if(!n.enabled||!n.name){ne(`未就绪`);return}let e=!1;if(!C&&_===null){let e=await Ko(n.name+`/robot_description`);!e.error&&e.data&&(_=e.data.urdf,v=e.data.mesh_path,j(e.data.urdf),C=!0)}!w&&!e&&(await re(),e=c),c=e,T||ne(c?`错误`:l?`正常`:`接收中`)}catch{c||(c=!0,ne(`错误`))}finally{s&&a===null&&!(C&&w)&&(a=setTimeout(ae,1e3))}}};return rr(()=>{if(s=!0,!i.value)return;let e=i.value.parentElement;if(!e)return;let t=e.clientWidth,n=e.clientHeight,r=new Q_({canvas:i.value,alpha:!0,antialias:!0});r.setSize(t,n),r.setPixelRatio(window.devicePixelRatio||1),f.value=r,p.value=new bu,ev().forEach(e=>p.value.add(e)),h.value=new fu,p.value.add(h.value),m.value=new lm(45,t/n,.1,1e3),d=new ResizeObserver(()=>te()),d.observe(e),te(),ie(),a=setTimeout(ae,0)}),sr(()=>{s=!1,a!==null&&(clearTimeout(a),a=null),o!==null&&(cancelAnimationFrame(o),o=null),d?.disconnect(),d=null,N(),f.value?.dispose(),f.value=null,p.value=null,m.value=null,h.value=null}),H(()=>n.name,()=>{_=null,v=``,y=null,l=!1,b=0,S=0,x=!1,C=!1,w=!1,T=!1,N()}),H(()=>n.alpha,()=>{E&&P(E,n.alpha)}),H(()=>n.enabled,e=>{e&&pn(()=>te())}),H([()=>n.pitch,()=>n.yaw,()=>n.zoom,()=>n.worldSize,()=>n.dx,()=>n.dy,()=>n.dz],()=>{n.enabled&&te()}),(t,n)=>En((U(),W(`canvas`,{ref_key:`canvasRef`,ref:i,class:`trajectory-canvas`},null,512)),[[La,e.enabled]])}}),[[`__scopeId`,`data-v-0429a127`]]),ny=0,ry=1,iy=2,ay=3,oy=4,sy=5,cy=6,ly=7,uy=8,dy=1,fy=2,py=av(Hn({__name:`MarkerPanel`,props:{enabled:{type:Boolean,default:!0},topic:{default:``},fps:{default:$.fps},id:{default:``},pitch:{default:$.pitch},yaw:{default:$.yaw},zoom:{default:$.zoom},worldSize:{default:$.worldSize},isArray:{type:Boolean,default:!1},dx:{default:0},dy:{default:0},dz:{default:0}},emits:[`update:identifier`],setup(e,{emit:t}){let n=e,r=B(null),i=B(null),a=B(!1),o=t,s=null,c=!1,l=!1,u=null,d=Ca(()=>{let e=1e3/$_(n.fps);return e>0?e:$.fps}),f=V(null),p=V(null),m=V(null),h=V(null),g=new Map,_=null,v=null,y=null,b=null,x=()=>{let e=r.value;if(!e)return;let t=e.parentElement;if(!t)return;let n=t.clientWidth,i=t.clientHeight;f.value=new Q_({canvas:e,alpha:!0,antialias:!0}),f.value.setSize(n,i),f.value.setPixelRatio(window.devicePixelRatio||1),p.value=new bu,m.value=new lm(45,n/i,.1,1e3),h.value=new fu,p.value.add(h.value),ev().forEach(e=>{p.value?.add(e)}),_=new rp(.5,24,24),v=new $f(1,1,1),y=new ep(.5,.5,1,24),y.rotateZ(-Math.PI/2),b=new tp(.5,1,24),b.rotateZ(-Math.PI/2),S(),E()},S=()=>{if(!m.value||!r.value||!f.value)return;let e=r.value.parentElement;if(!e)return;let t=e.clientWidth,i=e.clientHeight;f.value.setSize(t,i),m.value.aspect=t/i,m.value.setViewOffset(t,i,0,i*-.05,t,i),m.value.updateProjectionMatrix();let a=n.pitch*Math.PI/180,o=n.yaw*Math.PI/180,s=n.worldSize*1.2/Math.max(n.zoom,.001),c=s*Math.sin(a),l=s*Math.cos(a),u=l*Math.cos(o),d=l*Math.sin(o);m.value.position.set(u-n.dx,d-n.dy,c-n.dz),m.value.up.set(0,0,1),m.value.lookAt(-n.dx,-n.dy,-n.dz)},C=e=>{let t=new X(e.color.r,e.color.g,e.color.b),n=e.color.a,r=(e,r)=>new mp({color:e??t,transparent:!0,opacity:r??n,roughness:$.roughness,metalness:$.metalness}),i=(e,r)=>new Of({color:e??t,transparent:!0,opacity:r??n}),a=t=>{let n=e.pose.position,r=e.pose.orientation;t.position.set(n.x,n.y,n.z);let i=Math.sqrt(r.x*r.x+r.y*r.y+r.z*r.z+r.w*r.w);i>0&&t.quaternion.set(r.x/i,r.y/i,r.z/i,r.w/i)};switch(e.type){case ny:{let t=new fu,n=e.scale.x||1,i=e.scale.y||.1,o=e.scale.z||.1;if(e.points.length>=2){let n=new J(e.points[0].x,e.points[0].y,e.points[0].z),a=new J(e.points[1].x,e.points[1].y,e.points[1].z),s=new J().subVectors(a,n),c=s.length();if(c>0){s.normalize();let e=Math.min(c*.3,o),a=c-e,l=r(),u=new ep(i/2,i/2,a,16);u.rotateZ(-Math.PI/2),u.translate(a/2,0,0);let d=new Z(u,l);t.add(d);let f=new tp(o/2,e,16);f.rotateZ(-Math.PI/2),f.translate(a+e/2,0,0);let p=new Z(f,l);t.add(p),t.position.copy(n),t.quaternion.setFromUnitVectors(new J(1,0,0),s)}}else{let e=r(),s=n*.23,c=n-s,l=new ep(i/2,i/2,c,16);l.rotateZ(-Math.PI/2),l.translate(c/2,0,0);let u=new Z(l,e);t.add(u);let d=new tp(o/2,s,16);d.rotateZ(-Math.PI/2),d.translate(c+s/2,0,0);let f=new Z(d,e);t.add(f),a(t)}return t}case ry:{let t=r(),n=new Z(v,t);return n.scale.set(e.scale.x||1,e.scale.y||1,e.scale.z||1),a(n),n}case iy:{let t=r(),n=new Z(_,t);return n.scale.set(e.scale.x||1,e.scale.y||1,e.scale.z||1),a(n),n}case ay:{let t=r(),n=new Z(y,t);return n.scale.set(e.scale.x||1,e.scale.y||1,e.scale.z||1),a(n),n}case oy:{if(e.points.length<2)return null;let t=[];for(let n of e.points)t.push(n.x,n.y,n.z);let r=new md;if(r.setAttribute(`position`,new nd(t,3)),e.colors.length===e.points.length){let t=[];for(let n of e.colors)t.push(n.r,n.g,n.b);r.setAttribute(`color`,new nd(t,3));let i=new If(r,new Of({vertexColors:!0,transparent:!0,opacity:n}));return a(i),i}else{let e=new If(r,i());return a(e),e}}case sy:{if(e.points.length<2)return null;let t=[];for(let n of e.points)t.push(n.x,n.y,n.z);let r=new md;if(r.setAttribute(`position`,new nd(t,3)),e.colors.length===e.points.length){let t=[];for(let n of e.colors)t.push(n.r,n.g,n.b);r.setAttribute(`color`,new nd(t,3));let i=new Bf(r,new Of({vertexColors:!0,transparent:!0,opacity:n}));return a(i),i}else{let e=new Bf(r,i());return a(e),e}}case cy:{let t=new fu;for(let n=0;n<e.points.length;n++){let i=e.points[n],a=e.colors[n]??e.color,o=r(new X(a.r,a.g,a.b),a.a),s=new Z(v,o);s.position.set(i.x,i.y,i.z),s.scale.set(e.scale.x||.1,e.scale.y||.1,e.scale.z||.1),t.add(s)}return a(t),t}case ly:{let t=new fu;for(let n=0;n<e.points.length;n++){let i=e.points[n],a=e.colors[n]??e.color,o=r(new X(a.r,a.g,a.b),a.a),s=new Z(_,o);s.position.set(i.x,i.y,i.z),s.scale.set(e.scale.x||.1,e.scale.y||.1,e.scale.z||.1),t.add(s)}return a(t),t}case uy:{if(e.points.length===0)return null;let r=[];for(let t of e.points)r.push(t.x,t.y,t.z);let i=new md;if(i.setAttribute(`position`,new nd(r,3)),e.colors.length===e.points.length){let t=[];for(let n of e.colors)t.push(n.r,n.g,n.b);i.setAttribute(`color`,new nd(t,3));let r=new Kf(i,new Vf({size:e.scale.x||.05,vertexColors:!0,transparent:!0,opacity:n,sizeAttenuation:!0}));return a(r),r}else{let r=new Kf(i,new Vf({size:e.scale.x||.05,color:t,transparent:!0,opacity:n,sizeAttenuation:!0}));return a(r),r}}default:return null}},w=e=>{(e instanceof Z||e instanceof If||e instanceof Bf||e instanceof Kf)&&(e.geometry!==_&&e.geometry!==v&&e.geometry!==y&&e.geometry!==b&&e.geometry.dispose(),e.material instanceof yd?e.material.dispose():Array.isArray(e.material)&&e.material.forEach(e=>e.dispose())),e instanceof fu&&e.children.slice().forEach(e=>w(e))},T=()=>{for(let[,e]of g)w(e),h.value?.remove(e);g.clear()},E=()=>{if(!(!h.value||!p.value||!f.value||!m.value)){if(!i.value||!n.enabled){h.value.visible=!1,f.value.render(p.value,m.value);return}h.value.visible=!0;for(let e of i.value){let t=`${e.ns}/${e.id}`;if(e.action===fy){T();continue}if(e.action===dy){let e=g.get(t);e&&(w(e),h.value.remove(e),g.delete(t));continue}let n=g.get(t);n&&(w(n),h.value.remove(n),g.delete(t));let r=C(e);r&&(h.value.add(r),g.set(t,r))}f.value.render(p.value,m.value)}},D=()=>{O(),i.value=null,a.value=!1,l=!1,c=!0;let e=async()=>{let{data:t,error:r}=await(n.isArray?Vo:Bo)(n.topic,n.id);if(c){if(!r&&t){if(n.isArray){let e=t.find(e=>e.action!==dy&&e.action!==fy);if(e){let n=e.ns,r=t.filter(e=>e.ns===n||e.action===dy||e.action===fy);i.value=r,o(`update:identifier`,n,-1)}else i.value=t}else{i.value=t;for(let e=t.length-1;e>=0;e--){let n=t[e];if(n.action!==dy&&n.action!==fy){o(`update:identifier`,n.ns,n.id);break}}}a.value=!0,l=!1,pn(()=>{E()})}else r&&(a.value=!1,l=!0);s=setTimeout(e,l?$.retryInterval:d.value)}};e()},O=()=>{c=!1,s!==null&&(clearTimeout(s),s=null),i.value=null,a.value=!1,l=!1};return H(()=>n.topic,(e,t)=>{e!==t&&n.enabled&&(T(),D())}),H(()=>n.enabled,e=>{e?(S(),n.topic?D():pn(E)):(O(),pn(E))}),H(d,()=>{n.enabled&&n.topic&&D()}),H(()=>[n.pitch,n.yaw,n.zoom,n.worldSize,n.dx,n.dy,n.dz],()=>{n.enabled&&(S(),E())}),rr(()=>{n.enabled&&n.topic&&D(),pn(()=>{x(),u=new ResizeObserver(()=>{S(),E()});let e=r.value;e?.parentElement&&u.observe(e.parentElement)})}),sr(()=>{O(),T(),u?.disconnect(),f.value?.dispose(),[_,v,y,b].forEach(e=>e?.dispose())}),(t,n)=>En((U(),W(`canvas`,{ref_key:`canvasRef`,ref:r,class:`marker-canvas`},null,512)),[[La,e.enabled]])}}),[[`__scopeId`,`data-v-18f409ae`]]),my=e=>{let t=e.trim();return t===``||isNaN(Number(t))?`0`:t},hy=e=>e.split(`;`).map(e=>my(e)).join(`; `),gy={lighttheme:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="#eabb12" d="M320 32C328 32 335.4 36 339.9 42.6L398.7 130L502.1 109.8C509.9 108.3 518 110.7 523.7 116.4C529.4 122.1 531.8 130.2 530.3 138L510 241.3L597.4 300.1C604 304.5 608 312 608 320C608 328 604 335.4 597.4 339.9L510 398.7L530.2 502C531.7 509.8 529.3 517.9 523.6 523.6C517.9 529.3 509.8 531.7 502 530.2L398.7 510L339.9 597.4C335.4 604 328 608 320 608C312 608 304.6 604 300.1 597.4L241.3 510L137.9 530.2C130.1 531.7 122 529.3 116.3 523.6C110.6 517.9 108.2 509.8 109.7 502L130 398.7L42.6 339.9C36 335.4 32 328 32 320C32 312 36 304.6 42.6 300.1L130 241.3L109.8 137.9C108.3 130.1 110.7 122 116.4 116.3C122.1 110.6 130.2 108.2 138 109.7L241.3 129.9L300.1 42.5L301.9 40.2C306.4 35 313 32 320 32zM272.2 170C266.8 178 257.2 182 247.7 180.2L163.7 163.8L180.1 247.8C181.9 257.3 177.9 266.9 169.9 272.3L99 320L170 367.8C178 373.2 182 382.8 180.2 392.3L163.8 476.3L247.8 459.9L251.3 459.5C259.6 459.1 267.6 463.1 272.3 470.1L320.1 541.1L367.9 470.1L370.1 467.3C375.7 461.2 384.1 458.3 392.4 460L476.4 476.4L460 392.4C458.2 382.9 462.2 373.3 470.2 367.9L541.2 320.1L470.2 272.3C462.2 266.9 458.2 257.3 460 247.8L476.4 163.8L392.4 180.2C382.9 182 373.3 178 367.9 170L320.1 99L272.3 170zM320 440C253.7 440 200 386.3 200 320C200 253.7 253.7 200 320 200C386.3 200 440 253.7 440 320C440 386.3 386.3 440 320 440zM320 248C280.2 248 248 280.2 248 320C248 359.8 280.2 392 320 392C359.8 392 392 359.8 392 320C392 280.2 359.8 248 320 248z"/></svg>`,darktheme:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="#74c0fc" d="M303.3 112.7C196.2 121.2 112 210.8 112 320C112 434.9 205.1 528 320 528C353.3 528 384.7 520.2 412.6 506.3C309.2 482.9 232 390.5 232 280C232 214.2 259.4 154.9 303.3 112.7zM64 320C64 178.6 178.6 64 320 64C339.4 64 358.4 66.2 376.7 70.3C386.6 72.5 394 80.8 395.2 90.8C396.4 100.8 391.2 110.6 382.1 115.2C321.5 145.4 280 207.9 280 280C280 381.6 362.4 464 464 464C469 464 473.9 463.8 478.8 463.4C488.9 462.6 498.4 468.2 502.6 477.5C506.8 486.8 504.6 497.6 497.3 504.6C451.3 548.8 388.8 576 320 576C178.6 576 64 461.4 64 320z"/></svg>`,config:`<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="#b197fc" d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,axes:`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 7.8 L2.8 11.5" stroke="#d90000" stroke-width="1.4" stroke-linecap="round"/><path d="M7 7.8 L7 1.5" stroke="#4040ff" stroke-width="1.4" stroke-linecap="round"/><path d="M7 7.8 L13.2 9.3" stroke="#01E100" stroke-width="1.4" stroke-linecap="round"/></svg>`,grid:`<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="#e79c66" d="M152 64C174.1 64 192 81.9 192 104L192 152C192 174.1 174.1 192 152 192L104 192C81.9 192 64 174.1 64 152L64 104C64 81.9 81.9 64 104 64L152 64zM344 64C366.1 64 384 81.9 384 104L384 152C384 174.1 366.1 192 344 192L296 192C273.9 192 256 174.1 256 152L256 104C256 81.9 273.9 64 296 64L344 64zM536 64C558.1 64 576 81.9 576 104L576 152C576 174.1 558.1 192 536 192L488 192C465.9 192 448 174.1 448 152L448 104C448 81.9 465.9 64 488 64L536 64zM152 256C174.1 256 192 273.9 192 296L192 344C192 366.1 174.1 384 152 384L104 384C81.9 384 64 366.1 64 344L64 296C64 273.9 81.9 256 104 256L152 256zM344 256C366.1 256 384 273.9 384 296L384 344C384 366.1 366.1 384 344 384L296 384C273.9 384 256 366.1 256 344L256 296C256 273.9 273.9 256 296 256L344 256zM536 256C558.1 256 576 273.9 576 296L576 344C576 366.1 558.1 384 536 384L488 384C465.9 384 448 366.1 448 344L448 296C448 273.9 465.9 256 488 256L536 256zM152 448C174.1 448 192 465.9 192 488L192 536C192 558.1 174.1 576 152 576L104 576C81.9 576 64 558.1 64 536L64 488C64 465.9 81.9 448 104 448L152 448zM344 448C366.1 448 384 465.9 384 488L384 536C384 558.1 366.1 576 344 576L296 576C273.9 576 256 558.1 256 536L256 488C256 465.9 273.9 448 296 448L344 448zM536 448C558.1 448 576 465.9 576 488L576 536C576 558.1 558.1 576 536 576L488 576C465.9 576 448 558.1 448 536L448 488C448 465.9 465.9 448 488 448L536 448z"/></svg>`,image:`<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="#5cadeb" d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM224 176C250.5 176 272 197.5 272 224C272 250.5 250.5 272 224 272C197.5 272 176 250.5 176 224C176 197.5 197.5 176 224 176zM368 288C376.4 288 384.1 292.4 388.5 299.5L476.5 443.5C481 450.9 481.2 460.2 477 467.8C472.8 475.4 464.7 480 456 480L184 480C175.1 480 166.8 475 162.7 467.1C158.6 459.2 159.2 449.6 164.3 442.3L220.3 362.3C224.8 355.9 232.1 352.1 240 352.1C247.9 352.1 255.2 355.9 259.7 362.3L286.1 400.1L347.5 299.6C351.9 292.5 359.6 288.1 368 288.1z"/></svg>`,marker:`<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="#89ca48" d="M288.3 61.5C308.1 50.1 332.5 50.1 352.3 61.5L528.2 163C548 174.4 560.2 195.6 560.2 218.4L560.2 421.4C560.2 444.3 548 465.4 528.2 476.8L352.3 578.5C332.5 589.9 308.1 589.9 288.3 578.5L112.5 477C92.7 465.6 80.5 444.4 80.5 421.6L80.5 218.6C80.5 195.7 92.7 174.6 112.5 163.2L288.3 61.5zM496.1 421.5L496.1 255.4L352.3 338.4L352.3 504.5L496.1 421.5z"/></svg>`,markerarray:`<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="#89ca48" d="M348 62.7C330.7 52.7 309.3 52.7 292 62.7L207.8 111.3C190.5 121.3 179.8 139.8 179.8 159.8L179.8 261.7L91.5 312.7C74.2 322.7 63.5 341.2 63.5 361.2L63.5 458.5C63.5 478.5 74.2 497 91.5 507L175.8 555.6C193.1 565.6 214.5 565.6 231.8 555.6L320.1 504.6L408.4 555.6C425.7 565.6 447.1 565.6 464.4 555.6L548.5 507C565.8 497 576.5 478.5 576.5 458.5L576.5 361.2C576.5 341.2 565.8 322.7 548.5 312.7L460.2 261.7L460.2 159.8C460.2 139.8 449.5 121.3 432.2 111.3L348 62.7zM296 356.6L296 463.1L207.7 514.1C206.5 514.8 205.1 515.2 203.7 515.2L203.7 409.9L296 356.6zM527.4 357.2C528.1 358.4 528.5 359.8 528.5 361.2L528.5 458.5C528.5 461.4 527 464 524.5 465.4L440.2 514C439 514.7 437.6 515.1 436.2 515.1L436.2 409.8L527.4 357.2zM412.3 159.8L412.3 261.7L320 315L320 208.5L411.2 155.9C411.9 157.1 412.3 158.5 412.3 159.9z"/></svg>`,point:`<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="#dd36c1" d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320C528 205.1 434.9 112 320 112zM320 416C267 416 224 373 224 320C224 267 267 224 320 224C373 224 416 267 416 320C416 373 373 416 320 416z"/></svg>`,pose:`<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="#ff6b6b" d="M598.6 342.6C611.1 330.1 611.1 309.8 598.6 297.3L470.6 169.3C458.1 156.8 437.8 156.8 425.3 169.3C412.8 181.8 412.8 202.1 425.3 214.6L498.7 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L498.7 352L425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7C437.8 483.2 458.1 483.2 470.6 470.7L598.6 342.7z"/></svg>`,robotmodel:`<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 640 640"><path fill="#50c6a3" d="M112 520C112 502.3 126.3 488 144 488L496 488C513.7 488 528 502.3 528 520L528 552L112 552L112 520zM248 424L248 488L392 488L392 424L248 424z"/><path fill="none" stroke="#59d8b2" stroke-width="56" stroke-linecap="round" stroke-linejoin="round" d="M320 424L208 304L352 160L464 224"/><circle cx="320" cy="424" r="42" fill="#d6b52c"/><circle cx="208" cy="304" r="42" fill="#d6b52c"/><circle cx="352" cy="160" r="38" fill="#d6b52c"/><circle cx="464" cy="224" r="32" fill="#d6b52c"/><path fill="none" stroke="#59d8b2" stroke-width="28" stroke-linecap="round" d="M486 204L542 148M486 244L542 300"/><path fill="#50c6a3" d="M520 126L584 94L598 122L548 164L520 126zM548 284L598 326L584 354L520 322L548 284z"/></svg>`,tf:`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M6 9 L2.8 12 M11 3.7 L9.2 5.2" stroke="#d90000" stroke-width="1" stroke-linecap="round"/><path d="M6 9 L6 3.6 M11 3.7 L11 1" stroke="#4040ff" stroke-width="1" stroke-linecap="round"/><path d="M6 9 L11 9.9 M11 3.7 L13.2 4.1" stroke="#01e100" stroke-width="1" stroke-linecap="round"/></svg>`,trajectory:`<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="#51b5cf" d="M576 160C576 210.2 516.9 285.1 491.4 315C487.6 319.4 482 321.1 476.9 320L384 320C366.3 320 352 334.3 352 352C352 369.7 366.3 384 384 384L480 384C533 384 576 427 576 480C576 533 533 576 480 576L203.6 576C212.3 566.1 222.9 553.4 233.6 539.2C239.9 530.8 246.4 521.6 252.6 512L480 512C497.7 512 512 497.7 512 480C512 462.3 497.7 448 480 448L384 448C331 448 288 405 288 352C288 299 331 256 384 256L423.8 256C402.8 224.5 384 188.3 384 160C384 107 427 64 480 64C533 64 576 107 576 160zM181.1 553.1C177.3 557.4 173.9 561.2 171 564.4L169.2 566.4L169 566.2C163 570.8 154.4 570.2 149 564.4C123.8 537 64 466.5 64 416C64 363 107 320 160 320C213 320 256 363 256 416C256 446 234.9 483 212.5 513.9C201.8 528.6 190.8 541.9 181.7 552.4L181.1 553.1zM192 416C192 398.3 177.7 384 160 384C142.3 384 128 398.3 128 416C128 433.7 142.3 448 160 448C177.7 448 192 433.7 192 416zM480 192C497.7 192 512 177.7 512 160C512 142.3 497.7 128 480 128C462.3 128 448 142.3 448 160C448 177.7 462.3 192 480 192z"/></svg>`,twist:`<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="#b4ca42" d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM352 160C352 142.3 337.7 128 320 128C302.3 128 288 142.3 288 160C288 177.7 302.3 192 320 192C337.7 192 352 177.7 352 160zM320 480C355.3 480 384 451.3 384 416C384 399.8 378 384.9 368 373.7L437.5 234.8C443.4 222.9 438.6 208.5 426.8 202.6C415 196.7 400.5 201.5 394.6 213.3L325.1 352.2C323.4 352.1 321.7 352 320 352C284.7 352 256 380.7 256 416C256 451.3 284.7 480 320 480zM240 208C240 190.3 225.7 176 208 176C190.3 176 176 190.3 176 208C176 225.7 190.3 240 208 240C225.7 240 240 225.7 240 208zM160 352C177.7 352 192 337.7 192 320C192 302.3 177.7 288 160 288C142.3 288 128 302.3 128 320C128 337.7 142.3 352 160 352zM512 320C512 302.3 497.7 288 480 288C462.3 288 448 302.3 448 320C448 337.7 462.3 352 480 352C497.7 352 512 337.7 512 320z"/></svg>`,wrench:`<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="#dab634" d="M541.4 162.6C549 155 561.7 156.9 565.5 166.9C572.3 184.6 576 203.9 576 224C576 312.4 504.4 384 416 384C398.5 384 381.6 381.2 365.8 376L178.9 562.9C150.8 591 105.2 591 77.1 562.9C49 534.8 49 489.2 77.1 461.1L264 274.2C258.8 258.4 256 241.6 256 224C256 135.6 327.6 64 416 64C436.1 64 455.4 67.7 473.1 74.5C483.1 78.3 484.9 91 477.4 98.6L388.7 187.3C385.7 190.3 384 194.4 384 198.6L384 240C384 248.8 391.2 256 400 256L441.4 256C445.6 256 449.7 254.3 452.7 251.3L541.4 162.6z"/></svg>`,default:`<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="#888888" d="M431.2 476.5L163.5 208.8C141.1 240.2 128 278.6 128 320C128 426 214 512 320 512C361.5 512 399.9 498.9 431.2 476.5zM476.5 431.2C498.9 399.8 512 361.4 512 320C512 214 426 128 320 128C278.5 128 240.1 141.1 208.8 163.5L476.5 431.2zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z"/></svg>`,rightselect:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="var(--text-secondary)" d="M441.3 299.8C451.5 312.4 450.8 330.9 439.1 342.6L311.1 470.6C301.9 479.8 288.2 482.5 276.2 477.5C264.2 472.5 256.5 460.9 256.5 448L256.5 192C256.5 179.1 264.3 167.4 276.3 162.4C288.3 157.4 302 160.2 311.2 169.3L439.2 297.3L441.4 299.7z"/></svg>`,downselect:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="var(--text-secondary)" d="M300.3 440.8C312.9 451 331.4 450.3 343.1 438.6L471.1 310.6C480.3 301.4 483 287.7 478 275.7C473 263.7 461.4 256 448.5 256L192.5 256C179.6 256 167.9 263.8 162.9 275.8C157.9 287.8 160.7 301.5 169.9 310.6L297.9 438.6L300.3 440.8z"/></svg>`,outurl:`<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="var(--text-link)" d="M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z"/></svg>`};gy.map=`<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="#4DB6AC" d="M576 112C576 100.9 570.3 90.6 560.8 84.8C551.3 79 539.6 78.4 529.7 83.4L413.5 141.5L234.1 81.6C226 78.9 217.3 79.5 209.7 83.3L81.7 147.3C70.8 152.8 64 163.9 64 176L64 528C64 539.1 69.7 549.4 79.2 555.2C88.7 561 100.4 561.6 110.3 556.6L226.4 498.5L399.7 556.3C395.4 549.9 391.2 543.2 387.1 536.4C376.1 518.1 365.2 497.1 357.1 474.6L255.9 440.9L255.9 156.4L383.9 199.1L383.9 298.4C414.9 262.6 460.9 240 511.9 240C534.5 240 556.1 244.4 575.9 252.5L576 112zM512 288C445.7 288 392 340.8 392 405.9C392 474.8 456.1 556.3 490.6 595.2C502.2 608.2 521.9 608.2 533.5 595.2C568 556.3 632.1 474.8 632.1 405.9C632.1 340.8 578.4 288 512.1 288zM472 408C472 385.9 489.9 368 512 368C534.1 368 552 385.9 552 408C552 430.1 534.1 448 512 448C489.9 448 472 430.1 472 408z"/></svg>`;var _y=e=>e&&gy[e.toLowerCase()]||gy.default,vy=[{name:`Axes`,icon:gy.axes,description:`在 3D 视图中显示坐标轴，表示空间中的方向和位置`,weburl:``,defaultEnabled:!0,defaultProps:[{name:`长度`,type:`number`,value:`1`,indent:!1},{name:`轴半径`,type:`number`,value:`0.05`,indent:!1}],defaultExpanded:!1},{name:`Grid`,icon:gy.grid,description:`在 3D 视图中显示参考网格，用于空间定位和距离参考`,weburl:``,defaultEnabled:!0,defaultProps:[{name:`网格数量`,type:`number`,value:`10`,indent:!1},{name:`尺寸`,type:`number`,value:`1`,indent:!1},{name:`颜色`,type:`color`,value:`160; 160; 164`,indent:!1},{name:`透明度`,type:`number`,value:`0.5`,indent:!1},{name:`平面`,type:`select`,value:`XY`,options:[`XY`,`XZ`,`YZ`],indent:!1}],defaultExpanded:!1},{name:`Map`,icon:gy.map,description:`显示 nav/OccupancyGrid 二维占据栅格，并通过矩形增量、地图版本和 TF 持续更新`,weburl:``,defaultEnabled:!1,defaultProps:[{name:`话题名`,type:`select`,value:``,indent:!1,options:[]},{name:`增量话题`,type:`select`,value:``,indent:!1,options:[]},{name:`TF 名称`,type:`select`,value:``,indent:!1,options:[]},{name:`状态`,type:`text`,value:`等待地图`,indent:!1,readonly:!0},{name:`配色`,type:`select`,value:`Map`,indent:!1,options:[`Map`,`Costmap`,`Raw`]},{name:`透明度`,type:`number`,value:`1`,indent:!1},{name:`置于底层`,type:`bool`,value:`false`,indent:!1}],defaultExpanded:!1},{name:`Image`,icon:gy.image,description:`从消息类型为 sensor/Image 的话题创建图像显示`,weburl:`https://cv-rmvl.github.io/docs/2.x/d5/d2f/classrm_1_1msg_1_1Image.html`,defaultEnabled:!1,defaultProps:[{name:`话题名`,type:`select`,value:``,indent:!1,options:[]},{name:`传输选项`,type:`select`,value:`jpg`,indent:!1,options:[`jpg`,`png`,`bmp`]}],defaultExpanded:!1},{name:`Marker`,icon:gy.marker,description:`从消息类型为 viz/Marker 的话题创建显示，支持多种 Marker 类型`,weburl:`https://cv-rmvl.github.io/docs/2.x/d0/da6/classrm_1_1msg_1_1Marker.html`,defaultEnabled:!1,defaultProps:[{name:`话题名`,type:`select`,value:``,indent:!1,options:[]},{name:`标识`,type:`text_array`,value:`<none>; <none>`,indent:!1,readonly:!0},{name:`命名空间`,type:`text`,value:`<none>`,indent:!0,readonly:!0},{name:`ID`,type:`text`,value:`<none>`,indent:!0,readonly:!0}],defaultExpanded:!1},{name:`MarkerArray`,icon:gy.markerarray,description:`从消息类型为 viz/MarkerArray 的话题创建显示，支持多种 Marker 类型`,weburl:`https://cv-rmvl.github.io/docs/2.x/d2/dde/classrm_1_1msg_1_1MarkerArray.html`,defaultEnabled:!1,defaultProps:[{name:`话题名`,type:`select`,value:``,indent:!1,options:[]},{name:`命名空间`,type:`text`,value:`<none>`,indent:!1,readonly:!0}],defaultExpanded:!1},{name:`Point`,icon:gy.point,description:`从消息类型为 geometry/Point 的话题创建点显示，用于表示空间中的点`,weburl:`https://cv-rmvl.github.io/docs/2.x/d0/deb/classrm_1_1msg_1_1Point.html`,defaultEnabled:!1,defaultProps:[{name:`话题名`,type:`select`,value:``,indent:!1,options:[]},{name:`颜色`,type:`color`,value:`204; 41; 204`,indent:!1},{name:`透明度`,type:`number`,value:`1`,indent:!1},{name:`半径`,type:`number`,value:`0.1`,indent:!1}],defaultExpanded:!1},{name:`Pose`,icon:gy.pose,description:`从消息类型为 geometry/Pose 的话题创建箭头显示，用于表示位姿信息`,weburl:`https://cv-rmvl.github.io/docs/2.x/d4/d23/classrm_1_1msg_1_1Pose.html`,defaultEnabled:!1,defaultProps:[{name:`话题名`,type:`select`,value:``,indent:!1,options:[]},{name:`颜色`,type:`color`,value:`255; 25; 0`,indent:!1},{name:`透明度`,type:`number`,value:`0.8`,indent:!1},{name:`箭头长度`,type:`number`,value:`0.2`,indent:!1},{name:`箭头半径`,type:`number`,value:`0.1`,indent:!1},{name:`箭杆长度`,type:`number`,value:`0.8`,indent:!1},{name:`箭杆半径`,type:`number`,value:`0.02`,indent:!1}],defaultExpanded:!1},{name:`RobotModel`,icon:gy.robotmodel,description:`显示机器人在正确姿势下的视觉呈现，需要指定机器人名称作为公共前缀：<code>/tf</code>、<code>/tf_static</code> 和 <code>/robot_description</code> 分别为动态 TF、静态 TF 和 URDF 话题后缀。其中，URDF 的 data 字段为 <span style="color:#0a7500">ROS/ROS 2 兼容的</span>统一机器人描述格式`,weburl:``,defaultEnabled:!1,defaultProps:[{name:`机器人名称`,type:`select`,value:``,indent:!1,options:[]},{name:`状态`,type:`text`,value:`正常`,indent:!1,readonly:!0},{name:`透明度`,type:`number`,value:`1`,indent:!1}],defaultExpanded:!1},{name:`TF`,icon:gy.tf,description:`根据 TF 树所描述的坐标系之间的变换数据创建坐标轴显示，表示空间中的方向和位置，<span style="color:#0a7500">与 ROS/ROS 2 不同，LPSS 的 TF 显示需要指定话题名</span>`,weburl:`https://cv-rmvl.github.io/docs/2.x/d7/dc5/classrm_1_1msg_1_1TF.html`,defaultEnabled:!1,defaultProps:[{name:`话题名`,type:`select`,value:``,indent:!1,options:[]},{name:`状态`,type:`text`,value:`正常`,indent:!1,readonly:!0},{name:`尺寸`,type:`number`,value:`0.4`,indent:!1},{name:`显示名字`,type:`bool`,value:`true`,indent:!1},{name:`显示坐标轴`,type:`bool`,value:`true`,indent:!1}],defaultExpanded:!1},{name:`Trajectory`,icon:gy.trajectory,description:`显示机器人的运动轨迹回放，在 RobotPlanner 模块完成逆运动学计算后，可以得到消息类型为 motion/JointTrajectory 的轨迹消息`,weburl:`https://cv-rmvl.github.io/docs/2.x/d7/db9/classrm_1_1msg_1_1JointTrajectory.html`,defaultEnabled:!1,defaultProps:[{name:`机器人名称`,type:`select`,value:``,indent:!1,options:[]},{name:`状态`,type:`text`,value:`正常`,indent:!1,readonly:!0},{name:`透明度`,type:`number`,value:`1`,indent:!1}],defaultExpanded:!1},{name:`Twist`,icon:gy.twist,description:`从消息类型为 geometry/Twist 的话题创建速度显示，用于表示线速度和角速度信息`,weburl:`https://cv-rmvl.github.io/docs/2.x/d6/d47/classrm_1_1msg_1_1Twist.html`,defaultEnabled:!1,defaultProps:[{name:`话题名`,type:`select`,value:``,indent:!1,options:[]},{name:`线速度颜色`,type:`color`,value:`51; 204; 51`,indent:!1},{name:`角速度颜色`,type:`color`,value:`51; 51; 204`,indent:!1},{name:`线速度尺度`,type:`number`,value:`0.6`,indent:!1},{name:`角速度尺度`,type:`number`,value:`0.6`,indent:!1},{name:`线速度箭头半径`,type:`number`,value:`0.02`,indent:!1},{name:`角速度箭头半径`,type:`number`,value:`0.02`,indent:!1},{name:`透明度`,type:`number`,value:`0.8`,indent:!1}],defaultExpanded:!1},{name:`Wrench`,icon:gy.wrench,description:`从消息类型为 geometry/Wrench 的话题创建力矩显示，用于表示力和转矩信息`,weburl:`https://cv-rmvl.github.io/docs/2.x/de/d96/classrm_1_1msg_1_1Wrench.html`,defaultEnabled:!1,defaultProps:[{name:`话题名`,type:`select`,value:``,indent:!1,options:[]},{name:`力颜色`,type:`color`,value:`204; 51; 51`,indent:!1},{name:`转矩颜色`,type:`color`,value:`204; 204; 51`,indent:!1},{name:`力尺度`,type:`number`,value:`0.6`,indent:!1},{name:`转矩尺度`,type:`number`,value:`0.6`,indent:!1},{name:`力箭头半径`,type:`number`,value:`0.02`,indent:!1},{name:`转矩箭头半径`,type:`number`,value:`0.02`,indent:!1},{name:`透明度`,type:`number`,value:`0.8`,indent:!1}],defaultExpanded:!1}],yy={class:`modal-body custom-scrollbar`},by={class:`display-type-list custom-scrollbar`},xy=[`onClick`],Sy=[`innerHTML`],Cy={class:`modal-wrapper`},wy={class:`modal-wrapper-box custom-scrollbar`,style:{height:`60px`}},Ty=[`innerHTML`],Ey=[`href`],Dy={class:`modal-wrapper`},Oy=[`disabled`],ky={class:`modal-footer`},Ay=[`disabled`],jy=av(Hn({__name:`AddDisplayModal`,props:{show:{type:Boolean}},emits:[`close`,`add`],setup(e,{emit:t}){let n=e,r=t,i=B(null),a=B(``),o=Ca(()=>i.value?i.value.description+(i.value.weburl?`，详细信息可参考`:``):`请选择一个显示类型`);H(i,e=>{e&&(a.value=e.name)});let s=()=>{i.value&&r(`add`,i.value,a.value||i.value.name)};return(e,t)=>n.show?(U(),W(`div`,{key:0,class:`modal-overlay`,onClick:t[3]||=t=>e.$emit(`close`)},[G(`div`,{class:`modal-window`,onClick:t[2]||=Eo(()=>{},[`stop`])},[t[6]||=G(`div`,{class:`modal-header`},`添加新的显示项`,-1),G(`div`,yy,[G(`ul`,by,[(U(!0),W(ki,null,pr(Ht(vy),e=>(U(),W(`li`,{key:e.name,class:F([`display-type-item`,{selected:i.value?.name===e.name}]),onClick:t=>i.value=e},[G(`span`,{class:`display-icon`,innerHTML:e.icon},null,8,Sy),Ji(` `+ge(e.name),1)],10,xy))),128))])]),G(`div`,Cy,[t[4]||=G(`div`,{class:`modal-wrapper-header`},`描述`,-1),G(`div`,wy,[G(`span`,{innerHTML:o.value},null,8,Ty),i.value?.weburl?(U(),W(`a`,{key:0,href:i.value.weburl,target:`_blank`,class:`weburl-link`},`官方文档`,8,Ey)):Xi(``,!0)])]),G(`div`,Dy,[t[5]||=G(`div`,{class:`modal-wrapper-header`},`显示名称`,-1),En(G(`input`,{id:`display-name-input`,type:`text`,class:`modal-wrapper-box modal-input`,"onUpdate:modelValue":t[0]||=e=>a.value=e,disabled:!i.value,style:{height:`28px`}},null,8,Oy),[[yo,a.value]])]),G(`div`,ky,[G(`button`,{class:`modal-btn`,onClick:t[1]||=t=>e.$emit(`close`)},`取消`),G(`button`,{class:`modal-btn primary`,disabled:!i.value,onClick:s},`确定`,8,Ay)])])])):Xi(``,!0)}}),[[`__scopeId`,`data-v-25d9c9b5`]]),My={class:`modal-footer`},Ny=av(Hn({__name:`HelpAboutModal`,props:{show:{type:Boolean}},emits:[`close`],setup(e){return(t,n)=>e.show?(U(),W(`div`,{key:0,class:`modal-overlay`,onClick:n[2]||=e=>t.$emit(`close`)},[G(`div`,{class:`modal-window`,onClick:n[1]||=Eo(()=>{},[`stop`])},[n[3]||=Yi(`<div class="modal-header" data-v-a0521451>关于...</div><div class="modal-body custom-scrollbar" data-v-a0521451><div class="help-title" data-v-a0521451>LViz 帮助信息</div><p class="help-text" data-v-a0521451> LViz 是面向 LPSS/RMVL 的轻量级可视化工具，用于展示、调试机器人运行中的话题数据。数据由后端提供，通过 HTTP 接口轮询获取（如话题列表、图像、点、位姿、TF、Marker、URDF、轨迹等）。关于 LPSS 的详细信息，请参考 <a class="weburl-link" href="https://cv-rmvl.github.io/docs/2.x/d3/d8e/tutorial_modules_lpss.html" target="_blank" rel="noopener noreferrer" data-v-a0521451>LPSS 官方文档</a>。 </p><p class="help-text" data-v-a0521451>主要显示类型包括：</p><ul class="help-list" data-v-a0521451><li data-v-a0521451>2D：Image 话题图像展示</li><li data-v-a0521451>3D：Grid、Axes、Point、Pose、Twist、Wrench、TF、Marker/MarkerArray</li><li data-v-a0521451>模型：RobotModel（URDF + Mesh + 动态/静态 TF）、Trajectory（关节轨迹回放）</li></ul><p class="help-text" data-v-a0521451> 你可以通过“面板”菜单控制工具栏、功能控制和视角显示区域的显示与隐藏。 </p><p class="help-text" data-v-a0521451>视图操作：鼠标左键旋转、鼠标右键平移、鼠标滚轮缩放。</p></div>`,2),G(`div`,My,[G(`button`,{class:`modal-btn primary`,onClick:n[0]||=e=>t.$emit(`close`)},`关闭`)])])])):Xi(``,!0)}}),[[`__scopeId`,`data-v-a0521451`]]),Py=[`disabled`],Fy=[`disabled`,`innerHTML`],Iy={key:0,class:`combobox-dropdown custom-scrollbar`},Ly=[`onMousedown`],Ry=av(Hn({__name:`ComboBox`,props:yr({options:{},disabled:{type:Boolean}},{modelValue:{default:``},modelModifiers:{}}),emits:yr([`open`],[`update:modelValue`]),setup(e,{emit:t}){let n=t,r=zr(e,`modelValue`),i=B(!1),a=B(null),o=()=>{i.value=!0,n(`open`)},s=()=>{i.value=!0},c=()=>{i.value?i.value=!1:o()},l=e=>{r.value=e,i.value=!1},u=e=>{a.value?.contains(e.target)||(i.value=!1)};return rr(()=>document.addEventListener(`mousedown`,u)),or(()=>document.removeEventListener(`mousedown`,u)),(t,n)=>(U(),W(`div`,{class:`combobox`,ref_key:`comboRef`,ref:a},[En(G(`input`,{class:`prop-value combobox-input`,"onUpdate:modelValue":n[0]||=e=>r.value=e,disabled:e.disabled,style:ie({opacity:e.disabled?.5:1}),onFocus:o,onInput:s},null,44,Py),[[yo,r.value]]),G(`button`,{class:`combobox-toggle`,disabled:e.disabled,onClick:Eo(c,[`stop`]),style:ie({opacity:e.disabled?.5:1}),innerHTML:Ht(_y)(`downselect`)},null,12,Fy),i.value&&!e.disabled?(U(),W(`ul`,Iy,[(U(!0),W(ki,null,pr(e.options,e=>(U(),W(`li`,{key:e,class:F([`combobox-option`,{active:e===r.value}]),onMousedown:Eo(t=>l(e),[`prevent`])},ge(e),43,Ly))),128))])):Xi(``,!0)],512))}}),[[`__scopeId`,`data-v-e07a4348`]]),zy={class:`property-row`},By=[`innerHTML`],Vy={class:`prop-value-col`},Hy=[`value`,`disabled`],Uy={class:`prop-name-col group-child`},Wy={class:`prop-value-col`},Gy=[`value`,`onChange`,`onBlur`,`disabled`],Ky=Hn({__name:`PropGroup`,props:{parentProp:{},children:{},disabled:{type:Boolean}},emits:[`update:parentValue`,`update:childValue`],setup(e,{emit:t}){let n=e,r=t,i=B(!0),a=e=>e.target.value,o=e=>e.split(`;`).map(e=>e.trim()),s=e=>{let t=a(e);r(`update:parentValue`,t);let i=o(t);for(let e=0;e<n.children.length;e++)r(`update:childValue`,e,i[e]??``)},c=e=>{if(n.parentProp.type===`number_array`){let t=hy(a(e));r(`update:parentValue`,t);let i=o(t);for(let e=0;e<n.children.length;e++)r(`update:childValue`,e,i[e]??`0`)}},l=(e,t)=>{let i=a(t);r(`update:childValue`,e,i);let o=n.children.map((t,n)=>n===e?i:t.value);r(`update:parentValue`,o.join(`; `))},u=(e,t)=>{if(n.children[e].type===`number`){let i=my(a(t));r(`update:childValue`,e,i);let o=n.children.map((t,n)=>n===e?i:t.value);r(`update:parentValue`,o.join(`; `))}};return(t,n)=>(U(),W(ki,null,[G(`div`,zy,[G(`div`,{class:`prop-name-col group-parent`,onClick:n[0]||=e=>i.value=!i.value},[G(`span`,{class:F([`group-collapse-arrow`,{expanded:!i.value}]),innerHTML:Ht(_y)(`rightselect`)},null,10,By),Ji(` `+ge(e.parentProp.name),1)]),G(`div`,Vy,[G(`input`,{class:`prop-value`,value:e.parentProp.value,onChange:s,onBlur:c,disabled:e.disabled||e.parentProp.readonly,style:ie({opacity:e.disabled||e.parentProp.readonly?.5:1})},null,44,Hy)])]),i.value?Xi(``,!0):(U(!0),W(ki,{key:0},pr(e.children,(t,n)=>(U(),W(`div`,{class:`property-row`,key:n},[G(`div`,Uy,ge(t.name),1),G(`div`,Wy,[G(`input`,{class:`prop-value`,value:t.value,onChange:e=>l(n,e),onBlur:e=>u(n,e),disabled:e.disabled||t.readonly,style:ie({opacity:e.disabled||t.readonly?.5:1})},null,44,Gy)])]))),128))],64))}}),qy={class:`app-container`},Jy={class:`menu-bar`},Yy={class:`menu-dropdown-item menu-dropdown-item-check`},Xy={class:`menu-dropdown-item menu-dropdown-item-check`},Zy={class:`menu-dropdown-item menu-dropdown-item-check`},Qy={class:`menu-dropdown-item menu-dropdown-link`,href:`https://github.com/cv-rmvl/rmvl`,target:`_blank`,rel:`noopener noreferrer`},$y=[`innerHTML`],eb={class:`menu-dropdown-item menu-dropdown-link`,href:`https://cv-rmvl.github.io`,target:`_blank`,rel:`noopener noreferrer`},tb=[`innerHTML`],nb={key:0,class:`toolbar`},rb={class:`tool-group`},ib={class:`tool-group`},ab={class:`tool-group`,style:{border:`none`}},ob=[`innerHTML`],sb={class:`main-layout`},cb={key:0,class:`panel left-panel`,style:{display:`flex`,"flex-direction":`column`}},lb={style:{flex:`1`,display:`flex`,"flex-direction":`column`,"min-height":`0`}},ub={class:`panel-content custom-scrollbar`},db={class:`tree-item`},fb={class:`tree-col-name`},pb=[`innerHTML`],mb=[`innerHTML`],hb={key:0,class:`tree-children`},gb={class:`property-row`},_b={class:`prop-value-col`},vb={class:`property-row`},yb={class:`prop-value-col`},bb={class:`color-input-wrapper`},xb=[`value`],Sb={class:`property-row`},Cb={class:`prop-value-col`},wb=[`onClick`],Tb={class:`tree-row-container`},Eb=[`onClick`],Db=[`innerHTML`],Ob=[`innerHTML`],kb={class:`tree-col-value`},Ab=[`onUpdate:modelValue`],jb={key:0,class:`tree-children`},Mb={key:2,class:`property-row`},Nb={class:`prop-name-col`},Pb={class:`prop-value-col`},Fb=[`onUpdate:modelValue`,`disabled`],Ib={class:`color-input-wrapper`},Lb=[`value`,`onInput`,`disabled`],Rb=[`onUpdate:modelValue`,`disabled`,`onBlur`],zb=[`checked`,`disabled`,`onChange`],Bb=[`onUpdate:modelValue`,`disabled`],Vb={class:`selected-info-wrapper custom-scrollbar`},Hb={key:0,class:`selected-info-header`},Ub={key:1,class:`selected-info-body`},Wb=[`innerHTML`],Gb=[`href`],Kb={class:`panel-footer`},qb=[`disabled`],Jb=[`disabled`],Yb=[`disabled`],Xb={class:`image-panels-container`},Zb={class:`viewport-content`},Qb={key:1,class:`panel right-panel`},$b={class:`panel-content custom-scrollbar`},ex={class:`prop-value-col`},tx=[`onUpdate:modelValue`,`onChange`],nx={class:`status-bar`},rx={style:{"margin-right":`15px`}};Ao(Hn({__name:`App`,setup(e){let t=B(null),n=B(!0),r=B(!0),i=B(!0),a=B(!1),o=e=>{t.value=t.value===e?null:e},s=()=>{t.value=null},c=()=>{a.value=!0,s()},l=B(localStorage.getItem(`user-theme`)||`dark`),u=()=>{l.value=l.value===`light`?`dark`:`light`};H(l,e=>{document.documentElement.setAttribute(`data-theme`,e),localStorage.setItem(`user-theme`,e)},{immediate:!0});let d=B(`interact`),f=B({expanded:!0,fixedFrame:`map`,color:`48; 48; 48`,fps:$.fps}),p=e=>{if(!e)return`#000000`;let t=e.split(`;`).map(e=>parseInt(e.trim()));if(t.length<3||t.some(isNaN))return`#000000`;let n=e=>{let t=Math.max(0,Math.min(255,e||0)).toString(16);return t.length===1?`0`+t:t};return`#`+n(t[0])+n(t[1])+n(t[2])},m=e=>`${parseInt(e.slice(1,3),16)}; ${parseInt(e.slice(3,5),16)}; ${parseInt(e.slice(5,7),16)}`,h=(e,t)=>{e.value=m(t.target.value)},g=(e,t)=>e[t].type.endsWith(`_array`),_=(e,t)=>{let n=[];for(let r=t+1;r<e.length&&e[r].indent;r++)n.push(e[r]);return n},v=B([]),y=B(-1),b=B(1),x=e=>{y.value=e},S=e=>{y.value===e?v.value[e].expanded=!v.value[e].expanded:y.value=e},C=B(!1),w=(e,t)=>{let n=JSON.parse(JSON.stringify(e.defaultProps));v.value.push({id:b.value++,name:t||e.name,type:e.name,description:e.description,weburl:e.weburl,enabled:e.defaultEnabled,expanded:e.defaultExpanded,props:n}),C.value=!1},T=async()=>{if(y.value>=0&&y.value<v.value.length){let e=v.value[y.value];e.type===`Pose`?await Zo(`pose`,e.id):e.type===`Image`?await Zo(`image`,e.id):e.type===`Wrench`?await Zo(`wrench`,e.id):e.type===`Point`?await Zo(`point`,e.id):e.type===`Marker`?await Zo(`marker`,e.id):e.type===`MarkerArray`?await Zo(`marker_array`,e.id):e.type===`RobotModel`?await Zo(`robotmodel`,e.id):e.type===`Trajectory`?await Zo(`trajectory`,e.id):e.type===`Map`&&await Zo(`map`,e.id),delete ne[e.id],v.value.splice(y.value,1),y.value=-1}},E=()=>{if(y.value>=0){let e=v.value[y.value],t=JSON.parse(JSON.stringify(e));t.id=b.value++,t.name=e.name+`_copy`,v.value.push(t)}},D=()=>{if(y.value>=0){let e=v.value[y.value],t=prompt(`请输入新名称`,e.name);t&&t.trim()&&(e.name=t.trim())}},O=(e,t,n)=>{let r=e.props.find(e=>e.name===`标识`),i=e.props.find(e=>e.name===`命名空间`),a=e.props.find(e=>e.name===`ID`),o=t===``?`<none>`:t,s=n==null||n<0?`<none>`:String(n);e.type===`MarkerArray`?i&&(i.value=o):(r&&(r.value=`${o}; ${s}`),i&&(i.value=o),a&&(a.value=s))},ee=async(e,t)=>{if(e.type===`Image`&&t.name===`话题名`)t.options=await Io(`writer`,`sensor/Image`);else if(e.type===`Pose`&&t.name===`话题名`)t.options=await Io(`writer`,`geometry/Pose`);else if(e.type===`Wrench`&&t.name===`话题名`)t.options=await Io(`writer`,`geometry/Wrench`);else if(e.type===`Point`&&t.name===`话题名`)t.options=await Io(`writer`,`geometry/Point`);else if(e.type===`Marker`&&t.name===`话题名`)t.options=await Io(`writer`,`viz/Marker`);else if(e.type===`MarkerArray`&&t.name===`话题名`)t.options=await Io(`writer`,`viz/MarkerArray`);else if(e.type===`TF`&&t.name===`话题名`)t.options=await Io(`writer`,`motion/TF`);else if(e.type===`Map`&&t.name===`话题名`)t.options=await Io(`writer`,`nav/OccupancyGrid`);else if(e.type===`Map`&&t.name===`增量话题`)t.options=await Io(`writer`,`nav/OccupancyGridUpdate`);else if(e.type===`Map`&&t.name===`TF 名称`){let e=(await Io(`writer`,`motion/TF`)).filter(e=>e===`tf`||e===`tf_static`||e.endsWith(`/tf`)||e.endsWith(`/tf_static`)).map(e=>e.replace(/\/(tf|tf_static)$/,``).replace(/^(tf|tf_static)$/,``));t.options=Array.from(new Set(e)).map(e=>e||`<undefined>`)}else if(e.type===`RobotModel`&&t.name===`机器人名称`){let e=await Io(`writer`,`motion/TF`),n=await Io(`writer`,`motion/URDF`),r=e.filter(e=>e.endsWith(`/tf`)).map(e=>e.slice(0,-3)),i=e.filter(e=>e.endsWith(`/tf_static`)).map(e=>e.slice(0,-10)),a=n.filter(e=>e.endsWith(`/robot_description`)).map(e=>e.slice(0,-18));t.options=r.filter(e=>i.includes(e)&&a.includes(e)).map(e=>e===``?`<undefined>`:e)}else if(e.type===`Trajectory`&&t.name===`机器人名称`){let e=await Io(`writer`,`motion/URDF`),n=await Io(`writer`,`motion/JointTrajectory`),r=e.filter(e=>e.endsWith(`/robot_description`)).map(e=>e.slice(0,-18)),i=n.filter(e=>e.endsWith(`/trajectory`)).map(e=>e.slice(0,-11));t.options=r.filter(e=>i.includes(e)).map(e=>e===``?`<undefined>`:e)}},k=[{key:`type`,label:`类型`},{key:`nearClip`,label:`近裁剪距离`},{key:`targetFrame`,label:`目标坐标系`},{key:`camera`,label:`相机 (Camera)`,header:!0},{key:`pitch`,label:`俯仰角 (Pitch)`,indent:!0},{key:`yaw`,label:`偏航角 (Yaw)`,indent:!0},{key:`focalPoint`,label:`焦点`,indent:!0},{key:`offset`,label:`位置偏移 (Offset)`,header:!0},{key:`offsetX`,label:`X`,indent:!0},{key:`offsetY`,label:`Y`,indent:!0},{key:`offsetZ`,label:`Z`,indent:!0}],A=Dt({type:``,nearClip:``,targetFrame:``,pitch:$.pitch.toFixed(2),yaw:$.yaw.toFixed(2),focalPoint:``,offsetX:`0.0000`,offsetY:`0.0000`,offsetZ:`0.0000`}),j=Dt({pitch:$.pitch,yaw:$.yaw}),M=B(1),N=Dt({x:0,y:0,z:0}),P=e=>{let t=parseFloat(A[e]);if(!isNaN(t))switch(e){case`pitch`:j.pitch=Math.max(-90,Math.min(90,t)),A.pitch=j.pitch.toFixed(2);break;case`yaw`:j.yaw=t,A.yaw=((j.yaw%360+360)%360).toFixed(2);break;case`offsetX`:N.x=t;break;case`offsetY`:N.y=t;break;case`offsetZ`:N.z=t;break}};H(()=>[N.x,N.y,N.z],([e,t,n])=>{A.offsetX=e.toFixed(4),A.offsetY=t.toFixed(4),A.offsetZ=n.toFixed(4)});let te=Ca(()=>v.value.some(e=>e.enabled&&(e.type===`Grid`||e.type===`Map`||e.type===`Axes`||e.type===`Pose`||e.type===`Twist`||e.type===`Wrench`||e.type===`Point`||e.type===`Marker`||e.type===`MarkerArray`||e.type===`RobotModel`))),ne=Dt({}),re=Ca(()=>{let e=v.value.find(e=>e.enabled&&e.type===`Grid`),t=v.value.filter(e=>e.enabled&&e.type===`Map`).map(e=>ne[e.id]||0);return e&&t.push(Number(e.props[0].value)*Number(e.props[1].value)),Math.max($.worldSize,...t)}),ae=B(!1),oe=e=>{if(e.button===0){ae.value=!0;let t=e.clientX,n=e.clientY,r=j.pitch,i=j.yaw,a=e=>{let a=e.clientX-t,o=e.clientY-n;j.yaw=i-a*.2,j.pitch=Math.max(-90,Math.min(90,r+o*.2)),A.pitch=j.pitch.toFixed(2),A.yaw=((j.yaw%360+360)%360).toFixed(2)},o=()=>{ae.value=!1,document.removeEventListener(`mousemove`,a),document.removeEventListener(`mouseup`,o)};document.addEventListener(`mousemove`,a),document.addEventListener(`mouseup`,o)}else if(e.button===2){ae.value=!0;let t=e.clientX,n=e.clientY,r={x:N.x,y:N.y,z:N.z};if(!te.value){ae.value=!1;return}let i=e=>{let i=e.clientX-t,a=e.clientY-n,o=re.value/(500*M.value),s=j.yaw*Math.PI/180,c=j.pitch*Math.PI/180,l=-Math.sin(s),u=Math.cos(s),d=-Math.sin(c)*Math.cos(s),f=-Math.sin(c)*Math.sin(s),p=Math.cos(c),m=(i*l-a*d)*o,h=(i*u-a*f)*o,g=-a*p*o;N.x=r.x+m,N.y=r.y+h,N.z=r.z+g},a=()=>{ae.value=!1,document.removeEventListener(`mousemove`,i),document.removeEventListener(`mouseup`,a)};document.addEventListener(`mousemove`,i),document.addEventListener(`mouseup`,a)}},se=e=>{let t=e.deltaY>0?-.1:.1;M.value=Math.max(.02,Math.min(50,M.value+t*M.value))},ce=()=>{j.pitch=$.pitch,j.yaw=$.yaw,M.value=1,N.x=0,N.y=0,N.z=0,A.pitch=$.pitch.toFixed(2),A.yaw=$.yaw.toFixed(2)};return rr(()=>{w(vy[1]),window.addEventListener(`beforeunload`,Qo),document.addEventListener(`click`,s)}),sr(()=>{window.removeEventListener(`beforeunload`,Qo),document.removeEventListener(`click`,s)}),(e,s)=>(U(),W(`div`,qy,[G(`header`,Jy,[s[32]||=G(`div`,{class:`menu-item`},`文件`,-1),G(`div`,{class:F([`menu-item menu-item-with-dropdown`,{active:t.value===`panel`}]),onClick:s[4]||=Eo(e=>o(`panel`),[`stop`])},[s[28]||=Ji(` 面板 `,-1),t.value===`panel`?(U(),W(`div`,{key:0,class:`menu-dropdown`,onClick:s[3]||=Eo(()=>{},[`stop`])},[G(`label`,Yy,[En(G(`input`,{type:`checkbox`,"onUpdate:modelValue":s[0]||=e=>n.value=e},null,512),[[bo,n.value]]),s[25]||=Ji(` 工具 `,-1)]),G(`label`,Xy,[En(G(`input`,{type:`checkbox`,"onUpdate:modelValue":s[1]||=e=>r.value=e},null,512),[[bo,r.value]]),s[26]||=Ji(` 功能控制 `,-1)]),G(`label`,Zy,[En(G(`input`,{type:`checkbox`,"onUpdate:modelValue":s[2]||=e=>i.value=e},null,512),[[bo,i.value]]),s[27]||=Ji(` 视角显示 `,-1)])])):Xi(``,!0)],2),G(`div`,{class:F([`menu-item menu-item-with-dropdown`,{active:t.value===`help`}]),onClick:s[6]||=Eo(e=>o(`help`),[`stop`])},[s[31]||=Ji(` 帮助 `,-1),t.value===`help`?(U(),W(`div`,{key:0,class:`menu-dropdown`,onClick:s[5]||=Eo(()=>{},[`stop`])},[G(`button`,{type:`button`,class:`menu-dropdown-item`,onClick:c},`关于...`),G(`a`,Qy,[s[29]||=G(`span`,{class:`menu-link-text`},`Github`,-1),G(`span`,{class:`menu-link-icon`,innerHTML:Ht(_y)(`outurl`)},null,8,$y)]),G(`a`,eb,[s[30]||=G(`span`,{class:`menu-link-text`},`RMVL 用户手册`,-1),G(`span`,{class:`menu-link-icon`,innerHTML:Ht(_y)(`outurl`)},null,8,tb)])])):Xi(``,!0)],2)]),n.value?(U(),W(`div`,nb,[G(`div`,rb,[G(`button`,{class:F([`tool-btn`,{active:d.value===`interact`}]),onClick:s[7]||=e=>d.value=`interact`},`交互`,2),G(`button`,{class:F([`tool-btn`,{active:d.value===`camera`}]),onClick:s[8]||=e=>d.value=`camera`},`移动相机`,2),G(`button`,{class:F([`tool-btn`,{active:d.value===`select`}]),onClick:s[9]||=e=>d.value=`select`},`选择`,2),G(`button`,{class:F([`tool-btn`,{active:d.value===`focus`}]),onClick:s[10]||=e=>d.value=`focus`},`聚焦`,2),G(`button`,{class:F([`tool-btn`,{active:d.value===`measure`}]),onClick:s[11]||=e=>d.value=`measure`},`测量`,2)]),G(`div`,ib,[G(`button`,{class:F([`tool-btn`,{active:d.value===`2d_pose`}]),onClick:s[12]||=e=>d.value=`2d_pose`},`2D位姿估计`,2),G(`button`,{class:F([`tool-btn`,{active:d.value===`2d_goal`}]),onClick:s[13]||=e=>d.value=`2d_goal`},`2D导航目标`,2),G(`button`,{class:F([`tool-btn`,{active:d.value===`publish_point`}]),onClick:s[14]||=e=>d.value=`publish_point`},`发布点`,2)]),G(`div`,{class:`tool-group`,style:{border:`none`}},[G(`button`,{class:`tool-btn`,onClick:ce},`重置视图`)]),s[34]||=G(`div`,{style:{flex:`1`}},null,-1),G(`div`,ab,[s[33]||=Ji(`切换主题 `,-1),G(`button`,{class:`icon-btn`,onClick:u,innerHTML:l.value===`dark`?Ht(_y)(`darktheme`):Ht(_y)(`lighttheme`)},null,8,ob)])])):Xi(``,!0),G(`div`,sb,[r.value?(U(),W(`aside`,cb,[G(`div`,lb,[s[40]||=G(`div`,{class:`panel-header`},`功能控制`,-1),G(`div`,ub,[G(`div`,db,[G(`div`,{class:`tree-row-container`,onClick:s[15]||=e=>f.value.expanded=!f.value.expanded},[G(`div`,fb,[G(`span`,{class:F([`tree-indent`,{expanded:f.value.expanded}]),innerHTML:Ht(_y)(`rightselect`)},null,10,pb),G(`span`,{class:`tree-icon`,innerHTML:Ht(_y)(`config`)},null,8,mb),s[35]||=Ji(` 全局选项 `,-1)]),s[36]||=G(`div`,{class:`tree-col-value`},null,-1)])]),f.value.expanded?(U(),W(`div`,hb,[G(`div`,gb,[s[37]||=G(`div`,{class:`prop-name-col`},`固定坐标系`,-1),G(`div`,_b,[En(G(`input`,{class:`prop-value`,"onUpdate:modelValue":s[16]||=e=>f.value.fixedFrame=e},null,512),[[yo,f.value.fixedFrame]])])]),G(`div`,vb,[s[38]||=G(`div`,{class:`prop-name-col`},`背景颜色`,-1),G(`div`,yb,[En(G(`input`,{class:`prop-value`,"onUpdate:modelValue":s[17]||=e=>f.value.color=e},null,512),[[yo,f.value.color]]),G(`div`,bb,[G(`input`,{type:`color`,value:p(f.value.color),onInput:s[18]||=e=>f.value.color=m(e.target.value),class:`color-input-hidden`},null,40,xb),G(`div`,{class:`color-input-preview`,style:ie({backgroundColor:p(f.value.color)})},null,4)])])]),G(`div`,Sb,[s[39]||=G(`div`,{class:`prop-name-col`},`帧率`,-1),G(`div`,Cb,[En(G(`input`,{class:`prop-value`,"onUpdate:modelValue":s[19]||=e=>f.value.fps=e},null,512),[[yo,f.value.fps]])])])])):Xi(``,!0),(U(!0),W(ki,null,pr(v.value,(e,t)=>(U(),W(`div`,{key:e.id},[G(`div`,{class:F([`tree-item`,{selected:y.value===t}]),onClick:e=>x(t)},[G(`div`,Tb,[G(`div`,{class:`tree-col-name`,onClick:Eo(e=>S(t),[`stop`])},[G(`span`,{class:F([`tree-indent`,{expanded:e.expanded}]),innerHTML:Ht(_y)(`rightselect`)},null,10,Db),G(`span`,{class:`tree-icon`,innerHTML:Ht(_y)(e.type)},null,8,Ob),Ji(` `+ge(e.name),1)],8,Eb),G(`div`,kb,[En(G(`input`,{type:`checkbox`,"onUpdate:modelValue":t=>e.enabled=t,onClick:s[20]||=Eo(()=>{},[`stop`])},null,8,Ab),[[bo,e.enabled]])])])],10,wb),e.expanded?(U(),W(`div`,jb,[(U(!0),W(ki,null,pr(e.props,(t,n)=>(U(),W(ki,{key:n},[t.indent?(U(),W(ki,{key:0},[],64)):g(e.props,n)?(U(),zi(Ky,{key:1,parentProp:t,children:_(e.props,n),disabled:e.enabled,"onUpdate:parentValue":e=>t.value=e,"onUpdate:childValue":(t,r)=>_(e.props,n)[t].value=r},null,8,[`parentProp`,`children`,`disabled`,`onUpdate:parentValue`,`onUpdate:childValue`])):(U(),W(`div`,Mb,[G(`div`,Nb,ge(t.name),1),G(`div`,Pb,[t.type===`select`?(U(),zi(Ry,{key:0,modelValue:t.value,"onUpdate:modelValue":e=>t.value=e,options:t.options,disabled:e.enabled||t.readonly,onOpen:n=>ee(e,t)},null,8,[`modelValue`,`onUpdate:modelValue`,`options`,`disabled`,`onOpen`])):t.type===`color`?(U(),W(ki,{key:1},[En(G(`input`,{class:`prop-value`,"onUpdate:modelValue":e=>t.value=e,disabled:e.enabled||t.readonly,style:ie({opacity:e.enabled||t.readonly?.5:1})},null,12,Fb),[[yo,t.value]]),G(`div`,Ib,[G(`input`,{type:`color`,value:p(t.value),onInput:e=>h(t,e),disabled:e.enabled||t.readonly,class:`color-input-hidden`},null,40,Lb),G(`div`,{class:`color-input-preview`,style:ie({backgroundColor:p(t.value)})},null,4)])],64)):t.type===`number`?En((U(),W(`input`,{key:2,class:`prop-value`,"onUpdate:modelValue":e=>t.value=e,disabled:e.enabled||t.readonly,style:ie({opacity:e.enabled||t.readonly?.5:1}),onBlur:e=>t.value=Ht(my)(t.value)},null,44,Rb)),[[yo,t.value]]):t.type===`bool`?(U(),W(`input`,{key:3,type:`checkbox`,checked:t.value===`true`,disabled:e.enabled||t.readonly,onChange:e=>{t.value=e.target.checked?`true`:`false`}},null,40,zb)):En((U(),W(`input`,{key:4,class:`prop-value`,"onUpdate:modelValue":e=>t.value=e,disabled:e.enabled||t.readonly,style:ie({opacity:e.enabled||t.readonly?.5:1})},null,12,Bb)),[[yo,t.value]])])]))],64))),128))])):Xi(``,!0)]))),128))]),G(`div`,Vb,[y.value===-1?Xi(``,!0):(U(),W(`div`,Hb,ge(v.value[y.value].name),1)),y.value===-1?Xi(``,!0):(U(),W(`div`,Ub,[G(`span`,{innerHTML:v.value[y.value].description+(v.value[y.value].weburl?`，详细信息可参考`:``)},null,8,Wb),v.value[y.value]?.weburl?(U(),W(`a`,{key:0,href:v.value[y.value].weburl,target:`_blank`,class:`weburl-link`},`官方文档`,8,Gb)):Xi(``,!0)]))]),G(`div`,Kb,[G(`button`,{class:`panel-btn`,onClick:s[21]||=e=>C.value=!0},`添加`),G(`button`,{class:`panel-btn`,onClick:E,disabled:y.value===-1},`复制`,8,qb),G(`button`,{class:`panel-btn`,onClick:T,disabled:y.value===-1},`移除`,8,Jb),G(`button`,{class:`panel-btn`,onClick:D,disabled:y.value===-1},`重命名`,8,Yb)])]),G(`div`,Xb,[(U(!0),W(ki,null,pr(v.value,e=>(U(),W(ki,{key:e.id},[e.type===`Image`?(U(),zi(ov,{key:0,title:e.name,topic:e.props[0].value,enabled:e.enabled,hint:e.props[1].value,fps:f.value.fps,id:e.id},null,8,[`title`,`topic`,`enabled`,`hint`,`fps`,`id`])):Xi(``,!0)],64))),128))])])):Xi(``,!0),G(`main`,{class:`viewport`,onMousedown:oe,onWheel:Eo(se,[`prevent`]),onContextmenu:s[22]||=Eo(()=>{},[`prevent`]),style:ie({cursor:ae.value?`grabbing`:`grab`,backgroundColor:p(f.value.color)})},[(U(!0),W(ki,null,pr(v.value,e=>(U(),W(ki,{key:`grid-`+e.id},[e.type===`Grid`?(U(),zi(sv,{key:0,enabled:e.enabled,cellCount:Number(e.props[0].value),cellSize:Number(e.props[1].value),color:e.props[2].value,alpha:Number(e.props[3].value),plane:e.props[4].value,offsetX:N.x,offsetY:N.y,offsetZ:N.z,pitch:j.pitch,yaw:j.yaw,zoom:M.value,showDisk:ae.value},null,8,[`enabled`,`cellCount`,`cellSize`,`color`,`alpha`,`plane`,`offsetX`,`offsetY`,`offsetZ`,`pitch`,`yaw`,`zoom`,`showDisk`])):Xi(``,!0)],64))),128)),(U(!0),W(ki,null,pr(v.value,e=>(U(),W(ki,{key:`map-`+e.id},[e.type===`Map`?(U(),zi(cv,{key:0,enabled:e.enabled,topic:e.props[0].value,updateTopic:e.props[1].value,tfName:e.props[2].value,fixedFrame:f.value.fixedFrame,scheme:e.props[4].value,alpha:Number(e.props[5].value),drawBehind:e.props[6].value===`true`,fps:f.value.fps,id:e.id,pitch:j.pitch,yaw:j.yaw,zoom:M.value,worldSize:re.value,dx:N.x,dy:N.y,dz:N.z,onStatusChange:t=>{e.props[3].value=t},onMapSize:t=>{ne[e.id]=t}},null,8,[`enabled`,`topic`,`updateTopic`,`tfName`,`fixedFrame`,`scheme`,`alpha`,`drawBehind`,`fps`,`id`,`pitch`,`yaw`,`zoom`,`worldSize`,`dx`,`dy`,`dz`,`onStatusChange`,`onMapSize`])):Xi(``,!0)],64))),128)),(U(!0),W(ki,null,pr(v.value,e=>(U(),W(ki,{key:`axes-`+e.id},[e.type===`Axes`?(U(),zi(lv,{key:0,enabled:e.enabled,length:Number(e.props[0].value),radius:Number(e.props[1].value),pitch:j.pitch,yaw:j.yaw,zoom:M.value,worldSize:re.value,dx:N.x,dy:N.y,dz:N.z},null,8,[`enabled`,`length`,`radius`,`pitch`,`yaw`,`zoom`,`worldSize`,`dx`,`dy`,`dz`])):Xi(``,!0)],64))),128)),(U(!0),W(ki,null,pr(v.value,e=>(U(),W(ki,{key:`point-`+e.id},[e.type===`Point`?(U(),zi(uv,{key:0,enabled:e.enabled,topic:e.props[0].value,color:e.props[1].value,alpha:Number(e.props[2].value),fps:f.value.fps,id:e.id,pitch:j.pitch,yaw:j.yaw,zoom:M.value,worldSize:re.value,radius:Number(e.props[3].value),dx:N.x,dy:N.y,dz:N.z},null,8,[`enabled`,`topic`,`color`,`alpha`,`fps`,`id`,`pitch`,`yaw`,`zoom`,`worldSize`,`radius`,`dx`,`dy`,`dz`])):Xi(``,!0)],64))),128)),(U(!0),W(ki,null,pr(v.value,e=>(U(),W(ki,{key:`twist-`+e.id},[e.type===`Twist`?(U(),zi(Sv,{key:0,enabled:e.enabled,topic:e.props[0].value,linearColor:e.props[1].value,angularColor:e.props[2].value,linearScale:Number(e.props[3].value),angularScale:Number(e.props[4].value),linearRadius:Number(e.props[5].value),angularRadius:Number(e.props[6].value),alpha:Number(e.props[7].value),fps:f.value.fps,id:e.id,pitch:j.pitch,yaw:j.yaw,zoom:M.value,worldSize:re.value,dx:N.x,dy:N.y,dz:N.z},null,8,[`enabled`,`topic`,`linearColor`,`angularColor`,`linearScale`,`angularScale`,`linearRadius`,`angularRadius`,`alpha`,`fps`,`id`,`pitch`,`yaw`,`zoom`,`worldSize`,`dx`,`dy`,`dz`])):Xi(``,!0)],64))),128)),(U(!0),W(ki,null,pr(v.value,e=>(U(),W(ki,{key:`wrench-`+e.id},[e.type===`Wrench`?(U(),zi(gv,{key:0,enabled:e.enabled,topic:e.props[0].value,forceColor:e.props[1].value,torqueColor:e.props[2].value,forceScale:Number(e.props[3].value),torqueScale:Number(e.props[4].value),forceRadius:Number(e.props[5].value),torqueRadius:Number(e.props[6].value),alpha:Number(e.props[7].value),fps:f.value.fps,id:e.id,pitch:j.pitch,yaw:j.yaw,zoom:M.value,worldSize:re.value,dx:N.x,dy:N.y,dz:N.z},null,8,[`enabled`,`topic`,`forceColor`,`torqueColor`,`forceScale`,`torqueScale`,`forceRadius`,`torqueRadius`,`alpha`,`fps`,`id`,`pitch`,`yaw`,`zoom`,`worldSize`,`dx`,`dy`,`dz`])):Xi(``,!0)],64))),128)),(U(!0),W(ki,null,pr(v.value,e=>(U(),W(ki,{key:`pose-`+e.id},[e.type===`Pose`?(U(),zi(Cv,{key:0,enabled:e.enabled,topic:e.props[0].value,color:e.props[1].value,alpha:Number(e.props[2].value),fps:f.value.fps,id:e.id,pitch:j.pitch,yaw:j.yaw,zoom:M.value,worldSize:re.value,headLength:Number(e.props[3].value),headRadius:Number(e.props[4].value),shaftLength:Number(e.props[5].value),shaftRadius:Number(e.props[6].value),dx:N.x,dy:N.y,dz:N.z},null,8,[`enabled`,`topic`,`color`,`alpha`,`fps`,`id`,`pitch`,`yaw`,`zoom`,`worldSize`,`headLength`,`headRadius`,`shaftLength`,`shaftRadius`,`dx`,`dy`,`dz`])):Xi(``,!0)],64))),128)),(U(!0),W(ki,null,pr(v.value,e=>(U(),W(ki,{key:`tf-`+e.id},[e.type===`TF`?(U(),zi(wv,{key:0,enabled:e.enabled,topic:e.props[0].value,fixedFrame:f.value.fixedFrame,size:Number(e.props[2].value),showName:e.props[3].value===`true`,showAxes:e.props[4].value===`true`,fps:f.value.fps,id:e.id,pitch:j.pitch,yaw:j.yaw,zoom:M.value,worldSize:re.value,dx:N.x,dy:N.y,dz:N.z,onStatusChange:t=>{e.props[1].value=t}},null,8,[`enabled`,`topic`,`fixedFrame`,`size`,`showName`,`showAxes`,`fps`,`id`,`pitch`,`yaw`,`zoom`,`worldSize`,`dx`,`dy`,`dz`,`onStatusChange`])):Xi(``,!0)],64))),128)),(U(!0),W(ki,null,pr(v.value,e=>(U(),W(ki,{key:`marker-`+e.id},[e.type===`Marker`||e.type===`MarkerArray`?(U(),zi(py,{key:0,enabled:e.enabled,topic:e.props[0].value,fps:f.value.fps,id:e.id,pitch:j.pitch,yaw:j.yaw,zoom:M.value,worldSize:re.value,isArray:e.type===`MarkerArray`,dx:N.x,dy:N.y,dz:N.z,"onUpdate:identifier":(t,n)=>O(e,t,n)},null,8,[`enabled`,`topic`,`fps`,`id`,`pitch`,`yaw`,`zoom`,`worldSize`,`isArray`,`dx`,`dy`,`dz`,`onUpdate:identifier`])):Xi(``,!0)],64))),128)),(U(!0),W(ki,null,pr(v.value,e=>(U(),W(ki,{key:`robotmodel-`+e.id},[e.type===`RobotModel`?(U(),zi(Ev,{key:0,enabled:e.enabled,name:e.props[0].value,fixedFrame:f.value.fixedFrame,alpha:Number(e.props[2].value),fps:f.value.fps,id:e.id,pitch:j.pitch,yaw:j.yaw,zoom:M.value,worldSize:re.value,dx:N.x,dy:N.y,dz:N.z,onStatusChange:t=>{e.props[1].value=t}},null,8,[`enabled`,`name`,`fixedFrame`,`alpha`,`fps`,`id`,`pitch`,`yaw`,`zoom`,`worldSize`,`dx`,`dy`,`dz`,`onStatusChange`])):Xi(``,!0)],64))),128)),(U(!0),W(ki,null,pr(v.value,e=>(U(),W(ki,{key:`trajectory-`+e.id},[e.type===`Trajectory`?(U(),zi(ty,{key:0,enabled:e.enabled,name:e.props[0].value,alpha:Number(e.props[2].value),fps:f.value.fps,id:e.id,pitch:j.pitch,yaw:j.yaw,zoom:M.value,worldSize:re.value,dx:N.x,dy:N.y,dz:N.z,onStatusChange:t=>{e.props[1].value=t}},null,8,[`enabled`,`name`,`alpha`,`fps`,`id`,`pitch`,`yaw`,`zoom`,`worldSize`,`dx`,`dy`,`dz`,`onStatusChange`])):Xi(``,!0)],64))),128)),En(G(`div`,Zb,[...s[41]||=[G(`div`,{style:{"font-size":`14px`,"text-align":`center`,color:`#888`}},` 3D 视图区域 `,-1)]],512),[[La,!te.value]])],36),i.value?(U(),W(`aside`,Qb,[s[42]||=G(`div`,{class:`panel-header`},`视角显示`,-1),G(`div`,$b,[(U(),W(ki,null,pr(k,e=>G(`div`,{key:e.key,class:`property-row`,style:ie(e.header?{backgroundColor:l.value===`dark`?`#383838`:`#e0e0e0`}:{})},[G(`div`,{class:`prop-name-col`,style:ie({paddingLeft:e.indent?`36px`:void 0,fontWeight:e.header?`bold`:void 0,color:e.header?l.value===`dark`?`#ddd`:`#333`:void 0})},ge(e.label),5),G(`div`,ex,[e.header?Xi(``,!0):En((U(),W(`input`,{key:0,class:`prop-value`,"onUpdate:modelValue":t=>A[e.key]=t,onChange:t=>P(e.key)},null,40,tx)),[[yo,A[e.key]]])])],4)),64))])])):Xi(``,!0)]),G(`footer`,nx,[G(`span`,null,`LViz 已部署至 `+ge(Ht(No)),1),s[43]||=G(`span`,{class:`status-tips`},[G(`b`,null,`鼠标左键：`),Ji(`旋转视图；`),G(`b`,null,`鼠标滚轮：`),Ji(`缩放视图；`),G(`b`,null,`鼠标右键：`),Ji(`平移视图`)],-1),s[44]||=G(`span`,{class:`status-spacer`},null,-1),G(`span`,rx,`FPS: `+ge(f.value.fps),1)]),C.value?(U(),zi(jy,{key:1,show:C.value,onClose:s[23]||=e=>C.value=!1,onAdd:w},null,8,[`show`])):Xi(``,!0),a.value?(U(),zi(Ny,{key:2,show:a.value,onClose:s[24]||=e=>a.value=!1},null,8,[`show`])):Xi(``,!0)]))}})).mount(`#app`);