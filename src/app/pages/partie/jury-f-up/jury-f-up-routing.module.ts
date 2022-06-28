import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuryFUpPage } from './jury-f-up.page';

const routes: Routes = [
  {
    path: '',
    component: JuryFUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuryFUpPageRoutingModule {}
