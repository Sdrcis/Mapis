import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas16PageRoutingModule } from './pautas16-routing.module';

import { Pautas16Page } from './pautas16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas16PageRoutingModule
  ],
  declarations: [Pautas16Page]
})
export class Pautas16PageModule {}
