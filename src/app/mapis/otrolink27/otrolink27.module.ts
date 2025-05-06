import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink27PageRoutingModule } from './otrolink27-routing.module';

import { Otrolink27Page } from './otrolink27.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink27PageRoutingModule
  ],
  declarations: [Otrolink27Page]
})
export class Otrolink27PageModule {}
