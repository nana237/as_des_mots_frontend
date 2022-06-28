import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuryFUpPageRoutingModule } from './jury-f-up-routing.module';

import { JuryFUpPage } from './jury-f-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuryFUpPageRoutingModule
  ],
  declarations: [JuryFUpPage]
})
export class JuryFUpPageModule {}
