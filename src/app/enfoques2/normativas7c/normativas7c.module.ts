import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativas7cPageRoutingModule } from './normativas7c-routing.module';

import { Normativas7cPage } from './normativas7c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativas7cPageRoutingModule
  ],
  declarations: [Normativas7cPage]
})
export class Normativas7cPageModule {}
