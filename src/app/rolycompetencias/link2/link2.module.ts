import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link2PageRoutingModule } from './link2-routing.module';

import { Link2Page } from './link2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link2PageRoutingModule
  ],
  declarations: [Link2Page]
})
export class Link2PageModule {}
