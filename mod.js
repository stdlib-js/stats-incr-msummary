// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,t=Object.prototype,n=t.toString,i=t.__defineGetter__,o=t.__defineSetter__,u=t.__lookupGetter__,a=t.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,f){var l,c,v,s;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===n.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((c="value"in f)&&(u.call(r,e)||a.call(r,e)?(l=r.__proto__,r.__proto__=t,delete r[e],r[e]=f.value,r.__proto__=l):r[e]=f.value),v="get"in f,s="set"in f,c&&(v||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(r,e,f.get),s&&o&&o.call(r,e,f.set),r};function l(r,e,t){f(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function c(r){return"number"==typeof r}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return v&&"symbol"==typeof Symbol.toStringTag}var p=Object.prototype.toString;var y=Object.prototype.hasOwnProperty;var b="function"==typeof Symbol?Symbol.toStringTag:"";var g=s()?function(r){var e,t,n,i,o;if(null==r)return p.call(r);t=r[b],o=b,e=null!=(i=r)&&y.call(i,o);try{r[b]=void 0}catch(e){return p.call(r)}return n=p.call(r),e?r[b]=t:delete r[b],n}:function(r){return p.call(r)},m=Number,w=m.prototype.toString;var d=s();function h(r){return"object"==typeof r&&(r instanceof m||(d?function(r){try{return w.call(r),!0}catch(r){return!1}}(r):"[object Number]"===g(r)))}function N(r){return c(r)||h(r)}l(N,"isPrimitive",c),l(N,"isObject",h);var _=Number.POSITIVE_INFINITY,T=m.NEGATIVE_INFINITY,j=Math.floor;function E(r){return r<_&&r>T&&j(e=r)===e;var e}function k(r){return c(r)&&E(r)}function V(r){return h(r)&&E(r.valueOf())}function O(r){return k(r)||V(r)}function S(r){return k(r)&&r>0}function M(r){return V(r)&&r.valueOf()>0}function A(r){return S(r)||M(r)}function F(r){return r!=r}l(O,"isPrimitive",k),l(O,"isObject",V),l(A,"isPrimitive",S),l(A,"isObject",M);var I="function"==typeof Float64Array;var P="function"==typeof Float64Array?Float64Array:null;var x="function"==typeof Float64Array?Float64Array:void 0;var G=function(){var r,e,t;if("function"!=typeof P)return!1;try{e=new P([1,3.14,-3.14,NaN]),t=e,r=(I&&t instanceof Float64Array||"[object Float64Array]"===g(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?x:function(){throw new Error("not implemented")};var C=Math.sqrt;function Y(r){return 0===r&&1/r===T}function q(r){return 0===r&&1/r===_}function R(r){var e,t,n,i,o,u,a,f,l;if(!S(r))throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("0eW8T",r));return e=function(r,e){var t,n,i,o,u,a,f,l;if(!S(r))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+r+"`.");if(n=new Array(r),f=r-1,o=0,l=-1,a=0,arguments.length>1){if(!c(e))throw new TypeError("invalid argument. Must provide a number primitive. Value: `"+e+"`.");return u=e,s}return u=0,v;function v(e){var c,v;if(0===arguments.length)return 0===a?null:1===a?F(o)?NaN:0:a<r?o/(a-1):o/f;if(l=(l+1)%r,F(e))a=r,o=NaN;else{if(a<r)return n[l]=e,o+=(t=e-u)*(e-(u+=t/(a+=1))),1===a?0:o/(a-1);if(1===a)return o=0;if(F(n[l])){for(a=1,u=e,o=0,c=0;c<r;c++)if(c!==l){if(F(v=n[c])){a=r,o=NaN;break}o+=(t=v-u)*(v-(u+=t/(a+=1)))}}else!1===F(o)&&(i=n[l],o+=(t=e-i)*(i-u+(e-(u+=t/r))))}return n[l]=e,o/f}function s(e){var f;if(0===arguments.length)return 0===a?null:a<r?o/a:o/r;if(l=(l+1)%r,F(e))a=r,o=NaN;else{if(a<r)return n[l]=e,(o+=(t=e-u)*t)/(a+=1);if(F(n[l])){for(o=0,f=0;f<r;f++)if(f!==l){if(F(n[f])){a=r,o=NaN;break}t=n[f]-u,o+=t*t}}else!1===F(o)&&(i=n[l],o+=(e-i)*(e-u+i-u))}return n[l]=e,o/r}}(r),t=function(r){var e,t,n,i,o;if(!S(r))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+r+"`.");return e=new G(r),t=_,n=T,o=-1,i=0,function(u){var a,f;if(0===arguments.length)return 0===i?null:(n+t)/2;if(o=(o+1)%r,0===u&&(u=0),F(u))i=r,t=u,n=u;else if(i<r)i+=1,u<t&&(t=u),u>n&&(n=u);else if(e[o]===t&&u>t||e[o]===n&&u<n||F(e[o])){for(t=u,n=u,f=0;f<r;f++)if(f!==o){if(F(a=e[f])){t=a,n=a;break}a<t&&(t=a),a>n&&(n=a)}}else u<t?t=u:u>n&&(n=u);return e[o]=u,(n+t)/2}}(r),i=function(r){var e,t,n,i,o;if(!S(r))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+r+"`.");return e=new G(r),t=_,n=T,o=-1,i=0,function(u){var a,f;if(0===arguments.length)return 0===i?null:n-t;if(o=(o+1)%r,0===u&&(u=0),F(u))i=r,t=u,n=u;else if(i<r)i+=1,u<t&&(t=u),u>n&&(n=u);else if(e[o]===t&&u>t||e[o]===n&&u<n||F(e[o])){for(t=u,n=u,f=0;f<r;f++)if(f!==o){if(F(a=e[f])){t=a,n=a;break}a<t&&(t=a),a>n&&(n=a)}}else u<t?t=u:u>n&&(n=u);return e[o]=u,n-t}}(r),o=function(r,e){var t,n,i,o,u,a,f,l;if(!S(r))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+r+"`.");if(n=new G(r),f=r-1,o=0,l=-1,a=0,arguments.length>1){if(!c(e))throw new TypeError("invalid argument. Must provide a number primitive. Value: `"+e+"`.");return u=e,s}return u=0,v;function v(e){var c,v;if(0===arguments.length)return 0===a?null:1===a?F(o)?NaN:0:C(a<r?o/(a-1):o/f);if(l=(l+1)%r,F(e))a=r,o=NaN;else{if(a<r)return n[l]=e,o+=(t=e-u)*(e-(u+=t/(a+=1))),1===a?0:C(o/(a-1));if(1===a)return o=0;if(F(n[l])){for(a=1,u=e,o=0,c=0;c<r;c++)if(c!==l){if(F(v=n[c])){a=r,o=NaN;break}o+=(t=v-u)*(v-(u+=t/(a+=1)))}}else!1===F(o)&&(i=n[l],o+=(t=e-i)*(i-u+(e-(u+=t/r))))}return n[l]=e,C(o/f)}function s(e){var f;if(0===arguments.length)return 0===a?null:C(a<r?o/a:o/r);if(l=(l+1)%r,F(e))a=r,o=NaN;else{if(a<r)return n[l]=e,C((o+=(t=e-u)*t)/(a+=1));if(F(n[l])){for(o=0,f=0;f<r;f++)if(f!==l){if(F(n[f])){a=r,o=NaN;break}t=n[f]-u,o+=t*t}}else!1===F(o)&&(i=n[l],o+=(e-i)*(e-u+i-u))}return n[l]=e,C(o/r)}}(r),u=function(r){var e,t,n,i,o;if(!S(r))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+r+"`.");return t=new G(r),n=0,o=-1,i=0,function(u){var a;if(0===arguments.length)return 0===i?null:n;if(o=(o+1)%r,F(u))i=r,n=NaN;else if(i<r)n+=(e=u-n)/(i+=1);else if(F(t[o])){for(i=1,n=u,a=0;a<r;a++)if(a!==o){if(F(t[a])){i=r,n=NaN;break}i+=1,e=t[a]-n,n+=e/i}}else!1===F(n)&&(e=u-t[o],n+=e/r);return t[o]=u,n}}(r),a=function(r){var e,t,n,i;if(!S(r))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+r+"`.");return e=new G(r),t=0,i=-1,n=0,function(o){var u;if(0===arguments.length)return 0===n?null:t;if(i=(i+1)%r,F(o))n=r,t=NaN;else if(n<r)n+=1,t+=o;else if(F(e[i])){for(n=1,t=o,u=0;u<r;u++)if(u!==i){if(F(e[u])){n=r,t=NaN;break}n+=1,t+=e[u]}}else!1===F(t)&&(t+=o-e[i]);return e[i]=o,t}}(r),l=function(r){var e,t,n,i;if(!S(r))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+r+"`.");return e=new G(r),t=_,i=-1,n=0,function(o){var u,a;if(0===arguments.length)return 0===n?null:t;if(i=(i+1)%r,n<r)n+=1,(F(o)||o<t||o===t&&Y(o))&&(t=o);else if(F(o)||o<t)t=o;else if(e[i]===t&&o>t||F(e[i])){for(t=o,a=0;a<r;a++)if(a!==i){if(F(u=e[a])){t=u;break}(u<t||u===t&&Y(u))&&(t=u)}}else if(e[i]===t&&o===t&&0===o)if(Y(o))t=o;else if(Y(e[i]))for(t=o,a=0;a<r;a++)if(a!==i&&Y(e[a])){t=e[a];break}return e[i]=o,t}}(r),f=function(r){var e,t,n,i;if(!S(r))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+r+"`.");return e=new G(r),t=T,i=-1,n=0,function(o){var u,a;if(0===arguments.length)return 0===n?null:t;if(i=(i+1)%r,n<r)n+=1,(F(o)||o>t||o===t&&q(o))&&(t=o);else if(F(o)||o>t)t=o;else if(e[i]===t&&o<t||F(e[i])){for(t=o,a=0;a<r;a++)if(a!==i){if(F(u=e[a])){t=u;break}(u>t||u===t&&q(u))&&(t=u)}}else if(e[i]===t&&o===t&&0===o)if(q(o))t=o;else if(q(e[i]))for(t=o,a=0;a<r;a++)if(a!==i&&q(e[a])){t=e[a];break}return e[i]=o,t}}(r),n={},function(c){if(0===arguments.length)return n;return n.window=r,n.sum=a(c),n.mean=u(c),n.variance=e(c),n.stdev=o(c),n.min=l(c),n.max=f(c),n.range=i(c),n.midrange=t(c),n}}export{R as default};
//# sourceMappingURL=mod.js.map
