"use strict";(self["webpackChunkmemo_letter"]=self["webpackChunkmemo_letter"]||[]).push([[63],{3063:function(t,e,n){n.r(e),n.d(e,{amplify_federated_buttons:function(){return l},amplify_strike:function(){return f}});n(1703);var a=n(4916),i=n(1814),o=n(3356),h=n(6367),r=(n(8035),n(4171)),u=n(6699),l=function(){function t(t){(0,a.r)(this,t),this.authState=o.A.SignIn,this.federated={},this.handleAuthStateChange=u.d}return t.prototype.componentWillLoad=function(){if(!h.g||"function"!==typeof h.g.configure)throw new Error(r.N);var t=h.g.configure().oauth,e=void 0===t?{}:t;e["domain"]?this.federated.oauthConfig=Object.assign(Object.assign({},this.federated.oauthConfig),e):e["awsCognito"]&&(this.federated.oauthConfig=Object.assign(Object.assign({},this.federated.oauthConfig),e["awsCognito"])),e["auth0"]&&(this.federated.auth0Config=Object.assign(Object.assign({},this.federated.auth0Config),e["auth0"]))},t.prototype.render=function(){if(!Object.values(o.A).includes(this.authState))return null;if((0,i.xb)(this.federated))return null;var t=this.federated,e=t.amazonClientId,n=t.auth0Config,h=t.facebookAppId,r=t.googleClientId,u=t.oauthConfig;return(0,a.h)("div",null,r&&(0,a.h)("div",null,(0,a.h)("amplify-google-button",{clientId:r,handleAuthStateChange:this.handleAuthStateChange})),h&&(0,a.h)("div",null,(0,a.h)("amplify-facebook-button",{appId:h,handleAuthStateChange:this.handleAuthStateChange})),e&&(0,a.h)("div",null,(0,a.h)("amplify-amazon-button",{clientId:e,handleAuthStateChange:this.handleAuthStateChange})),u&&(0,a.h)("div",null,(0,a.h)("amplify-oauth-button",{config:u})),n&&(0,a.h)("div",null,(0,a.h)("amplify-auth0-button",{config:n,handleAuthStateChange:this.handleAuthStateChange})))},t}(),d=".sc-amplify-strike-h{--color:var(--amplify-grey);--border-color:var(--amplify-light-grey);--content-background:var(--amplify-white);display:block;width:100%;text-align:center;border-bottom:1px solid var(--border-color);line-height:0.1em;margin:32px 0;color:var(--color)}.strike-content.sc-amplify-strike{background:var(--content-background);padding:0 25px;font-size:var(--amplify-text-sm);font-weight:500}",f=function(){function t(t){(0,a.r)(this,t)}return t.prototype.render=function(){return(0,a.h)("span",{class:"strike-content"},(0,a.h)("slot",null))},t}();f.style=d}}]);
//# sourceMappingURL=63.c2c0bd2b.js.map