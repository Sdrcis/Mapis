import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasosccccPage } from './casoscccc.page';

const routes: Routes = [
  {
    path: '',
    component: CasosccccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasosccccPageRoutingModule {}
