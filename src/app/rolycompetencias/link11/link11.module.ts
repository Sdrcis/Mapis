import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link11PageRoutingModule } from './link11-routing.module';

import { Link11Page } from './link11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link11PageRoutingModule
  ],
  declarations: [Link11Page]
})
export class Link11PageModule {}
