import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link9PageRoutingModule } from './link9-routing.module';

import { Link9Page } from './link9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link9PageRoutingModule
  ],
  declarations: [Link9Page]
})
export class Link9PageModule {}
