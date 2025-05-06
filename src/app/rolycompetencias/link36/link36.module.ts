import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link36PageRoutingModule } from './link36-routing.module';

import { Link36Page } from './link36.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link36PageRoutingModule
  ],
  declarations: [Link36Page]
})
export class Link36PageModule {}
