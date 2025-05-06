import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasosecPageRoutingModule } from './casosec-routing.module';

import { CasosecPage } from './casosec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasosecPageRoutingModule
  ],
  declarations: [CasosecPage]
})
export class CasosecPageModule {}
