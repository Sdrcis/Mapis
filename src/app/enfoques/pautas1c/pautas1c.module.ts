import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas1cPageRoutingModule } from './pautas1c-routing.module';

import { Pautas1cPage } from './pautas1c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas1cPageRoutingModule
  ],
  declarations: [Pautas1cPage]
})
export class Pautas1cPageModule {}
