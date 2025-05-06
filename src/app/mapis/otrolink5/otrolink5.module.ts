import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink5PageRoutingModule } from './otrolink5-routing.module';

import { Otrolink5Page } from './otrolink5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink5PageRoutingModule
  ],
  declarations: [Otrolink5Page]
})
export class Otrolink5PageModule {}
