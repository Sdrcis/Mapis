import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Casos2PageRoutingModule } from './casos2-routing.module';

import { Casos2Page } from './casos2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Casos2PageRoutingModule
  ],
  declarations: [Casos2Page]
})
export class Casos2PageModule {}
