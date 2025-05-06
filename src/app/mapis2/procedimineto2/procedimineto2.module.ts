import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Procedimineto2PageRoutingModule } from './procedimineto2-routing.module';

import { Procedimineto2Page } from './procedimineto2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Procedimineto2PageRoutingModule
  ],
  declarations: [Procedimineto2Page]
})
export class Procedimineto2PageModule {}
