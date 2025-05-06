import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap104PageRoutingModule } from './normativaap104-routing.module';

import { Normativaap104Page } from './normativaap104.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap104PageRoutingModule
  ],
  declarations: [Normativaap104Page]
})
export class Normativaap104PageModule {}
