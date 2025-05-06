import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Casossim2PageRoutingModule } from './casossim2-routing.module';

import { Casossim2Page } from './casossim2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Casossim2PageRoutingModule
  ],
  declarations: [Casossim2Page]
})
export class Casossim2PageModule {}
