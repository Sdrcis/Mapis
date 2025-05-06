import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Menu8PageRoutingModule } from './menu8-routing.module';

import { Menu8Page } from './menu8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Menu8PageRoutingModule
  ],
  declarations: [Menu8Page]
})
export class Menu8PageModule {}
