import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas15PageRoutingModule } from './pautas15-routing.module';

import { Pautas15Page } from './pautas15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas15PageRoutingModule
  ],
  declarations: [Pautas15Page]
})
export class Pautas15PageModule {}
