import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas15Page } from './pautas15.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas15PageRoutingModule {}
