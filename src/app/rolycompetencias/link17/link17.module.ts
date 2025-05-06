import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link17PageRoutingModule } from './link17-routing.module';

import { Link17Page } from './link17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link17PageRoutingModule
  ],
  declarations: [Link17Page]
})
export class Link17PageModule {}
