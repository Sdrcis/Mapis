import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Descripcion2PageRoutingModule } from './descripcion2-routing.module';

import { Descripcion2Page } from './descripcion2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Descripcion2PageRoutingModule
  ],
  declarations: [Descripcion2Page]
})
export class Descripcion2PageModule {}
