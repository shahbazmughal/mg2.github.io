(self.webpackChunk_elegantstack_gatsby_starter_flexiblocks=self.webpackChunk_elegantstack_gatsby_starter_flexiblocks||[]).push([[988],{986:function(e,t,n){e.exports=n(6469)},4343:function(e,t,n){"use strict";var o=n(3770),r=n(5310),i=n(2627),s=n(8260),a=n(2944),l=n(9132),c=n(3638),u=n(6196);e.exports=function(e){return new Promise((function(t,n){var d=e.data,f=e.headers;o.isFormData(d)&&delete f["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";f.Authorization="Basic "+btoa(m+":"+h)}var g=a(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),s(g,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var o="getAllResponseHeaders"in p?l(p.getAllResponseHeaders()):null,i={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:o,config:e,request:p};r(t,n,i),p=null}},p.onabort=function(){p&&(n(u("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){n(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(u(t,e,"ECONNABORTED",p)),p=null},o.isStandardBrowserEnv()){var v=(e.withCredentials||c(g))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;v&&(f[e.xsrfHeaderName]=v)}if("setRequestHeader"in p&&o.forEach(f,(function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete f[t]:p.setRequestHeader(t,e)})),o.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(x){if("json"!==e.responseType)throw x}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),n(e),p=null)})),d||(d=null),p.send(d)}))}},6469:function(e,t,n){"use strict";var o=n(3770),r=n(4611),i=n(707),s=n(7815);function a(e){var t=new i(e),n=r(i.prototype.request,t);return o.extend(n,i.prototype,t),o.extend(n,t),n}var l=a(n(4470));l.Axios=i,l.create=function(e){return a(s(l.defaults,e))},l.Cancel=n(3320),l.CancelToken=n(7949),l.isCancel=n(5962),l.all=function(e){return Promise.all(e)},l.spread=n(9569),l.isAxiosError=n(5160),e.exports=l,e.exports.default=l},3320:function(e){"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},7949:function(e,t,n){"use strict";var o=n(3320);function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new o(e),t(n.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r((function(t){e=t})),cancel:e}},e.exports=r},5962:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},707:function(e,t,n){"use strict";var o=n(3770),r=n(8260),i=n(6802),s=n(5821),a=n(7815);function l(e){this.defaults=e,this.interceptors={request:new i,response:new i}}l.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},l.prototype.getUri=function(e){return e=a(this.defaults,e),r(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),o.forEach(["post","put","patch"],(function(e){l.prototype[e]=function(t,n,o){return this.request(a(o||{},{method:e,url:t,data:n}))}})),e.exports=l},6802:function(e,t,n){"use strict";var o=n(3770);function r(){this.handlers=[]}r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r},2944:function(e,t,n){"use strict";var o=n(411),r=n(4592);e.exports=function(e,t){return e&&!o(t)?r(e,t):t}},6196:function(e,t,n){"use strict";var o=n(9226);e.exports=function(e,t,n,r,i){var s=new Error(e);return o(s,t,n,r,i)}},5821:function(e,t,n){"use strict";var o=n(3770),r=n(1334),i=n(5962),s=n(4470);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=r(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),o.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return a(e),t.data=r(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(a(e),t&&t.response&&(t.response.data=r(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},9226:function(e){"use strict";e.exports=function(e,t,n,o,r){return e.config=t,n&&(e.code=n),e.request=o,e.response=r,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},7815:function(e,t,n){"use strict";var o=n(3770);e.exports=function(e,t){t=t||{};var n={},r=["url","method","data"],i=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function l(e,t){return o.isPlainObject(e)&&o.isPlainObject(t)?o.merge(e,t):o.isPlainObject(t)?o.merge({},t):o.isArray(t)?t.slice():t}function c(r){o.isUndefined(t[r])?o.isUndefined(e[r])||(n[r]=l(void 0,e[r])):n[r]=l(e[r],t[r])}o.forEach(r,(function(e){o.isUndefined(t[e])||(n[e]=l(void 0,t[e]))})),o.forEach(i,c),o.forEach(s,(function(r){o.isUndefined(t[r])?o.isUndefined(e[r])||(n[r]=l(void 0,e[r])):n[r]=l(void 0,t[r])})),o.forEach(a,(function(o){o in t?n[o]=l(e[o],t[o]):o in e&&(n[o]=l(void 0,e[o]))}));var u=r.concat(i).concat(s).concat(a),d=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return o.forEach(d,c),n}},5310:function(e,t,n){"use strict";var o=n(6196);e.exports=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(o("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},1334:function(e,t,n){"use strict";var o=n(3770);e.exports=function(e,t,n){return o.forEach(n,(function(n){e=n(e,t)})),e}},4470:function(e,t,n){"use strict";var o=n(3770),r=n(8005),i={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,l={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(a=n(4343)),a),transformRequest:[function(e,t){return r(t,"Accept"),r(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};l.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],(function(e){l.headers[e]={}})),o.forEach(["post","put","patch"],(function(e){l.headers[e]=o.merge(i)})),e.exports=l},4611:function(e){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),o=0;o<n.length;o++)n[o]=arguments[o];return e.apply(t,n)}}},8260:function(e,t,n){"use strict";var o=n(3770);function r(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var s=[];o.forEach(t,(function(e,t){null!=e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,(function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))})))})),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},4592:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},2627:function(e,t,n){"use strict";var o=n(3770);e.exports=o.isStandardBrowserEnv()?{write:function(e,t,n,r,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),o.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),o.isString(r)&&a.push("path="+r),o.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},411:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},5160:function(e){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},3638:function(e,t,n){"use strict";var o=n(3770);e.exports=o.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var o=e;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=o.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},8005:function(e,t,n){"use strict";var o=n(3770);e.exports=function(e,t){o.forEach(e,(function(n,o){o!==t&&o.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[o])}))}},9132:function(e,t,n){"use strict";var o=n(3770),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(o.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=o.trim(e.substr(0,i)).toLowerCase(),n=o.trim(e.substr(i+1)),t){if(s[t]&&r.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},9569:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},3770:function(e,t,n){"use strict";var o=n(4611),r=Object.prototype.toString;function i(e){return"[object Array]"===r.call(e)}function s(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function l(e){if("[object Object]"!==r.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function c(e){return"[object Function]"===r.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===r.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isPlainObject:l,isUndefined:s,isDate:function(e){return"[object Date]"===r.call(e)},isFile:function(e){return"[object File]"===r.call(e)},isBlob:function(e){return"[object Blob]"===r.call(e)},isFunction:c,isStream:function(e){return a(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function n(n,o){l(t[o])&&l(n)?t[o]=e(t[o],n):l(n)?t[o]=e({},n):i(n)?t[o]=n.slice():t[o]=n}for(var o=0,r=arguments.length;o<r;o++)u(arguments[o],n);return t},extend:function(e,t,n){return u(t,(function(t,r){e[r]=n&&"function"==typeof t?o(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},997:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});n(7378);var o=n(5414),r=n(8945),i=n(3059),s=n(9606),a=(n(3605),n(1690)),l=n(4570),c=n(6495),u={wrapper:{position:"relative",bg:"footerBg"},footer:{flexDirection:["column-reverse","row"],justifyContent:"space-between",alignItems:["center","flex-start"],py:5},listBlk:{display:"block",overflowX:"hidden"}},d=function(e){var t=e.content,n=t.text,l=t.images,d=t.collection;return(0,c.tZ)(r.xu,{sx:u.wrapper},(0,c.tZ)(r.W2,{px:"4"},(0,c.tZ)(r.kC,{sx:u.footer,xs:u.listBlk,className:"footerJoint"},(0,c.tZ)(r.xu,{sx:{minWidth:200}},(0,c.tZ)(r.xu,{pb:"1",mb:"2",mt:[4,0]},(0,c.tZ)(o.rU,{to:"/"},(0,c.tZ)(s.Z,{content:{images:l},imageEffect:"fadeIn"}))),(0,c.tZ)(r.xu,{pt:"2",mb:2},(0,c.tZ)(i.Z,{sx:{maxWidth:260},content:null==n?void 0:n[0]})),(0,c.tZ)(r.xu,{pt:"2",mb:[2,4]},"© ",(new Date).getFullYear(),", All Rights Reserved.")),null==d?void 0:d.map((function(e,t){var n=e.text,o=e.buttons;return o&&(0,c.tZ)(r.xu,{key:"item-"+t,mb:"3",xs:u.listBlk,className:"footer-links-block"},(0,c.tZ)(i.Z,{content:null==n?void 0:n[0],variant:"h5",sx:{display:["none","block"]}}),(0,c.tZ)(a.Z,{content:o,variant:"vertical",wrapperStyles:{flexDirection:[null,"column"]}}))})))))};d.defaultProps={menuJustify:"flex-end"};var f=(0,l.Z)(d)},8843:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var o=n(7378),r=n(5414),i=n(6267),s=n(1025),a=n(8945),l=n(2730),c=n(3924),u=n(9606),d=n(1690),f=n(4570),p=n(6495),m={wrapper:{position:"relative",zIndex:10,".nav-container":{bg:"headerBg",position:"fixed",transition:"all 250ms ease-in",py:3},".nav-sticky .nav-container":{bg:"headerActiveBg",boxShadow:"0 0 25px rgba(140,152,164,.25)",py:[3,null,2],".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}},".button-group-button":{minWidth:120,fontSize:1,px:3,py:1}},header:{justifyContent:"space-between",alignItems:"center"},logoContainer:{flexShrink:0,mr:[null,null,3,5]},desktopMenu:{display:["none",null,"block"],minWidth:"auto",flexGrow:1},mobileMenu:{display:["block",null,"none"]}},h=function(e){var t=e.content,n=t.images,f=t.collection,h=e.menuJustify;return(0,p.tZ)(o.Fragment,null,(0,p.tZ)(i.ZP,{enabled:"true",stickyClassName:"nav-sticky",css:(0,s.i)(m.wrapper)},(0,p.tZ)(a.W2,{variant:"full",className:"nav-container"},(0,p.tZ)(a.W2,{px:"4"},(0,p.tZ)(a.kC,{sx:m.header},(0,p.tZ)(a.xu,{sx:m.logoContainer},(0,p.tZ)(r.rU,{to:"/"},(0,p.tZ)(u.Z,{content:{images:n},sx:m.image,imageEffect:"fadeIn"}))),f&&(0,p.tZ)(o.Fragment,null,(0,p.tZ)(a.xu,{sx:m.desktopMenu},(0,p.tZ)(l.Z,{effect:"fadeInDown"},(0,p.tZ)(a.kC,{sx:{alignItems:"center",justifyContent:h}},f.map((function(e,t){var n=e.buttons;return n&&(0,p.tZ)(a.xu,{key:"item-"+t,sx:{"& + &":{ml:4}}},(0,p.tZ)(d.Z,{content:n}))}))))),(0,p.tZ)(a.xu,{sx:m.mobileMenu},(0,p.tZ)(c.Z,{buttonStyle:{svg:{size:32}}},f.map((function(e,t){var n=e.buttons;return n&&(0,p.tZ)(a.xu,{key:"item-"+t,sx:{fontSize:3,".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}}},(0,p.tZ)(d.Z,{content:n,variant:"vertical"}))}))))))))))};h.defaultProps={menuJustify:"flex-end"};var g=(0,f.Z)(h)},3605:function(e,t,n){"use strict";n(7378),n(6495)},6328:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var o=n(7378),r=n(8945),i=n(4886),s=n(1690),a=n(6495),l=function(e){var t,n,l=e.space,c=e.fields,u=e.buttons;return(null==c?void 0:c[0])&&(0,a.tZ)(o.Fragment,null,(0,a.tZ)(i.Z,{space:l}),(0,a.tZ)(r.xu,{variant:"cards.primary",sx:{display:"inline-flex",alignContent:"space-between",bg:"contentBg",borderRadius:"xl",minWidth:["auto",400],p:2}},(0,a.tZ)(r.II,{type:"text",name:c[0].identifier,placeholder:null===(t=c[0].placeholder)||void 0===t?void 0:t.text,sx:{bg:"transparent",px:3,py:0,"::placeholder":{color:(null===(n=c[0].placeholder)||void 0===n?void 0:n.color)||"omegaDark"}}}),(null==u?void 0:u[0])&&(0,a.tZ)(s.Z,{content:u,wrapperStyles:{minWidth:"auto"}})))}},8653:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var o=n(8291),r=n(7378),i=n(315),s=n(8945),a=n(3059),l=n(2730),c=n(4332),u=n(9606),d=(n(1690),n(6328),n(4570)),f=n(6495),p={minH:{minHeight:250},subTitle:{maxWidth:750},smallTitle:{maxWidth:1e3},containerMain:{textAlign:"center",position:"relative",minHeight:250,borderRadius:0,paddingTop:50,color:"white",marginTop:"5.5rem"},content:{flexDirection:"column",size:"full",alignItems:"center",justifyContent:"center",py:4},overlay:{size:"full",bg:"omegaDarker",opacity:.75,position:"absolute",borderRadius:0,top:0,zIndex:-1},image:{position:"absolute",top:0,bottom:0,width:"100%",height:"300px",zIndex:-2}},m=(0,d.Z)((function(e){var t,n,o=e.content,r=o.container,d=o.text,m=(o.buttons,o.form,o.images);return(0,f.tZ)(s.W2,{variant:"full",sx:p.containerMain},(0,f.tZ)(s.kC,{sx:Object.assign({},p.content,{minHeight:null!==250&&null!==(t=250[0])&&void 0!==t&&t.src?null===(n=(0,i.d)(m[0].src))||void 0===n?void 0:n.height:void 0})},(0,f.tZ)(l.Z,{effect:"fadeInDown"},(0,f.tZ)(a.Z,{content:null==d?void 0:d[0],sx:{bg:"omegaDarker",display:"inline-block",maxWidth:"100%",padding:"10px 25px",color:"#FFF"},px:"0",mb:"3"}),(0,f.tZ)(a.Z,{content:null==d?void 0:d[1],mb:"4",sx:p.smallTitle,mx:"auto"}),(0,f.tZ)(a.Z,{content:null==d?void 0:d.slice(2),mx:"auto"}))),(0,f.tZ)(c.Z,{content:r,sx:p.overlay,className:"block-overlay"}),(0,f.tZ)(s.xu,{sx:p.image},(0,f.tZ)(u.Z,{loading:"eager",content:{images:m},sx:{size:"full",borderRadius:0},imageEffect:"fadeIn"})))})),h=n(8110),g=n(8062),v=n(4886),x=n(8843),Z=n(997),b=n(5541),y=n(1025),w=n(6140),C={flexBasis:["1",null,"1/2"],alignItems:"center",justifyContent:"center",p:[3,4],":nth-of-type(even)":{borderLeftStyle:"solid",borderLeftColor:"rgba(113, 128, 150, 0.2)",borderLeftWidth:[0,null,null,"sm"]}};(0,d.Z)((function(e){var t=e.content,n=t.text,o=t.container,i=t.collection;return(0,f.tZ)(s.W2,{sx:{textAlign:"center"}},(0,f.tZ)(c.Z,{content:o,variant:"cards.paper-lg"},n&&i&&(0,f.tZ)(v.Z,{space:3}),i&&(0,f.tZ)(r.Fragment,null,(0,f.tZ)(v.Z,{space:1}),(0,f.tZ)(s.kC,{sx:{flexWrap:"wrap"}},null==i?void 0:i.map((function(e,t){var n=e.text,o=e.icon;return(0,f.tZ)(s.xu,{key:"item-"+t,css:(0,y.i)(C)},(null==n?void 0:n[0])&&(0,f.tZ)(s.kC,{sx:{alignItems:"center",mb:3}},(0,f.tZ)(w.Z,{content:o,size:"sm",mr:"3"}),(0,f.tZ)(a.Z,{content:n[0],mb:"0"})),(0,f.tZ)(s.xu,{ml:2,sx:{textAlign:"left"}},(0,f.tZ)(a.Z,{content:null==n?void 0:n[1]})))}))))))}));function k(e){return console.log(e),(0,f.tZ)("div",{className:"toast "+e.type,onClick:e.onClick},(0,f.tZ)("div",{className:"toastcheck"},(0,f.tZ)("svg",{"aria-hidden":"true",height:"14",width:"14",viewBox:"0 0 12 16",className:"error-svg"},(0,f.tZ)("path",{fill:"#FFF",fillRule:"evenodd",d:"M5.05.01c.81 2.17.41 3.38-.52 4.31C3.55 5.37 1.98 6.15.9 7.68c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.01 8.68 2.15 5.05.02L5.03 0l.02.01z"})),(0,f.tZ)("svg",{"aria-hidden":"true",height:"14",width:"14",viewBox:"0 0 12 16",className:"success-svg"},(0,f.tZ)("path",{fill:"#FFF",fillRule:"evenodd",d:"M12 5.5l-8 8-4-4L1.5 8 4 10.5 10.5 4 12 5.5z"}))),(0,f.tZ)("div",{className:"taoast-content"},e.content),(0,f.tZ)("div",{role:"button",class:"toast__dismiss"},(0,f.tZ)("svg",{"aria-hidden":"true",height:"16",width:"14",viewBox:"0 0 14 16"},(0,f.tZ)("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"}))))}var j=n(986),N=n.n(j),E={listItem:{flexBasis:["1",null,"1/2"],alignItems:"center",justifyContent:"center",p:[3,4],":nth-of-type(even)":{borderLeftStyle:"solid",borderLeftColor:"rgba(113, 128, 150, 0.2)",borderLeftWidth:[0,null,null,"sm"]}},button:{backgroundColor:"rgba(255, 255, 255, 0)",color:"#333"},fIcon:{paddingLeft:"10px",paddingTop:"8px"},w50:{width:"50%",maxWidth:"100%",flex:"0 0 auto",marginTop:"calc(2rem)",paddingLeft:"calc(2rem)",paddingRight:"calc(2rem)"},w100:{width:"100%",maxWidth:"100%",flex:"0 0 auto",marginTop:"calc(2rem)",paddingLeft:"calc(2rem)",paddingRight:"calc(2rem)"},wrow:{display:"flex",flexWrap:"wrap"},mb0:{marginBottom:0},mb30:{marginBottom:"30px"}},S=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];(0,r.useEffect)((function(){fetch("http://ip-api.com/json").then((function(e){e.json().then((function(e){d(Object.assign({},u,{ip_address:e.query}))}))})).catch((function(e){console.log(e)}))}),[]);var o=r.useState({fullname:"",email:"",phoneno:"",subject:"",message:""}),i=o[0],a=o[1],l=r.useState({fullname:"",email:"",phoneno:"",subject:"",message:"",valid_fullname:"",valid_email:"",valid_phoneno:"",valid_subject:"",valid_message:"",nameMsg:"hide",emailMsg:"hide",phoneMsg:"hide",subjectMsg:"hide",messageMsg:"hide",ip_address:"",url:window.location.href,toast:!1}),u=l[0],d=l[1],p=function(e){return function(t){var n,o;d(Object.assign({},u,((n={})[e]=t.target.value,n))),a(Object.assign({},i,((o={})[e]=t.target.value,o)))}},m=(0,r.useState)({submitting:!1,status:null}),h=(m[0],m[1]),g=function(e,t,o){h({submitting:!1,status:{ok:e,msg:t}}),e&&(o.reset(),n(!1),d(Object.assign({},u,{fullname:"",email:"",phoneno:"",subject:"",message:"",valid_fullname:"",valid_email:"",valid_phoneno:"",valid_subject:"",valid_message:"",nameMsg:"hide",emailMsg:"hide",phoneMsg:"hide",subjectMsg:"hide",messageMsg:"hide",toast:!0})),a(Object.assign({},i,{fullname:"",email:"",phoneno:"",subject:"",message:""})),setTimeout((function(){d(Object.assign({},u,{toast:!1}))}),3e3))};return(0,f.tZ)(s.W2,{sx:{textAlign:"center"}},(0,f.tZ)(c.Z,{variant:"cards.paper-lg"},1==t?(0,f.tZ)("div",{className:"loading",id:"loading"},(0,f.tZ)("div",{className:"loader"})):(0,f.tZ)(r.Fragment,null),1==u.toast?(0,f.tZ)(k,{content:"Contact Form successfully submitted!",type:"success",onClick:function(){return d(Object.assign({},u,{toast:!1}))}}):(0,f.tZ)(r.Fragment,null),(0,f.tZ)("h2",{className:"css-8idint",style:E.mb0},"Contact Us"),(0,f.tZ)("div",{className:"css-1xmmrjk",style:E.mb30},"PLEASE COMPLETE AND SUBMIT THE SHORT FORM BELOW TO SCHEDULE A FREE, ",(0,f.tZ)("br",null),"BUSINESS CONSULTATION WITH ONE OF OUR EXPERTS."),(0,f.tZ)("form",{onSubmit:function(e){e.preventDefault(),n(!0);var t=e.target;return""===i.fullname?(console.log("Name -Not OK"),d(Object.assign({},u,{valid_fullname:"is-invalid",nameMsg:"show"})),n(!1),!1):(""!==i.fullname&&(console.log("Name -OK"),d(Object.assign({},u,{valid_fullname:"is-valid",nameMsg:"hide"}))),""===i.email?(console.log("Email -Not OK"),d(Object.assign({},u,{valid_email:"is-invalid",emailMsg:"show",valid_fullname:"is-valid",nameMsg:"hide"})),n(!1),!1):(""!==i.email&&(console.log("Email -OK"),d(Object.assign({},u,{valid_email:"is-valid",emailMsg:"hide",valid_fullname:"is-valid",nameMsg:"hide"}))),""===i.phoneno?(console.log("Phone -Not OK"),d(Object.assign({},u,{valid_phoneno:"is-invalid",phoneMsg:"show",valid_email:"is-valid",emailMsg:"hide",valid_fullname:"is-valid",nameMsg:"hide"})),n(!1),!1):(""!==i.phoneno&&(console.log("Phone -OK"),d(Object.assign({},u,{valid_phoneno:"is-valid",phoneMsg:"hide",valid_email:"is-valid",emailMsg:"hide",valid_fullname:"is-valid",nameMsg:"hide"}))),h({submitting:!0}),void N()({method:"post",url:"https://shahbaz.hostingshouse.com/php/contact/curl.php",data:new FormData(t)}).then((function(e){g(!0,"Thanks!",t)})).catch((function(e){g(!1,e.response.data.error,t)})))))},method:"post"},(0,f.tZ)(s.xu,{style:E.wrow},(0,f.tZ)(s.xu,{style:E.w50},(0,f.tZ)(s.xu,{variant:"forms.field",className:"fieldBlk "+u.valid_fullname},(0,f.tZ)("div",{style:E.fIcon},(0,f.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"css-1dy5z9e"},(0,f.tZ)("circle",{fill:"none",cx:"12",cy:"7",r:"3"}),(0,f.tZ)("path",{d:"M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z"}))),(0,f.tZ)(s.II,{type:"text",name:"fullname",placeholder:"Full Name",onChange:p("fullname"),value:i.fullname})),(0,f.tZ)("span",{className:"error-block error "+u.nameMsg},"This field is required")),(0,f.tZ)(s.xu,{style:E.w50},(0,f.tZ)(s.xu,{variant:"forms.field",className:"fieldBlk "+u.valid_email},(0,f.tZ)("div",{style:E.fIcon},(0,f.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"css-1dy5z9e"},(0,f.tZ)("path",{d:"M20,4H4C2.897,4,2,4.897,2,6v12c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M20,6v0.511 l-8,6.223L4,6.512V6H20z M4,18V9.044l7.386,5.745C11.566,14.93,11.783,15,12,15s0.434-0.07,0.614-0.211L20,9.044L20.002,18H4z"}))),(0,f.tZ)(s.II,{type:"email",name:"email",placeholder:"Email Address",onChange:p("email"),value:i.email})),(0,f.tZ)("span",{className:"error-block error "+u.emailMsg},"Email Address is required")),(0,f.tZ)(s.xu,{style:E.w50},(0,f.tZ)(s.xu,{variant:"forms.field",className:"fieldBlk "+u.valid_phoneno},(0,f.tZ)("div",{style:E.fIcon},(0,f.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:""},(0,f.tZ)("path",{d:"M17.707,12.293c-0.391-0.391-1.023-0.391-1.414,0l-1.594,1.594c-0.739-0.22-2.118-0.72-2.992-1.594 s-1.374-2.253-1.594-2.992l1.594-1.594c0.391-0.391,0.391-1.023,0-1.414l-4-4c-0.391-0.391-1.023-0.391-1.414,0L3.581,5.005 c-0.38,0.38-0.594,0.902-0.586,1.435c0.023,1.424,0.4,6.37,4.298,10.268s8.844,4.274,10.269,4.298c0.005,0,0.023,0,0.028,0 c0.528,0,1.027-0.208,1.405-0.586l2.712-2.712c0.391-0.391,0.391-1.023,0-1.414L17.707,12.293z M17.58,19.005 c-1.248-0.021-5.518-0.356-8.873-3.712c-3.366-3.366-3.692-7.651-3.712-8.874L7,4.414L9.586,7L8.293,8.293 C8.054,8.531,7.952,8.875,8.021,9.205c0.024,0.115,0.611,2.842,2.271,4.502s4.387,2.247,4.502,2.271 c0.333,0.071,0.674-0.032,0.912-0.271L17,14.414L19.586,17L17.58,19.005z"}))),(0,f.tZ)(s.II,{type:"text",name:"phoneno",placeholder:"Phone No",onChange:p("phoneno"),value:i.phoneno})),(0,f.tZ)("span",{className:"error-block error "+u.phoneMsg},"Phone No is required")),(0,f.tZ)(s.xu,{style:E.w50},(0,f.tZ)(s.xu,{variant:"forms.field",className:"fieldBlk "+u.valid_subject},(0,f.tZ)("div",{style:E.fIcon},(0,f.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},(0,f.tZ)("path",{d:"M7 7H17V9H7zM7 11H14V13H7z"}),(0,f.tZ)("path",{d:"M20,2H4C2.897,2,2,2.897,2,4v18l5.333-4H20c1.103,0,2-0.897,2-2V4C22,2.897,21.103,2,20,2z M20,16H6.667L4,18V4h16V16z"}))),(0,f.tZ)(s.II,{type:"text",name:"subject",placeholder:"Subject",onChange:p("subject"),value:i.subject})),(0,f.tZ)("span",{className:"error-block error "+u.subjectMsg},"Phone No is required")),(0,f.tZ)(s.xu,{style:E.w100},(0,f.tZ)(s.xu,{variant:"forms.field"},(0,f.tZ)("div",{style:E.fIcon},(0,f.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},(0,f.tZ)("path",{d:"M5,18v3.766l1.515-0.909l0,0L11.277,18H16c1.103,0,2-0.897,2-2V8c0-1.103-0.897-2-2-2H4C2.897,6,2,6.897,2,8v8 c0,1.103,0.897,2,2,2H5z M4,8h12v8h-5.277L7,18.234V16H4V8z"}),(0,f.tZ)("path",{d:"M20,2h-1h-2.002H8C6.897,2,6,2.897,6,4h10.586H18c1.103,0,2,0.897,2,2v1.414V12v2c1.103,0,2-0.897,2-2V7V5V4 C22,2.897,21.103,2,20,2z"}))),(0,f.tZ)(s.II,{type:"multiline",name:"message",placeholder:"Message",onChange:p("message"),value:i.message}))),(0,f.tZ)("input",{type:"hidden",name:"url",value:u.url}),(0,f.tZ)("input",{type:"hidden",name:"ip_address",value:u.ip_address}),(0,f.tZ)("input",{type:"hidden",name:"insert_data",value:"1"}),(0,f.tZ)(s.xu,{style:E.w100},(0,f.tZ)(s.zx,{type:"submit"},"Lets Talk"))))))},O={colors:{background:"#FFFFFF",headerBg:"transparent",footerBg:"#f1f3f8"}},M=function(e){var t=e.data.allBlockContent,n=(0,b.c)(null==t?void 0:t.nodes);return(0,f.tZ)(h.Z,(0,o.Z)({theme:O},e),(0,f.tZ)(g.Z,{title:"SMS Marketing and Beyond",description:""}),(0,f.tZ)(x.Z,{content:n.header}),(0,f.tZ)(m,{content:n.team}),(0,f.tZ)(v.Z,{space:"5"}),(0,f.tZ)(S,null),(0,f.tZ)(v.Z,{space:"5"}),(0,f.tZ)(Z.Z,{content:n.footer}))}}}]);
//# sourceMappingURL=component---packages-themes-gatsby-theme-flexiblocks-src-pages-contact-us-index-jsx-193f1bf373d68ba1f7e0.js.map