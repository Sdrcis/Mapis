import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Preg2PageRoutingModule } from './preg2-routing.module';

import { Preg2Page } from './preg2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Preg2PageRoutingModule
  ],
  declarations: [Preg2Page]
})
export class Preg2PageModule {}
