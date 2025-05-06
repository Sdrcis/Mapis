import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink18PageRoutingModule } from './otrolink18-routing.module';

import { Otrolink18Page } from './otrolink18.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink18PageRoutingModule
  ],
  declarations: [Otrolink18Page]
})
export class Otrolink18PageModule {}
