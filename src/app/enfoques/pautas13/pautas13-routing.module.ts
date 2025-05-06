import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas13Page } from './pautas13.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas13PageRoutingModule {}
