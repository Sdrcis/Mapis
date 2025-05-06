import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VigilanciacomunitariaPageRoutingModule } from './vigilanciacomunitaria-routing.module';

import { VigilanciacomunitariaPage } from './vigilanciacomunitaria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VigilanciacomunitariaPageRoutingModule
  ],
  declarations: [VigilanciacomunitariaPage]
})
export class VigilanciacomunitariaPageModule {}
