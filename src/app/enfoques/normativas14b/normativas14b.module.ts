import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativas14bPageRoutingModule } from './normativas14b-routing.module';

import { Normativas14bPage } from './normativas14b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativas14bPageRoutingModule
  ],
  declarations: [Normativas14bPage]
})
export class Normativas14bPageModule {}
