import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasosfbPage } from './casosfb.page';

const routes: Routes = [
  {
    path: '',
    component: CasosfbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasosfbPageRoutingModule {}
