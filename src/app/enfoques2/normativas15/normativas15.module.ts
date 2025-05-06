import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativas15PageRoutingModule } from './normativas15-routing.module';

import { Normativas15Page } from './normativas15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativas15PageRoutingModule
  ],
  declarations: [Normativas15Page]
})
export class Normativas15PageModule {}
