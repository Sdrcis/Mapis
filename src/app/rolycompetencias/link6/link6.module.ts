import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link6PageRoutingModule } from './link6-routing.module';

import { Link6Page } from './link6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link6PageRoutingModule
  ],
  declarations: [Link6Page]
})
export class Link6PageModule {}
