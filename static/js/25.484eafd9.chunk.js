(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[25],{1362:function(e,t,a){"use strict";var c,i,n=a(21),r=a(213),s=a(42),l=a(6),d=a(63),o=a(9),u=(a(70),a(1445)),j=a(51),b=a(19),h=a(15),p=a(4),v=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],x=Object(j.a)(u.a)(c||(c=Object(d.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),f=j.a.div(i||(i=Object(d.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(o.useState)(Object(p.jsx)("span",{className:"loading-line"})),a=Object(l.a)(t,2),c=a[0],i=a[1],d=Object(o.useState)(!0),u=Object(l.a)(d,2),j=u[0],O=u[1],m=function(){var t=e.allowZero;return"object"!==Object(s.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},w=function(e){return e&&e.replace(/\.$/,"")};return Object(o.useEffect)((function(){var t=e.allowZero,a=(e.wallet,e.closeShowLoadingEffectAfterLoaded),c=e.defaultValue,s=void 0===c?"--":c,l=Object(r.a)(e,v);if(m())l.decimalScale>0&&l.value&&/\d+\.0*[1-9]+/.test(l.value)&&0===+Object(h.bg)(l.value).toFixed(+l.decimalScale||2)&&(l.decimalScale=Object(b.d)(Math.abs(l.value))+2),(-1===l.decimalScale||0===+l.value&&t)&&delete l.decimalScale,l.value=Object(b.K)(l.value),l.value&&/\d+.9{6}/.test(l.value)&&(l.value=(+l.value).toFixed(5)),i(Object(p.jsx)(x,Object(n.a)(Object(n.a)({},l),{},{renderText:w,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(j){var d=e.width,o=e.height;i(Object(p.jsx)(f,{className:"loading-line",width:d,height:o})),a&&O(!1)}var u=window.setTimeout((function(){m()||i(s)}),6e4);return function(){clearTimeout(u)}}),[e.value,e.decimalScale,e.suffix]),c}},2328:function(e,t,a){},2567:function(e,t,a){"use strict";a.r(t);var c=a(2),i=a(6),n=a(0),r=a.n(n),s=a(9),l=a(44),d=a(19),o=a(183),u=a(1362),j=a(182),b=a(39),h=a.p+"static/media/time.77d9d1c0.svg",p=a.p+"static/media/pToken.f82ededf.svg",v=(a(2328),a(4));t.default=Object(l.b)("wallet","poolManager")(Object(l.c)((function(e){var t=e.lang,a=e.wallet,n=void 0===a?{}:a,l=e.type,x=void 0===l?"deri":l,f=Object(s.useState)(0),O=Object(i.a)(f,2),m=O[0],w=O[1],g=Object(s.useState)(!0),N=Object(i.a)(g,2),k=N[0],S=N[1],T=Object(o.c)(),C=Object(s.useState)({}),I=Object(i.a)(C,2),y=I[0],E=I[1],A=Object(s.useState)(!1),U=Object(i.a)(A,2),q=U[0],D=U[1],V=Object(s.useState)(!0),L=Object(i.a)(V,2),P=L[0],B=L[1],F=Object(s.useState)(!0),H=Object(i.a)(F,2),M=H[0],R=H[1],Z=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isConnected()){e.next=5;break}return e.next=3,b.a.request("getDeriBalance",[n.detail.chainId,n.detail.account]);case 3:t=e.sent,w(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.request("getUserInfoAllForAirDrop",[n.detail.account]);case 2:t=e.sent,a=1e3*t.deadline,E(t),S(!t.valid),(c=new Date).getTime()>=a&&S(!0),c.getTime()>=1647e9&&S(!0);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(c.a)(r.a.mark((function e(){var a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("pToken"!==x){e.next=8;break}return e.next=3,b.a.request("airdropPTokenV3",[n.detail.chainId,n.detail.account],{includeResponse:!0});case 3:(a=e.sent).success||T.error(t["claim-failed"]),a.success&&(T.success("Claim Airdrop",{timeout:5e3,isTransaction:!0,transactionHash:a.response.data.transactionHash,link:"".concat(n.blockExploreUrl,"/tx/").concat(a.response.data.transactionHash),title:"Claim Airdrop Executed"}),S(!0)),e.next=20;break;case 8:if(y.valid){e.next=11;break}return T.error(t["no-deri-to-claim"]),e.abrupt("return");case 11:if(Object(d.f)(n.detail.chainId,y.chainId)){e.next=14;break}return T.error(t["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 14:return e.next=16,b.a.request("mintAirdrop",[y.chainId,n.detail.account],{includeResponse:!0});case 16:(c=e.sent).success||T.error(t["claim-failed"]),c.success&&S(!0),Z();case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.request("isUserInPTokenWhiteListV3",[n.detail.chainId,n.detail.account]);case 2:t=e.sent,D(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.request("isPTokenAirdroppedV3",[n.detail.chainId,n.detail.account]);case 2:t=e.sent,B(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.request("isUserPTokenExistV3",[n.detail.chainId,n.detail.account]);case 2:t=e.sent,R(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){n.isConnected()&&(Z(),"pToken"===x?(W(),z(),G()):$())}),[n,n.detail,x]),Object(s.useEffect)((function(){!q||M||P||((new Date).getTime()>=16497576e5?S(!0):S(!1))}),[q,M,P]),Object(v.jsx)("div",{className:"airdrop-box",children:Object(v.jsx)("div",{className:"airdrop-info",children:Object(v.jsxs)("div",{className:"airdrop-info-box",children:[Object(v.jsx)("div",{className:"airdrop-title",children:t.title}),Object(v.jsxs)("div",{className:"wallet-address",children:[Object(v.jsx)("span",{className:"blue-logo"}),Object(d.i)(n.detail.account)]}),Object(v.jsxs)("div",{className:"wallet-balance",children:[t["wallet-balance"]," : ",Object(v.jsx)(u.a,{value:m,decimalScale:0,thousandSeparator:!0})," DERI"]}),"pToken"===x&&Object(v.jsxs)("div",{className:"airdrop-time position-text",children:[Object(v.jsx)("div",{className:"time-logo",children:Object(v.jsx)("img",{src:p,alt:""})}),Object(v.jsx)("div",{className:"time-text",children:Object(v.jsxs)("div",{className:"time-title",children:[Object(v.jsx)("div",{children:"Get free mBTC^2 perpetual"}),Object(v.jsx)("div",{children:"powers position"})]})})]}),"pToken"===x&&Object(v.jsxs)("div",{className:"airdrop-time position",children:[Object(v.jsx)("div",{className:"time-logo",children:Object(v.jsx)("img",{src:h,alt:""})}),Object(v.jsxs)("div",{className:"time-text",children:[Object(v.jsxs)("div",{className:"time-title",children:[Object(v.jsx)("div",{children:t["start-time"]}),Object(v.jsx)("div",{children:t["expire-time"]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:"2022-04-08 10:00:00 UTC"}),Object(v.jsx)("div",{children:"2022-04-12 10:00:00 UTC"})]})]})]}),"deri"===x&&Object(v.jsxs)("div",{className:"airdrop-time",children:[Object(v.jsx)("div",{className:"time-logo",children:Object(v.jsx)("img",{src:h,alt:""})}),Object(v.jsxs)("div",{className:"time-text",children:[Object(v.jsxs)("div",{className:"time-title",children:[Object(v.jsx)("div",{children:t["start-time"]}),Object(v.jsx)("div",{children:t["expire-time"]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:"2022-03-09 10:00:00 UTC"}),Object(v.jsx)("div",{children:"2022-03-11 12:00:00 UTC"})]})]})]}),Object(v.jsx)("div",{className:"claim",children:Object(v.jsx)(j.a,{fontWeight:"bold",disabled:k,label:t.claim,width:"277",height:"72",fontSize:"32",onClick:J})})]})})})})))}}]);
//# sourceMappingURL=25.484eafd9.chunk.js.map