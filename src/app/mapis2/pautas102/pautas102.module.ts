import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas102PageRoutingModule } from './pautas102-routing.module';

import { Pautas102Page } from './pautas102.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas102PageRoutingModule
  ],
  declarations: [Pautas102Page]
})
export class Pautas102PageModule {}
