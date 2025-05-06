import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas3PageRoutingModule } from './pautas3-routing.module';

import { Pautas3Page } from './pautas3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas3PageRoutingModule
  ],
  declarations: [Pautas3Page]
})
export class Pautas3PageModule {}
