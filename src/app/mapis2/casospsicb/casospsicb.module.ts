import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasospsicbPageRoutingModule } from './casospsicb-routing.module';

import { CasospsicbPage } from './casospsicb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasospsicbPageRoutingModule
  ],
  declarations: [CasospsicbPage]
})
export class CasospsicbPageModule {}
