import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink28PageRoutingModule } from './otrolink28-routing.module';

import { Otrolink28Page } from './otrolink28.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink28PageRoutingModule
  ],
  declarations: [Otrolink28Page]
})
export class Otrolink28PageModule {}
