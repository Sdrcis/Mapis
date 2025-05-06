import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PregmenuPageRoutingModule } from './pregmenu-routing.module';

import { PregmenuPage } from './pregmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PregmenuPageRoutingModule
  ],
  declarations: [PregmenuPage]
})
export class PregmenuPageModule {}
