import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas15ccPageRoutingModule } from './pautas15cc-routing.module';

import { Pautas15ccPage } from './pautas15cc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas15ccPageRoutingModule
  ],
  declarations: [Pautas15ccPage]
})
export class Pautas15ccPageModule {}
