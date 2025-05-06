import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap6PageRoutingModule } from './normativaap6-routing.module';

import { Normativaap6Page } from './normativaap6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap6PageRoutingModule
  ],
  declarations: [Normativaap6Page]
})
export class Normativaap6PageModule {}
