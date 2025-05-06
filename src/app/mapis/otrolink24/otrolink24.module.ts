import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink24PageRoutingModule } from './otrolink24-routing.module';

import { Otrolink24Page } from './otrolink24.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink24PageRoutingModule
  ],
  declarations: [Otrolink24Page]
})
export class Otrolink24PageModule {}
