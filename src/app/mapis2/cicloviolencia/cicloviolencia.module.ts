import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CicloviolenciaPageRoutingModule } from './cicloviolencia-routing.module';

import { CicloviolenciaPage } from './cicloviolencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CicloviolenciaPageRoutingModule
  ],
  declarations: [CicloviolenciaPage]
})
export class CicloviolenciaPageModule {}
