(self.webpackChunk_elegantstack_gatsby_starter_flexiblocks=self.webpackChunk_elegantstack_gatsby_starter_flexiblocks||[]).push([[470],{8621:function(e,a,t){"use strict";t.d(a,{Z:function(){return p}});var s=t(7378),i=t(6267),n=t(1025),l=t(3314),o=t(2730),r=t(1690),d=t(3253),m=t(6495),c={wrapper:{position:"relative",zIndex:10,".nav-container":{bg:"#403c56",color:"#d3e4ff",position:"relative",transition:"all 250ms ease-in",py:3},".nav-sticky .nav-container":{bg:"headerActiveBg",boxShadow:"0 0 25px rgba(140,152,164,.25)",py:[1,null,1],".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}},".button-group-button":{minWidth:80,fontSize:"12px",px:"8px",py:"2px"}},header:{justifyContent:"end",alignItems:"right"},desktopMenu:{display:["block",null,"block"],minWidth:"auto",flexGrow:1,color:"#d3e4ff"},mobileMenu:{display:["block",null,"block"],color:"#d3e4ff"}},u=function(e){var a=e.content,t=(a.images,a.collection);e.menuJustify;return(0,m.tZ)("div",{className:"subheader-main"},(0,m.tZ)(i.ZP,{enabled:"true",stickyClassName:"nav-sticky",css:(0,n.i)(c.wrapper)},(0,m.tZ)(l.W2,{variant:"full",className:"nav-container"},(0,m.tZ)(l.W2,{px:"2"},(0,m.tZ)(l.kC,{sx:c.header},t&&(0,m.tZ)(s.Fragment,null,(0,m.tZ)(l.xu,{sx:c.desktopMenu},(0,m.tZ)(o.Z,{effect:"fadeInDown"},(0,m.tZ)(l.kC,{sx:{alignItems:"center",justifyContent:"end"}},t.map((function(e,a){var t=e.buttons;return t&&(0,m.tZ)(l.xu,{key:"item-"+a,sx:{"& + &":{ml:2}}},(0,m.tZ)(r.Z,{content:t}))})))))))))))};u.defaultProps={menuJustify:"end"};var p=(0,d.Z)(u)},6165:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return M}});var s=t(8291),i=t(7378),n=t(8110),l=t(8062),o=t(4886),r=t(8843),d=t(8621),m=t(997),c=t(3247),u=t(5541),p=t(3314),h=t(4332),v=t(6495);function g(e){return(0,v.tZ)("div",{className:"toast "+e.type,onClick:e.onClick},(0,v.tZ)("div",{className:"toastcheck"},(0,v.tZ)("div",{className:"css-animslide"}),(0,v.tZ)("svg",{"aria-hidden":"true",height:"14",width:"14",viewBox:"0 0 12 16",className:"error-svg"},(0,v.tZ)("path",{fill:"#FFF",fillRule:"evenodd",d:"M5.05.01c.81 2.17.41 3.38-.52 4.31C3.55 5.37 1.98 6.15.9 7.68c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.01 8.68 2.15 5.05.02L5.03 0l.02.01z"})),(0,v.tZ)("svg",{"aria-hidden":"true",height:"14",width:"14",viewBox:"0 0 12 16",className:"success-svg"},(0,v.tZ)("path",{fill:"#FFF",fillRule:"evenodd",d:"M12 5.5l-8 8-4-4L1.5 8 4 10.5 10.5 4 12 5.5z"}))),(0,v.tZ)("div",{className:"taoast-content"},e.content),(0,v.tZ)("div",{role:"button",className:"toast__dismiss"},(0,v.tZ)("svg",{"aria-hidden":"true",height:"16",width:"14",viewBox:"0 0 14 16"},(0,v.tZ)("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"}))))}var f=t(986),Z=t.n(f),b=void 0,y={listItem:{flexBasis:["1",null,"1/2"],alignItems:"center",justifyContent:"center",p:[3,4],":nth-of-type(even)":{borderLeftStyle:"solid",borderLeftColor:"rgba(113, 128, 150, 0.2)",borderLeftWidth:[0,null,null,"sm"]}},button:{backgroundColor:"rgba(255, 255, 255, 0)",color:"#333"},fIcon:{paddingLeft:"10px",paddingTop:"8px"},w50:{width:"50%",maxWidth:"100%",flex:"0 0 auto",marginTop:"calc(2rem)",paddingLeft:"calc(2rem)",paddingRight:"calc(2rem)"},w100:{width:"100%",maxWidth:"100%",flex:"0 0 auto",marginTop:"calc(2rem)",paddingLeft:"calc(2rem)",paddingRight:"calc(2rem)"},wrow:{display:"flex",flexWrap:"wrap"},mb0:{marginBottom:0},mb30:{marginBottom:"30px"}},k=function(){var e=(0,i.useState)(!1),a=e[0],t=e[1],s=(0,i.useState)([]),n=s[0],l=s[1];(0,i.useEffect)((function(){fetch("https://app-qrbuzz.mumara.com/api/home/countries").then((function(e){return e.json()})).then((function(e){return l(e.countries)})).catch((function(e){return b.setState({error:e,isLoading:!1})})),fetch("http://ip-api.com/json").then((function(e){e.json().then((function(e){u(Object.assign({},c,{ip_address:e.query}))}))})).catch((function(e){console.log(e)}))}),[]);var o=i.useState({firstname:"",lastname:"",email:"",company:"",phoneno:"",skype:"",website:"",country:"",emailsquota:"",emailservers:"",message:""}),r=o[0],d=o[1],m=i.useState({firstname:"",lastname:"",email:"",company:"",phoneno:"",skype:"",website:"",country:"",emailsquota:"",emailservers:"",message:"",valid_firstname:"",valid_lastname:"",valid_email:"",valid_company:"",valid_phoneno:"",valid_skype:"",valid_website:"",valid_country:"",valid_message:"",firstnameMsg:"hide",lastnameMsg:"hide",emailMsg:"hide",companyMsg:"hide",phoneMsg:"hide",skypeMsg:"hide",websiteMsg:"hide",countriesMsg:"hide",messageMsg:"hide",ip_address:"",url:"",toast:!1}),c=m[0],u=m[1],f=function(e){return function(a){var t,s;u(Object.assign({},c,((t={})[e]=a.target.value,t.valid_firstname="",t.valid_lastname="",t.valid_email="",t.valid_company="",t.valid_phoneno="",t.firstnameMsg="hide",t.lastnameMsg="hide",t.emailMsg="hide",t.companyMsg="hide",t.phoneMsg="hide",t))),d(Object.assign({},r,((s={})[e]=a.target.value,s)))}},k=(0,i.useState)({submitting:!1,status:null}),x=(k[0],k[1]),M=function(e,a,s){x({submitting:!1,status:{ok:e,msg:a}}),e&&(s.reset(),t(!1),u(Object.assign({},c,{firstname:"",lastname:"",email:"",phoneno:"",company:"",skype:"",website:"",country:"",message:"",valid_firstname:"",valid_lastname:"",valid_email:"",valid_company:"",valid_phoneno:"",valid_skype:"",valid_website:"",valid_country:"",valid_message:"",firstnameMsg:"hide",lastnameMsg:"hide",emailMsg:"hide",companyMsg:"hide",phoneMsg:"hide",skypeMsg:"hide",websiteMsg:"hide",countriesMsg:"hide",messageMsg:"hide",toast:!0})),d(Object.assign({},r,{firstname:"",lastname:"",email:"",phoneno:"",company:"",skype:"",website:"",country:"",message:""})),setTimeout((function(){u(Object.assign({},c,{toast:!1}))}),3e3))};return(0,v.tZ)(p.W2,{sx:{textAlign:"center"}},(0,v.tZ)(h.Z,{variant:"cards.paper-lg"},1==a?(0,v.tZ)("div",{className:"preloading",id:"preloading"},(0,v.tZ)("div",{className:"preloader"})):(0,v.tZ)(i.Fragment,null),1==c.toast?(0,v.tZ)(g,{content:"Request Demo Form successfully submitted!",type:"success",onClick:function(){return u(Object.assign({},c,{toast:!1}))}}):(0,v.tZ)(i.Fragment,null),(0,v.tZ)("h2",{className:"css-8idint",style:y.mb0},"Request Demo"),(0,v.tZ)("div",{className:"css-1xmmrjk",style:y.mb30},"PLEASE COMPLETE AND SUBMIT THE SHORT FORM BELOW TO SCHEDULE A FREE, ",(0,v.tZ)("br",null),"BUSINESS CONSULTATION WITH ONE OF OUR EXPERTS."),(0,v.tZ)("form",{onSubmit:function(e){e.preventDefault(),t(!0);var a=e.target;return""===r.firstname?(u(Object.assign({},c,{valid_firstname:"is-invalid",firstnameMsg:"show"})),t(!1),!1):(""!==r.firstname&&u(Object.assign({},c,{valid_firstname:"is-valid",firstnameMsg:"hide"})),""===r.lastname?(u(Object.assign({},c,{valid_lastname:"is-invalid",lastnameMsg:"show",valid_firstname:"is-valid",firstnameMsg:"hide"})),t(!1),!1):(""!==r.lastname&&u(Object.assign({},c,{valid_lastname:"is-valid",lastnameMsg:"hide"})),""===r.email?(u(Object.assign({},c,{valid_email:"is-invalid",emailMsg:"show",valid_lastname:"is-valid",lastnameMsg:"hide",valid_firstname:"is-valid",firstnameMsg:"hide"})),t(!1),!1):(""!==r.email&&u(Object.assign({},c,{valid_email:"is-valid",emailMsg:"hide",valid_firstname:"is-valid",firstnameMsg:"hide"})),""===r.company?(u(Object.assign({},c,{valid_company:"is-invalid",companyMsg:"show",valid_email:"is-valid",emailMsg:"hide",valid_lastname:"is-valid",lastnameMsg:"hide",valid_firstname:"is-valid",firstnameMsg:"hide"})),t(!1),!1):(""!==r.company&&u(Object.assign({},c,{valid_company:"is-valid",companyMsg:"hide"})),""===r.phoneno?(u(Object.assign({},c,{valid_phoneno:"is-invalid",phoneMsg:"show",valid_company:"is-valid",companyMsg:"hide",valid_email:"is-valid",emailMsg:"hide",valid_lastname:"is-valid",lastnameMsg:"hide",valid_firstname:"is-valid",firstnameMsg:"hide"})),t(!1),!1):(""!==r.phoneno&&u(Object.assign({},c,{valid_phoneno:"is-valid",phoneMsg:"hide",valid_email:"is-valid",emailMsg:"hide",valid_fullname:"is-valid",nameMsg:"hide"})),x({submitting:!0}),void Z()({method:"post",url:"https://shahbaz.hostingshouse.com/php/demo1/curl.php",data:new FormData(a)}).then((function(e){M(!0,"Thanks!",a)})).catch((function(e){M(!1,e.response.data.error,a)})))))))},method:"post"},(0,v.tZ)(p.xu,{style:y.wrow},(0,v.tZ)(p.xu,{style:y.w50},(0,v.tZ)(p.xu,{variant:"forms.field",className:"fieldBlk "+c.valid_firstname},(0,v.tZ)(p.II,{type:"text",name:"firstname",placeholder:"First Name",onChange:f("firstname"),value:r.firstname})),(0,v.tZ)("span",{className:"error-block error "+c.firstnameMsg},"This field is required")),(0,v.tZ)(p.xu,{style:y.w50},(0,v.tZ)(p.xu,{variant:"forms.field",className:"fieldBlk "+c.valid_lastname},(0,v.tZ)(p.II,{type:"text",name:"lastname",placeholder:"Last Name",onChange:f("lastname"),value:r.lastname})),(0,v.tZ)("span",{className:"error-block error "+c.lastnameMsg},"This field is required")),(0,v.tZ)(p.xu,{style:y.w50},(0,v.tZ)(p.xu,{variant:"forms.field",className:"fieldBlk "+c.valid_email},(0,v.tZ)(p.II,{type:"email",name:"email",placeholder:"Email Address",onChange:f("email"),value:r.email})),(0,v.tZ)("span",{className:"error-block error "+c.emailMsg},"Email Address is required")),(0,v.tZ)(p.xu,{style:y.w50},(0,v.tZ)(p.xu,{variant:"forms.field",className:"fieldBlk "+c.valid_company},(0,v.tZ)(p.II,{type:"text",name:"company",placeholder:"Company",onChange:f("company"),value:r.company})),(0,v.tZ)("span",{className:"error-block error "+c.companyMsg},"This field is required")),(0,v.tZ)(p.xu,{style:y.w50},(0,v.tZ)(p.xu,{variant:"forms.field",className:"fieldBlk "+c.valid_phoneno},(0,v.tZ)(p.II,{type:"text",name:"phoneno",placeholder:"Phone No",onChange:f("phoneno"),value:r.phoneno})),(0,v.tZ)("span",{className:"error-block error "+c.phoneMsg},"Phone No is required")),(0,v.tZ)(p.xu,{style:y.w50},(0,v.tZ)(p.xu,{variant:"forms.field",className:"fieldBlk "+c.valid_skype},(0,v.tZ)(p.II,{type:"text",name:"skype",placeholder:"Skype",onChange:f("skype"),value:r.skype})),(0,v.tZ)("span",{className:"error-block error "+c.skypeMsg},"This field is required")),(0,v.tZ)(p.xu,{style:y.w50},(0,v.tZ)(p.xu,{variant:"forms.field",className:"fieldBlk "+c.valid_website},(0,v.tZ)(p.II,{type:"text",name:"website",placeholder:"Website",onChange:f("website"),value:r.website})),(0,v.tZ)("span",{className:"error-block error "+c.websiteMsg},"This field is required")),(0,v.tZ)(p.xu,{style:y.w50},(0,v.tZ)(p.xu,{variant:"forms.field",className:"fieldBlk countries-block "+c.valid_countries},(0,v.tZ)(p.Ph,{type:"text",name:"country",placeholder:"Country",onChange:f("country"),value:r.country},(0,v.tZ)("option",null,"Country"),n.map((function(e){return(0,v.tZ)("option",{key:e.country_code,value:e.country_name},e.country_name)})))),(0,v.tZ)("span",{className:"error-block error "+c.countriesMsg},"This field is required")),(0,v.tZ)(p.xu,{style:y.w100},(0,v.tZ)("label",{className:"label-control text-left"},"Maximum Emails Required to Deliver Per Hour"),(0,v.tZ)(p.xu,{variant:"forms.field",className:"emailsquotablock"},(0,v.tZ)("div",{class:"kt-radio-inline"},(0,v.tZ)("label",{for:"lessthen10k",class:"kt-radio"},(0,v.tZ)("input",{type:"radio",id:"lessthen10k",name:"emailsquota",onChange:f("emailsquota"),value:"less than 10K"}),"less than 10K",(0,v.tZ)("span",null)),(0,v.tZ)("label",{for:"between10k50k",class:"kt-radio"},(0,v.tZ)("input",{type:"radio",id:"between10k50k",name:"emailsquota",onChange:f("emailsquota"),value:"between 10K and 50K"}),"between 10K and 50K",(0,v.tZ)("span",null)),(0,v.tZ)("label",{for:"between50k250k",class:"kt-radio"},(0,v.tZ)("input",{type:"radio",id:"between50k250k",name:"emailsquota",onChange:f("emailsquota"),value:"between 50K and 250K"}),"between 50K and 250K",(0,v.tZ)("span",null)),(0,v.tZ)("label",{for:"between250k1M",class:"kt-radio"},(0,v.tZ)("input",{type:"radio",id:"between250k1M",name:"emailsquota",onChange:f("emailsquota"),value:"between 250K and 1M"}),"between 250K and 1M",(0,v.tZ)("span",null)),(0,v.tZ)("label",{for:"morethen1m",class:"kt-radio"},(0,v.tZ)("input",{type:"radio",id:"morethen1m",name:"emailsquota",onChange:f("emailsquota"),value:"more than 1M"}),"more than 1M",(0,v.tZ)("span",null))))),(0,v.tZ)(p.xu,{style:y.w100},(0,v.tZ)("label",{className:"label-control text-left"},"Looking For Emailing Servers?"),(0,v.tZ)(p.xu,{variant:"forms.field",className:"emailsquotablock"},(0,v.tZ)("div",{class:"kt-radio-inline"},(0,v.tZ)("label",{for:"yes",class:"kt-radio"},(0,v.tZ)("input",{type:"radio",id:"yes",name:"emailservers",onChange:f("emailservers"),value:"Yes"}),"Yes",(0,v.tZ)("span",null)),(0,v.tZ)("label",{for:"no",class:"kt-radio"},(0,v.tZ)("input",{type:"radio",id:"no",name:"emailservers",onChange:f("emailservers"),value:"No"}),"No",(0,v.tZ)("span",null))))),(0,v.tZ)(p.xu,{style:y.w100},(0,v.tZ)(p.xu,{variant:"forms.field",className:"emailsquotablock"},(0,v.tZ)("label",{for:"newsyes",class:"kt-checkbox"},(0,v.tZ)("input",{type:"checkbox",id:"newsyes",name:"newsletter",onChange:f("newsletter"),value:"Yes"}),"Add me to mailing list for Mumara newsletters and updates",(0,v.tZ)("span",null)))),(0,v.tZ)(p.xu,{style:y.w100},(0,v.tZ)(p.xu,{variant:"forms.field",className:"messageblock"},(0,v.tZ)(p.gx,{type:"multiline",name:"message",placeholder:"Message",onChange:f("message"),value:r.message}))),(0,v.tZ)("input",{type:"hidden",name:"url",value:c.url}),(0,v.tZ)("input",{type:"hidden",name:"ip_address",value:c.ip_address}),(0,v.tZ)("input",{type:"hidden",name:"insert_data",value:"1"}),(0,v.tZ)(p.xu,{style:y.w100},(0,v.tZ)(p.zx,{type:"submit"},"Submit & Continue"))))))},x={colors:{background:"#FFFFFF",headerBg:"transparent",footerBg:"#f1f3f8"}},M=function(e){var a=e.data.allBlockContent,t=(0,u.c)(null==a?void 0:a.nodes);return(0,v.tZ)(n.Z,(0,s.Z)({theme:x},e),(0,v.tZ)(l.Z,{title:"Request a Demo | Mumara",description:""}),(0,v.tZ)("div",{className:"subheader-block"},(0,v.tZ)(d.Z,{content:t.subheader_campaign,menuJustify:"space-between"})),(0,v.tZ)(r.Z,{content:t.header}),(0,v.tZ)(c.Z,{content:t.team}),(0,v.tZ)(o.Z,{space:"5"}),(0,v.tZ)(k,null),(0,v.tZ)(o.Z,{space:"5"}),(0,v.tZ)(m.Z,{content:t.footer}))}}}]);
//# sourceMappingURL=component---packages-themes-gatsby-theme-flexiblocks-src-pages-campaigns-request-demo-index-jsx-68c6a11f026001f78b27.js.map