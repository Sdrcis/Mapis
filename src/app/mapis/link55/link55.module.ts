import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link55PageRoutingModule } from './link55-routing.module';

import { Link55Page } from './link55.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link55PageRoutingModule
  ],
  declarations: [Link55Page]
})
export class Link55PageModule {}
