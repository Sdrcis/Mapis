import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Preg4PageRoutingModule } from './preg4-routing.module';

import { Preg4Page } from './preg4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Preg4PageRoutingModule
  ],
  declarations: [Preg4Page]
})
export class Preg4PageModule {}
