module.exports=function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){e.exports=t(1)},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(2)["default"];r["default"]=n},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(3);r["default"]=n.server.implement({name:"DomainDrivenExpress",constructor:function(e){var r=e.Domains,t=(e.middlewareGenerators,e.server),n=void 0===t?{}:t;return n._domains=n._domains||{},n.generateMiddleware=function(e){return n},n.generateMiddleware.bind(n)(r),[n]},provider:function(){return this}})},function(e,r){e.exports=require("strictduck-domain-driven-fullstack")}]);