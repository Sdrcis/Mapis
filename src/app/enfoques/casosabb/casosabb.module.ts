import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasosabbPageRoutingModule } from './casosabb-routing.module';

import { CasosabbPage } from './casosabb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasosabbPageRoutingModule
  ],
  declarations: [CasosabbPage]
})
export class CasosabbPageModule {}
