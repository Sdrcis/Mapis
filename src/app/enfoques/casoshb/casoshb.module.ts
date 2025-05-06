import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasoshbPageRoutingModule } from './casoshb-routing.module';

import { CasoshbPage } from './casoshb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasoshbPageRoutingModule
  ],
  declarations: [CasoshbPage]
})
export class CasoshbPageModule {}
