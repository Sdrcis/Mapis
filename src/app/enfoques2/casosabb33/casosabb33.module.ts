import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Casosabb33PageRoutingModule } from './casosabb33-routing.module';

import { Casosabb33Page } from './casosabb33.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Casosabb33PageRoutingModule
  ],
  declarations: [Casosabb33Page]
})
export class Casosabb33PageModule {}
