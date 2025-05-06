import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas72Page } from './pautas72.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas72Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas72PageRoutingModule {}
