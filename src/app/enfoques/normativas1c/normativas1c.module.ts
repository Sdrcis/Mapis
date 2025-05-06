import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativas1cPageRoutingModule } from './normativas1c-routing.module';

import { Normativas1cPage } from './normativas1c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativas1cPageRoutingModule
  ],
  declarations: [Normativas1cPage]
})
export class Normativas1cPageModule {}
