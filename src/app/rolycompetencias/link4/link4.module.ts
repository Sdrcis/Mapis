import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link4PageRoutingModule } from './link4-routing.module';

import { Link4Page } from './link4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link4PageRoutingModule
  ],
  declarations: [Link4Page]
})
export class Link4PageModule {}
