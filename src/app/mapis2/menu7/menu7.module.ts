import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Menu7PageRoutingModule } from './menu7-routing.module';

import { Menu7Page } from './menu7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Menu7PageRoutingModule
  ],
  declarations: [Menu7Page]
})
export class Menu7PageModule {}
