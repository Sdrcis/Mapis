import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap62PageRoutingModule } from './normativaap62-routing.module';

import { Normativaap62Page } from './normativaap62.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap62PageRoutingModule
  ],
  declarations: [Normativaap62Page]
})
export class Normativaap62PageModule {}
