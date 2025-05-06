import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas12cPageRoutingModule } from './pautas12c-routing.module';

import { Pautas12cPage } from './pautas12c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas12cPageRoutingModule
  ],
  declarations: [Pautas12cPage]
})
export class Pautas12cPageModule {}
