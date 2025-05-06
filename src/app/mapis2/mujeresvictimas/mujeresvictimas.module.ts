import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MujeresvictimasPageRoutingModule } from './mujeresvictimas-routing.module';

import { MujeresvictimasPage } from './mujeresvictimas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MujeresvictimasPageRoutingModule
  ],
  declarations: [MujeresvictimasPage]
})
export class MujeresvictimasPageModule {}
