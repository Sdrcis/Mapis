import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgChartsModule } from 'ng2-charts';

import { ViolenciometroPageRoutingModule } from './violenciometro-routing.module';

import { ViolenciometroPage } from './violenciometro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgChartsModule,
    ViolenciometroPageRoutingModule,
  ],
  declarations: [ViolenciometroPage],
})
export class ViolenciometroPageModule {}
