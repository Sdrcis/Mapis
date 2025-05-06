import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Menu7Page } from './menu7.page';

const routes: Routes = [
  {
    path: '',
    component: Menu7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Menu7PageRoutingModule {}
