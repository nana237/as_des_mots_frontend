import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompleteInfoPageRoutingModule } from './complete-info-routing.module';

import { CompleteInfoPage } from './complete-info.page';
import { FooterModule } from '../../../components/pl-part/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompleteInfoPageRoutingModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    FooterModule
  ],
  declarations: [CompleteInfoPage]
})
export class CompleteInfoPageModule {}
