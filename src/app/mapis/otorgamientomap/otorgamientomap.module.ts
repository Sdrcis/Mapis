import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtorgamientomapPageRoutingModule } from './otorgamientomap-routing.module';

import { OtorgamientomapPage } from './otorgamientomap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtorgamientomapPageRoutingModule
  ],
  declarations: [OtorgamientomapPage]
})
export class OtorgamientomapPageModule {}
