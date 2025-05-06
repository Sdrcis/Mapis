import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas104PageRoutingModule } from './pautas104-routing.module';

import { Pautas104Page } from './pautas104.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas104PageRoutingModule
  ],
  declarations: [Pautas104Page]
})
export class Pautas104PageModule {}
