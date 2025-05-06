import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasossexbPageRoutingModule } from './casossexb-routing.module';

import { CasossexbPage } from './casossexb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasossexbPageRoutingModule
  ],
  declarations: [CasossexbPage]
})
export class CasossexbPageModule {}
