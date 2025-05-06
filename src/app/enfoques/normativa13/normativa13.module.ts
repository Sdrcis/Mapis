import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativa13PageRoutingModule } from './normativa13-routing.module';

import { Normativa13Page } from './normativa13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativa13PageRoutingModule
  ],
  declarations: [Normativa13Page]
})
export class Normativa13PageModule {}
