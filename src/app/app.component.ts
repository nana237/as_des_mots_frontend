import { Component } from '@angular/core';
import { RealtimeService } from './services/realtime.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private realtime_: RealtimeService
    ) {
    
    this.realtime_.messages.subscribe(msg => {
      console.log("Response from websocket: " + msg);
      console.log(msg);
      console.log(msg.title);
      // this.sendMsg();

      
    });
  }

  private message =  {
    "message": "Je vais bien et toi ?",
    "msg": "lol",
  };

 

  sendMsg() {
    console.log("new message from client to websocket: ", this.message);
    this.realtime_.messages.next(this.message);
  }
}
