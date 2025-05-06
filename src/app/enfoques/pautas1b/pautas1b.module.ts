import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas1bPageRoutingModule } from './pautas1b-routing.module';

import { Pautas1bPage } from './pautas1b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas1bPageRoutingModule
  ],
  declarations: [Pautas1bPage]
})
export class Pautas1bPageModule {}
