import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas105PageRoutingModule } from './pautas105-routing.module';

import { Pautas105Page } from './pautas105.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas105PageRoutingModule
  ],
  declarations: [Pautas105Page]
})
export class Pautas105PageModule {}
