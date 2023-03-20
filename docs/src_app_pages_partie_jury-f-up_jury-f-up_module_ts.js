"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_partie_jury-f-up_jury-f-up_module_ts"],{

/***/ 7840:
/*!********************************************************************!*\
  !*** ./src/app/pages/partie/jury-f-up/jury-f-up-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JuryFUpPageRoutingModule": () => (/* binding */ JuryFUpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _jury_f_up_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jury-f-up.page */ 2935);




const routes = [
    {
        path: '',
        component: _jury_f_up_page__WEBPACK_IMPORTED_MODULE_0__.JuryFUpPage
    }
];
let JuryFUpPageRoutingModule = class JuryFUpPageRoutingModule {
};
JuryFUpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], JuryFUpPageRoutingModule);



/***/ }),

/***/ 8694:
/*!************************************************************!*\
  !*** ./src/app/pages/partie/jury-f-up/jury-f-up.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JuryFUpPageModule": () => (/* binding */ JuryFUpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _jury_f_up_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jury-f-up-routing.module */ 7840);
/* harmony import */ var _jury_f_up_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jury-f-up.page */ 2935);







let JuryFUpPageModule = class JuryFUpPageModule {
};
JuryFUpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _jury_f_up_routing_module__WEBPACK_IMPORTED_MODULE_0__.JuryFUpPageRoutingModule
        ],
        declarations: [_jury_f_up_page__WEBPACK_IMPORTED_MODULE_1__.JuryFUpPage]
    })
], JuryFUpPageModule);



/***/ }),

/***/ 2935:
/*!**********************************************************!*\
  !*** ./src/app/pages/partie/jury-f-up/jury-f-up.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JuryFUpPage": () => (/* binding */ JuryFUpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _jury_f_up_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jury-f-up.page.html?ngResource */ 2304);
/* harmony import */ var _jury_f_up_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jury-f-up.page.scss?ngResource */ 5333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let JuryFUpPage = class JuryFUpPage {
    constructor() { }
    ngOnInit() {
    }
};
JuryFUpPage.ctorParameters = () => [];
JuryFUpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-jury-f-up',
        template: _jury_f_up_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_jury_f_up_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], JuryFUpPage);



/***/ }),

/***/ 5333:
/*!***********************************************************************!*\
  !*** ./src/app/pages/partie/jury-f-up/jury-f-up.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = ".myWrapper {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  padding: 0 2em 0 2em;\n  background: url('bg-accueil.svg');\n}\n\n.BlocTop {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  margin-top: 2em;\n}\n\n.BlocTop .minBlocLeft {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.BlocTop .minBlocLeft :nth-child(n) {\n  margin-top: 0.5em;\n}\n\n.BlocTop .minBlocCenter {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 2em;\n  margin: auto;\n  margin-top: 5em;\n}\n\n.BlocTop .minBlocCenter :first-child {\n  margin-bottom: 3em;\n}\n\n.BlocTop .minBlocCenter :nth-child(2) {\n  margin-bottom: 2em;\n}\n\n.BlocTop .minBlocCenter :nth-child(3) {\n  letter-spacing: 0.5em;\n  font-size: 1.5em;\n  color: var(--ion-color-warning);\n}\n\n.BlocTop .minBlocCenter :last-child {\n  margin-top: 2em;\n}\n\n.BlocTop .minBlocRight {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.BlocTop .minBlocRight :nth-child(n) {\n  margin-top: 0.5em;\n}\n\n.BlocTop .minBlocRight :nth-child(3) {\n  margin-top: 2em;\n}\n\n.BlocMiddle {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  margin: 5em 0 2em 0;\n  padding: 0 3em 0 3em;\n}\n\n.btn {\n  color: black;\n  font-size: 1em;\n  background-color: var(--ion-color-warning);\n  border-radius: 3em;\n  padding: 0.8em 3em 0.8em 3em;\n  margin-top: 2em;\n}\n\n.btnRed {\n  background-color: var(--ion-color-danger);\n}\n\n.btnGreen {\n  background-color: var(--ion-color-success);\n}\n\n.textGreen {\n  color: var(--ion-color-danger);\n}\n\n.textRed {\n  color: var(--ion-color-success);\n}\n\n.circleContaint {\n  width: 7em;\n  height: 7em;\n  border: 3px solid;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.BlocBottom {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: 2em;\n}\n\n.btnOrange {\n  background-color: var(--ion-color-warning);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImp1cnktZi11cC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcVGhlJTIwU3BlbGxpbmclMjBLaW5nXFxhc19kZXNfbW90c19mcm9udGVuZFxcc3JjXFxhcHBcXHBhZ2VzXFxwYXJ0aWVcXGp1cnktZi11cFxcanVyeS1mLXVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQ0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNDUjs7QURDUTtFQUNFLGlCQUFBO0FDQ1Y7O0FER0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNGUjs7QURLUTtFQUNFLGtCQUFBO0FDSFY7O0FETVE7RUFDRSxrQkFBQTtBQ0pWOztBRE9RO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FDTFY7O0FEUVE7RUFDRSxlQUFBO0FDTlY7O0FEVUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUNSUjs7QURXUTtFQUNFLGlCQUFBO0FDVFY7O0FEWVE7RUFDRSxlQUFBO0FDVlY7O0FEZUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDWko7O0FEZUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7QUNaSjs7QURjQTtFQUNJLHlDQUFBO0FDWEo7O0FEYUE7RUFDSSwwQ0FBQTtBQ1ZKOztBRGFBO0VBQ0UsOEJBQUE7QUNWRjs7QURhQTtFQUNFLCtCQUFBO0FDVkY7O0FEY0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1hGOztBRGNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ1hGOztBRGNBO0VBQ0UsMENBQUE7QUNYRiIsImZpbGUiOiJqdXJ5LWYtdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15V3JhcHBlcntcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDAgMmVtIDAgMmVtO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmctYWNjdWVpbC5zdmcpO1xyXG4gIH1cclxuXHJcbi5CbG9jVG9we1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxuXHJcbiAgICAubWluQmxvY0xlZnR7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuXHJcbiAgICAgICAgOm50aC1jaGlsZChuKXtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWluQmxvY0NlbnRlcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAvLyBwYWRkaW5nLXRvcDogMTBlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVlbTtcclxuXHJcblxyXG4gICAgICAgIDpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6bnRoLWNoaWxkKDMpe1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNWVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6bGFzdC1jaGlsZHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1pbkJsb2NSaWdodHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcblxyXG5cclxuICAgICAgICA6bnRoLWNoaWxkKG4pe1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6bnRoLWNoaWxkKDMpe1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLkJsb2NNaWRkbGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiA1ZW0gMCAyZW0gMDtcclxuICAgIHBhZGRpbmc6IDAgM2VtIDAgM2VtO1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzZW07XHJcbiAgICBwYWRkaW5nOiAwLjhlbSAzZW0gMC44ZW0gM2VtO1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG59XHJcbi5idG5SZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxufVxyXG4uYnRuR3JlZW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbn1cclxuXHJcbi50ZXh0R3JlZW57XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG59XHJcblxyXG4udGV4dFJlZHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG5cclxufVxyXG5cclxuLmNpcmNsZUNvbnRhaW50e1xyXG4gIHdpZHRoOiA3ZW07XHJcbiAgaGVpZ2h0OiA3ZW07XHJcbiAgYm9yZGVyOiAzcHggc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLkJsb2NCb3R0b217XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAyZW07XHJcbn1cclxuXHJcbi5idG5PcmFuZ2V7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xyXG59XHJcbiIsIi5teVdyYXBwZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDAgMmVtIDAgMmVtO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy1hY2N1ZWlsLnN2Zyk7XG59XG5cbi5CbG9jVG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAyZW07XG59XG4uQmxvY1RvcCAubWluQmxvY0xlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG4uQmxvY1RvcCAubWluQmxvY0xlZnQgOm50aC1jaGlsZChuKSB7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuLkJsb2NUb3AgLm1pbkJsb2NDZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogNWVtO1xufVxuLkJsb2NUb3AgLm1pbkJsb2NDZW50ZXIgOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogM2VtO1xufVxuLkJsb2NUb3AgLm1pbkJsb2NDZW50ZXIgOm50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cbi5CbG9jVG9wIC5taW5CbG9jQ2VudGVyIDpudGgtY2hpbGQoMykge1xuICBsZXR0ZXItc3BhY2luZzogMC41ZW07XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG59XG4uQmxvY1RvcCAubWluQmxvY0NlbnRlciA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cbi5CbG9jVG9wIC5taW5CbG9jUmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbn1cbi5CbG9jVG9wIC5taW5CbG9jUmlnaHQgOm50aC1jaGlsZChuKSB7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuLkJsb2NUb3AgLm1pbkJsb2NSaWdodCA6bnRoLWNoaWxkKDMpIHtcbiAgbWFyZ2luLXRvcDogMmVtO1xufVxuXG4uQmxvY01pZGRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogNWVtIDAgMmVtIDA7XG4gIHBhZGRpbmc6IDAgM2VtIDAgM2VtO1xufVxuXG4uYnRuIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDFlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICBib3JkZXItcmFkaXVzOiAzZW07XG4gIHBhZGRpbmc6IDAuOGVtIDNlbSAwLjhlbSAzZW07XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cblxuLmJ0blJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG4uYnRuR3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59XG5cbi50ZXh0R3JlZW4ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbi50ZXh0UmVkIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbn1cblxuLmNpcmNsZUNvbnRhaW50IHtcbiAgd2lkdGg6IDdlbTtcbiAgaGVpZ2h0OiA3ZW07XG4gIGJvcmRlcjogM3B4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uQmxvY0JvdHRvbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMmVtO1xufVxuXG4uYnRuT3JhbmdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xufSJdfQ== */";

/***/ }),

/***/ 2304:
/*!***********************************************************************!*\
  !*** ./src/app/pages/partie/jury-f-up/jury-f-up.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"myWrapper\">\r\n    <div class=\"BlocTop\">\r\n      <div class=\"minBlocLeft\">\r\n        <div>Participant N°3</div>\r\n        <div>Alphonse Alexandre 27</div>\r\n        <div>Passage N°2</div>\r\n      </div>\r\n      <div class=\"minBlocCenter\">\r\n        <div>Mot N°5</div>\r\n        <div>Banane</div>\r\n        <div>-B-a-n-a-n-e-</div>\r\n        <div>Ecoutez l’orthographe  du participant et donnez un verdict</div>\r\n      </div>\r\n      <div class=\"minBlocRight\">\r\n        <div>Total de Mots: 15</div>\r\n        <div>10 Mots restant</div>\r\n        <div>Demi Finale</div>\r\n        <div>Manche 1</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"BlocMiddle\">\r\n      <button class=\"btn btnRed\">Incorrect</button>\r\n      <div class=\"textGreen circleContaint\">Incorrect !</div>\r\n      <div class=\"textRed circleContaint\" *ngIf=\"false\">Correct !</div>\r\n      <button class=\"btn btnGreen\">Correct</button>\r\n    </div>\r\n    <div class=\"BlocBottom\">\r\n      <button class=\"btn btnOrange\">Confirmer</button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_partie_jury-f-up_jury-f-up_module_ts.js.map