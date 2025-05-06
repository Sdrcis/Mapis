import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Casosfisi4PageRoutingModule } from './casosfisi4-routing.module';

import { Casosfisi4Page } from './casosfisi4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Casosfisi4PageRoutingModule
  ],
  declarations: [Casosfisi4Page]
})
export class Casosfisi4PageModule {}
