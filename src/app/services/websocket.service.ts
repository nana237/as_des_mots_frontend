import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as Rx from "rxjs";

import { webSocket } from 'rxjs/webSocket'
import { AuthService } from './auth.service';


const BASE_REAL_TIME_URL = "ws://127.0.0.1:8000/ws/chat/"
const subject = webSocket("ws://127.0.0.1:8000/ws/chat/lobby/")


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  Tsubject = {}

  typesMessage={
    'MQ':'MessageQuestion',
    'MR':'MessageReponse',
    'DP':'DemandeParticipation',
    'RD':'ReponseDemande',
    'START':'start',
    'STOP':'stop'
  }

  currentMessage
  messageByUser={}

  constructor(
    private auth_: AuthService,
    private router: Router
  ) {
    // this.listengMessage();
   }

   sendMsgTo(){
    let user="administrateur"
    let sub= webSocket("ws://127.0.0.1:8000/ws/chat/" + user + "/")
    sub.subscribe({
      next: msg=> console.log(msg),
      error: err => console.log(err),
      complete: ()=> console.log('complete')
    });

    sub.next({
      message: "frontend cc toi !",
      emeteur: 'frontend emeteur',
      typeMessage: 'frontend typeMessage',
      mot: 'frontend mot',
      destinataire: 'frontend destinataire',
      prochain: 'frontend prochain',
      trouver: 'frontend trouver',
      initiateur: 'frontend initiateur',
      reponse: 'frontend reponse',
    })
    sub.complete();

   }

  listengMessage(){
    subject.subscribe({
      next: msg=> console.log(msg),
      error: err => console.log(err),
      complete: ()=> console.log('complete')
    });
  }

  pushMessage(){
    // subject.subscribe();

    subject.next({
      message: "frontend cc toi !",
      emeteur: 'frontend emeteur',
      typeMessage: 'frontend typeMessage',
      mot: 'frontend mot',
      destinataire: 'frontend destinataire',
      prochain: 'frontend prochain',
      trouver: 'frontend trouver',
      initiateur: 'frontend initiateur',
      reponse: 'frontend reponse',
    })
    // subject.complete();
    // subject.error({code:4000, reason: 'I think our app just broke!'})
  }

  closeConnection(){
    subject.complete();
  }

  connectTo(user){
    this.Tsubject[user]= webSocket(BASE_REAL_TIME_URL + user + "/")
    return this.Tsubject[user].subscribe({
      next: msg=> {
        console.log(msg)
        this.currentMessage=msg
        if(msg.destinataire==this.auth_.userdata.username){
          switch (msg.typeMessage) {
            case this.typesMessage.MQ:

              break;
            case this.typesMessage.MR:

              break;
            case this.typesMessage.DP:
              this.router.navigateByUrl('rejoindre')
              break;
            case this.typesMessage.RD:
              this.messageByUser[user]=msg
              break;
            case this.typesMessage.START:

              break;
            case this.typesMessage.STOP:

              break;

            default:
              break;
          }
        }
      },
      error: err => console.log(err),
      complete: ()=> console.log('complete')
    });
  }

  disconnect(user){
    this.Tsubject[user].complete();
  }

  pushMessageWith(user, message){
    this.Tsubject[user].next(message)
  }

  // Multiplex(){
  //   const observableA=
  //   subject.multiplex(
  //     ()=>({subscribe: 'A'}),
  //     ()=>({unsubscribe: 'B'}),
  //     message=> message.type === 'A'
  //     );

  //   const observableB=
  //   subject.multiplex(
  //     ()=>({subscribe: 'B'}),
  //     ()=>({unsubscribe: 'B'}),
  //     message=> message.type === 'B'
  //   );

  //   const subA = observableA.subscribe(messageForA=>console.log(messageForA));
  //   const subB = observableB.subscribe(messageForB=>console.log(messageForB));

  //   subA.unsubscribe();
  //   subB.unsubscribe();

  // }






//   private subject: Rx.Subject<MessageEvent<any>>

//   public connect(url): Rx.Subject<MessageEvent<any>> {
//     if (!this.subject) {
//       this.subject = this.create(url);
//       console.log("Successfully connected: " + url);
//     }
//     return this.subject;
//   }

//   private create(url): Rx.Subject<MessageEvent> {
//     let ws = new WebSocket(url);

//     let observable = Rx.Observable.create((obs: Rx.Observer<MessageEvent>) => {
//       ws.onmessage = obs.next.bind(obs);
//       ws.onerror = obs.error.bind(obs);
//       ws.onclose = obs.complete.bind(obs);
//       return ws.close.bind(ws);
//     });
//     let observer = {
//       next: (data: Object) => {
//         if (ws.readyState === WebSocket.OPEN) {
//           ws.send(JSON.stringify(data));
//         }
//       }
//     };
//     return Rx.Subject.create(observer, observable);
//   }
}
