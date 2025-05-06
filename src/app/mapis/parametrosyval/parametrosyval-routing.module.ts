import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParametrosyvalPage } from './parametrosyval.page';

const routes: Routes = [
  {
    path: '',
    component: ParametrosyvalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParametrosyvalPageRoutingModule {}
