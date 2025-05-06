import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Acciones333PageRoutingModule } from './acciones333-routing.module';

import { Acciones333Page } from './acciones333.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Acciones333PageRoutingModule
  ],
  declarations: [Acciones333Page]
})
export class Acciones333PageModule {}
