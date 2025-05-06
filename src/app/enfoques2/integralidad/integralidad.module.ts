import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntegralidadPageRoutingModule } from './integralidad-routing.module';

import { IntegralidadPage } from './integralidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntegralidadPageRoutingModule
  ],
  declarations: [IntegralidadPage]
})
export class IntegralidadPageModule {}
