(self.webpackChunk_elegantstack_gatsby_starter_flexiblocks=self.webpackChunk_elegantstack_gatsby_starter_flexiblocks||[]).push([[9279],{5541:function(t,e,n){"use strict";n.d(e,{c:function(){return r}});var r=function(t,e){return void 0===e&&(e="identifier"),null==t?void 0:t.reduce((function(t,n){return t[n[e]]=n,t}),{})}},4415:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});n(7378);var r=n(3314),l=n(2730),i=n(6495),o=function(t){var e=t.children,n=t.reverse;return(0,i.tZ)(r.xu,{sx:{flexBasis:"1/2",zIndex:[null,1],mx:[null,null,null,4]}},(0,i.tZ)(l.Z,{effect:n?"fadeInLeft":"fadeInRight"},e))}},5205:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});n(7378);var r=n(3314),l=n(6495),i=function(t){var e,n=t.reverse,i=t.children;return(0,l.tZ)(r.xu,{sx:(e={flexBasis:[null,"2/3",null,"1/2"],mx:[null,null,null,4]},e[n?"ml":"mr"]=[null,function(t){return"-"+t.sizes["1/6"]},null],e[n?"mt":"mb"]=[4,0],e.position="relative",e)},i)}},6514:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});n(7378);var r=n(3314),l=n(6495),i=function(t){var e=t.direction;return(0,l.tZ)(r.xu,{sx:{display:["none","block",null,"none"],position:"absolute",top:"-25%",left:"ltr"===e?"-50%":"0",zIndex:0,size:"150%",backgroundImage:function(t){return"radial-gradient(\n          circle,\n          "+t.colors.background+" 25%,\n          transparent 70%\n        )"}}})},o=i;i.defaultProps={direction:"ltr"}},2577:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(8291),l=(n(7378),n(3314)),i=n(3059),o=n(6140),u=n(6495),a=function(t){var e,n=t.icon,a=t.iconProps,s=t.text,c=t.description,Z=t.compact,f=t.vertical,d=t.center,v=t.middle;return(0,u.tZ)(l.kC,{sx:{flexDirection:f?"column":"row",alignItems:d?"center":"flex-start",textAlign:d&&f?"center":"unset",justifyContent:v?"center":"unset","& + &":{mt:c?Z?3:4:2}}},(null==n?void 0:n.src)&&(0,u.tZ)(l.xu,{sx:(e={display:"inline-flex",flexShrink:0},e[f?"mb":"mr"]=Z?2:3,e)},(0,u.tZ)(o.Z,(0,r.Z)({content:n,size:"sm",p:Z?1:void 0},a))),(0,u.tZ)(l.xu,{sx:{alignSelf:f?"auto":"center"}},(0,u.tZ)(i.Z,{content:s})))};a.defaultProps={iconProps:{}};var s=a},3220:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return S}});var r=n(7378),l=n(8110),i=n(8062),o=n(4886),u=n(5414),a=n(6267),s=n(1025),c=n(3314),Z=n(2730),f=n(3924),d=n(9606),v=n(1690),x=n(3253),m=n(6495),p={wrapper:{position:"relative",zIndex:10,".nav-container":{bg:"headerBg",position:"fixed",transition:"all 250ms ease-in",py:3},".nav-sticky .nav-container":{bg:"headerActiveBg",boxShadow:"0 0 25px rgba(140,152,164,.25)",py:[3,null,2],".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}},".button-group-button":{minWidth:120,fontSize:1,px:4,py:2}},header:{justifyContent:"space-between",alignItems:"center"},logoContainer:{flexShrink:0,mr:[null,null,3,5]},desktopMenu:{display:["none",null,"block"],minWidth:"auto",flexGrow:1},mobileMenu:{display:["block",null,"none"]}},g=function(t){var e=t.content,n=e.images,l=e.collection,i=t.menuJustify;return(0,m.tZ)(r.Fragment,null,(0,m.tZ)(a.ZP,{enabled:"true",stickyClassName:"nav-sticky",css:(0,s.i)(p.wrapper)},(0,m.tZ)(c.W2,{variant:"full",className:"nav-container"},(0,m.tZ)(c.W2,{px:"4"},(0,m.tZ)(c.kC,{sx:p.header},(0,m.tZ)(c.xu,{sx:p.logoContainer},(0,m.tZ)(u.rU,{to:"/"},(0,m.tZ)(d.Z,{content:{images:n},sx:p.image,imageEffect:"fadeIn"}))),l&&(0,m.tZ)(r.Fragment,null,(0,m.tZ)(c.xu,{sx:p.desktopMenu},(0,m.tZ)(Z.Z,{effect:"fadeInDown"},(0,m.tZ)(c.kC,{sx:{alignItems:"center",justifyContent:i}},l.map((function(t,e){var n=t.buttons;return n&&(0,m.tZ)(c.xu,{key:"item-"+e,sx:{"& + &":{ml:4}}},(0,m.tZ)(v.Z,{content:n}))}))))),(0,m.tZ)(c.xu,{sx:p.mobileMenu},(0,m.tZ)(f.Z,{buttonStyle:{svg:{size:32}}},l.map((function(t,e){var n=t.buttons;return n&&(0,m.tZ)(c.xu,{key:"item-"+e,sx:{fontSize:3,".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}}},(0,m.tZ)(v.Z,{content:n,variant:"vertical"}))}))))))))))};g.defaultProps={menuJustify:"flex-end"};var b=(0,x.Z)(g),k=n(8291),y=n(2577),h=n(5205),C=n(4415),I=n(6514),w=n(3059),z=(0,x.Z)((function(t){var e=t.content,n=e.text,l=e.images,i=e.collection,u=e.buttons,a=t.reverse;return(0,m.tZ)(c.W2,{sx:{position:"relative"}},(0,m.tZ)(c.kC,{sx:{alignItems:[null,"center"],flexDirection:[a?"column-reverse":"column",a?"row-reverse":"row"],mx:[null,null,null,-4]}},(0,m.tZ)(h.Z,{reverse:a},(0,m.tZ)(d.Z,{content:{images:l},reverse:a})),(0,m.tZ)(C.Z,{reverse:a},(0,m.tZ)(c.xu,{sx:{textAlign:["center","left"]}},(0,m.tZ)(w.Z,{content:n})),i&&(0,m.tZ)(r.Fragment,null,(0,m.tZ)(o.Z,{space:3}),(0,m.tZ)(Z.Z,{effect:a?"fadeInRight":"fadeInLeft",duration:1.5},i.map((function(t,e){return(0,m.tZ)(r.Fragment,null,(0,m.tZ)(y.Z,(0,k.Z)({key:"item-"+e},t)),(0,m.tZ)(o.Z,{space:2}))})))),u&&(0,m.tZ)(r.Fragment,null,(0,m.tZ)(o.Z,{space:3}),(0,m.tZ)(v.Z,{content:u})))),(0,m.tZ)(I.Z,{direction:a?"ltr":"rtl"}))})),_=n(5541),S=function(t){var e=t.data.allBlockContent,n=(0,_.c)(null==e?void 0:e.nodes);return(0,m.tZ)(l.Z,t,(0,m.tZ)(i.Z,{title:"Home"}),(0,m.tZ)("div",{className:"error-404"},(0,m.tZ)(b,{content:n.header}),(0,m.tZ)(o.Z,{space:"5"}),(0,m.tZ)(o.Z,{space:"5"}),(0,m.tZ)("div",{className:"error-page-content"},(0,m.tZ)(z,{content:n[404],reverse:!0}))))}}}]);
//# sourceMappingURL=component---packages-themes-gatsby-theme-flexiblocks-src-pages-404-jsx-db29752defd7c1b1dd55.js.map