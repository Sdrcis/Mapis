import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Menu5PageRoutingModule } from './menu5-routing.module';

import { Menu5Page } from './menu5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Menu5PageRoutingModule
  ],
  declarations: [Menu5Page]
})
export class Menu5PageModule {}
