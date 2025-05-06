import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otrolink23PageRoutingModule } from './otrolink23-routing.module';

import { Otrolink23Page } from './otrolink23.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otrolink23PageRoutingModule
  ],
  declarations: [Otrolink23Page]
})
export class Otrolink23PageModule {}
