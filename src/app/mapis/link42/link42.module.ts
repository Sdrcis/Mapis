import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link42PageRoutingModule } from './link42-routing.module';

import { Link42Page } from './link42.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link42PageRoutingModule
  ],
  declarations: [Link42Page]
})
export class Link42PageModule {}
