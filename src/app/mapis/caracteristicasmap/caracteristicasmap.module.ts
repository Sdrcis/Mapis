import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaracteristicasmapPageRoutingModule } from './caracteristicasmap-routing.module';

import { CaracteristicasmapPage } from './caracteristicasmap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaracteristicasmapPageRoutingModule
  ],
  declarations: [CaracteristicasmapPage]
})
export class CaracteristicasmapPageModule {}
