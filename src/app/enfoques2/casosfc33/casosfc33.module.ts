import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Casosfc33PageRoutingModule } from './casosfc33-routing.module';

import { Casosfc33Page } from './casosfc33.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Casosfc33PageRoutingModule
  ],
  declarations: [Casosfc33Page]
})
export class Casosfc33PageModule {}
