(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[25],{1969:function(e,t,n){},2141:function(e,t,n){"use strict";n.r(t);var c=n(37),s=n(23),a=n.n(s),i=(n(4),n(25)),o=n(132),r=n(27),l=n(134),b=(n(1969),n(35)),k=n(3);t.default=Object(b.b)("wallet")(Object(b.c)((function(e){var t=e.wallet,n=e.lang,s=Object(l.c)(),b=function(){var e=Object(c.a)(a.a.mark((function e(n){var c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=8;break}return c=[t.detail.chainId,t.detail.account,n],e.next=4,r.a.request("mintTokenV3",c,{includeResponse:!0});case 4:(i=e.sent)&&i.success?s.success("mint success"):s.error("mint fail"),e.next=9;break;case 8:s.error("Please connect wallet");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsx)("div",{className:"testnet-faucet",children:Object(k.jsxs)("div",{className:"faucet-info",children:[Object(k.jsx)("div",{className:"faucet-title",children:n["obtain-testnet-token"]}),Object(k.jsxs)("div",{className:"mint-bnb",children:[Object(k.jsx)("div",{children:n["go-to-min-bnb"]}),Object(k.jsx)("div",{className:"bnb-button",children:Object(k.jsx)("a",{rel:"norelerror",target:"_blank",href:"https://testnet.binance.org/faucet-smart",children:"BNB"})})]}),Object(k.jsx)("div",{className:"mint-token",children:[{token:"BUSD"},{token:"SXP"},{token:"ETH"},{token:"LTC"},{token:"XRP"},{token:"BTCB"},{token:"ADA"},{token:"CAKE"},{token:"MATIC"},{token:"AAVE"},{token:"TUSD"},{token:"TRX"},{token:"USDT"},{token:"USDC"},{token:"UST"},{token:"LUNA"},{token:"DOGE"}].map((function(e,t){return Object(k.jsxs)("div",{className:"mint-token-box",children:[Object(k.jsx)("div",{className:"token-logo",children:Object(k.jsx)(i.a,{token:e.token,width:60,height:60})}),Object(k.jsx)("div",{className:"token-name",children:e.token}),Object(k.jsx)("div",{className:"token-button",children:Object(k.jsx)(o.a,{fontWeight:300,label:n.mint,width:88,height:31,onClick:function(){return b(e.token)}})})]},t)}))})]})})})))}}]);
//# sourceMappingURL=25.12b9f94f.chunk.js.map