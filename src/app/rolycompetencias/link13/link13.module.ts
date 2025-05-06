import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link13PageRoutingModule } from './link13-routing.module';

import { Link13Page } from './link13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link13PageRoutingModule
  ],
  declarations: [Link13Page]
})
export class Link13PageModule {}
