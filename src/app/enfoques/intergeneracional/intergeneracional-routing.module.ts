import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntergeneracionalPage } from './intergeneracional.page';

const routes: Routes = [
  {
    path: '',
    component: IntergeneracionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntergeneracionalPageRoutingModule {}
