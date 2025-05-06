import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Casosabb88PageRoutingModule } from './casosabb88-routing.module';

import { Casosabb88Page } from './casosabb88.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Casosabb88PageRoutingModule
  ],
  declarations: [Casosabb88Page]
})
export class Casosabb88PageModule {}
