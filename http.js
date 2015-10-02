!function(t,e){"function"==typeof define&&define.amd?define([],e):t.Http=e()}(this,function(){var t,e,n;return function(r){function o(t,e){return q.call(t,e)}function i(t,e){var n,r,o,i,s,u,p,c,f,a,l,h=e&&e.split("/"),d=x.map,y=d&&d["*"]||{};if(t&&"."===t.charAt(0))if(e){for(h=h.slice(0,h.length-1),t=t.split("/"),s=t.length-1,x.nodeIdCompat&&j.test(t[s])&&(t[s]=t[s].replace(j,"")),t=h.concat(t),f=0;f<t.length;f+=1)if(l=t[f],"."===l)t.splice(f,1),f-=1;else if(".."===l){if(1===f&&(".."===t[2]||".."===t[0]))break;f>0&&(t.splice(f-1,2),f-=2)}t=t.join("/")}else 0===t.indexOf("./")&&(t=t.substring(2));if((h||y)&&d){for(n=t.split("/"),f=n.length;f>0;f-=1){if(r=n.slice(0,f).join("/"),h)for(a=h.length;a>0;a-=1)if(o=d[h.slice(0,a).join("/")],o&&(o=o[r])){i=o,u=f;break}if(i)break;!p&&y&&y[r]&&(p=y[r],c=f)}!i&&p&&(i=p,u=c),i&&(n.splice(0,u,i),t=n.join("/"))}return t}function s(t,e){return function(){return h.apply(r,w.call(arguments,0).concat([t,e]))}}function u(t){return function(e){return i(e,t)}}function p(t){return function(e){m[t]=e}}function c(t){if(o(g,t)){var e=g[t];delete g[t],v[t]=!0,l.apply(r,e)}if(!o(m,t)&&!o(v,t))throw new Error("No "+t);return m[t]}function f(t){var e,n=t?t.indexOf("!"):-1;return n>-1&&(e=t.substring(0,n),t=t.substring(n+1,t.length)),[e,t]}function a(t){return function(){return x&&x.config&&x.config[t]||{}}}var l,h,d,y,m={},g={},x={},v={},q=Object.prototype.hasOwnProperty,w=[].slice,j=/\.js$/;d=function(t,e){var n,r=f(t),o=r[0];return t=r[1],o&&(o=i(o,e),n=c(o)),o?t=n&&n.normalize?n.normalize(t,u(e)):i(t,e):(t=i(t,e),r=f(t),o=r[0],t=r[1],o&&(n=c(o))),{f:o?o+"!"+t:t,n:t,pr:o,p:n}},y={require:function(t){return s(t)},exports:function(t){var e=m[t];return"undefined"!=typeof e?e:m[t]={}},module:function(t){return{id:t,uri:"",exports:m[t],config:a(t)}}},l=function(t,e,n,i){var u,f,a,l,h,x,q=[],w=typeof n;if(i=i||t,"undefined"===w||"function"===w){for(e=!e.length&&n.length?["require","exports","module"]:e,h=0;h<e.length;h+=1)if(l=d(e[h],i),f=l.f,"require"===f)q[h]=y.require(t);else if("exports"===f)q[h]=y.exports(t),x=!0;else if("module"===f)u=q[h]=y.module(t);else if(o(m,f)||o(g,f)||o(v,f))q[h]=c(f);else{if(!l.p)throw new Error(t+" missing "+f);l.p.load(l.n,s(i,!0),p(f),{}),q[h]=m[f]}a=n?n.apply(m[t],q):void 0,t&&(u&&u.exports!==r&&u.exports!==m[t]?m[t]=u.exports:a===r&&x||(m[t]=a))}else t&&(m[t]=n)},t=e=h=function(t,e,n,o,i){if("string"==typeof t)return y[t]?y[t](e):c(d(t,e).f);if(!t.splice){if(x=t,x.deps&&h(x.deps,x.callback),!e)return;e.splice?(t=e,e=n,n=null):t=r}return e=e||function(){},"function"==typeof n&&(n=o,o=i),o?l(r,t,e,n):setTimeout(function(){l(r,t,e,n)},4),h},h.config=function(t){return h(t)},t._defined=m,n=function(t,e,n){e.splice||(n=e,e=[]),o(m,t)||o(g,t)||(g[t]=[t,e,n])},n.amd={jQuery:!0}}(),n("../vendor/almond",function(){}),n("RequestManager",[],function(){function t(){}return t.prototype.verifyStatus=function(t){return!(t.xhr.status<200||t.xhr.status>=300&&304!==t.xhr.status)},t.prototype.loaded=function(t){this.verifyStatus(t)?(t.response=this.parseData(t),t.completer.complete(t.response)):t.completer.completeError(t.xhr.statusText)},t.prototype.parseData=function(t){return"application/json"==t.xhr.getResponseHeader("content-type")?JSON.parse(t.xhr.responseText):t.xhr.responseText},t.prototype.process=function(t){t.xhr.open(t.type,t.url,t.async),this.send(t)},t.prototype.send=function(t){this.prepareData(t);var e=this;t.async===!0?(t.xhr.onload=function(){e.loaded.call(e,t)},t.xhr.send(this.prepareData(t))):(t.xhr.send(this.prepareData(t)),this.loaded.call(this,t))},t.prototype.prepareData=function(t){return"object"==typeof t.data?(t.xhr.setRequestHeader("Content-Type","application/json"),JSON.stringify(t.data)):"string"==typeof t.data?t.data:null},t}),n("Request",["./RequestManager"],function(t){function e(){}function n(){this.promise=new e}function r(){this.xhr=new XMLHttpRequest,this.completer=new n,this.requestManager=new t}return e.prototype.then=function(t){this.resolve=t},e.prototype.fail=function(t){this.reject=t},n.prototype.complete=function(){void 0!==this.promise.resolve&&this.promise.resolve.apply(this,arguments)},n.prototype.completeError=function(t){void 0!==this.promise.reject&&this.promise.reject(t)},r.prototype.start=function(){return this.requestManager.process(this),this.completer.promise},r.prototype.restart=function(){return this.requestManager.process(),this.completer.promise},r}),function(t,e){"function"==typeof n&&n.amd?n("Get",["./Request"],e):t.Get=e(t.Request)}(this,function(t){function e(t,e){if(this.type="GET",void 0===t)throw new Error("Parameters mismatched");this.url=t,this.async=void 0===e?!0:e}return e.prototype=new t,e.prototype.constructor=e,e}),function(t,e){"function"==typeof n&&n.amd?n("Post",["./Request"],e):t.Post=e(t.Request)}(this,function(t){function e(t,e,n){if(this.type="POST",void 0===t||void 0===e)throw new Error("Parameters mismatched");return this.async=void 0===n?!0:!1,this.url=t,this.data=e,this}return e.prototype=new t,e.constructor=e,e}),n("main",["./Get","./Post"],function(t,e){return{Get:t,Post:e}}),e("main")});
