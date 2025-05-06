import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap2PageRoutingModule } from './normativaap2-routing.module';

import { Normativaap2Page } from './normativaap2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap2PageRoutingModule
  ],
  declarations: [Normativaap2Page]
})
export class Normativaap2PageModule {}
