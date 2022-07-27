import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {

  tabCandidate=[];
  curentCandidate;
  tour;
  currentIndex=0;

  constructor(
    private game_: GameService
  ) { 
  }

  ngOnInit() {
    this.tour=this.game_.tour
    this.tabCandidate = this.game_.tabCandidate;
    this.curentCandidate = this.tabCandidate[this.currentIndex];
  }

  preview(){
    this.currentIndex= this.currentIndex-1>0 ? this.currentIndex-1 : this.tabCandidate.length -1;
    this.curentCandidate = this.tabCandidate[this.currentIndex];
  }

  next(){
    this.currentIndex= this.currentIndex+1<this.tabCandidate.length ? this.currentIndex+1 : 0;
    this.curentCandidate = this.tabCandidate[this.currentIndex];
  }

  sum(){
    return this.curentCandidate.score.reduce((partialSum, a)=> partialSum + a, 0)
  }

}
