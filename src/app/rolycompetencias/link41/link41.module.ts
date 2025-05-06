import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link41PageRoutingModule } from './link41-routing.module';

import { Link41Page } from './link41.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link41PageRoutingModule
  ],
  declarations: [Link41Page]
})
export class Link41PageModule {}
