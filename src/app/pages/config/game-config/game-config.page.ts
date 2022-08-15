import { Component, OnInit } from '@angular/core';
import { RealtimeService } from 'src/app/services/realtime.service';
import { ConfigService } from '../../../services/config.service';
import { WebsocketService } from '../../../services/websocket.service';

@Component({
  selector: 'app-game-config',
  templateUrl: './game-config.page.html',
  styleUrls: ['./game-config.page.scss']
})


export class GameConfigPage implements OnInit {
  TsearchPerson
  searchPersonValue
  Participants=[]
  TabLevel
  currentLevel
  nbTour = 1
  showS=false
  onlineMode=false;


  users:Array<string>=['suman', 'alex', 'rony'];
  currentSelectedUser:string;
  tabBlocQ: Object;
  tabSelectedBlocQ=[]

  constructor(
    private config_: ConfigService,
    private realtime_: RealtimeService,
    private websocket_: WebsocketService
  ) {
    this.initialize()
  }

  ngOnInit() {
  }

  initialize(){
    this.getAllNiveau()
    this.currentLevel={id:'',
    name:'niveau',
    value:''}

    if (this.config_.mode == "online") {
      this.nbTour = 1
      this.onlineMode=true

    }
    this.setShowS()
  }

  setShowS(){
    if (this.nbTour>1) {
      this.showS=true;
    }else{
      this.showS=false;
    }
  }

  searchPerson($event){
    console.log($event)
    console.log(this.searchPersonValue)
    if(this.searchPersonValue != ""){
      this.config_.searchPerson(this.searchPersonValue).subscribe(
        data=>{
          this.TsearchPerson=data
          console.log(this.TsearchPerson)
        },
        error=>{
          console.warn(error)
        }
      )
    }
  }

  onClickSperson(person){
    this.Participants.push(person)
    this.searchPersonValue = ""
    this.TsearchPerson=[]
    console.log(this.Participants)
  }

  onClickParticipant(index){
    this.Participants.splice(index, 1)
  }

  onLevelSchange($event){
    console.log($event)
    console.log(this.currentLevel)
    this.getBlocQuestionByLevel(this.currentLevel)
  }

  onAddBlocQ(blocQ){
      this.tabSelectedBlocQ.push(blocQ)
  }

  onClicBlocSQ(index){
    this.tabSelectedBlocQ.splice(index,1)
  }

  onInviter(){
    console.log(this.Participants)
    this.sendMsg()
  }

  inviter(candidat){

  }


  getSelectedUserAccess(){
    console.log("Current Selected User", this.currentSelectedUser)
  }

  getAllNiveau(){
    this.config_.getAllNiveau().subscribe(
      data=>{
        this.TabLevel=data
        console.log(this.TabLevel)
      },
      error=>{
        console.warn(error)
      }
    )
  }

  getBlocQuestionByLevel(level){
    this.config_.getBlocQuestionByLevel(level).subscribe(
      data=>{
        this.tabBlocQ=data
        console.log(this.tabBlocQ)
      },
      error=>{
        console.warn(error)
      }
    )
  }

  private message =  {
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

  sendMsg() {
    // console.log("new message from client to websocket: ", this.message);
    // this.realtime_[0].messages.next(this.message);
    // console.log('this.Participants')
    // console.log(this.Participants[0].username)
    // this.sendMsgTo(this.Participants[0].username)

    this.websocket_.listengMessage()
    this.websocket_.pushMessage()
  }

  sendMsgTo(user){
    let data = this.realtime_[0].createConWith(user);
    console.log('data');
    console.log(data);

    console.log('TabMessageTo[user]');
    console.log(this.realtime_[0].TabMessageTo[user]);

    // this.realtime_.TabMessageTo[user].next(this.message);
    // this.realtime_.messages2.next(this.message);
  }

  sendMsgTo2(user){
    this.websocket_.sendMsgTo();

    // console.log("send message 2");
    // this.realtime_[0].messages2.next(this.message);
  }

}
