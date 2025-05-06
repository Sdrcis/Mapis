import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Casospoli2Page } from './casospoli2.page';

const routes: Routes = [
  {
    path: '',
    component: Casospoli2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Casospoli2PageRoutingModule {}
