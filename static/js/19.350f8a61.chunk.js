(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[19],{1363:function(e,t,n){"use strict";var c,a,i=n(21),s=n(213),r=n(42),o=n(6),l=n(63),d=n(9),j=(n(70),n(1446)),u=n(51),b=n(19),h=n(15),m=n(4),v=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],p=Object(u.a)(j.a)(c||(c=Object(l.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),f=u.a.div(a||(a=Object(l.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(d.useState)(Object(m.jsx)("span",{className:"loading-line"})),n=Object(o.a)(t,2),c=n[0],a=n[1],l=Object(d.useState)(!0),j=Object(o.a)(l,2),u=j[0],x=j[1],O=function(){var t=e.allowZero;return"object"!==Object(r.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},k=function(e){return e&&e.replace(/\.$/,"")};return Object(d.useEffect)((function(){var t=e.allowZero,n=(e.wallet,e.closeShowLoadingEffectAfterLoaded),c=e.defaultValue,r=void 0===c?"--":c,o=Object(s.a)(e,v);if(O())o.decimalScale>0&&o.value&&/\d+\.0*[1-9]+/.test(o.value)&&0===+Object(h.bg)(o.value).toFixed(+o.decimalScale||2)&&(o.decimalScale=Object(b.d)(Math.abs(o.value))+2),(-1===o.decimalScale||0===+o.value&&t)&&delete o.decimalScale,o.value=Object(b.K)(o.value),o.value&&/\d+.9{6}/.test(o.value)&&(o.value=(+o.value).toFixed(5)),a(Object(m.jsx)(p,Object(i.a)(Object(i.a)({},o),{},{renderText:k,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(u){var l=e.width,d=e.height;a(Object(m.jsx)(f,{className:"loading-line",width:l,height:d})),n&&x(!1)}var j=window.setTimeout((function(){O()||a(r)}),6e4);return function(){clearTimeout(j)}}),[e.value,e.decimalScale,e.suffix]),c}},1383:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c,a=n(63),i=n(51),s=n(1524),r=n.n(s),o=n(154),l=n(19),d=n(1499),j=n(4),u=i.a.div(c||(c=Object(a.a)(["\n  display:",";\n  .text {\n    border-bottom : 1px dashed #93A1B8;\n    width : max-content;\n    cursor : pointer;\n    display:","\n  }\n  \n  .__react_component_tooltip.tooltip.show {\n    font-weight : "," \n  }\n"])),(function(e){return e.block}),(function(e){return e.block}),(function(e){return e.isWin?400:600}));function b(e){var t=e.text,n=e.id,c=void 0===n?String((new Date).getTime())+Math.random():n,a=e.tip,i=e.multiline,s=e.html,b=e.className,h=e.element,m=void 0===h?"":h,v=e.block,p=void 0===v?"block":v,f=e.width,x=void 0===f?"auto":f,O=e.children,k=e.tiggerEvent;return Object(j.jsxs)(u,{className:b,block:p,isWin:d.isWindows,children:[Object(j.jsx)("div",{className:"text","data-for":c,"data-tip":s?r.a.renderToString(m):a,"data-event":Object(l.z)()?"click":k,"data-html":s,children:t||O}),a&&Object(j.jsx)(o.a,{id:c,width:x,padding:"12",place:"bottom",overridePosition:function(e,t,n,c,a,i,s,r){var o=n.getBoundingClientRect(),l=c.getBoundingClientRect(),d=o.x,j=o.y,u=o.height,b=o.width;e.left,e.top;return d+l.width/2>document.documentElement.clientWidth?d-=Math.abs(b-l.width):d-(l.width-b)/2<0?d-=b:d-=(l.width-b)/2,j+u+l.height>=document.documentElement.clientHeight?j=j+u-l.height:j+=u,d<0&&(d=0),j<0&&(j=0),{top:j,left:d}},html:s,borderRadius:8,multiline:i})]})}},1657:function(e,t,n){"use strict";t.a=n.p+"static/media/staked.46571832.svg"},1682:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c,a=n(63),i=n(51),s=(n(9),n(4)),r=i.a.div(c||(c=Object(a.a)(["\nwidth:","%;\nmax-width:100%;\nheight:10px;\nbackground-color: #5577FD;\n"])),(function(e){return e.width}));function o(e){var t=e.startTimestamp,n=e.nowTimestamp,c=e.endTimestamp,a=parseInt((n-t)/(c-t)*100);return Object(s.jsx)("div",{className:"time-slider",children:Object(s.jsx)(r,{width:a})})}},1683:function(e,t,n){"use strict";var c,a,i,s,r=n(21),o=n(6),l=n(213),d=n(63),j=n(9),u=n(51),b=n(65),h=n.n(b),m=n(4),v=u.a.div(c||(c=Object(d.a)(["\n  display: inline-block;\n  vertical-align: middle;\n"]))),p=u.a.svg(a||(a=Object(d.a)(["\n  fill: none;\n  stroke: white;\n  stroke-width: 2px;\n"]))),f=u.a.input.attrs({type:"checkbox"})(i||(i=Object(d.a)(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"]))),x=u.a.div(s||(s=Object(d.a)(["\n  background: ",";\n  border: 2px solid #5577FD;\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border-radius: 4px;\n  box-sizing: border-box;\n  border-radius: 4px;\n  cursor : pointer;\n  position : relative;\n\n  ",":focus + & {\n    box-shadow: 0 0 0 3px pink;\n  }\n\n  "," {\n    visibility: ",";\n    display: flex;\n    position : absolute;\n\n  }\n"])),(function(e){return e.checked?"#5577FD":"none"}),f,p,(function(e){return e.checked?"visible":"hidden"}));t.a=function(e){var t=e.className,n=e.onChange,c=e.checked,a=Object(l.a)(e,["className","onChange","checked"]),i=Object(j.useState)(c),s=Object(o.a)(i,2),d=s[0],u=s[1];Object(j.useEffect)((function(){u(c)}),[c]);var b=h()("c-checkbox",{checked:d});return Object(m.jsxs)(v,{className:t,children:[Object(m.jsx)(f,Object(r.a)(Object(r.a)({checked:d},a),{},{onChange:n})),Object(m.jsx)(x,{checked:d,className:b,onClick:function(){var e=!d;u(e),n&&n(e)},children:Object(m.jsx)(p,{className:"icon",viewBox:"0 0 24 24",children:Object(m.jsx)("polyline",{points:"20 6 9 17 4 12"})})})]})}},1731:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(1798),a=n.n(c),i=(n(1802),n(1803),n(4));function s(e){var t=e.label,n=e.className,c=e.checked,s=e.onClick,r=function(e){s&&s(!c)};return Object(i.jsxs)("div",{className:"l-toggle",children:[Object(i.jsx)("span",{className:"label-text",children:t}),Object(i.jsx)(a.a,{onClick:r,checked:c,className:n,onChange:r,icons:!1})]})}},1797:function(e,t,n){},1803:function(e,t,n){},1804:function(e,t,n){},1805:function(e,t,n){},1806:function(e,t,n){"use strict";n(54),n(19),n(1684),n(1672),n(1807),n(134),n(4)},1807:function(e,t,n){},1877:function(e,t,n){"use strict";n.d(t,"a",(function(){return N}));var c,a,i=n(63),s=n(2),r=n(6),o=n(0),l=n.n(o),d=n(9),j=n(54),u=n(1363),b=n(182),h=n(509),m=n(510),v=n(512),p=n(508),f=n(1657),x=n(514),O=(n(65),n.p+"static/media/close.61c9d399.svg"),k=(n(1804),n(51)),g=n(4);function N(e){var t=e.lang,n=e.pool,c=e.wallet,a=Object(j.g)(),i=Object(d.useState)({}),o=Object(r.a)(i,2),k=o[0],N=o[1],w=Object(d.useState)(!1),y=Object(r.a)(w,2),C=y[0],F=y[1],I=Object(d.useState)(),T=Object(r.a)(I,2),_=T[0],E=T[1],B=Object(d.useState)(!0),D=Object(r.a)(B,2),P=D[0],A=D[1],L=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N({}),e.next=3,n.getPoolInfo(c,n);case 3:t=e.sent,N(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n||"v3"!==n.version&&"v3_lite"!==n.version){e.next=5;break}return e.next=3,n.getVenusEarned(c,n.address);case 3:t=e.sent,E(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getIsStaked(c,n);case 2:(t=e.sent)&&F(t.isStaked);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(e){e.target.src=x.default};Object(d.useEffect)((function(){L(),c.isConnected()&&(X(),z())}),[n,c.detail.account]),Object(d.useEffect)((function(){var e=sessionStorage.getItem(n.address);null!==e&&e&&A(!1)}),[n]);var H="/pool/".concat(n.version||"v1","/").concat(n.chainId,"/").concat(n.type,"/").concat(n.address);return Object(g.jsxs)("div",{className:"".concat("0x243681B8Cd79E3823fF574e07B2378B8Ab292c1E"===n.address?"showGuide":""," card-box"),children:[Object(g.jsxs)("div",{className:"v2_lite_open"===n.version?"card-list open-list":"card-list",onClick:function(){!function(e){"v2_lite_open"!==n.version&&a.push(e)}(H)},children:[Object(g.jsxs)("div",{className:"card-header ".concat(n.retired?n.version:""," ").concat(n.new?"new":""),children:[Object(g.jsxs)("div",{className:"pool-network-type",children:[Object(g.jsx)("div",{className:"network-logo",children:Object(g.jsx)("img",{alt:"",src:function(e){var t;return"56"===e||"97"===e?t=h.default:"137"===e?t=v.default:"1"===e?t=p.default:"42161"!==e&&"421611"!==e||(t=m.default),t}(n.chainId)})}),Object(g.jsxs)("div",{className:"pool-type-network-text",children:[Object(g.jsxs)("div",{className:"pool-type-text",children:["0xD2D950e338478eF7FeB092F840920B3482FcaC40"!==n.address&&Object(g.jsxs)(g.Fragment,{children:[t[n.type]," ",t[n.zone]]}),"0xD2D950e338478eF7FeB092F840920B3482FcaC40"===n.address&&Object(g.jsx)(g.Fragment,{children:t[n.zone]})]}),Object(g.jsx)("div",{className:"pool-network-text",children:"BSC"===n.chain.toUpperCase()?"BNB Chain":n.chain.toUpperCase()})]})]}),Object(g.jsxs)("div",{className:"base-token-logo",children:[n.isLp&&Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"lp-base-token-bg",children:[Object(g.jsx)("div",{className:"base-token-bg ".concat(n.bTokens[0].bTokenSymbol)}),Object(g.jsx)("span",{className:"lp-con",children:"+"}),Object(g.jsx)("div",{className:"base-token-bg ".concat(n.bTokens[1].bTokenSymbol)})]})}),!n.isLp&&"v3"!==n.version&&"v3_lite"!==n.version&&Object(g.jsx)(g.Fragment,{children:n.bTokens.map((function(e,t){return Object(g.jsx)("div",{className:"base-token-box-bg",children:Object(g.jsx)("div",{className:"base-token-bg ".concat(e.bTokenSymbol),children:"v2_lite_open"===n.version&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("img",{alt:"",onError:q,src:"https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/".concat(e.bTokenSymbol,".png")})})})},t)}))}),("v3"===n.version||"v3_lite"===n.version)&&Object(g.jsx)(S,{bTokens:n.bTokens})]})]}),Object(g.jsxs)("div",{className:"card-content",children:[Object(g.jsx)("div",{className:"max-apy",children:"v2_lite_open"!==n.version&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"max-apy-title",children:"v2"===n.version||"v3_lite"===n.version||"v3"===n.version?t["max-apy"]:t.apy}),Object(g.jsx)("div",{className:"max-apy-num",children:Object(g.jsx)(u.a,{value:k.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})})]})}),Object(g.jsxs)("div",{className:"total-pool-liquidity",children:[Object(g.jsx)("div",{className:"total-liquidity-title",children:t["total-pool-liquidity"]}),Object(g.jsx)("div",{className:"total-liquidity-num",children:Object(g.jsx)(u.a,{value:k.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:"lp"===n.type?7:0})})]}),Object(g.jsxs)("div",{className:"your-deri-epoch",children:[C&&Object(g.jsxs)("div",{className:"staked-box",children:[Object(g.jsx)("img",{src:f.a,alt:""}),t.staked]}),+_>0&&("v3"===n.version||"v3_lite"===n.version)&&Object(g.jsx)("span",{className:"xvs-collectable",children:Object(g.jsxs)("div",{className:"staked-box",children:[Object(g.jsx)(u.a,{width:"50px",value:_,displayType:"text",thousandSeparator:!0,decimalScale:2})," \xa0 XVS  ",t.collectable]})})]}),Object(g.jsx)("div",{className:"stake-button",children:Object(g.jsx)(b.a,{disabled:"v2_lite_open"===n.version,className:"button",outline:!0,label:"v2_lite_open"===n.version?t.operating:t.stake})})]})]}),"v3_lite"===n.version&&P&&Object(g.jsxs)("div",{className:"new-symbol",children:[Object(g.jsxs)("div",{className:"new-symbol-text",children:["New Listing : ",Object(g.jsx)("a",{href:"https://deri.io/#/trade/futures/FITFIUSDT",target:"_blank",children:"FITFIUSDT"})," ",Object(g.jsx)("a",{href:"https://deri.io/#/trade/futures/AVAXUSDT",target:"_blank",children:"AVAXUSDT"})]}),Object(g.jsx)("div",{className:"close-symbol",children:Object(g.jsx)("img",{src:O,alt:"close",onClick:function(){return e=n.address,sessionStorage.setItem(e,!1),void A(!1);var e}})})]})]})}var w=k.a.div(c||(c=Object(i.a)(["\n  @-webkit-keyframes explode {\n    0% {\n        transform: translateX(0px);\n        -moz-transform : translateX(0px);\n    }\n    100% {\n        transform: translateX(100px);\n        -moz-transform : translateX(100px);\n    }\n  }\n\n  @keyframes explode {\n    0% {\n        transform: translateX(0px);\n        -moz-transform : translateX(0px);\n    }\n    100% {\n        transform: translateX(100px);\n        -moz-transform : translateX(100px);\n    }\n  }\n  .base-token{\n    margin-left: 0px!important;\n    z-index : -2;\n    visibility: hidden;\n    background-color: #111e34;\n    border : 1px solid #fff;\n  }\n  @media only screen and (max-width: 760px) {\n    .base-token{\n      display:none;\n    }\n  }\n  .base-token-box-bg.explode:hover .move  {\n    -webkit-animation : explode .4s .0s linear;\n    -moz-animation :  explode .4s .0s linear;\n    animation: explode .4s .0s linear;\n    // transform : translateX(100px)!important;\n    visibility: visible;    \n  }\n  \n  .base-token-box-bg.explode:hover .base-token {\n    z-index : 2!important;\n  } \n\n"]))),y=k.a.div(a||(a=Object(i.a)(["\n  position: absolute;\n  transform : ",";\n  width: 48px;\n  height: 48px;\n  display: inline-block;\n  border-radius: 50%;\n  .move {\n    transform : translateX(100px) ",";\n  }\n"])),(function(e){return"rotate(".concat(-e.rotate,"deg)")}),(function(e){return"rotate(".concat(e.rotate,"deg) !important")})),S=function(e){var t=e.bTokens,n=void 0===t?[]:t,c=360/n.length;return Object(g.jsxs)(w,{className:"v3-tokens",children:[Object(g.jsx)("div",{className:"tokens",children:n.filter((function(e,t){return t<3})).map((function(e,t){return Object(g.jsx)("div",{className:"base-token-box-bg",children:Object(g.jsx)("div",{className:"base-token-bg ".concat(e.bTokenSymbol)})},t)}))}),Object(g.jsxs)("div",{className:"base-token-box-bg explode",children:[Object(g.jsxs)("div",{className:"base-token-bg",children:[n.length-3," +"]}),n.map((function(e,t){var n=c*t;return Object(g.jsx)(y,{className:"base-token",rotate:n,width:"100",children:Object(g.jsx)("div",{width:"100",rotate:n,className:"base-token-bg move ".concat(e.bTokenSymbol)})},t)}))]})]})}},2248:function(e,t,n){},2561:function(e,t,n){"use strict";n.r(t);var c=n(20),a=n(2),i=n(6),s=n(0),r=n.n(s),o=n(9),l=n(44),d=n(182),j=(n(1682),n(187)),u=n(183),b=(n(1363),n(39)),h=n(19),m=n(1383),v=n.p+"static/media/oldDeri.d9dd2f9f.svg",p=(n(1797),n(4));function f(e){var t=e.lang,n=e.getLang,c=e.poolShow,s=void 0===c||c,l=e.wallet,f=void 0===l?{}:l,x=Object(u.c)(),O=Object(o.useState)({}),k=Object(i.a)(O,2),g=k[0],N=k[1],w=Object(o.useState)(!1),y=Object(i.a)(w,2),S=y[0],C=y[1],F=Object(o.useState)(""),I=Object(i.a)(F,2),T=(I[0],I[1]),_=Object(o.useState)(!1),E=Object(i.a)(_,2),B=E[0],D=E[1],P=Object(j.a)(g.chainId),A=function(){var e=Object(a.a)(r.a.mark((function e(){var t,n,c,a,i,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f.isConnected()){e.next=10;break}return e.next=3,b.a.request("getUserInfoAll",[f.detail.account]);case 3:t=e.sent,n=(+t.total).toFixed(2),c=t.valid?(+t.amount).toFixed(2):0,a=t.lp,i=(+t.trade).toFixed(2),s=t.chainId,N({claimed:n,unclaimed:c,harvestDeriLp:a,harvestDeriTrade:i,chainId:s});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(a.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f.isConnected()){e.next=5;break}return e.next=3,b.a.request("getUserLastClaimInfo",[f.detail.account]);case 3:(t=e.sent)&&D(!t.claimed);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(a.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==P.name){e.next=3;break}return x.error("".concat(t["wrong-network"])),e.abrupt("return");case 3:if(Object(h.f)(f.detail.chainId,g.chainId)){e.next=6;break}return x.error("".concat(t["your-deri-is-on"]," ").concat(P.name," ").concat(t["connect-to"]," ").concat(P.name," ").concat(t["to-claim"])),e.abrupt("return");case 6:if(0!==+g.unclaimed){e.next=9;break}return x.error(t["no-deri-to-claim-yet"]),e.abrupt("return");case 9:if(!(parseInt(Date.now()/1e3)%28800<1800)){e.next=13;break}return x.error(t["claiming-DERI-is-disabled-during-first-30-minutes-of-each-epoch"]),e.abrupt("return");case 13:return e.next=15,b.a.request("mintDToken",[f.detail.chainId,f.detail.account],{includeResponse:!0,write:!0,subject:t["claim-deri-title"]});case 15:if(!(n=e.sent).success){e.next=21;break}return x.success(t["claim-deri-reward"],{timeout:8e3,isTransaction:!0,transactionHash:n.response.data.transactionHash,link:"".concat(f.blockExploreUrl,"/tx/").concat(n.response.data.transactionHash),title:t["claim-reward-executed"]}),e.abrupt("return",!0);case 21:if(""!==n.response.transactionHash){e.next=23;break}return e.abrupt("return",!1);case 23:return x.error("".concat(t["transaction-failed"]," : ").concat(n.response.error),{timeout:3e5,isTransaction:!0,transactionHash:n.response.transactionHash,link:"".concat(f.blockExploreUrl,"/tx/").concat(n.response.transactionHash),title:t["claim-reward-failed"]}),e.abrupt("return",!1);case 25:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(a.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f.isConnected()){e.next=7;break}return e.next=3,z();case 3:e.sent&&C(!0),e.next=17;break;case 7:return e.prev=7,e.next=10,f.connect();case 10:return t=e.sent,e.abrupt("return",!!t);case 14:return e.prev=14,e.t0=e.catch(7),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(){return e.apply(this,arguments)}}(),q=function(e){var n;switch(e){case 1:n=t.jan;break;case 2:n=t.feb;break;case 3:n=t.mar;break;case 4:n=t.apr;break;case 5:n=t.may;break;case 6:n=t.jun;break;case 7:n=t.jul;break;case 8:n=t.aug;break;case 9:n=t.sep;break;case 10:n=t.oct;break;case 11:n=t.nov;break;case 12:n=t.dec}return n},H=function(){var e=Object(a.a)(r.a.mark((function e(){var t,n,c,a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f.isConnected()){e.next=5;break}return e.next=3,b.a.request("getUserFirstClaimInfo",[f.detail.account]);case 3:(t=e.sent).first_timestamp?(n=new Date(1e3*t.first_timestamp),c=n.getFullYear(),a=n.getMonth()+1,a=q(a),i=n.getDate(),T("".concat(a," ").concat(i,", ").concat(c))):T("");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){var e=window.setInterval((function(){A(),L()}),18e4);return A(),L(),H(),function(){return clearInterval(e)}}),[f.detail.account]),Object(p.jsx)("div",{className:"mining-claim",children:Object(p.jsxs)("div",{className:"mining-claim-info",children:[Object(p.jsxs)("div",{className:"deri-num-slider",children:[Object(p.jsxs)("div",{className:"deri-claim-time",children:[t["old-deri-farms"],Object(p.jsx)(m.a,{tip:t["old-deri-farms-tip"],multiline:!0,children:Object(p.jsx)("span",{children:Object(p.jsx)("img",{src:v})})})]}),Object(p.jsx)("div",{className:"deri-claim-text",children:n("old-pool-deri",{num:S?0:g.unclaimed&&B?g.unclaimed:0})})]}),s&&Object(p.jsx)("div",{className:"cliam-button",children:Object(p.jsx)(d.a,{icon:"ClaimDeri",fontWeight:"bold",disabled:0===+g.unclaimed||!B,label:t["claim-all"],onClick:X})})]})})}var x,O=n(63),k=n(320),g=(n(154),n(51)),N=n(65),w=n.n(N),y=g.a.div(x||(x=Object(O.a)(["\ncursor:pointer;\nfont-weight: 600;\n.dropdown-menu{\n  display:none\n}\n.dropdown-menu.show{\n  margin-top:8px;\n  background: #203B60;\n  display:block;\n  border-radius:4px;\n  z-index:8;\n  position:relative;\n  .dropdown-item{\n    padding:0 24px;\n  }\n}\n.btn{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  color:#FFFFFF;\n\n}\n.dropdown-item:hover{\n  color:#FFFFFF\n}\n"])));function S(e){var t=e.selectList,n=void 0===t?[]:t,c=e.onChange,a=Object(o.useState)(!1),s=Object(i.a)(a,2),r=s[0],l=s[1],d=Object(o.useState)(n[0].text),j=Object(i.a)(d,2),u=j[0],b=j[1],h=w()("dropdown-menu",{show:r});return Object(p.jsxs)(y,{children:[Object(p.jsxs)("div",{onClick:function(){l(!r)},className:"btn checked",children:[u,Object(p.jsx)("img",{src:k.default,alt:""})]}),Object(p.jsx)("div",{className:h,children:n.map((function(e,t){return Object(p.jsx)("div",{className:"dropdown-item",onClick:function(){!function(e){b(e.text),c(e.index),l(!1)}(e)},children:e.text},t)}))})]})}var C=n(1731),F=n(1683),I=n(509),T=n(512),_=n(510),E=n(508),B=n(1877),D=(n(2248),n.p+"static/media/filter-close.80f134f0.svg");function P(e){var t=e.lang,n=(e.isShowFilter,e.checkedStaked),c=e.setCheckedStaked,a=e.setIsShowFilter,i=e.curTabPool,s=e.checkedPolygon,r=e.checkedETH,o=(e.checkedOption,e.checkedFutureMain,e.checkedFutureInno,e.checkedBSC),l=e.checkedArb,d=(e.setCheckedOption,e.setCheckedFutureMain,e.setCheckedFutureInno,e.setCheckedPolygon),j=e.setCheckedBSC,u=e.setCheckedArb,b=e.setCheckedETH,h=e.clearFilter;return Object(p.jsxs)("div",{className:"filter-modal",children:[Object(p.jsx)("div",{className:"close-filter-modal",children:Object(p.jsx)("span",{className:"close-icon",onClick:function(){a()},children:Object(p.jsx)("img",{alt:"",src:D})})}),Object(p.jsxs)("div",{className:"staked-only",children:[Object(p.jsx)("div",{className:"staked-only-text",children:t["staked-only"]}),Object(p.jsx)("div",{children:Object(p.jsx)(C.a,{className:"l-toggle",checked:n,onClick:function(e){c(e)}})})]}),Object(p.jsx)("div",{className:"select-pool-type-network",children:Object(p.jsxs)("div",{className:"network",children:[Object(p.jsx)("div",{className:"type-cols",children:t.network}),Object(p.jsxs)("div",{className:"type-cols",children:[Object(p.jsxs)("div",{className:"type-title",children:[Object(p.jsx)("img",{alt:"",src:I.default})," BNB Chain"]}),Object(p.jsx)("div",{children:Object(p.jsx)(F.a,{checked:o,className:"l-checkbox",onChange:function(e){j(e)}})})]}),"deri"!==i&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"type-cols",children:[Object(p.jsxs)("div",{className:"type-title",children:[" ",Object(p.jsx)("img",{alt:"",src:_.default})," Arbitrum"]}),Object(p.jsx)("div",{children:Object(p.jsx)(F.a,{checked:l,className:"l-checkbox",onChange:function(e){u(e)}})})]}),Object(p.jsxs)("div",{className:"type-cols",children:[Object(p.jsxs)("div",{className:"type-title",children:[Object(p.jsx)("img",{alt:"",src:T.default})," Polygon"]}),Object(p.jsx)("div",{children:Object(p.jsx)(F.a,{checked:s,className:"l-checkbox",onChange:function(e){d(e)}})})]})]}),"deri"===i&&Object(p.jsxs)("div",{className:"type-cols",children:[Object(p.jsxs)("div",{className:"type-title",children:[Object(p.jsx)("img",{alt:"",src:E.default})," Ethereum"]}),Object(p.jsx)("div",{children:Object(p.jsx)(F.a,{checked:r,className:"l-checkbox",onChange:function(e){b(e)}})})]})]})}),Object(p.jsx)("div",{className:"select-footer",children:Object(p.jsx)("div",{className:"clear-all-filter",onClick:function(){h()},children:t["clear-all-filter"]})})]})}var A=n.p+"static/media/filter.c289b063.svg",L=(n(1805),n(30));n(1806);t.default=Object(l.b)("wallet","poolManager")(Object(l.c)((function(e){var t=e.lang,n=e.getLang,s=e.wallet,l=void 0===s?{}:s,d=e.poolManager,j=Object(o.useState)("amm"),u=Object(i.a)(j,2),m=u[0],v=u[1],x=Object(o.useState)(!1),O=Object(i.a)(x,2),g=O[0],N=O[1],w=Object(o.useState)(t["deri-pool-title"]),y=Object(i.a)(w,2),D=y[0],z=y[1],X=Object(o.useState)([]),q=Object(i.a)(X,2),H=q[0],U=q[1],M=Object(o.useState)(!1),V=Object(i.a)(M,2),R=V[0],W=V[1],Z=Object(o.useState)(!1),$=Object(i.a)(Z,2),J=$[0],G=$[1],K=Object(o.useState)(!1),Y=Object(i.a)(K,2),Q=Y[0],ee=Y[1],te=Object(o.useState)(!1),ne=Object(i.a)(te,2),ce=ne[0],ae=ne[1],ie=Object(o.useState)(!1),se=Object(i.a)(ie,2),re=se[0],oe=se[1],le=Object(o.useState)(!1),de=Object(i.a)(le,2),je=de[0],ue=de[1],be=Object(o.useState)(!1),he=Object(i.a)(be,2),me=he[0],ve=he[1],pe=Object(o.useState)(!1),fe=Object(i.a)(pe,2),xe=fe[0],Oe=fe[1],ke=Object(o.useState)(!1),ge=Object(i.a)(ke,2),Ne=ge[0],we=ge[1],ye=Object(o.useState)([]),Se=Object(i.a)(ye,2),Ce=Se[0],Fe=Se[1],Ie=Object(o.useState)([]),Te=Object(i.a)(Ie,2),_e=Te[0],Ee=Te[1],Be=Object(o.useState)(!1),De=Object(i.a)(Be,2),Pe=(De[0],De[1]),Ae=[{text:t["deri-pool-title"],index:"official"},{text:t["open-pool-title"],index:"open"}],Le=function(e){"official"===e?(U(d.ammPools),N(!1)):"open"===e&&(U([]),qe(),N(!0))},ze=function(){var e=Object(a.a)(r.a.mark((function e(){var t,n,i,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[].concat(Object(c.a)(d.ammPools),Object(c.a)(d.lpPools)),e.next=3,Promise.all(t.map(function(){var e=Object(a.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[t.chainId,t.address,l.detail.account],e.next=3,b.a.request("getUserStakeInfo",n);case 3:if(!e.sent.isStaked){e.next=8;break}return e.abrupt("return",t);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:n=(n=e.sent).filter((function(e){return e})),i=n.filter((function(e){return"lp"!==e.type})),s=n.filter((function(e){return"lp"===e.type})),Fe(i),Ee(s);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Xe=function(){W(!1),ee(!1),ae(!1),ve(!1),oe(!1),Oe(!1)};Object(o.useEffect)((function(){l.isConnected()&&ze()}),[l.detail,d,m]),Object(o.useEffect)((function(){var e=[],t="amm"===m?d.ammPools:d.lpPools;if(R){var n=t.filter((function(e){return"option"===e.type}));e=[].concat(Object(c.a)(e),Object(c.a)(n))}if(Q){var a=t.filter((function(e){return("v2"===e.version||"v3"===e.version)&&"option"!==e.type}));e=[].concat(Object(c.a)(e),Object(c.a)(a))}if(ce){var i=t.filter((function(e){return"v2_lite"===e.version||"v3_lite"===e.version}));e=[].concat(Object(c.a)(e),Object(c.a)(i))}if(re){if(e=[],R){var s=t.filter((function(e){return(56===+e.chainId||97===+e.chainId)&&"option"===e.type}));e=[].concat(Object(c.a)(e),Object(c.a)(s))}if(Q){var r=t.filter((function(e){return(56===+e.chainId||97===+e.chainId)&&("v2"===e.version||"v3"===e.version)&&"option"!==e.type}));e=[].concat(Object(c.a)(e),Object(c.a)(r))}if(ce){var o=t.filter((function(e){return(56===+e.chainId||97===+e.chainId)&&("v2_lite"===e.version||"v3_lite"===e.version)}));e=[].concat(Object(c.a)(e),Object(c.a)(o))}if(!R&&!Q&&!ce){var l=t.filter((function(e){return 56===+e.chainId||97===+e.chainId}));e=[].concat(Object(c.a)(e),Object(c.a)(l))}}if(je){if(e=[],R){var j=t.filter((function(e){return(42161===+e.chainId||421611===+e.chainId)&&"option"===e.type}));e=[].concat(Object(c.a)(e),Object(c.a)(j))}if(Q){var u=t.filter((function(e){return(42161===+e.chainId||421611===+e.chainId)&&"v3"===e.version&&"option"!==e.type}));e=[].concat(Object(c.a)(e),Object(c.a)(u))}if(ce){var b=t.filter((function(e){return(42161===+e.chainId||421611===+e.chainId)&&("v2_lite"===e.version||"v3_lite"===e.version)}));e=[].concat(Object(c.a)(e),Object(c.a)(b))}if(!R&&!Q&&!ce){var h=t.filter((function(e){return 42161===+e.chainId||421611===+e.chainId}));e=[].concat(Object(c.a)(e),Object(c.a)(h))}}if(me){if(e=[],R){var v=t.filter((function(e){return 137===+e.chainId&&"option"===e.type}));e=[].concat(Object(c.a)(e),Object(c.a)(v))}if(Q){var p=t.filter((function(e){return 137===+e.chainId&&("v2"===e.version||"v3"===e.version)&&"option"!==e.type}));e=[].concat(Object(c.a)(e),Object(c.a)(p))}if(ce){var f=t.filter((function(e){return 137===+e.chainId&&("v2_lite"===e.version||"v3_lite"===e.version)}));e=[].concat(Object(c.a)(e),Object(c.a)(f))}if(!R&&!Q&&!ce){var x=t.filter((function(e){return 137===+e.chainId}));e=[].concat(Object(c.a)(e),Object(c.a)(x))}}if(re&&me&&je){e=[];var O=t.filter((function(e){return 137===+e.chainId||56===+e.chainId||4261===+e.chainId}));e=[].concat(Object(c.a)(e),Object(c.a)(O))}if(xe){var k=t.filter((function(e){return 1===+e.chainId}));e=[].concat(Object(c.a)(e),Object(c.a)(k))}R||Q||ce||re||me||xe||je||(e=t),U(e)}),[R,Q,ce,re,me,xe,je]);var qe=function(){var e=Object(a.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.loadOpen();case 2:U(d.openPools);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){z(g?t["open-pool-title"]:t["deri-pool-title"])}),[g]),Object(o.useEffect)((function(){d.load()}),[]),Object(o.useEffect)((function(){"amm"===m?g||(U([]),U(Ne?Ce:d.ammPools)):"deri"===m&&(U([]),U(Ne?_e:d.lpPools))}),[m,Ne]),Object(o.useEffect)((function(){U(d.ammPools)}),[d.pools]),Object(o.useEffect)((function(){l.isConnected()&&("true"===Object(h.m)("poolClaim")?Pe(!1):H&&Pe(!0))}),[l,H,l.detail]),Object(p.jsx)("div",{className:"pool-box",children:Object(p.jsxs)("div",{className:"pool-info",children:[Object(p.jsxs)("div",{className:"left",children:[Object(p.jsx)("div",{className:"left-header-info",children:Object(p.jsxs)("div",{className:"pool-title",children:[Object(p.jsx)("div",{className:"pool-title-text",children:D}),Object(p.jsx)("div",{className:"pool-title-select-text",children:!g&&Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"pool-test-des",children:t["pool-title-des"]})})}),Object(p.jsx)("div",{className:"select-pool-ves",children:Object(p.jsx)(S,{selectList:Ae,onChange:Le})}),Object(p.jsx)("div",{className:"simple-select-ves",children:Object(p.jsx)("img",{alt:"",src:k.default})})]})}),Object(p.jsxs)("div",{className:"pool-card-claim-bg",children:[!g&&Object(p.jsx)("div",{className:"pool-tab",children:Object(p.jsxs)("div",{className:"pool-tab-info",children:[Object(p.jsxs)("div",{className:"tab-mining",children:[Object(p.jsx)("div",{className:"amm"===m?"pool-active":"pool-unactive",onClick:function(){v("amm")},children:t["amm-liquidity-mining"]}),Object(p.jsx)("div",{className:"deri"===m?"pool-active":"pool-unactive",onClick:function(){v("deri")},children:t["deri-liquidity-mining"]})]}),Object(p.jsxs)("div",{className:"simple-tab-mining",children:[Object(p.jsx)("div",{className:"amm"===m?"pool-active":"pool-unactive",onClick:function(){v("amm")},children:t.amm}),Object(p.jsx)("div",{className:"deri"===m?"pool-active":"pool-unactive",onClick:function(){v("deri")},children:t["type-deri"]})]}),Object(p.jsxs)("div",{className:"filter",children:[Object(p.jsx)("img",{alt:"",src:A,className:"filter-img",onClick:function(){G(!J)}}),J&&Object(p.jsx)(P,{curTabPool:m,lang:t,isShowFilter:J,checkedStaked:Ne,setCheckedStaked:we,setIsShowFilter:G,setCheckedOption:W,setCheckedFutureMain:ee,setCheckedFutureInno:ae,setCheckedPolygon:ve,setCheckedBSC:oe,setCheckedArb:ue,setCheckedETH:Oe,clearFilter:Xe,checkedPolygon:me,checkedETH:xe,checkedOption:R,checkedFutureMain:Q,checkedFutureInno:ce,checkedBSC:re,checkedArb:je})]})]})}),Object(p.jsx)("div",{className:"pool-card",children:H.map((function(e,n){return Object(p.jsx)(B.a,{wallet:l,lang:t,pool:e},n)}))}),!g&&Object(p.jsx)(f,{lang:t,wallet:l,getLang:n}),Object(p.jsx)("div",{className:!0})]})]}),Object(p.jsx)("div",{className:"right",children:Object(p.jsxs)("div",{className:"right-info",children:[Object(p.jsxs)("div",{className:"select-pool-ves-staked",children:[Object(p.jsx)("div",{className:"select-pool-ves",children:Object(p.jsx)(S,{selectList:Ae,onChange:Le})}),!g&&Object(p.jsxs)("div",{className:"staked-only",children:[Object(p.jsx)("div",{className:"staked-only-text",children:t["staked-only"]}),Object(p.jsx)("div",{children:Object(p.jsx)(C.a,{className:"l-toggle",checked:Ne,onClick:function(e){we(e)}})})]})]}),!g&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"select-pool-type-network",children:Object(p.jsxs)("div",{className:"network",children:[Object(p.jsx)("div",{className:"type-cols",children:t.network}),Object(p.jsxs)("div",{className:"type-cols",children:[Object(p.jsxs)("div",{className:"type-title",children:[" ",Object(p.jsx)("img",{alt:"",src:I.default})," BNB Chain"]}),Object(p.jsx)("div",{children:Object(p.jsx)(F.a,{checked:re,className:"l-checkbox",onChange:function(e){oe(e)}})})]}),"deri"!==m&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"type-cols",children:[Object(p.jsxs)("div",{className:"type-title",children:[" ",Object(p.jsx)("img",{alt:"",src:_.default})," Arbitrum"]}),Object(p.jsx)("div",{children:Object(p.jsx)(F.a,{checked:je,className:"l-checkbox",onChange:function(e){ue(e)}})})]}),Object(p.jsxs)("div",{className:"type-cols",children:[Object(p.jsxs)("div",{className:"type-title",children:[" ",Object(p.jsx)("img",{alt:"",src:T.default})," Polygon"]}),Object(p.jsx)("div",{children:Object(p.jsx)(F.a,{checked:me,className:"l-checkbox",onChange:function(e){ve(e)}})})]})]}),"deri"===m&&Object(p.jsxs)("div",{className:"type-cols",children:[Object(p.jsxs)("div",{className:"type-title",children:[Object(p.jsx)("img",{alt:"",src:E.default})," Ethereum"]}),Object(p.jsx)("div",{children:Object(p.jsx)(F.a,{checked:xe,className:"l-checkbox",onChange:function(e){Oe(e)}})})]})]})}),Object(p.jsxs)("div",{className:"select-footer",children:[Object(p.jsx)("div",{className:"clear-all-filter",onClick:Xe,children:t["clear-all-filter"]}),Object(p.jsx)("div",{className:"deri-logo",children:Object(p.jsx)(L.a,{token:"pool-deri-logo",width:"72",height:"84"})})]})]})]})})]})})})))}}]);
//# sourceMappingURL=19.350f8a61.chunk.js.map