import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasosdbPageRoutingModule } from './casosdb-routing.module';

import { CasosdbPage } from './casosdb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasosdbPageRoutingModule
  ],
  declarations: [CasosdbPage]
})
export class CasosdbPageModule {}
