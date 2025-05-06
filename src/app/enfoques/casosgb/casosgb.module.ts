import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasosgbPageRoutingModule } from './casosgb-routing.module';

import { CasosgbPage } from './casosgb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasosgbPageRoutingModule
  ],
  declarations: [CasosgbPage]
})
export class CasosgbPageModule {}
