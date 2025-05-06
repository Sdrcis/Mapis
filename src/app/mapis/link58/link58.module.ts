import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link58PageRoutingModule } from './link58-routing.module';

import { Link58Page } from './link58.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link58PageRoutingModule
  ],
  declarations: [Link58Page]
})
export class Link58PageModule {}
