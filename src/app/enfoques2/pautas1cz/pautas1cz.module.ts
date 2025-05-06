import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas1czPageRoutingModule } from './pautas1cz-routing.module';

import { Pautas1czPage } from './pautas1cz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas1czPageRoutingModule
  ],
  declarations: [Pautas1czPage]
})
export class Pautas1czPageModule {}
