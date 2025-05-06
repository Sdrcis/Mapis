import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViolenciaginecoPageRoutingModule } from './violenciagineco-routing.module';

import { ViolenciaginecoPage } from './violenciagineco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViolenciaginecoPageRoutingModule
  ],
  declarations: [ViolenciaginecoPage]
})
export class ViolenciaginecoPageModule {}
