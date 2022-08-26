import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { RealtimeService } from './services/realtime.service';
import { StorageService } from './services/storage.service';
import { WebsocketService } from './services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private realtime_: RealtimeService,
    private auth_: AuthService,
    private storage_:StorageService,
    private websocket_: WebsocketService,
    private router: Router
    ) {
      this.storage_.create()
      this.getUserData()
    // this.realtime_.messages.subscribe(msg => {
    //   console.log("Response from websocket: " + msg);
    //   console.log(msg);
    //   console.log(msg.title);
    //   // this.sendMsg();


    // });
  }

  connect(user){
    this.websocket_.connectTo(user).subscribe({
      next: msg=> {
        console.log(msg)
        this.websocket_.currentMessage=msg
        if(msg.destinataire==this.auth_.userdata.username){
          switch (msg.typeMessage) {
            case this.websocket_.typesMessage.MQ:

              break;
            case this.websocket_.typesMessage.MR:

              break;
            case this.websocket_.typesMessage.DP:
              this.router.navigateByUrl('rejoindre')
              break;
            case this.websocket_.typesMessage.RD:
              this.websocket_.messageByUser[user]=msg
              break;
            case this.websocket_.typesMessage.START:

              break;
            case this.websocket_.typesMessage.STOP:

              break;

            default:
              break;
          }
        }
      },
      error: err => console.log(err),
      complete: ()=> console.log('complete')
    })
  }

  getUserData(){
    this.storage_.get('userdata').then((val: any) =>{
      console.log('receive promise');
      console.log(val);
      this.auth_.userdata=val.user
      console.log(this.auth_.userdata);

      // this.websocket_.connectTo(this.auth_.userdata.username)
      this.connect(this.auth_.userdata.username)
    }).catch(reason=>{console.warn(reason);
    })
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
