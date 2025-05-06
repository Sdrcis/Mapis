import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas4bPageRoutingModule } from './pautas4b-routing.module';

import { Pautas4bPage } from './pautas4b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas4bPageRoutingModule
  ],
  declarations: [Pautas4bPage]
})
export class Pautas4bPageModule {}
