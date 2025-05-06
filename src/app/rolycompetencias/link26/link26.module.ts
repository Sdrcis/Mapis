import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link26PageRoutingModule } from './link26-routing.module';

import { Link26Page } from './link26.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link26PageRoutingModule
  ],
  declarations: [Link26Page]
})
export class Link26PageModule {}
