import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativas10cPage } from './normativas10c.page';

const routes: Routes = [
  {
    path: '',
    component: Normativas10cPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativas10cPageRoutingModule {}
