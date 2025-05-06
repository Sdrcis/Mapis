import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Acciones2PageRoutingModule } from './acciones2-routing.module';

import { Acciones2Page } from './acciones2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Acciones2PageRoutingModule
  ],
  declarations: [Acciones2Page]
})
export class Acciones2PageModule {}
