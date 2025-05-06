import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativas1b33PageRoutingModule } from './normativas1b33-routing.module';

import { Normativas1b33Page } from './normativas1b33.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativas1b33PageRoutingModule
  ],
  declarations: [Normativas1b33Page]
})
export class Normativas1b33PageModule {}
