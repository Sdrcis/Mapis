import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink4PageRoutingModule } from './otrolink4-routing.module';

import { Otrolink4Page } from './otrolink4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink4PageRoutingModule
  ],
  declarations: [Otrolink4Page]
})
export class Otrolink4PageModule {}
