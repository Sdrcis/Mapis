import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap22PageRoutingModule } from './normativaap22-routing.module';

import { Normativaap22Page } from './normativaap22.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap22PageRoutingModule
  ],
  declarations: [Normativaap22Page]
})
export class Normativaap22PageModule {}
