import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link28PageRoutingModule } from './link28-routing.module';

import { Link28Page } from './link28.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link28PageRoutingModule
  ],
  declarations: [Link28Page]
})
export class Link28PageModule {}
