import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink20PageRoutingModule } from './otrolink20-routing.module';

import { Otrolink20Page } from './otrolink20.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink20PageRoutingModule
  ],
  declarations: [Otrolink20Page]
})
export class Otrolink20PageModule {}
