import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Casospsi2aPage } from './casospsi2a.page';

const routes: Routes = [
  {
    path: '',
    component: Casospsi2aPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Casospsi2aPageRoutingModule {}
