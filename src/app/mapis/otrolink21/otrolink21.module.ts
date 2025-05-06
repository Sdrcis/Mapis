import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink21PageRoutingModule } from './otrolink21-routing.module';

import { Otrolink21Page } from './otrolink21.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink21PageRoutingModule
  ],
  declarations: [Otrolink21Page]
})
export class Otrolink21PageModule {}
