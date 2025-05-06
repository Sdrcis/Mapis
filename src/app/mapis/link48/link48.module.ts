import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link48PageRoutingModule } from './link48-routing.module';

import { Link48Page } from './link48.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link48PageRoutingModule
  ],
  declarations: [Link48Page]
})
export class Link48PageModule {}
