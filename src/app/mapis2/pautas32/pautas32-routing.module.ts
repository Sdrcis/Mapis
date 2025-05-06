import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas32Page } from './pautas32.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas32Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas32PageRoutingModule {}
