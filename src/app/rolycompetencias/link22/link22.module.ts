import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link22PageRoutingModule } from './link22-routing.module';

import { Link22Page } from './link22.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link22PageRoutingModule
  ],
  declarations: [Link22Page]
})
export class Link22PageModule {}
