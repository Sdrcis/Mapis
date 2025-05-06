import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas108PageRoutingModule } from './pautas108-routing.module';

import { Pautas108Page } from './pautas108.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas108PageRoutingModule
  ],
  declarations: [Pautas108Page]
})
export class Pautas108PageModule {}
