import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativas7cPage } from './normativas7c.page';

const routes: Routes = [
  {
    path: '',
    component: Normativas7cPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativas7cPageRoutingModule {}
