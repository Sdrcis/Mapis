import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas12bPageRoutingModule } from './pautas12b-routing.module';

import { Pautas12bPage } from './pautas12b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas12bPageRoutingModule
  ],
  declarations: [Pautas12bPage]
})
export class Pautas12bPageModule {}
