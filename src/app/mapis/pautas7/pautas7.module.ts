import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas7PageRoutingModule } from './pautas7-routing.module';

import { Pautas7Page } from './pautas7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas7PageRoutingModule
  ],
  declarations: [Pautas7Page]
})
export class Pautas7PageModule {}
