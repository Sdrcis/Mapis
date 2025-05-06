import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap103PageRoutingModule } from './normativaap103-routing.module';

import { Normativaap103Page } from './normativaap103.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap103PageRoutingModule
  ],
  declarations: [Normativaap103Page]
})
export class Normativaap103PageModule {}
