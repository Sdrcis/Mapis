import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap8PageRoutingModule } from './normativaap8-routing.module';

import { Normativaap8Page } from './normativaap8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap8PageRoutingModule
  ],
  declarations: [Normativaap8Page]
})
export class Normativaap8PageModule {}
