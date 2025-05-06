import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativas4cPage } from './normativas4c.page';

const routes: Routes = [
  {
    path: '',
    component: Normativas4cPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativas4cPageRoutingModule {}
