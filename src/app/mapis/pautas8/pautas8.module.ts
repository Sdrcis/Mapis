import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas8PageRoutingModule } from './pautas8-routing.module';

import { Pautas8Page } from './pautas8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas8PageRoutingModule
  ],
  declarations: [Pautas8Page]
})
export class Pautas8PageModule {}
