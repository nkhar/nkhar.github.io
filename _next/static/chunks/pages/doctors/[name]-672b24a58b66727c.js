(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[712],{3772:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/doctors/[name]",function(){return r(7318)}])},6931:function(e,t,r){"use strict";var a=r(5893),o=r(2071),n=r.n(o);let i=()=>(0,a.jsx)("footer",{className:n().actual_footer,children:(0,a.jsxs)("div",{className:n().footer_wrapper,children:[(0,a.jsx)("p",{children:"Georgia Foot and Ankle Institute"}),(0,a.jsx)("p",{children:"Phone (appointments): 2-752-996 | Phone (general inquiries): 2-752-996"}),(0,a.jsx)("p",{children:"Adress: 26 Bezhan Kalandadze St, Tbilisi, Georgia"}),(0,a.jsx)("p",{children:"\xa9 Georgian Foot and Ankle Institute 2022"})]})});t.Z=i},3248:function(e,t,r){"use strict";var a=r(5893),o=r(7294),n=r(9603),i=r(3024),c=r(3481),s=r.n(c);let l=()=>{let[e,t]=(0,o.useState)({fbHref:"",twitterHref:"",linkedinHref:"",pinterestHref:"",redditHref:""});return(0,o.useEffect)(()=>{let e=encodeURI(window.location.href),r=encodeURIComponent("Hey, Check your health"),a=document.title,o=encodeURIComponent(a),n="https://twitter.com/share?url=".concat(e,"&text=").concat(r),i="https://www.linkedin.com/shareArticle?url=".concat(e,"&title=").concat(o),c="https://pinterest.com/pin/create/bookmarklet/?url=".concat(e,"&description=").concat(o),s="http://www.reddit.com/submit?url=".concat(e,"&title=").concat(o);t({fbHref:"https://www.facebook.com/share.php?u=".concat(e),twitterHref:n,linkedinHref:i,pinterestHref:c,redditHref:s})},[]),(0,a.jsxs)("div",{className:s().social_media_share,children:[(0,a.jsx)("a",{className:s().facebook,href:e.fbHref,target:"blank",children:(0,a.jsx)(n.G,{icon:i.neY,color:"#1877f2"})}),(0,a.jsx)("a",{className:s().twitter,href:e.twitterHref,target:"blank",children:(0,a.jsx)(n.G,{icon:i.mdU,color:"#1da1f2"})}),(0,a.jsx)("a",{className:s().linkedin,href:e.linkedinHref,target:"blank",children:(0,a.jsx)(n.G,{icon:i.D9H,color:"#0077b5"})}),(0,a.jsx)("a",{className:s().pinterest,href:e.pinterestHref,target:"blank",children:(0,a.jsx)(n.G,{icon:i.Xs4,color:"#e60023"})}),(0,a.jsx)("a",{className:s().reddit,href:e.redditHref,target:"blank",children:(0,a.jsx)(n.G,{icon:i.HK3,color:"#ff4500"})})]})};t.Z=l},3291:function(e,t,r){"use strict";r.d(t,{BB:function(){return a},OQ:function(){return c},PG:function(){return o},Qy:function(){return n},TM:function(){return i}});let a=!0,o="https://gfai-cms.up.railway.app/api",n="http://localhost:1337/api",i="",c="http://localhost:1337"},7318:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var a=r(5893),o=r(9008),n=r.n(o),i=r(1163),c=r(7294),s=r(3291),l=r(6931),d=r(3248),f=r(3275),_=r.n(f);let u=async e=>{var t="";t=s.BB?"".concat(s.PG,"/doctors/").concat(e,"?populate=*"):"".concat(s.Qy,"/doctors/").concat(e,"?populate=*");let r=await fetch(t,{method:"GET",redirect:"follow"}),a=await r.json();return a.data};function h(){let[e,t]=(0,c.useState)(),r=(0,i.useRouter)(),{name:o,doctorId:f}=r.query;(0,c.useEffect)(()=>{let e=async()=>{let e=await u(f);t(e)};e()},[]);var h="";return h=s.BB?s.TM:s.OQ,(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n(),{children:[(0,a.jsx)("title",{children:null==e?void 0:e.attributes.doctorName}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)("main",{children:(0,a.jsxs)("div",{className:_().main_container,children:[(0,a.jsx)("section",{className:_().service_header,children:(0,a.jsx)(d.Z,{})}),(0,a.jsxs)("div",{className:_().doctor_info,children:[(0,a.jsx)("div",{className:_().doctor_image,children:(0,a.jsx)("img",{src:h+(null==e?void 0:e.attributes.doctorIcon.data.attributes.url)})}),(0,a.jsx)("div",{className:_().doctor_biography,children:(0,a.jsx)("p",{dangerouslySetInnerHTML:{__html:null==e?void 0:e.attributes.doctorBiography}})})]})]})}),(0,a.jsx)(l.Z,{})]})}},3275:function(e){e.exports={"main-container":"DoctorPage_main-container__MemhM",doctor_info:"DoctorPage_doctor_info__gTPwW",doctor_image:"DoctorPage_doctor_image__05TmQ",doctor_biography:"DoctorPage_doctor_biography__gTu_8"}},2071:function(e){e.exports={actual_footer:"FooterGeneric_actual_footer__7AfcJ",footer_wrapper:"FooterGeneric_footer_wrapper__Aoopr"}},3481:function(e){e.exports={social_media_share:"SocialMediaShare_social_media_share__idMtO","fa-facebook":"SocialMediaShare_fa-facebook__ovWuK","fa-twitter":"SocialMediaShare_fa-twitter__ZyG_K","fa-pinterest":"SocialMediaShare_fa-pinterest__D2c3v","fa-linkedin":"SocialMediaShare_fa-linkedin__x_Z5Y","fa-reddit":"SocialMediaShare_fa-reddit__7AUxx"}}},function(e){e.O(0,[948,18,774,888,179],function(){return e(e.s=3772)}),_N_E=e.O()}]);