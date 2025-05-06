import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link21PageRoutingModule } from './link21-routing.module';

import { Link21Page } from './link21.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link21PageRoutingModule
  ],
  declarations: [Link21Page]
})
export class Link21PageModule {}
