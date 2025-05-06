import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasosginecoPageRoutingModule } from './casosgineco-routing.module';

import { CasosginecoPage } from './casosgineco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasosginecoPageRoutingModule
  ],
  declarations: [CasosginecoPage]
})
export class CasosginecoPageModule {}
