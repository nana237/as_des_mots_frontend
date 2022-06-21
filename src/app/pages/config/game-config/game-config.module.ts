import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameConfigPageRoutingModule } from './game-config-routing.module';

import { GameConfigPage } from './game-config.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameConfigPageRoutingModule
  ],
  declarations: [GameConfigPage]
})
export class GameConfigPageModule {}
