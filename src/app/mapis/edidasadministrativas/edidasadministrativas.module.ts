import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdidasadministrativasPageRoutingModule } from './edidasadministrativas-routing.module';

import { EdidasadministrativasPage } from './edidasadministrativas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdidasadministrativasPageRoutingModule
  ],
  declarations: [EdidasadministrativasPage]
})
export class EdidasadministrativasPageModule {}
