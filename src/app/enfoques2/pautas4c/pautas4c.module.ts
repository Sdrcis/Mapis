import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas4cPageRoutingModule } from './pautas4c-routing.module';

import { Pautas4cPage } from './pautas4c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas4cPageRoutingModule
  ],
  declarations: [Pautas4cPage]
})
export class Pautas4cPageModule {}
