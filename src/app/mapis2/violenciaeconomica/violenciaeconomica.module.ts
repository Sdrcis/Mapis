import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViolenciaeconomicaPageRoutingModule } from './violenciaeconomica-routing.module';

import { ViolenciaeconomicaPage } from './violenciaeconomica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViolenciaeconomicaPageRoutingModule
  ],
  declarations: [ViolenciaeconomicaPage]
})
export class ViolenciaeconomicaPageModule {}
