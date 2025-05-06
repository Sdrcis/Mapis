import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas92Page } from './pautas92.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas92Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas92PageRoutingModule {}
