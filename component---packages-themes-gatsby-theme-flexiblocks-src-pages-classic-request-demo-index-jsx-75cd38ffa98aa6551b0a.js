(self.webpackChunk_elegantstack_gatsby_starter_flexiblocks=self.webpackChunk_elegantstack_gatsby_starter_flexiblocks||[]).push([[962],{8621:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var i=a(7378),s=(a(6267),a(3314)),n=a(2730),l=a(1690),o=a(3253),r=a(6495),d={wrapper:{position:"relative",zIndex:10,".nav-container":{bg:"#403c56",color:"#d3e4ff",position:"relative",transition:"all 250ms ease-in",py:3},".nav-sticky .nav-container":{bg:"headerActiveBg",boxShadow:"0 0 25px rgba(140,152,164,.25)",py:[1,null,1],".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}},".button-group-button":{minWidth:80,fontSize:"12px",px:"8px",py:"2px"}},header:{justifyContent:"end",alignItems:"right"},desktopMenu:{display:["block",null,"block"],minWidth:"auto",flexGrow:1,color:"#d3e4ff"},mobileMenu:{display:["block",null,"block"],color:"#d3e4ff"}},m=function(e){var t=e.content,a=(t.images,t.collection);e.menuJustify;return(0,r.tZ)("div",{className:"subheader-main"},(0,r.tZ)(s.W2,{variant:"full",className:"nav-container"},(0,r.tZ)(s.W2,{px:"2"},(0,r.tZ)(s.kC,{sx:d.header},a&&(0,r.tZ)(i.Fragment,null,(0,r.tZ)(s.xu,{sx:d.desktopMenu},(0,r.tZ)(n.Z,{effect:"fadeInDown"},(0,r.tZ)(s.kC,{sx:{alignItems:"center",justifyContent:"end"}},a.map((function(e,t){var a=e.buttons;return a&&(0,r.tZ)(s.xu,{key:"item-"+t,sx:{"& + &":{ml:2}}},(0,r.tZ)(l.Z,{content:a}))}))))))))))};m.defaultProps={menuJustify:"end"};var c=(0,o.Z)(m)},3544:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});a(7378);var i=a(6495);function s(e){return(0,i.tZ)("div",{className:"toast "+e.type,onClick:e.onClick},(0,i.tZ)("div",{className:"toastcheck"},(0,i.tZ)("div",{className:"css-animslide"}),(0,i.tZ)("svg",{"aria-hidden":"true",height:"14",width:"14",viewBox:"0 0 12 16",className:"error-svg"},(0,i.tZ)("path",{fill:"#FFF",fillRule:"evenodd",d:"M5.05.01c.81 2.17.41 3.38-.52 4.31C3.55 5.37 1.98 6.15.9 7.68c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.01 8.68 2.15 5.05.02L5.03 0l.02.01z"})),(0,i.tZ)("svg",{"aria-hidden":"true",height:"14",width:"14",viewBox:"0 0 12 16",className:"success-svg"},(0,i.tZ)("path",{fill:"#FFF",fillRule:"evenodd",d:"M12 5.5l-8 8-4-4L1.5 8 4 10.5 10.5 4 12 5.5z"}))),(0,i.tZ)("div",{className:"taoast-content"},e.content),(0,i.tZ)("div",{role:"button",className:"toast__dismiss"},(0,i.tZ)("svg",{"aria-hidden":"true",height:"16",width:"14",viewBox:"0 0 14 16"},(0,i.tZ)("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"}))))}},8786:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return M}});var i=a(8291),s=a(7378),n=a(8110),l=a(8062),o=a(4886),r=a(8843),d=a(8621),m=a(997),c=a(3247),u=a(5541),p=a(3314),h=a(4332),v=a(3544),g=a(986),f=a.n(g),Z=a(6495),b=void 0,y={listItem:{flexBasis:["1",null,"1/2"],alignItems:"center",justifyContent:"center",p:[3,4],":nth-of-type(even)":{borderLeftStyle:"solid",borderLeftColor:"rgba(113, 128, 150, 0.2)",borderLeftWidth:[0,null,null,"sm"]}},button:{backgroundColor:"rgba(255, 255, 255, 0)",color:"#333"},fIcon:{paddingLeft:"10px",paddingTop:"8px"},w50:{width:"50%",maxWidth:"100%",flex:"0 0 auto",marginTop:"calc(2rem)",paddingLeft:"calc(2rem)",paddingRight:"calc(2rem)"},w250:{width:"50%",maxWidth:"100%",flex:"0 0 auto",paddingLeft:"calc(1rem)",paddingRight:"calc(1rem)"},w100:{width:"100%",maxWidth:"100%",flex:"0 0 auto",marginTop:"calc(2rem)",paddingLeft:"calc(2rem)",paddingRight:"calc(2rem)"},wrow:{display:"flex",flexWrap:"wrap"},mb0:{marginBottom:0},mb30:{marginBottom:"30px"}},k=function(){var e=(0,s.useState)(!1),t=e[0],a=e[1],i=(0,s.useState)([]),n=i[0],l=i[1];(0,s.useEffect)((function(){fetch("https://app-qrbuzz.mumara.com/api/home/countries").then((function(e){return e.json()})).then((function(e){return l(e.countries)})).catch((function(e){return b.setState({error:e,isLoading:!1})})),fetch("http://ip-api.com/json").then((function(e){e.json().then((function(e){u(Object.assign({},c,{ip_address:e.query}))}))})).catch((function(e){console.log(e)}))}),[]);var o=s.useState({firstname:"",lastname:"",email:"",company:"",phoneno:"",skype:"",website:"",country:"",emailsquota:"",emailservers:"",message:""}),r=o[0],d=o[1],m=s.useState({firstname:"",lastname:"",email:"",company:"",phoneno:"",skype:"",website:"",country:"",emailsquota:"",emailservers:"",message:"",valid_firstname:"",valid_lastname:"",valid_email:"",valid_company:"",valid_phoneno:"",valid_skype:"",valid_website:"",valid_country:"",valid_message:"",firstnameMsg:"hide",lastnameMsg:"hide",emailMsg:"hide",companyMsg:"hide",phoneMsg:"hide",skypeMsg:"hide",websiteMsg:"hide",countriesMsg:"hide",messageMsg:"hide",ip_address:"",url:"",toast:!1}),c=m[0],u=m[1],g=function(e){return function(t){var a,i;u(Object.assign({},c,((a={})[e]=t.target.value,a.valid_firstname="",a.valid_lastname="",a.valid_email="",a.valid_company="",a.valid_phoneno="",a.firstnameMsg="hide",a.lastnameMsg="hide",a.emailMsg="hide",a.companyMsg="hide",a.phoneMsg="hide",a))),d(Object.assign({},r,((i={})[e]=t.target.value,i)))}},k=(0,s.useState)({submitting:!1,status:null}),w=(k[0],k[1]),M=function(e,t,i){w({submitting:!1,status:{ok:e,msg:t}}),e&&(i.reset(),a(!1),u(Object.assign({},c,{firstname:"",lastname:"",email:"",phoneno:"",company:"",skype:"",website:"",country:"",message:"",valid_firstname:"",valid_lastname:"",valid_email:"",valid_company:"",valid_phoneno:"",valid_skype:"",valid_website:"",valid_country:"",valid_message:"",firstnameMsg:"hide",lastnameMsg:"hide",emailMsg:"hide",companyMsg:"hide",phoneMsg:"hide",skypeMsg:"hide",websiteMsg:"hide",countriesMsg:"hide",messageMsg:"hide",toast:!0})),d(Object.assign({},r,{firstname:"",lastname:"",email:"",phoneno:"",company:"",skype:"",website:"",country:"",message:""})),setTimeout((function(){u(Object.assign({},c,{toast:!1}))}),3e3))};return(0,Z.tZ)(p.W2,{sx:{textAlign:"center"}},(0,Z.tZ)(p.xu,{style:y.wrow,className:"contact"},(0,Z.tZ)(p.xu,{style:y.w250},(0,Z.tZ)("div",{className:"info-box mb-5"},(0,Z.tZ)("h3",null,"Product Edition"),(0,Z.tZ)("p",null,"Product edition is a very suitable choice for bulk mailers who need to send multiple campaigns for themselves and their clients."),(0,Z.tZ)("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."),(0,Z.tZ)("ul",{class:"no-list"},(0,Z.tZ)("li",null,(0,Z.tZ)("i",{class:"bi bi-check"})," High speed contacts importing"),(0,Z.tZ)("li",null,(0,Z.tZ)("i",{class:"bi bi-check"})," Maximum Deliverability and Optimized Email Headers"),(0,Z.tZ)("li",null,(0,Z.tZ)("i",{class:"bi bi-check"})," Integration with Adstation and PowerMTA"),(0,Z.tZ)("li",null,(0,Z.tZ)("i",{class:"bi bi-check"})," Auto Server Setup (supports PowerMTA only)"),(0,Z.tZ)("li",null,(0,Z.tZ)("i",{class:"bi bi-check"})," Advanced Reporting System")))),(0,Z.tZ)(p.xu,{style:y.w250},(0,Z.tZ)("div",{className:"info-box mb-5"},(0,Z.tZ)("h3",null,"ESP Edition"),(0,Z.tZ)("p",null,"ESP edition of Mumara is the best choice for Email Service Providers and is a rapidly growing platform for the providers. It comes up with the complete suite of features that any ESP would want to implement for their clients."),(0,Z.tZ)("ul",{class:"no-list"},(0,Z.tZ)("li",null,(0,Z.tZ)("i",{class:"bi bi-check"})," Advanced User Management"),(0,Z.tZ)("li",null,(0,Z.tZ)("i",{class:"bi bi-check"})," Staff Roles Management"),(0,Z.tZ)("li",null,(0,Z.tZ)("i",{class:"bi bi-check"})," Multi-Servers Management and IP(s) Assignment"),(0,Z.tZ)("li",null,(0,Z.tZ)("i",{class:"bi bi-check"})," Authentication Wizard for Clients to Setup DKIM, Domain Keys, SPF and CNAME records."),(0,Z.tZ)("li",null,(0,Z.tZ)("i",{class:"bi bi-check"})," Supports Transactional Emailing (Compatible with PowerMTA)"),(0,Z.tZ)("li",null,(0,Z.tZ)("i",{class:"bi bi-check"})," Advanced Graphical Reporting System"))))),(0,Z.tZ)(h.Z,{variant:"cards.paper-lg"},1==t?(0,Z.tZ)("div",{className:"preloading",id:"preloading"},(0,Z.tZ)("div",{className:"preloader"})):(0,Z.tZ)(s.Fragment,null),1==c.toast?(0,Z.tZ)(v.Z,{content:"Request Demo Form successfully submitted!",type:"success",onClick:function(){return u(Object.assign({},c,{toast:!1}))}}):(0,Z.tZ)(s.Fragment,null),(0,Z.tZ)("h2",{className:"css-8idint",style:y.mb0},"Request Demo"),(0,Z.tZ)("div",{className:"css-1xmmrjk",style:y.mb30},"PLEASE COMPLETE AND SUBMIT THE SHORT FORM BELOW TO SCHEDULE A FREE, ",(0,Z.tZ)("br",null),"BUSINESS CONSULTATION WITH ONE OF OUR EXPERTS."),(0,Z.tZ)("form",{onSubmit:function(e){e.preventDefault(),a(!0);var t=e.target;return""===r.firstname?(u(Object.assign({},c,{valid_firstname:"is-invalid",firstnameMsg:"show"})),a(!1),!1):(""!==r.firstname&&u(Object.assign({},c,{valid_firstname:"is-valid",firstnameMsg:"hide"})),""===r.lastname?(u(Object.assign({},c,{valid_lastname:"is-invalid",lastnameMsg:"show",valid_firstname:"is-valid",firstnameMsg:"hide"})),a(!1),!1):(""!==r.lastname&&u(Object.assign({},c,{valid_lastname:"is-valid",lastnameMsg:"hide"})),""===r.email?(u(Object.assign({},c,{valid_email:"is-invalid",emailMsg:"show",valid_lastname:"is-valid",lastnameMsg:"hide",valid_firstname:"is-valid",firstnameMsg:"hide"})),a(!1),!1):(""!==r.email&&u(Object.assign({},c,{valid_email:"is-valid",emailMsg:"hide",valid_firstname:"is-valid",firstnameMsg:"hide"})),""===r.company?(u(Object.assign({},c,{valid_company:"is-invalid",companyMsg:"show",valid_email:"is-valid",emailMsg:"hide",valid_lastname:"is-valid",lastnameMsg:"hide",valid_firstname:"is-valid",firstnameMsg:"hide"})),a(!1),!1):(""!==r.company&&u(Object.assign({},c,{valid_company:"is-valid",companyMsg:"hide"})),""===r.phoneno?(u(Object.assign({},c,{valid_phoneno:"is-invalid",phoneMsg:"show",valid_company:"is-valid",companyMsg:"hide",valid_email:"is-valid",emailMsg:"hide",valid_lastname:"is-valid",lastnameMsg:"hide",valid_firstname:"is-valid",firstnameMsg:"hide"})),a(!1),!1):(""!==r.phoneno&&u(Object.assign({},c,{valid_phoneno:"is-valid",phoneMsg:"hide",valid_email:"is-valid",emailMsg:"hide",valid_fullname:"is-valid",nameMsg:"hide"})),w({submitting:!0}),void f()({method:"post",url:"https://shahbaz.hostingshouse.com/php/demo2/curl.php",data:new FormData(t)}).then((function(e){M(!0,"Thanks!",t)})).catch((function(e){M(!1,e.response.data.error,t)})))))))},method:"post"},(0,Z.tZ)(p.xu,{style:y.wrow},(0,Z.tZ)(p.xu,{style:y.w50},(0,Z.tZ)(p.xu,{variant:"forms.field",className:"fieldBlk "+c.valid_firstname},(0,Z.tZ)(p.II,{type:"text",name:"firstname",placeholder:"First Name",onChange:g("firstname"),value:r.firstname})),(0,Z.tZ)("span",{className:"error-block error "+c.firstnameMsg},"This field is required")),(0,Z.tZ)(p.xu,{style:y.w50},(0,Z.tZ)(p.xu,{variant:"forms.field",className:"fieldBlk "+c.valid_lastname},(0,Z.tZ)(p.II,{type:"text",name:"lastname",placeholder:"Last Name",onChange:g("lastname"),value:r.lastname})),(0,Z.tZ)("span",{className:"error-block error "+c.lastnameMsg},"This field is required")),(0,Z.tZ)(p.xu,{style:y.w50},(0,Z.tZ)(p.xu,{variant:"forms.field",className:"fieldBlk "+c.valid_email},(0,Z.tZ)(p.II,{type:"email",name:"email",placeholder:"Email Address",onChange:g("email"),value:r.email})),(0,Z.tZ)("span",{className:"error-block error "+c.emailMsg},"Email Address is required")),(0,Z.tZ)(p.xu,{style:y.w50},(0,Z.tZ)(p.xu,{variant:"forms.field",className:"fieldBlk "+c.valid_company},(0,Z.tZ)(p.II,{type:"text",name:"company",placeholder:"Company",onChange:g("company"),value:r.company})),(0,Z.tZ)("span",{className:"error-block error "+c.companyMsg},"This field is required")),(0,Z.tZ)(p.xu,{style:y.w50},(0,Z.tZ)(p.xu,{variant:"forms.field",className:"fieldBlk "+c.valid_phoneno},(0,Z.tZ)(p.II,{type:"text",name:"phoneno",placeholder:"Phone No",onChange:g("phoneno"),value:r.phoneno})),(0,Z.tZ)("span",{className:"error-block error "+c.phoneMsg},"Phone No is required")),(0,Z.tZ)(p.xu,{style:y.w50},(0,Z.tZ)(p.xu,{variant:"forms.field",className:"fieldBlk "+c.valid_skype},(0,Z.tZ)(p.II,{type:"text",name:"skype",placeholder:"Skype",onChange:g("skype"),value:r.skype})),(0,Z.tZ)("span",{className:"error-block error "+c.skypeMsg},"This field is required")),(0,Z.tZ)(p.xu,{style:y.w50},(0,Z.tZ)(p.xu,{variant:"forms.field",className:"fieldBlk "+c.valid_website},(0,Z.tZ)(p.II,{type:"text",name:"website",placeholder:"Website",onChange:g("website"),value:r.website})),(0,Z.tZ)("span",{className:"error-block error "+c.websiteMsg},"This field is required")),(0,Z.tZ)(p.xu,{style:y.w50},(0,Z.tZ)(p.xu,{variant:"forms.field",className:"fieldBlk countries-block "+c.valid_countries},(0,Z.tZ)(p.Ph,{type:"text",name:"country",placeholder:"Country",onChange:g("country"),value:r.country},(0,Z.tZ)("option",null,"Country"),n.map((function(e){return(0,Z.tZ)("option",{key:e.country_code,value:e.country_name},e.country_name)})))),(0,Z.tZ)("span",{className:"error-block error "+c.countriesMsg},"This field is required")),(0,Z.tZ)(p.xu,{style:y.w100},(0,Z.tZ)("label",{className:"label-control text-left"},"Maximum Emails Required to Deliver Per Hour"),(0,Z.tZ)(p.xu,{variant:"forms.field",className:"emailsquotablock"},(0,Z.tZ)("div",{class:"kt-radio-inline"},(0,Z.tZ)("label",{for:"lessthen10k",class:"kt-radio"},(0,Z.tZ)("input",{type:"radio",id:"lessthen10k",name:"emailsquota",onChange:g("emailsquota"),value:"less than 10K"}),"less than 10K",(0,Z.tZ)("span",null)),(0,Z.tZ)("label",{for:"between10k50k",class:"kt-radio"},(0,Z.tZ)("input",{type:"radio",id:"between10k50k",name:"emailsquota",onChange:g("emailsquota"),value:"between 10K and 50K"}),"between 10K and 50K",(0,Z.tZ)("span",null)),(0,Z.tZ)("label",{for:"between50k250k",class:"kt-radio"},(0,Z.tZ)("input",{type:"radio",id:"between50k250k",name:"emailsquota",onChange:g("emailsquota"),value:"between 50K and 250K"}),"between 50K and 250K",(0,Z.tZ)("span",null)),(0,Z.tZ)("label",{for:"between250k1M",class:"kt-radio"},(0,Z.tZ)("input",{type:"radio",id:"between250k1M",name:"emailsquota",onChange:g("emailsquota"),value:"between 250K and 1M"}),"between 250K and 1M",(0,Z.tZ)("span",null)),(0,Z.tZ)("label",{for:"morethen1m",class:"kt-radio"},(0,Z.tZ)("input",{type:"radio",id:"morethen1m",name:"emailsquota",onChange:g("emailsquota"),value:"more than 1M"}),"more than 1M",(0,Z.tZ)("span",null))))),(0,Z.tZ)(p.xu,{style:y.w100},(0,Z.tZ)("label",{className:"label-control text-left"},"Looking For Emailing Servers?"),(0,Z.tZ)(p.xu,{variant:"forms.field",className:"emailsquotablock"},(0,Z.tZ)("div",{class:"kt-radio-inline"},(0,Z.tZ)("label",{for:"yes",class:"kt-radio"},(0,Z.tZ)("input",{type:"radio",id:"yes",name:"emailservers",onChange:g("emailservers"),value:"Yes"}),"Yes",(0,Z.tZ)("span",null)),(0,Z.tZ)("label",{for:"no",class:"kt-radio"},(0,Z.tZ)("input",{type:"radio",id:"no",name:"emailservers",onChange:g("emailservers"),value:"No"}),"No",(0,Z.tZ)("span",null))))),(0,Z.tZ)(p.xu,{style:y.w100},(0,Z.tZ)(p.xu,{variant:"forms.field",className:"emailsquotablock"},(0,Z.tZ)("label",{for:"newsyes",class:"kt-checkbox"},(0,Z.tZ)("input",{type:"checkbox",id:"newsyes",name:"newsletter",onChange:g("newsletter"),value:"Yes"}),"Add me to mailing list for Mumara newsletters and updates",(0,Z.tZ)("span",null)))),(0,Z.tZ)(p.xu,{style:y.w100},(0,Z.tZ)(p.xu,{variant:"forms.field",className:"messageblock"},(0,Z.tZ)(p.gx,{type:"multiline",name:"message",placeholder:"Message",onChange:g("message"),value:r.message}))),(0,Z.tZ)("input",{type:"hidden",name:"url",value:c.url}),(0,Z.tZ)("input",{type:"hidden",name:"ip_address",value:c.ip_address}),(0,Z.tZ)("input",{type:"hidden",name:"insert_data",value:"1"}),(0,Z.tZ)(p.xu,{style:y.w100},(0,Z.tZ)(p.zx,{type:"submit"},"Submit & Continue"))))))},w={colors:{background:"#FFFFFF",headerBg:"transparent",footerBg:"#f1f3f8"}},M=function(e){var t=e.data.allBlockContent,a=(0,u.c)(null==t?void 0:t.nodes);return(0,Z.tZ)(n.Z,(0,i.Z)({theme:w},e),(0,Z.tZ)(l.Z,{title:"Request a Demo | Classic | Mumara",description:""}),(0,Z.tZ)("div",{className:"subheader-block"},(0,Z.tZ)(d.Z,{content:a.subheader_classic,menuJustify:"space-between"})),(0,Z.tZ)(r.Z,{content:a.header}),(0,Z.tZ)(c.Z,{content:a.team}),(0,Z.tZ)(o.Z,{space:"5"}),(0,Z.tZ)(k,null),(0,Z.tZ)(o.Z,{space:"5"}),(0,Z.tZ)(m.Z,{content:a.footer}))}}}]);
//# sourceMappingURL=component---packages-themes-gatsby-theme-flexiblocks-src-pages-classic-request-demo-index-jsx-75cd38ffa98aa6551b0a.js.map