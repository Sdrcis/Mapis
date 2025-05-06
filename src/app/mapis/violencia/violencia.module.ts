import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViolenciaPageRoutingModule } from './violencia-routing.module';

import { ViolenciaPage } from './violencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViolenciaPageRoutingModule
  ],
  declarations: [ViolenciaPage]
})
export class ViolenciaPageModule {}
