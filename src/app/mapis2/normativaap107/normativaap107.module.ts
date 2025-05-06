import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap107PageRoutingModule } from './normativaap107-routing.module';

import { Normativaap107Page } from './normativaap107.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap107PageRoutingModule
  ],
  declarations: [Normativaap107Page]
})
export class Normativaap107PageModule {}
