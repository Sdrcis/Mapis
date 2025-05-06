import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap10PageRoutingModule } from './normativaap10-routing.module';

import { Normativaap10Page } from './normativaap10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap10PageRoutingModule
  ],
  declarations: [Normativaap10Page]
})
export class Normativaap10PageModule {}
