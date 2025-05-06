import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Casosgineco2PageRoutingModule } from './casosgineco2-routing.module';

import { Casosgineco2Page } from './casosgineco2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Casosgineco2PageRoutingModule
  ],
  declarations: [Casosgineco2Page]
})
export class Casosgineco2PageModule {}
