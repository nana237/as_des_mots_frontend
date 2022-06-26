import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeveChoicePageRoutingModule } from './leve-choice-routing.module';

import { LeveChoicePage } from './leve-choice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeveChoicePageRoutingModule
  ],
  declarations: [LeveChoicePage]
})
export class LeveChoicePageModule {}
