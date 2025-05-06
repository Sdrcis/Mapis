import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativas7bPageRoutingModule } from './normativas7b-routing.module';

import { Normativas7bPage } from './normativas7b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativas7bPageRoutingModule
  ],
  declarations: [Normativas7bPage]
})
export class Normativas7bPageModule {}
