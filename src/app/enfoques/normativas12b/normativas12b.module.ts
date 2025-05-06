import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativas12bPageRoutingModule } from './normativas12b-routing.module';

import { Normativas12bPage } from './normativas12b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativas12bPageRoutingModule
  ],
  declarations: [Normativas12bPage]
})
export class Normativas12bPageModule {}
