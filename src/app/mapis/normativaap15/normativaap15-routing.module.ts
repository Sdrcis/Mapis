import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap15Page } from './normativaap15.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap15PageRoutingModule {}
