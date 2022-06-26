import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RejoindrePage } from './rejoindre.page';

const routes: Routes = [
  {
    path: '',
    component: RejoindrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RejoindrePageRoutingModule {}
