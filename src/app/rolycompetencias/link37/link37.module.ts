import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link37PageRoutingModule } from './link37-routing.module';

import { Link37Page } from './link37.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link37PageRoutingModule
  ],
  declarations: [Link37Page]
})
export class Link37PageModule {}
