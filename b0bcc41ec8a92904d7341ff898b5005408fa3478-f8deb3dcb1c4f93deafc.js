(self.webpackChunk_elegantstack_gatsby_starter_flexiblocks=self.webpackChunk_elegantstack_gatsby_starter_flexiblocks||[]).push([[935],{986:function(e,t,n){e.exports=n(6469)},4343:function(e,t,n){"use strict";var r=n(3770),o=n(5310),i=n(2627),s=n(8260),a=n(2944),u=n(9132),c=n(3638),f=n(6196);e.exports=function(e){return new Promise((function(t,n){var l=e.data,p=e.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";p.Authorization="Basic "+btoa(h+":"+m)}var g=a(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),s(g,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?u(d.getAllResponseHeaders()):null,i={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:r,config:e,request:d};o(t,n,i),d=null}},d.onabort=function(){d&&(n(f("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){n(f("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(f(t,e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var x=(e.withCredentials||c(g))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;x&&(p[e.xsrfHeaderName]=x)}if("setRequestHeader"in d&&r.forEach(p,(function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(v){if("json"!==e.responseType)throw v}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),n(e),d=null)})),l||(l=null),d.send(l)}))}},6469:function(e,t,n){"use strict";var r=n(3770),o=n(4611),i=n(707),s=n(7815);function a(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var u=a(n(4470));u.Axios=i,u.create=function(e){return a(s(u.defaults,e))},u.Cancel=n(3320),u.CancelToken=n(7949),u.isCancel=n(5962),u.all=function(e){return Promise.all(e)},u.spread=n(9569),u.isAxiosError=n(5160),e.exports=u,e.exports.default=u},3320:function(e){"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},7949:function(e,t,n){"use strict";var r=n(3320);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},5962:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},707:function(e,t,n){"use strict";var r=n(3770),o=n(8260),i=n(6802),s=n(5821),a=n(7815);function u(e){this.defaults=e,this.interceptors={request:new i,response:new i}}u.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},u.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=u},6802:function(e,t,n){"use strict";var r=n(3770);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},2944:function(e,t,n){"use strict";var r=n(411),o=n(4592);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},6196:function(e,t,n){"use strict";var r=n(9226);e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},5821:function(e,t,n){"use strict";var r=n(3770),o=n(1334),i=n(5962),s=n(4470);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return a(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(a(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},9226:function(e){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},7815:function(e,t,n){"use strict";var r=n(3770);e.exports=function(e,t){t=t||{};var n={},o=["url","method","data"],i=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function u(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function c(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=u(void 0,e[o])):n[o]=u(e[o],t[o])}r.forEach(o,(function(e){r.isUndefined(t[e])||(n[e]=u(void 0,t[e]))})),r.forEach(i,c),r.forEach(s,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=u(void 0,e[o])):n[o]=u(void 0,t[o])})),r.forEach(a,(function(r){r in t?n[r]=u(e[r],t[r]):r in e&&(n[r]=u(void 0,e[r]))}));var f=o.concat(i).concat(s).concat(a),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===f.indexOf(e)}));return r.forEach(l,c),n}},5310:function(e,t,n){"use strict";var r=n(6196);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},1334:function(e,t,n){"use strict";var r=n(3770);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},4470:function(e,t,n){"use strict";var r=n(3770),o=n(8005),i={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,u={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(a=n(4343)),a),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){u.headers[e]=r.merge(i)})),e.exports=u},4611:function(e){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},8260:function(e,t,n){"use strict";var r=n(3770);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},4592:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},2627:function(e,t,n){"use strict";var r=n(3770);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},411:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},5160:function(e){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},3638:function(e,t,n){"use strict";var r=n(3770);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},8005:function(e,t,n){"use strict";var r=n(3770);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},9132:function(e,t,n){"use strict";var r=n(3770),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},9569:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},3770:function(e,t,n){"use strict";var r=n(4611),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function s(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function u(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function c(e){return"[object Function]"===o.call(e)}function f(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isPlainObject:u,isUndefined:s,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return a(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:f,merge:function e(){var t={};function n(n,r){u(t[r])&&u(n)?t[r]=e(t[r],n):u(n)?t[r]=e({},n):i(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)f(arguments[r],n);return t},extend:function(e,t,n){return f(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},3247:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});n(7378);var r=n(315),o=n(3314),i=n(3059),s=n(2730),a=n(4332),u=n(9606),c=(n(1690),n(6328),n(3253)),f=n(6495),l={minH:{minHeight:250},subTitle:{maxWidth:750},smallTitle:{maxWidth:1e3},containerMain:{textAlign:"center",position:"relative",minHeight:250,borderRadius:0,paddingTop:50,color:"white",marginTop:"5.5rem"},content:{flexDirection:"column",size:"full",alignItems:"center",justifyContent:"center",py:4},overlay:{size:"full",bg:"omegaDarker",opacity:.75,position:"absolute",borderRadius:0,top:0,zIndex:-1},image:{position:"absolute",top:0,bottom:0,width:"100%",height:"300px",zIndex:-2}},p=(0,c.Z)((function(e){var t,n,c=e.content,p=c.container,d=c.text,h=(c.buttons,c.form,c.images);return(0,f.tZ)(o.W2,{variant:"full",sx:l.containerMain},(0,f.tZ)(o.kC,{sx:Object.assign({},l.content,{minHeight:null!==250&&null!==(t=250[0])&&void 0!==t&&t.src?null===(n=(0,r.d)(h[0].src))||void 0===n?void 0:n.height:void 0})},(0,f.tZ)(s.Z,{effect:"fadeInDown"},(0,f.tZ)(i.Z,{content:null==d?void 0:d[0],sx:{bg:"omegaDarker",display:"inline-block",maxWidth:"100%",padding:"10px 25px",color:"#FFF"},px:"0",mb:"3"}),(0,f.tZ)(i.Z,{content:null==d?void 0:d[1],mb:"4",sx:l.smallTitle,mx:"auto"}),(0,f.tZ)(i.Z,{content:null==d?void 0:d.slice(2),mx:"auto"}))),(0,f.tZ)(a.Z,{content:p,sx:l.overlay,className:"block-overlay"}),(0,f.tZ)(o.xu,{sx:l.image},(0,f.tZ)(u.Z,{loading:"eager",content:{images:h},sx:{size:"full",borderRadius:0},imageEffect:"fadeIn"})))}))},997:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});n(7378);var r=n(5414),o=n(3314),i=n(3059),s=n(9606),a=(n(3605),n(1690)),u=n(3253),c=n(6495),f={wrapper:{position:"relative",bg:"footerBg"},footer:{flexDirection:["column-reverse","row"],justifyContent:"space-between",alignItems:["center","flex-start"],py:5},listBlk:{display:"block",overflowX:"hidden"}},l=function(e){var t=e.content,n=t.text,u=t.images,l=t.collection;return(0,c.tZ)(o.xu,{sx:f.wrapper},(0,c.tZ)(o.W2,{px:"4"},(0,c.tZ)(o.kC,{sx:f.footer,xs:f.listBlk,className:"footerJoint"},(0,c.tZ)(o.xu,{sx:{minWidth:200}},(0,c.tZ)(o.xu,{pb:"1",mb:"2",mt:[4,0]},(0,c.tZ)(r.rU,{to:"/"},(0,c.tZ)(s.Z,{content:{images:u},imageEffect:"fadeIn"}))),(0,c.tZ)(o.xu,{pt:"2",mb:2},(0,c.tZ)(i.Z,{sx:{maxWidth:260},content:null==n?void 0:n[0]})),(0,c.tZ)(o.xu,{pt:"2",mb:[2,4]},"© ",(new Date).getFullYear(),", All Rights Reserved.")),null==l?void 0:l.map((function(e,t){var n=e.text,r=e.buttons;return r&&(0,c.tZ)(o.xu,{key:"item-"+t,mb:"3",xs:f.listBlk,className:"footer-links-block"},(0,c.tZ)(i.Z,{content:null==n?void 0:n[0],variant:"h5",sx:{display:["none","block"]}}),(0,c.tZ)(a.Z,{content:r,variant:"vertical",wrapperStyles:{flexDirection:[null,"column"]}}))})))))};l.defaultProps={menuJustify:"flex-end"};var p=(0,u.Z)(l)},8843:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(7378),o=n(5414),i=n(6267),s=n(1025),a=n(3314),u=n(2730),c=n(3924),f=n(9606),l=n(1690),p=n(3253),d=n(6495),h={wrapper:{position:"relative",zIndex:10,".nav-container":{bg:"headerBg",position:"fixed",transition:"all 250ms ease-in",py:3},".nav-sticky .nav-container":{bg:"headerActiveBg",boxShadow:"0 0 25px rgba(140,152,164,.25)",py:[3,null,2],".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}},".button-group-button":{minWidth:120,fontSize:1,px:4,py:2}},header:{justifyContent:"space-between",alignItems:"center"},logoContainer:{flexShrink:0,mr:[null,null,3,5]},desktopMenu:{display:["none",null,"block"],minWidth:"auto",flexGrow:1},mobileMenu:{display:["block",null,"none"]}},m=function(e){var t=e.content,n=t.images,p=t.collection,m=e.menuJustify;return(0,d.tZ)(r.Fragment,null,(0,d.tZ)(i.ZP,{enabled:"true",stickyClassName:"nav-sticky",css:(0,s.i)(h.wrapper)},(0,d.tZ)(a.W2,{variant:"full",className:"nav-container"},(0,d.tZ)(a.W2,{px:"4"},(0,d.tZ)(a.kC,{sx:h.header},(0,d.tZ)(a.xu,{sx:h.logoContainer},(0,d.tZ)(o.rU,{to:"/"},(0,d.tZ)(f.Z,{content:{images:n},sx:h.image,imageEffect:"fadeIn"}))),p&&(0,d.tZ)(r.Fragment,null,(0,d.tZ)(a.xu,{sx:h.desktopMenu},(0,d.tZ)(u.Z,{effect:"fadeInDown"},(0,d.tZ)(a.kC,{sx:{alignItems:"center",justifyContent:m}},p.map((function(e,t){var n=e.buttons;return n&&(0,d.tZ)(a.xu,{key:"item-"+t,sx:{"& + &":{ml:4}}},(0,d.tZ)(l.Z,{content:n}))}))))),(0,d.tZ)(a.xu,{sx:h.mobileMenu},(0,d.tZ)(c.Z,{buttonStyle:{svg:{size:32}}},p.map((function(e,t){var n=e.buttons;return n&&(0,d.tZ)(a.xu,{key:"item-"+t,sx:{fontSize:3,".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}}},(0,d.tZ)(l.Z,{content:n,variant:"vertical"}))}))))))))))};m.defaultProps={menuJustify:"flex-end"};var g=(0,p.Z)(m)},3605:function(e,t,n){"use strict";n(7378),n(6495)},6328:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7378),o=n(3314),i=n(4886),s=n(1690),a=n(6495),u=function(e){var t,n,u=e.space,c=e.fields,f=e.buttons;return(null==c?void 0:c[0])&&(0,a.tZ)(r.Fragment,null,(0,a.tZ)(i.Z,{space:u}),(0,a.tZ)(o.xu,{variant:"cards.primary",sx:{display:"inline-flex",alignContent:"space-between",bg:"contentBg",borderRadius:"xl",minWidth:["auto",400],p:2}},(0,a.tZ)(o.II,{type:"text",name:c[0].identifier,placeholder:null===(t=c[0].placeholder)||void 0===t?void 0:t.text,sx:{bg:"transparent",px:3,py:0,"::placeholder":{color:(null===(n=c[0].placeholder)||void 0===n?void 0:n.color)||"omegaDark"}}}),(null==f?void 0:f[0])&&(0,a.tZ)(s.Z,{content:f,wrapperStyles:{minWidth:"auto"}})))}}}]);
//# sourceMappingURL=b0bcc41ec8a92904d7341ff898b5005408fa3478-f8deb3dcb1c4f93deafc.js.map