import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Link27PageRoutingModule } from './link27-routing.module';

import { Link27Page } from './link27.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Link27PageRoutingModule
  ],
  declarations: [Link27Page]
})
export class Link27PageModule {}
