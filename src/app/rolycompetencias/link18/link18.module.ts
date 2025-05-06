import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link18PageRoutingModule } from './link18-routing.module';

import { Link18Page } from './link18.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link18PageRoutingModule
  ],
  declarations: [Link18Page]
})
export class Link18PageModule {}
