import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasospoliPageRoutingModule } from './casospoli-routing.module';

import { CasospoliPage } from './casospoli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasospoliPageRoutingModule
  ],
  declarations: [CasospoliPage]
})
export class CasospoliPageModule {}
