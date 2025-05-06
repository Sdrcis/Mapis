import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas12PageRoutingModule } from './pautas12-routing.module';

import { Pautas12Page } from './pautas12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas12PageRoutingModule
  ],
  declarations: [Pautas12Page]
})
export class Pautas12PageModule {}
