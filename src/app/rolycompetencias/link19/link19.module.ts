import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link19PageRoutingModule } from './link19-routing.module';

import { Link19Page } from './link19.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link19PageRoutingModule
  ],
  declarations: [Link19Page]
})
export class Link19PageModule {}
