import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmbitoPageRoutingModule } from './ambito-routing.module';

import { AmbitoPage } from './ambito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmbitoPageRoutingModule
  ],
  declarations: [AmbitoPage]
})
export class AmbitoPageModule {}
