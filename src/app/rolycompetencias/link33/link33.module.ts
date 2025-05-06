import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link33PageRoutingModule } from './link33-routing.module';

import { Link33Page } from './link33.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link33PageRoutingModule
  ],
  declarations: [Link33Page]
})
export class Link33PageModule {}
