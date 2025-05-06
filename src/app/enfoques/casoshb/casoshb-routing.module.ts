import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasoshbPage } from './casoshb.page';

const routes: Routes = [
  {
    path: '',
    component: CasoshbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasoshbPageRoutingModule {}
