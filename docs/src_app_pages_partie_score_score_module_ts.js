"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_partie_score_score_module_ts"],{

/***/ 4610:
/*!************************************************************!*\
  !*** ./src/app/pages/partie/score/score-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScorePageRoutingModule": () => (/* binding */ ScorePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _score_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score.page */ 3035);




const routes = [
    {
        path: '',
        component: _score_page__WEBPACK_IMPORTED_MODULE_0__.ScorePage
    }
];
let ScorePageRoutingModule = class ScorePageRoutingModule {
};
ScorePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ScorePageRoutingModule);



/***/ }),

/***/ 6566:
/*!****************************************************!*\
  !*** ./src/app/pages/partie/score/score.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScorePageModule": () => (/* binding */ ScorePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _score_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score-routing.module */ 4610);
/* harmony import */ var _score_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score.page */ 3035);







let ScorePageModule = class ScorePageModule {
};
ScorePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _score_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScorePageRoutingModule
        ],
        declarations: [_score_page__WEBPACK_IMPORTED_MODULE_1__.ScorePage]
    })
], ScorePageModule);



/***/ }),

/***/ 3035:
/*!**************************************************!*\
  !*** ./src/app/pages/partie/score/score.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScorePage": () => (/* binding */ ScorePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _score_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score.page.html?ngResource */ 9272);
/* harmony import */ var _score_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score.page.scss?ngResource */ 6307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/game.service */ 1397);





let ScorePage = class ScorePage {
    constructor(game_) {
        this.game_ = game_;
        this.tabCandidate = [];
        this.currentIndex = 0;
    }
    ngOnInit() {
        this.tour = this.game_.tour;
        this.tabCandidate = this.game_.tabCandidate;
        this.curentCandidate = this.tabCandidate[this.currentIndex];
    }
    preview() {
        this.currentIndex = this.currentIndex - 1 > 0 ? this.currentIndex - 1 : this.tabCandidate.length - 1;
        this.curentCandidate = this.tabCandidate[this.currentIndex];
    }
    next() {
        this.currentIndex = this.currentIndex + 1 < this.tabCandidate.length ? this.currentIndex + 1 : 0;
        this.curentCandidate = this.tabCandidate[this.currentIndex];
    }
    sum() {
        return this.curentCandidate.score.reduce((partialSum, a) => partialSum + a, 0);
    }
};
ScorePage.ctorParameters = () => [
    { type: src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__.GameService }
];
ScorePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-score',
        template: _score_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_score_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ScorePage);



/***/ }),

/***/ 6307:
/*!***************************************************************!*\
  !*** ./src/app/pages/partie/score/score.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = ".myWrapper {\n  height: 100vh;\n  width: 100vw;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.bloc-score {\n  background: url('bg-score.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.title-score {\n  font-size: 2em;\n}\n\n.score {\n  text-align: center;\n  font-size: 3em;\n}\n\n.encourage {\n  text-align: center;\n}\n\n.btnHome {\n  background-color: var(--ion-color-primary);\n  color: black;\n  font-size: 1.5em;\n  padding: 0.5em 2.5em 0.5em 2.5em;\n  border-radius: 3.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjb3JlLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxUaGUlMjBTcGVsbGluZyUyMEtpbmdcXGFzX2Rlc19tb3RzX2Zyb250ZW5kXFxzcmNcXGFwcFxccGFnZXNcXHBhcnRpZVxcc2NvcmVcXHNjb3JlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FER0E7RUFDRSwrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURDQTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQ0VGIiwiZmlsZSI6InNjb3JlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teVdyYXBwZXJ7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbn1cclxuXHJcbi5ibG9jLXNjb3Jle1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhcnRpZS9iZy1zY29yZS5zdmcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4udGl0bGUtc2NvcmV7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuLnNjb3Jle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDNlbTtcclxufVxyXG4uZW5jb3VyYWdle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bkhvbWV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIHBhZGRpbmc6IDAuNWVtIDIuNWVtIDAuNWVtIDIuNWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMuNXB4O1xyXG59XHJcbiIsIi5teVdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uYmxvYy1zY29yZSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhcnRpZS9iZy1zY29yZS5zdmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi50aXRsZS1zY29yZSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4uc2NvcmUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogM2VtO1xufVxuXG4uZW5jb3VyYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuSG9tZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwYWRkaW5nOiAwLjVlbSAyLjVlbSAwLjVlbSAyLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogMy41cHg7XG59Il19 */";

/***/ }),

/***/ 9272:
/*!***************************************************************!*\
  !*** ./src/app/pages/partie/score/score.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"myWrapper\">\r\n    <h1 class=\"title-score\">\r\n      <!-- Votre  -->\r\n      Score : {{curentCandidate.name}}\r\n    </h1>\r\n    <div class=\"bloc-score\">\r\n      <button (click)=\"preview()\">prev</button>\r\n      <button (click)=\"next()\">next</button>\r\n      <div class=\"score\"> {{sum()}}/{{tour}} </div>\r\n      <p class=\"encourage\">pas mal, mais faut <br> encore bosser</p>\r\n    </div>\r\n    <button class=\"btnHome\">Accueil</button>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_partie_score_score_module_ts.js.map