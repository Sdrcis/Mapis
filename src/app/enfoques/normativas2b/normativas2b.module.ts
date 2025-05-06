import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativas2bPageRoutingModule } from './normativas2b-routing.module';

import { Normativas2bPage } from './normativas2b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativas2bPageRoutingModule
  ],
  declarations: [Normativas2bPage]
})
export class Normativas2bPageModule {}
