"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_partie_game-mode-select_game-mode-select_module_ts"],{

/***/ 9570:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/partie/game-mode-select/game-mode-select-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameModeSelectPageRoutingModule": () => (/* binding */ GameModeSelectPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _game_mode_select_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-mode-select.page */ 286);




const routes = [
    {
        path: '',
        component: _game_mode_select_page__WEBPACK_IMPORTED_MODULE_0__.GameModeSelectPage
    }
];
let GameModeSelectPageRoutingModule = class GameModeSelectPageRoutingModule {
};
GameModeSelectPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GameModeSelectPageRoutingModule);



/***/ }),

/***/ 7415:
/*!**************************************************************************!*\
  !*** ./src/app/pages/partie/game-mode-select/game-mode-select.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameModeSelectPageModule": () => (/* binding */ GameModeSelectPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _game_mode_select_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-mode-select-routing.module */ 9570);
/* harmony import */ var _game_mode_select_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-mode-select.page */ 286);







let GameModeSelectPageModule = class GameModeSelectPageModule {
};
GameModeSelectPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _game_mode_select_routing_module__WEBPACK_IMPORTED_MODULE_0__.GameModeSelectPageRoutingModule
        ],
        declarations: [_game_mode_select_page__WEBPACK_IMPORTED_MODULE_1__.GameModeSelectPage]
    })
], GameModeSelectPageModule);



/***/ }),

/***/ 286:
/*!************************************************************************!*\
  !*** ./src/app/pages/partie/game-mode-select/game-mode-select.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameModeSelectPage": () => (/* binding */ GameModeSelectPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _game_mode_select_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-mode-select.page.html?ngResource */ 9801);
/* harmony import */ var _game_mode_select_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-mode-select.page.scss?ngResource */ 7786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/config.service */ 946);






let GameModeSelectPage = class GameModeSelectPage {
    constructor(router, config_) {
        this.router = router;
        this.config_ = config_;
    }
    ngOnInit() {
    }
    gotoOnline() {
        this.config_.mode = "online";
        this.router.navigateByUrl('game-config');
    }
};
GameModeSelectPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService }
];
GameModeSelectPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-game-mode-select',
        template: _game_mode_select_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_game_mode_select_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GameModeSelectPage);



/***/ }),

/***/ 7786:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/partie/game-mode-select/game-mode-select.page.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = ".myWrapper {\n  height: 100vh;\n  width: 100vw;\n  background: url('bg-accueil.svg');\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.verticalAlign {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUtbW9kZS1zZWxlY3QucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE5hbmElMjBCb3Jpc1xcRG9jdW1lbnRzXFxBU0RFU01PVFNcXHByb2pldFxcYXNfZGVzX21vdHNfZnJvbnRlbmRcXHNyY1xcYXBwXFxwYWdlc1xccGFydGllXFxnYW1lLW1vZGUtc2VsZWN0XFxnYW1lLW1vZGUtc2VsZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNDSiIsImZpbGUiOiJnYW1lLW1vZGUtc2VsZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teVdyYXBwZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmctYWNjdWVpbC5zdmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbEFsaWdue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn0iLCIubXlXcmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy1hY2N1ZWlsLnN2Zyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udmVydGljYWxBbGlnbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */";

/***/ }),

/***/ 9801:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/partie/game-mode-select/game-mode-select.page.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>gameModeSelect</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"myWrapper\">\r\n    <div class=\"verticalAlign\">\r\n      <button [routerLink]=\"['../leve-choice']\" class=\"btnGold\">Solo</button>\r\n      <button (click)=\"gotoOnline()\" class=\"btnGold\">On line</button>\r\n      <button class=\"btnGold\">Tournois</button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_partie_game-mode-select_game-mode-select_module_ts.js.map