import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap32PageRoutingModule } from './normativaap32-routing.module';

import { Normativaap32Page } from './normativaap32.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap32PageRoutingModule
  ],
  declarations: [Normativaap32Page]
})
export class Normativaap32PageModule {}
