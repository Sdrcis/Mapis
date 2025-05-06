import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas102Page } from './pautas102.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas102Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas102PageRoutingModule {}
