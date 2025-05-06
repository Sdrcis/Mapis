import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap72Page } from './normativaap72.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap72Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap72PageRoutingModule {}
