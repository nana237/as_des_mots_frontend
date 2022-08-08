import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../services/config.service';

@Component({
  selector: 'app-game-config',
  templateUrl: './game-config.page.html',
  styleUrls: ['./game-config.page.scss'],
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
    private config_: ConfigService
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

}
