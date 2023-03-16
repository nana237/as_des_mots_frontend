"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_partie_leve-choice_leve-choice_module_ts"],{

/***/ 3875:
/*!************************************************************************!*\
  !*** ./src/app/pages/partie/leve-choice/leve-choice-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeveChoicePageRoutingModule": () => (/* binding */ LeveChoicePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _leve_choice_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leve-choice.page */ 6841);




const routes = [
    {
        path: '',
        component: _leve_choice_page__WEBPACK_IMPORTED_MODULE_0__.LeveChoicePage
    }
];
let LeveChoicePageRoutingModule = class LeveChoicePageRoutingModule {
};
LeveChoicePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LeveChoicePageRoutingModule);



/***/ }),

/***/ 5086:
/*!****************************************************************!*\
  !*** ./src/app/pages/partie/leve-choice/leve-choice.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeveChoicePageModule": () => (/* binding */ LeveChoicePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _leve_choice_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leve-choice-routing.module */ 3875);
/* harmony import */ var _leve_choice_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leve-choice.page */ 6841);







let LeveChoicePageModule = class LeveChoicePageModule {
};
LeveChoicePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _leve_choice_routing_module__WEBPACK_IMPORTED_MODULE_0__.LeveChoicePageRoutingModule
        ],
        declarations: [_leve_choice_page__WEBPACK_IMPORTED_MODULE_1__.LeveChoicePage]
    })
], LeveChoicePageModule);



/***/ }),

/***/ 6841:
/*!**************************************************************!*\
  !*** ./src/app/pages/partie/leve-choice/leve-choice.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeveChoicePage": () => (/* binding */ LeveChoicePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _leve_choice_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leve-choice.page.html?ngResource */ 9881);
/* harmony import */ var _leve_choice_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leve-choice.page.scss?ngResource */ 1254);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let LeveChoicePage = class LeveChoicePage {
    constructor() { }
    ngOnInit() {
    }
};
LeveChoicePage.ctorParameters = () => [];
LeveChoicePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-leve-choice',
        template: _leve_choice_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_leve_choice_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LeveChoicePage);



/***/ }),

/***/ 1254:
/*!***************************************************************************!*\
  !*** ./src/app/pages/partie/leve-choice/leve-choice.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = ".myWrapper {\n  height: 100vh;\n  width: 100vw;\n  background: url('bg-accueil.svg');\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  padding: 5em 0 5em 0;\n}\n\n.btnStart {\n  color: black;\n  font-size: 1em;\n  background-color: var(--ion-color-warning);\n  border-radius: 3em;\n  padding: 0.8em 3em 0.8em 3em;\n}\n\n.pointer {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldmUtY2hvaWNlLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxOYW5hJTIwQm9yaXNcXERvY3VtZW50c1xcQVNERVNNT1RTXFxwcm9qZXRcXGFzX2Rlc19tb3RzX2Zyb250ZW5kXFxzcmNcXGFwcFxccGFnZXNcXHBhcnRpZVxcbGV2ZS1jaG9pY2VcXGxldmUtY2hvaWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREdBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRiIsImZpbGUiOiJsZXZlLWNob2ljZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlXcmFwcGVye1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnLWFjY3VlaWwuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHBhZGRpbmc6IDVlbSAwIDVlbSAwO1xyXG5cclxufVxyXG5cclxuLmJ0blN0YXJ0e1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDFlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XHJcbiAgYm9yZGVyLXJhZGl1czogM2VtO1xyXG4gIHBhZGRpbmc6IDAuOGVtIDNlbSAwLjhlbSAzZW07XHJcbn1cclxuXHJcbi5wb2ludGVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufSIsIi5teVdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnLWFjY3VlaWwuc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmc6IDVlbSAwIDVlbSAwO1xufVxuXG4uYnRuU3RhcnQge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG4gIGJvcmRlci1yYWRpdXM6IDNlbTtcbiAgcGFkZGluZzogMC44ZW0gM2VtIDAuOGVtIDNlbTtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */";

/***/ }),

/***/ 9881:
/*!***************************************************************************!*\
  !*** ./src/app/pages/partie/leve-choice/leve-choice.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"myWrapper\">\r\n    <P>Veuillez choisir votre niveau</P>\r\n    <div class=\"pointer\">Niveau I</div>\r\n    <div class=\"pointer\">Niveau II</div>\r\n    <div class=\"pointer\">Niveau III</div>\r\n    <div class=\"pointer\">Niveau IV</div>\r\n    <div class=\"pointer\">Niveau V</div>\r\n    <div class=\"pointer\">Niveau VI</div>\r\n    <div class=\"pointer\">Niveau VII</div>\r\n    <button class=\"btnStart\">Commencer</button>\r\n\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_partie_leve-choice_leve-choice_module_ts.js.map