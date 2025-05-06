import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas107PageRoutingModule } from './pautas107-routing.module';

import { Pautas107Page } from './pautas107.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas107PageRoutingModule
  ],
  declarations: [Pautas107Page]
})
export class Pautas107PageModule {}
