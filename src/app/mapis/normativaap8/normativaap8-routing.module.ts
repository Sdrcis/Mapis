import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap8Page } from './normativaap8.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap8PageRoutingModule {}
