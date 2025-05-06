import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link8PageRoutingModule } from './link8-routing.module';

import { Link8Page } from './link8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link8PageRoutingModule
  ],
  declarations: [Link8Page]
})
export class Link8PageModule {}
