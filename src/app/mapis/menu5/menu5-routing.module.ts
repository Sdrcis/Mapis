import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Menu5Page } from './menu5.page';

const routes: Routes = [
  {
    path: '',
    component: Menu5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Menu5PageRoutingModule {}
