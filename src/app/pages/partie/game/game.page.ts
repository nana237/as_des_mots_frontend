/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { AuthService } from '../../../services/auth.service';
import { WebsocketService } from '../../../services/websocket.service';
// import { waTextToSpeech, waTextToSpeechPaused, waTextToSpeechEnd, waUtterance } from '@ng-web-apis/speech';

interface RecommendedVoices {
	[key: string]: boolean;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  // text='salut';
  public sayCommand: string;
	public recommendedVoices: RecommendedVoices;
	public rates: number[];
	public selectedRate: number;
	public selectedVoice: SpeechSynthesisVoice | null;
	public text: string;
	public textOnline: string;
	public TabWordTP = [];
	public answer: string;
	public voices: SpeechSynthesisVoice[];
	found=false;
	viewModal=false;
	number = 0;
	tabCandidate=[
		{
			name:'myusername1',
			score:[]
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
	]

	showFormAnswer = false;
	showFormWaiting = false;
	showFormYouAreNext = false;
	username = 'myusername1'
	idPlayer= 0;
	tour = 0;
  waitingConfig= false
	currentplayer: string;
	nFalse=10000;
	nFalseOnline=5000
	totalTour = 2;
  message={
      message: <any>'',
      emeteur: 'this.auth_.userdata.username',
      typeMessage: 'this.websocket_.typesMessage.DP',
      mot: '',// le mot à prononcer
      destinataire: 'user',
      prochain: '',
      trouver: false,
      initiateur: 'this.auth_.userdata.username',
      reponse: 'this.answer',
    }
  startingOnline=false
  destinataire = true;
  prochain=false;
  attente=true
	finish= false;
  perdu=false
  mancheWin=false
  gameWin=false


  constructor(
	  private router: Router,
	  private game_: GameService,
    private websocket_: WebsocketService,
    private auth_: AuthService
  ) {
    this.voices = [];
		this.rates = [ .25, .5, .75, 1, 1.25, 1.5, 1.75, 2 ];
		this.selectedVoice = null;
		this.selectedRate = 1;
		// Dirty Dancing for the win!
		// this.text = "Me? ... I’m scared of everything. I’m scared of what I saw, of what I did, of who I am. And most of all, I’m scared of walking out of this room and never feeling the rest of my whole life ... the way I feel when I’m with you.";
		// this.text = "Bonjour \n Banane \n Salut \n As des Mots \n Prononciation \n Apprentissage \n étudier \n Décourvire \n s'amuser \n évoluer. ";
		this.text = "monsieur";
		this.sayCommand = "";
		this.TabWordTP = ['Bonjour', 'Salut', 'rhinomicine', 'médicament']

		this.text = this.TabWordTP[0] //initializeWord

		// These are "recommended" in so much as that these are the voices that I (Ben)
		// could understand most clearly.
		this.recommendedVoices = Object.create( null );
		this.recommendedVoices[ "Alex" ] = true;
		this.recommendedVoices[ "Alva" ] = true;
		this.recommendedVoices[ "Damayanti" ] = true;
		this.recommendedVoices[ "Daniel" ] = true;
		this.recommendedVoices[ "Fiona" ] = true;
		this.recommendedVoices[ "Fred" ] = true;
		this.recommendedVoices[ "Karen" ] = true;
		this.recommendedVoices[ "Mei-Jia" ] = true;
		this.recommendedVoices[ "Melina" ] = true;
		this.recommendedVoices[ "Moira" ] = true;
		this.recommendedVoices[ "Rishi" ] = true;
		this.recommendedVoices[ "Samantha" ] = true;
		this.recommendedVoices[ "Tessa" ] = true;
		this.recommendedVoices[ "Veena" ] = true;
		this.recommendedVoices[ "Victoria" ] = true;
		this.recommendedVoices[ "Yuri" ] = true;

		
  }

  public initialize(){
    if(this.game_.startingOnline){
      this.startingOnline=true
	  if (this.isLauncher()) {		
		this.initializeTabCandidate()
		this.initializePlayer();
		this.initializeTour();
		this.initializeWord();
	  }
	  setTimeout(() => {
		
	  }, 3000);
      this.connectToGame()
	  if (this.isLauncher()) {
		this.sendQuestion();
		
	  }
    }else{
		this.attente = false
		this.initializePlayer();
		this.initializeTour();
		this.initializeWord();
	}
	

  }

  isLauncher(){
	console.log('log islauncher', this.game_.initiateur, this.auth_.userdata.username);

	if (this.game_.initiateur==this.auth_.userdata.username) {
		return true
	}
	return false
  }

  public demoSelectedVoice() : void {

		if ( ! this.selectedVoice ) {

			console.warn( "Expected a voice, but none was selected." );
			return;

		}

		var demoText = "Best wishes and warmest regards.";

		this.stop();
		this.synthesizeSpeechFromText( this.selectedVoice, this.selectedRate, demoText );

	}


  ngOnInit() {
    this.voices = speechSynthesis.getVoices();
		this.selectedVoice = ( this.voices[ 0 ] || null );
		this.updateSayCommand();

		// The voices aren't immediately available (or so it seems). As such, if no
		// voices came back, let's assume they haven't loaded yet and we need to wait for
		// the "voiceschanged" event to fire before we can access them.
		if ( ! this.voices.length ) {

			speechSynthesis.addEventListener(
				"voiceschanged",
				() => {

					this.voices = speechSynthesis.getVoices();
          // this.selectedVoice = this.voices[this.voices.indexOf()];
					this.selectedVoice = ( this.voices[ 0 ] || null );
					this.updateSayCommand();

				}
			);

		}

		this.initialize();

		if (!this.startingOnline) {	
			setTimeout(() => {
				this.speak();
			}, 3000);
		}
  }

  onEnd(){
    console.log('reading finish');
  }

  public speak() : void {
		console.log('i speak')
		if ( ! this.selectedVoice || ! this.text ) {

			return;

		}

		this.stop();
		this.synthesizeSpeechFromText( this.selectedVoice, this.selectedRate, this.text );

	}


	// I stop any current speech synthesis.
	public stop() : void {

		if ( speechSynthesis.speaking ) {

			speechSynthesis.cancel();

		}

	}


	// I update the "say" command that can be used to generate the a sound file from the
	// current speech synthesis configuration.
	public updateSayCommand() : void {

		if ( ! this.selectedVoice || ! this.text ) {

			return;

		}

		// With the say command, the rate is the number of words-per-minute. As such, we
		// have to finagle the SpeechSynthesis rate into something roughly equivalent for
		// the terminal-based invocation.
		var sanitizedRate = Math.floor( 200 * this.selectedRate );
		var sanitizedText = this.text
			.replace( /[\r\n]/g, " " )
			.replace( /(["'\\\\/])/g, "\\$1" )
		;

		this.sayCommand = `say --voice ${ this.selectedVoice.name } --rate ${ sanitizedRate } --output-file=demo.aiff "${ sanitizedText }"`;

	}

	// ---
	// PRIVATE METHODS.
	// ---

	// I perform the low-level speech synthesis for the given voice, rate, and text.
	private synthesizeSpeechFromText(
		voice: SpeechSynthesisVoice,
		rate: number,
		text: string
		) : void {

		var utterance = new SpeechSynthesisUtterance( text );
		utterance.voice = this.selectedVoice;
		utterance.rate = rate;
		utterance.rate = 0.75;

		speechSynthesis.speak( utterance );

	}

	private onValidate(){

    if(this.startingOnline){
      this.sendRespond()
    }else{
      this.showModal();
      if(this.found){
        setTimeout(() => {
          this.execute();
        }, this.found?2500:this.nFalse);
      }

      console.log(this.found)
      console.log(this.answer)
    }
	}

	execute(){
		console.log(this.found)
		console.log(this.answer)
		this.hideModal();
		this.setnextWord();
		this.setnextPlayer();
		this.privateCleartInput();
		if(!this.finish){
			setTimeout(() => {
				this.speak();
			}, 500);
		}
	}

	privateCleartInput(){
		this.answer=""
	}

	private setn0(){
		this.nFalse=0;
	}

  private setcurrentwordOnline(word){
    this.text=word
    this.speak();
  }

	private setnextWord(){
		this.number= (this.number+1)%this.TabWordTP.length;
		this.text=this.TabWordTP[this.number]
	}

	private setnextPlayer(){
		this.idPlayer= (1 + this.idPlayer)%this.tabCandidate.length;
		if(this.idPlayer==0){
			this.tour += 1;
			if(this.tour>this.totalTour){
				this.tour-=1;
				this.finish=true;
			}
		}
		this.currentplayer = this.tabCandidate[this.idPlayer].name

		if(this.finish){
			console.log('finish');
			if (this.startingOnline) {
				this.message.typeMessage=this.websocket_.typesMessage.STOP
				this.message.message={
					tabCandidate: this.tabCandidate,
					tour: this.tour}
				this.websocket_.pushMessageWith('game' + this.game_.gamedata.id, this.message)
			}else{
				this.game_.tabCandidate = this.tabCandidate
				this.game_.tour = this.tour
				this.router.navigateByUrl('score')
			}
		}
	}

  sendQuestion(){
	console.log('send question');
	
    this.message={
      message: 'Question',
      emeteur: this.auth_.userdata.username,
      typeMessage: this.websocket_.typesMessage.MQ,
      mot: this.text,// le mot à prononcer
      destinataire: this.tabCandidate[this.idPlayer].name,
      prochain: this.tabCandidate[(1 + this.idPlayer)%this.tabCandidate.length].name,
      trouver: false,
      initiateur: this.auth_.userdata.username,
      reponse: '',
    }

	this.websocket_.pushMessageWith('game' + this.game_.gamedata.id, this.message)
  }

  sendRespond(){
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

    this.message.reponse=this.answer
    this.message.destinataire = this.message.initiateur
    this.message.emeteur= this.auth_.userdata.username
    this.message.typeMessage = this.websocket_.typesMessage.MR
    this.websocket_.pushMessageWith('game' + this.game_.gamedata.id, this.message)
  }

  calculateResponse(motPrononcer, response){
    // this.viewModal=true;
		this.found = motPrononcer.toLocaleLowerCase().trim()==response.toLocaleLowerCase().trim()
		this.tabCandidate[this.getLocalIdCandidate(this.message.emeteur)].score.push(this.found ? 1 : 0)
    this.message.trouver = this.found
    this.message.emeteur=this.auth_.userdata.username
    this.message.destinataire="All_user__"
	this.message.typeMessage = this.websocket_.typesMessage.MT
    this.websocket_.pushMessageWith('game' + this.game_.gamedata.id, this.message)
		console.log(this.tabCandidate)

    this.setnextWord()
    this.setnextPlayer()
  }

  getLocalIdCandidate(user){
    for (let i = 0; i < this.tabCandidate.length; i++) {
      const candidate = this.tabCandidate[i];
      if (candidate.name==user) {
        return i
      }
    }
    return -1
  }

  connectToGame(){
	console.log('connect to game : ' + 'game' + this.game_.gamedata.id);
    this.websocket_.connectTo('game' + this.game_.gamedata.id).subscribe({
      next: msg=> {
        console.log(msg)
        this.message=msg
        this.websocket_.currentMessage=msg
        switch (msg.typeMessage) {
			case this.websocket_.typesMessage.MQ:
				console.log('faut attendre, ton tour arrive');
				this.setcurrentwordOnline(msg.mot)
				this.destinataire=false
				this.attente=true
				this.prochain=false
				break;
			case this.websocket_.typesMessage.MT:
					this.showModalOnline()
					this.found=this.message.trouver
					this.textOnline = this.message.mot
					setTimeout(() => {
						this.hideModal()
					}, this.found?2000:this.nFalseOnline);
				break;
				
			case this.websocket_.typesMessage.STOP:
				this.game_.tabCandidate = this.message.message.tabCandidate
				this.game_.tour = this.message.message.tour
				this.router.navigateByUrl('score')
				break

          default:
            break;
        }

        if(msg.prochain==this.auth_.userdata.username){
          switch (msg.typeMessage) {
            case this.websocket_.typesMessage.MQ:
				console.log('c\'est toi le prochain');
				this.destinataire=false
              this.attente=false
              this.prochain=true
              break;
            case this.websocket_.typesMessage.MR:

              break;

            default:
              break;
          }
        }

        if(msg.destinataire==this.auth_.userdata.username){
          switch (msg.typeMessage) {
            case this.websocket_.typesMessage.MQ:
				console.log('a vous de jouer');
				
              this.destinataire=true
              this.attente=false
              this.prochain=false
              break;
            case this.websocket_.typesMessage.MR:

              break;
            case this.websocket_.typesMessage.STOP:

              break;

            default:
              break;
          }
        }

        if(msg.destinataire==msg.initiateur && this.isLauncher()){
          switch (msg.typeMessage) {
            case this.websocket_.typesMessage.MR:
              this.calculateResponse(msg.mot, msg.reponse)
              this.sendQuestion()
              break;
            case this.websocket_.typesMessage.STOP:

              break;

            default:
              break;
          }
        }
      },
      error: err => console.log(err),
      complete: ()=> console.log('complete')
    })
  }

  private initializeTabCandidate(){
	console.log('initializeTabCandidate');
	this.tabCandidate=[]
    this.game_.users.forEach(user => {
      this.tabCandidate.push({
        name: user,
        score: []
      })
    });
	console.log(this.tabCandidate);
  }
  
	private initializePlayer(){
		console.log('initialize player');
		this.idPlayer=0;
	}
	private initializeTour(){
		console.log('initialize tour');
		this.tour=1;
	}
	private initializeWord(){
		console.log('initialize word');
		this.number=0;
	}

	private showModalOnline(){
		this.viewModal=true
	}

	private showModal(){
		this.viewModal=true;
		this.found = this.text.toLocaleLowerCase().trim()==this.answer.toLocaleLowerCase().trim()
		this.tabCandidate[this.idPlayer].score.push(this.found ? 1 : 0)
		console.log(this.tabCandidate)

		// this.found=false;
	}

	private hideModal(){
		this.viewModal=false;
		this.found=false;
	}
  //  Microsoft Hortense - French (France)
  // Google UK English Female





}
