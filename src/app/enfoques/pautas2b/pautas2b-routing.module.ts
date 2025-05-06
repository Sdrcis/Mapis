import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas2bPage } from './pautas2b.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas2bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas2bPageRoutingModule {}
