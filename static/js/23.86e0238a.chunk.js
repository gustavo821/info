(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[23],{1043:function(e,t,a){"use strict";var i=a(4),c=(a(51),a(1125)),l=a(41),s=a(12),d=a(6),n=a(3);const r=Object(l.a)(c.a)`
  width : ${e=>e.width}px;
`,o=l.a.div`
  width : ${e=>/px$/.test(e.width)?e.width:`${e.width}px`};
  height : ${e=>/px$/.test(e.height)?e.height:`${e.height}px`};
`;t.a=function(e){const[t,a]=Object(i.useState)(Object(n.jsx)("span",{className:"loading-line"})),[c,l]=Object(i.useState)(!0),j=()=>{const{allowZero:t}=e;return"object"!==typeof e.value&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},u=e=>e&&e.replace(/\.$/,"");return Object(i.useEffect)((()=>{const{allowZero:t,wallet:i,closeShowLoadingEffectAfterLoaded:b,defaultValue:h="--",...v}=e;if(j())v.decimalScale>0&&!t&&v.value&&/\d+\.0*[1-9]+/.test(v.value)&&0===+Object(d.bg)(v.value).toFixed(+v.decimalScale||2)&&(v.decimalScale=Object(s.d)(Math.abs(v.value))+2),-1===v.decimalScale&&delete v.decimalScale,v.value=Object(s.K)(v.value),v.value&&/\d+.9{6}/.test(v.value)&&(v.value=(+v.value).toFixed(5)),a(Object(n.jsx)(r,{...v,renderText:u,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0}));else if(c){const{width:t,height:i}=e;a(Object(n.jsx)(o,{className:"loading-line",width:t,height:i})),b&&l(!1)}const m=window.setTimeout((()=>{j()||a(h)}),6e4);return()=>{clearTimeout(m)}}),[e.value,e.decimalScale,e.suffix]),t}},1968:function(e,t,a){},2153:function(e,t,a){"use strict";a.r(t);var i=a(4),c=a(35),l=a(12),s=a(134),d=a(1043),n=a(132),r=a(27),o=a.p+"static/media/time.0b0bfc0e.svg",j=(a(1968),a(3));t.default=Object(c.b)("wallet","poolManager")(Object(c.c)((function(e){let{lang:t,wallet:a={}}=e;const[c,u]=Object(i.useState)(0),[b,h]=Object(i.useState)(!0),v=Object(s.c)(),[m,O]=Object(i.useState)({}),x=async()=>{if(a.isConnected()){let e=await r.a.request("getDeriBalance",[a.detail.chainId,a.detail.account]);u(e)}};return Object(i.useEffect)((()=>{x(),(async()=>{if(a.isConnected()){let e=await r.a.request("getUserInfoAllForAirDrop",[a.detail.account]),t=1e3*e.deadline;O(e),h(!e.valid);let i=new Date;i.getTime()>=t&&h(!0),i.getTime()>=1647e9&&h(!0)}})()}),[a,a.detail]),Object(j.jsx)("div",{className:"airdrop-box",children:Object(j.jsx)("div",{className:"airdrop-info",children:Object(j.jsxs)("div",{className:"airdrop-info-box",children:[Object(j.jsx)("div",{className:"airdrop-title",children:t.title}),Object(j.jsxs)("div",{className:"wallet-address",children:[Object(j.jsx)("span",{className:"blue-logo"}),Object(l.i)(a.detail.account)]}),Object(j.jsxs)("div",{className:"wallet-balance",children:[t["wallet-balance"]," : ",Object(j.jsx)(d.a,{value:c,decimalScale:0,thousandSeparator:!0})," DERI"]}),Object(j.jsxs)("div",{className:"airdrop-time",children:[Object(j.jsx)("div",{className:"time-logo",children:Object(j.jsx)("img",{src:o,alt:""})}),Object(j.jsxs)("div",{className:"time-text",children:[Object(j.jsxs)("div",{className:"time-title",children:[Object(j.jsx)("div",{children:t["start-time"]}),Object(j.jsx)("div",{children:t["expire-time"]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"2022-03-09 10:00:00 UTC"}),Object(j.jsx)("div",{children:"2022-03-11 12:00:00 UTC"})]})]})]}),Object(j.jsx)("div",{className:"claim",children:Object(j.jsx)(n.a,{fontWeight:"bold",disabled:b,label:t.claim,width:"277",height:"72",fontSize:"32",onClick:async()=>{if(!m.valid)return void v.error(t["no-deri-to-claim"]);if(!Object(l.f)(a.detail.chainId,m.chainId))return void v.error(t["please-switch-to-BSC-to-claim-deri"]);let e=await r.a.request("mintAirdrop",[m.chainId,a.detail.account],{includeResponse:!0});e.success||v.error(t["claim-failed"]),e.success&&h(!0),x()}})})]})})})})))}}]);
//# sourceMappingURL=23.86e0238a.chunk.js.map