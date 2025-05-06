import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntrafamiliarPageRoutingModule } from './intrafamiliar-routing.module';

import { IntrafamiliarPage } from './intrafamiliar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntrafamiliarPageRoutingModule
  ],
  declarations: [IntrafamiliarPage]
})
export class IntrafamiliarPageModule {}
