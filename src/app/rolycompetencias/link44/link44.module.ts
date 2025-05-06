import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link44PageRoutingModule } from './link44-routing.module';

import { Link44Page } from './link44.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link44PageRoutingModule
  ],
  declarations: [Link44Page]
})
export class Link44PageModule {}
