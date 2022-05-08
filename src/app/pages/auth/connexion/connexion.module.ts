import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnexionPageRoutingModule } from './connexion-routing.module';

import { ConnexionPage } from './connexion.page';
import { FooterComponent } from '../../../components/pl-part/footer/footer.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnexionPageRoutingModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  declarations: [ConnexionPage, FooterComponent]
})
export class ConnexionPageModule {}
