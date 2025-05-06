import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap7PageRoutingModule } from './normativaap7-routing.module';

import { Normativaap7Page } from './normativaap7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap7PageRoutingModule
  ],
  declarations: [Normativaap7Page]
})
export class Normativaap7PageModule {}
