import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas106PageRoutingModule } from './pautas106-routing.module';

import { Pautas106Page } from './pautas106.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas106PageRoutingModule
  ],
  declarations: [Pautas106Page]
})
export class Pautas106PageModule {}
