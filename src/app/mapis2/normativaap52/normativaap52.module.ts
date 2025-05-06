import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap52PageRoutingModule } from './normativaap52-routing.module';

import { Normativaap52Page } from './normativaap52.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap52PageRoutingModule
  ],
  declarations: [Normativaap52Page]
})
export class Normativaap52PageModule {}
