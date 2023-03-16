"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_partie_game_game_module_ts"],{

/***/ 4456:
/*!**********************************************************!*\
  !*** ./src/app/pages/partie/game/game-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamePageRoutingModule": () => (/* binding */ GamePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _game_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.page */ 6896);




const routes = [
    {
        path: '',
        component: _game_page__WEBPACK_IMPORTED_MODULE_0__.GamePage
    }
];
let GamePageRoutingModule = class GamePageRoutingModule {
};
GamePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GamePageRoutingModule);



/***/ }),

/***/ 9510:
/*!**************************************************!*\
  !*** ./src/app/pages/partie/game/game.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamePageModule": () => (/* binding */ GamePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _game_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-routing.module */ 4456);
/* harmony import */ var _game_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.page */ 6896);







let GamePageModule = class GamePageModule {
};
GamePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _game_routing_module__WEBPACK_IMPORTED_MODULE_0__.GamePageRoutingModule
        ],
        declarations: [_game_page__WEBPACK_IMPORTED_MODULE_1__.GamePage]
    })
], GamePageModule);



/***/ }),

/***/ 6896:
/*!************************************************!*\
  !*** ./src/app/pages/partie/game/game.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamePage": () => (/* binding */ GamePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _game_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.page.html?ngResource */ 3883);
/* harmony import */ var _game_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.page.scss?ngResource */ 9081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/game.service */ 1397);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ 7556);
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/websocket.service */ 8223);



/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable max-len */





let GamePage = class GamePage {
    constructor(router, game_, websocket_, auth_) {
        this.router = router;
        this.game_ = game_;
        this.websocket_ = websocket_;
        this.auth_ = auth_;
        this.TabWordTP = [];
        this.found = false;
        this.viewModal = false;
        this.number = 0;
        this.tabCandidate = [
            {
                name: 'myusername1',
                score: []
            },
            // {
            // 	name:'myusername2',
            // 	score:[]
            // },
            // {
            // 	name:'myusername3',
            // 	score:[]
            // },
            // {
            // 	name:'myusername4',
            // 	score:[]
            // },
            // 'myusername2', 'myusername3', 'myusername4'
        ];
        this.showFormAnswer = false;
        this.showFormWaiting = false;
        this.showFormYouAreNext = false;
        this.username = 'myusername1';
        this.idPlayer = 0;
        this.tour = 0;
        this.waitingConfig = false;
        this.nFalse = 10000;
        this.nFalseOnline = 5000;
        this.totalTour = 3;
        this.message = {
            message: '',
            emeteur: 'this.auth_.userdata.username',
            typeMessage: 'this.websocket_.typesMessage.DP',
            mot: '',
            destinataire: 'user',
            prochain: '',
            trouver: false,
            initiateur: 'this.auth_.userdata.username',
            reponse: 'this.answer',
        };
        this.startingOnline = false;
        this.waitingMyTime = false;
        this.destinataire = true;
        this.prochain = false;
        this.attente = true;
        this.finish = false;
        this.perdu = false;
        this.mancheWin = false;
        this.gameWin = false;
        this.voices = [];
        this.rates = [.25, .5, .75, 1, 1.25, 1.5, 1.75, 2];
        this.selectedVoice = null;
        this.selectedRate = 1;
        // Dirty Dancing for the win!
        // this.text = "Me? ... I’m scared of everything. I’m scared of what I saw, of what I did, of who I am. And most of all, I’m scared of walking out of this room and never feeling the rest of my whole life ... the way I feel when I’m with you.";
        // this.text = "Bonjour \n Banane \n Salut \n As des Mots \n Prononciation \n Apprentissage \n étudier \n Décourvire \n s'amuser \n évoluer. ";
        this.text = "monsieur";
        this.sayCommand = "";
        this.TabWordTP = ['Bonjour', 'Salut', 'rhinomicine', 'médicament', 'voiture', 'maison', 'bateau', 'zero', 'lire', 'marcher', 'marchander', 'saluer', 'gentil', 'agrégation', 'mariage', 'nourriture', 'fruit'];
        this.text = this.TabWordTP[0]; //initializeWord
        // These are "recommended" in so much as that these are the voices that I (Ben)
        // could understand most clearly.
        this.recommendedVoices = Object.create(null);
        this.recommendedVoices["Alex"] = true;
        this.recommendedVoices["Alva"] = true;
        this.recommendedVoices["Damayanti"] = true;
        this.recommendedVoices["Daniel"] = true;
        this.recommendedVoices["Fiona"] = true;
        this.recommendedVoices["Fred"] = true;
        this.recommendedVoices["Karen"] = true;
        this.recommendedVoices["Mei-Jia"] = true;
        this.recommendedVoices["Melina"] = true;
        this.recommendedVoices["Moira"] = true;
        this.recommendedVoices["Rishi"] = true;
        this.recommendedVoices["Samantha"] = true;
        this.recommendedVoices["Tessa"] = true;
        this.recommendedVoices["Veena"] = true;
        this.recommendedVoices["Victoria"] = true;
        this.recommendedVoices["Yuri"] = true;
    }
    initialize() {
        if (this.game_.startingOnline) {
            this.startingOnline = true;
            if (this.isLauncher()) {
                this.initializeTabCandidate();
                this.initializePlayer();
                this.initializeTour();
                this.initializeWord();
            }
            this.connectToGame();
            if (this.isLauncher()) {
                setTimeout(() => {
                    this.sendQuestion();
                }, 5000);
            }
        }
        else {
            this.attente = false;
            this.initializePlayer();
            this.initializeTour();
            this.initializeWord();
        }
    }
    isLauncher() {
        console.log('log islauncher', this.game_.initiateur, this.auth_.userdata.username);
        if (this.game_.initiateur == this.auth_.userdata.username) {
            return true;
        }
        return false;
    }
    demoSelectedVoice() {
        if (!this.selectedVoice) {
            console.warn("Expected a voice, but none was selected.");
            return;
        }
        var demoText = "Best wishes and warmest regards.";
        this.stop();
        this.synthesizeSpeechFromText(this.selectedVoice, this.selectedRate, demoText);
    }
    ngOnInit() {
        this.voices = speechSynthesis.getVoices();
        this.selectedVoice = (this.voices[0] || null);
        this.updateSayCommand();
        // The voices aren't immediately available (or so it seems). As such, if no
        // voices came back, let's assume they haven't loaded yet and we need to wait for
        // the "voiceschanged" event to fire before we can access them.
        if (!this.voices.length) {
            speechSynthesis.addEventListener("voiceschanged", () => {
                this.voices = speechSynthesis.getVoices();
                // this.selectedVoice = this.voices[this.voices.indexOf()];
                this.selectedVoice = (this.voices[0] || null);
                this.updateSayCommand();
            });
        }
        this.initialize();
        if (!this.startingOnline) {
            setTimeout(() => {
                this.speak();
            }, 3000);
        }
    }
    onEnd() {
        console.log('reading finish');
    }
    speak() {
        console.log('i speak');
        if (!this.selectedVoice || !this.text) {
            return;
        }
        this.stop();
        this.synthesizeSpeechFromText(this.selectedVoice, this.selectedRate, this.text);
    }
    // I stop any current speech synthesis.
    stop() {
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
        }
    }
    // I update the "say" command that can be used to generate the a sound file from the
    // current speech synthesis configuration.
    updateSayCommand() {
        if (!this.selectedVoice || !this.text) {
            return;
        }
        // With the say command, the rate is the number of words-per-minute. As such, we
        // have to finagle the SpeechSynthesis rate into something roughly equivalent for
        // the terminal-based invocation.
        var sanitizedRate = Math.floor(200 * this.selectedRate);
        var sanitizedText = this.text
            .replace(/[\r\n]/g, " ")
            .replace(/(["'\\\\/])/g, "\\$1");
        this.sayCommand = `say --voice ${this.selectedVoice.name} --rate ${sanitizedRate} --output-file=demo.aiff "${sanitizedText}"`;
    }
    // ---
    // PRIVATE METHODS.
    // ---
    // I perform the low-level speech synthesis for the given voice, rate, and text.
    synthesizeSpeechFromText(voice, rate, text) {
        var utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = this.selectedVoice;
        utterance.rate = rate;
        utterance.rate = 0.75;
        speechSynthesis.speak(utterance);
    }
    onValidate() {
        if (this.startingOnline && !this.waitingMyTime) {
            this.waitingMyTime = true;
            this.sendRespond();
        }
        else {
            this.showModal();
            if (this.found) {
                setTimeout(() => {
                    this.execute();
                }, this.found ? 2500 : this.nFalse);
            }
            console.log(this.found);
            console.log(this.answer);
        }
    }
    execute() {
        console.log(this.found);
        console.log(this.answer);
        this.hideModal();
        this.setnextWord();
        this.setnextPlayer();
        this.privateCleartInput();
        if (!this.finish) {
            setTimeout(() => {
                this.speak();
            }, 500);
        }
    }
    privateCleartInput() {
        this.answer = "";
    }
    setn0() {
        this.nFalse = 0;
    }
    setcurrentwordOnline(word) {
        this.text = word;
        this.speak();
    }
    setnextWord() {
        this.number = (this.number + 1) % this.TabWordTP.length;
        this.text = this.TabWordTP[this.number];
    }
    setnextPlayer() {
        this.idPlayer = (1 + this.idPlayer) % this.tabCandidate.length;
        if (this.idPlayer == 0) {
            this.tour += 1;
            if (this.tour > this.totalTour) {
                this.tour -= 1;
                this.finish = true;
            }
        }
        this.currentplayer = this.tabCandidate[this.idPlayer].name;
        if (this.finish) {
            console.log('finish');
            if (this.startingOnline) {
                this.message.typeMessage = this.websocket_.typesMessage.STOP;
                this.message.message = {
                    tabCandidate: this.tabCandidate,
                    tour: this.tour
                };
                this.websocket_.pushMessageWith('game' + this.game_.gamedata.id, this.message);
            }
            else {
                this.game_.tabCandidate = this.tabCandidate;
                this.game_.tour = this.tour;
                this.router.navigateByUrl('score');
            }
        }
    }
    sendQuestion() {
        console.log('send question');
        this.message = {
            message: 'Question',
            emeteur: this.auth_.userdata.username,
            typeMessage: this.websocket_.typesMessage.MQ,
            mot: this.text,
            destinataire: this.tabCandidate[this.idPlayer].name,
            prochain: this.tabCandidate[(1 + this.idPlayer) % this.tabCandidate.length].name,
            trouver: false,
            initiateur: this.auth_.userdata.username,
            reponse: '',
        };
        this.websocket_.pushMessageWith('game' + this.game_.gamedata.id, this.message);
    }
    sendRespond() {
        // this.viewModal=true;
        // this.found = this.text.toLocaleLowerCase().trim()==this.answer.toLocaleLowerCase().trim()
        // this.tabCandidate[this.idPlayer].score.push(this.found ? 1 : 0)
        // console.log(this.tabCandidate)
        // let message={
        //   message: "Reponse",
        //   emeteur: this.auth_.userdata.username,
        //   typeMessage: this.websocket_.typesMessage.DP,
        //   mot: '',// le mot à prononcer
        //   destinataire: user,
        //   prochain: '',
        //   trouver: '',
        //   initiateur: this.auth_.userdata.username,
        //   reponse: this.answer,
        // }
        this.message.reponse = this.answer;
        this.message.destinataire = this.message.initiateur;
        this.message.emeteur = this.auth_.userdata.username;
        this.message.typeMessage = this.websocket_.typesMessage.MR;
        this.websocket_.pushMessageWith('game' + this.game_.gamedata.id, this.message);
        this.answer = '';
    }
    calculateResponse(motPrononcer, response) {
        // this.viewModal=true;
        this.found = motPrononcer.toLocaleLowerCase().trim() == response.toLocaleLowerCase().trim();
        this.tabCandidate[this.getLocalIdCandidate(this.message.emeteur)].score.push(this.found ? 1 : 0);
        this.message.trouver = this.found;
        this.message.emeteur = this.auth_.userdata.username;
        this.message.destinataire = "All_user__";
        this.message.typeMessage = this.websocket_.typesMessage.MT;
        this.websocket_.pushMessageWith('game' + this.game_.gamedata.id, this.message);
        console.log(this.tabCandidate);
        this.setnextWord();
        this.setnextPlayer();
    }
    getLocalIdCandidate(user) {
        for (let i = 0; i < this.tabCandidate.length; i++) {
            const candidate = this.tabCandidate[i];
            if (candidate.name == user) {
                return i;
            }
        }
        return -1;
    }
    connectToGame() {
        console.log('connect to game : ' + 'game' + this.game_.gamedata.id);
        this.websocket_.connectTo('game' + this.game_.gamedata.id).subscribe({
            next: msg => {
                console.log(msg);
                this.message = msg;
                this.websocket_.currentMessage = msg;
                switch (msg.typeMessage) {
                    case this.websocket_.typesMessage.MQ:
                        console.log('faut attendre, ton tour arrive');
                        this.setcurrentwordOnline(msg.mot);
                        this.destinataire = false;
                        this.attente = true;
                        this.prochain = false;
                        break;
                    case this.websocket_.typesMessage.MT:
                        this.showModalOnline();
                        this.found = this.message.trouver;
                        this.textOnline = this.message.mot;
                        setTimeout(() => {
                            this.hideModal();
                        }, this.found ? 2000 : this.nFalseOnline);
                        break;
                    case this.websocket_.typesMessage.STOP:
                        this.game_.tabCandidate = this.message.message.tabCandidate;
                        this.game_.tour = this.message.message.tour;
                        this.router.navigateByUrl('score');
                        break;
                    default:
                        break;
                }
                if (msg.prochain == this.auth_.userdata.username) {
                    switch (msg.typeMessage) {
                        case this.websocket_.typesMessage.MQ:
                            console.log('c\'est toi le prochain');
                            this.destinataire = false;
                            this.attente = false;
                            this.prochain = true;
                            break;
                        case this.websocket_.typesMessage.MR:
                            break;
                        default:
                            break;
                    }
                }
                if (msg.destinataire == this.auth_.userdata.username) {
                    switch (msg.typeMessage) {
                        case this.websocket_.typesMessage.MQ:
                            console.log('a vous de jouer');
                            this.waitingMyTime = false;
                            this.destinataire = true;
                            this.attente = false;
                            this.prochain = false;
                            break;
                        case this.websocket_.typesMessage.MR:
                            break;
                        case this.websocket_.typesMessage.STOP:
                            break;
                        default:
                            break;
                    }
                }
                if (msg.destinataire == msg.initiateur && this.isLauncher()) {
                    switch (msg.typeMessage) {
                        case this.websocket_.typesMessage.MR:
                            this.calculateResponse(msg.mot, msg.reponse);
                            this.sendQuestion();
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
    initializeTabCandidate() {
        console.log('initializeTabCandidate');
        this.tabCandidate = [];
        this.game_.users.forEach(user => {
            this.tabCandidate.push({
                name: user,
                score: []
            });
        });
        console.log(this.tabCandidate);
    }
    initializePlayer() {
        console.log('initialize player');
        this.idPlayer = 0;
    }
    initializeTour() {
        console.log('initialize tour');
        this.tour = 1;
    }
    initializeWord() {
        console.log('initialize word');
        this.number = 0;
    }
    showModalOnline() {
        this.viewModal = true;
    }
    showModal() {
        this.viewModal = true;
        this.found = this.text.toLocaleLowerCase().trim() == this.answer.toLocaleLowerCase().trim();
        this.tabCandidate[this.idPlayer].score.push(this.found ? 1 : 0);
        console.log(this.tabCandidate);
        // this.found=false;
    }
    hideModal() {
        this.viewModal = false;
        this.found = false;
    }
};
GamePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__.GameService },
    { type: _services_websocket_service__WEBPACK_IMPORTED_MODULE_4__.WebsocketService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
GamePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-game',
        template: _game_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_game_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GamePage);



/***/ }),

/***/ 9081:
/*!*************************************************************!*\
  !*** ./src/app/pages/partie/game/game.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".logo {\n  height: 2em;\n  width: 2em;\n}\n\nion-content {\n  font-family: \"Roboto_medium\";\n}\n\n.myWrapper {\n  height: 100vh;\n  width: 100vw;\n  background: url('bg-accueil.svg');\n  background-attachment: fixed;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.blockQuestion {\n  margin-top: 10em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  width: 100vw;\n}\n\n.blockQonline {\n  font-size: 1.5em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vw;\n}\n\n.mancheWin {\n  text-align: center;\n  font-size: 0.62em;\n}\n\n.gameWin {\n  text-align: center;\n  transform: translateY(-2em);\n}\n\n.gameWin .detaitText {\n  display: block;\n  margin-top: 1em;\n  font-size: 0.7em;\n}\n\n.btnStart {\n  font-family: \"Roboto\";\n  color: black;\n  font-size: 1.5em;\n  background-color: var(--ion-color-warning);\n  border-radius: 3em;\n  padding-top: 0.8em;\n  padding-bottom: 0.8em;\n  padding-left: 2em;\n  padding-right: 2em;\n}\n\n.modal {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n\n.blocIncorrect {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2em;\n  height: 15em;\n  width: 20em;\n  box-shadow: -1px -1px 5px rgba(0, 0, 0, 0.1);\n  border-radius: 25px;\n  background-color: white;\n}\n\n.blocCorrect {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2em;\n  height: 8em;\n  width: 12em;\n  box-shadow: -1px -1px 5px rgba(0, 0, 0, 0.1);\n  border-radius: 25px;\n  background-color: white;\n  color: var(--ion-color-success);\n  font-size: 1.5em;\n}\n\n.blocIncorrectOnLine {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2em;\n  height: 8em;\n  width: 12em;\n  box-shadow: -1px -1px 5px rgba(0, 0, 0, 0.1);\n  border-radius: 25px;\n  background-color: white;\n  color: var(--ion-color-danger);\n  font-size: 1.5em;\n}\n\n.textIncorrect {\n  color: var(--ion-color-danger);\n  font-size: 1.5em;\n}\n\n.correctText {\n  color: var(--ion-color-success);\n  font-size: 1em;\n}\n\n.btnOk {\n  color: var(--ion-color-dark);\n  font-size: 1em;\n  cursor: pointer;\n  padding: 0.5em 1em 0.5em 1em;\n}\n\n.waitingBloc {\n  margin-top: 15em;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.waitingBloc .waitingText {\n  font-size: 1.5em;\n}\n\n.waitingBloc .configText {\n  font-family: \"Circular_Light\";\n  font-size: 0.82em;\n  margin-bottom: 3em;\n}\n\n.BlockRound {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.BlockRound .round {\n  font-size: 2em;\n}\n\n.BlockRound .manche {\n  font-family: \"Circular_Light\";\n  font-size: 1em;\n}\n\n/*******************************************/\n\n.speaker {\n  width: 6em;\n  height: 6em;\n  cursor: pointer;\n}\n\n.txtQuestion {\n  width: 14em;\n  height: 2em;\n  border: 0px;\n  padding-left: 2em;\n  margin-top: 3em;\n  box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.3);\n  border-radius: 4em;\n  font-size: 1.5em;\n  color: var(--ion-color-dark);\n}\n\n.btnValidate {\n  color: black;\n  font-size: 1.2em;\n  background-color: var(--ion-color-warning);\n  border-radius: 3em;\n  padding: 0.65em 2.5em 0.65em 2.5em;\n  margin-top: 3em;\n}\n\n.btnLeave {\n  background-color: var(--ion-color-primary);\n  color: black;\n  font-size: 1em;\n  margin-right: 2em;\n  position: absolute;\n  bottom: 2em;\n  padding: 0.5em 2em 0.5em 2em;\n  border-radius: 3.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE5hbmElMjBCb3Jpc1xcRG9jdW1lbnRzXFxBU0RFU01PVFNcXHByb2pldFxcYXNfZGVzX21vdHNfZnJvbnRlbmRcXHNyY1xcYXBwXFxwYWdlc1xccGFydGllXFxnYW1lXFxnYW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQ0NGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7QUNGRjs7QURJRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURNQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNIRjs7QURLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsOEJBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsK0JBQUE7RUFDQSxjQUFBO0FDREY7O0FESUE7RUFDRSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNERjs7QURHRTtFQUNFLGdCQUFBO0FDREo7O0FER0U7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURLQTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0hGOztBREtFO0VBQ0UsY0FBQTtBQ0hKOztBREtFO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0FDSEo7O0FET0EsNENBQUE7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDSkY7O0FET0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0FDSkY7O0FET0E7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0FDSkYiLCJmaWxlIjoiZ2FtZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcclxuICBoZWlnaHQ6IDJlbTtcclxuICB3aWR0aDogMmVtO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICBmb250LWZhbWlseTogJ1JvYm90b19tZWRpdW0nO1xyXG59XHJcblxyXG4ubXlXcmFwcGVye1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnLWFjY3VlaWwuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAvLyBvdmVyZmxvdzogc2Nyb2xsO1xyXG5cclxufVxyXG5cclxuLmJsb2NrUXVlc3Rpb257XHJcbiAgbWFyZ2luLXRvcDogMTBlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB3aWR0aDogMTAwdnc7XHJcbn1cclxuXHJcbi5ibG9ja1FvbmxpbmV7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICAvLyBtYXJnaW4tdG9wOiAxNWVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZ3O1xyXG59XHJcblxyXG4ubWFuY2hlV2lue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuNjJlbTtcclxufVxyXG5cclxuLmdhbWVXaW57XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMmVtKTtcclxuXHJcbiAgLmRldGFpdFRleHR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuU3RhcnR7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcclxuICBib3JkZXItcmFkaXVzOiAzZW07XHJcbiAgcGFkZGluZy10b3A6IDAuOGVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjhlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAyZW07XHJcbn1cclxuXHJcbi5tb2RhbHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuLmJsb2NJbmNvcnJlY3R7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJlbTtcclxuICBoZWlnaHQ6IDE1ZW07XHJcbiAgd2lkdGg6IDIwZW07XHJcbiAgYm94LXNoYWRvdzogLTFweCAtMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTApO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmJsb2NDb3JyZWN0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJlbTtcclxuICBoZWlnaHQ6IDhlbTtcclxuICB3aWR0aDogMTJlbTtcclxuICBib3gtc2hhZG93OiAtMXB4IC0xcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi5ibG9jSW5jb3JyZWN0T25MaW5le1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJlbTtcclxuICBoZWlnaHQ6IDhlbTtcclxuICB3aWR0aDogMTJlbTtcclxuICBib3gtc2hhZG93OiAtMXB4IC0xcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuLnRleHRJbmNvcnJlY3R7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi5jb3JyZWN0VGV4dHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcblxyXG4uYnRuT2t7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMC41ZW0gMWVtIDAuNWVtIDFlbTtcclxufVxyXG5cclxuLndhaXRpbmdCbG9je1xyXG4gIG1hcmdpbi10b3A6IDE1ZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAud2FpdGluZ1RleHR7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gIH1cclxuICAuY29uZmlnVGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2lyY3VsYXJfTGlnaHQnO1xyXG4gICAgZm9udC1zaXplOiAwLjgyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07XHJcbiAgfVxyXG59XHJcblxyXG4uQmxvY2tSb3VuZHtcclxuICAvLyBtYXJnaW4tdG9wOiAyNWVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLnJvdW5ke1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgfVxyXG4gIC5tYW5jaGV7XHJcbiAgICBmb250LWZhbWlseTogJ0NpcmN1bGFyX0xpZ2h0JztcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi5zcGVha2Vye1xyXG4gIHdpZHRoOiA2ZW07XHJcbiAgaGVpZ2h0OiA2ZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udHh0UXVlc3Rpb257XHJcbiAgd2lkdGg6IDE0ZW07XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyZW07XHJcbiAgbWFyZ2luLXRvcDogM2VtO1xyXG4gIGJveC1zaGFkb3c6IDBweCAtMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMzApO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRlbTtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbn1cclxuXHJcbi5idG5WYWxpZGF0ZXtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XHJcbiAgYm9yZGVyLXJhZGl1czogM2VtO1xyXG4gIHBhZGRpbmc6IDAuNjVlbSAyLjVlbSAwLjY1ZW0gMi41ZW07XHJcbiAgbWFyZ2luLXRvcDogM2VtO1xyXG59XHJcblxyXG4uYnRuTGVhdmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDFlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAyZW07XHJcbiAgcGFkZGluZzogMC41ZW0gMmVtIDAuNWVtIDJlbTtcclxuICBib3JkZXItcmFkaXVzOiAzLjVweDtcclxufVxyXG4iLCIubG9nbyB7XG4gIGhlaWdodDogMmVtO1xuICB3aWR0aDogMmVtO1xufVxuXG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b19tZWRpdW1cIjtcbn1cblxuLm15V3JhcHBlciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmctYWNjdWVpbC5zdmcpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5ibG9ja1F1ZXN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMTBlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLmJsb2NrUW9ubGluZSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdnc7XG59XG5cbi5tYW5jaGVXaW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC42MmVtO1xufVxuXG4uZ2FtZVdpbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pO1xufVxuLmdhbWVXaW4gLmRldGFpdFRleHQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBmb250LXNpemU6IDAuN2VtO1xufVxuXG4uYnRuU3RhcnQge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG4gIGJvcmRlci1yYWRpdXM6IDNlbTtcbiAgcGFkZGluZy10b3A6IDAuOGVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC44ZW07XG4gIHBhZGRpbmctbGVmdDogMmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAyZW07XG59XG5cbi5tb2RhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uYmxvY0luY29ycmVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMmVtO1xuICBoZWlnaHQ6IDE1ZW07XG4gIHdpZHRoOiAyMGVtO1xuICBib3gtc2hhZG93OiAtMXB4IC0xcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5ibG9jQ29ycmVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyZW07XG4gIGhlaWdodDogOGVtO1xuICB3aWR0aDogMTJlbTtcbiAgYm94LXNoYWRvdzogLTFweCAtMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4uYmxvY0luY29ycmVjdE9uTGluZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyZW07XG4gIGhlaWdodDogOGVtO1xuICB3aWR0aDogMTJlbTtcbiAgYm94LXNoYWRvdzogLTFweCAtMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi50ZXh0SW5jb3JyZWN0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4uY29ycmVjdFRleHQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLmJ0bk9rIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMC41ZW0gMWVtIDAuNWVtIDFlbTtcbn1cblxuLndhaXRpbmdCbG9jIHtcbiAgbWFyZ2luLXRvcDogMTVlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi53YWl0aW5nQmxvYyAud2FpdGluZ1RleHQge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuLndhaXRpbmdCbG9jIC5jb25maWdUZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiQ2lyY3VsYXJfTGlnaHRcIjtcbiAgZm9udC1zaXplOiAwLjgyZW07XG4gIG1hcmdpbi1ib3R0b206IDNlbTtcbn1cblxuLkJsb2NrUm91bmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5CbG9ja1JvdW5kIC5yb3VuZCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuLkJsb2NrUm91bmQgLm1hbmNoZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNpcmN1bGFyX0xpZ2h0XCI7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5zcGVha2VyIHtcbiAgd2lkdGg6IDZlbTtcbiAgaGVpZ2h0OiA2ZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnR4dFF1ZXN0aW9uIHtcbiAgd2lkdGg6IDE0ZW07XG4gIGhlaWdodDogMmVtO1xuICBib3JkZXI6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAyZW07XG4gIG1hcmdpbi10b3A6IDNlbTtcbiAgYm94LXNoYWRvdzogMHB4IC0xcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogNGVtO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG4uYnRuVmFsaWRhdGUge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbiAgYm9yZGVyLXJhZGl1czogM2VtO1xuICBwYWRkaW5nOiAwLjY1ZW0gMi41ZW0gMC42NWVtIDIuNWVtO1xuICBtYXJnaW4tdG9wOiAzZW07XG59XG5cbi5idG5MZWF2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luLXJpZ2h0OiAyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyZW07XG4gIHBhZGRpbmc6IDAuNWVtIDJlbSAwLjVlbSAyZW07XG4gIGJvcmRlci1yYWRpdXM6IDMuNXB4O1xufSJdfQ== */";

/***/ }),

/***/ 3883:
/*!*************************************************************!*\
  !*** ./src/app/pages/partie/game/game.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n  <img class=\"logo\" src=\"assets/icon/logo.svg\" alt=\"\">\r\n    accueil\r\n  </ion-title>\r\n  <span>\r\n    icon user\r\n  </span>\r\n  <span>nom utilisateur</span>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <div class=\"myWrapper\">\r\n    <!-- <button class=\"btnStart\">Nouvelle partie</button> -->\r\n    <div class=\"modal\" *ngIf=\"viewModal\">\r\n\r\n\r\n      <!-- <div>\r\n        <div class=\"form-field\">\r\n\r\n          <div class=\"form-field__content\">\r\n            <select\r\n              id=\"voice-control\"\r\n              name=\"voice\"\r\n              [(ngModel)]=\"selectedVoice\"\r\n              (change)=\"demoSelectedVoice(); updateSayCommand()\"\r\n              class=\"form-field__control\">\r\n              <option value=\"\">- Select a voice -</option>\r\n              <option\r\n                *ngFor=\"let voice of voices\"\r\n                [ngValue]=\"voice\">\r\n                {{ voice.name }}\r\n\r\n                <ng-template [ngIf]=\"recommendedVoices[ voice.name ]\">\r\n                  &larr; Recommended\r\n                </ng-template>\r\n              </option>\r\n            </select>\r\n\r\n            <div class=\"form-field__subnote\">\r\n              ( &larr; ) indicates a voice that Ben could understand clearly.\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-field\">\r\n          <label for=\"rate-control\" class=\"form-field__label\">\r\n            Speed:\r\n          </label>\r\n          <div class=\"form-field__content\">\r\n            <select\r\n              id=\"rate-control\"\r\n              name=\"rate\"\r\n              [(ngModel)]=\"selectedRate\"\r\n              (change)=\"demoSelectedVoice(); updateSayCommand()\"\r\n              class=\"form-field__control\">\r\n              <option\r\n                *ngFor=\"let rate of rates\"\r\n                [ngValue]=\"rate\">\r\n                {{ rate }}\r\n\r\n                <ng-template [ngIf]=\"( rate === 1 )\">\r\n                  ( Normal )\r\n                </ng-template>\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-field\">\r\n          <label for=\"text-control\" class=\"form-field__label\">\r\n            Text:\r\n          </label>\r\n          <div class=\"form-field__content\">\r\n            <textarea\r\n              id=\"text-control\"\r\n              name=\"text\"\r\n              [(ngModel)]=\"text\"\r\n              (input)=\"updateSayCommand()\"\r\n              (keydown.Meta.Enter)=\"speak()\"\r\n              class=\"form-field__control\"\r\n            ></textarea>\r\n\r\n            <div class=\"form-field__subnote\">\r\n              You can hit <code>CMD+Enter</code> to speak text.\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-actions\">\r\n          <button\r\n            type=\"button\"\r\n            (click)=\"speak()\"\r\n            class=\"form-actions__button\">\r\n            Speak text\r\n          </button>\r\n\r\n          <button\r\n            type=\"button\"\r\n            (click)=\"stop()\"\r\n            class=\"form-actions__button form-actions__button--secondary\">\r\n            Stop speaking\r\n          </button>\r\n        </div>\r\n\r\n\r\n        <div *ngIf=\"sayCommand\" class=\"say\">\r\n\r\n          <h3 class=\"say__title\">\r\n            On MacOS? Want to generate a sound file?\r\n          </h3>\r\n\r\n          <p class=\"say__description\">\r\n            In the terminal, you can use the <code>say</code> binary to generate an audio\r\n            file (.aiff) using the following command:\r\n          </p>\r\n\r\n          <input\r\n            #sayRef\r\n            [value]=\"sayCommand\"\r\n            (click)=\"sayRef.select()\"\r\n            (focus)=\"sayRef.select()\"\r\n            class=\"say__code\"\r\n          />\r\n\r\n        </div>\r\n      </div> -->\r\n\r\n      <div class=\"blocIncorrect\" *ngIf=\"!found\">\r\n        <span class=\"textIncorrect\">Incorrect</span>\r\n        <span *ngIf=\"!startingOnline\" class=\"correctText\">{{text}}</span>\r\n        <span *ngIf=\"startingOnline\" class=\"correctText\">{{textOnline}}</span>\r\n        <span *ngIf=\"!startingOnline\" class=\"btnOk\" (click)=\"execute()\" >OK</span>\r\n        <span *ngIf=\"startingOnline\"  class=\"btnOk\" (click)=\"hideModal()\" >OK</span>\r\n      </div>\r\n      <div class=\"blocCorrect\" *ngIf=\"found\">\r\n        Correct\r\n      </div>\r\n      <div class=\"blocIncorrectOnLine\" *ngIf=\"false\">\r\n        Incorrect\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"waitingBloc\" *ngIf=\"waitingConfig\">\r\n      <div class=\"waitingText\">Veuillez patienter</div>\r\n      <p class=\"configText\">Partie en cour de configuration</p>\r\n      <ion-spinner name=\"crescent\"></ion-spinner>\r\n    </div>\r\n\r\n    <div class=\"BlockRound\" *ngIf=\"false\">\r\n      <Div class=\"round\">Démi Finale</Div>\r\n      <span class=\"manche\" *ngIf=\"true\">Manche 1</span>\r\n    </div>\r\n\r\n<!-- ======================== question bloc ========================== -->\r\n    <div class=\"blockQuestion\" *ngIf=\"true\">\r\n      <img class=\"speaker\" src=\"assets/images/partie/speaker.svg\"\r\n      (click)=\"speak()\" alt=\"\">\r\n      <!-- <button\r\n      type=\"button\"\r\n      (click)=\"speak()\"\r\n      class=\"form-actions__button\">\r\n      Speak text\r\n    </button> -->\r\n\r\n    <!-- <button\r\n      type=\"button\"\r\n      (click)=\"stop()\"\r\n      class=\"form-actions__button form-actions__button--secondary\">\r\n      Stop speaking\r\n    </button> -->\r\n\r\n    <!-- [(ngModel)]=\"text\" -->\r\n      <input type=\"text\" class=\"txtQuestion\"\r\n\t    [(ngModel)]=\"answer\"\r\n      (input)=\"updateSayCommand()\"\r\n      (keydown.Meta.Enter)=\"speak()\"\r\n      *ngIf=\"destinataire && !attente\"\r\n     >\r\n      <!-- <input type=\"text\" class=\"txtQuestion\"\r\n        [(ngModel)]=\"text\"\r\n        [waTextToSpeech]=\"text | waUtterance: options\"\r\n        [waTextToSpeechPaused]=\"paused\"\r\n        (waTextToSpeechEnd)=\"onEnd()\"> -->\r\n      <button *ngIf=\"destinataire && !attente\" class=\"btnValidate\" (click)=\"onValidate()\">Valider</button>\r\n    </div>\r\n    <div class=\"blockQonline\" *ngIf=\"startingOnline\">\r\n      <span *ngIf=\"false\">Epelé le mot </span>\r\n      <span *ngIf=\"attente\">en attente...</span>\r\n      <span *ngIf=\"prochain\">Vous êtes le prochain</span>\r\n      <span *ngIf=\"perdu\">Vous avez perdu</span>\r\n      <div class=\"mancheWin\" *ngIf=\"mancheWin\"> Vous avez réussi cette manche <br> <span>Vous passerez à la manche suivante</span> </div>\r\n      <div class=\"gameWin\" *ngIf=\"gameWin\"> <span>Félicitation !</span> <span class=\"detaitText\">Vous avez gagné le tournois</span> </div>\r\n    </div>\r\n    <button class=\"btnLeave\" *ngIf=\"true\">Abandoner</button>\r\n    <button class=\"btnLeave\" *ngIf=\"false\">Home</button>\r\n<!-- ======================== question bloc ========================== -->\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_partie_game_game_module_ts.js.map