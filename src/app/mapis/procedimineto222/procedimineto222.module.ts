import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Procedimineto222PageRoutingModule } from './procedimineto222-routing.module';

import { Procedimineto222Page } from './procedimineto222.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Procedimineto222PageRoutingModule
  ],
  declarations: [Procedimineto222Page]
})
export class Procedimineto222PageModule {}
