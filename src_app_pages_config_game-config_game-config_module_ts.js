"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_config_game-config_game-config_module_ts"],{

/***/ 7549:
/*!************************************************************************!*\
  !*** ./src/app/pages/config/game-config/game-config-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameConfigPageRoutingModule": () => (/* binding */ GameConfigPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _game_config_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-config.page */ 8078);




const routes = [
    {
        path: '',
        component: _game_config_page__WEBPACK_IMPORTED_MODULE_0__.GameConfigPage
    }
];
let GameConfigPageRoutingModule = class GameConfigPageRoutingModule {
};
GameConfigPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GameConfigPageRoutingModule);



/***/ }),

/***/ 7096:
/*!****************************************************************!*\
  !*** ./src/app/pages/config/game-config/game-config.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameConfigPageModule": () => (/* binding */ GameConfigPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _game_config_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-config-routing.module */ 7549);
/* harmony import */ var _game_config_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-config.page */ 8078);







let GameConfigPageModule = class GameConfigPageModule {
};
GameConfigPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _game_config_routing_module__WEBPACK_IMPORTED_MODULE_0__.GameConfigPageRoutingModule
        ],
        declarations: [_game_config_page__WEBPACK_IMPORTED_MODULE_1__.GameConfigPage]
    })
], GameConfigPageModule);



/***/ }),

/***/ 8078:
/*!**************************************************************!*\
  !*** ./src/app/pages/config/game-config/game-config.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameConfigPage": () => (/* binding */ GameConfigPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _game_config_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-config.page.html?ngResource */ 5505);
/* harmony import */ var _game_config_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-config.page.scss?ngResource */ 6321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/game.service */ 1397);
/* harmony import */ var src_app_services_realtime_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/realtime.service */ 9099);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ 7556);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/config.service */ 946);
/* harmony import */ var _services_feature_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/feature.service */ 8059);
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/websocket.service */ 8223);











let GameConfigPage = class GameConfigPage {
    constructor(config_, realtime_, websocket_, auth_, router, feature_, game_) {
        this.config_ = config_;
        this.realtime_ = realtime_;
        this.websocket_ = websocket_;
        this.auth_ = auth_;
        this.router = router;
        this.feature_ = feature_;
        this.game_ = game_;
        this.Participants = [];
        this.TRefusP = [];
        this.TAcceptP = [];
        this.nbTour = 1;
        this.showS = false;
        this.onlineMode = false;
        this.demande = 'Demande Participation';
        this.waitting = false;
        this.users = ['suman', 'alex', 'rony'];
        this.tabSelectedBlocQ = [];
        this.message = {
            "message": "frontend Je vais bien et toi ?",
            'emeteur': 'frontend emeteur',
            'typeMessage': 'frontend typeMessage',
            'mot': 'frontend mot',
            'destinataire': 'frontend destinataire',
            'prochain': 'frontend prochain',
            'trouver': 'frontend trouver',
            'initiateur': 'frontend initiateur',
            'reponse': 'frontend reponse',
        };
        this.initialize();
    }
    ngOnInit() {
    }
    initialize() {
        this.getAllNiveau();
        this.currentLevel = { id: '',
            name: 'niveau',
            value: '' };
        if (this.config_.mode == "online") {
            this.nbTour = 1;
            this.onlineMode = true;
        }
        this.setShowS();
    }
    setShowS() {
        if (this.nbTour > 1) {
            this.showS = true;
        }
        else {
            this.showS = false;
        }
    }
    searchPerson($event) {
        console.log($event);
        console.log(this.searchPersonValue);
        if (this.searchPersonValue != "") {
            this.config_.searchPerson(this.searchPersonValue).subscribe(data => {
                this.TsearchPerson = data;
                console.log(this.TsearchPerson);
            }, error => {
                console.warn(error);
            });
        }
    }
    onClickSperson(person) {
        this.Participants.push(person);
        this.searchPersonValue = "";
        this.TsearchPerson = [];
        console.log(this.Participants);
    }
    onClickParticipant(index) {
        this.Participants.splice(index, 1);
    }
    onLevelSchange($event) {
        console.log($event);
        console.log(this.currentLevel);
        this.getBlocQuestionByLevel(this.currentLevel);
    }
    onAddBlocQ(blocQ) {
        this.tabSelectedBlocQ.push(blocQ);
    }
    onClicBlocSQ(index) {
        this.tabSelectedBlocQ.splice(index, 1);
    }
    onInviter() {
        console.log(this.Participants);
        this.sendMsg();
    }
    inviter(candidat) {
    }
    getSelectedUserAccess() {
        console.log("Current Selected User", this.currentSelectedUser);
    }
    getAllNiveau() {
        this.config_.getAllNiveau().subscribe(data => {
            this.TabLevel = data;
            console.log(this.TabLevel);
        }, error => {
            console.warn(error);
        });
    }
    getBlocQuestionByLevel(level) {
        this.config_.getBlocQuestionByLevel(level).subscribe(data => {
            this.tabBlocQ = data;
            console.log(this.tabBlocQ);
        }, error => {
            console.warn(error);
        });
    }
    sendMsg() {
        // console.log("new message from client to websocket: ", this.message);
        // this.realtime_[0].messages.next(this.message);
        // console.log('this.Participants')
        // console.log(this.Participants[0].username)
        // this.sendMsgTo(this.Participants[0].username)
        // this.websocket_.listengMessage()
        // this.websocket_.pushMessage()
        for (let i = 0; i < this.Participants.length; i++) {
            const participant = this.Participants[i];
            this.sendMsgTo(participant.username);
        }
    }
    sendMsgTo(user) {
        // let data = this.realtime_.createConWith(user);
        // console.log('data');
        // console.log(data);
        // console.log('TabMessageTo[user]');
        // console.log(this.realtime_.TabMessageTo[user]);
        let message = {
            message: "connexion",
            emeteur: this.auth_.userdata.username,
            typeMessage: this.websocket_.typesMessage.DP,
            mot: '',
            destinataire: user,
            prochain: '',
            trouver: '',
            initiateur: this.auth_.userdata.username,
            reponse: '',
        };
        this.websocket_.connectTo(user).subscribe({
            next: msg => {
                console.log(msg);
                this.websocket_.currentMessage = msg;
                // switch (msg.destinataire) {
                //   case this.auth_.userdata.username:
                //     break;
                //   default:
                //     break;
                // }
                if (msg.destinataire == this.auth_.userdata.username) {
                    switch (msg.typeMessage) {
                        case this.websocket_.typesMessage.DP:
                            this.router.navigateByUrl('rejoindre');
                            break;
                        case this.websocket_.typesMessage.RD:
                            // this.websocket_.messageByUser[user]=msg
                            console.log(this.websocket_.typesMessage.RD);
                            if (msg.reponse == "oui") {
                                this.TAcceptP.push(msg.emeteur);
                                // this.Participants.splice()
                            }
                            else {
                                this.TRefusP.push(msg.emeteur);
                            }
                            break;
                        case this.websocket_.typesMessage.START:
                            break;
                        default:
                            break;
                    }
                    // switch (msg.) {
                    //   case value:
                    //     break;
                    //   default:
                    //     break;
                    // }
                }
            },
            error: err => console.log(err),
            complete: () => console.log('complete')
        });
        let subject = this.websocket_.pushMessageWith(user, message);
        // this.waitForUser(subject)
        // this.realtime_.TabMessageTo[user].next(this.message);
        // this.realtime_.messages2.next(this.message);
    }
    sendMsgTo2(user) {
        this.websocket_.sendMsgTo();
        // console.log("send message 2");
        // this.realtime_.messages2.next(this.message);
    }
    waitForUser(subject) {
        subject.subscribe({
            next: msg => {
                console.log('depuis game config');
                console.log(msg);
            }
        });
    }
    getlocalID(user) {
        for (let i = 0; i < this.Participants.length; i++) {
            const participe = this.Participants[i];
            if (participe.username == user) {
                // console.log(participe);
                return participe.account;
            }
        }
        return null;
    }
    onStart() {
        let player = [];
        this.TAcceptP.forEach(acceptor => {
            player.push(parseInt(this.getlocalID(acceptor)));
        });
        console.log(player);
        // only if we are online
        player.push(parseInt(this.auth_.userdata.pk));
        console.log('player');
        console.log(player.toString());
        let game = {
            // "date_added": null,
            launcher: parseInt(this.auth_.userdata.pk),
            // "winner": null,
            player: player
        };
        console.log(game);
        let gamedata = game;
        // let gamedata=JSON.stringify(game)
        // let gamedata=this.feature_.toFormdata(game)
        console.log('gamedata');
        console.log(gamedata);
        this.config_.createGame(gamedata).subscribe(data => {
            console.log(data);
            // only if we are online
            this.TAcceptP.push(this.auth_.userdata.username);
            let StartMessage = {
                message: { gamedata: data, players: this.TAcceptP },
                emeteur: this.auth_.userdata.username,
                typeMessage: this.websocket_.typesMessage.START,
                mot: '',
                destinataire: this.auth_.userdata.username,
                prochain: '',
                trouver: '',
                initiateur: this.auth_.userdata.username,
                reponse: '',
            };
            this.TAcceptP.forEach(acceptor => {
                StartMessage.destinataire = acceptor;
                this.websocket_.pushMessageWith(acceptor, StartMessage);
            });
            this.Participants.forEach(participe => {
                this.websocket_.disconnect(participe.username);
            });
            // StartMessage.destinataire=this.auth_.userdata.username
            // this.game_.gamedata=StartMessage.message.gamedata
            // this.game_.users = StartMessage.message.players
            // this.game_.startingOnline=true
            // this.game_.initiateur = StartMessage.initiateur
            // this.router.navigateByUrl('game')
            // StartMessage.destinataire=this.auth_.userdata.username
            // this.websocket_.pushMessageWith(this.auth_.userdata.username, StartMessage)
        });
    }
};
GameConfigPage.ctorParameters = () => [
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_5__.ConfigService },
    { type: src_app_services_realtime_service__WEBPACK_IMPORTED_MODULE_3__.RealtimeService },
    { type: _services_websocket_service__WEBPACK_IMPORTED_MODULE_7__.WebsocketService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_feature_service__WEBPACK_IMPORTED_MODULE_6__.FeatureService },
    { type: src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__.GameService }
];
GameConfigPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-game-config',
        template: _game_config_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_game_config_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GameConfigPage);



/***/ }),

/***/ 6321:
/*!***************************************************************************!*\
  !*** ./src/app/pages/config/game-config/game-config.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  position: relative;\n}\n\n.background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background: url('bg-accueil.svg');\n  background-size: cover;\n}\n\n.text-title {\n  text-align: center;\n}\n\n.myWrapper {\n  display: flex;\n  justify-content: space-between;\n}\n\n.bloc1 {\n  width: 25%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding-left: 1.5em;\n}\n\n.bloc1 .searchbar {\n  width: 98%;\n  margin: 1em 0 1em 0;\n  padding-right: 1.25em;\n}\n\n.bloc1 .searchbar::placeholder {\n  font-size: 0.8em;\n  font-family: \"Circular_Light\";\n}\n\n.bloc1 .participant {\n  margin-top: 0.5em;\n  cursor: pointer;\n}\n\n.bloc1 .text-bottom {\n  margin-top: 1.5em;\n  font-size: 0.8em;\n  font-family: \"Circular_Light\";\n}\n\n.bloc2 {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.bloc2 .txtNumParticp {\n  width: 2.5em;\n  height: 2em;\n  font-size: 2em;\n  margin-top: 1em;\n  text-align: center;\n}\n\n.bloc2 .blocThree {\n  display: flex;\n  align-items: center;\n  margin: 2em 0 3em 0;\n}\n\n.bloc2 .threeContain {\n  border: 3px solid black;\n  padding: 1em;\n}\n\n.bloc2 .three {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.bloc2 .chevronLeft {\n  transform: translateX(-2em);\n  cursor: pointer;\n}\n\n.bloc2 .chevronRight {\n  transform: translateX(2em);\n  cursor: pointer;\n}\n\n.bloc2 .nbManche {\n  margin-top: 2em;\n  text-align: center;\n}\n\n.bloc3 {\n  width: 25%;\n  padding-right: 1.5em;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.bloc3 .mySelect {\n  width: 10em;\n  height: 2em;\n  font-size: 1em;\n  font-family: \"Circular_Light\";\n  margin-top: 1em;\n}\n\n.bloc3 .mySelect option {\n  font-size: 1em;\n  font-family: \"Circular_Light\";\n}\n\n.bloc3 .BlocBQ {\n  margin-bottom: 2em;\n}\n\n.bloc3 .BQuest {\n  margin-top: 1em;\n  cursor: pointer;\n}\n\n.btnBlue {\n  background-color: var(--ion-color-primary);\n  color: black;\n  font-size: 1em;\n  padding: 0.5em 2em 0.5em 2em;\n  border-radius: 3.5px;\n  margin-top: 0.5em;\n}\n\n.btnOrange {\n  color: black;\n  font-size: 1em;\n  background-color: var(--ion-color-warning);\n  border-radius: 3em;\n  padding: 0.8em 3em 0.8em 3em;\n  margin-top: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUtY29uZmlnLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxOYW5hJTIwQm9yaXNcXERvY3VtZW50c1xcQVNERVNNT1RTXFxwcm9qZXRcXGFzX2Rlc19tb3RzX2Zyb250ZW5kXFxzcmNcXGFwcFxccGFnZXNcXGNvbmZpZ1xcZ2FtZS1jb25maWdcXGdhbWUtY29uZmlnLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLHNCQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDRUY7O0FES0E7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBRElFO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNGSjs7QURJSTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7QUNGTjs7QURPRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0xKOztBRFFFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FDTko7O0FEU0E7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNORjs7QURRRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNQSjs7QURTRTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQ1BKOztBRFNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNQSjs7QURTRTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtBQ1BKOztBRFVFO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0FDUko7O0FEV0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNUSjs7QURZQTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDVEY7O0FEV0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNUSjs7QURXSTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtBQ1ROOztBRGFFO0VBQ0Usa0JBQUE7QUNYSjs7QURjRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDWko7O0FEZ0JBO0VBQ0UsMENBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ2JGOztBRGdCQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQ2JGIiwiZmlsZSI6ImdhbWUtY29uZmlnLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmJhY2tncm91bmR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnLWFjY3VlaWwuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4udGV4dC10aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5teVdyYXBwZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5ibG9je1xyXG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ibG9jMXtcclxuICB3aWR0aDogMjUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBwYWRkaW5nLWxlZnQ6IDEuNWVtO1xyXG5cclxuICAuc2VhcmNoYmFye1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIG1hcmdpbjogMWVtIDAgMWVtIDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjI1ZW07XHJcblxyXG4gICAgJjo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ2lyY3VsYXJfTGlnaHQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5wYXJ0aWNpcGFudHtcclxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLnRleHQtYm90dG9te1xyXG4gICAgbWFyZ2luLXRvcDogMS41ZW07XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDaXJjdWxhcl9MaWdodCc7XHJcbiAgfVxyXG59XHJcbi5ibG9jMntcclxuICB3aWR0aDogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAudHh0TnVtUGFydGljcHtcclxuICAgIHdpZHRoOiAyLjVlbTtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYmxvY1RocmVle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDJlbSAwIDNlbSAwO1xyXG4gIH1cclxuICAudGhyZWVDb250YWlue1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgfVxyXG4gIC50aHJlZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLmNoZXZyb25MZWZ0e1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yZW0pO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmNoZXZyb25SaWdodHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyZW0pO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLm5iTWFuY2hle1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4uYmxvYzN7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxLjVlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cclxuICAubXlTZWxlY3R7XHJcbiAgICB3aWR0aDogMTBlbTtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBmb250LWZhbWlseTogJ0NpcmN1bGFyX0xpZ2h0JztcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuXHJcbiAgICBvcHRpb257XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICBmb250LWZhbWlseTogJ0NpcmN1bGFyX0xpZ2h0JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5CbG9jQlF7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgfVxyXG5cclxuICAuQlF1ZXN0e1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bkJsdWV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDFlbTtcclxuICBwYWRkaW5nOiAwLjVlbSAyZW0gMC41ZW0gMmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMuNXB4O1xyXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xyXG59XHJcblxyXG4uYnRuT3Jhbmdle1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDFlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XHJcbiAgYm9yZGVyLXJhZGl1czogM2VtO1xyXG4gIHBhZGRpbmc6IDAuOGVtIDNlbSAwLjhlbSAzZW07XHJcbiAgbWFyZ2luLXRvcDogMmVtO1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmctYWNjdWVpbC5zdmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4udGV4dC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm15V3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmJsb2MxIHtcbiAgd2lkdGg6IDI1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctbGVmdDogMS41ZW07XG59XG4uYmxvYzEgLnNlYXJjaGJhciB7XG4gIHdpZHRoOiA5OCU7XG4gIG1hcmdpbjogMWVtIDAgMWVtIDA7XG4gIHBhZGRpbmctcmlnaHQ6IDEuMjVlbTtcbn1cbi5ibG9jMSAuc2VhcmNoYmFyOjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtZmFtaWx5OiBcIkNpcmN1bGFyX0xpZ2h0XCI7XG59XG4uYmxvYzEgLnBhcnRpY2lwYW50IHtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ibG9jMSAudGV4dC1ib3R0b20ge1xuICBtYXJnaW4tdG9wOiAxLjVlbTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC1mYW1pbHk6IFwiQ2lyY3VsYXJfTGlnaHRcIjtcbn1cblxuLmJsb2MyIHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ibG9jMiAudHh0TnVtUGFydGljcCB7XG4gIHdpZHRoOiAyLjVlbTtcbiAgaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ibG9jMiAuYmxvY1RocmVlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAyZW0gMCAzZW0gMDtcbn1cbi5ibG9jMiAudGhyZWVDb250YWluIHtcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDFlbTtcbn1cbi5ibG9jMiAudGhyZWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJsb2MyIC5jaGV2cm9uTGVmdCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMmVtKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJsb2MyIC5jaGV2cm9uUmlnaHQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMmVtKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJsb2MyIC5uYk1hbmNoZSB7XG4gIG1hcmdpbi10b3A6IDJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmxvYzMge1xuICB3aWR0aDogMjUlO1xuICBwYWRkaW5nLXJpZ2h0OiAxLjVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmJsb2MzIC5teVNlbGVjdCB7XG4gIHdpZHRoOiAxMGVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtZmFtaWx5OiBcIkNpcmN1bGFyX0xpZ2h0XCI7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cbi5ibG9jMyAubXlTZWxlY3Qgb3B0aW9uIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtZmFtaWx5OiBcIkNpcmN1bGFyX0xpZ2h0XCI7XG59XG4uYmxvYzMgLkJsb2NCUSB7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cbi5ibG9jMyAuQlF1ZXN0IHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG5CbHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiAwLjVlbSAyZW0gMC41ZW0gMmVtO1xuICBib3JkZXItcmFkaXVzOiAzLjVweDtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG59XG5cbi5idG5PcmFuZ2Uge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG4gIGJvcmRlci1yYWRpdXM6IDNlbTtcbiAgcGFkZGluZzogMC44ZW0gM2VtIDAuOGVtIDNlbTtcbiAgbWFyZ2luLXRvcDogMmVtO1xufSJdfQ== */";

/***/ }),

/***/ 5505:
/*!***************************************************************************!*\
  !*** ./src/app/pages/config/game-config/game-config.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n<div class=\"background\">\r\n  <h3 class=\"text-title\">Veuillez configurer votre partie</h3>\r\n  <div class=\"myWrapper\">\r\n    <div class=\"bloc1 bloc\">\r\n      <Span class=\"bloc1-title\">Ajouter des participants</Span>\r\n      <input class=\"searchbar\" type=\"search\" [(ngModel)]=\"searchPersonValue\" (input)=\"searchPerson($event)\" placeholder=\"Nom d'utilisateur du participant\" name=\"\" id=\"\">\r\n      <!-- <ion-searchbar  inputmode=\"text\" type=\"text\" (ionChange)=\"onSearchChange($event)\" [debounce]=\"250\" showCancelButton=\"focus\"></ion-searchbar> -->\r\n      <!-- <div *ngFor=\"let person of TsearchPerson\" (click)=\"onClickSperson(person)\" class=\"participant\"></div> -->\r\n      <div *ngFor=\"let person of TsearchPerson; trackBy: trackElement;\" (click)=\"onClickSperson(person)\" class=\"participant\">\r\n        {{person.username}}\r\n      </div>\r\n      <div class=\"divider\"></div>\r\n      <!-- <button class=\"btnBlue\">Ajouter</button> -->\r\n      <div *ngFor=\"let participant of Participants; let index = index;\" (click)=\"onClickParticipant(index)\" class=\"participant\">\r\n        {{participant.username}}\r\n      </div>\r\n      <button (click)=\"onInviter()\" class=\"btnBlue\">Inviter</button>\r\n      <!-- <button (click)=\"sendMsgTo2()\" class=\"btnBlue\">sendMsgTo2</button> -->\r\n\r\n      <div class=\"bloc1-title\">refuse</div>\r\n      <div *ngFor=\"let refusor of TRefusP; let index = index;\" class=\"participant\">\r\n        {{refusor}}\r\n      </div>\r\n      <div class=\"bloc1-title\">Accept</div>\r\n      <div *ngFor=\"let acceptor of TAcceptP; let index = index;\" class=\"participant\">\r\n        {{acceptor}}\r\n      </div>\r\n\r\n      <button class=\"btnBlue\">Valider</button>\r\n\r\n      <div class=\"text-bottom\">les modifications annulerons toutes les configuration suivantes</div>\r\n\r\n    </div>\r\n    <div class=\"bloc2 bloc\">\r\n      Nombre de participants\r\n      <input class=\"txtNumParticp\" type=\"number\" [(ngModel)]=\"Participants.length\" readonly>\r\n      <div class=\"blocThree\">\r\n       <img class=\"chevronLeft\" src=\"assets/images/config/chevron-left.svg\" alt=\"\">\r\n       <div class=\"threeContain\">\r\n        <img class=\"three\" *ngIf=\"false\" src=\"assets/images/config/eg-three.svg\" alt=\"\">\r\n        <!-- <img class=\"three\" *ngIf=\"!onlineMode\" src=\"assets/images/config/eg-three.svg\" alt=\"\"> -->\r\n        <div class=\"nbManche\"> {{nbTour}} Manche<span *ngIf=\"showS\">s</span></div>\r\n       </div>\r\n       <img class=\"chevronRight\" src=\"assets/images/config/chevron-right.svg\" alt=\"\">\r\n      </div>\r\n      <button class=\"btnBlue\">Valider</button>\r\n      <button class=\"btnOrange\" (click)=\"onStart()\">Commencer</button>\r\n    </div>\r\n    <div class=\"bloc3 bloc\">\r\n      <Span>Ajouter des questions</Span>\r\n      <select class=\"mySelect\" name=\"niv\" id=\"niv\" aria-placeholder=\"niveau\" [(ngModel)]=\"currentLevel\" (change)=\"onLevelSchange($event)\">\r\n        <!-- <option value=\"\" [selected]=\"true\">niveau</option> -->\r\n        <option *ngFor=\"let level of TabLevel\" value=\"{{level.id}}\">{{level.name}}</option>\r\n      </select>\r\n\r\n\r\n      <!-- <select class=\"mySelect\" [(ngModel)]=\"currentBlocQ\" name=\"BlQ\" id=\"BlQ\">\r\n        <option value=\"\">Bloc de questions</option>\r\n        <option *ngFor=\"let blocQ of tabBlocQ\" value=\"{{blocQ.id}}\">{{blocQ.name}}</option>\r\n      </select> -->\r\n        <div *ngFor=\"let blocQ of tabBlocQ\" class=\"BQuest\" (click)=\"onAddBlocQ(blocQ)\">{{blocQ.name}}</div>\r\n        <!-- <button class=\"btnBlue\" >Ajouter</button> -->\r\n        <div class=\"divider\"></div>\r\n\r\n      <div class=\"BlocBQ\">\r\n        <div *ngFor=\"let blocQ of tabSelectedBlocQ; let index=index\" class=\"BQuest\"  (click)=\"onClicBlocSQ(index)\"> {{blocQ.name}}</div>\r\n      </div>\r\n      <button class=\"btnBlue\">Valider</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_config_game-config_game-config_module_ts.js.map