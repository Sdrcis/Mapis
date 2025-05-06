import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativas10bPageRoutingModule } from './normativas10b-routing.module';

import { Normativas10bPage } from './normativas10b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativas10bPageRoutingModule
  ],
  declarations: [Normativas10bPage]
})
export class Normativas10bPageModule {}
