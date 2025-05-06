import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas52PageRoutingModule } from './pautas52-routing.module';

import { Pautas52Page } from './pautas52.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas52PageRoutingModule
  ],
  declarations: [Pautas52Page]
})
export class Pautas52PageModule {}
