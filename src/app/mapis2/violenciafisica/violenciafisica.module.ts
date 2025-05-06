import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViolenciafisicaPageRoutingModule } from './violenciafisica-routing.module';

import { ViolenciafisicaPage } from './violenciafisica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViolenciafisicaPageRoutingModule
  ],
  declarations: [ViolenciafisicaPage]
})
export class ViolenciafisicaPageModule {}
