import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasospoliPage } from './casospoli.page';

const routes: Routes = [
  {
    path: '',
    component: CasospoliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasospoliPageRoutingModule {}
