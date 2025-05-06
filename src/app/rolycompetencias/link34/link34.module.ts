import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link34PageRoutingModule } from './link34-routing.module';

import { Link34Page } from './link34.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link34PageRoutingModule
  ],
  declarations: [Link34Page]
})
export class Link34PageModule {}
