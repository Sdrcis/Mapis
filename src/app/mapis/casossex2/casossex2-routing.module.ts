import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Casossex2Page } from './casossex2.page';

const routes: Routes = [
  {
    path: '',
    component: Casossex2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Casossex2PageRoutingModule {}
