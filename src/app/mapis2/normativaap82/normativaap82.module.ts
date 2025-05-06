import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap82PageRoutingModule } from './normativaap82-routing.module';

import { Normativaap82Page } from './normativaap82.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap82PageRoutingModule
  ],
  declarations: [Normativaap82Page]
})
export class Normativaap82PageModule {}
