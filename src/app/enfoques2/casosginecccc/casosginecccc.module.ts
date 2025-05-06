import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasosgineccccPageRoutingModule } from './casosginecccc-routing.module';

import { CasosgineccccPage } from './casosginecccc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasosgineccccPageRoutingModule
  ],
  declarations: [CasosgineccccPage]
})
export class CasosgineccccPageModule {}
