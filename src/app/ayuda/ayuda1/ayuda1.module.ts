import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ayuda1PageRoutingModule } from './ayuda1-routing.module';

import { Ayuda1Page } from './ayuda1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ayuda1PageRoutingModule
  ],
  declarations: [Ayuda1Page]
})
export class Ayuda1PageModule {}
