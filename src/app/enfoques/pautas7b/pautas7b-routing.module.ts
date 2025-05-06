import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas7bPage } from './pautas7b.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas7bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas7bPageRoutingModule {}
