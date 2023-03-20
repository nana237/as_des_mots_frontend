"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_complete-info_complete-info_module_ts"],{

/***/ 5534:
/*!**************************************************************************!*\
  !*** ./src/app/pages/auth/complete-info/complete-info-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompleteInfoPageRoutingModule": () => (/* binding */ CompleteInfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _complete_info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complete-info.page */ 3109);




const routes = [
    {
        path: '',
        component: _complete_info_page__WEBPACK_IMPORTED_MODULE_0__.CompleteInfoPage
    }
];
let CompleteInfoPageRoutingModule = class CompleteInfoPageRoutingModule {
};
CompleteInfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CompleteInfoPageRoutingModule);



/***/ }),

/***/ 5116:
/*!******************************************************************!*\
  !*** ./src/app/pages/auth/complete-info/complete-info.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompleteInfoPageModule": () => (/* binding */ CompleteInfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _complete_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complete-info-routing.module */ 5534);
/* harmony import */ var _complete_info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complete-info.page */ 3109);
/* harmony import */ var _components_pl_part_footer_footer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/pl-part/footer/footer.module */ 6616);








let CompleteInfoPageModule = class CompleteInfoPageModule {
};
CompleteInfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _complete_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompleteInfoPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
            _components_pl_part_footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule
        ],
        declarations: [_complete_info_page__WEBPACK_IMPORTED_MODULE_1__.CompleteInfoPage]
    })
], CompleteInfoPageModule);



/***/ }),

/***/ 3109:
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/complete-info/complete-info.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompleteInfoPage": () => (/* binding */ CompleteInfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _complete_info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complete-info.page.html?ngResource */ 636);
/* harmony import */ var _complete_info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complete-info.page.scss?ngResource */ 7100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ 7556);
/* harmony import */ var _services_feature_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/feature.service */ 8059);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5485);








let CompleteInfoPage = class CompleteInfoPage {
    constructor(formBuilder, auth_, feature_, router) {
        this.formBuilder = formBuilder;
        this.auth_ = auth_;
        this.feature_ = feature_;
        this.router = router;
        this.loading = false;
    }
    ngOnInit() {
        if (this.auth_.userdata) {
            if (this.auth_.userdata.pk) {
                this.account_id = this.auth_.userdata.pk;
            }
            else {
                this.account_id = '';
            }
        }
        else {
            this.account_id = '';
        }
        this.initForm();
    }
    //   {
    //     "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUzOTk1ODMxLCJqdGkiOiI1MWI0MDBlMTVlNTE0NmM4YmUxYmYxMWY2ZDJlMWU5MSIsInVzZXJfaWQiOjJ9.Eh-syDWcfPE2lt3tR7AiLyJx16nFB6i9Ve1cV2SPmIo",
    //     "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY1NDYwMDMzMSwianRpIjoiY2ZiNTc1NTYyMWFiNGVmNGJiZWI4NTE2MDVmYjg0ODgiLCJ1c2VyX2lkIjoyfQ.6zFdjAqzaFABJVXoC5TnKRJ9OrqwbGZ-aPP3srCLF78",
    //     "user": {
    //         "pk": 2,
    //         "username": "test2",
    //         "email": "test@test.com",
    //         "first_name": "",
    //         "last_name": ""
    //     }
    // }
    // {
    //   "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU0MDc2MDQ5LCJqdGkiOiJjY2U1NTcyZWZlMzE0OGRjOGUyYjI4NmYyMjMwOGNhNCIsInVzZXJfaWQiOjN9.Wkp-oEvt6mMHoFv2XVMQt1a2ec0XgYThpH5nmyaPoGc",
    //   "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY1NDY4MDU0OSwianRpIjoiMjM5NWY2YmVkMjk1NGVhYWJmMmQ2MGRmNzQwNWFmYTgiLCJ1c2VyX2lkIjozfQ.FGLWnE4fxiBaxinSvCEPwZfmZcbcWXJWFWusN-4xOWA",
    //   "user": {
    //       "pk": 3,
    //       "username": "test",
    //       "email": "test@test.test",
    //       "first_name": "",
    //       "last_name": ""
    //   }
    // }
    initForm() {
        this.userForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            organization: [''],
            level: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            genre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            town: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            personType: ['ELEVE'],
            account: [this.account_id],
        });
    }
    validateForm() {
        console.log('validate');
        if (this.userForm.invalid) {
            //- emptyName;
            // emptyOrganisation;
            //- emptyLevel;
            // emptyGender;
            // emptyTown;
            if (this.userForm.get('name').value == '') {
                this.emptyName = true;
            }
            else {
                this.emptyName = false;
            }
            if (this.userForm.get('level').value == '') {
                this.emptyLevel = true;
            }
            else {
                this.emptyLevel = false;
            }
            if (this.userForm.get('genre').value == '') {
                this.emptyGender = true;
            }
            else {
                this.emptyGender = false;
            }
            if (this.userForm.get('town').value == '') {
                this.emptyTown = true;
            }
            else {
                this.emptyTown = false;
            }
            return false;
        }
        return true;
    }
    onSubmitForm() {
        if (this.validateForm() && !this.loading) {
            this.loading = true;
            console.log("submit");
            console.log(this.userForm.value);
            console.log(this.userForm.get('name').value);
            // let formValue= {
            //   username: this.userForm.get('username').value,
            //   email: this.userForm.get('email').value,
            //   password1: this.userForm.get('password1').value,
            //   password2: this.userForm.get('password2').value
            // }
            let formdata;
            formdata = this.feature_.toFormdata(this.userForm.value);
            // formdata= this.feature_.toFormdata(formValue);
            // console.log(formdata.value)
            console.log(formdata.get('username'));
            formdata.forEach((fValue, fKey) => { console.log(fValue, fKey); });
            this.auth_.completeInfo(this.userForm.value).subscribe(data => {
                console.log('inside subscribe');
                console.log(data);
                this.auth_.userCompleteData = data;
                this.loading = false;
                this.router.navigateByUrl('connexion');
            }, error => {
                console.warn(error);
                this.loading = false;
            });
        }
        else {
            console.log("not submited");
            if (this.loading) {
                console.log(this.loading);
            }
        }
    }
};
CompleteInfoPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _services_feature_service__WEBPACK_IMPORTED_MODULE_3__.FeatureService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
CompleteInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-complete-info',
        template: _complete_info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_complete_info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CompleteInfoPage);



/***/ }),

/***/ 7100:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/auth/complete-info/complete-info.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = ".myWrapper {\n  display: flex;\n}\n\n.imgBloc {\n  width: 50vw;\n  height: 100vh;\n  overflow: hidden;\n  background: url('img_connexion.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.blockForm {\n  width: 50vw;\n  display: flex;\n  height: 100vh;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-top: 4em;\n  padding-bottom: 4em;\n  padding-left: 7vw;\n  padding-right: 7vw;\n  min-height: 520px;\n  overflow: auto;\n}\n\n.jhead {\n  display: flex;\n  flex-direction: column;\n}\n\n.myTitle {\n  font-size: 2.5em;\n}\n\n.myTitleAside {\n  font-size: 0.75em;\n  margin-left: 0.3em;\n  color: var(--ion-color-dark-shade);\n}\n\n.myfield {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 2em;\n}\n\n.mylabel {\n  font-family: \"Circular_Medium\";\n  font-size: 0.75em;\n  color: var(--ion-color-dark-shade);\n  margin-bottom: 0.5em;\n  margin-top: 1em;\n}\n\n.mytextfield {\n  border-radius: 25px 25px 25px 25px;\n  border: 0;\n  height: 2.5em;\n  padding-left: 2em;\n  background-color: var(--ion-color-primary-contrast);\n  color: var(--ion-color-dark-tint);\n  font-size: 1em;\n}\n\n.myselectfield {\n  border-radius: 25px 25px 25px 25px;\n  border: 0;\n  height: 2.5em;\n  padding-left: 2em;\n  padding-right: 2em;\n  background-color: var(--ion-color-primary-contrast);\n  color: var(--ion-color-dark-tint);\n  font-size: 1em;\n}\n\n.jbottom {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.btnValidate {\n  background-color: var(--ion-color-warning);\n  height: 3.5em;\n  width: 13em;\n  border-radius: 30px 30px 30px 30px;\n  margin-bottom: 1em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.underValidate {\n  font-size: 0.5em;\n  color: var(--ion-color-dark-shade);\n}\n\n.greelink {\n  text-decoration: underline;\n}\n\n.noticeinvalid {\n  color: var(--ion-color-danger);\n  font-family: \"Roboto_light\";\n  font-size: 0.7em;\n  width: 100%;\n  text-align: left;\n}\n\n.redStar {\n  color: var(--ion-color-danger);\n  font-family: \"Roboto_light\";\n  font-size: 1em;\n  width: 100%;\n  text-align: left;\n}\n\n.circularLoader {\n  position: absolute;\n  right: 1em;\n}\n\n/** Scrolbar **/\n\n::-webkit-scrollbar {\n  width: 7px;\n}\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  background: #fff;\n  border-radius: 25px;\n}\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: #aaa;\n  border-radius: 25px;\n}\n\n::-webkit-scrollbar-track:hover {\n  background: #f1f1f1;\n  border-radius: 25px;\n}\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n/** /Scrolbar **/\n\n@media only screen and (max-width: 600px) {\n  .imgBloc {\n    display: none;\n  }\n\n  .blockForm {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding-top: 4em;\n    padding-bottom: 4em;\n    padding-left: 7vw;\n    padding-right: 7vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXRlLWluZm8ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFRoZSUyMFNwZWxsaW5nJTIwS2luZ1xcYXNfZGVzX21vdHNfZnJvbnRlbmRcXHNyY1xcYXBwXFxwYWdlc1xcYXV0aFxcY29tcGxldGUtaW5mb1xcY29tcGxldGUtaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNBRjs7QURJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQ0RGOztBRFNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNORjs7QURVQTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ1BGOztBRFVBO0VBQ0Usa0NBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbURBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUNQRjs7QURVQTtFQUNFLGtDQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbURBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUNQRjs7QURVQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDUEY7O0FEVUE7RUFDRSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7QUNURjs7QURZQTtFQUNFLGdCQUFBO0VBQ0Esa0NBQUE7QUNURjs7QURZQTtFQUNFLDBCQUFBO0FDVEY7O0FEWUE7RUFDRSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNURjs7QURlQTtFQUNFLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDWkY7O0FEa0JBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDZkY7O0FEbUJBLGVBQUE7O0FBQ0E7RUFDRSxVQUFBO0FDaEJGOztBRG1CQSxVQUFBOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ2hCRjs7QURtQkEsV0FBQTs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNoQkY7O0FEbUJBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQ2hCRjs7QURtQkEsb0JBQUE7O0FBQ0E7RUFDRSxnQkFBQTtBQ2hCRjs7QURrQkEsZ0JBQUE7O0FBRUE7RUFDRTtJQUNJLGFBQUE7RUNoQko7O0VEbUJBO0lBQ0ksWUFBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSw4QkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDaEJKO0FBQ0YiLCJmaWxlIjoiY29tcGxldGUtaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm15V3JhcHBlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaW1nQmxvY3tcclxuICB3aWR0aDogNTB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaW1nX2Nvbm5leGlvbi5qcGcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmJsb2NrRm9ybXtcclxuICB3aWR0aDogNTB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy10b3A6IDRlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogNGVtO1xyXG4gIHBhZGRpbmctbGVmdDogN3Z3O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDd2dztcclxuICBtaW4taGVpZ2h0OiA1MjBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuXHJcbn1cclxuXHJcbi5qaGVhZHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5teVRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMi41ZW07XHJcbn1cclxuXHJcbi5teVRpdGxlQXNpZGV7XHJcbiAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDAuM2VtO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XHJcbn1cclxuXHJcbi5qbWlkZGxle1xyXG4gIC8vIHBhZGRpbmctbGVmdDogOGVtO1xyXG4gIC8vIHBhZGRpbmctcmlnaHQ6IDhlbTtcclxufVxyXG5cclxuLm15ZmllbGR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG5cclxuXHJcbi5teWxhYmVse1xyXG4gIGZvbnQtZmFtaWx5OiAnQ2lyY3VsYXJfTWVkaXVtJztcclxuICBmb250LXNpemU6IDAuNzVlbTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG5cclxuLm15dGV4dGZpZWxke1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAyNXB4IDI1cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGhlaWdodDogMi41ZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcclxuICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuLm15c2VsZWN0ZmllbGR7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDI1cHggMjVweDtcclxuICBib3JkZXI6IDA7XHJcbiAgaGVpZ2h0OiAyLjVlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcclxuICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuLmpib3R0b217XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG5WYWxpZGF0ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XHJcbiAgaGVpZ2h0OiAzLjVlbTtcclxuICB3aWR0aDogMTNlbTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMzBweCAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi51bmRlclZhbGlkYXRle1xyXG4gIGZvbnQtc2l6ZTogMC41ZW07XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcclxufVxyXG5cclxuLmdyZWVsaW5re1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ubm90aWNlaW52YWxpZHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9fbGlnaHQnO1xyXG4gIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDJlbTtcclxuICAvLyBtYXJnaW4tdG9wOiAxZW07XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4ucmVkU3RhcntcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9fbGlnaHQnO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAyZW07XHJcbiAgLy8gbWFyZ2luLXRvcDogMWVtO1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxuLmNpcmN1bGFyTG9hZGVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMWVtO1xyXG59XHJcblxyXG5cclxuLyoqIFNjcm9sYmFyICoqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogN3B4O1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6MjVweDtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNhYWE7XHJcbiAgYm9yZGVyLXJhZGl1czoyNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gIGJvcmRlci1yYWRpdXM6MjVweDtcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1NTU7XHJcbn1cclxuLyoqIC9TY3JvbGJhciAqKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuaW1nQmxvY3tcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5ibG9ja0Zvcm17XHJcbiAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNGVtO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNGVtO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDd2dztcclxuICAgICAgcGFkZGluZy1yaWdodDogN3Z3O1xyXG4gIH1cclxufVxyXG4iLCIubXlXcmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmltZ0Jsb2Mge1xuICB3aWR0aDogNTB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaW1nX2Nvbm5leGlvbi5qcGcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYmxvY2tGb3JtIHtcbiAgd2lkdGg6IDUwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy10b3A6IDRlbTtcbiAgcGFkZGluZy1ib3R0b206IDRlbTtcbiAgcGFkZGluZy1sZWZ0OiA3dnc7XG4gIHBhZGRpbmctcmlnaHQ6IDd2dztcbiAgbWluLWhlaWdodDogNTIwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uamhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubXlUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG59XG5cbi5teVRpdGxlQXNpZGUge1xuICBmb250LXNpemU6IDAuNzVlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuM2VtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpO1xufVxuXG4ubXlmaWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cblxuLm15bGFiZWwge1xuICBmb250LWZhbWlseTogXCJDaXJjdWxhcl9NZWRpdW1cIjtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5teXRleHRmaWVsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAyNXB4IDI1cHg7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgcGFkZGluZy1sZWZ0OiAyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLm15c2VsZWN0ZmllbGQge1xuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMjVweCAyNXB4O1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogMi41ZW07XG4gIHBhZGRpbmctbGVmdDogMmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLmpib3R0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYnRuVmFsaWRhdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG4gIGhlaWdodDogMy41ZW07XG4gIHdpZHRoOiAxM2VtO1xuICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMzBweCAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi51bmRlclZhbGlkYXRlIHtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcbn1cblxuLmdyZWVsaW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5ub3RpY2VpbnZhbGlkIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9fbGlnaHRcIjtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5yZWRTdGFyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9fbGlnaHRcIjtcbiAgZm9udC1zaXplOiAxZW07XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY2lyY3VsYXJMb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxZW07XG59XG5cbi8qKiBTY3JvbGJhciAqKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogN3B4O1xufVxuXG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICNhYWE7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xufVxuXG4vKiogL1Njcm9sYmFyICoqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaW1nQmxvYyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5ibG9ja0Zvcm0ge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy10b3A6IDRlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNGVtO1xuICAgIHBhZGRpbmctbGVmdDogN3Z3O1xuICAgIHBhZGRpbmctcmlnaHQ6IDd2dztcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 636:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/auth/complete-info/complete-info.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"myWrapper\">\r\n    <div class=\"imgBloc\">\r\n      <!-- <img src=\"assets/images/img_inscription.jpg\" alt=\"\"> -->\r\n    </div>\r\n    <div class=\"blockForm\">\r\n\r\n      <div class=\"jhead\">\r\n        <span class=\"myTitle\">Complétez vos informations</span>\r\n        <span class=\"myTitleAside\">Ajouter les détails de vos information puis connecté vous</span>\r\n      </div>\r\n      <div class=\"jmiddle\">\r\n        <br>\r\n        <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmitForm()\">\r\n\r\n          <div class=\"myfield\">\r\n            <span *ngIf=\"emptyName\" class=\"noticeinvalid\">Ce champs ne doit pas rester vide</span>\r\n            <label for=\"name\" class=\"mylabel\">Votre nom </label>\r\n            <input id=\"name\" type=\"text\" formControlName=\"name\" class=\"mytextfield\" placeholder=\"Nom\">\r\n          </div>\r\n\r\n          <div class=\"myfield\">\r\n          <label for=\"organization\" class=\"mylabel\">Votre organisation </label>\r\n            <select name=\"organization\" id=\"organization\" formControlName=\"organization\" class=\"myselectfield\" >\r\n              <option value=\"\" >Oganization</option>\r\n\r\n            </select>\r\n          </div>\r\n          <div class=\"myfield\">\r\n            <span *ngIf=\"emptyLevel\" class=\"noticeinvalid\">Ce champs ne doit pas rester vide</span>\r\n            <label for=\"level\" class=\"mylabel\">Votre niveau </label>\r\n            <select name=\"level\" id=\"level\" formControlName=\"level\" class=\"myselectfield\" >\r\n              <option value=\"\">Niveau</option>\r\n              <option value=\"1\">Débutant</option>\r\n              <option value=\"2\">Élémentaire</option>\r\n              <option value=\"3\">Intermédiaire 1</option>\r\n              <option value=\"4\">Intermédiaire 2</option>\r\n              <option value=\"5\">Intermédiaire 3</option>\r\n              <option value=\"6\">Avancé 1</option>\r\n              <option value=\"7\">Avancé 2</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"myfield\">\r\n            <span *ngIf=\"emptyGender\" class=\"noticeinvalid\">Ce champs ne doit pas rester vide</span>\r\n            <label for=\"genre\" class=\"mylabel\">Votre genre </label>\r\n            <select name=\"genre\" id=\"genre\" formControlName=\"genre\" class=\"myselectfield\" >\r\n              <option value=\"\">Genre</option>\r\n              <option value=\"HOMME\">Homme</option>\r\n              <option value=\"FEMME\">Femme</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"myfield\">\r\n            <span *ngIf=\"emptyTown\" class=\"noticeinvalid\">Ce champs ne doit pas rester vide</span>\r\n            <label for=\"town\" class=\"mylabel\">Votre ville </label>\r\n            <select name=\"town\" id=\"town\" formControlName=\"town\" class=\"myselectfield\" >\r\n              <option value=\"\">Ville</option>\r\n              <option value=\"1\">Yaoundé</option>\r\n              <option value=\"2\">Douala</option>\r\n            </select>\r\n          </div>\r\n\r\n\r\n          <div class=\"jbottom\">\r\n            <Button type=\"submit\" class=\"btnValidate\">Compléter <ion-spinner *ngIf=\"loading\" class=\"circularLoader\" name=\"crescent\"></ion-spinner> </Button>\r\n            <!-- <span class=\"underValidate\">Pas de compte ? <span class=\"greelink\">Inscrivez vous</span></span> -->\r\n          </div>\r\n\r\n        </form>\r\n\r\n        <!-- ============================================================================= -->\r\n\r\n\r\n          <!-- <div class=\"myfield\">\r\n            <span *ngIf=\"true\" class=\"noticeinvalid\">ce nom d'utilisateur existe déjà</span>\r\n            <span *ngIf=\"true\" class=\"noticeinvalid\">Ce champs ne doit pas rester vide</span>\r\n            <label for=\"username\" class=\"mylabel\">Votre nom d’utilisateur</label>\r\n            <input id=\"username\" type=\"text\" formControlName=\"username\" class=\"mytextfield\" placeholder=\"Nom d'utilisateur\">\r\n          </div>\r\n\r\n          <div class=\"myfield\">\r\n            <span *ngIf=\"true\" class=\"noticeinvalid\">Ce champs ne doit pas rester vide</span>\r\n            <span *ngIf=\"true\" class=\"noticeinvalid\">Veuillez entrer une adresse email valide</span>\r\n            <label for=\"email\" class=\"mylabel\">Votre adresse email</label>\r\n            <input id=\"email\" type=\"text\" formControlName=\"email\" class=\"mytextfield\" placeholder=\"Email\">\r\n          </div>\r\n\r\n          <div class=\"myfield\">\r\n            <span *ngIf=\"true\" class=\"noticeinvalid\">Ce champs ne doit pas rester vide</span>\r\n            <span *ngIf=\"true\" class=\"noticeinvalid\">Les mots de passe ne coinsident pas</span>\r\n            <span *ngIf=\"true\" class=\"noticeinvalid\">mot de passe pas assez puissant veuillez essayer un autre</span>\r\n            <label for=\"password1\" class=\"mylabel\">Votre mot de pass</label>\r\n            <input id=\"password1\" type=\"password\" formControlName=\"password1\" class=\"mytextfield\" placeholder=\"Mot de pass\">\r\n          </div>\r\n\r\n          <div class=\"myfield\">\r\n            <span *ngIf=\"true\" class=\"noticeinvalid\">Ce champs ne doit pas rester vide</span>\r\n            <span *ngIf=\"true\" class=\"noticeinvalid\">Les mots de passe ne coinsident pas</span>\r\n            <span *ngIf=\"true\" class=\"noticeinvalid\">mot de passe pas assez puissant veuillez essayer un autre</span>\r\n            <label for=\"password2\" class=\"mylabel\"><span class=\"redStar\">*</span> Confirmation du mot de pass</label>\r\n            <input id=\"password2\" type=\"password\" formControlName=\"password2\" class=\"mytextfield\" placeholder=\"Confirmation du mot de pass\">\r\n          </div> -->\r\n\r\n        </div>\r\n\r\n    </div>\r\n  </div>\r\n  <app-footer></app-footer>\r\n  </ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_complete-info_complete-info_module_ts.js.map