import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas13PageRoutingModule } from './pautas13-routing.module';

import { Pautas13Page } from './pautas13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas13PageRoutingModule
  ],
  declarations: [Pautas13Page]
})
export class Pautas13PageModule {}
