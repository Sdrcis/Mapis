import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas14cPageRoutingModule } from './pautas14c-routing.module';

import { Pautas14cPage } from './pautas14c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas14cPageRoutingModule
  ],
  declarations: [Pautas14cPage]
})
export class Pautas14cPageModule {}
