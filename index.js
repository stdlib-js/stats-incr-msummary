// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,t=Object.prototype,n=t.toString,i=t.__defineGetter__,o=t.__defineSetter__,u=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,a){var l,c,s,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof a||null===a||"[object Array]"===n.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((c="value"in a)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=t,delete e[r],e[r]=a.value,e.__proto__=l):e[r]=a.value),s="get"in a,p="set"in a,c&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(e,r,a.get),p&&o&&o.call(e,r,a.set),e};function l(e,r,t){a(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function c(e){return"number"==typeof e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString,y=Object.prototype.hasOwnProperty,b="function"==typeof Symbol?Symbol.toStringTag:"",d=p()?function(e){var r,t,n,i,o;if(null==e)return v.call(e);t=e[b],o=b,r=null!=(i=e)&&y.call(i,o);try{e[b]=void 0}catch(r){return v.call(e)}return n=v.call(e),r?e[b]=t:delete e[b],n}:function(e){return v.call(e)},g=Number,m=g.prototype.toString,w=p();function h(e){return"object"==typeof e&&(e instanceof g||(w?function(e){try{return m.call(e),!0}catch(e){return!1}}(e):"[object Number]"===d(e)))}function N(e){return c(e)||h(e)}l(N,"isPrimitive",c),l(N,"isObject",h);var _=Number.POSITIVE_INFINITY,T=g.NEGATIVE_INFINITY,j=Math.floor;function E(e){return e<_&&e>T&&j(r=e)===r;var r}function k(e){return c(e)&&E(e)}function V(e){return h(e)&&E(e.valueOf())}function O(e){return k(e)||V(e)}function S(e){return k(e)&&e>0}function M(e){return V(e)&&e.valueOf()>0}function A(e){return S(e)||M(e)}function F(e){return e!=e}l(O,"isPrimitive",k),l(O,"isObject",V),l(A,"isPrimitive",S),l(A,"isObject",M);var I="function"==typeof Float64Array,P="function"==typeof Float64Array?Float64Array:null,x="function"==typeof Float64Array?Float64Array:void 0,G=function(){var e,r,t;if("function"!=typeof P)return!1;try{r=new P([1,3.14,-3.14,NaN]),t=r,e=(I&&t instanceof Float64Array||"[object Float64Array]"===d(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?x:function(){throw new Error("not implemented")},C=Math.sqrt;function Y(e){return 0===e&&1/e===T}function q(e){return 0===e&&1/e===_}return function(e){var r,t,n,i,o,u,f,a,l;if(!S(e))throw new TypeError(function(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}("0eW8T",e));return r=function(e,r){var t,n,i,o,u,f,a,l;if(!S(e))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+e+"`.");if(n=new Array(e),a=e-1,o=0,l=-1,f=0,arguments.length>1){if(!c(r))throw new TypeError("invalid argument. Must provide a number primitive. Value: `"+r+"`.");return u=r,p}return u=0,s;function s(r){var c,s;if(0===arguments.length)return 0===f?null:1===f?F(o)?NaN:0:f<e?o/(f-1):o/a;if(l=(l+1)%e,F(r))f=e,o=NaN;else{if(f<e)return n[l]=r,o+=(t=r-u)*(r-(u+=t/(f+=1))),1===f?0:o/(f-1);if(1===f)return o=0;if(F(n[l])){for(f=1,u=r,o=0,c=0;c<e;c++)if(c!==l){if(F(s=n[c])){f=e,o=NaN;break}o+=(t=s-u)*(s-(u+=t/(f+=1)))}}else!1===F(o)&&(i=n[l],o+=(t=r-i)*(i-u+(r-(u+=t/e))))}return n[l]=r,o/a}function p(r){var a;if(0===arguments.length)return 0===f?null:f<e?o/f:o/e;if(l=(l+1)%e,F(r))f=e,o=NaN;else{if(f<e)return n[l]=r,(o+=(t=r-u)*t)/(f+=1);if(F(n[l])){for(o=0,a=0;a<e;a++)if(a!==l){if(F(n[a])){f=e,o=NaN;break}t=n[a]-u,o+=t*t}}else!1===F(o)&&(i=n[l],o+=(r-i)*(r-u+i-u))}return n[l]=r,o/e}}(e),t=function(e){var r,t,n,i,o;if(!S(e))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+e+"`.");return r=new G(e),t=_,n=T,o=-1,i=0,function(u){var f,a;if(0===arguments.length)return 0===i?null:(n+t)/2;if(o=(o+1)%e,0===u&&(u=0),F(u))i=e,t=u,n=u;else if(i<e)i+=1,u<t&&(t=u),u>n&&(n=u);else if(r[o]===t&&u>t||r[o]===n&&u<n||F(r[o])){for(t=u,n=u,a=0;a<e;a++)if(a!==o){if(F(f=r[a])){t=f,n=f;break}f<t&&(t=f),f>n&&(n=f)}}else u<t?t=u:u>n&&(n=u);return r[o]=u,(n+t)/2}}(e),i=function(e){var r,t,n,i,o;if(!S(e))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+e+"`.");return r=new G(e),t=_,n=T,o=-1,i=0,function(u){var f,a;if(0===arguments.length)return 0===i?null:n-t;if(o=(o+1)%e,0===u&&(u=0),F(u))i=e,t=u,n=u;else if(i<e)i+=1,u<t&&(t=u),u>n&&(n=u);else if(r[o]===t&&u>t||r[o]===n&&u<n||F(r[o])){for(t=u,n=u,a=0;a<e;a++)if(a!==o){if(F(f=r[a])){t=f,n=f;break}f<t&&(t=f),f>n&&(n=f)}}else u<t?t=u:u>n&&(n=u);return r[o]=u,n-t}}(e),o=function(e,r){var t,n,i,o,u,f,a,l;if(!S(e))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+e+"`.");if(n=new G(e),a=e-1,o=0,l=-1,f=0,arguments.length>1){if(!c(r))throw new TypeError("invalid argument. Must provide a number primitive. Value: `"+r+"`.");return u=r,p}return u=0,s;function s(r){var c,s;if(0===arguments.length)return 0===f?null:1===f?F(o)?NaN:0:C(f<e?o/(f-1):o/a);if(l=(l+1)%e,F(r))f=e,o=NaN;else{if(f<e)return n[l]=r,o+=(t=r-u)*(r-(u+=t/(f+=1))),1===f?0:C(o/(f-1));if(1===f)return o=0;if(F(n[l])){for(f=1,u=r,o=0,c=0;c<e;c++)if(c!==l){if(F(s=n[c])){f=e,o=NaN;break}o+=(t=s-u)*(s-(u+=t/(f+=1)))}}else!1===F(o)&&(i=n[l],o+=(t=r-i)*(i-u+(r-(u+=t/e))))}return n[l]=r,C(o/a)}function p(r){var a;if(0===arguments.length)return 0===f?null:C(f<e?o/f:o/e);if(l=(l+1)%e,F(r))f=e,o=NaN;else{if(f<e)return n[l]=r,C((o+=(t=r-u)*t)/(f+=1));if(F(n[l])){for(o=0,a=0;a<e;a++)if(a!==l){if(F(n[a])){f=e,o=NaN;break}t=n[a]-u,o+=t*t}}else!1===F(o)&&(i=n[l],o+=(r-i)*(r-u+i-u))}return n[l]=r,C(o/e)}}(e),u=function(e){var r,t,n,i,o;if(!S(e))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+e+"`.");return t=new G(e),n=0,o=-1,i=0,function(u){var f;if(0===arguments.length)return 0===i?null:n;if(o=(o+1)%e,F(u))i=e,n=NaN;else if(i<e)n+=(r=u-n)/(i+=1);else if(F(t[o])){for(i=1,n=u,f=0;f<e;f++)if(f!==o){if(F(t[f])){i=e,n=NaN;break}i+=1,r=t[f]-n,n+=r/i}}else!1===F(n)&&(r=u-t[o],n+=r/e);return t[o]=u,n}}(e),f=function(e){var r,t,n,i;if(!S(e))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+e+"`.");return r=new G(e),t=0,i=-1,n=0,function(o){var u;if(0===arguments.length)return 0===n?null:t;if(i=(i+1)%e,F(o))n=e,t=NaN;else if(n<e)n+=1,t+=o;else if(F(r[i])){for(n=1,t=o,u=0;u<e;u++)if(u!==i){if(F(r[u])){n=e,t=NaN;break}n+=1,t+=r[u]}}else!1===F(t)&&(t+=o-r[i]);return r[i]=o,t}}(e),l=function(e){var r,t,n,i;if(!S(e))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+e+"`.");return r=new G(e),t=_,i=-1,n=0,function(o){var u,f;if(0===arguments.length)return 0===n?null:t;if(i=(i+1)%e,n<e)n+=1,(F(o)||o<t||o===t&&Y(o))&&(t=o);else if(F(o)||o<t)t=o;else if(r[i]===t&&o>t||F(r[i])){for(t=o,f=0;f<e;f++)if(f!==i){if(F(u=r[f])){t=u;break}(u<t||u===t&&Y(u))&&(t=u)}}else if(r[i]===t&&o===t&&0===o)if(Y(o))t=o;else if(Y(r[i]))for(t=o,f=0;f<e;f++)if(f!==i&&Y(r[f])){t=r[f];break}return r[i]=o,t}}(e),a=function(e){var r,t,n,i;if(!S(e))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+e+"`.");return r=new G(e),t=T,i=-1,n=0,function(o){var u,f;if(0===arguments.length)return 0===n?null:t;if(i=(i+1)%e,n<e)n+=1,(F(o)||o>t||o===t&&q(o))&&(t=o);else if(F(o)||o>t)t=o;else if(r[i]===t&&o<t||F(r[i])){for(t=o,f=0;f<e;f++)if(f!==i){if(F(u=r[f])){t=u;break}(u>t||u===t&&q(u))&&(t=u)}}else if(r[i]===t&&o===t&&0===o)if(q(o))t=o;else if(q(r[i]))for(t=o,f=0;f<e;f++)if(f!==i&&q(r[f])){t=r[f];break}return r[i]=o,t}}(e),n={},function(c){return 0===arguments.length||(n.window=e,n.sum=f(c),n.mean=u(c),n.variance=r(c),n.stdev=o(c),n.min=l(c),n.max=a(c),n.range=i(c),n.midrange=t(c)),n}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).incrmsummary=r();
//# sourceMappingURL=index.js.map
