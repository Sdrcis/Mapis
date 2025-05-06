import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasoscbPageRoutingModule } from './casoscb-routing.module';

import { CasoscbPage } from './casoscb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasoscbPageRoutingModule
  ],
  declarations: [CasoscbPage]
})
export class CasoscbPageModule {}
