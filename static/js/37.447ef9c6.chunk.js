(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[37],{1153:function(e,n,t){},1154:function(e,n,t){},1194:function(e,n,t){"use strict";t.r(n);var c=t(55),a=t(0),i=t.n(a),o=t(1),s=t(10),r=t(6),l=t(26),d=t(829),u=(t(830),t(13)),b=t(65),j=(t(1153),t(1154),t(618)),p=t.n(j),f=t(48),h=t(660),v=t(18),O=b[u.a.get()].chainInfo;n.default=Object(f.b)("wallet")(Object(f.c)((function(e){var n=e.wallet,t=e.lang,a=Object(r.useState)("liquidity"),b=Object(s.a)(a,2),j=b[0],f=b[1],m=Object(l.useHistory)(),y=Object(r.useState)(!1),x=Object(s.a)(y,2),k=x[0],_=x[1],g=Object(l.useParams)(),w=g.version,I=g.chainId,N=g.symbol,q=g.baseToken,T=g.address,C=g.type,J=Object(h.a)(),S=O[I]&&O[I].name,z={version:w,chainId:I,symbol:N,baseToken:q,address:T,wallet:n,type:C,lang:t},E="/addsymbol/".concat(w||"v1","/").concat(I,"/").concat(C,"/").concat(N,"/").concat(q,"/").concat(T);J.has("baseTokenId")&&(z.baseTokenId=J.get("baseTokenId")),J.has("symbolId")&&(z.symbolId=J.get("symbolId"));var F=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.X)(n.detail.chainId,T,n.detail.account).catch((function(e){return console.log(e)}));case 2:t=e.sent,_(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.eb.update();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){n&&n.detail&&n.detail.account&&"v2_lite_open"===w&&(F(),H())}),[n,n.detail,T]);var P=p()("mining-info",j,{"open-zone":"v2_lite_open"===w});return Object(v.jsxs)("div",{className:P,children:[Object(v.jsxs)("div",{className:"pool-header",children:[Object(v.jsx)("div",{className:"pool-network",children:"lp"===C||"v2"===w||"v2_lite"===w||"v2_lite_open"===w||"option"===w?"".concat(q," @ ").concat(S):"".concat(N,"/").concat(q," @ ").concat(S)}),"v2_lite_open"!==w&&Object(v.jsx)("div",{className:"check-trade-liquidity",children:Object(v.jsx)("div",{className:"liquidity-mining",onClick:function(){return f("liquidity")},children:t["liquidity-mining"]})})]}),Object(v.jsx)("div",{className:"pool-info",children:Object(v.jsx)(d.a,Object(c.a)({},z))}),k&&"v2_lite_open"===w&&Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"add-symbol",children:Object(v.jsx)("button",{onClick:function(){return function(e){m.push(e)}(E)},children:t["add-symbol"]})})})]})})))}}]);
//# sourceMappingURL=37.447ef9c6.chunk.js.map