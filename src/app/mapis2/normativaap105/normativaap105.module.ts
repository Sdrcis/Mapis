import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap105PageRoutingModule } from './normativaap105-routing.module';

import { Normativaap105Page } from './normativaap105.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap105PageRoutingModule
  ],
  declarations: [Normativaap105Page]
})
export class Normativaap105PageModule {}
