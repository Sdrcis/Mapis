import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap106PageRoutingModule } from './normativaap106-routing.module';

import { Normativaap106Page } from './normativaap106.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap106PageRoutingModule
  ],
  declarations: [Normativaap106Page]
})
export class Normativaap106PageModule {}
