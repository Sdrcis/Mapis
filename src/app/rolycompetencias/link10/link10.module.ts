import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link10PageRoutingModule } from './link10-routing.module';

import { Link10Page } from './link10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link10PageRoutingModule
  ],
  declarations: [Link10Page]
})
export class Link10PageModule {}
