!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";var r=n(0),o=n.n(r),u=(n(4),function(e){return o.a.createElement("div",{className:"component1"},"Component 1")}),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={counter:0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),i(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h1",null,"Server side rendering with React, an Odyssee"),o.a.createElement(u,null),o.a.createElement("div",null,o.a.createElement("h2",null,"Counter"),o.a.createElement("button",{onClick:function(){return e.setState({counter:e.state.counter+1})}},"Increase"),o.a.createElement("span",null,this.state.counter),o.a.createElement("button",{onClick:function(){return e.setState({counter:e.state.counter-1})}},"Decrease")))}}]),t}();t.a=c},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-dom/server")},function(e,t){},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),r=n.n(t),o=n(3),u=n(2),i=n(1),c=n(7),a=n(6),l=n(5),s=process.env.PORT||3e3,f=c();f.use("/static-files",c.static(l.join(e,"Workspace","ssr-odyssee","express-server","build"))),f.get("*",function(e,t){var n=Object(o.renderToString)(r.a.createElement(u.StaticRouter,{location:e.url,context:{}},r.a.createElement(i.a,null)));console.log(n),a.readFile("./express-server/build/index.html","utf8",function(e,r){if(e)return console.error("err",e),t.status(404).end();t.send(r.replace('<div id="root"></div>','<div id="root">'+n+"</div>"))})}),f.listen(s,function(){return console.log("Listening")})}.call(this,"/")}]);