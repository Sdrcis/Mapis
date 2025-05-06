import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Preg3PageRoutingModule } from './preg3-routing.module';

import { Preg3Page } from './preg3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Preg3PageRoutingModule
  ],
  declarations: [Preg3Page]
})
export class Preg3PageModule {}
