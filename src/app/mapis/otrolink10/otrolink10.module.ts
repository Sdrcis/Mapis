import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink10PageRoutingModule } from './otrolink10-routing.module';

import { Otrolink10Page } from './otrolink10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink10PageRoutingModule
  ],
  declarations: [Otrolink10Page]
})
export class Otrolink10PageModule {}
