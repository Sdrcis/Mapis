import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link50PageRoutingModule } from './link50-routing.module';

import { Link50Page } from './link50.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link50PageRoutingModule
  ],
  declarations: [Link50Page]
})
export class Link50PageModule {}
