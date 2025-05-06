import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Casospsi2PageRoutingModule } from './casospsi2-routing.module';

import { Casospsi2Page } from './casospsi2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Casospsi2PageRoutingModule
  ],
  declarations: [Casospsi2Page]
})
export class Casospsi2PageModule {}
