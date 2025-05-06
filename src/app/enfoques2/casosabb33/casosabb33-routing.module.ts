import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Casosabb33Page } from './casosabb33.page';

const routes: Routes = [
  {
    path: '',
    component: Casosabb33Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Casosabb33PageRoutingModule {}
