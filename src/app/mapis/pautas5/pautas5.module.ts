import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas5PageRoutingModule } from './pautas5-routing.module';

import { Pautas5Page } from './pautas5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas5PageRoutingModule
  ],
  declarations: [Pautas5Page]
})
export class Pautas5PageModule {}
