import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Casosf1PageRoutingModule } from './casosf1-routing.module';

import { Casosf1Page } from './casosf1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Casosf1PageRoutingModule
  ],
  declarations: [Casosf1Page]
})
export class Casosf1PageModule {}
