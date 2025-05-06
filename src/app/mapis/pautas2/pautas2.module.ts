import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas2PageRoutingModule } from './pautas2-routing.module';

import { Pautas2Page } from './pautas2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas2PageRoutingModule
  ],
  declarations: [Pautas2Page]
})
export class Pautas2PageModule {}
