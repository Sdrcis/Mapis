import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Casospsi2aPageRoutingModule } from './casospsi2a-routing.module';

import { Casospsi2aPage } from './casospsi2a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Casospsi2aPageRoutingModule
  ],
  declarations: [Casospsi2aPage]
})
export class Casospsi2aPageModule {}
