import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Casosfc33Page } from './casosfc33.page';

const routes: Routes = [
  {
    path: '',
    component: Casosfc33Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Casosfc33PageRoutingModule {}
