import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas42PageRoutingModule } from './pautas42-routing.module';

import { Pautas42Page } from './pautas42.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas42PageRoutingModule
  ],
  declarations: [Pautas42Page]
})
export class Pautas42PageModule {}
