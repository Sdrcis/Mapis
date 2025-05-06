import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas10cPageRoutingModule } from './pautas10c-routing.module';

import { Pautas10cPage } from './pautas10c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas10cPageRoutingModule
  ],
  declarations: [Pautas10cPage]
})
export class Pautas10cPageModule {}
