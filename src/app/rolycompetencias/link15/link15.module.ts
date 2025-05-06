import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link15PageRoutingModule } from './link15-routing.module';

import { Link15Page } from './link15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link15PageRoutingModule
  ],
  declarations: [Link15Page]
})
export class Link15PageModule {}
