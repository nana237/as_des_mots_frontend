import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeveChoicePage } from './leve-choice.page';

const routes: Routes = [
  {
    path: '',
    component: LeveChoicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeveChoicePageRoutingModule {}
