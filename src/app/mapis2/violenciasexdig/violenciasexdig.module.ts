import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViolenciasexdigPageRoutingModule } from './violenciasexdig-routing.module';

import { ViolenciasexdigPage } from './violenciasexdig.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViolenciasexdigPageRoutingModule
  ],
  declarations: [ViolenciasexdigPage]
})
export class ViolenciasexdigPageModule {}
