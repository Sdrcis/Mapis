import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasosabPage } from './casosab.page';

const routes: Routes = [
  {
    path: '',
    component: CasosabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasosabPageRoutingModule {}
