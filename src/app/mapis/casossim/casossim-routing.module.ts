import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasossimPage } from './casossim.page';

const routes: Routes = [
  {
    path: '',
    component: CasossimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasossimPageRoutingModule {}
