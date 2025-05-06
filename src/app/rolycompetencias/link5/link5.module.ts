import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link5PageRoutingModule } from './link5-routing.module';

import { Link5Page } from './link5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link5PageRoutingModule
  ],
  declarations: [Link5Page]
})
export class Link5PageModule {}
