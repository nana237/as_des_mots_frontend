"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_pl-part_footer_footer_module_ts"],{

/***/ 6168:
/*!***************************************************************!*\
  !*** ./src/app/pages/pl-part/footer/footer-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterPageRoutingModule": () => (/* binding */ FooterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _footer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.page */ 6985);




const routes = [
    {
        path: '',
        component: _footer_page__WEBPACK_IMPORTED_MODULE_0__.FooterPage
    }
];
let FooterPageRoutingModule = class FooterPageRoutingModule {
};
FooterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FooterPageRoutingModule);



/***/ }),

/***/ 351:
/*!*******************************************************!*\
  !*** ./src/app/pages/pl-part/footer/footer.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterPageModule": () => (/* binding */ FooterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _footer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer-routing.module */ 6168);
/* harmony import */ var _footer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.page */ 6985);







let FooterPageModule = class FooterPageModule {
};
FooterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _footer_routing_module__WEBPACK_IMPORTED_MODULE_0__.FooterPageRoutingModule
        ],
        declarations: [_footer_page__WEBPACK_IMPORTED_MODULE_1__.FooterPage]
    })
], FooterPageModule);



/***/ }),

/***/ 6985:
/*!*****************************************************!*\
  !*** ./src/app/pages/pl-part/footer/footer.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterPage": () => (/* binding */ FooterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _footer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.page.html?ngResource */ 3893);
/* harmony import */ var _footer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.page.scss?ngResource */ 3953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let FooterPage = class FooterPage {
    constructor() { }
    ngOnInit() {
    }
};
FooterPage.ctorParameters = () => [];
FooterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-footer',
        template: _footer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_footer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FooterPage);



/***/ }),

/***/ 3953:
/*!******************************************************************!*\
  !*** ./src/app/pages/pl-part/footer/footer.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  height: 18em;\n  --background: #394554;\n  overflow: hidden;\n}\n\n#footer {\n  padding-top: 15px;\n  padding-bottom: 20px;\n  background: #394554;\n}\n\n.my_footer {\n  margin: 0 1em 0 1em;\n}\n\n.footer_1 h4 {\n  color: #f4f4f4;\n}\n\n.footer_1 ul {\n  list-style-type: none;\n  margin-top: 10px;\n}\n\n.footer_1 ul li {\n  margin-top: 3px;\n  transform: translateX(-2.5em);\n}\n\n.footer_1 ul li a {\n  color: #ccc;\n}\n\n.footer_1 ul li a:hover {\n  color: #eee;\n}\n\n.footer_1 p {\n  color: #ccc;\n}\n\n.footer_1 p a {\n  color: #f4f4f4;\n}\n\n.footer_1 p a:hover {\n  color: #ccc;\n}\n\n#footer_bottom {\n  padding-bottom: 10px;\n  padding-top: 5px;\n  background: #5a6c82;\n}\n\n.footer_bottom_1 p {\n  color: #eee;\n}\n\n.footer_bottom_1 p a {\n  color: #F1C232;\n}\n\n.footer_bottom_1 p a:hover {\n  color: #eee;\n}\n\n.blockfooter {\n  display: flex;\n  justify-content: space-between;\n}\n\na {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTmFuYSUyMEJvcmlzXFxEb2N1bWVudHNcXEFTREVTTU9UU1xccHJvamV0XFxhc19kZXNfbW90c19mcm9udGVuZFxcc3JjXFxhcHBcXHBhZ2VzXFxwbC1wYXJ0XFxmb290ZXJcXGZvb3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0NBOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUU7RUFDRSxtQkFBQTtBQ0dKOztBRERFO0VBQ0MsY0FBQTtBQ0lIOztBREZFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhFO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0FDTUo7O0FESkU7RUFDQyxXQUFBO0FDT0g7O0FETEU7RUFDQyxXQUFBO0FDUUg7O0FETkU7RUFDQyxXQUFBO0FDU0g7O0FEUEU7RUFDQyxjQUFBO0FDVUg7O0FEUkU7RUFDQyxXQUFBO0FDV0g7O0FEVEU7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNZRjs7QURWRTtFQUNDLFdBQUE7QUNhSDs7QURYRTtFQUNDLGNBQUE7QUNjSDs7QURaRTtFQUNDLFdBQUE7QUNlSDs7QURaRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ2VKOztBRFpFO0VBQ0UscUJBQUE7QUNlSiIsImZpbGUiOiJmb290ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG5oZWlnaHQ6IDE4ZW07XHJcbi0tYmFja2dyb3VuZDogIzM5NDU1NDtcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4jZm9vdGVye1xyXG4gICAgcGFkZGluZy10b3A6MTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzk0NTU0O1xyXG4gICAgIH1cclxuICAubXlfZm9vdGVye1xyXG4gICAgbWFyZ2luOiAwIDFlbSAwIDFlbTtcclxuICB9XHJcbiAgLmZvb3Rlcl8xIGg0e1xyXG4gICBjb2xvcjojZjRmNGY0O1xyXG4gICAgfVxyXG4gIC5mb290ZXJfMSB1bHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIH1cclxuICAuZm9vdGVyXzEgdWwgbGl7XHJcbiAgICBtYXJnaW4tdG9wOjNweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMi41ZW0pO1xyXG4gIH1cclxuICAuZm9vdGVyXzEgdWwgbGkgYXtcclxuICAgY29sb3I6I2NjYztcclxuICAgIH1cclxuICAuZm9vdGVyXzEgdWwgbGkgYTpob3ZlcntcclxuICAgY29sb3I6I2VlZTtcclxuICAgIH1cclxuICAuZm9vdGVyXzEgcHtcclxuICAgY29sb3I6I2NjYztcclxuICAgIH1cclxuICAuZm9vdGVyXzEgcCBhe1xyXG4gICBjb2xvcjojZjRmNGY0O1xyXG4gICAgfVxyXG4gIC5mb290ZXJfMSBwIGE6aG92ZXJ7XHJcbiAgIGNvbG9yOiNjY2M7XHJcbiAgICB9XHJcbiAgI2Zvb3Rlcl9ib3R0b217XHJcbiAgcGFkZGluZy1ib3R0b206MTBweDtcclxuICBwYWRkaW5nLXRvcDo1cHg7XHJcbiAgYmFja2dyb3VuZDogIzVhNmM4MjtcclxuICAgIH1cclxuICAuZm9vdGVyX2JvdHRvbV8xIHB7XHJcbiAgIGNvbG9yOiNlZWU7XHJcbiAgICB9XHJcbiAgLmZvb3Rlcl9ib3R0b21fMSBwIGF7XHJcbiAgIGNvbG9yOiNGMUMyMzI7XHJcbiAgICB9XHJcbiAgLmZvb3Rlcl9ib3R0b21fMSBwIGE6aG92ZXJ7XHJcbiAgIGNvbG9yOiNlZWU7XHJcbiAgICB9XHJcblxyXG4gIC5ibG9ja2Zvb3RlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuIiwiaW9uLWNvbnRlbnQge1xuICBoZWlnaHQ6IDE4ZW07XG4gIC0tYmFja2dyb3VuZDogIzM5NDU1NDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI2Zvb3RlciB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZDogIzM5NDU1NDtcbn1cblxuLm15X2Zvb3RlciB7XG4gIG1hcmdpbjogMCAxZW0gMCAxZW07XG59XG5cbi5mb290ZXJfMSBoNCB7XG4gIGNvbG9yOiAjZjRmNGY0O1xufVxuXG4uZm9vdGVyXzEgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5mb290ZXJfMSB1bCBsaSB7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yLjVlbSk7XG59XG5cbi5mb290ZXJfMSB1bCBsaSBhIHtcbiAgY29sb3I6ICNjY2M7XG59XG5cbi5mb290ZXJfMSB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICNlZWU7XG59XG5cbi5mb290ZXJfMSBwIHtcbiAgY29sb3I6ICNjY2M7XG59XG5cbi5mb290ZXJfMSBwIGEge1xuICBjb2xvcjogI2Y0ZjRmNDtcbn1cblxuLmZvb3Rlcl8xIHAgYTpob3ZlciB7XG4gIGNvbG9yOiAjY2NjO1xufVxuXG4jZm9vdGVyX2JvdHRvbSB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBiYWNrZ3JvdW5kOiAjNWE2YzgyO1xufVxuXG4uZm9vdGVyX2JvdHRvbV8xIHAge1xuICBjb2xvcjogI2VlZTtcbn1cblxuLmZvb3Rlcl9ib3R0b21fMSBwIGEge1xuICBjb2xvcjogI0YxQzIzMjtcbn1cblxuLmZvb3Rlcl9ib3R0b21fMSBwIGE6aG92ZXIge1xuICBjb2xvcjogI2VlZTtcbn1cblxuLmJsb2NrZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */";

/***/ }),

/***/ 3893:
/*!******************************************************************!*\
  !*** ./src/app/pages/pl-part/footer/footer.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <section id=\"footer\">\r\n    <div class=\"container\">\r\n     <div class=\"row blockfooter\">\r\n       <div class=\"col-sm-2 my_footer\">\r\n      <div class=\"footer_1 clearfix\">\r\n       <h4>Company</h4>\r\n       <ul>\r\n        <li><a href=\"#\">About</a></li>\r\n        <li><a href=\"#\">Testimonials</a></li>\r\n        <li><a href=\"#\">Affiliate</a></li>\r\n        <li><a href=\"#\">Program</a></li>\r\n        <li><a href=\"#\">Contact Us</a></li>\r\n        <li><a href=\"#\">Startup Hub</a></li>\r\n       </ul>\r\n      </div>\r\n     </div>\r\n     <div class=\"col-sm-2 my_footer\">\r\n      <div class=\"footer_1 clearfix\">\r\n       <h4>Help &amp; Support</h4>\r\n       <ul>\r\n        <li><a href=\"#\">About</a></li>\r\n        <li><a href=\"#\">Testimonials</a></li>\r\n        <li><a href=\"#\">Affiliate</a></li>\r\n        <li><a href=\"#\">Program</a></li>\r\n        <li><a href=\"#\">Contact Us</a></li>\r\n        <li><a href=\"#\">Startup Hub</a></li>\r\n       </ul>\r\n      </div>\r\n     </div>\r\n     <div class=\"col-sm-2 my_footer\">\r\n      <div class=\"footer_1 clearfix\">\r\n       <h4>Company</h4>\r\n       <ul>\r\n        <li><a href=\"#\">About</a></li>\r\n        <li><a href=\"#\">Testimonials</a></li>\r\n        <li><a href=\"#\">Affiliate</a></li>\r\n        <li><a href=\"#\">Program</a></li>\r\n        <li><a href=\"#\">Contact Us</a></li>\r\n        <li><a href=\"#\">Startup Hub</a></li>\r\n       </ul>\r\n      </div>\r\n     </div>\r\n     <div class=\"col-sm-6 my_footer\">\r\n      <div class=\"footer_1 clearfix\">\r\n       <h4>About Our Portal</h4>\r\n       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitursodales ligula in libero. Sed dignissim lacinia nunc.</p>\r\n       <p>More Products: <a href=\"#\">Web Design Templates</a>, <a href=\"#\">Html Templates</a>, <a href=\"#\">Wordpress themes</a></p>\r\n      </div>\r\n     </div>\r\n     </div>\r\n    </div>\r\n   </section>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pl-part_footer_footer_module_ts.js.map