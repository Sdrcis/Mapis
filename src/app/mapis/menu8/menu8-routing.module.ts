import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Menu8Page } from './menu8.page';

const routes: Routes = [
  {
    path: '',
    component: Menu8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Menu8PageRoutingModule {}
