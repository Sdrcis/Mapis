import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap16PageRoutingModule } from './normativaap16-routing.module';

import { Normativaap16Page } from './normativaap16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap16PageRoutingModule
  ],
  declarations: [Normativaap16Page]
})
export class Normativaap16PageModule {}
