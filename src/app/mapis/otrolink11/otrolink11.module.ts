import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink11PageRoutingModule } from './otrolink11-routing.module';

import { Otrolink11Page } from './otrolink11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink11PageRoutingModule
  ],
  declarations: [Otrolink11Page]
})
export class Otrolink11PageModule {}
