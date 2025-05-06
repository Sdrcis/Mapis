import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap108PageRoutingModule } from './normativaap108-routing.module';

import { Normativaap108Page } from './normativaap108.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap108PageRoutingModule
  ],
  declarations: [Normativaap108Page]
})
export class Normativaap108PageModule {}
