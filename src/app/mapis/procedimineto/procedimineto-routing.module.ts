import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcediminetoPage } from './procedimineto.page';

const routes: Routes = [
  {
    path: '',
    component: ProcediminetoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcediminetoPageRoutingModule {}
