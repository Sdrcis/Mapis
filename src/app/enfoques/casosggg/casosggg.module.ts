import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasosgggPageRoutingModule } from './casosggg-routing.module';

import { CasosgggPage } from './casosggg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasosgggPageRoutingModule
  ],
  declarations: [CasosgggPage]
})
export class CasosgggPageModule {}
