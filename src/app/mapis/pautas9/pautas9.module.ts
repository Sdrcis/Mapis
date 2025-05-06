import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas9PageRoutingModule } from './pautas9-routing.module';

import { Pautas9Page } from './pautas9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas9PageRoutingModule
  ],
  declarations: [Pautas9Page]
})
export class Pautas9PageModule {}
