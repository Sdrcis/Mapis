import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasosccccPageRoutingModule } from './casoscccc-routing.module';

import { CasosccccPage } from './casoscccc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasosccccPageRoutingModule
  ],
  declarations: [CasosccccPage]
})
export class CasosccccPageModule {}
