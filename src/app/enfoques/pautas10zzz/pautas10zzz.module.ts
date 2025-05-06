import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas10zzzPageRoutingModule } from './pautas10zzz-routing.module';

import { Pautas10zzzPage } from './pautas10zzz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas10zzzPageRoutingModule
  ],
  declarations: [Pautas10zzzPage]
})
export class Pautas10zzzPageModule {}
