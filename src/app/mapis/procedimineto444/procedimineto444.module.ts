import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Procedimineto444PageRoutingModule } from './procedimineto444-routing.module';

import { Procedimineto444Page } from './procedimineto444.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Procedimineto444PageRoutingModule
  ],
  declarations: [Procedimineto444Page]
})
export class Procedimineto444PageModule {}
