(self.webpackChunk_elegantstack_gatsby_starter_flexiblocks=self.webpackChunk_elegantstack_gatsby_starter_flexiblocks||[]).push([[2974,5844],{5541:function(t,e,n){"use strict";n.d(e,{c:function(){return o}});var o=function(t,e){return void 0===e&&(e="identifier"),null==t?void 0:t.reduce((function(t,n){return t[n[e]]=n,t}),{})}},6527:function(t,e,n){"use strict";n.d(e,{Z:function(){return x}});var o=n(8291),i=n(7451),r=n(7378),l=n(3314),a=n(2730),s=n(4886),u=n(4332),c=n(3059),f=n(2577),Z=n(1690),d=n(3253),p=n(6495),m=["container","buttons"],x=(0,d.Z)((function(t){var e=t.content,n=e.text,d=void 0===n?[]:n,x=e.collection;e.buttons;return(0,p.tZ)(l.W2,{sx:{textAlign:"left"}},(0,p.tZ)(l.xu,null,(0,p.tZ)(c.Z,{content:d,sx:{textAlign:"center"}})),x&&(0,p.tZ)(r.Fragment,null,(0,p.tZ)(s.Z,{space:"0"}),(0,p.tZ)(a.Z,{effect:"fadeInDown"},(0,p.tZ)(l.kC,{sx:{justifyContent:"start",flexWrap:"wrap",m:0}},x.map((function(t,e){var n=t.container,a=t.buttons,s=(0,i.Z)(t,m);return(0,p.tZ)(l.xu,{key:"item-"+e,sx:{flexBasis:["1","1/2",null,"1/2"],p:2}},(0,p.tZ)(u.Z,{content:n},(0,p.tZ)(f.Z,(0,o.Z)({},s,{iconProps:{round:!0},vertical:!0,left:!0})),a&&(0,p.tZ)(r.Fragment,null,(0,p.tZ)(Z.Z,{content:a}))))}))))))}))},2295:function(t,e,n){"use strict";n.d(e,{Z:function(){return Z}});n(7378);var o=n(5414),i=n(3314),r=n(3059),l=n(9606),a=(n(3605),n(1690)),s=n(3253),u=n(6495),c={wrapper:{position:"relative",bg:"footerBg"},footer:{flexDirection:["column-reverse","row"],justifyContent:"space-between",alignItems:["center","flex-start"],py:5},listBlk:{display:"block",overflowX:"hidden"}},f=function(t){var e=t.content,n=e.text,s=e.images,f=e.collection;return(0,u.tZ)(i.xu,{sx:c.wrapper},(0,u.tZ)(i.W2,{px:"4"},(0,u.tZ)(i.kC,{sx:c.footer,xs:c.listBlk,className:"footerJoint"},(0,u.tZ)(i.xu,{sx:{minWidth:200}},(0,u.tZ)(i.xu,{pb:"1",mb:"2",mt:[4,0]},(0,u.tZ)(o.rU,{to:"/"},(0,u.tZ)(l.Z,{content:{images:s},imageEffect:"fadeIn"}))),(0,u.tZ)(i.xu,{pt:"2",mb:2},(0,u.tZ)(r.Z,{sx:{maxWidth:260},content:null==n?void 0:n[0]})),(0,u.tZ)(i.xu,{pt:"2",mb:[2,4]},"© ",(new Date).getFullYear(),", All Rights Reserved.")),null==f?void 0:f.map((function(t,e){var n=t.text,o=t.buttons;return o&&(0,u.tZ)(i.xu,{key:"item-"+e,mb:"3",xs:c.listBlk,className:"footer-links-block"},(0,u.tZ)(r.Z,{content:null==n?void 0:n[0],variant:"h5",sx:{display:["none","block"]}}),(0,u.tZ)(a.Z,{content:o,variant:"vertical",wrapperStyles:{flexDirection:[null,"column"]}}))})))))};f.defaultProps={menuJustify:"flex-end"};var Z=(0,s.Z)(f)},2899:function(t,e,n){"use strict";n.d(e,{Z:function(){return x}});var o=n(7378),i=n(5414),r=n(6267),l=n(1025),a=n(3314),s=n(2730),u=n(3924),c=n(9606),f=n(1690),Z=n(3253),d=n(6495),p={wrapper:{position:"relative",zIndex:10,".nav-container":{bg:"headerBg",position:"fixed",transition:"all 250ms ease-in",py:3},".nav-sticky .nav-container":{bg:"headerActiveBg",boxShadow:"0 0 25px rgba(140,152,164,.25)",py:[3,null,2],".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}},".button-group-button":{minWidth:120,fontSize:1,px:4,py:2}},header:{justifyContent:"space-between",alignItems:"center"},logoContainer:{flexShrink:0,mr:[null,null,3,5]},desktopMenu:{display:["none",null,"block"],minWidth:"auto",flexGrow:1},mobileMenu:{display:["block",null,"none"]}},m=function(t){var e=t.content,n=e.images,Z=e.collection,m=t.menuJustify;return(0,d.tZ)(o.Fragment,null,(0,d.tZ)(r.ZP,{enabled:"true",stickyClassName:"nav-sticky",css:(0,l.i)(p.wrapper)},(0,d.tZ)(a.W2,{variant:"full",className:"nav-container"},(0,d.tZ)(a.W2,{px:"4"},(0,d.tZ)(a.kC,{sx:p.header},(0,d.tZ)(a.xu,{sx:p.logoContainer},(0,d.tZ)(i.rU,{to:"/"},(0,d.tZ)(c.Z,{content:{images:n},sx:p.image,imageEffect:"fadeIn"}))),Z&&(0,d.tZ)(o.Fragment,null,(0,d.tZ)(a.xu,{sx:p.desktopMenu},(0,d.tZ)(s.Z,{effect:"fadeInDown"},(0,d.tZ)(a.kC,{sx:{alignItems:"center",justifyContent:m}},Z.map((function(t,e){var n=t.buttons;return n&&(0,d.tZ)(a.xu,{key:"item-"+e,sx:{"& + &":{ml:4}}},(0,d.tZ)(f.Z,{content:n}))}))))),(0,d.tZ)(a.xu,{sx:p.mobileMenu},(0,d.tZ)(u.Z,{buttonStyle:{svg:{size:32}}},Z.map((function(t,e){var n=t.buttons;return n&&(0,d.tZ)(a.xu,{key:"item-"+e,sx:{fontSize:3,".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}}},(0,d.tZ)(f.Z,{content:n,variant:"vertical"}))}))))))))))};m.defaultProps={menuJustify:"flex-end"};var x=(0,Z.Z)(m)},8621:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var o=n(7378),i=(n(6267),n(3314)),r=n(2730),l=n(1690),a=n(3253),s=n(6495),u={wrapper:{position:"relative",zIndex:10,".nav-container":{bg:"#403c56",color:"#d3e4ff",position:"relative",transition:"all 250ms ease-in",py:3},".nav-sticky .nav-container":{bg:"headerActiveBg",boxShadow:"0 0 25px rgba(140,152,164,.25)",py:[1,null,1],".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}},".button-group-button":{minWidth:80,fontSize:"12px",px:"8px",py:"2px"}},header:{justifyContent:"end",alignItems:"right"},desktopMenu:{display:["block",null,"block"],minWidth:"auto",flexGrow:1,color:"#d3e4ff"},mobileMenu:{display:["block",null,"block"],color:"#d3e4ff"}},c=function(t){var e=t.content,n=(e.images,e.collection);t.menuJustify;return(0,s.tZ)("div",{className:"subheader-main"},(0,s.tZ)(i.W2,{variant:"full",className:"nav-container"},(0,s.tZ)(i.W2,{px:"2"},(0,s.tZ)(i.kC,{sx:u.header},n&&(0,s.tZ)(o.Fragment,null,(0,s.tZ)(i.xu,{sx:u.desktopMenu},(0,s.tZ)(r.Z,{effect:"fadeInDown"},(0,s.tZ)(i.kC,{sx:{alignItems:"center",justifyContent:"end"}},n.map((function(t,e){var n=t.buttons;return n&&(0,s.tZ)(i.xu,{key:"item-"+e,sx:{"& + &":{ml:2}}},(0,s.tZ)(l.Z,{content:n}))}))))))))))};c.defaultProps={menuJustify:"end"};var f=(0,a.Z)(c)},2577:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var o=n(8291),i=(n(7378),n(3314)),r=n(3059),l=n(6140),a=n(6495),s=function(t){var e,n=t.icon,s=t.iconProps,u=t.text,c=t.description,f=t.compact,Z=t.vertical,d=t.center,p=t.middle;return(0,a.tZ)(i.kC,{sx:{flexDirection:Z?"column":"row",alignItems:d?"center":"flex-start",textAlign:d&&Z?"center":"unset",justifyContent:p?"center":"unset","& + &":{mt:c?f?3:4:2}}},(null==n?void 0:n.src)&&(0,a.tZ)(i.xu,{sx:(e={display:"inline-flex",flexShrink:0},e[Z?"mb":"mr"]=f?2:3,e)},(0,a.tZ)(l.Z,(0,o.Z)({content:n,size:"sm",p:f?1:void 0},s))),(0,a.tZ)(i.xu,{sx:{alignSelf:Z?"auto":"center"}},(0,a.tZ)(r.Z,{content:u})))};s.defaultProps={iconProps:{}};var u=s},3605:function(t,e,n){"use strict";n(7378),n(6495)},3881:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return i}});n(7378),n(5414);var o=n(6495);function i(){return(0,o.tZ)("div",{className:"counterblock"},(0,o.tZ)("div",{id:"countdown"}),(0,o.tZ)("div",{className:"counter-loading"}))}},7649:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return v}});var o=n(8291),i=(n(7378),n(3314)),r=n(8110),l=n(8062),a=n(4886),s=n(2899),u=n(2295),c=n(8621),f=n(6527),Z=n(5541),d=n(3881),p={heroContainer:{position:"relative",pt:[6],"::before":{position:"absolute",content:'" "',width:"full",height:"100%",top:0,right:0,zIndex:-1,bg:"white"}},heroContainer2:{position:"relative",pt:[0]}},m={colors:{background:"#fbfbfb",headerBg:"#FFFFFF",footerBg:"#f1f3f8"}},x=n(6495),v=function(t){var e=t.data.allBlockContent,n=(0,Z.c)(null==e?void 0:e.nodes);return(0,x.tZ)(r.Z,(0,o.Z)({theme:m},t),(0,x.tZ)(l.Z,{title:"SMS Packages | Mumara",description:"Select desired slab according to the estimated monthly sending volume and get the most affordable message sending rates across the globe.",keywords:"sms topup,sms package,bulk sms service,bulk sms cost,sms online recharge"}),(0,x.tZ)("div",{className:"subheader-block"},(0,x.tZ)(c.Z,{content:n.subheader_sms,menuJustify:"space-between"})),(0,x.tZ)(s.Z,{content:n.header}),(0,x.tZ)(i.W2,{className:"classic-featuresBlk",variant:"full",sx:p.heroContainer},(0,x.tZ)(a.Z,{space:"2"}),(0,x.tZ)(f.Z,{content:n.cl_features}),(0,x.tZ)(d.default,null),(0,x.tZ)(a.Z,{space:"5"})),(0,x.tZ)(u.Z,{content:n.footer}))}}}]);
//# sourceMappingURL=component---packages-themes-gatsby-theme-flexiblocks-src-pages-campaigns-features-multiple-smtpssending-nodes-index-jsx-1c455962dcba56e4e7bb.js.map