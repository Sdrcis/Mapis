import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link12PageRoutingModule } from './link12-routing.module';

import { Link12Page } from './link12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link12PageRoutingModule
  ],
  declarations: [Link12Page]
})
export class Link12PageModule {}
