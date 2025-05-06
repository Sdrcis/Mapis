import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasosfisizzPageRoutingModule } from './casosfisizz-routing.module';

import { CasosfisizzPage } from './casosfisizz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasosfisizzPageRoutingModule
  ],
  declarations: [CasosfisizzPage]
})
export class CasosfisizzPageModule {}
