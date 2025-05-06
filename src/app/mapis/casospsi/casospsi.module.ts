import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasospsiPageRoutingModule } from './casospsi-routing.module';

import { CasospsiPage } from './casospsi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasospsiPageRoutingModule
  ],
  declarations: [CasospsiPage]
})
export class CasospsiPageModule {}
