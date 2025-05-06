import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ayuda2PageRoutingModule } from './ayuda2-routing.module';

import { Ayuda2Page } from './ayuda2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ayuda2PageRoutingModule
  ],
  declarations: [Ayuda2Page]
})
export class Ayuda2PageModule {}
