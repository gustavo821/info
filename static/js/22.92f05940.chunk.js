(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[22],{1052:function(e,t,a){"use strict";var c=a(5),i=(a(53),a(1133)),s=a(43),l=a(14),n=a(8),d=a(4);const r=Object(s.a)(i.a)`
  width : ${e=>e.width}px;
`,o=s.a.div`
  width : ${e=>/px$/.test(e.width)?e.width:`${e.width}px`};
  height : ${e=>/px$/.test(e.height)?e.height:`${e.height}px`};
`;t.a=function(e){const[t,a]=Object(c.useState)(Object(d.jsx)("span",{className:"loading-line"})),[i,s]=Object(c.useState)(!0),j=()=>{const{allowZero:t}=e;return"object"!==typeof e.value&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},h=e=>e&&e.replace(/\.$/,"");return Object(c.useEffect)((()=>{const{allowZero:t,wallet:c,closeShowLoadingEffectAfterLoaded:b,defaultValue:u="--",...p}=e;if(j())p.decimalScale>0&&!t&&p.value&&/\d+\.0*[1-9]+/.test(p.value)&&0===+Object(n.bg)(p.value).toFixed(+p.decimalScale||2)&&(p.decimalScale=Object(l.d)(Math.abs(p.value))+2),-1===p.decimalScale&&delete p.decimalScale,p.value=Object(l.K)(p.value),p.value&&/\d+.9{6}/.test(p.value)&&(p.value=(+p.value).toFixed(5)),a(Object(d.jsx)(r,{...p,renderText:h,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0}));else if(i){const{width:t,height:c}=e;a(Object(d.jsx)(o,{className:"loading-line",width:t,height:c})),b&&s(!1)}const x=window.setTimeout((()=>{j()||a(u)}),6e4);return()=>{clearTimeout(x)}}),[e.value,e.decimalScale,e.suffix]),t}},1063:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var c=a(43),i=a(1198),s=a.n(i),l=a(115),n=a(14),d=a(1142),r=a(4);const o=c.a.div`
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
`;function j(e){let{text:t,id:a=String((new Date).getTime())+Math.random(),tip:c,multiline:i,html:j,className:h,element:b="",block:u="block",width:p="auto",children:x,tiggerEvent:m}=e;return Object(r.jsxs)(o,{className:h,block:u,isWin:d.isWindows,children:[Object(r.jsx)("div",{className:"text","data-for":a,"data-tip":j?s.a.renderToString(b):c,"data-event":Object(n.y)()?"click":m,"data-html":j,children:t||x}),c&&Object(r.jsx)(l.a,{id:a,width:p,padding:"12",place:"bottom",overridePosition:(e,t,a,c,i,s,l,n)=>{const d=a.getBoundingClientRect(),r=c.getBoundingClientRect();let{x:o,y:j,height:h,width:b}=d;const{left:u,top:p}=e;return o+r.width/2>document.documentElement.clientWidth?o-=Math.abs(b-r.width):o-(r.width-b)/2<0?o-=b:o-=(r.width-b)/2,j+h+r.height>=document.documentElement.clientHeight?j=j+h-r.height:j+=h,o<0&&(o=0),j<0&&(j=0),{top:j,left:o}},html:j,borderRadius:8,multiline:i})]})}},1346:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a(1365),i=a(1347),s=a.n(i),l=a(1363),n=(a(1185),a(28)),d=(a(1348),a(4));function r(e){let{page:t,count:a,onPage:i,pageSize:r,onShowSizeChange:o}=e;return Object(d.jsx)("div",{className:"pagination",children:Object(d.jsx)(c.a,{selectComponentClass:l.a,onChange:i,current:t,total:a,pageSize:r,prevIcon:()=>Object(d.jsx)(n.a,{token:"arrow-left"}),nextIcon:()=>Object(d.jsx)(n.a,{token:"arrow-right"}),showSizeChanger:!0,onShowSizeChange:o,locale:s.a,pageSizeOptions:["10","20","30","50"]})})}},1348:function(e,t,a){},1974:function(e,t,a){},2158:function(e,t,a){"use strict";a.r(t);var c=a(5),i=a(39),s=a(30),l=a(1052),n=a(1063),d=a(14),r=(a(8),a(1345),a(1185),a.p+"static/media/logo-deri.d4c8b6a2.svg"),o=a(1346),j=(a(1974),a(4));t.default=Object(i.b)("wallet")(Object(i.c)((function(e){let{lang:t,wallet:a}=e;const[i,h]=Object(c.useState)(),[b,u]=Object(c.useState)(1),[p,x]=Object(c.useState)([]),[m,O]=Object(c.useState)([]);return Object(c.useEffect)((()=>{let e;e=1===b?p.slice(0,10*b):p.slice(10*(b-1),10*b),O(e)}),[p,b]),Object(c.useEffect)((()=>{a.isConnected()&&(async()=>{let e=await s.a.request("getUserEarnInfo",[a.detail.account,2]);if(e){let t=Math.abs(e.pnl)<1e-10?0:100*(e.pnl-1);h(t)}})(),(async()=>{let e=await s.a.request("getEarnTop50Users",[2]);if(e){let t=e.map((e=>(e.pnl=Math.abs(e.pnl)<1e-10?0:100*(e.pnl-1),e.account=Object(d.i)(e.account),e)));x(t)}})()}),[a.detail,a]),Object(j.jsxs)("div",{className:"testnet-practice",children:[Object(j.jsxs)("div",{className:"practice-info",children:[Object(j.jsx)("div",{className:"practice-title",children:t["practice-to-earn"]}),Object(j.jsx)("div",{className:"practice-time",children:"Mar. 1st 09:00 AM (UTC) \u2014 Mar. 8th 09:00 AM (UTC)"}),Object(j.jsxs)("div",{className:"practice-info-box",children:[Object(j.jsxs)("div",{className:"practice-info-left",children:[Object(j.jsx)("div",{className:"total-rewards-pool",children:Object(j.jsxs)("div",{className:"total-rewards-box",children:[Object(j.jsx)("div",{className:"deri-logo",children:Object(j.jsx)("img",{src:r,alt:"deri"})}),Object(j.jsxs)("div",{className:"total-rewards-num",children:[Object(j.jsx)("div",{className:"total-rewards-pool-title",children:t["total-rewards-pool"]}),Object(j.jsxs)("div",{className:"toatl-rewards-deri",children:[Object(j.jsx)("span",{children:"10,000"}),Object(j.jsx)("span",{className:"deri-text",children:"DERI"})]})]})]})}),Object(j.jsxs)("div",{className:"your-pnl",children:[Object(j.jsx)("span",{children:Object(j.jsx)(n.a,{text:t["your-pnl"],tip:t["your-pnl-tip"],multiline:!0})}),Object(j.jsx)("span",{className:"your-pnl-pen",children:Object(j.jsx)(l.a,{value:i,suffix:"%",decimalScale:2})})]})]}),Object(j.jsxs)("div",{className:"practice-info-right",children:[Object(j.jsxs)("div",{className:"top-pnl-list-box",children:[Object(j.jsx)("div",{className:"top-pnl-list-box-title",children:"Leaderboard"}),Object(j.jsxs)("div",{className:"top-pnl-list",children:[Object(j.jsxs)("div",{className:"top-pnl-list-title",children:[Object(j.jsx)("span",{children:t.no}),Object(j.jsx)("span",{children:t["user-addr"]}),Object(j.jsx)("span",{children:t.pnl})]}),Object(j.jsx)("div",{className:"top-pnl-list-info",children:m.map(((e,t)=>Object(j.jsxs)("div",{className:"top-pnl-list-info-box",children:[Object(j.jsx)("div",{className:"no",children:e.index}),Object(j.jsx)("div",{className:"address",children:e.account}),Object(j.jsx)("div",{className:"pnl",children:Object(j.jsx)(l.a,{value:e.pnl,suffix:"%",decimalScale:2})})]},t)))})]})]}),Object(j.jsxs)("div",{className:"page-box",children:[Object(j.jsx)(o.a,{page:b,onPage:e=>{u(e)},count:p.length,pageSize:10}),Object(j.jsxs)("div",{className:"remind",children:["* ",t["update-every-hour"]]})]})]})]})]}),Object(j.jsx)("div",{className:"detailed-rules",children:Object(j.jsx)("a",{target:"_blank",href:"https://theontoteam.medium.com/1b958bc5228a",rel:"noreferrer",children:t["detailed-rules"]})})]})})))}}]);
//# sourceMappingURL=22.92f05940.chunk.js.map