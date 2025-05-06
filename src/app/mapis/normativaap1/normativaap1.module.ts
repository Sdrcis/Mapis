import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap1PageRoutingModule } from './normativaap1-routing.module';

import { Normativaap1Page } from './normativaap1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap1PageRoutingModule
  ],
  declarations: [Normativaap1Page]
})
export class Normativaap1PageModule {}
