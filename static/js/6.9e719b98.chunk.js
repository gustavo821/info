(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[6],{1354:function(e,t,s){"use strict";var a,c,i=s(21),r=s(213),n=s(42),l=s(6),d=s(63),o=s(9),j=(s(70),s(1437)),b=s(51),u=s(19),m=s(15),h=s(4),x=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],O=Object(b.a)(j.a)(a||(a=Object(d.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),v=b.a.div(c||(c=Object(d.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(o.useState)(Object(h.jsx)("span",{className:"loading-line"})),s=Object(l.a)(t,2),a=s[0],c=s[1],d=Object(o.useState)(!0),j=Object(l.a)(d,2),b=j[0],p=j[1],N=function(){var t=e.allowZero;return"object"!==Object(n.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},f=function(e){return e&&e.replace(/\.$/,"")};return Object(o.useEffect)((function(){var t=e.allowZero,s=(e.wallet,e.closeShowLoadingEffectAfterLoaded),a=e.defaultValue,n=void 0===a?"--":a,l=Object(r.a)(e,x);if(N())l.decimalScale>0&&l.value&&/\d+\.0*[1-9]+/.test(l.value)&&0===+Object(m.bg)(l.value).toFixed(+l.decimalScale||2)&&(l.decimalScale=Object(u.d)(Math.abs(l.value))+2),(-1===l.decimalScale||0===+l.value&&t)&&delete l.decimalScale,l.value=Object(u.K)(l.value),l.value&&/\d+.9{6}/.test(l.value)&&(l.value=(+l.value).toFixed(5)),c(Object(h.jsx)(O,Object(i.a)(Object(i.a)({},l),{},{renderText:f,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(b){var d=e.width,o=e.height;c(Object(h.jsx)(v,{className:"loading-line",width:d,height:o})),s&&p(!1)}var j=window.setTimeout((function(){N()||c(n)}),6e4);return function(){clearTimeout(j)}}),[e.value,e.decimalScale,e.suffix]),a}},1374:function(e,t,s){"use strict";s.d(t,"a",(function(){return u}));var a,c=s(63),i=s(51),r=s(1516),n=s.n(r),l=s(155),d=s(19),o=s(1489),j=s(4),b=i.a.div(a||(a=Object(c.a)(["\n  display:",";\n  .text {\n    border-bottom : 1px dashed #93A1B8;\n    width : max-content;\n    cursor : pointer;\n    display:","\n  }\n  \n  .__react_component_tooltip.tooltip.show {\n    font-weight : "," \n  }\n"])),(function(e){return e.block}),(function(e){return e.block}),(function(e){return e.isWin?400:600}));function u(e){var t=e.text,s=e.id,a=void 0===s?String((new Date).getTime())+Math.random():s,c=e.tip,i=e.multiline,r=e.html,u=e.className,m=e.element,h=void 0===m?"":m,x=e.block,O=void 0===x?"block":x,v=e.width,p=void 0===v?"auto":v,N=e.children,f=e.tiggerEvent;return Object(j.jsxs)(b,{className:u,block:O,isWin:o.isWindows,children:[Object(j.jsx)("div",{className:"text","data-for":a,"data-tip":r?n.a.renderToString(h):c,"data-event":Object(d.z)()?"click":f,"data-html":r,children:t||N}),c&&Object(j.jsx)(l.a,{id:a,width:p,padding:"12",place:"bottom",overridePosition:function(e,t,s,a,c,i,r,n){var l=s.getBoundingClientRect(),d=a.getBoundingClientRect(),o=l.x,j=l.y,b=l.height,u=l.width;e.left,e.top;return o+d.width/2>document.documentElement.clientWidth?o-=Math.abs(u-d.width):o-(d.width-u)/2<0?o-=u:o-=(d.width-u)/2,j+b+d.height>=document.documentElement.clientHeight?j=j+b-d.height:j+=b,o<0&&(o=0),j<0&&(j=0),{top:j,left:o}},html:r,borderRadius:8,multiline:i})]})}},1534:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var a=s(51),c=s(9),i=s(30),r=s(4);const n=a.a.div`
    cursor: pointer;
    width:${e=>e.width}px;
    height:${e=>e.height}px;
    display:flex;
    .tab-left.inactive{
      border-radius:0px 0px 4px 0px;
    }
    .tab-right.inactive{
      border-radius:0px 0px 0px 4px;
    }
    .tab-left.active{
      border-radius:0px 4px 0px 0px;
      ${e=>e.borderR};
    }
    .tab-right.active{
      border-radius:4px 0px 0px 0px;
      ${e=>e.borderL};
    }
    .inactive,.active{
      width:50%;
      box-sizing: content-box;
      font-size:${e=>e.size}px;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        margin-right:${e=>e.iconMarginRight}px
      }
    }
    .inactive{
      background:${e=>e.inactiveBgColor};
      ${e=>e.borderB}
    }
    .active {
      color: ${e=>e.activeFontColor};
      background : ${e=>e.activeBgColor};
      ${e=>e.borderT};
    }
    .icon-tab{
      margin-right:20px;
      width:25px;
      height:25px;
    }
  `;function l(e){let{tabSet:t,inactiveBgColor:s,iconMarginRight:a,activeBgColor:l,icon:d,className:o,width:j=238,height:b=47,size:u=16,borderTop:m=!1,borderBottom:h=!1,divider:x=!1,activeIndex:O=0}=e,v=Object.keys(t);const[p,N]=Object(c.useState)(v[O]),[f,g]=Object(c.useState)(),[w,S]=Object(c.useState)(),[C,k]=Object(c.useState)(),[y,Q]=Object(c.useState)(),[D,E]=Object(c.useState)(),[P,T]=Object(c.useState)();return Object(c.useEffect)((()=>{const e=Object.keys(t);N(e[O])}),[t,O]),Object(c.useEffect)((()=>{const e=Object.keys(t);let s=p||e[O];if(t[s]){g(t[s].style);let e=m?`border-top:1px solid ${t[s].borderColor}`:"border-top:0",a=h?`border-bottom:1px solid ${t[s].borderColor}`:"border-bottom:0",c=x?`border-left:1px solid ${t[s].borderColor}`:"border-left:0",i=x?`border-right:1px solid ${t[s].borderColor}`:"border-right:0",r=t[s].fontColor?t[s].fontColor:"#FFFFFF";S(e),k(c),Q(a),E(i),T(r)}}),[t,p]),Object(r.jsxs)("div",{style:f,className:o,children:[Object(r.jsx)(n,{className:"tab-header",iconMarginRight:a,width:j,height:b,activeFontColor:P,activeBgColor:l,inactiveBgColor:s,size:u,borderT:w,borderB:y,borderL:C,borderR:D,children:v.map(((e,s)=>Object(r.jsxs)("div",{className:e===p?`${t[e].direction||t[e].className} active`:`${t[e].direction||t[e].className} inactive`,onClick:t=>function(e,t){N(e)}(e),children:[t[e].icon?Object(r.jsx)(i.a,{width:t[e].iconWidth,height:t[e].iconHeight,token:e===p?t[e].icon:t[e].inicon}):"","  ",e]},s)))}),t[p]?t[p].content:""]})}},1673:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var a,c=s(63),i=s(51),r=(s(9),s(4)),n=i.a.div(a||(a=Object(c.a)(["\nwidth:","%;\nmax-width:100%;\nheight:10px;\nbackground-color: #5577FD;\n"])),(function(e){return e.width}));function l(e){var t=e.startTimestamp,s=e.nowTimestamp,a=e.endTimestamp,c=parseInt((s-t)/(a-t)*100);return Object(r.jsx)("div",{className:"time-slider",children:Object(r.jsx)(n,{width:c})})}},2315:function(e,t,s){},2316:function(e,t,s){},2317:function(e,t,s){},2318:function(e,t,s){},2528:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return S}));var a=s(0),c=s.n(a),i=s(2),r=s(6),n=s(9),l=(s(2315),s.p+"static/media/logo-deri.8af5c8cc.svg"),d=(s(1673),s(44)),o=(s(2316),s(183)),j=s(15),b=s(1354),u=s(38),m=s(182),h=s(4);var x=Object(d.b)("wallet")(Object(d.c)((function(e){var t=e.wallet,s=e.lang,a=Object(n.useState)(""),l=Object(r.a)(a,2),d=l[0],x=l[1],O=Object(n.useState)(""),v=Object(r.a)(O,2),p=v[0],N=v[1],f=Object(n.useState)(""),g=Object(r.a)(f,2),w=g[0],S=g[1],C=Object(n.useState)(""),k=Object(r.a)(C,2),y=k[0],Q=k[1],D=Object(n.useState)(!0),E=Object(r.a)(D,2),P=E[0],T=E[1],A=Object(o.c)(),R=function(){var e=Object(i.a)(c.a.mark((function e(){var s,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getUserStakingClaimInfo",[t.detail.account,3]);case 2:(s=e.sent)&&(a=+s.claimed+ +s.locked+ +s.claimable,N(s.claimed),S(s.locked),Q(s.claimable),x(a));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(c.a.mark((function e(){var s,a,i,r,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(+y.claimable>0)){e.next=2;break}return e.abrupt("return");case 2:if(s=new Date((new Date).toLocaleDateString()).getTime()+666e5,a=new Date((new Date).toLocaleDateString()).getTime()+648e5,!((i=parseInt(Date.now()))<s&&i>a)){e.next=8;break}return A.error("Claiming DERI is disabled during first 30 minutes of each epoch"),e.abrupt("return");case 8:return e.next=10,u.a.request("claimMyStaking",[t.detail.account,3],{includeResponse:!0});case 10:if((r=e.sent)&&r.success){e.next=16;break}return A.error("Claim fail"),e.abrupt("return",!1);case 16:A.success("Claim success"),n=Object(j.bg)(p).plus(Object(j.bg)(y)).toString(),N(n),Q(0);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){T(!(+y>0))}),[y]),Object(n.useEffect)((function(){t.isConnected()&&R()}),[t,t.detail]),Object(h.jsxs)("div",{className:"trade-claim",children:[Object(h.jsx)("div",{className:"rewards-claim",children:s.rewards}),Object(h.jsxs)("div",{className:"rewards-info",children:[Object(h.jsxs)("div",{className:"lg-rewards-info",children:[Object(h.jsxs)("div",{className:"my-rewards",children:[Object(h.jsx)("div",{className:"claim-title",children:s["my-rewards"]}),Object(h.jsxs)("div",{className:"claim-num",children:[Object(h.jsx)(b.a,{value:d,decimalScale:2})," DERI"]})]}),Object(h.jsxs)("div",{className:"claimed-deri",children:[Object(h.jsx)("div",{className:"claim-title",children:s["claimed-deri"]}),Object(h.jsx)("div",{className:"claim-num",children:Object(h.jsx)(b.a,{value:p,decimalScale:2})})]}),Object(h.jsxs)("div",{className:"locked-deri",children:[Object(h.jsx)("div",{className:"claim-title",children:s["lcked-deri"]}),Object(h.jsx)("div",{className:"claim-num",children:Object(h.jsx)(b.a,{value:w,decimalScale:2})})]}),Object(h.jsxs)("div",{className:"claimable-deri",children:[Object(h.jsx)("div",{className:"claim-title",children:s["claimable-deri"]}),Object(h.jsx)("div",{className:"claim-num",children:Object(h.jsx)(b.a,{value:y,decimalScale:2})})]}),Object(h.jsx)("div",{className:"cliam-button",children:Object(h.jsx)(m.a,{width:"102",height:"34",label:s.claim,disabled:P,onClick:function(){return I()}})})]}),Object(h.jsxs)("div",{className:"md-rewards-info",children:[Object(h.jsxs)("div",{className:"top-rewards-info",children:[Object(h.jsxs)("div",{className:"my-rewards",children:[Object(h.jsx)("div",{className:"claim-title",children:s["my-rewards"]}),Object(h.jsxs)("div",{className:"claim-num",children:[Object(h.jsx)(b.a,{value:d,decimalScale:2})," DERI"]})]}),Object(h.jsx)("div",{className:"cliam-button",children:Object(h.jsx)(m.a,{width:"102",height:"34",label:s.claim,disabled:P,onClick:function(){return I()}})})]}),Object(h.jsxs)("div",{className:"bottom-rewards-info",children:[Object(h.jsxs)("div",{className:"claimed-deri",children:[Object(h.jsx)("div",{className:"claim-title",children:s["claimed-deri"]}),Object(h.jsx)("div",{className:"claim-num",children:Object(h.jsx)(b.a,{value:p,decimalScale:2})})]}),Object(h.jsxs)("div",{className:"locked-deri",children:[Object(h.jsx)("div",{className:"claim-title",children:s["lcked-deri"]}),Object(h.jsx)("div",{className:"claim-num",children:Object(h.jsx)(b.a,{value:w,decimalScale:2})})]}),Object(h.jsxs)("div",{className:"claimable-deri",children:[Object(h.jsx)("div",{className:"claim-title",children:s["claimable-deri"]}),Object(h.jsx)("div",{className:"claim-num",children:Object(h.jsx)(b.a,{value:y,decimalScale:2})})]})]})]})]})]})})));function O(e){var t=e.lang,s=Object(n.useState)({}),a=Object(r.a)(s,2),d=a[0],o=a[1],j=Object(n.useState)(0),b=Object(r.a)(j,2),m=(b[0],b[1],Object(n.useState)("")),O=Object(r.a)(m,2);O[0],O[1];Object(n.useEffect)((function(){v()}),[]);var v=function(){var e=Object(i.a)(c.a.mark((function e(){var t,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getStakingAddressCount",[3]);case 2:t=e.sent,s={one:!0,two:!1,three:!1,four:!1},t.addressCount>1500&&(s.two=!0),t.addressCount>3e3&&(s.three=!0),t.addressCount>5e3&&(s.four=!0),o(s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"staking",children:[Object(h.jsx)("div",{className:"title-timeout",children:Object(h.jsxs)("div",{className:"title-time-text",children:[Object(h.jsxs)("div",{className:"title-text",children:[Object(h.jsxs)("div",{className:"title-epoch",children:[t.title," (Epoch 3)"]}),Object(h.jsx)("div",{className:"time xs-hide"})]}),Object(h.jsxs)("div",{className:"start-end-time-epoch",children:[Object(h.jsx)("div",{className:"satrt-end-time",children:"10:00:00 AM, December 8th 2021  to 10:00:00 AM, January 5th 2022  UTC"}),Object(h.jsx)("div",{className:"epoch xs-hide"})]}),Object(h.jsxs)("div",{className:"xs-show",children:[Object(h.jsx)("div",{className:"epoch"}),Object(h.jsx)("div",{className:"time"})]})]})}),Object(h.jsx)("div",{className:"claim",children:Object(h.jsx)(x,{lang:t})}),Object(h.jsxs)("div",{className:"rewards-box",children:[Object(h.jsxs)("div",{className:"total-rewards-pool",children:[Object(h.jsx)("div",{className:"deri-logo-bg",children:Object(h.jsx)("img",{alt:"",src:l})}),Object(h.jsxs)("div",{className:"total-rewards-num",children:[Object(h.jsx)("div",{className:"total-rewards-pool-title",children:"TOTAL REWARDS POOL"}),Object(h.jsxs)("div",{className:"toatl-rewards-deri",children:[Object(h.jsx)("span",{children:"2,000,000"}),Object(h.jsx)("span",{className:"deri-text",children:"DERI"})]})]})]}),Object(h.jsxs)("div",{className:"open-lock-rewards",children:[Object(h.jsxs)("div",{className:"top-open-lock-box",children:[Object(h.jsxs)("div",{className:"lock-open open",children:[Object(h.jsx)("div",{className:"lock-logo open-logo ",children:"OPEN"}),Object(h.jsx)("div",{className:"address-num",children:"< 1500 addresses"}),Object(h.jsxs)("div",{className:"address-reward",children:[Object(h.jsx)("span",{children:"500,000 "}),"  ",Object(h.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(h.jsx)("div",{className:"percentage-reward",children:"25% UNLOCKED"})]}),Object(h.jsxs)("div",{className:d.two?"lock-open open":"lock-open",children:[Object(h.jsx)("div",{className:d.two?"lock-logo open-logo":"lock-logo ",children:d.two?"OPEN":"LOCK"}),Object(h.jsx)("div",{className:"address-num",children:"1,500 - 3000 addresses"}),Object(h.jsxs)("div",{className:"address-reward",children:[Object(h.jsx)("span",{children:"1,000,000 "}),"  ",Object(h.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(h.jsx)("div",{className:"percentage-reward",children:"50% UNLOCKED"})]})]}),Object(h.jsxs)("div",{className:"bottom-open-lock-box",children:[Object(h.jsxs)("div",{className:d.three?"lock-open open":"lock-open",children:[Object(h.jsx)("div",{className:d.three?"lock-logo open-logo":"lock-logo",children:d.three?"OPEN":"LOCK"}),Object(h.jsx)("div",{className:"address-num",children:"3000 - 5000 addresses"}),Object(h.jsxs)("div",{className:"address-reward",children:[Object(h.jsx)("span",{children:"1,500,000 "}),"  ",Object(h.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(h.jsx)("div",{className:"percentage-reward",children:"75% UNLOCKED"})]}),Object(h.jsxs)("div",{className:d.four?"lock-open open":"lock-open",children:[Object(h.jsx)("div",{className:d.four?"lock-logo open-logo":"lock-logo",children:d.four?"OPEN":"LOCK"}),Object(h.jsx)("div",{className:"address-num",children:"> 5,000 addresses"}),Object(h.jsxs)("div",{className:"address-reward",children:[Object(h.jsx)("span",{children:"2,000,000 "}),"  ",Object(h.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(h.jsx)("div",{className:"percentage-reward",children:"100% UNLOCKED"})]})]})]})]}),Object(h.jsx)("div",{className:"stage-points",children:Object(h.jsxs)("div",{className:"stage-points-info",children:[Object(h.jsxs)("div",{className:"top-stage-points",children:[Object(h.jsxs)("div",{className:"points-box",children:[Object(h.jsx)("div",{className:"stage-box",children:"1 ST"}),Object(h.jsx)("div",{className:"points-num",children:"10,000 POINTS"}),Object(h.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 8  - 10 AM, Dec 15 UTC"})]}),Object(h.jsxs)("div",{className:"points-box xs-last",children:[Object(h.jsx)("div",{className:"stage-box",children:"2 ND"}),Object(h.jsx)("div",{className:"points-num",children:"20,000 POINTS"}),Object(h.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 15  - 10 AM, Dec 22 UTC"})]})]}),Object(h.jsxs)("div",{className:"bottom-stage-points",children:[Object(h.jsxs)("div",{className:"points-box",children:[Object(h.jsx)("div",{className:"stage-box",children:"3 RD"}),Object(h.jsx)("div",{className:"points-num",children:"30,000 POINTS"}),Object(h.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 22  - 10 AM, Dec 29 UTC"})]}),Object(h.jsxs)("div",{className:"points-box last xs-last",children:[Object(h.jsx)("div",{className:"stage-box",children:"4 TH"}),Object(h.jsx)("div",{className:"points-num",children:"50,000 POINTS"}),Object(h.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 29  - 10 AM, Jan 5 UTC,2022"})]})]})]})})]})}var v=s(1534),p=s(19),N=s(1374);function f(e){var t=e.lang,s=e.List;return Object(h.jsx)("div",{className:"ponts-pnl-top-ten",children:Object(h.jsxs)("div",{className:"list-box",children:[Object(h.jsxs)("div",{className:"list-box-title",children:[Object(h.jsx)("span",{className:"no",children:t.no}),Object(h.jsx)("span",{className:"address",children:t["user-addr"]}),Object(h.jsx)("span",{className:"feespaid",children:t["fees-paid"]}),Object(h.jsx)("span",{className:"avgcoeff",children:t["avg-coeff"]}),Object(h.jsx)(N.a,{text:t.score,className:"score score-hover",tip:"estimated points based on the current weights"})]}),Object(h.jsx)("div",{className:"list-info",children:s.map((function(e,t){return Object(h.jsxs)("div",{className:"list-info-box",children:[Object(h.jsxs)("div",{className:"no",children:[1===e.no&&Object(h.jsx)("span",{className:"top-three-no",children:"1"}),2===e.no&&Object(h.jsx)("span",{className:"top-three-no",children:"2"}),3===e.no&&Object(h.jsx)("span",{className:"top-three-no",children:"3"}),1!==e.no&&2!==e.no&&3!==e.no&&e.no]}),Object(h.jsx)("div",{className:"address",children:e.userAddr}),Object(h.jsxs)("div",{className:"feespaid",children:["$ ",Object(h.jsx)(b.a,{value:e.feesPaid,decimalScale:0,thousandSeparator:!0})]}),Object(h.jsx)("div",{className:"avgcoeff",children:Object(h.jsx)(b.a,{value:e.avgCoeff,decimalScale:4,thousandSeparator:!0})}),Object(h.jsx)("div",{className:"score",children:Object(h.jsx)(b.a,{value:e.score,decimalScale:2,thousandSeparator:!0})})]},t)}))})]})})}function g(e){var t=e.lang,s=e.List;return Object(h.jsx)("div",{className:"ponts-pnl-top-ten",children:Object(h.jsxs)("div",{className:"list-box",children:[Object(h.jsxs)("div",{className:"list-box-title",children:[Object(h.jsx)("span",{className:"no",children:t.no}),Object(h.jsx)("span",{className:"address",children:t["user-addr"]}),Object(h.jsx)("span",{className:"pnl",children:"PnL"})]}),Object(h.jsx)("div",{className:"list-info",children:s.map((function(e,t){return Object(h.jsxs)("div",{className:"list-info-box",children:[Object(h.jsxs)("div",{className:"no",children:[1===e.no&&Object(h.jsx)("span",{className:"top-three-no",children:"1"}),2===e.no&&Object(h.jsx)("span",{className:"top-three-no",children:"2"}),3===e.no&&Object(h.jsx)("span",{className:"top-three-no",children:"3"}),1!==e.no&&2!==e.no&&3!==e.no&&e.no]}),Object(h.jsx)("div",{className:"address",children:e.userAddr}),Object(h.jsxs)("div",{className:"pnl",children:["$ ",Object(h.jsx)(b.a,{value:e.pnl,decimalScale:2,thousandSeparator:!0})]})]},t)}))})]})})}s.p,s(2317);var w=Object(d.b)("wallet")(Object(d.c)((function(e){var t=e.wallet,s=e.lang,a=Object(n.useState)([]),d=Object(r.a)(a,2),o=d[0],j=d[1],m=Object(n.useState)([]),x=Object(r.a)(m,2),O=x[0],w=x[1],S=Object(n.useState)(""),C=Object(r.a)(S,2),k=C[0],y=C[1],Q=Object(n.useState)(""),D=Object(r.a)(Q,2),E=D[0],P=D[1],T=Object(n.useState)(""),A=Object(r.a)(T,2),R=A[0],I=A[1],$=Object(n.useState)({}),L=Object(r.a)($,2),M=L[0],B=L[1],F=Object(n.useState)(""),U=Object(r.a)(F,2),q=U[0],K=U[1],z=function(){var e=Object(i.a)(c.a.mark((function e(){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getUserStakingReward",[t.detail.account,3]);case 2:(s=e.sent)&&y(s.rewardDERI);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(i.a)(c.a.mark((function e(){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getUserStakingInfo",[t.detail.account,3]);case 2:s=e.sent,P(s.score),I(s.feePaid),K(s.coef);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(i.a)(c.a.mark((function e(){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getUserStakingContribution",[t.detail.account,3]);case 2:(s=e.sent)&&B(s);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(i.a)(c.a.mark((function e(){var t,s,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getStakingTop10Users",[3]);case 2:(t=e.sent)&&(s=t.top10.map((function(e,t){var s={};return s.no=e.no,e.userAddr=Object(p.i)(e.userAddr),s.userAddr=e.userAddr,s.feesPaid=e.feePaid,s.avgCoeff=e.evgCoeff,s.score=e.score,s.specialRewardsA=e.specialRewardsA,s})),a=t.top10Pnl.map((function(e,t){var s={};return s.no=e.no,e.userAddr=Object(p.i)(e.userAddr),s.userAddr=e.userAddr,s.pnl=e.pnl,s.specialRewardsB=e.specialRewardsB,s})),w(a),j(s));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){var e;return e=window.setInterval((function(){J()}),3e4),J(),function(){e&&clearInterval(e)}}),[]),Object(n.useEffect)((function(){var e;return e=window.setInterval((function(){t.isConnected()&&(z(),W(),_())}),3e4),t.isConnected()&&(z(),W(),_()),function(){e&&clearInterval(e)}}),[t.detail.account]);var Z={"Top 10 Points":{content:Object(h.jsx)(f,{lang:s,List:o})},"Top 10 Pnl":{content:Object(h.jsx)(g,{lang:s,List:O})}};return Object(h.jsxs)("div",{className:"trading",children:[Object(h.jsx)("div",{className:"trading-left",children:Object(h.jsx)("div",{className:"top-ponts-pnl",children:Object(h.jsx)(v.a,{tabSet:Z,activeBgColor:"#203B60"})})}),Object(h.jsxs)("div",{className:"trading-right",children:[Object(h.jsxs)("div",{className:"your-estimated-rewards",children:[Object(h.jsx)("div",{className:"your-estimated-rewards-title",children:Object(h.jsxs)("span",{children:[s["your-rstimated-rewards"]," "]})}),Object(h.jsx)("div",{className:"your-rewards-info",children:Object(h.jsxs)("div",{className:"your-deri",children:[Object(h.jsx)("span",{className:"deri-logo-bg",children:Object(h.jsx)("img",{alt:"",src:l})}),Object(h.jsxs)("span",{className:"span",children:[" ",k?Object(h.jsx)(b.a,{decimalScale:2,value:k,thousandSeparator:!0}):"--"," "]})]})})]}),Object(h.jsxs)("div",{className:"your-score-fee-coeff",children:[Object(h.jsx)("div",{className:"your-score-fee-coeff-title",children:"Your Trading Data"}),Object(h.jsxs)("div",{className:"your-score-fee-coeff-info",children:[Object(h.jsxs)("div",{className:"your-score",children:[Object(h.jsx)("div",{className:"your-score-title",children:Object(h.jsx)(N.a,{text:s["your-scored"],tip:"estimated points based on the current weights"})}),Object(h.jsx)("div",{className:"your-score-num",children:E?Object(h.jsx)(b.a,{value:E,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(h.jsxs)("div",{className:"your-fee",children:[Object(h.jsx)("div",{className:"your-fee-title",children:Object(h.jsx)(N.a,{text:s["your-fees-paid"],tip:"Fees paid by trading Perpetual futures in Main & Inno Zone or Everlasting Options on BSC"})}),Object(h.jsxs)("div",{className:"your-fee-num",children:["$  ",R?Object(h.jsx)(b.a,{value:R,decimalScale:2,thousandSeparator:!0}):"--"]})]}),Object(h.jsxs)("div",{className:"your-coeff",children:[Object(h.jsx)("div",{className:"your-coeff-title",children:Object(h.jsx)(N.a,{multiline:!0,text:s["your-coeff"],tip:s["boosting-factor-two"]})}),Object(h.jsx)("div",{className:"your-coeff-num",children:q?Object(h.jsx)(b.a,{value:q,decimalScale:4,thousandSeparator:!0}):"--"})]})]})]}),Object(h.jsx)("div",{className:"raise-score",children:Object(h.jsxs)("div",{className:"raise-score-box",children:[Object(h.jsxs)("div",{className:"raise-score-title-link",children:[Object(h.jsx)("div",{className:"raise-score-title",children:s["raise-score"]}),Object(h.jsxs)("div",{className:"raise-score-link",children:[Object(h.jsx)("a",{className:"fist-a",tip:s["staking-hover"],href:"https://deri.io/#/pool/v2_lite/56/future/0x26bE73Bdf8C113F3630e4B766cfE6F0670Aa09cF",children:s.staking}),Object(h.jsx)("a",{tip:s["futures-hover"],href:"https://deri.io/#/trade/futures",children:s.futures}),Object(h.jsx)("a",{tip:s["options-hover"],href:"https://deri.io/#/trade/options",children:s.options})]})]}),Object(h.jsxs)("div",{className:"raise-score-des",children:["Mining rewards are calculated based on traders' total points of the 4 quarters. In each quarter, all the participating traders share \xa0",Object(h.jsx)(N.a,{text:"this quarter's points",multiline:!0,className:"raise-hover",tip:s["the-quarter-points"]}),"\xa0per their transaction fees multiplied by the\xa0",Object(h.jsx)(N.a,{text:"boosting factors",className:"raise-hover",multiline:!0,tip:s["boosting-factor"]}),"."]})]})}),Object(h.jsx)("div",{className:"total-your-contrib",children:Object(h.jsxs)("div",{className:"your-contrib",children:[Object(h.jsxs)("div",{className:"stage",children:[Object(h.jsx)("div",{className:"stage-title"}),Object(h.jsx)("div",{className:"stage-title",children:"1st"}),Object(h.jsx)("div",{className:"stage-title",children:"2nd"}),Object(h.jsx)("div",{className:"stage-title",children:"3rd"}),Object(h.jsx)("div",{className:"stage-title",children:"4th"})]}),Object(h.jsxs)("div",{className:"total-score-box",children:[Object(h.jsx)("div",{className:"total-score",children:"Total Score"}),Object(h.jsx)("div",{className:"total-score",children:M.Q1Contrib&&"0"!==M.Q1Contrib?Object(h.jsx)(b.a,{value:M.Q1Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(h.jsx)("div",{className:"total-score",children:M.Q2Contrib&&"0"!==M.Q2Contrib?Object(h.jsx)(b.a,{value:M.Q2Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(h.jsx)("div",{className:"total-score",children:M.Q3Contrib&&"0"!==M.Q3Contrib?Object(h.jsx)(b.a,{value:M.Q3Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(h.jsx)("div",{className:"total-score",children:M.Q4Contrib&&"0"!==M.Q4Contrib?Object(h.jsx)(b.a,{value:M.Q4Contrib,decimalScale:0,thousandSeparator:!0}):"--"})]}),Object(h.jsxs)("div",{className:"your-score-box",children:[Object(h.jsx)("div",{className:"your-score",children:"Your Score"}),Object(h.jsx)("div",{className:"your-score",children:M.userQ1Contrib&&"0"!==M.Q1Contrib?Object(h.jsx)(b.a,{value:M.userQ1Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(h.jsx)("div",{className:"your-score",children:M.userQ2Contrib&&"0"!==M.Q2Contrib?Object(h.jsx)(b.a,{value:M.userQ2Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(h.jsx)("div",{className:"your-score",children:M.userQ3Contrib&&"0"!==M.Q3Contrib?Object(h.jsx)(b.a,{value:M.userQ3Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(h.jsx)("div",{className:"your-score",children:M.userQ4Contrib&&"0"!==M.Q4Contrib?Object(h.jsx)(b.a,{value:M.userQ4Contrib,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(h.jsxs)("div",{className:"your-point-box",children:[Object(h.jsx)("div",{className:"your-point",children:"Your Points"}),Object(h.jsx)("div",{className:"your-point",children:M.userQ1Point&&"0"!==M.Q1Contrib?Object(h.jsx)(N.a,{text:Object(h.jsx)(b.a,{value:M.userQ1Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:M.userQ1Point?" = (".concat(M.userQ1Contrib," / ").concat(M.Q1Contrib,") * 10,000"):""}):"--"}),Object(h.jsx)("div",{className:"your-point",children:M.userQ2Point&&"0"!==M.Q2Contrib?Object(h.jsx)(N.a,{text:Object(h.jsx)(b.a,{value:M.userQ2Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:M.userQ1Point?" = (".concat(M.userQ2Contrib," / ").concat(M.Q2Contrib,") * 20,000"):""}):"--"}),Object(h.jsx)("div",{className:"your-point",children:M.userQ3Point&&"0"!==M.Q3Contrib?Object(h.jsx)(N.a,{text:Object(h.jsx)(b.a,{value:M.userQ3Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:M.userQ1Point?" = (".concat(M.userQ3Contrib," / ").concat(M.Q3Contrib,") * 30,000"):""}):"--"}),Object(h.jsx)("div",{className:"your-point",children:M.userQ4Point&&"0"!==M.Q4Contrib?Object(h.jsx)(N.a,{text:Object(h.jsx)(b.a,{value:M.userQ4Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:M.userQ1Point?" = (".concat(M.userQ4Contrib," / ").concat(M.Q4Contrib,") * 50,000"):""}):"--"})]})]})})]})]})})));s(2318);function S(e){var t=e.lang;return Object(h.jsx)("div",{className:"three",children:Object(h.jsxs)("div",{className:"finished",children:[Object(h.jsx)(O,{lang:t}),Object(h.jsx)(w,{lang:t}),Object(h.jsx)("div",{className:"detailed-rules",children:Object(h.jsx)("a",{href:"https://deri-protocol.medium.com/deri-protocol-trade-to-earn-epoch-3-7b237845e4dc",children:"Detailed Rules"})})]})})}}}]);
//# sourceMappingURL=6.9e719b98.chunk.js.map