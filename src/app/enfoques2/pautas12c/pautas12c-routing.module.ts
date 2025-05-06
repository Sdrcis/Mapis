import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas12cPage } from './pautas12c.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas12cPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas12cPageRoutingModule {}
