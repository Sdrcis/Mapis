import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas4PageRoutingModule } from './pautas4-routing.module';

import { Pautas4Page } from './pautas4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas4PageRoutingModule
  ],
  declarations: [Pautas4Page]
})
export class Pautas4PageModule {}
