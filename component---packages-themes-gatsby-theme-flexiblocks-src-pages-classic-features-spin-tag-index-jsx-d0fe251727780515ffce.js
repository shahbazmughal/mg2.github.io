(self.webpackChunk_elegantstack_gatsby_starter_flexiblocks=self.webpackChunk_elegantstack_gatsby_starter_flexiblocks||[]).push([[4320],{4123:function(t,n,e){"use strict";e.d(n,{Z:function(){return f}});var l=e(7378),i=e(3314),a=e(1025),o=e(4886),s=e(2730),r=e(4332),c=e(3059),u=e(6140),p=e(2132),d=e(3253),m=e(6495),Z={sheading:{fontSize:"1.1em"},listItem:{flex:"1 1 0",minWidth:300,p:3},itemDescription:{flexBasis:"3/5",flexGrow:1,order:[1,null,0],mb:3},icons:{padding:0,color:"#333",width:"16px",height:"16px",display:"inline-block",float:"left"}},f=(0,d.Z)((function(t){var n=t.content,e=n.text,d=n.collection;n.icon2;return(0,m.tZ)(i.W2,{as:s.Z},(0,m.tZ)(i.xu,{sx:{textAlign:"center"}},(0,m.tZ)(c.Z,{content:e})),d&&(0,m.tZ)(l.Fragment,null,(0,m.tZ)(o.Z,null),(0,m.tZ)(i.kC,{sx:{flexWrap:"wrap"},m:-3},d.map((function(t,n){var e=t.text,d=t.icon,f=(t.collection,t.buttons),b=t.container;return(0,m.tZ)(s.Z,{key:"item-"+n,effect:"fadeInGrow",delay:.15*(n+1),css:(0,a.i)(Z.listItem)},(0,m.tZ)(r.Z,{content:b,variant:"cards.paper",sx:{height:"full"}},(0,m.tZ)(u.Z,{content:d,size:"md",mr:"3",mb:"3"}),(0,m.tZ)(c.Z,{content:null==e?void 0:e[0],sx:Z.sheading}),(0,m.tZ)(i.kC,{sx:{alignItems:"center",flexWrap:"wrap"}},(0,m.tZ)(c.Z,{content:null==e?void 0:e.slice(1),sx:Z.itemDescription,mt:[3,null,0]})),f&&(0,m.tZ)(l.Fragment,null,(0,m.tZ)(o.Z,{space:0}),(0,m.tZ)(p.Z,{content:f,css:(0,a.i)(Z.icons)}))))})))))}))},2132:function(t,n,e){"use strict";e.d(n,{Z:function(){return g}});var l=e(8291),i=e(7378),a=e(3314),o=e(6140),s=e(4332),r=e(5319),c=e(4392),u=e(1690),p=e(1184),d=e(6495),m={horizontal:{".button-group-link":{py:3},"> * + a, > * + div, > * + button":{ml:[3,null,null,4],mt:[4,0]}},vertical:{display:"flex",flexDirection:"column",a:{mb:[3,2],px:[2,0]}},subButtonsParent:{display:[null,null,"inline-flex"],alignItems:"center",":hover":{"& > .container-level-1":{opacity:1,visibility:"inherit",transform:[null,null,"translate(-50%, 0)"]}},"& > svg":{size:"icon.xs",position:["absolute","static"],right:0,ml:"auto"}},subContainer:{"&.container-level-1":{position:["static",null,"absolute"],top:[null,null,"100%"],left:[null,null,"50%"],transform:[null,null,"translate(-50%, -20px)"],boxShadow:[null,null,"0 0 25px rgba(140,152,164,.355)"],visibility:[null,null,"hidden"],overflow:[null,null,"hidden"],opacity:[null,null,0],bg:["omegaLighter",null,"contentBg"],borderRadius:[null,null,"default"],display:"flex",flexDirection:"column",transition:"all 250ms ease",p:[3,null,0],mt:[3,null,0]},"&.container-level-1.no-collection":{p:[3,null,3],".button-group-link":{px:2,py:1,my:1}},"&.container-level-2":{flexBasis:"100%",mt:[0,0,2],".button-group-link":{display:"block",py:0,mt:2}}},subContainerCollection:{display:"flex",flexDirection:["column",null,"row"],p:[null,null,4],mt:[3,null,0],"& > .button-group-link":{flexBasis:"1/3",display:"flex",flexWrap:"wrap",alignItems:"flex-start",alignContent:"flex-start",minWidth:210,mb:[0,null,"inherit"],py:0}}},Z=function(t){var n=t.content,e=t.children,s=t.styles,p=void 0===s?{}:s,m=t.className,Z=(0,i.useContext)(r.tC).setActiveModal,f=(0,i.useContext)(c.RL).setActiveTab,b=n.type,g=n.text,x=n.link,v=n.target,h=n.variant,y=n.width,k=n.bg,w=n.icon,C=(0,u.H)({content:{type:b,link:x,target:v,variant:h},setActiveModal:Z,setActiveTab:f}),N=C.Component,z=C.linkProps;return(0,d.tZ)(N,(0,l.Z)({variant:h||"primary",sx:Object.assign({width:y,"::after":{bg:k,borderColor:k},position:"relative"},p)},z,{className:[z.className,m].join(" ")}),(0,d.tZ)(a.xu,{sx:{display:"inline-block"}},g," ",(0,d.tZ)(o.Z,{content:w,size:"xx",mr:"0",p:"0",m:"0",ml:"1"})),e)},f=function t(n){var e=n.content,l=n.level,i=void 0===l?1:l,o=e.collection,r=e.buttons,c="level-"+i;if(!o&&!r)return(0,d.tZ)(Z,{content:e,className:c});var u=function(n){return n.buttons.map((function(n,e){return(0,d.tZ)(t,{key:"item-"+e,level:i+1,content:n})}))};return(0,d.tZ)(Z,{content:e,styles:m.subButtonsParent,className:c},1===i&&(0,d.tZ)(p.OrA,null),(0,d.tZ)(a.xu,{sx:m.subContainer,className:"container-level-"+i+" "+(o?"":"no-collection")},o?o.map((function(t,n){var e=t.container,l=t.buttons;return(0,d.tZ)(s.Z,{key:"item-"+n,content:e,sx:m.subContainerCollection},(0,d.tZ)(u,{buttons:l}))})):(0,d.tZ)(u,{buttons:r})))},b=function(t){var n=t.content,e=t.variant,l=t.wrapperStyles;return n?(0,d.tZ)(i.Fragment,null,(0,d.tZ)(a.xu,{sx:Object.assign({},m[e],l)},null==n?void 0:n.map((function(t,n){return(0,d.tZ)(f,{key:"item-"+n,index:n,content:t})})))):null},g=b;b.defaultProps={variant:"horizontal"};e(5414),e(2757),e(3324),e(9718)},8397:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return k}});var l=e(8291),i=(e(7378),e(3314)),a=e(8110),o=e(8062),s=e(4886),r=e(8621),c=e(735),u=e(2059),p=e(5541),d=e(9542),m=e(3303),Z=e(6848),f=e(4123),b=(e(4003),e(666),e(9606)),g={colors:{background:"#fbfbfb",headerBg:"transparent",footerBg:"#f1f3f8"}},x=e.p+"static/contour-pattern-31b9121b55c7a157c438084d7a7bab57.svg",v={html:{overflowX:"hidden"},body:{overflowX:"hidden"},heroContainer:{"::before":{content:'" "',size:"full",position:"absolute",top:"-10%",left:0,zIndex:-1,background:function(t){return"url("+x+") no-repeat center 0, linear-gradient(\n          180deg,\n          "+t.colors.alphaLighter+" 0%,\n          "+t.colors.background+" 100%\n        )"},backgroundSize:"100%",bg:"omegaLighter",borderRadius:"xl",passing:"10px"}},footer:{display:"block",overflowX:"hidden"}},h=e(6495),y={image:{margin:"-50px auto 0px",display:"table"},image2:{margin:"0px auto 0px",display:"table"}},k=function(t){var n=t.data.allBlockContent,e=(0,p.c)(null==n?void 0:n.nodes);return(0,h.tZ)(a.Z,(0,l.Z)({theme:g},t,{xs:v.body}),(0,h.tZ)("div",{className:"innerpage-main classic"},(0,h.tZ)(o.Z,{title:"Email Content Spinner | Spin Tag | MumaraClassic",description:"Add variations in the content to make it relevant and somewhat unique for the contacts in the list, keeping bulk sending and content filters prospective in mind.",keywords:"email content spinning,content spinner,spin tags,spin email content,content spinning tool,bypass spam filters,bypass web filter"}),(0,h.tZ)("div",{className:"subheader-block"},(0,h.tZ)(r.Z,{content:e.subheader_classic,menuJustify:"space-between"})),(0,h.tZ)(c.Z,{content:e.header}),(0,h.tZ)(s.Z,{space:"5"}),(0,h.tZ)(s.Z,{space:"4"}),(0,h.tZ)(i.W2,{className:"innerpage-heroblock",variant:"full"},(0,h.tZ)(Z.Z,{content:e.hero}),(0,h.tZ)(s.Z,{space:"5"})),(0,h.tZ)("div",{className:"innerpage-section bg-white pt-0 pb-0"},(0,h.tZ)(b.Z,{content:e.images,sx:y.image,imageEffect:"fadeIn"})),(0,h.tZ)("div",{className:"innerpage-section bg-white"},(0,h.tZ)(f.Z,{content:e.services})),(0,h.tZ)("div",{className:"innerpage-section bg-light"},(0,h.tZ)(b.Z,{content:e.images2,sx:y.image2,imageEffect:"fadeIn"})),(0,h.tZ)("div",{className:"innerpage-section bg-white"},(0,h.tZ)(f.Z,{content:e.services2})),(0,h.tZ)(u.Z,{content:e.footer}),(0,h.tZ)(d.Z,null),(0,h.tZ)(m.Z,null)))}}}]);
//# sourceMappingURL=component---packages-themes-gatsby-theme-flexiblocks-src-pages-classic-features-spin-tag-index-jsx-d0fe251727780515ffce.js.map