import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Menu9Page } from './menu9.page';

const routes: Routes = [
  {
    path: '',
    component: Menu9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Menu9PageRoutingModule {}
