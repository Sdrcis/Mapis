import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap22Page } from './normativaap22.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap22Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap22PageRoutingModule {}
