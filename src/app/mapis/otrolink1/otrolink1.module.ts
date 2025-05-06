import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink1PageRoutingModule } from './otrolink1-routing.module';

import { Otrolink1Page } from './otrolink1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink1PageRoutingModule
  ],
  declarations: [Otrolink1Page]
})
export class Otrolink1PageModule {}
