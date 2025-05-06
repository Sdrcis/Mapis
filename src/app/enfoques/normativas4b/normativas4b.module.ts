import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativas4bPageRoutingModule } from './normativas4b-routing.module';

import { Normativas4bPage } from './normativas4b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativas4bPageRoutingModule
  ],
  declarations: [Normativas4bPage]
})
export class Normativas4bPageModule {}
