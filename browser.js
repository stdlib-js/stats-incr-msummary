// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function n(e){return"number"==typeof e}function t(e){var r,n="";for(r=0;r<e;r++)n+="0";return n}function i(e,r,n){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=n?e+t(a):t(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(e){var r,t,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(t=(-u).toString(r),e.precision&&(t=i(t,e.precision,e.padRight)),t="-"+t):(t=u.toString(r),u||e.precision?e.precision&&(t=i(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(e){return"string"==typeof e}var l=Math.abs,s=String.prototype.toLowerCase,c=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,v=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,y=/\.0*e/,b=/(\..*[^0])0*e/;function m(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,y,"e"),t=p.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=p.call(t,g,"e+0$1"),t=p.call(t,d,"e-0$1"),e.alternate&&(t=p.call(t,v,"$1."),t=p.call(t,h,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===c.call(e.specifier)?c.call(t):s.call(t)}function N(e){var r,n="";for(r=0;r<e;r++)n+=" ";return n}function E(e,r,n){var t=r-e.length;return t<0?e:e=n?e+N(t):N(t)+e}var k=String.fromCharCode,_=isNaN,T=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,n,t,a,o,l,s,c,p;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",s=1,c=0;c<e.length;c++)if(f(t=e[c]))l+=t;else{if(r=void 0!==t.precision,!(t=V(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,_(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!_(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(o)?String(t.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=E(t.arg,t.width,t.padRight)),l+=t.arg||"",s+=1}return l}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,n,t,i;for(n=[],i=0,t=x.exec(e);t;)(r=e.slice(i,x.lastIndex-t[0].length)).length&&n.push(r),n.push(j(t)),i=x.lastIndex,t=x.exec(e);return(r=e.slice(i)).length&&n.push(r),n}function I(e){return"string"==typeof e}function A(e){var r,n,t;if(!I(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(n=new Array(arguments.length))[0]=r,t=1;t<n.length;t++)n[t]=arguments[t];return S.apply(null,n)}var O=Object.prototype,M=O.toString,P=O.__defineGetter__,$=O.__defineSetter__,C=O.__lookupGetter__,R=O.__lookupSetter__,G=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,n){var t,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===M.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof n||null===n||"[object Array]"===M.call(n))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(C.call(e,r)||R.call(e,r)?(t=e.__proto__,e.__proto__=O,delete e[r],e[r]=n.value,e.__proto__=t):e[r]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,n.get),o&&$&&$.call(e,r,n.set),e};function Z(e,r,n){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function W(e){return"number"==typeof e}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return L&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,Y=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,z="function"==typeof q?q.toStringTag:"",B=U()?function(e){var r,n,t,i,a;if(null==e)return X.call(e);n=e[z],a=z,r=null!=(i=e)&&Y.call(i,a);try{e[z]=void 0}catch(r){return X.call(e)}return t=X.call(e),r?e[z]=n:delete e[z],t}:function(e){return X.call(e)},H=Number,J=H.prototype.toString,D=U();function K(e){return"object"==typeof e&&(e instanceof H||(D?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Number]"===B(e)))}function Q(e){return W(e)||K(e)}Z(Q,"isPrimitive",W),Z(Q,"isObject",K);var ee=Number.POSITIVE_INFINITY,re=H.NEGATIVE_INFINITY,ne=Math.floor;function te(e){return e<ee&&e>re&&ne(r=e)===r;var r}function ie(e){return W(e)&&te(e)}function ae(e){return K(e)&&te(e.valueOf())}function oe(e){return ie(e)||ae(e)}function ue(e){return ie(e)&&e>0}function fe(e){return ae(e)&&e.valueOf()>0}function le(e){return ue(e)||fe(e)}function se(e){return e!=e}Z(oe,"isPrimitive",ie),Z(oe,"isObject",ae),Z(le,"isPrimitive",ue),Z(le,"isObject",fe);var ce="function"==typeof Float64Array,pe="function"==typeof Float64Array?Float64Array:null,ge="function"==typeof Float64Array?Float64Array:void 0,de=function(){var e,r,n;if("function"!=typeof pe)return!1;try{r=new pe([1,3.14,-3.14,NaN]),n=r,e=(ce&&n instanceof Float64Array||"[object Float64Array]"===B(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?ge:function(){throw new Error("not implemented")};function ve(e){return e!=e}function he(e){return e!=e}function we(e){return e!=e}var ye=Math.sqrt;function be(e){return e!=e}function me(e){return 0===e&&1/e===re}function Ne(e){return e!=e}function Ee(e){return 0===e&&1/e===ee}function ke(e){return e!=e}function _e(e){return e!=e}return function(e){var r,n,t,i,a,o,u,f,l;if(!ue(e))throw new TypeError(function(){var e,r=arguments,n="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}("1JF8B,Hs",e));return r=function(e,r){var n,t,i,a,o,u,f,l;if(!ue(e))throw new TypeError(A("invalid argument. Must provide a positive integer. Value: `%s`.",e));if(t=new Array(e),f=e-1,a=0,l=-1,u=0,arguments.length>1){if(!W(r))throw new TypeError(A("invalid argument. Must provide a number. Value: `%s`.",r));return o=r,c}return o=0,s;function s(r){var s,c;if(0===arguments.length)return 0===u?null:1===u?he(a)?NaN:0:u<e?a/(u-1):a/f;if(l=(l+1)%e,he(r))u=e,a=NaN;else{if(u<e)return t[l]=r,a+=(n=r-o)*(r-(o+=n/(u+=1))),1===u?0:a/(u-1);if(1===u)return a=0;if(he(t[l])){for(u=1,o=r,a=0,s=0;s<e;s++)if(s!==l){if(he(c=t[s])){u=e,a=NaN;break}a+=(n=c-o)*(c-(o+=n/(u+=1)))}}else!1===he(a)&&(i=t[l],a+=(n=r-i)*(i-o+(r-(o+=n/e))))}return t[l]=r,a/f}function c(r){var f;if(0===arguments.length)return 0===u?null:u<e?a/u:a/e;if(l=(l+1)%e,he(r))u=e,a=NaN;else{if(u<e)return t[l]=r,(a+=(n=r-o)*n)/(u+=1);if(he(t[l])){for(a=0,f=0;f<e;f++)if(f!==l){if(he(t[f])){u=e,a=NaN;break}n=t[f]-o,a+=n*n}}else!1===he(a)&&(i=t[l],a+=(r-i)*(r-o+i-o))}return t[l]=r,a/e}}(e),n=function(e){var r,n,t,i,a;if(!ue(e))throw new TypeError(A("invalid argument. Must provide a positive integer. Value: `%s`.",e));return r=new de(e),n=ee,t=re,a=-1,i=0,function(o){var u,f;if(0===arguments.length)return 0===i?null:(t+n)/2;if(a=(a+1)%e,0===o&&(o=0),_e(o))i=e,n=o,t=o;else if(i<e)i+=1,o<n&&(n=o),o>t&&(t=o);else if(r[a]===n&&o>n||r[a]===t&&o<t||_e(r[a])){for(n=o,t=o,f=0;f<e;f++)if(f!==a){if(_e(u=r[f])){n=u,t=u;break}u<n&&(n=u),u>t&&(t=u)}}else o<n?n=o:o>t&&(t=o);return r[a]=o,(t+n)/2}}(e),i=function(e){var r,n,t,i,a;if(!ue(e))throw new TypeError(A("invalid argument. Must provide a positive integer. Value: `%s`.",e));return r=new de(e),n=ee,t=re,a=-1,i=0,function(o){var u,f;if(0===arguments.length)return 0===i?null:t-n;if(a=(a+1)%e,0===o&&(o=0),ke(o))i=e,n=o,t=o;else if(i<e)i+=1,o<n&&(n=o),o>t&&(t=o);else if(r[a]===n&&o>n||r[a]===t&&o<t||ke(r[a])){for(n=o,t=o,f=0;f<e;f++)if(f!==a){if(ke(u=r[f])){n=u,t=u;break}u<n&&(n=u),u>t&&(t=u)}}else o<n?n=o:o>t&&(t=o);return r[a]=o,t-n}}(e),a=function(e,r){var n,t,i,a,o,u,f,l;if(!ue(e))throw new TypeError(A("invalid argument. Must provide a positive integer. Value: `%s`.",e));if(t=new de(e),f=e-1,a=0,l=-1,u=0,arguments.length>1){if(!W(r))throw new TypeError(A("invalid argument. Must provide a number. Value: `%s`.",r));return o=r,c}return o=0,s;function s(r){var s,c;if(0===arguments.length)return 0===u?null:1===u?we(a)?NaN:0:ye(u<e?a/(u-1):a/f);if(l=(l+1)%e,we(r))u=e,a=NaN;else{if(u<e)return t[l]=r,a+=(n=r-o)*(r-(o+=n/(u+=1))),1===u?0:ye(a/(u-1));if(1===u)return a=0;if(we(t[l])){for(u=1,o=r,a=0,s=0;s<e;s++)if(s!==l){if(we(c=t[s])){u=e,a=NaN;break}a+=(n=c-o)*(c-(o+=n/(u+=1)))}}else!1===we(a)&&(i=t[l],a+=(n=r-i)*(i-o+(r-(o+=n/e))))}return t[l]=r,ye(a/f)}function c(r){var f;if(0===arguments.length)return 0===u?null:ye(u<e?a/u:a/e);if(l=(l+1)%e,we(r))u=e,a=NaN;else{if(u<e)return t[l]=r,ye((a+=(n=r-o)*n)/(u+=1));if(we(t[l])){for(a=0,f=0;f<e;f++)if(f!==l){if(we(t[f])){u=e,a=NaN;break}n=t[f]-o,a+=n*n}}else!1===we(a)&&(i=t[l],a+=(r-i)*(r-o+i-o))}return t[l]=r,ye(a/e)}}(e),o=function(e){var r,n,t,i,a;if(!ue(e))throw new TypeError(A("invalid argument. Must provide a positive integer. Value: `%s`.",e));return n=new de(e),t=0,a=-1,i=0,function(o){var u;if(0===arguments.length)return 0===i?null:t;if(a=(a+1)%e,ve(o))i=e,t=NaN;else if(i<e)t+=(r=o-t)/(i+=1);else if(ve(n[a])){for(i=1,t=o,u=0;u<e;u++)if(u!==a){if(ve(n[u])){i=e,t=NaN;break}i+=1,r=n[u]-t,t+=r/i}}else!1===ve(t)&&(r=o-n[a],t+=r/e);return n[a]=o,t}}(e),u=function(e){var r,n,t,i;if(!ue(e))throw new TypeError(A("invalid argument. Must provide a positive integer. Value: `%s`.",e));return r=new de(e),n=0,i=-1,t=0,function(a){var o;if(0===arguments.length)return 0===t?null:n;if(i=(i+1)%e,se(a))t=e,n=NaN;else if(t<e)t+=1,n+=a;else if(se(r[i])){for(t=1,n=a,o=0;o<e;o++)if(o!==i){if(se(r[o])){t=e,n=NaN;break}t+=1,n+=r[o]}}else!1===se(n)&&(n+=a-r[i]);return r[i]=a,n}}(e),l=function(e){var r,n,t,i;if(!ue(e))throw new TypeError(A("invalid argument. Must provide a positive integer. Value: `%s`.",e));return r=new de(e),n=ee,i=-1,t=0,function(a){var o,u;if(0===arguments.length)return 0===t?null:n;if(i=(i+1)%e,t<e)t+=1,(be(a)||a<n||a===n&&me(a))&&(n=a);else if(be(a)||a<n)n=a;else if(r[i]===n&&a>n||be(r[i])){for(n=a,u=0;u<e;u++)if(u!==i){if(be(o=r[u])){n=o;break}(o<n||o===n&&me(o))&&(n=o)}}else if(r[i]===n&&a===n&&0===a)if(me(a))n=a;else if(me(r[i]))for(n=a,u=0;u<e;u++)if(u!==i&&me(r[u])){n=r[u];break}return r[i]=a,n}}(e),f=function(e){var r,n,t,i;if(!ue(e))throw new TypeError(A("invalid argument. Must provide a positive integer. Value: `%s`.",e));return r=new de(e),n=re,i=-1,t=0,function(a){var o,u;if(0===arguments.length)return 0===t?null:n;if(i=(i+1)%e,t<e)t+=1,(Ne(a)||a>n||a===n&&Ee(a))&&(n=a);else if(Ne(a)||a>n)n=a;else if(r[i]===n&&a<n||Ne(r[i])){for(n=a,u=0;u<e;u++)if(u!==i){if(Ne(o=r[u])){n=o;break}(o>n||o===n&&Ee(o))&&(n=o)}}else if(r[i]===n&&a===n&&0===a)if(Ee(a))n=a;else if(Ee(r[i]))for(n=a,u=0;u<e;u++)if(u!==i&&Ee(r[u])){n=r[u];break}return r[i]=a,n}}(e),t={},function(s){return 0===arguments.length||(t.window=e,t.sum=u(s),t.mean=o(s),t.variance=r(s),t.stdev=a(s),t.min=l(s),t.max=f(s),t.range=i(s),t.midrange=n(s)),t}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).incrmsummary=r();
//# sourceMappingURL=browser.js.map
