import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasossimbolicPageRoutingModule } from './casossimbolic-routing.module';

import { CasossimbolicPage } from './casossimbolic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasossimbolicPageRoutingModule
  ],
  declarations: [CasossimbolicPage]
})
export class CasossimbolicPageModule {}
