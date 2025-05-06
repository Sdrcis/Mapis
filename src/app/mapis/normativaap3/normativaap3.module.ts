import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap3PageRoutingModule } from './normativaap3-routing.module';

import { Normativaap3Page } from './normativaap3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap3PageRoutingModule
  ],
  declarations: [Normativaap3Page]
})
export class Normativaap3PageModule {}
