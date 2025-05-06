import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink13PageRoutingModule } from './otrolink13-routing.module';

import { Otrolink13Page } from './otrolink13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink13PageRoutingModule
  ],
  declarations: [Otrolink13Page]
})
export class Otrolink13PageModule {}
