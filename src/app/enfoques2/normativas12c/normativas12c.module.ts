import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativas12cPageRoutingModule } from './normativas12c-routing.module';

import { Normativas12cPage } from './normativas12c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativas12cPageRoutingModule
  ],
  declarations: [Normativas12cPage]
})
export class Normativas12cPageModule {}
