import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas14bPageRoutingModule } from './pautas14b-routing.module';

import { Pautas14bPage } from './pautas14b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas14bPageRoutingModule
  ],
  declarations: [Pautas14bPage]
})
export class Pautas14bPageModule {}
