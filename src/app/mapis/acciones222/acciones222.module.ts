import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Acciones222PageRoutingModule } from './acciones222-routing.module';

import { Acciones222Page } from './acciones222.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Acciones222PageRoutingModule
  ],
  declarations: [Acciones222Page]
})
export class Acciones222PageModule {}
