import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Menu9PageRoutingModule } from './menu9-routing.module';

import { Menu9Page } from './menu9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Menu9PageRoutingModule
  ],
  declarations: [Menu9Page]
})
export class Menu9PageModule {}
