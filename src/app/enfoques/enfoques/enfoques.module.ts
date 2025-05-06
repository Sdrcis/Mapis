import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnfoquesPageRoutingModule } from './enfoques-routing.module';

import { EnfoquesPage } from './enfoques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnfoquesPageRoutingModule
  ],
  declarations: [EnfoquesPage]
})
export class EnfoquesPageModule {}
