import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-game-mode-select',
  templateUrl: './game-mode-select.page.html',
  styleUrls: ['./game-mode-select.page.scss'],
})
export class GameModeSelectPage implements OnInit {

  constructor(
    private router: Router,
    private config_: ConfigService
  ) { }

  ngOnInit() {
  }

  gotoOnline(){
    this.config_.mode = "online"
    this.router.navigateByUrl('game-config')
  }
}
