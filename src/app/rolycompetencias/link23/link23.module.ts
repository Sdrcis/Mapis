import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link23PageRoutingModule } from './link23-routing.module';

import { Link23Page } from './link23.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link23PageRoutingModule
  ],
  declarations: [Link23Page]
})
export class Link23PageModule {}
