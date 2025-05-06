import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Casosgineco2zzPageRoutingModule } from './casosgineco2zz-routing.module';

import { Casosgineco2zzPage } from './casosgineco2zz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Casosgineco2zzPageRoutingModule
  ],
  declarations: [Casosgineco2zzPage]
})
export class Casosgineco2zzPageModule {}
