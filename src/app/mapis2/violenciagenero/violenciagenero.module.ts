import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViolenciageneroPageRoutingModule } from './violenciagenero-routing.module';

import { ViolenciageneroPage } from './violenciagenero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViolenciageneroPageRoutingModule
  ],
  declarations: [ViolenciageneroPage]
})
export class ViolenciageneroPageModule {}
