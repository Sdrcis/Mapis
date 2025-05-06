import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink17PageRoutingModule } from './otrolink17-routing.module';

import { Otrolink17Page } from './otrolink17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink17PageRoutingModule
  ],
  declarations: [Otrolink17Page]
})
export class Otrolink17PageModule {}
