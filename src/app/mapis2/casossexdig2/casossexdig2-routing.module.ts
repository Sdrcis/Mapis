import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Casossexdig2Page } from './casossexdig2.page';

const routes: Routes = [
  {
    path: '',
    component: Casossexdig2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Casossexdig2PageRoutingModule {}
