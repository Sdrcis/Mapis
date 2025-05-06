import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap105Page } from './normativaap105.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap105Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap105PageRoutingModule {}
