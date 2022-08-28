import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameModeSelectPageRoutingModule } from './game-mode-select-routing.module';

import { GameModeSelectPage } from './game-mode-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameModeSelectPageRoutingModule
  ],
  declarations: [GameModeSelectPage]
})
export class GameModeSelectPageModule {}
