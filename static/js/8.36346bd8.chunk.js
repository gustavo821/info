(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[8],{1178:function(e,t,n){"use strict";var a,s,c=n(21),i=n(140),o=n(58),r=n(6),l=n(51),d=n(5),b=(n(60),n(1262)),u=n(50),j=n(30),v=n(14),p=n(7),x=Object(u.a)(b.a)(a||(a=Object(l.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),m=u.a.div(s||(s=Object(l.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(d.useState)(Object(p.jsx)("span",{className:"loading-line"})),n=Object(r.a)(t,2),a=n[0],s=n[1],l=Object(d.useState)(!0),b=Object(r.a)(l,2),u=b[0],h=b[1],f=function(){var t=e.allowZero;return"object"!==Object(o.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t};return Object(d.useEffect)((function(){var t=e.allowZero,n=(e.wallet,e.closeShowLoadingEffectAfterLoaded),a=e.defaultValue,o=void 0===a?"--":a,r=Object(i.a)(e,["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"]);if(f())!t&&r.value&&/\d+\.0*[1-9]+/.test(r.value)&&0===+Object(v.bg)(r.value).toFixed(+r.decimalScale||2)&&(r.decimalScale=Object(j.d)(Math.abs(r.value))+2),r.value=Object(j.H)(r.value),r.value&&/\d+.9{6}/.test(r.value)&&(r.value=(+r.value).toFixed(5)),s(Object(p.jsx)(x,Object(c.a)(Object(c.a)({},r),{},{displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(u){var l=e.width,d=e.height;s(Object(p.jsx)(m,{className:"loading-line",width:l,height:d})),n&&h(!1)}var b=window.setTimeout((function(){f()||s(o)}),6e4);return function(){clearTimeout(b)}}),[e.value,e.decimalScale,e.suffix]),a}},1512:function(e,t,n){"use strict";t.a=n.p+"static/media/staked.45c27f0b.svg"},1736:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a,s,c=n(51),i=n(0),o=n.n(i),r=n(2),l=n(6),d=n(5),b=n(45),u=n(1178),j=n(168),v=n(294),p=n(472),x=n(471),m=n(1512),h=n(473),f=n(108),O=n.n(f),k=(n(2069),n(50)),g=n(7);function y(e){var t=e.lang,n=e.pool,a=e.wallet,s=Object(b.g)(),c=Object(d.useState)({}),i=Object(l.a)(c,2),f=i[0],k=i[1],y=Object(d.useState)(!1),N=Object(l.a)(y,2),w=N[0],T=N[1],_=Object(d.useState)(),X=Object(l.a)(_,2),z=X[0],E=X[1],F=function(){var e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k({}),e.next=3,n.getPoolInfo(a,n);case 3:t=e.sent,k(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n||"v3"!==n.version&&"v3_lite"!==n.version){e.next=5;break}return e.next=3,n.getVenusEarned(a,n.address);case 3:t=e.sent,E(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getIsStaked(a,n);case 2:t=e.sent,T(t.isStaked);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(e){e.target.src=h.default};Object(d.useEffect)((function(){F(),a.isConnected()&&(q(),L())}),[n,a.detail.account]);var I="/pool/".concat(n.version||"v1","/").concat(n.chainId,"/").concat(n.type,"/").concat(n.address);return Object(g.jsxs)("div",{className:"v2_lite_open"===n.version?"card-list open-list":"card-list",onClick:function(){!function(e){"v2_lite_open"!==n.version&&s.push(e)}(I)},children:[Object(g.jsxs)("div",{className:O()("card-header",{v3:n.isAllV3}),children:[Object(g.jsxs)("div",{className:"pool-network-type",children:[Object(g.jsx)("div",{className:"network-logo",children:Object(g.jsx)("img",{alt:"",src:function(e){var t;return"56"===e||"97"===e?t=v.default:"137"===e?t=p.default:"1"===e&&(t=x.default),t}(n.chainId)})}),Object(g.jsxs)("div",{className:"pool-type-network-text",children:[Object(g.jsxs)("div",{className:"pool-type-text",children:[t[n.type]," ",t[n.zone]]}),Object(g.jsx)("div",{className:"pool-network-text",children:n.chain.toUpperCase()})]})]}),Object(g.jsxs)("div",{className:"base-token-logo",children:[n.isLp&&Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"lp-base-token-bg",children:[Object(g.jsx)("div",{className:"base-token-bg ".concat(n.bTokens[0].bTokenSymbol)}),Object(g.jsx)("span",{className:"lp-con",children:"+"}),Object(g.jsx)("div",{className:"base-token-bg ".concat(n.bTokens[1].bTokenSymbol)})]})}),!n.isLp&&"v3"!==n.version&&"v3_lite"!==n.version&&Object(g.jsx)(g.Fragment,{children:n.bTokens.map((function(e,t){return Object(g.jsx)("div",{className:"base-token-box-bg",children:Object(g.jsx)("div",{className:"base-token-bg ".concat(e.bTokenSymbol),children:"v2_lite_open"===n.version&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("img",{alt:"",onError:V,src:"https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/".concat(e.bTokenSymbol,".png")})})})},t)}))}),("v3"===n.version||"v3_lite"===n.version)&&Object(g.jsx)(S,{bTokens:n.bTokens})]})]}),Object(g.jsxs)("div",{className:"card-content",children:[Object(g.jsx)("div",{className:"max-apy",children:"v2_lite_open"!==n.version&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"max-apy-title",children:"v2"===n.version||"v3_lite"===n.version||"v3"===n.version?t["max-apy"]:t.apy}),Object(g.jsx)("div",{className:"max-apy-num",children:Object(g.jsx)(u.a,{value:f.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})})]})}),Object(g.jsxs)("div",{className:"total-pool-liquidity",children:[Object(g.jsx)("div",{className:"total-liquidity-title",children:t["total-pool-liquidity"]}),Object(g.jsx)("div",{className:"total-liquidity-num",children:Object(g.jsx)(u.a,{value:f.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:"lp"===n.type?7:0})})]}),Object(g.jsxs)("div",{className:"your-deri-epoch",children:[w&&Object(g.jsxs)("div",{className:"staked-box",children:[Object(g.jsx)("img",{src:m.a,alt:""}),t.staked]}),+z>0&&("v3"===n.version||"v3_lite"===n.version)&&Object(g.jsx)("span",{className:"xvs-collectable",children:Object(g.jsxs)("div",{className:"staked-box",children:[Object(g.jsx)(u.a,{width:"50px",value:z,displayType:"text",thousandSeparator:!0,decimalScale:2})," \xa0 XVS  ",t.collectable]})})]}),Object(g.jsx)("div",{className:"stake-button",children:Object(g.jsx)(j.a,{disabled:"v2_lite_open"===n.version,className:"button",outline:!0,label:"v2_lite_open"===n.version?t.operating:t.stake})})]})]})}var N=k.a.div(a||(a=Object(c.a)(["\n  @-webkit-keyframes explode {\n    0% {\n        transform: translateX(0px);\n        -moz-transform : translateX(0px);\n    }\n    100% {\n        transform: translateX(100px);\n        -moz-transform : translateX(100px);\n    }\n  }\n\n  @keyframes explode {\n    0% {\n        transform: translateX(0px);\n        -moz-transform : translateX(0px);\n    }\n    100% {\n        transform: translateX(100px);\n        -moz-transform : translateX(100px);\n    }\n  }\n  .base-token{\n    margin-left: 0px!important;\n    z-index : -2;\n    visibility: hidden;\n    background-color: #111e34;\n    border : 1px solid #fff;\n  }\n  @media only screen and (max-width: 760px) {\n    .base-token{\n      display:none;\n    }\n  }\n  .base-token-box-bg.explode:hover .move  {\n    -webkit-animation : explode .4s .0s linear;\n    -moz-animation :  explode .4s .0s linear;\n    animation: explode .4s .0s linear;\n    // transform : translateX(100px)!important;\n    visibility: visible;    \n  }\n  \n  .base-token-box-bg.explode:hover .base-token {\n    z-index : 2!important;\n  } \n\n"]))),w=k.a.div(s||(s=Object(c.a)(["\n  position: absolute;\n  transform : ",";\n  width: 48px;\n  height: 48px;\n  display: inline-block;\n  border-radius: 50%;\n  .move {\n    transform : translateX(100px) ",";\n  }\n"])),(function(e){return"rotate(".concat(-e.rotate,"deg)")}),(function(e){return"rotate(".concat(e.rotate,"deg) !important")})),S=function(e){var t=e.bTokens,n=void 0===t?[]:t,a=360/n.length;return Object(g.jsxs)(N,{className:"v3-tokens",children:[Object(g.jsx)("div",{className:"tokens",children:n.filter((function(e,t){return t<3})).map((function(e,t){return Object(g.jsx)("div",{className:"base-token-box-bg",children:Object(g.jsx)("div",{className:"base-token-bg ".concat(e.bTokenSymbol)})},t)}))}),Object(g.jsxs)("div",{className:"base-token-box-bg explode",children:[Object(g.jsxs)("div",{className:"base-token-bg",children:[n.length-3," +"]}),n.map((function(e,t){var n=a*t;return Object(g.jsx)(w,{className:"base-token",rotate:n,width:"100",children:Object(g.jsx)("div",{width:"100",rotate:n,className:"base-token-bg move ".concat(e.bTokenSymbol)})},t)}))]})]})}},1737:function(e,t,n){},2069:function(e,t,n){}}]);
//# sourceMappingURL=8.36346bd8.chunk.js.map