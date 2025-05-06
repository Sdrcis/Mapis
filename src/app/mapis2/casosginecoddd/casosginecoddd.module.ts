import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasosginecodddPageRoutingModule } from './casosginecoddd-routing.module';

import { CasosginecodddPage } from './casosginecoddd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasosginecodddPageRoutingModule
  ],
  declarations: [CasosginecodddPage]
})
export class CasosginecodddPageModule {}
