import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink29PageRoutingModule } from './otrolink29-routing.module';

import { Otrolink29Page } from './otrolink29.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink29PageRoutingModule
  ],
  declarations: [Otrolink29Page]
})
export class Otrolink29PageModule {}
