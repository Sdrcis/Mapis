import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap4PageRoutingModule } from './normativaap4-routing.module';

import { Normativaap4Page } from './normativaap4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap4PageRoutingModule
  ],
  declarations: [Normativaap4Page]
})
export class Normativaap4PageModule {}
