import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasosfbPageRoutingModule } from './casosfb-routing.module';

import { CasosfbPage } from './casosfb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasosfbPageRoutingModule
  ],
  declarations: [CasosfbPage]
})
export class CasosfbPageModule {}
