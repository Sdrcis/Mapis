import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasosdcPageRoutingModule } from './casosdc-routing.module';

import { CasosdcPage } from './casosdc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasosdcPageRoutingModule
  ],
  declarations: [CasosdcPage]
})
export class CasosdcPageModule {}
