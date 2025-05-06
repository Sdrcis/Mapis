import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Casossexdig2PageRoutingModule } from './casossexdig2-routing.module';

import { Casossexdig2Page } from './casossexdig2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Casossexdig2PageRoutingModule
  ],
  declarations: [Casossexdig2Page]
})
export class Casossexdig2PageModule {}
