import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link43PageRoutingModule } from './link43-routing.module';

import { Link43Page } from './link43.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link43PageRoutingModule
  ],
  declarations: [Link43Page]
})
export class Link43PageModule {}
