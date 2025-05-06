import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViolenciafisicazzPageRoutingModule } from './violenciafisicazz-routing.module';

import { ViolenciafisicazzPage } from './violenciafisicazz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViolenciafisicazzPageRoutingModule
  ],
  declarations: [ViolenciafisicazzPage]
})
export class ViolenciafisicazzPageModule {}
