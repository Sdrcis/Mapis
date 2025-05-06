import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas17PageRoutingModule } from './pautas17-routing.module';

import { Pautas17Page } from './pautas17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas17PageRoutingModule
  ],
  declarations: [Pautas17Page]
})
export class Pautas17PageModule {}
