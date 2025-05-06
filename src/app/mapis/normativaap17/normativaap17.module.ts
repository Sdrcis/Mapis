import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap17PageRoutingModule } from './normativaap17-routing.module';

import { Normativaap17Page } from './normativaap17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap17PageRoutingModule
  ],
  declarations: [Normativaap17Page]
})
export class Normativaap17PageModule {}
