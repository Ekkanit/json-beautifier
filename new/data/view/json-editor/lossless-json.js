!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).LosslessJSON={})}(this,(function(t){"use strict";function r(t){return n.test(t)}var n=/^-?[0-9]+$/;function e(t){return o.test(t)}var o=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;function i(t,n){var e=parseFloat(t),o=String(e),i=u(t),a=u(o);if(i===a)return!0;if(!0===(null==n?void 0:n.approx)){if(!r(t)&&a.length>=14&&i.startsWith(a.substring(0,14)))return!0}return!1}var a=function(t){return t.underflow="underflow",t.overflow="overflow",t.truncate_integer="truncate_integer",t.truncate_float="truncate_float",t}({});function c(t){if(!i(t,{approx:!1})){if(r(t))return a.truncate_integer;var n=parseFloat(t);return isFinite(n)?0===n?a.underflow:a.truncate_float:a.overflow}}function u(t){return t.replace(f,"").replace(s,"").replace(y,"").replace(l,"")}var f=/[eE][+-]?\d+$/,l=/^-?(0*)?/,s=/\./,y=/0+$/;function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function p(t,r){for(var n=0;n<r.length;n++){var e=r[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,v(e.key),e)}}function v(t){var r=function(t,r){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var e=n.call(t,r||"default");if("object"!==d(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===d(r)?r:String(r)}var b=function(){function t(r){if(function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,r,n){(r=v(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n}(this,"isLosslessNumber",!0),!e(r))throw new Error('Invalid number (value: "'+r+'")');this.value=r}var n,o,i;return n=t,(o=[{key:"valueOf",value:function(){var t=c(this.value);if(void 0===t||t===a.truncate_float)return parseFloat(this.value);if(r(this.value))return BigInt(this.value);throw new Error("Cannot safely convert to number: "+"the value '".concat(this.value,"' would ").concat(t," and become ").concat(parseFloat(this.value)))}},{key:"toString",value:function(){return this.value}}])&&p(n.prototype,o),i&&p(n,i),Object.defineProperty(n,"prototype",{writable:!1}),t}();function h(t){return t&&"object"===d(t)&&!0===t.isLosslessNumber||!1}function m(t){return new b(t)}function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function g(t,r){return S({"":t},"",t,r)}function S(t,r,n,e){return Array.isArray(n)?e.call(t,r,function(t,r){for(var n=0;n<t.length;n++)t[n]=S(t,n+"",t[n],r);return t}(n,e)):n&&"object"===w(n)&&!h(n)?e.call(t,r,function(t,r){return Object.keys(t).forEach((function(n){var e=S(t,n,t[n],r);void 0!==e?t[n]=e:delete t[n]})),t}(n,e)):e.call(t,r,n)}function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function C(t){return function(t){if(Array.isArray(t))return x(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return x(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function E(t){return t===B||t===D||t===R||t===U}function N(t){return t>=Z&&t<=z||t>=V&&t<=rt||t>=X&&t<=nt}function j(t){return t>=Z&&t<=z}function O(t){return t>=q&&t<=z}function I(t){return t>=32&&t<=1114111}function k(t,r){return t===r||(Array.isArray(t)&&Array.isArray(r)?t.length===r.length&&t.every((function(t,n){return k(t,r[n])})):!(!_(t)||!_(r))&&C(new Set([].concat(C(Object.keys(t)),C(Object.keys(r))))).every((function(n){return k(t[n],r[n])})))}function _(t){return"object"===A(t)&&null!==t}var F={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},J=92,L=123,T=125,$=91,P=93,B=32,D=10,R=9,U=13,Q=34,M=43,W=45,Z=48,q=49,z=57,G=44,H=46,K=58,V=65,X=97,Y=69,tt=101,rt=70,nt=102;function et(t){return et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},et(t)}var ot=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;t.LosslessNumber=b,t.UnsafeNumberReason=a,t.config=function(t){throw new Error("config is deprecated, support for circularRefs is removed from the library. If you encounter circular references in your data structures, please rethink your datastructures: better prevent circular references in the first place.")},t.getUnsafeNumberReason=c,t.isInteger=r,t.isLosslessNumber=h,t.isNumber=e,t.isSafeNumber=i,t.parse=function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m,e=0,o=c();return p(o),b(),r?g(o,r):o;function i(){if(t.charCodeAt(e)===L){e++,f();for(var r={},n=!0;e<t.length&&t.charCodeAt(e)!==T;){n?n=!1:(y(),f());var o=e,i=l();void 0===i&&S(),f(),d();var a=c();void 0===a&&D(),Object.prototype.hasOwnProperty.call(r,i)&&!k(a,r[i])&&A(i,o+1),r[i]=a}return t.charCodeAt(e)!==T&&C(),e++,r}}function a(){if(t.charCodeAt(e)===$){e++,f();for(var r=[],n=!0;e<t.length&&t.charCodeAt(e)!==P;){n?n=!1:y();var o=c();v(o),r.push(o)}return t.charCodeAt(e)!==P&&x(),e++,r}}function c(){var t,r,n,e,o,c;f();var y=null!==(t=null!==(r=null!==(n=null!==(e=null!==(o=null!==(c=l())&&void 0!==c?c:s())&&void 0!==o?o:i())&&void 0!==e?e:a())&&void 0!==n?n:u("true",!0))&&void 0!==r?r:u("false",!1))&&void 0!==t?t:u("null",null);return f(),y}function u(r,n){if(t.slice(e,e+r.length)===r)return e+=r.length,n}function f(){for(;E(t.charCodeAt(e));)e++}function l(){if(t.charCodeAt(e)===Q){e++;for(var r="";e<t.length&&t.charCodeAt(e)!==Q;){if(t.charCodeAt(e)===J){var n=t[e+1],o=F[n];void 0!==o?(r+=o,e++):"u"===n?N(t.charCodeAt(e+2))&&N(t.charCodeAt(e+3))&&N(t.charCodeAt(e+4))&&N(t.charCodeAt(e+5))?(r+=String.fromCharCode(parseInt(t.slice(e+2,e+6),16)),e+=5):R(e):B(e)}else I(t.charCodeAt(e))?r+=t[e]:_(t[e]);e++}return w(),e++,r}}function s(){var r=e;if(t.charCodeAt(e)===W&&(e++,h(r)),t.charCodeAt(e)===Z)e++;else if(O(t.charCodeAt(e)))for(e++;j(t.charCodeAt(e));)e++;if(t.charCodeAt(e)===H)for(e++,h(r);j(t.charCodeAt(e));)e++;if(t.charCodeAt(e)===tt||t.charCodeAt(e)===Y)for(e++,t.charCodeAt(e)!==W&&t.charCodeAt(e)!==M||e++,h(r);j(t.charCodeAt(e));)e++;if(e>r)return n(t.slice(r,e))}function y(){if(t.charCodeAt(e)!==G)throw new SyntaxError("Comma ',' expected after value ".concat(z()));e++}function d(){if(t.charCodeAt(e)!==K)throw new SyntaxError("Colon ':' expected after property name ".concat(z()));e++}function p(t){if(void 0===t)throw new SyntaxError("JSON value expected ".concat(z()))}function v(t){if(void 0===t)throw new SyntaxError("Array item expected ".concat(z()))}function b(){if(e<t.length)throw new SyntaxError("Expected end of input ".concat(z()))}function h(r){if(!j(t.charCodeAt(e))){var n=t.slice(r,e);throw new SyntaxError("Invalid number '".concat(n,"', expecting a digit ").concat(z()))}}function w(){if(t.charCodeAt(e)!==Q)throw new SyntaxError("End of string '\"' expected ".concat(z()))}function S(){throw new SyntaxError("Quoted object key expected ".concat(z()))}function A(t,r){throw new SyntaxError("Duplicate key '".concat(t,"' encountered at position ").concat(r))}function C(){throw new SyntaxError("Quoted object key or end of object '}' expected ".concat(z()))}function x(){throw new SyntaxError("Array item or end of array ']' expected ".concat(z()))}function _(t){throw new SyntaxError("Invalid character '".concat(t,"' ").concat(U()))}function B(r){var n=t.slice(r,r+2);throw new SyntaxError("Invalid escape character '".concat(n,"' ").concat(U()))}function D(){throw new SyntaxError("Object value expected after ':' ".concat(U()))}function R(r){for(var n=r+2;/\w/.test(t[n]);)n++;var e=t.slice(r,n);throw new SyntaxError("Invalid unicode character '".concat(e,"' ").concat(U()))}function U(){return"at position ".concat(e)}function q(){return e<t.length?"but got '".concat(t[e],"'"):"but reached end of input"}function z(){return q()+" "+U()}},t.parseLosslessNumber=m,t.parseNumberAndBigInt=function(t){return r(t)?BigInt(t):parseFloat(t)},t.reviveDate=function(t,r){return"string"==typeof r&&ot.test(r)?new Date(r):r},t.stringify=function t(r,n,o,i){var a=function(t){if("number"==typeof t)return" ".repeat(t);if("string"==typeof t&&""!==t)return t;return}(o);return c("function"==typeof n?n.call({"":r},"",r):r,"");function c(r,u){if(Array.isArray(i)){var f=i.find((function(t){return t.test(r)}));if(f){var l=f.stringify(r);if("string"!=typeof l||!e(l))throw new Error("Invalid JSON number: output of a number stringifier must be a string containing a JSON number "+"(output: ".concat(l,")"));return l}}return"boolean"==typeof r||"number"==typeof r||"string"==typeof r||null===r||r instanceof Date||r instanceof Boolean||r instanceof Number||r instanceof String?JSON.stringify(r):r&&r.isLosslessNumber||"bigint"==typeof r?r.toString():Array.isArray(r)?function(t,r){if(0===t.length)return"[]";for(var e=a?r+a:void 0,o=a?"[\n":"[",i=0;i<t.length;i++){var u="function"==typeof n?n.call(t,String(i),t[i]):t[i];a&&(o+=e),o+=void 0!==u&&"function"!=typeof u?c(u,e):"null",i<t.length-1&&(o+=a?",\n":",")}return o+=a?"\n"+r+"]":"]"}(r,u):r&&"object"===et(r)?function(r,e){if("function"==typeof r.toJSON)return t(r.toJSON(),n,o,void 0);var i=Array.isArray(n)?n.map(String):Object.keys(r);if(0===i.length)return"{}";var u=a?e+a:void 0,f=!0,l=a?"{\n":"{";return i.forEach((function(t){var e="function"==typeof n?n.call(r,t,r[t]):r[t];if(function(t,r){return void 0!==r&&"function"!=typeof r&&"symbol"!==et(r)}(0,e)){f?f=!1:l+=a?",\n":",";var o=JSON.stringify(t);l+=a?u+o+": ":o+":",l+=c(e,u)}})),l+=a?"\n"+e+"}":"}"}(r,u):void 0}},t.toLosslessNumber=function(t){if(u(t+"").length>15)throw new Error("Invalid number: contains more than 15 digits and is most likely truncated and unsafe by itself "+"(value: ".concat(t,")"));if(isNaN(t))throw new Error("Invalid number: NaN");if(!isFinite(t))throw new Error("Invalid number: "+t);return new b(String(t))},t.toSafeNumberOrThrow=function(t,r){var n=parseFloat(t),e=c(t);if(!0===(null==r?void 0:r.approx)?e&&e!==a.truncate_float:e){var o=e.replace(/_\w+$/,"");throw new Error("Cannot safely convert to number: "+"the value '".concat(t,"' would ").concat(o," and become ").concat(n))}return n}}));//# sourceMappingURL=lossless-json.js.map
