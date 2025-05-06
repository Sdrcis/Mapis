import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link3PageRoutingModule } from './link3-routing.module';

import { Link3Page } from './link3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link3PageRoutingModule
  ],
  declarations: [Link3Page]
})
export class Link3PageModule {}
