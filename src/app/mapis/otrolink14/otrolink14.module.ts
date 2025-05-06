import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink14PageRoutingModule } from './otrolink14-routing.module';

import { Otrolink14Page } from './otrolink14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink14PageRoutingModule
  ],
  declarations: [Otrolink14Page]
})
export class Otrolink14PageModule {}
