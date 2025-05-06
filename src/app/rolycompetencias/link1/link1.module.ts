import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link1PageRoutingModule } from './link1-routing.module';

import { Link1Page } from './link1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link1PageRoutingModule
  ],
  declarations: [Link1Page]
})
export class Link1PageModule {}
