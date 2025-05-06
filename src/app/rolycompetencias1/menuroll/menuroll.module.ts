import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenurollPageRoutingModule } from './menuroll-routing.module';

import { MenurollPage } from './menuroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenurollPageRoutingModule
  ],
  declarations: [MenurollPage]
})
export class MenurollPageModule {}
