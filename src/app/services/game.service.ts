import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  tabCandidate=[
		{
			name:'myusername1',
			score:[0,1,1]
		},
		{
			name:'myusername2',
			score:[0,1,0]
		},
		{
			name:'myusername3',
			score:[0,0,0]
		},
		{
			name:'myusername4',
			score:[1,1,1]
		},
		// 'myusername2', 'myusername3', 'myusername4'
	];
  tour=3;
  gamedata
  users
  startingOnline=false
  initiateur

  constructor() { }
}
