import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParametrosyvalPageRoutingModule } from './parametrosyval-routing.module';

import { ParametrosyvalPage } from './parametrosyval.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParametrosyvalPageRoutingModule
  ],
  declarations: [ParametrosyvalPage]
})
export class ParametrosyvalPageModule {}
