import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas4bPage } from './pautas4b.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas4bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas4bPageRoutingModule {}
