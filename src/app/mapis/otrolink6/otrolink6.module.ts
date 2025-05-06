import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink6PageRoutingModule } from './otrolink6-routing.module';

import { Otrolink6Page } from './otrolink6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink6PageRoutingModule
  ],
  declarations: [Otrolink6Page]
})
export class Otrolink6PageModule {}
