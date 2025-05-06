import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasosecoPage } from './casoseco.page';

const routes: Routes = [
  {
    path: '',
    component: CasosecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasosecoPageRoutingModule {}
