import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas72PageRoutingModule } from './pautas72-routing.module';

import { Pautas72Page } from './pautas72.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas72PageRoutingModule
  ],
  declarations: [Pautas72Page]
})
export class Pautas72PageModule {}
