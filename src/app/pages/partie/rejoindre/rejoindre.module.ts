import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RejoindrePageRoutingModule } from './rejoindre-routing.module';

import { RejoindrePage } from './rejoindre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RejoindrePageRoutingModule
  ],
  declarations: [RejoindrePage]
})
export class RejoindrePageModule {}
