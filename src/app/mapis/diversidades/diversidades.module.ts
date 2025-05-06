import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiversidadesPageRoutingModule } from './diversidades-routing.module';

import { DiversidadesPage } from './diversidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiversidadesPageRoutingModule,
  ],
  declarations: [DiversidadesPage],
})
export class DiversidadesPageModule {}

export interface Categoria {
  titulo: string;
  definicion: string;
  ejemplos: string[];
}

export interface Diversidad {
  titulo_general: string;
  descripcion_general: string;
  categorias: Categoria[];
}
