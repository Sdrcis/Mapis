import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas7cPageRoutingModule } from './pautas7c-routing.module';

import { Pautas7cPage } from './pautas7c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas7cPageRoutingModule
  ],
  declarations: [Pautas7cPage]
})
export class Pautas7cPageModule {}
