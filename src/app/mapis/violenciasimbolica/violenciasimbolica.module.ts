import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViolenciasimbolicaPageRoutingModule } from './violenciasimbolica-routing.module';

import { ViolenciasimbolicaPage } from './violenciasimbolica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViolenciasimbolicaPageRoutingModule
  ],
  declarations: [ViolenciasimbolicaPage]
})
export class ViolenciasimbolicaPageModule {}
