import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Casospoli2PageRoutingModule } from './casospoli2-routing.module';

import { Casospoli2Page } from './casospoli2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Casospoli2PageRoutingModule
  ],
  declarations: [Casospoli2Page]
})
export class Casospoli2PageModule {}
