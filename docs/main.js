(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 975:
/*!************************************!*\
  !*** ./src/app/serverJs/apiUrl.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseUrl": () => (/* binding */ baseUrl)
/* harmony export */ });
// export let baseUrl = "http://127.0.0.1:8000/";
let baseUrl = "https://as-des-mots.herokuapp.com/";


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5485);



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'connexion',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_auth_connexion_connexion_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/connexion/connexion.module */ 2279)).then(m => m.ConnexionPageModule)
    },
    {
        path: 'inscription',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_auth_inscription_inscription_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/inscription/inscription.module */ 1106)).then(m => m.InscriptionPageModule)
    },
    {
        path: 'accueil',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_partie_accueil_accueil_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/partie/accueil/accueil.module */ 5309)).then(m => m.AccueilPageModule)
    },
    {
        path: 'footer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pl-part_footer_footer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pl-part/footer/footer.module */ 351)).then(m => m.FooterPageModule)
    },
    {
        path: 'complete-info',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_auth_complete-info_complete-info_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/complete-info/complete-info.module */ 5116)).then(m => m.CompleteInfoPageModule)
    },
    {
        path: 'game-config',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_config_game-config_game-config_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/config/game-config/game-config.module */ 7096)).then(m => m.GameConfigPageModule)
    },
    {
        path: 'game',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_partie_game_game_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/partie/game/game.module */ 9510)).then(m => m.GamePageModule)
    },
    {
        path: 'score',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_partie_score_score_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/partie/score/score.module */ 6566)).then(m => m.ScorePageModule)
    },
    {
        path: 'rejoindre',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_partie_rejoindre_rejoindre_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/partie/rejoindre/rejoindre.module */ 1388)).then(m => m.RejoindrePageModule)
    },
    {
        path: 'leve-choice',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_partie_leve-choice_leve-choice_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/partie/leve-choice/leve-choice.module */ 5086)).then(m => m.LeveChoicePageModule)
    },
    {
        path: 'jury-f-up',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_partie_jury-f-up_jury-f-up_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/partie/jury-f-up/jury-f-up.module */ 8694)).then(m => m.JuryFUpPageModule)
    },
    {
        path: 'game-mode-select',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_partie_game-mode-select_game-mode-select_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/partie/game-mode-select/game-mode-select.module */ 7415)).then(m => m.GameModeSelectPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 2009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/game.service */ 1397);
/* harmony import */ var _services_realtime_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/realtime.service */ 9099);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/storage.service */ 1188);
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/websocket.service */ 8223);










let AppComponent = class AppComponent {
    constructor(realtime_, auth_, storage_, websocket_, router, game_) {
        this.realtime_ = realtime_;
        this.auth_ = auth_;
        this.storage_ = storage_;
        this.websocket_ = websocket_;
        this.router = router;
        this.game_ = game_;
        this.message = {
            "message": "Je vais bien et toi ?",
            "msg": "lol",
        };
        this.storage_.create();
        this.getUserData();
        // this.realtime_.messages.subscribe(msg => {
        //   console.log("Response from websocket: " + msg);
        //   console.log(msg);
        //   console.log(msg.title);
        //   // this.sendMsg();
        // });
    }
    connect(user) {
        this.websocket_.connectTo(user).subscribe({
            next: msg => {
                console.log(msg);
                this.websocket_.currentMessage = msg;
                if (msg.destinataire == this.auth_.userdata.username) {
                    switch (msg.typeMessage) {
                        case this.websocket_.typesMessage.MQ:
                            break;
                        case this.websocket_.typesMessage.MR:
                            break;
                        case this.websocket_.typesMessage.DP:
                            this.router.navigateByUrl('rejoindre');
                            break;
                        case this.websocket_.typesMessage.RD:
                            this.websocket_.messageByUser[user] = msg;
                            break;
                        case this.websocket_.typesMessage.START:
                            this.game_.gamedata = msg.message.gamedata;
                            this.game_.users = msg.message.players;
                            this.game_.startingOnline = true;
                            this.game_.initiateur = msg.initiateur;
                            this.router.navigateByUrl('game');
                            break;
                        case this.websocket_.typesMessage.STOP:
                            break;
                        default:
                            break;
                    }
                }
            },
            error: err => console.log(err),
            complete: () => console.log('complete')
        });
    }
    getUserData() {
        this.storage_.get('userdata').then((val) => {
            console.log('receive promise');
            console.log(val);
            this.auth_.userdata = val.user;
            console.log(this.auth_.userdata);
            // this.websocket_.connectTo(this.auth_.userdata.username)
            this.connect(this.auth_.userdata.username);
        }).catch(reason => {
            console.warn(reason);
        });
    }
    sendMsg() {
        console.log("new message from client to websocket: ", this.message);
        this.realtime_.messages.next(this.message);
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_realtime_service__WEBPACK_IMPORTED_MODULE_4__.RealtimeService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService },
    { type: _services_websocket_service__WEBPACK_IMPORTED_MODULE_6__.WebsocketService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_3__.GameService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 8394);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8336);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 2879);










let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy },
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _serverJs_apiUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../serverJs/apiUrl */ 975);




let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.connected = false;
    }
    getAllOrganization() {
        // return this.http.get(baseUrl+'')
    }
    getAllLevel() { }
    getAlltown() { }
    login(data) {
        return this.http.post(_serverJs_apiUrl__WEBPACK_IMPORTED_MODULE_0__.baseUrl + 'dj-rest-auth/login/', data);
    }
    register(data) {
        console.log('inside auth');
        console.log(data);
        return this.http.post(_serverJs_apiUrl__WEBPACK_IMPORTED_MODULE_0__.baseUrl + 'dj-rest-auth/registration/', data);
    }
    completeInfo(data) {
        return this.http.post(_serverJs_apiUrl__WEBPACK_IMPORTED_MODULE_0__.baseUrl + 'person/', data);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 8059:
/*!*********************************************!*\
  !*** ./src/app/services/feature.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureService": () => (/* binding */ FeatureService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);


let FeatureService = class FeatureService {
    constructor() { }
    toTabFormdata(tabdata) {
        const tabuploaddata = [];
        tabdata.forEach(data => {
            console.log(data);
            const uploaddata = new FormData();
            for (const key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    if (key != 'id') {
                        const val = data[key];
                        uploaddata.append(key, val);
                    }
                }
            }
            tabuploaddata.push(uploaddata);
        });
        console.log(tabuploaddata);
        return tabuploaddata;
    }
    toFormdata(data) {
        console.log(data);
        const uploaddata = new FormData();
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                const val = data[key];
                uploaddata.append(key, val);
            }
        }
        console.log(uploaddata);
        return uploaddata;
    }
};
FeatureService.ctorParameters = () => [];
FeatureService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], FeatureService);



/***/ }),

/***/ 1397:
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameService": () => (/* binding */ GameService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);


let GameService = class GameService {
    constructor() {
        this.tabCandidate = [
            {
                name: 'myusername1',
                score: [0, 1, 1]
            },
            {
                name: 'myusername2',
                score: [0, 1, 0]
            },
            {
                name: 'myusername3',
                score: [0, 0, 0]
            },
            {
                name: 'myusername4',
                score: [1, 1, 1]
            },
            // 'myusername2', 'myusername3', 'myusername4'
        ];
        this.tour = 3;
        this.startingOnline = false;
    }
};
GameService.ctorParameters = () => [];
GameService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], GameService);



/***/ }),

/***/ 9099:
/*!**********************************************!*\
  !*** ./src/app/services/realtime.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RealtimeService": () => (/* binding */ RealtimeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./websocket.service */ 8223);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8336);
/* harmony import */ var _feature_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature.service */ 8059);





const BASE_REAL_TIME_URL = "ws://127.0.0.1:8000/ws/chat/";
const TEST_REAL_TIME_URL = "ws://127.0.0.1:8000/ws/chat/lobby/";
let RealtimeService = class RealtimeService {
    constructor(wsService, http, feature_) {
        this.wsService = wsService;
        this.http = http;
        this.feature_ = feature_;
        // public TabMessageTo: Subject<any>[]
        this.TabMessageTo = {};
        // let tabMessage=[]
        // let userRoom = "administrateur"
        // this.messages = <Subject<any>>wsService.connect(BASE_REAL_TIME_URL + userRoom + "/").pipe(map((response: MessageEvent) =>{
        //   let data = JSON.parse(response.data);
        //   return data
        //   // return {
        //   //   title: data.title,
        //   //   country: data.country,
        //   //   image: data.image,
        //   // };
        // }));
        // console.log(this.messages);
    }
    createConWith(userRoom) {
        // console.log("te fuc^nk")
        // this.messages2 = <Subject<any>>this.wsService.connect(BASE_REAL_TIME_URL + userRoom + "/").pipe(map((response: MessageEvent) =>{
        //   let data = JSON.parse(response.data);
        //   return data
        //   // return {
        //   //   title: data.title,
        //   //   country: data.country,
        //   //   image: data.image,
        //   // };
        // }))
    }
};
RealtimeService.ctorParameters = () => [
    { type: _websocket_service__WEBPACK_IMPORTED_MODULE_0__.WebsocketService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _feature_service__WEBPACK_IMPORTED_MODULE_1__.FeatureService }
];
RealtimeService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], RealtimeService);



/***/ }),

/***/ 1188:
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 2879);



let StorageService = class StorageService {
    constructor(storage
    // private storage:
    ) {
        this.storage = storage;
    }
    create() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
        });
    }
    store(storageKey, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const encryptedValue = btoa(escape(JSON.stringify(value)));
            return yield this.storage.set(storageKey, encryptedValue);
        });
    }
    get(storageKey) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                this.storage.get(storageKey).then((value) => {
                    if (value == null) {
                        resolve(false);
                    }
                    else {
                        resolve(JSON.parse(unescape(atob(value))));
                    }
                });
            });
        });
    }
    removeItem(storageKey) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.remove(storageKey);
        });
    }
    clear() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.clear();
        });
    }
};
StorageService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage }
];
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ 8223:
/*!***********************************************!*\
  !*** ./src/app/services/websocket.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebsocketService": () => (/* binding */ WebsocketService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/webSocket */ 207);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 7556);





const BASE_REAL_TIME_URL = "wss://as-des-mots.herokuapp.com/ws/chat/";
// const BASE_REAL_TIME_URL = "ws://127.0.0.1:8000/ws/chat/"
const subject = (0,rxjs_webSocket__WEBPACK_IMPORTED_MODULE_1__.webSocket)("wss://as-des-mots.herokuapp.com/ws/chat/lobby/");
// const subject = webSocket("ws://127.0.0.1:8000/ws/chat/lobby/")
let WebsocketService = class WebsocketService {
    constructor(auth_, router) {
        this.auth_ = auth_;
        this.router = router;
        this.Tsubject = {};
        this.typesMessage = {
            'MQ': 'MessageQuestion',
            'MR': 'MessageReponse',
            'MT': 'MessageTrouver',
            'DP': 'DemandeParticipation',
            'RD': 'ReponseDemande',
            'START': 'start',
            'STOP': 'stop'
        };
        this.messageByUser = {};
        // this.listengMessage();
    }
    sendMsgTo() {
        let user = "administrateur";
        let sub = (0,rxjs_webSocket__WEBPACK_IMPORTED_MODULE_1__.webSocket)("ws://127.0.0.1:8000/ws/chat/" + user + "/");
        sub.subscribe({
            next: msg => console.log(msg),
            error: err => console.log(err),
            complete: () => console.log('complete')
        });
        sub.next({
            message: "frontend cc toi !",
            emeteur: 'frontend emeteur',
            typeMessage: 'frontend typeMessage',
            mot: 'frontend mot',
            destinataire: 'frontend destinataire',
            prochain: 'frontend prochain',
            trouver: 'frontend trouver',
            initiateur: 'frontend initiateur',
            reponse: 'frontend reponse',
        });
        sub.complete();
    }
    listengMessage() {
        subject.subscribe({
            next: msg => console.log(msg),
            error: err => console.log(err),
            complete: () => console.log('complete')
        });
    }
    pushMessage() {
        // subject.subscribe();
        subject.next({
            message: "frontend cc toi !",
            emeteur: 'frontend emeteur',
            typeMessage: 'frontend typeMessage',
            mot: 'frontend mot',
            destinataire: 'frontend destinataire',
            prochain: 'frontend prochain',
            trouver: 'frontend trouver',
            initiateur: 'frontend initiateur',
            reponse: 'frontend reponse',
        });
        // subject.complete();
        // subject.error({code:4000, reason: 'I think our app just broke!'})
    }
    closeConnection() {
        subject.complete();
    }
    connectTo(user) {
        this.Tsubject[user] = (0,rxjs_webSocket__WEBPACK_IMPORTED_MODULE_1__.webSocket)(BASE_REAL_TIME_URL + user + "/");
        return this.Tsubject[user];
        // .subscribe({
        //   next: msg=> {
        //     console.log(msg)
        //     this.currentMessage=msg
        //     if(msg.destinataire==this.auth_.userdata.username){
        //       switch (msg.typeMessage) {
        //         case this.typesMessage.MQ:
        //           break;
        //         case this.typesMessage.MR:
        //           break;
        //         case this.typesMessage.DP:
        //           this.router.navigateByUrl('rejoindre')
        //           break;
        //         case this.typesMessage.RD:
        //           this.messageByUser[user]=msg
        //           break;
        //         case this.typesMessage.START:
        //           break;
        //         case this.typesMessage.STOP:
        //           break;
        //         default:
        //           break;
        //       }
        //     }
        //   },
        //   error: err => console.log(err),
        //   complete: ()=> console.log('complete')
        // });
    }
    disconnect(user) {
        this.Tsubject[user].complete();
    }
    pushMessageWith(user, message) {
        this.Tsubject[user].next(message);
    }
};
WebsocketService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
WebsocketService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], WebsocketService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4909);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		470,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		2725,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6149,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		9288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		1031,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		8310,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		1983,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		7039,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		7945,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		8714,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		1786,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		4702,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		4094,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		795,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		6976,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1417,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		8412,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4706,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		3459,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3354,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		1025,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		8592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		2526,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2447,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4820,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3212,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		7557,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8692,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3544,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		42,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		718,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		5981,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		6488,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		7937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		942,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		816,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		9062,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		3466,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		8404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		953,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		4254,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		5195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		6116,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		9781,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8323,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		376,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2072,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 2009:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map