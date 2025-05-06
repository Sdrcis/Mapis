import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasossexdigPageRoutingModule } from './casossexdig-routing.module';

import { CasossexdigPage } from './casossexdig.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasossexdigPageRoutingModule
  ],
  declarations: [CasossexdigPage]
})
export class CasossexdigPageModule {}
