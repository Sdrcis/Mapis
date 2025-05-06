import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas12bPage } from './pautas12b.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas12bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas12bPageRoutingModule {}
