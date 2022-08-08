import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameModeSelectPage } from './game-mode-select.page';

const routes: Routes = [
  {
    path: '',
    component: GameModeSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameModeSelectPageRoutingModule {}
