import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntergeneracionalPageRoutingModule } from './intergeneracional-routing.module';

import { IntergeneracionalPage } from './intergeneracional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntergeneracionalPageRoutingModule
  ],
  declarations: [IntergeneracionalPage]
})
export class IntergeneracionalPageModule {}
