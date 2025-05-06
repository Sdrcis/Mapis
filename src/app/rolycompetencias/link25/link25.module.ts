import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link25PageRoutingModule } from './link25-routing.module';

import { Link25Page } from './link25.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link25PageRoutingModule
  ],
  declarations: [Link25Page]
})
export class Link25PageModule {}
