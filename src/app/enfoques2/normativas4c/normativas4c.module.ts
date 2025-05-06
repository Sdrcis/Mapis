import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativas4cPageRoutingModule } from './normativas4c-routing.module';

import { Normativas4cPage } from './normativas4c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativas4cPageRoutingModule
  ],
  declarations: [Normativas4cPage]
})
export class Normativas4cPageModule {}
