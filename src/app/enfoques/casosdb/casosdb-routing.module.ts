import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasosdbPage } from './casosdb.page';

const routes: Routes = [
  {
    path: '',
    component: CasosdbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasosdbPageRoutingModule {}
