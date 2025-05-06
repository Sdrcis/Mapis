import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativas1bPageRoutingModule } from './normativas1b-routing.module';

import { Normativas1bPage } from './normativas1b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativas1bPageRoutingModule
  ],
  declarations: [Normativas1bPage]
})
export class Normativas1bPageModule {}
