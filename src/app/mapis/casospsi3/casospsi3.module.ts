import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Casospsi3PageRoutingModule } from './casospsi3-routing.module';

import { Casospsi3Page } from './casospsi3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Casospsi3PageRoutingModule
  ],
  declarations: [Casospsi3Page]
})
export class Casospsi3PageModule {}
