import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasosabPageRoutingModule } from './casosab-routing.module';

import { CasosabPage } from './casosab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasosabPageRoutingModule
  ],
  declarations: [CasosabPage]
})
export class CasosabPageModule {}
