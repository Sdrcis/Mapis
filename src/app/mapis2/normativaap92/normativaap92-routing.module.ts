import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap92Page } from './normativaap92.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap92Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap92PageRoutingModule {}
