import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Menu6PageRoutingModule } from './menu6-routing.module';

import { Menu6Page } from './menu6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Menu6PageRoutingModule
  ],
  declarations: [Menu6Page]
})
export class Menu6PageModule {}
