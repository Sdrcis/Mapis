import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap12PageRoutingModule } from './normativaap12-routing.module';

import { Normativaap12Page } from './normativaap12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap12PageRoutingModule
  ],
  declarations: [Normativaap12Page]
})
export class Normativaap12PageModule {}
