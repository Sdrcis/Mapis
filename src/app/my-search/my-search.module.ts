import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MySearchPageRoutingModule } from './my-search-routing.module';

import { MySearchPage } from './my-search.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MySearchPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [MySearchPage]
})
export class MySearchPageModule {



}
