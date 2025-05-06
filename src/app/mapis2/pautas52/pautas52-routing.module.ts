import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas52Page } from './pautas52.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas52Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas52PageRoutingModule {}
