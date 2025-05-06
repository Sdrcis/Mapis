import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterseccionalidadPageRoutingModule } from './interseccionalidad-routing.module';

import { InterseccionalidadPage } from './interseccionalidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterseccionalidadPageRoutingModule
  ],
  declarations: [InterseccionalidadPage]
})
export class InterseccionalidadPageModule {}
