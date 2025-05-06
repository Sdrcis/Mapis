import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasosbbbPageRoutingModule } from './casosbbb-routing.module';

import { CasosbbbPage } from './casosbbb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasosbbbPageRoutingModule
  ],
  declarations: [CasosbbbPage]
})
export class CasosbbbPageModule {}
