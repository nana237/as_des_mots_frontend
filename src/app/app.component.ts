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
    });
  }
}
