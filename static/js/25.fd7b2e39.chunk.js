(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[25],{1375:function(e,t,c){"use strict";var n,a,s=c(22),i=c(322),r=c(54),d=c(9),l=c(63),o=c(8),j=(c(77),c(1431)),b=c(57),u=c(20),m=c(17),h=c(4),O=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],g=Object(b.a)(j.a)(n||(n=Object(l.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),x=b.a.span(a||(a=Object(l.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(o.useState)(Object(h.jsx)("span",{className:"loading-line"})),c=Object(d.a)(t,2),n=c[0],a=c[1],l=Object(o.useState)(!0),j=Object(d.a)(l,2),b=j[0],f=j[1],v=function(){var t=e.allowZero;return"object"!==Object(r.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},p=function(e){return e&&e.replace(/\.$/,"")};return Object(o.useEffect)((function(){var t=e.allowZero,c=(e.wallet,e.closeShowLoadingEffectAfterLoaded),n=e.defaultValue,r=void 0===n?"--":n,d=Object(i.a)(e,O);if(v())d.decimalScale>0&&d.value&&/\d+\.0*[1-9]+/.test(d.value)&&!t&&0===+Object(m.bg)(d.value).toFixed(+d.decimalScale||2)&&(d.decimalScale=Object(u.e)(Math.abs(d.value))+2),(-1===d.decimalScale||0===+d.value&&t)&&delete d.decimalScale,d.value=/e(\+|=)?/.test(d.value)?Object(u.K)(d.value):""+d.value,d.value&&/\d+.9{6}/.test(d.value)&&(d.value=(+d.value).toFixed(5)),a(Object(h.jsx)(g,Object(s.a)(Object(s.a)({},d),{},{renderText:p,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(b){var l=e.width,o=e.height;a(Object(h.jsx)(x,{className:"loading-line",width:l,height:o})),c&&f(!1)}var j=window.setTimeout((function(){v()||a(r)}),r===d.value?0:6e4);return function(){clearTimeout(j)}}),[e.value,e.decimalScale,e.suffix]),n}},1437:function(e,t,c){"use strict";c.d(t,"a",(function(){return b}));var n,a=c(22),s=c(63),i=c(8),r=c(57),d=c(17),l=c(247),o=c(4),j=r.a.div(n||(n=Object(s.a)(["\ndisplay : flex;\nfont-size : 14px;\nalign-items : center;\nbackground: rgba(85, 119, 253, 0.1);\nborder-radius: 4px;\njustify-content: space-between;\ninput {\n  background: transparent;\n  border-radius: 4px;\n  // min-width: 240px;\n  border: 0;\n  width : ",";\n  height: ",";\n  color : #E0ECFF;\n  font-size : 18px;\n  padding-left: 16px;\n}\ninput:focus {\n  outline: none;\n}\n.unit {\n  margin-right: ",";\n}\n"])),(function(e){return e.inputWidth}),(function(e){return e.inputHeight}),(function(e){return e.unitPadding}));function b(e){var t=e.value,c=e.unit,n=e.unitTip,s=e.max,r=e.step,b=e.onChange,u=e.styles,m=void 0===u?{}:u,h=e.disableNegtive,O=void 0===h||h,g=e.focus,x=e.placeholder,f=void 0===x?"":x,v=e.unitPadding,p=void 0===v?"24px":v,N=e.minTradeVolume,w=e.decimal,k=void 0===w?2:w,I=e.readOnly,_=e.inputWidth,C=void 0===_?"50%":_,S=e.inputHeight,y=void 0===S?"56px":S,T=e.className,F=e.disabled,W=void 0!==F&&F,E=e.onBlur,q=e.onFocus,D=Object(i.useRef)(null);return Object(i.useEffect)((function(){D.current.setCustomValidity(""),D.current&&g&&D.current.focus()}),[g]),Object(o.jsxs)(j,{unitPadding:p,inputWidth:C,inputHeight:y,className:T,style:Object(a.a)({},m),children:[Object(o.jsx)("input",{placeholder:f,type:"number",title:"",onKeyPress:function(e){46!==e.which&&8!==e.which&&0!==e.which&&(e.which<48||e.which>57)&&e.preventDefault()},onBlur:E,onFocus:q,disabled:W,value:t,step:isNaN(r)?0:r,ref:D,onChange:function(e){var t="\\d+\\.\\d{0,".concat(k,"}$"),c=new RegExp(t),n=e.target.value;if(s&&Object(d.bg)(n).gt(s))b&&b(s);else if(O&&(n<0||isNaN(n)))b&&b("");else if(n){if(N>=1)if(n/N>=1)b&&b(Object(d.bg)(n).div(N).integerValue()*N);else b&&b(n*N);else if(/\d+\./.test(n)&&!c.test(n)){var a=n.substring(0,n.indexOf(".")+1+k);b&&b(a)}else b&&b(n)}else b&&b(n)},readOnly:I}),Object(o.jsx)("div",{className:"unit",children:n?Object(o.jsx)(l.a,{tip:n,text:c}):c})]})}},2318:function(e,t,c){},2319:function(e,t,c){},2549:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(9),s=c(0),i=c.n(s),r=c(8),d=c(48),l=c(17),o=c(1437),j=c(61),b=c(186),u=c(13),m=c(189),h=c(187),O=(c(2318),c(4));function g(){return Object(O.jsx)("div",{class:"sleepContentView",children:Object(O.jsx)("div",{class:"circle"})})}var x=c(336),f=c(503),v=c(511),p=c.p+"static/media/stage-one.7a1f5b00.svg",N=c.p+"static/media/stage-two.768445a6.svg",w=c.p+"static/media/stage-three.ee3fc1c4.svg",k=c(44),I=c.p+"static/media/succeed.02ebda03.svg",_=c.p+"static/media/faild.e2923f7c.svg";function C(e){var t=e.lang,c=e.wallet,s=e.amount,d=e.balance,l=e.initialize,o=e.isClaim,x=e.setSending,f=e.sending,v=e.setAmount,C=e.setIsClaim,y=e.isWalletConnected,T=Object(m.a)(),F=Object(h.c)(),W=Object(j.g)(),E=Object(r.useState)(!1),q=Object(a.a)(E,2),D=q[0],R=q[1],z=Object(r.useState)(!1),J=Object(a.a)(z,2),L=J[0],V=J[1],A=Object(r.useState)(!1),P=Object(a.a)(A,2),U=P[0],$=P[1],B=Object(r.useState)({}),H=Object(a.a)(B,2),Z=H[0],K=H[1],M=Object(r.useState)({}),G=Object(a.a)(M,2),Q=G[0],X=G[1],Y=Object(r.useState)(!1),ee=Object(a.a)(Y,2),te=ee[0],ce=ee[1],ne=Object(r.useState)(Object(O.jsx)(b.a,{type:u.q,className:"button-bridge",fontSize:"18",label:t.approve})),ae=Object(a.a)(ne,2),se=ae[0],ie=ae[1],re=function(){c.connect()},de=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.isConnected()){e.next=6;break}return e.next=3,k.a.request("getUserWormholeSignature",[c.detail.account]);case 3:(t=e.sent).valid&&(c.switchNetwork(T[t.toChainId]),C(!0)),V(t.valid);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=Object(n.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==s&&0!==s){e.next=3;break}return F.error(t["amount-must-be-greater-than-zero"]),e.abrupt("return");case 3:if(!(+s>d)){e.next=6;break}return F.error(t["there-is-not-enough-amount"]),e.abrupt("return");case 6:if(y.isFromConnected){e.next=9;break}return F.error("".concat(t["send-finished-one"]," ").concat(S(l.from_chainId,t).netWork," ").concat(t["send-finished-two"])),e.abrupt("return");case 9:return x(!0),$(!1),K({stageOne:!1}),e.next=14,k.a.request("freeze",[c.detail.chainId,c.detail.account,l.to_chainId,s],{includeResponse:!0});case 14:e.sent.success?(ie(Object(O.jsx)(b.a,{type:u.q,className:"button-bridge",label:t.processing})),K({stageOne:!0,stageTwo:!1}),window.setInterval((function(){de()}),3e3)):($(!0),x(!1));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe=function(){var e=Object(n.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y.isToConnected){e.next=3;break}return F.error("".concat(t["send-finished-one"]," ").concat(S(l.to_chainId,t).netWork," ").concat(t["send-finished-two"])),e.abrupt("return");case 3:return ce(!0),$(!1),X({stageOne:!1}),e.next=8,k.a.request("mintDeri",[c.detail.chainId,c.detail.account],{includeResponse:!0});case 8:e.sent.success?(X({stageOne:!0,stageTwo:!1}),ie(Object(O.jsx)(b.a,{type:u.q,className:"button-bridge",label:t.processing})),window.setInterval((function(){de()}),3e3)):(ce(!1),$(!0));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),je=function(){W.push("/bridge")},be=function(){var e=Object(n.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.request("unlockDeri",[c.detail.chainId,c.detail.account],{includeResponse:!0});case 2:e.sent.success?(R(!0),ue()):(R(!1),F.error(t["approve-faild"]));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.isConnected()){e.next=5;break}return e.next=3,k.a.request("isDeriUnlocked",[c.detail.chainId,c.detail.account]);case 3:t=e.sent,R(t.isUnlocked);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){c.isConnected()&&(ue(),de())}),[c.detail,l]),Object(r.useEffect)((function(){L?K({stageOne:!0,stageTwo:!0,stageThree:!0}):te&&(X({stageOne:!0,stageTwo:!0,stageThree:!0}),x(!1),v(""))}),[L,l]),Object(r.useEffect)((function(){var e;e=c.isConnected()?L?Object(O.jsx)(b.a,{type:u.q,className:"button-bridge",label:t.claim,onClick:oe}):D?te?Object(O.jsxs)("button",{className:"complete",onClick:je,children:[" ",Object(O.jsx)("img",{alt:"",src:I})," ",t.complete," "]}):Object(O.jsx)(b.a,{type:u.q,className:"button-bridge",label:t.send,onClick:le}):Object(O.jsx)(b.a,{type:u.q,className:"button-bridge",label:t.approve,onClick:be}):Object(O.jsx)(b.a,{type:u.q,className:"button-bridge",label:t["connect-wallet"],onClick:re}),ie(e)}),[L,c.detail,D,s,l,y,te]),Object(O.jsxs)("div",{className:"operate",children:[Object(O.jsxs)("div",{className:"from-to-title",children:[t.bridge," ",s,"  DERI ",t.from.toLowerCase()," ",l.from_network," ",t.to.toLowerCase()," ",l.to_network]}),Object(O.jsx)("div",{className:"btn",children:se}),Object(O.jsxs)("div",{className:"hint",children:[!o&&Object(O.jsxs)("div",{className:"sending",children:[Object(O.jsxs)("div",{className:"stage",children:[Object(O.jsxs)("div",{className:"stage-img-text",children:[Object(O.jsxs)("div",{className:"stage-img",children:[" ",Object(O.jsx)("img",{alt:"",src:p})]}),Object(O.jsxs)("div",{className:"stage-text",children:[t["sending-deri-to-wormhole"]," "]})]}),Object(O.jsxs)("div",{className:"ok-pending",children:[f&&Object(O.jsx)(O.Fragment,{children:Z.stageOne?Object(O.jsx)("div",{className:"succeed",children:Object(O.jsx)("img",{alt:"",src:I})}):Object(O.jsx)("div",{className:"pending",children:Object(O.jsx)(g,{})})}),!f&&!U&&Object(O.jsx)("div",{className:"staic"}),U&&Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:_,alt:""})})]})]}),Object(O.jsxs)("div",{className:"stage",children:[Object(O.jsxs)("div",{className:"stage-img-text",children:[Object(O.jsxs)("div",{className:"stage-img",children:[" ",Object(O.jsx)("img",{alt:"",src:N})]}),Object(O.jsx)("div",{className:"stage-text",children:t["waiting-for-bridge-to-sign"]})]}),Object(O.jsxs)("div",{className:"ok-pending",children:[f&&Object(O.jsx)(O.Fragment,{children:Z.stageOne&&Object(O.jsx)(O.Fragment,{children:Z.stageTwo?Object(O.jsx)("div",{className:"succeed",children:Object(O.jsx)("img",{alt:"",src:I})}):Object(O.jsx)("div",{className:"pending",children:Object(O.jsx)(g,{})})})}),(!f||!Z.stageOne)&&Object(O.jsx)("div",{className:"staic"})]})]}),Object(O.jsxs)("div",{className:"stage",children:[Object(O.jsxs)("div",{className:"stage-img-text",children:[Object(O.jsxs)("div",{className:"stage-img",children:[" ",Object(O.jsx)("img",{alt:"",src:w})]}),Object(O.jsx)("div",{className:"stage-text",children:t["bridge-signed"]})]}),Object(O.jsxs)("div",{className:"ok-pending",children:[f&&Object(O.jsx)(O.Fragment,{children:Z.stageOne&&Z.stageTwo&&Object(O.jsx)(O.Fragment,{children:Z.stageThree?Object(O.jsx)("div",{className:"succeed",children:Object(O.jsx)("img",{alt:"",src:I})}):Object(O.jsx)("div",{className:"pending",children:Object(O.jsx)(g,{})})})}),(!f||!Z.stageTwo)&&Object(O.jsx)("div",{className:"staic"})]})]})]}),o&&Object(O.jsxs)("div",{className:"claiming",children:[Object(O.jsxs)("div",{className:"stage",children:[Object(O.jsxs)("div",{className:"stage-img-text",children:[Object(O.jsxs)("div",{className:"stage-img",children:[" ",Object(O.jsx)("img",{alt:"",src:p})]}),Object(O.jsx)("div",{className:"stage-text",children:t["claim-deri-ing"]})]}),Object(O.jsxs)("div",{className:"ok-pending",children:[te&&Object(O.jsx)(O.Fragment,{children:Q.stageOne?Object(O.jsx)("div",{className:"succeed",children:Object(O.jsx)("img",{alt:"",src:I})}):Object(O.jsx)("div",{className:"pending",children:Object(O.jsx)(g,{})})}),!te&&!U&&Object(O.jsx)("div",{className:"staic"}),U&&Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:_,alt:""})})]})]}),Object(O.jsxs)("div",{className:"stage",children:[Object(O.jsxs)("div",{className:"stage-img-text",children:[Object(O.jsxs)("div",{className:"stage-img",children:[" ",Object(O.jsx)("img",{alt:"",src:N})]}),Object(O.jsxs)("div",{className:"stage-text",children:[t["waiting-for-bridge-to-sync"]," "]})]}),Object(O.jsxs)("div",{className:"ok-pending",children:[te&&Object(O.jsx)(O.Fragment,{children:Q.stageOne&&Object(O.jsx)(O.Fragment,{children:Q.stageTwo?Object(O.jsx)("div",{className:"succeed",children:Object(O.jsx)("img",{alt:"",src:I})}):Object(O.jsx)("div",{className:"pending",children:Object(O.jsx)(g,{})})})}),(!te||!Q.stageOne)&&Object(O.jsx)("div",{className:"staic"})]})]}),Object(O.jsxs)("div",{className:"stage",children:[Object(O.jsxs)("div",{className:"stage-img-text",children:[Object(O.jsxs)("div",{className:"stage-img",children:[" ",Object(O.jsx)("img",{alt:"",src:w})]}),Object(O.jsx)("div",{className:"stage-text",children:t.finished})]}),Object(O.jsxs)("div",{className:"ok-pending",children:[te&&Object(O.jsx)(O.Fragment,{children:Q.stageOne&&Q.stageTwo&&Object(O.jsx)(O.Fragment,{children:Q.stageThree?Object(O.jsx)("div",{className:"succeed",children:Object(O.jsx)("img",{alt:"",src:I})}):Object(O.jsx)("div",{className:"pending",children:Object(O.jsx)(g,{})})})}),(!te||!Q.stageTwo)&&Object(O.jsx)("div",{className:"staic"})]})]})]})]})]})}function S(e,t){var c={};switch(e=+e){case 1:c.netWork=t.ethereum,c.chainId=1,c.img=f.default;break;case 56:c.netWork=t.bsc,c.chainId=56,c.img=x.default;break;case 128:c.netWork=t.heco,c.chainId=128,c.img=v.default;break;case 97:c.netWork=t["bsc-testnet"],c.chainId=97,c.img=x.default;break;case 3:c.netWork=t.ropsten,c.chainId=3,c.img=f.default;break;case 256:c.netWork=t["heco-testnet"],c.chainId=256,c.img=v.default}return c}var y=c(1375),T=c.p+"static/media/arrow-left.3530813d.svg",F=c.p+"static/media/disabled-down.3f7df0de.svg",W=c(504),E=c(248),q=c(329),D=c(517),R=c(76),z=c.n(R);c(2319);function J(e,t){var c={};switch(e=+e){case 1:c.netWork=t.ethereum,c.chainId=1,c.img=f.default;break;case 56:c.netWork=t.bsc,c.chainId=56,c.img=W.default;break;case 128:c.netWork=t.heco,c.chainId=128,c.img=v.default;break;case 97:c.netWork=t["bsc-testnet"],c.chainId=97,c.img=W.default;break;case 3:c.netWork=t.ropsten,c.chainId=3,c.img=f.default;break;case 256:c.netWork=t["heco-testnet"],c.chainId=256,c.img=v.default}return c}t.default=Object(d.b)("wallet")(Object(d.c)((function(e){var t=e.wallet,c=e.lang,s=Object(r.useState)(""),d=Object(a.a)(s,2),j=d[0],b=d[1],u=Object(r.useState)(0),m=Object(a.a)(u,2),h=m[0],g=m[1],x="prod"!==l.DeriEnv.get(),p=x?[{text:c.ropsten,id:3,img:f.default},{text:c["bsc-testnet"],id:97,img:W.default},{text:c["heco-testnet"],id:256,img:v.default}]:[{text:c.ethereum,id:1,img:f.default},{text:c.bsc,id:56,img:W.default},{text:c.heco,id:128,img:v.default}],N=Object(r.useState)(p),w=Object(a.a)(N,2),I=w[0],_=w[1],S=Object(r.useState)(p),R=Object(a.a)(S,2),L=R[0],V=R[1],A=Object(r.useState)(!1),P=Object(a.a)(A,2),U=P[0],$=P[1],B=Object(r.useState)(x?{from_chainId:97,from_network:c["bsc-testnet"],to_chainId:3,to_network:c.ropsten}:{from_chainId:1,from_network:c.ethereum,to_chainId:56,to_network:c.bsc}),H=Object(a.a)(B,2),Z=H[0],K=H[1],M=Object(r.useState)(!1),G=Object(a.a)(M,2),Q=G[0],X=G[1],Y=Object(r.useState)(!1),ee=Object(a.a)(Y,2),te=ee[0],ce=ee[1],ne=Object(r.useState)(!1),ae=Object(a.a)(ne,2),se=ae[0],ie=ae[1],re=Object(r.useState)(J(Z.from_chainId,c).img),de=Object(a.a)(re,2),le=de[0],oe=de[1],je=Object(r.useState)(J(Z.to_chainId,c).img),be=Object(a.a)(je,2),ue=be[0],me=be[1],he=z()("from-network-list",{show:te}),Oe=z()("to-network-list",{show:se}),ge=Object(r.useState)({isFromConnected:!1,isToConnected:!1}),xe=Object(a.a)(ge,2),fe=xe[0],ve=xe[1],pe=function(){var e=Object(n.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=5;break}return e.next=3,k.a.request("getUserWormholeSignature",[t.detail.account]);case 3:(n=e.sent).valid&&(K({from_chainId:n.fromChainId,from_network:J(n.fromChainId,c).netWork,to_chainId:n.toChainId,to_network:J(n.toChainId,c).netWork}),oe(J(n.fromChainId,c).img),me(J(n.toChainId,c).img),b(Object(l.bg)(n.amount,-18).toString()),$(n.valid));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(n.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=5;break}return e.next=3,k.a.request("getDeriBalance",[t.detail.chainId,t.detail.account]);case 3:c=e.sent,g(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){Ne()}),[t.detail,Z]),Object(r.useEffect)((function(){pe()}),[t.detail]),Object(r.useEffect)((function(){var e,n=p.filter((function(e){return e.id===+Z.from_chainId}))[0],a=p.filter((function(e){return e.id!==+Z.from_chainId}))[0],s=p.filter((function(e){return e.id!==+Z.from_chainId}))[1];e=[p.filter((function(e){return e.id===+Z.to_chainId}))[0],p.filter((function(e){return e.id!==+Z.to_chainId}))[0],p.filter((function(e){return e.id!==+Z.to_chainId}))[1]],_([n,a,s]),V(e),oe(J(Z.from_chainId,c).img),me(J(Z.to_chainId,c).img),function(){var e=!!t.isConnected()&&+t.detail.chainId===+Z.from_chainId,c=!!t.isConnected()&&+t.detail.chainId===+Z.to_chainId;ve({isFromConnected:e,isToConnected:c})}()}),[Z,t.detail]),Object(O.jsx)("div",{className:"bridge-big-box",children:Object(O.jsxs)("div",{className:"bridge-box",children:[Object(O.jsxs)("div",{className:"bridge-title",children:[Object(O.jsx)("div",{className:"title",children:c.bridge}),Object(O.jsx)("div",{className:"birdge-des",children:c["bridge-des"]})]}),Object(O.jsxs)("div",{className:"bridge-info",children:[Object(O.jsxs)("div",{className:"select-network-box",children:[Object(O.jsx)("div",{className:"select-network-title",children:c["select-networks"]}),Object(O.jsxs)("div",{className:"select-network-from-to",children:[Object(O.jsxs)("div",{className:"from-network",children:[Object(O.jsx)("div",{className:"from-title",children:c.from}),Object(O.jsxs)("div",{className:"from-dropdown-list",children:[Object(O.jsxs)("div",{className:U?"drop drop-disabled":"drop",onClick:function(){U||ce(!te)},children:[Object(O.jsxs)("div",{className:"network-logo-connected",children:[Object(O.jsx)("img",{src:le,alt:""}),Object(O.jsx)("span",{children:Z.from_network}),Object(O.jsx)("div",{className:Q?"connected-hide":fe.isFromConnected?"connected":"is-connected",children:!Q&&fe.isFromConnected?c.connected:c.unconnected})]}),Object(O.jsx)("img",{className:"down-icon",src:U?F:te?D.default:q.default,alt:""})]}),Object(O.jsx)("ul",{className:he,children:I.map((function(e,t){return Object(O.jsx)(O.Fragment,{children:Z.from_network!==e.text?Object(O.jsx)("li",{className:"wallet-li",onClick:function(){return function(e){var t=JSON.parse(JSON.stringify(Z));t.to_chainId===e.id?(t.from_chainId=Z.to_chainId,t.from_network=Z.to_network,t.to_chainId=Z.from_chainId,t.to_network=Z.from_network):(t.from_chainId=e.id,t.from_network=e.text),K(t),ce(!te)}(e)},children:Object(O.jsxs)("div",{className:"li-logo-network",children:[Object(O.jsx)("img",{alt:"",src:e.img})," ",Object(O.jsxs)("span",{children:[" ",e.text," "]})]})},t):""})}))})]})]}),Object(O.jsx)("div",{className:"arrow",children:Object(O.jsx)("img",{src:T,alt:""})}),Object(O.jsxs)("div",{className:"to-network",children:[Object(O.jsx)("div",{className:"to-title",children:c.to}),Object(O.jsxs)("div",{className:"to-dropdown-list",children:[Object(O.jsxs)("div",{className:U?"drop drop-disabled":"drop",onClick:function(){U||ie(!se)},children:[Object(O.jsxs)("div",{className:"network-logo-connected",children:[Object(O.jsx)("img",{src:ue,alt:""}),Object(O.jsx)("span",{children:Z.to_network}),Object(O.jsx)("div",{className:Q?fe.isToConnected?"connected":"is-connected":"connected-hide",children:Q&&fe.isToConnected?c.connected:c.unconnected})]}),Object(O.jsx)("img",{className:"down-icon",src:U?F:se?D.default:q.default,alt:""})]}),Object(O.jsx)("ul",{className:Oe,children:L.map((function(e,t){return Object(O.jsx)(O.Fragment,{children:Z.to_network!==e.text?Object(O.jsx)("li",{className:"wallet-li",onClick:function(){return function(e){var t=JSON.parse(JSON.stringify(Z));t.from_chainId===e.id?(t.from_chainId=Z.to_chainId,t.from_network=Z.to_network,t.to_chainId=Z.from_chainId,t.to_network=Z.from_network):(t.to_chainId=e.id,t.to_network=e.text),K(t),ie(!se)}(e)},children:Object(O.jsxs)("div",{className:"li-logo-network",children:[Object(O.jsx)("img",{alt:"",src:e.img})," ",Object(O.jsxs)("span",{children:[" ",e.text," "]})]})},t):""})}))})]})]})]})]}),Object(O.jsxs)("div",{className:"set-amount",children:[Object(O.jsx)("div",{className:"set-amount-title",children:c["set-amount"]}),Object(O.jsxs)("div",{className:"set-amount-box",children:[Object(O.jsxs)("div",{className:"input-deri",children:[Object(O.jsx)(o.a,{placeholder:"0",value:j,onChange:function(e){b(e)},disabled:U,className:"input-box"}),Object(O.jsxs)("span",{children:[Object(O.jsx)("img",{alt:"",src:E.default,className:"amount-img"})," DERI"]})]}),Object(O.jsxs)("div",{className:"total-deri",children:[c["total-amount"]," ",Object(O.jsx)(y.a,{value:h,decimalScale:4,thousandSeparator:!0})," DERI"]})]})]}),Object(O.jsx)("div",{className:"bridge-operate-hint",children:Object(O.jsx)(C,{lang:c,sending:U,wallet:t,balance:h,isWalletConnected:fe,amount:j,isClaim:Q,initialize:Z,setIsClaim:X,setSending:$,setAmount:b})}),Object(O.jsx)("div",{className:"bridge-to-polygon",children:Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"birdge-to-polygon-title",children:[c["bridge-to-polygon"],Object(O.jsx)("span",{className:"polygon-title",children:Object(O.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://bridge.arbitrum.io/",children:" Arbitrum"})})," or",Object(O.jsx)("span",{className:"polygon-title",children:Object(O.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://wallet.matic.network/bridge",children:" Polygon"})})]}),Object(O.jsx)("div",{className:"bridge-to-polygon-des",children:c["bridge-to-polygon-des"]})]})})]})]})})})))}}]);
//# sourceMappingURL=25.fd7b2e39.chunk.js.map