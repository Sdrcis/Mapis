import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link24PageRoutingModule } from './link24-routing.module';

import { Link24Page } from './link24.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link24PageRoutingModule
  ],
  declarations: [Link24Page]
})
export class Link24PageModule {}
