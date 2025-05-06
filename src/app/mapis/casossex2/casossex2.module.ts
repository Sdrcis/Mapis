import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Casossex2PageRoutingModule } from './casossex2-routing.module';

import { Casossex2Page } from './casossex2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Casossex2PageRoutingModule
  ],
  declarations: [Casossex2Page]
})
export class Casossex2PageModule {}
