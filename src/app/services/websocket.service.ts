import { Injectable } from '@angular/core';
import * as Rx from "rxjs";

import { webSocket } from 'rxjs/webSocket'

const subject = webSocket("ws://127.0.0.1:8000/ws/chat/lobby/")

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() {
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

  Multiplex(){
    const observableA=
    subject.multiplex(
      ()=>({subscribe: 'A'}),
      ()=>({unsubscribe: 'B'}),
      message=> message.type === 'A'
      );

    const observableB=
    subject.multiplex(
      ()=>({subscribe: 'B'}),
      ()=>({unsubscribe: 'B'}),
      message=> message.type === 'B'
    );

    const subA = observableA.subscribe(messageForA=>console.log(messageForA));
    const subB = observableB.subscribe(messageForB=>console.log(messageForB));

    subA.unsubscribe();
    subB.unsubscribe();

  }






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
