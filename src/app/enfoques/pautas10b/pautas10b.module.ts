import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas10bPageRoutingModule } from './pautas10b-routing.module';

import { Pautas10bPage } from './pautas10b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas10bPageRoutingModule
  ],
  declarations: [Pautas10bPage]
})
export class Pautas10bPageModule {}
