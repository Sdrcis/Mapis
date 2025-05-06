import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap7Page } from './normativaap7.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap7PageRoutingModule {}
