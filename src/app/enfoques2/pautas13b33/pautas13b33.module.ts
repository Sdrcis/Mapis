import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas13b33PageRoutingModule } from './pautas13b33-routing.module';

import { Pautas13b33Page } from './pautas13b33.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas13b33PageRoutingModule
  ],
  declarations: [Pautas13b33Page]
})
export class Pautas13b33PageModule {}
