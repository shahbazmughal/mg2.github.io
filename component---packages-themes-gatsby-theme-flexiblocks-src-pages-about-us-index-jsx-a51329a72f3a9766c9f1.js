(self.webpackChunk_elegantstack_gatsby_starter_flexiblocks=self.webpackChunk_elegantstack_gatsby_starter_flexiblocks||[]).push([[402],{4133:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var a=n(7378),l=n(8830),i=n(249),s=n(6495),o=function(t){var e=t.from,n=t.to,o=t.delay,c=t.duration,r=(0,a.useRef)(),m=(0,i.YD)({triggerOnce:!0,threshold:.5}),u=m[0],Z=m[1],d=parseInt(e),f=parseInt(n);return(0,a.useEffect)((function(){if(Z){var t=r.current,e=(0,l.jt)(d,f,{duration:c,delay:o,onUpdate:function(e){t.textContent=e.toFixed(0)}});return function(){return e.stop()}}}),[d,f,Z]),(0,s.tZ)("span",{ref:u},(0,s.tZ)("span",{ref:r}))},c=o;o.defaultProps={duration:2,from:0}},2577:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var a=n(8291),l=(n(7378),n(3314)),i=n(3059),s=n(6140),o=n(6495),c=function(t){var e,n=t.icon,c=t.iconProps,r=t.text,m=t.description,u=t.compact,Z=t.vertical,d=t.center,f=t.middle;return(0,o.tZ)(l.kC,{sx:{flexDirection:Z?"column":"row",alignItems:d?"center":"flex-start",textAlign:d&&Z?"center":"unset",justifyContent:f?"center":"unset","& + &":{mt:m?u?3:4:2}}},(null==n?void 0:n.src)&&(0,o.tZ)(l.xu,{sx:(e={display:"inline-flex",flexShrink:0},e[Z?"mb":"mr"]=u?2:3,e)},(0,o.tZ)(s.Z,(0,a.Z)({content:n,size:"sm",p:u?1:void 0},c))),(0,o.tZ)(l.xu,{sx:{alignSelf:Z?"auto":"center"}},(0,o.tZ)(i.Z,{content:r})))};c.defaultProps={iconProps:{}};var r=c},3605:function(t,e,n){"use strict";n(7378),n(6495)},6609:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return H}});var a=n(8291),l=n(7378),i=n(3314),s=n(8110),o=n(8062),c=n(4886),r=n(5414),m=n(6267),u=n(1025),Z=n(2730),d=n(3924),f=n(9606),g=n(1690),v=n(3253),x=n(6495),b={wrapper:{position:"relative",zIndex:10,".nav-container":{bg:"headerBg",position:"fixed",transition:"all 250ms ease-in",py:3},".nav-sticky .nav-container":{bg:"headerActiveBg",boxShadow:"0 0 25px rgba(140,152,164,.25)",py:[3,null,2],".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}},".button-group-button":{minWidth:120,fontSize:1,px:4,py:2}},header:{justifyContent:"space-between",alignItems:"center"},logoContainer:{flexShrink:0,mr:[null,null,3,5]},desktopMenu:{display:["none",null,"block"],minWidth:"auto",flexGrow:1},mobileMenu:{display:["block",null,"none"]}},p=function(t){var e=t.content,n=e.images,a=e.collection,s=t.menuJustify;return(0,x.tZ)(l.Fragment,null,(0,x.tZ)(m.ZP,{enabled:"true",stickyClassName:"nav-sticky",css:(0,u.i)(b.wrapper)},(0,x.tZ)(i.W2,{variant:"full",className:"nav-container"},(0,x.tZ)(i.W2,{px:"4"},(0,x.tZ)(i.kC,{sx:b.header},(0,x.tZ)(i.xu,{sx:b.logoContainer},(0,x.tZ)(r.rU,{to:"/"},(0,x.tZ)(f.Z,{content:{images:n},sx:b.image,imageEffect:"fadeIn"}))),a&&(0,x.tZ)(l.Fragment,null,(0,x.tZ)(i.xu,{sx:b.desktopMenu},(0,x.tZ)(Z.Z,{effect:"fadeInDown"},(0,x.tZ)(i.kC,{sx:{alignItems:"center",justifyContent:s}},a.map((function(t,e){var n=t.buttons;return n&&(0,x.tZ)(i.xu,{key:"item-"+e,sx:{"& + &":{ml:4}}},(0,x.tZ)(g.Z,{content:n}))}))))),(0,x.tZ)(i.xu,{sx:b.mobileMenu},(0,x.tZ)(d.Z,{buttonStyle:{svg:{size:32}}},a.map((function(t,e){var n=t.buttons;return n&&(0,x.tZ)(i.xu,{key:"item-"+e,sx:{fontSize:3,".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}}},(0,x.tZ)(g.Z,{content:n,variant:"vertical"}))}))))))))))};p.defaultProps={menuJustify:"flex-end"};var h=(0,v.Z)(p),N=n(3059),k=(n(3605),{wrapper:{position:"relative",bg:"footerBg"},footer:{flexDirection:["column-reverse","row"],justifyContent:"space-between",alignItems:["center","flex-start"],py:5},listBlk:{display:"block",overflowX:"hidden"}}),y=function(t){var e=t.content,n=e.text,a=e.images,l=e.collection;return(0,x.tZ)(i.xu,{sx:k.wrapper},(0,x.tZ)(i.W2,{px:"4"},(0,x.tZ)(i.kC,{sx:k.footer,xs:k.listBlk,className:"footerJoint"},(0,x.tZ)(i.xu,{sx:{minWidth:200}},(0,x.tZ)(i.xu,{pb:"1",mb:"2",mt:[4,0]},(0,x.tZ)(r.rU,{to:"/"},(0,x.tZ)(f.Z,{content:{images:a},imageEffect:"fadeIn"}))),(0,x.tZ)(i.xu,{pt:"2",mb:2},(0,x.tZ)(N.Z,{sx:{maxWidth:260},content:null==n?void 0:n[0]})),(0,x.tZ)(i.xu,{pt:"2",mb:[2,4]},"© ",(new Date).getFullYear(),", All Rights Reserved.")),null==l?void 0:l.map((function(t,e){var n=t.text,a=t.buttons;return a&&(0,x.tZ)(i.xu,{key:"item-"+e,mb:"3",xs:k.listBlk,className:"footer-links-block"},(0,x.tZ)(N.Z,{content:null==n?void 0:n[0],variant:"h5",sx:{display:["none","block"]}}),(0,x.tZ)(g.Z,{content:a,variant:"vertical",wrapperStyles:{flexDirection:[null,"column"]}}))})))))};y.defaultProps={menuJustify:"flex-end"};var C=(0,v.Z)(y),w=n(4332),I=n(2577),A=(0,v.Z)((function(t){var e=t.content,n=e.text,a=void 0===n?[]:n;e.collection,e.buttons;return(0,x.tZ)(i.W2,{sx:{textAlign:"left"},className:"about-content"},(0,x.tZ)(Z.Z,{effect:"fadeInDown"},(0,x.tZ)(i.kC,{sx:{justifyContent:"start",flexWrap:"wrap",m:0}},(0,x.tZ)(w.Z,null,(0,x.tZ)(i.xu,{sx:{flexBasis:["1","1/2",null,"1/2"],p:2}},(0,x.tZ)(N.Z,{content:a,sx:{textAlign:"center"}}))))))})),j=n(315),W={flexDirection:"column",size:"full",alignItems:"center",justifyContent:"center",py:0},D=(0,v.Z)((function(t){var e,n,a=t.content,l=(a.container,a.text),s=(a.buttons,a.form,a.images);return(0,x.tZ)(i.W2,{className:"companyadmin",variant:"full",sx:{textAlign:"center",position:"relative"}},(0,x.tZ)(i.kC,{sx:Object.assign({},W,{minHeight:null!=s&&null!==(e=s[0])&&void 0!==e&&e.src?null===(n=(0,j.d)(s[0].src))||void 0===n?void 0:n.height:void 0})},(0,x.tZ)(Z.Z,{effect:"fadeInDown"},(0,x.tZ)(N.Z,{content:null==l?void 0:l[0],sx:{bg:"alphaDark",display:"inline-block"},px:"2",mb:"2",mt:"3"}),(0,x.tZ)(N.Z,{content:null==l?void 0:l[1],mb:"5",mt:"0",mx:"auto"}),(0,x.tZ)(N.Z,{content:null==l?void 0:l.slice(2),mx:"auto"}))),(0,x.tZ)(i.kC,{sx:Object.assign({},W)},(0,x.tZ)(Z.Z,{effect:"fadeInDown"},(0,x.tZ)("div",{className:"container "},(0,x.tZ)("div",{className:"row gy-4"},(0,x.tZ)("div",{className:"col-lg-4 col-md-6 d-flex align-items-stretch aos-animate"},(0,x.tZ)("div",{className:"member"},(0,x.tZ)("div",{className:"member-img"},(0,x.tZ)("img",{src:"/static/shafaat-01fb85c5ac5a85c72fad3d57d9b87538.jpg",className:"img-fluid",alt:""})),(0,x.tZ)("div",{className:"member-info"},(0,x.tZ)("h4",null,"Shafaat Ahmad"),(0,x.tZ)("span",null,"Chief Operation Officer")))),(0,x.tZ)("div",{className:"col-lg-4 col-md-6 d-flex align-items-stretch aos-animate"},(0,x.tZ)("div",{className:"member"},(0,x.tZ)("div",{className:"member-img"},(0,x.tZ)("img",{src:"/static/wasif-344f3094ff9e31f531ebfd6683874b9e.jpg",className:"img-fluid",alt:""})),(0,x.tZ)("div",{className:"member-info"},(0,x.tZ)("h4",null,"Wasif Ahmad"),(0,x.tZ)("span",null,"Founder & CEO")))),(0,x.tZ)("div",{className:"col-lg-4 col-md-6 d-flex align-items-stretch aos-animate"},(0,x.tZ)("div",{className:"member"},(0,x.tZ)("div",{className:"member-img"},(0,x.tZ)("img",{src:"/static/umer-5cc6bde6adb189d9b735f0123976e624.jpg",className:"img-fluid",alt:""})),(0,x.tZ)("div",{className:"member-info"},(0,x.tZ)("h4",null,"Muhammad Umer Ali"),(0,x.tZ)("span",null,"Brand Ambassador")))))))))})),z={flexDirection:"column",size:"full",alignItems:"center",justifyContent:"center",py:0},S=(0,v.Z)((function(t){var e,n,a=t.content,l=(a.container,a.text),s=(a.buttons,a.form,a.images);return(0,x.tZ)(i.W2,{className:"companyteam",variant:"full",sx:{textAlign:"center",position:"relative"}},(0,x.tZ)(i.kC,{sx:Object.assign({},z,{minHeight:null!=s&&null!==(e=s[0])&&void 0!==e&&e.src?null===(n=(0,j.d)(s[0].src))||void 0===n?void 0:n.height:void 0})},(0,x.tZ)(Z.Z,{effect:"fadeInDown"},(0,x.tZ)(N.Z,{content:null==l?void 0:l[0],sx:{display:"inline-block"},px:"0",mb:"0",mt:"0"}),(0,x.tZ)(N.Z,{content:null==l?void 0:l[1],mb:"0",mt:"0",mx:"auto"}),(0,x.tZ)(N.Z,{content:null==l?void 0:l.slice(2),mx:"auto",mb:"5"}))),(0,x.tZ)(i.kC,{sx:Object.assign({},z)},(0,x.tZ)(Z.Z,{effect:"fadeInDown"},(0,x.tZ)("div",{className:"container "},(0,x.tZ)("div",{className:"row gy-4"},(0,x.tZ)("div",{className:"col-lg-3 col-md-6 d-flex align-items-stretch aos-animate"},(0,x.tZ)("div",{className:"member"},(0,x.tZ)("div",{className:"member-img"},(0,x.tZ)("img",{src:"/static/arfan-e4bd9275e87df2a68c3ef62ea5b584ef.jpg",className:"img-fluid",alt:""})),(0,x.tZ)("div",{className:"member-info"},(0,x.tZ)("h4",null,"Muhammad Arfan"),(0,x.tZ)("span",null,"Sr Software Programmer")))),(0,x.tZ)("div",{className:"col-lg-3 col-md-6 d-flex align-items-stretch aos-animate"},(0,x.tZ)("div",{className:"member"},(0,x.tZ)("div",{className:"member-img"},(0,x.tZ)("img",{src:"/static/shahbazmughal-dcd44c69627512b5cdeffce4a5cd402e.jpg",className:"img-fluid",alt:""})),(0,x.tZ)("div",{className:"member-info"},(0,x.tZ)("h4",null,"Shahbaz Mughal"),(0,x.tZ)("span",null,"Expert UI/UX")))),(0,x.tZ)("div",{className:"col-lg-3 col-md-6 d-flex align-items-stretch aos-animate"},(0,x.tZ)("div",{className:"member"},(0,x.tZ)("div",{className:"member-img"},(0,x.tZ)("img",{src:"/static/adnan-e0521b02d51ec4dce21ecb6e85468be7.jpg",className:"img-fluid",alt:""})),(0,x.tZ)("div",{className:"member-info"},(0,x.tZ)("h4",null,"Adnan Rasheed"),(0,x.tZ)("span",null,"Software Engineer")))),(0,x.tZ)("div",{className:"col-lg-3 col-md-6 d-flex align-items-stretch aos-animate"},(0,x.tZ)("div",{className:"member"},(0,x.tZ)("div",{className:"member-img"},(0,x.tZ)("img",{src:"/static/azeem-46b88b77fdeabd0a004057151c97f56a.jpg",className:"img-fluid",alt:""})),(0,x.tZ)("div",{className:"member-info"},(0,x.tZ)("h4",null,"M. Azeem"),(0,x.tZ)("span",null,"Sr Software Programmer")))),(0,x.tZ)("div",{className:"col-lg-3 col-md-6 d-flex align-items-stretch aos-animate"},(0,x.tZ)("div",{className:"member"},(0,x.tZ)("div",{className:"member-img"},(0,x.tZ)("img",{src:"/static/m-wakeel-e7c1b7e7d8bc0790dfbf6b0a6777c4f6.png",className:"img-fluid",alt:""})),(0,x.tZ)("div",{className:"member-info"},(0,x.tZ)("h4",null,"Muhammad M. Wakeel"),(0,x.tZ)("span",null,"Support Administrator")))),(0,x.tZ)("div",{className:"col-lg-3 col-md-6 d-flex align-items-stretch aos-animate"},(0,x.tZ)("div",{className:"member"},(0,x.tZ)("div",{className:"member-img"},(0,x.tZ)("img",{src:"/static/rehanbutt-edae889b6805102cb4923cc5d24357d8.jpg",className:"img-fluid",alt:""})),(0,x.tZ)("div",{className:"member-info"},(0,x.tZ)("h4",null,"Rehan Butt"),(0,x.tZ)("span",null,"Datacenter Administrator")))),(0,x.tZ)("div",{className:"col-lg-3 col-md-6 d-flex align-items-stretch aos-animate"},(0,x.tZ)("div",{className:"member"},(0,x.tZ)("div",{className:"member-img"},(0,x.tZ)("img",{src:"/static/asim-malick-8b453952af62859f655cf55d8e9dd935.jpg",className:"img-fluid",alt:""})),(0,x.tZ)("div",{className:"member-info"},(0,x.tZ)("h4",null,"Asim Malik"),(0,x.tZ)("span",null,"Accounts Manager")))),(0,x.tZ)("div",{className:"col-lg-3 col-md-6 d-flex align-items-stretch aos-animate"},(0,x.tZ)("div",{className:"member"},(0,x.tZ)("div",{className:"member-img"},(0,x.tZ)("img",{src:"/static/maida-shahid-c9ff4f2f78ebcdda06ed4960c0220ffa.png",className:"img-fluid",alt:""})),(0,x.tZ)("div",{className:"member-info"},(0,x.tZ)("h4",null,"Maida Shahid"),(0,x.tZ)("span",null,"Head of Sales")))))))))})),B={subTitle:{maxWidth:500},content:{flexDirection:"column",size:"full",alignItems:"center",justifyContent:"center",py:0},overlay:{size:"full",bg:"omegaDarker",opacity:.75,position:"absolute",top:0,zIndex:-1},image:{size:"full",position:"absolute",top:0,zIndex:-2}},F=(0,v.Z)((function(t){var e,n,a=t.content,l=a.container,s=a.text,o=(a.buttons,a.form,a.images);return(0,x.tZ)(i.W2,{variant:"full",sx:{textAlign:"center",position:"relative"}},(0,x.tZ)(i.kC,{sx:Object.assign({},B.content,{minHeight:null!=o&&null!==(e=o[0])&&void 0!==e&&e.src?null===(n=(0,j.d)(o[0].src))||void 0===n?void 0:n.height:void 0})},(0,x.tZ)(Z.Z,{effect:"fadeInDown"},(0,x.tZ)(i.xu,{sx:{mt:3}}),(0,x.tZ)(N.Z,{content:null==s?void 0:s[0],sx:{bg:"omegaDarker",display:"inline-block"},px:"2",mb:"3",mt:"5"}),(0,x.tZ)(N.Z,{content:null==s?void 0:s[1],mb:"0",mt:"0",mx:"auto"}),(0,x.tZ)(N.Z,{content:null==s?void 0:s.slice(2),mx:"auto"}))),(0,x.tZ)(w.Z,{content:l,sx:B.overlay,className:"block-overlay"}),(0,x.tZ)(i.xu,{sx:B.image},(0,x.tZ)(f.Z,{loading:"eager",content:{images:o},sx:{size:"full"},imageEffect:"fadeIn"})))})),M=n(7451),_=["container","buttons"],P=((0,v.Z)((function(t){var e=t.content,n=e.text,s=e.collection;e.buttons;return(0,x.tZ)(i.W2,{as:Z.Z},(0,x.tZ)(i.xu,{sx:{textAlign:"center"}},(0,x.tZ)(N.Z,{content:n})),n&&s&&(0,x.tZ)(c.Z,null),(0,x.tZ)(i.kC,{sx:{flexWrap:"wrap",m:-3}},null==s?void 0:s.map((function(t,e){var n=t.container,s=t.buttons,o=(0,M.Z)(t,_);return(0,x.tZ)(i.xu,{key:"item-"+e,sx:{flexBasis:["1","1/2"]}},(0,x.tZ)(w.Z,{content:n,p:"4"},(0,x.tZ)(I.Z,(0,a.Z)({},o,{middle:!0,iconProps:{mr:2}})),s&&(0,x.tZ)(l.Fragment,null,(0,x.tZ)(ContentButtons,{content:s}))))}))))})),n(5541)),O=n(4133),E=(0,v.Z)((function(t){var e=t.content,n=e.text,a=e.container,s=e.collection,o=e.buttons;return(0,x.tZ)(i.W2,{sx:{textAlign:"center"}},(0,x.tZ)(w.Z,{content:a,variant:"cards.paper-lg"},(0,x.tZ)(N.Z,{content:n}),n&&s&&(0,x.tZ)(c.Z,{space:3}),s&&(0,x.tZ)(l.Fragment,null,(0,x.tZ)(i.kC,{sx:{flexWrap:"wrap",alignItems:"flex-start",alignContent:"center",justifyContent:"center",m:-1}},null==s?void 0:s.map((function(t,e){var n,a=t.text;return(0,x.tZ)(i.xu,{key:"item-"+e,sx:{flex:"1",minWidth:100,textAlign:"center",p:1}},(0,x.tZ)(Z.Z,{effect:"fadeInGrow",delay:.2*(e+2)},(0,x.tZ)(N.Z,{content:null==a?void 0:a[0],mb:"0"},(0,x.tZ)(O.Z,{to:parseInt(null==a||null===(n=a[0])||void 0===n?void 0:n.text)})),(0,x.tZ)(N.Z,{content:null==a?void 0:a[1],sx:{fontWeight:"body"},mb:"0"})))})))),o&&(0,x.tZ)(l.Fragment,null,(0,x.tZ)(c.Z,null),(0,x.tZ)(g.Z,{content:o}))))})),U={heroContainer:{position:"relative",pt:[6],"::before":{position:"absolute",content:'" "',width:"full",height:"100%",top:0,right:0,zIndex:-1,bg:"white"}},heroContainer2:{position:"relative",pt:[0]}},R={colors:{background:"#fbfbfb",headerBg:"#FFFFFF",footerBg:"#f1f3f8"}},H=function(t){var e=t.data.allBlockContent,n=(0,P.c)(null==e?void 0:e.nodes);return(0,x.tZ)(s.Z,(0,a.Z)({theme:R},t),(0,x.tZ)(o.Z,{title:"About us | Mumara"}),(0,x.tZ)(h,{content:n.header}),(0,x.tZ)(F,{content:n.team}),(0,x.tZ)(i.W2,{className:"avout-us-page",variant:"full",sx:U.heroContainer},(0,x.tZ)(A,{content:n.cl_features}),(0,x.tZ)(c.Z,{space:"5"}),(0,x.tZ)(c.Z,{space:"5"})),(0,x.tZ)(i.W2,{variant:"narrow"},(0,x.tZ)(E,{content:n.stats}),(0,x.tZ)(c.Z,{space:"5"})),(0,x.tZ)(c.Z,{space:"5"}),(0,x.tZ)(i.W2,{variant:"full",sx:U.heroContainer2},(0,x.tZ)(D,{content:n.company_admin}),(0,x.tZ)(S,{content:n.company_team})),(0,x.tZ)(C,{content:n.footer}))}}}]);
//# sourceMappingURL=component---packages-themes-gatsby-theme-flexiblocks-src-pages-about-us-index-jsx-a51329a72f3a9766c9f1.js.map