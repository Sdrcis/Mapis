import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link56PageRoutingModule } from './link56-routing.module';

import { Link56Page } from './link56.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link56PageRoutingModule
  ],
  declarations: [Link56Page]
})
export class Link56PageModule {}
