(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[8],{1381:function(e,t,n){"use strict";var a,s,c=n(22),i=n(325),o=n(54),r=n(9),l=n(63),d=n(8),b=(n(77),n(1433)),u=n(57),j=n(19),v=n(17),x=n(4),m=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],p=Object(u.a)(b.a)(a||(a=Object(l.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),h=u.a.span(s||(s=Object(l.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(d.useState)(Object(x.jsx)("span",{className:"loading-line"})),n=Object(r.a)(t,2),a=n[0],s=n[1],l=Object(d.useState)(!0),b=Object(r.a)(l,2),u=b[0],f=b[1],O=function(){var t=e.allowZero;return"object"!==Object(o.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},k=function(e){return e&&e.replace(/\.$/,"")};return Object(d.useEffect)((function(){var t=e.allowZero,n=(e.wallet,e.closeShowLoadingEffectAfterLoaded),a=e.defaultValue,o=void 0===a?"--":a,r=Object(i.a)(e,m);if(O())r.decimalScale>0&&r.value&&/\d+\.0*[1-9]+/.test(r.value)&&!t&&0===+Object(v.bg)(r.value).toFixed(+r.decimalScale||2)&&(r.decimalScale=Object(j.f)(Math.abs(r.value))+2),(-1===r.decimalScale||0===+r.value&&t)&&delete r.decimalScale,r.value=/e(\+|=)?/.test(r.value)?Object(j.L)(r.value):""+r.value,r.value&&/\d+.9{6}/.test(r.value)&&(r.value=(+r.value).toFixed(5)),s(Object(x.jsx)(p,Object(c.a)(Object(c.a)({},r),{},{renderText:k,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(u){var l=e.width,d=e.height;s(Object(x.jsx)(h,{className:"loading-line",width:l,height:d})),n&&f(!1)}var b=window.setTimeout((function(){O()||s(o)}),o===r.value?0:6e4);return function(){clearTimeout(b)}}),[e.value,e.decimalScale,e.suffix]),a}},1597:function(e,t,n){"use strict";t.a=n.p+"static/media/staked.46571832.svg"},1830:function(e,t,n){},1940:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a,s,c=n(63),i=n(2),o=n(9),r=n(0),l=n.n(r),d=n(8),b=n(61),u=n(1381),j=n(186),v=n(507),x=n(509),m=n(510),p=n(506),h=n(1597),f=n(512),O=(n(76),n.p,n(2174),n(57)),k=n(4);function g(e){var t=e.lang,n=e.pool,a=e.wallet,s=Object(b.g)(),c=Object(d.useState)({}),r=Object(o.a)(c,2),O=r[0],g=r[1],N=Object(d.useState)(!1),y=Object(o.a)(N,2),S=y[0],T=y[1],F=Object(d.useState)(),_=Object(o.a)(F,2),B=_[0],z=_[1],C=Object(d.useState)(!0),E=Object(o.a)(C,2),X=(E[0],E[1]),D=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g({}),e.next=3,n.getPoolInfo(n.address,n.chainId,n.version);case 3:t=e.sent,g(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n||"v3"!==n.version&&"v3_lite"!==n.version){e.next=5;break}return e.next=3,n.getVenusEarned(a,n.address);case 3:t=e.sent,z(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getIsStaked(a,n);case 2:(t=e.sent)&&T(t.isStaked);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(e){e.target.src=f.default};Object(d.useEffect)((function(){D(),a.isConnected()&&(L(),I())}),[n,a.detail.account]),Object(d.useEffect)((function(){var e=sessionStorage.getItem(n.address);null!==e&&e&&X(!1)}),[n]);var A="/pool/".concat(n.version||"v1","/").concat(n.chainId,"/").concat(n.type,"/").concat(n.address);return Object(k.jsx)("div",{className:"".concat("0x243681B8Cd79E3823fF574e07B2378B8Ab292c1E"===n.address?"showGuide":""," card-box"),children:Object(k.jsxs)("div",{className:"v2_lite_open"===n.version?"card-list open-list":"card-list",onClick:function(){!function(e){"v2_lite_open"!==n.version&&s.push(e)}(A)},children:[Object(k.jsxs)("div",{className:"card-header ".concat(n.retired?"".concat(n.version):""," ").concat(n.new?"new":""),children:[Object(k.jsxs)("div",{className:"pool-network-type",children:[Object(k.jsx)("div",{className:"network-logo",children:Object(k.jsx)("img",{alt:"",src:function(e){var t;return"56"===e||"97"===e?t=v.default:"137"===e?t=m.default:"1"===e?t=p.default:"42161"!==e&&"421611"!==e||(t=x.default),t}(n.chainId)})}),Object(k.jsxs)("div",{className:"pool-type-network-text",children:[Object(k.jsxs)("div",{className:"pool-type-text",children:["0xD2D950e338478eF7FeB092F840920B3482FcaC40"!==n.address&&Object(k.jsxs)(k.Fragment,{children:[t[n.type]," ",t[n.zone]]}),"0x1eF92eDA3CFeefb8Dae0DB4507f860d3b73f29BA"===n.address&&Object(k.jsx)(k.Fragment,{children:"DERI-based"}),"0xD2D950e338478eF7FeB092F840920B3482FcaC40"===n.address&&Object(k.jsx)(k.Fragment,{children:t[n.zone]})]}),Object(k.jsx)("div",{className:"pool-network-text",children:"BSC"===n.chain.toUpperCase()?"BNB Chain":n.chain.toUpperCase()})]})]}),Object(k.jsxs)("div",{className:"base-token-logo",children:[n.isLp&&Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("div",{className:"lp-base-token-bg",children:[Object(k.jsx)("div",{className:"base-token-bg ".concat(n.bTokens[0].bTokenSymbol)}),Object(k.jsx)("span",{className:"lp-con",children:"+"}),Object(k.jsx)("div",{className:"base-token-bg ".concat(n.bTokens[1].bTokenSymbol)})]})}),!n.isLp&&"v3"!==n.version&&"v3_lite"!==n.version&&Object(k.jsx)(k.Fragment,{children:n.bTokens.map((function(e,t){return Object(k.jsx)("div",{className:"base-token-box-bg no-animation-tokens",children:Object(k.jsx)("div",{className:"base-token-bg ".concat(e.bTokenSymbol),children:"v2_lite_open"===n.version&&Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("img",{alt:"",onError:q,src:"https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/".concat(e.bTokenSymbol,".png")})})})},t)}))}),("v3"===n.version||"v3_lite"===n.version)&&!n.singleBtoken&&Object(k.jsx)(w,{bTokens:n.bTokens}),("v3"===n.version||"v3_lite"===n.version)&&n.singleBtoken&&Object(k.jsx)("div",{className:"base-token-box-bg no-animation-tokens",children:Object(k.jsx)("div",{className:"base-token-bg ".concat(n.bTokens[0].bTokenSymbol)})})]})]}),Object(k.jsxs)("div",{className:"card-content",children:[Object(k.jsx)("div",{className:"max-apy",children:"v2_lite_open"!==n.version&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:"max-apy-title",children:"v2"===n.version||"v3_lite"===n.version||"v3"===n.version?t["max-apy"]:t.apy}),Object(k.jsx)("div",{className:"max-apy-num",children:Object(k.jsx)(u.a,{value:O.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})})]})}),Object(k.jsxs)("div",{className:"total-pool-liquidity",children:[Object(k.jsx)("div",{className:"total-liquidity-title",children:t["total-pool-liquidity"]}),Object(k.jsx)("div",{className:"total-liquidity-num",children:Object(k.jsx)(u.a,{value:O.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:"lp"===n.type?7:0})})]}),Object(k.jsxs)("div",{className:"your-deri-epoch",children:[S&&Object(k.jsxs)("div",{className:"staked-box",children:[Object(k.jsx)("img",{src:h.a,alt:""}),t.staked]}),+B>0&&("v3"===n.version||"v3_lite"===n.version)&&Object(k.jsx)("span",{className:"xvs-collectable",children:Object(k.jsxs)("div",{className:"staked-box",children:[Object(k.jsx)(u.a,{width:"50px",value:B,displayType:"text",thousandSeparator:!0,decimalScale:2})," \xa0 XVS  ",t.collectable]})})]}),Object(k.jsx)("div",{className:"stake-button",children:Object(k.jsx)(j.a,{disabled:"v2_lite_open"===n.version,className:"button",outline:!0,label:"v2_lite_open"===n.version?t.operating:t.stake})})]})]})})}var N=O.a.div(a||(a=Object(c.a)(["\n  @-webkit-keyframes explode {\n    0% {\n        transform: translateX(0px);\n        -moz-transform : translateX(0px);\n    }\n    100% {\n        transform: translateX(100px);\n        -moz-transform : translateX(100px);\n    }\n  }\n\n  @keyframes explode {\n    0% {\n        transform: translateX(0px);\n        -moz-transform : translateX(0px);\n    }\n    100% {\n        transform: translateX(100px) ;\n        -moz-transform : translateX(100px) ;\n    }\n  }\n  .base-token{\n    margin-left: 0px !important;\n    z-index : -2;\n    visibility: hidden;\n    background-color: #111e34;\n    border : 1px solid #fff;\n  }\n  @media only screen and (max-width: 760px) {\n    .base-token{\n      display:none;\n    }\n  }\n  .base-token-box-bg.explode:hover .move  {\n    -webkit-animation : explode .4s .0s linear;\n    -moz-animation :  explode .4s .0s linear;\n    animation: explode .4s .0s linear;\n    visibility: visible;    \n  }\n  \n  .base-token-box-bg.explode:hover .base-token {\n    z-index : 2 !important;\n  } \n\n"]))),y=O.a.div(s||(s=Object(c.a)(["\n  position: absolute;\n  transform : ",";\n  width: 48px;\n  height: 48px;\n  display: inline-block;\n  border-radius: 50%;\n  .move {\n    transform : translateX(100px) ",";\n  }\n"])),(function(e){return"rotate(".concat(-e.rotate,"deg)")}),(function(e){return"rotate(".concat(e.rotate,"deg)")})),w=function(e){var t=e.bTokens,n=void 0===t?[]:t,a=360/n.length;return Object(k.jsxs)(N,{className:"v3-tokens",children:[Object(k.jsx)("div",{className:"tokens",children:n.filter((function(e,t){return t<3})).map((function(e,t){return Object(k.jsx)("div",{className:"base-token-box-bg",children:Object(k.jsx)("div",{className:"base-token-bg ".concat(e.bTokenSymbol)})},t)}))}),Object(k.jsxs)("div",{className:"base-token-box-bg explode",children:[Object(k.jsxs)("div",{className:"base-token-bg num-token",children:[n.length-3," +"]}),n.map((function(e,t){var n=a*t;return Object(k.jsx)(y,{className:"base-token",rotate:n,width:"100",children:Object(k.jsx)("div",{width:"100",rotate:n,className:"base-token-bg move ".concat(e.bTokenSymbol)})},t)}))]})]})}},2174:function(e,t,n){}}]);
//# sourceMappingURL=8.edd3cd18.chunk.js.map