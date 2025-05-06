import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasoshcPage } from './casoshc.page';

const routes: Routes = [
  {
    path: '',
    component: CasoshcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasoshcPageRoutingModule {}
