(self.webpackChunk_elegantstack_gatsby_starter_flexiblocks=self.webpackChunk_elegantstack_gatsby_starter_flexiblocks||[]).push([[706],{4123:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var i=n(7378),a=n(3314),o=n(1025),r=n(4886),s=n(2730),l=n(4332),c=n(3059),m=n(6140),p=n(2132),u=n(3253),Z=n(6495),g={sheading:{fontSize:"1.1em"},listItem:{flex:"1 1 0",minWidth:300,p:3},itemDescription:{flexBasis:"3/5",flexGrow:1,order:[1,null,0],mb:3},icons:{padding:0,color:"#333",width:"16px",height:"16px",display:"inline-block",float:"left"}},d=(0,u.Z)((function(t){var e=t.content,n=e.text,u=e.collection;e.icon2;return(0,Z.tZ)(a.W2,{as:s.Z},(0,Z.tZ)(a.xu,{sx:{textAlign:"center"}},(0,Z.tZ)(c.Z,{content:n})),u&&(0,Z.tZ)(i.Fragment,null,(0,Z.tZ)(r.Z,null),(0,Z.tZ)(a.kC,{sx:{flexWrap:"wrap"},m:-3},u.map((function(t,e){var n=t.text,u=t.icon,d=(t.collection,t.buttons),f=t.container;return(0,Z.tZ)(s.Z,{key:"item-"+e,effect:"fadeInGrow",delay:.15*(e+1),css:(0,o.i)(g.listItem)},(0,Z.tZ)(l.Z,{content:f,variant:"cards.paper",sx:{height:"full"}},(0,Z.tZ)(m.Z,{content:u,size:"md",mr:"3",mb:"3"}),(0,Z.tZ)(c.Z,{content:null==n?void 0:n[0],sx:g.sheading}),(0,Z.tZ)(a.kC,{sx:{alignItems:"center",flexWrap:"wrap"}},(0,Z.tZ)(c.Z,{content:null==n?void 0:n.slice(1),sx:g.itemDescription,mt:[3,null,0]})),d&&(0,Z.tZ)(i.Fragment,null,(0,Z.tZ)(r.Z,{space:0}),(0,Z.tZ)(p.Z,{content:d,css:(0,o.i)(g.icons)}))))})))))}))},5839:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return q}});var i=n(8291),a=n(7378),o=n(3314),r=n(8110),s=n(8062),l=n(4886),c=n(5414),m=n(6267),p=n(1025),u=n(2730),Z=n(3924),g=n(9606),d=n(1690),f=n(3253),h=n(6495),b={wrapper:{position:"relative",zIndex:10,".nav-container":{bg:"headerBg",position:"fixed",transition:"all 250ms ease-in",py:3},".nav-sticky .nav-container":{bg:"headerActiveBg",boxShadow:"0 0 25px rgba(140,152,164,.25)",py:[3,null,2],".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}},".button-group-button":{minWidth:120,fontSize:1,px:4,py:2}},header:{justifyContent:"space-between",alignItems:"center"},logoContainer:{flexShrink:0,mr:[null,null,3,5]},desktopMenu:{display:["none",null,"block"],minWidth:"auto",flexGrow:1},mobileMenu:{display:["block",null,"none"]}},x=function(t){var e=t.content,n=e.images,i=e.collection,r=t.menuJustify;return(0,h.tZ)(a.Fragment,null,(0,h.tZ)(m.ZP,{enabled:"true",stickyClassName:"nav-sticky",css:(0,p.i)(b.wrapper)},(0,h.tZ)(o.W2,{variant:"full",className:"nav-container"},(0,h.tZ)(o.W2,{px:"4"},(0,h.tZ)(o.kC,{sx:b.header},(0,h.tZ)(o.xu,{sx:b.logoContainer},(0,h.tZ)(c.rU,{to:"/"},(0,h.tZ)(g.Z,{content:{images:n},sx:b.image,imageEffect:"fadeIn"}))),i&&(0,h.tZ)(a.Fragment,null,(0,h.tZ)(o.xu,{sx:b.desktopMenu},(0,h.tZ)(u.Z,{effect:"fadeInDown"},(0,h.tZ)(o.kC,{sx:{alignItems:"center",justifyContent:r}},i.map((function(t,e){var n=t.buttons;return n&&(0,h.tZ)(o.xu,{key:"item-"+e,sx:{"& + &":{ml:4}}},(0,h.tZ)(d.Z,{content:n}))}))))),(0,h.tZ)(o.xu,{sx:b.mobileMenu},(0,h.tZ)(Z.Z,{buttonStyle:{svg:{size:32}}},i.map((function(t,e){var n=t.buttons;return n&&(0,h.tZ)(o.xu,{key:"item-"+e,sx:{fontSize:3,".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}}},(0,h.tZ)(d.Z,{content:n,variant:"vertical"}))}))))))))))};x.defaultProps={menuJustify:"flex-end"};var v=(0,f.Z)(x),w=n(8621),y=n(3059),k=n(7451),P=n(315),C=["image","sx"],S=function(t){var e=t.image,n=t.sx,a=(0,k.Z)(t,C);if(null==e||!e.src)return null;if("svg"===e.src.extension)return(0,h.tZ)("img",(0,i.Z)({src:e.src.publicURL,style:{width:e.width||"100%",maxWidth:e.maxWidth||"none"}},a));var o=(0,P.d)(e.src);return o?(0,h.tZ)(P.G,(0,i.Z)({image:o,alt:e.alt,css:(0,p.i)(Object.assign({verticalAlign:"middle",borderStyle:e.border?"solid":"none",borderWidth:e.border||0,borderColor:"white",boxShadow:e.shadow||"unset",borderRadius:e.radius||"unset"},n))},a)):null},I=function(t){var e,n=t.content.images,i=t.reverse,o=t.imagePosition,r=t.objectPosition,s=t.imageFit,l=t.imageEffect,c=t.loading,m=t.sx;return n?(0,h.tZ)(a.Fragment,null,(0,h.tZ)(u.Z,{effect:l||(i?"fadeInRight":"fadeInLeft"),css:(0,p.i)({textAlign:"center"===o?"center":i?"right":void 0})},(0,h.tZ)(S,{image:n[0],loading:c,objectFit:s,objectPosition:r,sx:m})),null==n||null===(e=n.slice(1))||void 0===e?void 0:e.map((function(t,e){return t.src&&(0,h.tZ)(u.Z,{key:"item-"+e,effect:t.effects[0]||void 0,delay:.5,css:(0,p.i)(Object.assign({},t.position,{position:"absolute",display:["none","block"]}))},(0,h.tZ)(u.Z,{effect:t.effects[1]||void 0,style:{backfaceVisibility:"hidden"}},(0,h.tZ)(S,{image:t,loading:c})))}))):null};I.defaultProps={loading:"lazy"};var R=I,M=n(6328),W=(0,f.Z)((function(t){var e=t.content,n=e.text,r=e.buttons,s=e.form,c=e.images;return(0,h.tZ)(o.W2,{sx:{textAlign:"center"}},(0,h.tZ)(u.Z,{effect:"fadeInDown"},(0,h.tZ)(y.Z,{content:n})),r&&(0,h.tZ)(a.Fragment,null,(0,h.tZ)(l.Z,{space:3}),(0,h.tZ)(u.Z,{effect:"fadeInUp",duration:.7},(0,h.tZ)(d.Z,{content:r}))),s&&(0,h.tZ)(a.Fragment,null,(0,h.tZ)(l.Z,{space:4}),(0,h.tZ)(u.Z,{effect:"fadeInRight",delay:.7},(0,h.tZ)(M.Z,(0,i.Z)({},s,{space:3})))),c&&(0,h.tZ)(a.Fragment,null,(0,h.tZ)(l.Z,{space:4}),(0,h.tZ)(o.xu,{sx:{position:"relative"}},(0,h.tZ)(R,{content:{images:c},loading:"eager",imagePosition:"center",imageEffect:"fadeInUp"}))))})),z=n(615),F=n(4123),L=n(2577),T=n(5205),U=n(4415),A=n(6514),j=n(2132),B=(0,f.Z)((function(t){var e=t.content,n=e.text,r=e.images,s=e.collection,c=e.buttons,m=t.reverse;return(0,h.tZ)(o.W2,{sx:{position:"relative"}},(0,h.tZ)(o.kC,{sx:{alignItems:[null,"center"],flexDirection:[m?"column-reverse":"column",m?"row-reverse":"row"],mx:[null,null,null,-4]}},(0,h.tZ)(U.Z,{reverse:m},(0,h.tZ)(o.xu,{sx:{textAlign:["center","left"]}},(0,h.tZ)(y.Z,{content:n})),s&&(0,h.tZ)(a.Fragment,null,(0,h.tZ)(l.Z,{space:3}),(0,h.tZ)(u.Z,{effect:m?"fadeInRight":"fadeInLeft",duration:1.5},s.map((function(t,e){return(0,h.tZ)(a.Fragment,null,(0,h.tZ)(L.Z,(0,i.Z)({key:"item-"+e},t)),(0,h.tZ)(l.Z,{space:2}))})))),c&&(0,h.tZ)(a.Fragment,null,(0,h.tZ)(j.Z,{content:c}))),(0,h.tZ)(T.Z,{reverse:m},(0,h.tZ)(g.Z,{content:{images:r},reverse:m}))),(0,h.tZ)(A.Z,{direction:m?"ltr":"rtl"}))})),D=(n(3605),{wrapper:{position:"relative",bg:"footerBg"},footer:{flexDirection:["column-reverse","row"],justifyContent:"space-between",alignItems:["center","flex-start"],py:5},listBlk:{display:"block",overflowX:"hidden"}}),_=function(t){var e=t.content,n=e.text,i=e.images,a=e.collection;return(0,h.tZ)(o.xu,{sx:D.wrapper},(0,h.tZ)(o.W2,{px:"4"},(0,h.tZ)(o.kC,{sx:D.footer,xs:D.listBlk,className:"footerJoint"},(0,h.tZ)(o.xu,{sx:{minWidth:200}},(0,h.tZ)(o.xu,{pb:"1",mb:"2",mt:[4,0]},(0,h.tZ)(c.rU,{to:"/"},(0,h.tZ)(g.Z,{content:{images:i},imageEffect:"fadeIn"}))),(0,h.tZ)(o.xu,{pt:"2",mb:2},(0,h.tZ)(y.Z,{sx:{maxWidth:260},content:null==n?void 0:n[0]})),(0,h.tZ)(o.xu,{pt:"2",mb:[2,4]},"© ",(new Date).getFullYear(),", All Rights Reserved.")),null==a?void 0:a.map((function(t,e){var n=t.text,i=t.buttons;return i&&(0,h.tZ)(o.xu,{key:"item-"+e,mb:"3",xs:D.listBlk,className:"footer-links-block"},(0,h.tZ)(y.Z,{content:null==n?void 0:n[0],variant:"h5",sx:{display:["none","block"]}}),(0,h.tZ)(d.Z,{content:i,variant:"vertical",wrapperStyles:{flexDirection:[null,"column"]}}))})))))};_.defaultProps={menuJustify:"flex-end"};var E=(0,f.Z)(_),V=n(5541),N=n(9542),O=n(3303),H=n(7326);var J=function(t){return(0,h.tZ)(a.Fragment,null,(0,h.tZ)(H.q,null,(0,h.tZ)("script",{type:"application/ld+json"},'\n                        {\n                        "@context": "http://schema.org/", \n                        "@type": "BreadcrumbList", \n                        "itemListElement": [\n                            { \n                            "@type": "ListItem", \n                            "position": "1", \n                            "item": { \n                                "@id": "https://www.mumara.com", \n                                "name": "Mumara",\n                                "image": "https://www.mumara.com/assets/img/logo-dark.png" \n                            } \n                            },{ \n                            "@type": "ListItem", \n                            "position": "2", \n                            "item": { \n                                "@id": "https://www.mumara.com/classic/", \n                                "name": "Classic"\n                            } \n                            }\n                        ]\n                        }\n                    '),(0,h.tZ)("script",{type:"application/ld+json"},'\n                        {\n                        "@context": "http://schema.org/",\n                        "@type": "Product",\n                        "name": "MumaraClassic",\n                        "sku": "0445430786",\n                        "mpn": "925876",\n                        "image": [\n                            "https://www.mumara.com/assets/img/logo-dark.png"\n                        ],\n                        "description": "Start sending sizeable amount of emails speedily right in the target inbox with MumaraClassic. Reliable self-hosted email marketing software.",\n                        "brand": {\n                            "@type": "Thing",\n                            "name": "Mumara"\n                        },\n                        "review": {\n                                "@type": "Review",\n                                "reviewRating": {\n                                "@type": "Rating",\n                                "ratingValue": "4",\n                                "bestRating": "5"\n                                },\n                                "author": {\n                                "@type": "Person",\n                                "name": "Wasif Ahmed"\n                                }\n                        },\n                        "aggregateRating": {\n                            "@type": "AggregateRating",\n                            "ratingValue": "5.0",\n                            "reviewCount": "1797"\n                        },\n                        "offers": {\n                                "@type": "Offer",\n                                "url": "https://example.com/anvil",\n                                "priceCurrency": "USD",\n                                "price": "47",\n                                "priceValidUntil": "2021-11-20",\n                                "itemCondition": "https://schema.org/UsedCondition",\n                                "availability": "https://schema.org/InStock",\n                                "seller": {\n                                "@type": "Organization",\n                                "name": "Hostings House"\n                                }\n                        }\n                        }\n                    ')),(0,h.tZ)("ol",{itemScope:!0,itemType:"http://schema.org/BreadcrumbList",style:{display:"none"}},(0,h.tZ)("li",{itemProp:"itemListElement",itemScope:!0,itemType:"http://schema.org/ListItem"},(0,h.tZ)(c.rU,{itemScope:!0,itemType:"http://schema.org/Thing",itemProp:"item",to:"https://www.mumara.com",id:"https://www.mumara.com"},(0,h.tZ)("span",{itemProp:"name"},"Mumara"),(0,h.tZ)("img",{itemProp:"image",src:"https://www.mumara.com/assets/img/logo-dark.png",alt:"Mumara"})),(0,h.tZ)("meta",{itemProp:"position",content:"1"})),"›",(0,h.tZ)("li",{itemProp:"itemListElement",itemScope:!0,itemType:"http://schema.org/ListItem"},(0,h.tZ)(c.rU,{itemScope:!0,itemType:"http://schema.org/Thing",itemProp:"item",to:"https://www.mumara.com/classic/",id:"https://www.mumara.com/classic/"},(0,h.tZ)("span",{itemProp:"name"},"MumaraClassic"),(0,h.tZ)("img",{itemProp:"image",src:"https://www.mumara.com/assets/img/logo-dark.png",alt:"Classic | Mumara"})),(0,h.tZ)("meta",{itemProp:"position",content:"2"}))),(0,h.tZ)("div",{className:"schemaproduct",itemScope:!0,itemType:"http://schema.org/Product",style:{display:"none"}},(0,h.tZ)("meta",{itemProp:"mpn",content:"925876"}),(0,h.tZ)("span",{itemProp:"brand"},"Mumara"),(0,h.tZ)("span",{itemProp:"name"},"MumaraClassic"),(0,h.tZ)("script",{src:"https://ajax.cloudflare.com/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js","data-cf-settings":"a69688c148936313d2074b15-|49"}),(0,h.tZ)("img",{itemProp:"image",src:"https://www.mumara.com/assets/img/logo-dark.png",alt:"MumaraClassic","data-pagespeed-url-hash":"3376842629",onload:"pagespeed.CriticalImages.checkImageForCriticality(this);"}),(0,h.tZ)("span",{itemProp:"description"},"Start sending sizeable amount of emails speedily right in the target inbox with MumaraClassic. Reliable self-hosted email marketing software."),"Product #: ",(0,h.tZ)("span",{itemProp:"mpn"},"1"),(0,h.tZ)("span",{itemProp:"aggregateRating",itemScope:!0,itemType:"http://schema.org/AggregateRating"},(0,h.tZ)("span",{itemProp:"ratingValue"},"5.0")," stars, based on ",(0,h.tZ)("span",{itemProp:"reviewCount"},"1797")," reviews"),(0,h.tZ)("span",{itemProp:"offers",itemScope:!0,itemType:"http://schema.org/Offer"},"Regular price: $47",(0,h.tZ)("meta",{itemProp:"priceCurrency",content:"USD"}),"$",(0,h.tZ)("span",{itemProp:"price"},"47"),"Available from: ",(0,h.tZ)("span",{itemProp:"seller",itemScope:!0,itemType:"http://schema.org/Organization"},(0,h.tZ)("span",{itemProp:"name"},"Hostings House")),(0,h.tZ)("link",{itemProp:"url",href:"https://www.mumara.com/campaigns/"}),(0,h.tZ)("meta",{itemProp:"availability",content:"https://schema.org/InStock"}),(0,h.tZ)("meta",{itemProp:"priceCurrency",content:"USD"}),(0,h.tZ)("meta",{itemProp:"itemCondition",content:"https://schema.org/UsedCondition"}),(0,h.tZ)("meta",{itemProp:"price",content:"47"}),(0,h.tZ)("meta",{itemProp:"priceValidUntil",content:"2021-11-20"})),(0,h.tZ)("meta",{itemProp:"sku",content:"0445430786"}),(0,h.tZ)("div",{itemProp:"review",itemType:"http://schema.org/Review",itemScope:!0},(0,h.tZ)("div",{itemProp:"author",itemType:"http://schema.org/Person",itemScope:!0},(0,h.tZ)("meta",{itemProp:"name",content:"Wasif Ahmed"})),(0,h.tZ)("div",{itemProp:"reviewRating",itemType:"http://schema.org/Rating",itemScope:!0},(0,h.tZ)("meta",{itemProp:"ratingValue",content:"5.0"}),(0,h.tZ)("meta",{itemProp:"bestRating",content:"5"})))))},G={colors:{background:"#fbfbfb",headerBg:"transparent",footerBg:"#f1f3f8"}},X=n.p+"static/contour-pattern-31b9121b55c7a157c438084d7a7bab57.svg",$={html:{overflowX:"hidden"},body:{overflowX:"hidden"},heroContainer:{"::before":{content:'" "',size:"full",position:"absolute",top:"-10%",left:0,zIndex:-1,background:function(t){return"url("+X+") no-repeat center 0, linear-gradient(\n          180deg,\n          "+t.colors.alphaLighter+" 0%,\n          "+t.colors.background+" 100%\n        )"},backgroundSize:"100%"}},strategiesContainer:{position:"relative","::before":{content:'" "',width:"full",height:"150%",position:"absolute",top:0,left:0,zIndex:-1,background:function(t){return"url("+X+") no-repeat center 0, linear-gradient(\n          180deg,\n          "+t.colors.alphaLighter+" 0%,\n          "+t.colors.background+" 100%\n        )"},backgroundSize:"100%"}},whyChooseUsContainer:{bg:"omegaLighter",borderRadius:"xl",py:5,px:[4,0]},footer:{display:"block",overflowX:"hidden"}},q=function(t){var e=t.data.allBlockContent,n=(0,V.c)(null==e?void 0:e.nodes);return(0,h.tZ)(r.Z,(0,i.Z)({theme:G},t,{xs:$.body}),(0,h.tZ)(s.Z,{title:"Self-Hosted Email Marketing | MumaraClassic",description:"Start sending sizeable amount of emails speedily right in the target inbox with MumaraClassic. Reliable self-hosted email marketing software."}),(0,h.tZ)("div",{className:"subheader-block"},(0,h.tZ)(w.Z,{content:n.subheader_classic,menuJustify:"space-between"})),(0,h.tZ)(v,{content:n.header}),(0,h.tZ)(l.Z,{space:"5"}),(0,h.tZ)(l.Z,{space:"5"}),(0,h.tZ)(o.W2,{variant:"full",sx:$.heroContainer},(0,h.tZ)(W,{content:n.hero})),(0,h.tZ)(l.Z,{space:"3"}),(0,h.tZ)(z.Z,{content:n.companies}),(0,h.tZ)(l.Z,{space:"5"}),(0,h.tZ)(l.Z,{space:"5"}),(0,h.tZ)(B,{content:n["feature-one"]}),(0,h.tZ)(l.Z,{space:"5"}),(0,h.tZ)(F.Z,{content:n.services}),(0,h.tZ)(F.Z,{content:n.services2}),(0,h.tZ)(l.Z,{space:"5"}),(0,h.tZ)(l.Z,{space:"5"}),(0,h.tZ)(E,{content:n.footer}),(0,h.tZ)(N.Z,null),(0,h.tZ)(O.Z,null),(0,h.tZ)(J,null))}}}]);
//# sourceMappingURL=component---packages-themes-gatsby-theme-flexiblocks-src-pages-classic-index-jsx-213faad3d86b26e4e858.js.map