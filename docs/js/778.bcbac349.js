"use strict";(self["webpackChunkmemo_letter"]=self["webpackChunkmemo_letter"]||[]).push([[778],{778:function(e,t,r){r.r(t),r.d(t,{amplify_s3_album:function(){return K}});r(1703),r(8675),r(3462);var n,i=r(4916),o=r(40),a=r(1814),u=r(4001),s=r(9815),c=r(8035),l=r(4171),f=r(3003),p=r(3463),h=function(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function a(e){try{s(n.next(e))}catch(t){o(t)}}function u(e){try{s(n["throw"](e))}catch(t){o(t)}}function s(e){e.done?r(e.value):i(e.value).then(a,u)}s((n=n.apply(e,t||[])).next())}))},d=function(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(e){return function(t){return s([e,t])}}function s(o){if(r)throw new TypeError("Generator is already executing.");while(a)try{if(r=1,n&&(i=2&o[0]?n["return"]:o[0]?n["throw"]||((i=n["return"])&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(u){o=[6,u],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},y=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),i=0;for(t=0;t<r;t++)for(var o=arguments[t],a=0,u=o.length;a<u;a++,i++)n[i]=o[a];return n},m=new Uint8Array(16);function b(){if(!n&&(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(m)}var g=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function v(e){return"string"===typeof e&&g.test(e)}for(var w=[],k=0;k<256;++k)w.push((k+256).toString(16).substr(1));function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(w[e[t+0]]+w[e[t+1]]+w[e[t+2]]+w[e[t+3]]+"-"+w[e[t+4]]+w[e[t+5]]+"-"+w[e[t+6]]+w[e[t+7]]+"-"+w[e[t+8]]+w[e[t+9]]+"-"+w[e[t+10]]+w[e[t+11]]+w[e[t+12]]+w[e[t+13]]+w[e[t+14]]+w[e[t+15]]).toLowerCase();if(!v(r))throw TypeError("Stringified UUID is invalid");return r}function I(e,t,r){e=e||{};var n=e.random||(e.rng||b)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var i=0;i<16;++i)t[r+i]=n[i];return t}return x(n)}var T=":host{--overlay-bg-color:rgba(0, 0, 0, 0.15)}.album-container{-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;margin:0 auto;padding:0 2rem}.grid-row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:-1rem -1rem;padding-bottom:3rem}.grid-item{position:relative;-ms-flex:1 0 22rem;flex:1 0 22rem;-ms-flex-positive:1;flex-grow:1;margin:1rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}amplify-s3-image{--width:22rem;--height:20rem;border-radius:5px;-o-object-fit:cover;object-fit:cover}.img-overlay{display:none;width:100%;height:21rem;position:absolute;top:0;left:0;background-color:var(--overlay-bg-color)}.grid-item:hover .img-overlay{display:block}",E=new o.k("S3Album"),K=function(){function e(e){var t=this;(0,i.r)(this,e),this.contentType="binary/octet-stream",this.level=s.A.Public,this.picker=!0,this.pickerText=c.T.PICKER_TEXT,this.albumItems=[],this.imgArr={},this.list=function(){return h(t,void 0,void 0,(function(){var e,t,r,n,i,o,a,u;return d(this,(function(s){switch(s.label){case 0:if(e=this,t=e.path,r=void 0===t?"":t,n=e.level,i=e.track,o=e.identityId,E.debug("Album path: "+r),!f.Ke||"function"!==typeof f.Ke.list)throw new Error(l.d);s.label=1;case 1:return s.trys.push([1,3,,4]),[4,f.Ke.list(r,{level:n,track:i,identityId:o})];case 2:return a=s.sent(),this.marshal(a),[3,4];case 3:return u=s.sent(),E.warn(u),[3,4];case 4:return[2]}}))}))},this.marshal=function(e){e.forEach((function(e){var r=e.key.toLowerCase(),n=r.split(".")[1];p.i.has(n)&&(!e.contentType||e.contentType&&"binary/octet-stream"===e.contentType)&&(e.contentType=t.getContentType(e))}));var r=e.filter((function(e){return e.contentType&&e.contentType.startsWith("image/")})),n=t.filter?t.filter(r):r;n=t.sort?t.sort(n):n,t.albumItems=n,E.debug("album items",t.albumItems),t.constructImgArray(t.albumItems)},this.constructImgArray=function(e){e.map((function(e){t.imgArr[""+e["key"]]=e["key"]}))},this.handlePick=function(e){return h(t,void 0,void 0,(function(){var t,r,n,i,o,a,u,s,c,l;return d(this,(function(f){switch(f.label){case 0:t=e.target.files[0],r=this,n=r.path,i=void 0===n?"":n,o=r.level,a=r.track,u=r.fileToKey,s=i+(0,p.c)(t,u),f.label=1;case 1:return f.trys.push([1,3,,4]),[4,(0,p.p)(s,t,o,a,t["type"],E)];case 2:return f.sent(),[3,4];case 3:throw c=f.sent(),E.error(c),new Error(c);case 4:return Object.keys(this.imgArr).includes(s)?(this.albumItems=y(this.albumItems),this.imgArr[s]=s+"-"+I()):(l=y(this.albumItems,this.filter?this.filter([{key:s}]):[{key:s}]),this.albumItems=this.sort?this.sort(l):l),[2]}}))}))}}return e.prototype.getContentType=function(e){return(0,a.rI)(e.key,"image/*")},e.prototype.componentWillLoad=function(){this.list()},e.prototype.render=function(){var e=this;return(0,i.h)("div",null,(0,i.h)("div",{class:"album-container"},(0,i.h)("div",{class:"grid-row"},this.albumItems.map((function(t){return(0,i.h)("div",{class:"grid-item",key:"key-"+t.key},(0,i.h)("amplify-s3-image",{key:e.imgArr[t.key],imgKey:t.key,level:e.level,path:e.path,identityId:e.identityId,track:e.track,handleOnError:e.handleOnError,handleOnLoad:e.handleOnLoad}),(0,i.h)("span",{class:"img-overlay"}))})))),this.picker&&(0,i.h)("amplify-picker",{pickerText:u.o.get(this.pickerText),inputHandler:function(t){return e.handlePick(t)},acceptValue:"image/*"}))},e}();K.style=T},3463:function(e,t,r){r.d(t,{a:function(){return f},c:function(){return s},g:function(){return c},i:function(){return u},p:function(){return p}});r(1703);var n=r(4171),i=r(3003),o=function(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function a(e){try{s(n.next(e))}catch(t){o(t)}}function u(e){try{s(n["throw"](e))}catch(t){o(t)}}function s(e){e.done?r(e.value):i(e.value).then(a,u)}s((n=n.apply(e,t||[])).next())}))},a=function(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(e){return function(t){return s([e,t])}}function s(o){if(r)throw new TypeError("Generator is already executing.");while(a)try{if(r=1,n&&(i=2&o[0]?n["return"]:o[0]?n["throw"]||((i=n["return"])&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(u){o=[6,u],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},u=new Set(["apng","bmp","gif","ico","cur","jpg","jpeg","jfif","pjpeg","pjp","png","svg","tif","tiff","webp"]),s=function(e,t){var r=e.name,n=e.size,i=e.type,o=encodeURI(r);return t&&(o="string"===typeof t?t:"function"===typeof t?t({name:r,size:n,type:i}):encodeURI(JSON.stringify(t)),o||(o="empty_key")),o.replace(/\s/g,"_")},c=function(e,t,r,u,s){return o(void 0,void 0,void 0,(function(){var o,c;return a(this,(function(a){switch(a.label){case 0:if(!i.Ke||"function"!==typeof i.Ke.get)throw new Error(n.d);a.label=1;case 1:return a.trys.push([1,3,,4]),[4,i.Ke.get(e,{level:t,track:r,identityId:u})];case 2:return o=a.sent(),s.debug("Storage image get",o),[2,o];case 3:throw c=a.sent(),new Error(c);case 4:return[2]}}))}))},l=function(e){return new Promise((function(t,r){var n=new FileReader;n.onload=function(){t(n.result)},n.onerror=function(){r("Failed to read file!"),n.abort()},n.readAsText(e)}))},f=function(e,t,r,u,s){return o(void 0,void 0,void 0,(function(){var o,c,f;return a(this,(function(a){switch(a.label){case 0:if(!i.Ke||"function"!==typeof i.Ke.get)throw new Error(n.d);a.label=1;case 1:return a.trys.push([1,4,,5]),[4,i.Ke.get(e,{download:!0,level:t,track:r,identityId:u})];case 2:return o=a.sent(),s.debug(o),[4,l(o["Body"])];case 3:return c=a.sent(),[2,c];case 4:throw f=a.sent(),new Error(f);case 5:return[2]}}))}))},p=function(e,t,r,u,s,c){return o(void 0,void 0,void 0,(function(){var o,l;return a(this,(function(a){switch(a.label){case 0:if(!i.Ke||"function"!==typeof i.Ke.put)throw new Error(n.d);a.label=1;case 1:return a.trys.push([1,3,,4]),[4,i.Ke.put(e,t,{contentType:s,level:r,track:u})];case 2:return o=a.sent(),c.debug("Upload data",o),[3,4];case 3:throw l=a.sent(),new Error(l);case 4:return[2]}}))}))}}}]);
//# sourceMappingURL=778.bcbac349.js.map