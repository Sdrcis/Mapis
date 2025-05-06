import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasossexaPageRoutingModule } from './casossexa-routing.module';

import { CasossexaPage } from './casossexa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasossexaPageRoutingModule
  ],
  declarations: [CasossexaPage]
})
export class CasossexaPageModule {}
