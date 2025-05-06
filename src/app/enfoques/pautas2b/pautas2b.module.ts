import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas2bPageRoutingModule } from './pautas2b-routing.module';

import { Pautas2bPage } from './pautas2b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas2bPageRoutingModule
  ],
  declarations: [Pautas2bPage]
})
export class Pautas2bPageModule {}
