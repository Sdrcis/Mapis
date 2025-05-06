import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link59PageRoutingModule } from './link59-routing.module';

import { Link59Page } from './link59.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link59PageRoutingModule
  ],
  declarations: [Link59Page]
})
export class Link59PageModule {}
