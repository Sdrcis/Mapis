import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link46PageRoutingModule } from './link46-routing.module';

import { Link46Page } from './link46.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link46PageRoutingModule
  ],
  declarations: [Link46Page]
})
export class Link46PageModule {}
