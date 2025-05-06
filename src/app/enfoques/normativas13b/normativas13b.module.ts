import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativas13bPageRoutingModule } from './normativas13b-routing.module';

import { Normativas13bPage } from './normativas13b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativas13bPageRoutingModule
  ],
  declarations: [Normativas13bPage]
})
export class Normativas13bPageModule {}
