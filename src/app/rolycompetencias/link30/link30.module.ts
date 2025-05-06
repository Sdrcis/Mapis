import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link30PageRoutingModule } from './link30-routing.module';

import { Link30Page } from './link30.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link30PageRoutingModule
  ],
  declarations: [Link30Page]
})
export class Link30PageModule {}
