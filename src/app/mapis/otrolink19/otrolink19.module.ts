import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink19PageRoutingModule } from './otrolink19-routing.module';

import { Otrolink19Page } from './otrolink19.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink19PageRoutingModule
  ],
  declarations: [Otrolink19Page]
})
export class Otrolink19PageModule {}
