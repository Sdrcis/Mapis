import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas6PageRoutingModule } from './pautas6-routing.module';

import { Pautas6Page } from './pautas6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas6PageRoutingModule
  ],
  declarations: [Pautas6Page]
})
export class Pautas6PageModule {}
