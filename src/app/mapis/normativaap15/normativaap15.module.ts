import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap15PageRoutingModule } from './normativaap15-routing.module';

import { Normativaap15Page } from './normativaap15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap15PageRoutingModule
  ],
  declarations: [Normativaap15Page]
})
export class Normativaap15PageModule {}
