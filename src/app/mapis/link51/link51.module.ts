import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link51PageRoutingModule } from './link51-routing.module';

import { Link51Page } from './link51.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link51PageRoutingModule
  ],
  declarations: [Link51Page]
})
export class Link51PageModule {}
