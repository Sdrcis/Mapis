import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas1b33PageRoutingModule } from './pautas1b33-routing.module';

import { Pautas1b33Page } from './pautas1b33.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas1b33PageRoutingModule
  ],
  declarations: [Pautas1b33Page]
})
export class Pautas1b33PageModule {}
