// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function n(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,i,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,u=parseInt(i,10),!isFinite(u)){if(!t(i))throw new Error("invalid integer. Value: "+i);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(i=(-u).toString(e),r.precision&&(i=n(i,r.precision,r.padRight)),i="-"+i):(i=u.toString(e),u||r.precision?r.precision&&(i=n(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):a.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,c=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function y(r){var e,i,n=parseFloat(r.arg);if(!isFinite(n)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);n=r.arg}switch(r.specifier){case"e":case"E":i=n.toExponential(r.precision);break;case"f":case"F":i=n.toFixed(r.precision);break;case"g":case"G":f(n)<1e-4?((e=r.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(r.precision),r.alternate||(i=c.call(i,b,"$1e"),i=c.call(i,w,"e"),i=c.call(i,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=c.call(i,p,"e+0$1"),i=c.call(i,g,"e-0$1"),r.alternate&&(i=c.call(i,v,"$1."),i=c.call(i,d,"$1.e")),n>=0&&r.sign&&(i=r.sign+i),i=r.specifier===s.call(r.specifier)?s.call(i):l.call(i)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var N=String.fromCharCode,E=Array.isArray;function k(r){return r!=r}function _(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,i,a,o,f,l,s,c,p,g,v,d;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(i=r[s],"string"==typeof i)f+=i;else{if(e=void 0!==i.precision,!(i=_(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,c=0;c<t.length;c++)switch(a=t.charAt(c)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,k(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,k(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=u(i);break;case"s":i.maxWidth=e?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!k(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=k(o)?String(i.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=y(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(p=i.arg,g=i.width,v=i.padRight,d=void 0,(d=g-p.length)<0?p:p=v?p+m(d):m(d)+p)),f+=i.arg||"",l+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,i,n;for(t=[],n=0,i=S.exec(r);i;)(e=r.slice(n,S.lastIndex-i[0].length)).length&&t.push(e),t.push(V(i)),n=S.lastIndex,i=S.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function F(r){var e,t;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return T.apply(null,e)}var j=Object.prototype,I=j.toString,A=j.__defineGetter__,O=j.__defineSetter__,M=j.__lookupGetter__,P=j.__lookupSetter__;var $=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(M.call(r,e)||P.call(r,e)?(i=r.__proto__,r.__proto__=j,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&A&&A.call(r,e,t.get),o&&O&&O.call(r,e,t.set),r};function C(r,e,t){$(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function R(r){return"number"==typeof r}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return G&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var L=Object.prototype.hasOwnProperty;var U="function"==typeof Symbol?Symbol:void 0,X="function"==typeof U?U.toStringTag:"";var Y=Z()?function(r){var e,t,i,n,a;if(null==r)return W.call(r);t=r[X],a=X,e=null!=(n=r)&&L.call(n,a);try{r[X]=void 0}catch(e){return W.call(r)}return i=W.call(r),e?r[X]=t:delete r[X],i}:function(r){return W.call(r)},q=Number,z=q.prototype.toString;var B=Z();function J(r){return"object"==typeof r&&(r instanceof q||(B?function(r){try{return z.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Y(r)))}function D(r){return R(r)||J(r)}C(D,"isPrimitive",R),C(D,"isObject",J);var H=Number.POSITIVE_INFINITY,K=q.NEGATIVE_INFINITY,Q=Math.floor;function rr(r){return r<H&&r>K&&Q(e=r)===e;var e}function er(r){return R(r)&&rr(r)}function tr(r){return J(r)&&rr(r.valueOf())}function ir(r){return er(r)||tr(r)}function nr(r){return er(r)&&r>0}function ar(r){return tr(r)&&r.valueOf()>0}function or(r){return nr(r)||ar(r)}function ur(r){return r!=r}C(ir,"isPrimitive",er),C(ir,"isObject",tr),C(or,"isPrimitive",nr),C(or,"isObject",ar);var fr="function"==typeof Float64Array;var lr="function"==typeof Float64Array?Float64Array:null;var sr="function"==typeof Float64Array?Float64Array:void 0;var cr=function(){var r,e,t;if("function"!=typeof lr)return!1;try{e=new lr([1,3.14,-3.14,NaN]),t=e,r=(fr&&t instanceof Float64Array||"[object Float64Array]"===Y(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var pr=Math.sqrt;function gr(r){return 0===r&&1/r===K}function vr(r){return 0===r&&1/r===H}function dr(r){var e,t,i,n,a,o,u,f,l;if(!nr(r))throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("1JF8B",r));return e=function(r,e){var t,i,n,a,o,u,f,l;if(!nr(r))throw new TypeError(F("invalid argument. Must provide a positive integer. Value: `%s`.",r));if(i=new Array(r),f=r-1,a=0,l=-1,u=0,arguments.length>1){if(!R(e))throw new TypeError(F("invalid argument. Must provide a number. Value: `%s`.",e));return o=e,function(e){var f;if(0===arguments.length)return 0===u?null:u<r?a/u:a/r;if(l=(l+1)%r,ur(e))u=r,a=NaN;else{if(u<r)return i[l]=e,(a+=(t=e-o)*t)/(u+=1);if(ur(i[l])){for(a=0,f=0;f<r;f++)if(f!==l){if(ur(i[f])){u=r,a=NaN;break}t=i[f]-o,a+=t*t}}else!1===ur(a)&&(n=i[l],a+=(e-n)*(e-o+n-o))}return i[l]=e,a/r}}return o=0,function(e){var s,c;if(0===arguments.length)return 0===u?null:1===u?ur(a)?NaN:0:u<r?a/(u-1):a/f;if(l=(l+1)%r,ur(e))u=r,a=NaN;else{if(u<r)return i[l]=e,a+=(t=e-o)*(e-(o+=t/(u+=1))),1===u?0:a/(u-1);if(1===u)return a=0;if(ur(i[l])){for(u=1,o=e,a=0,s=0;s<r;s++)if(s!==l){if(ur(c=i[s])){u=r,a=NaN;break}a+=(t=c-o)*(c-(o+=t/(u+=1)))}}else!1===ur(a)&&(n=i[l],a+=(t=e-n)*(n-o+(e-(o+=t/r))))}return i[l]=e,a/f}}(r),t=function(r){var e,t,i,n,a;if(!nr(r))throw new TypeError(F("invalid argument. Must provide a positive integer. Value: `%s`.",r));return e=new cr(r),t=H,i=K,a=-1,n=0,function(o){var u,f;if(0===arguments.length)return 0===n?null:(i+t)/2;if(a=(a+1)%r,0===o&&(o=0),ur(o))n=r,t=o,i=o;else if(n<r)n+=1,o<t&&(t=o),o>i&&(i=o);else if(e[a]===t&&o>t||e[a]===i&&o<i||ur(e[a])){for(t=o,i=o,f=0;f<r;f++)if(f!==a){if(ur(u=e[f])){t=u,i=u;break}u<t&&(t=u),u>i&&(i=u)}}else o<t?t=o:o>i&&(i=o);return e[a]=o,(i+t)/2}}(r),n=function(r){var e,t,i,n,a;if(!nr(r))throw new TypeError(F("invalid argument. Must provide a positive integer. Value: `%s`.",r));return e=new cr(r),t=H,i=K,a=-1,n=0,function(o){var u,f;if(0===arguments.length)return 0===n?null:i-t;if(a=(a+1)%r,0===o&&(o=0),ur(o))n=r,t=o,i=o;else if(n<r)n+=1,o<t&&(t=o),o>i&&(i=o);else if(e[a]===t&&o>t||e[a]===i&&o<i||ur(e[a])){for(t=o,i=o,f=0;f<r;f++)if(f!==a){if(ur(u=e[f])){t=u,i=u;break}u<t&&(t=u),u>i&&(i=u)}}else o<t?t=o:o>i&&(i=o);return e[a]=o,i-t}}(r),a=function(r,e){var t,i,n,a,o,u,f,l;if(!nr(r))throw new TypeError(F("invalid argument. Must provide a positive integer. Value: `%s`.",r));if(i=new cr(r),f=r-1,a=0,l=-1,u=0,arguments.length>1){if(!R(e))throw new TypeError(F("invalid argument. Must provide a number. Value: `%s`.",e));return o=e,function(e){var f;if(0===arguments.length)return 0===u?null:pr(u<r?a/u:a/r);if(l=(l+1)%r,ur(e))u=r,a=NaN;else{if(u<r)return i[l]=e,pr((a+=(t=e-o)*t)/(u+=1));if(ur(i[l])){for(a=0,f=0;f<r;f++)if(f!==l){if(ur(i[f])){u=r,a=NaN;break}t=i[f]-o,a+=t*t}}else!1===ur(a)&&(n=i[l],a+=(e-n)*(e-o+n-o))}return i[l]=e,pr(a/r)}}return o=0,function(e){var s,c;if(0===arguments.length)return 0===u?null:1===u?ur(a)?NaN:0:pr(u<r?a/(u-1):a/f);if(l=(l+1)%r,ur(e))u=r,a=NaN;else{if(u<r)return i[l]=e,a+=(t=e-o)*(e-(o+=t/(u+=1))),1===u?0:pr(a/(u-1));if(1===u)return a=0;if(ur(i[l])){for(u=1,o=e,a=0,s=0;s<r;s++)if(s!==l){if(ur(c=i[s])){u=r,a=NaN;break}a+=(t=c-o)*(c-(o+=t/(u+=1)))}}else!1===ur(a)&&(n=i[l],a+=(t=e-n)*(n-o+(e-(o+=t/r))))}return i[l]=e,pr(a/f)}}(r),o=function(r){var e,t,i,n,a;if(!nr(r))throw new TypeError(F("invalid argument. Must provide a positive integer. Value: `%s`.",r));return t=new cr(r),i=0,a=-1,n=0,function(o){var u;if(0===arguments.length)return 0===n?null:i;if(a=(a+1)%r,ur(o))n=r,i=NaN;else if(n<r)i+=(e=o-i)/(n+=1);else if(ur(t[a])){for(n=1,i=o,u=0;u<r;u++)if(u!==a){if(ur(t[u])){n=r,i=NaN;break}n+=1,e=t[u]-i,i+=e/n}}else!1===ur(i)&&(e=o-t[a],i+=e/r);return t[a]=o,i}}(r),u=function(r){var e,t,i,n;if(!nr(r))throw new TypeError(F("invalid argument. Must provide a positive integer. Value: `%s`.",r));return e=new cr(r),t=0,n=-1,i=0,function(a){var o;if(0===arguments.length)return 0===i?null:t;if(n=(n+1)%r,ur(a))i=r,t=NaN;else if(i<r)i+=1,t+=a;else if(ur(e[n])){for(i=1,t=a,o=0;o<r;o++)if(o!==n){if(ur(e[o])){i=r,t=NaN;break}i+=1,t+=e[o]}}else!1===ur(t)&&(t+=a-e[n]);return e[n]=a,t}}(r),l=function(r){var e,t,i,n;if(!nr(r))throw new TypeError(F("invalid argument. Must provide a positive integer. Value: `%s`.",r));return e=new cr(r),t=H,n=-1,i=0,function(a){var o,u;if(0===arguments.length)return 0===i?null:t;if(n=(n+1)%r,i<r)i+=1,(ur(a)||a<t||a===t&&gr(a))&&(t=a);else if(ur(a)||a<t)t=a;else if(e[n]===t&&a>t||ur(e[n])){for(t=a,u=0;u<r;u++)if(u!==n){if(ur(o=e[u])){t=o;break}(o<t||o===t&&gr(o))&&(t=o)}}else if(e[n]===t&&a===t&&0===a)if(gr(a))t=a;else if(gr(e[n]))for(t=a,u=0;u<r;u++)if(u!==n&&gr(e[u])){t=e[u];break}return e[n]=a,t}}(r),f=function(r){var e,t,i,n;if(!nr(r))throw new TypeError(F("invalid argument. Must provide a positive integer. Value: `%s`.",r));return e=new cr(r),t=K,n=-1,i=0,function(a){var o,u;if(0===arguments.length)return 0===i?null:t;if(n=(n+1)%r,i<r)i+=1,(ur(a)||a>t||a===t&&vr(a))&&(t=a);else if(ur(a)||a>t)t=a;else if(e[n]===t&&a<t||ur(e[n])){for(t=a,u=0;u<r;u++)if(u!==n){if(ur(o=e[u])){t=o;break}(o>t||o===t&&vr(o))&&(t=o)}}else if(e[n]===t&&a===t&&0===a)if(vr(a))t=a;else if(vr(e[n]))for(t=a,u=0;u<r;u++)if(u!==n&&vr(e[u])){t=e[u];break}return e[n]=a,t}}(r),i={},function(s){if(0===arguments.length)return i;return i.window=r,i.sum=u(s),i.mean=o(s),i.variance=e(s),i.stdev=a(s),i.min=l(s),i.max=f(s),i.range=n(s),i.midrange=t(s),i}}export{dr as default};
//# sourceMappingURL=mod.js.map
