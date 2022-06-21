import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameConfigPage } from './game-config.page';

const routes: Routes = [
  {
    path: '',
    component: GameConfigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameConfigPageRoutingModule {}
