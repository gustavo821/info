(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[40],{1205:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(91),o=r(120);var i=function(t){var e,r;function n(e){var r,n=(void 0===e?{}:e).supportedChainIds;return(r=t.call(this)||this).supportedChainIds=n,r}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var i=n.prototype;return i.emitUpdate=function(t){this.emit(o.a.Update,t)},i.emitError=function(t){this.emit(o.a.Error,t)},i.emitDeactivate=function(){this.emit(o.a.Deactivate)},n}(n.EventEmitter)},2276:function(t,e,r){"use strict";r.r(e),r.d(e,"PortisConnector",(function(){return a}));var n=r(1205),o=r(46);function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var c={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan",100:"xdai",30:"orchid",31:"orchidTestnet",99:"core",77:"sokol",61:"classic",8:"ubiq",108:"thundercore",18:"thundercoreTestnet",163:"lightstreams",122:"fuse",15001:"maticTestnet"},a=function(t){var e,n;function a(e){var r,n=e.dAppId,a=e.networks,s=e.config,u=void 0===s?{}:s,h=a.map((function(t){return"number"===typeof t?t:Number(t.chainId)}));return h.every((function(t){return!!c[t]}))||Object(o.a)(!1),(r=t.call(this,{supportedChainIds:h})||this).dAppId=n,r.networks=a,r.config=u,r.handleOnLogout=r.handleOnLogout.bind(i(r)),r.handleOnActiveWalletChanged=r.handleOnActiveWalletChanged.bind(i(r)),r.handleOnError=r.handleOnError.bind(i(r)),r}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var s=a.prototype;return s.handleOnLogout=function(){this.emitDeactivate()},s.handleOnActiveWalletChanged=function(t){this.emitUpdate({account:t})},s.handleOnError=function(t){this.emitError(t)},s.activate=function(){try{var t=function(){return e.portis.onLogout(e.handleOnLogout),e.portis.onActiveWalletChanged(e.handleOnActiveWalletChanged),e.portis.onError(e.handleOnError),Promise.resolve(e.portis.provider.enable().then((function(t){return t[0]}))).then((function(t){return{provider:e.portis.provider,account:t}}))},e=this,n=function(){if(!e.portis)return Promise.resolve(r.e(44).then(r.t.bind(null,2107,7)).then((function(t){var e;return null!=(e=null==t?void 0:t.default)?e:t}))).then((function(t){e.portis=new t(e.dAppId,"number"===typeof e.networks[0]?c[e.networks[0]]:e.networks[0],e.config)}))}();return Promise.resolve(n&&n.then?n.then(t):t())}catch(o){return Promise.reject(o)}},s.getProvider=function(){try{return Promise.resolve(this.portis.provider)}catch(t){return Promise.reject(t)}},s.getChainId=function(){try{return Promise.resolve(this.portis.provider.send("eth_chainId"))}catch(t){return Promise.reject(t)}},s.getAccount=function(){try{return Promise.resolve(this.portis.provider.send("eth_accounts").then((function(t){return t[0]})))}catch(t){return Promise.reject(t)}},s.deactivate=function(){this.portis.onLogout((function(){})),this.portis.onActiveWalletChanged((function(){})),this.portis.onError((function(){}))},s.changeNetwork=function(t,e){try{var r=this;return"number"===typeof t?(c[t]||Object(o.a)(!1),r.portis.changeNetwork(c[t],e),r.emitUpdate({chainId:t})):(r.portis.changeNetwork(t,e),r.emitUpdate({chainId:Number(t.chainId)})),Promise.resolve()}catch(n){return Promise.reject(n)}},s.close=function(){try{var t=this;return Promise.resolve(t.portis.logout()).then((function(){t.emitDeactivate()}))}catch(e){return Promise.reject(e)}},a}(n.a)}}]);
//# sourceMappingURL=40.8a273352.chunk.js.map