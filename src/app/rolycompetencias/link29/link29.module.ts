import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link29PageRoutingModule } from './link29-routing.module';

import { Link29Page } from './link29.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link29PageRoutingModule
  ],
  declarations: [Link29Page]
})
export class Link29PageModule {}
