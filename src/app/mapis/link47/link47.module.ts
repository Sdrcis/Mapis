import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link47PageRoutingModule } from './link47-routing.module';

import { Link47Page } from './link47.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link47PageRoutingModule
  ],
  declarations: [Link47Page]
})
export class Link47PageModule {}
