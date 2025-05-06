import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap9Page } from './normativaap9.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap9PageRoutingModule {}
