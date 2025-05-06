import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link52PageRoutingModule } from './link52-routing.module';

import { Link52Page } from './link52.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link52PageRoutingModule
  ],
  declarations: [Link52Page]
})
export class Link52PageModule {}
