import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasossexPageRoutingModule } from './casossex-routing.module';

import { CasossexPage } from './casossex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasossexPageRoutingModule
  ],
  declarations: [CasossexPage]
})
export class CasossexPageModule {}
