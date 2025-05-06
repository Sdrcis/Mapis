import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pregmenu222PageRoutingModule } from './pregmenu222-routing.module';

import { Pregmenu222Page } from './pregmenu222.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pregmenu222PageRoutingModule
  ],
  declarations: [Pregmenu222Page]
})
export class Pregmenu222PageModule {}
