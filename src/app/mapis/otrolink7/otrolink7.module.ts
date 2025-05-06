import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink7PageRoutingModule } from './otrolink7-routing.module';

import { Otrolink7Page } from './otrolink7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink7PageRoutingModule
  ],
  declarations: [Otrolink7Page]
})
export class Otrolink7PageModule {}
