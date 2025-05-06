import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasosgcPageRoutingModule } from './casosgc-routing.module';

import { CasosgcPage } from './casosgc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasosgcPageRoutingModule
  ],
  declarations: [CasosgcPage]
})
export class CasosgcPageModule {}
