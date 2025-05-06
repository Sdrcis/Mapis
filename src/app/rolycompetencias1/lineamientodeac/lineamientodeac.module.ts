import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineamientodeacPageRoutingModule } from './lineamientodeac-routing.module';

import { LineamientodeacPage } from './lineamientodeac.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineamientodeacPageRoutingModule
  ],
  declarations: [LineamientodeacPage]
})
export class LineamientodeacPageModule {}
