import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link20PageRoutingModule } from './link20-routing.module';

import { Link20Page } from './link20.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link20PageRoutingModule
  ],
  declarations: [Link20Page]
})
export class Link20PageModule {}
