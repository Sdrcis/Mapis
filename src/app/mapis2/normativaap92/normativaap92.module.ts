import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap92PageRoutingModule } from './normativaap92-routing.module';

import { Normativaap92Page } from './normativaap92.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap92PageRoutingModule
  ],
  declarations: [Normativaap92Page]
})
export class Normativaap92PageModule {}
