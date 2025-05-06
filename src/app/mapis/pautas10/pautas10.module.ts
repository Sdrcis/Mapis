import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas10PageRoutingModule } from './pautas10-routing.module';

import { Pautas10Page } from './pautas10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas10PageRoutingModule
  ],
  declarations: [Pautas10Page]
})
export class Pautas10PageModule {}
