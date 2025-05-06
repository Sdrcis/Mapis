import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Procedimineto333PageRoutingModule } from './procedimineto333-routing.module';

import { Procedimineto333Page } from './procedimineto333.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Procedimineto333PageRoutingModule
  ],
  declarations: [Procedimineto333Page]
})
export class Procedimineto333PageModule {}
