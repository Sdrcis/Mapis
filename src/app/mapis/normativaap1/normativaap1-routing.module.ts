import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap1Page } from './normativaap1.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap1PageRoutingModule {}
