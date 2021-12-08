/*! For license information please see 11.6262762f.chunk.js.LICENSE.txt */
(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[11],{1009:function(t,e,n){"use strict";var c=n(5),r=n(11),s=n(76),a=n(54),i=n(43),o=n(33),u=(n(1107),n(32));Object(s.b)("wallet","version")(Object(a.c)((function(t){var e=t.wallet,n=t.version,s=Object(i.useRouteMatch)("/futures/lite"),a=Object(i.useRouteMatch)("/futures/pro"),l=Object(r.useState)(!1),j=Object(c.a)(l,2),b=j[0],f=j[1];return Object(r.useEffect)((function(){return e.supportAllVersion?Object(o.p)("version")?n.setCurrent(Object(o.n)("version")):n.setCurrent("v2"):e.supportV1&&!e.supportV2?n.setCurrent("v1"):e.supportV2&&!e.supportV1?n.setCurrent("v2"):n.setCurrent("v1"),function(){}}),[e.detail.chainId]),Object(r.useEffect)((function(){var t=s||a;return e.detail&&(t=e.supportAllVersion&&t),f(t),function(){}}),[n.current,e.detail.chainId,window.location.href]),b?Object(u.jsx)("div",{className:"version",children:Object(u.jsxs)("div",{onClick:function(){n.switch()},className:"version-container ".concat(n.current),children:[Object(u.jsx)("span",{className:"current-v1",children:"V1"}),Object(u.jsx)("span",{className:"current-v2",children:"V2"})]})}):null})))},1010:function(t,e,n){"use strict";var c=n(0),r=n.n(c),s=n(2),a=n(5),i=n(11),o=n(33),u=(n(1108),n(76)),l=n(43),j=n(833),b=n(786),f=n(3),d=n(32);e.a=Object(u.b)("wallet")(Object(u.c)((function(t){var e=t.wallet,n=t.lang,c=Object(i.useState)(n["connect-wallet"]),u=Object(a.a)(c,2),O=u[0],p=u[1],h=Object(i.useState)([]),v=Object(a.a)(h,2),m=v[0],x=v[1],g=Object(l.useRouteMatch)("/index"),w=Object(l.useRouteMatch)({path:"/",exact:!0}),y=Object(l.useRouteMatch)({path:"/mining",exact:!0}),N=Object(l.useRouteMatch)("/team"),R=Object(l.useRouteMatch)("/retired"),k=Object(l.useRouteMatch)("/options/lite"),C=(Object(l.useRouteMatch)("/addpool"),Object(l.useRouteMatch)("/options/pro")),M=Object(l.useRouteMatch)("/logo"),S=Object(l.useRouteMatch)("/info"),V=(Object(b.a)(),k||C),E=g||y||N||w||R||M||S,I=function(t){e.isConnected()?e.isSupportChain(V)?p(Object(d.jsxs)("span",{children:[" ",Object(d.jsx)("span",{className:"address",children:Object(o.g)(t.account)})]})):p(Object(d.jsxs)("span",{className:"no-supported",children:[n["unsupported-chain-id"],t.chainId,"!"]})):p(n["connect-wallet"])};return Object(i.useEffect)((function(){return E||function(){var t=Object(s.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.connect();case 2:(n=t.sent)&&I(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){}}),[window.location.href]),Object(i.useEffect)((function(){return I(e.detail),function(){}}),[e.detail.account,e.detail.formatBalance,n]),Object(i.useEffect)((function(){var t=Object(o.m)(f.b.get()),n=Object(o.j)(f.b.get());e.setDefaultNw(n),e.isConnected()||Object(o.x)(n),x(t)}),[e]),!E&&Object(d.jsxs)("div",{className:"connect",children:[Object(d.jsxs)("div",{className:"network-text-logo",children:[Object(d.jsx)("i",{className:e.isConnected()?e.detail.symbol:e.defaultNw.symbol}),Object(d.jsx)("span",{className:"logo-text",children:e.isConnected()?e.detail.name||n["select-network"]:e.defaultNw.name}),Object(d.jsx)("span",{className:"arrow",children:Object(d.jsx)("img",{src:j.a,alt:"selector"})}),Object(d.jsx)("div",{className:"network-list",children:m.map((function(t,n){return Object(d.jsxs)("div",{className:"network-item ".concat(e.detail.code&&t.code===e.detail.code||t.isDefault?"selected":""),onClick:function(){return e.switchNetwork(t)},children:[Object(d.jsx)("span",{className:"logo ".concat(t.symbol)}),Object(d.jsx)("span",{children:t.name})]},n)}))})]}),Object(d.jsx)("div",{className:"bg-btn",children:Object(d.jsx)("button",{className:"nav-btn connect-btn",onClick:e.connect,children:O})})]})})))},1011:function(t,e,n){"use strict";var c=n(59),r=n(706),s=n(7),a=n(9),i=n(14),o=n(15),u=n(11),l=n.n(u),j=n(76),b=n(197),f=n(32);e.a=function(t){var e=function(e){Object(i.a)(u,e);var n=Object(o.a)(u);function u(){return Object(s.a)(this,u),n.apply(this,arguments)}return Object(a.a)(u,[{key:"componentDidUpdate",value:function(t){this.props.location!==t.location&&this.onRouteChanged(this.props.location)}},{key:"onRouteChanged",value:function(t){}},{key:"render",value:function(){var e=this.props,n=e.intl,s=Object(r.a)(e,["intl"]),a=n.dict;if(b.isMobile)for(var i in a)a[i].mobile&&Object.assign(a[i],a[i].mobile);return Object(f.jsx)(t,Object(c.a)(Object(c.a)({},s),{},{dict:a}))}}]),u}(l.a.Component);return Object(j.b)("intl")(Object(j.c)(e))}},1012:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var c=n(43),r=n(32);function s(){var t=window.location.href;return/^https?:\/\/(app|alphatest|testnet)/.test(t)?Object(r.jsx)(c.Redirect,{to:"/futures/pro"}):/^https?:\/\/governance/.test(t)?Object(r.jsx)(c.Redirect,{to:"/governance"}):/^https?:\/\/bridge/.test(t)?Object(r.jsx)(c.Redirect,{to:"/bridge"}):/^https?:\/\/info/.test(t)?Object(r.jsx)(c.Redirect,{to:"/info"}):Object(r.jsx)(c.Redirect,{to:"/index"})}},1100:function(t,e,n){"use strict";var c=n(5),r=n(11),s=n(833),a=(n(1109),n(76)),i=(n(834),n(129)),o=n(695),u=n.n(o),l=n(33),j=n(32);e.a=Object(a.b)("intl")(Object(a.c)((function(t){var e=t.intl,n=Object(r.useState)(!1),a=Object(c.a)(n,2),o=a[0],b=a[1],f=function(t,n){e.setLocale(t),b(!1)},d=u()("lang-box",{show:o});return Object(r.useEffect)((function(){return Object(l.p)("locale")&&f(Object(l.n)("locale")),function(){}}),[e]),Object(j.jsxs)("div",{className:"lang-picker",onMouseOver:function(){b(!0)},onMouseOut:function(){b(!1)},children:[Object(j.jsx)("span",{className:"locale",children:e.localeLabel}),Object(j.jsx)("img",{src:s.a,alt:"selector"}),Object(j.jsx)("div",{className:d,children:Object.keys(i).map((function(t,n){return Object(j.jsx)("div",{className:t===e.locale?"lang-item selected":"lang-item",onClick:function(e){return f(t)},children:i[t]},n)}))})]})})))},1107:function(t,e,n){},1108:function(t,e,n){},1109:function(t,e,n){},695:function(t,e,n){var c;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var c=arguments[e];if(c){var s=typeof c;if("string"===s||"number"===s)t.push(c);else if(Array.isArray(c)){if(c.length){var a=r.apply(null,c);a&&t.push(a)}}else if("object"===s)if(c.toString===Object.prototype.toString)for(var i in c)n.call(c,i)&&c[i]&&t.push(i);else t.push(c.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(c=function(){return r}.apply(e,[]))||(t.exports=c)}()},706:function(t,e,n){"use strict";function c(t,e){if(null==t)return{};var n,c,r=function(t,e){if(null==t)return{};var n,c,r={},s=Object.keys(t);for(c=0;c<s.length;c++)n=s[c],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(c=0;c<s.length;c++)n=s[c],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}n.d(e,"a",(function(){return c}))},786:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var c=n(91),r=n(16);function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"chainInfo";return t?c[r.a.get()][e][t]||{}:c[r.a.get()][e]}},833:function(t,e,n){"use strict";e.a=n.p+"static/media/symbol-arrow.66dccd14.svg"},834:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(43);function r(){return new URLSearchParams(Object(c.useLocation)().search)}},835:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(197);function r(t,e){return t?c.isMobile?Object.assign(t[e],t[e].mobile):t[e]:{}}}}]);
//# sourceMappingURL=11.6262762f.chunk.js.map