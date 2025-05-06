import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasosfcPage } from './casosfc.page';

const routes: Routes = [
  {
    path: '',
    component: CasosfcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasosfcPageRoutingModule {}
