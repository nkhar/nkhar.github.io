(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4069)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,a=n(7273).Z,i=r(n(7294)),s=n(1003),o=n(7795),c=n(4465),l=n(2692),u=n(8245),d=n(9246),f=n(227),_=n(3468);let h=new Set;function p(e,t,n,r){if(s.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let a=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,i=t+"%"+n+"%"+a;if(h.has(i))return;h.add(i)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function v(e){return"string"==typeof e?e:o.formatUrl(e)}let m=i.default.forwardRef(function(e,t){let n,r;let{href:o,as:h,children:m,prefetch:x,passHref:j,replace:g,shallow:b,scroll:y,locale:N,onClick:w,onMouseEnter:k,onTouchStart:S,legacyBehavior:L=!0!==Boolean(!0)}=e,E=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,L&&("string"==typeof n||"number"==typeof n)&&(n=i.default.createElement("a",null,n));let C=!1!==x,M=i.default.useContext(l.RouterContext),I=i.default.useContext(u.AppRouterContext),P=null!=M?M:I,O=!M,{href:T,as:H}=i.default.useMemo(()=>{if(!M){let e=v(o);return{href:e,as:h?v(h):e}}let[t,n]=s.resolveHref(M,o,!0);return{href:t,as:h?s.resolveHref(M,h):n||t}},[M,o,h]),A=i.default.useRef(T),D=i.default.useRef(H);L&&(r=i.default.Children.only(n));let G=L?r&&"object"==typeof r&&r.ref:t,[R,F,K]=d.useIntersection({rootMargin:"200px"}),U=i.default.useCallback(e=>{(D.current!==H||A.current!==T)&&(K(),D.current=H,A.current=T),R(e),G&&("function"==typeof G?G(e):"object"==typeof G&&(G.current=e))},[H,G,T,K,R]);i.default.useEffect(()=>{P&&F&&C&&p(P,T,H,{locale:N})},[H,T,F,N,C,null==M?void 0:M.locale,P]);let z={ref:U,onClick(e){L||"function"!=typeof w||w(e),L&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),P&&!e.defaultPrevented&&function(e,t,n,r,a,o,c,l,u,d){let{nodeName:f}=e.currentTarget,_="A"===f.toUpperCase();if(_&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[a?"replace":"push"](n,r,{shallow:o,locale:l,scroll:c}):t[a?"replace":"push"](r||n,{forceOptimisticNavigation:!d})};u?i.default.startTransition(h):h()}(e,P,T,H,g,b,y,N,O,C)},onMouseEnter(e){L||"function"!=typeof k||k(e),L&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),P&&(C||!O)&&p(P,T,H,{locale:N,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){L||"function"!=typeof S||S(e),L&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),P&&(C||!O)&&p(P,T,H,{locale:N,priority:!0,bypassPrefetchedCheck:!0})}};if(!L||j||"a"===r.type&&!("href"in r.props)){let B=void 0!==N?N:null==M?void 0:M.locale,J=(null==M?void 0:M.isLocaleDomain)&&f.getDomainLocale(H,B,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);z.href=J||_.addBasePath(c.addLocale(H,B,null==M?void 0:M.defaultLocale))}return L?i.default.cloneElement(r,z):i.default.createElement("a",Object.assign({},E,z),n)});t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:c}=e,l=c||!i,[u,d]=r.useState(!1),[f,_]=r.useState(null);r.useEffect(()=>{if(i){if(!l&&!u&&f&&f.tagName){let e=function(e,t,n){let{id:r,observer:a,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=o.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=s.get(r)))return t;let a=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:i,elements:a},o.push(n),s.set(n,t),t}(n);return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),s.delete(r);let t=o.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&o.splice(t,1)}}}(f,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!u){let r=a.requestIdleCallback(()=>d(!0));return()=>a.cancelIdleCallback(r)}},[f,l,n,t,u]);let h=r.useCallback(()=>{d(!1)},[]);return[_,u,h]};var r=n(7294),a=n(4686);let i="function"==typeof IntersectionObserver,s=new Map,o=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4069:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var r=n(5893),a=n(9008),i=n.n(a),s=n(7246),o=n.n(s);let c=()=>(0,r.jsx)("footer",{className:o().actual_footer,children:(0,r.jsxs)("div",{className:o().footer_wrapper,children:[(0,r.jsx)("p",{children:"Georgia Foot and Ankle Institute"}),(0,r.jsx)("p",{children:"Phone (appointments): 2-752-996 | Phone (general inquiries): 2-752-996"}),(0,r.jsx)("p",{children:"Adress: 26 Bezhan Kalandadze St, Tbilisi, Georgia"}),(0,r.jsx)("p",{children:"\xa9 Georgian Foot and Ankle Institute 2022"})]})});var l=n(7705),u=n.n(l),d=n(1664),f=n.n(d),_=n(7728),h=n.n(_);let p=()=>(0,r.jsxs)("nav",{className:h().actual_nav,children:[(0,r.jsx)(f(),{href:"#",className:h().link,"local-link":"main",children:"Home"}),(0,r.jsx)("a",{className:h().link,"local-link":"about",children:"Our story"}),(0,r.jsx)("a",{className:h().link,"local-link":"services",children:"Services"}),(0,r.jsx)("a",{className:h().link,"local-link":"testimonials",children:"Testimonials"}),(0,r.jsx)("a",{className:h().link,"local-link":"contact",children:"Contact"}),(0,r.jsxs)("div",{className:h().languages,children:[(0,r.jsx)("div",{className:"georgian ".concat("active"),children:(0,r.jsx)("a",{href:"#",lang:"georgian",children:(0,r.jsx)("img",{src:"/images/language-georgia.png",alt:""})})}),(0,r.jsx)("div",{className:h().english,children:(0,r.jsx)("a",{href:"#",lang:"english",children:(0,r.jsx)("img",{src:"/images/language-britain.png",alt:""})})}),(0,r.jsx)("div",{className:h().russian,children:(0,r.jsx)("a",{href:"#",lang:"russian",children:(0,r.jsx)("img",{src:"/images/language-russia.png",alt:""})})})]})]}),v=()=>(0,r.jsxs)("header",{className:u().header,children:[(0,r.jsx)(p,{}),(0,r.jsx)("div",{className:u().header_container,children:(0,r.jsx)("h1",{children:"Georgia Foot and Ankle Institute"})})]}),m="https://gfai-cms.up.railway.app/api";var x=n(7294),j=n(4152),g=n.n(j);let b=async()=>{var e="";e="".concat(m,"/about-us?populate=*");let t=await fetch(e,{method:"GET",redirect:"follow"}),n=await t.json(),r=n.data.attributes.aboutUs;return r},y=()=>{let[e,t]=(0,x.useState)("");return(0,x.useEffect)(()=>{let e=async()=>{let e=await b();t(e)};e()},[]),(0,r.jsx)("section",{className:g().container.concat(" ").concat(g().about_us),children:(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:e}})})};var N=n(7160),w=n.n(N),k=n(3161),S=n.n(k);let L=e=>{let t=e.doctor;var n,a="";return a="",(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{src:a+t.attributes.doctorIcon.data.attributes.url}),(0,r.jsx)("p",{className:S().doctor_name,children:null==t?void 0:null===(n=t.attributes)||void 0===n?void 0:n.doctorName}),(0,r.jsx)("p",{className:S().doctor_position,children:t.attributes.doctorPosition})]})};var E=n(1923),C=n.n(E);let M=async()=>{var e="";e=m+"/doctors?populate=*";let t=await fetch(e,{method:"GET",redirect:"follow"}),n=await t.json();return n.data},I=()=>{let[e,t]=(0,x.useState)();(0,x.useEffect)(()=>{let e=async()=>{let e=await M();t(e)};e()},[]);let n=null==e?void 0:e.map(e=>(0,r.jsx)("li",{className:C().doctor_item,onClick(){var t;return t=Number(e.id),void window.location.assign("".concat(window.origin,"/doctors/doctor.html?id=").concat(t))},children:(0,r.jsx)(L,{doctor:e})},e.id));return(0,r.jsxs)("section",{className:C().container.concat(" ").concat(C().doctors),children:[(0,r.jsx)("h2",{children:"Doctors"}),(0,r.jsx)("ul",{className:C().doctor_list,children:n})]})};var P=n(3544),O=n.n(P);let T=e=>{let t=e.service;var n="";return n="",(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:O().service_item_bg,children:(0,r.jsx)("img",{src:n+t.attributes.serviceGridIcon.data.attributes.url})}),(0,r.jsx)("a",{href:window.location.origin+"/services/service.html?id=".concat(t.id),children:(0,r.jsxs)("div",{className:O().service_item_info,children:[(0,r.jsx)("h4",{className:O().service_name,children:t.attributes.postTitle}),(0,r.jsx)("p",{children:"Read More"})]})})]})};var H=n(7503),A=n.n(H);let D=async()=>{var e="";e=m+"/services?populate=*";let t=await fetch(e,{method:"GET",redirect:"follow"}),n=await t.json();return n.data},G=()=>{let[e,t]=(0,x.useState)();(0,x.useEffect)(()=>{let e=async()=>{let e=await D();t(e)};e()},[]);let n=null==e?void 0:e.map(e=>(0,r.jsx)("li",{className:A().service_item,children:(0,r.jsx)(T,{service:e})},e.id));return(0,r.jsxs)("section",{className:A().container.concat(" ").concat(A().services),children:[(0,r.jsx)("h2",{children:"Services"}),(0,r.jsx)("ul",{className:A().services_list,children:n})]})};function R(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:"Create Next App"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(v,{}),(0,r.jsx)(y,{}),(0,r.jsx)(I,{}),(0,r.jsx)(G,{}),(0,r.jsxs)("main",{className:w().main,children:[(0,r.jsxs)("h1",{className:w().title,children:["Learn ",(0,r.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,r.jsxs)("p",{className:w().description,children:["Get started by editing"," ",(0,r.jsx)("code",{className:w().code,children:"pages/index.tsx"})]}),(0,r.jsxs)("div",{className:w().grid,children:[(0,r.jsxs)("a",{href:"https://nextjs.org/docs",className:w().card,children:[(0,r.jsx)("h2",{children:"Documentation →"}),(0,r.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,r.jsxs)("a",{href:"https://nextjs.org/learn",className:w().card,children:[(0,r.jsx)("h2",{children:"Learn →"}),(0,r.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]})]})]}),(0,r.jsx)(c,{})]})}},4152:function(e){e.exports={container:"AboutUs_container__kSAcM",about_us:"AboutUs_about_us__imReI"}},7705:function(e){e.exports={header:"DashboardHeader_header__ASwZp",header_container:"DashboardHeader_header_container__sr2iy"}},3161:function(){},1923:function(e){e.exports={container:"DoctorList_container__4zCJf",doctors:"DoctorList_doctors__6AK6_",doctor_list:"DoctorList_doctor_list__57GvB",doctor_item:"DoctorList_doctor_item__wjuOG"}},7246:function(e){e.exports={actual_footer:"Footer_actual_footer__3S7SI",footer_wrapper:"Footer_footer_wrapper__AUVgK"}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},7728:function(e){e.exports={actual_nav:"Nav_actual_nav__bQzZS",languages:"Nav_languages__NRwKU",nav_sticky:"Nav_nav_sticky__sAJb6",link:"Nav_link__xIf3s"}},3544:function(e){e.exports={service_item:"ServiceItem_service_item__t3Ff3",service_item_bg:"ServiceItem_service_item_bg___jv70",service_item_info:"ServiceItem_service_item_info__05U4R"}},7503:function(e){e.exports={container:"ServiceList_container__pJKVw",services:"ServiceList_services___Xguc",services_list:"ServiceList_services_list__9kHs8",service_item:"ServiceList_service_item__83_ge",service_item_bg:"ServiceList_service_item_bg__SiIv6",service_item_info:"ServiceList_service_item_info__FbEJM"}},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);