import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link31PageRoutingModule } from './link31-routing.module';

import { Link31Page } from './link31.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link31PageRoutingModule
  ],
  declarations: [Link31Page]
})
export class Link31PageModule {}
