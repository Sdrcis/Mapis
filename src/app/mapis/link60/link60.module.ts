import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link60PageRoutingModule } from './link60-routing.module';

import { Link60Page } from './link60.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link60PageRoutingModule
  ],
  declarations: [Link60Page]
})
export class Link60PageModule {}
