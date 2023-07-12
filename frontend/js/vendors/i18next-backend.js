!function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).i18nextHttpBackend=e()}(function(){return function o(i,r,a){function s(t,e){if(!r[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(u)return u(t,!0);throw(n=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",n}n=r[t]={exports:{}},i[t][0].call(n.exports,function(e){return s(i[t][1][e]||e)},n,n.exports,o,i,r,a)}return r[t].exports}for(var u="function"==typeof require&&require,e=0;e<a.length;e++)s(a[e]);return s}({1:[function(n,o,i){!function(t){!function(){var e;"function"==typeof fetch&&(void 0!==t&&t.fetch?e=t.fetch:"undefined"!=typeof window&&window.fetch&&(e=window.fetch)),void 0===n||"undefined"!=typeof window&&void 0!==window.document||((e=e||n("cross-fetch")).default&&(e=e.default),i.default=e,o.exports=i.default)}.call(this)}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"cross-fetch":5}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,s=e("./utils.js"),i=(o=e("./request.js"))&&o.__esModule?o:{default:o};function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",allowMultiLoading:!1,parse:function(e){return JSON.parse(e)},stringify:JSON.stringify,parsePayload:function(e,t,n){return o=n||"",(n=t)in(t={})?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t;var o},request:i.default,reloadInterval:"undefined"==typeof window&&36e5,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}}var u,f,c,d=(u=l,(f=[{key:"init",value:function(e){var t=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};this.services=e,this.options=(0,s.defaults)(n,this.options||{},a()),this.allOptions=o,this.services&&this.options.reloadInterval&&setInterval(function(){return t.reload()},this.options.reloadInterval)}},{key:"readMulti",value:function(e,t,n){this._readAny(e,e,t,t,n)}},{key:"read",value:function(e,t,n){this._readAny([e],e,[t],t,n)}},{key:"_readAny",value:function(t,n,o,i,r){var a=this,e=this.options.loadPath;"function"==typeof this.options.loadPath&&(e=this.options.loadPath(t,o)),(e=(0,s.makePromise)(e)).then(function(e){e=a.services.interpolator.interpolate(e,{lng:t.join("+"),ns:o.join("+")});a.loadUrl(e,r,n,i)})}},{key:"loadUrl",value:function(i,r,a,s){var u=this;this.options.request(this.options,i,void 0,function(e,t){if(t&&(500<=t.status&&t.status<600||!t.status))return r("failed loading "+i+"; status code: "+t.status,!0);if(t&&400<=t.status&&t.status<500)return r("failed loading "+i+"; status code: "+t.status,!1);if(!t&&e&&e.message&&-1<e.message.indexOf("Failed to fetch"))return r("failed loading "+i+": "+e.message,!0);if(e)return r(e,!1);var n,o;try{n="string"==typeof t.data?u.options.parse(t.data,a,s):t.data}catch(e){o="failed parsing "+i+" to json"}if(o)return r(o,!1);r(null,n)})}},{key:"create",value:function(n,o,e,t,i){var r,a,s,u,f=this;this.options.addPath&&("string"==typeof n&&(n=[n]),r=this.options.parsePayload(o,e,t),a=0,s=[],u=[],n.forEach(function(e){var t=f.options.addPath;"function"==typeof f.options.addPath&&(t=f.options.addPath(e,o));e=f.services.interpolator.interpolate(t,{lng:e,ns:o});f.options.request(f.options,e,r,function(e,t){a+=1,s.push(e),u.push(t),a===n.length&&i&&i(s,u)})}))}},{key:"reload",value:function(){var t,e=this,n=this.services,i=n.backendConnector,o=n.languageUtils,r=n.logger,a=i.language;a&&"cimode"===a.toLowerCase()||(t=[],(n=function(e){o.toResolveHierarchy(e).forEach(function(e){t.indexOf(e)<0&&t.push(e)})})(a),this.allOptions.preload&&this.allOptions.preload.forEach(n),t.forEach(function(o){e.allOptions.ns.forEach(function(n){i.read(o,n,"read",null,null,function(e,t){e&&r.warn("loading namespace ".concat(n," for language ").concat(o," failed"),e),!e&&t&&r.log("loaded namespace ".concat(n," for language ").concat(o),t),i.loaded("".concat(o,"|").concat(n),e,t)})})}))}}])&&r(u.prototype,f),c&&r(u,c),l);function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};!function(e){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}(this),this.services=e,this.options=t,this.allOptions=n,this.type="backend",this.init(e,t,n)}d.type="backend",n.default=d,t.exports=n.default},{"./request.js":3,"./utils.js":4}],3:[function(n,o,i){!function(t){!function(){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r,s,u,a=n("./utils.js"),e=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==c(e)&&"function"!=typeof e)return{default:e};t=f(t);if(t&&t.has(e))return t.get(e);var n,o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(n in e){var r;"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&((r=i?Object.getOwnPropertyDescriptor(e,n):null)&&(r.get||r.set)?Object.defineProperty(o,n,r):o[n]=e[n])}o.default=e,t&&t.set(e,o);return o}(n("./getFetch.js"));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}"function"==typeof fetch&&(void 0!==t&&t.fetch?r=t.fetch:"undefined"!=typeof window&&window.fetch&&(r=window.fetch)),a.hasXMLHttpRequest&&(void 0!==t&&t.XMLHttpRequest?s=t.XMLHttpRequest:"undefined"!=typeof window&&window.XMLHttpRequest&&(s=window.XMLHttpRequest)),"function"==typeof ActiveXObject&&(void 0!==t&&t.ActiveXObject?u=t.ActiveXObject:"undefined"!=typeof window&&window.ActiveXObject&&(u=window.ActiveXObject)),"function"!=typeof(r=!r&&e&&!s&&!u?e.default||e:r)&&(r=void 0);function d(e,t){if(t&&"object"===c(t)){var n,o="";for(n in t)o+="&"+encodeURIComponent(n)+"="+encodeURIComponent(t[n]);if(!o)return e;e=e+(-1!==e.indexOf("?")?"&":"?")+o.slice(1)}return e}e=function(e,t,n,o){return"function"==typeof n&&(o=n,n=void 0),o=o||function(){},r?function(e,t,n,o){e.queryStringParams&&(t=d(t,e.queryStringParams));var i=(0,a.defaults)({},"function"==typeof e.customHeaders?e.customHeaders():e.customHeaders);n&&(i["Content-Type"]="application/json"),r(t,(0,a.defaults)({method:n?"POST":"GET",body:n?e.stringify(n):void 0,headers:i},"function"==typeof e.requestOptions?e.requestOptions(n):e.requestOptions)).then(function(t){return t.ok?void t.text().then(function(e){o(null,{status:t.status,data:e})}).catch(o):o(t.statusText||"Error",{status:t.status})}).catch(o)}(e,t,n,o):a.hasXMLHttpRequest||"function"==typeof ActiveXObject?function(e,t,n,o){n&&"object"===c(n)&&(n=d("",n).slice(1)),e.queryStringParams&&(t=d(t,e.queryStringParams));try{var i=s?new s:new u("MSXML2.XMLHTTP.3.0");i.open(n?"POST":"GET",t,1),e.crossDomain||i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.withCredentials=!!e.withCredentials,n&&i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.overrideMimeType&&i.overrideMimeType("application/json");var r=e.customHeaders;if(r="function"==typeof r?r():r)for(var a in r)i.setRequestHeader(a,r[a]);i.onreadystatechange=function(){3<i.readyState&&o(400<=i.status?i.statusText:null,{status:i.status,data:i.responseText})},i.send(n)}catch(e){console&&console.log(e)}}(e,t,n,o):void 0};i.default=e,o.exports=i.default}.call(this)}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./getFetch.js":1,"./utils.js":4}],4:[function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.defaults=function(n){return i.call(r.call(arguments,1),function(e){if(e)for(var t in e)void 0===n[t]&&(n[t]=e[t])}),n},n.hasXMLHttpRequest=function(){return"function"==typeof XMLHttpRequest||"object"===("undefined"==typeof XMLHttpRequest?"undefined":o(XMLHttpRequest))},n.makePromise=function(e){if(function(e){return!!e&&"function"==typeof e.then}(e))return e;return Promise.resolve(e)};var n=[],i=n.forEach,r=n.slice},{}],5:[function(e,t,n){},{}]},{},[2])(2)});