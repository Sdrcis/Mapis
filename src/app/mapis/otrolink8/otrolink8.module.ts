import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink8PageRoutingModule } from './otrolink8-routing.module';

import { Otrolink8Page } from './otrolink8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink8PageRoutingModule
  ],
  declarations: [Otrolink8Page]
})
export class Otrolink8PageModule {}
