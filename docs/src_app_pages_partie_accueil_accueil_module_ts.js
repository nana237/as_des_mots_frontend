"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_partie_accueil_accueil_module_ts"],{

/***/ 6360:
/*!****************************************************************!*\
  !*** ./src/app/pages/partie/accueil/accueil-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccueilPageRoutingModule": () => (/* binding */ AccueilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _accueil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accueil.page */ 5776);




const routes = [
    {
        path: '',
        component: _accueil_page__WEBPACK_IMPORTED_MODULE_0__.AccueilPage
    }
];
let AccueilPageRoutingModule = class AccueilPageRoutingModule {
};
AccueilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccueilPageRoutingModule);



/***/ }),

/***/ 5309:
/*!********************************************************!*\
  !*** ./src/app/pages/partie/accueil/accueil.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccueilPageModule": () => (/* binding */ AccueilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _accueil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accueil-routing.module */ 6360);
/* harmony import */ var _accueil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accueil.page */ 5776);







let AccueilPageModule = class AccueilPageModule {
};
AccueilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _accueil_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccueilPageRoutingModule
        ],
        declarations: [_accueil_page__WEBPACK_IMPORTED_MODULE_1__.AccueilPage]
    })
], AccueilPageModule);



/***/ }),

/***/ 5776:
/*!******************************************************!*\
  !*** ./src/app/pages/partie/accueil/accueil.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccueilPage": () => (/* binding */ AccueilPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _accueil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accueil.page.html?ngResource */ 8693);
/* harmony import */ var _accueil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accueil.page.scss?ngResource */ 1796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let AccueilPage = class AccueilPage {
    constructor() { }
    ngOnInit() {
    }
};
AccueilPage.ctorParameters = () => [];
AccueilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-accueil',
        template: _accueil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_accueil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccueilPage);



/***/ }),

/***/ 1796:
/*!*******************************************************************!*\
  !*** ./src/app/pages/partie/accueil/accueil.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = ".logo {\n  height: 2em;\n  width: 2em;\n}\n\nion-content {\n  font-family: \"Roboto_medium\";\n}\n\n.myWrapper {\n  height: 100vh;\n  width: 100vw;\n  background: url('bg-accueil.svg');\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.btnStart {\n  font-family: \"Roboto\";\n  color: black;\n  font-size: 1.5em;\n  background-color: var(--ion-color-warning);\n  border-radius: 3em;\n  padding-top: 0.8em;\n  padding-bottom: 0.8em;\n  padding-left: 2em;\n  padding-right: 2em;\n}\n\n.blocIncorrect {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2em;\n  height: 25em;\n  width: 35em;\n  box-shadow: -1px -1px 5px rgba(0, 0, 0, 0.1);\n  border-radius: 25px;\n}\n\n.textIncorrect {\n  color: var(--ion-color-danger);\n  font-size: 2em;\n}\n\n.correctText {\n  color: var(--ion-color-success);\n  font-size: 1.5em;\n}\n\n.btnOk {\n  color: var(--ion-color-dark);\n  font-size: 1.5em;\n}\n\n/*******************************************/\n\n.speaker {\n  width: 10em;\n  height: 10em;\n  cursor: pointer;\n}\n\n.txtQuestion {\n  width: 20em;\n  height: 3em;\n  border: 0px;\n  padding-left: 2em;\n  box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.1);\n  border-radius: 4em;\n  font-size: 1.5em;\n  color: var(--ion-color-dark);\n}\n\n.btnValidate {\n  color: black;\n  font-size: 1.5em;\n  background-color: var(--ion-color-warning);\n  border-radius: 3em;\n  padding-top: 0.8em;\n  padding-bottom: 0.8em;\n  padding-left: 3em;\n  padding-right: 3em;\n}\n\n.btnLeave {\n  background-color: var(--ion-color-primary);\n  color: black;\n  font-size: 1.5em;\n  padding-top: 0.5em;\n  padding-bottom: 0.5em;\n  padding-left: 2.5em;\n  padding-right: 2.5em;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY3VlaWwucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFRoZSUyMFNwZWxsaW5nJTIwS2luZ1xcYXNfZGVzX21vdHNfZnJvbnRlbmRcXHNyY1xcYXBwXFxwYWdlc1xccGFydGllXFxhY2N1ZWlsXFxhY2N1ZWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSw0QkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSwrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUEsNENBQUE7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksMENBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoiYWNjdWVpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgd2lkdGg6IDJlbTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90b19tZWRpdW0nO1xyXG59XHJcblxyXG4ubXlXcmFwcGVye1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnLWFjY3VlaWwuc3ZnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuU3RhcnR7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM2VtO1xyXG4gICAgcGFkZGluZy10b3A6IDAuOGVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuOGVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyZW07XHJcbn1cclxuXHJcbi5ibG9jSW5jb3JyZWN0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG4gICAgaGVpZ2h0OiAyNWVtO1xyXG4gICAgd2lkdGg6IDM1ZW07XHJcbiAgICBib3gtc2hhZG93OiAtMXB4IC0xcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG4udGV4dEluY29ycmVjdHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcblxyXG4uY29ycmVjdFRleHR7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuLmJ0bk9re1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4uc3BlYWtlcntcclxuICAgIHdpZHRoOiAxMGVtO1xyXG4gICAgaGVpZ2h0OiAxMGVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udHh0UXVlc3Rpb257XHJcbiAgICB3aWR0aDogMjBlbTtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJlbTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAtMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNGVtO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbn1cclxuXHJcbi5idG5WYWxpZGF0ZXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMC44ZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC44ZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDNlbTtcclxufVxyXG5cclxuLmJ0bkxlYXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMi41ZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4iLCIubG9nbyB7XG4gIGhlaWdodDogMmVtO1xuICB3aWR0aDogMmVtO1xufVxuXG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b19tZWRpdW1cIjtcbn1cblxuLm15V3JhcHBlciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmctYWNjdWVpbC5zdmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ0blN0YXJ0IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICBib3JkZXItcmFkaXVzOiAzZW07XG4gIHBhZGRpbmctdG9wOiAwLjhlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuOGVtO1xuICBwYWRkaW5nLWxlZnQ6IDJlbTtcbiAgcGFkZGluZy1yaWdodDogMmVtO1xufVxuXG4uYmxvY0luY29ycmVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMmVtO1xuICBoZWlnaHQ6IDI1ZW07XG4gIHdpZHRoOiAzNWVtO1xuICBib3gtc2hhZG93OiAtMXB4IC0xcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLnRleHRJbmNvcnJlY3Qge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4uY29ycmVjdFRleHQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4uYnRuT2sge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5zcGVha2VyIHtcbiAgd2lkdGg6IDEwZW07XG4gIGhlaWdodDogMTBlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udHh0UXVlc3Rpb24ge1xuICB3aWR0aDogMjBlbTtcbiAgaGVpZ2h0OiAzZW07XG4gIGJvcmRlcjogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDJlbTtcbiAgYm94LXNoYWRvdzogMHB4IC0xcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogNGVtO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG4uYnRuVmFsaWRhdGUge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbiAgYm9yZGVyLXJhZGl1czogM2VtO1xuICBwYWRkaW5nLXRvcDogMC44ZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjhlbTtcbiAgcGFkZGluZy1sZWZ0OiAzZW07XG4gIHBhZGRpbmctcmlnaHQ6IDNlbTtcbn1cblxuLmJ0bkxlYXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDIuNWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAyLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */";

/***/ }),

/***/ 8693:
/*!*******************************************************************!*\
  !*** ./src/app/pages/partie/accueil/accueil.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n  <img class=\"logo\" src=\"assets/icon/logo.svg\" alt=\"\">\r\n    accueil\r\n  </ion-title>\r\n  <span>\r\n    icon user\r\n  </span>\r\n  <span>nom utilisateur</span>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <div class=\"myWrapper\">\r\n    <button [routerLink]=\"['../game-mode-select']\" class=\"btnStart\">Nouvelle partie</button>\r\n  </div>\r\n\r\n  <!-- <div class=\"blocIncorrect\">\r\n    <span class=\"textIncorrect\">incorrect</span>\r\n    <span class=\"correctText\">Blablabla</span>\r\n    <span class=\"btnOk\">OK</span>\r\n  </div>\r\n\r\n  <div>\r\n  <img class=\"speaker\" src=\"assets/images/partie/speaker.svg\" alt=\"\">\r\n    <input type=\"text\" class=\"txtQuestion\">\r\n    <button class=\"btnValidate\">Valider</button>\r\n    <button class=\"btnLeave\">Abandoner</button>\r\n  </div> -->\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_partie_accueil_accueil_module_ts.js.map