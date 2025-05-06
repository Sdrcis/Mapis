import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViolenciapsicologicaPageRoutingModule } from './violenciapsicologica-routing.module';

import { ViolenciapsicologicaPage } from './violenciapsicologica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViolenciapsicologicaPageRoutingModule
  ],
  declarations: [ViolenciapsicologicaPage]
})
export class ViolenciapsicologicaPageModule {}
