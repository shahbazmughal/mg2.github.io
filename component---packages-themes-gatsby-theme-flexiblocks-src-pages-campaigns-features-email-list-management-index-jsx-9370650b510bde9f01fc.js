(self.webpackChunk_elegantstack_gatsby_starter_flexiblocks=self.webpackChunk_elegantstack_gatsby_starter_flexiblocks||[]).push([[9612,5844],{6527:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var o=n(8291),i=n(7451),r=n(7378),l=n(3314),a=n(2730),u=n(4886),s=n(4332),c=n(3059),f=n(2577),Z=n(1690),d=n(3253),p=n(6495),x=["container","buttons"],m=(0,d.Z)((function(t){var e=t.content,n=e.text,d=void 0===n?[]:n,m=e.collection;e.buttons;return(0,p.tZ)(l.W2,{sx:{textAlign:"left"}},(0,p.tZ)(l.xu,null,(0,p.tZ)(c.Z,{content:d,sx:{textAlign:"center"}})),m&&(0,p.tZ)(r.Fragment,null,(0,p.tZ)(u.Z,{space:"0"}),(0,p.tZ)(a.Z,{effect:"fadeInDown"},(0,p.tZ)(l.kC,{sx:{justifyContent:"start",flexWrap:"wrap",m:0}},m.map((function(t,e){var n=t.container,a=t.buttons,u=(0,i.Z)(t,x);return(0,p.tZ)(l.xu,{key:"item-"+e,sx:{flexBasis:["1","1/2",null,"1/2"],p:2}},(0,p.tZ)(s.Z,{content:n},(0,p.tZ)(f.Z,(0,o.Z)({},u,{iconProps:{round:!0},vertical:!0,left:!0})),a&&(0,p.tZ)(r.Fragment,null,(0,p.tZ)(Z.Z,{content:a}))))}))))))}))},2295:function(t,e,n){"use strict";n.d(e,{Z:function(){return Z}});n(7378);var o=n(5414),i=n(3314),r=n(3059),l=n(9606),a=(n(3605),n(1690)),u=n(3253),s=n(6495),c={wrapper:{position:"relative",bg:"footerBg"},footer:{flexDirection:["column-reverse","row"],justifyContent:"space-between",alignItems:["center","flex-start"],py:5},listBlk:{display:"block",overflowX:"hidden"}},f=function(t){var e=t.content,n=e.text,u=e.images,f=e.collection;return(0,s.tZ)(i.xu,{sx:c.wrapper},(0,s.tZ)(i.W2,{px:"4"},(0,s.tZ)(i.kC,{sx:c.footer,xs:c.listBlk,className:"footerJoint"},(0,s.tZ)(i.xu,{sx:{minWidth:200}},(0,s.tZ)(i.xu,{pb:"1",mb:"2",mt:[4,0]},(0,s.tZ)(o.rU,{to:"/"},(0,s.tZ)(l.Z,{content:{images:u},imageEffect:"fadeIn"}))),(0,s.tZ)(i.xu,{pt:"2",mb:2},(0,s.tZ)(r.Z,{sx:{maxWidth:260},content:null==n?void 0:n[0]})),(0,s.tZ)(i.xu,{pt:"2",mb:[2,4]},"© ",(new Date).getFullYear(),", All Rights Reserved.")),null==f?void 0:f.map((function(t,e){var n=t.text,o=t.buttons;return o&&(0,s.tZ)(i.xu,{key:"item-"+e,mb:"3",xs:c.listBlk,className:"footer-links-block"},(0,s.tZ)(r.Z,{content:null==n?void 0:n[0],variant:"h5",sx:{display:["none","block"]}}),(0,s.tZ)(a.Z,{content:o,variant:"vertical",wrapperStyles:{flexDirection:[null,"column"]}}))})))))};f.defaultProps={menuJustify:"flex-end"};var Z=(0,u.Z)(f)},2899:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var o=n(7378),i=n(5414),r=n(6267),l=n(1025),a=n(3314),u=n(2730),s=n(3924),c=n(9606),f=n(1690),Z=n(3253),d=n(6495),p={wrapper:{position:"relative",zIndex:10,".nav-container":{bg:"headerBg",position:"fixed",transition:"all 250ms ease-in",py:3},".nav-sticky .nav-container":{bg:"headerActiveBg",boxShadow:"0 0 25px rgba(140,152,164,.25)",py:[3,null,2],".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}},".button-group-button":{minWidth:120,fontSize:1,px:4,py:2}},header:{justifyContent:"space-between",alignItems:"center"},logoContainer:{flexShrink:0,mr:[null,null,3,5]},desktopMenu:{display:["none",null,"block"],minWidth:"auto",flexGrow:1},mobileMenu:{display:["block",null,"none"]}},x=function(t){var e=t.content,n=e.images,Z=e.collection,x=t.menuJustify;return(0,d.tZ)(o.Fragment,null,(0,d.tZ)(r.ZP,{enabled:"true",stickyClassName:"nav-sticky",css:(0,l.i)(p.wrapper)},(0,d.tZ)(a.W2,{variant:"full",className:"nav-container"},(0,d.tZ)(a.W2,{px:"4"},(0,d.tZ)(a.kC,{sx:p.header},(0,d.tZ)(a.xu,{sx:p.logoContainer},(0,d.tZ)(i.rU,{to:"/"},(0,d.tZ)(c.Z,{content:{images:n},sx:p.image,imageEffect:"fadeIn"}))),Z&&(0,d.tZ)(o.Fragment,null,(0,d.tZ)(a.xu,{sx:p.desktopMenu},(0,d.tZ)(u.Z,{effect:"fadeInDown"},(0,d.tZ)(a.kC,{sx:{alignItems:"center",justifyContent:x}},Z.map((function(t,e){var n=t.buttons;return n&&(0,d.tZ)(a.xu,{key:"item-"+e,sx:{"& + &":{ml:4}}},(0,d.tZ)(f.Z,{content:n}))}))))),(0,d.tZ)(a.xu,{sx:p.mobileMenu},(0,d.tZ)(s.Z,{buttonStyle:{svg:{size:32}}},Z.map((function(t,e){var n=t.buttons;return n&&(0,d.tZ)(a.xu,{key:"item-"+e,sx:{fontSize:3,".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}}},(0,d.tZ)(f.Z,{content:n,variant:"vertical"}))}))))))))))};x.defaultProps={menuJustify:"flex-end"};var m=(0,Z.Z)(x)},8621:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var o=n(7378),i=(n(6267),n(3314)),r=n(2730),l=n(1690),a=n(3253),u=n(6495),s={wrapper:{position:"relative",zIndex:10,".nav-container":{bg:"#403c56",color:"#d3e4ff",position:"relative",transition:"all 250ms ease-in",py:3},".nav-sticky .nav-container":{bg:"headerActiveBg",boxShadow:"0 0 25px rgba(140,152,164,.25)",py:[1,null,1],".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}},".button-group-button":{minWidth:80,fontSize:"12px",px:"8px",py:"2px"}},header:{justifyContent:"end",alignItems:"right"},desktopMenu:{display:["block",null,"block"],minWidth:"auto",flexGrow:1,color:"#d3e4ff"},mobileMenu:{display:["block",null,"block"],color:"#d3e4ff"}},c=function(t){var e=t.content,n=(e.images,e.collection);t.menuJustify;return(0,u.tZ)("div",{className:"subheader-main"},(0,u.tZ)(i.W2,{variant:"full",className:"nav-container"},(0,u.tZ)(i.W2,{px:"2"},(0,u.tZ)(i.kC,{sx:s.header},n&&(0,u.tZ)(o.Fragment,null,(0,u.tZ)(i.xu,{sx:s.desktopMenu},(0,u.tZ)(r.Z,{effect:"fadeInDown"},(0,u.tZ)(i.kC,{sx:{alignItems:"center",justifyContent:"end"}},n.map((function(t,e){var n=t.buttons;return n&&(0,u.tZ)(i.xu,{key:"item-"+e,sx:{"& + &":{ml:2}}},(0,u.tZ)(l.Z,{content:n}))}))))))))))};c.defaultProps={menuJustify:"end"};var f=(0,a.Z)(c)},2577:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var o=n(8291),i=(n(7378),n(3314)),r=n(3059),l=n(6140),a=n(6495),u=function(t){var e,n=t.icon,u=t.iconProps,s=t.text,c=t.description,f=t.compact,Z=t.vertical,d=t.center,p=t.middle;return(0,a.tZ)(i.kC,{sx:{flexDirection:Z?"column":"row",alignItems:d?"center":"flex-start",textAlign:d&&Z?"center":"unset",justifyContent:p?"center":"unset","& + &":{mt:c?f?3:4:2}}},(null==n?void 0:n.src)&&(0,a.tZ)(i.xu,{sx:(e={display:"inline-flex",flexShrink:0},e[Z?"mb":"mr"]=f?2:3,e)},(0,a.tZ)(l.Z,(0,o.Z)({content:n,size:"sm",p:f?1:void 0},u))),(0,a.tZ)(i.xu,{sx:{alignSelf:Z?"auto":"center"}},(0,a.tZ)(r.Z,{content:s})))};u.defaultProps={iconProps:{}};var s=u},3605:function(t,e,n){"use strict";n(7378),n(6495)},3881:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return r}});n(7378);var o=n(5414),i=n(6495);function r(){var t=5,e=setInterval((function(){t<=0?(clearInterval(e),document.getElementById("countdown").innerHTML="0",(0,o.c4)("/campaigns/")):document.getElementById("countdown").innerHTML=t,t-=1}),1e3);return(0,i.tZ)("div",{className:"counterblock"},(0,i.tZ)("div",{id:"countdown"}),(0,i.tZ)("div",{className:"counter-loading"}))}},8855:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return o}});n(7378),n(8110),n(8062),n(4886),n(2899),n(2295),n(8621),n(6527),n(3881),n(6495);var o=campFeatures9}}]);
//# sourceMappingURL=component---packages-themes-gatsby-theme-flexiblocks-src-pages-campaigns-features-email-list-management-index-jsx-9370650b510bde9f01fc.js.map