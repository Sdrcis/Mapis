import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasosecoPageRoutingModule } from './casoseco-routing.module';

import { CasosecoPage } from './casoseco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasosecoPageRoutingModule
  ],
  declarations: [CasosecoPage]
})
export class CasosecoPageModule {}
