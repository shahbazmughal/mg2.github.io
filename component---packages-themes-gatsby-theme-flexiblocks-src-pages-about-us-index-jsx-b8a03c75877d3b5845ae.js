(self.webpackChunk_elegantstack_gatsby_starter_flexiblocks=self.webpackChunk_elegantstack_gatsby_starter_flexiblocks||[]).push([[7402],{4133:function(t,e,a){"use strict";a.d(e,{Z:function(){return c}});var n=a(7378),i=a(8830),l=a(249),s=a(6495),o=function(t){var e=t.from,a=t.to,o=t.delay,c=t.duration,r=(0,n.useRef)(),m=(0,l.YD)({triggerOnce:!0,threshold:.5}),u=m[0],Z=m[1],d=parseInt(e),f=parseInt(a);return(0,n.useEffect)((function(){if(Z){var t=r.current,e=(0,i.jt)(d,f,{duration:c,delay:o,onUpdate:function(e){t.textContent=e.toFixed(0)}});return function(){return e.stop()}}}),[d,f,Z]),(0,s.tZ)("span",{ref:u},(0,s.tZ)("span",{ref:r}))},c=o;o.defaultProps={duration:2,from:0}},2577:function(t,e,a){"use strict";a.d(e,{Z:function(){return r}});var n=a(8291),i=(a(7378),a(3314)),l=a(3059),s=a(6140),o=a(6495),c=function(t){var e,a=t.icon,c=t.iconProps,r=t.text,m=t.description,u=t.compact,Z=t.vertical,d=t.center,f=t.middle;return(0,o.tZ)(i.kC,{sx:{flexDirection:Z?"column":"row",alignItems:d?"center":"flex-start",textAlign:d&&Z?"center":"unset",justifyContent:f?"center":"unset","& + &":{mt:m?u?3:4:2}}},(null==a?void 0:a.src)&&(0,o.tZ)(i.xu,{sx:(e={display:"inline-flex",flexShrink:0},e[Z?"mb":"mr"]=u?2:3,e)},(0,o.tZ)(s.Z,(0,n.Z)({content:a,size:"sm",p:u?1:void 0},c))),(0,o.tZ)(i.xu,{sx:{alignSelf:Z?"auto":"center"}},(0,o.tZ)(l.Z,{content:r})))};c.defaultProps={iconProps:{}};var r=c},3605:function(t,e,a){"use strict";a(7378),a(6495)},7746:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return E}});var n=a(8291),i=a(7378),l=a(3314),s=a(8110),o=a(8062),c=a(4886),r=a(5414),m=a(6267),u=a(1025),Z=a(2730),d=a(3924),f=a(9606),g=a(1690),v=a(3253),p=a(6495),b={wrapper:{position:"relative",zIndex:10,".nav-container":{bg:"headerBg",position:"fixed",transition:"all 250ms ease-in",py:3},".nav-sticky .nav-container":{bg:"headerActiveBg",boxShadow:"0 0 25px rgba(140,152,164,.25)",py:[3,null,2],".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}},".button-group-button":{minWidth:120,fontSize:1,px:4,py:2}},header:{justifyContent:"space-between",alignItems:"center"},logoContainer:{flexShrink:0,mr:[null,null,3,5]},desktopMenu:{display:["none",null,"block"],minWidth:"auto",flexGrow:1},mobileMenu:{display:["block",null,"none"]}},x=function(t){var e=t.content,a=e.images,n=e.collection,s=t.menuJustify;return(0,p.tZ)(i.Fragment,null,(0,p.tZ)(m.ZP,{enabled:"true",stickyClassName:"nav-sticky",css:(0,u.i)(b.wrapper)},(0,p.tZ)(l.W2,{variant:"full",className:"nav-container"},(0,p.tZ)(l.W2,{px:"4"},(0,p.tZ)(l.kC,{sx:b.header},(0,p.tZ)(l.xu,{sx:b.logoContainer},(0,p.tZ)(r.rU,{to:"/"},(0,p.tZ)(f.Z,{content:{images:a},sx:b.image,imageEffect:"fadeIn"}))),n&&(0,p.tZ)(i.Fragment,null,(0,p.tZ)(l.xu,{sx:b.desktopMenu},(0,p.tZ)(Z.Z,{effect:"fadeInDown"},(0,p.tZ)(l.kC,{sx:{alignItems:"center",justifyContent:s}},n.map((function(t,e){var a=t.buttons;return a&&(0,p.tZ)(l.xu,{key:"item-"+e,sx:{"& + &":{ml:4}}},(0,p.tZ)(g.Z,{content:a}))}))))),(0,p.tZ)(l.xu,{sx:b.mobileMenu},(0,p.tZ)(d.Z,{buttonStyle:{svg:{size:32}}},n.map((function(t,e){var a=t.buttons;return a&&(0,p.tZ)(l.xu,{key:"item-"+e,sx:{fontSize:3,".button-group-link.level-1, button-group-link.level-1:visited":{color:"headerActiveColor"}}},(0,p.tZ)(g.Z,{content:a,variant:"vertical"}))}))))))))))};x.defaultProps={menuJustify:"flex-end"};var A=(0,v.Z)(x),h=a(3059),N=(a(3605),{wrapper:{position:"relative",bg:"footerBg"},footer:{flexDirection:["column-reverse","row"],justifyContent:"space-between",alignItems:["center","flex-start"],py:5},listBlk:{display:"block",overflowX:"hidden"}}),k=function(t){var e=t.content,a=e.text,n=e.images,i=e.collection;return(0,p.tZ)(l.xu,{sx:N.wrapper},(0,p.tZ)(l.W2,{px:"4"},(0,p.tZ)(l.kC,{sx:N.footer,xs:N.listBlk,className:"footerJoint"},(0,p.tZ)(l.xu,{sx:{minWidth:200}},(0,p.tZ)(l.xu,{pb:"1",mb:"2",mt:[4,0]},(0,p.tZ)(r.rU,{to:"/"},(0,p.tZ)(f.Z,{content:{images:n},imageEffect:"fadeIn"}))),(0,p.tZ)(l.xu,{pt:"2",mb:2},(0,p.tZ)(h.Z,{sx:{maxWidth:260},content:null==a?void 0:a[0]})),(0,p.tZ)(l.xu,{pt:"2",mb:[2,4]},"© ",(new Date).getFullYear(),", All Rights Reserved.")),null==i?void 0:i.map((function(t,e){var a=t.text,n=t.buttons;return n&&(0,p.tZ)(l.xu,{key:"item-"+e,mb:"3",xs:N.listBlk,className:"footer-links-block"},(0,p.tZ)(h.Z,{content:null==a?void 0:a[0],variant:"h5",sx:{display:["none","block"]}}),(0,p.tZ)(g.Z,{content:n,variant:"vertical",wrapperStyles:{flexDirection:[null,"column"]}}))})))))};k.defaultProps={menuJustify:"flex-end"};var j=(0,v.Z)(k),y=a(4332),C=(a(2577),(0,v.Z)((function(t){var e=t.content,a=e.text,n=void 0===a?[]:a;e.collection,e.buttons;return(0,p.tZ)(l.W2,{sx:{textAlign:"left"},className:"about-content"},(0,p.tZ)(Z.Z,{effect:"fadeInDown"},(0,p.tZ)(l.kC,{sx:{justifyContent:"start",flexWrap:"wrap",m:0}},(0,p.tZ)(y.Z,null,(0,p.tZ)(l.xu,{sx:{flexBasis:["1","1/2",null,"1/2"],p:2}},(0,p.tZ)(h.Z,{content:n,sx:{textAlign:"center"}}))))))}))),U=a(315),T={flexDirection:"column",size:"full",alignItems:"center",justifyContent:"center",py:0},w=(0,v.Z)((function(t){var e,a,n=t.content,i=(n.container,n.text),s=(n.buttons,n.form,n.images);return(0,p.tZ)(l.W2,{className:"companyadmin",variant:"full",sx:{textAlign:"center",position:"relative"}},(0,p.tZ)(l.kC,{sx:Object.assign({},T,{minHeight:null!=s&&null!==(e=s[0])&&void 0!==e&&e.src?null===(a=(0,U.d)(s[0].src))||void 0===a?void 0:a.height:void 0})},(0,p.tZ)(Z.Z,{effect:"fadeInDown"},(0,p.tZ)(h.Z,{content:null==i?void 0:i[0],sx:{bg:"alphaDark",display:"inline-block"},px:"2",mb:"2",mt:"3"}),(0,p.tZ)(h.Z,{content:null==i?void 0:i[1],mb:"5",mt:"0",mx:"auto"}),(0,p.tZ)(h.Z,{content:null==i?void 0:i.slice(2),mx:"auto"}))),(0,p.tZ)(l.kC,{sx:Object.assign({},T)},(0,p.tZ)(Z.Z,{effect:"fadeInDown"},(0,p.tZ)("div",{className:"container "},(0,p.tZ)("div",{className:"row gy-4"},(0,p.tZ)("div",{className:"col-lg-4 col-md-6 d-flex align-items-stretch aos-animate"},(0,p.tZ)("div",{className:"member"},(0,p.tZ)("div",{className:"member-img"},(0,p.tZ)("img",{src:"/static/shafaat-01fb85c5ac5a85c72fad3d57d9b87538.jpg",className:"img-fluid",alt:""})),(0,p.tZ)("div",{className:"member-info"},(0,p.tZ)("h4",null,"Shafaat Ahmad"),(0,p.tZ)("span",null,"Chief Operation Officer")))),(0,p.tZ)("div",{className:"col-lg-4 col-md-6 d-flex align-items-stretch aos-animate"},(0,p.tZ)("div",{className:"member"},(0,p.tZ)("div",{className:"member-img"},(0,p.tZ)("img",{src:"/static/wasif-344f3094ff9e31f531ebfd6683874b9e.jpg",className:"img-fluid",alt:""})),(0,p.tZ)("div",{className:"member-info"},(0,p.tZ)("h4",null,"Wasif Ahmad"),(0,p.tZ)("span",null,"Founder & CEO")))),(0,p.tZ)("div",{className:"col-lg-4 col-md-6 d-flex align-items-stretch aos-animate"},(0,p.tZ)("div",{className:"member"},(0,p.tZ)("div",{className:"member-img"},(0,p.tZ)("img",{src:"/static/umer-5cc6bde6adb189d9b735f0123976e624.jpg",className:"img-fluid",alt:""})),(0,p.tZ)("div",{className:"member-info"},(0,p.tZ)("h4",null,"Muhammad Umer Ali"),(0,p.tZ)("span",null,"Brand Ambassador")))))))))})),O={flexDirection:"column",size:"full",alignItems:"center",justifyContent:"center",py:0},B=(0,v.Z)((function(t){var e,a,n=t.content,i=(n.container,n.text),s=(n.buttons,n.form,n.images);return(0,p.tZ)(l.W2,{className:"companyteam",variant:"full",sx:{textAlign:"center",position:"relative"}},(0,p.tZ)(l.kC,{sx:Object.assign({},O,{minHeight:null!=s&&null!==(e=s[0])&&void 0!==e&&e.src?null===(a=(0,U.d)(s[0].src))||void 0===a?void 0:a.height:void 0})},(0,p.tZ)(Z.Z,{effect:"fadeInDown"},(0,p.tZ)(h.Z,{content:null==i?void 0:i[0],sx:{display:"inline-block"},px:"0",mb:"0",mt:"0"}),(0,p.tZ)(h.Z,{content:null==i?void 0:i[1],mb:"0",mt:"0",mx:"auto"}),(0,p.tZ)(h.Z,{content:null==i?void 0:i.slice(2),mx:"auto",mb:"5"}))),(0,p.tZ)(l.kC,{sx:Object.assign({},O)},(0,p.tZ)(Z.Z,{effect:"fadeInDown"},(0,p.tZ)("div",{className:"container "},(0,p.tZ)("div",{className:"row gy-4"},(0,p.tZ)("div",{className:"col-lg-3 col-md-6 d-flex align-items-stretch aos-animate"},(0,p.tZ)("div",{className:"member"},(0,p.tZ)("div",{className:"member-img"},(0,p.tZ)("img",{src:"/static/arfan-e4bd9275e87df2a68c3ef62ea5b584ef.jpg",className:"img-fluid",alt:""})),(0,p.tZ)("div",{className:"member-info"},(0,p.tZ)("h4",null,"Muhammad Arfan"),(0,p.tZ)("span",null,"Sr Software Programmer")))),(0,p.tZ)("div",{className:"col-lg-3 col-md-6 d-flex align-items-stretch aos-animate"},(0,p.tZ)("div",{className:"member"},(0,p.tZ)("div",{className:"member-img"},(0,p.tZ)("img",{src:"/static/shahbazmughal-dcd44c69627512b5cdeffce4a5cd402e.jpg",className:"img-fluid",alt:""})),(0,p.tZ)("div",{className:"member-info"},(0,p.tZ)("h4",null,"Shahbaz Mughal"),(0,p.tZ)("span",null,"Expert UI/UX")))),(0,p.tZ)("div",{className:"col-lg-3 col-md-6 d-flex align-items-stretch aos-animate"},(0,p.tZ)("div",{className:"member"},(0,p.tZ)("div",{className:"member-img"},(0,p.tZ)("img",{src:"/static/adnan-e0521b02d51ec4dce21ecb6e85468be7.jpg",className:"img-fluid",alt:""})),(0,p.tZ)("div",{className:"member-info"},(0,p.tZ)("h4",null,"Adnan Rasheed"),(0,p.tZ)("span",null,"Software Engineer")))),(0,p.tZ)("div",{className:"col-lg-3 col-md-6 d-flex align-items-stretch aos-animate"},(0,p.tZ)("div",{className:"member"},(0,p.tZ)("div",{className:"member-img"},(0,p.tZ)("img",{src:"/static/azeem-46b88b77fdeabd0a004057151c97f56a.jpg",className:"img-fluid",alt:""})),(0,p.tZ)("div",{className:"member-info"},(0,p.tZ)("h4",null,"M. Azeem"),(0,p.tZ)("span",null,"Sr Software Programmer")))),(0,p.tZ)("div",{className:"col-lg-3 col-md-6 d-flex align-items-stretch aos-animate"},(0,p.tZ)("div",{className:"member"},(0,p.tZ)("div",{className:"member-img"},(0,p.tZ)("img",{src:"/static/m-wakeel-e7c1b7e7d8bc0790dfbf6b0a6777c4f6.png",className:"img-fluid",alt:""})),(0,p.tZ)("div",{className:"member-info"},(0,p.tZ)("h4",null,"Muhammad M. Wakeel"),(0,p.tZ)("span",null,"Support Administrator")))),(0,p.tZ)("div",{className:"col-lg-3 col-md-6 d-flex align-items-stretch aos-animate"},(0,p.tZ)("div",{className:"member"},(0,p.tZ)("div",{className:"member-img"},(0,p.tZ)("img",{src:"/static/rehanbutt-edae889b6805102cb4923cc5d24357d8.jpg",className:"img-fluid",alt:""})),(0,p.tZ)("div",{className:"member-info"},(0,p.tZ)("h4",null,"Rehan Butt"),(0,p.tZ)("span",null,"Datacenter Administrator")))),(0,p.tZ)("div",{className:"col-lg-3 col-md-6 d-flex align-items-stretch aos-animate"},(0,p.tZ)("div",{className:"member"},(0,p.tZ)("div",{className:"member-img"},(0,p.tZ)("img",{src:"/static/asim-malick-8b453952af62859f655cf55d8e9dd935.jpg",className:"img-fluid",alt:""})),(0,p.tZ)("div",{className:"member-info"},(0,p.tZ)("h4",null,"Asim Malik"),(0,p.tZ)("span",null,"Accounts Manager")))),(0,p.tZ)("div",{className:"col-lg-3 col-md-6 d-flex align-items-stretch aos-animate"},(0,p.tZ)("div",{className:"member"},(0,p.tZ)("div",{className:"member-img"},(0,p.tZ)("img",{src:"/static/maida-shahid-c9ff4f2f78ebcdda06ed4960c0220ffa.png",className:"img-fluid",alt:""})),(0,p.tZ)("div",{className:"member-info"},(0,p.tZ)("h4",null,"Maida Shahid"),(0,p.tZ)("span",null,"Head of Sales")))))))))})),W={flexDirection:"column",size:"full",alignItems:"center",justifyContent:"center",py:0},S=(0,v.Z)((function(t){var e=t.content;e.container,e.text,e.buttons,e.form,e.images;return(0,p.tZ)(l.W2,{className:"about-mission",variant:"full",sx:{textAlign:"center",position:"relative"}},(0,p.tZ)(l.kC,{sx:Object.assign({},W)},(0,p.tZ)(Z.Z,{effect:"fadeInDown"},(0,p.tZ)("div",{className:"container "},(0,p.tZ)("div",{className:"row gy-4"},(0,p.tZ)("div",{className:"col-lg-4 d-flex flex-column justify-content-center text-left"},(0,p.tZ)("div",{class:"feature-block"},(0,p.tZ)("div",{class:"css-icon"},(0,p.tZ)("img",{src:"data:image/png;base64,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",alt:"Our Mission",height:"60"})),(0,p.tZ)("h5",{class:"text-left mb-1"},"Our Mission"),(0,p.tZ)("p",{class:"text-left max1100"},"Our mission is providing email marketing industry with most advance application/ tools, to maximize results, with minimum manual effort."))),(0,p.tZ)("div",{className:"col-lg-4 d-flex flex-column justify-content-center text-left"},(0,p.tZ)("div",{class:"feature-block"},(0,p.tZ)("div",{class:"css-icon"},(0,p.tZ)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAACWCAMAAAD5TxYwAAAALVBMVEVNTU1NTU1NTU1MT1NNTU1NTU1NTU1NTU05cK4pjv8pjv8pjv8pjv8pjv9NTU2nQQbpAAAADXRSTlPG54cAGTdfqBE3iMXtKkj0HQAABR9JREFUaN7NW9264yoIXaJgmrZ5/8edi+6zGxUUTc58w13T1CWLHxUpok8SsxDljxAJc3L+Eo53WAjhqCWAhO9AYG30X0Hm7RICU2f0/3QhXkYQHD6BpBUECYdfAk0jTI1/HMcRZJtBYBzzAvYj0LEm2YmwpMAPVexBkOOK0BghH9ckb32E1AMIAR8JPUdD6iEkywQB52SXEgtlCyYkG8EACKTGbLJySgmBEUBAL+2wqklB1Alh0wBolKATDSDQ9SLyLDMaBjQE8qYBV4xSiyCO4LGlnZ7UCCk4EkBPjWA5FAwjIMU5aRwxlwhsW8ot0HmC6qg5rkhWeYJmKMR4BwR9ESozh7SIUNniMw4UFTiuCitKoFVB4rpIqwSaxzlekdxMFo2b8SWEMvLwQeDlXDHOHxwjqmfLfhTV9EMxoiLpqgrVhBEjKub4MkKqaELpSTlel1xygvKB3IBQTRlF0gt8A0JhaySUn2O8m6YEvteTGm9iyN1mqAwhoJ6vbrtLtk7moAKhCejH8/0ayvu1d0xNOJsF1WT2t1OeD3PFziXCIsD7/VxCeLz8CO/9sYAwocL7/dyNgPh/EP42S7a3bjOWPnvhFmyEMuIeEyp04qGTNbbndwRVvjQ+zF2TdDPfro/wO4OXHg7SQaiWuIcRUc0Edjt7M4q9Zp2Ynl0ljG/LNS1Vqyj7ZtnVsGIF5XpBEzRZ8FTvBArIYBHxamjarO9QeieqTZq4aXKRFFJEZXq/N7k8KceIenPPTm/6BsNrsw8pEiPqvWx20uRSIaTP+SF3lPgm2OfmUY6b0w7Up+ORLOR2tmjP2uJhw3gs7akZxvlOm+xYNe3MCaVgkMc0GV6clYM/tNKPDPnQSVKHgVb1KNY61aZqxqgqQD/7O702U5hCoUklqa7/cLe+hD5NKkm5W19qamRZXSy3Tlolo8Zm1vmoQ9NDUYGs38MshpJNk7JDIPMqAla0nCC+NNUIv2mV7DokzOLQaR67hbBbxVDR695kVVwf1ZR/Q+Qx+GFTu8/Wm7seD7sBkM3bgba2Lr8HutfrfJQ6f5b+HQc6pRtfJcWuFqu3NM3r4yoBBuVsjGY0KhPIqF6OkdKDolnNa1t7wZBXmrkWUIo7GE6rq8Q2fhdjzcVfwWXvzau/xJvHc8GY3Q5NTenTjdDdj3f22RN37OTzJs9rcEwu+8zAc30C6JSd5t6CY3amqQtz5cleB/Ik2OSxFjyhxB5XkkkE14/l7yLwJIKLYvKUzHHFTcjjcPC4eva4dLyCcEAXV9kfzjvOtZ6ZLgL9cwj0DyLMtgDJP4jAkwg8jZDmOrHs7QLiPaae77abjLnOngr+PemSBoO+ykREIqPeyn6H07A3NAl1TR6yDO7Muwhbt/P0OAI5+mjhb/Boetd8F8GIK84UsrjvmTFxyOy3xi0gqJmp4YZF+DaElhv+OFpeRCgPEa1bnnr58qKl5czNVoVJdh5i+vHwgcg19fXw63kpxiSN3yQ1CvN61qgdB9OpbwKB7QzV6/OAe/iwskg7EVI/gV/M3prj3Ji9Y5Ru+r6cvfvrqOOPCd6IcyXANYQN1p8R+J7srVQujyNAJnvZphDGjjNrh9xb2pKQbFcRvuto7Tg/CcrTFQZHPbh2nFOCckBgmDDK4TfOmGvPm8reSgYZd0niyvB3IiRrfxluYsn+747cg8ArJ5MpBJj/lor3IGj5yZ+g1hBmEtQCS66VbRJBDnt/eZO30vTKNh1xnLGyNsQY4x/gs4TXrSSGCQAAAABJRU5ErkJggg==",alt:"Our Vision",height:"60"})),(0,p.tZ)("h5",{class:"text-left mb-1"},"Our Vision"),(0,p.tZ)("p",{class:"text-left max1100"},"Our vision is to keep our core customer-centric approach fixed, while our business strategies evolve and adapt to ever changing tech space."))),(0,p.tZ)("div",{className:"col-lg-4 d-flex flex-column justify-content-center text-left"},(0,p.tZ)("div",{class:"feature-block"},(0,p.tZ)("div",{class:"css-icon"},(0,p.tZ)("img",{src:"data:image/png;base64,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",alt:"Our Team",height:"60"})),(0,p.tZ)("h5",{class:"text-left mb-1"},"Our Team"),(0,p.tZ)("p",{class:"text-left max1100"},"Our team is inspired to be best when it comes to assisting, suggest solutions and to keep a level head when fixing issue."))))))))})),V={subTitle:{maxWidth:500},content:{flexDirection:"column",size:"full",alignItems:"center",justifyContent:"center",py:0},overlay:{size:"full",bg:"omegaDarker",opacity:.75,position:"absolute",top:0,zIndex:-1},image:{size:"full",position:"absolute",top:0,zIndex:-2}},q=(0,v.Z)((function(t){var e,a,n=t.content,i=n.container,s=n.text,o=(n.buttons,n.form,n.images);return(0,p.tZ)(l.W2,{variant:"full",sx:{textAlign:"center",position:"relative"}},(0,p.tZ)(l.kC,{sx:Object.assign({},V.content,{minHeight:null!=o&&null!==(e=o[0])&&void 0!==e&&e.src?null===(a=(0,U.d)(o[0].src))||void 0===a?void 0:a.height:void 0})},(0,p.tZ)(Z.Z,{effect:"fadeInDown"},(0,p.tZ)(l.xu,{sx:{mt:3}}),(0,p.tZ)(h.Z,{content:null==s?void 0:s[0],sx:{bg:"omegaDarker",display:"inline-block"},px:"2",mb:"3",mt:"5"}),(0,p.tZ)(h.Z,{content:null==s?void 0:s[1],mb:"0",mt:"0",mx:"auto"}),(0,p.tZ)(h.Z,{content:null==s?void 0:s.slice(2),mx:"auto"}))),(0,p.tZ)(y.Z,{content:i,sx:V.overlay,className:"block-overlay"}),(0,p.tZ)(l.xu,{sx:V.image},(0,p.tZ)(f.Z,{loading:"eager",content:{images:o},sx:{size:"full"},imageEffect:"fadeIn"})))})),R=a(5541),I=a(4133),K=(0,v.Z)((function(t){var e=t.content,a=e.text,n=e.container,s=e.collection,o=e.buttons;return(0,p.tZ)(l.W2,{sx:{textAlign:"center"}},(0,p.tZ)(y.Z,{content:n,variant:"cards.paper-lg"},(0,p.tZ)(h.Z,{content:a}),a&&s&&(0,p.tZ)(c.Z,{space:3}),s&&(0,p.tZ)(i.Fragment,null,(0,p.tZ)(l.kC,{sx:{flexWrap:"wrap",alignItems:"flex-start",alignContent:"center",justifyContent:"center",m:-1}},null==s?void 0:s.map((function(t,e){var a,n=t.text;return(0,p.tZ)(l.xu,{key:"item-"+e,sx:{flex:"1",minWidth:100,textAlign:"center",p:1}},(0,p.tZ)(Z.Z,{effect:"fadeInGrow",delay:.2*(e+2)},(0,p.tZ)(h.Z,{content:null==n?void 0:n[0],mb:"0"},(0,p.tZ)(I.Z,{to:parseInt(null==n||null===(a=n[0])||void 0===a?void 0:a.text)})),(0,p.tZ)(h.Z,{content:null==n?void 0:n[1],sx:{fontWeight:"body"},mb:"0"})))})))),o&&(0,p.tZ)(i.Fragment,null,(0,p.tZ)(c.Z,null),(0,p.tZ)(g.Z,{content:o}))))})),Q=(a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,{heroContainer:{position:"relative",pt:[6],"::before":{position:"absolute",content:'" "',width:"full",height:"100%",top:0,right:0,zIndex:-1,bg:"white"}},heroContainer2:{position:"relative",pt:[0]}}),F={colors:{background:"#fbfbfb",headerBg:"#FFFFFF",footerBg:"#f1f3f8"}},E=function(t){var e=t.data.allBlockContent,a=(0,R.c)(null==e?void 0:e.nodes);return(0,p.tZ)(s.Z,(0,n.Z)({theme:F},t),(0,p.tZ)(o.Z,{title:"About us | Mumara"}),(0,p.tZ)("div",{className:"aboutus-page-main"},(0,p.tZ)(A,{content:a.header}),(0,p.tZ)(q,{content:a.team}),(0,p.tZ)(l.W2,{className:"avout-us-page",variant:"full",sx:Q.heroContainer},(0,p.tZ)(C,{content:a.cl_features}),(0,p.tZ)(c.Z,{space:"5"}),(0,p.tZ)(c.Z,{space:"5"})),(0,p.tZ)(l.W2,{variant:"narrow"},(0,p.tZ)(K,{content:a.stats}),(0,p.tZ)(c.Z,{space:"5"})),(0,p.tZ)(c.Z,{space:"5"}),(0,p.tZ)(l.W2,{variant:"full",sx:Q.heroContainer2},(0,p.tZ)(w,{content:a.company_admin}),(0,p.tZ)(B,{content:a.company_team}),(0,p.tZ)(S,{content:a.mission})),(0,p.tZ)(j,{content:a.footer})))}}}]);
//# sourceMappingURL=component---packages-themes-gatsby-theme-flexiblocks-src-pages-about-us-index-jsx-b8a03c75877d3b5845ae.js.map