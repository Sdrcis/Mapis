import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link49PageRoutingModule } from './link49-routing.module';

import { Link49Page } from './link49.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link49PageRoutingModule
  ],
  declarations: [Link49Page]
})
export class Link49PageModule {}
