import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link53PageRoutingModule } from './link53-routing.module';

import { Link53Page } from './link53.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link53PageRoutingModule
  ],
  declarations: [Link53Page]
})
export class Link53PageModule {}
