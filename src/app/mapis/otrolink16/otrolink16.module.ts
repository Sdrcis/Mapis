import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink16PageRoutingModule } from './otrolink16-routing.module';

import { Otrolink16Page } from './otrolink16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink16PageRoutingModule
  ],
  declarations: [Otrolink16Page]
})
export class Otrolink16PageModule {}
