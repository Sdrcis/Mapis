import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativas13b33PageRoutingModule } from './normativas13b33-routing.module';

import { Normativas13b33Page } from './normativas13b33.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativas13b33PageRoutingModule
  ],
  declarations: [Normativas13b33Page]
})
export class Normativas13b33PageModule {}
