import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViolenciometroPage } from './violenciometro.page';

const routes: Routes = [
  {
    path: '',
    component: ViolenciometroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViolenciometroPageRoutingModule {}
