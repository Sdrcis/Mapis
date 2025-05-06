import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink15PageRoutingModule } from './otrolink15-routing.module';

import { Otrolink15Page } from './otrolink15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink15PageRoutingModule
  ],
  declarations: [Otrolink15Page]
})
export class Otrolink15PageModule {}
