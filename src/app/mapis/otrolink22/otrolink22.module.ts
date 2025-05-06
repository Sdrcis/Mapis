import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink22PageRoutingModule } from './otrolink22-routing.module';

import { Otrolink22Page } from './otrolink22.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink22PageRoutingModule
  ],
  declarations: [Otrolink22Page]
})
export class Otrolink22PageModule {}
