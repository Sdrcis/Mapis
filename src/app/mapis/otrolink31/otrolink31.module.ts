import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink31PageRoutingModule } from './otrolink31-routing.module';

import { Otrolink31Page } from './otrolink31.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink31PageRoutingModule
  ],
  declarations: [Otrolink31Page]
})
export class Otrolink31PageModule {}
