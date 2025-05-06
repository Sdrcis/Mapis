import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pregmenu2PageRoutingModule } from './pregmenu2-routing.module';

import { Pregmenu2Page } from './pregmenu2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pregmenu2PageRoutingModule
  ],
  declarations: [Pregmenu2Page]
})
export class Pregmenu2PageModule {}
