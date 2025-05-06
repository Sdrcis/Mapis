import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasossimPageRoutingModule } from './casossim-routing.module';

import { CasossimPage } from './casossim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasossimPageRoutingModule
  ],
  declarations: [CasossimPage]
})
export class CasossimPageModule {}
