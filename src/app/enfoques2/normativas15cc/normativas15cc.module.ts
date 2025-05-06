import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativas15ccPageRoutingModule } from './normativas15cc-routing.module';

import { Normativas15ccPage } from './normativas15cc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativas15ccPageRoutingModule
  ],
  declarations: [Normativas15ccPage]
})
export class Normativas15ccPageModule {}
