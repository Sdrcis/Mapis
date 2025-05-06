import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Menu4PageRoutingModule } from './menu4-routing.module';

import { Menu4Page } from './menu4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Menu4PageRoutingModule
  ],
  declarations: [Menu4Page]
})
export class Menu4PageModule {}
