(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[36],{1171:function(e,a,t){},1214:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return n}));var c=t(741),s=(t(1171),t(18));function n(e){var a=e.lang;return Object(s.jsx)("div",{className:"token",children:Object(s.jsx)(c.a,{lang:a})})}},625:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var c=t(55),s=t(33),n=t(629),i=t(9),r=t(8),l=t(626),o=t(18);function d(e){var a=Object(r.useState)(Object(o.jsx)("span",{className:"loading-line"})),t=Object(i.a)(a,2),d=t[0],A=t[1];return Object(r.useEffect)((function(){var a=e.allowZero,t=Object(n.a)(e,["allowZero"]);return("object"!==Object(s.a)(e.value)&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===a)&&A(Object(o.jsx)(l.a,Object(c.a)(Object(c.a)({},t),{},{displayType:"text"}))),function(){}}),[e.value]),d}},741:function(e,a,t){"use strict";var c=t(0),s=t.n(c),n=t(1),i=t(9),r=t(8),l=t(48),o=t(625),d=t(650),A=t.p+"static/media/pancake.c40eba3d.svg",b=t.p+"static/media/sushi.084b9b6d.svg",p=t(18);a.a=Object(l.b)("wallet","loading")(Object(l.c)((function(e){var a=e.wallet,t=void 0===a?{}:a,c=e.lang,l=e.loading,u=Object(r.useState)(),j=Object(i.a)(u,2),h=j[0],x=j[1],f=Object(r.useState)(),g=Object(i.a)(f,2),w=g[0],O=g[1],B=Object(d.a)(),m=function(){var e=Object(n.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h){e.next=13;break}return"DERI",18,e.prev=3,e.next=6,window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:h,symbol:"DERI",decimals:18}}});case 6:e.sent?console.log("Thanks for your interest!"):console.log("Your loss!"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(n.a)(s.a.mark((function e(){var a,t,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=deri-protocol&order=market_cap_desc&per_page=100&page=1&sparkline=false",e.next=3,fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=deri-protocol&order=market_cap_desc&per_page=100&page=1&sparkline=false");case 3:return a=e.sent,e.next=6,a.json();case 6:(t=e.sent)&&((c={}).price=t[0].current_price,c.market_cap=t[0].market_cap,c.circulating_supply=parseInt(t[0].circulating_supply),c.total_supply=parseInt(t[0].total_supply),O(c));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){return t&&t.detail&&t.detail.account},I=function(){var e=Object(n.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!C()){e.next=6;break}return e.next=3,t.switchNetwork(B[1]);case 3:window.open("https://app.sushi.com/swap?inputCurrency=&outputCurrency=0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9"),e.next=7;break;case 6:window.open("https://app.sushi.com/swap?inputCurrency=&outputCurrency=0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(n.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!C()){e.next=6;break}return e.next=3,t.switchNetwork(B[56]);case 3:window.open("https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe60eaf5a997dfae83739e035b005a33afdcc6df5"),e.next=7;break;case 6:window.open("https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe60eaf5a997dfae83739e035b005a33afdcc6df5");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){l.loading(),w&&l.loaded()}),[w]),Object(r.useEffect)((function(){var e;C()&&(56===+t.detail.chainId?e="0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5":1===+t.detail.chainId?e="0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9":128===+t.detail.chainId?e="0x2bdA3e331Cf735D9420e41567ab843441980C4B8":137===+t.detail.chainId&&(e="0x3d1d2afd191b165d140e3e8329e634665ffb0e5e"),x(e))}),[t.detail]),Object(r.useEffect)((function(){var e;return e=window.setInterval((function(){Q()}),1e3),function(){e&&clearInterval(e)}}),[]),Object(p.jsxs)("div",{className:"token-info",children:[Object(p.jsx)("div",{className:"title",children:c["the-deri-token"]}),Object(p.jsx)("div",{className:"add-to-matemask",children:Object(p.jsx)("button",{onClick:m,children:c["add-deri-to-matemask"]})}),Object(p.jsxs)("div",{className:"buy-deri",children:[Object(p.jsx)("a",{target:"_blank",onClick:N,children:Object(p.jsxs)("div",{className:"pancake-buy",children:[Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:A})}),Object(p.jsx)("span",{children:c["buy-deri"]})]})}),Object(p.jsx)("a",{target:"_blank",onClick:I,children:Object(p.jsxs)("div",{className:"sushi-buy",children:[Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:b})}),Object(p.jsx)("span",{children:c["buy-deri"]})]})})]}),Object(p.jsxs)("div",{className:"buy-deri",children:[Object(p.jsx)("a",{target:"_blank",href:"https://www.gate.io/tradepro/DERI_USDT",children:Object(p.jsxs)("div",{className:"pancake-buy",children:[Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:"data:image/png;base64,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"})}),Object(p.jsx)("span",{children:c["buy-deri"]})]})}),Object(p.jsx)("a",{target:"_blank",href:"https://www.mexc.com/zh-CN/exchange/DERI_USDT",children:Object(p.jsxs)("div",{className:"sushi-buy",children:[Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:"data:image/png;base64,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"})}),Object(p.jsx)("span",{children:c["buy-deri"]})]})})]}),Object(p.jsxs)("div",{className:"deri-info",children:[Object(p.jsx)("div",{className:"bottom-square"}),Object(p.jsxs)("div",{className:"line-of-box",children:[Object(p.jsxs)("div",{className:"box",children:[Object(p.jsxs)("div",{className:"num",children:["$ ",w?Object(p.jsx)(o.a,{value:w.price,displayType:"text",thousandSeparator:!0,decimalScale:"4"}):"--"]}),Object(p.jsx)("div",{className:"text",children:c.price})]}),Object(p.jsxs)("div",{className:"box",children:[Object(p.jsxs)("div",{className:"num",children:["$ ",w?Object(p.jsx)(o.a,{value:w.market_cap,displayType:"text",thousandSeparator:!0,decimalScale:"0"}):"--"]}),Object(p.jsx)("div",{className:"text",children:c["market-cap"]})]})]}),Object(p.jsxs)("div",{className:"line-of-box",children:[Object(p.jsxs)("div",{className:"box",children:[Object(p.jsx)("div",{className:"num",children:w?Object(p.jsx)(o.a,{value:w.circulating_supply,displayType:"text",thousandSeparator:!0,decimalScale:"0"}):"--"}),Object(p.jsx)("div",{className:"text",children:c["circulating-supply"]})]}),Object(p.jsxs)("div",{className:"box",children:[Object(p.jsx)("div",{className:"num",children:w?Object(p.jsx)(o.a,{value:w.total_supply,displayType:"text",thousandSeparator:!0,decimalScale:"0"}):"--"}),Object(p.jsx)("div",{className:"text",children:c["total-supply"]})]})]})]})]})})))}}]);
//# sourceMappingURL=36.c0816983.chunk.js.map