(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[30],{1890:function(e,t,s){},2140:function(e,t,s){"use strict";s.r(t);var l=s(5),a=s(38),o=s(1639),c=s(29),r=(s(257),s(1581),s(1890),s(3));t.default=Object(a.b)("wallet","poolManager")(Object(a.c)((function(e){let{lang:t,wallet:s={},poolManager:a}=e;const[i,d]=Object(l.useState)("amm"),[n,j]=Object(l.useState)(!1),[p,b]=Object(l.useState)(t["deri-pool-title"]),[O,h]=Object(l.useState)([]),[m,u]=Object(l.useState)(!1),[f,x]=Object(l.useState)([]),[v,N]=Object(l.useState)([]);return Object(l.useEffect)((()=>{s.isConnected()&&(async()=>{let e=[...a.ammPools,...a.lpPools],t=await Promise.all(e.map((async e=>{let t=[e.chainId,e.address,s.detail.account];return!!(await c.a.request("getUserStakeInfo",t)).isStaked&&e})));t=t.filter((e=>e));let l=t.filter((e=>"lp"!==e.type)),o=t.filter((e=>"lp"===e.type));x(l),N(o)})()}),[s.detail,a,i]),Object(l.useEffect)((()=>{b(n?t["open-pool-title"]:t["deri-pool-title"])}),[n]),Object(l.useEffect)((()=>{a.load()}),[]),Object(l.useEffect)((()=>{h(a.retiredPools)}),[a.pools]),Object(r.jsx)("div",{className:"pool-box",children:Object(r.jsx)("div",{className:"pool-info",children:Object(r.jsxs)("div",{className:"left",children:[Object(r.jsx)("div",{className:"left-header-info",children:Object(r.jsxs)("div",{className:"pool-title",children:[Object(r.jsx)("div",{className:"pool-title-text",children:p}),Object(r.jsxs)("div",{className:"pool-title-select-text",children:[!n&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"pool-test-des",children:t["pool-title-des-one"]}),Object(r.jsx)("div",{className:"pool-test-des",children:t["pool-title-des-two"]})]}),n&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"pool-test-des",children:t["open-pool-title-des-one"]}),Object(r.jsx)("div",{className:"pool-test-des",children:t["open-pool-title-des-two"]})]})]})]})}),Object(r.jsxs)("div",{className:"pool-card-claim-bg",children:[Object(r.jsx)("div",{className:"retired-hint",children:Object(r.jsxs)("div",{children:["Several V2 markets ( ",Object(r.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://deri.io/#/trade/options/retired",children:"Options"})," , ",Object(r.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://deri.io/#/trade/futures/retired",children:"Fut Main & Fut Inno-BUSD "})," pools) are no longer supported, please close position and remove your collaterals.",Object(r.jsx)("br",{})," For V1 and Premining markets, please visit ",Object(r.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://v2deri.io/#/retired",children:"here"}),"  to close position and remove your collaterals."]})}),Object(r.jsx)("div",{className:"pool-card",children:O.map(((e,l)=>Object(r.jsx)(o.a,{wallet:s,lang:t,pool:e},l)))}),Object(r.jsx)("div",{className:!0})]})]})})})})))}}]);
//# sourceMappingURL=30.f4570149.chunk.js.map