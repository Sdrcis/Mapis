import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas15ccPage } from './pautas15cc.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas15ccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas15ccPageRoutingModule {}
