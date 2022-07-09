import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnexionPageRoutingModule } from './connexion-routing.module';

import { ConnexionPage } from './connexion.page';
import { FooterModule } from '../../../components/pl-part/footer/footer.module';
import { HeaderModule } from '../../../components/pl-part/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnexionPageRoutingModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    FooterModule,
    HeaderModule
  ],
  declarations: [ConnexionPage]
})
export class ConnexionPageModule {}
