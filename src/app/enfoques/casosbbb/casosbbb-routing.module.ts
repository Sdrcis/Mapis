import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasosbbbPage } from './casosbbb.page';

const routes: Routes = [
  {
    path: '',
    component: CasosbbbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasosbbbPageRoutingModule {}
