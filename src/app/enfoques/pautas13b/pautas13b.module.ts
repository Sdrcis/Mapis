import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pautas13bPageRoutingModule } from './pautas13b-routing.module';

import { Pautas13bPage } from './pautas13b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pautas13bPageRoutingModule
  ],
  declarations: [Pautas13bPage]
})
export class Pautas13bPageModule {}
