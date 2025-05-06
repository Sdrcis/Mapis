import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Preg1PageRoutingModule } from './preg1-routing.module';

import { Preg1Page } from './preg1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Preg1PageRoutingModule
  ],
  declarations: [Preg1Page]
})
export class Preg1PageModule {}
