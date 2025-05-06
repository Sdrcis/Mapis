import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcedimientopolPageRoutingModule } from './procedimientopol-routing.module';

import { ProcedimientopolPage } from './procedimientopol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcedimientopolPageRoutingModule
  ],
  declarations: [ProcedimientopolPage]
})
export class ProcedimientopolPageModule {}
