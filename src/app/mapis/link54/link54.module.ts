import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link54PageRoutingModule } from './link54-routing.module';

import { Link54Page } from './link54.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link54PageRoutingModule
  ],
  declarations: [Link54Page]
})
export class Link54PageModule {}
