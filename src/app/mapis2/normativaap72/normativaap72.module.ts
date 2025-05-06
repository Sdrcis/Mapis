import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap72PageRoutingModule } from './normativaap72-routing.module';

import { Normativaap72Page } from './normativaap72.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap72PageRoutingModule
  ],
  declarations: [Normativaap72Page]
})
export class Normativaap72PageModule {}
