import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { FeatureService } from './feature.service'
import { baseUrl } from '../serverJs/apiUrl.js'

const BASE_REAL_TIME_URL = "ws://127.0.0.1:8000/ws/chat/"
const TEST_REAL_TIME_URL = "ws://127.0.0.1:8000/ws/chat/lobby/"
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
  public messages2: Subject<any>;
  public tabMessage;
  // public TabMessageTo: Subject<any>[]
  public TabMessageTo= <Subject<any>>{}

  constructor(
    private wsService: WebsocketService,
    public http: HttpClient,
    private feature_: FeatureService
  ) {
    // let tabMessage=[]
    // let userRoom = "administrateur"
    // this.messages = <Subject<any>>wsService.connect(BASE_REAL_TIME_URL + userRoom + "/").pipe(map((response: MessageEvent) =>{
    //   let data = JSON.parse(response.data);
    //   return data
    //   // return {
    //   //   title: data.title,
    //   //   country: data.country,
    //   //   image: data.image,
    //   // };
    // }));
    // console.log(this.messages);
   }

   createConWith(userRoom){
    // console.log("te fuc^nk")
    // this.messages2 = <Subject<any>>this.wsService.connect(BASE_REAL_TIME_URL + userRoom + "/").pipe(map((response: MessageEvent) =>{
    //   let data = JSON.parse(response.data);
    //   return data
    //   // return {
    //   //   title: data.title,
    //   //   country: data.country,
    //   //   image: data.image,
    //   // };
    // }))

   }




}
