import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink25PageRoutingModule } from './otrolink25-routing.module';

import { Otrolink25Page } from './otrolink25.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink25PageRoutingModule
  ],
  declarations: [Otrolink25Page]
})
export class Otrolink25PageModule {}
