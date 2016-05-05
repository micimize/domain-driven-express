require("source-map-support").install(),module.exports=function(e){function r(t){if(n[t])return n[t].exports;var o=n[t]={exports:{},id:t,loaded:!1};return e[t].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var n={};return r.m=e,r.c=n,r.p="",r(0)}([function(e,r,n){e.exports=n(3)},function(e,r){e.exports=require("express")},function(e,r,n){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(Array.isArray(e)){for(var r=0,n=Array(e.length);r<e.length;r++)n[r]=e[r];return n}return Array.from(e)}function i(e,r){return Object.keys(e).map(function(r){return e[r]}).filter(function(e){return Object.keys(e.get(r)).length})}function u(e){var r=e.router,n=e.routes,t=e.order,i=e.prefix,u=void 0===i?"":i,a=t||Object.keys(n);return a.forEach(function(e){var t=n[e],i=t.methods,a=t.handlers;i.forEach(function(n){r[n].apply(r,[u+e].concat(o(a)))})}),r}function a(e){var r=e.prefix,n=e.routes,t=e.order;return u({router:l["default"].Router(),routes:n,order:t,prefix:"/"+r})}function d(e){return i(e,"middleware").reduce(function(e,r){return[].concat(o(e),o(r.get("middleware")))},[]).filter(function(e){return"function"==typeof e})}function c(e){return i(e,"routes").map(a)}function s(e){return d(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.domainRouteMiddlewareGenerator=c,r.genericDomainMiddlewareGenerator=s;var f=n(1),l=t(f)},function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=n(4)["default"];r["default"]=t},function(e,r,n){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=n(1),i=t(o),u=n(5),a=n(2);r["default"]=u.server.implement({name:"DomainDrivenExpress",constructor:function(e){var r=e.Domains,n=e.DomainDrivenStorePersistencePlugin,t=e.middlewareGenerators,o=void 0===t?[a.genericDomainMiddlewareGenerator,a.domainRouteMiddlewareGenerator]:t,u=e.server,d=void 0===u?(0,i["default"])():u;e.container;return n instanceof Error||(n.provide(r),r=n.provideInjectionForDomainRouteHandlers(r)),d._domains=d._domains||{},d.generateMiddleware=function(e){var r=this;o.forEach(function(n){return n(e).forEach(function(e){return r.use(e)})}),Object.assign(this._domains,e)},d.generateMiddleware.bind(d)(r),[d]},provider:function(e){var r=e.port,n=void 0===r?3e3:r,t=e.DomainDrivenClient;t&&this.generateMiddleware.bind(this)({"":t.provide()});var o=(0,i["default"])();o.use(this),o.listen(n,function(e){e?console.error(e):console.info("==> Listening on port "+n+". Open up http://localhost:"+n+"/ in your browser.")})}})},function(e,r){e.exports=require("strictduck-domain-driven-fullstack")}]);
//# sourceMappingURL=node_production.js.map