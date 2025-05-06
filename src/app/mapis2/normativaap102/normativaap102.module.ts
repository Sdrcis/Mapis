import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap102PageRoutingModule } from './normativaap102-routing.module';

import { Normativaap102Page } from './normativaap102.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap102PageRoutingModule
  ],
  declarations: [Normativaap102Page]
})
export class Normativaap102PageModule {}
