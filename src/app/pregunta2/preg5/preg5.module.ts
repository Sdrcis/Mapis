import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Preg5PageRoutingModule } from './preg5-routing.module';

import { Preg5Page } from './preg5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Preg5PageRoutingModule
  ],
  declarations: [Preg5Page]
})
export class Preg5PageModule {}
