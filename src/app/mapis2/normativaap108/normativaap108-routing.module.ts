import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap108Page } from './normativaap108.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap108Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap108PageRoutingModule {}
