import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasoshcPageRoutingModule } from './casoshc-routing.module';

import { CasoshcPage } from './casoshc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasoshcPageRoutingModule
  ],
  declarations: [CasoshcPage]
})
export class CasoshcPageModule {}
