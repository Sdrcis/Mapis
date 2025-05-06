import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink26PageRoutingModule } from './otrolink26-routing.module';

import { Otrolink26Page } from './otrolink26.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink26PageRoutingModule
  ],
  declarations: [Otrolink26Page]
})
export class Otrolink26PageModule {}
