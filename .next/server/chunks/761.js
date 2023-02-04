exports.id = 761;
exports.ids = [761];
exports.modules = {

/***/ 7042:
/***/ ((module) => {

// Exports
module.exports = {
	"actual_footer": "FooterGeneric_actual_footer__7AfcJ",
	"footer_wrapper": "FooterGeneric_footer_wrapper__Aoopr"
};


/***/ }),

/***/ 9308:
/***/ ((module) => {

// Exports
module.exports = {
	"social_media_share": "SocialMediaShare_social_media_share__idMtO",
	"fa-facebook": "SocialMediaShare_fa-facebook__ovWuK",
	"fa-twitter": "SocialMediaShare_fa-twitter__ZyG_K",
	"fa-pinterest": "SocialMediaShare_fa-pinterest__D2c3v",
	"fa-linkedin": "SocialMediaShare_fa-linkedin__x_Z5Y",
	"fa-reddit": "SocialMediaShare_fa-reddit__7AUxx"
};


/***/ }),

/***/ 6931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_FooterGeneric_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7042);
/* harmony import */ var _styles_FooterGeneric_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_FooterGeneric_module_css__WEBPACK_IMPORTED_MODULE_1__);


const FooterGeneric = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: (_styles_FooterGeneric_module_css__WEBPACK_IMPORTED_MODULE_1___default().actual_footer),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_FooterGeneric_module_css__WEBPACK_IMPORTED_MODULE_1___default().footer_wrapper),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "Georgia Foot and Ankle Institute"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "Phone (appointments): 2-752-996 | Phone (general inquiries): 2-752-996"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "Adress: 26 Bezhan Kalandadze St, Tbilisi, Georgia"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "\xa9 Georgian Foot and Ankle Institute 2022"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterGeneric);


/***/ }),

/***/ 3248:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(303);
/* harmony import */ var _styles_SocialMediaShare_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9308);
/* harmony import */ var _styles_SocialMediaShare_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_SocialMediaShare_module_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__]);
_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const SocialMediaShare = ()=>{
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        fbHref: "",
        twitterHref: "",
        linkedinHref: "",
        pinterestHref: "",
        redditHref: ""
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const link = encodeURI(window.location.href);
        const msg = encodeURIComponent("Hey, Check your health");
        const unencodedTitle = document.title;
        const title = encodeURIComponent(unencodedTitle);
        const fb = `https://www.facebook.com/share.php?u=${link}`;
        const twitter = `https://twitter.com/share?url=${link}&text=${msg}`;
        const linkedIn = `https://www.linkedin.com/shareArticle?url=${link}&title=${title}`;
        const pinterest = `https://pinterest.com/pin/create/bookmarklet/?url=${link}&description=${title}`;
        const reddit = `http://www.reddit.com/submit?url=${link}&title=${title}`;
        setState({
            fbHref: fb,
            twitterHref: twitter,
            linkedinHref: linkedIn,
            pinterestHref: pinterest,
            redditHref: reddit
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_SocialMediaShare_module_css__WEBPACK_IMPORTED_MODULE_4___default().social_media_share),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: (_styles_SocialMediaShare_module_css__WEBPACK_IMPORTED_MODULE_4___default().facebook),
                href: state.fbHref,
                target: "blank",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faFacebook,
                    color: "#1877f2"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: (_styles_SocialMediaShare_module_css__WEBPACK_IMPORTED_MODULE_4___default().twitter),
                href: state.twitterHref,
                target: "blank",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTwitter,
                    color: "#1da1f2"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: (_styles_SocialMediaShare_module_css__WEBPACK_IMPORTED_MODULE_4___default().linkedin),
                href: state.linkedinHref,
                target: "blank",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faLinkedin,
                    color: "#0077b5"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: (_styles_SocialMediaShare_module_css__WEBPACK_IMPORTED_MODULE_4___default().pinterest),
                href: state.pinterestHref,
                target: "blank",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPinterest,
                    color: "#e60023"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: (_styles_SocialMediaShare_module_css__WEBPACK_IMPORTED_MODULE_4___default().reddit),
                href: state.redditHref,
                target: "blank",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faReddit,
                    color: "#ff4500"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialMediaShare); /* Social media share urls

Whastapp
https://api.whatsapp.com/send?text=[post-title] [post-url]

Facebook
https://www.facebook.com/sharer.php?u=[post-url]

Twitter
https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]

Pinterest
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]

LinkedIn
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

Reddit
https://reddit.com/submit?url=[post-url]&title=[post-title]


*/  /*
const link = encodeURI(window.location.href);
const msg = encodeURIComponent("Hey, Check your health");
const title = encodeURIComponent(document.querySelector("title").textContent);

const fb = document.querySelector(".facebook");
fb.href = `https://www.facebook.com/share.php?u=${link}`;

const twitter = document.querySelector(".twitter");
twitter.href = `https://twitter.com/share?url=${link}&text=${msg}`;

const linkedIn = document.querySelector(".linkedin");
linkedIn.href = `https://www.linkedin.com/shareArticle?url=${link}&title=${title}`;

const pinterest = document.querySelector(".pinterest");
pinterest.href = `https://pinterest.com/pin/create/bookmarklet/?url=${link}&description=${title}`;

const reddit = document.querySelector(".reddit");
reddit.href = `http://www.reddit.com/submit?url=${link}&title=${title}`;
*/ 

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BB": () => (/* binding */ isProd),
/* harmony export */   "OQ": () => (/* binding */ photoUrlLocal),
/* harmony export */   "PG": () => (/* binding */ apiUrlProd),
/* harmony export */   "Qy": () => (/* binding */ apiUrlLocal),
/* harmony export */   "TM": () => (/* binding */ photoUrlProd)
/* harmony export */ });
const isProd = true;
const apiUrlProd = "https://gfai-cms.up.railway.app/api";
const apiUrlLocal = "http://localhost:1337/api";
const photoUrlProd = "";
const photoUrlLocal = "http://localhost:1337";


/***/ })

};
;