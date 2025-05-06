import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas62PageRoutingModule } from './pautas62-routing.module';

import { Pautas62Page } from './pautas62.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas62PageRoutingModule
  ],
  declarations: [Pautas62Page]
})
export class Pautas62PageModule {}
