import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink2PageRoutingModule } from './otrolink2-routing.module';

import { Otrolink2Page } from './otrolink2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink2PageRoutingModule
  ],
  declarations: [Otrolink2Page]
})
export class Otrolink2PageModule {}
