import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap104Page } from './normativaap104.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap104Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap104PageRoutingModule {}
