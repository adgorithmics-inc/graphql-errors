!function(e,E){if("object"==typeof exports&&"object"==typeof module)module.exports=E();else if("function"==typeof define&&define.amd)define([],E);else{var t=E();for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(window,function(){return function(e){var E={};function t(n){if(E[n])return E[n].exports;var r=E[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=E,t.d=function(e,E,n){t.o(e,E)||Object.defineProperty(e,E,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,E){if(1&E&&(e=t(e)),8&E)return e;if(4&E&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&E&&"string"!=typeof e)for(var r in e)t.d(n,r,function(E){return e[E]}.bind(null,r));return n},t.n=function(e){var E=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(E,"a",E),E},t.o=function(e,E){return Object.prototype.hasOwnProperty.call(e,E)},t.p="",t(t.s=0)}([function(e,E,t){"use strict";var n;t.r(E),function(e){e.OBJECT_DUPLICATE="OBJECT_DUPLICATE",e.OBJECT_NOT_FOUND="OBJECT_NOT_FOUND",e.OBJECT_IMMUTABLE="OBJECT_IMMUTABLE",e.TOKEN_EXPIRED="TOKEN_EXPIRED",e.TOKEN_MALFORMED="TOKEN_MALFORMED",e.INVALID_REFRESH_TOKEN="INVALID_REFRESH_TOKEN",e.TOKEN_MISSING="TOKEN_MISSING",e.ACCESS_DENIED="ACCESS_DENIED",e.INVALID_CREDENTIALS="INVALID_CREDENTIALS",e.QUERY_DEPTH_EXCEEDED="QUERY_DEPTH_EXCEEDED",e.QUERY_COMPLEXITY_EXCEEDED="QUERY_COMPLEXITY_EXCEEDED",e.QUERY_BREADTH_EXCEEDED="QUERY_BREADTH_EXCEEDED",e.INPUT_LIST_EMPTY="INPUT_LIST_EMPTY",e.INPUT_LIST_MIN="INPUT_LIST_MIN",e.INPUT_LIST_MAX="INPUT_LIST_MAX",e.INPUT_INVALID="INPUT_INVALID",e.UNKNOWN_ERROR="UNKNOWN_ERROR",e.MAX_PAYLOAD_EXCEEDED="MAX_PAYLOAD_EXCEEDED",e.UNDER_MAINTENANCE="UNDER_MAINTENANCE",e.REQUEST_LIMIT="REQUEST_LIMIT"}(n||(n={}));var r=[n.UNDER_MAINTENANCE,n.UNKNOWN_ERROR,n.REQUEST_LIMIT];t.d(E,"isValidCode",function(){return o}),t.d(E,"isRetryableCode",function(){return _}),t.d(E,"codes",function(){return n}),t.d(E,"retryableCodes",function(){return r});var o=function(e){return Object.keys(n).includes(e)},_=function(e){return r.includes(e)}}])});