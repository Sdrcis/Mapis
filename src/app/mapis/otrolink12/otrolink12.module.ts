import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink12PageRoutingModule } from './otrolink12-routing.module';

import { Otrolink12Page } from './otrolink12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink12PageRoutingModule
  ],
  declarations: [Otrolink12Page]
})
export class Otrolink12PageModule {}
