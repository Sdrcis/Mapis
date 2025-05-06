import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Casossim2zzPageRoutingModule } from './casossim2zz-routing.module';

import { Casossim2zzPage } from './casossim2zz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Casossim2zzPageRoutingModule
  ],
  declarations: [Casossim2zzPage]
})
export class Casossim2zzPageModule {}
