(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[23],{1384:function(e,t,n){"use strict";var a,i,s=n(22),r=n(325),u=n(54),d=n(9),c=n(63),o=n(8),p=(n(77),n(1430)),l=n(57),y=n(19),m=n(17),b=n(4),f=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],j=Object(l.a)(p.a)(a||(a=Object(c.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),v=l.a.span(i||(i=Object(c.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(o.useState)(Object(b.jsx)("span",{className:"loading-line"})),n=Object(d.a)(t,2),a=n[0],i=n[1],c=Object(o.useState)(!0),p=Object(d.a)(c,2),l=p[0],h=p[1],x=function(){var t=e.allowZero;return"object"!==Object(u.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},O=function(e){return e&&e.replace(/\.$/,"")};return Object(o.useEffect)((function(){var t=e.allowZero,n=(e.wallet,e.closeShowLoadingEffectAfterLoaded),a=e.defaultValue,u=void 0===a?"--":a,d=Object(r.a)(e,f);if(x())d.decimalScale>0&&d.value&&/\d+\.0*[1-9]+/.test(d.value)&&!t&&0===+Object(m.bg)(d.value).toFixed(+d.decimalScale||2)&&(d.decimalScale=Object(y.f)(Math.abs(d.value))+2),(-1===d.decimalScale||0===+d.value&&t)&&delete d.decimalScale,d.value=/e(\+|=)?/.test(d.value)?Object(y.L)(d.value):""+d.value,d.value&&/\d+.9{6}/.test(d.value)&&(d.value=(+d.value).toFixed(5)),i(Object(b.jsx)(j,Object(s.a)(Object(s.a)({},d),{},{renderText:O,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(l){var c=e.width,o=e.height;i(Object(b.jsx)(v,{className:"loading-line",width:c,height:o})),n&&h(!1)}var p=window.setTimeout((function(){x()||i(u)}),u===d.value?0:6e4);return function(){clearTimeout(p)}}),[e.value,e.decimalScale,e.suffix]),a}},1717:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a,i=n(1540),s=n(1872),r=n(8),u=n(117),d={};function c(e){var t=Object(u.b)(),n=function(e){return d[e]}(e),a=n.address,c=n.abi,o=t.ethereum;return Object(r.useMemo)((function(){if(!a||!c||!o)return null;var e=new s.a(o,"any");return new i.b(a,c,function(e,t){return t?function(e,t){return e.getSigner(t).connectUnchecked()}(e,t):e}(e,t.account))}),[a,c,o])}(a=n(1718)).keys().forEach((function(e){var t=e.split("/"),n=t[t.length-1];d[n.substring(0,n.indexOf("."))]=a(e)}))},1718:function(e,t,n){var a={"./ERC20USDC.json":1719,"./airDrop.json":1720,"./airDropTest.json":1721,"./compensation.json":1722};function i(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=s,e.exports=i,i.id=1718},1719:function(e){e.exports=JSON.parse('{"address":"0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8","abi":[{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"}]}')},1720:function(e){e.exports=JSON.parse('{"address":"0xb32A8c3ddCdd8727d6a1ef9007a0Db1208d7f2AD","abi":[{"inputs":[{"internalType":"address","name":"bToken_","type":"address"},{"internalType":"address","name":"pool_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"},{"internalType":"int256","name":"volume_","type":"int256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"pTokenId","type":"uint256"}],"name":"ClaimPToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"amount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimPToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"bool","name":"allowance","type":"bool"}],"name":"updateWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"volume","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},1721:function(e){e.exports=JSON.parse('{"address":"0x0fBD7d1f890fB0CCAE9c3f8F8DF35E8B55111D60","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NewAirdrop","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address[]","name":"accounts","type":"address[]"}],"name":"getBalances","outputs":[{"internalType":"uint256[]","name":"bals","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"components":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct TokenAirdrop.Balance[]","name":"bals","type":"tuple[]"}],"name":"newAirdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]}')},1722:function(e){e.exports=JSON.parse('{"address":"0xd6bB67c850B78fcc169E642bB73f76Ec6AA40f47","abi":[{"inputs":[{"internalType":"address","name":"token_","type":"address"},{"internalType":"uint256","name":"deadline_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"compensations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deadline","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct Compensation.Info[]","name":"info","type":"tuple[]"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},1874:function(e,t){},1876:function(e,t){},2351:function(e,t,n){},2573:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(9),s=n(0),r=n.n(s),u=n(8),d=n(48),c=n(19),o=n(187),p=(n(1384),n(186)),l=(n(44),n.p+"static/media/time.77d9d1c0.svg"),y=(n.p,n(2351),n(1717)),m=n(13),b=n(142),f=n(4),j=n(1942);j.BigNumber,j.ethers,j.utils;t.default=Object(d.b)("wallet","poolManager")(Object(d.c)((function(e){var t=e.lang,n=e.wallet,s=void 0===n?{}:n,d=e.type,j=void 0===d?"deri":d,v=Object(u.useState)(0),h=Object(i.a)(v,2),x=(h[0],h[1],Object(u.useState)(!0)),O=Object(i.a)(x,2),T=O[0],w=O[1],g=Object(o.c)(),M=Object(u.useState)({}),N=Object(i.a)(M,2),k=(N[0],N[1],Object(u.useState)(!1)),A=Object(i.a)(k,2),C=(A[0],A[1],Object(u.useState)(!0)),S=Object(i.a)(C,2),D=(S[0],S[1],Object(u.useState)(!1)),E=Object(i.a)(D,2),B=E[0],F=E[1],U=Object(y.a)("airDrop"),_=(Object(y.a)("ERC20USDC"),{processing:"Claim Processing",success:"Claim Reward Executed",error:"Claim Reward Failed"}),L={success:"Claim Reward",error:"Transaction Failed"},J=function(){var e=Object(a.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(s.isConnected()&&U&&Object(c.h)(s.detail.chainId,42161))){e.next=5;break}return e.next=3,U.whitelist(s.detail.account);case 3:t=e.sent,F(!!t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(a.a)(r.a.mark((function e(){var t,n,a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s.isConnected()||!U||42161!==s.detail.chainId){e.next=22;break}return e.prev=1,e.next=4,U.claimPToken();case 4:t=e.sent,e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(1),console.log(e.t0),e.t0.error&&e.t0.error.data&&e.t0.error.data.message&&(n=e.t0.error.data.message,g.error(n)),e.abrupt("return",!1);case 12:if(!t||!t.hash){e.next=16;break}b.a.emit(m.h,{title:_,content:L,hash:t.hash}),e.next=17;break;case 16:return e.abrupt("return",!1);case 17:return e.next=19,t.wait();case 19:a=e.sent,console.log("receipt",a),a&&(console.log("receipt",a),a&&a.transactionHash&&(i=a.transactionHash,a.status?(J(),w(!0),b.a.emit(m.i,{title:_,content:L,context:{success:!0,hash:i,error:"error"}})):b.a.emit(m.i,{title:_,content:L,context:{success:(!1).success,hash:i,error:"error"}})));case 22:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){s.isConnected()&&J()}),[s.chainId,s.account]),Object(u.useEffect)((function(){B?(new Date).getTime()>=16687656e5?w(!0):w(!1):w(!0)}),[B]),Object(f.jsx)("div",{className:"airdrop-box",children:Object(f.jsx)("div",{className:"airdrop-info",children:Object(f.jsxs)("div",{className:"airdrop-info-box",children:[Object(f.jsx)("div",{className:"airdrop-title",children:"$1000 Giveaway for FTT Holders"}),Object(f.jsxs)("div",{className:"wallet-address",children:[Object(f.jsx)("span",{className:"blue-logo"}),Object(c.k)(s.detail.account)]}),"usdc"===j&&Object(f.jsxs)("div",{className:"airdrop-time position",children:[Object(f.jsx)("div",{className:"time-logo",children:Object(f.jsx)("img",{src:l,alt:""})}),Object(f.jsxs)("div",{className:"time-text",children:[Object(f.jsxs)("div",{className:"time-title",children:[Object(f.jsx)("div",{children:t["start-time"]}),Object(f.jsx)("div",{children:t["expire-time"]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:"2022-11-09 10:00:00 UTC"}),Object(f.jsx)("div",{children:"2022-11-18 10:00:00 UTC"})]})]})]}),"deri"===j&&Object(f.jsxs)("div",{className:"airdrop-time",children:[Object(f.jsx)("div",{className:"time-logo",children:Object(f.jsx)("img",{src:l,alt:""})}),Object(f.jsxs)("div",{className:"time-text",children:[Object(f.jsxs)("div",{className:"time-title",children:[Object(f.jsx)("div",{children:t["start-time"]}),Object(f.jsx)("div",{children:t["expire-time"]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:"2022-03-09 10:00:00 UTC"}),Object(f.jsx)("div",{children:"2022-03-11 12:00:00 UTC"})]})]})]}),Object(f.jsx)("div",{className:"claim",children:Object(f.jsx)(p.a,{fontWeight:"bold",disabled:T,label:t.claim,width:"277",height:"72",fontSize:"32",onClick:I})})]})})})})))}}]);
//# sourceMappingURL=23.9bd65c62.chunk.js.map