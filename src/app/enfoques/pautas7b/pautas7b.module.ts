import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas7bPageRoutingModule } from './pautas7b-routing.module';

import { Pautas7bPage } from './pautas7b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas7bPageRoutingModule
  ],
  declarations: [Pautas7bPage]
})
export class Pautas7bPageModule {}
