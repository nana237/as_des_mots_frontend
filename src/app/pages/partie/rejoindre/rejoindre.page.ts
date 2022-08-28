import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { WebsocketService } from '../../../services/websocket.service';

@Component({
  selector: 'app-rejoindre',
  templateUrl: './rejoindre.page.html',
  styleUrls: ['./rejoindre.page.scss'],
})
export class RejoindrePage implements OnInit {

  constructor(
    private websocket: WebsocketService,
    private auth_: AuthService,
    private router: Router,
    private websocket_: WebsocketService
  ) { }

  ngOnInit() {
  }

  onRejoindre(){
    let message={
      message: "oui",
      emeteur: this.auth_.userdata.username,
      typeMessage: this.websocket_.typesMessage.RD,
      mot: '',
      destinataire: this.websocket.currentMessage.emeteur,
      prochain: '',
      trouver: '',
      initiateur: this.websocket.currentMessage.initiateur,
      reponse: 'oui',
    }
    // this.websocket.connectTo(this.websocket.currentMessage.emeteur).subscribe({
    //   next: msg=> {
    //     console.log(msg)
    //     this.websocket_.currentMessage=msg
    //     if(msg.destinataire==this.auth_.userdata.username){
    //       switch (msg.typeMessage) {
    //         case this.websocket_.typesMessage.MQ:

    //           break;
    //         case this.websocket_.typesMessage.MR:

    //           break;
    //         case this.websocket_.typesMessage.DP:
    //           this.router.navigateByUrl('rejoindre')
    //           break;
    //         case this.websocket_.typesMessage.RD:
    //           this.websocket_.messageByUser[this.auth_.userdata.username]=msg
    //           break;
    //         case this.websocket_.typesMessage.START:

    //           break;
    //         case this.websocket_.typesMessage.STOP:

    //           break;

    //         default:
    //           break;
    //       }
    //     }
    //   },
    //   error: err => console.log(err),
    //   complete: ()=> console.log('complete')
    // })
    this.websocket.pushMessageWith(this.auth_.userdata.username, message)
    // this.router.navigateByUrl('rejoindre')
  }

  onDecliner(){
    let message={
      message: "non",
      emeteur: this.auth_.userdata.username,
      typeMessage: this.websocket_.typesMessage.RD,
      mot: '',
      destinataire: this.websocket.currentMessage.emeteur,
      prochain: '',
      trouver: '',
      initiateur: this.websocket.currentMessage.initiateur,
      reponse: 'non',
    }
    // this.websocket.connectTo(this.websocket.currentMessage.emeteur).subscribe({
    //   next: msg=> {
    //     console.log(msg)
    //     this.websocket_.currentMessage=msg
    //     if(msg.destinataire==this.auth_.userdata.username){
    //       switch (msg.typeMessage) {
    //         case this.websocket_.typesMessage.MQ:

    //           break;
    //         case this.websocket_.typesMessage.MR:

    //           break;
    //         case this.websocket_.typesMessage.DP:
    //           this.router.navigateByUrl('rejoindre')
    //           break;
    //         case this.websocket_.typesMessage.RD:
    //           this.websocket_.messageByUser[this.auth_.userdata.username]=msg
    //           break;
    //         case this.websocket_.typesMessage.START:

    //           break;
    //         case this.websocket_.typesMessage.STOP:

    //           break;

    //         default:
    //           break;
    //       }
    //     }
    //   },
    //   error: err => console.log(err),
    //   complete: ()=> console.log('complete')
    // })
    this.websocket.pushMessageWith(this.auth_.userdata.username, message)
    this.router.navigateByUrl('accueil')
  }

}
