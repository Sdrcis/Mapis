import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasosfcPageRoutingModule } from './casosfc-routing.module';

import { CasosfcPage } from './casosfc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasosfcPageRoutingModule
  ],
  declarations: [CasosfcPage]
})
export class CasosfcPageModule {}
