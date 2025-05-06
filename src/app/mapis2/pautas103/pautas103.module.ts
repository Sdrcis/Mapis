import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas103PageRoutingModule } from './pautas103-routing.module';

import { Pautas103Page } from './pautas103.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas103PageRoutingModule
  ],
  declarations: [Pautas103Page]
})
export class Pautas103PageModule {}
