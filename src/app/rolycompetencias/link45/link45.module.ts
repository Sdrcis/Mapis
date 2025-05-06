import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link45PageRoutingModule } from './link45-routing.module';

import { Link45Page } from './link45.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link45PageRoutingModule
  ],
  declarations: [Link45Page]
})
export class Link45PageModule {}
