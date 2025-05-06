import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink3PageRoutingModule } from './otrolink3-routing.module';

import { Otrolink3Page } from './otrolink3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink3PageRoutingModule
  ],
  declarations: [Otrolink3Page]
})
export class Otrolink3PageModule {}
