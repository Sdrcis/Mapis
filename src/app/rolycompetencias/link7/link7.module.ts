import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link7PageRoutingModule } from './link7-routing.module';

import { Link7Page } from './link7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link7PageRoutingModule
  ],
  declarations: [Link7Page]
})
export class Link7PageModule {}
