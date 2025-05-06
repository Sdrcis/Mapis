import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativas1czPageRoutingModule } from './normativas1cz-routing.module';

import { Normativas1czPage } from './normativas1cz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativas1czPageRoutingModule
  ],
  declarations: [Normativas1czPage]
})
export class Normativas1czPageModule {}
