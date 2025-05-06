import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas32PageRoutingModule } from './pautas32-routing.module';

import { Pautas32Page } from './pautas32.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas32PageRoutingModule
  ],
  declarations: [Pautas32Page]
})
export class Pautas32PageModule {}
