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
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRejoindre(){
    let message={
      message: "oui",
      emeteur: this.auth_.userdata.username,
      typeMessage: 'reponse demande',
      mot: '',
      destinataire: this.websocket.currentMessage.emeteur,
      prochain: '',
      trouver: '',
      initiateur: this.websocket.currentMessage.initiateur,
      reponse: 'oui',
    }
    this.websocket.connectTo(this.websocket.currentMessage.emeteur)
    this.websocket.pushMessageWith(this.websocket.currentMessage.emeteur, message)
  }

  onDecliner(){
    let message={
      message: "non",
      emeteur: this.auth_.userdata.username,
      typeMessage: 'reponse demande',
      mot: '',
      destinataire: this.websocket.currentMessage.emeteur,
      prochain: '',
      trouver: '',
      initiateur: this.websocket.currentMessage.initiateur,
      reponse: 'non',
    }
    this.websocket.connectTo(this.websocket.currentMessage.emeteur)
    this.websocket.pushMessageWith(this.websocket.currentMessage.emeteur, message)
    this.router.navigateByUrl('accueil')
  }

}
