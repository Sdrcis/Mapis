import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsideracionesPageRoutingModule } from './consideraciones-routing.module';

import { ConsideracionesPage } from './consideraciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsideracionesPageRoutingModule
  ],
  declarations: [ConsideracionesPage]
})
export class ConsideracionesPageModule {}
