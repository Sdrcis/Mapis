import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link16PageRoutingModule } from './link16-routing.module';

import { Link16Page } from './link16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link16PageRoutingModule
  ],
  declarations: [Link16Page]
})
export class Link16PageModule {}
