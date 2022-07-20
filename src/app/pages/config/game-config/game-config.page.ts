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

  constructor(
    private config_: ConfigService
  ) { }

  ngOnInit() {
  }

  searchPerson($event){
    console.log($event)
    console.log(this.searchPersonValue)
    if(this.searchPersonValue != ""){
      this.config_.searchPerson("ad").subscribe(
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

  onClickSperson(person, trackelement){
    console.log(trackelement)
    if (this.Participants.indexOf(person)>0) {
      this.Participants.splice(this.Participants.indexOf(person), 1)
    }else{
      this.Participants.push(person)
    }
    console.log(this.Participants)
  }


}
