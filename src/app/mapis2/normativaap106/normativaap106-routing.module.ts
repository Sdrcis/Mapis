import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap106Page } from './normativaap106.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap106Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap106PageRoutingModule {}
