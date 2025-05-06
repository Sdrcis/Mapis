import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ayuda3PageRoutingModule } from './ayuda3-routing.module';

import { Ayuda3Page } from './ayuda3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ayuda3PageRoutingModule
  ],
  declarations: [Ayuda3Page]
})
export class Ayuda3PageModule {}
