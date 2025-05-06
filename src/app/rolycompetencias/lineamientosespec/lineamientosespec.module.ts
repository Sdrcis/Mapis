import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineamientosespecPageRoutingModule } from './lineamientosespec-routing.module';

import { LineamientosespecPage } from './lineamientosespec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineamientosespecPageRoutingModule
  ],
  declarations: [LineamientosespecPage]
})
export class LineamientosespecPageModule {}
