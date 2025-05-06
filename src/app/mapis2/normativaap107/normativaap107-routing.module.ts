import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap107Page } from './normativaap107.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap107Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap107PageRoutingModule {}
