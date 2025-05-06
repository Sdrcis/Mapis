import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Menu4Page } from './menu4.page';

const routes: Routes = [
  {
    path: '',
    component: Menu4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Menu4PageRoutingModule {}
