import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Casospsi2bPageRoutingModule } from './casospsi2b-routing.module';

import { Casospsi2bPage } from './casospsi2b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Casospsi2bPageRoutingModule
  ],
  declarations: [Casospsi2bPage]
})
export class Casospsi2bPageModule {}
