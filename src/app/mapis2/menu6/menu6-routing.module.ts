import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Menu6Page } from './menu6.page';

const routes: Routes = [
  {
    path: '',
    component: Menu6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Menu6PageRoutingModule {}
