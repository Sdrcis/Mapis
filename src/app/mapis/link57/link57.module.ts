import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link57PageRoutingModule } from './link57-routing.module';

import { Link57Page } from './link57.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link57PageRoutingModule
  ],
  declarations: [Link57Page]
})
export class Link57PageModule {}
