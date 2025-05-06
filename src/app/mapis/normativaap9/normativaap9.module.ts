import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap9PageRoutingModule } from './normativaap9-routing.module';

import { Normativaap9Page } from './normativaap9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap9PageRoutingModule
  ],
  declarations: [Normativaap9Page]
})
export class Normativaap9PageModule {}
