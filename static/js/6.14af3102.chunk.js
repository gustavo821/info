(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[6],{1202:function(e,t,s){"use strict";var a,c,i=s(29),l=s(1200),r=s(106),d=s(18),n=s(136),o=s(5),j=(s(63),s(1247)),b=s(48),m=s(16),h=s(9),x=s(3),u=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],O=Object(b.a)(j.a)(a||(a=Object(n.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),v=b.a.div(c||(c=Object(n.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(o.useState)(Object(x.jsx)("span",{className:"loading-line"})),s=Object(d.a)(t,2),a=s[0],c=s[1],n=Object(o.useState)(!0),j=Object(d.a)(n,2),b=j[0],p=j[1],N=function(){var t=e.allowZero;return"object"!==Object(r.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},f=function(e){return e&&e.replace(/\.$/,"")};return Object(o.useEffect)((function(){var t=e.allowZero,s=(e.wallet,e.closeShowLoadingEffectAfterLoaded),a=e.defaultValue,r=void 0===a?"--":a,d=Object(l.a)(e,u);if(N())d.decimalScale>0&&d.value&&/\d+\.0*[1-9]+/.test(d.value)&&0===+Object(h.bg)(d.value).toFixed(+d.decimalScale||2)&&(d.decimalScale=Object(m.d)(Math.abs(d.value))+2),(-1===d.decimalScale||0===+d.value&&t)&&delete d.decimalScale,d.value=Object(m.J)(d.value),d.value&&/\d+.9{6}/.test(d.value)&&(d.value=(+d.value).toFixed(5)),c(Object(x.jsx)(O,Object(i.a)(Object(i.a)({},d),{},{renderText:f,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(b){var n=e.width,o=e.height;c(Object(x.jsx)(v,{className:"loading-line",width:n,height:o})),s&&p(!1)}var j=window.setTimeout((function(){N()||c(r)}),6e4);return function(){clearTimeout(j)}}),[e.value,e.decimalScale,e.suffix]),a}},1210:function(e,t,s){"use strict";s.d(t,"a",(function(){return j}));var a=s(48),c=s(1281),i=s.n(c),l=s(138),r=s(16),d=s(1255),n=s(3);const o=a.a.div`
  display:${e=>e.block};
  .text {
    border-bottom : 1px dashed #93A1B8;
    width : max-content;
    cursor : pointer;
    display:${e=>e.block}
  }
  
  .__react_component_tooltip.tooltip.show {
    font-weight : ${e=>e.isWin?400:600} 
  }
`;function j(e){let{text:t,id:s=String((new Date).getTime())+Math.random(),tip:a,multiline:c,html:j,className:b,element:m="",block:h="block",width:x="auto",children:u,tiggerEvent:O}=e;return Object(n.jsxs)(o,{className:b,block:h,isWin:d.isWindows,children:[Object(n.jsx)("div",{className:"text","data-for":s,"data-tip":j?i.a.renderToString(m):a,"data-event":Object(r.y)()?"click":O,"data-html":j,children:t||u}),a&&Object(n.jsx)(l.a,{id:s,width:x,padding:"12",place:"bottom",overridePosition:(e,t,s,a,c,i,l,r)=>{const d=s.getBoundingClientRect(),n=a.getBoundingClientRect();let{x:o,y:j,height:b,width:m}=d;const{left:h,top:x}=e;return o+n.width/2>document.documentElement.clientWidth?o-=Math.abs(m-n.width):o-(n.width-m)/2<0?o-=m:o-=(n.width-m)/2,j+b+n.height>=document.documentElement.clientHeight?j=j+b-n.height:j+=b,o<0&&(o=0),j<0&&(j=0),{top:j,left:o}},html:j,borderRadius:8,multiline:c})]})}},1282:function(e,t,s){"use strict";s.d(t,"a",(function(){return d}));var a=s(48),c=s(5),i=s(27),l=s(3);const r=a.a.div`
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
  `;function d(e){let{tabSet:t,inactiveBgColor:s,iconMarginRight:a,activeBgColor:d,icon:n,className:o,width:j=238,height:b=47,size:m=16,borderTop:h=!1,borderBottom:x=!1,divider:u=!1,activeIndex:O=0}=e,v=Object.keys(t);const[p,N]=Object(c.useState)(v[O]),[f,g]=Object(c.useState)(),[w,S]=Object(c.useState)(),[C,y]=Object(c.useState)(),[k,Q]=Object(c.useState)(),[D,E]=Object(c.useState)(),[$,P]=Object(c.useState)();return Object(c.useEffect)((()=>{const e=Object.keys(t);N(e[O])}),[t,O]),Object(c.useEffect)((()=>{const e=Object.keys(t);let s=p||e[O];if(t[s]){g(t[s].style);let e=h?`border-top:1px solid ${t[s].borderColor}`:"border-top:0",a=x?`border-bottom:1px solid ${t[s].borderColor}`:"border-bottom:0",c=u?`border-left:1px solid ${t[s].borderColor}`:"border-left:0",i=u?`border-right:1px solid ${t[s].borderColor}`:"border-right:0",l=t[s].fontColor?t[s].fontColor:"#FFFFFF";S(e),y(c),Q(a),E(i),P(l)}}),[t,p]),Object(l.jsxs)("div",{style:f,className:o,children:[Object(l.jsx)(r,{className:"tab-header",iconMarginRight:a,width:j,height:b,activeFontColor:$,activeBgColor:d,inactiveBgColor:s,size:m,borderT:w,borderB:k,borderL:C,borderR:D,children:v.map(((e,s)=>Object(l.jsxs)("div",{className:e===p?`${t[e].direction||t[e].className} active`:`${t[e].direction||t[e].className} inactive`,onClick:t=>function(e,t){N(e)}(e),children:[t[e].icon?Object(l.jsx)(i.a,{width:t[e].iconWidth,height:t[e].iconHeight,token:e===p?t[e].icon:t[e].inicon}):"","  ",e]},s)))}),t[p]?t[p].content:""]})}},1333:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var a=s(48),c=(s(5),s(3));const i=a.a.div`
width:${e=>e.width}%;
max-width:100%;
height:10px;
background-color: #5577FD;
`;function l(e){let{startTimestamp:t,nowTimestamp:s,endTimestamp:a}=e;const l=parseInt((s-t)/(a-t)*100);return Object(c.jsx)("div",{className:"time-slider",children:Object(c.jsx)(i,{width:l})})}},2109:function(e,t,s){},2110:function(e,t,s){},2111:function(e,t,s){},2112:function(e,t,s){},2277:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return N}));var a=s(5),c=(s(2109),s.p+"static/media/logo-deri.d4c8b6a2.svg"),i=(s(1333),s(46)),l=(s(2110),s(163)),r=s(9),d=s(1202),n=s(37),o=s(162),j=s(3);var b=Object(i.b)("wallet")(Object(i.c)((function(e){let{wallet:t,lang:s}=e;const[c,i]=Object(a.useState)(""),[b,m]=Object(a.useState)(""),[h,x]=Object(a.useState)(""),[u,O]=Object(a.useState)(""),[v,p]=Object(a.useState)(!0),N=Object(l.c)(),f=async()=>{if(+u.claimable>0)return;let e=new Date((new Date).toLocaleDateString()).getTime()+666e5,s=new Date((new Date).toLocaleDateString()).getTime()+648e5,a=parseInt(Date.now());if(a<e&&a>s)return void N.error("Claiming DERI is disabled during first 30 minutes of each epoch");let c=await n.a.request("claimMyStaking",[t.detail.account,3],{includeResponse:!0});if(!c||!c.success)return N.error("Claim fail"),!1;{N.success("Claim success");let e=Object(r.bg)(b).plus(Object(r.bg)(u)).toString();m(e),O(0)}};return Object(a.useEffect)((()=>{p(!(+u>0))}),[u]),Object(a.useEffect)((()=>{t.isConnected()&&(async()=>{let e=await n.a.request("getUserStakingClaimInfo",[t.detail.account,3]);if(e){let t=+e.claimed+ +e.locked+ +e.claimable;m(e.claimed),x(e.locked),O(e.claimable),i(t)}})()}),[t,t.detail]),Object(j.jsxs)("div",{className:"trade-claim",children:[Object(j.jsx)("div",{className:"rewards-claim",children:s.rewards}),Object(j.jsxs)("div",{className:"rewards-info",children:[Object(j.jsxs)("div",{className:"lg-rewards-info",children:[Object(j.jsxs)("div",{className:"my-rewards",children:[Object(j.jsx)("div",{className:"claim-title",children:s["my-rewards"]}),Object(j.jsxs)("div",{className:"claim-num",children:[Object(j.jsx)(d.a,{value:c,decimalScale:2})," DERI"]})]}),Object(j.jsxs)("div",{className:"claimed-deri",children:[Object(j.jsx)("div",{className:"claim-title",children:s["claimed-deri"]}),Object(j.jsx)("div",{className:"claim-num",children:Object(j.jsx)(d.a,{value:b,decimalScale:2})})]}),Object(j.jsxs)("div",{className:"locked-deri",children:[Object(j.jsx)("div",{className:"claim-title",children:s["lcked-deri"]}),Object(j.jsx)("div",{className:"claim-num",children:Object(j.jsx)(d.a,{value:h,decimalScale:2})})]}),Object(j.jsxs)("div",{className:"claimable-deri",children:[Object(j.jsx)("div",{className:"claim-title",children:s["claimable-deri"]}),Object(j.jsx)("div",{className:"claim-num",children:Object(j.jsx)(d.a,{value:u,decimalScale:2})})]}),Object(j.jsx)("div",{className:"cliam-button",children:Object(j.jsx)(o.a,{width:"102",height:"34",label:s.claim,disabled:v,onClick:()=>f()})})]}),Object(j.jsxs)("div",{className:"md-rewards-info",children:[Object(j.jsxs)("div",{className:"top-rewards-info",children:[Object(j.jsxs)("div",{className:"my-rewards",children:[Object(j.jsx)("div",{className:"claim-title",children:s["my-rewards"]}),Object(j.jsxs)("div",{className:"claim-num",children:[Object(j.jsx)(d.a,{value:c,decimalScale:2})," DERI"]})]}),Object(j.jsx)("div",{className:"cliam-button",children:Object(j.jsx)(o.a,{width:"102",height:"34",label:s.claim,disabled:v,onClick:()=>f()})})]}),Object(j.jsxs)("div",{className:"bottom-rewards-info",children:[Object(j.jsxs)("div",{className:"claimed-deri",children:[Object(j.jsx)("div",{className:"claim-title",children:s["claimed-deri"]}),Object(j.jsx)("div",{className:"claim-num",children:Object(j.jsx)(d.a,{value:b,decimalScale:2})})]}),Object(j.jsxs)("div",{className:"locked-deri",children:[Object(j.jsx)("div",{className:"claim-title",children:s["lcked-deri"]}),Object(j.jsx)("div",{className:"claim-num",children:Object(j.jsx)(d.a,{value:h,decimalScale:2})})]}),Object(j.jsxs)("div",{className:"claimable-deri",children:[Object(j.jsx)("div",{className:"claim-title",children:s["claimable-deri"]}),Object(j.jsx)("div",{className:"claim-num",children:Object(j.jsx)(d.a,{value:u,decimalScale:2})})]})]})]})]})]})})));function m(e){let{lang:t}=e;const[s,i]=Object(a.useState)({}),[l,r]=Object(a.useState)(0),[d,o]=Object(a.useState)("");Object(a.useEffect)((()=>{m()}),[]);const m=async()=>{let e=await n.a.request("getStakingAddressCount",[3]),t={one:!0,two:!1,three:!1,four:!1};e.addressCount>1500&&(t.two=!0),e.addressCount>3e3&&(t.three=!0),e.addressCount>5e3&&(t.four=!0),i(t)};return Object(j.jsxs)("div",{className:"staking",children:[Object(j.jsx)("div",{className:"title-timeout",children:Object(j.jsxs)("div",{className:"title-time-text",children:[Object(j.jsxs)("div",{className:"title-text",children:[Object(j.jsxs)("div",{className:"title-epoch",children:[t.title," (Epoch 3)"]}),Object(j.jsx)("div",{className:"time xs-hide"})]}),Object(j.jsxs)("div",{className:"start-end-time-epoch",children:[Object(j.jsx)("div",{className:"satrt-end-time",children:"10:00:00 AM, December 8th 2021  to 10:00:00 AM, January 5th 2022  UTC"}),Object(j.jsx)("div",{className:"epoch xs-hide"})]}),Object(j.jsxs)("div",{className:"xs-show",children:[Object(j.jsx)("div",{className:"epoch"}),Object(j.jsx)("div",{className:"time"})]})]})}),Object(j.jsx)("div",{className:"claim",children:Object(j.jsx)(b,{lang:t})}),Object(j.jsxs)("div",{className:"rewards-box",children:[Object(j.jsxs)("div",{className:"total-rewards-pool",children:[Object(j.jsx)("div",{className:"deri-logo-bg",children:Object(j.jsx)("img",{alt:"",src:c})}),Object(j.jsxs)("div",{className:"total-rewards-num",children:[Object(j.jsx)("div",{className:"total-rewards-pool-title",children:"TOTAL REWARDS POOL"}),Object(j.jsxs)("div",{className:"toatl-rewards-deri",children:[Object(j.jsx)("span",{children:"2,000,000"}),Object(j.jsx)("span",{className:"deri-text",children:"DERI"})]})]})]}),Object(j.jsxs)("div",{className:"open-lock-rewards",children:[Object(j.jsxs)("div",{className:"top-open-lock-box",children:[Object(j.jsxs)("div",{className:"lock-open open",children:[Object(j.jsx)("div",{className:"lock-logo open-logo ",children:"OPEN"}),Object(j.jsx)("div",{className:"address-num",children:"< 1500 addresses"}),Object(j.jsxs)("div",{className:"address-reward",children:[Object(j.jsx)("span",{children:"500,000 "}),"  ",Object(j.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(j.jsx)("div",{className:"percentage-reward",children:"25% UNLOCKED"})]}),Object(j.jsxs)("div",{className:s.two?"lock-open open":"lock-open",children:[Object(j.jsx)("div",{className:s.two?"lock-logo open-logo":"lock-logo ",children:s.two?"OPEN":"LOCK"}),Object(j.jsx)("div",{className:"address-num",children:"1,500 - 3000 addresses"}),Object(j.jsxs)("div",{className:"address-reward",children:[Object(j.jsx)("span",{children:"1,000,000 "}),"  ",Object(j.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(j.jsx)("div",{className:"percentage-reward",children:"50% UNLOCKED"})]})]}),Object(j.jsxs)("div",{className:"bottom-open-lock-box",children:[Object(j.jsxs)("div",{className:s.three?"lock-open open":"lock-open",children:[Object(j.jsx)("div",{className:s.three?"lock-logo open-logo":"lock-logo",children:s.three?"OPEN":"LOCK"}),Object(j.jsx)("div",{className:"address-num",children:"3000 - 5000 addresses"}),Object(j.jsxs)("div",{className:"address-reward",children:[Object(j.jsx)("span",{children:"1,500,000 "}),"  ",Object(j.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(j.jsx)("div",{className:"percentage-reward",children:"75% UNLOCKED"})]}),Object(j.jsxs)("div",{className:s.four?"lock-open open":"lock-open",children:[Object(j.jsx)("div",{className:s.four?"lock-logo open-logo":"lock-logo",children:s.four?"OPEN":"LOCK"}),Object(j.jsx)("div",{className:"address-num",children:"> 5,000 addresses"}),Object(j.jsxs)("div",{className:"address-reward",children:[Object(j.jsx)("span",{children:"2,000,000 "}),"  ",Object(j.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(j.jsx)("div",{className:"percentage-reward",children:"100% UNLOCKED"})]})]})]})]}),Object(j.jsx)("div",{className:"stage-points",children:Object(j.jsxs)("div",{className:"stage-points-info",children:[Object(j.jsxs)("div",{className:"top-stage-points",children:[Object(j.jsxs)("div",{className:"points-box",children:[Object(j.jsx)("div",{className:"stage-box",children:"1 ST"}),Object(j.jsx)("div",{className:"points-num",children:"10,000 POINTS"}),Object(j.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 8  - 10 AM, Dec 15 UTC"})]}),Object(j.jsxs)("div",{className:"points-box xs-last",children:[Object(j.jsx)("div",{className:"stage-box",children:"2 ND"}),Object(j.jsx)("div",{className:"points-num",children:"20,000 POINTS"}),Object(j.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 15  - 10 AM, Dec 22 UTC"})]})]}),Object(j.jsxs)("div",{className:"bottom-stage-points",children:[Object(j.jsxs)("div",{className:"points-box",children:[Object(j.jsx)("div",{className:"stage-box",children:"3 RD"}),Object(j.jsx)("div",{className:"points-num",children:"30,000 POINTS"}),Object(j.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 22  - 10 AM, Dec 29 UTC"})]}),Object(j.jsxs)("div",{className:"points-box last xs-last",children:[Object(j.jsx)("div",{className:"stage-box",children:"4 TH"}),Object(j.jsx)("div",{className:"points-num",children:"50,000 POINTS"}),Object(j.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 29  - 10 AM, Jan 5 UTC,2022"})]})]})]})})]})}var h=s(1282),x=s(16),u=s(1210);function O(e){let{lang:t,List:s}=e;return Object(j.jsx)("div",{className:"ponts-pnl-top-ten",children:Object(j.jsxs)("div",{className:"list-box",children:[Object(j.jsxs)("div",{className:"list-box-title",children:[Object(j.jsx)("span",{className:"no",children:t.no}),Object(j.jsx)("span",{className:"address",children:t["user-addr"]}),Object(j.jsx)("span",{className:"feespaid",children:t["fees-paid"]}),Object(j.jsx)("span",{className:"avgcoeff",children:t["avg-coeff"]}),Object(j.jsx)(u.a,{text:t.score,className:"score score-hover",tip:"estimated points based on the current weights"})]}),Object(j.jsx)("div",{className:"list-info",children:s.map(((e,t)=>Object(j.jsxs)("div",{className:"list-info-box",children:[Object(j.jsxs)("div",{className:"no",children:[1===e.no&&Object(j.jsx)("span",{className:"top-three-no",children:"1"}),2===e.no&&Object(j.jsx)("span",{className:"top-three-no",children:"2"}),3===e.no&&Object(j.jsx)("span",{className:"top-three-no",children:"3"}),1!==e.no&&2!==e.no&&3!==e.no&&e.no]}),Object(j.jsx)("div",{className:"address",children:e.userAddr}),Object(j.jsxs)("div",{className:"feespaid",children:["$ ",Object(j.jsx)(d.a,{value:e.feesPaid,decimalScale:0,thousandSeparator:!0})]}),Object(j.jsx)("div",{className:"avgcoeff",children:Object(j.jsx)(d.a,{value:e.avgCoeff,decimalScale:4,thousandSeparator:!0})}),Object(j.jsx)("div",{className:"score",children:Object(j.jsx)(d.a,{value:e.score,decimalScale:2,thousandSeparator:!0})})]},t)))})]})})}function v(e){let{lang:t,List:s}=e;return Object(j.jsx)("div",{className:"ponts-pnl-top-ten",children:Object(j.jsxs)("div",{className:"list-box",children:[Object(j.jsxs)("div",{className:"list-box-title",children:[Object(j.jsx)("span",{className:"no",children:t.no}),Object(j.jsx)("span",{className:"address",children:t["user-addr"]}),Object(j.jsx)("span",{className:"pnl",children:"PnL"})]}),Object(j.jsx)("div",{className:"list-info",children:s.map(((e,t)=>Object(j.jsxs)("div",{className:"list-info-box",children:[Object(j.jsxs)("div",{className:"no",children:[1===e.no&&Object(j.jsx)("span",{className:"top-three-no",children:"1"}),2===e.no&&Object(j.jsx)("span",{className:"top-three-no",children:"2"}),3===e.no&&Object(j.jsx)("span",{className:"top-three-no",children:"3"}),1!==e.no&&2!==e.no&&3!==e.no&&e.no]}),Object(j.jsx)("div",{className:"address",children:e.userAddr}),Object(j.jsxs)("div",{className:"pnl",children:["$ ",Object(j.jsx)(d.a,{value:e.pnl,decimalScale:2,thousandSeparator:!0})]})]},t)))})]})})}s.p,s(2111);var p=Object(i.b)("wallet")(Object(i.c)((function(e){let{wallet:t,lang:s}=e;const[i,l]=Object(a.useState)([]),[r,o]=Object(a.useState)([]),[b,m]=Object(a.useState)(""),[p,N]=Object(a.useState)(""),[f,g]=Object(a.useState)(""),[w,S]=Object(a.useState)({}),[C,y]=Object(a.useState)(""),k=async()=>{let e=await n.a.request("getUserStakingReward",[t.detail.account,3]);e&&m(e.rewardDERI)},Q=async()=>{let e=await n.a.request("getUserStakingInfo",[t.detail.account,3]);N(e.score),g(e.feePaid),y(e.coef)},D=async()=>{let e=await n.a.request("getUserStakingContribution",[t.detail.account,3]);e&&S(e)},E=async()=>{let e,t,s=await n.a.request("getStakingTop10Users",[3]);s&&(e=s.top10.map(((e,t)=>{let s={};return s.no=e.no,e.userAddr=Object(x.i)(e.userAddr),s.userAddr=e.userAddr,s.feesPaid=e.feePaid,s.avgCoeff=e.evgCoeff,s.score=e.score,s.specialRewardsA=e.specialRewardsA,s})),t=s.top10Pnl.map(((e,t)=>{let s={};return s.no=e.no,e.userAddr=Object(x.i)(e.userAddr),s.userAddr=e.userAddr,s.pnl=e.pnl,s.specialRewardsB=e.specialRewardsB,s})),o(t),l(e))};Object(a.useEffect)((()=>{let e=null;return e=window.setInterval((()=>{E()}),3e4),E(),()=>{e&&clearInterval(e)}}),[]),Object(a.useEffect)((()=>{let e=null;return e=window.setInterval((()=>{t.isConnected()&&(k(),Q(),D())}),3e4),t.isConnected()&&(k(),Q(),D()),()=>{e&&clearInterval(e)}}),[t.detail.account]);const $={"Top 10 Points":{content:Object(j.jsx)(O,{lang:s,List:i})},"Top 10 Pnl":{content:Object(j.jsx)(v,{lang:s,List:r})}};return Object(j.jsxs)("div",{className:"trading",children:[Object(j.jsx)("div",{className:"trading-left",children:Object(j.jsx)("div",{className:"top-ponts-pnl",children:Object(j.jsx)(h.a,{tabSet:$,activeBgColor:"#203B60"})})}),Object(j.jsxs)("div",{className:"trading-right",children:[Object(j.jsxs)("div",{className:"your-estimated-rewards",children:[Object(j.jsx)("div",{className:"your-estimated-rewards-title",children:Object(j.jsxs)("span",{children:[s["your-rstimated-rewards"]," "]})}),Object(j.jsx)("div",{className:"your-rewards-info",children:Object(j.jsxs)("div",{className:"your-deri",children:[Object(j.jsx)("span",{className:"deri-logo-bg",children:Object(j.jsx)("img",{alt:"",src:c})}),Object(j.jsxs)("span",{className:"span",children:[" ",b?Object(j.jsx)(d.a,{decimalScale:2,value:b,thousandSeparator:!0}):"--"," "]})]})})]}),Object(j.jsxs)("div",{className:"your-score-fee-coeff",children:[Object(j.jsx)("div",{className:"your-score-fee-coeff-title",children:"Your Trading Data"}),Object(j.jsxs)("div",{className:"your-score-fee-coeff-info",children:[Object(j.jsxs)("div",{className:"your-score",children:[Object(j.jsx)("div",{className:"your-score-title",children:Object(j.jsx)(u.a,{text:s["your-scored"],tip:"estimated points based on the current weights"})}),Object(j.jsx)("div",{className:"your-score-num",children:p?Object(j.jsx)(d.a,{value:p,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(j.jsxs)("div",{className:"your-fee",children:[Object(j.jsx)("div",{className:"your-fee-title",children:Object(j.jsx)(u.a,{text:s["your-fees-paid"],tip:"Fees paid by trading Perpetual futures in Main & Inno Zone or Everlasting Options on BSC"})}),Object(j.jsxs)("div",{className:"your-fee-num",children:["$  ",f?Object(j.jsx)(d.a,{value:f,decimalScale:2,thousandSeparator:!0}):"--"]})]}),Object(j.jsxs)("div",{className:"your-coeff",children:[Object(j.jsx)("div",{className:"your-coeff-title",children:Object(j.jsx)(u.a,{multiline:!0,text:s["your-coeff"],tip:s["boosting-factor-two"]})}),Object(j.jsx)("div",{className:"your-coeff-num",children:C?Object(j.jsx)(d.a,{value:C,decimalScale:4,thousandSeparator:!0}):"--"})]})]})]}),Object(j.jsx)("div",{className:"raise-score",children:Object(j.jsxs)("div",{className:"raise-score-box",children:[Object(j.jsxs)("div",{className:"raise-score-title-link",children:[Object(j.jsx)("div",{className:"raise-score-title",children:s["raise-score"]}),Object(j.jsxs)("div",{className:"raise-score-link",children:[Object(j.jsx)("a",{className:"fist-a",tip:s["staking-hover"],href:"https://deri.io/#/pool/v2_lite/56/future/0x26bE73Bdf8C113F3630e4B766cfE6F0670Aa09cF",children:s.staking}),Object(j.jsx)("a",{tip:s["futures-hover"],href:"https://deri.io/#/trade/futures",children:s.futures}),Object(j.jsx)("a",{tip:s["options-hover"],href:"https://deri.io/#/trade/options",children:s.options})]})]}),Object(j.jsxs)("div",{className:"raise-score-des",children:["Mining rewards are calculated based on traders' total points of the 4 quarters. In each quarter, all the participating traders share \xa0",Object(j.jsx)(u.a,{text:"this quarter's points",multiline:!0,className:"raise-hover",tip:s["the-quarter-points"]}),"\xa0per their transaction fees multiplied by the\xa0",Object(j.jsx)(u.a,{text:"boosting factors",className:"raise-hover",multiline:!0,tip:s["boosting-factor"]}),"."]})]})}),Object(j.jsx)("div",{className:"total-your-contrib",children:Object(j.jsxs)("div",{className:"your-contrib",children:[Object(j.jsxs)("div",{className:"stage",children:[Object(j.jsx)("div",{className:"stage-title"}),Object(j.jsx)("div",{className:"stage-title",children:"1st"}),Object(j.jsx)("div",{className:"stage-title",children:"2nd"}),Object(j.jsx)("div",{className:"stage-title",children:"3rd"}),Object(j.jsx)("div",{className:"stage-title",children:"4th"})]}),Object(j.jsxs)("div",{className:"total-score-box",children:[Object(j.jsx)("div",{className:"total-score",children:"Total Score"}),Object(j.jsx)("div",{className:"total-score",children:w.Q1Contrib&&"0"!==w.Q1Contrib?Object(j.jsx)(d.a,{value:w.Q1Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(j.jsx)("div",{className:"total-score",children:w.Q2Contrib&&"0"!==w.Q2Contrib?Object(j.jsx)(d.a,{value:w.Q2Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(j.jsx)("div",{className:"total-score",children:w.Q3Contrib&&"0"!==w.Q3Contrib?Object(j.jsx)(d.a,{value:w.Q3Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(j.jsx)("div",{className:"total-score",children:w.Q4Contrib&&"0"!==w.Q4Contrib?Object(j.jsx)(d.a,{value:w.Q4Contrib,decimalScale:0,thousandSeparator:!0}):"--"})]}),Object(j.jsxs)("div",{className:"your-score-box",children:[Object(j.jsx)("div",{className:"your-score",children:"Your Score"}),Object(j.jsx)("div",{className:"your-score",children:w.userQ1Contrib&&"0"!==w.Q1Contrib?Object(j.jsx)(d.a,{value:w.userQ1Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(j.jsx)("div",{className:"your-score",children:w.userQ2Contrib&&"0"!==w.Q2Contrib?Object(j.jsx)(d.a,{value:w.userQ2Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(j.jsx)("div",{className:"your-score",children:w.userQ3Contrib&&"0"!==w.Q3Contrib?Object(j.jsx)(d.a,{value:w.userQ3Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(j.jsx)("div",{className:"your-score",children:w.userQ4Contrib&&"0"!==w.Q4Contrib?Object(j.jsx)(d.a,{value:w.userQ4Contrib,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(j.jsxs)("div",{className:"your-point-box",children:[Object(j.jsx)("div",{className:"your-point",children:"Your Points"}),Object(j.jsx)("div",{className:"your-point",children:w.userQ1Point&&"0"!==w.Q1Contrib?Object(j.jsx)(u.a,{text:Object(j.jsx)(d.a,{value:w.userQ1Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:w.userQ1Point?` = (${w.userQ1Contrib} / ${w.Q1Contrib}) * 10,000`:""}):"--"}),Object(j.jsx)("div",{className:"your-point",children:w.userQ2Point&&"0"!==w.Q2Contrib?Object(j.jsx)(u.a,{text:Object(j.jsx)(d.a,{value:w.userQ2Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:w.userQ1Point?` = (${w.userQ2Contrib} / ${w.Q2Contrib}) * 20,000`:""}):"--"}),Object(j.jsx)("div",{className:"your-point",children:w.userQ3Point&&"0"!==w.Q3Contrib?Object(j.jsx)(u.a,{text:Object(j.jsx)(d.a,{value:w.userQ3Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:w.userQ1Point?` = (${w.userQ3Contrib} / ${w.Q3Contrib}) * 30,000`:""}):"--"}),Object(j.jsx)("div",{className:"your-point",children:w.userQ4Point&&"0"!==w.Q4Contrib?Object(j.jsx)(u.a,{text:Object(j.jsx)(d.a,{value:w.userQ4Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:w.userQ1Point?` = (${w.userQ4Contrib} / ${w.Q4Contrib}) * 50,000`:""}):"--"})]})]})})]})]})})));s(2112);function N(e){let{lang:t}=e;return Object(j.jsx)("div",{className:"three",children:Object(j.jsxs)("div",{className:"finished",children:[Object(j.jsx)(m,{lang:t}),Object(j.jsx)(p,{lang:t}),Object(j.jsx)("div",{className:"detailed-rules",children:Object(j.jsx)("a",{href:"https://deri-protocol.medium.com/deri-protocol-trade-to-earn-epoch-3-7b237845e4dc",children:"Detailed Rules"})})]})})}}}]);
//# sourceMappingURL=6.14af3102.chunk.js.map