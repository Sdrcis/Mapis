import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViolenciapoliticaPageRoutingModule } from './violenciapolitica-routing.module';

import { ViolenciapoliticaPage } from './violenciapolitica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViolenciapoliticaPageRoutingModule
  ],
  declarations: [ViolenciapoliticaPage]
})
export class ViolenciapoliticaPageModule {}
