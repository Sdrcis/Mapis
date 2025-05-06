import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativas14cPageRoutingModule } from './normativas14c-routing.module';

import { Normativas14cPage } from './normativas14c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativas14cPageRoutingModule
  ],
  declarations: [Normativas14cPage]
})
export class Normativas14cPageModule {}
