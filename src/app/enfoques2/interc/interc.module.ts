import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntercPageRoutingModule } from './interc-routing.module';

import { IntercPage } from './interc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntercPageRoutingModule
  ],
  declarations: [IntercPage]
})
export class IntercPageModule {}
