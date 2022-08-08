import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { FeatureService } from './feature.service'
import { baseUrl } from '../serverJs/apiUrl.js'

const BASE_REAL_TIME_URL = "ws://127.0.0.1:8000/ws/chat/lobby/"
// const BASE_REAL_TIME_URL = "wss://127.0.0.1:8000/ws/chat/lobby/"

export interface Message {
  title: string;
  country: string;
  image: string;
}


@Injectable({
  providedIn: 'root'
})


export class RealtimeService {

  public messages: Subject<any>;
  public tabMessage;

  constructor(
    private wsService: WebsocketService,
    public http: HttpClient,
    private feature_: FeatureService
  ) { 
    let tabMessage=[]
    this.messages = <Subject<any>>wsService.connect(BASE_REAL_TIME_URL).pipe(map((response: MessageEvent) =>{
      let data = JSON.parse(response.data);
      return data
      // return {
      //   title: data.title,
      //   country: data.country,
      //   image: data.image,
      // };
    }));
    console.log(this.messages);
   }

   
}
