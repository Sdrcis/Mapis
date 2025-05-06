import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link40PageRoutingModule } from './link40-routing.module';

import { Link40Page } from './link40.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link40PageRoutingModule
  ],
  declarations: [Link40Page]
})
export class Link40PageModule {}
