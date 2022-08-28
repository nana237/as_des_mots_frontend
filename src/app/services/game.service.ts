import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  currentGame
  startingOnline=false

  constructor() { }
}
