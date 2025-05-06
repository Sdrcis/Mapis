import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink9PageRoutingModule } from './otrolink9-routing.module';

import { Otrolink9Page } from './otrolink9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink9PageRoutingModule
  ],
  declarations: [Otrolink9Page]
})
export class Otrolink9PageModule {}
