import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link38PageRoutingModule } from './link38-routing.module';

import { Link38Page } from './link38.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link38PageRoutingModule
  ],
  declarations: [Link38Page]
})
export class Link38PageModule {}
