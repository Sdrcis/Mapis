import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterculturalidadPageRoutingModule } from './interculturalidad-routing.module';

import { InterculturalidadPage } from './interculturalidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterculturalidadPageRoutingModule
  ],
  declarations: [InterculturalidadPage]
})
export class InterculturalidadPageModule {}
