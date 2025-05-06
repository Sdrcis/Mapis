import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas82PageRoutingModule } from './pautas82-routing.module';

import { Pautas82Page } from './pautas82.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas82PageRoutingModule
  ],
  declarations: [Pautas82Page]
})
export class Pautas82PageModule {}
