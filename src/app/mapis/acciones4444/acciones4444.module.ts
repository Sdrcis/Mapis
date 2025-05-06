import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Acciones4444PageRoutingModule } from './acciones4444-routing.module';

import { Acciones4444Page } from './acciones4444.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Acciones4444PageRoutingModule
  ],
  declarations: [Acciones4444Page]
})
export class Acciones4444PageModule {}
