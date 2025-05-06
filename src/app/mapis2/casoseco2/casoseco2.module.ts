import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Casoseco2PageRoutingModule } from './casoseco2-routing.module';

import { Casoseco2Page } from './casoseco2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Casoseco2PageRoutingModule
  ],
  declarations: [Casoseco2Page]
})
export class Casoseco2PageModule {}
