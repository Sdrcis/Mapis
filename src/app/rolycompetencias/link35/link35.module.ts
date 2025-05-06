import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link35PageRoutingModule } from './link35-routing.module';

import { Link35Page } from './link35.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link35PageRoutingModule
  ],
  declarations: [Link35Page]
})
export class Link35PageModule {}
