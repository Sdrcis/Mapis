import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap5Page } from './normativaap5.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap5PageRoutingModule {}
