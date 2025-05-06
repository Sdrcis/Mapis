import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas1PageRoutingModule } from './pautas1-routing.module';

import { Pautas1Page } from './pautas1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas1PageRoutingModule
  ],
  declarations: [Pautas1Page]
})
export class Pautas1PageModule {}
