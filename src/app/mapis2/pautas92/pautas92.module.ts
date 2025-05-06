import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas92PageRoutingModule } from './pautas92-routing.module';

import { Pautas92Page } from './pautas92.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas92PageRoutingModule
  ],
  declarations: [Pautas92Page]
})
export class Pautas92PageModule {}
