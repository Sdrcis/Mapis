import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MediaticoPageRoutingModule } from './mediatico-routing.module';

import { MediaticoPage } from './mediatico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MediaticoPageRoutingModule
  ],
  declarations: [MediaticoPage]
})
export class MediaticoPageModule {}
