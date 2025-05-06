import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Normativaap42PageRoutingModule } from './normativaap42-routing.module';

import { Normativaap42Page } from './normativaap42.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Normativaap42PageRoutingModule
  ],
  declarations: [Normativaap42Page]
})
export class Normativaap42PageModule {}
