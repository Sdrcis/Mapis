import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasosebPageRoutingModule } from './casoseb-routing.module';

import { CasosebPage } from './casoseb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasosebPageRoutingModule
  ],
  declarations: [CasosebPage]
})
export class CasosebPageModule {}
