import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MySearch2PageRoutingModule } from './my-search2-routing.module';

import { MySearch2Page } from './my-search2.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MySearch2PageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [MySearch2Page]
})
export class MySearch2PageModule {}
