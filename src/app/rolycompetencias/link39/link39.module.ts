import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link39PageRoutingModule } from './link39-routing.module';

import { Link39Page } from './link39.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link39PageRoutingModule
  ],
  declarations: [Link39Page]
})
export class Link39PageModule {}
