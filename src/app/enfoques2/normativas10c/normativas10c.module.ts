import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativas10cPageRoutingModule } from './normativas10c-routing.module';

import { Normativas10cPage } from './normativas10c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativas10cPageRoutingModule
  ],
  declarations: [Normativas10cPage]
})
export class Normativas10cPageModule {}
