import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap5PageRoutingModule } from './normativaap5-routing.module';

import { Normativaap5Page } from './normativaap5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap5PageRoutingModule
  ],
  declarations: [Normativaap5Page]
})
export class Normativaap5PageModule {}
