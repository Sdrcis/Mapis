import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Casospsi2bPage } from './casospsi2b.page';

const routes: Routes = [
  {
    path: '',
    component: Casospsi2bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Casospsi2bPageRoutingModule {}
