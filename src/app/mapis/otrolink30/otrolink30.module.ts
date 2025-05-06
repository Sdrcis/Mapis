import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink30PageRoutingModule } from './otrolink30-routing.module';

import { Otrolink30Page } from './otrolink30.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink30PageRoutingModule
  ],
  declarations: [Otrolink30Page]
})
export class Otrolink30PageModule {}
