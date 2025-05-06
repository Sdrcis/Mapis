import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link32PageRoutingModule } from './link32-routing.module';

import { Link32Page } from './link32.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link32PageRoutingModule
  ],
  declarations: [Link32Page]
})
export class Link32PageModule {}
