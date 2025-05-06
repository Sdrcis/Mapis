import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link14PageRoutingModule } from './link14-routing.module';

import { Link14Page } from './link14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link14PageRoutingModule
  ],
  declarations: [Link14Page]
})
export class Link14PageModule {}
