(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[28],{1958:function(e,s,c){},2150:function(e,s,c){"use strict";c.r(s),c.d(s,"default",(function(){return b}));var i=c(5),t=c.p+"static/media/down.3d69afba.svg",a=c.p+"static/media/go.1e56dece.svg",d=c.p+"static/media/check.142188b4.svg",l=c.p+"static/media/governance-discussion.7afb067b.svg",n=c.p+"static/media/pool-votes.d93e23cf.svg",j=c.p+"static/media/executive-votes.794e6e67.svg",r=c(29),o=(c(1958),c(95)),v=c(3);function b(e){let{lang:s,getLang:c}=e;const[b,x]=Object(i.useState)(!0),[h,p]=Object(i.useState)(!0),[m,O]=Object(i.useState)("");return Object(i.useEffect)((()=>{(async()=>{let e=await r.a.request("getProposals",[]);e&&O(e.count)})()}),[]),Object(v.jsx)("div",{className:"governance-box",children:Object(v.jsxs)("div",{className:"governance-box-info",children:[Object(v.jsx)("div",{className:"governance-title",children:s.title}),Object(v.jsx)("div",{className:"governance-des",children:s["governance-des"]}),Object(v.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://discord.gg/kb8ZbYgp8M",children:Object(v.jsxs)("div",{className:"active-pool-votes-num",children:[Object(v.jsx)("div",{className:m?"active-num":"no-active-num",children:m})," ",s["active-pool-votes"]]})}),Object(v.jsxs)("div",{className:"active-esectutive-votes-num",children:[Object(v.jsx)("div",{className:"no-active-num",children:"0"}),s["active-esectutive-votes"]]}),Object(v.jsx)("div",{className:"down",children:Object(v.jsx)("img",{src:t,alt:"down"})}),Object(v.jsx)("div",{className:"how-to-participate",children:s["how-to-participate"]}),Object(v.jsxs)("div",{className:"participate-step",children:[Object(v.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://discord.gg/kb8ZbYgp8M",children:Object(v.jsxs)("div",{className:"step",children:[Object(v.jsxs)("div",{className:"step-one-info",children:[Object(v.jsx)("div",{className:"hover-go",children:Object(v.jsx)("img",{src:a,alt:"go"})}),Object(v.jsx)("div",{className:"step-logo",children:Object(v.jsx)("img",{src:l,alt:"discussion"})}),Object(v.jsx)("div",{className:"step-text",children:s["governance-discussion"]})]}),Object(v.jsxs)("div",{className:"hover",children:[Object(v.jsx)("div",{className:"san"}),s["governance-discussion-hover"]]})]})}),Object(v.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://snapshot.org/#/deri.eth",children:Object(v.jsxs)("div",{className:"step",children:[Object(v.jsxs)("div",{className:"step-one-info",children:[Object(v.jsx)("div",{className:"hover-go",children:Object(v.jsx)("img",{src:a,alt:"go"})}),Object(v.jsx)("div",{className:"step-logo",children:Object(v.jsx)("img",{src:n,alt:"discussion"})}),Object(v.jsx)("div",{className:"step-text",children:s["poll-votes"]})]}),Object(v.jsxs)("div",{className:"hover",children:[Object(v.jsx)("div",{className:"san"}),s["poll-votes-hover"]]})]})}),Object(v.jsxs)("div",{className:"step",onClick:()=>{(e=>{if(e){let s=document.getElementById(e);s&&s.scrollIntoView()}})("EXECUTIVEVOTES")},children:[Object(v.jsxs)("div",{className:"step-one-info",children:[Object(v.jsx)("div",{className:"hover-go"}),Object(v.jsx)("div",{className:"step-logo",children:Object(v.jsx)("img",{src:j,alt:"discussion"})}),Object(v.jsx)("div",{className:"step-text",children:s["executive-votes"]})]}),Object(v.jsxs)("div",{className:"hover",children:[Object(v.jsx)("div",{className:"san"}),s["executive-votes-hover"]]})]})]}),Object(v.jsx)("div",{id:"EXECUTIVEVOTES",className:"executive-votes",children:s["executive-votes-l"]}),Object(v.jsxs)("div",{className:"dip-list",children:[Object(v.jsxs)("div",{className:"in-progress-executed",children:[Object(v.jsxs)("div",{className:b?"in-progress check":"in-progress",onClick:()=>x(!b),children:[s["in-progress"],b?Object(v.jsx)("img",{src:d,alt:""}):""]}),Object(v.jsxs)("div",{className:h?"executed check":"executed",onClick:()=>p(!h),children:[s.executed,h?Object(v.jsx)("img",{src:d,alt:""}):""]})]}),h&&Object(v.jsxs)("div",{className:"dip-list-box",children:[Object(v.jsx)(o.b,{to:"/diptwo",children:Object(v.jsxs)("div",{className:"dip-list-box-info",children:[Object(v.jsxs)("div",{className:"dip-list-title",children:[Object(v.jsxs)("div",{className:"title-text",children:[s.dip,"-002"]}),Object(v.jsxs)("div",{className:"dip-executed",children:[Object(v.jsx)("div",{className:"executed-bg"}),"  ",s.executed]})]}),Object(v.jsx)("div",{className:"dip-list-des",children:s["dip-two-des"]}),Object(v.jsx)("div",{className:"leading-option",children:Object(v.jsxs)("span",{children:[s["leading-option"],Object(v.jsx)("span",{className:"winner-option",children:s["dip-two-winner"]}),c("dip-leading-option",{value:"1,440,582 "})]})}),Object(v.jsx)("div",{className:"dip-time",children:s["dip-two-time"]})]})}),Object(v.jsx)(o.b,{to:"/dipone",children:Object(v.jsxs)("div",{className:"dip-list-box-info",children:[Object(v.jsxs)("div",{className:"dip-list-title",children:[Object(v.jsxs)("div",{className:"title-text",children:[s.dip,"-001"]}),Object(v.jsxs)("div",{className:"dip-executed",children:[Object(v.jsx)("div",{className:"executed-bg"}),"  ",s.executed]})]}),Object(v.jsx)("div",{className:"dip-list-des",children:s["dip-one-des"]}),Object(v.jsx)("div",{className:"leading-option",children:Object(v.jsxs)("span",{children:[s["leading-option"],Object(v.jsx)("span",{className:"winner-option",children:s["dip-one-winner"]}),c("dip-leading-option",{value:"334,253"})]})}),Object(v.jsx)("div",{className:"dip-time",children:s["dip-one-time"]})]})})]})]})]})})}}}]);
//# sourceMappingURL=28.a228f958.chunk.js.map