import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas22PageRoutingModule } from './pautas22-routing.module';

import { Pautas22Page } from './pautas22.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas22PageRoutingModule
  ],
  declarations: [Pautas22Page]
})
export class Pautas22PageModule {}
