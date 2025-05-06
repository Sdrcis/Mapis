import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas7Page } from './pautas7.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas7PageRoutingModule {}
