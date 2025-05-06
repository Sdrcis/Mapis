import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas1bPage } from './pautas1b.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas1bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas1bPageRoutingModule {}
